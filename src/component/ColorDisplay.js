import React, { useState } from 'react';
import Values from 'values.js';
import { v4 as uuidv4 } from 'uuid';
import SingleColor from './SingleColor';

const ColorDisplay = () => {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#f15025').all(10));
  const myId = uuidv4();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
    }
  };
  return (
    <>
      <section className="container">
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#f15025"
            className={`${error ? 'error' : null}`}
          />
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => (
          <SingleColor
            key={myId}
            rgb={color.rgb}
            weight={color.weight}
            hex={color.hex}
            index={index}
          />
        ))}
      </section>
    </>
  );
};

export default ColorDisplay;
