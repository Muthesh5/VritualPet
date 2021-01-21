var dog;
var score = 10
gamestate = 1

function preload()
{
  dogImg=loadImage("images/dogImg.png")
  //dogImg.scale=0.3
  dogImg2=loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  dog=createSprite(250,250);
  dog2=createSprite(250,250);
  dog2.addImage(dogImg2)
  dog2.scale=0.2
  dog2.shapeColor="red"
  dog2.visible=false
  dog.addImage(dogImg)
  dog.scale=0.2


}


function draw() {  
  background("lightgreen")

  textSize(15)
  fill(255)
  text("NOTE: Press Up arrow key to feed",150,30)
  fill("green")
  text("Bottle Remaining :"+score,170,170)

if(gamestate===1){
  if(keyWentDown(UP_ARROW)){
    score=score-1
  }
  if(score===0){
    gamestate=2
  }
}
if(gamestate===2){
  dog.visible=false
  dog2.visible=true
  score=0
}

  drawSprites();
  //add styles here

}

/*<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-database.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
https://firebase.google.com/docs/web/setup#available-libraries -->

<script>
// Your web app's Firebase configuration
var firebaseConfig = {
apiKey: "AIzaSyB632r1a8eeYXb8JellozVk_TV2LOI-9Eo",
authDomain: "visual-pet-ed2cd.firebaseapp.com",
projectId: "visual-pet-ed2cd",
storageBucket: "visual-pet-ed2cd.appspot.com",
messagingSenderId: "730025337986",
appId: "1:730025337986:web:1ff0eefb45b776d47f809b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
</script>*/

