const express = require("express");

const app = express();

const porta = 3000;

app.get("/", (req, res) => {
    res.send("Olá mundo!");
});

app.listen(porta, () => {
    console.log("Servidor up and running!");
});