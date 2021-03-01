import { Link } from "react-router-dom";

import { ProSidebar, Menu, MenuItem, SidebarHeader } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import './Sidebar.scss';
// import './Sidebar.css';

import Alert2Icon from '../assets/UI_component_svg/Alert2Icon';
import BDIcon from '../assets/UI_component_svg/BDIcon';
import HomeIcon from '../assets/UI_component_svg/HomeIcon';
import MenuIcon from '../assets/UI_component_svg/MenuIcon';
import SettingsIcon from '../assets/UI_component_svg/SettingsIcon';

import { MdHome } from "react-icons/md";
import { MdAddAlert } from "react-icons/md";
import { MdLayers } from "react-icons/md";

function SideBar(menuCollapse, collapseClick) {
  return (
    <ProSidebar id="header">
      <Menu iconShape="square">
        <MenuItem icon={<MdHome />} >
          <Link to="/home">Home</Link>
        </MenuItem>
      </Menu>
      <Menu iconShape="square">
        <MenuItem icon={<MdAddAlert />}>
          Alerts
          <Link to="/alerts" />
        </MenuItem>
      </Menu>
      <Menu iconShape="square">
        <MenuItem icon={<MdLayers />}>
          Blueprints and Devices
          <Link to="/blueprints-and-devices" ></Link>
        </MenuItem>
      </Menu>
      <Menu iconShape="square">
        <MenuItem icon={<SettingsIcon />}>
          Settings
          <Link to="/settings"></Link>
        </MenuItem>
      </Menu>
    </ProSidebar>
  );
}

export default SideBar;