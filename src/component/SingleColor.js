/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const SingleColor = ({
  rgb, weight, index, hex,
}) => {
  const [alert, setAlert] = useState(false);
  const bgc = rgb.join(',');
  const hexValue = `#${hex}`;
  const copy = () => {
    setAlert(true);
    navigator.clipboard.writeText(hexValue);
  };
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeOut);
  }, [alert]);
  return (
    <article
      className={`color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${bgc}` }}
      onClick={copy}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          copy();
        }
      }}
    >
      <p className="percent-value">
        {weight}
        %
      </p>
      <p className="color-value">{hexValue}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );
};

SingleColor.propTypes = {
  rgb: PropTypes.arrayOf(PropTypes.number).isRequired,
  weight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  hex: PropTypes.string.isRequired,
};

export default SingleColor;
