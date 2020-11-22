import React, { Fragment, useEffect } from 'react';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import { getTransactionsAction } from '../redux/entities/transactions';

import { TransactionsTable } from '../components';

export default function Transactions() {
  const dispatch = useDispatch();
  const { getTransactionsItem } = useSelector((state) => state.transactions);

  useEffect(() => {
    dispatch(getTransactionsAction.loading());
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Transactions - Crypto | DashLite Admin Template</title>
      </Head>

      <div className="nk-content nk-content-fluid">
        <TransactionsTable
          title="Transactions"
          description="Here is the list of your transactions"
          data={getTransactionsItem && getTransactionsItem.data || []}
          responseMessage="No record available"
        />
      </div>
    </Fragment>
  );
}
