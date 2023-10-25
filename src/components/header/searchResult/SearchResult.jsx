import React from "react";
import { useNavigate } from "react-router-dom";
import notFoundImg from "../../../assets/images/notFound.png";
import "./style.css";
export default function SearchResult({ data }) {
  const navigate = useNavigate();
  const redirectToDetailsPage = (index) => {
    const detailsPageUrl = `/courses/${index}`;

    navigate(detailsPageUrl);
  };
  return (
    <div className="searchResultWrapper">
      {data.length > 0 ? (
        data.map((product, index) => (
          <p onClick={() => redirectToDetailsPage(index)} key={index}>
            {product.name}
          </p>
        ))
      ) : (
        <div className="productNotFound">
          <img src={notFoundImg} />
        </div>
      )}
    </div>
  );
}
