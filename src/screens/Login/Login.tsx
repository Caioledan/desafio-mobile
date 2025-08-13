import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';
import { Logo } from '../../components/Logo/Logo';
import { LoginInputs } from '../../components/LoginInputs/LoginInputs';
import { LoginButton } from '../../components/LoginButton/LoginButton';
import { LoginText } from '../../components/LoginText/LogintText';

export function Login() {
  return (
    <>
        <Logo/>
        <LoginInputs/>
        <LoginButton/>
        <LoginText/>
    </>
  );
}