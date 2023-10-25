import React from "react";
import { useNavigate } from "react-router-dom";
import notFoundImg from "../../../assets/images/notFound.png";
import {AiOutlineClose} from 'react-icons/ai'
import "./style.css";
export default function SearchResult({ data }) {
  const navigate = useNavigate();
  const redirectToServicePage = (index) => {
    const servicesPageUrl = `/service/${index}`;
     console.log(data);
    navigate(servicesPageUrl);
  };
  const RemoveClass=()=>{
    document.querySelector('.overlay').style.display="none"
    document.querySelector('.navbar-search').value=""
  }

  return (
    <div className="searchResultWrapper">
      {data.length > 0 ? (
        data.map((product, index) => (
          <p onClick={() => redirectToServicePage(index)} key={index}>
            {product.title}
          </p>
        ))
      ) : (
        <div className="productNotFound">
          <img src={notFoundImg} />
        </div>
      )}
      <span onClick={RemoveClass}><AiOutlineClose className="close-btn"/></span>
    </div>
  );
}
