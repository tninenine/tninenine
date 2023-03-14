import styled from 'styled-components';

import home from '@/assets/images/home.jpg';
import home_introduction from '@/assets/images/home_introduction.png';
import theme_song from '@/assets/images/theme_song.jpg';
import {PrincipalBox} from '@/style/styles';

const HomeWrap = styled.div`
  /* overflow-x: hidden; */
`;

const ImageWrap = styled.div`
  height: 1029px;
  background-image: url(${home});
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-size: cover;
`;

const ShadowWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 30%;
  flex-direction: column;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(11, 90, 150, 0.9) 1.04%,
    rgba(6, 111, 192, 0.7) 45.31%,
    rgba(222, 233, 95, 0) 100%
  );
  background-blend-mode: saturation;
  .title {
    font-weight: 400;
    font-size: 48px;
    line-height: 58px;
    color: #ffffff;
    padding: 0 0 27px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  .introduction {
    font-weight: 800;
    font-size: 60px;
    line-height: 73px;
    color: #ffffff;
    padding: 21px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;
const HomePrincipalBox = styled(PrincipalBox)`
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    border: 1px;
    box-shadow: 0px 6px 30px 5px rgba(102, 120, 166, 0.06),
      0px 16px 24px 2px rgba(102, 120, 166, 0.04), 0px 8px 10px -5px rgba(102, 120, 166, 0.08);
    transform: translateY(-10px);
  }
`;

const ProjectWrap = styled.div<{imgUrl?: string}>`
  height: 1029px;
  background-image: url(${(props) => (props.imgUrl ? props.imgUrl : home_introduction)});
  background-size: cover;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProjectContentWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: 400;
  line-height: 28px;
  text-indent: 2em;
  color: white;
  margin: 0 400px 116px;
`;

export {HomeWrap, ImageWrap, HomePrincipalBox, ProjectWrap, ProjectContentWrap, ShadowWrap};
