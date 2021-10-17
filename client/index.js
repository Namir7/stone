const passwordInput = document.querySelector("#password");
const submitBtn = document.querySelector("#submit");

let pass = passwordInput.value;

submitBtn.addEventListener("click", () => {
  authentification(pass);
  passwordInput.value = "";
});

passwordInput.addEventListener("input", () => {
  pass = passwordInput.value;
});

axios.defaults.baseURL = "http://localhost:3000";

async function authentification(pass) {
  const res = await axios.post("/auth", {
    pass: sha256(pass),
  });

  console.log(res);
}
