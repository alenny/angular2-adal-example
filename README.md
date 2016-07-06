# angular2-adal-example

This is an Angular2 single-page application to demonstrate how to use <a href="https://github.com/alenny/angular2-adal">angular2-adal</a> to enable single-sign-on authentication against Microsoft Windows Azure AD.

### Setup and run the example 

1. Create an Azure AD on Azure Portal.
2. Create or add some users to the AD.
3. Add an application ('my organization is developing') to the AD with the properties as the below:
   - Name: any
   - Type: Web Application and/or Web API
   - Sign-on URL: http://localhost:3002/
   - App ID URL: http://myapp/localhost-3002
4. When creating your app successfully, go to the 'Configure' page of your app, make sure 'User assignment required to access app' is 'NO'.
5. Copy 'Client ID' (a GUID) on the 'Configure' page and remember it.
6. Clone this repository to your local machine.
7. Go to the 'src/app/services' directory and rename 'secret.service.ts.template' to 'secret.service.ts'.
8. Edit 'secret.service.ts', replacing the 'tenant' value by your AD name (should be a complete domain name, e.g. myad.onmicrosoft.com); replacing the 'clientId' value by your app's client ID.
9. Run 'npm install'.
10. Run 'gulp build'.
11. Run 'npm start' and wait for the 'welcome' page to pop up.

### How example works like

1. First you will see the 'welcome' page which does not require any user identity.
<img src="https://github.com/alenny/angular2-adal-example/blob/master/pics/welcome.png?raw=true"></img>
2. If you click 'login', you will be redirected to the Azure AD login page.
<img src="https://github.com/alenny/angular2-adal-example/blob/master/pics/login.png?raw=true"></img>
3. When you login successfully, you will be redirected back to the 'home' page which requires a valid user identity.
<img src="https://github.com/alenny/angular2-adal-example/blob/master/pics/home.png?raw=true"></img>
4. If you click 'logout', you will be redirected to the Azure AD logout page, and then redirected back to the 'welcome' page automatically after several seconds.
<img src="https://github.com/alenny/angular2-adal-example/blob/master/pics/signout.png?raw=true"></img>
5. Note if you try to access the 'home' page without a valid identity, you will be redirected to the 'welcome' page.



