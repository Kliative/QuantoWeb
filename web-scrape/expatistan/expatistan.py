# -*- coding: utf-8 -*-
import scrapy


class NumbeoSpider(scrapy.Spider):
    name = 'expatistan'
    allowed_domains = ['expatistan.com']
    start_urls = ['https://www.expatistan.com/cost-of-living/Dar-Es-Salaam']

    def parse(self, response):
        self.log('I just visited: ' + response.url)
        yield {
            'product_name': response.css('table tr td::text').extract()
        }
