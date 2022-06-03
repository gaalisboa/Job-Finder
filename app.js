const express = require('express');
const app = express()
const PORT = 3000;

app.listen(PORT, function() {
  console.log(`App rodando na porta ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Funcionando')
})