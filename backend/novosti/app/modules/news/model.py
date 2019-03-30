from dataclasses import dataclass, asdict, fields
from flask import jsonify
from datetime import datetime


@dataclass
class Post:
    title: str
    body: str
    tldr: str
    image: str
    date: str
    author: str
    _id: str = ""

    def to_dict(self):
        dct = asdict(self)
        dct.pop("_id")
        return dct

    def to_resp(self):
        data = asdict(self)
        for key in data.keys():
            data[key] = str(data[key])
        return jsonify(data)

    def str_to_date(self):
        lst_date = self.date.split("/")
        try:
            self.date = datetime(int(lst_date[2]), int(lst_date[1]), int(lst_date[0]))
        except ValueError:
            self.date = None
        return self.date

    def date_to_str(self):
        self.date = self.date.strftime("%d/%m/%Y")
        return self.date
