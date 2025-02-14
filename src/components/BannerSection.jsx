import { Menu } from "lucide-react"
import SectionTitle from "./SectionTitle"
import BannerCardContainer from "./BannerCardContainer"

function BannerSection() {

    const links = ["inicio", "nosotros", "viajes", "blog", "contacto"]
    return (
        <section className="banner">
            <header className="banner__header">
                <img src="/section-banner-logo.png" alt="Logo" className="banner__logo" />
                <Menu className="banner__menu-icon" />
                <nav className="banner__nav">
                    {links.map((link) => {
                        return (
                            <a href="#" className="banner__link" key={link}>{link}</a>
                        )
                    })}
                </nav>
            </header>
            <div className="banner__content">
                <h1 className="banner__title">THE TRAVEL</h1>
                <SectionTitle>EXPERIENCE</SectionTitle>
            </div>
            <BannerCardContainer />
        </section>
    )
}

export default BannerSection