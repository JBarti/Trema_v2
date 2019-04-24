import requests
from os import environ
from flask import Blueprint, request, abort
from .utilities import login_required, ImageController

pymgur_bp = Blueprint("pymgur_api", __name__, url_prefix="/pymgur")


pymgur_host = environ.get("PYMGUR")

pymgur_address = f"http://{pymgur_host}:5000"

controller = ImageController()


@pymgur_bp.route("/<filename>")
def get(filename):
    resp = requests.get(f"{pymgur_address}/{filename}")
    return (resp.content, resp.status_code, resp.headers.items())


@pymgur_bp.route("/", methods=["POST"])
@login_required
def post():
    try:
        image = request.files["img"]
        res = controller.handle_image(image)
        if res.status_code == 400:
            return res.text
        return res.text
    except KeyError:
        return abort(400, "No image sent.")
