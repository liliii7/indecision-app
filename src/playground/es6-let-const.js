const user = {
    name: 'lidia',
    cities: ['new york', 'new jersey', 'california'],
    printPlaces() {
        return this.cities.map((city) => this.name + ' has lived in ' + city)
    }
}

console.log(user.printPlaces());
 
const multiplier = {
    nums: [1,2,3,4,5],
    multiply() {
        return this.nums.map((num) => num * 2)
    }
}

console.log(multiplier.multiply())