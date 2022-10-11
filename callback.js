const table = document.getElementById('data');
table.innerHTML = load();

fetch('https://jsonplaceholder.typicode.com/users')
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
    table.innerHTML = render(res);
  });

function render(result) {
  let table = '';
  result.forEach((data) => {
    table += `<tr>
      <td>${data.id}</td >
      <td>${data.name}</td>
      <td>${data.username}</td>
      <td>${data.email}</td>
      <td>${data.phone}</td>
      <td>${data.website}</td>
    </tr > `;
  });
  return table;
}

function load() {
  return `<tr>
  <td colspan="6"></td>
  </tr>`;
}
