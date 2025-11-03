import Name from "./name"
function Car({datacar}) {
    
    return (
        <> <ul className="list-group">
      {datacar.map((car)=>(
        <Name key={car} Luxcar={car}></Name>
        ))}
     
     </ul></>
    )
    
}

export default Car