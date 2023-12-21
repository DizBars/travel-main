const scrollButtonTours = document.querySelector('[data-nav="tours"]');
const scrollTargetTours = document.querySelector('[data-tours]');
const scrollButtonEducation = document.querySelector('[data-nav="education"]');
const scrollTargetEducation = document.querySelector('[data-education]');
const scrollButtonAbout = document.querySelector('[data-nav="about"]');
const scrollTargetAbout = document.querySelector('[data-about]');
const scrollButtonReviews = document.querySelector('[data-nav="reviews"]');
const scrollTargetReviews = document.querySelector('[data-reviews]');
const scrollButtonPhotos = document.querySelector('[data-nav="photos"]');
const scrollTargetPhotos = document.querySelector('[data-photos]');
const scrollButtonContacts = document.querySelector('[data-nav="contacts"]');
const scrollTargetContacts = document.querySelector('[data-contacts]');

scrollButtonTours.addEventListener('click', scrollTours);
scrollButtonEducation.addEventListener('click', scrollEducation);
scrollButtonAbout.addEventListener('click', scrollAbout);
scrollButtonReviews.addEventListener('click', scrollReviews);
scrollButtonPhotos.addEventListener('click', scrollPhotos);
scrollButtonContacts.addEventListener('click', scrollContacts);

function scrollTours() {
  scrollTargetTours.scrollIntoView({block: 'center', behavior: 'smooth'});
}

function scrollEducation() {
  scrollTargetEducation.scrollIntoView({block: 'center', behavior: 'smooth'});
}

function scrollAbout() {
  scrollTargetAbout.scrollIntoView({block: 'center', behavior: 'smooth'});
}

function scrollReviews() {
  scrollTargetReviews.scrollIntoView({block: 'center', behavior: 'smooth'});
}

function scrollPhotos() {
  scrollTargetPhotos.scrollIntoView({block: 'center', behavior: 'smooth'});
}

function scrollContacts() {
  scrollTargetContacts.scrollIntoView({block: 'center', behavior: 'smooth'});
}

