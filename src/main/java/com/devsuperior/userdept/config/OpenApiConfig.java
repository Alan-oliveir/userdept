package com.devsuperior.userdept.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.Contact;

@Configuration
public class OpenApiConfig {

    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("User Department API")
                        .version("1.0.0")
                        .description("API para gerenciamento de usuários e departamentos")
                        .contact(new Contact()
                                .name("DevSuperior")
                                .email("contato@devsuperior.com")));
    }
}