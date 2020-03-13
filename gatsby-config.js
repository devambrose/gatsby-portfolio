
/**
 *Module downloaded emotion core
 *
 */
const path=require("path");
module.exports = {
    siteMetadata:{
          title:`My web Page`,
    },
    plugins: [
        {
            resolve:`gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`
            }
        },
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                defaultLayouts:{
                    default:require.resolve("./src/components/layout/Layout")
                }
            }
        },
        {
            resolve:`gatsby-plugin-react-helmet`,
            options:{

            },
        },
        {
            resolve:`gatsby-transformer-sharp`,
            option:{  }
        },{
            resolve:`gatsby-plugin-sharp`,
            option:{    }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name:`images`,
                path: `${__dirname}/src/images`,
            }
        },
        {
            resolve:`gatsby-plugin-offline`,
            options:{
                precachePages:['/about/','/contact/']
            }
        }
    ]
}
