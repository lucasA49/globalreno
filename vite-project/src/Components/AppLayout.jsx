import { Outlet } from 'react-router-dom';
import { usePageTracking } from '../hooks/usePageTracking';

const AppLayout = () => {
  usePageTracking();
  return <Outlet />;
};

export default AppLayout;