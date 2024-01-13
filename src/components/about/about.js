import "./index.css";
import GradientOrb from "../gradient_orb/gradientorb";

const About = () => {
  return (
    <div className="about__wrapper">
      <div className="about__text">
        <div className="about__title--wrapper">
          <h1>ABOUT</h1>
        </div>
        <p>
          My name is Cera Kocher. I am a Swiss American Creative Developer who
          originally grew up in Colorado, USA but now currently is based out of
          the Netherlands. I completed my University degrees in Media Production
          and Media Design with a minor in Engineering of Technology Arts &
          Media.{" "}
        </p>
        <p>
          My interests span a wide spectrum of endeavors, ranging from digital
          design and web development to the exhilarating realm of experiences
          that fuel my creativity and zest for life.{" "}
        </p>
        <p>
          For instance, I acquired my motorcycle license and promptly adorned my
          bike with a personalized paint job. At 19 I delved into the world of
          Muay Thai, reaching a level where I could participate in amateur
          competitions. A certified White Water Raft Guide, a seasoned barista
          of nearly a decade, and a solo sojourn to the Arctic Circle to master
          the art of mushing sled dogs are just a few chapters of my adventurous
          journey.{" "}
        </p>
        <p>
          Venturing into Indie Game Development, evolving from a photography
          hobbyist to a professional photographer, and sustaining a lifelong
          commitment to global exploration are among my ongoing pursuits. Life,
          for me, is a tapestry of experiences and connections. Fueled by an
          insatiable curiosity about the workings of the world, I find joy in
          being an active participant. This philosophy has guided me across the
          globe, forming deeply rewarding connections and experiences. At my
          core, I am someone enchanted by the magic of personal growth and
          relentless pursuit-a firm believer that life’s richness lies in the
          experiences it offers.{" "}
        </p>
        <quote>
          "Don't sit and wait. Get out there, feel life. Touch the sun, and
          immerse in the sea" -Rumi
        </quote>
      </div>
      <div className="about__visual">
        <div className="about__gradientOrb--wrapper">
          <GradientOrb />
        </div>
        <div className="about__portrait--wrapper">
          <img src={require("../../assets/portrait.jpg")} alt="" />
        </div>
      </div>
    </div>
  );
};
export default About;
