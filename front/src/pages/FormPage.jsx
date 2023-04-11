import React from 'react';
import styled from "styled-components";
import ContactForm from "../components/ContactForm.jsx";

const ContactStyleWrapper = styled.div`
  padding-top: 56px;
  background: #090a1a;
  padding-bottom: 140px;

  .main {
    display: flex;
    justify-content: center;
  }
`;
const FormPage = () => {
    return (
        <ContactStyleWrapper>
            <div className="main">
                <ContactForm/>
            </div>
        </ContactStyleWrapper>
    );
};

export default FormPage;