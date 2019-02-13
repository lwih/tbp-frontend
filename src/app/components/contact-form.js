import React from 'react'
import styled from 'styled-components'
import {Flex, Box} from '@rebass/grid';

const ContactFormComponent = ({className}) => (
    <Flex className={className}>
        <form className="ContactForm" method="post" action="/company/contact-success">
            <Flex flexDirection="column" px={4} py={3}>
                <Box width={1}>
                    <input
                        className="ContactForm-Input"
                        type="hidden"
                        name="form-name"
                        value="contact"/>
                </Box>
                <Box width={1}>
                    <p className="ContactForm-Section">
                        <label className="ContactForm-Label">
                            Name
                            <input className="ContactForm-Input" type="text" name="name"/>
                        </label>
                    </p>
                </Box>
                <Box width={1}>
                    <p className="ContactForm-Section">
                        <label className="ContactForm-Label">
                            Email
                            <input className="ContactForm-Input" type="email" name="email"/>
                        </label>
                    </p>
                </Box>
                <Box width={1}>
                    <p className="ContactForm-Section">
                        <label className="ContactForm-Label">
                            Nachricht
                            <textarea className="ContactForm-Textarea" name="message"></textarea>
                        </label>
                    </p>
                </Box>
                <Box>
                    <p className="ContactForm-Section">
                        <button className="ContactForm-Submit" type="submit">Submit</button>
                    </p>
                </Box>
            </Flex>
        </form>
    </Flex>
)

const ContactForm = styled(ContactFormComponent)`
.ContactPage header {
    text-align: center;
  }
  
  .ContactForm {
    margin: 0 auto;
    text-align: center;
    width: 100%;
  }
  
  .ContactForm-Label {
    font-size: 18px;
    line-height: 2;
    color: #20282f;
    font-weight: 600;
  }
  
  .ContactForm-Input {
    display: block;
    height: 32px;
    width: 100%;
    border-radius: 5px;
    margin: 0 auto;
    border: 2px solid #ff4572;
    padding: 10px;
    font-size: 16px;
    outline: none;
  }
  
  .ContactForm-Textarea {
    display: block;
    height: 128px;
    width: 100%;
    border-radius: 5px;
    margin: 0 auto;
    border: 2px solid #ff4572;
    padding: 10px;
    font-size: 16px;
    outline: none;
  }
  
  .ContactForm-Submit {
    height: 40px;
    width: 100%;
    border-radius: 100px;
    color: white;
    font-size: 18px;
    font-weight: bold;
    line-height: 2;
    text-align: center;
    background-color: #ff4572;
    border: solid 1px #ff4572;
    outline: none;
    margin: 32px 12px;
    cursor: pointer;
  }
  
`
export default ContactForm