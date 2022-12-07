function checkLogin(obj){
    var Packet = document.getElementById("namepacket").value;
    var Phone = document.getElementById("phone").value;
    
     if(Packet == ""){
        alert("Bạn phải nhập đúng tên gói");
        return false;
     }
     else if(Phone==""){
      alert("Bạn phải nhập số điện thoại");
      return false;
   }
     
     
     
     else{
        document.getElementsByClassName("loginSuccess")[0].innerHTML=
        "Đăng kí thành công  ";
        return true;
     }
  }