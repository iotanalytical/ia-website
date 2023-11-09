import axios from "axios";
import { useState, useEffect } from "react";

import NavbarLanding from "../../components/NavbarLanding/NavbarLanding";
import Header from "../../components/Header/Header";
import Mission from "../../components/Mission/Mission";
import Product from "../../components/Product/Product";
import Features from "../../components/Features/Features";
import Team from "../../components/Team/Team";
// import FAQ from "../../components/FAQ/FAQ";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";

const Landing = () => {
  const [userName, setUserName] = useState("demo");
  const [failedAuth, setFailedAuth] = useState(false);

  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (!token) {
      return setFailedAuth(true);
    }

    // Get user data from the API
    axios
      .get(`${API_URL}/users/current`, {
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
  }, [API_URL]);

  return (
    <>
      <NavbarLanding
        userName={userName}
        failedAuth={failedAuth}
        setUserName={setUserName}
        setFailedAuth={setFailedAuth}
      />
      <Header userName={userName} failedAuth={failedAuth} />
      <Mission />
      <Product />
      <Features />
      <Team />
      {/* <FAQ /> */}
      <Contact />
      <Footer />
    </>
  );
};

export default Landing;
