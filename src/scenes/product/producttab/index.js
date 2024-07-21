import React,{useState} from 'react';
import {Tab,Box,Tabs, Typography} from '@mui/material';
import TabContent1 from './TabContent1';
import {  useParams } from "react-router-dom";
import TabContent2 from './TabContent2';
import MuiToggle from '../../../NewForm/MuiToggle';


function CustomTabPanel({value, index, children, other}) {

  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  }
  
 
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

function Index() {

    const {Id} = useParams();
    const [value, setValue] =useState(0);
    const [isVisible, setIsVisible] =useState(false);


    const handleChange = (event, newValue) => {
          
      setValue(newValue);
    };

    const toggleChange=(data)=>
    {
        setIsVisible(data);
        setValue(0);
    }
  
    return (
        <Box sx={{ width: '100%' }}>
          <Box sx={{display:"flex", justifyContent:"end"}}>            
         <Typography alignContent="center" sx={{
          color:"red",
          fontSize:{xs:12 , sm:15, md:18, lg:22, xl:26}
         }}>Does this product have variants?
         </Typography> 
         <MuiToggle onChangeToggle={toggleChange} checkedStatus={true}/>
         </Box>
    
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Basic Info" {...a11yProps(0)} />
          {isVisible &&  <Tab label="Variant Info" {...a11yProps(1)}  disabled={Id==undefined?true:false}/>}
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <TabContent1 />
      </CustomTabPanel>
      {isVisible &&
      <CustomTabPanel value={value} index={1}>
      <TabContent2 />
      </CustomTabPanel>}
    </Box>
    )
}

export default Index
