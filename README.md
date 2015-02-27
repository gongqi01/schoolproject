# schoolproject

Schoolproject is a simple web application built by Meteor(https://www.meteor.com/).

1. Why Meteor?

    - in pure JavaScript
    - that send data over the wire, rather than HTML
    - using your choice of popular open-source libraries
    - A great experience both on the web and as a phone or tablet app
    - Changes made by a user are instantly visible, without the unprofessional laggy feeling 
      that would result from waiting for a round trip to the server.

   Documentation is available at http://docs.meteor.com/.

2. Packages Used

   2.1 Javascript MV Framwork

       - Meteor core platform

   2.2 Development

       - MongoDB
       - JQuery
       - Handlebars
       - Bootstrap
       - GIT

3. File structure (/schoolproject)

   3.1 /client

       Any files here are only served to the client. This is a good place to keep HTML, CSS, and UI-related JavaScript code.

       3.1.1 /client/lib

             This folder are used to keep the existing CSS and Javascript libraries, i.e., bootstrap.js and JQuery.js.

       3.1.2 /client/index.html

             This file is the main page of this application, which calls the template that written in schoollist.html.

       3.1.3 /client/function.js

             This file is used to operate the Mongodb dababase in the client side.
        
       3.1.3 /client/schoollist.html, /client/schoollist.js

             These two files are used to create the 'schoollist' template that is used to display the information of all schools, 
             add a new school, and delete an existing school.
       
       3.1.4 /client/modal.html, /client/modal.js

             These two files are used to create the 'editModal' template that is used to edit the information of a selected school.

   3.2 /server

       Any files in this directory are only used on the server, and are never sent to the client. 
       Use /server to store source files with sensitive logic or data that should not be visible to the client.

   3.3 /collections

       Any files in this directory are used both on the server and client. This is a good place to keep database-related (MongoDB) JavaScript code.

4. Development Methodology
   
   4.1 Template

       In meteor, views are defined in templates. A template is a snippet of HTML that can include dynamic data. 
       The template can be interacted from JavaScript code to insert data and listen to events. In this project,
       there are two templates, e.g., 'schoollist' and 'editModal'.

   4.2 Session

       Session provides a global object on the client that you can use to store an arbitrary set of key-value pairs. 
       Use it to store things like the currently selected item in a list.

       What's special about Session is that it's reactive. If it calls Session.get("myKey") in a template helper, 
       the relevant part of the template will be re-rendered automatically whenever Session.set("myKey", newValue) is called.

   4.3 Collections

       Collections are used to stores data. JavaScript objects stored in collections are called documents. To get started, declare a collection with new Mongo.Collection.
       To allow both client code and server code to access the same collection using the same API, it's usually best to declare collections as global variables in a 
       JavaScript file that's present on both client and server.
   

5. How to run the project under Linux/Unix (e.g., ubuntu)?

   5.1 Install Meteor under linux/unix environment:

		Example: gongqi@ubuntu:~ $ curl https://install.meteor.com | /bin/sh

   5.2 Get the source code from the GITHub

		Example: gongqi@ubuntu:~ $ git clone https://github.com/gongqi01/schoolproject.git

   5.3 Run the project:
   
       5.3.1 Go to the directory you downloaded from the GITHub

             Example: gongqi@ubuntu:~ $ cd schoolproject
      
       5.3.2 run meteor

             Example: gongqi@ubuntu:~/schoolproject $ meteor

   5.4 visit the website on the browser 

       Example: http://localhost:3000/

6. Visit the deployed project on the DigitalOcean (https://www.digitalocean.com/):

   http://128.199.219.7:3000/



