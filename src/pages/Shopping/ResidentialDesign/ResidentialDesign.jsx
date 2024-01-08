import { useEffect, useState } from "react";
import CardComponent from "../../../components/CardComponent/CardComponent"
import "./Residential.style.scss"
import { axiosConfig } from "../../../axiosConfig/axiosConfig";

const ResidentialDesign = () => {
    const [residentalDesigns, setResidentalDesigns] = useState([]);
  const getResidentalDesigns = async () => {
    const res = await axiosConfig({ url: "/residential-design", method: "get" });
    if (res.status === 200) {
        setResidentalDesigns(res.data);
      console.log("all designs", res.data);
    } else {
      console.log("all designs", res);
    }
  };
  useEffect(() => {
    getResidentalDesigns();
  }, []);
  return (
    <div>
      <div className="d-flex flex-row flex-wrap justify-content-center">
        {residentalDesigns.map((residential, index) => (
          <CardComponent
            key={index}
            image={residential.image}
            id={residential.id}
            category={residential.category}
            descreption={residential.description}
            price={residential.price}
            title={residential.title}
            value={residential.value}
          />
        ))}
      </div>
    </div>
  )
}

export default ResidentialDesign
