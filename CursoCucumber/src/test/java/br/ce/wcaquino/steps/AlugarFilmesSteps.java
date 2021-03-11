package br.ce.wcaquino.steps;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.junit.Assert;

import br.ce.wcaquino.entidades.Filme;
import br.ce.wcaquino.entidades.NotaAluguel;
import br.ce.wcaquino.entidades.TipoAluguel;
import br.ce.wcaquino.servicos.AluguelService;
import br.ce.wcaquino.utils.DateUtils;
import io.cucumber.java.pt.Dado;
import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;

public class AlugarFilmesSteps {
	
	private Filme filme;
	private AluguelService aluguel = new AluguelService();
	private NotaAluguel nota;
	private String erro;
	private TipoAluguel tipoAluguel = TipoAluguel.COMUM;

	@Dado("um filme com estoque de {int} unidades")
	public void umFilmeComEstoqueDeUnidades (int int1) {
		filme = new Filme();
		filme.setEstoque(int1);
	}
	
	@Dado("que o preço do aluguel seja R${int}")
	public void queOPreçoDoAluguelSeja (int int1) {
		filme.setAluguel(int1);
	}

	@Quando("alugar")
	public void alugar() {
		try{
			nota = aluguel.alugar(filme, tipoAluguel);
		} catch (RuntimeException e) {
			erro = e.getMessage();
		}
	}

	@Entao("o preço do aluguel sera R${int}")
	public void oPreçoDoAluguelSera(int int1) {
		Assert.assertEquals(int1, nota.getPreco());
	}
	
	@Entao("o estoque do filme sera {int} unidade")
	public void oEstoqueDoFilmeSeraUnidade(int int1) {
		Assert.assertEquals(int1, filme.getEstoque());
	}
	
	@Entao("nao sera possivel por falta de estoque")
	public void naoSeraPossivelPorFaltaDeEstoque() {
		Assert.assertEquals("Filmes sem estoque", erro);
	}
	
	@Dado("que o tipo do aluguel seja (.*)")
	public void queOTipoDoAluguelSejaExtendido(String tipo) {
		tipoAluguel = tipo.equals("semanal")? TipoAluguel.SEMANAL: tipo.equals("extendido")? TipoAluguel.EXTENDIDO: TipoAluguel.COMUM;
	}
	
	@Entao("a data de entrega sera em {int} dias")
	public void aDataDeEntregaSeraEmDias(int int1) {
		Date dataEsperada = DateUtils.obterDataDiferencaDias(int1);
		Date dataReal = nota.getDataEntrega();
		
		DateFormat format = new SimpleDateFormat("dd/MM/yyyy");
		
		Assert.assertEquals(format.format(dataEsperada), format.format(dataReal));
	}
	
	@Entao("a pontuacao recebida sera de {int} pontos")
	public void aPontuacaoRecebidaSeraDePontos(int int1) {
		Assert.assertEquals(int1, nota.getPontuacao());
	}
}
