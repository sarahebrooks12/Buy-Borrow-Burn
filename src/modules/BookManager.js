const remoteURL = "http://localhost:8088"

export default {
  get(searchBar) {
    return fetch(`https://www.goodreads.com/search/index.xml?key=w1FqGS3nZhLHMl1510ckxQ?q=${searchBar}`).then(result => result.json())
  },
  getHarry(){
        return fetch(`https://www.googleapis.com/books/v1/volumes?q=drseuss&key=AIzaSyBiqZBaqAZBbOixMmphbqDrq1P5yjtWhTY`).then(result => result.json())
  }
}

// https://app.ticketmaster.com/discovery/v2/events.json?dmaId=343&keyword=${concertSearchBar}&apikey=${apiToken}

