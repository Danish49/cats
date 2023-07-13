const requestbtn = document.querySelector("#btn");
const adviceId = document.querySelector(".advNumber");
const adviceText = document.querySelector(".adviceText");

const sendRequest = async () => {
  try {
    const response = await axios.get("https://catfact.ninja/fact");
    const requestId = response.data.fact.length;
    const requestText = response.data.fact;
    adviceId.innerText = `Fact #${requestId}`;
    adviceText.innerText = `"${requestText}"`;
  } catch (e) {
    adviceText.innerText = `"${e}"`;
  }
};

requestbtn.addEventListener("click", () => {
  sendRequest();
});
