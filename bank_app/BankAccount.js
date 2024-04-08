class BankAccount{

  constructor(accNo, name, amount){
    this.accountNumber = accNo;
    this.ownerName = name;
    this.balance = amount;
  }

  deposit(amount){
    this.balance += amount;
    console.log(`Account credited by: $${amount}`);
  }
  withdraw(amount){
    if (amount > this.balance) {
      console.log('Insufficient balance');
      return
    }
    this.balance -= amount
    console.log(`Account debited by: $${amount}`);
  }
  getBalance(){
    console.log(`Balance: $${this.balance}`);
  }
  displayAccountInfo(){
    console.log(`Account number: ${this.accountNumber}`);
    console.log(`Owner name: ${this.ownerName}`);
    this.getBalance()
  }
}

let obj1 = new BankAccount('8765', 'Sohel Ahmed', 5000);
let obj2 = new BankAccount('3457', 'John Doe', 3000);


obj1.displayAccountInfo();
obj1.deposit(4000);
obj1.withdraw(20000);
obj1.getBalance();

console.log('');

obj2.displayAccountInfo();
obj2.deposit(6000);
obj2.withdraw(5000);
obj2.getBalance();