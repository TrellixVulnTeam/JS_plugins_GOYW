/*
 * File: app/view/forms/ValidationContainer.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 5.0.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 5.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('SenchaDash.view.forms.ValidationContainer', {
    extend: 'Ext.container.Container',
    alias: 'widget.formsvalidationcontainer',

    requires: [
        'SenchaDash.view.forms.ValidationContainerViewModel',
        'SenchaDash.view.forms.ValidationContainerViewController',
        'Ext.tab.Panel',
        'Ext.tab.Tab',
        'Ext.toolbar.Spacer',
        'Ext.form.field.ComboBox',
        'Ext.form.field.Date',
        'Ext.form.Panel',
        'Ext.form.RadioGroup',
        'Ext.form.field.Radio'
    ],

    config: {
        scrollable: {
            disabled: true
        }
    },

    controller: 'formsvalidationcontainer',
    viewModel: {
        type: 'formsvalidationcontainer'
    },
    cls: 'coditas-forms-page',

    items: [
        {
            xtype: 'container',
            cls: 'responsive-page-row',
            layout: 'anchor',
            items: [
                {
                    xtype: 'container',
                    cls: 'left-part',
                    items: [
                        {
                            xtype: 'container',
                            layout: 'fit',
                            items: [
                                {
                                    xtype: 'tabpanel',
                                    cls: 'validation-top-tab-panel',
                                    height: 280,
                                    minHeight: 280,
                                    ui: 'widget-panel',
                                    activeTab: 0,
                                    items: [
                                        {
                                            xtype: 'panel',
                                            cls: 'form-panel',
                                            itemId: 'informationForm',
                                            bodyPadding: '15 15 5 15',
                                            title: 'Text',
                                            layout: {
                                                type: 'vbox',
                                                align: 'stretch'
                                            },
                                            items: [
                                                {
                                                    xtype: 'fieldcontainer',
                                                    flex: 1,
                                                    width: 400,
                                                    labelAlign: 'top',
                                                    layout: {
                                                        type: 'vbox',
                                                        align: 'stretch'
                                                    },
                                                    items: [
                                                        {
                                                            xtype: 'textfield',
                                                            flex: 1,
                                                            itemId: 'fullnameTextField',
                                                            fieldLabel: 'Fullname',
                                                            labelAlign: 'top',
                                                            msgTarget: 'side',
                                                            name: 'fullnameTextField',
                                                            allowBlank: false,
                                                            emptyText: 'Fullname'
                                                        },
                                                        {
                                                            xtype: 'textfield',
                                                            flex: 1,
                                                            itemId: 'companyTextField',
                                                            fieldLabel: 'Company',
                                                            labelAlign: 'top',
                                                            msgTarget: 'side',
                                                            allowBlank: false,
                                                            emptyText: 'Company'
                                                        },
                                                        {
                                                            xtype: 'container',
                                                            layout: {
                                                                type: 'hbox',
                                                                align: 'stretch'
                                                            },
                                                            items: [
                                                                {
                                                                    xtype: 'tbspacer',
                                                                    flex: 1
                                                                },
                                                                {
                                                                    xtype: 'button',
                                                                    cls: 'form-panel-button',
                                                                    text: 'Validate',
                                                                    listeners: {
                                                                        click: 'onInformationFormButtonClick'
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'panel',
                                            cls: 'form-panel',
                                            bodyPadding: '15 15 5 15',
                                            title: 'Dropdown',
                                            layout: {
                                                type: 'vbox',
                                                align: 'stretch'
                                            },
                                            items: [
                                                {
                                                    xtype: 'fieldcontainer',
                                                    flex: 1,
                                                    width: 400,
                                                    labelAlign: 'top',
                                                    layout: {
                                                        type: 'vbox',
                                                        align: 'stretch'
                                                    },
                                                    items: [                                                        
                                                        {
                                                            xtype: 'combobox',
                                                            flex: 1,
                                                            fieldLabel: 'Country',
                                                            labelAlign: 'top',
                                                            msgTarget: 'side',
                                                            allowBlank: false,
                                                            displayField: 'valueToShow',
                                                            valueField: 'identifier',
                                                            bind: {
                                                                store: '{tagFieldStore}'
                                                            }
                                                        },
                                                        {
                                                            xtype: 'datefield',
                                                            flex: 1,
                                                            itemId: 'vformDatePicker',
                                                            fieldLabel: 'Date of Birth',
                                                            labelAlign: 'top',
                                                            msgTarget: 'side',
                                                            allowBlank: false,
                                                            allowOnlyWhitespace: false
                                                        },
                                                        {
                                                            xtype: 'container',
                                                            layout: {
                                                                type: 'hbox',
                                                                align: 'stretch'
                                                            },
                                                            items: [
                                                                {
                                                                    xtype: 'tbspacer',
                                                                    flex: 1
                                                                },
                                                                {
                                                                    xtype: 'button',
                                                                    cls: 'form-panel-button',
                                                                    text: 'Validate',
                                                                    listeners: {
                                                                        click: 'onAddressFormButtonClick'
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'container',
                    cls: 'right-part',
                    items: [
                        {
                            xtype: 'container',
                            layout: 'fit',
                            items: [
                                {
                                    xtype: 'form',
                                    cls: 'form-panel',
                                    height: 280,
                                    minHeight: 280,
                                    ui: 'widget-panel',
                                    bodyPadding: 15,
                                    title: 'Checkbox And Radio - Under',
                                    layout: {
                                        type: 'vbox',
                                        align: 'stretch'
                                    },
                                    items: [
                                        {
                                            xtype: 'tbspacer',
                                            flex: 1
                                        },
                                        {
                                            xtype: 'fieldcontainer',
                                            flex: 0.8,
                                            height: 50,
                                            margin: '-20 0 0 0',
                                            minHeight: 50,
                                            width: 400,
                                            labelAlign: 'top',
                                            items: [
                                                {
                                                    xtype: 'radiogroup',
                                                    itemId: 'validationFormRadioButtonGroup',
                                                    modelValidation: true,
                                                    width: 400,
                                                    fieldLabel: 'Member type',
                                                    msgTarget: 'under',
                                                    allowBlank: false,
                                                    layout: {
                                                        type: 'hbox',
                                                        align: 'stretch'
                                                    },
                                                    items: [
                                                        {
                                                            xtype: 'radiofield',
                                                            flex: 1,
                                                            padding: '0 20 0 0',
                                                            name: 'memberType',
                                                            boxLabel: 'Free'
                                                        },
                                                        {
                                                            xtype: 'radiofield',
                                                            flex: 1,
                                                            padding: '0 20',
                                                            name: 'memberType',
                                                            boxLabel: 'Personal'
                                                        },
                                                        {
                                                            xtype: 'radiofield',
                                                            flex: 1,
                                                            padding: '0 20',
                                                            name: 'memberType',
                                                            boxLabel: 'Business'
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'tbspacer',
                                            flex: 1
                                        },
                                        {
                                            xtype: 'fieldcontainer',
                                            flex: 1.2,
                                            height: 50,
                                            minHeight: 50,
                                            width: 400,
                                            labelAlign: 'top',
                                            items: [
                                                {
                                                    xtype: 'checkboxgroup',
                                                    itemId: 'skillsCheckboxGroup',
                                                    width: 400,
                                                    fieldLabel: 'Skill',
                                                    msgTarget: 'under',
                                                    allowBlank: false,
                                                    columns: 1,
                                                    layout: {
                                                        type: 'hbox',
                                                        align: 'stretch'
                                                    },
                                                    items: [
                                                        {
                                                            xtype: 'checkboxfield',
                                                            flex: 1,
                                                            padding: '0 20 0 0',
                                                            boxLabel: '.Net'
                                                        },
                                                        {
                                                            xtype: 'checkboxfield',
                                                            flex: 1,
                                                            padding: '0 20',
                                                            boxLabel: 'Java'
                                                        },
                                                        {
                                                            xtype: 'checkboxfield',
                                                            flex: 1,
                                                            padding: '0 20',
                                                            boxLabel: 'C/C++'
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'tbspacer',
                                            flex: 1
                                        },
                                        {
                                            xtype: 'container',
                                            cls: 'validate-button-container',
                                            margin: '10 0 0 0',
                                            minHeight: 32,
                                            layout: {
                                                type: 'hbox',
                                                align: 'stretch'
                                            },
                                            items: [
                                                {
                                                    xtype: 'tbspacer',
                                                    flex: 1
                                                },
                                                {
                                                    xtype: 'button',
                                                    cls: 'form-panel-button',
                                                    text: 'Submit',
                                                    listeners: {
                                                        click: 'onButtonClick'
                                                    }
                                                }
                                            ]
                                        }
                                    ],
                                    listeners: {
                                        afterrender: 'onFormAfterRender'
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'container',
            cls: 'responsive-page-row',
            layout: 'anchor',
            items: [
                {
                    xtype: 'container',
                    cls: 'right-part',
                    items: [
                        {
                            xtype: 'container',
                            layout: 'fit',
                            items: [
                                {
                                    xtype: 'form',
                                    cls: 'form-panel',
                                    height: 300,
                                    minHeight: 300,
                                    ui: 'widget-panel',
                                    bodyPadding: 15,
                                    title: 'Regular Expression -Titleaaa',
                                    layout: {
                                        type: 'vbox',
                                        align: 'stretch'
                                    },
                                    items: [
                                        {
                                            xtype: 'fieldcontainer',
                                            flex: 1,
                                            height: 150,
                                            labelAlign: 'top',
                                            layout: {
                                                type: 'vbox',
                                                align: 'stretch'
                                            },
                                            items: [
                                                {
                                                    xtype: 'textfield',
                                                    flex: 1,
                                                    itemId: 'emailTextField',
                                                    width: '100%',
                                                    fieldLabel: 'Email address',
                                                    msgTarget: 'title',
                                                    allowBlank: false,
                                                    emptyText: 'email',
                                                    vtype: 'email'
                                                },
                                                {
                                                    xtype: 'textfield',
                                                    flex: 1,
                                                    itemId: 'websiteTextField',
                                                    width: '100%',
                                                    fieldLabel: 'Website',
                                                    msgTarget: 'title',
                                                    allowBlank: false,
                                                    emptyText: 'http://',
                                                    vtype: 'url'
                                                },
                                                {
                                                    xtype: 'textfield',
                                                    flex: 1,
                                                    itemId: 'hexColorTextField',
                                                    width: '100%',
                                                    fieldLabel: 'Hex color',
                                                    msgTarget: 'title',
                                                    allowBlank: false,
                                                    emptyText: '#fff',
                                                    regex: /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
                                                    regexText: 'Must be in the format Hexadecimal'
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'container',

                                            layout: {
                                                type: 'hbox',
                                                align: 'stretch'
                                            },
                                            items: [
                                                {
                                                    xtype: 'tbspacer',
                                                    flex: 1
                                                },
                                                {
                                                    xtype: 'button',
                                                    cls: 'form-panel-button',
                                                    margin: '10 0 0 0',
                                                    text: 'Submit',
                                                    listeners: {
                                                        click: 'onValidateNumberFormButtonClick1'
                                                    }
                                                }
                                            ]
                                        }
                                    ],
                                    listeners: {
                                        afterrender: 'onNumberFieldFormAfterRender1'
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'container',
                    cls: 'right-part',
                    items: [
                        {
                            xtype: 'container',
                            layout: 'fit',
                            items: [
                                {
                                    xtype: 'form',
                                    cls: 'form-panel',
                                    height: 300,
                                    ui: 'widget-panel',
                                    bodyPadding: 15,
                                    title: 'Numeric - Qtip',
                                    layout: {
                                        type: 'vbox',
                                        align: 'stretch'
                                    },
                                    items: [
                                        {
                                            xtype: 'container',
                                            flex: 1,
                                            height: 150,
                                            layout: {
                                                type: 'vbox',
                                                align: 'stretch'
                                            },
                                            items: [
                                                {
                                                    xtype: 'numberfield',
                                                    flex: 1,
                                                    itemId: 'integerTextField',
                                                    fieldLabel: 'Integer',                                                    
                                                    emptyText: 'Integer',
                                                    allowDecimals: false,
                                                },
                                                {
                                                    xtype: 'numberfield',
                                                    flex: 1,
                                                    itemId: 'numericTextField',
                                                    fieldLabel: 'Decimal',                                                    
                                                    emptyText: 'Decimal with step 0.4',
                                                    allowDecimals: true,
                                                    decimalPrecision: 2,
                                                    step: 0.40,
                                                    minValue: 0.00
                                                },
                                                {
                                                    xtype: 'numberfield',
                                                    flex: 1,
                                                    itemId: 'rangeTextField',
                                                    fieldLabel: 'Range',                                                 
                                                    emptyText: 'Numbers 1-100',                                                   
                                                    maxValue: 100,
                                                    minValue: 0
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'container',
                                            layout: {
                                                type: 'hbox',
                                                align: 'stretch'
                                            },
                                            items: [
                                                {
                                                    xtype: 'tbspacer',
                                                    flex: 2
                                                },
                                                {
                                                    xtype: 'button',
                                                    cls: 'form-panel-button',
                                                    margin: '10 0 0 0',
                                                    text: 'Submit',
                                                    listeners: {
                                                        click: 'onValidateNumberFormButtonClick'
                                                    }
                                                }
                                            ]
                                        }
                                    ],
                                    listeners: {
                                        afterrender: 'onNumberFieldFormAfterRender'
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        }       
    ]

});