import React, {useState} from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {createGame} from "../slices/games.js";
import Option from "./Option.jsx";

const ContactFormStyleWrapper = styled.div`
  max-width: 600px;

  h3 {
    font-size: 22px;
    line-height: 45px !important;
    margin-bottom: 20px;
    text-transform: uppercase;
    color: #ffffff;
  }

  p {
    line-height: 45px !important;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 18px;
  }

  .btn_wrapper {
    width: 100%;
    height: 60px;
  }

  .contact_user_form {
    input,
    textarea {
      height: 60px;
      width: 100%;
      padding: 8px 21px;
      border: 2px solid rgba(255, 255, 255, 0.15);
      box-sizing: border-box;
      background: Transparent;
      font-family: Inter;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 45px !important;
      color: rgba(255, 255, 255, 0.5);
      margin-bottom: 10px;
      border-radius: 0;

      &:focus {
        outline: 0 !important;
        box-shadow: none;
      }
    }

    textarea {
      resize: none;
      height: 130px;
    }

    .label {
      font-family: "Russo One", serif;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 45px !important;
      text-transform: uppercase;
      color: rgba(255, 255, 255, 0.7);
    }
  }

  .error {
    display: block;
    color: #a3ff12;
  }

  .n-error {
    display: none;

  }

  .input-form {
    margin-bottom: 25px;
  }

  .button {
    width: 100%;
    color: #090a1a;
    background: #a3ff12;
    font-family: "Russo One", serif;
    height: 50px;
    font-size: 20px;
  }

  @media (max-width: 720px) {
    padding-left: 10px;
    padding-right: 10px;
  }
  @media only screen and (max-width: 575px) {
    h3 {
      font-size: 19px;
    }

    p {
      font-size: 14px;
      line-height: 24px !important;
    }
  }
`;

const ContactForm = () => {

    const dispatch = useDispatch();
    const genres = useSelector((state) => state.genres);
    const platforms = ["PC", "PlayStation", "XBOX", "Nintendo"].map((p, i) => ({id: p, name: p}))
    const [newGame, setNewGame] = useState({
        name: '',
        description: '',
        released: '',
        background_image: '',
        rating: 0,
        genres: [],
        platforms: []
    });
    const onSubmit = (e) => {
        e.preventDefault();

        if (!newGame.name.trim().length > 0 || newGame.rating <= 0 || newGame.rating >= 6 ||
            !newGame.description.trim().length > 0 || !newGame.background_image.trim().length > 0 ||
            !newGame.genres.length > 0 || !newGame.platforms.length > 0) {
            return;
        }

        dispatch(createGame(newGame))
        e.target.reset();

        setNewGame({
            name: '',
            description: '',
            released: '',
            background_image: '',
            rating: 0,
            genres: [],
            platforms: [],
        });
    }
    const onCheckboxHandler = (e) => {
        if (e.target.checked) {
            setNewGame({...newGame, ...newGame[e.target.name].push(e.target.value)})
        } else {
            const auxGame = {...newGame};
            auxGame[e.target.name] = newGame[e.target.name].filter((value) => {
                return value !== e.target.value
            });
            setNewGame(auxGame);
        }
    }
    const onChangeHandler = (e) => {
        const auxNewG = {...newGame};
        auxNewG[e.target.name] = e.target.value;
        setNewGame(auxNewG);
    }
    const handleImgChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        const tag = e.target.name;

        if (file && file.type.startsWith('image/')) {
            reader.onload = (e) => {
                const auxNew = {...newGame};
                const pos = e.target.result.search(",")
                auxNew[tag] = e.target.result.slice(pos + 1);
                setNewGame(auxNew);
            };

            reader.readAsDataURL(file);
        } else {
            const auxNew = {...newGame}
            auxNew[tag] = ''
            setNewGame(auxNew)
        }
    }

    return (
        <ContactFormStyleWrapper>
            <div className="contact_form">
                <h3 className="from_title">Nuevo Juego</h3>

                <div className="contact_user_form">
                    <form action='' onSubmit={onSubmit}>
                        <div>
                            <div className='input-form'>
                                <label htmlFor="name">Nombre</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="e.g. Scrow"
                                    className="form-control"
                                    onChange={onChangeHandler}
                                />
                                {!newGame.name.trim().length > 0 ?
                                    <div className={'error'}>¡El Nombre es obligatorio!</div> :
                                    <div className={'n-error'}>¡El Nombre es obligatorio!</div>}
                            </div>
                            <div className='input-form'>
                                <label htmlFor="rating">Rating</label>
                                <input
                                    type="number"
                                    name="rating"
                                    placeholder="e.g.  Smith"
                                    className="form-control"
                                    onChange={onChangeHandler}
                                />
                                {newGame.rating <= 0 || newGame.rating >= 6 ?
                                    <div className={'error'}>¡El rating es obligatorio!</div> :
                                    <div className={'n-error'}>¡El rating es obligatorio!</div>}
                            </div>
                        </div>
                        <div className='input-form'>
                            <label htmlFor="date">Fecha Lanzamiento</label>
                            <input
                                type="date"
                                name="released"
                                className="form-control"
                                onChange={onChangeHandler}
                            />
                        </div>
                        <div className='input-form'>
                            <label htmlFor="description">Descripcion</label>
                            <textarea
                                name="description"
                                cols="30"
                                rows="10"
                                placeholder="Type your message"
                                onChange={onChangeHandler}
                            ></textarea>
                            {!newGame.description.trim().length > 0 ?
                                <div className={'error'}>¡La descripcion es obligatoria!</div> :
                                <div className={'n-error'}>¡La descripcion es obligatoria! </div>}
                        </div>
                        <div className='input-form'>
                            <label htmlFor="image">Imagen</label>
                            <input type="file" name="background_image" onChange={handleImgChange}/>
                            {!newGame.background_image.trim().length > 0 ?
                                <div className={'error'}>¡Selecciona una imagen (JPG, PNG, JPEG, GIF)! </div> :
                                <div className={'n-error'}>¡Selecciona una imagen (JPG, PNG, JPEG, GIF)! </div>}
                        </div>
                        <div className='input-form'>
                            <label htmlFor="genres">Generos</label>
                            <Option opts={genres} name="genres" onClick={onCheckboxHandler}/>
                            {!newGame.genres.length > 0 ?
                                <div className={'error'}>¡Selecciona minimo un genero!</div> :
                                <div className={'n-error'}>¡Selecciona minimo un genero!</div>}
                        </div>
                        <div className='input-form'>
                            <label htmlFor="platforms">Plataformas</label>
                            <Option opts={platforms} name="platforms" onClick={onCheckboxHandler}/>
                            {!newGame.platforms.length > 0 ?
                                <div className={'error'}>¡Selecciona minimo una plataforma! </div> :
                                <div className={'n-error'}>¡Selecciona minimo una plataforma! </div>}

                        </div>

                        <button type="submit" className='button'>CREAR JUEGO</button>
                    </form>
                </div>
            </div>
        </ContactFormStyleWrapper>
    );
};

export default ContactForm;