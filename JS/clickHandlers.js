function toggleAddMenu() {
    el = document.getElementById("addMenu");
    el.style.visibility = (el.style.visibility == "visible") ? "hidden" :
        "visible";
}

function toggleRemoveMenu() {
    el = document.getElementById("removeMenu");
    el.style.visibility = (el.style.visibility == "visible") ? "hidden" :
        "visible";
}

function clearStorage() {
    chrome.storage.sync.clear();
    loadLinks();
    alert("Storage cleared");
}

//Start the required funcitons and add Eventlisteners to the interactive Elements
document.addEventListener('DOMContentLoaded', function() {
    getResponse();
    clock();
    document.getElementById("showAddButton").addEventListener('click',
        toggleAddMenu);
    document.getElementById("showRemoveButton").addEventListener(
        'click', toggleRemoveMenu);
    document.getElementById("closeAddButton").addEventListener('click',
        toggleAddMenu);
    document.getElementById("closeRemoveButton").addEventListener(
        'click', toggleRemoveMenu);
    document.getElementById("saveButton").addEventListener('click',
        addLink);
    document.getElementById("removeButton").addEventListener('click',
        removeLink);

    loadLinks();

    //Event Listener to update links on storage change
    chrome.storage.onChanged.addListener(function() {
        loadLinks();
    });

    //Set the add menu color button as colorpicker
    $("#colorButton").spectrum({
        color: "#f00",
        showButtons: false,
        move: function(color) {
            $("#colorButton").css("background-color", color
                .toHexString());
        }
    });

});