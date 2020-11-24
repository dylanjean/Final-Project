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

    result = soup.findAll("a", class_="dfx-articleListItem jsdfx-articleListItem d-flex mb-3")
    # import pdb; pdb.set_trace()
    
    try:
        # Identify and return title of listing
        title = result.find("span", class_="dfx-articleListItem__title jsdfx-articleListItem__title font-weight-bold align-middle").text.strip()
        # Identify and return price of listing
        link = result["href"]
        # Identify and return link to listing
        published = result.find("span", class_="jsdfx-articleListItem__date text-nowrap").text
        # Print results only if title, price, and link are available
        if (title and link and published):
            print('-------------')
            print(title)
            print(link)
            print(published)
    except AttributeError as e:
        print(e)

print('Start scraping')
scrape()
print("Finished Scraping")