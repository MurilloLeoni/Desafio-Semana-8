import { useState,ComponentProps } from "react"

type elementos = ComponentProps<'button'> &{
classChildren:string
className:string
}
const ButtonClicked = ( {classChildren,className}: elementos ) => {

  const[active,setActive] = useState(false)
  const handleActive = ()=>{
    setActive(!active)
  }
  return (
    <button className={active?`hover:bg-opacity-black-60 ${className}`:`hover:bg-white ${className}` } onClick={handleActive}>
      <i className={active?"fa-solid fa-check text-secondary":classChildren}></i>
    </button>
  )
}

export default ButtonClicked
