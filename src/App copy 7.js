import React,{useState} from 'react';
import useTimer from "./components/myHooks/useTimer"

function Test(){
  useTimer(()=>{
    console.log("Test组件的一些副作用操作")
  },1000)
  return <h1>Test组件</h1>
}


function App() {
  // const stus = useAllStudents()
  // const list = stus.map(it => <li key={it.id}>{it.name}</li>)
  const [visible, setVisible] = useState(true)
  return (
    <div>
        {visible && <Test />}
        <button onClick={()=>{
          setVisible(!visible)
        }}>隐藏/显示</button>
    </div>
  )
}
export default App;
