const express = require("express");

const app = express();

const porta = process.env.PORT || 80;

const bd = [
    {
        nome: "Calabresa",
        preco: 15.0,
    },
    {
        nome: "Carne de Sol",
        preco: 20.0,
    },
    {
        nome: "Frango com Catupiry",
        preco: 10.0,
    },
    {
        nome: "Portuguesa",
        preco: 18.0,
    },
];

app.use(express.json());

app.get("/pizza/cardapio", (req, res) => {
    res.send(bd);
});

app.get("/pizza/cardapio/:idpizza", (req, res) => {
    const idPizza = req.params.idpizza;

    if (idPizza >= 0 && idPizza < bd.length) {
        res.send(bd[idPizza]);
    } else {
        res.status(404).send();
    }
});

app.post("/pizza/cadastro", (req, res) => {
    const pizza = req.body;

    bd.push(pizza);
    res.send({ result: "OK" });
});

app.get("/", (req, res) => {
    res.send("Olá mundo!");
});

app.listen(porta, () => {
    console.log("Servidor up and running!");
});