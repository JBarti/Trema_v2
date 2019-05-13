from os import environ
import requests
from functools import wraps
from flask import session, jsonify


class FileController:
    def __init__(self):
        self.fileman_host = environ.get("FILEMAN")
        self.fileman_address = f"http://{self.fileman_host}:5000/"

    def handle_file(self, file):
        file.seek(0)
        res = requests.post(
            self.fileman_address,
            files={"file": (file.filename, file.stream, file.mimetype)},
        )
        return res

    def delete_file(self, data):
        if data["file"] == None:
            return 200
        resp = requests.delete(f"{self.fileman_address}delete", json=data)
        return resp.status_code


def login_required(f):
    @wraps(f)
    def wrapped_func(*args, **kwargs):
        if "id" in session:
            return f(*args, **kwargs)
        return "You are not logged in, please login to continue."

    return wrapped_func
