"use server";

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '859937fb6bmsh532cd3a75a7de1dp1f2c18jsn42ca5b129e28',
		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
	}
};

export const fetchMovieTitles = async (title: string) => {
    const response = await fetch(`https://moviesdatabase.p.rapidapi.com/titles/search/title/${title}`, options)
    const data = await response.json();

    return data;
}

export const fetchMovieRating = async (id: string) => {
    const response = await fetch(`https://moviesdatabase.p.rapidapi.com/titles/${id}/ratings`, options)
    const data = await response.json();

    return data;
}