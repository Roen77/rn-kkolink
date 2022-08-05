import {StyleSheet, Text, View, Button} from 'react-native';
import React, {useState} from 'react';
import {
  KakaoOAuthToken,
  KakaoProfile,
  getProfile,
  login,
  logout,
  unlink,
  Linktest,
} from '@react-native-seoul/kakao-login';

export default function KakaoTest() {
  const [result, setResult] = useState('');

  const signInWithKakao = async (): Promise<void> => {
    const token: KakaoOAuthToken = await login();

    setResult(JSON.stringify(token));
  };

  const signOutWithKakao = async (): Promise<void> => {
    const message = await logout();

    setResult(message);
  };

  const getKakaoProfile = async (): Promise<void> => {
    const profile: KakaoProfile = await getProfile();
    console.log(profile);

    setResult(JSON.stringify(profile));
  };

  const unlinkKakao = async (): Promise<void> => {
    const message = await unlink();

    setResult(message);
  };

  return (
    <View>
      <Button title="로그인" onPress={signInWithKakao} />
      <Button title="정보가져오기" onPress={getKakaoProfile} />
      <Text>{result}</Text>
    </View>
  );
}
