import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import Parent from './withProps';


// function App() {
// const [count, setCount] = React.useState(0)
// //  const handleClick=()=>{
// //     alert('hey hitted')
// //   }
//   return (
//     <div className="App">
//       <p>count Reached {count}</p>
//       <button onClick={()=>setCount(count+1)}>Click Me</button>
    
//     </div>
//   );
// }

class App extends Component{
  state={
    count :10
  }

//   decrease =()=>{
//     if(this.state.count > 0)
//     {
//  this.setState({count: this.state.count -1})
//     }
//   }

  render(){
    return(
      <>
      <div>
        {/* <p>Count Reached {this.state.count}</p>
        <button onClick={()=> this.decrease()}> Click </button> */}
        {/* <Parent/> */}
        <Form/>

        
      </div>
      </>
    )
  }
}

export default App;
