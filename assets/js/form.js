document.addEventListener("DOMContentLoaded", () => {
	const form = document.getElementById("scheduleForm");
	const emailInput = document.getElementById("email");
	const phoneInput = document.getElementById("phone");
	const nameInput = document.getElementById("name");

	const emailError = document.getElementById("emailError");
	const phoneError = document.getElementById("phoneError");
	const nameError = document.getElementById("nameError");

	const validateEmail = () => {
		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailPattern.test(emailInput.value)) {
			emailError.textContent = "Por favor, insira um e-mail válido.";
			return false;
		} else {
			emailError.textContent = "";
			return true;
		}
	};

	const validateName = () => {
		const trimmedName = nameInput.value.trim();
		if (trimmedName === "" || trimmedName.length < 2) {
			nameError.textContent = "O nome não deve estar em branco ou ter menos de 2 caracteres.";
			return false;
		} else {
			nameError.textContent = "";
			return true;
		}
	};

	const validatePhone = () => {
		const phoneValue = phoneInput.value.replace(/\D/g, ""); 
		if (phoneValue === "") {
			phoneError.textContent = "O campo de telefone é obrigatório.";
			return false;
		} else {
			phoneError.textContent = "";
			phoneInput.value = phoneValue;
			return true;
		}
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

    const submitButton = document.getElementById('submitButton');

    submitButton.disabled = true;
    submitButton.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Enviando...';
		
		const isNameValid = validateName();
		const isEmailValid = validateEmail();
		const isPhoneValid = validatePhone();

		if (!isNameValid || !isEmailValid || !isPhoneValid) {
			return;
		}

		await sendData({
			name: nameInput.value.trim(),
			email: emailInput.value,
			phone: phoneInput.value
		});

		setTimeout(() => {
      submitButton.disabled = false;
      submitButton.innerHTML = 'Quero mais informações';
    }, 2000);

		clearForm();
		redirectToStarterPage();
	};

	const sendData = async (data) => {
		const response = await fetch("https://script.google.com/macros/s/AKfycbwxQx1AB4aykBUXcwnWKMFzAQxnx2lrD0PjB3z7l5hltYLzatznaCVoKjwFtSEawoJU/exec", {
			method: "POST",
			mode: "no-cors",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data)
		});
		return response;
	};

	const clearForm = () => {
		form.reset();
		emailError.textContent = "";
		phoneError.textContent = "";
		nameError.textContent = "";
	};

	const redirectToStarterPage = () => {
		window.location.href = './starter-page.html';
	};

	emailInput.addEventListener("input", validateEmail);
	nameInput.addEventListener("input", () => {
		const trimmedValue = nameInput.value.trim();
		if (trimmedValue === "") {
			nameError.textContent = "O nome não pode ser apenas espaços em branco.";
		} else {
			nameError.textContent = "";
		}
	});
	form.addEventListener("submit", handleSubmit);
});
