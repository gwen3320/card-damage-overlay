
class CardElement {
	constructor(card) {
		this.card = card

		this.el = document.createElement('div');
		this.el.className = 'card';

		this.children = {}
		this.children.job = document.createElement('span');
		this.children.target = document.createElement('span');
		this.children.damage = document.createElement('span');
		this.children.bar = document.createElement('div');

		this.children.job.className = 'card-job';
		this.children.job.className = 'card-target';
		this.children.job.className = 'card-damage';
		this.children.bar.className = 'card-bar';

		this.children.job.innerText = this.card.job.abbr;
		this.children.target.innerText = this.card.target.name;
		this.children.damage.innerText = this.card.damage;

		for (let name in this.children) {
			this.el.appendChild(this.children[name])
		}
	}

	update() {
		const percent = Math.floor(100 * this.card.damage / state.cards.max);
		const k = Math.floor(this.card.damage / 100) / 10;
		this.children.damage.innerText = `${k}k`;
		this.children.bar.style.width = `${percent}%`
	}
}
