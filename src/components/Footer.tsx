const Footer = () => {
  return (
    <footer className="mx-auto flex max-w-[1440px] flex-col gap-1.5 px-5 py-8 font-mono text-xs text-sub md:flex-row md:justify-between md:px-12 md:text-[13px] lg:px-24 lg:py-10">
      <span>efa.dev — designed &amp; built by Moses Efa Eteng</span>
      <span>© {new Date().getFullYear()}</span>
    </footer>
  );
};

export default Footer;
