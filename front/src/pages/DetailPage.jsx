import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import tokenData from "../assets/data/dataV2"
import ProjectInfo from "../components/ProjectInfo.jsx";
import GameInfo from "../components/GameInfo.jsx";
import {useParams} from "react-router-dom";
import GameService from "../services/GameService.js";

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

  .page_header_wrapper {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: auto;
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
    const [currentGame, setCurrentGame] = useState(null)
    const {id} = useParams()

    const getGame = id => {
        GameService.get(id)
            .then(res => setCurrentGame(res.data))
            .catch(e => console.log(e))
    }

    useEffect(() => {
        if (id) getGame(id)
    }, [id])

    return (
        <>
            {currentGame
                ? (<ProjectDetailsStyleWrapper>
                    <div className="contain">
                        <div className="game-contain">
                            <ProjectInfo game={currentGame}/>
                        </div>
                    </div>
                    <div className="token_info_row">
                        <div className="column-game">
                            <GameInfo game={currentGame} genre={true}/>
                        </div>
                        <div className="column-game">
                            <GameInfo game={currentGame}/>
                        </div>
                    </div>
                </ProjectDetailsStyleWrapper>)
                : <p>hola</p>}
        </>
    );
};

export default DetailPage;