import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer">

      {/* Footer Top */}
      <div className="footer-top">
        <Container>

          <Row>

            {/* Logo */}
            <Col lg={3} sm={6}>
              <div className="footer-widget white">

                <div className="footer-logo">
                  <a href="/">
                    <img
                      src="/assets/images/logo.png"
                      alt="Footer Logo"
                    />
                  </a>
                </div>

                <p>
                  We have heap of fun piece of equipment builds your body and fitness.
                </p>

              </div>
            </Col>

            {/* Address */}
            <Col lg={3} sm={6}>
              <div className="footer-widget white">

                <h3 className="widget-title">
                  Address
                </h3>

                <p>
                  98 Winn St, Woburn, MA 01801,
                  <br />
                  United States
                </p>

              </div>
            </Col>

            {/* Phone */}
            <Col lg={3} sm={6}>
              <div className="footer-widget white">

                <h3 className="widget-title">
                  Phone
                </h3>

                <ul className="list-unstyled mb-0">
                  <li>(+44) 123 456 789</li>
                  <li>(+44) 321 456 789</li>
                </ul>

              </div>
            </Col>

            {/* Social */}
            <Col lg={3} sm={6}>
              <div className="footer-widget white">

                <h3 className="widget-title">
                  Social
                </h3>

                <div className="footer-social">
                  <ul>

                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>

                    <li>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>

                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>

                    <li>
                      <a href="#">
                        <i className="fab fa-google-plus-g"></i>
                      </a>
                    </li>

                    <li>
                      <a href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>

                  </ul>
                </div>

              </div>
            </Col>

          </Row>

        </Container>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <Container>

          <Row>

            <Col md={12}>
              <div className="copyright text-center">
                © 2026, All Rights Reserved
              </div>
            </Col>

          </Row>

        </Container>
      </div>

    </footer>
  );
};

export default Footer;