class CheckingsAccount {
    initialBalance: Number
    ownerName: String;
    constructor() {
        this.initialBalance = 23;
        this.ownerName = "name"
    }
    CheckingsAccount() {
        return "Hello, " + this.ownerName + "your inital balence is " + this.initialBalance;
    }
    deposit(cash) {
        this.initialBalance += cash;
    };
    withdrawl(cash) {
        this.initialBalance = (this.initialBalance - cash);
    };
};