import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import TokenForm from '@/components/tokens/form'
import React from 'react'
import { View } from 'react-native'

const NewToken = () => {
  return (
    <ThemedView style={{flex:1,padding:32,justifyContent:"center"}}>
      <TokenForm/>
    </ThemedView>
  )
}

export default NewToken