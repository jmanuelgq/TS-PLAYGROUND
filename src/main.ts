function createList(
  listId: string, 
  titulo: string, 
  listArray: string[]
):void {
  const div: HTMLDivElement = document.createElement("div");
  div.classList.add(listId);
  const ul: HTMLUListElement = document.createElement("ul");
  const h2: HTMLHeadingElement= document.createElement("h2");
  document.body.append(div);
  div.append(h2);
  h2.textContent = titulo;
  div.append(ul);

  const candidatos = listArray;
  candidatos.forEach((candidato) => {
    const li:HTMLLIElement = document.createElement("li");
    li.textContent = candidato;
    ul.append(li);
  });

  ul.addEventListener("click", function (event: Event) {
    const target = event.target as HTMLElement;
    if (target.tagName === "LI") {
      target.classList.toggle("selected");
    }
  });
}

createList("listId", "quien ganara las elecciones?", [
  "Porky",
  "Vizcarra",
  "Antauro",
  "Keiko",
  "Butters",
]);
createList("listId", "Cual es tu postre favorito?", [
  "Pie de limon",
  "3 leches",
  "leche asada",
  "torta de chocolate",
]);