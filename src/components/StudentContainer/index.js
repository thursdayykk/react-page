import React, { useState,useEffect } from 'react'
import StudentList from "../StudentList"
import {getStudents} from '../../services/student'
import Pager from "../common/Pager"
export default function StudentContainer() {
    const [students, setStudents] = useState([])
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10)
    const [total, setTotal] = useState(0)
    const [panelNumber, ] = useState(5)
    // 第二个参数空数组，让副作用函数仅在首次挂载时运行
    useEffect(() => {
        // 匿名异步函数 立即执行
        (async function (){
           const resp =  await getStudents(page,limit)
           setStudents(resp.findByPage)
           console.log(resp)
           setTotal(resp.cont)
        })()
    }, [page,limit])  // 页码，页总量变化时 重新获取数据
  return (
    <div>
      <StudentList stus={students} onClick={()=>{

      }}/>
      <Pager 
        current={page} 
        total={total} 
        limit={limit} 
        panelNumber={panelNumber} 
        onPageChange={ newPage =>{
            //   console.log('??')
            setPage(newPage)
        }}/>
        每页显示的条数：
        <input type="number"
        value={limit}
        onChange={e=> {
            setLimit(e.target.value)
        }}/>
    </div>
  )
}
