import { useRouter } from "next/router";

export default function Post() {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <section>
      <h1 className='text-4xl text-center font-semibold'>Post: {pid}</h1>
    </section>
  );
}
