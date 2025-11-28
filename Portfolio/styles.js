function handleClick (buttonClass, targetClass, targetID) {
    const button = document.querySelector(buttonClass);
    const target = document.querySelector(targetClass);

    button.addEventListener('click', () => {
        target.classList.add('active');

        document.getElementById(targetID).scrollIntoView({
            behavior: 'smooth'
        });
        setTimeout(() => {
            target.classList.remove('active');
        }, 1300);
    });
}

handleClick('.aboutHeader', '.aboutMe', 'aboutMeID');
handleClick('.skillsHeader', '.skillsClass', 'skillsID');