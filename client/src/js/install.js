const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault()
    butInstall.style.visibility = 'visible'

    butInstall.addEventListener('click', async () => {
        event.prompt()
        butInstall.setAttribute('disabled', true)
    });
});

// TODO: Implement a click event handler on the `butInstall` element


// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    butInstall.textContent = "Successfully Installed!"
    console.log('app installed', event)
});
