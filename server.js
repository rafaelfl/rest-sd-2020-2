const express = require("express");

const app = express();

const porta = process.env.PORT || 80;

app.get("/", (req, res) => {
    res.send("Olá mundo!");
});

app.listen(porta, () => {
    console.log("Servidor up and running!");
});