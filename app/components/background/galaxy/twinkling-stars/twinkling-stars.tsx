import { useEffect } from "react";

function TwinklingStars() {
  function generateTwinkleStar() {
    const twinkleStarTemplate = document.getElementById("twinkle-star");
    if (!twinkleStarTemplate) {
      return;
    }
    // Clone the twinkle star template and set its attributes.
    const twinkleStar = twinkleStarTemplate.cloneNode(true) as HTMLElement;
    const galaxy = document.getElementById("galaxy");
    twinkleStar.style.position = "absolute";
    twinkleStar.style.left =
      Math.floor(Math.random() * window.innerWidth) + "px";
    twinkleStar.style.top =
      Math.floor(Math.random() * (window.innerHeight / 3)) + "px";
    twinkleStar.style.width =
      window.innerWidth < 768
        ? Math.floor(Math.random() * (15 - 7.5 + 1) + 7.5) + "px"
        : Math.floor(Math.random() * (30 - 15 + 1) + 15) + "px";
    twinkleStar.style.height = twinkleStar.style.width;
    twinkleStar.classList.add("twinkle");
    galaxy ? galaxy.appendChild(twinkleStar) : null;

    // Remove the twinkle star after the animation is completed.
    setTimeout(() => {
      twinkleStar.remove();
    }, 2500);
  }

  useEffect(() => {
    const twinkleInterval = setInterval(generateTwinkleStar, 5000);
    return () => {
      clearInterval(twinkleInterval);
    };
  }, []);

  return (
    <svg
      id="twinkle-star"
      width="149"
      height="149"
      viewBox="0 0 149 149"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-full animate-twinkle template"
    >
      <circle cx="74" cy="74" r="11" fill="white" />
      <rect
        y="141.421"
        width="200"
        height="10"
        transform="rotate(-45 0 141.421)"
        fill="url(#paint0_linear_4_2)"
      />
      <rect
        x="7.07107"
        width="200"
        height="10"
        transform="rotate(45 7.07107 0)"
        fill="url(#paint1_linear_4_2)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_4_2"
          x1="0"
          y1="146.421"
          x2="200"
          y2="146.421"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1E1E1E" />
          <stop offset="0.445" stopColor="white" />
          <stop offset="0.58721" stopColor="white" />
          <stop offset="1" stopColor="#1E1E1E" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_4_2"
          x1="7.07107"
          y1="5"
          x2="207.071"
          y2="5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1E1E1E" />
          <stop offset="0.42" stopColor="white" />
          <stop offset="0.555" stopColor="white" />
          <stop offset="1" stopColor="#1E1E1E" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default TwinklingStars;
