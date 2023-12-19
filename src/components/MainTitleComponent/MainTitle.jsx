import lineGold from "../../assets/images/lineGold.png";
import "./MainTitle.style.scss";
const MainTitle = ({title}) => {
  return (
    <div className="field-box">
        <h1 className="field-title">{title}</h1>
        <img className="field-image" src={lineGold} />
        <p className="field-subtitle"></p>
      </div>
  )
}

export default MainTitle
