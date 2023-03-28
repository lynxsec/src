const MASTER_NAME = "chocolatechip";
const MASTER_SECRET = "chocolatechips";

const TYPES = [
    "Biscotti",
    "Custardcream",
    "Empirebiscuit",
    "Gingerbread",
    "Sandwichcookie",
    "Stroopwafel",
    // "Flag"
];

function load() {
    if (cookie_exists(MASTER_NAME) && cookie_exists(MASTER_SECRET)) {
        page("home");
        loadBoxes();
    } else if (cookie_exists('authenticated')) {
        page("auth");
    } else {
        window.location.href = "login.php";
    }
}

function bakeUser() {
    api("scripts/backend/minicake/minicake.php", "minicake", "bake", {name: get("username").value}, (success, result) => {
        if (success) {
            cookie_push(MASTER_NAME, get("username").value);
            cookie_push(MASTER_SECRET, result);
            load();
        } else {
            popup(result);
        }
    });
}

function loadBoxes() {
    clear("list");
    for (let t of TYPES) {
        api("scripts/backend/minicake/minicake.php", "minicake", "fetch", {
            name: cookie_pull(MASTER_NAME),
            secret: cookie_pull(MASTER_SECRET),
            type: t
        }, (success, result) => {
            let box = make("div");
            let box_text = make("p");
            let box_add = make("button");
            input(box);
            row(box);
            box.style.margin = "1vh";
            box_text.innerText = t + " (" + result.name + ") has " + result.amount + " mini cakes";
            box_add.innerText = "Add 1";
            box_add.onclick = function () {
                amountBox(t, result.amount + 1);
            };
            box.appendChild(box_text);
            box.appendChild(box_add);
            get("list").appendChild(box);
        });
    }
}

function amountBox(type, amount) {
    api("scripts/backend/minicake/minicake.php", "minicake", "amount", {
        name: cookie_pull(MASTER_NAME),
        secret: cookie_pull(MASTER_SECRET),
        type: type,
        amount: amount
    }, (success, result) => {
        if (success) {
            load();
        } else {
            popup(result);
        }
    });
}

function cookie_pull(name) {
    name += "=";
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        while (cookie.charAt(0) === " ") {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) === 0) {
            return decodeURIComponent(cookie.substring(name.length, cookie.length));
        }
    }
    return undefined;
}

function cookie_push(name, value) {
    const date = new Date();
    date.setTime(value !== undefined ? date.getTime() + (365 * 24 * 60 * 60 * 1000) : 0);
    document.cookie = name + "=" + encodeURIComponent(value) + ";expires=" + date.toUTCString() + ";domain=" + window.location.hostname + ";";
}

function cookie_exists(name) {
    return cookie_pull(name) !== undefined;
}
function bakeUser() {
    api("scripts/backend/minicake/minicake.php", "minicake", "bake", {name: get("username").value}, (success, result) => {
        if (success) {
            cookie_push(MASTER_NAME, get("username").value);
            cookie_push(MASTER_SECRET, result);
            load();
        } else {
            popup(result);
        }
    });
}

function loadBoxes() {
    clear("list");
    for (let t of TYPES) {
        api("scripts/backend/minicake/minicake.php", "minicake", "fetch", {
            name: cookie_pull(MASTER_NAME),
            secret: cookie_pull(MASTER_SECRET),
            type: t
        }, (success, result) => {
            let box = make("div");
            let box_text = make("p");
            let box_add = make("button");
            input(box);
            row(box);
            box.style.margin = "1vh";
            box_text.innerText = t + " (" + result.name + ") has " + result.amount + " mini cakes";
            box_add.innerText = "Add 1";
            box_add.onclick = function () {
                amountBox(t, result.amount + 1);
            };
            box.appendChild(box_text);
            box.appendChild(box_add);
            get("list").appendChild(box);
        });
    }
}

function amountBox(type, amount) {
    api("scripts/backend/minicake/minicake.php", "minicake", "amount", {
        name: cookie_pull(MASTER_NAME),
        secret: cookie_pull(MASTER_SECRET),
        type: type,
        amount: amount
    }, (success, result) => {
        if (success) {
            load();
        } else {
            popup(result);
        }
    });
}

function cookie_pull(name) {
    name += "=";
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        while (cookie.charAt(0) === " ") {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) === 0) {
            return decodeURIComponent(cookie.substring(name.length, cookie.length));
        }
    }
    return undefined;
}

function cookie_push(name, value) {
    const date = new Date();
    date.setTime(value !== undefined ? date.getTime() + (365 * 24 * 60 * 60 * 1000) : 0);
    document.cookie = name + "=" + encodeURIComponent(value) + ";expires=" + date.toUTCString() + ";domain=" + window.location.hostname + ";";
}

function cookie_exists(name) {
    return cookie_pull(name) !== undefined;
}
