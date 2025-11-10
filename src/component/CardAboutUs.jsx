import React from 'react';
import styled from 'styled-components';

const Card = ({imagen , nombre , linkIzq , linkDer}) => {
  return (
    <StyledWrapper>
      <div className="card text-center">
        <img className="w-full h-auto object-cover rounded-lg shadow-lg aspect-square" src={imagen} alt="avatar" />
        <div className="card__content">
          <h4 className="card__title mt-4 text-lg font-bold">{nombre}</h4>
          <div className='gap-2 w-full'>
            <a className='text-yellow-500' href={linkIzq}>Github</a>
            <a className='text-red-500' href={linkDer}>Linkedin</a>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    position: relative;
    width: 300px;
    height: 200px;
    background: linear-gradient(-45deg, #f89b29 0%, #ff0f7b 100% );
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
  }

  .card svg {
    width: 48px;
    fill: #333;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
  }

  .card:hover {
    transform: rotate(-5deg) scale(1.1);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  .card__content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    background-color: #fff;
    opacity: 0;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
  }

  .card:hover .card__content {
    transform: translate(-50%, -50%) rotate(0deg);
    opacity: 1;
  }

  .card__title {
    margin: 0;
    font-size: 24px;
    color: #333;
    font-weight: 700;
  }

  .card__description {
    margin: 10px 0 0;
    font-size: 14px;
    color: #777;
    line-height: 1.4;
  }

  .card:hover svg {
    scale: 0;
    transform: rotate(-45deg);
  }`;

export default Card;
