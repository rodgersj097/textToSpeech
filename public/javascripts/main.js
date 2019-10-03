
var button = document.querySelector("a")
button.addEventListener('click', function () {
    var text = document.querySelector("input").value
    console.log("Sending text ")
    $.ajax({
        async: true,
        url: "/getText",
        type: "POST",
        dataType: "json",
        data: {
            inputText: text
        },

        complete: function () {
            console.log("process complete")
        },
        success: function (data) {
            console.log(data)
        },
        error: function (xhr, status, error) {
            var errorMessage = xhr.status + ': ' + xhr.statusText
            console.log('Error - ' + errorMessage);
        }
    })

})