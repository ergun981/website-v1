var pfx = ["webkit", "moz", "MS", "o", ""];

function PrefixedEvent(element, type, callback) {
    for (var p = 0; p < pfx.length; p++) {
        if (!pfx[p]) type = type.toLowerCase();
        element.addEventListener(pfx[p] + type, callback, false);
    }
}

// 1
PrefixedEvent($(".Cursor")[0], "AnimationEnd", function() {
    $(".SketchIco").addClass('SketchIco--open');
});

// 1
PrefixedEvent($(".SketchIco")[0], "AnimationEnd", function() {
    $(".SketchApp").addClass('SketchApp--fadein');
});

// 2
PrefixedEvent($(".SketchApp")[0], "AnimationEnd", function() {
    $(".SketchApp_Site__Grid").addClass('SketchApp_Site__Grid--fadein');
});

// 3
PrefixedEvent($(".SketchApp_Site__Grid li")[11], "AnimationEnd", function() {
    $(".SketchApp_Site__Body .header .logo").addClass('logo--fadein');

    // 9
    PrefixedEvent($(".SketchApp_Site__Grid li")[11], "AnimationEnd", function() {
        $('.SketchApp_Site__Body .header .logo').addClass('logo--cover');
    });
});

// 4
PrefixedEvent($(".SketchApp_Site__Body .header .logo")[0], "AnimationEnd", function() {
    $(".SketchApp_Site__Body .nav").addClass('nav--fadein');

    // 10
    PrefixedEvent($(".SketchApp_Site__Body .header .logo")[0], "AnimationEnd", function() {
        $(".SketchApp_Site__Body .nav").addClass('nav--cover');
    });
});

// 5
PrefixedEvent($(".SketchApp_Site__Body .header .nav li")[5], "AnimationEnd", function() {
    $(".SketchApp_Site__Body .slider").addClass('slider--fadein');

    // 11
    PrefixedEvent($(".SketchApp_Site__Body .header .nav li")[5], "AnimationEnd", function() {
        $(".SketchApp_Site__Body .slider").addClass('slider--cover');
    });
});

// 6
PrefixedEvent($(".SketchApp_Site__Body .slider")[0], "AnimationEnd", function() {
    $(".SketchApp_Site__Body .welcome").addClass('welcome--fadein');

    // 12
    // PrefixedEvent($(".SketchApp_Site__Body .slider")[0], "AnimationEnd", function() {
    //     $(".SketchApp_Site__Body .welcome").addClass('welcome--cover');
    // });
});

// 7
PrefixedEvent($(".SketchApp_Site__Body .welcome li")[3], "AnimationEnd", function() {
    $(".SketchApp_Site__Body .promo").addClass('promo--fadein');

    // 12
    PrefixedEvent($(".SketchApp_Site__Body .slider")[0], "AnimationEnd", function() {
        $(".SketchApp_Site__Body .promo").addClass('promo--cover');
    });

    // 13
    // PrefixedEvent($(".SketchApp_Site__Body .welcome li")[3], "AnimationEnd", function() {
    //     $(".SketchApp_Site__Body .promo").addClass('promo--fadein');
    // });
});

// 8
PrefixedEvent($(".SketchApp_Site__Body .promo li")[5], "AnimationEnd", function() {
    $(".SketchApp_Site__Grid").addClass('SketchApp_Site__Grid--fadeout');
});
