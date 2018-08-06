// Copyright 2017-2018 @polkadot/ui-keyring authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { KeyringInstance as BaseKeyringInstance, KeyringPair, KeyringPair$Json, KeyringPair$Meta } from '@polkadot/util-keyring/types';
import { AddressSubject, SingleAddress } from './observable/types';
import { KeyringSectionOption } from './options/types';

export type KeyringJson$Meta = {
  isRecent?: boolean,
  isTesting?: boolean,
  name?: string,
  whenCreated?: number,
  whenEdited?: number,
  whenUsed?: number,
  [index: string]: any
};

export type KeyringJson = {
  address: string,
  meta: KeyringJson$Meta
};

export type KeyringAddress = {
  address: () => string,
  isValid: () => boolean,
  publicKey: () => Uint8Array,
  getMeta: () => KeyringJson$Meta
}

export type State = {
  isTestMode: boolean,
  accounts: AddressSubject,
  addresses: AddressSubject,
  keyring: BaseKeyringInstance
};

export type KeyringInstance = {
  backupAccount: (address: string, passphrase: string) => KeyringPair$Json | void,
  createAccount: (seed: Uint8Array, password?: string, meta?: KeyringPair$Meta) => KeyringPair,
  forgetAccount: (address: string) => void,
  forgetAddress: (address: string) => void,
  getAccounts: () => Array<KeyringAddress>,
  getAddress: (address: string | Uint8Array) => KeyringAddress,
  getAddresses: () => Array<KeyringAddress>,
  getPair: (address: string | Uint8Array) => KeyringPair,
  getPairs: () => Array<KeyringPair>,
  isAvailable: (address: string | Uint8Array) => boolean,
  loadAccount: (address: string, encoded: KeyringPair$Json, meta?: KeyringPair$Meta) => KeyringPair,
  loadAll: () => void,
  restoreAccount: (json: KeyringPair$Json, passphrase?: string) => boolean,
  saveAccount: (pair: KeyringPair, password?: string) => void,
  saveAccountMeta: (pair: KeyringPair, meta: KeyringPair$Meta) => void,
  saveAddress: (address: string, meta: KeyringPair$Meta) => void,
  saveRecent: (address: string) => SingleAddress,
  setTestMode: (isTest: boolean) => void
};
