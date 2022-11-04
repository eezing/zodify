import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Header from '../components/Header';

const Container = dynamic(() => import('../components/Container'), {
  ssr: false,
});

const Page: NextPage = () => {
  return (
    <>
      <div style={{ height: '100vh', backgroundColor: '#1e1e1e' }}>
        <Header />
        <Container />
      </div>
      <style jsx global>{`
        body {
          margin: 0;
        }
      `}</style>
    </>
  );
};

export default Page;
