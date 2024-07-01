function editStudent() {}

function deleteStudent() {}

function initStorage() {
  if (localStorage.getItem("idCount")) {
    let studentsJSON = localStorage.getItem("studentsArray");
    let students = JSON.parse(studentsJSON);
    for (let i = 0; i < students.length; i += 1) {
      const tr = document.createElement("tr");

      // Create cells for ID, Name, Class, GPA
      for (const col in students[i]) {
        const td = document.createElement("td");
        td.textContent = students[i][col];
        tr.appendChild(td);
      }

      // Create cell for actions
      const actionsTd = document.createElement("td");

      // Create Edit button
      const editButton = document.createElement("button");
      editButton.textContent = "Edit";
      editButton.addEventListener("click", () => {
        ///////////////////
        // Add your edit logic here
      });

      // Create Delete button
      let id = students[i].id;
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", function () {
        oldList = localStorage.getItem("studentsArray");
        newlist = JSON.parse(oldList);
        for (let i = 0; i < newlist.length; i += 1) {
          if (newlist[i].id === id) {
            newlist.splice(i, 1);
          }
          localStorage.setItem("studentsArray", JSON.stringify(newlist));
        }
        this.parentNode.parentNode.remove();
      });

      // Append buttons to the actions cell
      actionsTd.appendChild(editButton);
      actionsTd.appendChild(deleteButton);
      tr.appendChild(actionsTd);
      const tbody = document.querySelector("#studentsTable tbody");
      tbody.appendChild(tr);
    }
    return;
  } else {
    localStorage.setItem("idCount", 0);
    localStorage.setItem("studentsArray", JSON.stringify([]));
  }
}

function addStudent() {
  let list = localStorage.getItem("studentsArray");
  let listt = JSON.parse(list);
  console.log(typeof listt);
  let newStudent = {};
  newStudent.id = Number(localStorage.getItem("idCount")) + 1;
  newStudent.name = document.querySelector("#name").value;
  newStudent.class = document.querySelector("#class").value;
  newStudent.gpa = document.querySelector("#gpa").value;
  listt.push(newStudent);
  localStorage.setItem("studentsArray", JSON.stringify(listt));
  localStorage.setItem("idCount", newStudent.id);
  location.reload();
}
