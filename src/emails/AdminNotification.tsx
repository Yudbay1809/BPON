import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface AdminNotificationEmailProps {
  name: string;
  email: string;
  company?: string;
  message: string;
}

export const AdminNotificationEmail = ({
  name,
  email,
  company,
  message,
}: AdminNotificationEmailProps) => (
  <Html>
    <Head />
    <Preview>New Message from {name}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New Inquiry Received</Heading>
        <Text style={text}>
          A new message has been submitted via the BPON contact form.
        </Text>
        <Section style={section}>
          <Text style={label}>From:</Text>
          <Text style={value}>{name} ({email})</Text>
          
          {company && (
            <>
              <Text style={label}>Company:</Text>
              <Text style={value}>{company}</Text>
            </>
          )}
          
          <Text style={label}>Message:</Text>
          <Text style={messageText}>{message}</Text>
        </Section>
        <Hr style={hr} />
        <Text style={footer}>
          BPON Enterprise Dashboard - Automated Notification
        </Text>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
};

const section = {
  padding: '0 48px',
};

const h1 = {
  color: '#333',
  fontSize: '24px',
  fontWeight: 'bold',
  padding: '0 48px',
};

const text = {
  color: '#333',
  fontSize: '16px',
  lineHeight: '24px',
  padding: '0 48px',
};

const label = {
  color: '#666',
  fontSize: '12px',
  fontWeight: 'bold',
  textTransform: 'uppercase' as const,
  marginTop: '20px',
  marginBottom: '4px',
};

const value = {
  color: '#333',
  fontSize: '16px',
  marginTop: '0',
};

const messageText = {
  color: '#333',
  fontSize: '16px',
  lineHeight: '24px',
  backgroundColor: '#f9f9f9',
  padding: '12px',
  borderRadius: '4px',
  marginTop: '8px',
};

const hr = {
  borderColor: '#e6ebf1',
  margin: '20px 0',
};

const footer = {
  color: '#8898aa',
  fontSize: '12px',
  textAlign: 'center' as const,
};
