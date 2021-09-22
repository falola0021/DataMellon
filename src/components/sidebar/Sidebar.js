import React, { useState } from 'react';
import Styles from './Sidebar.module.css';

// data for the sidebar
const sideItems = [
  {
    id: '111',
    name: 'Dashboard',
    icon: 'fa fa-database',
    page: 'dashboard',
  },
  {
    id: '222',
    name: 'Table',
    icon: 'fa fa-table',
    page: 'table',
  },
];

export default function Sidebar({ active, setActive, handleDrawer }) {
  // set active state on click
  const handleDashboard = () => {
    setActive({
      dashboard: true,
      table: false,
    });
    handleDrawer();
  };
  const handleTable = () => {
    setActive({
      dashboard: false,
      table: true,
    });
    handleDrawer();
  };
  return (
    <div>
      <div className={Styles.logo}>
        sky<span>high</span>
      </div>
      <div className={Styles.itemscontainer}>
        {sideItems.map((item, index) => (
          <div
            onClick={item.page == 'dashboard' ? handleDashboard : handleTable}
            key={item.id}
            className={
              (item.page == 'dashboard' && active.dashboard) ||
              (item.page == 'table' && active.table)
                ? Styles.active
                : Styles.inactive
            }>
            <div className={Styles.icon}>
              <i className={item.icon}></i>
            </div>
            <div className={Styles.name}>{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
