import React, {useEffect, useState} from 'react'
import socialData from '../assets/data/dataV1'
import projectIcon from "../assets/images/ninga-image.png"
import coinIcon from "../assets/images/icon-2.png"
import bgShape from "../assets/images/card-bg-shape-big.png"
import ProgressBar from "./ProgressBar.jsx";
import Button from "./Button.jsx";
import styled from "styled-components";


const ProjectInfoStyleWrapper = styled.section`
  margin: -60px 0 30px;
  text-align: center;

  .game-price-item {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 50px;
    position: relative;
    z-index: 9;
    background: radial-gradient(circle, #4a4176 -24%, #1e1f35 40%);

    &::before {
      position: absolute;
      height: 100%;
      width: 100%;
      left: 0%;
      top: 0;
      background: url(${bgShape});
      background-repeat: no-repeat;
      background-position: center;
      content: "";
      opacity: 0.8;
      z-index: -1;
    }
  }

  .game-price-inner {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
  }

  .total-price,
  .targeted-raise {
    width: 100%;
  }

  /* price inner  */

  .price-inner {
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;

    .image-icon {
      margin: 0 0 10px;

      img {
        max-width: 100%;
        width: auto;
        margin: 0 auto;
      }
    }

    .price-details {
      h3 {
        margin-bottom: 5px;
        font-size: 30px;
        line-height: 1.35;
      }

      .dsc {
        text-transform: uppercase;
      }
    }
  }

  .targeted-raise {
    .seles-end-text {
      font-family: "Inter", sans-serif;
      color: rgba(255, 255, 255, 0.7);
      text-transform: uppercase;
      margin-bottom: 10px;
    }

    .targeted-raise-amount {
      text-align: center;
      margin-bottom: 10px;
      color: #ffffff;
      font-family: "Russo One", sans-serif;
      font-weight: 500;
    }
  }

  .project_card_footer {
    flex-direction: column;
    row-gap: 20px;
    display: flex;
    align-items: center;
    margin-top: 40px;
    justify-content: space-between;
  }

  @media only screen and (max-width: 1199px) {
    .total-price {
      .price-inner {
        .price-details {
          h3 {
            font-size: 24px;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 480px) {
    padding: 0;
    .game-price-item {
      padding-left: 15px;
      padding-right: 15px;
    }

    .total-price {
      .price-inner {
        .price-details {
          h3 {
            font-size: 20px;
          }
        }
      }
    }
  }
`;

const ProjectInfo = ({game}) => {
    console.log(JSON.stringify(game.background_image))
    return (
        <ProjectInfoStyleWrapper className="live_project_wrapper">
            <div className="game-price-item">
                <div className="game-price-inner">
                    <div className="total-price">
                        <div className="price-inner">
                            <div className="image-icon">
                                <img src={game?.background_image?.includes("https")
                                    ? game.background_image
                                    : `data:image/*;base64,${game.background_image}`}
                                     alt="image"/>
                            </div>
                            <div className="price-details">
                                <h3>
                                    <a>{game.name}</a>
                                </h3>
                                <div className="dsc">Released : {game.released}</div>
                            </div>
                        </div>
                    </div>
                    <div className="targeted-raise">
                        <div className="seles-end-text">{game.description}</div>
                        <div className="targeted-raise-amount">
                            Total Rating {game.rating}
                        </div>
                    </div>
                </div>
                <div className="progress-inner">
                    <ProgressBar progress="83%"/>
                </div>

                <div className="project_card_footer">
                    <Button sm href="/home">
                        Back to Home
                    </Button>
                    <h4>ID {game?.id !== undefined ? game?.id : game?.apiId}</h4>
                </div>
            </div>
        </ProjectInfoStyleWrapper>
    );
};

export default ProjectInfo;