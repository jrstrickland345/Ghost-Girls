<?php
if(!isset($_POST['submit']))
{
	//This page should not be accessed directly. Need to submit the form.
	echo "error; you need to submit the form!";
}
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];

//Validate first
if(empty($name)||empty($visitor_email)) 
{
    /* echo "Name and email are mandatory!"; */
    print '<script type="text/javascript">'; 
	print 'alert("Name and email are mandatory!")'; 
	print '</script>'; 
    exit;
}

if(IsInjected($visitor_email))
{
    /* echo "Bad email value!"; */
    print '<script type="text/javascript">'; 
	print 'alert("Bad email value!")'; 
	print '</script>'; 
    exit;
}

$email_from = 'biographco@hotmail.com';//<== update the email address
$email_subject = "New Form submission";
$email_body = "You have received a new message from the user $name.\n".
    "Here is the message:\n \n $message \n \n".
    "Their email address is:\n $visitor_email \n".
    
$to = " biographco@hotmail.com";//<== update the email address
$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $visitor_email \r\n";
//Send the email!
mail($to,$email_subject,$email_body,$headers);
//done. redirect to thank-you page.
header('Location: thank-you.html');


// Function to validate against any email injection attempts
function IsInjected($str)
{
  $injections = array('(\n+)',
              '(\r+)',
              '(\t+)',
              '(%0A+)',
              '(%0D+)',
              '(%08+)',
              '(%09+)'
              );
  $inject = join('|', $injections);
  $inject = "/$inject/i";
  if(preg_match($inject,$str))
    {
    return true;
  }
  else
    {
    return false;
  }
}
   
?> 