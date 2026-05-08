import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface UserAutoReplyEmailProps {
  name: string;
}

export const UserAutoReplyEmail = ({ name }: UserAutoReplyEmailProps) => (
  <Html>
    <Head />
    <Preview>Thank you for contacting BPON</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={header}>
          <Heading style={h1}>Thank You for Reaching Out</Heading>
        </Section>
        <Section style={section}>
          <Text style={text}>Hi {name},</Text>
          <Text style={text}>
            Thank you for contacting PT Berlian Palm Oil Nusantara. We have received your message and our team will review it shortly.
          </Text>
          <Text style={text}>
            Expect to hear back from us within 1-2 business days.
          </Text>
          <Text style={text}>Best Regards,<br />BPON Team</Text>
        </Section>
        <Hr style={hr} />
        <Text style={footer}>
          PT Berlian Palm Oil Nusantara<br />
          Jl. Jendral Sudirman, Pekanbaru, Riau<br />
          www.bpon.co.id
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
  borderRadius: '8px',
  border: '1px solid #e6ebf1',
};

const header = {
  backgroundColor: '#0d2e10',
  padding: '32px',
  textAlign: 'center' as const,
  borderRadius: '8px 8px 0 0',
};

const section = {
  padding: '40px 48px',
};

const h1 = {
  color: '#ffffff',
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '0',
};

const text = {
  color: '#333',
  fontSize: '16px',
  lineHeight: '26px',
};

const hr = {
  borderColor: '#e6ebf1',
  margin: '20px 0',
};

const footer = {
  color: '#8898aa',
  fontSize: '12px',
  textAlign: 'center' as const,
  lineHeight: '20px',
};
