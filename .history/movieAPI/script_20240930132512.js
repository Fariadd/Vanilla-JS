const apiURL = "https://dummyjson.com/products";
async function fetchigData() {
try{
  const res = await fetch(apiURL);
  const data = await res.json();
}catch((err) =>{
  console.log(err);
})

}

fetchigData();
