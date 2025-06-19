function add(a,b){
    return a+b
}
const mul=(a,b)=>{
    return a*b
}
console.log(mul(12,11));
const obj={
    name:'chris',
    age:40,
    message:function(){
        let name=obj.name
        return `Hello I am ${name}`
    }
}
console.log(obj.name);
console.log(obj.message());

const numbers=[1,3,4,88,21,-35,-26]
const mappednum=numbers.map((num)=>num*3)
console.log(mappednum);

const posNum=numbers.filter((n)=>n>0)
console.log(posNum);
const oddnum=numbers.filter((n)=>n%2)
console.log(oddnum);

const total=numbers.reduce((sum,n)=>sum+n,0)
console.log(total);
const products=[
    {name:'tv',price:8000},
    {name:'phone',price:5000},
    {name:'lap',price:7500},
    {name:'game',price:2500},
    {name:'remote',price:4500},
    {name:'ac',price:9500}
]
const tot=products.reduce((sum,n)=>sum+n.price,0)
console.log(tot)
const a=products.filter((n)=>n.price>5000)
console.log(a); 
const user={name:'CR7',password:'12345678'}
const {name,password}=user
console.log(password);
const number=[1,2,3,4,5,6]
const [first,second,third,...rest]=number
console.log(rest);
console.log(third);
const arr1=[1,2,3]
const arr2=[4,5,6]
const copy=[...arr2,...arr1]
console.log(copy);
function add2(...arguments){
    return arguments.reduce((sum,n)=>sum+n,0);
}
console.log(add2(1,2,3,4,5));
function function1(){
    console.log(`from inside callback`)
}
function fun(name,callback){
    callback()
    return `${name} from outside callback`
}
console.log(fun('function',()=>{console.log(`from inside callback`) }));
async function fetchUsers(){
    try {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/users'
        )
        const data=await response.json()
        data.map((m)=>console.log(m.name));
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
fetchUsers()