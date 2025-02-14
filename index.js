import { Stack } from "expo-router";
import React from 'react'
import { View } from "react-native-web";

export default function index() {
  return (
    <Stack>
      <Stack.Screen name="/" />
    </Stack>
  )
}

