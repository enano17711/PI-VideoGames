import React from 'react';
import styled from "styled-components";
import bannerBG from "../assets/images/banner-bg.jpg";
import bannerIcon from "../assets/icons/icon1.png";
import Button from "../components/Button.jsx";

const BannerStyleWrapper = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;
  overflow: hidden;

  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${bannerBG});
  z-index: 9;

  .banner-content {
    max-width: 700px;
    margin: 0 auto;
    text-align: center;

    .banner-icon {
      margin: 0 0 24px;
      height: auto;
      width: 80px;
    }

    .banner-title {
      margin: 0 0 20px;
      text-transform: uppercase;
    }

    .description {
      color: #ffffff;
      font-size: 18px;
      font-weight: 600;
      margin: 0 0 40px;
    }
  }

  .banner-btn {
    margin: 0 auto;
  }

  @media only screen and (max-width: 991px) {
    .banner-content {
      .banner-title {
        margin: 0 0 20px;
        font-size: 40px;
      }
    }
  }

  @media only screen and (max-width: 767px) {
    .banner-content {
      .banner-title {
        font-size: 30px;
      }
    }
  }

  @media only screen and (max-width: 575px) {
    .banner-content {
      .banner-title {
        font-size: 28px;
        margin-bottom: 10px;
      }

      .description {
        font-size: 16px;
        margin: 0 0 30px;
      }
    }
  }

  @media only screen and (max-width: 480px) {
    .banner-content {
      .banner-title {
        font-size: 24px;
      }
    }
  }
`;

const LandingPage = () => {
    return (
        <>
            <BannerStyleWrapper>
                <div className={"container"}>
                    <div className="banner-content">
                        <img
                            src={bannerIcon}
                            className="banner-icon"
                            alt="banner icon"
                        />
                        <h1 className="banner-title">
                            Welcome to best game collection
                        </h1>
                        <div className="description">
                            The next generation gaming ecosystem is here
                        </div>

                        <Button href="/home" variant="mint" md isCenter className="banner-btn">
                            Explore NOW
                        </Button>
                    </div>
                </div>
            </BannerStyleWrapper>
        </>
    );
};

export default LandingPage;