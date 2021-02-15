const themeMap = {
  dark: 'light',
  light: 'solar',
  solar: 'dark',
}

const temp = Object.keys(themeMap)[0]

const theme = localStorage.getItem('theme') || temp
localStorage.setItem('theme', theme)

const bodyClass = document.body.classList
bodyClass.add(theme)

function toggleTheme() {
  const current = localStorage.getItem('theme')
  const next = themeMap[current]

  bodyClass.replace(current, next)
  localStorage.setItem('theme', next)
}

document.getElementById('themeButton').onclick = toggleTheme
