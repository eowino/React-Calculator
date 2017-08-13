const CalculatorReducer = (state, value) => {
    switch(value) {
        // The value is a number, return the number
        case !isNaN(value):
            return {
                ...state,
                value
            };
        // Value is an operator    
        case isNaN(value):          
            let eq = state.equation.trim().split(" ");
            // check if its the first click
            if(eq.length < 1) return state;
            return;

        default:
            return {
                state,
                value
            };
    }
};


export default CalculatorReducer;