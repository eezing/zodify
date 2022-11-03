import { NextPage } from 'next';
import dynamic from 'next/dynamic';

const Container = dynamic(() => import('../components/Container'), {
  ssr: false,
});

const Page: NextPage = () => {
  return (
    <>
      <Container />
      <style jsx global>{`
        body {
          margin: 1vh 0 0 0;
          background-color: #1e1e1e;
        }
      `}</style>
    </>
  );
};

export default Page;
