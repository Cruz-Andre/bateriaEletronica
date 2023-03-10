import {useSelector} from "react-redux";

import './Display.css'

export const Display = () => {
  const displayText = useSelector((state) => state.displayText);

  return (
    <div id="display">{displayText}</div>
  )
}