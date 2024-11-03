document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const cadastroForm = document.getElementById('cadastroForm');
    const commentForm = document.getElementById('commentForm');
    const commentsDisplay = document.getElementById('commentsDisplay');

    // Login Form Submission
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const nome = document.getElementById('nome').value;
            const senha = document.getElementById('senha').value;

            if (nome && senha) {
                alert(`Bem-vindo, ${nome}!`);
                window.location.href = 'index.html';
            } else {
                alert('Por favor, preencha o nome e a senha corretamente.');
            }
        });
    }

    // Cadastro Form Submission
    if (cadastroForm) {
        cadastroForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Cadastro realizado com sucesso!');
            window.location.href = 'login.html';
        });
    }

    // Comentário Submission
    if (commentForm) {
        commentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const commentText = document.getElementById('commentText').value;
            if (commentText.trim()) {
                const comment = document.createElement('p');
                comment.textContent = commentText;
                commentsDisplay.appendChild(comment);
                document.getElementById('commentText').value = '';
            }
        });
    }
});
