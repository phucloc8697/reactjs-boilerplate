import { ROUTER_URL } from 'src/constants/url';
import lazyLoadComponent from 'src/utils/lazyLoadComponent';

const Home = lazyLoadComponent(() => import('src/screens/home'));
const About = lazyLoadComponent(() => import('src/screens/about'));

export default [
  {
    path: ROUTER_URL.HOME,
    exact: true,
    component: Home,
  },
  {
    path: ROUTER_URL.ABOUT,
    exact: true,
    component: About,
  },
];
