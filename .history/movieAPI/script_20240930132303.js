const apiURL = "https://dummyjson.com/products";
function fetchigData(){
  const res = await fetch(`${apiURL}`)
  const data = await res.json()
}
