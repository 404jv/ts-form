const form = document.querySelector('form');

document.querySelector('.botao').addEventListener('click', async (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  const data = getUserData(formData);

  const respose = await fetch('http://localhost:3333/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).catch(err => console.log(err));
    
  const user = await respose.json();

  console.table(user);
});

function getUserData(data) {
  let user = {
    name: '',
    last_name: '',
    email: '',
    job: '',
    seniority: '',
    technoligies: '',
    about: ''
  }

  for (let info of data) {
    user[info[0]] += getUserInfo(info);
  }
  
  return user;
}

function getUserInfo(info) {
  if (info[0] === 'technoligies') {
    return `${info[1]},`;
  }

  return info[1];
}
