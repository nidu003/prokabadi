import Image from 'next/image';

function Footer() {
  return (
    <div className="full-screen-image-container">
      <Image
        src="/footer.jpg"
        layout="responsive"
        width={1920}
        height={1500}
        objectFit="cover"
        key="footer-image"
        alt="Footer"
      />
    </div>
  );
}

export default Footer;