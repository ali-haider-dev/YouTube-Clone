import axios from 'axios'

const Base_Url = 'https://youtube-v31.p.rapidapi.com'
const options = {
   
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': '663273d757msh42bc5f8529c0a96p161ec4jsn931cf769817f',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  export const fetchFromApi = async(url)=>{
const { data } = await axios.get(`${Base_Url}/${url}`,options)
console.log(data)
return data
  }