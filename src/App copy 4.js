import React from 'react';
import StudentContainer from './components/StudentContainer'
import {useAllStudents} from "./components/myHooks/useAllStudents"
import usePageStudent from "./components/myHooks/usePageStudents"
import { getAllStudents } from './services/student';

function withAllStudents(Comp){
  return class AllStudentsWrapper extends React.Component {
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
      return <Comp  {...this.props} stus={this.state.stus}/>
    }

  }
}

function Test(props){
  const stus = useAllStudents()
  const list = stus.map(it => <li key={it.id}>{it.name}</li>)
  return (
    <div>
        <h2>所有学生</h2>
        {list}
    </div>
  )
}
const Demo = withAllStudents(Test)
function App() {
  // const stus = useAllStudents()
  // const list = stus.map(it => <li key={it.id}>{it.name}</li>)
  return (
    <div>
        <StudentContainer />
        <Demo />
    </div>
  )
}
export default App;
