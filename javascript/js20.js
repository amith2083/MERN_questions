const  value ={number:10}
const multiply =(x={...value})=>{
    console.log(x.number*=2)
}

multiply();//20
multiply();///20
multiply(value);//20,passing value explicitly, it modifies the original object because objects are passed by reference.
multiply(value);//40