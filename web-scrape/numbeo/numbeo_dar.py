# -*- coding: utf-8 -*-
import scrapy


class NumbeoSpider(scrapy.Spider):
    name = 'numbeo_dar'
    allowed_domains = ['numbeo.com']
    start_urls = ['https://www.numbeo.com/cost-of-living/in/Dar-Es-Salaam']

    def parse(self, response):
        self.log('I just visited: ' + response.url)
        for prodPrice in response.css('table tr'):

            product_name = prodPrice.css('td::text').extract_first()
            price = prodPrice.css('td.priceValue::text').extract()
           
            item = {
                'product_name': str(product_name).strip("[]'\\n").strip('\\xa0TSh').strip(),
                'price': str(price).strip("[]'\\n").strip('\\xa0TSh').strip()
            }

            yield item
