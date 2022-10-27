import React from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import Cookies from "js-cookie";
import Router from "next/router";

export default function Navbar() {
  function logoutHandler(e) {
    e.preventDefault();

    Cookies.remove('token');

    Router.replace('/auth/login');
}

  return (
    <header className={styles.header}>
      <div className={styles.wrap}>
        <h1>News</h1>
        <nav>
          <Link href='/'>Home</Link>
          <Link href="/posts"><a>Posts</a></Link>
          <Link href="/posts/create"><a>Create Post</a></Link>
          <a href="#" onClick={logoutHandler.bind(this)}>Logout</a>
        </nav>
      </div>
    </header>
  );
}
