import React, { memo } from 'react'

 function Comp(props) {
     console.log("re-render-comp")
  return (
    <div>
        Comp
        {props.children[1]}
        <p>{React.Children.count(props.children)}</p>
    </div>
  )
}

export default memo(Comp)
