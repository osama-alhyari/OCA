const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 1- Write a program to declare two numbers. If both numbers are greater than 10,
//print "Both numbers are greater than 10". Otherwise, print "At least one number is not greater than 10".
let num1, num2;
rl.question(`Enter two numbers plz (seperate them by a space)`, (nums) => {
  arr = nums.split(" ");
  num1 = Number(arr[0]);
  num2 = Number(arr[1]);
  if (num1 > 10 && num2 > 10) {
    console.log("both greater");
  } else if (num1 > 10 || num2 > 10) {
    console.log("atleast one is greater");
  } else {
    console.log("none is greater");
  }

  // 2- Write a program to declare a username and a password.
  //If both the username and password are correct, print "Access granted". Otherwise, print "Access denied".

  rl.question(
    `Enter username and password (seperate them by a space)`,
    (creds) => {
      arr = creds.split(" ");
      username = arr[0];
      password = arr[1];
      if (username === "osama" && password === "123password") {
        console.log("access granted");
      } else {
        console.log("access denied");
      }
      // 3- Write a program to declare a number. If the number is between 10 and 20 (inclusive), print "The number is between 10 and 20".
      // Otherwise, print "The number is not between 10 and 20".
      rl.question(`Enter a number (seperate them by a space)`, (num) => {
        num1 = Number(num);
        if (num1 > 9 && num1 < 21) {
          console.log("between 10 and 20");
        } else {
          console.log("not inbetween");
        }
        // 4- Write a program that to declare age and whether they have a driver's license (yes or no).
        //If the user is 18 or older and has a driver's license, print "You can drive". Otherwise, print "You cannot drive".

        rl.question(`How old are you?`, (num) => {
          age = Number(num);
          rl.question(`do you have a driving license? (yes or no)`, (ans) => {
            if (age >= 18 && ans === "yes") {
              console.log("you can drive");
            } else {
              console.log("you cant drive");
            }
            // 5- Write a program to declare a number.
            //If the number is greater than 10 or less than 0, print "Invalid number". Otherwise, print "Valid number".
            rl.question(`enter a number`, (num) => {
              num1 = Number(num);
              if (num1 > 10 || num1 < 0) {
                console.log("invalid number");
              } else {
                console.log("valid number");
              }
              // 6- Write a programto declare a number.
              //If the number is between 5 and 10 (inclusive) or between 20 and 25 (inclusive), print "The number is valid".
              //Otherwise, print "The number is not valid".
              rl.question(`enter a number`, (num) => {
                num1 = Number(num);
                if ((num1 >= 5 && num1 <= 10) || (num1 >= 20 && num1 <= 25)) {
                  console.log("valid");
                } else {
                  console.log("invalid");
                }
                // 7- to declare a password. If the password is "secret" or "password", print "Access granted".
                //Otherwise, print "Access denied".
                rl.question(`enter a password`, (pass) => {
                  if (pass === "secret" || pass === "password") {
                    console.log("access granted");
                  } else {
                    console.log("access denied");
                  }
                  // 8- Write a program to declare a number. If the number is between 0 and 100 (inclusive) and is even,
                  //print "The number is even and between 0 and 100". Otherwise, print "The number is not even and/or not between 0 and 100".
                  rl.question(`enter a number`, (num) => {
                    num1 = Number(num);
                    if (num1 >= 0 && num1 <= 100 && num1 % 2 == 0) {
                      console.log("even and between 0 and 100");
                    } else {
                      console.log("not even or not inbetween 0 and 100");
                    }
                    // 9- Write a program to declare two numbers. If either number is negative, print "At least one number is negative".
                    //Otherwise, print "Both numbers are positive".
                    rl.question(`enter a number`, (nums) => {
                      arr = nums.split(" ");
                      num1 = Number(arr[0]);
                      num2 = Number(arr[1]);
                      if (num1 < 0 || num2 < 0) {
                        console.log("at least one negative");
                      } else {
                        console.log("both positive");
                      }
                      // 10- Write a program to declare age and whether they are a student (yes or no).
                      //If the user is under 18 or is a student, print "You qualify for a discount". Otherwise, print "You do not qualify for a discount".
                      rl.question(`How old are you?`, (num) => {
                        age = Number(num);
                        rl.question(`are you a student? (yes or no)`, (ans) => {
                          if (age < 18 || ans === "yes") {
                            console.log("you qualify for a discount");
                          } else {
                            console.log("you dont qualify for a discount");
                          }
                          rl.close();
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    }
  );
});
