# Payload Plugin Forms

The Payload Plugin Forms is a powerful tool designed to enhance your experience with Payload, a JavaScript-based open-source headless CMS. This plugin provides a seamless way to create, manage, and integrate forms into your Payload applications.

## Features

1. **Form Builder**: Easily create forms with a variety of input types, including text, number, date, and more. Customize each field according to your needs.

2. **Validation**: Ensure the data you collect is accurate with built-in validation rules. You can specify required fields, minimum and maximum values, and more.

3. **Integration**: The plugin integrates smoothly with Payload, allowing you to manage your forms directly from the Payload admin panel.

4. **Customization**: With the Payload Plugin Forms, you have the flexibility to customize the look and feel of your forms to match your brand.

## Getting Started

To get started with the Payload Plugin Forms, first install the plugin via npm:

```bash
npm install @art-design-digital/payload-plugin-forms
```

Then, import and use the plugin in your Payload config:

```bash
const formPlugin = require('payload-plugin-forms');

module.exports = {
  plugins: [formPlugin({ enabled: true })],
  // ... rest of your Payload config
};
```

## Questions
For any questions or issues, please contact art&design digital.
