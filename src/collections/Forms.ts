import { CollectionConfig } from 'payload/types'
import { translations } from '../translations/forms'
import { Locale, Widths } from '../types'

const widths: Widths = {
  full: '1/1',
  half: '1/2',
  onequarter: '1/4',
  threequarter: '3/4',
}

const Forms: CollectionConfig = {
  slug: 'forms',
  labels: {
    singular: translations.labels.singular,
    plural: translations.labels.plural,
  },
  admin: {
    useAsTitle: 'name',
    description: translations.admin.description,
    defaultColumns: ['name'],
  },
  fields: [
    {
      type: 'text',
      name: 'name',
      label: translations.fields.name.label,
      required: true,
      admin: {
        description: translations.fields.name.admin.description,
      },
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: translations.fields.generalTab.label,
          description: translations.fields.generalTab.description,
          fields: [
            {
              type: 'group',
              label: translations.fields.generalTab.fields.senderReceiverGroup.label,
              name: 'senderReceiverGroup',
              admin: {
                description:
                  translations.fields.generalTab.fields.senderReceiverGroup.admin.description,
              },
              fields: [
                {
                  type: 'text',
                  name: 'subject',
                  label:
                    translations.fields.generalTab.fields.senderReceiverGroup.fields.subject.label,
                  required: true,
                  admin: {
                    description:
                      translations.fields.generalTab.fields.senderReceiverGroup.fields.subject.admin
                        .description,
                  },
                },
                {
                  type: 'email',
                  name: 'receiver',
                  label:
                    translations.fields.generalTab.fields.senderReceiverGroup.fields.receiver.label,
                  required: true,
                  admin: {
                    description:
                      translations.fields.generalTab.fields.senderReceiverGroup.fields.receiver
                        .admin.description,
                  },
                },
                {
                  type: 'row',
                  fields: [
                    {
                      type: 'email',
                      name: 'senderMail',
                      label:
                        translations.fields.generalTab.fields.senderReceiverGroup.fields.row.fields
                          .senderMail.label,
                      required: true,
                      admin: {
                        description:
                          translations.fields.generalTab.fields.senderReceiverGroup.fields.row
                            .fields.senderMail.admin.description,
                      },
                    },
                    {
                      type: 'text',
                      name: 'senderName',
                      label:
                        translations.fields.generalTab.fields.senderReceiverGroup.fields.row.fields
                          .senderName.label,
                      required: true,
                      admin: {
                        description:
                          translations.fields.generalTab.fields.senderReceiverGroup.fields.row
                            .fields.senderName.admin.description,
                      },
                    },
                  ],
                },
              ],
            },
            {
              type: 'group',
              label: translations.fields.generalTab.fields.feedbackGroup.label,
              name: 'feedbackGroup',
              admin: {
                description: translations.fields.generalTab.fields.feedbackGroup.admin.description,
              },
              fields: [
                {
                  type: 'text',
                  name: 'submitLabel',
                  label:
                    translations.fields.generalTab.fields.feedbackGroup.fields.submitLabel.label,
                  required: true,
                  defaultValue: ({ locale }: { locale: Locale }) =>
                    `${translations.fields.generalTab.fields.feedbackGroup.fields.submitLabel.defaultValue[locale]}`,
                  localized: true,
                },
                {
                  type: 'text',
                  name: 'successMessage',
                  label:
                    translations.fields.generalTab.fields.feedbackGroup.fields.successMessage.label,
                  required: true,
                  defaultValue: ({ locale }: { locale: Locale }) =>
                    `${translations.fields.generalTab.fields.feedbackGroup.fields.successMessage.defaultValue[locale]}`,
                  localized: true,
                },
                {
                  type: 'text',
                  name: 'errorMessage',
                  label:
                    translations.fields.generalTab.fields.feedbackGroup.fields.errorMessage.label,
                  required: true,
                  defaultValue: ({ locale }: { locale: Locale }) =>
                    `${translations.fields.generalTab.fields.feedbackGroup.fields.errorMessage.defaultValue[locale]}`,
                  localized: true,
                },
              ],
            },
          ],
        },
        {
          label: translations.fields.formFieldsTab.label,
          description: translations.fields.formFieldsTab.description,
          fields: [
            {
              type: 'array',
              name: 'formFields',
              label: translations.fields.formFieldsTab.fields.formFields.label,
              minRows: 1,
              labels: {
                singular: translations.fields.formFieldsTab.fields.formFields.labels.singular,
                plural: translations.fields.formFieldsTab.fields.formFields.labels.plural,
              },
              admin: {
                description: translations.fields.formFieldsTab.fields.formFields.admin.description,
                initCollapsed: true,
                components: {
                  RowLabel: ({ data }: any) => {
                    return data?.label + ' (' + widths[data?.width] + ')'
                  },
                },
              },
              fields: [
                {
                  type: 'checkbox',
                  name: 'required',
                  label: translations.fields.formFieldsTab.fields.formFields.fields.required.label,
                },
                {
                  type: 'select',
                  name: 'fieldType',
                  required: true,
                  label: translations.fields.formFieldsTab.fields.formFields.fields.fieldType.label,
                  defaultValue: 'text',
                  options: [
                    {
                      label:
                        translations.fields.formFieldsTab.fields.formFields.fields.fieldType.options
                          .text.label,
                      value: 'text',
                    },
                    {
                      label:
                        translations.fields.formFieldsTab.fields.formFields.fields.fieldType.options
                          .email.label,
                      value: 'email',
                    },
                    {
                      label:
                        translations.fields.formFieldsTab.fields.formFields.fields.fieldType.options
                          .number.label,
                      value: 'number',
                    },
                    {
                      label:
                        translations.fields.formFieldsTab.fields.formFields.fields.fieldType.options
                          .textarea.label,
                      value: 'textarea',
                    },
                    {
                      label:
                        translations.fields.formFieldsTab.fields.formFields.fields.fieldType.options
                          .checkbox.label,
                      value: 'checkbox',
                    },
                    {
                      label:
                        translations.fields.formFieldsTab.fields.formFields.fields.fieldType.options
                          .date.label,
                      value: 'date',
                    },
                    {
                      label:
                        translations.fields.formFieldsTab.fields.formFields.fields.fieldType.options
                          .time.label,
                      value: 'time',
                    },
                    {
                      label:
                        translations.fields.formFieldsTab.fields.formFields.fields.fieldType.options
                          .datetime.label,
                      value: 'datetime',
                    },
                    {
                      label:
                        translations.fields.formFieldsTab.fields.formFields.fields.fieldType.options
                          .dropdown.label,
                      value: 'dropdown',
                    },
                  ],
                },
                {
                  type: 'select',
                  name: 'width',
                  required: true,
                  label: translations.fields.formFieldsTab.fields.formFields.fields.width.label,
                  defaultValue: 'full',
                  admin: {
                    description:
                      translations.fields.formFieldsTab.fields.formFields.fields.width.admin
                        .description,
                  },
                  options: [
                    {
                      label: '1/1',
                      value: 'full',
                    },
                    {
                      label: '1/2',
                      value: 'half',
                    },
                    {
                      label: '1/4',
                      value: 'onequarter',
                    },
                    {
                      label: '3/4',
                      value: 'threequarter',
                    },
                  ],
                },
                {
                  type: 'row',
                  fields: [
                    {
                      type: 'text',
                      name: 'label',
                      label:
                        translations.fields.formFieldsTab.fields.formFields.fields.row.label.label,
                      required: true,
                      admin: {
                        description:
                          translations.fields.formFieldsTab.fields.formFields.fields.row.label.admin
                            .description,
                        width: '50%',
                      },
                      localized: true,
                    },
                    {
                      type: 'text',
                      name: 'description',
                      label:
                        translations.fields.formFieldsTab.fields.formFields.fields.row.description
                          .label,
                      admin: {
                        description:
                          translations.fields.formFieldsTab.fields.formFields.fields.row.description
                            .admin.description,
                        width: '50%',
                        condition: (_, siblingData) => {
                          return [
                            'textarea',
                            'text',
                            'email',
                            'number',
                            'date',
                            'time',
                            'datetime',
                            'dropdown',
                          ].includes(siblingData.fieldType)
                        },
                      },
                      localized: true,
                    },
                  ],
                },
                {
                  type: 'array',
                  name: 'options',
                  label: translations.fields.formFieldsTab.fields.formFields.fields.options.label,
                  admin: {
                    description:
                      translations.fields.formFieldsTab.fields.formFields.fields.options.admin
                        .description,
                    components: {
                      RowLabel: ({ data }: any) => {
                        return data?.value
                      },
                    },
                    condition: (_, siblingData) => {
                      return ['dropdown'].includes(siblingData.fieldType)
                    },
                  },
                  fields: [
                    {
                      type: 'text',
                      name: 'value',
                      label:
                        translations.fields.formFieldsTab.fields.formFields.fields.options.fields
                          .value.label,
                      required: true,
                      admin: {
                        description:
                          translations.fields.formFieldsTab.fields.formFields.fields.options.fields
                            .value.admin.description,
                      },
                      localized: true,
                    },
                  ],
                },
                {
                  type: 'checkbox',
                  name: 'emptyDefault',
                  label:
                    translations.fields.formFieldsTab.fields.formFields.fields.emptyDefault.label,
                  admin: {
                    description:
                      translations.fields.formFieldsTab.fields.formFields.fields.emptyDefault.admin
                        .description,
                    condition: (_, siblingData) => {
                      return ['dropdown'].includes(siblingData.fieldType)
                    },
                  },
                },
                {
                  type: 'row',
                  fields: [
                    {
                      type: 'text',
                      name: 'placeholder',
                      label:
                        translations.fields.formFieldsTab.fields.formFields.fields.placeholderRow
                          .fields.placeholder.label,
                      admin: {
                        description:
                          translations.fields.formFieldsTab.fields.formFields.fields.placeholderRow
                            .fields.placeholder.admin.description,
                        condition: (_, siblingData) => {
                          return ['textarea', 'text', 'email', 'number'].includes(
                            siblingData.fieldType,
                          )
                        },
                      },
                      localized: true,
                    },
                    {
                      type: 'text',
                      name: 'default',
                      label:
                        translations.fields.formFieldsTab.fields.formFields.fields.placeholderRow
                          .fields.default.label,
                      admin: {
                        description:
                          translations.fields.formFieldsTab.fields.formFields.fields.placeholderRow
                            .fields.default.admin.description,
                        condition: (_, siblingData) => {
                          return (
                            ['textarea', 'text', 'email', 'number', 'dropdown'].includes(
                              siblingData.fieldType,
                            ) && !siblingData.emptyDefault
                          )
                        },
                      },
                      localized: true,
                    },
                  ],
                },
                {
                  type: 'row',
                  fields: [
                    {
                      type: 'number',
                      name: 'minLength',
                      label:
                        translations.fields.formFieldsTab.fields.formFields.fields.lengthRow.fields
                          .minLength.label,
                      admin: {
                        width: '50%',
                        condition: (_, siblingData) => {
                          return ['textarea', 'text', 'email'].includes(siblingData.fieldType)
                        },
                      },
                    },
                    {
                      type: 'number',
                      name: 'maxLength',
                      label:
                        translations.fields.formFieldsTab.fields.formFields.fields.lengthRow.fields
                          .maxLength.label,
                      admin: {
                        width: '50%',
                        condition: (_, siblingData) => {
                          return ['textarea', 'text', 'email'].includes(siblingData.fieldType)
                        },
                      },
                    },
                  ],
                },
                {
                  type: 'row',
                  fields: [
                    {
                      type: 'number',
                      name: 'minValue',
                      label:
                        translations.fields.formFieldsTab.fields.formFields.fields.valueRow.fields
                          .minValue.label,
                      admin: {
                        width: '50%',
                        condition: (_, siblingData) => {
                          return ['number'].includes(siblingData.fieldType)
                        },
                      },
                    },
                    {
                      type: 'number',
                      name: 'maxValue',
                      label:
                        translations.fields.formFieldsTab.fields.formFields.fields.valueRow.fields
                          .maxValue.label,
                      admin: {
                        width: '50%',
                        condition: (_, siblingData) => {
                          return ['number'].includes(siblingData.fieldType)
                        },
                      },
                    },
                  ],
                },
                {
                  type: 'row',
                  fields: [
                    {
                      type: 'number',
                      name: 'rows',
                      label:
                        translations.fields.formFieldsTab.fields.formFields.fields.textareaRow
                          .fields.rows.label,
                      defaultValue: 5,
                      admin: {
                        width: '50%',
                        description:
                          translations.fields.formFieldsTab.fields.formFields.fields.textareaRow
                            .fields.rows.admin.description,
                        condition: (_, siblingData) => {
                          return ['textarea'].includes(siblingData.fieldType)
                        },
                      },
                    },
                    {
                      type: 'number',
                      name: 'cols',
                      label:
                        translations.fields.formFieldsTab.fields.formFields.fields.textareaRow
                          .fields.cols.label,
                      admin: {
                        width: '50%',
                        description:
                          translations.fields.formFieldsTab.fields.formFields.fields.textareaRow
                            .fields.cols.admin.description,
                        condition: (_, siblingData) => {
                          return ['textarea'].includes(siblingData.fieldType)
                        },
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}

export default Forms
