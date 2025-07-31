import { createStudent, type Student } from "./student";
import "./style.css";

export function createList(container: HTMLDivElement): void {
  const inputElement: HTMLInputElement = document.createElement("input");
  const buttonElement: HTMLButtonElement = document.createElement("button");
  const listElement: HTMLUListElement = document.createElement("ul");

  inputElement.placeholder = "Add: student name, nota1 nota2...";
  buttonElement.textContent = "Add student";

  function buttonHandler(_event: Event): void {
    const itemElement: HTMLLIElement = document.createElement("li");
    const student: Student = createStudent(inputElement.value);
    itemElement.textContent = `Name: ${student.name} - Notes: ${
      student.notes
    } - Average: ${student.average.toFixed(2)}`;

    listElement.append(itemElement);
    inputElement.value = "";
  }

  function toggleHandler(event: Event): void {
    const itemElement: HTMLLIElement = event.target as HTMLLIElement;
    itemElement.classList.toggle("toggle");
  }

  buttonElement.addEventListener("click", buttonHandler);
  listElement.addEventListener("click", toggleHandler);

  container.append(inputElement, buttonElement, listElement);
}