"use client";

import MeteorShower from "./meteor-shower/meteor-shower";
import TwinklingStars from "./twinkling-stars/twinkling-stars";

function Galaxy() {
  return (
    <div id="galaxy" className="fixed inset-0">
      <div className="hidden dark:block">
        <TwinklingStars />
        <MeteorShower />
      </div>
    </div>
  );
}

export default Galaxy;
