import Footer from '../components/Footer';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps}></Component>
      <Footer />
    </>
  );
}

export default MyApp;
