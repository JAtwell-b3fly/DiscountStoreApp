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

export default function SelectedDiscountCodePage() {

  const [editCode, setEditCode] = useState(false);

  const handleEditCode = () => {
    setEditCode(true);
  }

  const handleSave = () => {
    setEditCode(false);
  }

  const handleCancel = () => {
    setEditCode(false);
  }

  return (
    <Page fullWidth>
      <Text as="h1" variant="headingMd">
        Discount Code View
      </Text>

      <BlockStack gap="400">
      {editCode ? (
        <>
        <div
        style={{
          width: '586px',
        }}
      >
        <Box padding="400" width="586px" background="bg-fill-info">
          <TextField type="text" placeholder="Code Name" childAlign="center"/>
        </Box>
      </div>
      <InlineStack gap="400">
        <Box paddingInline="400" width="284px" background="bg-fill-info">
        <TextField type="text" placeholder="Discount Code Value" childAlign="center"/>
        </Box>
        <Box paddingInlineStart="400" width="284px" background="bg-fill-info">
        <TextField type="text" placeholder="Expiry Date" childAlign="center"/>
        </Box>
      </InlineStack>
      <InlineStack gap="400">
        <Box paddingBlock="400" width="586px" height="586px" background="bg-fill-info">
        <TextField type="text" placeholder="Usage Limits" childAlign="center"/>
        </Box>
        <Box paddingBlockStart="400" width="284px" background="bg-fill-info">
          <Button onClick={handleSave} variant="primary">Save</Button>
          <Button onClick={handleCancel}>Cancel</Button>
        </Box>
      </InlineStack>
        </>
      ):(
        <>
        <div
        style={{
          width: '586px',
        }}
      >
        <Box padding="400" width="586px">
          <Text childAlign="center">Code Name</Text>
        </Box>
      </div>
      <InlineStack gap="400">
        <Box paddingInline="400" width="284px">
        <Text childAlign="center">Discount Code Value</Text>
        </Box>
        <Box paddingInlineStart="400" width="284px">
        <Text childAlign="center">Expiry Date</Text>
        </Box>
      </InlineStack>
      <InlineStack gap="400">
        <Box paddingBlock="400" width="586px" height="586px">
        <Text childAlign="center">Usage Limits</Text>
        </Box>
        <Box paddingBlockStart="400" width="284px">
          <Button onClick={handleEditCode} variant="primary">Edit</Button>
          <Button variant="primary" tone="critical">Delete</Button>
        </Box>
      </InlineStack>
        </>
      )}
    </BlockStack>
      
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
