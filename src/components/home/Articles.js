import Link from "next/link";
import React, { useState, useEffect } from "react";
import styles from "../../styles/Article.module.css";
import { authPage } from "../../../middleware/authorizationPage";
import Router from "next/router";
import Button from "../Button";

export default function Articles({datas}) {
  const [posts, setPosts] = useState(datas.posts);
  const { token } = datas
  
  async function deleteHandler(id, e) {
    e.preventDefault();
    
    const ask = confirm("Apakah data ini akan dihapus?");

    if (ask) {
      const deletePost = await fetch("/api/posts/delete/" + id, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      const res = await deletePost.json();

      const postsFiltered = posts.filter((post) => {
        return post.id !== id && post;
      });

      setPosts(postsFiltered);
    }
  }

  function editHandler(id) {
    Router.push(`/posts/edit/${id}`);
  }

  return (
    <div className={styles.wrap}>
      <section className={styles.article}>
        {posts.map((post, index) => (
          <div className={styles.card} key={index}>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <div>
              <Button onClick={editHandler.bind(this, post.id)}>Edit</Button>
              <Button className="bg-red-500 text-white" onClick={deleteHandler.bind(this, post.id)}>
                Delete
              </Button>
            </div>
          </div>
        ))}
      </section>
      {/* <section className={styles.sideMenu}>
        <form onSubmit={getServerSideProps.bind(this)}>
          <div className={styles.card}>
            <h1>CREATE POST</h1>
            <label htmlFor={"title"}>Input Title :</label>
            <input
              type={"text"}
              id={"title"}
              name={"title"}
              maxLength={"100"}
              placeholder={"Title limit 100 Character"}
              onChange={fieldsHandler.bind(this)}
            />
            <label htmlFor={"category"}>Category :</label>
            <select
              id={"category"}
              name={"category"}
              onChange={fieldsHandler.bind(this)}>
              <option value={"Technology"}>Technology</option>
              <option>Sport</option>
              <option>Game</option>
              <option value={"Music"}>Music</option>
            </select>
            <label htmlFor={"content"}>Content Post :</label>
            <textarea
              id={"content"}
              name={"content"}
              rows={"5"}
              placeholder={"Input post content in here..."}
              onChange={fieldHandler.bind(this)}></textarea>
            <input type={"submit"} value={"POST"} />
          </div>
        </form>
      </section> */}
    </div>
  );
}
