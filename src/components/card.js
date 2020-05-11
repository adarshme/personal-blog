import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { parseDate } from "../helpers"

const Card = props => {
  return (
    <div className="bg-white border mt-1 mb-1 mr-2 rounded-lg overflow-hidden shadow">
      <Link to={props.to} style={{ display: "flex", flexDirection: "row" }}>
        <Img className="blog-thumbnail" fluid={props.image} />
        <div
          className="card-text"
          style={{
            display: "flex",
            flexDirection: "column",
            alignSelf: "center",
          }}
        >
          <h4 className="font-semibold text-xl">{props.title}</h4>
          <h6 className="text-gray-700">{parseDate(props.date)}</h6>
        </div>
      </Link>
    </div>
  )
}

export default Card
