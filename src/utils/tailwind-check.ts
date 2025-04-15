export function checkTailwind() {
    if (typeof document !== 'undefined') {
      const div = document.createElement('div')
      div.className = 'hidden'
      document.body.appendChild(div)
      
      const isLoaded = window.getComputedStyle(div).display === 'none'
      document.body.removeChild(div)
      
      console.log('Tailwind CSS está carregado:', isLoaded)
      return isLoaded
    }
    return false
  }