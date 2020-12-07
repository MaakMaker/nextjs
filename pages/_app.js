import React, { Fragment } from "react";
import "../styles/global.css";
import Link from "next/link";
import { Nav, Navbar } from "react-bootstrap";

const _app = ({ Component, pageProps }) => {
  return (
    <Fragment>
      {/* <div className="container-fluid bg-dark">
        <div className="container">
          <Navbar expand="lg" variant="dark">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Link href="/">
                  <a className="text-white text-decoration-none py-2 pl-3">Home</a>
                </Link>
                <Link href="/posts/first-post">
                  <a className="text-white text-decoration-none py-2 pl-3">Post</a>
                </Link>
                <Link href="/main/main">
                  <a className="text-white text-decoration-none py-2 pl-3">Main</a>
                </Link>
                <Link href="/main/main">
                  <a className="text-white text-decoration-none py-2 pl-3">Second</a>
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div> */}
      {/*  */}
      <Component {...pageProps} />
    </Fragment>
  );
};

export default _app;
