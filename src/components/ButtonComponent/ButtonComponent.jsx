import { Button } from "react-bootstrap"

const ButtonComponent = ({title,onClick,className}) => {
  return (
    <div>
       <Button className={className} onClick={onClick}>
          {title}
        </Button>
    </div>
  )
}

export default ButtonComponent
