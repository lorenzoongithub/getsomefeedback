DESCRIPTION
===========

getsomefeedback.js is the simplest javascript library to add a 'feedback' button and form to any of your webpages. 


USAGE
=====

Copy our script to your machine.
Add the script at the bottom of your page

<pre>
&lt;script src="getsomefeedback.js&gt;&lt;/script&gt;
</pre>

End of story. 
 

A 100% JAVASCRIPT SOLUTION: HOW DOES IT WORK ?
==============================================

The script at the bottom of your page creates and display a 'feedback' button on. 
The user clicks on it and a pop-up appears to enter his/her feedback.

When 'submit feedback' is pressed a new http request is made to the hosting site - your website - passing all of the user's parameters.
This is done via a well known technique known as dynamic script injection. 
The http request returns nothing to the client (technically it fails silently with 404)  
yet the 'feedback' data has now been written on your server's logs.  

HOW DO I RETRIEVE FEEDBACK DATA ?
=================================

No assumptions were made on your server side. 
Is there a database ? 
Are your services running in a cloud ? 
node.js ? 
google app engine ?

The only thing that is expected is your ability to crawl - whether manually or in an automated fashion - your servers logs. 
Search for 'do-not-ignore-feedback' and you will find all of the users' comments. 

Minor technical note: if you want to avoid http 404 you must create a an empty file 'do-non-ignore-feedback.js'


HOW DO I CUSTOMIZE IT ? 
=======================

Feedback forms vary greatly and each website has its own requirement on how to integrate them.
The best way to customize this script is to go and modify for your site. 
The javascript is about 100 lines of code and I worked very hard to make the code as simple as possible.

