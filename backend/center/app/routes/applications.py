import requests
from os import environ
from flask import Blueprint, request, abort
from .utilities import FileController, login_required

application_bp = Blueprint("application_api", __name__, url_prefix="/application")

controller = FileController()

application_host = environ.get("APPLICATIONS")
application_address = f"http://{application_host}:5000/service/application"


@application_bp.route("", methods=["POST"])
@login_required
def post():
    data = request.get_json()
    resp = requests.post(f"{application_address}", json=data)
    return (resp.text, resp.status_code, resp.headers.items())


@application_bp.route("", methods=["PUT"])
@login_required
def put():
    data = request.get_json()
    resp = requests.put(f"{application_address}", json=data)
    return (resp.text, resp.status_code, resp.headers.items())


@application_bp.route("", methods=["DELETE"])
@login_required
def delete():
    data = request.get_json()
    if "file" in data:
        file_stat = controller.delete_file(data)
        if file_stat != 200:
            return abort(400, "No file with given name has been found to delete.")
    resp = requests.delete(f"{application_address}", json=data)
    return (resp.text, resp.status_code, resp.headers.items())


@application_bp.route("")
def get():
    args = request.args.to_dict()
    resp = requests.get(f"{application_address}", params=args)
    return (resp.text, resp.status_code, resp.headers.items())
