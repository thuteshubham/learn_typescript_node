// utils.ts

// Define the Greet class
export class Greet {
    // Define the greet method
    async greet(name: string): Promise<void>{
        console.log(`Hello, ${name}!`);
    }

    // Define an asynchronous version of the greet method
    async greetAsync(name: any){
        return new Promise<void>((resolve, reject) => {
            setTimeout(() => {
                console.log(`Hello, ${name}! (Async)`);
                resolve();
            }, 1000); // Simulating 1 second delay
        });
    }
}
