import React, { Fragment } from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

const main = () => {
  return (
    <Fragment>
      <h1> This is Mian Page </h1>
      <p>Click Link to go first page</p>
      <Link href="/posts/first-post">
        <a>Goto</a>
      </Link>
    </Fragment>
  );
};

export default main;
