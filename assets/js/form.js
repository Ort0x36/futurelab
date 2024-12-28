document.addEventListener("DOMContentLoaded", () => {
	const form = document.getElementById("scheduleForm");
	const emailInput = document.getElementById("email");
	const phoneInput = document.getElementById("phone");
	const nameInput = document.getElementById("name");

	const emailError = document.getElementById("emailError");
	const phoneError = document.getElementById("phoneError");
	const nameError = document.getElementById("nameError");

	emailInput.addEventListener("input", () => {
		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailPattern.test(emailInput.value)) {
			emailError.textContent = "Por favor, insira um e-mail válido.";
		} else {
			emailError.textContent = "";
		}
	});

	// Formatação do número de telefone
	// phoneInput.addEventListener("input", () => {
	// 	let value = phoneInput.value.replace(/\D/g, ""); // Remove todos os caracteres não numéricos
	
	// 	// Limita o número de dígitos a 11 (DDD + número)
	// 	if (value.length > 11) {
	// 		value = value.slice(0, 11);
	// 	}
	
	// 	// Formata o número
	// 	if (value.length > 2) {
	// 		value = value.replace(/^(\d{2})(\d)/, "($1) $2"); // Adiciona o DDD
	// 	}
	// 	if (value.length > 7) {
	// 		value = value.replace(/(\d{5})(\d{4})$/, "$1-$2"); // Adiciona o traço no número
	// 	}
	
	// 	phoneInput.value = value; // Atualiza o campo com o valor formatado
	// });

	form.addEventListener("submit", (event) => {
		let isValid = true;

		// Validação de nome

		const trimmedName = nameInput.value.trim(); // Remove espaços em branco no início e no final
		if (trimmedName === "" || trimmedName.length < 2) {
			nameError.textContent =
				"O nome não deve estar em branco ou ter menos de 2 caracteres.";
			isValid = false;
		}
		// Verifica se o DDD foi digitado
		// if (!/^\(\d{2}\)/.test(phoneInput.value)) {
		// 	phoneError.textContent = "Por favor, inclua o DDD no número de telefone.";
		// 	isValid = false;
		// } else {
		// 	phoneError.textContent = "";
		// }

		// Verifica se o e-mail está válido
		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailPattern.test(emailInput.value)) {
			emailError.textContent = "Por favor, insira um e-mail válido.";
			isValid = false;
		}

		// Bloqueia o envio do formulário se houver erros
		if (!isValid) {
			event.preventDefault();
		}
	});
});