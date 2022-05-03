import React from 'react'
//展示组件，只接受props 在redux中称为Components
export default function BlogItem(props) {
  return (
    <li>
      {props.title}
      <span>{props.body}</span>
    </li>
  )
}
