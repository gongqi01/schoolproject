# schoolproject

Schoolproject is an simple web application builded by Meteor(https://www.meteor.com/).

1. Why Meteor?

    - in pure JavaScript
    - that send data over the wire, rather than HTML
    - using your choice of popular open-source libraries
    - A great experience both on the web and as a phone or tablet app
    - Changes made by a user are instantly visible, without the unprofessional laggy feeling 
      that would result from waiting for a round trip to the server.

   Documentation is available at http://docs.meteor.com/.

2. File structure (/schoolproject)

   2.1 /client

       Any files here are only served to the client. This is a good place to keep HTML, CSS, and UI-related JavaScript code.

       2.1.1 /client/lib
             This folder are used to keep the existing CSS and Javascript libraries, i.e., bootstrap.js and JQuery.js.

       2.1.2 /client/index.html
             This file is the main page of this application, which calls the template that written in schoollist.html.

       2.1.3 /client/function.js
             This file is used to operate the Mongodb dababase in the client side.
        
       2.1.3 /client/schoollist.html, /client/schoollist.js
             These two files are used to create the 'schoollist' template that is used to display the information of all schools, 
             add a new school, and delete an existing school.
       
       2.1.4 /client/modal.html, /client/modal.js
             These two files are used to create the 'editModal' template that is used to edit the information of a selected school.

   2.2 /server

       Any files in this directory are only used on the server, and are never sent to the client. 
       Use /server to store source files with sensitive logic or data that should not be visible to the client.

   2.3 /collections

       Any files in this directory are used both on the server and client. This is a good place to keep database-related (MongoDB) JavaScript code.

3. How to run the project under Linux/Unix (e.g., ubuntu)?

   3.1 Install Meteor under linux/unix environment:
       Example: gongqi@ubuntu:~ $ curl https://install.meteor.com | /bin/sh

   3.2 Get the source code from the GITHub
       Example: gongqi@ubuntu:~ $ git clone https://github.com/gongqi01/schoolproject.git

   3.3 Run the project:
   
       3.3.1 Go to the directory you downloaded from the GITHub, i.e.,
             Example: gongqi@ubuntu:~ $ cd schoolproject
      
       3.3.2 run meteor
             Example: gongqi@ubuntu:~/schoolproject $ meteor

   3.4 visit the website on the browser 
       Example: http://localhost:3000/

4. Visit the deployed project:
   http://128.199.219.7:3000/



