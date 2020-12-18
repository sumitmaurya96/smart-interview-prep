import React from "react";

//Components
import Pagination from "components/Pagination/Pagination";

const Content = () => {
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
    }
  );

  return (
    <React.Fragment>
      <article className="list-group p-4">
        {data.map((value, index) => {
          return (
            <div
              className="list-group-item flex-column align-items-start"
              key={index}
            >
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">List group item heading</h5>
                <small>3 days ago</small>
              </div>
              <p className="mb-1">
                Donec id elit non mi porta gravida at eget metus. Maecenas sed
                diam eget risus varius blandit.
              </p>
              <small>Donec id elit non mi porta.</small>
            </div>
          );
        })}
      </article>
      <Pagination />
    </React.Fragment>
  );
};

export default Content;
