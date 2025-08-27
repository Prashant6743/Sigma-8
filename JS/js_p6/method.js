const calculator = {
    num : 55,
    add: function (a,b){
        return a+b;
    },
    sub: function (a,b){
        return a-b;
    },
    mul: function (a,b){
        return a*b;
    }
};

//short hand of methods we doesn't need to write functon in under the oject. 
const calculator2 = {
    add (x,y) {
        return x+y;
    },
    sub (x,y) {
        return x-y;
    },
}
