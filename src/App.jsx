

function App() {

  // let carname = ['g wagon','mercedes','porshe','bmw','roll royce'] // this is data 
  let carname = []

  if (carname.length === 0) {
    return( <h1>theres no Car Data</h1>)
   
  } // if else operators
 
  return (
    <>
     <h1>The Car Names</h1>
    {carname.length === 0 ? <h1>theres no Car Data</h1> : null }  // Ternary operators
    {/* {carname.length === 0 && <h1>theres no Car Data</h1>} */} // Logical operators
     <ul class="list-group"> {carname.map((luxcar) => ( <li class="list-group-item">{luxcar}</li>))}
 
</ul>
    </>
  )
}

export default App
