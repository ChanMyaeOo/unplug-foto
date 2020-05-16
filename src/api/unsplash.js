import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID fPdZe0xOgrgG6pNPRY5TkEZQsyaz3P-Sk8XFobObSl8",
  },
});
