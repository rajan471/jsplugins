(function(){
    var clipArtImage, clipart, newImageOptions, clipartOptions, imgInstance, canvas, canvasBack, tee, textMenu, imageMenuForm,
    selectedObject, clipArtUrl, imageCrop ;
    var newBackImageOptions,backImgInstance, currentCanvas, currentCanvasScale, currentTee, prodID;
    
    var printPosition = 'both';

    tee = document.getElementById("frontImage");
    teeBack = document.getElementById("backImage");
    clipart = document.createElement("img");
    textMenu = document.getElementById("textMenu");
    imageMenu = document.getElementById("imageMenu");
    imageMenuForm = document.getElementById("imageMenuForm");
    textMenuForm = document.getElementById("textMenuForm");


    /* Show available graphics from server */
    var ChooseGraphicToCanvas = document.getElementById("ChooseGraphicToCanvas");
    ChooseGraphicToCanvas.addEventListener("click", loadAvailableArts);


    /* Required Data */
    

    var availableColors = StoreData[0].data[0].products[0].availableColors;





    /* Canvas events*/
    window.addEventListener("load", function() {
        loadColorSwatches();

        // Creating canvas
        canvas = new fabric.Canvas('creative');
        canvasBack = new fabric.Canvas('creativeBack');


        // Preloading t-shirt
        loadFirstTShirt();
        loadFirstTShirtBack();
        changeTShirtThumbs(availableColors[0].frontUrl, availableColors[0].backUrl)

        currentCanvas = canvas;
        currentTee = tee;
        canvas.setHeight(290);
        canvas.setWidth(180);

        canvasBack.setHeight(290);
        canvasBack.setWidth(180);

        canvas.renderAll();
        canvasBack.renderAll();
        currentCanvasScale = currentCanvas.width;


        //Saving canvas content to image
        var saveCanvas = document.getElementById("saveCanvas");
        saveCanvas.addEventListener("click", function() {

            canvas.deactivateAll().renderAll();
            canvasBack.deactivateAll().renderAll();

        
            tee.width = 500;
            teeBack.width = 500;


            scaleFactor = 180/canvas.width;
            scaleUpCanvas(canvas, scaleFactor);

            scaleFactor = 180/canvasBack.width;
            scaleUpCanvas(canvasBack, scaleFactor);

            var canvasURL = canvas.toDataURL();
            var canvasBackURL = canvasBack.toDataURL();
            
            var img = document.createElement("img");
            var frontTimg = document.createElement("img");
            var imgBack = document.createElement("img");
            var backTimg = document.createElement("img");
            
            img.src = canvasURL;
            imgBack.src = canvasBackURL;
            
            document.getElementById("output").innerHTML = "";

            var frontImgWrapper = document.createElement("div");
            frontTimg.src = tee.src;

            frontImgWrapper.appendChild(frontTimg);
            frontImgWrapper.appendChild(img);

            if(printPosition == 'front' || printPosition == 'both'){
                document.getElementById("output").appendChild(frontImgWrapper);
            }
            


            var backImgWrapper = document.createElement("div");

            backTimg.src = teeBack.src;
            backImgWrapper.appendChild(backTimg);

            backImgWrapper.appendChild(imgBack);

            if(printPosition == 'back' || printPosition == 'both'){
                document.getElementById("output").appendChild(backImgWrapper);
            }
            imageMenu.style.display='none';
            textMenu.style.display='none';


            generatePrintableImage();
        });


        /* New graphics upload functionality */
        var uploadGraphicToCanvas = document.getElementById("uploadGraphicToCanvas");
        uploadGraphicToCanvas.addEventListener("click", function() {
            var fileImage = document.createElement("input");
            fileImage.type = "file";
            fileImage.accept = "image/x-png, image/jpeg";
            fileImage.click();
            fileImage.addEventListener("change", function(e) {

                files = e.target.files;

                // FileReader support
                if (FileReader && files && files.length) {
                    var fr = new FileReader();
                    fr.onload = function() {
                        var graphic = fr.result;
                        clipArtUrl = fr.result;
                        currentCanvas.remove(clipArtImage);

                        clipartOptions = {
                            url: graphic,
                            width: 150,
                            height: 150,
                            left: currentCanvas.width*0.32 + 75,
                            top: currentCanvas.width*0.26 + 75
                        };


                        fabric.Image.fromURL(graphic, function(img) {
                           var clipArtImage = img.set(clipartOptions);
                            clipArtImage.originY = 'center';
                            clipArtImage.originX = 'center';
                            currentCanvas.add(clipArtImage).renderAll;

                            var a = currentCanvas.setActiveObject(clipArtImage);
                        });
                    }

                    fr.readAsDataURL(files[0]);
                }

            });


        });
        document.addEventListener("keyup", function(event) {
            if (event.explicitOriginalTarget != textMenuForm.changeText) {
                if (event.keyCode == 46) {
                    currentCanvas.remove(selectedObject).renderAll();
                    textMenu.style.display = "none";
                    imageMenu.style.display = "none";
                }
            }
        });

        var addText = document.getElementById("addText");
        addText.addEventListener("click", function() {
            var textOptions = {
                fontSize: 20,
                fontFamily: 'comic sans ms',
            };
            var text = document.getElementById("textToAdd").value;
            addTextToCanvas(text, textOptions);
        });

        canvas.observe("object:moving", checkmove);
        canvas.observe("object:scaling", checkscale);

        canvas.on("object:selected", showRelatedMenu);
        canvas.observe("selection:cleared", hideAllMenu);


        canvas.on("object:selected", function(e) {
            // options.target.bringToFront();
        });


        canvasBack.on("object:selected", showRelatedMenu);
        canvasBack.observe("selection:cleared", hideAllMenu);


        canvasBack.on("object:selected", function(options) {
            options.target.bringToFront();
        });

        /* *****Text Menu options * */
        textMenuForm.fontSize.addEventListener("change", changeFontSize);
        textMenuForm.fontFamily.addEventListener("change", changeFontFamily);
        textMenuForm.fontColor.addEventListener("change", changeFontColor);
        textMenuForm.changeText.addEventListener("keyup", changeText);
        textMenuForm.bold.addEventListener("click", makeBold);
        textMenuForm.italic.addEventListener("click", makeItalic);
        textMenuForm.underline.addEventListener("click", makeUnderline);
        textMenuForm.alignCenter.addEventListener("click", makeAlignCenter);
        textMenuForm.alignJustify.addEventListener("click", makeAlignJustify);
        textMenuForm.alignLeft.addEventListener("click", makeAlignLeft);
        textMenuForm.alignRight.addEventListener("click", makeAlignRight);
        textMenuForm.delete.addEventListener("click", removeObject);
        textMenuForm.rotate.addEventListener("click", rotateObject);
        textMenuForm.duplicate.addEventListener("click", duplicateObject);
        textMenuForm.flipX.addEventListener("click", flipXObject);
        textMenuForm.flipY.addEventListener("click", flipYObject);
        textMenuForm.sendBackward.addEventListener("click", sendBackward);
        textMenuForm.bringForward.addEventListener("click", bringForward);
        textMenuForm.opacity.addEventListener("change", changeOpacity);
        textMenuForm.opacity.addEventListener("input", changeOpacity);

        /* ********Image Menu options * ***/
        imageMenuForm.crop.addEventListener("click", cropImage);
        imageMenuForm.delete.addEventListener("click", removeObject);
        imageMenuForm.rotate.addEventListener("click", rotateObject);
        imageMenuForm.duplicate.addEventListener("click", duplicateObject);
        imageMenuForm.clipTo.addEventListener("click", clipToMask);
        imageMenuForm.flipX.addEventListener("click", flipXObject);
        imageMenuForm.flipY.addEventListener("click", flipYObject);
        imageMenuForm.sendBackward.addEventListener("click", sendBackward);
        imageMenuForm.bringForward.addEventListener("click", bringForward);
        imageMenuForm.opacity.addEventListener("input", changeOpacity);
        imageMenuForm.opacity.addEventListener("change", changeOpacity);


        document.getElementById("canvasZoomIn").addEventListener("click", function(){
            currentCanvasScale = currentCanvasScale + 50;
            var scaleFactor = currentCanvasScale/currentCanvas.width;
           scaleUpCanvas(currentCanvas, scaleFactor);  
        })
        document.getElementById("canvasZoomOut").addEventListener("click", function(){
            currentCanvasScale = currentCanvasScale - 50;
            var scaleFactor = currentCanvasScale/currentCanvas.width;
            scaleUpCanvas(currentCanvas, scaleFactor);  
        });

    });



    /* *************Functions ******************** */

    function addimage(newImageOptions) {
        var defaults = {
            scale: 1,
            left: currentCanvas.width / 2,
            top: currentCanvas.width / 2,
            angle: 0,
            opacity: 1,
            width: 150,
            height: 150
        };

        var options = {};
        for(key in defaults){
            options[key] = defaults[key];
        }
        for(key in newImageOptions){
            options[key] = newImageOptions[key];
        }

        var img = document.createElement("img");
        img.src = options.url;
        img.height = options.height;
        img.width = options.width;

        var imgInstance = new fabric.Image(img, {
            left: options.left,
            top: options.top,
            angle: options.angle,
            opacity: options.opacity
        });
        imgInstance.hasRotatingPoint = false;
        return imgInstance;
    }

    function addTextToCanvas(text, textOptions) {
        if (text == "") {
            text = "Enter Text";
        }
        var defaults = {
            fontSize: 20,
            fontFamily: 'Roboto',
            fontWeight: 'normal',
            textDecoration: 'none   ',
            shadow: 'none',
            fontStyle: "normal",
            stroke: "#000",
            strokeWidth: 0,
            textAlign: 'center',
            lineHeight: 1,
            textBackgroundColor: 'transparent',
            fill: '#000000'
        };
        var options = {};
        for(key in defaults){
            options[key] = defaults[key];
        }
        for(key in textOptions){
            options[key] = textOptions[key];
        }

        var textToAdd = new fabric.Textbox(text,options);
        

        // textToAdd.hasControls = false;
        textToAdd.left = currentCanvas.width * 0.32+ textToAdd.width / 2;
        textToAdd.top = currentCanvas.width * 0.26+ textToAdd.height / 2;
        textToAdd.originX = 'center';
        textToAdd.originY = 'center';
        textToAdd.editable = false;
        textToAdd.width = 180;
        textToAdd.hasRotatingPoint = false;

        


        currentCanvas.add(textToAdd);
        textToAdd.bringToFront();
        currentCanvas.renderAll();
    }

    function cliptoPath(e) {
        var path = e.target.src;
        fabric.loadSVGFromURL(path, function(objects){
            var selectedObject_ = selectedObject;
            selectedObject_.centerH().setCoords();
            var rem = {
                width : selectedObject_.width,
                height : selectedObject_.height,
                scaleX : selectedObject_.scaleX,
                scaleY : selectedObject_.scaleY
            }
            selectedObject_.width=150;
            selectedObject_.height=150;
            selectedObject_.scaleX = 1;
            selectedObject_.scaleY = 1;
            var group = new fabric.PathGroup(objects, { 
                originX: 'center',
                originY: 'center',
                width: selectedObject_.width,
                height: selectedObject_.height
            }); 
            group.set({'fill': 'transparent'});

            
            selectedObject.set({
                clipTo: function(ctx) {
                    group.scaleToWidth(selectedObject_.width)
                    group.scaleToHeight(selectedObject_.height)
                    group.render(ctx);
                }
            });
            selectedObject_.width = rem.width;
            selectedObject_.height = rem.height;
            selectedObject_.scaleX = rem.scaleX;
            selectedObject_.scaleY = rem.scaleY;
            canvas.renderAll();
        });
        document.getElementById('clipMasks').style.display="none";
    }



    function loadFirstTShirt() {
        changeTShirt(availableColors[0].frontUrl);
    }
    function loadFirstTShirtBack() {
        changeTShirtBack(availableColors[0].backUrl);
    }

    function changeTShirt(url) {
        tee.src = url;
    }
    function changeTShirtBack(url) {
        teeBack.src = url;
    }

    function changePreLoadedClipArt(url) {
        document.getElementById("library").style.display = 'none';
        clipArtUrl = url;
        currentCanvas.remove(clipArtImage);
        clipartOptions = {
            url: url,
            width: 150,
            height: 150,
            left: currentCanvas.width / 2,
            top: currentCanvas.width / 2
        };

        /* Creating and loading t-shirt graphics to canvas */
        var clipArtImage = addimage(clipartOptions);
        clipArtImage.originX = 'center';
        clipArtImage.originY = 'center';
        currentCanvas.add(clipArtImage);
        currentCanvas.renderAll();
    }


    function placeCroppedImage(url) {
        currentCanvas.remove(selectedObject);
        clipartOptions = {
            url: url,
            width: 150,
            height: 150,
            left: currentCanvas.width / 2,
            top: currentCanvas.width / 2
        };

        /* Creating and loading t-shirt graphics to canvas */
        var clipArtImage = addimage(clipartOptions);

        clipArtImage.originX = 'center';
        clipArtImage.originY = 'center';
        currentCanvas.add(clipArtImage);
        currentCanvas.renderAll();
    }

    function checkmove(e) {
        showRelatedMenu(e)
    }

    function checkscale(e) {
        showRelatedMenu(e);
    }

    function showRelatedMenu(e) {
        selectedObject = currentCanvas.getActiveObject();
        
        var obj = selectedObject;
        var top = obj.top + currentCanvas._offset.top;
        var left = obj.left + currentCanvas._offset.left;
        var type = obj.type;
        if (type == "textbox") {
            imageMenu.style.display = "none";
            textMenu.style.display = "block";

            var textMenuStyleTop = top - selectedObject.height/2;
            var textMenuStyleLeft = left + selectedObject.width/2 + 20 ;
            

            textMenu.style.top =textMenuStyleTop +'px';
            textMenu.style.left = textMenuStyleLeft + 'px';
            textMenuForm.fontSize.value = selectedObject.fontSize;
            textMenuForm.fontFamily.value = selectedObject.fontFamily;
            textMenuForm.changeText.value = selectedObject.text;
            textMenuForm.fontColor.value = selectedObject.fill;
            textMenuForm.opacity.value = selectedObject.opacity;
        }
        if (type == "image") {
            textMenu.style.display = "none";
            imageMenu.style.display = "block";
            imageMenuForm.opacity.value = selectedObject.opacity;

            var imageMenuStyleTop = top - selectedObject.height/2;
            var imageMenuStyleLeft = left + selectedObject.width/2 + 20 ;


            imageMenu.style.top = imageMenuStyleTop +'px';
            imageMenu.style.left = imageMenuStyleLeft +'px';
        }
    }

    function hideAllMenu(e) {
        textMenu.style.display = "none";
        imageMenu.style.display = "none";
    }


    /* *****End of canvas events **** */



    function loadColorSwatches() {
        var colors = document.getElementById("colors");
        colors.innerHTML = "";

        for(var key in availableColors){
            var colorSwatch = document.createElement("span");
            colorSwatch.style.backgroundColor = availableColors[key].color;
            colorSwatch.className = "swatch";
            colorSwatch.setAttribute("data-url", availableColors[key].frontUrl)
            colorSwatch.setAttribute("data-backurl", availableColors[key].backUrl)
            colors.appendChild(colorSwatch);
        }
        bindColorSwatchClick();
        
    }

    function loadAvailableArts() {
        var library = document.getElementById("library");
        library.innerHTML = "";
        clipartURLS.forEach(function(value) {
            var artImage = document.createElement("img");
            var div = document.createElement("div");
            div.className = "artgraphic";
            div.appendChild(artImage);
            artImage.src = value;
            artImage.className = "artgraphicImage";
            library.appendChild(div);
        });

        bindPreLoadedGraphicClick();
        var closeBtn = document.createElement("span");
        closeBtn.className="close";
        library.appendChild(closeBtn);
        closeBtn.addEventListener("click", function(){
            library.style.display='none';
        });
        library.style.display = "block";
    }

    function bindColorSwatchClick() {
        var swatches = document.getElementsByClassName("swatch");

        for (var i = 0; i < swatches.length; i++) {
            swatches[i].addEventListener("click", function() {
                var frontUrl = this.getAttribute("data-url");
                var backUrl = this.getAttribute("data-backurl");
                changeTShirt(frontUrl);
                changeTShirtBack(backUrl);
                changeTShirtThumbs(frontUrl,backUrl);
            });
        }
    }

    function bindPreLoadedGraphicClick() {
        var artgraphics = document.getElementsByClassName("artgraphicImage");

        for (var i = 0; i < artgraphics.length; i++) {
            artgraphics[i].addEventListener("click", function() {
                var url = this.getAttribute("src");
                changePreLoadedClipArt(url);
            })
        }
    }

    function changeTShirtThumbs(fUrl, bUrl){
        var frontThumb = document.createElement("img");
        frontThumb.src=fUrl;
        var backThumb = document.createElement("img");
        backThumb.src=bUrl;
        tShirtsSides.children[0].innerHTML="";
        tShirtsSides.children[1].innerHTML="";
        tShirtsSides.children[0].appendChild(frontThumb);
        tShirtsSides.children[1].appendChild(backThumb);
        tShirtsSides.children[0].addEventListener("click", function(){
            document.getElementById('croppingToolBack').style.display="none";
            document.getElementById('croppingToolFront').style.display="block";
            currentCanvas = canvas;
            currentTee = tee;
            var scaleFactor = 180/currentCanvas.width;
            scaleUpCanvas(currentCanvas, scaleFactor);
            currentCanvasScale = 180;
            currentCanvas.renderAll();
        });
        tShirtsSides.children[1].addEventListener("click",  function(){
            document.getElementById('croppingToolBack').style.display="block";
            document.getElementById('croppingToolFront').style.display="none";
            currentCanvas = canvasBack;
            currentTee = teeBack;
            var scaleFactor = 180/currentCanvas.width;
            scaleUpCanvas(currentCanvas, scaleFactor)
            currentCanvasScale = 180;
            currentCanvas.renderAll();
        });
    }

    /* ***** Text menu Functions ****** */
    function changeFontSize(e) {
        e.preventDefault();
        selectedObject.fontSize = textMenuForm.fontSize.value;
        currentCanvas.renderAll();

    }

    function changeFontFamily(e) {
        e.preventDefault();
        selectedObject.fontFamily = textMenuForm.fontFamily.value;
        currentCanvas.renderAll();
    }

    function changeFontColor(e) {
        e.preventDefault();
        selectedObject.fill = textMenuForm.fontColor.value;
        currentCanvas.renderAll();
    }

    function changeText(e) {
        e.preventDefault();

        var value = "Enter Text";
        if (textMenuForm.changeText.value.trim() != "")
            value = textMenuForm.changeText.value;
        selectedObject.text = value;
        var top = selectedObject.top;
        var left = selectedObject.left;
        var textMenu = document.getElementById('textMenu');

        var textMenuStyleTop = top - selectedObject.height/2;
        var textMenuStyleLeft = left + selectedObject.width/2 + 20 ;

        textMenu.style.top = textMenuStyleTop + 'px';
        textMenu.style.left = textMenuStyleLeft + 'px';
        currentCanvas.renderAll();
    }

    function makeBold(e) {
        e.preventDefault();
        if (textMenuForm.bold.className == "active") {
            selectedObject.fontWeight = "normal";
            textMenuForm.bold.className = "";
        } else {
            selectedObject.fontWeight = "bold";
            textMenuForm.bold.className = "active";
        }
        currentCanvas.renderAll();
    }

    function makeItalic(e) {
        e.preventDefault()
        if (textMenuForm.italic.className == "active") {
            selectedObject.fontStyle = "normal";
            textMenuForm.italic.className = "";
        } else {
            selectedObject.fontStyle = "italic";
            textMenuForm.italic.className = "active";
        }
        currentCanvas.renderAll();
    }

    function makeUnderline(e) {
        e.preventDefault()
        if (textMenuForm.underline.className == "active") {
            selectedObject.textDecoration = "normal";
            textMenuForm.underline.className = "";
        } else {
            selectedObject.textDecoration = "underline";
            textMenuForm.underline.className = "active";
        }
        currentCanvas.renderAll();
    }


    function makeAlignCenter(e) {
        e.preventDefault();
        textMenuForm.alignCenter.className = "active";
        textMenuForm.alignJustify.className = "";
        textMenuForm.alignLeft.className = "";
        textMenuForm.alignRight.className = "";
        selectedObject.textAlign = "center";
        currentCanvas.renderAll();
    }

    function makeAlignJustify(e) {
        e.preventDefault();
        textMenuForm.alignCenter.className = "";
        textMenuForm.alignJustify.className = "active";
        textMenuForm.alignLeft.className = "";
        textMenuForm.alignRight.className = "";
        selectedObject.textAlign = "justify";
        currentCanvas.renderAll();
    }

    function makeAlignLeft(e) {
        e.preventDefault();
        textMenuForm.alignCenter.className = "";
        textMenuForm.alignJustify.className = "";
        textMenuForm.alignLeft.className = "active";
        textMenuForm.alignRight.className = "";
        selectedObject.textAlign = "left";
        currentCanvas.renderAll();
    }

    function makeAlignRight(e) {
        e.preventDefault();
        textMenuForm.alignCenter.className = "";
        textMenuForm.alignJustify.className = "";
        textMenuForm.alignLeft.className = "";
        textMenuForm.alignRight.className = "active";
        selectedObject.textAlign = "right";
        currentCanvas.renderAll();
    }

    function cropImage(e) {
        e.preventDefault();
        var croppable = false;
        var image = $("<img src='" + clipArtUrl + "' />");
        $("#imageCrop #image").html(image);
        $("#imageCrop").fadeIn();
        // var $image = image;
        var cropper = image.cropper({
            aspectRatio: 1,
            zoomable: false,
            crop: function(e) {
                croppable = true;
            }
        });
        $("#cropIt").unbind("click");
        $("#cropIt").click(function(){
            
            if(croppable){
                var croppedCanvas = image.cropper('getCroppedCanvas');
                croppedCanvas = croppedCanvas.toDataURL('image/png');
                placeCroppedImage(croppedCanvas)
                $("#imageCrop").fadeOut();
            }
        
        });
        

    }

    function removeObject(e) {
        e.preventDefault();
        currentCanvas.remove(selectedObject).renderAll();
    }

    function sendBackward(e){
         e.preventDefault();
         currentCanvas.sendBackwards(selectedObject);
         canvas.sendToBack(imgInstance);
         canvasBack.sendToBack(backImgInstance);
    }

    function bringForward(e){
        e.preventDefault();
        currentCanvas.bringForward(selectedObject);
         canvas.sendToBack(imgInstance);
         canvasBack.sendToBack(backImgInstance);
    }
    function duplicateObject(e){
        e.preventDefault();

        var newObject = fabric.util.object.clone(currentCanvas.getActiveObject());
        canvas.deactivateAll();
        canvasBack.deactivateAll();
        currentCanvas.setActiveObject(newObject);
        currentCanvas.add(newObject);
        currentCanvas.renderAll();
    }
    function rotateObject(e) {
        e.preventDefault();
        selectedObject.angle += 90;
        currentCanvas.renderAll();
    }

    function flipXObject(e) {
        e.preventDefault();
        if(selectedObject.flipX){
            selectedObject.flipX = false
        }else{
            selectedObject.flipX = true
        }
        currentCanvas.renderAll();
    }
     
    function flipYObject(e) {
        e.preventDefault();
        if(selectedObject.flipY){
            selectedObject.flipY = false
        }else{
            selectedObject.flipY = true
        }
        
        currentCanvas.renderAll();
    }

    function clipToMask(e){
        e.preventDefault();
        var clipMasks = document.getElementById('clipMasks');
        clipMasks.style.display = 'block';
        clipMasks.innerHTML = '';
        maskClips.forEach(function(url){
            var clipMask = document.createElement("div");
            clipMask.className = "mask";
            clipMaskImage = document.createElement("img");
            clipMaskImage.src = url;
            clipMask.appendChild(clipMaskImage);
            clipMasks.appendChild(clipMask);
            clipMask.addEventListener('click', cliptoPath )
        });
    }
    function changeOpacity(e){
        e.preventDefault();
        selectedObject.opacity = this.value; 
        currentCanvas.renderAll();
    }


    function scaleUpCanvas(canvasElem , scaleFactor){

        canvasElem.setWidth(canvasElem.width*scaleFactor);
        canvasElem.setHeight(canvasElem.height*scaleFactor);
        currentTee.width = currentTee.width*scaleFactor;
        var objs = canvasElem.getObjects();

        objs.forEach(function(obj, key){
            obj.left = obj.left*scaleFactor;
            obj.top = obj.top*scaleFactor;
            if(obj.type=="textbox"){
                obj.scaleX *= scaleFactor;
                obj.scaleY *= scaleFactor;
                var w = obj.width * obj.scaleX;
            }
            else{
                obj.width = obj.width*scaleFactor;
                obj.height = obj.height*scaleFactor;
            }
        });
        canvasElem.renderAll();
    }
    



    function generatePrintableImage(){ 
        var scaleFactor = 180/canvas.width;
        scaleUpCanvas(canvas , scaleFactor);
        scaleUpCanvas(canvasBack , scaleFactor);

        scaleFactor = 11;
        scaleUpCanvas(canvas , scaleFactor);

        var creative = document.getElementById('creative');
        var creativeBack = document.getElementById('creativeBack');
        
        if(printPosition == 'front' || printPosition == 'both'){
            creative.toBlob(
                function (blob) {
                    var formData = new FormData();
                    formData.append('file', blob, 'front_image'); 
                    window.open(window.URL.createObjectURL(blob));
                },
                'image/png'
            );
        }
        scaleFactor = 1/scaleFactor
        scaleUpCanvas(canvas , scaleFactor);

        scaleFactor = 11
        scaleUpCanvas(canvasBack , scaleFactor);

        if(printPosition == 'back' || printPosition == 'both'){
            creativeBack.toBlob(
                function (blob) {
                    var formData = new FormData();
                    formData.append('file', blob, 'front_image'); 
                    window.open(window.URL.createObjectURL(blob));
                },
                'image/png'
            );
        }
        scaleFactor = 1/scaleFactor
        scaleUpCanvas(canvasBack , scaleFactor);

    }



    /* **** Change product ************** */

    
    var changeProductBtn = document.getElementById('changeProductBtn');
    changeProductBtn.addEventListener("click", function(){
        document.getElementById('changeProduct').style.display = 'block';
        document.getElementById('printPositionOptions').style.display = 'none';
    });


    var changeprodcutForm = document.getElementById('changeprodcutForm');

    var changeCategory = changeprodcutForm.category;
    var changeSubCategory = changeprodcutForm.subCategory;
    var changeGender = changeprodcutForm.gender;
    var formSubmit = changeprodcutForm.submit;

    changeCategory.addEventListener("change", changeFormCategory);

    function changeFormCategory(){
        var category = changeCategory.value;
        for( var key in StoreData){
            if(key==category){
                var data = StoreData[key].data;
                var count = 0;
                changeSubCategory.innerHTML ="";
                    var option = document.createElement("option");
                    option.value = -1;
                    option.text = '-----';
                    changeSubCategory.appendChild(option);
                for(var i in data){
                    var option = document.createElement("option");
                    option.value = count;
                    option.text = data[i].name;
                    changeSubCategory.appendChild(option);
                    count++;
                }
            }
        }
    }
    changeFormCategory();
    function changeFormSubCategory(e){
        e.preventDefault();
        var categoryID = changeCategory.value;
        var subCategoryID =  changeSubCategory.value;
        if(categoryID>=0 && subCategoryID>=0){
            var products = StoreData[categoryID].data[subCategoryID].products;
            var productsDiv  = document.getElementById("products");
            productsDiv.innerHTML="";
            for (var i in products){
                if(products[i].gender == changeGender.value) {
                    var wrapper = document.createElement("div");
                    var prodDetails = document.createElement("div");
                    wrapper.className = "product-image";

                    var prodImage = document.createElement("img");
                    prodImage.src = products[i].productImage;
                    prodImage.setAttribute("data-prodid", i);

                    wrapper.appendChild(prodImage);
                    wrapper.appendChild(prodDetails);

                    prodDetails.innerHTML = '<p>Type: '+products[i].type+'</p>';

                    var availableColors = products[i].availableColors;

                    var colors = document.createElement("p");
                    colors.innerHTML="";
                    for(var index in availableColors){
                        var swatch = '<span class="swatch2" style="background-color:'+ availableColors[index].color+' " data-url="'+ availableColors[index].frontUrl+'" data-backurl="'+ availableColors[index].backUrl+'"></span>';
                        colors.innerHTML +=swatch;
                    }

                    prodDetails.appendChild(colors);
                    productsDiv.appendChild(wrapper);
                    prodImage.addEventListener("click", showPositionoptions);
                }
            }
        }
    }



    var setprintPositionForm = document.getElementById('setprintPositionForm');
    var setPositionFront = setprintPositionForm.front;
    var setPositionBack = setprintPositionForm.back;
    var setPositionBoth = setprintPositionForm.both;

    setPositionFront.addEventListener("click", function(e){
        e.preventDefault();
        printPosition = 'front';
        tShirtsSides.children[0].style.display = 'inline-block';
        tShirtsSides.children[1].style.display = 'none';
        changeProductData();
        tShirtsSides.children[0].click();
    });
    setPositionBack.addEventListener("click", function(e){
        e.preventDefault();
        printPosition = 'back';
        tShirtsSides.children[1].style.display = 'inline-block';
        tShirtsSides.children[0].style.display = 'none';
        changeProductData();
        tShirtsSides.children[1].click();
    });
    setPositionBoth.addEventListener("click", function(e){
        e.preventDefault();
        printPosition = 'both';
        tShirtsSides.children[0].style.display = 'inline-block';
        tShirtsSides.children[1].style.display = 'inline-block';
        changeProductData();
        tShirtsSides.children[0].click();
    });

    function showPositionoptions(e){
        prodID  = e.target.getAttribute("data-prodid");
        document.getElementById('printPositionOptions').style.display = 'block';
    }

    function changeProductData(e){
        var categoryID = changeCategory.value;
        var subCategoryID =  changeSubCategory.value;
        var product = StoreData[categoryID].data[subCategoryID].products[prodID];
        availableColors = product.availableColors;

        
        document.getElementById('croppingToolBack').style.display="none";
        document.getElementById('croppingToolFront').style.display="block";

        loadFirstTShirt();
        loadFirstTShirtBack();
        changeTShirtThumbs(availableColors[0].frontUrl, availableColors[0].backUrl);
        loadColorSwatches();
        currentCanvas = canvas;
        canvas.renderAll();
        canvasBack.renderAll();     

        document.getElementById('changeProduct').style.display='none';
    }

    formSubmit.addEventListener("click",   function(e){
        e.preventDefault();
        changeFormSubCategory(e);
    })

    document.getElementById("frontImage").addEventListener("click", function(){
            document.getElementById("textMenu").style.display='none';
            document.getElementById("imageMenu").style.display='none';

            canvas.deactivateAll().renderAll();
            canvasBack.deactivateAll().renderAll();

    })
    document.getElementById("backImage").addEventListener("click", function(){
            document.getElementById("textMenu").style.display='none';
            document.getElementById("imageMenu").style.display='none';

            canvas.deactivateAll().renderAll();
            canvasBack.deactivateAll().renderAll();

    })


})();