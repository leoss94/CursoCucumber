package br.ce.wcaquino.steps;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

import org.junit.Assert;

import io.cucumber.java.pt.Dado;
import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;

public class AprenderCucumberSteps {
	
	@Dado("que criei o arquivo corretamente")
	public void queCrieiOArquivoCorretamente() {
	    System.out.println("Passou aqui");
	}
	
	@Quando("executa-lo")
	public void executaLo() {   
	}
	
	@Entao("a especificacao deve finalizar com sucesso")
	public void aEspecificacaoDeveFinalizarComSucesso() {  
	}
	/*******************************************/

	private Integer contador = 0;
	
	@Dado("que o valor do contador é {int}")
	public void queOValorDoContadorÉ(Integer int1) {
		contador = int1;
	}
	@Quando("eu incrementar em {int}")
	public void euIncrementarEm(Integer int1) {
		contador = contador + int1;
	}
	@Entao("o valo do contator sera {int}")
	public void oValoDoContatorSera(Integer int1) {
		Assert.assertEquals(int1, contador);
	}
	
	/*******************************************/
	
	Date entrega = new Date();
	
	
	@Dado("que a entrega é dia {data}")
	public void queAEntregaÉDia(Date data) {
		entrega = data;
	}
	@Quando("^a entrega atrasar (\\d+) (dia|dias|mes|meses)$")
	public void aEntregaAtrasarDias(Integer int1, String tempo) {
		Calendar cal = Calendar.getInstance();
		cal.setTime(entrega); 
		if(tempo.equals("dias")) {
			cal.add(Calendar.DAY_OF_MONTH, int1);
		}
		if(tempo.equals("meses")) {
			cal.add(Calendar.MONTH, int1);
		}
		entrega = cal.getTime();
	}
	@Entao("a entrega sera efetuada em (\\d{2}\\/\\d{2}\\/\\d{4})$")
	public void aEntregaSeraEfetuadaEm(String data) {
	    DateFormat format = new SimpleDateFormat("dd/MM/yyyy");
	    String dataFormatada = format.format(entrega);
	    Assert.assertEquals(data, dataFormatada);
	}

	/************************* DESAFIO ***************************************/
		
	@Dado("que o ticket( especial)? é (A.\\d{3})$")
	public void queOTicketÉAF345(String tipo, String ticket) {
	}
	@Dado("que o valor da passagem é R$ {double}")
	public void queOValorDaPassagemÉR$(Double double1) {
		
	}
	@Dado("que o nome do passageiro é \"(.{5,20})\"$")
	public void queONomeDoPassageiroÉ(String nome) {
	}
	@Dado("que o telefone do passageiro é (9\\d{3}-\\d{4})$")
	public void queOTelefoneDoPassageiroÉ(String telefone) {
	}
	@Quando("criar os steps")
	public void criarOsSteps() {
	}
	@Entao("o teste vai funcionar")
	public void oTesteVaiFuncionar() {
	}

}
