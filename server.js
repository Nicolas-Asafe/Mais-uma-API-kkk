const express = require('express');

const app = express();



app.use(express.json());

const comidas = [
    { id: 1, nome: 'Pizza', preco: 20.0 },
    { id: 2, nome: 'Hambúrguer', preco: 15.0 },
    { id: 3, nome: 'Sushi', preco: 25.0 }
];

app.get('/comidas', (req, res) => {
    res.json(comidas);
});

app.get('/comidas/:id', (req, res) => {
    const comida = comidas.find(c => c.id === parseInt(req.params.id));
    if (!comida) return res.status(404).send('Comida não encontrada');
    res.json(comida);
});

app.post('/comidas', (req, res) => {
    const comida = {
        id: comidas.length + 1,
        nome: req.body.nome,
        preco: req.body.preco
    };
    comidas.push(comida);
    res.status(201).json(comida);
});

app.listen(3000, () => {
    console.log(`Servidor rodando na porta 3000`);
});