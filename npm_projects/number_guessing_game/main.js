#! /usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
function start_func() {
    return __awaiter(this, void 0, void 0, function* () {
        const syste_mnum = Math.random() * 10;
        const user_num = yield inquirer_1.default.prompt([
            {
                type: "number",
                name: "user_Guess",
                message: "Enter your name between 1-10 :",
            },
        ]);
        const { user_Guess } = user_num;
        console.log(`Your Guess: `, user_Guess, `\n system's guess`, syste_mnum);
        if (user_Guess == syste_mnum) {
            console.log("your guess is correct.");
        }
        else {
            console.log("better luck next time.");
        }
    });
}
function sartAgain() {
    return __awaiter(this, void 0, void 0, function* () {
        do {
            yield start_func();
            var again = yield inquirer_1.default.prompt({
                type: "input",
                name: "restart",
                message: "do you want to continue press Y or N",
            });
        } while (again.restart === "Y" ||
            again.restart === "y" ||
            again.restart === "Yes" ||
            again.restart === "yes");
    });
}
sartAgain();
