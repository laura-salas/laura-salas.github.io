 // 0: current, 1: default
 let parentContent = [[],[]]; 
 let childContent = [[],[]];


 function addToCode(codeToAdd, replace=false){
     let code = document.getElementById("code-result");
     if(replace) code.innerHTML = codeToAdd;
     else code.innerHTML += codeToAdd;
     hljs.initHighlighting.called = false;
     hljs.highlightAll();
 }

 function addProperty(
     elem, 
     jsElem, 
     propertyName, 
     propertyVal, 
     propertyDefault = ""){
     elem.style[propertyName] = propertyVal;
     let newVal = propertyName + ": " + propertyVal + ";";
     let defaultVal = propertyName + ": " + propertyDefault + ";";
     
     // ensure property not already defined in code 
     jsElem[0] = jsElem[0].filter(function(value) {
        let currProp = value.substring(0, value.indexOf(':'));
        return !currProp.includes(propertyName);
     });
     jsElem[1] = jsElem[1].filter(function(value) {
        let currProp = value.substring(1, value.indexOf(':'));
        return !currProp.includes(propertyName);
     });
     jsElem[0].push(newVal);
     jsElem[1].push(defaultVal);
     generate();
 }   
 function generate(resetAll = false) {
     
         var parent = ".parent {";
         for (var i = 0; i < parentContent[0].length; i++){
             parent += "\n\t" + parentContent[0][i];
         }
         parent += "\n}";
         addToCode(parent, true);
     
    
         var child = "\n.enfant {";
         for (var i = 0; i < childContent[0].length; i++){
             child += "\n\t" + childContent[0][i];
         }
         child += "\n}";
         addToCode(child, resetAll);
     
     
 }
 function toggleInputs(component, isEnabled) {
    let possibles = document.getElementsByTagName("input");
    for(let i = 0; i < possibles.length; i++){
        let curr = possibles[i];
        if (curr.id !== "flex_" + component && curr.id.includes(component)){
         curr.disabled = !isEnabled;
        }
    }
 }
 
 function toggle(id, propertyName, value, defaultValue) {
     let caller = document.getElementById(id);
     let affected = id.includes("parent")? "parent": "enfant";
     let jsElem =  id.includes("parent")? parentContent:childContent;
     let isChecked = caller.checked;
     let property = isChecked? value : defaultValue;
     let defaultProperty = isChecked? defaultValue: value;
     
     if (affected === "parent"){
        addProperty(document.getElementsByClassName(affected)[0], jsElem, propertyName, property, defaultProperty);
     }
     else {
        let children = document.getElementsByClassName(affected);
        addProperty(children[0], jsElem, propertyName, property, defaultProperty);
        for (let i = 0; i < children.length; i++){
            children[i].style[propertyName] = value;
        }
       
     }
     


     if (propertyName === "display"){
        toggleInputs(affected, isChecked);
     }
 }


 function radio(id, propertyName) {
    let caller = document.getElementById(id);
    let affected = id.includes("parent")? "parent": "enfant";
    let jsElem =  id.includes("parent")? parentContent:childContent;
    let value = caller.value;
    console.log(value);
    if (propertyName == "width-height"){ 
        propertyName = "height"; 
        value = String(value);
        addProperty(document.getElementsByClassName(affected)[0], jsElem, propertyName, value);
        document.getElementById('arrow-x').style['width'] = value;
        propertyName = "width"; 
    }
    addProperty(document.getElementsByClassName(affected)[0], jsElem, propertyName, value);
}

 function restart() {
    window.location.reload();
}