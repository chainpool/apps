// Copyright 2017-2018 @polkadot/apps authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { BareProps } from '@polkadot/ui-app/types';

import './index.css';

import React from 'react';
import createApp from '@polkadot/ui-app/index';
import Signer from '@polkadot/ui-signer/index';

import Connecting from './Connecting';
import Content from './Content';
import NodeInfo from './NodeInfo';
import SideBar from './SideBar';

type Props = BareProps & {};

function App (props: Props) {
  return (
    <div className='apps--App'>
      <SideBar>
        <NodeInfo />
      </SideBar>
      <Signer>
        <Content />
      </Signer>
      <Connecting />
    </div>
  );
}

// tslint:disable-next-line
var url = (process.env.WS_URL === null) || (process.env.WS_URL === '')
    ? undefined
    : process.env.WS_URL;

console.log('process.env.WS_URL=', process.env.WS_URL);
console.log('Web socket url=', url);

createApp(App, {
  url
});
