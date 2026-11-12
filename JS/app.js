// Anime episodes data
const episodes = [
    { id: "11uC5BfTxPVSEkRnFuWX-sGew03O6skjd", title: "Iblislar Qotili 1-qism" },
    { id: "1LHb8GIPqp11knaOu_Cd0q4eLAph4XpoX", title: "Iblislar Qotili 2-qism" },
    { id: "1zlCWmp7H6FLfh5o-_wsHrp5v3z3b6I91", title: "Iblislar Qotili 3-qism" },
    { id: "1H9pHuNFC8ex1ewO5eKsqlG3YjuDAvXEd", title: "Iblislar Qotili 4-qism" },
    { id: "1UIZy7VWhGsjFaua-iFFEHg3fK3aiW5Td", title: "Iblislar Qotili 5-qism" },
    { id: "1VmnhsAql5lVUumIRW7BIOfEk18Jdnx2j", title: "Iblislar Qotili 6-qism" },
    { id: "1OspJrS_LlGtjc7sH4i-0qbVQ7Ln9uexs", title: "Iblislar Qotili 7-qism" },
    { id: "1BpFDht7TlaFVP-PEOZX2_nU1iPvMFsHh", title: "Iblislar Qotili 8-qism" },
    { id: "1miApySeyohADiUzoErtuBfvhjw41f5Ou", title: "Iblislar Qotili 9-qism" },
    { id: "1pklQ3vbOxlkE7VA-W4Qo4er_zFZ3kxO1", title: "Iblislar Qotili 10-qism" },
    { id: "1IQjAO_cEyteR4OfR-lPyjt4IbQjc2F7d", title: "Iblislar Qotili 11-qism" },
    { id: "1KmMbxvijqhroYz3d6ZtobZVqQDElawso", title: "Iblislar Qotili 12-qism" },
    { id: "1XrdfwKMczHUGzv5eJa2BxgO82XhQrENJ", title: "Iblislar Qotili 13-qism" },
    { id: "1gArX5djSvXuCzbGsKBbWnwZc000urXN5", title: "Iblislar Qotili 14-qism" },
    { id: "1y9aw5xYWC_ftvReXQvt1YAdGjyiB-v5M", title: "Iblislar Qotili 15-qism" },
    { id: "1cNpl9M1Vc-bNVz0aOAF5wwV9gDj6R4sF", title: "Iblislar Qotili 16-qism" },
    { id: "1K2vtE2mqvWOAxJ0-VHwBx4civn8P080b", title: "Iblislar Qotili 17-qism" },
    { id: "1VGmznjxDmWMXgbcMncBHbzULu9he_orC", title: "Iblislar Qotili 18-qism" },
    { id: "1J7iXRWN3YMy1sfmS31jYq5-yJwKsWc31", title: "Iblislar Qotili 19-qism" },
    { id: "1_cnj6C9-XlOEgDctF6AYTosRhkWjaqCw", title: "Iblislar Qotili 20-qism" },
    { id: "1dmv7Yp8TaarbcfkBkmT-zVBpf3sPVQhW", title: "Iblislar Qotili 21-qism" },
    { id: "1RzKdfrXFwiS7YYU9Q6rL7GoqGHgTtj6l", title: "Iblislar Qotili 22-qism" },
    { id: "1tgNbglNDpvoDai3jwNNv7FKe2HM6Me7n", title: "Iblislar Qotili 23-qism" },
    { id: "1-K16_4ZJsKrj5pmIL0O_kbzIChW4KLcH", title: "Iblislar Qotili 24-qism" },
    { id: "1xcNGEKLk6C2maHwUwATsA3nxFXdxbq1w", title: "Iblislar Qotili 25-qism" },
    { id: "1xAJuGumfeaY2I1HogZmY4MwQ6WbQhHnY", title: "Iblislar Qotili 26-qism" },
    { id: "1GQtKwK1vXieCfNmS77nl8uz8B1GEAgC5", title: "Iblislar Qotili Cheksiz Poyezd" }
];

document.addEventListener("DOMContentLoaded", () => {
    const videoFrame = document.getElementById("myVideo");
    const titleElement = document.getElementById("qismNomi");
    const episodesList = document.getElementById("episodes-container");

    if (!videoFrame || !titleElement || !episodesList) return;

    const videoFrameWrapper = videoFrame.parentElement;
    const minimumPlayerWidth = 533;

    function resizeVideoFrame() {
        const wrapperWidth = videoFrameWrapper.clientWidth;
        const playerWidth = Math.max(wrapperWidth, minimumPlayerWidth);

        videoFrame.style.width = `${playerWidth}px`;
        videoFrame.style.height = `${playerWidth * 9 / 16}px`;
        videoFrame.style.transform = `scale(${wrapperWidth / playerWidth})`;
    }

    resizeVideoFrame();
    window.addEventListener("resize", resizeVideoFrame);

    // Set initial video (Episode 1)
    if (episodes.length > 0) {
        setEpisode(episodes[0]);
    }

    // Generate episode buttons
    episodes.forEach((ep, index) => {
        const btn = document.createElement("button");
        btn.className = "qismlar";
        if (index === 0) {
            btn.classList.add("active");
            btn.setAttribute("aria-current", "true");
        }
        
        // Handle short title for buttons
        let label = ep.title.replace("Iblislar Qotili ", ""); 
        if (label.includes("-qism")) {
            label = label.replace("-qism", "");
        } else if (label === "Cheksiz Poyezd") {
            label = "Poyezd";
        }
        btn.innerText = label;

        btn.addEventListener("click", () => {
            // Update active state
            document.querySelectorAll(".qismlar").forEach(el => {
                el.classList.remove("active");
                el.removeAttribute("aria-current");
            });
            btn.classList.add("active");
            btn.setAttribute("aria-current", "true");

            // Change video and title
            setEpisode(ep);
        });

        episodesList.appendChild(btn);
    });

    function setEpisode(ep) {
        videoFrame.src = `https://drive.google.com/file/d/${ep.id}/preview`;
        titleElement.innerText = ep.title;
    }
});