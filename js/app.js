/**
 * load items
 * select items
 * return selected items
 */

class MenuForm {

    constructor() {
        // access DOM elements
        this.person = document.getElementById('person').value 
        this.meatRow = document.getElementById('meatRow')
        this.sidesRow = document.getElementById('sidesRow')
        this.dessertsRow = document.getElementById('dessertsRow')
        this.drinksRow = document.getElementById('drinksRow')
        this.foodList = document.getElementById('foodList')
        // create array of food items
        this.menu = [
            {
                id: 1,
                type: 'meat',
                item: 'fried turkey',
                imgUrl: 'fried_turkey.jpeg',
                isChecked: false
            },
            {
                id: 2,
                type: 'meat',
                item: 'oven turkey',
                imgUrl: 'oven_turey.jpeg',
                isChecked: false
            },
            {
                id: 3,
                type: 'meat',
                item: 'ham',
                imgUrl: 'ham.jpeg',
                isChecked: false
            },
            {
                id: 4,
                type: 'meat',
                item: 'turducken',
                imgUrl: 'turducken.jpeg',
                isChecked: false
            },
            {
                id: 5, 
                type: 'sides',
                item: 'dressing',
                imgUrl: 'dressing.jpeg',
                isChecked: false
            }, 
            {
                id: 6,
                type: 'sides',
                item: 'turnip greens',
                imgUrl: 'turnip_greens.jpeg',
                isChecked: false
            },
            {
                id: 7,
                type: 'sides',
                item: 'mashed potatoes w/gravy',
                imgUrl: 'mashed_potatoes.jpeg',
                isChecked: false
            },
            {
                id: 8,
                type: 'sides',
                item: 'deep fried loaded baked potato balls',
                imgUrl: 'baked_potato_balls.jpeg',
                isChecked: false
            },
            {
                id: 9,
                type: 'sides',
                item: "mac n' cheese",
                imgUrl: 'macncheese.jpeg',
                isChecked: false 
            },
            {
                id: 10,
                type: 'sides',
                item: 'cranberry sauce',
                imgUrl: 'cranberry_sauce.jpeg',
                isChecked: false
            },
            {
                id: 11, 
                type: 'sides',
                item: 'greenbean casserole',
                imgUrl: 'greenbean_casserole.jpeg',
                isChecked: false
            },
            {
                id: 12,
                type: 'sides',
                item: 'cornbread',
                imgUrl: 'cornbread.jpeg',
                isChecked: false
            },
            {
                id: 13, 
                type: 'desserts',
                item: 'sweet potato pie',
                imgUrl: 'sweet_potato_pie.jpeg',
                isChecked: false
            },
            {
                id: 14,
                type: 'desserts',
                item: 'pecan pie',
                imgUrl: 'pecan_pie.jpeg',
                isChecked: false
            },
            {
                id: 15, 
                type: 'desserts',
                item: 'pound cake',
                imgUrl: 'pound_cake.jpeg',
                isChecked: false
            },
            {
                id: 16, 
                type: 'desserts',
                item: 'bread pudding',
                imgUrl: 'bread_pudding.jpeg',
                isChecked: false
            },
            {
                id: 17,
                type: 'drinks',
                item: 'ginger ale',
                imgUrl: 'ginger_ale.jpeg',
                isChecked: false
            },
            {
                id: 18,
                type: 'drinks',
                item: 'sweet tea',
                imgUrl: 'sweet_tea.jpeg',
                isChecked: false
            },
            {
                id: 19,
                type: 'drinks',
                item: 'whiskey',
                imgUrl: 'whiskey.jpeg',
                isChecked: false
            },
            {
                id: 20,
                type: 'drinks',
                item: 'lemonade',
                imgUrl: 'lemonade.jpeg',
                isChecked: false
            }
        ]
    }

    init() {
        console.log('initialized')
    }

    
}

const action = new MenuForm() 
action.init()