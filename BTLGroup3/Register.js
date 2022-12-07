function checkLogin(obj){
    var Hoten = document.getElementById("username").value;
    var Matkhau = document.getElementById("password").value;
    var Email = document.getElementById("email").value;
    
     if(Hoten == ""){
        alert("Bạn phải nhập Tên");
        return false;
     }
     else if(Matkhau==""){
        alert("Bạn phải nhập mật khẩu");
        return false;
     }
     
     else if(Email==""){
        alert("Bạn phải nhập Email");
        return false;
     }
     
     else{
        document.getElementsByClassName("loginSuccess")[0].innerHTML=
        "Đăng kí thành công  ";
        return true;
     }
  }