import React, { Fragment } from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";

const FirstPost = () => {
  return (
    <Fragment>
      <Head>
        <title>Title : First-Post</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container-fluid bg-dark ">
        <div className="container d-flex align-items-center ">
          <h1 className="text-white"> First Post : </h1>
          <div>
            <Link href="/">
              <a className="btn btn-info text-decoration-none">Back to home</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="container ">
        <div className="row m-3">
          {/* 1st card */}
          <div className="col-md-4">
            <div class="card" style={{ width: "18rem" }}>
              <img src="/images/user.png" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up the bulk of the
                  card's content.
                </p>
                <Link href="/">
                  <a className="btn btn-primary">GoTo Home</a>
                </Link>
              </div>
            </div>
          </div>
          {/* 2nd card */}
          <div className="col-md-4">
            <div class="card" style={{ width: "18rem" }}>
              <img src="/images/user.png" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up the bulk of the
                  card's content.
                </p>
                <Link href="/">
                  <a className="btn btn-primary">GoTo Home</a>
                </Link>
              </div>
            </div>
          </div>
          {/* 3rd card */}
          <div className="col-md-4">
            <div class="card" style={{ width: "18rem" }}>
              <img src="/images/user.png" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up the bulk of the
                  card's content.
                </p>
                <Link href="/">
                  <a className="btn btn-primary">GoTo Home</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default FirstPost;
