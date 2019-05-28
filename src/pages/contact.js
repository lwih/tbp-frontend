import React from 'react'
import HomeLayout from '../layouts/home-layout'
import SEO from '../components/seo'
import Header from '../components/header'
import AppContainer from '../components/app-container'
import ContactForm from '../app/contact-form'
import { Flex, Box } from '@rebass/grid'
import { colors } from '../design-system/theme'

const ContactPage = () => (
  <HomeLayout>
    <SEO robots={[`index`, `follow`]} />
    <Header />
    <AppContainer p={0} width={1}>
      <Flex justifyContent="center" flexDirection="column" mt={3}>
        <Box width={[1, 1 / 2, 2 / 5]} alignSelf="center">
          <Flex justifyContent="center" flexDirection="column">
            <Box my={3} mx="auto">
              <h2
                style={{
                  color: colors.teal,
                }}
              >
                Nachrichtenformular
              </h2>
            </Box>
            <Box>
              <ContactForm />
            </Box>
          </Flex>
        </Box>
      </Flex>
    </AppContainer>
  </HomeLayout>
)

export default ContactPage
