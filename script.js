// Сеть фастфудов предлагает несколько видов гамбургеров:
// маленький (50 тугриков, 20 калорий)
// большой (100 тугриков, 40 калорий)
// Гамбургер может быть с одним из нескольких видов начинок:
// сыром (+ 10 тугриков, + 20 калорий)
// салатом (+ 20 тугриков, + 5 калорий)
// картофелем (+ 15 тугриков, + 10 калорий)
// Можно добавить добавки:
// посыпать приправой (+ 15 тугриков, 0 калорий)
// полить майонезом (+ 20 тугриков, + 5 калорий).
// Напишите программу, расчитывающую стоимость и калорийность гамбургера.

// Пример работы кода:
// // маленький гамбургер с начинкой из сыра
// var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
// // добавка из майонеза
// hamburger.addTopping(Hamburger.TOPPING_MAYO);
// // спросим сколько там калорий
// console.log(“Calories: “ + hamburger.calculateCalories());
// // сколько стоит
// console.log("Price: “ + hamburger.calculatePrice());
// // я тут передумал и решил добавить еще приправу
// hamburger.addTopping(Hamburger.TOPPING_SAUCE);
// // А сколько теперь стоит?
// console.log("Price with sauce: “ + hamburger.calculatePrice());


Hamburger.SIZE_SMALL = {
    price: 50,
    calorie: 20
};

Hamburger.SIZE_LARGE = {
    price: 100,
    calorie: 40
};

Hamburger.STUFFING_CHEESE = {
    price: 10,
    calorie: 20
};

Hamburger.STUFFING_SALAD = {
    price: 20,
    calorie: 5
};

Hamburger.STUFFING_POTATOES = {
    price: 15,
    calorie: 10
};

Hamburger.TOPPING_MAYO = {
    price: 20,
    calorie: 5
};

Hamburger.TOPPING_SAUCE = {
    price: 15,
    calorie: 0
};

function Hamburger(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.toppings = [];
    console.log(this.toppings)
    this.addTopping = function(topping) {
        this.toppings.push(topping);
    }

    this.calculateCalories = function() {
        let toppingCalorie = [];

        let searchtoppingCalorie = this.toppings.forEach(function(el) {
            if(el.calorie) {
                toppingCalorie.push(el.calorie)
            }
        })

        let sumToppingCalorie= toppingCalorie.reduce(function(sum, item) {
           return sum + item
         });
        
        return this.size.calorie + this.stuffing.calorie + sumToppingCalorie;
    }

    this.calculatePrice = function() {
        let toppingPrice = [];

        let searchtoppingPrice = this.toppings.forEach(function(el) {
            if(el.price) {
                toppingPrice.push(el.price)
            }
        })

        let sumToppingPrice = toppingPrice.reduce(function(sum, item) {
           return sum + item
         });
        
        return this.size.price + this.stuffing.price + sumToppingPrice;
    }
}


// // маленький гамбургер с начинкой из сыра
var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
// console.log('hamburger', hamburger)
// // добавка из майонеза
hamburger.addTopping(Hamburger.TOPPING_MAYO);
// // спросим сколько там калорий
console.log('Calories: ' + hamburger.calculateCalories());
// // сколько стоит
console.log('Price: ' + hamburger.calculatePrice());
// // я тут передумал и решил добавить еще приправу
hamburger.addTopping(Hamburger.TOPPING_SAUCE);
// // А сколько теперь стоит?
console.log('Price with sauce: ' + hamburger.calculatePrice());
