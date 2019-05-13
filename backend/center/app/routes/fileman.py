import requests
from os import environ
from flask import Blueprint, request, abort
from .utilities import login_required, FileController

fileman_bp = Blueprint("fileman_api", __name__, url_prefix="/fileman")


fileman_host = environ.get("FILEMAN")

fileman_address = f"http://{fileman_host}:5000"

controller = FileController()


@fileman_bp.route("/<filename>")
def get(filename):
    resp = requests.get(f"{fileman_address}/{filename}")
    return (resp.content, resp.status_code, resp.headers.items())


@fileman_bp.route("/", methods=["POST"])
@login_required
def post():
    try:
        file = request.files["file"]
        res = controller.handle_file(file)
        if res.status_code == 400:
            return res.text
        return res.text
    except KeyError:
        return abort(400, "No file sent.")
