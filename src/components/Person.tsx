type personName = {
    name:{
        first:string
        last:string
    }
}

export const Person = (props:personName)=>{
    return (
        <h1>{props.name.first} {props.name.last}</h1>

    )
}