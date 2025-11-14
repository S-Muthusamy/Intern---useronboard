// src/components/UserTable.js

export function createUserTable(users) {
  const wrapper = document.createElement("div");
  wrapper.className = "card shadow-sm";

  const table = document.createElement("table");
  table.className = "table mb-0";

  const rowsHtml = users
    .map(
      (u, index) => `
      <tr>
        <td>${index + 1}</td>
        <td>${u.name}</td>
        <td>${u.email}</td>
        <td>${u.role}</td>
      </tr>
    `
    )
    .join("");

  table.innerHTML = `
    <thead class="table-light">
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
      </tr>
    </thead>
    <tbody>
      ${rowsHtml || `<tr><td colspan="4" class="text-muted text-center">
        No users added yet.
      </td></tr>`}
    </tbody>
  `;

  wrapper.appendChild(table);
  return wrapper;
}
