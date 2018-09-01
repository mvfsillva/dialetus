'use strict'

// Packages
import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header>
      <nav>
        <Link href="/" prefetch>
          <a>Home</a>
        </Link>

        <Link href="/about" prefetch>
          <a>About</a>
        </Link>

        <a href="https://idwall.atlassian.net/wiki/spaces/TOO/pages/66060413/Documenta+o+t+cnica">
          Docs
        </a>

        <a href="https://github.com/bukinoshita/create-tools-app">Github</a>
      </nav>

      <style jsx>{`
        header {
          text-align: center;
          height: 100px;
          line-height: 100px;
        }

        a {
          color: #b2b6bf;
          text-transform: uppercase;
          font-weight: 600;
          font-size: 12px;
          text-decoration: none;
          letter-spacing: 4px;
          margin-right: 10px;
          transition: 0.25s;
        }

        a:hover {
          color: #23183d;
        }

        a:hover:after {
          color: #b2b6bf;
        }

        a:last-child {
          margin-right: 0;
        }

        a:after {
          content: '/';
          padding-left: 10px;
        }

        a:last-child:after {
          content: '';
          padding-left: 0;
        }
      `}</style>
    </header>
  )
}

export default Header
