styleElement = document.createElement('style');
styleElement.setAttribute('type', 'text/css');
styleElement.innerHTML = '@import url(\'https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap\'); *:not(i):not(.material-icons):not(svg):not(path):not(span) { font-family: \'Comic Neue\', cursive !important; font-weight: bold !important; }';
document.head.appendChild(styleElement);
