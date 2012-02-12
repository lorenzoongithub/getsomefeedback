// getsomefeedback.js
// february, 2012. 
// 
// Copyright (c) 2012 lorenzo puccetti
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// This Software shall be used for doing good things, not bad things.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

(function(window,document,undefined) {  
   //
   // Define the HTML elements.
   //
   var divFeedback = document.createElement('div');
   var divDialog = document.createElement('div');
   var txtName = document.createElement('input');
   var divName = document.createElement('div');
   var divMessage = document.createElement('div');
   var taMessage = document.createElement('textarea');
   var btnSubmit = document.createElement('input');
   var divThanks = document.createElement('div'); 
   
   //
   // Styling the HTML elements
   //
   divFeedback.style.position ='fixed';
   divFeedback.style.cursor = 'pointer'; 
   divFeedback.style.color ='#FFF';
   divFeedback.style.backgroundColor ='#000';
   divFeedback.style.zIndex = 1000;
   divFeedback.style.padding = '8px';
   divFeedback.style.fontSize = '32px';
   divFeedback.style.bottom = '1px';
   divFeedback.style.right = '1px';
   divFeedback.innerHTML = 'Feedback';
   divDialog.style.position = 'fixed';
   divDialog.style.display = 'none';
   divDialog.style.zIndex = 1000;   
   divDialog.style.left = '10%';
   divDialog.style.right = '10%';
   divDialog.style.top = '10%';
   divDialog.style.padding = '10px';
   divDialog.style.backgroundColor = '#eee';
   divDialog.style.color = '#333';
   divDialog.style.border = '1px solid #333';
   divDialog.style.borderRadius = '8px';
   txtName.type = 'input';
   txtName.style.width = '100%';
   divName.innerHTML = 'Your name:';
   divMessage.innerHTML = 'Your message:';
   btnSubmit.type = 'button';
   btnSubmit.value = 'Submit Your Feedback';
   taMessage.style.width = '100%';
   taMessage.style.height = '96px';
   divThanks.style.position = 'fixed';
   divThanks.style.display = 'none';
   divThanks.style.zIndex = 1000;   
   divThanks.style.left = '10%';
   divThanks.style.right = '10%';
   divThanks.style.top = '10%';
   divThanks.style.padding = '10px';
   divThanks.style.backgroundColor = '#eee';
   divThanks.style.color = '#333';
   divThanks.style.border = '1px solid #333';
   divThanks.style.borderRadius = '8px';
   divThanks.style.fontSize = '24px'; 
   divThanks.style.display = 'none';
   divThanks.style.textAlign = 'center';
   divThanks.innerHTML = 'Thank you for submitting your feedback';
   divDialog.appendChild(divName); 
   divDialog.appendChild(txtName); 
   divDialog.appendChild(divMessage);
   divDialog.appendChild(taMessage);
   divDialog.appendChild(btnSubmit);
   
   // registering events: 
   // onclick on the feedback button toggles the feedback dialog.
   // onclick on the submit button sends the message to the server. 
   divFeedback.onmouseover = function() { divFeedback.style.borderBottom ='4px solid #800' };
   divFeedback.onmouseout =  function() { divFeedback.style.borderBottom ='0px solid #000' };
   divFeedback.onclick = function() {
      divDialog.style.display = (divDialog.style.display === 'block') ? 'none' : 'block';  
   };
   btnSubmit.onclick = function() {
      var name = txtName.value;
      var message = taMessage.value; 
      
      /** 
       * add here any validation on the input parameters. 
       * e.g. alert message is too short. 
       * ... 
      **/
      
      // This is the main logic to send the message to the feedback. 
      // a new script is created and asynchronously requested.
      var script = document.createElement("script");
      script.src="do.not.ignore.feedback.js?name="+encodeURIComponent(name)+'&message='+encodeURIComponent(message); 
      document.body.appendChild(script);
      
      // Displays the thank you message.
      // Removes the feedback button
      // sets a timeout function to remove the thank you message in a few seconds.
      divDialog.style.display = 'none';
      divThanks.style.display = 'block';
      divFeedback.style.display = 'none';
      setTimeout(function() {
         divThanks.style.display = 'none';
      }, 3000);
   }
   document.body.appendChild(divFeedback);
   document.body.appendChild(divDialog);
   document.body.appendChild(divThanks);
})(this,this.document); // avoid polluting the global scope
