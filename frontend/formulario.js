const form = document.querySelector('form');

document.querySelector('.botao').addEventListener('click', async (e) => {
  e.preventDefault();

  const data = new FormData(form);

  const user = getUserData(data);

  const respose = await fetch('http://localhost:3333/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  }).catch(err => console.log(err));

  console.log(await respose.json());
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
