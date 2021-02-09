add = document.getElementById("add");
add.addEventListener("click", () => {
  let title = document.getElementById("title").value;
  let desc = document.getElementById("description").value;
  console.log(title);
  if (localStorage.getItem("itemArray") == null) {
    items = [[title, desc]];
    localStorage.setItem("itemArray", JSON.stringify(items));
  } else {
    items = JSON.parse(localStorage.getItem("itemArray"));
    items.push([title, desc]);
    localStorage.setItem("itemArray", JSON.stringify(items));
  }
  update();
});
update();
function update() {
  if (localStorage.getItem("itemArray")) {
    items = JSON.parse(localStorage.getItem("itemArray"));
    let str = "";
    items.forEach((element, index) => {
      str += `<tr>
        <th scope="row">${index + 1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        
      </tr>`;
    });
    tbody = document.getElementById("table");
    tbody.innerHTML = str;
  }
}
