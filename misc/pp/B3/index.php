<?php
session_start();

if(isset($_POST['submit_pass']) && $_POST['pass'])
{
 $pass=$_POST['pass'];
 if($pass=="b5kids") //password: 123
 {
  $_SESSION['password']=$pass;
 }
 else
 {
  $error="Incorrect Pssword";
 }
}

if(isset($_POST['page_logout']))
{
 unset($_SESSION['password']);
}
?>

<html>

<head>
    <title>Password Protected Webpage</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="style.css">
</head>

<body>
    <div id="wrapper">

        <?php
if($_SESSION['password']=="b5kids")
{

 ?>
<!--        Create Password Protected Webpage Using PHP, HTML And CSS-->
        <br>
        <img src="grunge_patterns.jpg" class="image">
        <br>
        <form method="post" action="" id="logout_form">
            <input type="submit" name="page_logout" value="LOGOUT">
        </form>
        <?php
}
else
{
 ?>
        <form method="post" action="" id="login_form">
            <h1>Login To Proceed</h1>
            <input type="password" name="pass" placeholder="*******">
            <input type="submit" name="submit_pass" value="Submit">
            <p>
                <font style="color:red;"><?php echo $error;?></font>
            </p>
        </form>
        <?php
}
?>

    </div>
</body>

</html>
