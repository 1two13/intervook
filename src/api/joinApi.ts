interface IJoinApi {
  email: string;
  password: string;
  nickname: string;
}

function joinApi({ email, password, nickname }: IJoinApi) {
  const url = `/api/auth/join?email=${email}&password=${password}&nickname=${nickname}`;

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((result) => console.log(result));
}

export default joinApi;
