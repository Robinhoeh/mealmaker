
const menu = {
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