// Copyright 2017-2018 @polkadot/ui-keyring authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { KeyringPair, KeyringPair$Json, KeyringPair$Meta } from '@polkadot/util-keyring/types';
import { SingleAddress } from './observable/types';
import { KeyringAddress, KeyringInstance, State } from './types';

import testKeyring from '@polkadot/util-keyring/testing';

import accounts from './observable/accounts';
import addresses from './observable/addresses';
import loadAll from './loadAll';
import loadAccount from './account/load';
import backupAccount from './account/backup';
import createAccount from './account/create';
import forgetAccount from './account/forget';
import isAvailable from './isAvailable';
import saveAccount from './account/save';
import saveAccountMeta from './account/meta';
import forgetAddress from './address/forget';
import getAccounts from './account/all';
import getAddress from './address/get';
import getAddresses from './address/all';
import restoreAccount from './account/restore';
import saveAddress from './address/meta';
import saveRecent from './address/metaRecent';
import setTestMode from './setTestMode';

const state: State = {
  isTestMode: false,
  accounts,
  addresses,
  keyring: testKeyring()
};

loadAll(state);

export default ({
  backupAccount: (address: string, passphrase: string): KeyringPair$Json | void =>
    backupAccount(state, address, passphrase),
  createAccount: (seed: Uint8Array, password?: string, meta?: KeyringPair$Meta): KeyringPair =>
    createAccount(state, seed, password, meta),
  forgetAccount: (address: string): void =>
    forgetAccount(state, address),
  forgetAddress: (address: string): void =>
    forgetAddress(state, address),
  isAvailable: (address: string | Uint8Array): boolean =>
    isAvailable(state, address),
  getAccounts: (): Array<KeyringAddress> =>
    getAccounts(state),
  getAddress: (address: string | Uint8Array): KeyringAddress =>
    getAddress(state, address),
  getAddresses: (): Array<KeyringAddress> =>
    getAddresses(state),
  getPair: (address: string | Uint8Array): KeyringPair =>
    state.keyring.getPair(address),
  getPairs: (): Array<KeyringPair> =>
    state.keyring.getPairs().filter((pair) =>
      state.isTestMode || pair.getMeta().isTesting !== true
    ),
  loadAccount: (address: string, encoded: KeyringPair$Json, meta?: KeyringPair$Meta): KeyringPair =>
    loadAccount(state, address, encoded, meta),
  loadAll: (): void =>
    loadAll(state),
  restoreAccount: (json: KeyringPair$Json, passphrase?: string): boolean =>
    restoreAccount(state, json, passphrase),
  saveAccount: (pair: KeyringPair, password?: string): void =>
    saveAccount(state, pair, password),
  saveAccountMeta: (pair: KeyringPair, meta: KeyringPair$Meta): void =>
    saveAccountMeta(state, pair, meta),
  saveAddress: (address: string, meta: KeyringPair$Meta): void =>
    saveAddress(state, address, meta),
  saveRecent: (address: string): SingleAddress =>
    saveRecent(state, address),
  setTestMode: (isTest: boolean): void =>
    setTestMode(state, isTest)
} as KeyringInstance);
