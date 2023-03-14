import {lazy} from 'react';
import {RouteObject} from 'react-router-dom';

const WebLayout = lazy(() => import('@/routes/WebLayout'));
const Home = lazy(() => import('@/pages/web/Home/Home'));

export type RoutePath = 'home'; //| 'introduction' | 'dynamics' | 'subjects' | 'achievements'
// | 'monthly_report';

export const pathDict: Record<RoutePath, string> = {
  home: '主页',
  // introduction: '项目介绍',
  // dynamics: '项目动态',
  // subjects: '课程设置',
  // achievements: '成果展示',
  // monthly_report: '月报',
};

const WebRoutes: RouteObject[] = [
  {
    path: '/',
    id: 'layout',
    element: <WebLayout />,
    children: [
      {
        index: true,
        id: 'home',
        path: '/',
        element: <Home />,
      },
      // {
      //   id: 'introduction',
      //   path: '/introduction',
      //   element: <Introduction />,
      // },
      // {
      //   id: 'dynamics',
      //   path: '/dynamics',
      //   element: (
      //     <KeepAlive>
      //       <Dynamics />
      //     </KeepAlive>
      //   ),
      //   children: [
      //     {
      //       id: 'commonDetail',
      //       path: '/dynamics/:id',
      //       element: <CommonDetail />,
      //     },
      //   ],
      // },
      // {
      //   id: 'subjects',
      //   path: '/subjects',
      //   element: <Subjects />,
      // },
      // {
      //   id: 'achievements',
      //   path: '/achievements',
      //   element: (
      //     <KeepAlive>
      //       <Achievements />
      //     </KeepAlive>
      //   ),
      //   children: [
      //     {
      //       id: 'commonDetail',
      //       path: '/achievements/:id',
      //       element: <CommonDetail />,
      //     },
      //   ],
      // },
      // {
      //   id: 'monthly_report',
      //   path: '/monthly_report',
      //   element: (
      //     <KeepAlive>
      //       <MonthlyReport />
      //     </KeepAlive>
      //   ),
      // },
    ],
  },
];
export default WebRoutes;
