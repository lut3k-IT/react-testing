import { Page } from 'components';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from 'store/actions';

export default function Redux() {
  const account = useSelector(state => state.account);
  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney } = bindActionCreators(actions, dispatch);

  return (
    <Page>
      <h1>{account}</h1>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <button onClick={() => depositMoney(1000)}>Deposit</button>
        <button onClick={() => withdrawMoney(1000)}>Withdraw</button>
      </div>
    </Page>
  );
}
