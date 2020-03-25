const express = require('express'); // importando o módulo express pra dentro da variável express.
const cors = require('cors'); //5.2k (gzipped: 2.1k)
const routes = require('./routes');// importando as rotas. Usei ./ para informar que é um arquivo, e não um pacote.
const app = express(); // criando minha aplicação

/**Preciso informar para o "app" antes de começar a aplicação, que estaremos usando o json para o corpo das requisições*/
app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333); //ABRIR A APLICAÇÃO NA PORTA 3333. Não escolheu a porta 8080, porque ela pode ser muito problematica em alguns sistemas operacionais. E cada aplicação rodar em uma porta, pois elas seguem um tipo de padrão em cada linguagem.
