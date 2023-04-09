import React from 'react'
import "../styles/footer.css"

export default function Footer() {
  return (
        <footer>
          <div className="logo-container">
              <img src="../../public/logoDH.png" alt="Logo de la empresa"/>
          </div>
          <div className="social-icons-container">
              <ul className="social-icons-list">
                <li><a href="https://www.facebook.com"><i className="fab fa-facebook"></i></a></li>
                <li><a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a></li>
                <li><a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a></li>
              </ul>
          </div>
        </footer>
  )
}
