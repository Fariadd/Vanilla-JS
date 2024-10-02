const apiURL = "https://fakestoreapi.com/products";

const promice = async () => {
  try {
    const res = await fetch(apiURL);
    if (!res.ok) throw new Error("wrror resp");
    const data = await res.json();
    data.forEach((user) => {
      const div = document.createElement("div");
      div.classList.add("user");
      div.innerHTML = ` <h3>${user.name}</3>`;
      container.appendChild(div);
    });
  } catch (err) {
    console.log(err.message);
  }
  container.appendChild(div);
};
console.log(promice());
