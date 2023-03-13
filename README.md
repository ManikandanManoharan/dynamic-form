# dynamic-form

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/dynamic-form)

The action events are controlled by the AppComponent-> parent component
Where we retain the Dynamic Form Fields is in the DynamicFieldsComponent -> Child Component.

- The dynamic form fields and dynamic styles (colours, buttons) are both built into this app.
- Moreover, ErrorInterceptor, which permits controlling all error codes in one location, controls error handling.
- AppInterceptor was developed to control API calls that, when hit by http requests, access generic parameters.

Dynamic form fields:
  1. my-form.json, The file containing all of the form controls. 
  2. We could set the name, label, validators, validation error message, placeholders, etc. for each form element.

View Child:
  1. The AppComponent loads the dynamic form fields, passes the JSON data to the DynamicFieldsComponent, and uses the @ViewChild annotated to handle form event modifications.

  2.  To demonstrate validation, the Submit button will turn on after all required form fields have been correctly filled in and the Child component form values have been reset when trigger Reset Button.

Error Validation:
  1. Indicating error messages when a form field is dirty and provided an example for the User ID form element.
  
Common Styles:
 - When it comes to styles, apply the styles using the pre-processor.

HTTP Request:
  - Uses window.alert just to display HTTP error messages when data is passed to an HTTP request and the submit button is pressed.
  
ng-content:
  - Utilised in the same repository's ng-content branch as the original version. I'll catch up when I have the time.


Run the application:
  Pre-requesits:
    angular cli: 15.1.0-next.2
    Angular: 15.2.2
    Node: 16.17.1 or above
    npm: 8.15.0 or above
  To run in local:
    1. Run the install command "npm i" or "npm install"
    2. Now Run the app in local with command, "npm run local"
    
    
