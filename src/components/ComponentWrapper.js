import React, { Component } from "react";
import "../assets/css/app.css";
import ContentRowTop from "./ContentRowTop";
import Footer from "./Footer";
import TopBar from "./TopBar";

export default class ComponentWrapper extends Component {
  render() {
    return (
      <>
        {/* Content Wrapper  */}
        <div id="content-wrapper" className="d-flex flex-column">
          {/* Main Content  */}
          <div id="content">
            {/* Topbar  */}
            <TopBar />
            {/* End of Topbar  */}

            {/* Content Row Top  */}
            <ContentRowTop />
            {/* End Content Row Top */}
          </div>
          {/* End of MainContent  */}

          {/* Footer */}
          <Footer />
          {/* End of Footer  */}
        </div>
        {/* End of Content Wrapper  */}
      </>
    );
  }
}
