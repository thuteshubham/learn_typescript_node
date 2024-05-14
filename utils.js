"use strict";
// utils.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Greet = void 0;
// Define the Greet class
class Greet {
    // Define the greet method
    greet(name) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`Hello, ${name}!`);
        });
    }
    // Define an asynchronous version of the greet method
    greetAsync(name) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log(`Hello, ${name}! (Async)`);
                    resolve();
                }, 1000); // Simulating 1 second delay
            });
        });
    }
}
exports.Greet = Greet;
