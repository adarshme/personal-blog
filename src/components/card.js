import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import { parseDate } from "../helpers";

const Card = (props) => {
  return (
    <div className="card-class border mt-1 mb-1 rounded-lg overflow-hidden shadow bg-color-pri">
      <Link
        to={props.to}
        style={{ display: "flex", flexDirection: "row", height: "100%" }}
      >
        <Img className="blog-thumbnail" fluid={props.image} />
        <div
          className="card-text"
          style={{
            display: "flex",
            flexDirection: "column",
            alignSelf: "center",
          }}
        >
          <h4 className="card-title font-semibold">{props.title}</h4>
          <h6 className="card-date">{parseDate(props.date)}</h6>
        </div>
      </Link>
    </div>
  );
};

export default Card;
