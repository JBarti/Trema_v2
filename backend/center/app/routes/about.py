import requests
from os import environ
from flask import Blueprint, request, abort
from .utilities import ImageController, login_required

about_bp = Blueprint("about_api", __name__, url_prefix="/about")

controller = ImageController()

#######  need file saving system!!!!
#######  after creating one implement it in this file similar to the way image
#######  controller has been implemented

about_host = environ.get("ABOUT")
about_address = f"http://{about_host}:5000/service/about"

@about_bp.route("/<model>", methods=["POST"])
@login_required
def post(model):
    data = request.get_json()
    resp = requests.post(f"{about_address}/{model}", json=data)
    return (resp.text, resp.status_code, resp.headers.items())


@about_bp.route("/<model>", methods=["PUT"])
@login_required
def put(model):
    data = request.get_json()
    resp = requests.put(f"{about_address}/{model}", json=data)
    return (resp.text, resp.status_code, resp.headers.items())


@about_bp.route("/<model>", methods=["DELETE"])
@login_required
def delete(model):
    data = request.get_json()
    if "image" in data:
        img_stat = controller.delete_image(data)
        if img_stat != 200:
            return abort(400, "No image with given name has been found to delete.")
    resp = requests.delete(f"{about_address}/{model}", json=data)
    return (resp.text, resp.status_code, resp.headers.items())


@about_bp.route("/<model>")
def get(model):
    args = request.args.to_dict()
    resp = requests.get(f"{about_address}/{model}", params=args)
    return (resp.text, resp.status_code, resp.headers.items())
