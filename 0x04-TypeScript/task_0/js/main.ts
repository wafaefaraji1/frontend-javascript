// 1. Create the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// 2. Create two students
const student1: Student = {
  firstName: "Wafae",
  lastName: "Faraji",
  age: 20,
  location: "Fes"
};

const student2: Student = {
  firstName: "Sara",
  lastName: "El Amrani",
  age: 21,
  location: "Rabat"
};

// 3. Create studentsList array
const studentsList: Student[] = [student1, student2];

// 4. Create the table
const table = document.createElement("table");
const tbody = document.createElement("tbody");

// 5. Loop through studentsList and append rows
studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);
