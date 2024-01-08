import { Tab, TabList, TabPanel, Tabs, tabClasses } from "@mui/joy";
import { Outlet, useLocation, useNavigate } from "react-router-dom";


const Shopping = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const currentTab = pathname.replace("/dashboard/shopping/", "");

  const handleChange = (newValue) => {
    navigate(`/dashboard/shopping/${newValue}`);
  };
  return (
    <div className="pt-5">
      <Tabs
        aria-label="tabs"
        value={currentTab}
        onChange={(event, newValue) => handleChange(newValue)}
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
          <Tab disableIndicator value="">All Designs</Tab>
          <Tab disableIndicator value="residential-design">Residential Design</Tab>
          <Tab disableIndicator value="ecommercial-design">Ecommercial Design</Tab>
          <Tab disableIndicator value="office-design">Office Design</Tab>
          <Tab disableIndicator value="hospital-design">Hospital Design</Tab>
        </TabList>
        <TabPanel value={currentTab} style={{ margin: 0, padding: 0 }}>
          <Outlet />
        </TabPanel>
        
      </Tabs>
    </div>
  );
};

export default Shopping;
