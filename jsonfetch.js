const API_URL = 'https://opendata.concordia.ca/API/v1/library/occupancy/';
const API_USERNAME = '520';
const API_PASSWORD = '276377ba5206683e51d50fb86c378dc5';

const [people, setPeople] = useState([]);

export function getPeople() {
    return fetch('API_URL', {
            headers: {
                'Authorization': 'Basic ' + btoa(`${API_USERNAME}:${API_PASSWORD}`)
            }
        })
        .then(response => console.log(response.json()))

    .catch(error => this.handleError(error))
}
useEffect(() => {
    // Call the getPeople function to fetch the list of people
    getPeople().then(people => {
        // Set the people state with the list of people returned by the API
        setPeople(people);
    });
}, []);
getPeople();