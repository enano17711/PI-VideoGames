import React, {useState} from 'react';
import styled from "styled-components";
import breadcumdBg from "../assets/images/breadcrumbs-bg.jpg";
import titleShape from "../assets/icons/steps.png";
import Button from "./Button.jsx";
import {useDispatch} from "react-redux";
import {searchGameByNameAction} from "../actions/gamesActions/searchGameByNameAction.js";
//import {findGamesByName} from "../slices/games.js";

const PageHeaderStyleWrapper = styled.div`
  background: url(${breadcumdBg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 80px 0 70px;

  .container {
    max-width: 100%;
    padding-left: 80px;
    padding-right: 80px;
  }

  .row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    justify-content: space-between;
  }

  .col-lg-5 {
    width: 40%
  }

  .breadcrumb_area {
    font-family: "Russo One", sans-serif;

    .breadcrumb_menu {
      text-transform: uppercase;
      display: flex;
      align-items: center;
      font-size: 16px;
      color: #a3ff12;

      a {
        color: rgba(255, 255, 255, 0.7);
        text-decoration: none;

        &:hover {
          color: #ffffff;
        }
      }

      span {
        color: rgba(255, 255, 255, 0.7);
        margin: 0 10px;
      }

      img {
        margin-left: 15px;
      }
    }

    .breadcrumb_title {
      font-size: 36px;
      color: #ffffff;
      margin: 15px 0 0;
    }
  }

  .breadcrumb_form {
    display: flex;
    align-items: center;
    justify-content: end;
    column-gap: 30px;
    flex-wrap: wrap;

    form {
      position: relative;

      input,
      button {
        background: transparent;
      }

      input {
        width: 380px;
        padding: 11px 50px 11px 20px;
        color: rgba(255, 255, 255, 0.7);
        border: 1px solid rgba(255, 255, 255, 0.3);

        &:focus {
          outline: none;
        }
      }

      button {
        height: 100%;
        width: 50px;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 50%;
        right: 0;
        font-size: 20px;
        color: rgba(255, 255, 255, 0.7);
        transform: translate(0, -50%);
        border: none;
      }
    }
  }

  @media only screen and (max-width: 1250px) {
    .breadcrumb_form form input {
      width: 250px;
    }
  }
  @media only screen and (max-width: 360px) {
    .breadcrumb_form form input {
      width: 200px;
    }
  }
  @media only screen and (max-width: 600px) {
    .container {
      padding-left: 10px;
      padding-right: 10px;
    }
  }
}
`;

const Header = ({currentPage, pageTitle}) => {
    const [searchName, setSearchName] = useState("")

    const dispatch = useDispatch()

    return (
        <PageHeaderStyleWrapper>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-lg-5"}>
                        <div className="breadcrumb_area">
                            <div className="breadcrumb_menu">
                                <>
                                    <a href="# ">Home</a> <span>.</span> {currentPage && currentPage}
                                </>
                                <img
                                    className="heading_shape"
                                    src={titleShape}
                                    alt="bithu nft heading shape"
                                />
                            </div>
                            <h2 className="breadcrumb_title text-uppercase">{pageTitle && pageTitle}</h2>
                        </div>
                    </div>

                    <div>
                        <div className="breadcrumb_form">
                            <form onSubmit={(e) => e.preventDefault()}>
                                <input
                                    type="text"
                                    id="Search"
                                    name="search"
                                    placeholder="Search by name"
                                    value={searchName}
                                    onChange={(e) => setSearchName(e.target.value)}
                                />
                                <button>
                                    X
                                </button>
                            </form>
                            <div onClick={() => dispatch(searchGameByNameAction(searchName))}>
                                <Button sm variant="dark">
                                    SEARCH
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageHeaderStyleWrapper>
    );
};

export default Header;