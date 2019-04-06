from flask import Flask, request, send_file, abort
from flask_cors import CORS
from config import dev_config, pro_config
from os import listdir, remove

app = Flask(__name__, static_url_path="/")

dev_config(app)

CORS(app)


@app.route("/<filename>")
def get(filename):
    try:
        return send_file(f"./static/{filename}", mimetype="image/gif")
    except FileNotFoundError:
        return abort(400, "Requested file does not exist.")


@app.route("/", methods=["POST"])
def post():
    try:
        img = request.files["img"]
    except KeyError:
        return abort(400, "No file sent.")

    if img is None:
        return abort(400, "The sent file is empty.")

    filename = img.filename
    extension = filename.split(".")[1]
    if extension not in ["jpg", "jpeg", "png", "bmp", "gif", "bpg"]:
        return abort(400, "File contains unknown extension.")

    if filename in listdir("./app/static"):
        return abort(400, "File with given name already exists.")

    img.save(f"./app/static/{filename}")

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
