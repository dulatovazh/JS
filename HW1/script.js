const tapButton = document.getElementById("tap");
const coinSpan = document.querySelector(".coin span");
const energySpan = document.querySelector(".power span");

function clickTap() {
    let coins = parseInt(coinSpan.textContent);
    let energy = parseInt(energySpan.textContent);

    coins += 5;


    if (energy >= 5) {
        energy -= 5;
    } else {
        energy = Math.max(energy, 0);
    }

    if (coins >= 100) {
        coins = 100;
    }

    coinSpan.textContent = coins;
    energySpan.textContent = energy;
}

tapButton.addEventListener("click", clickTap);

