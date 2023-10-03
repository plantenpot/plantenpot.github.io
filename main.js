function changeText()
{
    document.getElementById("second").style.display = "none";

    setInterval(() => {
        document.getElementById("second").style.display = "none";
        document.getElementById("first").style.display = "block";
        document.getElementById("Change_text").innerHTML=("Software Development ");
    }, 3000);
    
    setInterval(() => {
        document.getElementById("Change_text").innerHTML=("SintLucas ");
    }, 6000);

    setInterval(() => {
        document.getElementById("first").style.display = "none";
        document.getElementById("second").style.display = "block";
    }, 9000);
}

changeText();

let year2019 = document.getElementById('2019');
let year2020 = document.getElementById('2020');
let year2021 = document.getElementById('2021');
let year2022 = document.getElementById('2022');

year2019.style.display = 'none';
year2020.style.display = 'none';
year2022.style.display = 'none';

function changeYear(year)
{
    document.getElementById('yearButton').innerHTML = year;

    if (year == 2019)
    {
        year2020.style.display = 'none';
        year2021.style.display = 'none';
        year2022.style.display = 'none';

        year2019.style.display = 'block';
    } else if (year == 2020)
    {
        year2019.style.display = 'none';
        year2021.style.display = 'none';
        year2022.style.display = 'none';

        year2020.style.display = 'block';
    } else if (year == 2021)
    {
        year2019.style.display = 'none';
        year2020.style.display = 'none';
        year2022.style.display = 'none';

        year2021.style.display = 'block';
    } else if (year == 2022)
    {
        year2019.style.display = 'none';
        year2020.style.display = 'none';
        year2021.style.display = 'none';

        year2022.style.display = 'block';
    }
}

// Cookie Banner

const getCookie = (name) => {
    const value = " " + document.cookie;
    console.log("value", `==${value}==`);
    const parts = value.split(" " + name + "=");
    return parts.length < 2 ? undefined : parts.pop().split(";").shift();
};

const setCookie = function (name, value, expiryDays, domain, path, secure) {
    const exdate = new Date();
    exdate.setHours(
        exdate.getHours() +
        (typeof expiryDays !== "number" ? 365 : expiryDays) * 24
    );
    document.cookie =
        name +
        "=" +
        value +
        ";expires=" +
        exdate.toUTCString() +
        ";path=" +
        (path || "/") +
        (domain ? ";domain=" + domain : "") +
        (secure ? ";secure" : "");
};

const $cookiesBanner = document.querySelector(".cookies-eu-banner");
const $cookiesBannerButton = $cookiesBanner.querySelector("button");
const cookieName = "cookiesBanner";
const hasCookie = getCookie(cookieName);

if (!hasCookie) {
    $cookiesBanner.classList.remove("hidden");
}

$cookiesBannerButton.addEventListener("click", () => {
    setCookie(cookieName, "closed");
    $cookiesBanner.remove();
});