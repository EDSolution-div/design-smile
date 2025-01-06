let menu = document.getElementById("bar");
let item = document.getElementById("item");

item.style.right = '-300px';
menu.onclick = function () {
    /* body... */
    if (item.style.right == '-300px'){
        item.style.right = '0';
    }
    else {
        item.style.right = '-300px';
    }
}
