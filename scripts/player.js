
class Player {
	constructor(id, name) {
		this.id = id;
		this.name = name;
		this.job = jobs[0];
	}

	changeJob(id) {
		id = id ? id : 0
		this.job = jobs[id]
	}
}

