import { Switch } from '@mui/material'
import React,{useState} from 'react'


function MuiSwitch({status,onChange}) {

    const [stat, setStatus] = useState(status==="active"?true:false)


    const handleChange=()=>
    {
            setStatus(prev => !prev)
            onChange(!stat)
         
    }
    return (
        <Switch
        size="small" 
        checked={stat}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'controlled' }}
      />
    )
}

export default MuiSwitch
