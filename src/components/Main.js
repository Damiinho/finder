import React, { useContext, useEffect } from "react";
import FullList from "./FullList";
import Detail from "./Detail";
import SelectColor from "./SelectColor";
import SelectStripes from "./SelectStripes";
import SelectRegion from "./SelectRegion";
import SelectOther from "./SelectOther";
import "../style/Main.css";
import { AppContext } from "../contexts/AppContext";

const Main = () => {
  const { setFlags } = useContext(AppContext);

  useEffect(() => {
    console.log("działa");
    fetch("data/flag.json")
      .then((res) => res.json())
      .then((flags) => {
        setFlags(flags);
      });

    fetch("data/words.json")
      .then((response) => {
        console.log(response.url); // wyświetli adres URL, który został użyty do wykonania żądania
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [setFlags]);

  return (
    <div className="main">
      <div className="main-select">
        <div className="select-box">
          <div className="selectors">
            <SelectColor />
            <SelectStripes />
            <SelectRegion />
            <SelectOther />
          </div>
          <div className="detail-box">
            <Detail />
          </div>
        </div>
      </div>

      <div className="main-box">
        <div className="full-list">
          <FullList />
        </div>
      </div>
    </div>
  );
};

export default Main;
