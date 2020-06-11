import React from "react";

export default function LoginForm() {
	return (
		<div className="container">
			<div className="text-center">
				<h3>Faça seu Login</h3>
				<p>Seja bem vindo.</p>
			</div>
			<form>
				<div className="form-group mt-5">
					<div className="mt-3">
						<label htmlFor="email">Email</label>
						<input
							className="form-control"
							id="email"
							name="email"
							placeholder="Insira email"
						></input>
					</div>
					<div className="mt-3">
						<label htmlFor="password">Senha</label>
						<input
							className="form-control"
							id="password"
							name="password"
							placeholder="***********"
						></input>
					</div>
				</div>
				<div className="mx-auto text-center" style={{ maxWidth: 200 }}>
					<button className="btn btn-custom waves-btn waves-effect">
						Entrar
					</button>
				</div>
			</form>
		</div>
	);
}
