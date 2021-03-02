import Head from 'next/head'
import styles from "../styles/styles.module.scss"


function Home(props) {

  const langHandler = () =>{
    props.setLang( props.lang === "en" ? "fr" : "en") 
  }

  return (
    <div >
      <Head>
        <title>next-idea | Home</title>
        <meta name="description" content={` next-idea website is website cotains data for 10 users`} />
      </Head>

      <main>

        <h1 className={styles.h1}>
          home page <br/>
          the current language is {props.lang}
        </h1>
        
        <button onClick={langHandler}>toggle Lang</button>

        <br/>
      </main>

    
    </div>
  )
}



export default Home;
