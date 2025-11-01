

function App() {

  let carname = ['g wagon','mercedes','porshe','bmw','roll royce'] // this is data 
 
  return (
    <>
     <h1>The Car Names</h1>
     <ul class="list-group"> {carname.map((luxcar) => ( <li class="list-group-item">{luxcar}</li>))}
 
</ul>
    </>
  )
}

export default App
