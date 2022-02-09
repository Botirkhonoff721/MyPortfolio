import React, { useRef, useEffect } from "react";
import { Container, Slider, PreDisplay } from "./style";
import { Link } from "../../components/AllSvgs/AllSvg";
import { Anchor } from "../../components/AllSvgs/AllSvg";
const AnchorComponent = () => {
  const ref = useRef(null);
  const hiddenRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      let scrollPosition = Window.scrollY;
      let windowSize = window.innerHeight;
      let bodyHeight = document.body.offsetHeight;

      let diff = Math.max(bodyHeight - (scrollPosition + windowSize));
      let diffP = (diff * 100) / (bodyHeight - windowSize);
      ref.current.style.transform = `translate(${-diffP}%)`;
      if (Window.scrollY > 5) {
        hiddenRef.current.style.display = "none";
      } else {
        hiddenRef.current.style.display = "block";
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container>
      <PreDisplay ref={hiddenRef} className="hidden">
        <Anchor width={70} height={70} fill="currentColor" />
      </PreDisplay>
      <Slider ref={ref}>
        {[...Array(25)].map((x, id) => {
          return (
            <Link
              key={id}
              width={25}
              height={25}
              fill="currentColor"
              className="chain"
            />
          );
        })}
        <Anchor width={70} height={70} fill="currentColor" />
      </Slider>
    </Container>
  );
};

export default AnchorComponent;
