const form = document.querySelector('form');

document.querySelector('.botao').addEventListener('click', (e) => {
  e.preventDefault();

  const informations = new FormData(form);

  informations.map(info => {
    
  });

});

// const tipo = getTipo(tipos);
// const nome = document.querySelector('#nome').value;
// const sobrenome = document.querySelector('#sobrenome').value;
// const tipos = document.querySelectorAll('.tipo').values;
