type personListProps = {
    names:{
        first:string
        last:string
    }[]
}

export const Personlist = (props:personListProps)  =>{
    return(
        <>
            {props.names.map((name)=>{
                return (
                    <h2 key={name.first}>
                        {name.first} {name.last
                        }
                    </h2>
                )
            })}
        </>
    )   
}