function contact(obj){

    var uName = document.getElementById("username").value;
    var email = document.getElementById("Email").value;
    var test1 = document.getElementById("Tiêu đề").value;
    var phone = document.getElementById("Số điện thoại").value;
    var test2 = document.getElementById("Nội dung").value;
   if(uName == ""){
          alert("Bạn phải nhập Tên");
           return false;
       }
    else if(email==""){
          alert("Bạn phải nhập email");
      return false;
       }
    else if(test1==""){
          alert("Bạn phải nhập tiêu đề");
      return false;
       }
       else if(phone==""){
          alert("Bạn phải nhập số điện thoại");
      return false;
       }
    else if(test2==""){
          alert("Bạn phải nhập nội dung");
      return false;
       }
       else{
         document.getElementsByClassName("loginSuccess")[0].innerHTML=
        "Đã gửi thành công ";
          return true;
       }
  }
  