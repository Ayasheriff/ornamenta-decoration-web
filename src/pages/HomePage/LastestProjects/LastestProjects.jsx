import project1 from "../../../assets/images/project1.jpg";
import project2 from "../../../assets/images/project2.jpg";
import project3 from "../../../assets/images/project3.jpg";
import project4 from "../../../assets/images/project4.jpg";
import project5 from "../../../assets/images/project5.jpg";
import project6 from "../../../assets/images/project6.jpg";
import project7 from "../../../assets/images/project7.jpg";
import project8 from "../../../assets/images/project8.jpg";
import project9 from "../../../assets/images/project9.jpg";
import project10 from "../../../assets/images/project10.jpg";
import project11 from "../../../assets/images/project11.jpg";
import project12 from "../../../assets/images/project12.jpg";
import project13 from "../../../assets/images/project13.jpg";
import project14 from "../../../assets/images/project14.jpg";
import project15 from "../../../assets/images/project15.jpg";
import project16 from "../../../assets/images/project16.jpg";
import project17 from "../../../assets/images/project17.jpg";
import "./LastestProjects.style.scss";
import { TabList, TabPanel, Tabs, Typography } from "@mui/joy";
import Tab, { tabClasses } from "@mui/joy/Tab";
import { useState } from "react";
import MainTitle from "../../../components/MainTitleComponent/MainTitle";

const LastestProjects = () => {
  const [imagesToShow, setImagesToShow] = useState(10);
  const allProjectImages = [
    project1,
    project2,
    project3,
    project17,
    project13,
    project15,
    project8,
    project12,
    project6,
    project7,
    project10,
    project5,
    project9,
    project11,
    project14,
    project5,
    project16,
    project4,
  ];

  const visibleImages = allProjectImages.slice(0, imagesToShow);

  const handleShowMore = () => {
    setImagesToShow(imagesToShow + 10);
  };

  const residentialImages = [
    project1,
    project3,
    project4,
    project5,
    project7,
    project8,
    project9,
  ];
  const officeImages = [project14, project15, project16, project17];
  const hospitalImages = [project11, project12, project13];

  return (
    <div>
      <MainTitle title={"Lastest Projects"} />
      <div>
        <Tabs
          aria-label="tabs"
          defaultValue={0}
          sx={{
            bgcolor: "transparent",
          }}
        >
          <TabList
            disableUnderline
            sx={{
              alignSelf: "center",
              marginBlockEnd: "30px",
              display: "flex",
              justifyContent: "center",
              p: 0.5,
              gap: 0.5,
              borderRadius: "xl",
              bgcolor: "background.level1",
              [`& .${tabClasses.root}[aria-selected="true"]`]: {
                boxShadow: "sm",
                bgcolor: "#f2b827",
                color: "white",
                fontWeight: 500,
              },
            }}
          >
            <Tab disableIndicator>All Projects</Tab>
            <Tab disableIndicator>Residential Design</Tab>
            <Tab disableIndicator>Ecommercial Design</Tab>
            <Tab disableIndicator>Office Design</Tab>
            <Tab disableIndicator>Hospital Design</Tab>
          </TabList>
          <TabPanel value={0} style={{ margin: 0, padding: 0 }}>
            <div className="projects-imgs-title">
              <div className="projects-items">
                {visibleImages.map((image, index) => (
                  <img
                    key={index}
                    style={{ width: "379.8px", border: "1px solid #f2b827" }}
                    src={image}
                    alt={`Project ${index + 1}`}
                    className="image-project-details"
                  />
                ))}
              </div>
              <div className="middle">
                <Typography className="text"> hello</Typography>
              </div>

              <div className="show-more" onClick={handleShowMore}>
                <button>Show More</button>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={1} style={{ margin: 0, padding: 0 }}>
            <div className="projects-imgs-title">
              <div className="projects-items">
                {residentialImages.map((image, index) => (
                  <img
                    key={index}
                    style={{ width: "379.8px", border: "1px solid #f2b827" }}
                    src={image}
                    alt={`Project ${index + 1}`}
                    className="image-project-details"
                  />
                ))}
              </div>
            </div>
          </TabPanel>
          <TabPanel value={2} style={{ margin: 0, padding: 0 }}>
            <div className="projects-imgs-title">
              <div className="projects-items">
                <img
                  style={{ width: "379.8px", border: "1px solid #f2b827" }}
                  src={project10}
                />
              </div>
            </div>
          </TabPanel>
          <TabPanel value={3} style={{ margin: 0, padding: 0 }}>
            <div className="projects-imgs-title">
              <div className="projects-items">
                {officeImages.map((image, index) => (
                  <img
                    key={index}
                    style={{ width: "379.8px", border: "1px solid #f2b827" }}
                    src={image}
                    alt={`Project ${index + 1}`}
                    className="image-project-details"
                  />
                ))}
              </div>
            </div>
          </TabPanel>
          <TabPanel value={4} style={{ margin: 0, padding: 0 }}>
            <div className="projects-imgs-title">
              <div className="projects-items">
                {hospitalImages.map((image, index) => (
                  <img
                    key={index}
                    style={{ width: "379.8px", border: "1px solid #f2b827" }}
                    src={image}
                    alt={`Project ${index + 1}`}
                    className="image-project-details"
                  />
                ))}
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default LastestProjects;
