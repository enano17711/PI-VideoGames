import React from 'react';
import titleShape from "../assets/images/project-heading-image.png"
import styled from "styled-components";

const TokenInfoStyleWrapper = styled.div`
  background: rgba(30, 31, 53, 0.8);
  padding: 45px 50px;
  margin-bottom: 55px;

  .token_info_title {
    display: flex;
    align-items: center;
    column-gap: 15px;

    h4 {
      font-size: 22px;
      margin: 0;
      text-transform: capitalize;
    }
  }

  .token_info_list {
    margin-top: 30px !important;

    li {
      display: flex;
      justify-content: space-between;

      .token_info_value {
        color: #ffffff;
      }
    }

    li + li {
      margin-top: 15px;
    }
  }

  @media only screen and (max-width: 991px) {
    .token_info_title {
      h4 {
        font-size: 20px;
      }
    }

    .token_info_list {
      li {
        flex-direction: column;
        row-gap: 7px;
      }

      li + li {
        margin-top: 20px;
      }
    }
  }
  @media only screen and (max-width: 767px) {
    margin-bottom: 0;
  }
  @media only screen and (max-width: 320px) {
    padding: 39px;
    .token_info_title {
      h4 {
        font-size: 18px;
      }

      img {
        height: 14px;
      }
    }
  }
`;

const GameInfo = ({game, genre}) => {
    return (
        <>
            {genre === true
                ? (<TokenInfoStyleWrapper>
                    <div className="token_info_title">
                        <h4>Genres</h4>
                        <img src={titleShape} alt="shape"/>
                    </div>
                    <ul className="token_info_list">
                        {game.genres?.map((info, i) => (
                            <li key={i}>
                                <span className="token_info_key">{info}</span>
                            </li>
                        ))}
                    </ul>
                </TokenInfoStyleWrapper>)
                : (<TokenInfoStyleWrapper>
                    <div className="token_info_title">
                        <h4>Platforms</h4>
                        <img src={titleShape} alt="shape"/>
                    </div>
                    <ul className="token_info_list">
                        {game.platforms?.map((info, i) => (
                            <li key={i}>
                                <span className="token_info_key">{info}</span>
                            </li>
                        ))}
                    </ul>
                </TokenInfoStyleWrapper>)
            }
        </>
    );
};

export default GameInfo;