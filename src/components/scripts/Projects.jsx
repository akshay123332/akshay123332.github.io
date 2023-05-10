import { Box, Button, Divider, Flex, Grid, Heading, Image, Link, Spacer, Text } from '@chakra-ui/react'
import React from 'react'

const Projects = () => {
  return (
    <>
        <Divider orientation='horizontal' mb={'100px'}/>
         <Flex id='projects' flexDir={'column'}  alignItems={'center'} w={'80%'} m={'auto'} mb={'100px'}>
          <Heading mb={'100px'}>Featured Projects</Heading>
              <Flex gap={'20px'}  m={'auto'} className='project-card' >
                  <Image h={'300px'} w={'800px'} src='/picsproject/1mg.png' alt=''/>
                  <Flex flexDir={'column'} mt={'-20px'}>
                      <Text className="project-title" fontSize={'2xl'} fontWeight={'medium'}>1mg Clone</Text>
                      <Text className="project-description">1mg is a healthcare Ecommerce platform that provides access to a wide range of health products and services in India. The platform allows users to buy medicines, health supplements, and wellness products</Text>
                      <Flex className='project-tech-stack' flexDir={'column'}>
                      <Flex flexDir={'column'}>
                        <Text fontSize={'medium'} fontWeight={'medium'}> FrontEnd Tech Stacks</Text>
                        <Flex gap={'15px'}>
                        <Image h={'40px'} w={'40px'} src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png' alt='React'/>     
                        <Image h={'40px'} w={'40px'} src='https://img.icons8.com/color/256/redux.png' alt='redux'/>
                        </Flex>
                      </Flex>
                      <Flex flexDir={'column'}>
                        <Text fontSize={'medium'} fontWeight={'medium'}> BackEnd Tech Stacks</Text>
                        <Flex gap={'15px'}>
                        <Image h={'40px'} w={'40px'} src='https://img.icons8.com/color/256/nodejs.png' alt='node.js'/>
                        <Image h={'40px'} w={'40px'} src='https://img.icons8.com/ios/256/express-js.png' alt='express'/>
                        <Image h={'40px'} w={'40px'} src='https://img.icons8.com/color/256/mongodb.png' alt='Mongodb'/>
                        </Flex>
                      </Flex>
                      </Flex>
                      <Flex gap={'10px'} pt={'20px'} m={'auto'}>
                      <Link className='project-deployed-link' href='https://medigreenhealth.netlify.app/' isExternal ><Button h={'40px'}>Check it Out!</Button></Link>
                      <Link className='project-github-link' href='https://github.com/akshay123332/medi-green-health' isExternal><Button h={'40px'}>Code Base</Button></Link>
                      </Flex>
                  </Flex>
              </Flex>

              {/* 2nd project */}
              <Flex gap={'20px'} mt={'70px'} className='project-card'>
              <Flex flexDir={'column'} ml={'10px'}>
                      <Text className="project-title" fontSize={'2xl'} fontWeight={'medium'}>Lenscart Clone</Text>
                      <Text className="project-description">Ainak is a clone of lenscart website. Ainak is an online Ecommerce Website which is providing high quality eyewear. From this website, users can Order Computer Glasses,Sun Glasses,Kids Glasses and much more across the world.</Text>
                      <Flex className='project-tech-stack' flexDir={'column'}>
                      <Flex flexDir={'column'}>
                        <Text fontSize={'medium'} fontWeight={'medium'}> FrontEnd Tech Stacks</Text>
                        <Flex gap={'5px'}>
                        <Image h={'40px'} w={'40px'} src='https://img.icons8.com/arcade/256/javascript.png' alt='JS'/>
                        <Image h={'40px'} w={'40px'} src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png' alt='React'/>     
                        <Image h={'40px'} w={'40px'} src='https://img.icons8.com/color/256/redux.png' alt='redux'/>
                        </Flex>
                      </Flex>
                      <Flex flexDir={'column'}>
                        <Text fontSize={'medium'} fontWeight={'medium'}> BackEnd Tech Stacks</Text>
                        <Flex gap={'5px'}>
                        <Image h={'40px'} w={'40px'} src='https://img.icons8.com/pulsar-color/256/json.png' alt='node.js'/>
                        </Flex>
                      </Flex>
                      </Flex>
                      <Flex gap={'10px'} mt={'20px'} m={'auto'}>
                      <Link className='project-deployed-link' href='https://ainak-five.vercel.app/' isExternal><Button h={'40px'}>Check it Out!</Button></Link>
                      <Link className='project-github-link' href='https://github.com/akshay123332/Lenscart-Clone' isExternal><Button h={'40px'}>Code Base</Button></Link>
                      </Flex>
                  </Flex>
                  <Image h={'300px'} w={'800px'} src='/picsproject/lenscart.png' alt=''/>
              </Flex>

              {/* 3rd project */}

              <Flex gap={'20px'} mt={'80px'} className='project-card'>
                  <Image h={'300px'} w={'800px'} src='https://i.ibb.co/9cSfCRj/2023-02-21.png' alt=''/>
                  <Flex flexDir={'column'} mt={'-20px'}>
                      <Text className="project-title" fontSize={'2xl'} fontWeight={'medium'}>Airtable Clone</Text>
                      <Text className="project-description">This is a group project, Airtable is a low-code platform for building collaborative apps. Customize your workflow, collaborate, and achieve goals</Text>
                      <Flex className='project-tech-stack' flexDir={'column'}>
                      <Flex flexDir={'column'}>
                        <Text fontSize={'medium'} fontWeight={'medium'}> FrontEnd Tech Stacks</Text>
                        <Flex gap={'5px'}>
                        <Image h={'40px'} w={'40px'} src='https://img.icons8.com/arcade/256/javascript.png' alt='JS'/>
                        <Image h={'40px'} w={'40px'} src='https://img.icons8.com/stickers/256/css3.png' alt='css'/>
                        <Image h={'40px'} w={'4 0px'} src='https://img.icons8.com/color/256/html-5.png' alt='HTML'/>
                        </Flex>
                      </Flex>
                      <Flex flexDir={'column'}>
                        <Text fontSize={'medium'} fontWeight={'medium'}> BackEnd Tech Stacks</Text>
                        <Flex gap={'5px'}>
                        <Image h={'40px'} w={'40px'} src='https://img.icons8.com/pulsar-color/256/json.png' alt='json'/>
                        </Flex>
                      </Flex>
                      </Flex>
                      <Flex gap={'10px'} mt={'20px'} m={'auto'}>
                      <Link className='project-deployed-link' href='https://airtable.indspunk.com/' isExternal><Button h={'40px'}>Check it Out!</Button></Link>
                      <Link className='project-github-link' href='https://github.com/akshay123332/Airtable-clone' isExternal><Button h={'40px'}>Code Base</Button></Link>
                      </Flex>
                  </Flex>
              </Flex>

              {/* 4th project */}
              <Flex gap={'20px'} mt={'70px'} className='project-card'>
              <Flex flexDir={'column'} ml={'10px'}>
                      <Text  className="project-title" fontSize={'2xl'} fontWeight={'medium'}>jefit Clone</Text>
                      <Text className="project-description">Fitness Freak is a website for tracking and planning the workout for the people who are in the track of workout.</Text>
                      <Flex className='project-tech-stack' flexDir={'column'}>
                      <Flex flexDir={'column'}>
                        <Text fontSize={'medium'} fontWeight={'medium'}> FrontEnd Tech Stacks</Text>
                        <Flex gap={'5px'}>
                        <Image h={'40px'} w={'40px'} src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png' alt='React'/>     
                        <Image h={'40px'} w={'4 0px'} src='https://img.icons8.com/color/256/html-5.png' alt='HTML'/>
                        </Flex>
                      </Flex>
                      <Flex flexDir={'column'}>
                        <Text fontSize={'medium'} fontWeight={'medium'}> BackEnd Tech Stacks</Text>
                        <Flex gap={'5px'}>
                        <Image h={'40px'} w={'40px'} src='https://img.icons8.com/pulsar-color/256/json.png' alt='json'/>
                        </Flex>
                      </Flex>
                      </Flex>
                      <Flex gap={'10px'} mt={'20px'} m={'auto'}>
                      <Link className='project-deployed-link' href='https://inspiring-stardust-fa4b0f.netlify.app/' isExternal><Button h={'40px'}>Check it Out!</Button></Link>
                      <Link className="project-github-link" href='https://github.com/akshay123332/Fitness-Freak' isExternal><Button h={'40px'}>Code Base</Button></Link>
                      </Flex>
                  </Flex>
                  <Image h={'300px'} w={'800px'} src='/picsproject/fitness.png' alt=''/>
              </Flex>
              
        </Flex> 
    </>
  )
}

export default Projects