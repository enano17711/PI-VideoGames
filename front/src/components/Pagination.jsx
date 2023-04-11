import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import GameCard from "./GameCard.jsx";

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

const Pagination = ({games}) => {
    const pagesNumber = Math.ceil(games.length / 15);
    const values = new Array(pagesNumber).fill(0).map((item, index) => item + index);

    const [gameData, setGameData] = useState([]);
    const [active, setActive] = useState(0);

    const handleClick = (e) => {
        e.preventDefault()
        setActive(Number(e.target.innerText))
    }

    useEffect(() => {
        const data = games.slice(active * 15, (active + 1) * 15)
        setGameData(data)
    }, [active])

    return (
        <>
            {gameData?.length === 0
                ? games?.slice(0, 15).map((game, index) => (
                    <GameCard key={game.id || index} game={game}/>
                ))
                : gameData?.map((game, index) => (
                    <GameCard key={game.id || index} game={game}/>
                ))}
            <PaginationStyleWrapper className="pagination_wrapper">
                <a href="#">{"<"}</a>
                {values.map(val => (
                    <a className={active === val ? 'active' : ''} key={val} onClick={(e) => handleClick(e)}
                       href="#">{val}</a>
                ))}
                <a href="#">{">"}</a>
            </PaginationStyleWrapper>
        </>
    );
};

export default Pagination;