export const Enterprise_Structure: any[] = [
    {SNo: 1, Design: 'How many countries are in scope', Inputs: 'No of countries in scope',type:'link'},
    {SNo: 2, Design: 'How many Legal entities per country', Inputs: 'No of legal entities in scope',type:'link'},
    {SNo: 3, Design: 'Select currency to be used for Group Reporting', Inputs: 'Group Currency',type:'dropdown',options:['USD','INR','CAD']},
    {SNo: 4, Design: 'How many currencies type to be used', Inputs: 'Accounting Principles',type:'link'},
    {SNo: 5, Design: 'Financial Statements are required in how many Accounting Principles', Inputs: 'Currencies',type:'link'},
    {SNo: 6, Design: 'What currency to be used for local Reporting', Inputs: 'Company Code Currencies',type:'link'}
  ];
  

export const manageInvoicesQuestions:any[]=[
  {questionNo:1,question:'Do you use block invoice functionality?',type:'radio',options:['Yes','No'],conditional:true,conditionType:'extraQuestion',selecionTrigger:'Yes',
  conditionData:[{nestedQuestion:true,question:'Please Specify the block Invoice functionality:',type:'checkbox',options:['AP Duplicate invoice','AP PO invoice block','Invoice verification','AP Other reason'],conditional:true,conditionType:'extraQuestion',selecionTrigger:'AP Other reason',
  conditionData:[{nestedQuestion:true,question:'Name the Invoice:',type:'formfield-text',conditional:false}]
}],
},
  {questionNo:2,question:'What are the modes of business communication used for payments to vendors?',type:'checkbox',options:['Account statement','Open Item List','Failed payments','Bill of exchange charges statement','Cash document','Others',],conditional:true,conditionType:'extraQuestion',selecionTrigger:'Others',
  conditionData:[{nestedQuestion:true,question:'Name the Correspondence Type:',type:'formfield-text',conditional:false}]
},
  {questionNo:3,question:'Are there Intercompany Payables?',type:'radio',options:['Yes','No'],conditional:true,conditionType:'extraQuestion',selecionTrigger:'Yes',
  conditionData:[{nestedQuestion:true,question:'How many entities use intercompany payable?',type:'formfield-number',conditional:false},]
},
  {questionNo:4,question:'Select Type of Invoices used:',type:'checkbox',options:['PO Invoices','Non-Po Invoices','Credit Memo','Debit Memo','Others',],conditional:true,conditionType:'extraQuestion',selecionTrigger:'Others',
  conditionData:[{nestedQuestion:true,question:'Name the Invoice:',type:'formfield-text',conditional:false}]
},
  {questionNo:5,question:'How many bank accounts do you have for procurement?',type:'formfield-number',conditional:true,conditionType:'arrayGeneration',selecionTrigger:'numberInput',
  conditionData:[{nestedQuestion:true,question:'Name them:',type:'formfield-text',conditional:false}]
}
]

export const processPaymentsQuestions:any[]=[
  {questionNo:1,question:'What are the payment methods used to pay to vendors?',type:'checkbox',options:['SWIFT','NEFT','Cheque','SEPA','Manual Payment','Bill of Exchange'],conditional:true},
  {questionNo:2,question:'What are the payment terms used for Vendor payments?',type:'dropdown',options:['Upto 15 Day > 10% Discount', '15 Days to 30 Days > 5% Discount', 'Beyond 30 Days > 0% Discount', 'Business Define > Yes'],conditional:true},
  {questionNo:3,question:'Do you have terms of payment for Installment Payment?',type:'radio',options:['Yes','No'],conditional:true},
  {questionNo:4,question:'Is Payment Difference Allowed?',type:'radio',options:['Yes','No'],conditional:true},
  {questionNo:5,question:'Are Down payments Used?',type:'radio',options:['Yes','No'],conditional:true},
  {questionNo:6,question:'Is Approval Required for Release of Payment?',type:'radio',options:['Yes','No'],conditional:true},
  {questionNo:7,question:'Is there a Payment with reference to PO Invoice?',type:'radio',options:['Yes','No'],conditional:false},
  {questionNo:8,question:'Is there a Payment with reference to Non-PO Invoice?',type:'radio',options:['Yes','No'],conditional:false},
  {questionNo:9,question:'Is Approval Workflow used for Payment?',type:'radio',options:['Yes','No'],conditional:false},
  {questionNo:10,question:'Are Payment block used?',type:'radio',options:['Yes','No'],conditional:true},
]

export const reportingQuestions:any[]=[
  {questionNo:1,question:'Do you want reporting by Dimensions ?',type:'radio',options:['Yes','No'],conditional:true}
]