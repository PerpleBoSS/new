"use strict";
let card = {
    number: 1,
    bank: "privat",
    name: "Michanya",
    surname: "Kachok",
    code: 1234,
    account : 3500,
};
let card2 = {
    number: 2,
    bank: "privat",
    name: "NeMichanya",
    surname: "NeKachok",
    code: 1235,
    account : 3000,
};
let privat = [card, card2];
let x = false;
const codeC = 1234;
let cachMachine1 = {
    number: 121,
    showMoney: function (card) {
        alert("Ваш баланс : " + card.account);
    },
    changeMoney: function (carde, sum) {
        
        if (carde.account >= sum &&  cachMachine1.checkCardNumber(privat) == true) {
            this.showMoney(carde);
        carde.account -= sum;
        this.showMoney(carde);
        }
        else if (carde.account < sum){
            this.showMoney(carde);
            alert("Вам не хватает средств")
        }
        else {
            alert("НЕ ПРАВИЛЬНЫЙ КОД")
        }
        
    },
    checkCardNumber: function (carde) {
        for (let i = 0; i < carde.length; i++) {
            if (carde [i].code == codeC) {
                return true;
            }
        }
        return false;
    },
    // carde[i] == card.number &&
    // checkCardNumber: function (card) {
    //     if (codeC == card.code) {
    //         x = true;
    //     }
    //     else {
    //         x = false;
            
            
    //     }
    // },
};





cachMachine1.changeMoney(card2, 50)
