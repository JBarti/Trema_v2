from flask import Flask, request
from flask_cors import CORS
from flask_pymongo import PyMongo
from config import dev_config, pro_config
from modules import NewsController


app = Flask(__name__)

dev_config(app)

mongo = PyMongo(app)

CORS(app)

controller = NewsController(mongo.db)


@app.route("/test")
def root():
    return "<h1>Test route works</h1>"


@app.route("/service/news/get")
def get():
    args = request.args
    resp = controller.get_data(args)
    return resp


@app.route("/service/news/post", methods=["POST"])
def post():
    data = request.get_json()
    try:
        image = request.files["img"]
        res = controller.handle_image(image)
        if res.status_code == "400":
            return res.text
    except KeyError:
        pass

    data["image"] = res.text
    resp = controller.post_data(data)
    return resp


@app.route("/service/news/put", methods=["PUT"])
def put():
    data = request.get_json()
    resp = controller.put_data(data)
    return resp


@app.route("/service/news/delete", methods=["DELETE"])
def delete():
    data = request.get_json()
    resp = controller.delete_data(data)
    return resp


if "__main__" == __name__:
    app.run(host="0.0.0.0")
