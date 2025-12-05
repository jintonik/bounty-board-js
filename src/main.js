import './style.css'
import { createPlayerCard } from "./components/PlayerCard.js";

const PLAYER_NAME = "Madrigal";

const app = document.getElementById("app");
app.appendChild(createPlayerCard({
  name: PLAYER_NAME,
  onNameChange: function(newName) {
    document.querySelector("#name").innerText = newName;
  }
}));

// document.querySelector('#app').innerHTML = `
//   <div>
//     <h1>Hello, ${PLAYER_NAME}!</h1>
//     <div class="player-card">
//       <label id="hero-name"></label>
//       <input id="hero-name-input" type="text">
//     </div>
//     <p>The hero announces his presence to the world.</p>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `
// setupCounter(document.querySelector('#counter'))