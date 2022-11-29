import { Page } from 'components';
import React from 'react';
import { useSelector } from 'react-redux';

export default function Redux() {
  const account = useSelector(state => state.account);

  return <Page>Account value: {account}</Page>;
}
