
import { useState } from "react";

function App() {
  const [Counter,setcounter]=useState(0)
  function checkPrime(num)
  {
      let factor=0;
      for(let i=1 ;i<=num;i++){
        if(num%i==0){
          factor++
        }
      }
      if (factor==2){
        return true
      }
      else{
        return false
      }
  }
  return (
    <div>
    <h1>welcome to Counter 2.0</h1>
      <div>
        <button disabled={Counter==0} onClick={ ()=>setcounter(Counter-1)} data-testid="minusonebtn">-1</button>
        <button onClick={()=>setcounter(Counter+1)} data-testid="plusonebtn" >+1</button>
      <div>
        <button data-testid="resetbtn" onClick={()=>setcounter(0)}>Reset Count</button>
      </div>
      </div>
      <span data-testid="counter">Count:{Counter}</span>
      <div>
        <span data-testid="odd-or-even"> {Counter%2==0 ? "This is :Even": "This is :Odd"} </span>
        <br></br>
        <span data-testid="is-prime">{checkPrime(Counter)?"the number is prime :true":"the number is prime:false"}</span>
      </div>
    </div>
  );

}

export default App;

