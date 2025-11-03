import Car from "./components/carnames"
import Errormessage from "./components/errormessage"
function App() {

  // let carname = ['g wagon','mercedes','porshe','bmw','roll royce'] // this is data 
  let carname = []

  // if (carname.length === 0) {
  //   return( <h1>theres no Car Data</h1>)
   
  // } // if else operators
 
  return (
    <>
     <h1>The Car Names</h1>
     <Errormessage datacar={carname}></Errormessage>
      <Car datacar={carname}></Car>
    </>
  )
}

export default App
