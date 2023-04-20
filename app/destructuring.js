const user={
    name: "Pedro",
    surnames:"Perez Sánchez",
    age:"23",
    sex:"male",
    telefony:{
        permanent:453678991
    },
    team:{
        name:"Real Madrid",
        player:"Isco",
        private:{
            text:"real madrid is the best"
        }
    }
}
console.log(user)
console.log(user.sex)
console.log(user.team.player)
console.log(user.team.private.text)

let malename=user.name
console.log(malename)

const {telefony:{permanent}}=user
console.log(permanent)

const {team:{private:{text}}}=user
console.log(text)

function object(){
    return { name: "Juan" , CO:"ES"}
}
let { name,CO}=object();

console.log("mi nombre es", name, " soy de",CO)

const person = {a:"mario",b:"edad"};

let {a,b, ...object1}={a:23,b:45,c:67,g:80};
console.log(a)
console.log(b)
console.log(object1)