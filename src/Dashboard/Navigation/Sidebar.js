import { Link } from "react-router-dom";

import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import './Sidebar.scss';
// import './Sidebar.css';

// import { GiHamburgerMenu } from 'react-icons/gi';
// import alert2Icon from '../assets/UI_component/alert 2.png';
// import bdIcon from '../assets/UI_component/blue prints and devices-1.png';
// import homeIcon from '../assets/UI_component/home.png';
// import settingsIcon from '../assets/UI_component/settings-1.png';

function SideBar(menuCollapse, collapseClick) {
  return (
    <ProSidebar id="header">
      <Menu>
        <MenuItem>
          <Link to="/home">Home</Link>
        </MenuItem>
      </Menu>
      <Menu iconShape="square">
        <MenuItem>
          Alerts
          <Link to="/alerts" />
        </MenuItem>
      </Menu>
      <Menu iconShape="square">
        <MenuItem>
          Blueprints & Devices
          <Link to="/blueprints-and-devices" ></Link>
        </MenuItem>
      </Menu>
      <Menu iconShape="square">
        <MenuItem>
          Settings
          <Link to="/settings"></Link>
        </MenuItem>
      </Menu>
    </ProSidebar>
  );
}

export default SideBar;