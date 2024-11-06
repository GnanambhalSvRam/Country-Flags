function getCountriesFlags(callback) {
    url = "https://restcountries.com/v3.1/all?fields=name,flags";
    fetch(url)
    .then((response) => {
        console.log("Data successfully fetched!");
        if(response.ok)
        {
            return response.json();
        }
    })
    .then((data) => {
        callback(data);
        
    })
    .catch((error) => {
        console.log("Unable to process the URL");
    })
}

function displayData(data)
{
    const container = document.getElementById('flag-container');

    data.forEach(country => {
        const countryCard = document.createElement('div');
        countryCard.classList.add('country-card');

        const countryFlag = document.createElement('img');
        countryFlag.src = country.flags.png;
        countryFlag.alt = country.name.common + " flag";

        const countryName = document.createElement('div');
        countryName.classList.add('country-name');
        countryName.textContent = country.name.common;

        countryCard.appendChild(countryFlag);
        countryCard.appendChild(countryName);
        container.appendChild(countryCard);
    });
}

getCountriesFlags(displayData);