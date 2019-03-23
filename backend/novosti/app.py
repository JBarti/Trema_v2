from flask import Flask
from flask_cors import CORS
from flask_pymongo import PyMongo


app = Flask(__name__)
app.config["SECRET_KEY"] = "toJAuUnXEvIVf4umzK+0me83c8+SgKxp03yinvSmV+QwwgUDahX5PlCwK3HNw6JeM8wRWVjdlaw1efc2HakqBA"
app.config["DEBUG"] = True
app.config["MONGO_URI"] ="mongodb://josip:barty456@ds121636.mlab.com:21636/heroku_snz76vxg"

mongo = PyMongo(app)

CORS(app)

@app.route("/test")
def root():
    return "<h1>Test route works</h1>"

@app.route("/service/news/get")
def get():
    pass

@app.route("/service/news/post")
def post():
    pass

@app.route("/service/news/put")
def put():
    pass

@app.route("/service/news/delete")
def delete():
    pass


if "__main__" == __name__:
    app.run(host="0.0.0.0")