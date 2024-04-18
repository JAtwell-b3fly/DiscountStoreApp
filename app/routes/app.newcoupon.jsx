import {
  Box,
  Layout,
  Page,
  FormLayout,
  TextField,
  Button,
  Text,
  Image,
  BlockStack,
  Card,
  Bleed,
  Divider,
  InlineStack,
} from "@shopify/polaris";

import { useState } from "react";
import { json } from "@remix-run/node";
import { useLoaderData, Form } from "@remix-run/react";

export async function loader() {
  //get data from database

  const coupons = {
    code: "JOCE3680",
    discount: 100,
    expire: "20/04/2024",
    usage: "R100 off your first order only" 
  }

  return json(coupons)
}

export async function action({ request }) {
  //updates persistent data
  let coupons = await request.formData();
  coupons = Object.fromEntries(coupons);
  return json(coupons)
}

export default function NewCouponPage() {
  const coupons = useLoaderData();

  const [newCoupon, setNewCoupon] = useState(coupons);

  return (
    <Page fullWidth>
      <Text as="h1" variant="headingMd">
        Create a new discount coupon
      </Text>

      <Form method="POST">
      <BlockStack gap="400">
        <div
        style={{
          width: '586px',
        }}
      >
        <Box padding="400" width="586px">
          <TextField type="text" name="code" placeholder="Code Name" value={newCoupon.code} onChange={(value) => setNewCoupon({...newCoupon, code: value})} childAlign="center"/>
        </Box>
        <Button variant="primary" fullWidth>Generate Code</Button>
      </div>
      <InlineStack gap="400">
        <Box paddingInline="400" width="284px">
        <TextField type="text" name="discount" placeholder="Discount Code Value" value={newCoupon.discount} onChange={(value) => setNewCoupon({...newCoupon, discount: value})} childAlign="center"/>
        </Box>
        <Box paddingInlineStart="400" width="284px">
        <TextField type="text" name="expire" placeholder="Expiry Date" childAlign="center" value={newCoupon.expire} onChange={(value) => setNewCoupon({...newCoupon, expire: value})} />
        </Box>
      </InlineStack>
      <InlineStack gap="400">
        <Box paddingBlock="400" width="586px" height="586px">
        <TextField type="text" name="usage" placeholder="Usage Limits" childAlign="center" value={newCoupon.usage} onChange={(value) => setNewCoupon({...newCoupon, usage: value})} />
        </Box>
        <Box paddingBlockStart="400" width="284px">
          <Button variant="primary" submit={true}>Save</Button>
          <Button>Cancel</Button>
        </Box>
      </InlineStack>
    </BlockStack>
    </Form>
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
