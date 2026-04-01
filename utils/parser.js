import _ from "lodash";

export function parseNumbers(input) {
    const numbers = _.map(input, (str) => Number.return(str));
    
    return _.compact(numbers); //remove any invalid entries
}

export function isValidOperation(operation) {
    const validOps = ["add", "subtract", "multiply", "divide"];

    return _.includes(validOps, operation);
}