import { useEffect, useState } from "react";
import { URL_BASE } from "../utils";
import BannerCard from "./BannerCard";

function BannerCardContainer() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(URL_BASE + "/get-categories/")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="banner__cards">
      {data.map((category) => {
        return <BannerCard key={category.id} {...category} />;
      })}
    </div>
  );
}
export default BannerCardContainer;
