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
  return (
    <div className={Styles.container}>
      <div className={Styles.leftsection}>
        <Sidebar active={active} setActive={setActive} />
      </div>
      <div className={Styles.rightsection}>
        <div className={Styles.nav}>
          <Nav />
        </div>
        <div className={Styles.sidebar}>
          <div className={Styles.content}>
            <ContentContainer active={active} />
          </div>
        </div>
      </div>
    </div>
  );
}
