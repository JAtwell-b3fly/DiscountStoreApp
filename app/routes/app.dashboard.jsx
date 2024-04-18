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
  Divider,
  Card,
  Grid
} from "@shopify/polaris";

import { useState } from "react";

export default function DashboardPage() {

  const [selectedCode, setSelectedCode] = useState({});

  const handleViewCode = () => {

  }

  const handleDeleteCode = () => {

  }

  const handleNewCode = () => {
    
  }

  return (
    <Page fullWidth>
      <LegacyCard sectioned>
      <Grid
          columns={{xs: 1, sm: 4, md: 4, lg: 6, xl: 6}}
          areas={{
            xs: ['heading', 'couponCards', 'dashboardOptions'],
            sm: [
              'heading heading heading heading',
              'couponCards couponCards dashboardOptions dashboardOptions',
            ],
            md: ['couponCards heading heading dashboardOptions'],
            lg: ['heading heading heading heading couponCards dashboardOptions'],
            xl: ['heading heading couponCards couponCards dashboardOptions dashboardOptions'],
          }}
        >
          <Grid.Cell area="heading">
            <Text as="h1" variant="headingMd" height="60px">
              Welcome to the Discount Coupon Dashboard
            </Text>

            <Button size="large">New Coupon</Button>
          </Grid.Cell>
          <Divider />
          <Grid.Cell area="couponCards">

            <Card height="60px" width="60px">
              <Text>Code Name</Text>
              <Text>Discount value</Text>
              <Text>Expiry date</Text>
              <Text>Status</Text>
              <Box>
                <Button variant="primary">View</Button>
                <Button  variant="primary" tone="critical">Delete</Button>
              </Box>
            </Card>

            <Card height="60px" width="60px">
              <Text>Code Name</Text>
              <Text>Discount value</Text>
              <Text>Expiry date</Text>
              <Text>Status</Text>
              <Box>
                <Button variant="primary">View</Button>
                <Button variant="primary" tone="critical">Delete</Button>
              </Box>
            </Card>

            <Card height="60px" width="60px">
              <Text>Code Name</Text>
              <Text>Discount value</Text>
              <Text>Expiry date</Text>
              <Text>Status</Text>
              <Box>
                <Button variant="primary">View</Button>
                <Button variant="primary" tone="critical">Delete</Button>
              </Box>
            </Card>
          </Grid.Cell>
          <Grid.Cell area="dashboardOptions">
          <Card height="60px" width="60px">
              <Text>Code Name</Text>
              <Text>Discount value</Text>
              <Text>Expiry date</Text>
              <Text>Status</Text>
              <Box>
                <Button variant="primary">View</Button>
                <Button variant="primary" tone="critical">Delete</Button>
              </Box>
            </Card>

            <Card height="60px" width="60px">
              <Text>Code Name</Text>
              <Text>Discount value</Text>
              <Text>Expiry date</Text>
              <Text>Status</Text>
              <Box>
                <Button variant="primary">View</Button>
                <Button variant="primary" tone="critical">Delete</Button>
              </Box>
            </Card>

            <Card height="60px" width="60px">
              <Text>Code Name</Text>
              <Text>Discount value</Text>
              <Text>Expiry date</Text>
              <Text>Status</Text>
              <Box>
                <Button variant="primary">View</Button>
                <Button variant="primary" tone="critical">Delete</Button>
              </Box>
            </Card>
          </Grid.Cell>
        </Grid>
      </LegacyCard>
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
