# dynamic-form

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/dynamic-form)

AppComponent  -> Parent Component which control the action events
DynamicFieldsComponent -> Child Component where we're maintaining the Dynamic Form Fields

This app includes the dynamic form fields and dynamic styles (colors, buttons) as well.
And, error handling controlled by ErrorInterceptor which will supports to control all the error codes at one place.
AppInterceptor has created to manage the API calls which access generic params when hit the http calls.

Dynamic form fields:
  1. my-form.json is the file which holds all the form controls. 
  2. For each form elements, we can set the name, label, validators, validation error message, placeholders etc..,

View Child:
  1. In AppComponent loads the dynamic-form fileds and passed the json object to DynamicFieldsComponent and controlled the form event changes in AppComponent using @ViewChild.

  2. To prove the validation, Submit buttom  will be enabled when the required form fields are correctly filled and the Reset button clears the Child component form values.

Error Validation:
  1. Form fileds validation given an example for User ID form element and display the error messages when form filed is dirty.

  2. In terms of styles, used the pre-processor to adhere the styles.

HTTP Request:
  - Used the window.alert just to show the http error messages when the data passes to http call when trigger the submit button.
  
ng-content:
  - used in ng-content branch on the same repo as a initial version.. Will catchup when find time..
