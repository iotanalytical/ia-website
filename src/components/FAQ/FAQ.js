import "./FAQ.scss";

import Accordion from "react-bootstrap/Accordion";

const FAQ = () => {
  return (
    <section id="faq">
      <h2 className="text-center mb-5">FAQ</h2>
      <div className="container">
        <Accordion defaultActiveKey={["0"]} alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              Q. How can IoT analytical be installed?
            </Accordion.Header>
            <Accordion.Body>
              A. First, you have to install the device, connect it to a power
              source. Then, you should connect to your home’s network either by
              wired connection or wireless. Finally, install the software on
              your hub and connect it to the device. We can also install them
              for free if you purchase 10 units or more. For more information
              contact support.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Q. Can I customize IoT analytical for my customers?
            </Accordion.Header>
            <Accordion.Body>
              A. Yes. We have custom plans for home and apartment developers to
              customize IoT analytical based on their needs. Contact us for more
              information.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Q. What if my internet connection has been lost?
            </Accordion.Header>
            <Accordion.Body>
              A. IoT analytical works independent of internet connection and
              stores data locally. Whenever your internet connection is lost,
              the system identifies it and acts accordingly.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Q. How does my privacy protect?</Accordion.Header>
            <Accordion.Body>
              A. All collected data is encrypted through a P2P system with
              military-grade protection levels. You can also disable the cloud
              back-up option on which case your data will be available locally
              only.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              Q. Is IoT analytical GDPR or/and CCPA compatible?
            </Accordion.Header>
            <Accordion.Body>
              A. We are fully compatible with all applicable laws and
              regulations including GDPR and CCPA. Our cloud infrastructure is
              based in EU and all reasonable efforts have been taken to prevent
              unauthorized access.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>Q. Do you have a warranty?</Accordion.Header>
            <Accordion.Body>
              A. All devices come with a limited 1-year warranty which covers
              reasonable usage. In case your device malfunction within 1 month
              from the date of purchase, we will replace it with a new one for
              free.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
