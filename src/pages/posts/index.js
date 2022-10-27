import { authPage } from '../../../middleware/authorizationPage';
import Articles from '../../components/home/Articles';
import Layouts from '../../components/Layouts'

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

export default function index(props) {
     
  return (
    <Layouts title={"Posts"}>
          <h1 className='mt-[100px]'>Posts page</h1>
          <Articles datas={props} />
    </Layouts>
  )
}
