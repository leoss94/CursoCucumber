package br.ce.wcaquino.runnes;
import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.CucumberOptions.SnippetType;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/resources/features/alugar_Filme.feature",
		glue = "br.ce.wcaquino.steps",
		tags = {},
		plugin = {"pretty", "html:target/report-html"}, 
		monochrome = true,
		snippets = SnippetType.CAMELCASE
		)

public class Runner {

}
