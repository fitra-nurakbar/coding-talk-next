import Layouts from "../components/Layouts";
import Articles from "../components/home/Articles";
import Slider from "../components/home/Slider";
import { authPage } from "../../middleware/authorizationPage";

export async function getServerSideProps(ctx) {
  const { token } = await authPage(ctx);

  const postReq = await fetch("http://localhost:3000/api/posts", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const posts = await postReq.json();

  return {
    props: {
      token,
      posts: posts.data,
    },
  };
}

export default function Home(props) {

  return (
    <Layouts title='Home'>
      {/* slider */}
      <Slider />
      {/* article */}
      <Articles datas={{ ...props }} />
    </Layouts>
  );
}