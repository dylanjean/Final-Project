# Import Dependencies
from flask import Flask, render_template, redirect, request
from flask_pymongo import PyMongo
import pymongo
# import coin_scraping
import os 
# import sqlalchemy
import json
from tensorflow import keras
# Flask Setup

model = keras.models.load_model("yellow")

app = Flask(__name__)

app.config["MONGO_URI"] = "mongodb://localhost:27017/bitcoin_app"
mongo = PyMongo(app)

conn = 'mongodb://localhost:27017'
client = pymongo.MongoClient(conn)

# set database 
db=client.bitcoin_app

@app.route("/")
#This route can be edited to reflect machine learning addition
def index():
    return render_template("index.html")

@app.route("/news")
def news():
    return render_template("news.html")


@app.route("/history")
def history_page():
    return render_template("history.html")

@app.route("/comparison")
def comparison():
    return render_template("comparison.html")

@app.route('/predict', methods=['POST'])
def predict():
    high = float(request.form['high'])
    low = float(request.form['low'])
    prediction = model.predict([[high, low]])[0][0]
    return render_template("predict.html",prediction=prediction)


if __name__ == '__main__':
    app.run(debug=True)