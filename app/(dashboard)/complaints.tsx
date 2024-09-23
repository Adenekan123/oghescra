import { ThemedView } from '@/components/ThemedView'
import ComplaintForm from '@/components/complaints/form'
import React from 'react'

const Complaints = () => {
  return (
    <ThemedView style={{flex:1, justifyContent:"center",padding:16}}>
      <ComplaintForm/>
    </ThemedView>
  )
}

export default Complaints