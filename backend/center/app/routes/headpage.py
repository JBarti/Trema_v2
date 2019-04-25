import requests
from os import environ
from flask import Blueprint, request, abort
from .utilities import ImageController, login_required

head_bp = Blueprint("head_api", __name__, url_prefix="/headpage")

controller = ImageController()

head_host = environ.get("HEADPAGE")
head_address = f"http://{head_host}:5000/service/head"


@head_bp.route("/<model>", methods=["POST"])
@login_required
def post(model):
    data = request.get_json()
    resp = requests.post(f"{head_address}/{model}", json=data)
    return (resp.text, resp.status_code, resp.headers.items())


@head_bp.route("/<model>", methods=["PUT"])
@login_required
def put(model):
    data = request.get_json()
    resp = requests.put(f"{head_address}/{model}", json=data)
    return (resp.text, resp.status_code, resp.headers.items())


@head_bp.route("/<model>", methods=["DELETE"])
@login_required
def delete(model):
    data = request.get_json()
    if "image" in data:
        img_stat = controller.delete_image(data)
        if img_stat != 200:
            return abort(400, "No image with given name has been found to delete.")
    resp = requests.delete(f"{head_address}/{model}", json=data)
    return (resp.text, resp.status_code, resp.headers.items())


@head_bp.route("/<model>")
def get(model):
    args = request.args.to_dict()
    resp = requests.get(f"{head_address}/{model}", params=args)
    return (resp.text, resp.status_code, resp.headers.items())

