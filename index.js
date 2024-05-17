const btn = document.querySelectorAll("button");
const body = document.body;
const app_heading = document.querySelector(".app_heading");

const input_label = document.querySelector(".input_label");
const code_input = document.querySelector("#code_input");
const copy_btn = document.querySelector("#copy_btn");
const alert_box = document.querySelector("#alert_box");

btn.forEach((button) => {
  button.addEventListener("click", () => {
    const color = button.value;
    color_changer(color);
  });
});

function color_changer(color) {
  body.className = "";
  alert_box.className = "";
  alert_box.innerText = "";
  app_heading.className = "";
  input_label.className = "";
  switch (color) {
    case "red":
      body.classList.add("red");
      code_input.value = "#ff0000";
      app_heading.classList.add("white");
      input_label.classList.add("input_label_white");
      break;
    case "blue":
      body.classList.add("blue");
      app_heading.classList.add("white");
      code_input.value = "#310dff";
      input_label.classList.add("input_label_white");
      break;
    case "orange":
      body.classList.add("orange");
      app_heading.classList.add("white");
      code_input.value = "#ff9a03";
      input_label.classList.add("input_label_white");
      break;
    case "green":
      body.classList.add("green");
      app_heading.classList.add("black");
      code_input.value = "#49fe02";
      input_label.classList.add("input_label");
      break;
    case "yellow":
      body.classList.add("yellow");
      app_heading.classList.add("black");
      code_input.value = "#ffff05";
      input_label.classList.add("input_label");
      break;
    case "teal":
      body.classList.add("teal");
      app_heading.classList.add("black");
      code_input.value = "#03ffdd";
      input_label.classList.add("input_label");
      break;
    case "purple":
      body.classList.add("purple");
      app_heading.classList.add("white");
      code_input.value = "#530158";
      input_label.classList.add("input_label_white");
      break;
    default:
      break;
  }

  // copy_color
  copy_btn.addEventListener("click", () => {
    const color_code = code_input.value;
    alert_box.classList.add("alert_box");
    alert_box.innerText = `Your color ${color_code} copied successfully.`;

    // copy to clipboard
    navigator.clipboard
      .writeText(color_code)
      .then(() => {})
      .catch((err) => {
        console.error(err);
      });
  });
}
