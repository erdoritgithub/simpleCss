$(document).ready(function(){

    var sheet = (function() {
        // Create the <style> tag
        var style = document.createElement("style");
    
        // Add a media (and/or media query) here if you'd like!
        // style.setAttribute("media", "screen")
        // style.setAttribute("media", "only screen and (max-width : 1024px)")
    
        // WebKit hack :(
        style.appendChild(document.createTextNode(""));
    
        // Add the <style> element to the page
        document.head.appendChild(style);
    
        return style.sheet;
    })();

    function addCSSRule(sheet, selector, rules, index) {
        if("insertRule" in sheet) {
            sheet.insertRule(selector + "{" + rules + "}", index);
        }
        else if("addRule" in sheet) {
            sheet.addRule(selector, rules, index);
        }
    }
    
    // Use it!
    addCSSRule(document.styleSheets[0], "body", "background: black");

    // _______sizing__________
   
    // __width__
    $('*[css*=w-]:visible').each(function() {
        let value = $(this).attr('css').split(" ");
    
        value =value.filter(w =>  w.includes("w-")).toString().split('-')[1];
        let newValue= value.replace('pr', "%")
        
        addCSSRule(document.styleSheets[0], "w-"+value+"", "background: "+newValue+"");
    });

    // __height__
    $('*[css*=h-]:visible').each(function() {
        let value = $(this).attr('css').split(" ");
    
        value =value.filter(w =>  w.includes("h-")).toString().split('-')[1];
        
        $(this).css('height', ''+value+'')
    });

    // __background__
    $('*[css*=bg-]:visible').each(function() {
        let value = $(this).attr('css').split(" ");
    
        value =value.filter(w =>  w.includes("bg-")).toString().split('-')[1];
        
        $(this).css('background', ''+value+'')
    });

    // __text color__
    $('*[css*=color-]:visible').each(function() {
        let value = $(this).attr('css').split(" ");
    
        value =value.filter(w =>  w.includes("color-")).toString().split('-')[1];
        
        $(this).css('color', ''+value+'')
    });

    // __border__
    $('*[css*=b-]:visible').each(function() {
        let value = $(this).attr('css').split(" ");
    
        value =value.filter(w =>  w.includes("b-")).toString().split('-')[1].replace(/\_/g, ' ');
    
        $(this).css('border', ''+value+'')
    });

    // __margin__
    $('*[css*=m-]:visible').each(function() {
        let value = $(this).attr('css').split(" ");
    
        value =value.filter(w =>  w.includes("m-")).toString().split('-')[1].replace(/\_/g, ' ');
    
        $(this).css('margin', ''+value+'')
    });

    // __padding__
    $('*[css*=p-]:visible').each(function() {
        let value = $(this).attr('css').split(" ");
    
        value =value.filter(w =>  w.includes("p-")).toString().split('-')[1].replace(/\_/g, ' ');
    
        $(this).css('padding', ''+value+'')
    });

    // __position__
    $('*[css*=position-]:visible').each(function() {
        let value = $(this).attr('css').split(" ");
    
        value =value.filter(w =>  w.includes("position-")).toString().split('-')[1];
        
        $(this).css('position', ''+value+'')
    });

    // __z-index__
    $('*[css*=z_index-]:visible').each(function() {
        let value = $(this).attr('css').split(" ");
    
        value =value.filter(w =>  w.includes("z_index-")).toString().split('-')[1];
        
        $(this).css('z-index', ''+value+'')
    });

    // __display__
    $('*[css*=d-]:visible').each(function() {
        let value = $(this).attr('css').split(" ");
    
        value =value.filter(w =>  w.includes("d-")).toString().split('-')[1];
        
        $(this).css('display', ''+value+'')
    });

});

