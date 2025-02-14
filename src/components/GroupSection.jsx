import GroupCardsContainer from "./GroupCardsContainer"
import SectionTitle from "./SectionTitle"

function GroupSection() {
    return (
        <section className="py-10 pb-40">
            <SectionTitle className="text-center mb-10">EXPERIENCIAS GRUPALES</SectionTitle>
            <GroupCardsContainer />
        </section>
    )
}
export default GroupSection