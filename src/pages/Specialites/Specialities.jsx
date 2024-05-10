import React from "react";
import "./specialities.css";
import Button from "react-bootstrap/Button";
import CardCarousel from "../Cards/CardCarousel";

function Specialities() {
  const content = [
    { icon: "bi-heart-pulse", title: "Medicines" },
    { icon: "bi-heart-pulse", title: "Pediatrics" },
    { icon: "bi-heart-pulse", title: "Gynaecology" },
    { icon: "bi-heart-pulse", title: "Medicine" },
    { icon: "bi-heart-pulse", title: "Dermatology" },
    { icon: "bi-heart-pulse", title: "Lab Services" },
    { icon: "bi-heart-pulse", title: "Pediatrics" },
  ];
  return (
    <div>
      <div className="speciality mt-5 mb-4">
        <h2>Specialities</h2>
        <Button variant="outline-light">View All</Button>
      </div>
      <CardCarousel section={2} content={content} />
    </div>
  );
}

export default Specialities;
