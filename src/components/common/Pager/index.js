import React from 'react'
/**
 * 
 * 分页组件
 * 属性
 * 1. current：初始页码
 * 2. total：总数据量
 * 3. limit；页容量
 * 4. panelNumber：数字页码最多显示多少个
 * 5. onPageChange：当页码改变的事件
 */
import "./index.css"
export default function Pager(props) {
    // 总页数
  const pageNumber = getPageNumber(props)
  if(pageNumber === 0){
      return null
  }
  const min = getMinNumber(props) // 最小显示页码
  const max = getMaxNumber(min,pageNumber,props) // 最大显示页码
  const numbers = []
  for(let i = min;i <= max; i++){
      numbers.push(<span className={i === props.current?"item active":"item"} key={i}
      onClick={() => {
          toPage(i,props)
      }}>{i}</span>)
  }
  return (
    <div>
      <span className={props.current === 1 ? "item disabled" : "item"}
      onClick={() => {
        toPage(1,props)
    }}>首页</span>
      <span className={props.current === 1 ? "item disabled" : "item"}
      onClick={
        () => {
            toPage(props.current - 1 < 1 ? 1 :props.current - 1,props)
        }}>上一页</span>
        {numbers}
      <span className={props.current === pageNumber ? "item disabled" : "item"}
      onClick={
        () => {
            toPage(props.current + 1 > pageNumber ? pageNumber :props.current + 1,props)
        }}>下一页</span>
      <span className={props.current === pageNumber ? "item disabled" : "item"}
      onClick={
        () => {
            toPage(pageNumber,props)
        }}>尾页</span>
      <span>{props.current}</span> /
      <span>{pageNumber}</span>
    </div>
  )
}
/**
 * 
 * 计算总页数
 */
function getPageNumber(props) {
    console.log(props)
    return Math.ceil(props.total / props.limit)
}
/** 计算最小数字 */
function getMinNumber(props){
    var min = props.current - Math.floor(props.panelNumber / 2)
    if(min < 1){
        min = 1
    }
    return min
}
/**
 * 计算最大数字
 */
function getMaxNumber(min,pageNumber,props){
    var max = min + props.panelNumber - 1
    if(max > pageNumber){
        max = pageNumber
    }
    return max
}
/**
 * 
 * @param {*} target  目标页码
 * @param {*} props 所有属性
 */
/** 跳转到对应页吗 */
function toPage(target,props){
    if(props.current === target){
        return
    }
    console.log(target)
    props.onPageChange && props.onPageChange(target)
}
