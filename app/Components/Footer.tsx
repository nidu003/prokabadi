import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <Head>
        <title>Aakash Pikalmonde</title>
        <meta name="description" content="Aakash Pikalmonde's portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="footer-main-container">
        <div className="footer">
          <h1>AAKASH</h1>
          <h2>PIKALMUNDE</h2>
          <h3>REACH SOCIAL</h3>
          <p className='p1'>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.
        </p>
        <p className='p2'>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.
        </p>


          <div className="social-icons">
            <Link href="#"><Image src="/facebook.svg" alt="Facebook" width={50} height={50} /></Link>
            <Link href="#"><Image src="/youtube.svg" alt="YouTube" width={50} height={50} /></Link>
            <Link href="#"><Image src="/instagram.svg" alt="Instagram" width={50} height={50} /></Link>
            <Link href="#"><Image src="/twitter.svg" alt="Twitter" width={50} height={50} /></Link>
          </div>

          <div className="contact">
            CONTACT FOR COLLABORATION: <a href="mailto:collab@gmail.com">collab@gmail.com</a>
          </div>

          <div className="copyright">
            COPYRIGHT © 2023 GBJ BUZZ PVT LTD. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </>
  );
}
