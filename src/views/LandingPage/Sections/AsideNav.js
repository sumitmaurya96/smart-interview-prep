import React from "react";

const AsideNav = (props) => {
  const [activeButtonId, setActiveButtonId] = React.useState(4);

  const data = new Array(
    {
      id: 1,
      buttonName: "Cognizant",
    },
    {
      id: 2,
      buttonName: "Facebook",
    },
    {
      id: 3,
      buttonName: "Flipkart",
    },
    {
      id: 4,
      buttonName: "Amazon",
    },
    {
      id: 5,
      buttonName: "Wipro",
    },
    {
      id: 6,
      buttonName: "TCS",
    },
    {
      id: 7,
      buttonName: "TCS",
    },
    {
      id: 8,
      buttonName: "TCS",
    },
    {
      id: 9,
      buttonName: "TCS",
    },
    {
      id: 10,
      buttonName: "TCS",
    },
    {
      id: 11,
      buttonName: "TCS",
    },
    {
      id: 12,
      buttonName: "TCS",
    },
    {
      id: 13,
      buttonName: "TCS",
    }
  );

  return (
    <div className="list-group">
      {data.map((value, index) => {
        return (
          <button
            key={index}
            type="button"
            className={`list-group-item list-group-item-action d-flex justify-content-between align-items-center ${
              activeButtonId === value.id ? "active" : ""
            }`}
          >
            {value.buttonName}
            <span class="badge badge-dark badge-pill">4</span>
          </button>
        );
      })}
    </div>
  );
};

export default AsideNav;
