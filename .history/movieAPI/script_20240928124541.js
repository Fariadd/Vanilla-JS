const url = `https://jsonplaceholder.typicode.com/posts?_limit=10`;

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    const container = document.querySelector(".container"); // Get the container element

    // Loop through the fetched data and display post info
    data.forEach((post) => {
      // Create a div for each post
      const div = document.createElement("div");
      div.classList.add("post"); // Optional: Add a class to style the posts

      // Create elements to show post title and body
      const postTitle = document.createElement("h2");
      postTitle.textContent = post.title;

      const p = document.createElement("p");
      p.textContent = post.body;

      // Append the title and body to the div
      div.appendChild(postTitle);
      div.appendChild(p);

      // Append each div to the container inside the loop
      container.appendChild(div);
    });
  })
  .catch((err) => console.log(err));
