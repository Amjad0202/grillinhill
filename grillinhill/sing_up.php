<?php include("./config.php");?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Sign Up</title>
  <link rel="stylesheet" href="styles.css"> <!-- Link to your CSS file for styling -->
</head>
<body>
  <div class="signup-container">
    <h1>Sign Up</h1>
    <form action="add.php" id="signupform" method="post" >
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>
      </div>
      <div class="form-group">
        <label for="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" name="confirmPassword" required>
      </div>
      <div class="form-group">
        <button type="submit" name="submit">Sign Up</button>
      </div>
    </form>
  </div>
  
  <script src="signup.js"></script> <!-- Link to your JavaScript file for form handling -->
</body>
</html>

<form action=""></form>