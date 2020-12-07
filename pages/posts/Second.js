import React, { Fragment } from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import Layout from "../../components/Layout";

const Second = () => {
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
      <Layout>
        <a href="">This is Link </a>
      </Layout>
    </Fragment>
  );
};

export default Second;
