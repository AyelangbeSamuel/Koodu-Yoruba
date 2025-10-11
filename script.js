// basic interactions: dark mode + language + subscribe/contact form UX

// 1. SELECTORS
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

// 2. STATE MANAGEMENT (Loaded from Local Storage)
// Initial dark mode state: check local storage or default to false
let dark = localStorage.getItem('darkMode') === 'true';
// Initial language state: check local storage or default to false (English)
let yoruba = localStorage.getItem('yorubaLang') === 'true';

// 3. INITIAL SETUP
// Apply saved dark mode state immediately on load
function applyDarkMode() {
    document.body.classList.toggle('dark', dark);
    if (toggles.darkBtn) {
        toggles.darkBtn.textContent = dark ? '☀️' : '🌙';
    }
}
// Apply saved language state immediately on load
function applyLanguage() {
    if (yoruba) {
        // Yoruba translations
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
        // English translations (corrected for consistency)
        toggles.siteTitle.textContent = 'Kóòdù Yoruba';
        toggles.siteSubtitle.textContent = 'Learn hardware programming in Yoruba';
        toggles.heroTitle.textContent = 'Kóòdù Yoruba';
        // Removed extra period
        toggles.heroSub.textContent = 'Programming Arduino and hardware in Yoruba.';
        toggles.videosTitle.textContent = 'Latest Tutorials';
        toggles.videosDesc.textContent = 'Shorts and full tutorials in Yoruba.';
        toggles.libraryTitle.textContent = 'AdeYorubaDuino Library';
        // Corrected description
        toggles.libraryDesc.textContent = 'Download the Yoruba Arduino library and the dictionary (docx / pdf).';
        toggles.supportDesc.textContent = 'Send a message, subscribe, or sponsor the channel.';
        toggles.ctaWatch.textContent = 'Watch Tutorials';
        toggles.ctaDownload.textContent = 'Download Library';
    }
}

applyDarkMode();
// Only apply language if elements are found (to prevent errors)
if (toggles.siteTitle) {
    applyLanguage(); 
}


// 4. EVENT LISTENERS
// Dark Mode Toggle
if(toggles.darkBtn){
  toggles.darkBtn.addEventListener('click', () => {
    dark = !dark;
    localStorage.setItem('darkMode', dark); // Save state
    applyDarkMode();
  });
}

// Language Toggle
if(toggles.langBtn){
  toggles.langBtn.addEventListener('click', () => {
    yoruba = !yoruba;
    localStorage.setItem('yorubaLang', yoruba); // Save state
    applyLanguage();
  });
}


// 5. FORM HANDLING UTILITY FUNCTION
function handleFormSubmission(formElement) {
    // If the form exists in the DOM
    if (formElement) {
        formElement.addEventListener('submit', (e) => {
            e.preventDefault();
            const data = new FormData(formElement);
            // Add a friendly feedback text based on the form context
            const successMsg = formElement.id === 'subscribeForm' 
                ? 'Thank you — A dupẹ́! You are subscribed.' 
                : 'Message sent — Ẹ kú iṣẹ́! We will reply soon.';

            fetch(formElement.action, {
                method: 'POST',
                body: data,
                headers: { 'Accept': 'application/json' }
            }).then(res => {
                if (res.ok) {
                    alert(successMsg);
                    formElement.reset();
                } else {
                    alert('Submission failed — please try again or email ayelangbeadeyinka@gmail.com');
                }
            }).catch(err => {
                alert('Network error — try again later.');
            });
        });
    }
}

// 6. FORM INITIALIZATION
const subscribeForm = document.getElementById('subscribeForm');
const contactForm = document.getElementById('contactForm'); // Added contact form

handleFormSubmission(subscribeForm);
handleFormSubmission(contactForm); // Handle the contact form too!


// 7. SMOOTH SCROLLING
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', (e)=>{
    const href = a.getAttribute('href');
    if(href.length>1 && document.querySelector(href)){ // Check if target exists
      e.preventDefault();
      document.querySelector(href).scrollIntoView({behavior:'smooth'});
    }
  });
});