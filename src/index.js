const menu = {

	courses: {

		appetizers: [],
		mains: [],
		desserts: [],
	},

	set appetizers() {

	},

	get appetizers() {

	},
	set mains() {

	},

	set mains() {

	},
	set desserts() {

	}, 

	get desserts() {

	}
	get courses() {
		return {
			appetizers: this.courses.appetizers,
			mains: this.courses.mains,
			desserts: this.courses.desserts
		}
	},

	addDishToCourse(courseName, dishName, dishPrice) {
		const dish = {
			name: dishName,
			price: dishPrice;
		};
		this.courses[courseName].push(dish)
	},

	// Get randomized dish
	getRandomDishFromCourse(courseName) {
		const dishes = this.courses[courseName];
		const randomIndex = Math.floor( Math.random () * dishes.length);
	};

	const generateRandomMean = () => {
		const appetizers = this.getRandomDishFromCourse('appetizers');
		const mains = this.getRandomDishFromCourse('mains');
		const desserts = this.getRandomDishFromCourse('desserts');
		const totalPrice = appetizers.price + mains.name + desserts.name;
		return `For starters, you will be having the ${appetizers} followed by ${mains} and for dessert you wil be
		having ${desserts}. The winter special is on for ${totalPrice}`;
	};

};