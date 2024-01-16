function hienthianh(quanhcanh){
    if (quanhcanh=="nui"){
        document.write("<img src = 'https://images.pexels.com/photos/976994/pexels-photo-976994.jpeg?auto=compress&cs=tinysrgb&w=600'>");
    }
    else if (quanhcanh=="rung"){
        document.write("<img src = 'https://images.pexels.com/photos/338936/pexels-photo-338936.jpeg?auto=compress&cs=tinysrgb&w=600'>");
    }
    else{
        document.write("<img src = 'https://images.pexels.com/photos/635279/pexels-photo-635279.jpeg?auto=compress&cs=tinysrgb&w=600'>");
    }
    document.write("<button onclick='back()'>Back</button>");
}
function back(){
    location.reload();
}