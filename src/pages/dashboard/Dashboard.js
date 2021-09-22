import React, { useState } from 'react';
import Styles from './Dashboard.module.css';

import Nav from '../../components/nav/Nav';
import Sidebar from '../../components/sidebar/Sidebar';
import ContentContainer from '../../components/content_container/ContentContainer';

export default function Dashboard() {
  // initial active state of the sidebar
  const [active, setActive] = useState({
    dashboard: true,
    table: false,
  });

  // Mobile responsive Drawer
  const [drawer, setDrawer] = useState(false);
  const [layout, setLayout] = useState(true);
  const handleDrawer = () => {
    setDrawer(!drawer);
    setLayout(!layout);
  };
  return (
    <div className={Styles.container}>
      <div className={Styles.leftsection}>
        <Sidebar
          handleDrawer={handleDrawer}
          active={active}
          setActive={setActive}
        />
      </div>
      {drawer && (
        <div className={Styles.leftsectionmobile}>
          <Sidebar
            handleDrawer={handleDrawer}
            active={active}
            setActive={setActive}
          />
        </div>
      )}
      <div className={Styles.rightsection}>
        <div className={Styles.nav}>
          <Nav handleDrawer={handleDrawer} />
        </div>
        <div onClick={() => setDrawer(false)} className={Styles.content}>
          <ContentContainer active={active} />
        </div>
      </div>
    </div>
  );
}
