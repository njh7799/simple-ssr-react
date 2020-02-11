import Home from './Home';
import About from './About';
import NotFound from './NotFound';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/about',
    component: About,
  },
  {
    component: NotFound,
  },
];

export default routes;
