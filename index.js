function getDiceRollArray(diceCount) {
    return new Array(diceCount).fill(0).map(() => {
        return Math.floor(Math.random()*6)+1
    })
}

function getDiceHtml(diceCount) {
    return getDiceRollArray(diceCount).map((num) => {
        return `<div class="dice">${num}</div>`
    }).join('')
}

const hero = {
    id: 'hero',
    name: 'Wizard',
    avatar: "images/wizard.png",
    health: '60', 
    diceCount: 3
}

const monster = {
    id: 'monster',
    name: 'Orc',
    avatar: "images/orc.png",
    health: '10',
    diceCount: 1
}

function renderCharacter(data) {
    const {id, name, avatar, health, diceCount} = data

    const diceHTML = getDiceHtml(diceCount)
        
    document.getElementById(id).innerHTML = 
    ` <div class="character-card">
        <h4 class="name">${name}</h4>
        <img class="avatar" src="${avatar}"/>
        <p class="health">health: <b>${health}</b></p>
        <div class="dice-container">
        ${diceHTML}
        </div>
    </div>
    `
}

renderCharacter(hero);
renderCharacter(monster);





