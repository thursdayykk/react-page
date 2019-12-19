import React,{useState,useEffect} from 'react';

const ref =React.createRef()
let timer = null
/**
 * 一个可移动的块，该组件每次渲染完成后，始终从0，0坐标在1s内，移动到目标点坐标
 * @param {*} props 
 * props.left 要移动到目标点横坐标
 * props.top 要移动到目标点纵坐标
 */
function MovableBlock(props){
  useEffect(()=>{
    clearInterval(timer)
    // 渲染完成后 会执行这个函数
    const div = ref.current
    // console.log(div)
    let curTimes = 0;// 当前移动的次数
    const disX = props.left / 100 //横坐标上每次移动的距离
    const disY = props.top / 100 //纵坐标上每次移动的距离

    timer = setInterval(()=>{
      curTimes ++
      const newLeft = curTimes * disX
      const newTop = curTimes * disY
      div.style.left = newLeft + 'px'
      div.style.top = newTop + 'px'
      if(curTimes === 100){
        clearInterval(timer)
        // console.log(11)
      }
    },10)
    return () => {
      console.log('hello')
    }
  })
  useEffect(()=>{
    console.log('hi')
    return () => {
      console.log('hello')
    }
  })
  return <div ref={ref} style={{
    width:100,
    height:100,
    left:0,
    top:0,
    position:"fixed",
    background:"#f40"
  }}></div>
}

function App() {

  // // 添加状态值，函数组件中状态可以是原始值
  // const [count,setCount] = useState(0);  // 该状态的默认值是0
  // // 在类组件中状态必须是对象

  // const [visible,setVisible] = useState(true)


  // useEffect(()=>{
  //   // 以下代码属于副作用
  //   document.title = `计数器：${count}`
  // })

  const [point, setPoint] = useState({x:0,y:0})
  return (
    <div className="App">
      {/* <p style={{display:visible ?'block':'none'}}>
        <button onClick={()=>{
          // setCount(count-1); // 不会立即改变，事件运行完成之后一起改变
          // setCount(count-1);// 此时，n的值仍然是0


          setCount(prevN => prevN - 1)
          setCount(prevN => prevN - 1)
        }}>-</button>
          <span>{count}</span>
        <button onClick={()=>{
          setCount(count+1)
        }}>+</button>
      </p>
     
      <button onClick={()=>{
        setVisible(!visible)
      }}>show/hidden</button>
      <p>
        <span></span>
        <button>effect</button>
      </p> */}
      <div style={{paddingTop:200}}>
        x:<input type="number" value={point.x} onChange={e => {
          setPoint({
            ...point,
            x:parseInt(e.target.value)
          })
        }}/>
        y:<input type="number" value={point.y} onChange={e => {
          setPoint({
            ...point,
            y:parseInt(e.target.value)
          })
        }}/>
      </div>
      <MovableBlock left={point.x} top={point.y}/>
    </div>
  );
}
// class App extends App.Component { 
//   constructor(props){
//     super(props)
//     this.state = {
//       count:0
//     }
//   }
//   render() {
//       return (
//       <div className="App">
//         <button onClick={()=>{
//           this.setState({
//             count:this.state.count - 1
//           })
//         }}>-</button>
//           <span>{this.state.count}</span>
//         <button onClick={()=>{
//           this.setState({
//             count:this.state.count + 1
//           })
//         }}>+</button>
//       </div>
//     );
//   }
// }
export default App;
