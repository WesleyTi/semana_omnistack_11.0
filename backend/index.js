const express = require('express'); // importando o módulo express pra dentro da variável express.

const app = express(); // criando minha aplicação

app.get('/', (request, response) => {
return response.json({
    evento: 'OmniStack',
    aluno: 'Wesley Oliveira',
    cod: 010103344423,
    profissao: "Developer"
});
});// receber a rota, e passar uma função como segundo parâmetro.

app.listen(3333); //ABRIR A APLICAÇÃO NA PORTA 3333. Não escolheu a porta 8080, porque ela pode ser muito problematica em alguns sistemas operacionais. E cada aplicação rodar em uma porta, pois elas seguem um tipo de padrão em cada linguagem.
