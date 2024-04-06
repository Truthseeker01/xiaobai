const photos = [
    {
        url: "./assets/小白/xiaobai.jpg",
        description: "When the weather is nice, I like to take Xiaobai out to the park."
    },
    {
        url: "./assets/小白/xiaobai29.jpg",
        description: "When the weather is nice, I like to take Xiaobai out to the park."
    },
    {
        url: "./assets/小白/xiaobai11.jpg",
        description: "Xiaobai and I both like to see flowers, especially the sea of flowers. We will take Xiaobai to see many flowers in the future. Unfortunately, after I go to college, my hometown only has winter and summer, but most of the flowers bloom in spring."
    },
    {
        url: "./assets/小白/xiaobai13.jpg",
        description: "Xiaobai and I both like to see flowers, especially the sea of flowers. We will take Xiaobai to see many flowers in the future. Unfortunately, after I go to college, my hometown only has winter and summer, but most of the flowers bloom in spring."
    },
    {
        url: "./assets/小白/xiaobai14.jpg",
        description: "Xiaobai and I both like to see flowers, especially the sea of flowers. We will take Xiaobai to see many flowers in the future. Unfortunately, after I go to college, my hometown only has winter and summer, but most of the flowers bloom in spring."
    },
    {
        url: "./assets/小白/xiaobai15.jpg",
        description: "Xiaobai and I both like to see flowers, especially the sea of flowers. We will take Xiaobai to see many flowers in the future. Unfortunately, after I go to college, my hometown only has winter and summer, but most of the flowers bloom in spring."
    },
    {
        url: "./assets/小白/xiaobai18.jpg",
        description: "Xiaobai and I both like to see flowers, especially the sea of flowers. We will take Xiaobai to see many flowers in the future. Unfortunately, after I go to college, my hometown only has winter and summer, but most of the flowers bloom in spring."
    },
    {
        url: "./assets/小白/xiaobai9.jpg",
        description: "Xiaobai and I both like to see flowers, especially the sea of flowers. We will take Xiaobai to see many flowers in the future. Unfortunately, after I go to college, my hometown only has winter and summer, but most of the flowers bloom in spring."
    },
    {
        url: "./assets/小白/xiaobai19.jpg",
        description: "Xiaobai and I both like to see flowers, especially the sea of flowers. We will take Xiaobai to see many flowers in the future. Unfortunately, after I go to college, my hometown only has winter and summer, but most of the flowers bloom in spring."
    },
    {
        url: "./assets/小白/xiaobai16.jpg",
        description: "Xiaobai and I both like to see flowers, especially the sea of flowers. We will take Xiaobai to see many flowers in the future. Unfortunately, after I go to college, my hometown only has winter and summer, but most of the flowers bloom in spring."
    },
    {
        url: "./assets/小白/xiaobai10.jpg",
        description: "Xiaobai and I both like to see flowers, especially the sea of flowers. We will take Xiaobai to see many flowers in the future. Unfortunately, after I go to college, my hometown only has winter and summer, but most of the flowers bloom in spring."
    },
    {
        url: "./assets/小白/xiaobai2.jpg",
        description: "Xiaobai and I both like to see flowers, especially the sea of flowers. We will take Xiaobai to see many flowers in the future. Unfortunately, after I go to college, my hometown only has winter and summer, but most of the flowers bloom in spring."
    },
    {
        url: "./assets/小白/xiaobai22.jpg",
        description: "Xiaobai and I both like to see flowers, especially the sea of flowers. We will take Xiaobai to see many flowers in the future. Unfortunately, after I go to college, my hometown only has winter and summer, but most of the flowers bloom in spring."
    },
    {
        url: "./assets/小白/xiaobai23.jpg",
        description: "Xiaobai and I both like to see flowers, especially the sea of flowers. We will take Xiaobai to see many flowers in the future. Unfortunately, after I go to college, my hometown only has winter and summer, but most of the flowers bloom in spring."
    },
    {
        url: "./assets/小白/xiaobai4.jpg",
        description: "Xiaobai and I both like to see flowers, especially the sea of flowers. We will take Xiaobai to see many flowers in the future. Unfortunately, after I go to college, my hometown only has winter and summer, but most of the flowers bloom in spring."
    },
    {
        url: "./assets/小白/xiaobai20.jpg",
        description: "In summer, I like to take Xiaobai for a ride on an electric bike and take Xiaobai to run on the grass."
    },
    {
        url: "./assets/小白/xiaobai12.jpg",
        description: "Behind Xiaobai is Ganjiang River."
    },
    {
        url: "./assets/小白/xiaobai5.jpg",
        description: "Behind Xiaobai is Ganjiang River."
    },
    {
        url: "./assets/小白/xiaobai17.jpg",
        description: "This picture was taken after climbing a mountain with Xiaobai to the top. Xiaobai is very good at climbing."
    },
    {
        url: "./assets/小白/xiaobai21.jpg",
        description: "Taking the puppy to the park."
    },
    {
        url: "./assets/小白/xiaobai28.jpg",
        description: "Taking Xiaobai to the playground."
    },
    {
        url: "./assets/小白/xiaobai24.jpg",
        description: "I made clothes for Xiaobai. This is my first time making clothes."
    },
    {
        url: "./assets/小白/xiaobai25.jpg",
        description: "I made clothes for Xiaobai. This is my first time making clothes."
    },
    {
        url: "./assets/小白/xiaobai26.jpg",
        description: "This is the hairpin I crocheted for Xiaobai with wool."
    },
    {
        url: "./assets/小白/xiaobai27.jpg",
        description: "Using wool to crochet clothes for Xiaobai."
    },
    {
        url: "./assets/小白/xiaobai8.jpg",
        description: "Taking Xiaobai to watch the fireworks."
    },
    {
        url: "./assets/小白/xiaobai3.jpg",
        description: "Christmas, the little white Santa Claus is cute, right?"
    },
    {
        url: "./assets/小白/xiaobai6.jpg",
        description: "The puppy likes to sleep."
    },
    {
        url: "./assets/小白/xiaobai7.jpg",
        description: "She wanted to go to bed, but I wouldn't let her, so she looked at me pitifully."
    },
    {
        url: "./assets/小白/xiaobai1.jpg",
        description: "At that time, it was very popular on the internet to take pictures with potato chip bags, and I also arranged it for Xiaobai, but Xiaobai didn't cooperate, haha."
    },
];
photos.forEach(photo => {
    const img = document.createElement("img");
    img.src = photo.url;
    img.addEventListener("click", () => {
        document.getElementById("single-image").src = img.src;
        document.getElementById("dP").textContent = photo.description;
    })
    document.querySelector(".images-container").append(img);
});
const family = [
    {
        url: "./assets/家人/家人1.jpg",
        description: ""
    },
    {
        url: "./assets/家人/家人2.jpg",
        description: ""
    },
    {
        url: "./assets/家人/家人3.jpg",
        description: ""
    },
    {
        url: "./assets/家人/家人4.jpg",
        description: ""
    },
    {
        url: "./assets/家人/家人5.jpg",
        description: ""
    },
    {
        url: "./assets/家人/家人6.jpg",
        description: ""
    },
    {
        url: "./assets/家人/家人7.jpg",
        description: ""
    },
    {
        url: "./assets/家人/家人8.jpg",
        description: ""
    },
    {
        url: "./assets/家人/家人9.jpg",
        description: ""
    },
    {
        url: "./assets/家人/家人10.jpg",
        description: ""
    },
    {
        url: "./assets/家人/家人11.jpg",
        description: ""
    },
    {
        url: "./assets/家人/家人12.jpg",
        description: ""
    },
];
const videos = [
    "./assets/视频/视频1.mp4",
    "./assets/视频/视频2.mp4",
    "./assets/视频/视频3.mp4",
    "./assets/视频/视频4.mp4",
    "./assets/视频/视频5.mp4",
    "./assets/视频/视频6.mp4",
    "./assets/视频/视频7.mp4",
    "./assets/视频/视频8.mp4",
];
const stickers = [ 
    "./assets/表情/表情1.jpg",
    "./assets/表情/表情2.jpg",
    "./assets/表情/表情3.jpg",
    "./assets/表情/表情4.jpg",
    "./assets/表情/表情5.jpg",
    "./assets/表情/表情6.jpg",
];
const friends = [
    {
    url: "./assets/朋友/朋友1.jpg",
    description: "yyyyyyyyyyy"
    }
];


const images = document.getElementById("images");
const familyImages = document.getElementById("family");
const friendsImages = document.getElementById("friends");
const stickerImages = document.getElementById("stickers");
const xiaobaiVideos = document.getElementById("videos");
images.addEventListener("click", () => {
    document.querySelector(".images-container").textContent = "";
    photos.forEach(photo => {
        const img = document.createElement("img");
        img.src = photo.url;
        img.addEventListener("click", () => {
            document.getElementById("single-image").src = img.src;
            document.getElementById("dP").textContent = photo.description;
        })
        document.querySelector(".images-container").append(img);
    });
})

familyImages.addEventListener("click", () => {
    document.querySelector(".images-container").textContent = "";
    family.forEach(photo => {
        const img = document.createElement("img");
        img.src = photo.url;
        img.addEventListener("click", () => {
            document.getElementById("single-image").src = img.src;
            document.getElementById("dP").textContent = photo.description;
        })
        document.querySelector(".images-container").append(img);
    })
})

friendsImages.addEventListener("click", () => {
    document.querySelector(".images-container").textContent = "";
    friends.forEach(photo => {
        const img = document.createElement("img");
        img.src = photo.url;
        img.addEventListener("click", () => {
            document.getElementById("single-image").src = img.src;
            document.getElementById("dP").textContent = photo.description;
        })
        document.querySelector(".images-container").append(img);
    })
})

stickerImages.addEventListener("click", () => {
    document.querySelector(".images-container").textContent = "";
    stickers.forEach(photo => {
        const img = document.createElement("img");
        img.src = photo;
        document.querySelector(".images-container").append(img);
    })
})

xiaobaiVideos.addEventListener("click", () => {
    document.querySelector(".images-container").textContent = "";
    videos.forEach(video => {
        const vid = document.createElement("video");
        vid.width = 240;
        vid.height = 240;
        vid.controls = true;
        const source = document.createElement("source");
        source.src = video;
        source.type = "video/mp4";
        vid.appendChild(source);
        document.querySelector(".images-container").append(vid);
    })
})

const form = document.querySelector("#commentForm");
form.addEventListener("submit", e => {
    e.preventDefault()
    const newComment = [{
        name: form.name.value,
        comment: form.comment.value
    }]
    handleComments(newComment)
    form.reset();
})

const comments = [
    {
        name: "AHMED",
        comment: "I created this site for my beloved XiaoBai. The cutest poppy in the world!"
    }
]
comments.forEach(comment => {
    const p1 = document.createElement("p");
    p1.id = "first-p";
    p1.textContent = comment.name;
    document.querySelector(".comments-container").append(p1)

    const p2 = document.createElement("p");
    p2.id = "second-p";
    p2.textContent = comment.comment;
    document.querySelector(".comments-container").append(p2)
   })


function handleComments(comments){
    comments.forEach(comment => {
     const p1 = document.createElement("p");
     p1.id = "first-p";
     p1.textContent = comment.name;
     document.querySelector(".comments-container").append(p1)

     const p2 = document.createElement("p");
     p2.id = "second-p";
     p2.textContent = comment.comment;
     document.querySelector(".comments-container").append(p2)
    })
}