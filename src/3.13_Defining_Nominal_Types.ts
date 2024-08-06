class Balance {
    private kind = "balance";
    value: number;

    constructor(value: number) {
        this.value = value;
    }
}

class AccountNumber {
    private kind = "accountNumber";
    value: number;

    constructor(value: number) {
        this.value = value;
    }
}

// class Balance1 {
//     private _nominal: void = undefined;
//     value: number;

//     constructor(value: number) {
//         this.value = value;
//     }
// }

// class AccountNumber1 {
//     private _nominal: void = undefined;
//     value: number;

//     constructor(value: number) {
//         this.value = value;
//     }
// }

type Credits = number & { _nominal: "credits" };
type AccountID = number & { _nominal: "accountID" };

const accountID = 123 as AccountID;
let balance = 123 as Credits;
const amount = 3000 as Credits;

function increase(balance: Credits, amount: Credits): Credits {
    return (balance + amount) as Credits;
}

balance = increase(balance, amount);
// This is not allowed:
// balance = increase(balance, accountID);