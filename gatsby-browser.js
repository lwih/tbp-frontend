/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

exports.onRouteUpdate = ({location, prevLocation}) => {
    // Track pageview with google analytics
    if (window.ga) {
        window.ga(`set`, `page`, location.pathname + location.search + location.hash,)
        window.ga(`send`, `pageview`)
    }
}