const API_URL = "https://63c2ccd0b0c286fbe5f3efa4.mockapi.io/api/user";
let users = [];
async function getUser() {
  try {
    let data = await axios.get(API_URL);
    users = data.data;
    console.log(users);
  } catch (e) {
    console.log(e)
  }
}
function checklogin() {
  let user = document.getElementById("user").value;
  let pass = document.getElementById("pass").value;
  if (user != null && pass !=null) {
    document.getElementById("btn-signin").disabled = false;
  }
}

function login() {
  let user = document.getElementById("user").value;
  let pass = document.getElementById("pass").value;
  console.log(user,pass);
  let a,id;

  for (let i = 0; i < users.length; i++) {
    
    if (user == users[i].usersname && pass == users[i].password) {
      a=1
      id=users[i].id;
    }
  };

  if(user=="admin" && pass=="admin"){
    window.location="http://127.0.0.1:5500/Admin%20and%20Changepass%20users/Admin/admin.html"
    alert('admin')
  }
  if(a==1){
    const sendPostRequest = async () => {
      try {
          await axios.put(`https://63c2ccd0b0c286fbe5f3efa4.mockapi.io/api/user/${id}`, 
          {
            login: true
          }
          );
      } catch (err) {
          console.error(err);
      }
      }
    sendPostRequest();

    setTimeout(() => {
      window.location= "http://localhost:3000/"
    }, 1000);
    alert("Success")
  }else if(user!="admin" || pass!="admin"){
    alert("wrong")
  }
}



function check() {
  let check;
  let username = document.getElementById("user").value;
  let password = document.getElementById("pass").value;
  let re_pass = document.getElementById("re-pass").value;
  if (username != null && password != null && re_pass != null){
    document.getElementById("signup").disabled = false;
  }
  if (password != re_pass) {
    check = "Your passwords aren't consist";
    document.getElementById("check").style.color = "#B4464C";
    document.getElementById("check").innerHTML = check; 
    
  }
  else {
    check = "Good to go!";
    document.getElementById("check").style.color = "#77DD77";
    document.getElementById("check").innerHTML = check; 
  }
}

function sign_up() {
  let username = document.getElementById("user").value;
  let password = document.getElementById("pass").value;
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  console.log(username,password);
  let valid = 0;
  for (let i = 0; i < users.length; i++) {
    console.log(users[i].usersname);
    if (username === users[i].usersname) {
      alert ("This username is already had");
    }
    else {
      valid++;
    }
  }
  if (valid!=0){
    let user = {
      usersname:username,
      password:password,
      name:name,
      email:email
    }
    const sendPostRequest = async () => {
      try {
          await axios.post(`https://63c2ccd0b0c286fbe5f3efa4.mockapi.io/api/user`, user
  
          );
      } catch (err) {
          console.error(err);
      }
      }
    sendPostRequest();

    alert("Sign up successful!");
    window.location = "http://127.0.0.1:5500/hktube-ui/login/login.html";
  }

 
}




function changepage() {
  let page = document.getElementById("btnchange").value;
  switch (page) {
    case "Sign up":
      window.location = "http://127.0.0.1:5500/login/signup.html";
      break;
    case "Sign in":
      window.location = "http://127.0.0.1:5500/login/login.html";
      break;
  }
}