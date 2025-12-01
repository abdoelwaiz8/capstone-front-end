import DashboardPage from '../pages/dashboard/dashboard-page';
import BapbPage from '../pages/bapb/bapb-page';
import ApprovalPage from '../pages/approval/approval-page';

const routes = {
  '/': new DashboardPage(),
  '/bapb': new BapbPage(),
  '/approval': new ApprovalPage(),
};

export default routes;