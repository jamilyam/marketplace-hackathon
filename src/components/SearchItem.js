import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import { Button, Input, InputGroup, InputGroupAddon } from 'reactstrap'

import SearchSvg from '../assets/loupe.svg';

export default function SearchItem() {
  const location = useLocation();
  const search = new URLSearchParams(location.search);
  
  const [text, setText] = useState(search.get("q") || "");
  const history = useHistory();

  const handleSubmit = (e)=>{
    e.preventDefault();
    // if(!text)history.replace(location.pathname);
    // search.set("q", text.trim());
    // history.replace( location.pathname + "?" + search.toString());
  }
  const handleInput = (e)=>{
    const value = e.target.value;
    if(!value)history.replace(location.pathname);
    search.set("q", value.trim());
    history.replace( location.pathname + "?" + search.toString());
  }

  useEffect(()=>{
    const newSearch = new URLSearchParams(location.search);
    if((newSearch.get("q") || "") !== text)setText(newSearch.get("q") || "")
  },[location, text])

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup>
        <Input 
          value={text} 
          // onChange={(e)=>setText(e.target.value)} 
          onChange={handleInput}
          name="q" 
          placeholder="search..."
        />
        {/* <InputGroupAddon addonType="append">
          <Button color="success" className="d-flex align-items-center justify-content-center">
            <img width="20px" height="20px" src={SearchSvg} alt="search"/>
          </Button>
        </InputGroupAddon> */}
      </InputGroup>
    </form>
  )
}
