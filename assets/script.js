const shareBtn= document.querySelector('#share-btn');
const socialLinkSection = document.querySelector('#links-section')
const arrow = document.querySelector('#arrow')

shareBtn.addEventListener("click" , ()=>{
    shareBtn.classList.toggle('card-social-btn-click');
    socialLinkSection.classList.toggle('card-social-links-click')
    arrow.classList.toggle('card-sotial-arrow-click')
    
})
