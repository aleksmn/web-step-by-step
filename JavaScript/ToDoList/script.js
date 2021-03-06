const close = document.getElementsByClassName("close");


// Кнопка добавления задачи
document.querySelector(".addBtn").onclick = function () {
  let li = document.createElement("li");
  let inputValue = document.getElementById("todo-input").value;
  let t = document.createTextNode(inputValue);

  li.appendChild(t);

  if (inputValue == "") {
    alert("Нужно написать задачу");
    return
  } else {
    document.getElementById("todo-ul").appendChild(li);
  }

  document.getElementById("todo-input").value = "";

  let span = document.createElement("span");
  let txt = document.createTextNode("\u00D7"); // знак ×

  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (closeBtn of close) {
    // console.log(closeBtn);

    closeBtn.onclick = function () {
      let div = this.parentElement;
      div.style.display = "none";
    };
  }
}


// Пометка "Выполнено"
let list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName == "LI") {
      ev.target.classList.toggle("checked");
    }
  }
);