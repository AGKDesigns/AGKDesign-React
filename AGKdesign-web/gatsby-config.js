module.exports = {
  siteMetadata: {
    title: 'Alex Knight / UX UI Design / Tokyo, Japan',
    description: 'Alex Knight is a user experience and user interface designer from Australia, living in Tokyo, Japan.',
    keywords: 'Design, graphic, user interface, user experience, clean, minimal, animation, interaction, prototype, methodology, mvp, build, code, react'
  },

  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 's7l2balf0h27',
        accessToken: '0UGnPMJK-6SLBR3J5iA6ToUPGBkqeqUJy1NuOKpZfhc'
      }
    }
  ],
}

// In your gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-58472702-10",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Enables Google Optimize using your container Id
        optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Any additional create only fields (optional)
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "example.com",
      },
    },
  ],
}
