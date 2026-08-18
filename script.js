// ================= MUSIC =================

let musicPlaying = false;


function toggleMusic() {

    const music = document.getElementById("music");

    const button = document.getElementById("musicButton");


    if (musicPlaying) {

        music.pause();

        button.innerHTML = "🎵 Play Music";

        musicPlaying = false;

    } else {

        music.play()
            .then(function () {

                button.innerHTML = "⏸️ Pause Music";

                musicPlaying = true;

            })
            .catch(function (error) {

                console.log("Music error:", error);

                alert(
                    "Music could not be played. Please check that song.mp3 is in the main folder."
                );

            });

    }

}


// ================= OPEN LETTER =================

function openLetter() {

    const envelope =
        document.getElementById("envelope");

    envelope.classList.add("open");


    setTimeout(function () {

        document.getElementById("opening")
            .style.display = "none";

        document.getElementById("letter")
            .classList.remove("hidden");

        startHearts();

        typeLetter();

    }, 800);

}


// ================= TYPEWRITER =================

function typeLetter() {

    const paragraphs =
        document.querySelectorAll(
            ".paper p:not(.signature)"
        );


    let paragraphIndex = 0;


    function typeNextParagraph() {

        if (paragraphIndex >= paragraphs.length) {

            document.querySelector(".signature")
                .style.opacity = "1";

            return;

        }


        const paragraph =
            paragraphs[paragraphIndex];


        const text =
            paragraph.innerText;


        paragraph.innerText = "";


        let characterIndex = 0;


        function typeCharacter() {

            if (characterIndex < text.length) {

                paragraph.innerText +=
                    text.charAt(characterIndex);

                characterIndex++;


                setTimeout(
                    typeCharacter,
                    40
                );

            } else {

                paragraphIndex++;


                setTimeout(
                    typeNextParagraph,
                    500
                );

            }

        }


        typeCharacter();

    }


    typeNextParagraph();

}


// ================= MEMORIES =================

function showMemories() {

    document.getElementById("letter")
        .style.display = "none";


    document.getElementById("memories")
        .classList.remove("hidden");


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


// ================= FINAL =================

function showFinal() {

    document.getElementById("memories")
        .style.display = "none";


    document.getElementById("final")
        .classList.remove("hidden");


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });


    startHearts();

}


// ================= SECRET MESSAGE =================

function revealMessage() {

    document.getElementById("secretMessage")
        .classList.remove("hidden");


    startHearts();

}


// ================= FLOATING HEARTS =================

function startHearts() {

    if (window.heartsStarted) {

        return;

    }


    window.heartsStarted = true;


    setInterval(function () {

        const heart =
            document.createElement("div");


        heart.classList.add(
            "floating-heart"
        );


        heart.innerHTML = "❤️";


        heart.style.left =
            Math.random() * 100 + "vw";


        heart.style.fontSize =
            (15 + Math.random() * 25) + "px";


        document.body.appendChild(heart);


        setTimeout(function () {

            heart.remove();

        }, 5000);


    }, 1000);

}
