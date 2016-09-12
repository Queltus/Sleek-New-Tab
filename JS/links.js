function loadLinks() {
    var getArray = ["name", "address", "color"];

    chrome.storage.sync.get(getArray, function(retVal) {
        var name = new Array(0);
        var color = new Array(0);
        var address = new Array(0);

        for (i = 0; i < 9; i++) {
            document.getElementById("linkDiv" + (i + 1)).innerHTML = " ";
        }

        if (retVal.name == null) {
            chrome.storage.sync.remove(getArray, function() {
                return;
            });
            chrome.storage.sync.set({
                name: name
            })
            chrome.storage.sync.set({
                address: address
            });
            chrome.storage.sync.set({
                color: color
            });
        }

        if (retVal.address == null) {
            chrome.storage.sync.remove(getArray, function() {
                return;
            });
            chrome.storage.sync.set({
                name: name
            })
            chrome.storage.sync.set({
                address: address
            });
            chrome.storage.sync.set({
                color: color
            });
        }

        if (retVal.color == null) {
            chrome.storage.sync.remove(getArray, function() {
                return;
            });
            chrome.storage.sync.set({
                name: name
            })
            chrome.storage.sync.set({
                address: address
            });
            chrome.storage.sync.set({
                color: color
            });
        }

        if (retVal.name.length <= 9) {
            for (i = 0; i < retVal.name.length; i++) {
                document.getElementById("linkDiv" + (i + 1)).innerHTML =
                    "<a href=\"" + retVal.address[i] + "\" title=" +
                    retVal.name[i] + " class=\"link\" style=\"color:" + retVal.color[i] +
                    "\">" + retVal.name[i].charAt(0).toUpperCase() + "</a>";
            }
        }

        populateDropdown(retVal.name);
    });
}

function addLink() {
    var name = $("#nameBox").val();
    var color = $("#colorButton").spectrum("get").toHexString();
    var address = $("#addressBox").val();
    if(!isValidURL(address)) {
        return;
    }

    var getArray = ["name", "address", "color"];
    chrome.storage.sync.get(getArray, function(retVal) {
        if (retVal.name.length < 9) {
            retVal.name.push(name);
            retVal.color.push(color);
            retVal.address.push(address);

            chrome.storage.sync.set({
                name: retVal.name
            });
            chrome.storage.sync.set({
                address: retVal.address
            });
            chrome.storage.sync.set({
                color: retVal.color
            });
        } else {
            alert("You have already set 9 links. Please remove one before trying to add another one.");
            return;
        }
    });
    
    //Clear the entries
    $("#nameBox").val("");
    $("#addressBox").val("");
}

function removeLink() {
    var index = $("#removeSelector").val();

    var getArray = ["name", "address", "color"];
    chrome.storage.sync.get(getArray, function(retVal) {
        retVal.name.splice(index, 1);
        retVal.address.splice(index, 1);
        retVal.color.splice(index, 1);

        chrome.storage.sync.set({
            name: retVal.name
        });
        chrome.storage.sync.set({
            address: retVal.address
        });
        chrome.storage.sync.set({
            color: retVal.color
        });
    });
}