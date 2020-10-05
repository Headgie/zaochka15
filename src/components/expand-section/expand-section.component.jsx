import React, {useState, useRef, useEffect} from "react"
import block from "bem-cn"
import "./expand-section.styles.scss"

const ExpandSection = (props) => {
  const es = block("expand-section")
  const [recieveInnerHeight, setRecieveInnerHeight] = useState(0);
  const [recieveStyle, setRecieveStyle] = useState({height: "0px"});
  const recieveRef = useRef(null);
 

  useEffect(() => {
    console.log(recieveInnerHeight);
   setRecieveStyle({height: `${recieveInnerHeight}px`})
   setRecieveInnerHeight	(props.visible===false?0:recieveRef.current.clientHeight);
  }, [recieveInnerHeight, props.visible]);

  

  return (

    <div className={es("recieve")} style={recieveStyle}>
      <div ref={recieveRef}  className={es("recieve-inner")}>
        {props.children}
      </div>
    </div>

  )
}

export default ExpandSection