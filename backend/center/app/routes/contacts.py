import requests
from os import environ
from flask import Blueprint, request, abort
from .utilities import login_required

contact_bp = Blueprint("contact_api", __name__, url_prefix="/contact")


contact_host = environ.get("CONTACTS")
contact_address = f"http://{contact_host}:5000/service/contact"


@contact_bp.route("", methods=["POST"])
@login_required
def post():
    data = request.get_json()
    resp = requests.post(f"{contact_address}", json=data)
    return (resp.text, resp.status_code, resp.headers.items())


@contact_bp.route("", methods=["PUT"])
@login_required
def put():
    data = request.get_json()
    resp = requests.put(f"{contact_address}", json=data)
    return (resp.text, resp.status_code, resp.headers.items())


@contact_bp.route("", methods=["DELETE"])
@login_required
def delete():
    data = request.get_json()
    resp = requests.delete(f"{contact_address}", json=data)
    return (resp.text, resp.status_code, resp.headers.items())


@contact_bp.route("")
def get():
    resp = requests.get(f"{contact_address}")
    return (resp.text, resp.status_code, resp.headers.items())
