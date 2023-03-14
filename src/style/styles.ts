import {Card} from 'antd';
import styled from 'styled-components';

const ListItem = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f1f1f1;
  border-radius: 8px;
  height: 82px;
  position: relative;
  &:hover {
    background: #ecf5ff !important;
    color: #005a9f;
    svg {
      path {
        fill: #005a9f;
      }
    }
  }
  margin: 20px 15%;
  padding: 0 40px;
`;
const TitleWrap = styled.div`
  display: flex;
  justify-content: center;
  h1 {
    margin: 0;
  }
  .ant-typography {
    color: white;
    font-weight: 800px;
    font-size: 32px;
    line-height: 39px;
    margin: 127px 0 82px 0;
  }
`;

const CardWrap = styled(Card)`
  margin: -103px 0 117px;
  height: 1382px;
  width: 1200px;
  min-height: 500px;
  background: #fbfdff;
`;

const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const UnderLineWrap = styled.div<{lineColor?: string; lineWidth?: string}>`
  height: 1px;
  background-color: ${(props) => (props.lineColor ? props.lineColor : ' #000000')};
  width: ${(props) => (props.lineWidth ? props.lineWidth : '100%')};
`;

const ContentWrap = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
  justify-content: center;
`;

const PrincipalBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 293px;
  width: 210px;
  top: 1363 px;
  background: #ffffff;
  box-shadow: 0px 8px 12px 1px rgba(102, 120, 166, 0.03), 0px 5px 9px -3px rgba(102, 120, 166, 0.05);
  border-radius: 4px;
  margin-right: 38px;
  margin-top: 82px;
  margin-bottom: 155px;
  padding: 25px 20px;

  position: relative;
  border: 1px solid rgba(102, 120, 166, 0);
  img {
    width: 158px;
    height: 180px;
    padding-bottom: 20px;
  }
  .principalName {
    justify-content: center;
    font-size: 20px;
    font-weight: 800;
    line-height: 24px;
    box-sizing: border-box;
    padding-bottom: 8px;
  }
  .introduction {
    justify-content: center;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
  }
`;

export {ListItem, TitleWrap, PrincipalBox, FlexWrap, CardWrap, UnderLineWrap, ContentWrap};
