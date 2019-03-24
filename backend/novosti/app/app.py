from flask import Flask
from flask_cors import CORS
from flask_pymongo import PyMongo
from config import dev_config, pro_config

app = Flask(__name__)

dev_config(app)

mongo = PyMongo(app)

CORS(app)


@app.route("/test")
def root():
    return "<h1>Test route works</h1>"


@app.route("/service/news/get")
def get():
    pass


@app.route("/service/news/post")
def post():
    pass


@app.route("/service/news/put")
def put():
    pass


@app.route("/service/news/delete")
def delete():
    pass


if "__main__" == __name__:
    app.run(host="0.0.0.0")
