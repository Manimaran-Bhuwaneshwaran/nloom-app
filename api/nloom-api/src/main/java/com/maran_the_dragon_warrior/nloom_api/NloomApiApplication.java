package com.maran_the_dragon_warrior.nloom_api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "com.maran_the_dragon_warrior.nloom_api")
public class NloomApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(NloomApiApplication.class, args);
	}

}
