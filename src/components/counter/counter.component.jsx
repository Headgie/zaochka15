import React from "react"
import block from "bem-cn"
import "./counter.styles.scss"

const Counter = ({value, onChange}) => {
  const cn=block("counter");

  const minusOne = () =>
    {
      let newValue=parseInt(value, 10)-1;
      if (newValue<1) newValue=1;
      onChange(newValue);
    }

    const plusOne = () =>
    {
      let newValue=parseInt(value, 10)+1;
      if (newValue>5) newValue=5;
      onChange(newValue);
    }


  return(
    <div className={cn()}>
      <button className={cn("button")} onClick={minusOne}>–</button>
      <input className={cn("input")} type="text" name="name" value={value} onChange={e=>onChange(e.target.value)} />
      <button className={cn("button")} onClick={plusOne}>+</button>
    </div>
  )

}

export default Counter;