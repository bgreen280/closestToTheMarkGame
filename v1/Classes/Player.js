export class Players {
	constructor(name, position, origin) {
    this.playersList = {}
	}

	getplayers() {
		return this.name;
	}

	getPosition() {
		return this.position;
	}

	getOrigin() {
		return this.origin;
	}

	// getDistanceFromOrigin() {
	// 	this.updateDistanceFromOrigin();
	// 	return this.distanceFromOrigin;
	// }

	getInformation() {
		for (let prop in Object.keys(this)) {
			console.log(
				`    -  ${Object.keys(this)[prop]}: ${this[Object.keys(this)[prop]]}`
			);
		}
		return this;
	}

	setOrigin(newOrigin) {
		this.origin = newOrigin;
		this.updateDistanceFromOrigin();
		return this.origin;
	}

	// updateDistanceFromOrigin() {
	// 	this.distanceFromOrigin = Math.abs(this.origin - this.position);
	// }
}


export class Player {
	constructor(name, position, origin) {
    this.id = name,
		this.name = name,
		this.position = position
		// this.origin = origin,
		// this.distanceFromOrigin = this.getDistanceFromOrigin()
	}

	getName() {
		return this.name;
	}

	getPosition() {
		return this.position;
	}

	getOrigin() {
		return this.origin;
	}

	// getDistanceFromOrigin() {
	// 	this.updateDistanceFromOrigin();
	// 	return this.distanceFromOrigin;
	// }

	getInformation() {
		for (let prop in Object.keys(this)) {
			console.log(
				`    -  ${Object.keys(this)[prop]}: ${this[Object.keys(this)[prop]]}`
			);
		}
		return this;
	}

	setOrigin(newOrigin) {
		this.origin = newOrigin;
		this.updateDistanceFromOrigin();
		return this.origin;
	}

	// updateDistanceFromOrigin() {
	// 	this.distanceFromOrigin = Math.abs(this.origin - this.position);
	// }
}
