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
let year2023 = document.getElementById('2023');

year2019.style.display = 'none';
year2020.style.display = 'none';
year2022.style.display = 'none';
year2023.style.display = 'none';

function changeYear(year)
{
    document.getElementById('yearButton').innerHTML = year;

    if (year === 2019)
    {
        year2020.style.display = 'none';
        year2021.style.display = 'none';
        year2022.style.display = 'none';
        year2023.style.display = 'none';

        year2019.style.display = 'block';
    } else if (year === 2020)
    {
        year2019.style.display = 'none';
        year2021.style.display = 'none';
        year2022.style.display = 'none';
        year2023.style.display = 'none';

        year2020.style.display = 'block';
    } else if (year === 2021)
    {
        year2019.style.display = 'none';
        year2020.style.display = 'none';
        year2022.style.display = 'none';
        year2023.style.display = 'none';

        year2021.style.display = 'block';
    } else if (year === 2022)
    {
        year2019.style.display = 'none';
        year2020.style.display = 'none';
        year2021.style.display = 'none';
        year2023.style.display = 'none';

        year2022.style.display = 'block';
    } else if (year === 2023) {
        year2019.style.display = 'none';
        year2020.style.display = 'none';
        year2021.style.display = 'none';
        year2022.style.display = 'none';

        year2023.style.display = 'block';
    }
}