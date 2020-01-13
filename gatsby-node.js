const path = require('path')
const { Photon } = require("@prisma/photon");

exports.createPages = async ({ actions: { createPage } }) => {
  try {
    const postTemplate = path.resolve(`./src/templates/post.js`)
    const photon = new Photon();

    const posts = await photon.posts();

    createPage({
      path: `/`,
      component: require.resolve("./src/templates/posts.js"),
      context: {
        posts
      },
    })

    posts.forEach(({ id, title, content }) => {
      createPage({
        path: id,
        component: postTemplate,
        context: {
          id,
          title,
          content
        }
      })
    })
  } catch (error) {
    console.log(error)
  }
}