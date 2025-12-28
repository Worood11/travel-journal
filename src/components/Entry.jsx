import React from "react";
import marker from "../imgs/marker.png";

export default function Entry(props) {
  return (
    <article className="flex gap-6 max-w-3xl mb-10">
      <img
        src={props.img.src}
        alt={props.img.alt}
        className="w-72 h-96 object-cover rounded-xl shrink-0"
      />

      <div className="flex flex-col pt-15">
        <div className="flex items-center gap-2 text-sm">
          <img src={marker} alt="marker-icon" className="w-2.5 h-3" />
          <span className="uppercase tracking-widest font-medium">
            {props.country}
          </span>
          <a
            href={props.googleMapsLink}
            target="_blank"
            className="text-gray-600 underline ml-2"
          >
            View on Google Maps
          </a>
        </div>

        <h2 className="text-3xl font-bold mt-3 mb-4">{props.title}</h2>

        <p className="text-base font-semibold mb-3">{props.dates}</p>

        <p className="text-base leading-relaxed text-gray-700 max-w-xl">
          {props.text}
        </p>
      </div>
    </article>
  );
}
