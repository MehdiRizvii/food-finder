import React from "react";
import Table from './Components/Table'
import Header from './Components/Header'
import Sort from './Components/Sort'
function App() {
  return (
<div className="container">
  <Sort />
  <Table tables={{imgUrl:"",name:"", review:"", distance:"",price:""}}/>
</div>

  )
}

export default App;
