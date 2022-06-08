//sidebar
const menuItems = document.querySelectorAll('.menu_item');
console.log(menuItems);
//Messages
const messagesNotification = document.querySelector('#notifications_messages');
const messages = document.querySelector('.messages');
const message = document.querySelectorAll('.message');
const messageSearch = document.querySelector('#message_search')
// Theme
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize_theme');
const fontSizes = document.querySelectorAll('.choose_size span');
let root = document.querySelector(':root'); 
const colorPalette = document.querySelectorAll('.choose_color span');
const Bg1 = document.querySelector('.bg_1');
const Bg2 = document.querySelector('.bg_2');
const Bg3 = document.querySelector('.bg_3');

console.log(Bg1,Bg2,Bg3);






// remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active')
    })
}


menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if (item.id != 'notifications') {
            document.querySelector('.notifications_popup').style.display = "none";
        } else {
            document.querySelector('.notifications_popup').style.display = 'block';
            document.querySelector('#notifications .notification_count').style.display = 'none';
        }
    })
})

// Messages
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    console.log(val);
    message.forEach(chat => {
        let name = chat.querySelector('h5').textContent.toLowerCase();
        if (name.indexOf(val) != -1) {
            chat.style.display = 'flex';
        } else {
            chat.style.display = 'none';
        }
    })
}
//search chat
messageSearch.addEventListener('keyup', searchMessage);

// when messages menu item is clicked
messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification_count').style.display = "none";
    setTimeout(() => {
        messages.style.boxShadow = "none";
    },2000)
})



//Theme

//opens modal
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}
//closes modal
const closeThemeModal = (e) => {
    if (e.target.classList.contains('customize_theme')) {
        themeModal.style.display = 'none';
    }
}
//close modal
themeModal.addEventListener('click',closeThemeModal)

theme.addEventListener('click', openThemeModal);



// Fonts////////////////////////////////////////////////////////
// Remove active class from spans or font size selectors
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}


fontSizes.forEach(size => {
    

    size.addEventListener('click', () => {
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');
        if(size.classList.contains('font_size_1')){
            fontSize = '10px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '5.4rem');
        } else if (size.classList.contains('font_size_2')) {
            fontSize = '13px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '-7rem');
        } else if (size.classList.contains('font_size_3')) {
            fontSize = '16px';
            root.style.setProperty('--sticky-top-left', '-2rem');
            root.style.setProperty('--sticky-top-right', '-17rem');
        }else if (size.classList.contains('font_size_4')) {
            fontSize = '19px';
            root.style.setProperty('--sticky-top-left', '-5rem');
            root.style.setProperty('--sticky-top-right', '-25rem');
        }else if (size.classList.contains('font_size_5')) {
            fontSize = '22px';
            root.style.setProperty('--sticky-top-left', '-12rem');
            root.style.setProperty('--sticky-top-right', '-35rem');
        }

            //change font size of the root html element
        document.querySelector('html').style.fontSize = fontSize;
    })
})

//remove active class from colors
const changeActiveColorClass = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}

// Change primary colors
colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        let primary;
        changeActiveColorClass();
        if (color.classList.contains('color_1')) {
            primaryHue = 252;
        } else if (color.classList.contains('color_2')) {
            primaryHue = 52;
        }else if (color.classList.contains('color_3')) {
            primaryHue = 352;
        }else if (color.classList.contains('color_4')) {
            primaryHue = 152;
        }else if (color.classList.contains('color_5')) {
            primaryHue = 202;
        }
        color.classList.add('active');
        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})




// BG
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

// change BG
const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
};

Bg1.addEventListener('click', () => {
    // lightColorLightness = '95%';
    // whiteColorLightness = '20%';
    // darkColorLightness = '15%';

    Bg1.classList.add('.active');

    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
    console.log(lightColorLightness,whiteColorLightness,darkColorLightness);
    window.location.reload();
});

Bg2.addEventListener('click', () => {
    lightColorLightness = '15%';
    whiteColorLightness = '20%';
    darkColorLightness = '95%';

    Bg2.classList.add('.active');

    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
    console.log(lightColorLightness,whiteColorLightness,darkColorLightness);
});


Bg3.addEventListener('click', () => {
    lightColorLightness = '0%';
    whiteColorLightness = '10%';
    darkColorLightness = '95%';

    Bg3.classList.add('.active');

    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG();
    console.log(lightColorLightness,whiteColorLightness,darkColorLightness);
});
