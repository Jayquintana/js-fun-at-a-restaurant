function nameMenuItem(name1) {

var menuItemName = `Delicious ${name1}`;

return menuItemName;

};
nameMenuItem('Pizza');

function createMenuItem(name1,price1,type2){

  var menuItem = {
    name : name1,
    price: price1,
    type: type2,
  }
  return menuItem;
}
// createMenuItem(nameMenuItem('French Toast'),10.99, 'breakfast');



function addIngredients(addTopping,ingredients) {
if (ingredients.includes(addTopping) === false){
  ingredients.push(addTopping)
}
}

function formatPrice(initialPrice){
  if (initialPrice === initialPrice) {
    return `$${initialPrice}`;
  }

}
function decreasePrice(decreasedPrice){
var tenPercent = decreasedPrice / 10;
if (decreasedPrice === decreasedPrice){
  return decreasedPrice - tenPercent;
}

}

function createRecipe
(title, ingredients, menuItemType){
var recipes = {
title1: title,
ingredients1: ingredients,
menuItemType1: menuItemType,

}
return recipes
}
module.exports = {
  nameMenuItem,
   createMenuItem,
   addIngredients,
   formatPrice,
  decreasePrice,
  createRecipe
}
