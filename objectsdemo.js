function car(){
    this.color="black";
    this.engine="BS6";
    this.brand="Mahindra";

    this.getModel=function(){
        console.log(2021);
    };
};

//To access this objects in same file
/*var a = new car();
a.getModel();
console.log(a.color);*/

//To access the objects in other files
module.exports = new car();