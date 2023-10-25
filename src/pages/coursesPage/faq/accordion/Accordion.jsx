import React, { useState } from "react";
import { BsChevronDown, BsChevronRight } from "react-icons/bs";
import "./style.css";
export default function Accordion() {
  const [isExpanded, setIsExpanded] = useState(false);

  const faqData = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amet?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
      id: 5,
      title: "Lorem ipsum dolor sit amet?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm tempor incididunt ut labore et dolore magna aliqua. ",
    },
  ];

  const handleAccordionClick = (itemId) => {
    setIsExpanded((prevExpandedItems) => ({
      ...prevExpandedItems,
      [itemId]: !prevExpandedItems[itemId],
    }));
  };
  return (
    <div className="accordionWrapper">
      {faqData.map((item) => (
        <div className="accordion" key={item.id}>
          <div
            className="accordionHeader"
            onClick={() => handleAccordionClick(item.id)}
          >
            <p>{item.title}</p>{" "}
            {isExpanded[item.id] ? <BsChevronDown /> : <BsChevronRight />}
          </div>
          {isExpanded[item.id] && (
            <div className="accordionBody">
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
