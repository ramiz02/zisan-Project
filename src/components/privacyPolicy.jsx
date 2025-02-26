import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  background-color: rgb(148, 242, 242);
  padding: 20px;
`;

const OrderList = styled.ol`
  list-style-type: decimal;
  padding-left: 30px;
`;

const ListItem = styled.li`
  margin-bottom: 15px;
`;
const ButtonCont = styled.div`
  display:flex;
  justify-content: center;
`
const BackButton = styled.button`
  background-color: yellow;
  height:40px;
  width: 130px;
  font-size: 20px;
`

const PrivacyPolicy = () => {
  return (
    <Container className="privacy-cont">
      <h1>Privacy Policy</h1>
      <h3><strong>Effective Date:</strong>25/02/2025</h3>
      <p>
        The Solutionist ("we," "us," or "our") operates the website{" "}
        <a href="https://thesolutionistmind.com">https://thesolutionistmind.com</a>.
        We value your privacy and are committed to protecting your personal data.
        This Privacy Policy outlines how we collect, use, and protect your information.
      </p>

      <OrderList>
        <ListItem>
          <strong>Information We Collect</strong>
          <p>
            We collect the following types of personal information:
            <ul>
              <li>
                <strong>Personal Data:</strong> Name, email address, and phone number.
              </li>
              <li>
                <strong>Automatically Collected Data:</strong> When you visit our
                website, we may collect information such as IP address, browser type,
                and usage details via cookies and analytics tools.
              </li>
            </ul>
          </p>
        </ListItem>

        <ListItem>
          <strong>How We Use Your Information</strong>
          <p>We use your personal data for the following purposes:</p>
          <ul>
            <li>Providing and improving our services.</li>
            <li>Sending marketing and promotional communications.</li>
            <li>Responding to inquiries and customer support requests.</li>
          </ul>
        </ListItem>

        <ListItem>
          <strong>Sharing Your Information</strong>
          <p>We do not sell your personal data. However, we may share it with:</p>
          <ul>
            <li>Advertising partners for targeted ads.</li>
            <li>Service providers who assist in website operations.</li>
            <li>Legal authorities when required by law.</li>
          </ul>
        </ListItem>

        <ListItem>
          <strong>Your Rights & Choices</strong>
          <p>As a user, you have the right to:</p>
          <ul>
            <li>Request deletion of your personal data.</li>
            <li>Opt in or out of marketing communications.</li>
          </ul>
          <p>
            To exercise these rights, please contact us through the available
            communication channels.
          </p>
        </ListItem>

        <ListItem>
          <strong>Security Measures</strong>
          <p>
            We implement encryption and other security measures to protect your data.
            However, no system is 100% secure, and we encourage safe browsing
            practices.
          </p>
        </ListItem>

        <ListItem>
          <strong>Third-Party Links</strong>
          <p>
            Our website may contain links to third-party sites. We are not responsible
            for their privacy policies or content.
          </p>
        </ListItem>

        <ListItem>
          <strong>Changes to This Policy</strong>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be
            reflected on this page with an updated effective date.
          </p>
        </ListItem>

        <ListItem>
          <strong>Contact Information</strong>
          <p>
            For any privacy-related inquiries, please reach out to us through the
            contact options provided on our website.
          </p>
        </ListItem>
      </OrderList>
      <ButtonCont>
        <Link to="/">
            <BackButton>Back</BackButton>
        </Link>
      </ButtonCont>
    </Container>
  );
};

export default PrivacyPolicy;
