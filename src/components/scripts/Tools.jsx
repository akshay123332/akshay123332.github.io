import { Flex, Grid, Heading, Image, Spacer, Text } from '@chakra-ui/react'
import React from 'react'

const Tools = () => {
  return (
    <>
        <Grid id='tools' m={'80px auto 100px auto'} justifyContent={'center'} textAlign='center'>
          <Heading>Tools</Heading>
          <Spacer mb={'40px'}/>
          <Flex justifyContent={'center'}>
            <Grid><Image w={'100px'} h='100px' src='https://img.icons8.com/color/256/visual-studio--v1.png' alt='css' /><Text fontSize={'medium'} fontWeight={'bold '} >VS Code</Text></Grid>
            <Grid><Image w={'100px'} h='100px' src='https://img.icons8.com/plasticine/256/github-squared.png' alt='react' /><Text fontSize={'medium'} fontWeight={'bold '} >GitHub</Text></Grid>
            <Grid><Image w={'100px'} h='100px' src='https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/256/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png' alt='ts' /><Text fontSize={'medium'} fontWeight={'bold '} >Netlify</Text></Grid>
          </Flex>
        </Grid>
    </>
  )
}

export default Tools