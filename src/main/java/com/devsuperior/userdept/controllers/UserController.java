package com.devsuperior.userdept.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.userdept.entities.User;
import com.devsuperior.userdept.repositories.UserRepository;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping(value = "/users")
@Tag(name = "Users", description = "Gerenciamento de usuários")
public class UserController {

	@Autowired
	private UserRepository repository;

	@GetMapping
	@Operation(summary = "Listar todos os usuários",
			description = "Retorna uma lista com todos os usuários cadastrados")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "Lista de usuários retornada com sucesso",
					content = @Content(mediaType = "application/json",
							schema = @Schema(implementation = User.class)))
	})
	public List<User> findAll() {
		return repository.findAll();
	}

	@GetMapping(value = "/{id}")
	@Operation(summary = "Buscar usuário por ID",
			description = "Retorna um usuário específico baseado no ID fornecido")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "Usuário encontrado",
					content = @Content(mediaType = "application/json",
							schema = @Schema(implementation = User.class))),
			@ApiResponse(responseCode = "404", description = "Usuário não encontrado")
	})
	public ResponseEntity<User> findById(
			@Parameter(description = "ID do usuário a ser buscado", required = true)
			@PathVariable Long id) {
		return repository.findById(id)
				.map(user -> ResponseEntity.ok(user))
				.orElse(ResponseEntity.notFound().build());
	}

	@PostMapping
	@Operation(summary = "Criar novo usuário",
			description = "Cria um novo usuário no sistema")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "Usuário criado com sucesso",
					content = @Content(mediaType = "application/json",
							schema = @Schema(implementation = User.class))),
			@ApiResponse(responseCode = "400", description = "Dados inválidos fornecidos")
	})
	public User insert(
			@Parameter(description = "Dados do usuário a ser criado", required = true)
			@RequestBody User user) {
		return repository.save(user);
	}
}