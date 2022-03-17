window.onload = function() {
    let button = document.getElementById('add-name-button').addEventListener('click', addNameToList)
    let numberButton = document.getElementById('number-teams-button').addEventListener('click', addNumberOfTeams)
    let assignButton = document.getElementById('assign-button').addEventListener('click', assignNameToTeam)
}

function addNameToList(e) {
    let liNode = document.createElement('li')
    liNode.className = "list-names"
    let ulNode = document.getElementById('list-of-names')
    let inputNode = document.getElementById('names-text').value
    liNode.innerText = inputNode
    console.log(liNode)
    ulNode.appendChild(liNode)
}

function addNumberOfTeams() {
    let numberInput = document.getElementById('number-input').value
    for (let i = 1; i <= numberInput; i++) {
        
        let h3Node = document.createElement('h3')
        let ulListNode = document.createElement('ul')
        let rowNode = document.getElementById('teams-generated')
        // let liNode = document.createElement('li')
        // let listOfNames = document.querySelectorAll('li')
        let colNode = document.createElement('div')
        colNode.className = "col-4 team-to-assign"
        // console.log("hello")
        h3Node.innerText = "Team " + i
        rowNode.appendChild(colNode)
        colNode.appendChild(h3Node)
    }
}


function assignNameToTeam(e) {
    // console.log("hello")
    let liNamesNode = document.getElementsByClassName('list-names')
    console.log(liNamesNode)
    let randomName = '';
    for (let i = 0; i < liNamesNode.length; i++) {
        console.log("hello")
        randomName = liNamesNode[Math.floor(Math.random() * liNamesNode.length)]
        let ulNode = document.createElement('ul')
        let liNode = document.createElement('li')
        ulNode.appendChild(liNode)
        liNode.innerText = randomName
        console.log(randomName)
        let teamNode = document.getElementsByClassName('team-to-assign')
        console.log(teamNode)
        teamNode[Math.floor(Math.random() * teamNode.length)].appendChild(liNode)

        delete liNamesNode[i]
    }
}