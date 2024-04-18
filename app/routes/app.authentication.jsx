import {
  Box,
  Layout,
  LegacyCard,
  Page,
  FormLayout,
  TextField,
  Button,
  Text,
  Image,
  Divider
} from "@shopify/polaris";

import { useState } from "react";

export default function AuthenticationPage() {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  })

  const [noAccount, setNoAccount] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const handleNoAccount = () => {
    setNoAccount(!noAccount);

    if (noAccount === true) {
      setShowSignUp(true);
    }
  }

  const handleHaveAccount = () => {
    setNoAccount(!noAccount);

    if (noAccount === false){
      setShowSignUp(false);
    }
  }

  return (
    <Page fullWidth>
      <Layout>
        {showSignUp === true ? (
          <>
          <Layout.Section variant="oneThird">
          <Text as="h1" variant="headingMd">
                Create a new account
          </Text>

          <Divider />
        <FormLayout>
      <TextField  type="text" label="Full Name" value={formState.name} onChange={(value) => setFormState({...formState, name: value })} />
      <TextField
        type="email"
        label="Email Address"
        value={formState.email}
        onChange={(value) => setFormState({...formState, email: value})}
      />

      <TextField
        type="password"
        label="Password"
        value={formState.password}
        onChange={(value) => setFormState({...formState, password: value})}
      />

      <Button variant="tertiary" onClick={handleHaveAccount}>Already have an account? Sign In</Button>

      <Button submit={true} fullWidth variant="primary">
        Sign Up
      </Button>
    </FormLayout>
        </Layout.Section>
          </>
        ):(
          <>
          <Layout.Section variant="oneThird">
          <Text as="h1" variant="headingMd">
                Login to an existing account
          </Text>

          <Divider />
        <FormLayout>
      <TextField
        type="email"
        label="Email Address"
        value={formState.email}
        onChange={(value) => setFormState({...formState, email: value})}
      />

      <TextField
        type="password"
        label="Password"
        value={formState.password}
        onChange={(value) => setFormState({...formState, password: value})}
      />

      <Button variant="tertiary" onClick={handleNoAccount}>Don't have an account? Sign Up</Button>

      <Button submit={true} fullWidth variant="primary">
        Sign In
      </Button>
    </FormLayout>
        </Layout.Section>
          </>
        )}
        
        <Layout.Section variant="oneThird">
        <LegacyCard sectioned>
          <Image source="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
        alt="Black choker necklace"
         />
          </LegacyCard>
        </Layout.Section>
      </Layout>
    </Page>
  );
}

function Code({ children }) {
  return (
    <Box
      as="span"
      padding="025"
      paddingInlineStart="100"
      paddingInlineEnd="100"
      background="bg-surface-active"
      borderWidth="025"
      borderColor="border"
      borderRadius="100"
    >
      <code>{children}</code>
    </Box>
  );
}
