// document.addEventListener("DOMContentLoaded", () => {
// 	const form2 = document.getElementById("scheduleForm2");
// 	console.log(form2);
// 	const emailInput2 = document.getElementById("email");
// 	const phoneInput2 = document.getElementById("phone");
// 	const  nameInput2 = document.getElementById("name");

// 	const emailError2 = document.getElementById("emailError2");
// 	const phoneError2 = document.getElementById("phoneError2");
// 	const nameError2 = document.getElementById("nameError2");

// 	// Validation Functions
// 	const validateEmail = () => {
// 		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// 		if (!emailPattern.test(emailInput2.value)) {
// 			emailError2.textContent = "Por favor, insira um e-mail válido.";
// 			return false;
// 		} else {
// 			emailError2.textContent = "";
// 			return true;
// 		}
// 	};

// 	const validateName = () => {
// 		const trimmedName =  nameInput2.value.trim();
// 		if (trimmedName === "" || trimmedName.length < 2) {
// 			nameError2.textContent = "O nome não deve estar em branco.";
// 			return false;
// 		} else {
// 			nameError2.textContent = "";
// 			return true;
// 		}
// 	};

// 	const validatePhone = () => {
// 		const phoneValue = phoneInput2.value.replace(/\D/g, ""); // Remove non-numeric characters
// 		if (phoneValue === "") {
// 			phoneError2.textContent = "O campo de telefone é obrigatório.";
// 			return false;
// 		} else {
// 			phoneError2.textContent = "";
// 			phoneInput2.value = phoneValue; // Keep only numbers in the field
// 			return true;
// 		}
// 	};

// 	// Form submission handler
// 	const handleSubmit = async (event) => {
// 		event.preventDefault();
		
// 		const isNameValid = validateName();
// 		const isEmailValid = validateEmail();
// 		const isPhoneValid = validatePhone();

// 		if (!isNameValid || !isEmailValid || !isPhoneValid) {
// 			return;
// 		}

// 		await sendData({
// 			name:  nameInput2.value.trim(),
// 			email: emailInput2.value,
// 			phone: phoneInput2.value
// 		});

// 		clearForm();
// 		redirectToStarterPage();
	
// 	};

// 	// Send data to the server
// 	const sendData = async (data) => {
// 		const response = await fetch("https://script.google.com/macros/s/AKfycbwxQx1AB4aykBUXcwnWKMFzAQxnx2lrD0PjB3z7l5hltYLzatznaCVoKjwFtSEawoJU/exec", {
// 			method: "POST",
// 			mode: "no-cors",
// 			headers: { "Content-Type": "application/json" },
// 			body: JSON.stringify(data)
// 		});
// 		return response;
// 	};

// 	// Clear form inputs
// 	const clearForm = () => {
// 		form.reset();
// 		emailError2.textContent = "";
// 		phoneError2.textContent = "";
// 		nameError2.textContent = "";
// 	};

// 	// Redirect to another page
// 	const redirectToStarterPage = () => {
// 		let currentUrl = window.location.href;
// 		if (currentUrl.includes("index.html")) {
// 			currentUrl = currentUrl.replace("index.html", "");
// 		}
// 		const baseUrl = currentUrl.endsWith('/') ? currentUrl.slice(0, -1) : currentUrl;
// 		window.location.href = baseUrl + "/starter-page.html";
// 	};

// 	emailInput2.addEventListener("input", validateEmail);
// 	 nameInput2.addEventListener("input", () => {
// 		const trimmedValue =  nameInput2.value.trim();
// 		if (trimmedValue === "") {
// 			nameError2.textContent = "O nome não pode ser apenas espaços em branco.";
// 		} else {
// 			nameError2.textContent = "";
// 		}
// 	});

// 	form2.addEventListener("submit", handleSubmit);
// });
