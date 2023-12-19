import 'aos/dist/aos.css'; // Import CSS
import AOS from 'aos';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 800, // Durasi animasi dalam milidetik
      easing: 'ease-in-out', // Gaya perpindahan
      once: true, // Hanya animasi sekali saat elemen muncul
    });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
