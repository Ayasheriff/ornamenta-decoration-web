import { Tab, TabList, TabPanel, Tabs, tabClasses } from "@mui/joy";
import "./LoginAndSignin.style.scss";
import LoginPage from "./LoginPage/LoginPage";

const LoginAndSignin = () => {
  return (
    <div className="login-signup-container">
      <div className="log-title-container">
        <h1 className="logo-title"> Welcome to 
          <span className="logo-title-separate"> O</span>rnamenta
        </h1>
        <p className="logo-subtitle">Continue your design journey</p>
        <p className="logo-subtitle">Let us help you to achieve clairty in your design and take you to new heights.</p>
      </div>
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
            width: "13.5%",
            alignSelf: "start",
            marginBlockEnd: "50px",
            marginInlineStart: "110px",
            display: "flex",
            p: 0.5,
            gap: 5,
            borderRadius: "xl",
            bgcolor: "background.level1",
            [`& .${tabClasses.root}[aria-selected="true"]`]: {
              boxShadow: "sm",
              bgcolor: "#081635",
              color: "white",
              fontWeight: 500,
              paddingInline: "30px",
            },
          }}
        >
          <Tab disableIndicator>Log In</Tab>
          <Tab disableIndicator>Sign Up</Tab>
        </TabList>
        <TabPanel value={0}>
          <LoginPage />
        </TabPanel>
        <TabPanel value={1} style={{ margin: 0, padding: 0 }}></TabPanel>
      </Tabs>
    </div>
  );
};

export default LoginAndSignin;
