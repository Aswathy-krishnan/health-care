import React, { useEffect } from "react";
import "./card.css";

function CardCarousel({ section, content = [] }) {
  return (
    <>
      <div className="card-carousel">
        {content.map((variant, i) => (
          <div key={i} className={section === 1 ? "card-main" :"card-variant"}>
            {section === 1 && (
              <>
                <img src={variant} alt="" />
              </>
            )}
            {section === 2 && (
              <div className="variant">
                <i class={`bi ${variant.icon}`}></i>
                <br />
                <span className="mt-10">{variant.title}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default CardCarousel;
