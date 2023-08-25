import axios from "axios";

const SearchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID NfOKSJwXv2e6yaIvJlOMYMNVkYbp4A3An8jQ3IL0CZE",
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};
export default SearchImages;
