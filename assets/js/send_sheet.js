document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("scheduleForm");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();

    // Validação básica
    if (!name || !email || !phone) {
      alert("Por favor, preencha todos os campos corretamente.");
      return;
    }

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbwxQx1AB4aykBUXcwnWKMFzAQxnx2lrD0PjB3z7l5hltYLzatznaCVoKjwFtSEawoJU/exec", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone }),
      });

      console.log(response)
      console.log(response.json)
      const result = await response.json();
      console.log(result);
      if (result.status === "success") {
        alert("Dados enviados com sucesso!");
        form.reset();
      } else {
        alert("Erro ao enviar os dados. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro:", error);
    }
  });
});
