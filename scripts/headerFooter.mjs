// const toggle = document.getElementById("toggle");
// const navigation = document.getElementById("nav");

// toggle.addEventListener("click", () => {
//     navigation.classlist.toggle("active");
//     getNavLinks();
// });

// async function getNavLinks() {
//     // const baseurl = "https://ldsjayhawk.github.io/wdd330/";
//     const linksurl = "https://ldsjayhawk.github.io/wdd330/data/navigation.json";

//     const response = await fetch(linksurl);
//     const data = await response.json();
//     // console.log(data);
//     displayLinks(data.navLinks);
// };

// const displayLinks = (navLinks) => {
//     navLinks.forEach((link) => {
//         const linkName = document.createElement('li');
//         linkName.textContent = `${link.link}:` ;
//         assignments.appendChild(link.links.title);
//         const div = document.createElement("div")

//         link.links.forEach((link, i) => {
//             if (link.url.trim() !== '' && link.title.trim() !== '') {
//                 const a = document.createElement("a")
//                 a.textContent = link.title;
//                 a.href = link.url;
//                 div.appendChild(a);
//                 if (i < link.links.length - 1){
//                     const text = document.createTextNode(" | ")
//                     div.appendChild(text)
//                 }
//             }
//             assignments.appendChild(div);
//         })
//     })
// }

// footer info -- copyright and last updated
export function getFooterInfo() {
    const currentyear = new Date().getFullYear();
    const date = new Date(document.lastModified).toLocaleDateString()
    
    document.getElementById("footer-info").innerHTML = `©️ ${currentyear} Cris Altman  Updated: ${date}`;
}