use demo_cas


    db.createCollection("TurmaX")

    db.TurmaX.insertMany([
    { nome: "João", media: 10.5 },
    { nome: "Ana", media: 14.0 },
    { nome: "Bruno", media: 12.5 },
    { nome: "Carla", media: 16.0 },
    { nome: "Diogo", media: 14.0 },
    { nome: "Eva", media: 9.5 },
    { nome: "Filipe", media: 11.0 },
    { nome: "Gabriela", media: 16.0 },
    { nome: "Hugo", media: 13.5 },
    { nome: "Inês", media: 17.5 },
    { nome: "José", media: 12.5 },
    { nome: "Leonor", media: 18.0 },
    { nome: "Miguel", media: 15.0 },
    { nome: "Nuno", media: 11.0 },
    { nome: "Olívia", media: 19.0 },
    { nome: "Pedro", media: 13.5 },
    { nome: "Rita", media: 15.0 },
    { nome: "Sara", media: 10.5 },
    { nome: "Tiago", media: 8.0 },
    { nome: "Vasco", media: 17.5 },
    { nome: "Beatriz", media: 14.0 },
    { nome: "Catarina", media: 18.0 },
    { nome: "Daniel", media: 9.5 },
    { nome: "Marta", media: 15.0 },
    { nome: "Ricardo", media: 12.5 }
]);



    db.TurmaX.find({
        nome:{
            $regex: "o$",
            $options: "i"
            }
    })

    db.TurmaX.find({nome: /m/i})

    db.TurmaX.find({
        media: {
            $gte:15
        }

    })


    db.TurmaX.find({
        nome:{
            $regex: "o$",
            $options: "i"
        }
    })

    // select * from TurmaX where nome Like "%o"


      db.TurmaX.find({
        nome:{
            $regex: "o$",
            $options: "i"
        },
          media:{
            $gte:15
          }
    })


    db.TurmaX.find({
        $or:[
            {nome:  {$regex: "o$", $options: "i"}},
            {media:{ $ne: 15}}
            ]

    })

