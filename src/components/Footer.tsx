function Footer() {
  return (
    <footer className="footer">
      <a href="/">
        <h2 className="website-title">Logos</h2>
      </a>
      <section className="footer__bottom">
        <div className="footer__centered">
          <p>
            Made by{"  "}
            <a href="/">
              <span className="author">Maxym Lyskov</span>
            </a>
          </p>
          <div className="line"></div>
          <p>All rights reserved</p>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
