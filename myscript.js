
    function validateuser() {
        var username1 = document.getElementsByClassName("username1").value;
        var password1 = document.getElementsByClassName("password1").value;
        if (username1 === " " && password1 === " ") {
            alert("username or password missing!!");
        } else {
            alert("Login successfully");
            window.location = "sucess1.html";
        }
    }

function validatemod() {
    var username2 = document.getElementsByClassName("username2").value;
    var password2 = document.getElementsByClassName("password2").value;
    if (username2 === " " && password2 === " ") {
        alert("username or password missing!!");
    } else {
        alert("Login successfully");
        window.location = "sucess2.html";
    }
}
