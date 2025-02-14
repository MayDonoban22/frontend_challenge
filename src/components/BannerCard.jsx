import { LucideChevronRightCircle } from "lucide-react";

function BannerCard({ image_banner, name }) {
  return (
    <article className="banner-card">
      <div className="banner-card__content">
        <img src={image_banner} alt={name} className="banner-card__image" />
        <div className="banner-card__text">
          <p>{name}</p>
          <LucideChevronRightCircle />
        </div>
      </div>
    </article>
  );
}
export default BannerCard;
