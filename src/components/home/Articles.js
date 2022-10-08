import Link from "next/link";
import React, { useState, useEffect } from "react";
import styles from "../../styles/Article.module.css";

export default function Articles(contoh) {
  console.log({contoh})

  const [fields, setFields] = useState("");
  const [article, setArticles] = useState("");
  const [loading, setLoading] = useState(true);
  const articles = article.data

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("/api/posts/", {
        method: "GET",
        headers: {
          "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkB0ZXN0LmNvbSIsImlhdCI6MTY2NTEyNTM4NiwiZXhwIjoxNjY1NzMwMTg2fQ.Andp-g3a4-fSYP3EbU6aaqVvJ80RPwo2eCqNUpFgD08",
        }
      });
      const json = await response.json();

      setArticles(json);
      setLoading(false);
    };
    getData();
  }, []);

  async function getServerSideProps(e) {
    e.preventDefault();

    const create = await fetch("/api/posts/create", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkB0ZXN0LmNvbSIsImlhdCI6MTY2NTEyNTM4NiwiZXhwIjoxNjY1NzMwMTg2fQ.Andp-g3a4-fSYP3EbU6aaqVvJ80RPwo2eCqNUpFgD08", 
      },
      body: JSON.stringify(fields),
    });
  }

  function fieldHandler(e) {
    const target = e.target;
    const name = target.getAttribute("name");

    setFields({
      ...fields,
      [name]: e.target.value,
    });
  }
  return (
    <div className={styles.wrap}>
      {loading ? (
        <h1 className='text-center text-5xl w-full'>loading...</h1>
      ) : (
        <section className={styles.article}>
          {articles.map((article, index) => (
            <div className={styles.card} key={index}>
              <h1>{article.title}</h1>
              <p>{article.content}</p>
              <Link href={`/post/${article.id}`}>
                <a>Details</a>
              </Link>
            </div>
          ))}
        </section>
      )}
      <section className={styles.sideMenu}>
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
              onChange={fieldHandler.bind(this)}
            />
            <label htmlFor={"category"}>Category :</label>
            <select
              id={"category"}
              name={"category"}
              onChange={fieldHandler.bind(this)}>
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
      </section>
    </div>
  );
}
