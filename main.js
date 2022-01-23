const slide = () => {
  const signUpButton = document.getElementById("signUp");
  const signInButton = document.getElementById("signIn");
  const container = document.getElementById("container");

  signUpButton.addEventListener("click", () => {
    container.classList.add("right-panel-active");
  });

  signInButton.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
  });
};

const register = () => {
  const account = document.getElementById("register");
  account.addEventListener("submit", async (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nombreRegister").value;
    const email = document.getElementById("emailRegister").value;
    const password = document.getElementById("passwordRegister").value;
    try {
      const resp = await fetch(
        "https://tiendavirtualmern.herokuapp.com/api/users",
        {
          method: "POST",
          body: JSON.stringify({
            name: nombre,
            email: email,
            password: password,
          }),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      if (resp.status === 400) {
        alert("Cuenta ya existente");
      } else {
        alert("bienvenido");
      }
    } catch (error) {
      console.log(error);
      alert(error);
    }
  });
};
const login = () => {
  const logi = document.getElementById("login");
  logi.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("emailLogin").value;
    const password = document.getElementById("passwordLogin").value;
    try {
      const resp = await fetch(
        "https://tiendavirtualmern.herokuapp.com/api/users/login",
        {
          method: "POST",
          body: JSON.stringify({
            email: email,
            password: password,
          }),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      if (resp.status === 401) {
        alert("Mail o contraseña icorrecto");
      } else if (resp.status === 500) {
        alert("datos incompletos");
      } else {
        alert("bienvenido");
      }
    } catch (error) {
      console.log(error);
      alert(error);
    }
  });
};

const main = () => {
  slide();
  register();
  login();
};

main();
