package com.expassistant.expassistant;
//Connection-specific DNS Suffix  . :
//Link-local IPv6 Address . . . . . : fe80::e96d:864a:6cf3:605%3
//IPv4 Address. . . . . . . . . . . : 192.168.0.103
//Subnet Mask . . . . . . . . . . . : 255.255.255.0
//Default Gateway . . . . . . . . . : 192.168.0.1
// http://192.168.0.103/swagger-ui.html


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
public class SwaggerConfig {

	@Bean
	public Docket productApi() {
		return new Docket(DocumentationType.SWAGGER_2)
				.select()
				.apis(RequestHandlerSelectors.any())
				.paths(PathSelectors.any())
				.build();
	}
}
