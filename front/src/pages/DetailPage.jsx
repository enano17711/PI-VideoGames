import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import ProjectInfo from "../components/ProjectInfo.jsx";
import GameInfo from "../components/GameInfo.jsx";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getGameByIdAction} from "../actions/gamesActions/getGameByIdAction.js";
// import GameService from "../services/GameService.js";

const ProjectDetailsStyleWrapper = styled.div`
  position: relative;
  background: #090a1a;
  padding-top: 100px;
  padding-left: 80px;
  padding-right: 80px;

  .contain {
    display: flex;
    width: 100%;
  }

  .game-contain {
    width: 100%;
  }

  .token_info_row {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 30px 0 55px;
    row-gap: 30px;
    column-gap: 10px;
    justify-content: space-between;
  }

  .column-game {
    width: 48%;
  }

  @media only screen and (max-width: 991px) {
    .column-game {
      width: 100%;
    }
  }
`;
const DetailPage = () => {
    const game = useSelector(state => state.games.game)
    const loading = useSelector(state => state.games.loading)
    const {id} = useParams()

    const dispatch = useDispatch()

    console.log(game)

    useEffect(() => {
        const getGame = () => dispatch(getGameByIdAction(id))
        getGame()
    }, [id])

    if (loading) {
        return (
            <p>Games cargando</p>
        )
    }

    return (
        <ProjectDetailsStyleWrapper>
            <div className="contain">
                <div className="game-contain">
                    <ProjectInfo game={game}/>
                </div>
            </div>
            <div className="token_info_row">
                <div className="column-game">
                    <GameInfo game={game} genre={true}/>
                </div>
                <div className="column-game">
                    <GameInfo game={game} genre={false}/>
                </div>
            </div>
        </ProjectDetailsStyleWrapper>
    );
};

export default DetailPage;