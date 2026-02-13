const form = document.getElementById("myForm");
const extraSection = document.getElementById("extraSection");

let step = 1;
let generatedCaptcha = "";

function generateCaptcha() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let captcha = "";
  for (let i = 0; i < 6; i++) {
    captcha += chars[Math.floor(Math.random() * chars.length)];
  }
  return captcha;
}

async function firstSubmitFlow() {
  await new Promise(resolve => setTimeout(resolve, 300));

  generatedCaptcha = generateCaptcha();

  extraSection.innerHTML = `
    <div class="captcha-box">${generatedCaptcha}</div>
    <input type="text" id="captchaInput" placeholder="Enter captcha here" required />
    <input type="text" id="field3" placeholder="Enter third value" required />
  `;
}

async function secondSubmitFlow() {
  await new Promise(resolve => setTimeout(resolve, 300));

  const userCaptcha = document.getElementById("captchaInput").value;

  if (userCaptcha === generatedCaptcha) {
    alert("Submitted successfully");
  } else {
    alert("Invalid captcha");
  }
}

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  if (step === 1) {
    await firstSubmitFlow();
    step = 2;
  } else {
    await secondSubmitFlow();
  }
});
