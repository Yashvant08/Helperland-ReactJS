import React from "react";
import { Box } from "@mui/system";
import { Tabs, Tab, styled, Typography } from "@mui/material";

type TabPanelProps = {
  children?: React.ReactNode;
  index: number;
  value: number;
};

const CustomTabs = styled(Tabs)({
  borderBottom: '4px solid #1d7a8c',
  maxWidth:'750px',
  '& .MuiTabs-indicator':{
    height:'4px',
    backgroundColor:'#1d7a8c'
  },
  '& .MuiTab-root':{
    height:'67px',
    width:'188px',
    fontSize:'18px',
    textTransform: 'capitalize',
    transition:'all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
  },
  '& .Mui-selected':{
    backgroundColor:'#1d7a8c',
    color:'white',
    // fontSize:'18px',
  },
  // '& .MuiButtonBase-root':{
  //   backgroundColor:'#f6f6f6',
  //   padding:'0px',
  //   borderColor:'#1d7a8c',
  //   borderBottom:'4px'  
  // },
});
const BookServiceheader = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    console.log(value);
  };
  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  return (
    <React.Fragment>
      <div className="book-service-main">
        <div className="book-service-second">
          <Box className="tab-panel">
            <Box>
              <CustomTabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="Setup Service" ></Tab>
                <Tab label="Schedule &amp; Plan" ></Tab>
                <Tab label="Your Details" ></Tab>
                <Tab label="Make Payment" ></Tab>
              </CustomTabs>
            </Box>
            <TabPanel value={value} index={0}>
              Setup Service
            </TabPanel>
            <TabPanel value={value} index={1}>
              Schedule &amp; Plan
            </TabPanel>
            <TabPanel value={value} index={2}>
              Your Details
            </TabPanel>
            <TabPanel value={value} index={3}>
              Make Payment
            </TabPanel>
          </Box>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BookServiceheader;
