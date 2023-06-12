import { Outlet } from 'react-router-dom';
import Navs from './Navs';
import AppTittle from './AppTittle';

export default function MainLayout() {
  return (
    <div>
      <AppTittle />
      <Navs />
      <Outlet />
    </div>
  );
}
