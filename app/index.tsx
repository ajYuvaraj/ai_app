import{ View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { finishScreenTransition } from 'react-native-reanimated';
import { Redirect } from 'expo-router';

export default function index(){
 // const[isOnbording, setIsOnbording]= useState(true);
  
 // useEffect(() => {
   
 // }, [])

  return <Redirect href="/(routes)/onbording" />;
  
}