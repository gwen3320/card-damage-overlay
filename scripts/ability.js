
class Ability {
	constructor(line) {
		this.code = line[4];
		this.name = line[5];
		this.time = line[1];
		this.source = getPlayer(line[2], line[3]);
		this.target = getTarget(line[6], line[7]);
		this.flags = line[8];
		this.damage = Ability.calcDamage(line[9]);
	}

	static calcDamage(hex) {
		if (hex.slice(-4,-3) === "4") {
			const parts = [
				hex.slice(0,2),
				hex.slice(2,4),
				hex.slice(4,6),
				hex.slice(6,8)
			];
			const bmd = (parseInt(parts[1]) - parseInt(parts[3])).toString(16);
			return parseInt(parts[3] + parts[0] + bmd, 16);
		} else {
			return parseInt(hex.slice(0,4), 16);
		}
	}

	toString() {
		return `[${this.time}] ${this.source.name} + ${this.name} => ${this.target.name} (${this.damage})`;
	}
}
