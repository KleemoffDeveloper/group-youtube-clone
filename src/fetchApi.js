export default function read_videos(search = "", callback){
  fetch(
    `https://youtube.googleapis.com/youtube/v3/search?q=${search}&maxResults=20&part=snippet&type=video&key=${process.env.REACT_APP_API_KEY}`
  )
    .then((response) => response.json())
    .then((data) => {
     callback(data);
    })
    .catch((error) => console.log(error));
}

