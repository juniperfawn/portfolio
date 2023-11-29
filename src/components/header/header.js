import "./index.css";
import Star from "../../assets/star.svg";
import { motion as m } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const Header = () => {
  const constraintsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide the element after 10 seconds
    const timeoutId = setTimeout(() => {
      setIsVisible(false);
    }, 10000); // 10000 milliseconds = 10 seconds

    // Clear the timeout when the component is unmounted
    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    // <div className="header">
    //   <p>Hello I'm Cera, a</p>
    //   <h1 className="blur">DESIGNER</h1>
    //   <h1>DEVELOPER</h1>
    //   <h1 className="blur">MEDIA MAKER</h1>
    // </div>
    <div>
      {/* <div className="star">
        <img src={Star} />
      </div> */}
      <div className="header" ref={constraintsRef}>
        <m.div className="star">
          <div className="centered-content">
            <img src={Star} alt="Star" />
            {isVisible && (
              <div>
                {/* Your content goes here */}
                <p>move stuff!!</p>
              </div>
            )}
          </div>
        </m.div>
        <p>Hello I'm Cera, a</p>
        <m.h1
          drag
          dragConstraints={constraintsRef}
          className="header__creative"
        >
          CREATIVE
        </m.h1>
        <m.h1
          drag
          dragConstraints={constraintsRef}
          className="header__developer"
        >
          DEVELOPER
        </m.h1>
      </div>
    </div>
  );
};
export default Header;
