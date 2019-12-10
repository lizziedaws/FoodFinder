//import SearchBar from "../components/SearchBar/SearchBar";

const apiKey = 'ujGSVyhTNDGkMHgLOFNwgANRlH-bVpUK-4l0wZOm9KDonx1ZseZoPt-yQbuJKM_BDJ6MGhH2qeaCRQPr0k4r5HO9CtRi5mrcbpcQfZ_Zqp5wnWLUJq2uTyoFwirpXXYx';

var Yelp = {
searchYelp:function(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
        headers: {
        Authorization: `Bearer ${apiKey}`
    }
}).then(response => {
    return response.json();
}).then((jsonResponse) => {
    if (jsonResponse.businesses) {
        //for (let i = 1; i < 10; i++) {
        return jsonResponse.businesses.map((business) => {
            console.log('yelp call made; returning businesses');
            return {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count,
                                }
                            })
                        
                        }
                });
            }
        };

export default Yelp;