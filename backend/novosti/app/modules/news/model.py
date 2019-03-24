from dataclasses import dataclass, asdict, fields
import pprint


@dataclass
class Post:
    _id: str = ""
    title: str
    body: str
    tldr: str
    image: str
    date: str
    author: str

    def to_dict(self):
        return asdict(self)
