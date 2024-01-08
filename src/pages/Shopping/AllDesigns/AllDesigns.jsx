import { useEffect, useState } from "react";
import "./AllDesigns.style.scss";
import { axiosConfig } from "../../../axiosConfig/axiosConfig";
import CardComponent from "../../../components/CardComponent/CardComponent";
const AllDesigns = () => {
  const [alldesigns, setAllDesigns] = useState([]);
  const getAllDesigns = async () => {
    const res = await axiosConfig({ url: "/all-designs", method: "get" });
    if (res.status === 200) {
      setAllDesigns(res.data);
      console.log("all designs", res.data);
    } else {
      console.log("all designs", res);
    }
  };
  useEffect(() => {
    getAllDesigns();
  }, []);
  return (
    <div>
      <div className="d-flex flex-row flex-wrap justify-content-center">
        {alldesigns.map((designs, index) => (
          <CardComponent
            key={index}
            image={designs.image}
            id={designs.id}
            category={designs.category}
            descreption={designs.description}
            price={designs.price}
            title={designs.title}
            value={designs.value}
          />
        ))}
      </div>
    </div>
  );
};

export default AllDesigns;
