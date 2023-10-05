// getting the referece of the keyinsert
const insert = document.querySelector("#insert");

// eventlistener at window
window.addEventListener("keydown", (e) => {
  insert.innerHTML = `
    <div class = 'color'>
    <table>
  <tr>
    <th>key</th>
    <th>keyCode</th>
    <th>Code</th>
  </tr>
  <tr>

    <td>${e.key === " " ? " space" : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
    </div>
    `;
});
