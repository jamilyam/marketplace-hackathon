import React, { useState } from "react";
import { InputGroup, Input } from "reactstrap";
import { useLocation, useHistory } from "react-router-dom";

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
      </InputGroup>
    </form>
  );
}
