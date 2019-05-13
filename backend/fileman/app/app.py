from flask import Flask, request, send_file, abort
from flask_cors import CORS
from config import dev_config, pro_config
from os import listdir, remove
from mimetypes import MimeTypes

app = Flask(__name__, static_url_path="/")

dev_config(app)

CORS(app)


@app.route("/<filename>")
def get(filename):
    try:
        mtype = MimeTypes().guess_type(filename)[0]
        return send_file(f"./static/{filename}", mimetype=mtype)
    except FileNotFoundError:
        return abort(400, "Requested file does not exist.")


@app.route("/", methods=["POST"])
def post():
    try:
        file = request.files["file"]
    except KeyError:
        return abort(400, "No file sent.")

    if file is None:
        return abort(400, "The sent file is empty.")

    filename = file.filename

    if filename in listdir("./app/static"):
        return abort(400, "File with given name already exists.")

    file.save(f"./app/static/{filename}")

    return filename
    # napravit rutu na auth servisu koja ce vata slike samo odavde


@app.route("/delete", methods=["DELETE"])
def delete():
    data = request.get_json()
    filename = data["image"]
    remove(f"./app/static/{filename}")
    return "Success."


if "__main__" == __name__:
    app.run(host="0.0.0.0")
