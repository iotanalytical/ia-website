import axios from "axios";
import { useState, useEffect } from "react";

import NavbarLanding from "../../components/NavbarLanding/NavbarLanding";
import Header from "../../components/Header/Header";
import Features from "../../components/Features/Features";
import FAQ from "../../components/FAQ/FAQ";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";

const Landing = () => {
  const [userName, setUserName] = useState("demo");
  const [failedAuth, setFailedAuth] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (!token) {
      return setFailedAuth(true);
    }

    // Get user data from the API
    axios
      .get("http://localhost:5050/users/current", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUserName(response.data);
      })
      .catch((error) => {
        console.log(error);
        setFailedAuth(true);
      });
  }, []);

  return (
    <>
      <NavbarLanding
        userName={userName}
        failedAuth={failedAuth}
        setUserName={setUserName}
        setFailedAuth={setFailedAuth}
      />
      <Header userName={userName} failedAuth={failedAuth} />
      <Features />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
};

export default Landing;
