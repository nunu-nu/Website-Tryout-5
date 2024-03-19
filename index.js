  let container = document.getElementById("container");
var elements = document.querySelectorAll('.kabaLine, .kabaLine2, .kabaLine3, .kabaLine4, .kabaLine5, .kabaLine6, .kabaLine7, .kabaLine8');

function unhighlightAll() {
    var highlightedElements = document.querySelectorAll('.highlight');
    highlightedElements.forEach(function(element) {
        element.classList.remove('highlight');
    });
}

// Loop through each element and add event listeners 
elements.forEach(function(element) {
    // Add event listener for mouseover
    element.addEventListener('mouseover', function() {
        highlightOthers(event);
    });

    // Add event listener for mousedown
    element.addEventListener('mousedown', function() {
        changeText(this);
    });

    element.addEventListener('mouseout', function() {
        unhighlight(event);
    });
});

// Function to extract class
function highlightOthers(event) {
    unhighlightAll();
    var hoveredElement = event.target;
    var cssclass = hoveredElement.classList[0];
    var elementsWithSameClass = document.getElementsByClassName(cssclass);
    for (var i = 0; i < elementsWithSameClass.length; i++) {
        elementsWithSameClass[i].classList.add("highlight");
    }
}

function unhighlight(event) {
    // var mouseoutElement = event.target;
    // var classes = mouseoutElement.classList;
unhighlightAll();
}




/*  function nextOrn(value) {
    console.log("value: " + value);
    if (value==8) {
        console.log("returning 0");
        return 0;
    } else {
        console.log("returning " + (value))
        return value + 1;}
} */

function stringToNumbers(text) {
    let numbersArray = [];
    for (let i = 0; i < text.length; i++) {
        let number = parseInt(text[i]);
        if (!isNaN(number)) {
            numbersArray.push(number);
        }
    }
    return numbersArray;

}

/* function extractContents(objClass) {
    var objects = document.querySelectorAll(objClass);
    var contents = [];
    objects.forEach(function(obj) {
        contents.push(obj.textContent);
    });
    var insideValue = stringToNumbers(contents[0])
    return insideValue;
} */

function extractContents(selectorValue) {
    var objects = document.querySelectorAll(selectorValue);
    var contents = [];
    objects.forEach(function(obj) {
        contents.push(obj.textContent);
    
    });
    return contents[0];
}

function changeText(element) {
    document.getElementById("explanation").style.opacity="0%";
    
    var classOfObjects = element.classList[0];
    var objects = document.querySelectorAll("." + element.classList[0]);
    var currentValue = stringToNumbers( extractContents("." + element.classList[0] ));
    // console.log(currentValue);
    objects.forEach(function(obj) {
        var nextValue = parseInt(currentValue)+1;
        console.log("next value:" + nextValue);
        if (nextValue>=8) {obj.textContent = 0;} else {
        obj.textContent = nextValue; }
    });
}



/*
    let textCurrent = '';
    document.onkeydown = function(e) {
       // let textTotal = textCurrent + toString(g);\
       if (paintingsExist == 0) {} else {
            if (e.key == 'Backspace') {
                    var backedOff = textCurrent.slice(0,-1);
                    textCurrent = backedOff;
                   
            } else if (e.key == 'Meta') {
                    
            } else if (e.key == 'Shift') {
                    
            } else if (e.key == "Control" || e.key == "Tab" || e.key == "CapsLock") {
                    
            } else if (e.key == 'Alt') {
                    
            } else if (e.key == 'Enter') {
                    
            } else if (e.key == 'ArrowUp' || e.key == 'ArrowDown' || e.key == 'ArrowLeft' || e.key == 'ArrowRight') {
                    
            } else if (e.key == ' ') {

                textCurrent += e.key;
            } else {
            textCurrent += e.key;
            }
}
    }
*/

