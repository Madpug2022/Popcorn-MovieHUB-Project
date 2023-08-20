const postMovieApi = async (url: string, data: any, getToken: any) => {
    const token = await getToken();
    const formData = new FormData();
    formData.append("userEmail", data.userEmail);
    formData.append("name", data.name);
    formData.append("score", data.score);
    formData.append("review", data.review);
    formData.append("genres", data.genres);
    formData.append("posterImage", data.posterImage);


    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                authorization: `Bearer ${token}`,
            },
            body: formData,
        });

        if (response.ok) {
            console.log('Succesfully send');
        } else {
            throw new Error("Network response was not ok.");
        }
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
    }
};

export default postMovieApi;
