
const menu = {
	addDishToCourse(courseName, dishName, dishPrice) {
		const dish{
			name: 'pasta',
			price: 10.99;
		};
		this.courses[courseName].push(dish)
	}
};
	courses: {
		get courses() {
			return {
				appetizers: this.courses.appetizers,
				mains: this.courses.mains,
				desserts: this.courses.desserts
			}
		},
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

};