const loadCountry = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => showData(data))
}
loadCountry();
const showData = data => {

    // console.log(data)
    const parentRow = document.getElementById('country-list');
    data.forEach(element => {
        const { population } = element;
        const { common } = element.name;
        const { png } = element.flags;

        const col = document.createElement('div');
        col.classList.add('col-md-3', 'col-sm-6');
        const innerTemplate = `
        
                    <div class="border rounded shadow p-2 h-100">
                        <div class="d-flex justify-content-center">
                            <img class="w-50" src="${png}" alt="Country">
                        </div>
                        <div class="mt-1">
                            <span class="me-2 d-block text-center">Name: <h6 class="m-0 d-inline">${common}</h6></span>

                        </div>
                        <div class="mt-1">
                            <p class="me-2 d-block text-center">Population: <span class="m-0 d-inline">${population}</span></p>
                        </div>
                        <button class="btn btn-primary btn-sm" onclick="loadByCountryName('${common}')">Detail</button>

                    </div>
                
        `;


        col.innerHTML = innerTemplate;
        parentRow.append(col);

    });
}
const loadByCountryName = name => {
    fetch(`https://restcountries.com/v3.1/name/{${name}}`)
        .then(response => response.json())
        .then(data => loadName(data))
}
const loadName = data => {
    alert(data[0].name.official)
}