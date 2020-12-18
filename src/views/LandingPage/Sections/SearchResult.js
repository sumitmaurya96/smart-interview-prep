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
      <form className="form-inline">
        <input
          style={{ width: "70rem" }}
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>

      <article className="list-group p-4">
        {data.map((value, index) => {
          return (
            <div
              className="list-group-item flex-column align-items-start"
              key={index}
            >
              <button className="btn btn-link d-flex justify-content-between">
                <h5 className="mb-1">List group item heading</h5>
              </button>
              <p className="mb-1 d-flex w-100 justify-content-between">
                Donec id elit non mi porta gravida at eget metus. Maecenas sed
                diam eget risus varius blandit.
                <small>3 days ago</small>
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
