import React, { useState } from 'react';
import StudentContainer from './components/StudentContainer'
import getAllStudents from "./services/student"

/** render props */

class AllStudents extends React.Component {
  state = {
    stus:[]
  }
  async componentDidMount(){
    const stus = await getAllStudents()
    this.setState({
      stus
    })
  }
  render(){
    if(typeof this.props.render === 'function'){
      return this.props.render(this.state.stus)
    }
    return null
  }
}

function Test(props){
  const list = props.map(it => <li key={it.id}>{it.name}</li>)
  return (
    <div>
        <h2>所有学生</h2>
        {list}
    </div>
  )
}

function App() {
  // const stus = useAllStudents()
  // const list = stus.map(it => <li key={it.id}>{it.name}</li>)
  return (
    <div>
        {/* <StudentContainer /> */}
        <AllStudents render={stus => <Test stus={stus}/>} />
    </div>
  )
}
export default App;
