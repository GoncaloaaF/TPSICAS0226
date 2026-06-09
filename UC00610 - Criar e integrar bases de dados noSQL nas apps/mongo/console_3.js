db.createCollection("aula3")


    db.aula3.insertMany([
  {
    nome: "Ana",
    idade: 20,
    curso: "Programação",
    notas: [14, 16],
    ativo: true
  },
  {
    nome: "Bruno",
    idade: 23,
    curso: "Redes",
    notas: [12, 15],
    ativo: true
  },
  {
    nome: "Carla",
    idade: 19,
    curso: "Programação",
    notas: [17, 18],
    ativo: false
  }
])

    db.aula3.insertOne(
          {
    nome: "Anabela",
    idade: 19,
    curso: "Programação",
    notas: [17, 18],
    ativo: false
  }
    )

     db.aula3.insertOne(
          {
    nome: "anabela",
    idade: 30,
    curso: "Programação",
    notas: [17, 18],
    ativo: false
  }
    )


    db.aula3.find({
        idade:{
            $gte: 20
            }
        },
         {
             _id: 0,
             ativo:0
            })

    SELECT nome, idade from aula3 where idade >= 20

   db.aula3.find()

    db.aula3.find({
        nome:{
            $regex:"^ana",
            $options: "i"
        }
    })
      db.aula3.find({
        nome: /^Ana/i
    })

db.aula3.find({},{_id:0, notas:0}).limit(3)

    db.aula3.find({},{_id:0, notas:0}).sort({curso: 1, idade: -1 })