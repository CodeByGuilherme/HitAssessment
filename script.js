document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        submitForm();
    });

    function submitForm() {
        // You can use Js to handle form submission here.
        // Voce pode usar Js para manipular o formul'ario aqui.
        // Here you also can use an API to send the form data to the server.
        // Aqui vc tambem pode usar uma API para enviar o formulario pro servidor.
        // For demonstration purposes, let's log the form data to the console.
        // Para demonstrar apenas, vamos dar um log nos dados do formulario no console.
        const formData = new FormData(form);
        console.log('Form Data:', formData);

        // You can perform additional validation or other actions as needed before submitting the form.
        // Voce pode fazer uma validaçao adicional ou alguma outra açao nescessaria antes de enviar o formulario
        // If the form is valid, you can use an Api to sendthe data to the server.
        // Se valido, podemos usar a api para enviar osdados  para o servidor.
        // If the form is not valid, you can display error messages to the user.
        // Se nao for valido, podemos mostrar mensagens de erro ao usuario.

        // For now, lets reset the form after submission for demonstration purposes.
        //por enquanto vamos apenas resetar o formulario para demonstrar.
        form.reset();
    }
});
