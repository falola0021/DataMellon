import React from 'react';
import DashboardContent from '../dasboard_content/DashboardContent';
import TableContent from '../table_content /TableContent';

import Styles from './ContentContainer.module.css';
export default function ContentContainer({ active }) {
  return (
    <div>
      {active.dashboard && <DashboardContent />}
      {active.table && <TableContent />}
    </div>
  );
}
