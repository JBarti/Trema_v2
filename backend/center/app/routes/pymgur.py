from flask import Blueprint, request
import requests
from os import environ
from .utilities import login_required

pymgur_bp = Blueprint("pymgur_api", __name__, url_prefix="/pymgur")


pymgur_host = environ.get("PYMGUR")

pymgur_address = f"http://{pymgur_host}:5000"


@pymgur_bp.route("/<filename>")
@login_required
def get(filename):
    resp = requests.get(f"{pymgur_address}/{filename}")
    return (resp.content, resp.status_code, resp.headers.items())

