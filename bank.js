// 2> Bank App 1> create a Banks class with following method's   i)login : it should take username and password from user and authonticate based on bankdata stored in a seprate .json file all other methods on the user object should not be accisable before user have logged in succesfully.   ii)balance: It should display the current amout in the users bank data.   iii)withdraw: It should take amount as input parameter and substract the amout from the balance.   iV)deposite : It should take amount as input parameter and add the amount to balance you can create json object as per your understanding I am sharing one sample json example here please feel free to experiment and alter the json structure and also please feel free to reach me out in weekend as well if you have any doubt about the task.

class Banks {
  constructor() {
    this.isLoggedIn = false;
    this.userData = {};
  }

  login(username, password) {
    // Simulating loading user data from the JSON file
    const bankData = {
      user123: { password: "password123", balance: 1000 },
      // Add more users if needed
    };

    // Check if the username exists and the password is correct
    if (bankData[username] && bankData[username].password === password) {
      this.isLoggedIn = true;
      this.userData = bankData[username];
      console.log("Login successful.");
    } else {
      console.log("Invalid username or password. Login failed.");
    }
  }

  // Method to check if the user is logged in before executing other methods
  checkLogin() {
    if (!this.isLoggedIn) {
      console.log("Please log in first.");
      return false;
    }
    return true;
  }

  balance() {
    if (this.checkLogin()) {
      console.log(`Current balance: $${this.userData.balance}`);
    }
  }

  withdraw(amount) {
    if (this.checkLogin()) {
      if (amount > 0 && amount <= this.userData.balance) {
        this.userData.balance -= amount;
        console.log(
          `Withdrawal successful. New balance: $${this.userData.balance}`
        );
      } else {
        console.log("Invalid withdrawal amount or insufficient funds.");
      }
    }
  }

  deposit(amount) {
    if (this.checkLogin()) {
      if (amount > 0) {
        this.userData.balance += amount;
        console.log(
          `Deposit successful. New balance: $${this.userData.balance}`
        );
      } else {
        console.log("Invalid deposit amount.");
      }
    }
  }
}

// Example usage:
const bank = new Banks();
bank.login("user123", "password123");
bank.balance();
bank.withdraw(50);
bank.deposit(100);
