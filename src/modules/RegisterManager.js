const remoteURL = "http://localhost:8088";

const RegisterManager = {
    getAllUsers() {
        return fetch(`${remoteURL}/users`).then((result) => result.json());
      },
      getUserInfo(email, password){
        return fetch(`${remoteURL}/users?email=${email}&password=${password}`).then((result) => result.json());
      },
      postUser(newUser) {
        return fetch(`${remoteURL}/users`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        }).then((data) => data.json());
      },
}

export default RegisterManager;