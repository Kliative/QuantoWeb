# -*- coding: utf-8 -*-
import scrapy


class NumbeoSpider(scrapy.Spider):
    name = 'numbeo'
    allowed_domains = ['numbeo.com']
    start_urls = ['https://www.numbeo.com/cost-of-living/in/Dar-Es-Salaam']

    def parse(self, response):
        self.log('I just visited: ' + response.url)
        yield {
            'product_name': response.css('td.tr_highlighted::text').extract_first(),
            'price': response.css('td.priceValue::text').extract_first()
        }
