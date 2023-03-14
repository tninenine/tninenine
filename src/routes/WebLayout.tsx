import {LoadingOutlined} from '@ant-design/icons';
import {Layout, Menu, Spin, SpinProps} from 'antd';
import React, {Suspense} from 'react';
import {Outlet, Link, RouteObject, useLocation, useNavigate} from 'react-router-dom';
import styled from 'styled-components';

import logo from '@/assets/images/logo.png';

import WebRoutes, {pathDict, RoutePath} from './WebRoutes';

const {Content, Header} = Layout;
const antIcon = <LoadingOutlined style={{fontSize: 24}} spin />;

export const LoadingWrap: typeof Spin = styled(Spin)<SpinProps>`
  height: 99vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const WebHeader = styled.div`
  box-shadow: 0px 1px 10px rgba(71, 90, 155, 0.02), 0px 4px 6px rgba(102, 120, 166, 0.04),
    0px 2px 6px -1px rgba(102, 120, 166, 0.05);
  position: fixed;
  top: 0;
  background: #080808;
  width: 100%;
  height: 80px;
  padding: 14px 20px;
  z-index: 10;
`;

const HeaderContent = styled(Header)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #080808 !important;
  padding-inline: 0 !important;
  font-size: 18px;
  font-weight: 800;
  line-height: 22px;
  letter-spacing: 0em;
  .ant-menu-dark {
    background: #080808;
  }
  .ant-menu-dark .ant-menu-item-selected a {
    color: #005a9f;
  }
  .ant-menu-horizontal {
    border-bottom: none;
  }
`;

const ContentContent = styled(Content)`
  padding: 80px 0;
`;

const FooterContent = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  height: 108px;
`;

const SectionLayout = styled(Layout)`
  width: 100%;
  header,
  footer,
  main {
    width: 100%;
    margin: 0 auto;
  }
`;

const WebLayout: React.FC = () => {
  const WebChildren = WebRoutes.find((i) => i.path === '/')?.children as RouteObject[];
  const WebItems = WebChildren.map((i) => {
    return {
      key: i.path as string,
      label: <Link to={i.path as string}>{pathDict[i.id as RoutePath]}</Link>,
    };
  });
  const navigate = useNavigate();
  const loc = useLocation();
  return (
    <Layout style={{background: 'black'}}>
      <SectionLayout style={{background: '#080808'}}>
        <WebHeader>
          <HeaderContent>
            <div
              style={{height: '60px', display: 'flex', alignItems: 'center', paddingLeft: '24px'}}
            >
              <img src={logo} style={{height: '52px'}} onClick={() => navigate('/')} />
            </div>

            <Menu
              theme={'dark'}
              mode="horizontal"
              selectedKeys={[
                WebItems.find((i) => i.key !== '/' && loc.pathname.includes(i.key))?.key || '/',
              ]}
              items={WebItems}
            />
          </HeaderContent>
        </WebHeader>
      </SectionLayout>

      <SectionLayout style={{background: '#080808'}}>
        <ContentContent>
          <Suspense fallback={<LoadingWrap indicator={antIcon} delay={1000} />}>
            <Outlet />
          </Suspense>
        </ContentContent>
      </SectionLayout>
      <SectionLayout style={{background: '#080808'}}>
        <FooterContent />
      </SectionLayout>
    </Layout>
  );
};

export default WebLayout;
