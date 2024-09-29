function sleep(ms) { 
    return new Promise(resolve => setTimeout(resolve, ms)); 
}

async function deleteLikedVideos() { 
    'use strict'; 
    // Select all the dropdown buttons to open the menu for each liked video
    var items = document.querySelectorAll('ytd-menu-renderer > yt-icon-button.dropdown-trigger > button[aria-label]'); 

    for (var i = 0; i < items.length; i++) { 
        items[i].click(); // Click the dropdown button to open the menu

        // Wait for the menu to render and the specific "Remove" option to appear
        await sleep(500); // Adjust this delay if needed based on how fast the menu appears

        // Find the "Remove from Liked videos" button by its text content
        var removeButton = Array.from(document.querySelectorAll('yt-formatted-string.style-scope.ytd-menu-service-item-renderer'))
            .find(element => element.textContent.trim() === 'Remove from Liked videos');

        // If the button exists, click to remove the video from liked list
        if (removeButton) {
            removeButton.click(); 
            await sleep(500); // Wait for the action to complete before moving to the next item
        }
    }
}

// Call the function to start removing liked videos
deleteLikedVideos();
