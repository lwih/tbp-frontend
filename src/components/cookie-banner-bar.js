import React from 'react'
import CookieBanner from 'react-cookie-banner'

const CookieBannerBar = ({}) => (
  <CookieBanner
    styles={{
      banner: { position: 'fixed', bottom: 0, left: 0 },
      button: { background: 'white', width: '50px' },
    }}
    message={
      'Diese Webseite verwendet Cookies, um Ihnen ein angenehmeres Surfen zu ermöglichen.'
    }
    buttonMessage={'ok'}
    onAccept={() => {}}
    cookie="user-has-accepted-cookies"
    dismissOnScroll={false}
  />
)

export default CookieBannerBar
