let hashMapMenu = new Map();

hashMapMenu.set("a", "nos travaux");
hashMapMenu.set("b", "l'équipe");
hashMapMenu.set("c", "partenaires");
hashMapMenu.set("d", "nous contacter");

function createHeader() {
    let header = document.createElement("HEADER");

    let logoImg = document.createElement("IMG");
    logoImg.id = "logoLF";
    logoImg.src = "assets/img/LeoFly_blanc_fond_transparent.svg";

    let headerContainer = document.createElement("DIV");
    headerContainer.id = "header-container";

    hashMapMenu.forEach(function (value, key) {
        let anchor = document.createElement("A");

        anchor.href = value;

        let span = document.createElement("SPAN");

        span.textContent = hashMapMenu.get(key);

        anchor.appendChild(span);
        headerContainer.appendChild(anchor);
    });

    let button = document.createElement("BUTTON");
    button.id = "header-cta";
    button.textContent = "nous rejoindre";

    header.appendChild(logoImg);
    header.appendChild(headerContainer);
    header.appendChild(button);

    document.getElementById("header-menu").appendChild(header);
}

createHeader();