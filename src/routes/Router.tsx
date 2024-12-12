import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Layout from '@/layout/Layout';
import { routes } from '@/routes/Routes';

type Props = {};

const AppRouter = (props: Props) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout sidebarType="Sidebar1" />}>
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
