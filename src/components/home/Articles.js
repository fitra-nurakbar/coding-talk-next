import { data } from "autoprefixer";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import styles from "../../styles/Article.module.css";

export default function Articles() {
  const [message, setMessage] = useState("");
  const [articles, setArticles] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("");
      const json = await response.json();

      setMessage(json.message);
      setArticles(json.data);
      setLoading(false);
    };
    getData();
  }, []);

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
        <form method={"POST"} action={""}>
          <div className={styles.card}>
            <h1>CREATE POST</h1>
            <label htmlFor={"title"}>Input Title :</label>
            <input type={"text"} id={"title"} name={"title"} maxLength={"100"} placeholder={"Title limit 100 Character"} />
            <label htmlFor={"category"}>Category :</label>
            <select id={"category"} name={"category"}>
              <option>Technology</option>
              <option>Sport</option>
              <option>Culinary</option>
            </select>
            <label htmlFor={"content"}>Content Post :</label>
            <textarea id={"content"} name={"content"} rows={"5"} placeholder={"Input post content in here..."}></textarea>
            <input type={"submit"} value={"POST"} />
          </div>
        </form>
      </section>
    </div>
  );
}