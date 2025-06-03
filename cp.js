
const form = document.getElementById('form-contato');
const msg = document.getElementById('msg-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    msg.textContent = 'Mensagem enviada com sucesso!';
    msg.style.color = '#1976d2';
    setTimeout(() => msg.textContent = '', 4000);
});
