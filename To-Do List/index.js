let inputUser = document.getElementById("inputUser");
let addbtn = document.getElementById("addbtn");
let btnText = addbtn.innerText;
let records = document.getElementById("records");
let edit_id = null;

// Add button Disabled Function-----------------------------------------------------------------------------

function success() {
  if (inputUser.value === "") {
    addbtn.disabled = true;
  } else {
    addbtn.disabled = false;
  }
}

function buttonDisabled() {
  addbtn.disabled = true;
}

let userData = [];

// Onclick Function------------------------------------------------------------------------------------------

addbtn.onclick = () => {
  let userValue = inputUser.value;
  if (edit_id != null) {
    // edit
    userData.splice(edit_id, 1, { name: userValue });
    edit_id = null;
  } else {
    // insert
    userData.push({ name: userValue });
  }
  inputUser.value = "";
  addbtn.innerText = btnText;
  saveInfo(userData);
};

// Get Item From Local Storage---------------------------------------------------------------------------------

let strobj = localStorage.getItem("data");
if (strobj != null) {
  userData = JSON.parse(strobj);
}

// Save Function----------------------------------------------------------------------------------------------

function saveInfo(userData) {
  let objstr = JSON.stringify(userData);
  localStorage.setItem("data", objstr);
  displayInfo();
}

// Display Function-------------------------------------------------------------------------------------------

function displayInfo() {
  let statement = "";
  userData.forEach((val, i) => {
    statement += `<div>
    <i class="fa fa-trash-o" aria-hidden="true" onclick="deleteInfo(${i})"></i>
    <li>${val.name}</li>
    <i  class="fa fa-pencil-square-o" aria-hidden="true" onclick="editInfo(${i})"></i>
    </div>`;
  });
  records.innerHTML = statement;
}

// EditInfo function------------------------------------------------------------------------------------------

function editInfo(id) {
  edit_id = id;
  inputUser.value = userData[id].name;
  addbtn.innerText = "Save";
}

// Delete Function--------------------------------------------------------------------------------------------

function deleteInfo(id) {
  userData.splice(id, 1);
  saveInfo(userData);
}
