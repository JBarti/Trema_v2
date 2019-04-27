from os import environ
import requests
from functools import wraps
from flask import session, jsonify


class ImageController:
    def __init__(self):
        self.pymgur_host = pymgur_host = environ.get("PYMGUR")
        self.pymgur_address = f"http://{self.pymgur_host}:5000/"

    def handle_image(self, image):
        image.seek(0)
        res = requests.post(
            self.pymgur_address,
            files={"img": (image.filename, image.stream, image.mimetype)},
        )
        return res

    def delete_image(self, data):
        if data["image"] == None:
            return 200
        resp = requests.delete(f"{self.pymgur_address}delete", json=data)
        return resp.status_code


def login_required(f):
    @wraps(f)
    def wrapped_func(*args, **kwargs):
        if "id" in session:
            return f(*args, **kwargs)
        return "You are not logged in, please login to continue."

    return wrapped_func
