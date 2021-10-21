/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

// export const onInitialClientRender = () => {
//   var posY = 0
//   const header = document.getElementById("site-header")
//   window.addEventListener("scroll", event => {
//     if (window.scrollY - posY > 76) {
//       header.classList.add("hide")
//       posY = window.scrollY
//     } else if (window.scrollY - posY < 0) {
//       header.classList.remove("hide")
//       posY = window.scrollY
//     }
//   })
// }

export const onRouteUpdate = () => {
  var posY = 0;
  const header = document.getElementById("site-header");
  window.addEventListener("scroll", (event) => {
    if (window.scrollY - posY > 76) {
      header.classList.add("hide");
      posY = window.scrollY;
    } else if (window.scrollY - posY < 0) {
      header.classList.remove("hide");
      posY = window.scrollY;
    }
  });
};
