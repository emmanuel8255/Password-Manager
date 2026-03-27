var accountInput = document.getElementById("account");
var usernameInput = document.getElementById("username");
var passwordInput = document.getElementById("password");
var saveInput = document.getElementById("save");


var nav = 0;
var vault = 1;

$("#container2").hide();
$("#hide-button").hide();
$("#front-button").hide();
$("#back-button").hide();


$("#hide-button").click(hidePassword);

function hidePassword () {
    $("#reveal-account").text("    ");
    $("#reveal-username").text("    ");
    $("#reveal-password").text("     ");
    $("#password-block").text("*******");
    $("#hide-button").hide();
    $("#reveal-button").show();
}

$("#reveal-button").click(showPassword);

function showPassword () {
    $("#mini-header").text("VAULT " + vault);
    $("#reveal-account").text(savedAccounts[nav]);
    $("#reveal-username").text(savedUsernames[nav]);
    $("#reveal-password").text(savedPasswords[nav]);
    $("#password-block").text("Password");
    $("#reveal-button").hide();
    $("#hide-button").show();
    $("#front-button").show();
}


$("#front-button").click(function () {
    if (vault === savedAccounts.length) {
        $("#front-button").hide();
    }
    else {
        $("#front-button").show();
        nav++
        vault++
        showPassword();
    }
    
    $("#back-button").show();
});

$("#back-button").click(function () {
    if (vault > 1) {
        nav--
        vault--
        showPassword();
    }
    else {
       $("#back-button").hide(); 
    }
    
});


var savedAccounts = JSON.parse(localStorage.getItem('accounts'));
var savedUsernames = JSON.parse(localStorage.getItem('usernames'));
var savedPasswords = JSON.parse(localStorage.getItem('passwords'));

saveInput.addEventListener("click", function () {
    var password = passwordInput.value;

    var username = usernameInput.value;
    
    var account = accountInput.value;
    


    var savedAccounts = JSON.parse(localStorage.getItem('accounts')) || [];
    var savedUsernames = JSON.parse(localStorage.getItem('usernames')) || [];
    var savedPasswords = JSON.parse(localStorage.getItem('passwords')) || [];

    savedAccounts.push(account);
    savedUsernames.push(username);
    savedPasswords.push(password);

    localStorage.setItem('accounts', JSON.stringify(savedAccounts));
    localStorage.setItem('usernames', JSON.stringify(savedUsernames));
    localStorage.setItem('passwords', JSON.stringify(savedPasswords));
    
});

$("#view-passwords").click(() => {
    $("#container1").hide();
    $("#container2").show();
});

$("#return-button").click(() => {
    $("#container1").show();
    $("#container2").hide();
})


