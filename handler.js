// disable variables
let disabledPizza1 = ['lobster', 'oyster', 'salmon','bacon', 'duck', 'sausage']
let disabledPizza2 = ['avocado', 'tuna', 'duck', 'sausage']
let disabledPizza3 = ['avovado', 'lobster', 'oyster', 'salmon']

let allToppings = document.getElementsByName('topping')


let updateMenu = () => {
  
  // make variables
  let price = 0
  let pricePizza = 0
  let pizzas = document.getElementsByName('item-pizza')
  let size = getSizeValue()

  //reset disable topping
  resetDisabledPizza()

  // pizza logic
  for (let i = 0; i < pizzas.length; i++) {
    if (pizzas[i].checked){
      pricePizza += parseInt(pizzas[i].value)
      //console.log(`${pizzas[i].value} dan ${pizzas[i].id}`)
      
      // disable topping menurut jenis pizza
      if (pizzas[i].id == 'pizza-1'){
        disableToppings(disabledPizza1)
      } else if (pizzas[i].id == 'pizza-2') {
        disableToppings(disabledPizza2)
      } else {
        disableToppings(disabledPizza3)
      }
    }
  }
  //topping logic
  for (let i = 0; i < toppings.length; i++) {
    if (allToppings[i].checked) {
      price += parseInt(allToppings[i].value);  
    }
  }
  document.getElementById('price').innerHTML = `Price Total: $${price + pricePizza + size}`
  //console.log(allTopping)
}

//function disable toppings
let disableToppings = disabledPizza => {
  disabledPizza.filter((item) => {
    for (let i = 0; i < allToppings.length; i++) {
      if (allToppings[i].id == item) {
        allToppings[i].disabled = true
        allToppings[i].checked = false
      }
    }
  })
  //console.log('ok')
}

// function untuk reset disabled
let resetDisabledPizza = () => {
  for (let i = 0; i < allToppings.length; i++) {
    allToppings[i].disabled = false
  }
}

//mendapatkan nilai size
let getSizeValue = () => {
  let tmp = document.getElementsByName('size')
  for (let i = 0; i < tmp.length; i++) {
    if (tmp[i].checked) {
      //console.log(`${tmp[i].value} ok`)
      return parseInt(tmp[i].value) 
    }
  }
}

/**
 * nama: Ahmad rasyid Hakim S
 *
 */