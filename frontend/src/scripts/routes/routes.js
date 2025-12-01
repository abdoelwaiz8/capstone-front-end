import DashboardPage from '../pages/dashboard/dashboard-page';
import BapbPage from '../pages/bapb/bapb-page';
import InputPage from '../pages/input/input-page'; 
import ApprovalPage from '../pages/approval/approval-page';
import DownloadPage from '../pages/document/download-page';
import LoginPage from '../pages/auth/login-page';

const routes = {
  '/': new DashboardPage(),
  '/login': new LoginPage(),
  '/bapb': new BapbPage(),
  '/input/:id': new InputPage(), 
  '/approval': new ApprovalPage(),
  '/download': new DownloadPage(),
};

export default routes;