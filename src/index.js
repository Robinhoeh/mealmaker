const menu = {

	_courses: {

		_appetizers: [],
		_mains: [],
		_desserts: [],

		get appetizers() {
		  return this._appetizers
		},
		set appetizers(appetizerIn) {
		  this._appetizers.push(appetizerIn);
		},
		get mains() {
		   return this._mains
		 },
		set mains(mainIn){
		  this._mains.push(mainIn);
		},
		get desserts() {
		   return this._desserts;
		 },
		set desserts(dessertIn) {
		  this._desserts.push(dessertIn);
		}
	},

	get courses() {
		return {
			_appetizers: this.courses.appetizers,
			_mains: this.courses.mains,
			_desserts: this.courses.desserts
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




