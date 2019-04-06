from flask import Blueprint, request, abort
import requests
from .utilities import ImageController, login_required
from os import environ

news_bp = Blueprint("news_api", __name__, url_prefix="/news")

controller = ImageController()

news_host = environ.get("NEWS")
news_address = f"http://{news_host}:5000/service/news"


@news_bp.route("/post", methods=["POST"])
@login_required
def post():
    data = request.get_json()
    resp = requests.post(f"{news_address}/post", json=data)
    return (resp.text, resp.status_code, resp.headers.items())


@news_bp.route("/put", methods=["PUT"])
@login_required
def put():
    data = request.get_json()
    resp = requests.put(f"{news_address}/put", json=data)
    return (resp.text, resp.status_code, resp.headers.items())


@news_bp.route("/delete", methods=["DELETE"])
@login_required
def delete():
    data = request.get_json()
    if "image" in data:
        img_stat = controller.delete_image(data)
        if img_stat != 200:
            return abort(400, "No image with given name has been found to delete.")
    resp = requests.delete(f"{news_address}/delete", json=data)
    return (resp.text, resp.status_code, resp.headers.items())


@news_bp.route("/get")
def get():
    args = request.args.to_dict()
    resp = requests.get(f"{news_address}/get", params=args)
    return (resp.text, resp.status_code, resp.headers.items())

