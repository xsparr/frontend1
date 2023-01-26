import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="https://example.com" target="_blank" rel="noopener noreferrer">
          Arkawi
        </a>
        <span className="ms-1">&copy; 2022 Arkawi.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="https://example.com" target="_blank" rel="noopener noreferrer">
          Arkawi React Admin &amp; Dashboard Template
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
