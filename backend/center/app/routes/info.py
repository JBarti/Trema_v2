import requests
from os import environ
from flask import Blueprint, request, abort
from .utilities import FileController, login_required

info_bp = Blueprint("info_api", __name__, url_prefix="/info")

controller = FileController()

info_host = environ.get("INFO")
info_address = f"http://{info_host}:5000/service/info"


@info_bp.route("", methods=["POST"])
@login_required
def post():
    data = request.get_json()
    resp = requests.post(f"{info_address}", json=data)
    return (resp.text, resp.status_code, resp.headers.items())


@info_bp.route("", methods=["PUT"])
@login_required
def put():
    data = request.get_json()
    resp = requests.put(f"{info_address}", json=data)
    return (resp.text, resp.status_code, resp.headers.items())


@info_bp.route("", methods=["DELETE"])
@login_required
def delete():
    data = request.get_json()
    if "file" in data:
        file_stat = controller.delete_file(data)
        if file_stat != 200:
            return abort(400, "No file with given name has been found to delete.")
    resp = requests.delete(f"{info_address}", json=data)
    return (resp.text, resp.status_code, resp.headers.items())


@info_bp.route("")
def get():
    args = request.args.to_dict()
    resp = requests.get(f"{info_address}", params=args)
    return (resp.text, resp.status_code, resp.headers.items())
