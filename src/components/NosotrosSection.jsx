import InstagramFeedContainer from "./InstagramFeedContainer";
import SectionTitle from "./SectionTitle";
import SimpleText from "./SimpleText";

function NosotrosSection() {
  return (
    <section className="nosotros py-10 relative">
      <SectionTitle className={"mb-8"}>NOSOTROS</SectionTitle>
      <SimpleText className="max-w-7xl mx-auto mb-8">
        Un copy cercano como hablandole a un amigo. Lorem ipsum dolor sit amet,
        consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
        laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
        veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
        aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in
        hendrerit in vulputate velit esse molestie consequat, vel illum dolore
        eu feugiat nulla facilisis at vero eros et accumsan et iusto odio
        dignissim qui blandit praesent luptatum zzril delenit augue duis dolore
        te feugait nulla facilisi.
      </SimpleText>
      <InstagramFeedContainer />
      <hr className="max-w-7xl mx-auto border-primary border-1" />
    </section>
  );
}
export default NosotrosSection;
