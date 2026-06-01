use demo_cas
    //show collections // mostra todas as collections
    //db.createCollection("Alunos")
    db.Alunos.insertOne({
        nome: "Maria",
        idade: 19,
        turma:" TPSICAS"
    })
    db.Alunos.insertMany([
        {
        nome: "Ana",
        idade: 30,
        turma:" TPSICAS"
    },
        {
        nome: "Diana",
        idade: 30,
        turma:" TPSICAS"
    }
     ])
    db.Alunos.insertOne({
        nome: "Rita",
        idade: 30,
        turma:" TPSICAS",
        aprovada: true
    })
    db.Alunos.find()  // Select * from Alunos

    //Select * from Alunos