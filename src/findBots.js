import React from "react";
import CardList from "./CardList";
import Search from "./Search";
import Scroll from "./scroll";
import { robots } from "./data";
// import "./App.css";
const FindBots = () => {
  const [searchFeild, setSearchField] = React.useState("");

  function onSearchChange(event) {
    setSearchField(event.target.value);
  }

  const except = robots.filter((robots) => {
    return robots.username
      .toLocaleLowerCase()
      .includes(searchFeild.toLocaleLowerCase());
  });

  return (
    <div>
      <h1> ROBOTS</h1>

      <p>generate bot</p>
      <Search SearchChange={onSearchChange} />
      <Scroll>
        <CardList robots={except} />
      </Scroll>
    </div>
  );
};

export default FindBots;
