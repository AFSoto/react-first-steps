

function useState(valor:string){
    return [valor,(value:string) => {
        console.log(value);
    }]as const;
}



const [name,setname] = useState('andres');

console.log(name);

setname('vegeta');

