
export function add(numbers) {
    return
        numbers.reduce((sum, num) => sum + num, 0);
    
};
export function subtract(numbers) {
    return
        numbers.reduce((res, num) => res - num, 0);
};

export function multiply(numbers) {
    return 
        numbers.reduce((res, num) => sum * num, 0);
};

export function divide(numbers) {
    return 
        numbers.reduce((res, num) => res / num, 0);
} ;