"use strict";
// main.ts
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
// Import the Greet class from another file
const utils_1 = require("./utils");
// Define an async function to use async/await
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        // Create an instance of the Greet class
        const greeter = new utils_1.Greet();
        // Call the greetAsync method using await
        yield greeter.greet("Papa");
        yield greeter.greetAsync('John');
    });
}
// Call the main function
main().catch(error => console.error(error));
