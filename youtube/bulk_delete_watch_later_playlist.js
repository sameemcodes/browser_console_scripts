function sleep(ms) { 
    return new Promise(resolve => setTimeout(resolve, ms)); 
}

async function removeFromWatchLater() { 
    'use strict';
    
    // Select all the dropdown buttons to open the menu for each video in the Watch Later playlist
    var items = document.querySelectorAll('ytd-menu-renderer > yt-icon-button.dropdown-trigger > button[aria-label]'); 

    for (var i = 0; i < items.length; i++) { 
        items[i].click(); // Click the dropdown button to open the menu

        // Wait for the menu to render and for the remove button to be available
        await sleep(500); // Adjust this delay as necessary based on rendering speed

        // Find the "Remove from Watch Later" button using the provided selector
        var removeButton = document.querySelector('#items > ytd-menu-service-item-renderer:nth-child(3) > tp-yt-paper-item');

        // If the button exists, click it to remove the video
        if (removeButton) {
            removeButton.click();
            await sleep(500); // Wait for the action to complete
        }
    }
}

// Call the function to start removing videos from Watch Later
removeFromWatchLater();
