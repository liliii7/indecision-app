const user = {
    name: 'lidia',
    cities: ['new york', 'new jersey', 'california'],
    printPlaces() {
        this.cities.forEach(city => {
            console.log(this.name + 'has lived in ' + city)
        });
    }
}

user.printPlaces();
