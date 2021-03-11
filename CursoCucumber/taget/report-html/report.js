$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/alugar_Filme.feature");
formatter.feature({
  "name": "Alugar Filme",
  "description": "\tComo um usuario\n\tEu quero cadastrar alugueis de filmes\n\tPara controlar preços e datas de entrega",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "name": "Deve alugar um filme com sucesso",
  "description": "",
  "keyword": "Cenario"
});
formatter.step({
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.match({
  "location": "AlugarFilmesSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o preço do aluguel seja R$3",
  "keyword": "Dado "
});
formatter.match({
  "location": "AlugarFilmesSteps.queOPreçoDoAluguelSeja(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "alugar",
  "keyword": "Quando "
});
formatter.match({
  "location": "AlugarFilmesSteps.alugar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o preço do aluguel sera R$3",
  "keyword": "Entao "
});
formatter.match({
  "location": "AlugarFilmesSteps.oPreçoDoAluguelSera(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a data de entrega sera em 1 dias",
  "keyword": "E "
});
formatter.match({
  "location": "AlugarFilmesSteps.aDataDeEntregaSeraEmDias(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o estoque do filme sera 1 unidade",
  "keyword": "E "
});
formatter.match({
  "location": "AlugarFilmesSteps.oEstoqueDoFilmeSeraUnidade(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Não deve alugar filme sem estoque",
  "description": "",
  "keyword": "Cenario"
});
formatter.step({
  "name": "um filme com estoque de 0 unidades",
  "keyword": "Dado "
});
formatter.match({
  "location": "AlugarFilmesSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "alugar",
  "keyword": "Quando "
});
formatter.match({
  "location": "AlugarFilmesSteps.alugar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "nao sera possivel por falta de estoque",
  "keyword": "Entao "
});
formatter.match({
  "location": "AlugarFilmesSteps.naoSeraPossivelPorFaltaDeEstoque()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o estoque do filme sera 0 unidade",
  "keyword": "E "
});
formatter.match({
  "location": "AlugarFilmesSteps.oEstoqueDoFilmeSeraUnidade(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Deve dar condicoes conforme tipo de aluguel",
  "description": "",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.step({
  "name": "que o preço do aluguel seja R$\u003cpreco\u003e",
  "keyword": "E "
});
formatter.step({
  "name": "que o tipo do aluguel seja \u003ctipo\u003e",
  "keyword": "E "
});
formatter.step({
  "name": "alugar",
  "keyword": "Quando "
});
formatter.step({
  "name": "o preço do aluguel sera R$\u003cvalor\u003e",
  "keyword": "Entao "
});
formatter.step({
  "name": "a data de entrega sera em \u003cqtdDias\u003e dias",
  "keyword": "E "
});
formatter.step({
  "name": "a pontuacao recebida sera de \u003cpontuacao\u003e pontos",
  "keyword": "E "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Exemplos",
  "rows": [
    {
      "cells": [
        "preco",
        "tipo",
        "valor",
        "qtdDias",
        "pontuacao"
      ]
    },
    {
      "cells": [
        "4",
        "extendido",
        "8",
        "3",
        "2"
      ]
    },
    {
      "cells": [
        "4",
        "comum",
        "4",
        "1",
        "1"
      ]
    },
    {
      "cells": [
        "10",
        "extendido",
        "20",
        "3",
        "2"
      ]
    },
    {
      "cells": [
        "5",
        "semanal",
        "15",
        "7",
        "3"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Deve dar condicoes conforme tipo de aluguel",
  "description": "",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.match({
  "location": "AlugarFilmesSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o preço do aluguel seja R$4",
  "keyword": "E "
});
formatter.match({
  "location": "AlugarFilmesSteps.queOPreçoDoAluguelSeja(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o tipo do aluguel seja extendido",
  "keyword": "E "
});
formatter.match({
  "location": "AlugarFilmesSteps.queOTipoDoAluguelSejaExtendido(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "alugar",
  "keyword": "Quando "
});
formatter.match({
  "location": "AlugarFilmesSteps.alugar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o preço do aluguel sera R$8",
  "keyword": "Entao "
});
formatter.match({
  "location": "AlugarFilmesSteps.oPreçoDoAluguelSera(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a data de entrega sera em 3 dias",
  "keyword": "E "
});
formatter.match({
  "location": "AlugarFilmesSteps.aDataDeEntregaSeraEmDias(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a pontuacao recebida sera de 2 pontos",
  "keyword": "E "
});
formatter.match({
  "location": "AlugarFilmesSteps.aPontuacaoRecebidaSeraDePontos(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Deve dar condicoes conforme tipo de aluguel",
  "description": "",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.match({
  "location": "AlugarFilmesSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o preço do aluguel seja R$4",
  "keyword": "E "
});
formatter.match({
  "location": "AlugarFilmesSteps.queOPreçoDoAluguelSeja(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o tipo do aluguel seja comum",
  "keyword": "E "
});
formatter.match({
  "location": "AlugarFilmesSteps.queOTipoDoAluguelSejaExtendido(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "alugar",
  "keyword": "Quando "
});
formatter.match({
  "location": "AlugarFilmesSteps.alugar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o preço do aluguel sera R$4",
  "keyword": "Entao "
});
formatter.match({
  "location": "AlugarFilmesSteps.oPreçoDoAluguelSera(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a data de entrega sera em 1 dias",
  "keyword": "E "
});
formatter.match({
  "location": "AlugarFilmesSteps.aDataDeEntregaSeraEmDias(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a pontuacao recebida sera de 1 pontos",
  "keyword": "E "
});
formatter.match({
  "location": "AlugarFilmesSteps.aPontuacaoRecebidaSeraDePontos(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Deve dar condicoes conforme tipo de aluguel",
  "description": "",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.match({
  "location": "AlugarFilmesSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o preço do aluguel seja R$10",
  "keyword": "E "
});
formatter.match({
  "location": "AlugarFilmesSteps.queOPreçoDoAluguelSeja(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o tipo do aluguel seja extendido",
  "keyword": "E "
});
formatter.match({
  "location": "AlugarFilmesSteps.queOTipoDoAluguelSejaExtendido(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "alugar",
  "keyword": "Quando "
});
formatter.match({
  "location": "AlugarFilmesSteps.alugar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o preço do aluguel sera R$20",
  "keyword": "Entao "
});
formatter.match({
  "location": "AlugarFilmesSteps.oPreçoDoAluguelSera(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a data de entrega sera em 3 dias",
  "keyword": "E "
});
formatter.match({
  "location": "AlugarFilmesSteps.aDataDeEntregaSeraEmDias(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a pontuacao recebida sera de 2 pontos",
  "keyword": "E "
});
formatter.match({
  "location": "AlugarFilmesSteps.aPontuacaoRecebidaSeraDePontos(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Deve dar condicoes conforme tipo de aluguel",
  "description": "",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.match({
  "location": "AlugarFilmesSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o preço do aluguel seja R$5",
  "keyword": "E "
});
formatter.match({
  "location": "AlugarFilmesSteps.queOPreçoDoAluguelSeja(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o tipo do aluguel seja semanal",
  "keyword": "E "
});
formatter.match({
  "location": "AlugarFilmesSteps.queOTipoDoAluguelSejaExtendido(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "alugar",
  "keyword": "Quando "
});
formatter.match({
  "location": "AlugarFilmesSteps.alugar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o preço do aluguel sera R$15",
  "keyword": "Entao "
});
formatter.match({
  "location": "AlugarFilmesSteps.oPreçoDoAluguelSera(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a data de entrega sera em 7 dias",
  "keyword": "E "
});
formatter.match({
  "location": "AlugarFilmesSteps.aDataDeEntregaSeraEmDias(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a pontuacao recebida sera de 3 pontos",
  "keyword": "E "
});
formatter.match({
  "location": "AlugarFilmesSteps.aPontuacaoRecebidaSeraDePontos(int)"
});
formatter.result({
  "status": "passed"
});
});