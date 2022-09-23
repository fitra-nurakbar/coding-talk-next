import Layouts from "../components/Layouts";
import Articles from "../components/home/Articles";
import Slider from "../components/home/Slider";

export default function Home() {
  return (
    <Layouts title='Home'>
      {/* slider */}
      <Slider />
      {/* article */}
      <Articles />
    </Layouts>
  );
}
