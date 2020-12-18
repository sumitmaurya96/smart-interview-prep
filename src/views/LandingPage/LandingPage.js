import React from "react";

//Sections
import AsideNav from "./Sections/AsideNav";
import SearchResult from "./Sections/SearchResult";
import Content from "./Sections/Content";

const LandingPage = (props) => {
  const [showContent, setShowContent] = React.useState(false);
  return (
    <React.Fragment>
      <div
        className="bg-light"
        style={{ minHeight: "50rem", paddingTop: "6rem" }}
      >
        <div className="row" style={{ margin: "auto" }}>
          <aside className="col-lg-2 d-lg-block d-none">
            <AsideNav />
          </aside>
          <div className="col-lg-10">
            {showContent ? <Content /> : <SearchResult />}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LandingPage;
