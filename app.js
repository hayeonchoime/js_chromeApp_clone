const calculator = {
    add : function(a, b){
        console.log(a+b);
    }
  , minus : function(a,b){
        console.log(a-b);
  }
  , nanu : function(a,b){
        console.log(a/b);
  }
  , powerOf : function(a,b){
        console.log(a**b); // 거듭제곱
  }
}

calculator.add(3,2);
calculator.minus(3,2);
calculator.nanu(3,2);
calculator.powerOf(3,2);

// #2.13 [나이 확인하기]
const age = parseInt(prompt("How old are you?"));
console.log(age);
//#2.14 ~ #2.15
console.log(isNaN(age));
if(isNaN(age) || age < 0){ // not a number : number type 아닐 경우
      console.log("Please write a real positive number");
} else if(age < 18) {
      console.log("You are too young");
} else if(age >= 18 && age <= 50){
      console.log("You can drink");
} else if(age >= 50 && age <= 80){
      console.log("You should exercise.");
} else if(age === 100){
      console.log("wow you are wise");
} else if(age > 80){
      console.log("You can do whatever you wandt.");
}



