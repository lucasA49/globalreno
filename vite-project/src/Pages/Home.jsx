import Navbar from "../Composant/Navbar.jsx";
import ImagePanels from "../Composant/HomeSlider.jsx";
import HomeSlider from "../Composant/CompareImg.jsx";
import Carousel from "../Composant/Carousel.jsx";
import Footer from "../Composant/Footer.jsx";
export default function Home() {
  return (
    <>
      <Navbar />
      <div>
        <img src="baniere-maison.jpeg" className="w-full  h-150" alt="" />
      </div>

      <div className="flex justify-between pt-8 w-full h-20  ">
        <h1 className="w-60 h-10 ml-20  mt-10 text-1g">
          L'expérience Global Reno
        </h1>
        <div className="flex  justify-between mr-50 ">
          <img
            src="entreprise-fr.png"
            alt="entreprise-fr.png"
            className="h-20 w-20"
          />
          <img
            src="fabrication-francaise.png"
            alt="logo_fabrication_francaise"
            className="h-20 w-35"
          />
          <img src="rge.png" alt="logo_rge" className="h-20 w-30" />
          <img
            src="fabrication-francaise.png"
            alt="logo_fabrication_francaise"
            className="h-20 w-35"
          />
        </div>
      </div>

      <div className="flex justify-around items-center mt-10  gap-20 justify-center">
        <div
          className="bg-gray-400 w-100  ml-20  rounded-lg p-5"
        >
          <p>
            Cela est un texte temporaire pour faire la présentation de
            l'éxpérience de l'entreprise Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Fuga atque rerum accusamus quibusdam in mollitia
            voluptatum numquam, iusto delectus praesentium quis, officia
            deleniti corrupti? Voluptatibus aliquam explicabo iusto maiores
            dignissimos?Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Enim vitae delectus in. Soluta, dignissimos. Nulla at non, nisi
            neque minima, eos iusto voluptates blanditiis doloribus, molestias
            laudantium necessitatibus cumque odio!Loremlorem Lorem ipsum dolor
            sit amet consectetur, adipisicing elit. Voluptatem, facere.
            Excepturi officiis nisi optio quis ipsum architecto, doloribus a
            blanditiis numquam. Cum, et obcaecati. Eaque distinctio quo optio
            quis id. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Facere quos fuga nobis ut eaque harum obcaecati voluptas facilis
            sapiente magnam quod totam commodi consequuntur hic, qui mollitia
            autem ad voluptates.
          </p>
        </div>
        <div className="">
          <HomeSlider />
        </div>
      </div>
      <div>
        <h2 className="flex align-items-center justify-center  mt-20 mb-20 text-1g">
          Découvrez nos présentation
        </h2>
        <ImagePanels />
      </div>
      <div>
        <Carousel />
      </div>
      <Footer />
    </>
  );
}
