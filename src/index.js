const menu = {

	courses: {

		appetizers: [],
		mains: [],
		desserts: [],

	set appetizers(appetizerIn) {
		this.appetizers.push(appetizerIn);
		},

	get appetizers() {
		return this.appetizers;
	},

	set mains(mainIn) {
		this.mains.push(mainIn);
	},

	get mains(){
		return this.mains;
	},

	set desserts(dessertIn) {
		this.desserts.push(dessertIn)
	}, 

	get desserts() {
		return this.desserts;
	},

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
			price: dishPrice
		};
		this.courses[courseName].push(dish)
	},

	// Get randomized dish
	getRandomDishFromCourse(courseName) {
		const dishes = this.courses[courseName];
		const randomIndex = Math.floor( Math.random () * dishes.length);
	},

	const generateRandomMeal = () => {
		const appetizers = this.getRandomDishFromCourse('appetizers');
		const mains = this.getRandomDishFromCourse('mains');
		const desserts = this.getRandomDishFromCourse('desserts');
		const totalPrice = appetizers.price + mains.name + desserts.name;
		return `For starters, you will be having the ${appetizers} followed by ${mains} and for dessert you wil be
		having ${desserts}. The winter special is on for ${totalPrice}`;
	};

};

	menu.addDishToCourse('appetizers', 'salad', 12);
	menu.addDishToCourse('mains', 'cheese', 13);


const meal = menu.generateRandomMeal();

console.log(meal);




