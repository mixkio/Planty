import React, { useEffect } from 'react';
import styled from 'styled-components';
import LevelStar from '../LevelStar';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';

const PlantItem = ({ plant }) => {
  useEffect(() => {
    Aos.init({ once: true });
  }, []);
  const { id, plant_name, img_url, manage_level } = plant;
  return (
    <Wrapper data-aos="fade-up">
      <Link to={`/dictionary/${id}`}>
        <PlantImg className="plant-img" src={img_url} alt="" />
        <div className="plant-discription">
          <div className="plant-name">{plant_name}</div>
          <div className="plant-level">
            <div>난이도</div>
            <LevelStar manage_level={manage_level} />
          </div>
        </div>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* overflow: hidden; */
  /* border: 3px solid black; */
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  /* margin: 0 10px 20px 10px; */
  & .plant-discription {
    padding-left: 4px;
    & .plant-name {
      margin-top: 4px;
      font-size: 20px;
    }
    & .plant-level {
      font-size: 16px;
      display: flex;
      align-items: center;
      & span {
        margin-right: 5px;
      }
      & div {
        margin-right: 4px;
      }
    }
  }

  &:hover {
    & .plant-img {
      transition: transform 0.3s;
      transform: scale3d(1.03, 1.03, 1.03);
    }
  }
`;

const PlantImg = styled.img`
  /* width: 300px;
  height: 300px; */
  /* width: 100%;
  height: 100%; */
  @media (max-width: 576px) {
    width: calc(100vw - 40px);
    height: calc(100vw - 40px);
  }
  @media (min-width: 576px) {
    width: calc(((100vw - 120px) / 2) - 20px);
    height: calc(((100vw - 120px) / 2) - 20px);
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
    width: calc(((100vw - 120px) / 3) - 20px);
    height: calc(((100vw - 120px) / 3) - 20px);
  }
  @media (min-width: 1200px) {
    width: calc(((100vw - 120px) / 4) - 20px);
    height: calc(((100vw - 120px) / 4) - 20px);
  }
  @media (min-width: 1400px) {
    width: calc((1280px / 4) - 20px);
    height: calc((1280px / 4) - 20px);
  }
  border-radius: 10px;
  object-fit: cover;
  /* background-color: ${({ theme }) => theme.themeColor[5]}; */
`;

export default PlantItem;
