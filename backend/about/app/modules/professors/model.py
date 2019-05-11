from flask import jsonify
from dataclasses import dataclass, asdict


@dataclass
class Professor:
    image: str
    name: str
    subject: str
    _id: str = ""

    def to_dict(self):
        data = asdict(self)
        data.pop("_id", None)
        data["model"] = "professor"
        return data

    def to_resp(self):
        data = asdict(self)
        for key in data.keys():
            data[key] = str(data[key])
        return jsonify(data)
