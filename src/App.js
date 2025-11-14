// src/App.js
import { createUserForm } from "./components/UserForm.js";
import { createUserTable } from "./components/UserTable.js";

const users = []; // in-memory list

export function initApp() {
  const root = document.getElementById("app");

  const formSection = document.createElement("section");
  const tableSection = document.createElement("section");
  tableSection.id = "user-table-section";

  root.appendChild(formSection);
  root.appendChild(tableSection);

  const renderTable = () => {
    tableSection.innerHTML = "";
    tableSection.appendChild(createUserTable(users));
  };

  const handleAddUser = (user) => {
    users.push(user);
    renderTable();
  };

  // create form & initial table
  formSection.appendChild(createUserForm(handleAddUser));
  renderTable();
}
