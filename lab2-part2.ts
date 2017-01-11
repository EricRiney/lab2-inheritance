class Savings {
    initialBalance: Number
    ownerName: String;
    constructor() {
        this.initialBalance = 23;
        this.ownerName = "name"
    }
    partOne() {
        return "Hello, " + this.ownerName + "your inital balence is " + this.initialBalance;
    }
}