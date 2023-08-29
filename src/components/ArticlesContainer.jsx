import Article from "./Article";
import img1 from "../assets/images/image-retro-pcs.jpg";
import img2 from "../assets/images/image-top-laptops.jpg";
import img3 from "../assets/images/image-gaming-growth.jpg";
const ArticlesContainer = () => {
  return (
    <>
      <section className="md:flex md:flex-wrap md:place-content-between md:gap-10 md:justify-center">
        <Article
          img={img1}
          number="01"
          title="Este es un titulo 1"
          text="Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet"
        />
        <Article
          img={img2}
          number="02"
          title="Este es un titulo 2"
          text="Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet"
        />
        <Article
          img={img3}
          number="03"
          title="Este es un titulo 3"
          text="Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet"
        />
      </section>
    </>
  );
};

export default ArticlesContainer;
