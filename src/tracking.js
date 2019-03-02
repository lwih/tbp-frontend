export const trackClickout = (price) => {
    window.ga && window.ga('send', {
        hitType: 'event',
        eventCategory: 'go-to-partner',
        eventAction: 'clickout',
        eventLabel: price
    });
}
