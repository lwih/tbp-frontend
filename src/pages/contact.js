import React from 'react'

import HomeLayout from '../layouts/home-layout'
import SEO from '../components/seo'
import Header from '../components/header';
import AppContainer from '../components/app-container';
import ContactForm from '../app/components/contact-form';
import {Flex} from '@rebass/grid';
import {colors} from '../design-system/theme';

const ContactPage = () => (
    <HomeLayout>
        <SEO robots={[`noindex`, `nofollow`]}/>
        <Header>
            <Flex justifyContent="center">
                <h2
                    style={{
                    color: colors.white,
                    marginBottom: '10px'
                }}>Nachrichtenformular</h2>
            </Flex>
        </Header>
        <AppContainer p={0} width={1}>
            <ContactForm/>
        </AppContainer>

    </HomeLayout>
)

export default ContactPage