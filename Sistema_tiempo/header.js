let div_header=document.querySelector(".header")

div_header.innerHTML = `
nav ul {
    list-style-type: none;
    padding: 0;
}
nav ul li {
    display: inline;
    margin: 0 1rem;
}
nav ul li a {
    color: white;
    text-decoration: none;
}
`;