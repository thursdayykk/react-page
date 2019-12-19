import React,{useState,useEffect} from 'react';

import getStudents from '../src/services/student'
function App() {
  const [n,setN] = useState(10)
  useEffect(()=>{ 
    // setTimeout(() => { 
    //   console.log(n)  // n指向当前App函数调用时的n
    // }, 5000);

    // 计时器
    if(n === 0){
      return ;
    }
    setTimeout(()=>{
      setN(n - 1)
    },1000)
  },[n])
  return (
    <div>
        <h1>{n}</h1>
        <button onClick={()=>{
          setN(n + 1)
        }}>n+1</button>
    </div>
  )
}
export default App;
