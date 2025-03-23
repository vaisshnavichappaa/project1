function finalOutput() {
    let htmlCode = document.getElementById("html-Input").value;
    let cssCode = document.getElementById("css-Input").value;
    let jsCode = document.getElementById("JS-Input").value;

    let outputCode = document.getElementById("codeExecutionOutput");

    outputCode.contentDocument.body.innerHTML = htmlCode;

    let styleElement = document.createElement("style");
    styleElement.innerHTML = cssCode;
    outputCode.contentDocument.head.appendChild(styleElement);

    let bootstrapLink = document.createElement("link");
    bootstrapLink.rel = "stylesheet";
    bootstrapLink.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css";
    bootstrapLink.integrity = "sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH";
    bootstrapLink.crossOrigin = "anonymous";
    outputCode.contentDocument.head.appendChild(bootstrapLink);

    let bootstrapIconsLink = document.createElement("link");
    bootstrapIconsLink.rel = "stylesheet";
    bootstrapIconsLink.href = "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css";
    outputCode.contentDocument.head.appendChild(bootstrapIconsLink);

    let scriptElement = document.createElement("script");
    scriptElement.innerHTML = jsCode;
    outputCode.contentDocument.body.appendChild(scriptElement);

    let bootstrapScript = document.createElement("script");
    bootstrapScript.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js";
    bootstrapScript.integrity = "sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz";
    bootstrapScript.crossOrigin = "anonymous";
    outputCode.contentDocument.body.appendChild(bootstrapScript);
}

function themeChanger() {
    let checkBoxDocument = document.getElementsByClassName("form-check-input")[0];

    if (checkBoxDocument.checked == true) {
        document.getElementById("themeSwitcher").setAttribute("data-bs-theme", "dark");
        document.getElementById("navThemeSwitcher").setAttribute("data-bs-theme", "dark");
        document.getElementById("navThemeSwitcher").setAttribute("class", "navbar bg-body-dark");
        document.getElementById("navSwitchText").innerHTML = '<i class="bi bi-moon-fill"></i>';
        document.getElementsByTagName("iframe")[0].contentDocument.getElementsByTagName("html")[0].setAttribute("data-bs-theme", "dark");
        document.getElementById("iframeBorderTheme").setAttribute("class", "ratio ratio-21x9 border border-3 border-white rounded");
    } else {
        document.getElementById("themeSwitcher").setAttribute("data-bs-theme", "light");
        document.getElementById("navThemeSwitcher").setAttribute("data-bs-theme", "light");
        document.getElementById("navThemeSwitcher").setAttribute("class", "navbar bg-body-info");
        document.getElementById("navSwitchText").innerHTML = '<i class="bi bi-brightness-high"></i>';
        document.getElementsByTagName("iframe")[0].contentDocument.getElementsByTagName("html")[0].setAttribute("data-bs-theme", "light");
        document.getElementById("iframeBorderTheme").setAttribute("class", "ratio ratio-21x9 border border-dark rounded");
    }
}

// Ensure iframe content is fully loaded before manipulating it
document.getElementById("codeExecutionOutput").addEventListener("load", finalOutput);