/* This file, related code, assets, styling and indicia are Copyright (c) Friv.com 2006-2022. Unauthorised reproduction is prohibited. All rights reserved. */

var ver = "v2023.07.04";
var debug = false;
//alert(ver);

if (debug) {
    debugText.style.display = "block";
    setInterval(function () {
        debugText.innerHTML = "Debugging Info - Tap to remove. Build: " + ver + "<br>innerHeight:" + innerHeight + "  screen.height:" + screen.height + "  Ratio:" + (innerHeight / screen.height);
    }, 1000);

    debugText.addEventListener("click", function () {
        debugText.style.display = "none";
    });
}

var lang = navigator.language.toLowerCase();

var british = false;
if (lang == "en-gb") {
    british = true;
}

if (debug) {
    lang = "es"; //spoof lang
}

var shortLang = lang.slice(0, 2);


//COOKIES
/////////

var pageViews = -1;
var gamePlays = -1;

//pageview
var n = localStorage.getItem('visitsCounter');
if (n === null) {
    n = 0;
}
pageViews = n;
console.log("cookie pageviews: " + pageViews);

//gameplays
var x = localStorage.getItem('gamePlays');
if (x === null) {
    x = 0;
}

gamePlays = x;

function gamePlaysIncrement() {
    gamePlays++;
    localStorage.setItem("gamePlays", gamePlays);
    console.log("cookie gameplays increment: " + gamePlays);
}

console.log("cookie gameplays: " + gamePlays);

const gamePlaysIncrementTimeout = setTimeout(gamePlaysIncrement, 100000);

var isSchool = false;
if (window.location.hostname.indexOf("school") > -1 || window.location.hostname.indexOf("math") > -1) {
    isSchool = true;
}

if (game.title.length > 28) {
    infoBoxTitle.style.fontSize = "5vmax";
}

if (game.loadingSizeMB > 20) {
    game.enDescription += "<br>Note: Please WAIT for loading. It’s well worth it!";
}

if (game.enDescription.indexOf("This is an old retired") == 0) {

    switch (shortLang) {
        case "es":
            game.enDescription = "¡Este es un juego Flash retirado que estamos alojando para mantener vivos los recuerdos! Está emulado para permitir que se ejecute en su navegador. Por favor, comprenda que puede funcionar lentamente o con algunos errores. No hay anuncios. ¡Feliz juego!";
            break;
        case "pt":
            game.enDescription = "Este é um jogo em Flash aposentado que estamos hospedando para manter as memórias vivas! É emulado para permitir que seja executado no seu navegador. Por favor, entenda que pode ser executado lentamente ou com alguns bugs. Não há anúncios. Feliz jogando!";
            break;
        case "id":
            game.enDescription = "Ini adalah game Flash pensiunan yang kami selenggarakan untuk menjaga kenangan tetap hidup! Itu ditiru untuk memungkinkannya berjalan di browser Anda. Harap mengerti bahwa ini mungkin berjalan lambat atau dengan beberapa bug. Tidak ada iklan. Selamat bermain!";
            break;
        case "ph":
            game.enDescription = "Isa itong retiradong Flash game na aming hina-host para panatilihing buhay ang mga alaala! Ito ay ginagaya upang payagan itong tumakbo sa iyong browser. Mangyaring maunawaan na maaari itong tumakbo nang mabagal o may ilang mga bug. Walang mga ad. Maligayang paglalaro!";
            break;
        case "tr":
            game.enDescription = "Bu, anıları canlı tutmak için barındırdığımız eski bir Flash oyunudur! Tarayıcınızda çalışmasına izin vermek için taklit edilmiştir. Lütfen yavaş veya bazı hatalarla çalışabileceğini anlayın. Reklam yok. Mutlu oyun!";
            break;
        case "pl":
            game.enDescription = "To wycofana gra Flash, którą hostujemy, aby zachować wspomnienia! Jest emulowany, aby umożliwić jego działanie w przeglądarce. Proszę zrozumieć, że może działać wolno lub zawierać błędy. Nie ma żadnych reklam. Miłego grania!";
            break;
        case "th":
            game.enDescription = "นี่คือเกม Flash ที่เลิกใช้แล้วซึ่งเรากำลังโฮสต์เพื่อเก็บความทรงจำให้คงอยู่! มีการจำลองเพื่อให้ทำงานในเบราว์เซอร์ของคุณ โปรดเข้าใจว่ามันอาจทำงานช้าหรือมีจุดบกพร่องบางอย่าง ไม่มีโฆษณา มีความสุขในการเล่น!";
            break;
        case "gr":
            game.enDescription = "Αυτό είναι ένα αποσυρμένο παιχνίδι Flash που φιλοξενούμε για να κρατήσουμε ζωντανές τις αναμνήσεις! Είναι εξομοίωση για να επιτρέπεται να εκτελείται στο πρόγραμμα περιήγησής σας. Κατανοήστε ότι μπορεί να εκτελείται αργά ή με ορισμένα σφάλματα. Δεν υπάρχουν διαφημίσεις. Καλό παιχνίδι!";
            break;
        default:
    }
}









gameMB.innerHTML = game.loadingSizeMB + "MB";

var mSpecial = false;
if (game.title.indexOf("inecra") > -1) {
    mSpecial = true;
}







//GET OPERATING SYSTEM
//////////////////////

var os = "Other";

var hasTouchPoints = false;
if (navigator.maxTouchPoints > 0) {
    hasTouchPoints = true;
}

var userAgent = navigator.userAgent || navigator.vendor || window.opera;

function getAndroidVersion() {
    var match = userAgent.toLowerCase().match(/android\s([0-9\.]*)/i);
    return match ? parseInt(match[1], 10) : false;
};

function getOperatingSystem() {
    if (/android/i.test(userAgent) && hasTouchPoints) {
        return "Android";
    }
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }
    if (navigator.platform === 'MacIntel' && hasTouchPoints) { //newer iPads
        return "iOS";
    }
    return "Desktop"; //default - will be mostly pcs, macs, linux desktop etc.
}

var os = getOperatingSystem();

var shortOS = "OTR";

if (os == "Desktop") { //further sub divide...

    if (userAgent.indexOf("Windows NT 10.0") != -1) {
        //console.log("OS is Windows 10 or 11");
        os += "-winNewest";
        shortOS = "WNN";
    }

    if (userAgent.indexOf("Windows NT 6.") != -1) { //8.1 or 8.0 or 7.0
        //console.log("OS is Windows 7 or 8");
        os += "-win7-8";
        shortOS = "W78";
    }

    if (userAgent.indexOf("Mac") != -1) {
        //console.log("OS is MacOS");
        os += "-macOS";
        shortOS = "MOS";
    }

    if (userAgent.indexOf("CrOS") != -1) {
        //console.log("OS is Chrome OS");
        os += "-chromeOS";
        shortOS = "CRO";
    }

    if (os == "Desktop") { //if still only "Desktop"
        //console.log("OS is unknown Desktop - likely Linux");
        os = "Desktop-other";
        shortOS = "DTO";
    }

}

var touchDevice = false; // could use...  typeof window.orientation == "undefined"
if ((os == "Android" && hasTouchPoints) || os == "iOS") {
    touchDevice = true;
}









/*
//windows version
var windows10 = false;
var windows11 = false;

navigator.userAgentData.getHighEntropyValues(["platformVersion"])
    .then(ua => {
        if (navigator.userAgentData.platform === "Windows") {
            const majorPlatformVersion = parseInt(ua.platformVersion.split('.')[0]);
            if (majorPlatformVersion >= 13) {
                console.log("Windows 11 or later");
                windows11 = true;
            } else if (majorPlatformVersion > 0) {
                console.log("Windows 10");
                windows10 = true;
            } else {
                console.log("Before Windows 10");
            }
        } else {
            console.log("Not running on Windows");
        }
    });

//console.log("immediate windows10: " + windows10);
//console.log("immediate windows11: " + windows11);
*/

var devory = false;

if (window.location.href.indexOf("?d") > -1) {
    devory = true;
}

if (!game.showBackButton || (devory && Math.random() > 0.1)) {
    backButton.style.display = "none";
}

if (!game.showGameEffectsButton) {
    gameEffectsButton.style.display = "none";
}

if (game.walkthrough == "") {
    walkthroughButton.style.display = "none";
}









//OUTPUT CONTROLS
/////////////////

if (!touchDevice) {
    var controlsString = "";

    if (game.controls.indexOf("m") > -1) {
        controlsString += "<div id=mouse></div>";
    }
    if (game.controls.indexOf("g") > -1) {
        controlsString += "<div id=gamepad></div>";
    }
    if (game.controls.indexOf("k") > -1) {
        controlsString += "<div id=keyboard></div>";
    }

    var i;
    var singleKey = "";
    for (i = 0; i < game.keys.length; i++) {

        var keySize = "";
        singleKey = game.keys.slice(i, i + 1);

        switch (singleKey) {
            case "U":
                singleKey = "&uarr;";
                break;
            case "D":
                singleKey = "&darr;";
                break;
            case "L":
                singleKey = "&larr;";
                break;
            case "R":
                singleKey = "&rarr;";
                break;
            case "S": //spacebar
                singleKey = "_";
                keySize = "Large";
                break;
            case "C": //ctrl
                singleKey = "ctrl";
                keySize = "Large";
                break;
            case "V": //alt-ernatiVe
                singleKey = "alt";
                keySize = "Large";
                break;
            case "E": //enter
                singleKey = "&#8626;";
                keySize = "Medium";
                break;
            case "T": //shift
                singleKey = "&#8679;";
                keySize = "Medium";
                break;
            case "B": //tab
                singleKey = "&#8646;";
                keySize = "Medium";
                break;
            default:
                singleKey = singleKey.toUpperCase(); //if not an arrow key, make the letter uppercase
        }

        controlsString += "<div class=key" + keySize + "><div class=keyCharacter>" + singleKey + "</div></div>"
    }
    infoBoxControls.innerHTML = controlsString;
} else {
    infoBoxControls.style.display = "none";
}

//for long titles
if (game.title.length > 24) {
    infoBoxTitle.style.fontSize = "4vmax";
}

if (game.title.length > 30) {
    infoBoxTitle.style.fontSize = "3.5vmax";
}

if (game.loadingSeconds == "auto") { //if game loadin time is not specified ('auto' is used) then calculate based on game size
    game.loadingSeconds = game.loadingSizeMB;
    if (game.loadingSeconds < 9) {
        game.loadingSeconds = 9;
    }
    if (game.loadingSeconds > 16) {
        game.loadingSeconds = 16;
    }
}
game.loadingSeconds += "s";

spinner.style.animation = "spinner 2s linear forwards infinite, spinnerRemove 0s " + game.loadingSeconds + " linear forwards";
playButton.style.animation = "playButtonShow 0s " + game.loadingSeconds + " linear forwards, shake1 1s 15s cubic-bezier(0.36, 0.07, 0.19, 0.97)";
infoBoxLoadingBar.style.animation = "infoBoxLoadingBar " + game.loadingSeconds + " 1.5s linear forwards";

//fix 'click' and tap' text in description

if (touchDevice) {
    game.enDescription = game.enDescription.replace(/clicking/g, "tapping");
    game.enDescription = game.enDescription.replace(/Clicking/g, "Tapping");
    game.enDescription = game.enDescription.replace(/click/g, "tap");
    game.enDescription = game.enDescription.replace(/Click/g, "Tap");
    game.enDescription = game.enDescription.replace(/clicks/g, "taps");
    game.enDescription = game.enDescription.replace(/Clicks/g, "Taps");
    game.enDescription = game.enDescription.replace(/mouze/g, "finger");
}

game.enDescription = game.enDescription.replace(/mouze/g, "mouse");
game.enDescription = game.enDescription.replace(/OGKA/g, "This is a treasured old game we're making available to keep memories alive. There are no ads. Enjoy!");
game.enDescription = game.enDescription.replace(/JS13K/g, "This extraordinary game was coded in just 13kb for a competition. Genius-level programming. There are no ads. Enjoy!");

if (british) { //us -> british
    game.enDescription = game.enDescription.replace(/Color/g, "Colour");
    game.enDescription = game.enDescription.replace(/color/g, "colour");
    game.enDescription = game.enDescription.replace(/favorite/g, "favourite");
    game.enDescription = game.enDescription.replace(/flavor/g, "flavour");
    game.enDescription = game.enDescription.replace(/armor/g, "armour");
    game.enDescription = game.enDescription.replace(/donut/g, "doughnut");
}









//promo of site
var promoText = [
            ["😁 You are on the genuine Friv® - yay! You can be 100% sure when playing " + game.title + " or any of our games, that we'll NEVER interrupt your game to show you an ad. Yay again!"],
            ["😁 Other sites interrupt gameplay and make you sit through video ads. At Friv we'll NEVER do that - it's plain rude. If your friends don't already know about Friv, please tell them!"],
            ["😃 You are smart. You deserve a trophy. 🏆 You are playing " + game.title + " at friv.com where there are no ad interruptions. EVER. If you like Friv, please spread the word. Thank you!"],
            ["😇 We value you. We think you're amazing ...a bit special even. That's why you can play " + game.title + " or any of the games on Friv without any ad interruptions, EVER!"],
            ["😃 We love our loyal users. We want you to enjoy playing " + game.title + " and all our games without ever being nagged. We proudly give you the Friv no in-game ads GUARANTEE! 📝"],
            ["😃 At Friv we love our website but we don't have a lot of money to spend advertising it. If you can, please tell your friends and help the site grow. 📈 Thank you!"],
            ["😂 Please spread the word! Wear a sandwich board reading &quot;I LOVE FRIV!&quot; into town. Or maybe repaint 🖌️ your (Dad's) car with Friv styling! 😉"],
            ["😍 Please spread the word about Friv! Before playing " + game.title + ", kindly throw open your windows and shout &quot;I LOVE FRIV!&quot;."],
            ["😃 If you like Friv and you enjoy playing " + game.title + ", please tell your friends in person, or on WhatsApp / Facebook / Instagram / YouTube / Twitter / TikTok etc. Thank you!"],
            ["😜 Here's something, but you have to keep it WAY more secret than we are. On the Friv menu page, click on the logo 10 times, and you will get extra games!"],
            ["😜 Friv is finally on TikTok! Find us @friv ...we'd be so grateful if you would follow us and like our videos! Thank you!"],
            ["😁 The more people who play on Friv, the more great games we can add. Please tell your friends!"],
            ["😁 Want more games? ...Please tell your friends about Friv. The more players we have, the more great games we can add!"],
        ];

setTimeout(function () {
    if (!isSchool && gamePlays > 10 && Math.random() > 0.9 && shortLang == "en") {
        game.enDescription = promoText[Math.floor(Math.random() * promoText.length)];
        infoBoxDesc.innerHTML = game.enDescription;
    }
}, 9000);

var chosenGameDescription = game.enDescription;






//multilanguage override

console.log("Running multi-language section...");

//shortLang = "es";
//const supportedLanguages = ["bg", "cs", "de", "da",   "et", "es", "fr", "fi", "el", "hr", "hu", "it", "lt", "lv", "nl", "nb", "pl", "pt", "ro", "ru", "sv", "sl", "tr", "uk", "zh"];

var altLangAvailable = false;

const supportedLanguages = ["ar", "az", "bg", "bs", "ca", "cs", "da", "de", "el", "es", "et", "fa", "fi", "fr", "he", "hi", "hr", "hu", "hy", "id", "it", "ja", "ka", "ko", "lt", "lv", "mk", "ms", "nb", "nl", "pl", "pt", "ro", "ru", "sk", "sl", "sq", "sr", "sv", "th", "tr", "uk", "ur", "vi", "zh"]; //45

function updateGameDescription() {
    supportedLanguages.forEach(checkLangDescriptions);
}

function checkLangDescriptions(testLang) {
    //if (game.hasOwnProperty(eval(testLang+ "Description") && testLang== shortLang)) {
    console.log("Running checkLangDescriptions on: " + testLang);
    if (eval("game." + testLang + "Description") !== undefined && testLang == shortLang) {
        console.log("Language: " + testLang + " description is present", " and is the same as shortLang.");
        altLangAvailable = true;
        chosenGameDescription = eval("game." + testLang + "Description");

        infoBoxDesc.style.cursor = "cell";

        infoBoxDesc.innerHTML = chosenGameDescription;

        resetInfoBoxDescAnim();
    }
}

function checkDescLengthAndResize() {
    if (infoBoxDesc.textContent.length > 230) {
        infoBoxDesc.style.fontSize = "2vmax";
    } else {
        infoBoxDesc.style.fontSize = "2.5vmax"; //default
    }



}

function resetInfoBoxDescAnim() {

    requestAnimationFrame(() => {
        setTimeout(() => {
            infoBoxDesc.style.animationName = "textFadeIn";
        }, 100);
    });
}

updateGameDescription();

infoBoxDesc.onmouseover = function () {
    infoBoxDesc.innerHTML = game.enDescription;

    if (altLangAvailable) {
        infoBoxDesc.style.animationName = "none";
        infoBoxDesc.style.animationDelay = "0s";
        resetInfoBoxDescAnim();
    }

    checkDescLengthAndResize();
};
infoBoxDesc.onmouseout = function () {
    if (altLangAvailable) {
        infoBoxDesc.style.animationName = "none";
        infoBoxDesc.style.animationDelay = "0s";
    }
    updateGameDescription();
    checkDescLengthAndResize();
};

infoBoxTitle.innerHTML = game.title;
infoBoxDesc.innerHTML = chosenGameDescription;
checkDescLengthAndResize();

/////////////////////////////////////////// BIT OF FUN - RANDOM TEXT EFFECT
//character replace function
function setCharAt(str, index, chr) {
    if (index > str.length - 1) return str;
    return str.substr(0, index) + chr + str.substr(index + 1);
}

//all permissable characters   
var chars = "!.?&'-: abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890ü";

var newGameName = "";
var stringLength = game.title.length;
var testChar1 = "";
var testChar2 = "";

//generate random string of the same length as the game name
var i;
for (i = 0; i < game.title.length; i++) {
    newGameName += chars.substr((Math.floor(Math.random() * chars.length)), 1);
}

var textTimer;
if (game.title.length < 27) { //exclude effect for 2-line game titles
    setTimeout(function () {
        var textTimer = setInterval(function () {
            blastText()
        }, 100);
    }, 22000);
}

//var textTimer = setInterval(function(){ blastText() }, 100);   

function blastText() {

    for (i = 0; i < 200; i++) { //to speed up operation, do x loops each call

        //generate random character index
        randCharIndex = Math.floor(Math.random() * stringLength);

        //get random chars
        testChar1 = chars.substr((Math.floor(Math.random() * chars.length)), 1); //random character from the full list of characters
        testChar2 = game.title.substr(randCharIndex, 1); //random character from the game name

        //replace character if correct
        if (testChar1 == testChar2) {
            newGameName = setCharAt(newGameName, randCharIndex, testChar1); //if there is a match, update newGameName with the match
        }

        //write one random new character in each cycle
        if (newGameName.substr(randCharIndex, 1) != game.title.substr(randCharIndex, 1)) {
            newGameName = setCharAt(newGameName, randCharIndex, testChar1);
        }

        //when matching string is found, stop operation
        if (newGameName == game.title) {
            clearInterval(textTimer);
        }

        infoBoxTitle.innerHTML = newGameName;

    } //end for

} // end func

///////////////////////////////////////////

var requestFullscreen = function (ele) {
    if (ele.requestFullscreen) {
        ele.requestFullscreen();
    } else if (ele.webkitRequestFullscreen) {
        ele.webkitRequestFullscreen();
    } else if (ele.mozRequestFullScreen) {
        ele.mozRequestFullScreen();
    } else if (ele.msRequestFullscreen) {
        ele.msRequestFullscreen();
    } else {
        console.log('Fullscreen API is not supported.');
    }
};

var exitFullscreen = function () {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    } else {
        console.log('Fullscreen API is not supported.');
    }
};

//currently an unused feature - check its use with future games
var allowFullScreen = true;
//if (game.title == "Algerian Solitaire"){
//    allowFullScreen = false;
//}

//when user clicks to play game (remove loading overlay, enter fullscreen etc.)
loadingBox.addEventListener('click', function (e) {
    loadingOverlay.style.display = "none";
    backButton.style.animationPlayState = "running";
    gameEffectsButton.style.animationPlayState = "running";
    walkthroughButton.style.animationPlayState = "running";

    //ios full screen seems to cause problems, so fullscreen is disabled in iOS right now
    if (os.indexOf("iOS") == -1 && !mSpecial && allowFullScreen && !devory) {
        e.preventDefault();
        requestFullscreen(document.documentElement);

        setTimeout(function () {
            fullscreenListeners();
        }, 1000);
    }

    //if needed, check orientation of game start, then listen for device orientation change. Some games "autoDetect" detect, others do not and are "noDetect" games.
    if (((game.orientation == "Portrait") || (game.orientation == "Landscape")) && (game.orientationAdviceRequired)) {
        checkOrientation();
        window.addEventListener('orientationchange', checkOrientation);
    }
    scaleGame();

    if (mSpecial) {
        window.open(atob("aHR0cHM6Ly9jbGFzc2ljLm1pbmVjcmFmdC5uZXQv"), "_blank");
    }

});

//if on mobile, run game orientation icon animation
if (touchDevice || debug == true) {
    if (game.orientation == "Landscape") {
        orientationIconLandscape.style.animationPlayState = "running";
    } else {
        orientationIconPortrait.style.animationPlayState = "running";
    }
}

//if on mobile AND user has wrong orientation, flash icon at x seconds
setTimeout(function () {
    if (os == "Android" || debug == true) {
        if ((screen.width < screen.height) && game.orientation == "Landscape") {
            orientationIconLandscape.style.animation = "brightFlash 3s forwards";
        }
        if ((screen.width > screen.height) && game.orientation == "Portrait") {
            orientationIconPortrait.style.animation = "brightFlash 3s forwards";
        }
    }
    if (os == "iOS") {
        if ((window.orientation == 0 || window.orientation == 180) && game.orientation == "Landscape") {
            orientationIconLandscape.style.animation = "brightFlash 3s forwards";
        }
        if ((window.orientation == 90 || window.orientation == -90) && game.orientation == "Portrait") {
            orientationIconPortrait.style.animation = "brightFlash 3s forwards";
        }
    }
}, 8000);

//if browser somehow exits fullscreen (non iOS) display button to allow user to click and go into fullscreen again, then remove button
if (os != "iOS" && allowFullScreen) {
    fullScreenButton.addEventListener('click', function (e) {
        e.preventDefault();
        requestFullscreen(document.documentElement);
        fullScreenButton.style.display = "none";
    });
}

var classicMenu = false;

var returnURL = "https://www.friv.com/";

//show new (test) games to established desktop players
if (gamePlays >= 5 && os.indexOf("Desktop") > -1) { //coincides with achievement #1
    returnURL = "https://www.friv.com/new.html";
}

if (isSchool || gamePlays == 23) {
    gamePlaysIncrement();
    returnURL = "https://www.friv4school.com/";
}

if (window.location.href.indexOf("?f") > -1) { //return urls ?f = friv.com/old |
    returnURL = "https://www.friv.com/old/";
    classicMenu = true;
}

if (window.location.href.indexOf("?a") > -1) {
    returnURL = "https://www.frivantiguo.net/";
    classicMenu = true;
}
if (window.location.href.indexOf("?t") > -1) {
    returnURL = "https://www.frivantigo.net/";
    classicMenu = true;
}
if (window.location.href.indexOf("?s") > -1) {
    returnURL = "https://www.frivclasico.co/";
    classicMenu = true;
}
if (window.location.href.indexOf("?c") > -1) {
    returnURL = "https://www.frivclassic.com/";
    classicMenu = true;
}
if (window.location.href.indexOf("?r") > -1) {
    returnURL = "https://www.frivclassic.org/";
    classicMenu = true;
}
if (window.location.href.indexOf("?l") > -1) {
    returnURL = "https://www.frivlegend.com/";
    classicMenu = true;
}
if (window.location.href.indexOf("?v") > -1) {
    returnURL = "https://www.frivoriginal.co/";
    classicMenu = true;
}
if (window.location.href.indexOf("?i") > -1) {
    returnURL = "https://www.frivoriginal.org/";
    classicMenu = true;
}
if (window.location.href.indexOf("?n") > -1) {
    returnURL = "https://www.oldfriv.net/";
    classicMenu = true;
}
if (window.location.href.indexOf("?o") > -1) {
    returnURL = "https://www.oldfriv.site/";
    classicMenu = true;
}
if (window.location.href.indexOf("?m") > -1) {
    returnURL = "https://www.morefriv.com/";
}
if (window.location.href.indexOf("?p") > -1) {
    returnURL = "https://www.frivplus.com/";
}

// frivantiguo.net - frivclasico.co - frivclassic.com - frivclassic.org - frivlegend.com - frivoriginal.co - frivoriginal.org - oldfriv.net - oldfriv.site - morefriv.com - frivplus.com

setTimeout(function () {

    backButton.addEventListener('click', function (e) {

        if (os != "iOS" && allowFullScreen) {
            e.preventDefault();
            exitFullscreen();
        }

        window.location.assign(returnURL);
    });

}, 999);

walkthroughButton.addEventListener('click', function (e) {
    window.open(game.walkthrough);
});

//listen for any (unexpected) screen change and make full screen button visible  
//delay added to prevent showing when user clicks back button
function fullscreenListeners() {
    //as listening for fullscreenchange seems unreliable (Android) this simpler solution works for all cases 
    setInterval(function () {
        //if (window.innerHeight == screen.height) {
        if (innerHeight / screen.height > 0.9) {
            innerHeight / screen.height
            fullScreenButton.style.display = "none";
            //console.log("browser is fullscreen (or close to)");
        }
        if (innerHeight / screen.height < 0.90 && os.indexOf("iOS") == -1) { //check it is STILL the case (timeout)
            fullScreenButton.style.display = "block";
            //console.log("browser is windowed");
        }
    }, 1000);

}

//repeatedly focus game to ensure correct start and continued play
setInterval(function () {
    gameBox.focus()
}, 500);

function checkOrientation() {
    setTimeout(function () {
        if (os == "iOS") {
            if ((window.orientation == 90 || window.orientation == -90) && game.orientation == "Landscape") {
                orientationOverlay.style.display = "none";
            }
            if ((window.orientation == 0 || window.orientation == 180) && game.orientation == "Landscape") {
                orientationOverlay.style.display = "block";
            }
            if ((window.orientation == 90 || window.orientation == -90) && game.orientation == "Portrait") {
                orientationOverlay.style.display = "block";
            }
            if ((window.orientation == 0 || window.orientation == 180) && game.orientation == "Portrait") {
                orientationOverlay.style.display = "none";
            }
        }

        if (os == "Android") {
            if ((screen.width > screen.height) && game.orientation == "Landscape") {
                orientationOverlay.style.display = "none";
            }
            if ((screen.width < screen.height) && game.orientation == "Landscape") {
                orientationOverlay.style.display = "block";
            }
            if ((screen.width > screen.height) && game.orientation == "Portrait") {
                orientationOverlay.style.display = "block";
            }
            if ((screen.width < screen.height) && game.orientation == "Portrait") {
                orientationOverlay.style.display = "none";
            }
        }
    }, 500);
}

function scaleGame() {
    gameBox.style.height = (window.innerHeight * 1) + "px";
    gameBox.style.width = (window.innerWidth * 1) + "px";
}

window.addEventListener('resize', () => {
    scaleGame();
});

gameBox.src = game.source;

//once game source specified, scale game (important for Chrome with loading flash)
scaleGame();

//overlay and flip effects etc.
effectsCounter = 0;
gameEffectsButton.addEventListener("click", function () {

    gameBox.style.transition = "1s";

    switch (effectsCounter) {
        case 0:
            gameEffectsButton.style.animation = "none";
            gameEffectsButton.style.right = "0";
            gameEffectsIndicator.style.opacity = "0.5";
            gameEffectsButton.style.opacity = "0.5";

            //aaa-disabled-for-now
            //gameOverlay.style.backgroundImage = "none";
            //analytics for those starting cycle
            //gtag('event', ('Effects Start : ' + game.title), {
            //    'event_category': 'Navigation',
            //    'event_label': 'Game Effects'
            //});

            break;
        case 1:
            gameOverlay.style.backgroundImage = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgTWFjaW50b3NoIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjI4RkZBQTgzNzg1NzExRTU4NTQyODc3OUM4MTZGMUREIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjI4RkZBQTg0Nzg1NzExRTU4NTQyODc3OUM4MTZGMUREIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjhGRkFBODE3ODU3MTFFNTg1NDI4Nzc5QzgxNkYxREQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MjhGRkFBODI3ODU3MTFFNTg1NDI4Nzc5QzgxNkYxREQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz66uHInAAAAIUlEQVR42mL5//8/AyMj42YGIGBigABfEMEIkoEBgAADAKvuBwVS8BAjAAAAAElFTkSuQmCC)";
            gameOverlay.style.backgroundSize = "3px 3px";
            break;
        case 2:
            gameOverlay.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.2),rgba(0,0,0,0.0))";
            gameOverlay.style.backgroundSize = "100% 0.5%";
            break;
        case 3:
            gameOverlay.style.backgroundImage = "none";
            gameBox.style.filter = "hue-rotate(60deg)";
            break;
        case 4:
            gameBox.style.filter = "hue-rotate(120deg)";
            break;
        case 5:
            gameBox.style.filter = "hue-rotate(180deg)";
            break;
        case 6:
            gameBox.style.filter = "hue-rotate(240deg)";
            break;
        case 7:
            gameBox.style.filter = "blur(0.5vmin)";
            break;
        case 8:
            gameBox.style.filter = "blur(2vmin)";
            break;
        case 9:
            gameBox.style.filter = "none";
            gameBox.style.transform = "skewX(15deg)";
            break;
        case 10:
            gameBox.style.transform = "skewX(-15deg)";
            break;
        case 11:
            gameBox.style.transform = "scale(-1,-1)";
            break;
        case 12:
            gameBox.style.transform = "scaleX(-1)";
            break;
        case 13:
            gameBox.style.transform = "scaleY(-1)";
            break;
        case 14:
            gameBox.style.transform = "none";
            gameBox.style.filter = "grayscale(100%)";
            break;
        case 15:
            gameBox.style.filter = "sepia(100%)";
            break;
        case 16:
            gameBox.style.filter = "contrast(200%)";
            break;
        case 17:
            gameBox.style.filter = "brightness(50%)";
            break;
        case 18:
            gameBox.style.filter = "invert(100%)";
            break;
        case 19:
            gameBox.style.filter = "none";
            gameBox.style.animation = "shake2 1s infinite";
            break;
        case 20:
            gameBox.style.animation = "shake3 1s infinite";
            break;
        case 21:
            gameBox.style.animation = "rock 1s ease-in-out alternate infinite";
            break;
        case 22:
            gameBox.style.animation = "roll 10s linear infinite";

            //aaa-disabled-for-now
            //analytics for those seeing complete cycle
            //gtag('event', ('Effects Cycle'), {
            //    'event_category': 'Navigation',
            //    'event_label': 'Game Effects'
            //});
            break;
        case 23:
            gameBox.style.animation = "none";
            effectsCounter = 0;
            break;
        default:
    }
    gameEffectsIndicator.innerHTML = effectsCounter;
    effectsCounter++;
});









//TEST FOR IFRAMES
//////////////////
//console.log("Testing Framing");

var externallyFramed = false;
(function () {
    try {
        externallyFramed = top.location.host != location.host;
    } catch (err) {
        externallyFramed = true;
    }
    if (externallyFramed) {
        //top.location = location;
        console.log("Game EF."); //external framing
        console.log(document.referrer);
    } else {
        //console.log("Game NOT EF.");
    }
})();


let debugString = "Debugging: ";









//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////









//ANALYTICS
///////////


///set up analytics
var imported = document.createElement('script');
imported.src = 'https://www.googletagmanager.com/gtag/js';
document.head.appendChild(imported);

window.dataLayer = window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments);
}

gtag('js', new Date());




var GA4ID = "G-Q1SE2SYDTW";

var sessionExpiryTime = 180000;

var gameType = "NM"; //normal

//set google analytics sample rate
var GA4SampleRate = 10; //for example 10%

if (isSchool) { // for all games on friv4school
    GA4SampleRate = 100;
}

if (game.spare == 1) { //extra game
    GA4SampleRate = 100;
    gameType = "EX";
}

if (isSchool && game.spare == 2) { //worthy game
    sessionExpiryTime = 100000; //100 seconds
    gameType = "WT";
}

if (game.spare == 3) { //test game
    GA4SampleRate = 100;
    gameType = "TS";
}

if (game.spare == 7) { //test game
    GA4SampleRate = 100;
    gameType = "T7";
}

if (game.spare == 8) { //test game
    GA4SampleRate = 100;
    gameType = "T8";
}

if (game.spare == 9) { //test game
    GA4SampleRate = 100;
    gameType = "T9";
}

if (isSchool && game.spare == 4) { //school test game
    GA4SampleRate = 100;
    sessionExpiryTime = 100000; //100 seconds
    gameType = "ST";
}

if (classicMenu) {
    GA4SampleRate = 100;
    sessionExpiryTime = 180000;
    gameType = "CM";
}


var siteID = "F";

if (isSchool) {
    siteID = "S";
}

const cohort = 2;


debugString += "GA4ID:" + GA4ID + " GA4SampleRate:" + GA4SampleRate + " | ";

gtag('config', GA4ID, {
    'send_page_view': false,
    'sample_rate': GA4SampleRate
});

//original ipad
if (/iPad/.test(userAgent)) {
    shortOS = "IPD";
}

//check for newer iPads etc.
if (navigator.platform === 'MacIntel' && hasTouchPoints) { //newer iPads
    shortOS = "IPN";
}

//check for newer iPhones and iPodTouch etc.
if (/iPhone|iPod/.test(userAgent)) {
    shortOS = "IPH";
}

//check for Amazon tablets
if (/silk/i.test(userAgent)) {
    shortOS = "SLK";
}

//break out android versions
if (os == "Android") {

    var androidVersionTruncated = getAndroidVersion();
    shortOS = "ANN";

    if (androidVersionTruncated == 9 || androidVersionTruncated == 10) {
        shortOS = "ANM";
    }

    if (androidVersionTruncated >= 11) {
        shortOS = "ANH";
    }
}


//SEND EVENTS
/////////////

var gameTitleTruncated = game.title.replace(/ /g, "").replace(/'/g, "").replace(/\./g, "").replace(/!/g, ""); //remove any spaces and apostrophies etc.

gameTitleTruncated = gameTitleTruncated.replace(/AndWatergirl/g, "").replace(/Scavenger/g, "Sc"); //special exception for long game names

if (gameTitleTruncated.length > 18) { //for long game names, remove some vowels
    gameTitleTruncated = gameTitleTruncated.replace(/a/g, "").replace(/e/g, "");
}

gameTitleTruncated = gameTitleTruncated.slice(0, 16); //trim whatever remains down to size

if (gamePlays > 2) {

    var submitString1 = siteID + cohort + "-" + shortOS + "-";
    var submitString2 = "S" + GA4SampleRate + "-" + gameType + "-" + gameTitleTruncated;

    gtag('event', submitString1 + "LD-" + submitString2); //on game load

    if (sessionExpiryTime == 100000) {
        sessionExpiryTime = 180000;
    }

    setTimeout(function () {
        gtag('event', submitString1 + "E" + (sessionExpiryTime / 1000) + "-" + submitString2);
    }, sessionExpiryTime);

    setTimeout(function () {
        gtag('event', submitString1 + "E" + ((sessionExpiryTime * 2) / 1000) + "-" + submitString2);
    }, sessionExpiryTime * 2);

    setTimeout(function () {
        gtag('event', submitString1 + "E" + ((sessionExpiryTime * 3) / 1000) + "-" + submitString2);
    }, sessionExpiryTime * 3);

    //aaa-disabled-for-now
    //function recordRightClick() {
    //    gtag('event', ("Right Click : " + game.title), {
    //        'event_category': 'Debugging',
    //        'event_label': ('GameA : Right Click : ' + os)
    //    });
    //}

}

//record games without full translations
//console.log("game.faDescription: " + game.faDescription)

if (game.faDescription == undefined && Math.random() > 0.995) {
    console.log("fa-translation-needed");
    gtag('event', "TransReqY-fa: " + gameTitleTruncated);
}

if (game.esDescription == undefined && Math.random() > 0.995) {
    console.log("es-translation-needed");
    gtag('event', "TransReqY-es: " + gameTitleTruncated);
}

//promo
if (false) {
    promoBox.style.display = "block";
    promoBox.innerHTML = debugString;
}

//EXPERIMENTAL VIEWPORT SETTING
///////////////////////////////
if (touchDevice) {
    document.addEventListener('DOMContentLoaded', (event) => {
        //console.log('DOM fully loaded and parsed');
        setTimeout(function () {
            //console.log('Changing viewport...');
            var metaTag = document.createElement('meta');
            metaTag.name = "viewport";
            metaTag.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0";
            document.getElementsByTagName('head')[0].appendChild(metaTag);
        }, 7000); //best-guess-for-lh
    });
}


//DISABLE RIGHT CLICKS
//////////////////////

//disable rmb on loader page
document.addEventListener('contextmenu', event => event.preventDefault());

//disable rmbon inner game page
setTimeout(function () {

    //disable rmb on inner game
    gameBox.contentWindow.document.getElementsByTagName("body")[0].addEventListener("contextmenu", e => e.preventDefault());

    //listen for and record rmb
    //gameBox.contentWindow.document.getElementsByTagName("body")[0].addEventListener('contextmenu', function (e) {
    //    console.log("rmb");
    //    recordRightClick();
    //});

}, 2000);


//ADS CONVERSIONS
/////////////////

//setup...
window.dataLayer = window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'AW-10805618303');

//event...
if (gamePlays == 0) { //new user
    setTimeout(function () {
        console.log("conv new");
        gtag('event', 'conversion', {
            'send_to': 'AW-10805618303/vc_CCJLRooIDEP_MwqAo'
        });
    }, 90000); //90 seconds of gameplay
}

//MUSIC RATING
//////////////

if (game.musicVote == true && Math.random() > 0.7 && (shortLang == "en" || shortLang == "es" || shortLang == "pt" || shortLang == "fr" || shortLang == "pl") && os.indexOf("Desktop") > -1) {

//if (false) {

    //shortLang = "pl";
    var thankyouString = "Thank you! 😊";
    console.log("Will run music rating. Shortlang: " + shortLang);

    setTimeout(function () {

        gtag('config', GA4ID, {
            'sample_rate': 100
        });

        spare1.style.display = "block";

        var userInteraction = false;
        const voteBlock = "&nbsp;&nbsp;<span id=spare1ThumbsUp>👍</span>&nbsp;&nbsp;<span id=spare1ThumbsDown>👎</span>";

        switch (shortLang) {
            case "es":
                spare1.innerHTML = "🎵 ¡Por favor ayuda! ¿Cómo calificarías el sonido de este juego? Por ejemplo, si hay música, ¿te gusta?" + voteBlock;
                thankyouString = "¡Gracias! 😊";
                break;
            case "pt":
                spare1.innerHTML = "🎵 Por favor ajude! Como você avaliaria o som neste jogo? Por exemplo, se tem música, você gosta?" + voteBlock;
                thankyouString = "Obrigado! 😊";
                break;
            case "fr":
                spare1.innerHTML = "🎵 Aidez nous s'il vous plaît! Comment évalueriez-vous le son de ce jeu ? Par exemple, s’il y a de la musique, l’aimez-vous ?" + voteBlock;
                thankyouString = "Merci! 😊";
                break;
            case "pl":
                spare1.innerHTML = "🎵 Proszę pomóż! Jak oceniasz dźwięk w tej grze? Na przykład, jeśli jest muzyka, czy ci się podoba?" + voteBlock;
                thankyouString = "Dziękuję! 😊";
                break;
            default:
                spare1.innerHTML = "🎵 Please help! How would you rate the sound in this game? For example, if there is music, do you like it?" + voteBlock;
        }

        spare1.onmouseover = function () {
            userInteraction = true;
        };
        spare1ThumbsUp.addEventListener('click', surveyYes);
        spare1ThumbsDown.addEventListener('click', surveyNo);

        setTimeout(function () {
            if (!userInteraction) {
                spare1.style.display = "none";
            }
        }, 300000); //300000 = 5 mins | 40000

    }, 240000); //240000 = 4 mins | 10000
}

function surveyYes() {

    gtag('event', "MusicXUpVote-" + gameTitleTruncated);

    console.log("MusicXUpVote-" + gameTitleTruncated);

    removeSurvey();
}

function surveyNo() {
    gtag('event', "MusicXDownVote-" + gameTitleTruncated);

    console.log("MusicXDownVote-" + gameTitleTruncated);

    removeSurvey();
}

function removeSurvey() {
    spare1.innerHTML = thankyouString;

    setTimeout(function () {
        spare1.style.display = "none";
    }, 2000);

}


//SURVEY
////////

if (game.popIndex == undefined) {
    game.popIndex = 0;
}

console.log("game.popIndex: " + game.popIndex);

//if (Math.random() > 0.93 && game.popIndex < 20 && !game.pop && (shortLang == "es" || shortLang == "pt" || shortLang == "fr" || shortLang == "pl") && os.indexOf("Desktop") > -1) { //shortLang == "en" || 

if (false) {

    //shortLang = "pl";
    var thankyouString = "Thank you! 😊";
    console.log("Will run survey. Shortlang: " + shortLang);

    setTimeout(function () {

        gtag('config', GA4ID, {
            'sample_rate': 100
        });

        spare1.style.display = "block";

        var userInteraction = false;
        console.log("userInteraction: " + userInteraction);

        const voteBlock = "&nbsp;&nbsp;<span id=spare1Yes>Yes</span>&nbsp;&nbsp;<span id=spare1No>No</span>";

        switch (shortLang) {
            case "es":
                spare1.innerHTML = "¡Por favor ayuda! Estamos intentando identificar juegos originales y juegos &quot;copiados&quot;. ¿Este juego parece una copia de un juego famoso o utiliza personajes de películas famosos, etc.?" + voteBlock;
                spare1Yes.innerHTML = "Sí";
                spare1No.innerHTML = "No";
                thankyouString = "¡Gracias! 😊";
                break;
            case "pt":
                spare1.innerHTML = "Por favor ajude! Estamos tentando identificar jogos originais e jogos &quot;copiados&quot;. Este jogo parece uma cópia de um jogo famoso ou usa personagens de filmes famosos, etc.?" + voteBlock;
                spare1Yes.innerHTML = "Sim";
                spare1No.innerHTML = "Não";
                thankyouString = "Obrigado! 😊";
                break;
            case "fr":
                spare1.innerHTML = "S'il vous plaît, aidez-moi ! Nous essayons d'identifier les jeux originaux et les jeux &quot;copiés&quot;. Ce jeu ressemble-t-il à une copie d'un jeu célèbre, ou utilise-t-il des personnages de films célèbres, etc. ?" + voteBlock;
                thankyouString = "Merci! 😊";
                spare1Yes.innerHTML = "Oui";
                spare1No.innerHTML = "Non";
                break;
            case "pl":
                spare1.innerHTML = "Proszę pomóż! Próbujemy zidentyfikować gry oryginalne i gry &quot;skopiowane&quot;. Czy ta gra wygląda jak kopia słynnej gry, czy wykorzystuje znane postacie filmowe itp.?" + voteBlock;
                thankyouString = "Dziękuję! 😊";
                spare1Yes.innerHTML = "Tak";
                spare1No.innerHTML = "Nie";
                break;
            default:
                spare1.innerHTML = "Please help! We're trying to identify original games and &quot;copied&quot; games. Does this game look like a copy of a famous game, or use famous movie characters etc?" + voteBlock;
        }

        spare1.onmouseover = function () {
            userInteraction = true;
            console.log("userInteraction: " + userInteraction);

        };
        spare1Yes.addEventListener('click', surveyYes);
        spare1No.addEventListener('click', surveyNo);

        setTimeout(function () {
            if (!userInteraction) {
                spare1.style.display = "none";
            }
        }, 60000); //hide message after shown| 60000 = 1 min | 40000

    }, 90000); //show message | 90000 = 1.5 mins | 10000
} else {
    console.log("Will NOT run survey. Shortlang: " + shortLang);
}

function surveyYes() {

    gtag('event', "FamousSurveyYes-" + gameTitleTruncated);

    console.log("FamousSurveyYes-" + gameTitleTruncated);

    removeSurvey();
}

function surveyNo() {
    gtag('event', "FamousSurveyNo-" + gameTitleTruncated);

    console.log("FamousSurveyNo-" + gameTitleTruncated);

    removeSurvey();
}

function removeSurvey() {
    spare1.innerHTML = thankyouString;

    setTimeout(function () {
        spare1.style.display = "none";
    }, 2000);

}

//TEMP LANGUAGE ASSESSMENT
//////////////////////////

/*
console.log("running language support test");

switch (shortLang) {
    case "en":
    case "es":
    case "pt":
    case "fr":
    case "pl":
    case "el":
    case "id":
    case "ar":
    case "he":
    case "hr":
    case "sk":
    case "tr":
    case "sr":
    case "ro":
    case "ru":
    case "th":
    case "de":
    case "it":
    case "hu":
    case "bg":
    case "da":
    case "sv":
    case "sk":
    case "nb":
    case "ka":
    case "nl":
    case "zh":
    case "sq":
    case "lt":
    case "lv":
    case "vi":
        gtag('event', "LanguageSupported-" + shortLang);
        break;
    default:
        gtag('event', "LanguageUnsupported-" + shortLang);
}
*/
