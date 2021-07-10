
class Player {
	constructor(id, name) {
		this.id = id;
		this.name = name;
		this.job = jobs[0];
	}

	changeJob(jobId) {
		jobId = jobId ? jobId : 0
		this.job = jobs[jobId]
	}
}

