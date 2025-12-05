export function createPlayerCard({name, onNameChange}, playerClass = "Warrior", level = 1) {
    const div = document.createElement("div");
    div.className = "player-card";
    div.innerHTML = `
        <h1 id="name">${name}, ${playerClass}, lvl ${level}</h1>
        <input id="name-input" type="text" value="${name}">
    `;

    const input = div.querySelector("#name-input");
    input.addEventListener("input", () => {
        onNameChange?.(input.value);
    });

    return div;
}