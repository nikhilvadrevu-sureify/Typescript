export function calculate(operation: string, num1: number, num2: number) : number {
    switch(operation) {
        case "add" : return addition(num1, num2); 
        case "subtract": return subtraction(num1, num2);
        case "multiply": return multiply(num1, num2);
        case "division": return division(num1, num2);
        default:
            throw new Error("No such operation")

    }

    function addition(num1: number, num2: number): number {
        return num1+num2;
    }

    function subtraction(num1: number, num2: number): number {
        return num1 - num2
    }

    function multiply(num1: number, num2: number): number {
        return num1 * num2
    }

    function division(num1: number, num2: number): number {
        return num1 / num2
    }
 }