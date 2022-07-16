//===================================================
function handleCurrentCompAll3(indx,Prefix,FlagBigLitle,videoFileItem)
{

    var compNameAll = Prefix + "_All_" + String(indx+1);
    var compNameBi1 = Prefix + "_BI1_" + String(indx+1);
    var compNameAB1 = Prefix + "_AB1_" + String(indx+1);
    var compNameBg  = Prefix + "_BG_"  + String(indx+1);
    var compName    = Prefix + "_"     + String(indx+1);

    //------------------------------------------
    var newCompAll  = app.project.items.addComp(compNameAll, compWidth, compHeight, 1.0, durationSec, 25);

    var videoLayerAll = newCompAll.layers.add(videoFileItem);
    createEffectsProperty3(videoLayerAll);
    //CurvesEffect = videoLayerAll.Effects.addProperty("ADBE CurvesCustom");
    //lumetriEffect = videoLayerAll.Effects.addProperty("ADBE Lumetri");

    var scr_scaleMin = Math.min ((Math.round(newCompAll.height*100/videoFileItem.height,2)),(Math.round(newCompAll.width*100/videoFileItem.width,2)))
    var scr_scaleMax = Math.max ((Math.round(newCompAll.height*100/videoFileItem.height,2)),(Math.round(newCompAll.width*100/videoFileItem.width,2)))

    //videoLayerAll.property("Scale").setValue([scr_scaleMax*3,scr_scaleMax*3]);
    videoLayerAll.property("Scale").setValue([scr_scaleMax*2,scr_scaleMax*2]);


    //videoLayerAll.property("Opacity").setValuesAtTimes(addOpacityBi1Keys,addOpacityBi1Val);
    if  (FlagBigLitle  == 0) {
        videoLayerAll.property("Opacity").setValuesAtTimes(addOpacityBi1Keys_0,addOpacityBi1Val_0);
    } else {
        videoLayerAll.property("Opacity").setValuesAtTimes(addOpacityBi1Keys_1,addOpacityBi1Val_1);
    }

    createRotationProperty(videoLayerAll);


    //----------- BG A -----------
    var videoLayerBg = newCompAll.layers.add(videoFileItem);
    var posHoris =  newCompAll.width/2  
    var posVert  =  newCompAll.height/2 
    videoLayerBg.property("Position").setValue([posHoris,posVert]);
    videoLayerBg.property("Scale").setValue([scr_scaleMax*2,scr_scaleMax*2]);

    blurEffect = videoLayerBg.Effects.addProperty("ADBE Gaussian Blur 2");
    blurEffect.property(1).setValue(bgGaussianBlur);
    createEffectsProperty(videoLayerBg);

    // videoLayerBg.property("Opacity").setValue(bgOpacity); 
    //videoLayerBg.property("Opacity").setValuesAtTimes(addBgOpacityKeys,addBgOpacityVal);
    //videoLayerBg.property("Opacity").setValuesAtTimes(addOpacityKeys_25_100,addOpacityVal_25_100);
    if  (FlagBigLitle  == 0) {
        //videoLayer.property("Opacity").setValuesAtTimes(addOpacityBi1Keys_0,addOpacityBi1Val_0);
        videoLayerBg.property("Opacity").setValuesAtTimes(addOpacityKeys_0_25_100,addOpacityVal_0_25_100);
    } else {
        videoLayerBg.property("Opacity").setValuesAtTimes(addOpacityKeys_1_25_100,addOpacityVal_1_25_100);
    }



    if (rotationEnable  == 1 ){createRotationProperty(videoLayerBg);}


    //------------------------------------------
   var videoLayer = newCompAll.layers.add(videoFileItem);
   createProperty3(newCompAll, videoLayer, videoFileItem, FlagBigLitle);
   //lumetriMainEffect = videoLayer.Effects.addProperty("ADBE Lumetri");

    //------------------------------------------
   handleParentFoldersAll(compNameAll);
   //handleParentFolders(videoFileItem,compNameAll,compName,compNameBg,compNameBi1);

}

//===================================================
function handleNewComposit3()
{

    var FlagBigLitle  = 1;        
    var Prefix       = "Grp_1"; 

    //lg.writeln(' handleNewComposit filePathUrl.length => ' + filePathUrl.length.toString());

    for(var i = 0; i < filePathUrl.length; i++) {

        lg.writeln(' i= '+ String(i+1) +'  filePathUrl=> ' + filePathUrl[i]);

        var videoFile = File(filePathUrl[i]);
        var videoFileItem = app.project.importFile(new ImportOptions(videoFile));

        if(videoFileItem !=null )  {

            fileNameA[i] = videoFileItem;

            if  (FlagBigLitle  == 0) {
                FlagBigLitle  = 1; 
            } else {
                FlagBigLitle  = 0; 
            }             
            //handleNewCompositAll(i,videoFileItem,FlagBigLitle);
            handleCurrentCompAll3(i,"Grp_All",FlagBigLitle,videoFileItem)




            var compNameBi1 = Prefix + "_BI1_" + String(i+1);
            var newCompBi1  = app.project.items.addComp(compNameBi1, compWidth, compHeight, 1.0, durationSec, 25);

            var videoLayerBi1 = newCompBi1.layers.add(videoFileItem);
            //createPropertyBi1(newCompBi1, videoLayerBi1, videoLayerBi1);
            createPropertyBi1(newCompBi1, videoLayerBi1, videoFileItem);


            var compNameBg = Prefix + "_BG_" + String(i+1);
            var newCompBg  = app.project.items.addComp(compNameBg, compWidth, compHeight, 1.0, durationSec, 25);

            var videoLayerBg = newCompBg.layers.add(videoFileItem);
            createPropertyBg(newCompBg, videoLayerBg, videoFileItem);


            var compName = Prefix + "_" + String(i+1);
            var newComp = app.project.items.addComp(compName, compWidth, compHeight, 1.0, durationSec, 25);
            var videoLayer = newComp.layers.add(videoFileItem);


            createProperty(newComp, videoLayer, videoFileItem, FlagBigLitle);

            handleParentFolders(videoFileItem,compName,compNameBg,compNameBi1);
            // if ( i > 5 ){break;}

        } //  if(videoFileItem !=null )  

    } //    for(var i = 0; i < filePathUrl.length; i++) 
}

//=====================================================================================================

function handleComposAB3()
{

    var FlagBigLitle  = 1;        
    var Prefix       = "GrpAB_1"; 

    var lenMin = Math.min (filePathUrlA.length,filePathUrlB.length)
    lg.writeln('lenMin= ' +  String(lenMin)  );

    for(var i = 0; i < lenMin; i++) {

        lg.writeln(' i= '+ String(i+1) +'  filePathUrl=> ' + filePathUrl[i]);

        var videoFile = File(filePathUrlA[i]);
        lg.writeln(String(i) + ' videoFile= '  +  String(videoFile)  );
        // !!var videoFileItem = app.project.importFile(new ImportOptions(videoFile));
        var videoFileItem = fileNameA[i];

        //if(videoFileItem !=null && videoFileItemB !=null )  {
        if(videoFileItem !=null )  {

            var videoFileB = File(filePathUrlB[i]);
            if(videoFileB !=null )  {


                lg.writeln(String(i) + ' videoFileB= ' +  String(videoFileB)  );
                var videoFileItemB = app.project.importFile(new ImportOptions(videoFileB));

                if(videoFileItemB !=null )  {


                    if  (FlagBigLitle  == 0) {
                        FlagBigLitle  = 1; 
                    } else {
                        FlagBigLitle  = 0; 
                    }

                    // lg.writeln(String(i) + ' handleCurrentCompAll videoFile= '   +  String(videoFile)  );
                    // lg.writeln(String(i) + ' handleCurrentCompAll videoFileB= '  +  String(videoFileB)  );

                    // lg.writeln(String(i) + ' handleCurrentCompAll videoFileItem= '   +  String(videoFileItem)  );
                    // lg.writeln(String(i) + ' handleCurrentCompAll videoFileItemB= '  +  String(videoFileItemB)  );

                    // //var compNameBi1 = Prefix + "_BI1_" + String(i+1);
                    // var compNameBi1 = Prefix + "_AB1_" + String(i+1);
                    // var newCompBi1  = app.project.items.addComp(compNameBi1, compWidth, compHeight, 1.0, durationSec, 25);



                    //var videoLayerB = newCompBi1.layers.add(videoFileItemB);
                    //var videoLayerA = newCompBi1.layers.add(videoFileItem);

                    //handleCurCompAllAB(i,Prefix,FlagBigLitle,videoFileItem,videoFileItemB)
                    //handleCurCompAllAB3(i,Prefix,FlagBigLitle,videoFileItem,videoFileItemB)
                    handleCurCompAllAB4(i,Prefix,FlagBigLitle,videoFileItem,videoFileItemB)

                    // if ( i > 3 ){break;}
                } //    if(videoFileItemB !=null )  {
            } //if(videoFileB !=null )  {
        } //  if(videoFileItem !=null )  
    } //    for(var i = 0; i < filePathUrl.length; i++) 
}

//===================================================

function handleCurCompAllAB3(indx,Prefix,FlagBigLitle,videoFileItem,videoFileItemB)
{

    var compNameAll = Prefix + "_All_" + String(indx+1);
    var compNameBi1 = Prefix + "_BI1_" + String(indx+1);
    var compNameAB1 = Prefix + "_AB1_" + String(indx+1);
    var compNameBg  = Prefix + "_BG_"  + String(indx+1);
    var compName    = Prefix + "_"     + String(indx+1);

    var newCompAll  = app.project.items.addComp(compNameAll, compWidth, compHeight, 1.0, durationSec, 25);

    var scr_scaleMin = Math.min ((Math.round(newCompAll.height*100/videoFileItem.height,2)),(Math.round(newCompAll.width*100/videoFileItem.width,2)))
    var scr_scaleMax = Math.max ((Math.round(newCompAll.height*100/videoFileItem.height,2)),(Math.round(newCompAll.width*100/videoFileItem.width,2)))




    //----------- Base B -----------
    var videoLayerAll = newCompAll.layers.add(videoFileItemB);
    //createEffectsProperty(videoLayerAll);
    createEffectsProperty3(videoLayerAll);


    videoLayerAll.property("Scale").setValue([scr_scaleMax*1,scr_scaleMax*1]);

    //videoLayerAll.property("Opacity").setValuesAtTimes(addOpacityBi1Keys,addOpacityBi1Val);
    videoLayerAll.property("Opacity").setValue(100); 

    createRotationProperty(videoLayerAll);



    //----------- Bi1 -----------
    var videoLayerBi1 = newCompAll.layers.add(videoFileItem);
    //createEffectsProperty(videoLayerBi1);
    createEffectsProperty3(videoLayerBi1);

    videoLayerBi1.property("Scale").setValue([scr_scaleMax*2,scr_scaleMax*2]);


    //videoLayerBi1.property("Opacity").setValuesAtTimes(addOpacityBi1Keys,addOpacityBi1Val);
    if  (FlagBigLitle  == 0) {
        videoLayerBi1.property("Opacity").setValuesAtTimes(addOpacityBi1Keys_0,addOpacityBi1Val_0);
    } else {
        videoLayerBi1.property("Opacity").setValuesAtTimes(addOpacityBi1Keys_1,addOpacityBi1Val_1);
    }
    createRotationProperty(videoLayerBi1);


    //----------- BG A -----------
    var videoLayerBg = newCompAll.layers.add(videoFileItem);
    var posHoris =  newCompAll.width/2  
    var posVert  =  newCompAll.height/2 
    videoLayerBg.property("Position").setValue([posHoris,posVert]);

    blurEffect = videoLayerBg.Effects.addProperty("ADBE Gaussian Blur 2");
    blurEffect.property(1).setValue(bgGaussianBlur);
    //videoLayerBg.property("Opacity").setValue(bgOpacity); 
    if  (FlagBigLitle  == 0) {
        //videoLayer.property("Opacity").setValuesAtTimes(addOpacityBi1Keys_0,addOpacityBi1Val_0);
        videoLayerBg.property("Opacity").setValuesAtTimes(addOpacityKeys_0_25_100,addOpacityVal_0_25_100);
    } else {
        videoLayerBg.property("Opacity").setValuesAtTimes(addOpacityKeys_1_25_100,addOpacityVal_1_25_100);
    }


    //----------- Base A -----------
    var videoLayer = newCompAll.layers.add(videoFileItem);
    //createProperty(newCompAll, videoLayer, videoFileItem, FlagBigLitle);
    createProperty3(newCompAll, videoLayer, videoFileItem, FlagBigLitle);




    //------------------------------------------
    // handleParentFoldersAll(compNameAll);
    handleParentFoldersAllAB(compNameAll,videoFileItemB);
    //handleParentFolders(videoFileItem,compNameAll,compName,compNameBg,compNameBi1);

} // handleCurCompAllAB3

//===================================================

function handleCurCompAllAB4(indx,Prefix,FlagBigLitle,videoFileItem,videoFileItemB)
{

    var compNameAll = Prefix + "_All_" + String(indx+1);
    var compNameBi1 = Prefix + "_BI1_" + String(indx+1);
    var compNameAB1 = Prefix + "_AB1_" + String(indx+1);
    var compNameBg  = Prefix + "_BG_"  + String(indx+1);
    var compName    = Prefix + "_"     + String(indx+1);

    var newCompAll  = app.project.items.addComp(compNameAll, compWidth, compHeight, 1.0, durationSec, 25);

    var scr_scaleMin = Math.min ((Math.round(newCompAll.height*100/videoFileItem.height,2)),(Math.round(newCompAll.width*100/videoFileItem.width,2)))
    var scr_scaleMax = Math.max ((Math.round(newCompAll.height*100/videoFileItem.height,2)),(Math.round(newCompAll.width*100/videoFileItem.width,2)))




    //----------- Base B -----------
    var videoLayerAll = newCompAll.layers.add(videoFileItemB);
    //createEffectsProperty(videoLayerAll);
    createEffectsProperty3(videoLayerAll);
    


    videoLayerAll.property("Scale").setValue([scr_scaleMax*1,scr_scaleMax*1]);

    //videoLayerAll.property("Opacity").setValuesAtTimes(addOpacityBi1Keys,addOpacityBi1Val);
    videoLayerAll.property("Opacity").setValue(100); 

    createRotationProperty(videoLayerAll);



    // //----------- Bi1 -----------
    // var videoLayerBi1 = newCompAll.layers.add(videoFileItem);
    // //createEffectsProperty(videoLayerBi1);
    // createEffectsProperty3(videoLayerBi1);
    // 
    // videoLayerBi1.property("Scale").setValue([scr_scaleMax*2,scr_scaleMax*2]);
    // 
    // 
    // //videoLayerBi1.property("Opacity").setValuesAtTimes(addOpacityBi1Keys,addOpacityBi1Val);
    // if  (FlagBigLitle  == 0) {
    //     videoLayerBi1.property("Opacity").setValuesAtTimes(addOpacityBi1Keys_0,addOpacityBi1Val_0);
    // } else {
    //     videoLayerBi1.property("Opacity").setValuesAtTimes(addOpacityBi1Keys_1,addOpacityBi1Val_1);
    // }
    // createRotationProperty(videoLayerBi1);
    // 
    // 
    // //----------- BG A -----------
    // var videoLayerBg = newCompAll.layers.add(videoFileItem);
    // var posHoris =  newCompAll.width/2  
    // var posVert  =  newCompAll.height/2 
    // videoLayerBg.property("Position").setValue([posHoris,posVert]);
    // 
    // blurEffect = videoLayerBg.Effects.addProperty("ADBE Gaussian Blur 2");
    // blurEffect.property(1).setValue(bgGaussianBlur);
    // //videoLayerBg.property("Opacity").setValue(bgOpacity); 
    // if  (FlagBigLitle  == 0) {
    //     //videoLayer.property("Opacity").setValuesAtTimes(addOpacityBi1Keys_0,addOpacityBi1Val_0);
    //     videoLayerBg.property("Opacity").setValuesAtTimes(addOpacityKeys_0_25_100,addOpacityVal_0_25_100);
    // } else {
    //     videoLayerBg.property("Opacity").setValuesAtTimes(addOpacityKeys_1_25_100,addOpacityVal_1_25_100);
    // }


    //----------- Base A -----------
    var videoLayer = newCompAll.layers.add(videoFileItem);
    //createProperty(newCompAll, videoLayer, videoFileItem, FlagBigLitle);
    //createProperty3(newCompAll, videoLayer, videoFileItem, FlagBigLitle);
    createProperty4(newCompAll, videoLayer, videoFileItem, FlagBigLitle);




    //------------------------------------------
    // handleParentFoldersAll(compNameAll);
    handleParentFoldersAllAB(compNameAll,videoFileItemB);
    //handleParentFolders(videoFileItem,compNameAll,compName,compNameBg,compNameBi1);

} // handleCurCompAllAB4
//===================================================
function handleNewComposit4()
{

    var FlagBigLitle  = 1;        
    var Prefix       = "Grp_1"; 

    //lg.writeln(' handleNewComposit filePathUrl.length => ' + filePathUrl.length.toString());

    for(var i = 0; i < filePathUrl.length; i++) {

        lg.writeln(' i= '+ String(i+1) +'  filePathUrl=> ' + filePathUrl[i]);

        var videoFile = File(filePathUrl[i]);
        var videoFileItem = app.project.importFile(new ImportOptions(videoFile));

        if(videoFileItem !=null )  {

            fileNameA[i] = videoFileItem;

            if  (FlagBigLitle  == 0) {
                FlagBigLitle  = 1; 
            } else {
                FlagBigLitle  = 0; 
            }             
            //handleNewCompositAll(i,videoFileItem,FlagBigLitle);
            //handleCurrentCompAll3(i,"Grp_All",FlagBigLitle,videoFileItem)
            handleCurrentCompAll4(i,"Grp_All",FlagBigLitle,videoFileItem)

            handleCurrentCompAll5(i,"Grp_A_Bg",FlagBigLitle,videoFileItem)




            var compNameBi1 = Prefix + "_BI1_" + String(i+1);
            var newCompBi1  = app.project.items.addComp(compNameBi1, compWidth, compHeight, 1.0, durationSec, 25);

            var videoLayerBi1 = newCompBi1.layers.add(videoFileItem);
            //createPropertyBi1(newCompBi1, videoLayerBi1, videoLayerBi1);
            createPropertyBi1(newCompBi1, videoLayerBi1, videoFileItem);


            var compNameBg = Prefix + "_BG_" + String(i+1);
            var newCompBg  = app.project.items.addComp(compNameBg, compWidth, compHeight, 1.0, durationSec, 25);

            var videoLayerBg = newCompBg.layers.add(videoFileItem);
            createPropertyBg(newCompBg, videoLayerBg, videoFileItem);


            var compName = Prefix + "_" + String(i+1);
            var newComp = app.project.items.addComp(compName, compWidth, compHeight, 1.0, durationSec, 25);
            var videoLayer = newComp.layers.add(videoFileItem);


            createProperty(newComp, videoLayer, videoFileItem, FlagBigLitle);

            handleParentFolders(videoFileItem,compName,compNameBg,compNameBi1);
            // if ( i > 5 ){break;}

        } //  if(videoFileItem !=null )  

    } //    for(var i = 0; i < filePathUrl.length; i++) 
}

//=====================================================================================================
//
function handleCurrentCompAll4(indx,Prefix,FlagBigLitle,videoFileItem)
{

    var compNameAll = Prefix + "_All_" + String(indx+1);
    var compNameBi1 = Prefix + "_BI1_" + String(indx+1);
    var compNameAB1 = Prefix + "_AB1_" + String(indx+1);
    var compNameBg  = Prefix + "_BG_"  + String(indx+1);
    var compName    = Prefix + "_"     + String(indx+1);

    //----------- Bi1 -----------
    var newCompAll  = app.project.items.addComp(compNameAll, compWidth, compHeight, 1.0, durationSec, 25);

    var videoLayerAll = newCompAll.layers.add(videoFileItem);
    createEffectsProperty3(videoLayerAll);
    //CurvesEffect = videoLayerAll.Effects.addProperty("ADBE CurvesCustom");
    //lumetriEffect = videoLayerAll.Effects.addProperty("ADBE Lumetri");

    var scr_scaleMin = Math.min ((Math.round(newCompAll.height*100/videoFileItem.height,2)),(Math.round(newCompAll.width*100/videoFileItem.width,2)))
    var scr_scaleMax = Math.max ((Math.round(newCompAll.height*100/videoFileItem.height,2)),(Math.round(newCompAll.width*100/videoFileItem.width,2)))

    //videoLayerAll.property("Scale").setValue([scr_scaleMax*3,scr_scaleMax*3]);
    videoLayerAll.property("Scale").setValue([scr_scaleMax*2,scr_scaleMax*2]);


    //videoLayerAll.property("Opacity").setValuesAtTimes(addOpacityBi1Keys,addOpacityBi1Val);
    if  (FlagBigLitle  == 0) {
        videoLayerAll.property("Opacity").setValuesAtTimes(addOpacityBi1Keys_0,addOpacityBi1Val_0);
    } else {
        videoLayerAll.property("Opacity").setValuesAtTimes(addOpacityBi1Keys_1,addOpacityBi1Val_1);
    }

    createRotationProperty(videoLayerAll);


    //----------- BG A -----------
    var videoLayerBg = newCompAll.layers.add(videoFileItem);
    var posHoris =  newCompAll.width/2  
    var posVert  =  newCompAll.height/2 
    videoLayerBg.property("Position").setValue([posHoris,posVert]);
    videoLayerBg.property("Scale").setValue([scr_scaleMax*2,scr_scaleMax*2]);

    blurEffect = videoLayerBg.Effects.addProperty("ADBE Gaussian Blur 2");
    blurEffect.property(1).setValue(bgGaussianBlur);
    createEffectsProperty(videoLayerBg);

    // videoLayerBg.property("Opacity").setValue(bgOpacity); 
    //videoLayerBg.property("Opacity").setValuesAtTimes(addBgOpacityKeys,addBgOpacityVal);
    //videoLayerBg.property("Opacity").setValuesAtTimes(addOpacityKeys_25_100,addOpacityVal_25_100);
    if  (FlagBigLitle  == 0) {
        //videoLayer.property("Opacity").setValuesAtTimes(addOpacityBi1Keys_0,addOpacityBi1Val_0);
        videoLayerBg.property("Opacity").setValuesAtTimes(addOpacityKeys_0_25_100,addOpacityVal_0_25_100);
    } else {
        videoLayerBg.property("Opacity").setValuesAtTimes(addOpacityKeys_1_75_100,addOpacityVal_1_75_100);
    }



    if (rotationEnable  == 1 ){createRotationProperty(videoLayerBg);}


    //----------- Base A -----------
   var videoLayer = newCompAll.layers.add(videoFileItem);
   createProperty5(newCompAll, videoLayer, videoFileItem, FlagBigLitle);
   //lumetriMainEffect = videoLayer.Effects.addProperty("ADBE Lumetri");

    //------------------------------------------
   handleParentFoldersAll(compNameAll);
   //handleParentFolders(videoFileItem,compNameAll,compName,compNameBg,compNameBi1);

}

//=====================================================================================================
//
function handleCurrentCompAll5(indx,Prefix,FlagBigLitle,videoFileItem)
{

    var compNameAll = Prefix + "_All_" + String(indx+1);
    var compNameBi1 = Prefix + "_BI1_" + String(indx+1);
    var compNameAB1 = Prefix + "_AB1_" + String(indx+1);
    var compNameBg  = Prefix + "_BG_"  + String(indx+1);
    var compName    = Prefix + "_"     + String(indx+1);

    // //----------- Bi1 -----------
    var newCompAll  = app.project.items.addComp(compNameAll, compWidth, compHeight, 1.0, durationSec, 25);
    
    //var videoLayerAll = newCompAll.layers.add(videoFileItem);
    //createEffectsProperty3(videoLayerAll);
    //CurvesEffect = videoLayerAll.Effects.addProperty("ADBE CurvesCustom");
    //lumetriEffect = videoLayerAll.Effects.addProperty("ADBE Lumetri");
    
    var scr_scaleMin = Math.min ((Math.round(newCompAll.height*100/videoFileItem.height,2)),(Math.round(newCompAll.width*100/videoFileItem.width,2)))
    var scr_scaleMax = Math.max ((Math.round(newCompAll.height*100/videoFileItem.height,2)),(Math.round(newCompAll.width*100/videoFileItem.width,2)))
    // 
    // //videoLayerAll.property("Scale").setValue([scr_scaleMax*3,scr_scaleMax*3]);
    // videoLayerAll.property("Scale").setValue([scr_scaleMax*2,scr_scaleMax*2]);
    // 
    // 
    // //videoLayerAll.property("Opacity").setValuesAtTimes(addOpacityBi1Keys,addOpacityBi1Val);
    // if  (FlagBigLitle  == 0) {
    //     videoLayerAll.property("Opacity").setValuesAtTimes(addOpacityBi1Keys_0,addOpacityBi1Val_0);
    // } else {
    //     videoLayerAll.property("Opacity").setValuesAtTimes(addOpacityBi1Keys_1,addOpacityBi1Val_1);
    // }
    // 
    // createRotationProperty(videoLayerAll);


    //----------- BG A -----------
    //var newCompAll  = app.project.items.addComp(compNameAll, compWidth, compHeight, 1.0, durationSec, 25);
    var videoLayerBg = newCompAll.layers.add(videoFileItem);
    var posHoris =  newCompAll.width/2  
    var posVert  =  newCompAll.height/2 
    videoLayerBg.property("Position").setValue([posHoris,posVert]);
    videoLayerBg.property("Scale").setValue([scr_scaleMax*2,scr_scaleMax*2]);

    blurEffect = videoLayerBg.Effects.addProperty("ADBE Gaussian Blur 2");
    blurEffect.property(1).setValue(bgGaussianBlur);
    createEffectsProperty(videoLayerBg);

    videoLayerBg.property("Opacity").setValue(bgOpacity_75); 
    // // videoLayerBg.property("Opacity").setValue(bgOpacity); 
    // //videoLayerBg.property("Opacity").setValuesAtTimes(addBgOpacityKeys,addBgOpacityVal);
    // //videoLayerBg.property("Opacity").setValuesAtTimes(addOpacityKeys_25_100,addOpacityVal_25_100);
    // if  (FlagBigLitle  == 0) {
    //     //videoLayer.property("Opacity").setValuesAtTimes(addOpacityBi1Keys_0,addOpacityBi1Val_0);
    //     videoLayerBg.property("Opacity").setValuesAtTimes(addOpacityKeys_0_25_100,addOpacityVal_0_25_100);
    // } else {
    //     videoLayerBg.property("Opacity").setValuesAtTimes(addOpacityKeys_1_75_100,addOpacityVal_1_75_100);
    // }

    if (rotationEnable  == 1 ){createRotationProperty(videoLayerBg);}


    //----------- Base A -----------
   var videoLayer = newCompAll.layers.add(videoFileItem);
   createProperty5(newCompAll, videoLayer, videoFileItem, FlagBigLitle);
   //lumetriMainEffect = videoLayer.Effects.addProperty("ADBE Lumetri");

    //------------------------------------------
   handleParentFoldersAll(compNameAll);
   //handleParentFolders(videoFileItem,compNameAll,compName,compNameBg,compNameBi1);

}

