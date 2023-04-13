import React from 'react';
import styled from "styled-components";
import Button from "./Button.jsx";
import nextArrowIcon from "../assets/icons/next-arrow.png";
import {useDispatch, useSelector} from "react-redux";
import {filterGamesByGenreAction} from "../actions/gamesActions/filterGamesByGenreAction.js";
import {orderGamesByNameAction} from "../actions/gamesActions/orderGamesByNameAction.js";
import {orderGamesByRatingAction} from "../actions/gamesActions/orderGamesByRatingAction.js";
import {filterGamesByOriginAction} from "../actions/gamesActions/filterGamesByOriginAction.js";

const ListHeaderStyles = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;;
  justify-content: space-between;
  width: 100%;
  padding-top: 60px;
  padding-bottom: 60px;
  z-index: 1;
  height: 50px;

  .main {
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-wrap: wrap;
    padding-left: 80px;
    padding-right: 80px;
  }

  .contain {
    display: flex;
    background: rgba(255, 255, 255, 0.1);
  }

  .item_sorting_list {
    display: flex;
    align-items: center;

    button {
      height: 50px;
      color: rgba(255, 255, 255, 0.7);
      background: transparent;
      font-family: "Russo One", sans-serif;
      position: relative;
      text-transform: uppercase;
      padding: 18px 28px;
      transition: all 0.4s;
      border-left: 1px solid rgba(255, 255, 255, 0.08);
      display: flex;
      align-items: center;
      column-gap: 20px;

      img {
        height: 14px;
        width: 14px;
        transition: all 0.3s;
      }

      &:hover {
        color: #ffffff;

        .sub-menu {
          display: block;
          top: 49px;
        }

        img {
          transform: rotate(180deg);
        }
      }

      .sub-menu {
        transition: all 0.4s;
        display: none;
        position: absolute;
        top: 45px;
        left: 0;
        z-index: 1111;
        background: #222231;
        width: 100%;

        li {
          display: flex;
          align-items: center;
          font-size: 90%;
          column-gap: 5px;
          padding: 18px 28px;
          transition: all 0.4s;

          &:hover {
            color: #ffffff;
          }
        }

        li {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }
      }
    }
  }

  @media only screen and (max-width: 1250px) {
    .main {
      justify-content: center;
    }
  }
  /*  @media only screen and (max-width: 815px) {
      .visibility {
        display: none;
      }
    }*/
  @media only screen and (max-width: 600px) {
    .main {
      padding-left: 10px;
      padding-right: 10px;
    }
  }
`

const ListHeader = () => {
    const genres = useSelector(state => state.genres.genres)
    const dispatch = useDispatch()

    return (
        <ListHeaderStyles>
            <div className='main'>
                <div className="contain">
                    <div className="item_sorting_list">
                        <button>
                            Origin
                            <img src={nextArrowIcon} alt="icon"/>
                            <ul className="sub-menu">
                                <li onClick={() =>
                                    dispatch(filterGamesByOriginAction("API"))}>API
                                </li>
                                <li onClick={() =>
                                    dispatch(filterGamesByOriginAction("DB"))}>DB
                                </li>
                            </ul>
                        </button>
                    </div>
                    <div className="visibility">
                        <Button sm variant="mint" href={"/form"}>
                            Create
                        </Button>
                    </div>
                </div>
                <div className="contain">
                    <div className="item_sorting_list">
                        <button>
                            Genres
                            <img src={nextArrowIcon} alt="icon"/>
                            <ul className="sub-menu">
                                {genres?.map((genre) => (
                                    <li key={genre.id}
                                        onClick={() =>
                                            dispatch(filterGamesByGenreAction(genre.name))}>{genre.name}
                                    </li>
                                ))}
                            </ul>
                        </button>
                        <button>
                            Order Name
                            <img src={nextArrowIcon} alt="icon"/>
                            <ul className="sub-menu">
                                <li onClick={() => dispatch(orderGamesByNameAction("ASC"))}>ASC</li>
                                <li onClick={() => dispatch(orderGamesByNameAction("DESC"))}>DES</li>
                            </ul>
                        </button>
                        <button>
                            Order Rating
                            <img src={nextArrowIcon} alt="icon"/>
                            <ul className="sub-menu">
                                <li onClick={() => dispatch(orderGamesByRatingAction("ASC"))}>ASC</li>
                                <li onClick={() => dispatch(orderGamesByRatingAction("DESC"))}>DES</li>
                            </ul>
                        </button>
                    </div>
                </div>
            </div>
        </ListHeaderStyles>
    );
};

export default ListHeader;