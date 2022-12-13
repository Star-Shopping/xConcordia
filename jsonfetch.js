  const [people, setPeople] = useState([]);

  function getPeople() {
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