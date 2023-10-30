import React from 'react'

// import global styles
import {
    FlexContainer,
    PaddingContainer,
    Heading,
    Button,
    BlueText,
}from '../styles/Global.styled';

// import footer styles 
import {
  ContactForm,
  FormLabel,
  FormInput,
} from '../styles/Footer.styled';

const Footer = () => {
  return (
    <PaddingContainer
       id="Contact"
       top="5%"
       bottom="10%"
    >
      <Heading
      as="h4"
      size="h4"
      align="center"
      >
         MY CONTACT
      </Heading>

      <Heading
      as="h2"
      size="h2"
      align="center"
      top="0.5rem"
      >
       Contact <BlueText>Me Here</BlueText>
      </Heading>

      <PaddingContainer top="3rem">
         <FlexContainer justify="center">
         <ContactForm>
         <PaddingContainer bottom="2rem">
          <FormLabel>Name:</FormLabel>
          <FormInput
              type="text"
              placeholder="enter your name"
              />
         </PaddingContainer>

         <PaddingContainer bottom="2rem">
          <FormLabel>Email:</FormLabel>
          <FormInput
              type="email"
              placeholder="enter your email"
              />
         </PaddingContainer>
 
         <PaddingContainer bottom="2rem">
          <FormLabel>Message:</FormLabel>
          <FormInput
              as="textarea"
              placeholder="enter your message"
              />
         </PaddingContainer>

         <FlexContainer justify="center"
            responsiveFlex>
              <Button>send message</Button>
         </FlexContainer>

         </ContactForm>
         </FlexContainer>
      </PaddingContainer>

    </PaddingContainer>
  )
}

export default Footer