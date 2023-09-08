let string = "";
let buttons = document.querySelectorAll(".btn");

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (event) => {
    try {
      if (event.target.innerHTML == "=") {
        string = eval(string);

        document.getElementById("screen").innerHTML = string;
      } else if (event.target.innerHTML == "AC") {
        string = "";
        document.getElementById("screen").innerHTML = string;
      } else {
        string = string + event.target.innerHTML;
        document.getElementById("screen").innerHTML = string;
      }
    } catch (error) {
      document.getElementById("screen").innerHTML = "Syntax Error";
    }
  });
});
