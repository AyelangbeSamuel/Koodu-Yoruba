// basic interactions: dark mode + language + subscribe form friendly UX
const toggles = {
  darkBtn: document.getElementById('toggle-dark'),
  langBtn: document.getElementById('toggle-lang'),
  siteTitle: document.getElementById('site-title'),
  siteSubtitle: document.getElementById('site-subtitle'),
  heroTitle: document.getElementById('hero-title'),
  heroSub: document.getElementById('hero-sub'),
  videosTitle: document.getElementById('videosTitle'),
  videosDesc: document.getElementById('videosDesc'),
  libraryTitle: document.getElementById('libraryTitle'),
  libraryDesc: document.getElementById('libraryDesc'),
  supportDesc: document.getElementById('supportDesc'),
  ctaWatch: document.getElementById('cta-watch'),
  ctaDownload: document.getElementById('cta-download')
};
let dark = false;
let yoruba = false;

if(toggles.darkBtn){
  toggles.darkBtn.addEventListener('click', () => {
    dark = !dark;
    document.body.classList.toggle('dark', dark);
    toggles.darkBtn.textContent = dark ? '☀️' : '🌙';
  });
}
if(toggles.langBtn){
  toggles.langBtn.addEventListener('click', () => {
    yoruba = !yoruba;
    if(yoruba){
      toggles.siteTitle.textContent = 'Kóòdù Yoruba';
      toggles.siteSubtitle.textContent = 'Kọ́ ẹ̀kọ́ ìṣàkóso hardware ní èdè Yorùbá';
      toggles.heroTitle.textContent = 'Kóòdù Yoruba';
      toggles.heroSub.textContent = 'Kọ́ Arduino àti hardware ní Yorùbá';
      toggles.videosTitle.textContent = 'Àwọn Ẹ̀kọ́ Tó Ṣẹ́yìn Jùlọ';
      toggles.videosDesc.textContent = 'Àwọn movies kékèké àti ẹkọ́ pípẹ́ ní èdè Yorùbá';
      toggles.libraryTitle.textContent = 'AdeYorubaDuino Láilìbrárì';
      toggles.libraryDesc.textContent = 'Gba ilẹ̀kùn Yorùbá Arduino';
      toggles.supportDesc.textContent = 'Ránṣẹ́ tàbí ṣe àtìlẹ́yìn fún ikanni';
      toggles.ctaWatch.textContent = 'Wo Ẹ̀kọ́';
      toggles.ctaDownload.textContent = 'Gba Láilìbrárì';
    } else {
      toggles.siteTitle.textContent = 'Kóòdù Yoruba';
      toggles.siteSubtitle.textContent = 'Learn hardware programming in Yoruba';
      toggles.heroTitle.textContent = 'Kóòdù Yoruba';
      toggles.heroSub.textContent = 'Programming Arduino and hardware — in Yoruba.';
      toggles.videosTitle.textContent = 'Latest Tutorials';
      toggles.videosDesc.textContent = 'Shorts and full tutorials in Yoruba.';
      toggles.libraryTitle.textContent = 'AdeYorubaDuino Library';
      toggles.libraryDesc.textContent = 'Download the Yoruba Arduino library and docs';
      toggles.supportDesc.textContent = 'Send a message or support the project';
      toggles.ctaWatch.textContent = 'Watch Tutorials';
      toggles.ctaDownload.textContent = 'Download Library';
    }
  });
}

// Simple form success UX for Formspree
const subscribeForm = document.getElementById('subscribeForm');
if(subscribeForm){
  subscribeForm.addEventListener('submit', (e) => {
    // formspree handles the network; give feedback
    e.preventDefault();
    const data = new FormData(subscribeForm);
    fetch(subscribeForm.action, {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' }
    }).then(res => {
      if(res.ok){
        alert('Thank you — A dupẹ́! You are subscribed.');
        subscribeForm.reset();
      } else {
        alert('Subscription failed — please try again or email ayelangbeadeyinka@gmail.com');
      }
    }).catch(err => {
      alert('Network error — try again later.');
    });
  });
}

// optional: smooth scrolling for anchors
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', (e)=>{
    const href = a.getAttribute('href');
    if(href.length>1){
      e.preventDefault();
      document.querySelector(href).scrollIntoView({behavior:'smooth'});
    }
  });
});
