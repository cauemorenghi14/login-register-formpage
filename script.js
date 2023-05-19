const botaoOlho1 = document.querySelectorAll('.bi-eye-fill'); // Ícone de olho na div "senha"
const inputSenha = document.querySelectorAll('.password'); // Input da div "senha" com type = 'password'

let itens = [];


botaoOlho1.forEach((item, i) => {
    item.addEventListener('click', () => {
        if (item.classList.contains('bi-eye-fill')) {
            item.classList.remove('bi-eye-fill')
            item.classList.add('bi-eye-slash-fill')
            inputSenha[i].type = 'text'
        } else {
            item.classList.add('bi-eye-fill')
            item.classList.remove('bi-eye-slash-fill')
            inputSenha[i].type = 'password'
        }
    })
}) 
// Essa código JS acima permite que, ao clicar sobre o olho, mude o ícone para outro olho, simulando um "ver senha" e "ocultar senha"
// Esse código JS acima também permite que, ao deixar no "ver senha", o type='password' é mudado para type='text', possibilitando ver o que está sendo escrito. E vice versa- para deixar de ver o que está escrito, no modo "ocultar senha"




const form = document.querySelector('.formulario');

form.addEventListener('submit', (evento) => {
  evento.preventDefault();

  const nome = document.getElementById('fullname').value;
  const email = document.getElementById('email').value;
  const celular = document.getElementById('phone').value;
  const senha = document.getElementById('password').value;

  const dados = {
    'nome': nome,
    'email': email,
    'celular': celular,
    'senha': senha
  };

  if (localStorage.getItem('cadastro')) {
    itens = JSON.parse(localStorage.getItem('cadastro'));
  }

  itens.push(dados);
  localStorage.setItem('cadastro', JSON.stringify(itens));

  form.reset();
});


// O código JS acima permite que seja criado um simples BANCO DE DADOS, utilizando o armazenamento do própprio navegador. 
// Esse banco de dados criará uma lista a cada registro feito na página html e salvará os dados: nome, email, celular e senha.
// Esse banco de dados pode ser acessado em: Inspecionar ---> Aplicativo



