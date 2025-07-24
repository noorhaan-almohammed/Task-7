import Slider from '@/components/Slider'
import Container from '@/components/common/Container'
import { destinations } from '@/Data/data'
import React from 'react'

function PopularDestinantions() {
  return (
    <Container title="Explore Our Popular Destinantions">
        <Slider cards={destinations}/>
    </Container>
  )
}

export default PopularDestinantions
