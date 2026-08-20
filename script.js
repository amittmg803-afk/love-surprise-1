/* =====================================================
   PASSWORD
===================================================== */

const PASSWORD = "20800510";


/* =====================================================
   ELEMENTS
===================================================== */

const passwordScreen =
    document.getElementById("passwordScreen");

const password =
    document.getElementById("password");

const enterBtn =
    document.getElementById("enterBtn");

const error =
    document.getElementById("error");

const originals =
    document.getElementById("originals");

const cinematicIntro =
    document.getElementById("cinematicIntro");

const anniversaryIntro =
    document.getElementById("anniversaryIntro");

const videoSection =
    document.getElementById("videoSection");

const video =
    document.getElementById("loveVideo");

const main =
    document.getElementById("main");

const music =
    document.getElementById("music");

const musicButton =
    document.getElementById("musicButton");


/* =====================================================
   PASSWORD START
===================================================== */

enterBtn.addEventListener(
    "click",
    startMovie
);


password.addEventListener(
    "keydown",
    function(event){

        if(event.key === "Enter"){

            startMovie();

        }

    }
);


function startMovie(){

    if(password.value !== PASSWORD){

        error.style.display = "block";

        password.value = "";

        password.focus();

        return;

    }


    error.style.display = "none";

    passwordScreen.style.display = "none";


    /* ===============================
       MAMATA ORIGINALS
    =============================== */

    originals.style.display = "flex";


    setTimeout(function(){

        originals.style.display = "none";

        cinematicIntro.style.display = "flex";

    },4500);


    /* ===============================
       CINEMATIC TITLE
    =============================== */

    setTimeout(function(){

        cinematicIntro.style.display = "none";

        anniversaryIntro.style.display = "flex";

    },8000);


    /* ===============================
       ANNIVERSARY TITLE
    =============================== */

    setTimeout(function(){

        anniversaryIntro.style.display = "none";

        videoSection.style.display = "flex";

        video.play().catch(function(){

            console.log(
                "Browser blocked autoplay."
            );

        });

    },11500);

}


/* =====================================================
   VIDEO
===================================================== */

video.addEventListener(
    "ended",
    showMain
);


document
    .getElementById("skipVideo")
    .addEventListener(
        "click",
        showMain
    );


function showMain(){

    video.pause();

    videoSection.style.display = "none";

    main.style.display = "block";

    musicButton.style.display = "block";


    music.play().catch(function(){

        console.log(
            "Music autoplay blocked."
        );

    });


    window.scrollTo(0,0);

    startHearts();

}


/* =====================================================
   MUSIC
===================================================== */

musicButton.addEventListener(
    "click",
    function(){

        if(music.paused){

            music.play();

            musicButton.innerHTML =
                "🔊";

        }else{

            music.pause();

            musicButton.innerHTML =
                "🔇";

        }

    }
);


/* =====================================================
   START STORY
===================================================== */

function startStory(){

    document
        .getElementById("memories")
        .scrollIntoView({
            behavior:"smooth"
        });

}


/* =====================================================
   12 PHOTO SLIDESHOW
===================================================== */

const slides =
    document.querySelectorAll(".slide");

let currentSlide = 0;

let slideshowTimer;


function showSlide(index){

    slides[currentSlide]
        .classList.remove("active");


    currentSlide =
        (index + slides.length)
        % slides.length;


    slides[currentSlide]
        .classList.add("active");

}


function nextSlide(){

    showSlide(
        currentSlide + 1
    );

    restartSlideshow();

}


function previousSlide(){

    showSlide(
        currentSlide - 1
    );

    restartSlideshow();

}


function startSlideshow(){

    slideshowTimer =
        setInterval(
            function(){

                showSlide(
                    currentSlide + 1
                );

            },
            5000
        );

}


function restartSlideshow(){

    clearInterval(
        slideshowTimer
    );

    startSlideshow();

}


startSlideshow();


/* =====================================================
   LOVE LETTER
===================================================== */

const letterText = `Dear budi ❤️,
Happy Anniversary, My Love
Today is not just another day.❤️  ❤️
  ❤️
Today is a reminder of the beautiful journey we started three years ago.

Three years.

1095 days.

So many smiles.

So many conversations.

So many memories.

Happy Anniversary, मेरी प्यारी budi 🥰

आजको दिन मेरो लागि केवल एउटा Anniversary होइन, हाम्रो प्रेम, हाम्रो साथ र हामीले सँगै बिताएका हरेक
 सुन्दर पलहरू सम्झिने विशेष दिन हो। ❤️

तिमी मेरो जीवनमा आएपछि मैले प्रेमको वास्तविक अर्थ बुझ्न पाएँ। तिमीसँग कुरा
 गर्दा, तिमीसँग हाँस्दा, तिमीसँग रिसाउँदा अनि फेरि एक-अर्कालाई सम्झाउँदा—यी
  सबै साना–साना पलहरू नै मेरो जीवनका सबैभन्दा ठूला खुसीहरू हुन्। 🥺❤️

हामीबीच कहिलेकाहीँ misunderstanding हुन्छ, कहिलेकाहीँ झगडा हुन्छ, कहिलेकाहीँ एक-अर्कासँग 
रिसाउँछौँ। तर यी सबैभन्दा माथि हाम्रो माया छ। म चाहन्छु, जस्तोसुकै परिस्थिति आए पनि हामी एक-अर्काको साथ कहिल्यै नछोडौँ। 🤝❤️

 तिमी मेरो लागि केवल girlfriend होइनौ। तिमी मेरो खुशी, मेरो शान्ति, 
मेरो हिम्मत र मेरो भविष्यको एउटा सुन्दर सपना हौ। ❤️

मलाई थाहा छैन भविष्यमा हाम्रो जीवन कस्तो हुनेछ, तर एउटा कुरा चाहिँ पक्का छ—म मेरो 
भविष्यमा तिमीलाई सधैं देख्न चाहन्छु। तिमीसँगै हाँस्न चाहन्छु, तिमीसँगै दुःख बाँड्न चाहन्छु,
 तिमीसँगै सफलताको खुशी मनाउन चाहन्छु र जीवनका हरेक कठिन समयमा तिम्रो हात समातेर अगाडि बढ्न चाहन्छु। 🫶❤️

तिम्रो एउटा मुस्कानले मेरो खराब दिन पनि राम्रो बनाउन सक्छ। तिम्रो एउटा “म छु नि” 
भन्ने शब्दले मलाई धेरै हिम्मत दिन्छ। त्यसैले मेरो जीवनमा तिमी हुनु नै मेरो लागि ठूलो blessing हो। 🥹❤️

आज Anniversary को दिन म तिमीलाई एउटा promise गर्न चाहन्छु—
म सधैं perfect boyfriend हुन सक्छु भनेर promise गर्न सक्दिनँ, तर तिमीलाई साँचो

मनले माया गर्ने, तिमीलाई respect गर्ने, तिम्रो खुशीको ख्याल गर्ने र हाम्रो सम्बन्धलाई बचाउन सधैं प्रयास गर्ने promise गर्छु। ❤️🤞

हाम्रो प्रेम आज जति सुन्दर छ, भोलि त्योभन्दा अझ सुन्दर होस्। हाम्रा सपना पूरा हुँदै जाऊन्, 
हाम्रो सम्बन्ध अझ बलियो हुँदै जाओस्, अनि एक दिन हामी आजका यी सबै पलहरू सम्झेर मुस्कुराउन सकौँ। ❤️

**Thank you for being a part of my life, darling. ❤️
Thank you for loving me, understanding me, and staying beside me. 🥺❤️

I don't need a perfect life.
**I just want a life where I can wake up every day knowing that you are still beside me. ❤️♾️


तिमी आज, भोलि र सधैं मेरो लागि special रहनेछौ। ❤️
   
### ❤️ From the Deepest Part of My Heart...

Mamata, there is something I really want you to know today.

No matter how many times I say “I love you,” I feel like those three words are 
still not enough to explain what you truly mean to me. You have become such an 
important part of my life that sometimes I cannot even imagine my days without you. ❤️

You have seen different sides of me. You have seen me happy, tired, angry, emotional, 
confused, and sometimes completely lost. Yet, you stayed. And that means more to me than I can ever explain. 🥺❤️

I know I am not perfect. I know there are times when I make mistakes, say the wrong
 things, become angry, or fail to understand you properly. I may not always be able 
 to give you everything you deserve, but please believe me when I say that my feelings for you are real.

I am still learning how to love you better, how to understand you better, and how to become a better person for us. ❤️

There may be days when we don't agree. There may be moments when we hurt each other's 
feelings. But I never want one bad moment to make us forget all the beautiful moments we have created together.

Whenever we fight, I don't want to win the argument.
**I just want to win your heart again. ❤️

Whenever you are sad, I want to be the person who makes you smile again. Whenever you feel alone, I want you to remember that you have someone who genuinely cares about you. And whenever life feels too difficult, I want you to know that you don't have to face everything alone. I want to be beside you. ❤️🫶

I don't promise that our future will always be perfect. But I promise that I will always try to make it beautiful.

I want to grow with you.
I want to learn with you.
I want to travel with you.
I want to make memories with you.
I want to celebrate our successes together.
And when life gets difficult, I want to hold your hand even tighter. ❤️

Someday, I hope we can sit together somewhere peaceful, look back at everything we went through, and smile because we never gave up on each other.

I want to remember these days—not because everything was perfect, but because we chose to stay, understand, forgive, and love each other again and again. ❤️

You are someone I don't want to lose.

You are someone I want to keep choosing, not just on special days like our Anniversary, but on ordinary days too.

Because loving you isn't something I want to do only when everything is good.

**I want to love you when life is easy, and I want to love you even more when life is difficult. ❤️**

Three years may sound like just a number, but for me, it represents countless memories, thousands of conversations, endless smiles, little fights, beautiful moments, tears, forgiveness, and most importantly, a love that has continued to grow. ❤️♾️

Thank you for every smile you have given me.

Thank you for every moment you stayed beside me.

Thank you for every time you understood me.

Thank you even for the moments we fought, because they taught us how important we are to each other.

And most importantly...

**Thank you for choosing me. ❤️

If I could give you one gift today, I would give you the ability to see yourself through my eyes.

Then you would understand just how special, beautiful, and precious you are to me. ❤️🥺

I don't know what the future holds for us, but I know what I want.

**I want you in it.**

I want your name in my future plans.
Your smile in my happiest memories.
Your hand in mine during difficult times.
And your love in my heart for as long as I live. ❤️

No matter how much time passes, I never want you to become just a memory from my past.

**I want you to be the person I grow old with. ❤️**

So today, on our Anniversary, I just want to say...

I am grateful that our paths crossed.
I am grateful that I met you.
I am grateful for every memory we have created.
And I am grateful that I get to call you mine. ❤️

Happy Anniversary, my love. 🥺❤️

Here is to everything we have been, everything we are, and everything we are still going to become together.

**I choose you today.
I will choose you tomorrow.
And if life gives me another chance,
I will choose you all over again. ❤️♾️

**I LOVE YOU, budi. ❤️
MORE THAN YESTERDAY,
LESS THAN TOMORROW. ❤️💍♾️
I LOVE YOU SO MUCH, BUDI. ❤️♾️💍
 


Forever yours,
**Ashok ❤️**

And I hope I get to love you through every chapter that comes next.
amro yo special day lai mah kaile birsine xaina
Happy Anniversary, budi. ❤️`;


const letterElement =
    document.getElementById(
        "letterText"
    );

const signature =
    document.getElementById(
        "signature"
    );

let letterStarted = false;

let letterIndex = 0;


function typeLetter(){

    if(
        letterIndex <
        letterText.length
    ){

        letterElement.textContent +=
            letterText.charAt(
                letterIndex
            );

        letterIndex++;


        setTimeout(
            typeLetter,
            28
        );

    }else{

        signature.style.opacity =
            "1";

    }

}


/* =====================================================
   LETTER OBSERVER
===================================================== */

const letterObserver =
    new IntersectionObserver(
        function(entries){

            entries.forEach(
                function(entry){

                    if(
                        entry.isIntersecting &&
                        !letterStarted
                    ){

                        letterStarted =
                            true;

                        typeLetter();

                    }

                }
            );

        },
        {
            threshold:.25
        }
    );


letterObserver.observe(
    document.querySelector(
        ".letterSection"
    )
);


/* =====================================================
   PROPOSAL
===================================================== */

function openProposal(){

    const ring =
        document.getElementById(
            "ring"
        );

    const button =
        document.getElementById(
            "proposalButton"
        );

    const message =
        document.getElementById(
            "proposalMessage"
        );


    button.style.display =
        "none";


    ring.classList.add(
        "show"
    );


    setTimeout(
        function(){

            message.style.display =
                "block";

        },
        1400
    );


    setTimeout(
        createFireworks,
        1700
    );

}


/* =====================================================
   FIREWORKS
===================================================== */

function createFireworks(){

    const container =
        document.getElementById(
            "fireworks"
        );


    for(
        let i = 0;
        i < 35;
        i++
    ){

        setTimeout(
            function(){

                const firework =
                    document.createElement(
                        "div"
                    );


                firework.className =
                    "firework";


                firework.style.left =
                    Math.random() *
                    100 +
                    "%";


                firework.style.top =
                    Math.random() *
                    80 +
                    "%";


                container.appendChild(
                    firework
                );


                setTimeout(
                    function(){

                        firework.remove();

                    },
                    1600
                );

            },
            i * 120
        );

    }

}


/* =====================================================
   FLOATING HEARTS
===================================================== */

function createHeart(){

    const heart =
        document.createElement(
            "div"
        );


    heart.innerHTML =
        [
            "❤️",
            "💖",
            "💕",
            "💗",
            "✨"
        ][
            Math.floor(
                Math.random() * 5
            )
        ];


    heart.style.position =
        "fixed";

    heart.style.left =
        Math.random() * 100 +
        "vw";

    heart.style.bottom =
        "-30px";

    heart.style.fontSize =
        15 +
        Math.random() * 25 +
        "px";

    heart.style.zIndex =
        "1000";

    heart.style.pointerEvents =
        "none";


    const duration =
        4 +
        Math.random() * 5;


    heart.animate(

        [
            {
                transform:
                    "translateY(0)",
                opacity:0
            },

            {
                opacity:1
            },

            {
                transform:
                    "translateY(-110vh)",
                opacity:0
            }
        ],

        {
            duration:
                duration * 1000,

            easing:
                "linear"
        }

    );


    document.body.appendChild(
        heart
    );


    setTimeout(
        function(){

            heart.remove();

        },
        duration * 1000
    );

}


function startHearts(){

    setInterval(
        createHeart,
        900
    );

}