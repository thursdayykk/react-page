import React, { useState } from 'react';
import StudentContainer from './components/StudentContainer'
import usePageStudents from "./components/myHooks/usePageStudents"

function Test(props){
  const [page, setPage] = useState(1)
  const stus = usePageStudents(page,10)
  if(!stus){
    return null
  }
  const list = stus.findByPage.map(it => <li key={it.id}>{it.name}</li>)
  return (
    <div>
        <h2>所有学生</h2>
        {list}
        <input type="number"
        value={page}
        onChange={e =>{
          setPage(parseInt(e.target.value))
        }}/>
    </div>
  )
}

function App() {
  // const stus = useAllStudents()
  // const list = stus.map(it => <li key={it.id}>{it.name}</li>)
  return (
    <div>
        <StudentContainer />
        <Test />
    </div>
  )
}
export default App;
