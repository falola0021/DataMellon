import React from 'react';
import Styles from './Table.module.css';
import salesData from '../../services/salesData';
import MUIDataTable from 'mui-datatables';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
// import { createTheme } from '@material-ui/core/styles'

export default function Table() {
  const { errormessage, sales, loading } = salesData();
  const columns = [
    {
      name: 'Order ID',
      options: {
        filter: false,
        sort: false,
      },
      label: <div className={Styles.labelText}>Order ID</div>,
    },
    {
      name: 'Profit',
      options: {
        filter: false,
        sort: false,
      },
      label: <div className={Styles.labelText}>Profit</div>,
    },
    {
      name: 'City',
      options: {
        filter: false,
        sort: false,
      },
      label: <div className={Styles.labelText}>City</div>,
    },
    {
      name: 'Customer Name',
      options: {
        filter: false,
        sort: false,
      },
      label: <div className={Styles.labelText}>Customer Name</div>,
    },
    {
      name: 'Product Name',
      options: {
        filter: false,
        sort: false,
      },
      label: <div className={Styles.labelText}>Product Name</div>,
    },
    {
      name: 'Country',
      options: {
        filter: false,
        sort: false,
      },
      label: <div className={Styles.labelText}>Country</div>,
    },
    {
      name: 'Discount',
      options: {
        filter: false,
        sort: false,
      },
      label: <div className={Styles.labelText}>Discount</div>,
    },
    {
      name: 'Customer ID',
      options: {
        filter: false,
        sort: false,
      },
      label: <div className={Styles.labelText}>Customer ID</div>,
    },
    {
      name: 'Ship Mode',
      options: {
        filter: false,
        sort: false,
      },
      label: <div className={Styles.labelText}>Ship Mode</div>,
    },
    {
      name: 'Category',
      options: {
        filter: false,
        sort: false,
      },
      label: <div className={Styles.labelText}>Category</div>,
    },
    {
      name: 'Sales',
      options: {
        filter: false,
        sort: false,
      },
      label: <div className={Styles.labelText}>Sales</div>,
    },
    {
      name: 'Order Date',
      options: {
        filter: false,
        sort: false,
      },
      label: <div className={Styles.labelText}>Order Date</div>,
    },
  ];

  const data = sales;
  const options = {
    filterType: 'checkbox',
    pagination: true,
    download: true,
    print: true,
    search: true,
    filter: true,
    viewColumns: true,
    responsive: 'standard',
    selectableRows: 'single',
  };

  const getMuiTheme = () =>
    createTheme({
      overrides: {
        MUIDataTable: {
          root: {
            backgroundColor: '#AAF',
            fontSize: '10px !important',
          },

          paper: {
            boxShadow: 'none',
            backgroundColor: 'transparent',
          },
        },
        MuiTableRow: {
          hover: { '&$root': { '&:hover': { backgroundColor: '#fdb50d1a' } } },
        },

        MuiTableCell: {
          head: {
            backgroundColor: 'transparent !important',
            fontSize: '10px !important',
          },
        },

        MUIDataTableBodyCell: {
          root: {
            fontSize: '10px !important',
            backgroundColor: 'transparent !important',
          },
        },
        MUIDataTableSelectCell: {
          checked: { color: '#fcb30c !important' },
          hover: { backgroundColor: 'red !important' },
        },
      },
    });
  return (
    <div className={Styles.table}>
      {loading ? (
        'loading...'
      ) : (
        <MuiThemeProvider theme={getMuiTheme()}>
          <MUIDataTable
            title='Report'
            data={data}
            columns={columns}
            options={options}
          />
        </MuiThemeProvider>
      )}
    </div>
  );
}
