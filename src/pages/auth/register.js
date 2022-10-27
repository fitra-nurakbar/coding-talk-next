import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "../../styles/LoginRegister.module.css";

export default function Register() {
  const [field, setField] = useState({
    email: "",
    password: "",
    confirm: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
    confirm: "",
  });

  const [status, setStatus] = useState("Normal");

  const router = useRouter()

  function fieldHandler(e) {
    const name = e.target.getAttribute("name");

    setField({
      ...field,
      [name]: e.target.value,
    })
  }

  async function registerHandler(e) {
    e.preventDefault();

    setStatus("Loading...");
    const datEmail = field.email;
    const datPass = field.password;
    const datConf = field.confirm;

    if (datPass === datConf) {
      setError(values => ({...values, confirm: ""}))

      const dataUser = {
        email: datEmail,
        password: datPass,
      };

      await fetch("/api/auth/register", {
        method: "POST",
        body: JSON.stringify(dataUser),
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(res => res.json())
      .then(async res => {
        if(await res.data !== null){
          const data_email = datEmail
          const data_password = datPass
          window.localStorage.setItem('dat_email', data_email)
          window.localStorage.setItem('dat_password', data_password)
          router.push("/login")
        }
      })
      .catch(err => {
        if(err) return setStatus("Error" + status);
      })
      setStatus("Success");
    } else {
      setError((values) => ({ ...values, confirm: "err" }));
    }
  }

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={registerHandler.bind(this)}>
        <label htmlFor='email'>Email :</label>
        <input
          name='email'
          id='email'
          type='email'
          placeholder='Inputkan email'
          onChange={fieldHandler.bind(this)}
        />
        <br />
        <label>Password :</label>
        <input
          name='password'
          id='password'
          onChange={fieldHandler.bind(this)}
          type='password'
          placeholder='Inputkan password'
        />
        <br />
        <label htmlFor='confirm'>Confirm password :</label>
        <input
          name='confirm'
          id='confirm'
          onChange={fieldHandler.bind(this)}
          type='password'
          placeholder='Inputkan password'
        />
        {error.confirm ? (
          <div className={styles.warning}>
            Password confirmation does not match
          </div>
        ) : (
          ""
        )}
        <br />
        <button type='submit'>Register</button>
        <span>Output: {status}</span>
        <br />
        <Link href='/auth/login'>Login</Link>
      </form>
    </>
  );
}
