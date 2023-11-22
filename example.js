// function deposit(){
//     return 1
// }

const prompt = require("prompt-sync")();

const deposit = () => {
    while (true){
        const depositAmount = prompt("Enter a deposit amount: ");
        const numberDepositAmount= parseFloat(depositAmount);

        if (isNaN(depositAmount) || depositAmount <= 0) {
            console.log("Invalid try again");
        }
        else{
            return numberDepositAmount
        }
    }
};

const getNumberOfLines = () => {
    while (true){
        const lines = prompt("Enter a number of lines: ");
        const numberOfLines= parseFloat(lines);

        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
            console.log("Invalid try again");
        }
        else{
            return numberOfLines
        }
    }

}

const getBet = (balance) => {
    while (true){
        const bet = prompt("Enter a bet: ");
        const numberBet= parseFloat(bet);

        if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance) {
            console.log("Invalid try again");
        }
        else{
            return numberBet
        }
    }
}
const random = (max) => {
    const number = Math.floor(Math.random()*max)

    return number
}

const spin = () => {
    let symbols=["A","A","A","B","B","B","C","C","C"]
    let slot_machine=[["x","x","x"],["x","x","x"],["x","x","x"]]


    for (let i = 0; i < 9; i++){
        const arrayposition = random(symbols.length);
        const slotMachineColumn = i%3;
        const slotMachineRow = Math.floor(i/3)
        slot_machine[slotMachineRow][slotMachineColumn]=symbols.splice(arrayposition,1);
        // console.log(slotMachineRow)
        // console.log(slotMachineColumn)
        // console.log(slot_machine[slotMachineRow][slotMachineColumn])
        // console.log(slot_machine[slotMachineRow])
        // console.log(slot_machine[0])
        // console.log(slot_machine[1])
        // console.log(slot_machine[2])
    }


    console.log(slot_machine[0])
    console.log(slot_machine[1])
    console.log(slot_machine[2])
    console.log(random(symbols.length))

    return slot_machine
}


let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance);

spin();