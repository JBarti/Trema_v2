from flask import Flask, request, render_template
from flask_cors import CORS
from flask_pymongo import PyMongo
from .config import dev_config, pro_config
from .modules import NewsController
from .auth import authorize

app = Flask(__name__)

dev_config(app)

mongo = PyMongo(app)

CORS(app)

controller = NewsController(mongo.db)


@app.route("/nevergonnagiveyouup")
def root():
    return render_template('index.html')


@app.route("/news")
def get():
    args = request.args
    resp = controller.get_data(args)
    return resp


@app.route("/news", methods=["POST"])
@authorize
def post():
    data = request.get_json()
    resp = controller.post_data(data)
    return resp


@app.route("/news", methods=["PUT"])
@authorize
def put():
    data = request.get_json()
    resp = controller.put_data(data)
    return resp


@app.route("/news", methods=["DELETE"])
@authorize
def delete():
    data = request.get_json()
    resp = controller.delete_data(data)
    return resp


if "__main__" == __name__:
    app.run(host="0.0.0.0")