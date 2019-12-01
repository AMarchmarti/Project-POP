const header = document.getElementById('header-component')

function HeaderComponent () {

    const list = ['About us', 'Projects', 'CV', 'Contacts']

    let nav = document.createElement('nav')
    nav.setAttribute('class', 'navigator')
    
    let ul = document.createElement('ul')
    
    list.forEach( content => {
        let li = document.createElement('li')

        let link = document.createElement('a')
        link.textContent = content


        li.appendChild(link)

        ul.appendChild(li)
    })
 
    nav.appendChild(ul)

    header.appendChild(nav)
}

HeaderComponent()