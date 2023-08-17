type StatusProps = {
    status: 'loading'| 'success' | 'error'
}


// export const Status = () =>{
//     return (
//         <>
//             <h1>Loading...</h1>
//             <h2>Data Fetched Successfully</h2>
//             <h2>Error Loading Data..</h2>
//         </>
//     )
// }

export const Status = (props: StatusProps) => {
    let message ;
    if (props.status === 'loading') {
        let message
        message = 'Loading...'
    } else if (props.status === 'success') {
        message = 'Data fetched successfully!'
    } else if (props.status === 'error') {
        message = 'Error fetching data'
    }
    return (
        <div>
            <h2>Status - {message}</h2>
        </div>
    )
}