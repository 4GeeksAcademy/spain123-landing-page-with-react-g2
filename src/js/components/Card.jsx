import React from "react";

export default function Card({ image, cardTitle, cardDescription, button }) {
  return (
    <div className="card shadow-sm" style={{ width: "18rem" }}>
      <img src={image} className="card-img-top" alt={cardTitle} />
      <div className="card-body">
        <h5 className="card-title">{cardTitle}</h5>
        <p className="card-text">{cardDescription}</p>
        <a href={button.url} className="btn btn-primary">
          {button.label}
        </a>
      </div>
    </div>
  );
}
