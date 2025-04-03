function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
  });
}

function generatePoem(event) {
  event.preventDefault();
  let instructionInput = document.querySelector("#user-instructions");
  let apiKey = "2a2d11ob41f23821caed90d45et0cd09";
  let prompt = `User instructions :Generate an English poem about ${instructionInput.value}`;
  let context =
    "You are a romantic poet and love to write short poems. Your mission is to generate a 4 line poem in basic HTML. Make sure to follow the user instructions. Sign the poem with '-SheCodes AI' inside a <strong> element and don't write 'HTML' above the generated poem";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="blink">⏳Generating an English poem about ${instructionInput.value}</div>`;
  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
