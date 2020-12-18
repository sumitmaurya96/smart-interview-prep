import React from "react";

import Navbar from "views/Components/Navbar/Navbar";
import Footer from "views/Components/Footer/Footer";

//Background Top Image
import backgroundTop from "assets/img/bg-about.png";

//Developers
import zishanImg from "assets/img/developers/zishan.jpg";
import sumitImg from "assets/img/developers/sumit.jpg";

const AboutPage = (props) => {
  return (
    <div>
      {/* <Navbar
        userData={props.data.userData}
        isLoggedIn={props.otherInfo}
        logOut={props.logOut}
        apiLink={props.data.apiLink}
        {...props}
      /> */}

      <div
        className="w-100"
        style={{
          backgroundImage: `url(${backgroundTop})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "400px",
        }}
      >
        <div
          className="d-flex justify-content-center"
          style={{ width: "100%", height: "100%" }}
        ></div>
      </div>

      <div
        className="jumbotron mb-0 text-muted bg-light"
        style={{ borderRadius: "0" }}
      >
        <section className="p-1">
          <h1 className="text-center">About Smart Interview Prep</h1>
          <p>
            Jadavpur University Library was started along with the establishment
            of the University in 1955 in order to cater the academic and
            research needs of the faculty, research scholars, students, officers
            and non-teaching staff. Since then, the University Library has gone
            from strength to strength to live up to the expectations of its
            immediate clientele.It is one of the best-equipped libraries in the
            country.
          </p>
          <p>
            The University is proud of its library system, which comprises the
            Central Library, Salt Lake Campus Library, 36 Departmental Libraries
            under the Faculty of Arts, Science, Engineering and Technology, and
            also the Libraries attached with the Schools and Centres for
            studies. The Central Library of Jadavpur University is one of the
            central facilities used by all types of members of this University.
            This is the third largest library in West Bengal.
          </p>
          <div style={{ textAlign: "center" }}>
            <a
              className="btn btn-md btn-outline-dark"
              target="_blank"
              rel="noopener noreferrer"
              href="http://www.jaduniv.edu.in/templates/newpages/library.html"
            >
              Know more
            </a>
          </div>
        </section>
        <hr className="bg-secondary" />
        <section className="p-1">
          <h1 className="text-center h3">Team</h1>
          <div className="row">
            <div className="col-md-6 text-center">
              <img
                src={zishanImg}
                width="300"
                height="400"
                className="img-thumbnail"
                alt="Zishan Parwez"
              />
              <p className="h4 bold text-muted">Zishan Parwez</p>
              <p className="small bold text-muted">
                Full Stack Developer, ML Engineer
              </p>
            </div>
            <div className="col-md-6 text-center">
              <img
                src={sumitImg}
                width="300"
                height="400"
                className="img-thumbnail"
                alt="Sumit Kumar"
              />
              <p className="h4 bold text-muted">Sumit Kumar</p>
              <p className="small bold text-muted">Full Stack Developer</p>
            </div>
          </div>
        </section>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default AboutPage;
