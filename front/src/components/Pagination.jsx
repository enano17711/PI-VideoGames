import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import GameCard from "./GameCard.jsx";
import {useDispatch, useSelector} from "react-redux";
import {paginateGamesAction} from "../actions/gamesActions/paginateGamesAction.js";

const PaginationStyleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 8px;

  &.pagination_wrapper {
    margin-top: 50px;
  }

  a {
    display: flex;
    width: 50px;
    height: 50px;
    font-family: "Russo One", sans-serif;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    font-weight: 500;
    border: 1px solid #2e2f3c;
    transition: all 0.4s;

    svg {
      font-size: 1.3rem;
    }

    &:hover,
    &.active {
      background-color: #2e2f3c;
      color: #a3ff12;
    }

    &.active {
      &:hover {
        background-color: transparent;
      }
    }
  }
`;

const Pagination = () => {
    const [active, setActive] = useState(0);

    const games = useSelector(state => state.games.games)
    const auxForCount = useSelector(state => state.games.auxGame.length)
    const lengthFilterGenre = useSelector(state => state.games.length)

    const values = Array.from(
        {
            length: Math.ceil(lengthFilterGenre !== null ? lengthFilterGenre / 15 : auxForCount / 15)
        }, (_, i) => i)

    const dispatch = useDispatch()

    const handleClick = (e) => {
        e.preventDefault()
        if (e.target.innerText === ">") {
            if (active >= values.length - 1) setActive(values.length - 1)
            else setActive(active + 1)
        } else if (e.target.innerText === "<") {
            if (active <= 0) setActive(0)
            else setActive(active - 1)
        } else setActive(Number(e.target.innerText))
    }

    useEffect(() => {
        const paginateGames = () => dispatch(paginateGamesAction(active))
        paginateGames()
    }, [active])

    return (
        <>
            {games.map((game, index) => (
                <GameCard key={game.id || index} game={game}/>
            ))}

            <PaginationStyleWrapper className="pagination_wrapper">
                <a onClick={handleClick}>{"<"}</a>
                {values.map(val => (
                    <a className={active === val ? 'active' : ''} key={val} onClick={handleClick}
                       href="#">{val}</a>
                ))}
                <a onClick={handleClick}>{">"}</a>
            </PaginationStyleWrapper>
        </>
    );
};

export default Pagination;