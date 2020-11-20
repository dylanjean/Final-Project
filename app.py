# Import Dependencies
from flask import Flask, render_template, redirect
from flask_pymongo import PyMongo
import pymongo
import coin_scraping
import os 
import sqlalchemy
import json

# Flask Setup

app = Flask(__name__)

app.config["MONGO_URI"] = "mongodb://localhost:27017/bitcoin_app"
mongo = PyMongo(app)

conn = 'mongodb://localhost:27017'
client = pymongo.MongoClient(conn)

# set database 
db=client.mars_app

@app.route("/")
#This route can be edited to reflect machine learning addition
def index():
    return render_template("index.html")

@app.route("/news")
def scrape():
    coin = mongo.db.bitcoin_dict
    coin_data = coin_scraping.scrape()
    
    #Updating Mongodb using update and upsert
    coin.update({}, coin_data, upsert=True)
    
    return redirect("/", code = 302)

if __name__ == '__main__':
    app.run(debug=True)