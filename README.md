
# Weather Web

This website will give weather information about popular cities in the world





## Demo

https://surajsinghgore.github.io/weatherweb/


## Screenshots

![App Screenshot](https://res.cloudinary.com/dnxv21hr0/image/upload/v1679194248/Screenshot_233_khylfg.png)


## Authors

- [@surajsinghgore](https://github.com/surajsinghgore)


## Tech Stack

**Client:** HTML,CSS,JAVASCRIPT

**APIS:** Open Weather API


## Usage/Examples

```javascript
------HTML-------
<form>
<input type="search" name="search" 
id="searhInput" placeholder="🔍 Search your City.."  >
</form>



--------JS--------
const searchBarWork=async(e)=>{
const searhInput=document.getElementById('searhInput').value.toLowerCase();
closeSearchBar();
e.preventDefault()


// data fetch

let cityRes=await fetch(`https://api.openweathermap.org/data/2.5/weather?
q=${searhInput}&
appid={APIKEY}&units=metric`)

let resData=await cityRes.json();
// set data
document.getElementById('city').innerText=searhInput;
document.getElementById('temp').innerText=resData.main.temp_min;

document.getElementById('searhInput').value = ''

}

document.getElementById('form').addEventListener('submit',searchBarWork)



```

## API Reference

#### Get all weather information

```http
  GET https://api.openweathermap.org/data/2.5/weather?q=${place}&appid={api_key}&units=metric
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |
| `place` | `string` | **Required**. Place for weather to search |





## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| BackgroundColor | ![#0a192f](https://via.placeholder.com/10/0a192f?text=+) rgb(3, 89, 160) |


![Logo](https://res.cloudinary.com/dnxv21hr0/image/upload/v1679195240/with_out_bg_c44ekr.png)


## Support

For support, email surajthakurrs45@gmail.com 

## Roadmap

- Create Ui using HTML,CSS

- Using Js integrate api mentioned about


## Features

- Wide varieties of places to search weather
- Responsive mode
- Basic Project for beginners
- Simple and clean UI


## FAQ

#### Why my city wether is not shows in this website?

You can subscribe paid or best weather Api provider



## Lessons Learned
You can make strong your javascript logic by fetching data from third parties apis provides.

You will learn how to manipulate api data with your fronted site 


## Feedback

If you have any feedback, please reach out to us at surajthakurrs45@gmail.com


## 🛠 Skills
Javascript, HTML, CSS...

