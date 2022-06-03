import React from "react";
import "./topbar.css";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LanguageIcon from "@mui/icons-material/Language";
import Sidebar from "../sidebar/Sidebar";
export default function Topbatar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Dashboard</span>
        
        </div>
        <div className="topRight">
          <div className="topbarIconsContainer">
            <NotificationsIcon />
            <span className="topIconBag">2</span>
          </div>

          <div className="topbarIconsContainer">
            <LanguageIcon />
            <span className="topIconBag">2</span>
          </div>
          <div className="topbarIconsContainer">
            <SettingsIcon />
          </div>
          <img src="https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=0hb44OrI"
          className="topAvater" />
        </div>
      </div>
    </div>
  );
}
