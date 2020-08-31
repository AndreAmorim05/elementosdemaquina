function selectInputs(inputs){
    var widgets = document.querySelectorAll('.data-plane div, .data-shaft div')

    for (var widget of widgets){
        widget.style.display = 'none'
    }

    for (const widgetID of inputs){
        document.querySelector(`.${widgetID}`).style.display = 'block'
    }
}

function set_concentrator(obj) {
    document.querySelector('#concentrator').value = obj.value
}
