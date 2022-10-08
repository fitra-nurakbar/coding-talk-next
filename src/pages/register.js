function RegisterHandler(e){
     e.preventDefault();
         
     console.log("test")
}

export default function Register() {
  return (
    <>
      <h1>Register</h1>
      <form onSubmit={RegisterHandler.bind(this)}>
        <input type='email' placeholder='Inputkan email' />
        <br />
        <input type='password' placeholder='Inputkan password' />
        <br />
        <input type="submit" value="Register"/>
      </form>
    </>
  );
}
