import React from 'react'
import ReactDOM from 'react-dom'
import Dialog from './Dialog'
const staticize = props =>
  new Promise((fulfill) => { // 此处参数需用圆括号，否则 eslint 报错
    const holder = document.createElement('div')
    document.body.appendChild(holder)
    const close = () => {
      document.body.removeChild(holder)
    }
    ReactDOM.render(
      <Dialog
        {...props}
        onCancel={close}
        onConfirm={() => {
          close()
          fulfill()
        }}
      />,
      holder
    )
  })
export default staticize