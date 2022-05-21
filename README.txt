Rio da Janeiro 21/05/2002
*************************

Projeto de teste com node, kafika e jest
node v16.14.2

1) para inicializar rode o camando na raiz do projeto  $ npm install

2) end-points

GET http://localhost:3000

"msg":[
    {
      "topic": "quickstart-events",
      "value": "hello world",
      "offset": 0,
      "partition": 0,
      "highWaterOffset": 6,
      "key": null
    }
]

POST http://localhost:3000

{
    "message":"minha mensagem"
}


