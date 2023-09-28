// problem 1

function problem1(num1, num2) {
  if (num1 > num2) {
    console.log(`number 1 (${num1}) is grater than number 2 (${num2})`);
  } else {
    console.log(`number 2 (${num2}) is grater then number 1 (${num1})`);
  }
}

problem1(41, 67);

//  problem 2

function problem2(num1, num2, num3) {
  let product = num1 * num2 * num3;

  if (product < 0) {
    // alert("the product of three number sign is -")
    console.log("the product of three number sign is -");
  } else {
    // alert("the product of three number sign is +")
    console.log("the product of three number sign is +");
  }
}

problem2(3, -54, -354);

// problem 3

function problem3(x, y, z) {
  if (x > y && x > z) {
    if (y > z) {
      console.log(`${x} , ${y} , ${z} `);
    } else {
      console.log(`${x} , ${z} , ${y} `);
    }
  }
  if (y > x && y > z) {
    if (x > z) {
      console.log(`${y} , ${x} , ${z} `);
    } else {
      console.log(`${y} , ${z} , ${x} `);
    }
  }
  if (z > x && z > y) {
    if (x > y) {
      console.log(`${z} , ${x} , ${y} `);
    } else {
      console.log(`${z} , ${y} , ${x} `);
    }
  }
}

problem3(145, 738, 820);

// problem 4

function problem4(num1, num2, num3, num4, num5) {
  let largeNumber = Math.max(num1, num2, num3, num4, num5);
  console.log(largeNumber);
}

problem4(-5, -2, -6, 0, -1);

// problem 5

function problem5(min, max) {
    console.log("hi");
  for(let i = min; i <= max; i++) {
    if (i % 2 == 0) {
      console.log(`${i} number is even`);
    } else {
      console.log(`${i} number is odd`);
    }
  }
}

problem5(2,10)


// problem 6

function problem6(name,mark1,mark2,mark3,mark4,mark5){
    let total = mark1 + mark2 + mark3 + mark4 + mark5
    let average = total/5
    if(average >= 90){
        console.log(`${name} is a A grade student with average of ${average}%`)
    }
    else if(average >= 80){
        console.log(`${name} is a B grade student with average of ${average}%`)
    }
    else if(average >= 70){
        console.log(`${name} is a C grade student with average of ${average}%`)
    }
    else if(average >= 60){
        console.log(`${name} is a D grade student with average of ${average}%`)
    }
    else if(average >= 50){
        console.log(`${name} is a E grade student with average of ${average}%`)
    }
    else if(average >= 40){
        console.log(`${name} is a F grade student with average of ${average}%`)
    }
    else{
        console.log(`${name} is a Fail  with average of ${average}%`)

    }

}

problem6("Ram",45,54,34,56,78)

// problem 7

function problem7(min , max){
    for(let i = min; i < max; i++){
        let c = i%10
        let b = ((i-c)%100 )/10
        let a = ((i-(b*10)-c)%1000)/100
        let sum = (a**3 )+(b**3)  +(c**3) 
       
        
        if(i==sum){
            console.log(`${i} is Armstrong `);
           
        }
    }
}
problem7(100,1000)


// problem 8

function problem8 (num){
    for(let i = 1; i<=num ; i++){
        let star="";

        for (let j = 1; j<=i ; j++){
            star += "*"   
        }
        console.log(star);

    }
}

problem8(10)

// problem 9

function problem9(min,max){
    for(let i = min; i<=max; i++){

        if(i%3==0){
            if(i%5==0){
                console.log(`${i} this number is divisable by number 3 amd 5. `);
            }
        }
    }
}

problem9(1,100)

