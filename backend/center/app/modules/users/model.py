from dataclasses import dataclass, asdict


@dataclass
class User:
    email: str
    password: str

    def to_dict(self):
        return asdict(self)
