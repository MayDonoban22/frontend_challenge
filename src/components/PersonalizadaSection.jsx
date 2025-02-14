import SectionTitle from "./SectionTitle";
import SimpleText from "./SimpleText";

function PersonalizadaSection() {
  return (
    <section className=" py-10 relative">
      <SectionTitle className={"mb-8"}>
        EXPERIENCIAS PERSONALIZADAS
      </SectionTitle>
      <div className="personalizada flex gap-10 max-w-[1366px] mx-auto">
        <img
          src="/exp-personalizadas.png"
          alt="mujer"
          className="perzonalizada__image w-[500px]"
        />
        <div className="self-center">
          <h3 className="font-bold text-2xl mb-3">¿QUÉ NOS HACE DIFERENTES?</h3>
          <SimpleText className=" mx-auto mb-8">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla
            facilisis at vero eros et accumsan et iusto odio dignissim qui
            blandit praesent luptatum zzril delenit augue duis dolore te feugait
            nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing
            elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
            magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
            nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip
            ex ea commodo consequat. Duis autem vel eum iriure dolor in
            hendrerit in vulputate velit esse molestie consequat, vel illum
            dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto
            odio dignissim qui blandit praesent luptatum zzril delenit augue
            duis dolore te feugait nulla facilisi.
          </SimpleText>
          <div className="bg-primary text-white py-8 flex justify-center rounded-xl w-fit px-17">
            <a href="#" className="font-black text-2xl  ">
              COTIZAR MI VIAJE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PersonalizadaSection;
