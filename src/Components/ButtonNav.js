import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { ToggleButton } from '@mui/material';
import { buttonStates } from '../Utils/button.state';
import { useEffect, useState } from 'react';
export function ButtonNav({view, handleChange}) {
  const [selected, setSelected] = useState(view)
  useEffect(()=>{
    handleChange(selected)
  },[selected])
  return (
    <ToggleButtonGroup
      style={{padding:2, backgroundColor:"rgba(36,89,97,1)", borderRadius:5, marginRight:-20, zIndex:100}}
      orientation="vertical"
      value={selected}
      onChange={(_, value)=>setSelected(value)}
      exclusive
    >
    {Object.keys(buttonStates).map(key=>
      <ToggleButton
          style={{border:"none"}}
          value={key} 
          key={key}
          >
        {buttonStates[key]}
      </ToggleButton>
    )}
    </ToggleButtonGroup>
  );
}
