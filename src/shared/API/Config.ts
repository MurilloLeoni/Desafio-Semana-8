export const apiRequest = (method:string, url:string) =>{
    const options = {
        method: method,
        url: url,
        params: { language: "en-US", page: "1" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZTQzNzk0M2M5YWFhODcxMDhjNmViNzk4OWZkMTg0MCIsIm5iZiI6MTcxOTI2OTM5My4xMTgzNTIsInN1YiI6IjY2NzlmNjliYjUxYzg4MzU5NTNiNDAxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.B68cDtxz79f0-7mmzUdbWn9pdXzNw_9T7JvTHVXrF-I",
        },
      };

      return options;
}


export const apiImageUrl = (imageUrl:string) =>{
const image = `https://image.tmdb.org/t/p/original/${imageUrl}`

return image

}