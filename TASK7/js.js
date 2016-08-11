document.addEventListener("DOMContentLoaded" , function(){
        var changeimg = document.getElementById('pix-holder-top');
        changeimg.addEventListener("mouseover" , function(e){
            var change = e.target;
            document.getElementById('header-gallery').style.background = "url(\""+change.src+"\")";
            document.getElementById('header-gallery').style.backgroundSize = "100% 100%";

        })

    },false);

var pix_source = [
     "pix/circle_faces/face2.jpg",
     "pix/circle_faces/face3.jpg",
     "pix/circle_faces/face4.jpg",
     "pix/circle_faces/face5.jpg",
     "pix/circle_faces/face6.jpg",
     "pix/circle_faces/face7.jpg"
             ];
 var names = [
     "Irina Morrow",
     "Jane Dow",
     "Jina Davis",
     "John Davis",
     "Bob Donovn",
     "Diana Jones"
 ];
 document.addEventListener("DOMContentLoaded" , function(){          
     var left_arrow = document.getElementById('left-arrow');
     var right_arrow = document.getElementById('right-arrow');
     
     var pixindex = 0;
             
         right_arrow.addEventListener('click', function(e){
             e.preventDefault();
             document.getElementById('circle-image-holder').style.background =  "url(\""+pix_source[pixindex]+"\")";
             document.getElementById('circle-image-holder').style.width = "10em";
             document.getElementById('circle-image-holder').style.height = "10em";
             document.getElementById('circle-image-holder').style.backgroundSize = 'cover';
             document.querySelector('#fan-name').innerHTML = names[pixindex];

                 ++pixindex;
                 if (pixindex == pix_source.length-1) {
                	 pixindex = 0;
             }
          } , false) ;

     left_arrow.addEventListener('click', function(e){
         e.preventDefault();
         document.getElementById('circle-image-holder').style.background =  "url(\""+pix_source[pixindex]+"\")";
         document.getElementById('circle-image-holder').style.width = "15em";
         document.getElementById('circle-image-holder').style.height = "15em";
         document.getElementById('circle-image-holder').style.backgroundSize = 'cover';
         document.querySelector('#fan-name').innerHTML = names[pixindex];

         pixindex--;
         if (pixindex == 0) {
        	 pixindex = 5;
         }

     } , false) ;	
 } , false)