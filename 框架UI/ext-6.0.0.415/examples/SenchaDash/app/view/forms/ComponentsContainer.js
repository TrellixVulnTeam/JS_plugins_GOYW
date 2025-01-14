/*
 * File: app/view/forms/ComponentsContainer.js
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

Ext.define('SenchaDash.view.forms.ComponentsContainer', {
    extend: 'Ext.container.Container',
    alias: 'widget.formscomponentscontainer',

    requires: [
        'SenchaDash.view.forms.ComponentsContainerViewModel',
        'Ext.form.Panel',
        'Ext.form.field.Tag',
        'Ext.form.field.Time',
        'Ext.form.field.Date',
        'Ext.form.field.HtmlEditor'
    ],

    viewModel: {
        type: 'formsgcvm'
    },
    cls: 'coditas-forms-page',
    renderData: [
        {
            id: 10,
            value: 'Automobile'
        },
        {
            id: 24,
            value: 'Autocomplete'
        }
    ],

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
                                    xtype: 'form',
                                    cls: 'form-panel',
                                    height: 135,
                                    ui: 'widget-panel',
                                    bodyPadding: 20,
                                    title: 'Sencha Tags Input',
                                    layout: {
                                        type: 'vbox',
                                        align: 'stretch'
                                    },
                                    items: [
                                        {
                                            xtype: 'tagfield',
                                            margin: '-10 0 10 0',
                                            fieldLabel: 'Sencha Tags Input',
                                            labelAlign: 'top',
                                            displayField: 'valueToShow',
                                            valueField: 'identifier',
                                            bind: {
                                                store: '{tagFieldStore}'
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
                    cls: 'right-part',
                    items: [
                        {
                            xtype: 'container',
                            layout: 'fit',
                            items: [
                                {
                                    xtype: 'form',
                                    cls: 'form-panel',
                                    height: 135,
                                    ui: 'widget-panel',
                                    bodyPadding: 20,
                                    title: 'Sencha Timepicker',
                                    layout: {
                                        type: 'hbox',
                                        align: 'stretch'
                                    },
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            flex: 1,
                                            margin: '-10 10 10 0',
                                            width: 240,
                                            fieldLabel: 'Text Input',
                                            labelAlign: 'top',
                                            inputType: 'time'
                                        },
                                        {
                                            xtype: 'timefield',
                                            flex: 1,
                                            margin: '-10 0 10 0',
                                            fieldLabel: 'Component',
                                            labelAlign: 'top'
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
                                    xtype: 'form',
                                    cls: 'form-panel',
                                    ui: 'widget-panel',
                                    bodyPadding: '20 20 10 20',
                                    title: 'Chosen',
                                    layout: {
                                        type: 'vbox',
                                        align: 'stretch'
                                    },
                                    items: [
                                        {
                                            xtype: 'combobox',
                                            flex: 1,
                                            fieldLabel: 'Single select',
                                            labelAlign: 'top',
                                            displayField: 'valueToShow',
                                            valueField: 'identifier',
                                            bind: {
                                                store: '{tagFieldStoreNew}'
                                            },
                                            margin: '-10 0 10 0'
                                        },
                                        {
                                            xtype: 'tagfield',
                                            fieldLabel: 'Multiple selects',
                                            labelAlign: 'top',
                                            displayField: 'valueToShow',
                                            valueField: 'identifier',
                                            bind: {
                                                store: '{tagFieldStoreMulti}'
                                            },
                                            margin: '-10 0 10 0'

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
                                    ui: 'widget-panel',
                                    bodyPadding: '20 20 10 20',
                                    title: 'Sencha Datepicker',
                                    layout: {
                                        type: 'vbox',
                                        align: 'stretch'
                                    },
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            flex: 1,
                                            fieldLabel: 'Text Input',
                                            labelAlign: 'top',
                                            inputType: 'date',
                                            emptyText: 'Name',
                                            margin: '-10 0 10 0'

                                        },
                                        {
                                            xtype: 'datefield',
                                            flex: 1,
                                            margin: '-10 0 10 0',
                                            fieldLabel: 'Component',
                                            labelAlign: 'top',
                                            editable: false
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
            cls: 'responsive-page-row',
            layout: 'anchor',
            items: [
                {
                    xtype: 'container',
                    cls: 'left-part',
                    items: [
                        {
                            xtype: 'container',
                            layout: 'fit'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    cls: 'right-part',
                    items: [
                        {
                            xtype: 'container',
                            layout: 'fit'
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'form',
            ui: 'widget-panel',
            bodyPadding: '18 20 10 20',
            title: 'Editor',
            items: [
                {
                    xtype: 'htmleditor',
                    anchor: '100%',
                    height: 280,
                    labelAlign: 'top'
                }
            ]
        }
    ]

});