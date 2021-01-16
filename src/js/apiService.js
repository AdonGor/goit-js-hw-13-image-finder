const API_KEY = '19901626-05d28a6fd401ec47b5efa4d58';
const BASE_URL = 'https://pixabay.com/api'

export default class PixabayService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }
   
    async fetchHits() {
        const request = `/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`
        const response = await fetch(BASE_URL + request);
        const newResponse = await response.json();
        return newResponse.hits;
    }
    
    incrementPage(){
        this.page += 1;
    }

    resetPage() {
        this.page = 1;
    }

    get query() {
            return this.searchQuery;
    }
    set query(newQuery) {
            this.searchQuery = newQuery;
    }
}

