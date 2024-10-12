import { useEffect } from "react";

function MeteorShower() {
  function createMeteor() {
    // create a meteor
    let meteor = document.createElement("div");
    meteor.setAttribute("class", "meteor");
    meteor.style.left = Math.round(Math.random() * window.innerWidth) + "px";
    meteor.style.top = Math.round(Math.random() * window.innerHeight) + "px";

    // append the meteor to a random meteor shower (direction)
    const showers = document.querySelectorAll(".shower");
    if (showers.length > 0) {
      const random = Math.floor(Math.random() * showers.length);
      const shower = showers[random];
      shower.append(meteor);
    }

    // remove the meteor after the animation duration
    setTimeout(() => {
      meteor.remove();
    }, 3500);
  }

  useEffect(() => {
    const meteorInterval = setInterval(createMeteor, 1500);
    return () => {
      clearInterval(meteorInterval);
    };
  }, []);

  return (
    <div id="meteors">
      <div className="shower ur" />
      <div className="shower dr" />
      <div className="shower dl" />
      <div className="shower ul" />
    </div>
  );
}

export default MeteorShower;
