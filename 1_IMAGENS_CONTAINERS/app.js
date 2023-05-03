import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Olá pessual...')
});

app.listen(port, () => {
    console.log(`Executando na porta: ${port}`);
});