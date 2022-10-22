// import the font and store all colours as CSS variable - done ✅

// import profile pictures and establish css layout  - done ✅

// establish dom element links - done ✅

// make a mobile breakpoint and finish the UI

// Query Selectors

const unreadNotifs = document.querySelectorAll('.unread');

const notifications = document.querySelectorAll('.notification'); 

let unreadNotifsArr = Array.from(unreadNotifs);

const notificationCounter = document.querySelector('.notification-header__counter')

const markAllasRead = document.querySelector('.mark-read');

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

markAllasRead.addEventListener('click', readAll)

