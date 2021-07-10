
function displayResizeHandle() {
	document.documentElement.classList.add("resizeHandle");
}

function hideResizeHandle() {
	document.documentElement.classList.remove("resizeHandle");
}

function log(data) {
	console.log(data)
}

function startCard(line) {
	stopCard(line)
	const card = new Card(line)
	state.cards.played.push(card)
	state.cards.active.push(card)
	addCardElement(card)
	log(`Start: ${card.toString()}`)
}

function stopCard(line) {
	state.cards.active = state.cards.active.filter( card => {
		if (card.target.id === line[7]) {
			card.endTime = line[1]
			log(`Stop: ${card.toString()}`)
			return false
		}
		return true
	})
}

function addDamage(line) {
	const ability = new Ability(line)

	for (let card of state.cards.active) {
		if (card.target.id === ability.source.id) {
			card.addDamage(ability)
			state.cards.max = Math.max(state.cards.max, card.damage)
			updateCardElements()
			log(`Damage: ${ability.toString()}`)
		}
	}
}

function getPlayer(id, name, jobId) {
	if (!Object.keys(state.players).includes(id)) {
		state.players[id] = new Player(id, name)
	}
	return state.players[id]
}

function getTarget(id, name) {
	if (!Object.keys(state.targets).includes(id)) {
		state.targets[id] = new Target(id, name)
	}
	return state.targets[id]
}

function updateParty(party) {
	state.party = []
	for (let member of party) {
		let player = getPlayer(member.id, member.name)
		player.changeJob(member.jobId)
		state.party.push(player)
	}
}

function addCardElement(card) {
	const container = document.getElementById('card-container');
	const cardElement = new CardElement(card)
	state.cards.elements.push(cardElement)
	container.prepend(cardElement.el)

}

function updateCardElements() {
	for (let el of state.cards.elements) {
		el.update()
	}
}
