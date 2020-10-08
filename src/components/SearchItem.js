import React, { useState } from "react";
import { InputGroup, Input, InputGroupAddon, Button } from "reactstrap";
import { useLocation, useHistory } from "react-router-dom";
import SearchIcon from "../assets/loupe.svg";

export default function SearchItem() {
  const [text, setText] = useState();
  const location = useLocation();
  const search = new URLSearchParams(location.search);
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    history.replace(location.pathname + "?" + search.toString());
  };
  return (
    <form onClick={handleSubmit}>
      <InputGroup>
        <Input value={text} onChange={(e) => setText(e.target.value)} />
        <InputGroupAddon addonType="append">
          <Button
            color="success"
            className="d-flex align-items-center justify-content-center"
          >
            <img width="20px" height="20px" src={SearchIcon} />
          </Button>
        </InputGroupAddon>
      </InputGroup>
    </form>
  );
}
