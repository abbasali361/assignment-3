// https://github.com/abbasali361/assignment-3

//kilometereToMeter
function kilometereToMeter(kilometer){
    var meter = kilometer *1000;
    return meter;
}
var countMeter = kilometereToMeter(150);
console.log(countMeter);


//BudgetCalculator
function budgetCalculator( watch, phone, laptop){
    var watchPrice = watch * 50;
    var phonePrice = phone * 100;
    var laptopPrice = laptop * 500;
    var totalPrice = watchPrice + phonePrice + laptopPrice;
    return totalPrice;
}
var totalPrice = budgetCalculator(10, 10, 5);
console.log(totalPrice);


//hotelCost 
function hotelCost(days){
    var price = 0;
    if(days <=10){
        price = days * 100;
    }
    else if(days <= 20){
        var firstPart = 10 * 100;
        var general = days - 10;
        var secondPart = general * 80;
        price = firstPart + secondPart;
    }
    else{
        var firstPart = 10 * 100;
        var secondPart = 10 * 80;
        var general = days - 20;
        thirdPart = general * 50;
        price = firstPart + secondPart + thirdPart;
    }
    return price;
}
var totalCost = hotelCost(71);
console.log(totalCost);

// megaFriend
function megaFriend(list){
    var bigFriend='';
    for(var i=0; i<list.length; i++){
        var megaList=list[i];
        if(megaList.length>bigFriend.length){
            bigFriend=megaList;
        }
    }
    return bigFriend;
    
}
var friendList=megaFriend(['tota','shadat','mofiz uddin','jamal khan']);
console.log(friendList);