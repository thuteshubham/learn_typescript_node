// main.ts

// Import the Greet class from another file
import { Greet } from './utils';

// Define an async function to use async/await
async function main() {
    // Create an instance of the Greet class
    const greeter = new Greet();

    // Call the greetAsync method using await
    await greeter.greet("Papa");
    await greeter.greetAsync('John');
}

// Call the main function
main().catch(error => console.error(error));
