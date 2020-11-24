#Dependencies
from splinter import Browser
from bs4 import BeautifulSoup
import pandas as pd 
import requests
import pymongo

def init_browser():
    executable_path = {"executable_path": "chromedriver.exe"}
    return Browser("chrome", **executable_path, headless=False)

url = "https://dailyfx.com/bitcoin"

def scrape():

    #Bitcoin News URL
    url = 'https://dailyfx.com/bitcoin'
 
    r = requests.get(url)
    soup = BeautifulSoup(r.content, features = 'lxml')

    articles = soup.findAll("a", class_="dfx-articleListItem jsdfx-articleListItem d-flex mb-3")
    #import pdb; pdb.set_trace()

    #looping through soup response
    for a in articles:
        title = a.find("span", class_="dfx-articleListItem__title jsdfx-articleListItem__title font-weight-bold align-middle").text.strip()
        link = a["href"]        #.find("a", class_="dfx-articleListItem jsdfx-articleListItem d-flex mb-3")['href']
        published = a.find("span", class_="jsdfx-articleListItem__date text-nowrap")
        import pdb; pdb.set_trace()

        article = {
            'title': title,
            'link': link,
            'published': published,
            #'img': image
        }

    return print(article)



print('Start scraping')
scrape()
print("Finished Scraping")