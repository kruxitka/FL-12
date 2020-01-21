function Fighter({ name, damage, hp, strength, agility }) {
    let wins = 0;
    let losses = 0;
    let totalHealth = hp;

    return {
        getName: () => name,
        getDamage: () => damage,
        getStrength: () => strength,
        getAgility: () => agility,
        getHealth: () => hp,

        attack: (defender) => {
            const hundred = 100;
            const successProbability = Math.round(Math.random() * hundred);
            if (hundred - (defender.getStrength() - defender.getAgility()) > successProbability) {
                defender.dealDamage(damage);
                console.log(`${name} makes ${damage} damage to ${defender.getName()}`)
            } else {
                console.log(`${name} attack missed`)
            }
        },
        heal: (healthPoints) => healthPoints + hp > totalHealth ? totalHealth : healthPoints + hp,
        dealDamage: (healthAmount) => hp - healthAmount < 0 ? hp : hp - healthAmount,
        logCombatHistory: () => {
            return console.log(`Name: ${name} , Wins: ${wins}, Losses: ${losses}`);
        },
        addWin: () => wins++,
        addLoss: () => losses++
    }
}

function battle(fighterOne, fighterTwo) {
    if (fighterOne.getHealth() === 0 || fighterTwo.getHealth() === 0) {
        fighterOne.getHealth() === 0 ?
            console.log(`${fighterOne.getName()} is dead and can't fight.`)
            : console.log(`${fighterTwo.getName()} is dead and can't fight.`)
        return;
    }
    while (fighterOne.getHealth() > 0 && fighterTwo.getHealth() > 0) {
        fighterOne.attack(fighterTwo);
        if (fighterTwo.getHealth() > 0) {
            fighterTwo.attack(fighterOne);
            if (fighterOne.getHealth() === 0) {
                fighterTwo.addWin();
                fighterOne.addLoss();
                console.log(`${fighterTwo.getName()} has won`)
            }
        } else {
            fighterOne.addWin();
            fighterTwo.addLoss();
            console.log(`${fighterOne.getName()} has won`)
        }
    }
}

// const myFighter = new Fighter({name: 'Maximus', damage: 20, hp: 100, strength: 20, agility: 15})
// const myFighter2 = new Fighter({name: 'Commodus', damage: 25, hp: 90, strength: 25, agility: 20})