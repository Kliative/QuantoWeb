# -*- coding: utf-8 -*-
import scrapy


class ExpatistanSpider(scrapy.Spider):
    name = 'numbeo_dar'
    allowed_domains = ['expatistan.com']
    start_urls = ['https://www.expatistan.com/cost-of-living/Dar-Es-Salaam']

    def parse(self, response):
        self.log('I just visited: ' + response.url)
        for prodPrice in response.css('table tr'):

            product_name = prodPrice.css('td.item-name a::text').extract_first()
            price = prodPrice.css('td.price::text').extract_first()
            
            item = {
                'product_name': str(product_name).strip(),
                'price': str(price).strip().strip(' Shilling')
            }

            yield item
