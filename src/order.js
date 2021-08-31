function takeOrder(order,deliveryOrder){
if (deliveryOrder > 3){
  deliveryOrder -1;
}
return deliveryOrder.push(order);
}


module.exports = {

  takeOrder,
  // refundOrder,
  // listItems,
  // searchOrder
}
