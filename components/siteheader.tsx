import Link from 'next/link';

const Siteheader: React.FunctionComponent = () => {
  return (
    <header>
      <Link href="/">
        <a>
          <img src="/images/profile.jpg" alt="Website" />
        </a>
      </Link>
      <h2>
        <Link href="/">
          <a>Website</a>
        </Link>
      </h2>
    </header>
  );
};

export default Siteheader;
