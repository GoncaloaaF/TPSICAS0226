from dataclasses import dataclass

class Pessoa:
    def __init__(self, name:str, email:str):
        self.name = name
        self.email = email

    def __str__(self): ## toString
        return f'{self.name} {self.email}'


@dataclass
class Contato:
   nome:str
   email:str


class DB:
    def __init__():
        pass

    def save_contato(contato):
        pass