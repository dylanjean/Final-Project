# Import Dependencies

from flask import Flask, render_template
import sqlalchemy
import json

# Flask Setup

app = Flask(__name__)

@app.route("/")
def init():
    return render_template("index.html")




if __name__ == '__main__':
    app.run(debug=True)