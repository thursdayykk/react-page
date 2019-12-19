import React from 'react'
import PropTypes from "prop-types"
/**
 * 学生列表组件
 */
export default function StudentList({stus}) {
  const list = stus.map(it => (
      <li key={it.id}>{it.name},{it.sex === 1 ? '男':'女'}</li>
  ))
  return (
    <div>
        <ul>
          {list}
        </ul>
    </div>
  )
}
StudentList.defaultProps = {
    stus:[]
}

StudentList.propTypes = {
    stus:PropTypes.array.isRequired
}
