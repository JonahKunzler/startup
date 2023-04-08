function createAccount() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
  
    if (name === "" || email === "" || password === "") {
      document.getElementById("message").innerHTML = "Please fill in all fields";
      return;
    }

    let account = {
      name: name,
      email: email,
      password: password
    }
  
    localStorage.setItem(email, JSON.stringify(account));
  
    document.getElementById("message").innerHTML = "Account created successfully";
  }
  
  function login() {
    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value;
  
    if (email === "" || password === "") {
      document.getElementById("login-message").innerHTML = "Please fill in all fields";
      return;
    }
  
    let account = JSON.parse(localStorage.getItem(email));
  
    if (account !== null && account.password === password) {
      document.getElementById("login-message").innerHTML = "Login successful";
      window.location.href = "dashboard.html";
    } else {
      document.getElementById("login-message").innerHTML = "Invalid email or password";
    }
  }