var canvas=new fabric.Canvas("myCanvas");
 var player_x=0;
var player_y=0;
var block_width=50;
var block_height=50;
var player_object="";
var block_object="";
 function player_update()
 {
     fabric.Image.fromURL("player.png",function (Img){
         player_object=Img;
         player_object.scaleToWidth(150);
         player_object.scaleToHeight(150);
         player_object.set({
             top:player_y,
             left:player_x

         })
         canvas.add(player_object);

     });

 }
 function block_update(get_image)
 {
     fabric.Image.fromURL(get_image,function (Img){
         block_object=Img;
         block_object.scaleToWidth(block_width);
         block_object.scaleToHeight(block_height);
         block_object.set({
             top:player_y,
             left:player_x

         })
         canvas.add(block_object);

     });

 }

