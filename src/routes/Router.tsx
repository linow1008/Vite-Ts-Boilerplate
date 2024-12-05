import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Layout from '@/components/layout/layout';
import Home from '@/pages/Home';

type Props = {};

const AppRouter = (props: Props) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="about" element={} /> */}
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
