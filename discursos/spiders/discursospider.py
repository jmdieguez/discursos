import scrapy, re, csv
from datetime import datetime

presidentes_info = [
    {
        'presidente': 'Mauricio Macri',
        'desde': '10/12/2015',
        'hasta': '10/12/2019'
    },
    {
        'presidente': 'Alberto Fernández',
        'desde': '10/12/2019',
        'hasta': 'Presente'
    }
]

presidentes = ["Mauricio Macri", "Alberto Fernández"]
meses = {
            'enero': '01',
            'febrero': '02',
            'marzo': '03',
            'abril': '04',
            'mayo': '05',
            'junio': '06',
            'julio': '07',
            'agosto': '08',
            'septiembre': '09',
            'octubre': '10',
            'noviembre': '11',
            'diciembre': '12'
        }

def obtener_orador(titulo, fecha):    
    orador = next((presidente for presidente in presidentes if presidente in titulo), 'Indefinido')
    
    if orador == 'Indefinido' and fecha is not None:
        for info in presidentes_info:
            desde = datetime.strptime(info['desde'], '%d/%m/%Y')
            hasta = datetime.now() if info['hasta'] == 'Presente' else datetime.strptime(info['hasta'], '%d/%m/%Y')
            fecha_discurso = datetime.strptime(fecha, '%d/%m/%Y')

            if desde <= fecha_discurso <= hasta:
                orador = info['presidente']
                break

    return orador

def limpiar_pagrafo(pagrafo):
    lista = ['\xa0', '(APLAUSOS)', '(INAUDIBLE)', '(APLAUSO)', '\r', '\r\n', '\n', 'PERIODISTA.- ', 'PRESIDENTE.- ', '(…)']
    for i in lista:
        pagrafo = pagrafo.replace(i, '')
    return pagrafo

def parsear_fecha(fecha):
    # Definir el patrón de expresión regular para extraer la fecha
    patron = r'(\w+)\s(\d+) de (\w+) de (\d+)'
    matches = re.search(patron, fecha, re.IGNORECASE)

    if matches:
        dia = matches.group(2)
        mes = matches.group(3)
        año = matches.group(4)
        return f"{dia.zfill(2)}/{meses[mes]}/{año}"
    else:
        return None

class DiscursoSpider(scrapy.Spider):
    name = "discursospider"
    allowed_domains = ["www.casarosada.gob.ar"]
    start_urls = ["https://www.casarosada.gob.ar/informacion/discursos"]
    
    def __init__(self, *args, **kwargs):
        super(DiscursoSpider, self).__init__(*args, **kwargs)
        self.data_list = []

    def parse(self, response):
        items = response.css('div.item[itemprop="blogPost"][itemscope][itemtype="http://schema.org/BlogPosting"]')
            
        for item in items:
            href = item.css('a.panel::attr(href)').get()
            yield response.follow(href, callback=self.parse_item)

        if response.css('li.pagination-next'):
            siguiente_url = response.urljoin(response.css('li.pagination-next a::attr(href)').get())
            yield scrapy.Request(siguiente_url, callback=self.parse)

    def parse_item(self, response):
        discurso = response.css('div.col-md-8.col-md-offset-2')
        pagrafos = discurso.css('p::text').getall()
        texto = [limpiar_pagrafo(pagrafo) for pagrafo in pagrafos if pagrafo.strip()]
        texto_final = ' '.join(texto)
        
        fecha = parsear_fecha(response.css('time.pull-right::text').get())
        titulo = response.css('title::text').get()

        orador = obtener_orador(titulo, fecha)

        if (orador != "Indefinido") and (len(texto_final) > 0):
            data = {
                'orador': orador,
                'fecha': fecha,
                'discurso': texto_final
            }
        
            self.data_list.append(data)
            yield data

    def close(self, reason):
        with open('discursos.csv', mode='w', newline='', encoding='utf-8') as file:
            writer = csv.DictWriter(file, fieldnames=['orador', 'fecha', 'discurso'])
            writer.writeheader()
            writer.writerows(self.data_list)

if __name__ == "__main__":
    process = CrawlerProcess()
    process.crawl(DiscursoSpider)
    process.start()