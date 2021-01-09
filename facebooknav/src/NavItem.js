import React, { useState } from 'react'

export default function NavItem({ icon, children }) {
  const [open, setOpen] = useState(false)
  return (
    <li className="nav-item">
      <a href="#!" className="icon-button" onClick={() => setOpen(!open)}>
        {icon}
      </a>
      {open && children}
    </li>
  )
}
