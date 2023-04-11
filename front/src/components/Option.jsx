import React from 'react';
import styled from "styled-components";

const OptList = styled.ul`
  display: flex;
  max-width: 600px;
  flex-wrap: wrap;
  justify-content: start;
  column-gap: 120px;

  li {
    width: 17px;
  }

  input {
    margin: 0 !important;
  }

  label {
    font-size: 13px !important;
    display: flex;
    align-items: center;
    column-gap: 10px;
  }
`

const Option = (props) => {
    return <OptList>
        {props.opts.map((opt) => {
            return <li key={opt.id}>
                <label htmlFor={`${opt.name}`}>
                    <input onClick={props.onClick}
                           name={props.name}
                           type="checkbox"
                           value={opt.id}/>
                    {opt.name}
                </label>
            </li>
        })}
    </OptList>
};

export default Option;