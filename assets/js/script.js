'use strict'

const hamburger = document.querySelector('#open-btn')
const closeBtn = document.querySelector('#close-btn')

const navBar = document.querySelector('.navbar-nav')

const navBarToggle = () => navBar.classList.toggle('active')

hamburger.addEventListener('click', navBarToggle)
closeBtn.addEventListener('click', navBarToggle)