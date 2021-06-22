// Client ID
// -gTTcH4kHQHNz-owNEn0tQ

// API Key
// wjAl_ccU19CimzYanjj8z6Tq9_C_nnQOMVfT9NMdf4sYxmFlnBGQ_StlsZB2uRpsRfombWV986daYkLkrKzIoAVZqcOT43mepTryuzYF_rU8_TYicwVdfNFqLerQYHYx


//CORS ANYWHERE
//Will ALLOW TO BYPASS RESTRICTIONS WHEN USING YELP API

const apiKey = "wjAl_ccU19CimzYanjj8z6Tq9_C_nnQOMVfT9NMdf4sYxmFlnBGQ_StlsZB2uRpsRfombWV986daYkLkrKzIoAVZqcOT43mepTryuzYF_rU8_TYicwVdfNFqLerQYHYx"

const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        })
        .then((response) => {
            return response.json()
        })
        //CHECKES IF BUSINESSRESPONSE HAS A VALID BUSINESS KEY (SEE FETCH LINK)
        .then((jsonResponse) => {
           if (jsonResponse.businesses) {
               return jsonResponse.businesses.map(((business) => {
                   console.log(business)
                   return {
                       id: business.id,
                       imageSrc: business.image_url,
                       name: business.name,
                       address: business.location.address1,
                       city: business.location.city,
                       state: business.location.state,
                       zipCode: business.location.zip_code,
                       category: business.categories[0].title,
                       rating: business.rating,
                       reviewCount: business.review_count
                   }
               }))
           }
        })

    }
    
}

export default Yelp

