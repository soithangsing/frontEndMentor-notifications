// import the font and store all colours as CSS variable - done ✅

// import profile pictures and establish css layout  - done ✅

// establish dom element links - done ✅

// make a mobile breakpoint and finish the UI

// Make unread notifications clickable to update the notification counter and mark as read

// Query Selectors

const unreadNotifs = document.querySelectorAll('.unread');

const notifications = document.querySelectorAll('.notification'); 

let unreadNotifsArr = Array.from(unreadNotifs);

const notificationCounter = document.querySelector('.notification-header__counter')

const markAllasRead = document.querySelector('.mark-read');

const unreadElements = document.getElementsByClassName('unread');

// const spans = document.getElementsByTagName(span);
// // End of Query Selectors
function notificationDot() {

    for (let child of unreadNotifs) {
        const dot = document.createElement('span');
    
        dot.classList.add('dot');
    
        const firstParent = child.children;
    
        const secondParent = firstParent[1].children;
    
        const para = secondParent[0]
    
        para.appendChild(dot)
    }
       
}

notificationDot(unreadNotifsArr.length)

notificationCounter.textContent = unreadNotifsArr.length;

function readAll() {

    for(let i= 0; i < unreadNotifsArr.length; i++) {
        unreadNotifs[i].classList.remove('unread');
    }
    unreadNotifsArr = []

    notificationCounter.textContent = unreadNotifsArr.length;

    for (let child of notifications) {
        const firstParent = child.children;
    
        const secondParent = firstParent[1].children;
    
        const para = secondParent[0];
        
        para.childNodes.forEach(c=> {
            if(c.tagName == 'SPAN') {
                para.removeChild(c);
            }
        });
        
    }

    notificationCounter.classList.add('hidden');
   
}

markAllasRead.addEventListener('click', readAll);

for(let i = 0; i < unreadElements.length; i++) {
    unreadElements[i].addEventListener('click', (e) => {
        e.currentTarget.classList.remove('unread');

        unreadNotifsArr.pop()

        notificationCounter.textContent = unreadNotifsArr.length

        if(unreadNotifsArr.length < 1) {
            notificationCounter.classList.add('hidden');
        }

        const textParent = e.currentTarget.children[1]

        const paragraphParent  = textParent.children[0];
        
        paragraphParent.childNodes.forEach(c=> {
            if(c.tagName == 'SPAN') {
                paragraphParent.removeChild(c);
            }
        });
        
    }, {once: true})
}
