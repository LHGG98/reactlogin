import React, { useState } from "react";

export default function LoginForm() {
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);

	const handleSubmit = () => {
		console.log(email, password);
	};

	return (
		<div className="container">
			<div className="text-center">
				<h3>Faça seu Login</h3>
				<p>Seja bem vindo.</p>
			</div>
			<form onSubmit={handleSubmit}>
				<div className="form-group mt-5">
					<div className="mt-3">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							required
							className="form-control"
							id="email"
							name="email"
							placeholder="Insira email"
							onChange={(e) => {
								setEmail(e.target.value);
							}}
						></input>
					</div>
					<div className="mt-3">
						<label htmlFor="password">Senha</label>
						<input
							type="password"
							required
							className="form-control"
							id="password"
							name="password"
							placeholder="***********"
							onChange={(e) => {
								setPassword(e.target.value);
							}}
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
