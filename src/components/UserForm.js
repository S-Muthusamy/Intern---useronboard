// src/components/UserForm.js

export function createUserForm(onAddUser) {
  const form = document.createElement("form");
  form.className = "card p-3 mb-4 shadow-sm";

  form.innerHTML = `
    <h2 class="h4 mb-3">Add New User</h2>

    <div class="mb-3">
      <label class="form-label">Name</label>
      <input type="text" id="name" class="form-control" required />
    </div>

    <div class="mb-3">
      <label class="form-label">Email</label>
      <input type="email" id="email" class="form-control" required />
    </div>

    <div class="mb-3">
      <label class="form-label">Role</label>
      <select id="role" class="form-select" required>
        <option value="">Select role</option>
        <option value="Student">Student</option>
        <option value="Intern">Intern</option>
        <option value="Admin">Admin</option>
      </select>
    </div>

    <button type="submit" class="btn btn-primary">Add User</button>
  `;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.querySelector("#name").value.trim();
    const email = form.querySelector("#email").value.trim();
    const role = form.querySelector("#role").value;

    if (!name || !email || !role) return;

    onAddUser({ name, email, role });
    form.reset();
  });

  return form;
}
