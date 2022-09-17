import Layouts from "../components/layouts";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Articles from "../components/articles";
import Slider from "../components/slider";
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <Layouts title='Home'>
      <Navbar />
      {/* slider */}
      <Slider />
      {/* article */}
      <section className={styles.article}>
        <Articles />
      </section>
      {/* footer */}
      <Footer />
    </Layouts>
  );
}
