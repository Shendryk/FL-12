function getMin() {
    let args = Array.prototype.slice.call(arguments).sort; 

    return args;
}

getMin(3, 0, -3, 5);