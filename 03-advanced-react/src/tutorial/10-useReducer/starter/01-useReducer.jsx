import React, {useReducer} from 'react';
import { data } from '../../../data';
import {CLEAR_LIST, REMOVE_USER, RESET} from "./constants.js";
import reducer from './UsersReducer.js';

const defaultState = {
  people: data,
  isLoading: false,
};

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => dispatch({type: REMOVE_USER , payload: {id}})}>remove</button>
          </div>
        );
      })}
      {
        state.people.length > 0 ?
            <button
                className='btn'
                style={{ marginTop: '2rem' }}
                onClick={() => dispatch({type: CLEAR_LIST})}
            >
              clear items
            </button>
            :
            <button
                className='btn'
                style={{ marginTop: '2rem' }}
                onClick={() => dispatch({type: RESET})}
            >
              reset
            </button>
      }
    </div>
  );
};

export default ReducerBasics;
