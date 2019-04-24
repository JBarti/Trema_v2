from flask import Flask
from config import dev_config, pro_config
from flask_pymongo import PyMongo
from flask_cors import CORS

app = Flask(__name__)
dev_config(app)

mongo = PyMongo(app)

CORS(app)

@app.route('/')
def test():
    return "This is a test route."

if __name__=="__main__":
    from modules import achievements_bp
    app.register_blueprint(achievements_bp)
    app.run(host="0.0.0.0")