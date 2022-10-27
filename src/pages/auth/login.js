import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Cookies from 'js-cookie';
import { unauthPage } from "../../../middleware/authorizationPage";


export async function getServerSideProps(ctx) {
  await unauthPage(ctx);

  return { props: {} }
}

export default function Login() {
  const [field, setField] = useState({
    email: "",
    password: ""
  })

  const router = useRouter()

  function fieldHandler(e) {
    const name = e.target.getAttribute("name")

    setField({
      ...field,
      [name]: e.target.value
    })
  }

  async function loginHandler(e) {
    e.preventDefault()

    await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(field)
    })
    .then(res => res.json())
    .then(async res => {
      if(await res.token !== null){
        Cookies.set("token", res.token)
        router.push("/")
      }
    })
  }

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={loginHandler.bind(this)}>
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
        <button type='submit'>Login</button>
        <br />
        <Link href='/auth/register'>Register</Link>
      </form>
    </>
  );
}
