const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

function showNotes() {
  const storedNotes = localStorage.getItem("notes");
  if (storedNotes) {
    notesContainer.innerHTML = storedNotes;
  }
  attachEvents(); 
}

function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
  const note = document.createElement("p");
  const delImg = document.createElement("img");

  note.className = "input-box";
  note.setAttribute("contenteditable", "true");
  delImg.src = "assets/delete.png";

  note.appendChild(delImg);
  notesContainer.appendChild(note);

  attachEvents();
  updateStorage();
});

function attachEvents() {
  const notes = document.querySelectorAll(".input-box");

  notes.forEach((note) => {
    const delBtn = note.querySelector("img");

    delBtn.onclick = () => {
      note.remove();
      updateStorage();
    };

    note.onkeyup = () => {
      updateStorage();
    };

    note.onclick = () => {
      if (note.innerText.trim() === "Write something...") {
        note.innerText = "";
      }
    };
  });
}

showNotes();
