
class Card {
	constructor(line) {
		this.name = line[3];
		this.type = cards.cards[line[3]].type;
		this.source = getPlayer(line[5], line[6]);
		this.target = getPlayer(line[7], line[8]);
		this.startTime = line[1];
		this.endTime = null;
		this.job = this.target.job;
		this.correctType = this.job.type === this.type;
		this.buffPercent = this.correctType ? cards.cards[this.name].buff : cards.cards[this.name].buff / 2;
		this.hits = [];
		this.damage = 0;
	}

	addDamage(ability) {
		this.hits.push(ability);
		this.damage += ability.damage
		// this.damage += ability.damage - (ability.damage / (1 + this.buffPercent));
	}

	textDisplay() {
		const damage = Math.floor(this.damage)
		return `${this.name} - ${this.target.name} (${damage})`
	}

	toString() {
		return `[${this.startTime} - ${this.endTime}] ${this.name} - ${this.target.name} (${this.damage})`;
	}
}
