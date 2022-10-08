import Layouts from "../components/Layouts";
import Articles from "../components/home/Articles";
import Slider from "../components/home/Slider";

export default function Home({data}) {

  return (
    <Layouts title='Home'>
      {/* slider */}
      <Slider />
      {/* article */}
      <Articles contoh={data} />
    </Layouts>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`https://newsapi.org/v2/everything?q=apple&from=2022-09-16&to=2022-09-16&sortBy=popularity&apiKey=e63c0fbdd0c6479c8819d20188f4a4ff`);
  const data = await res.json();

  // if (!data) {
  //   return {
  //     notFound: true,
  //   }
  // }

  return { props: { data } };
}