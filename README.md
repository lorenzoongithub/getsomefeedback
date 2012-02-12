
getsomefeedback.js
==================


DESCRIPTION
-----------

getsomefeedback.js is the simplest javascript library to add a 'feedback' button and form to any of your webpages. 


USAGE
-----

Copy the script to your machine.
Add the script at the bottom of your page


    <script src="getsomefeedback.js></script>


End of story. 
 

A 100% JAVASCRIPT SOLUTION: HOW DOES IT WORK ?
----------------------------------------------

getsomefeedback.js creates a feedback button at the bottom of the page. 
The user clicks on it and a pop-up appears to enter his/her feedback.

When 'submit' is pressed a new http request is made to the hosting site - your website - passing all of the data entered by the users.
This is done via a well known technique known as dynamic script injection. 
The http request returns nothing to the client (technically it fails silently with 404)  
yet the 'feedback' data has now been written on your server's logs.  

(Minor technical note: if you want to avoid http 404 you must create a an empty file called 'do-non-ignore-feedback.js')


HOW DO I RETRIEVE FEEDBACK DATA ?
---------------------------------

No assumptions were made on your server side. 
Is there a database ? 
Are your services running in a cloud ? 
node.js ? 
google app engine ?

The only thing that is expected is your ability to crawl your server's logs - whether manually or in an automated fashion. 
Search for 'do.not.ignore.feedback.js' and you will find all of the users' comments. 


HOW DO I CUSTOMIZE IT ? 
-----------------------

Feedback forms vary greatly and each website has its own requirement on how to integrate them.
The best way to customize this script is to go and modify it according to your requirements. 
Think of it as a boilerplate for your form.
The javascript is about 100 lines of code and I worked very hard to make the code as simple as possible.

