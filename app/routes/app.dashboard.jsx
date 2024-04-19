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
import couponlist from "./coupons.json";

export default function DashboardPage() {

  const [selectedCode, setSelectedCode] = useState(null);
  const [coupons, setCoupons] = useState(couponlist)

  const handleViewCode = () => {
    const selectedCoupon = coupons.filter((coupon) => coupon.id === id);

    setSelectedCode(selectedCoupon);
  }

  const handleDeleteCode = (id) => {
    const updatedCoupons = coupons.filter((coupon) => coupon.id !== id);

    setCoupons(updatedCoupons);
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
              'heading heading couponCards couponCards',
              'couponCards couponCards couponCards couponCards',
            ],
            md: ['couponCards couponCards couponCards couponCards'],
            lg: ['heading heading couponCards couponCards couponCards couponCards'],
            xl: ['heading heading couponCards couponCards couponCards couponCards'],
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
          {coupons.map((coupon, index) => (
            <Card height="60px" width="60px" key={index}>
            <Text>Code Name: {coupon.codeName}</Text>
            <Text>Discount value: R {coupon.discountValue}</Text>
            <Text>Expiry date: {coupon.expiryDate}</Text>
            <Text>Status: {coupon.status}</Text>
            <Box>
              <Button variant="primary" onClick={() => handleViewCode(coupon.id)}>View</Button>
              <Button  variant="primary" tone="critical" onClick={() => handleDeleteCode(coupon.id)}>Delete</Button>
            </Box>
          </Card>
          ))}
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
