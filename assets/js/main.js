// To Open and Close of SideNav
function OpenNav() {
    if(screen.width <= 768){
        document.getElementById("SideNav").style.width = "250px";
    }
}
function CloseNav() {
    if(screen.width <= 768){
        document.getElementById("SideNav").style.width = "0px";
    }
}
//Setting fixed navbar color after scrolling
window.onscroll = () => {
    let a = document.querySelector('.navigation_bar')
    if(window.scrollY > 300){
        a.style.backgroundColor = '#010488e6'
        a.style.transition = '0.5s'       
    }
    else{
        a.style.backgroundColor = 'transparent'
        a.style.transition = '0.5s'
    }
}

//Setting Opacity and display of PopUp
OpenPopup = () => {
    document.querySelector('.popup').style.display = 'block';
    document.querySelector('.popup').style.animation = 'bounceInLeft 1s';
    document.querySelector('.popup').style.opacity = '1 !important';
    document.querySelector('.popup').style.zIndex = '9999';
    document.querySelector('#landing_page').style.opacity = '0.5';
    document.querySelector('#partners').style.opacity = '0.5';
    document.querySelector('#footer_form').style.opacity = '0.5';
    document.querySelector('.copyright').style.opacity = '0.5';

}
ClosePopup = () => {
    document.querySelector('.popup').style.display = 'none';
    document.querySelector('.popup').style.animation = 'bounceOutLeft 1s';
    document.querySelector('#landing_page').style.opacity = '1';
    document.querySelector('#partners').style.opacity = '1';
    document.querySelector('#footer_form').style.opacity = '1';
    document.querySelector('.copyright').style.opacity = '1';
}

OpenPopupLogin = () => {
    document.querySelector('.popuplogin').style.display = 'block';
    document.querySelector('.popuplogin').style.animation = 'bounceInLeft 1s';
    document.querySelector('.popuplogin').style.opacity = '1 !important';
    document.querySelector('.popuplogin').style.zIndex = '9999';
    document.querySelector('#landing_page').style.opacity = '0.5';
    document.querySelector('#partners').style.opacity = '0.5';
    document.querySelector('#footer_form').style.opacity = '0.5';
    document.querySelector('.copyright').style.opacity = '0.5';

}
ClosePopupLogin = () => {
    document.querySelector('.popuplogin').style.display = 'none';
    document.querySelector('.popuplogin').style.animation = 'bounceOutLeft 1s';
    document.querySelector('#landing_page').style.opacity = '1';
    document.querySelector('#partners').style.opacity = '1';
    document.querySelector('#footer_form').style.opacity = '1';
    document.querySelector('.copyright').style.opacity = '1';
}
OpenSignup = () => {
    document.querySelector('.register-form').style.display = 'block';
    document.querySelector('.login-page').style.animation = 'bounceInLeft 1s';
    document.querySelector('.login-form').style.display = 'none';
}

OpenSignin = () => {
    document.querySelector('.login-form').style.display = 'block';
    document.querySelector('.login-page').style.animation = 'bounceInLeft 1s';
    document.querySelector('.register-form').style.display = 'none';
}