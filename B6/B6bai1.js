function validateform(){
    var ho = document.forms["form"]["ho"].value;
    var ten = document.forms["form"]["ten"].value;
    var sdt = document.forms["form"]["sdt"].value;
    
    if (ho == ""){
        alert("Vui lòng nhập họ");
        return false;
    }
    if (ten == ""){
        alert("Vui lòng nhập tên");
        return false;
    }
    if (sdt == ""){
        alert("Vui lòng nhập số điện thoại");
        return false;
    }

    if (isNaN(sdt) || sdt.length >10 || sdt.length == 0){
        alert("Số điện thoại phải là số và có độ dài là 10");
        return false;
    }
}