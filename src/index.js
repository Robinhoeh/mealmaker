const menu = {

	_courses: {//property of menu object

		_appetizers: [],//properties of courses object
		_mains: [],
		_desserts: [],

		get appetizers() {
		  return this._appetizers//returning appetizers property
		},
		set appetizers(appetizerIn) {//passing appetizer item
		  this._appetizers.push(appetizerIn);//pushes passed item into appetizers array above
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

	get courses() {//inside menu object - pulling courses from this._courses
		return {
			appetizers: this._courses._appetizers,
			mains: this._courses._mains,
			desserts: this._courses._desserts
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
		return dishes [randomIndex];
	},

	let generateRandomMeal = () => {
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


let meal = menu.generateRandomMeal();
console.log(meal);




