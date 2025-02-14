import { useEffect, useState } from "react";
import { URL_BASE } from "../utils";
import { InstagramIcon } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CustomSliderArrowRight from "./CustomSliderArrowRight";

function InstagramFeedContainer() {
  const [fotoViejo, setFotoViejo] = useState("");
  const [fotosGaleria, setFotosGaleria] = useState([]);

  useEffect(() => {
    fetch(URL_BASE + "/get-feed_instagram/")
      .then((response) => response.json())
      .then((data) => {
        setFotoViejo(data[0].image);
        setFotosGaleria(data.slice(1));
      });
  }, []);

  return (
    <div className="relative pb-8">
      <div className="max-w-7xl mx-auto flex gap-14">
        <div className="shrink-0">
          <div className="relative flex items-center">
            <img src={fotoViejo} alt="@churroceballos" />
            <div className="bg-primary rounded-full absolute p-2 -left-14">
              <InstagramIcon className="stroke-white" />
            </div>
          </div>
          <p className="text-primary">@churroceballos</p>
        </div>
        <div className="w-full">
          <Slider
            autoplay
            slidesToShow={3}
            className="w-full"
            nextArrow={<CustomSliderArrowRight />}
            arrows
          >
            {fotosGaleria.map((foto, index) => {
              return (
                <div key={index}>
                  <img
                    src={foto.image}
                    alt="@churroceballos"
                    className="object-cover w-full max-h-[410px]"
                  />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      <div className="absolute right-0 w-44 h-[calc(100%_-_24px_-_32px)] top-0 bg-gradient-to-l from-black to-transparent"></div>
    </div>
  );
}
export default InstagramFeedContainer;
