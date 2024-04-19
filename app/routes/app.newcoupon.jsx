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
  Form
} from "@shopify/polaris";

import { useState } from "react";
import { json } from "@remix-run/node";
import couponlist from "./coupons.json";

export default function NewCouponPage() {

  const [newCoupon, setNewCoupon] = useState({
    id: couponlist.length + 1,
    codeName: "",
    discountValue: "",
    expiryDate: "",
    usage: "",
    status: "Available",
  });

  const [coupons, setCoupons] = useState(couponlist);

  const generateUniqueCodeName = (usage) => {
    //Extract the letters from the usage input information
    const letters = usage.replace(/[a-zA-Z]/g, "");

    //Generate random numbers
    const randomNumber = Math.floor(1000 + Math.random() * 9000);

    //Concatenate the random letters from usage adn the random numbers generated to create the code name
    const codeName = `${letters}${randomNumber}`;

    console.log("Code Name Generated: ", codeName);

    return codeName;
  }

  const handleGenerateCode = () => {
    // Generate a unique code name based on the usage information
    let generatedCodeName = generateUniqueCodeName(newCoupon.usage);

    // Check if the generated code name already exists in the coupon list
  while (coupons.some((coupon) => coupon.codeName === generatedCodeName)) {
    generatedCodeName = generateUniqueCodeName(newCoupon.usage);
  }

  // Update the newCoupon state with the generated code name
  setNewCoupon({ ...newCoupon, codeName: generatedCodeName });
  };

  const handleSaveNewCoupon = () => {
    // Add the new coupon to the coupon list
    setCoupons([...coupons, newCoupon]);

    // Reset the newCoupon state to its initial state
    setNewCoupon({
      id: couponlist.length + 1,
      codeName: "",
      discountValue: "",
      expiryDate: "",
      usage: "",
      status: "",
    });
  }

  const handleCancelButton = () => {
    setNewCoupon({
      id: couponlist.length + 1,
      codeName: "",
      discountValue: "",
      expiryDate: "",
      usage: "",
      status: "",
    });
  }
  

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
          <TextField type="text" name="codeName" placeholder={newCoupon.codeName === "" ? "Fill in usage limits then select the Generate Code button": newCoupon.codeName} value={newCoupon.codeName} onChange={(value) => setNewCoupon({...newCoupon, codeName: value})} childAlign="center" readOnly={true} />
        </Box>
        <Button variant="primary" fullWidth onClick={handleGenerateCode}>Generate Code</Button>
      </div>
      <InlineStack gap="400">
        <Box paddingInline="400" width="284px">
        <TextField type="text" name="discountValue" placeholder="Discount Code Value" value={newCoupon.discountValue} onChange={(value) => setNewCoupon({...newCoupon, discountValue: value})} childAlign="center"/>
        </Box>
        <Box paddingInlineStart="400" width="284px">
        <TextField type="text" name="expiryDate" placeholder="Expiry Date" childAlign="center" value={newCoupon.expiryDate} onChange={(value) => setNewCoupon({...newCoupon, expiryDate: value})} />
        </Box>
      </InlineStack>
      <InlineStack gap="400">
        <Box paddingBlock="400" width="586px" height="586px">
        <TextField type="text" name="usage" placeholder="Usage Limits" childAlign="center" value={newCoupon.usage} onChange={(value) => setNewCoupon({...newCoupon, usage: value})} />
        </Box>
        <Box paddingBlockStart="400" width="284px">
          <Button variant="primary" onClick={handleSaveNewCoupon}>Save</Button>
          <Button onClick={handleCancelButton}>Cancel</Button>
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
