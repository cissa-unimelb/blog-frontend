import React from 'react'
import cx from 'classnames'
// import SVGIcon from 'components/SVGIcon'
// import styles from './Dialog.scss'
const Dialog = ({
  title,
  message,
  onConfirm,
  onCancel,
}) => (
//   <div className={styles.root}>
//     <div className={styles.header}>
//       <SVGIcon
//         className={styles.icon}
//         name="dialog/warning"
//         width="32"
//         height="32"
//       />
//       <div className={styles.title}>{title}</div>
//     </div>
//     <div className={styles.message}>{message}</div>
//     <div className={styles.buttons}>
//         <button className={styles.button} onClick={onCancel}>
//            取消
//         </button>
//       <button className={cx(styles.button, styles.active)} onClick={onConfirm}>
//         确定
//       </button>
//     </div>
//   </div>
        <div>
            123
            <div>
                {{message}}
            </div>
            <button onClick={onConfirm}>
                confirm
            </button>
        </div>
)
export default Dialog