import React from 'react'

export default function Form() {
  return (
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
   </section>
  )
}
