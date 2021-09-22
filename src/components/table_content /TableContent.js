import React from 'react';
import Styles from './TableContent.module.css';

import Table from '../table/Table';
export default function TableContent() {
  return (
    <div>
      <div className={Styles.title}>Table</div>

      <Table />
    </div>
  );
}
