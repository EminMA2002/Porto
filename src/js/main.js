const cardElement = document.querySelector('.featuredleft');

cardElement.addEventListener('mousemove', (event) => {
    const { left, top, width, height } = cardElement.getBoundingClientRect();
    const x = event.clientX - left;
    const y = event.clientY - top;

    const centerX = left + width / 2;
    const centerY = top + height / 2;

    // Calculate the angle between the center and the mouse position
    const angleRadians = Math.atan2(event.clientY - centerY, event.clientX - centerX);
    const angleDegrees = (angleRadians * (180 / Math.PI) + 90 + 360) % 360;

    // Update the --rotation CSS variable on .js-card
    cardElement.style.setProperty('--rotation', `${angleDegrees}deg`);

});

cardElement.addEventListener('mouseleave', () => {
    // Reset the rotation when the mouse leaves
    cardElement.style.setProperty('--rotation', '57deg');
});

// _________________________________________

const cardElement2 = document.querySelector('.featuredright1');

cardElement2.addEventListener('mousemove', (event) => {
    const { left, top, width, height } = cardElement2.getBoundingClientRect();
    const x = event.clientX - left;
    const y = event.clientY - top;

    const centerX = left + width / 2;
    const centerY = top + height / 2;

    // Calculate the angle between the center and the mouse position
    const angleRadians = Math.atan2(event.clientY - centerY, event.clientX - centerX);
    const angleDegrees = (angleRadians * (180 / Math.PI) + 90 + 360) % 360;

    // Update the --rotation CSS variable on .js-card
    cardElement2.style.setProperty('--rotation', `${angleDegrees}deg`);

});

cardElement2.addEventListener('mouseleave', () => {
    // Reset the rotation when the mouse leaves
    cardElement2.style.setProperty('--rotation', '57deg');
});

// _________________________________________

const cardElement3 = document.querySelector('.featuredright2');

cardElement3.addEventListener('mousemove', (event) => {
    const { left, top, width, height } = cardElement3.getBoundingClientRect();
    const x = event.clientX - left;
    const y = event.clientY - top;

    const centerX = left + width / 2;
    const centerY = top + height / 2;

    // Calculate the angle between the center and the mouse position
    const angleRadians = Math.atan2(event.clientY - centerY, event.clientX - centerX);
    const angleDegrees = (angleRadians * (180 / Math.PI) + 90 + 360) % 360;

    // Update the --rotation CSS variable on .js-card
    cardElement3.style.setProperty('--rotation', `${angleDegrees}deg`);

});

cardElement3.addEventListener('mouseleave', () => {
    // Reset the rotation when the mouse leaves
    cardElement3.style.setProperty('--rotation', '57deg');
});

// _________________________________________

const cardElement4 = document.querySelector('.featuredright3');

cardElement4.addEventListener('mousemove', (event) => {
    const { left, top, width, height } = cardElement4.getBoundingClientRect();
    const x = event.clientX - left;
    const y = event.clientY - top;

    const centerX = left + width / 2;
    const centerY = top + height / 2;

    // Calculate the angle between the center and the mouse position
    const angleRadians = Math.atan2(event.clientY - centerY, event.clientX - centerX);
    const angleDegrees = (angleRadians * (180 / Math.PI) + 90 + 360) % 360;

    // Update the --rotation CSS variable on .js-card
    cardElement4.style.setProperty('--rotation', `${angleDegrees}deg`);

});

cardElement4.addEventListener('mouseleave', () => {
    // Reset the rotation when the mouse leaves
    cardElement4.style.setProperty('--rotation', '57deg');
});

// _________________________________________

const cardElement5 = document.querySelector('.featuredright4');

cardElement5.addEventListener('mousemove', (event) => {
    const { left, top, width, height } = cardElement5.getBoundingClientRect();
    const x = event.clientX - left;
    const y = event.clientY - top;

    const centerX = left + width / 2;
    const centerY = top + height / 2;

    // Calculate the angle between the center and the mouse position
    const angleRadians = Math.atan2(event.clientY - centerY, event.clientX - centerX);
    const angleDegrees = (angleRadians * (180 / Math.PI) + 90 + 360) % 360;

    // Update the --rotation CSS variable on .js-card
    cardElement5.style.setProperty('--rotation', `${angleDegrees}deg`);

});

cardElement5.addEventListener('mouseleave', () => {
    // Reset the rotation when the mouse leaves
    cardElement5.style.setProperty('--rotation', '57deg');
});