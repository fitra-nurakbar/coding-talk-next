import React, { useState, useEffect } from "react";
import styles from "../../styles/Article.module.css";

export default function Articles() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("/api/hello");
      const json = await response.json();

      setData(json);
      setLoading(false);
    };
    getData();
  }, []);

  return (
    <div className='flex'>
      {loading ? (
        <p className='text-center text-5xl'>loading...</p>
      ) : (
        <section className={styles.article}>
          {data.map((name, index) => (
            <div className={styles.card} key={index}>
              <p>{name}</p>
            </div>
          ))}
        </section>
      )}
      <section className={styles.sideMenu}>
        <div className={styles.card}>
          <h1>Menu list</h1>
        </div>
      </section>
    </div>
  );
}
