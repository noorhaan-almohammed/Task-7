import Container from '@/components/common/Container'
import Slider from '@/components/Slider'
import { testimonials } from '@/Data/data'
import React from 'react'

function CustomersSays() {
  return (
    <Container title="Happy Customers Says">
        <Slider cards={testimonials} num_Of_Cards_in_1700={2} num_Of_Cards_in_other={2} gap_cards='gap-6'/>
    </Container>
  )
}

export default CustomersSays
