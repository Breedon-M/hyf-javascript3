//Step 1.1: Map, filter, reduce, and =>
console.log("Step 1");
let numbers = [1, 2, 3, 4];

let throwAwayEven = numbers.filter(x => x % 2 ==! 0).map(x => x * 2);
console.log(throwAwayEven);

//Step 2 Using this json file as the source, build a function which does the following:
console.log("Step 2");
function getAjaxData(url, callback) {
    const request = new XMLHttpRequest();
    request.addEventListener('load', function () {
        if (this.status === 200) {
            callback(JSON.parse(request.responseText));
        } else {
            console.log('Something is probably wrong with the url');
        }
    });
	request.addEventListener('error', function () {
        console.log('Server error like timeout');
    });
	request.open("GET", url);
    request.send();
}

getAjaxData('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json', function(movie){

//Step 2.1 Give each movie a tag: Good (>=7), Average (4-6), Bad (0-3) 
			
	console.log(movie);
		function movieRatingTag(movie){
		movie.forEach( x => {
			if(x['rating'] >= 7){
				return "movie is good";
			}else if(x.rating > 3 && x.rating < 7){
				return "movie is average";
			}else{
				return "movie is bad";
			}
			//console.log(x['rating']);	
			});
		}
//Step 2.2 Calculate the average rating of all the movies.
		console.log("Step 2.2");
		
		const ratingsAverage = movie.reduce((accumulator, movie) => accumulator + movie.rating, 0);

    	console.log("ratingsAverage", ratingsAverage);
    	console.log("Average rating: ", (ratingsAverage / movie.length).toFixed(2));


// 2.3  Count the total number of Good, Average and Bad movies.
		console.log("Step 2.3");
		const numberOfGoodMovies = movie.filter( x => {
			return x.rating >= 7 
		});
		console.log("Number of good movies", numberOfGoodMovies.length);
		
		const numberOfAverageMovies = movie.filter(x => {
			return x.rating > 3 && x.rating < 7
		});
		console.log("Number of average movies", numberOfAverageMovies.length);
		
		const numberOfBadMovies = movie.filter( x => {
			return x.rating <= 3;});
		console.log("Number of bad movies", numberOfBadMovies.length);
		
// 2.4 Count he number of movies containing the following keywords: ["The", "dog", "who", "is", "not", "a", "man"]. 
		console.log("Step 2.4");
		const numberOfMovieWords = movie.map(x => {
			if(x['title'].indexOf("dog")!=-1) {
      		console.log("Movies with specific words", x['title']);
    		}
		});


// step 2.2.5 Count the number of movies made between 1980-1989 (including both the years).
		console.log("Step 2.2.5");
		const numberOfMoviesYear = movie.filter( x => {
			if(x.year >= 1980 && x.year <= 1989){
			return x.year;
			}
		});
		console.log("Movies from 1980-1989", numberOfMoviesYear.length);
});
