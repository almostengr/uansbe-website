function home_randImage(){
          	var myimages = new Array()
          	//RANDOM IMAGES
          	myimages[0] = "index2009_p01.jpg"
          	myimages[1] = "index2009_p02.jpg"
          	myimages[2]=  "index2009_p03.jpg"
          	myimages[3] = "index2009_p04.jpg"
          	myimages[4] = "index2009_p05.jpg"
          	myimages[5] = "index2009_p06.jpg"
          	myimages[6] = "index2009_p09.jpg"
          	myimages[7] = "index2009_p08.jpg"
          	myimages[8] = "index2009_p09.jpg"
          	myimages[9] = "index2009_p10.jpg"
          	
          	var ry=Math.floor(Math.random()*myimages.length)
          	
          	document.write("<p style='text-align: center;'>");
          	document.write("<img src='images/" + myimages[ry] + "' height='300' width='400' border='0' alt='' />");
          	document.write("</p>");
}

home_randImage();