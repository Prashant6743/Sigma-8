const student = { 
    name: "prashant",
    age: 21,
    marks: 90,
    prop: this,
    getname: function (){
        return this.name;
    },
    //arrow function 
    getmarks: () => {
        return this.marks;//parent's scope -> window object
    },

    //here this is used inside setTimeout function
    getinfo1:function(){
        setTimeout( () => {
            console.log(this);//parent's scope -> student object
        }, 3000);
    },

    getinfo2:function(){
        setTimeout( function() {
            console.log(this);//parent's scope -> window object
        }, 3000);
    }
};
const a = 5; 