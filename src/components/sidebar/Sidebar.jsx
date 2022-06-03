import React from "react";
import "./sidebar.css";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BarChartIcon from '@mui/icons-material/BarChart';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ReportIcon from '@mui/icons-material/Report';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashoard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <LineStyleIcon /> Home
            </li>
            <li className="sidebarListItem">
              <TimelineIcon /> Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUpIcon /> Home
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <PersonOutlineIcon /> Users
            </li>
            <li className="sidebarListItem">
              <StorefrontIcon /> Products
            </li>
            <li className="sidebarListItem">
              <AttachMoneyIcon /> Transactions
            </li>
            <li className="sidebarListItem">
              <BarChartIcon /> Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutlineIcon /> Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeedIcon /> Feddback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutlineIcon /> Meassges
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <HomeRepairServiceIcon /> Manage
            </li>
            <li className="sidebarListItem">
              <TimelineIcon /> Analytics
            </li>
            <li className="sidebarListItem">
              <ReportIcon /> Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
