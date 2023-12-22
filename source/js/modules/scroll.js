const scrollButtonTours = document.querySelectorAll('[data-nav="tours"]');
const scrollTargetTours = document.querySelector('[data-tours]');
const scrollButtonEducation = document.querySelectorAll('[data-nav="education"]');
const scrollTargetEducation = document.querySelector('[data-education]');
const scrollButtonAbout = document.querySelectorAll('[data-nav="about"]');
const scrollTargetAbout = document.querySelector('[data-about]');
const scrollButtonReviews = document.querySelectorAll('[data-nav="reviews"]');
const scrollTargetReviews = document.querySelector('[data-reviews]');
const scrollButtonPhotos = document.querySelectorAll('[data-nav="photos"]');
const scrollTargetPhotos = document.querySelector('[data-photos]');
const scrollButtonContacts = document.querySelectorAll('[data-nav="contacts"]');
const scrollTargetContacts = document.querySelector('[data-contacts]');

scrollButtonTours.forEach((button) => button.addEventListener('click', scrollTours));
scrollButtonEducation.forEach((button) => button.addEventListener('click', scrollEducation));
scrollButtonAbout.forEach((button) => button.addEventListener('click', scrollAbout));
scrollButtonReviews.forEach((button) => button.addEventListener('click', scrollReviews));
scrollButtonPhotos.forEach((button) => button.addEventListener('click', scrollPhotos));
scrollButtonContacts.forEach((button) => button.addEventListener('click', scrollContacts));

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

