function populateDropdown(nameArray) {
    var index = 0;
    $('#removeSelector').empty();
    nameArray.forEach(function(entry) {
        $("#removeSelector").append("<option value=\"" + index +
            "\">" + entry + "</option>");
        index++;
    });
}