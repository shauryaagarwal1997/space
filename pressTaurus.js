class pressTaurus{
    constructor(){
    butOrion=createButton('ORION');
    butLeo=createButton('LEO');
    butDraco=createButton('DRACO');
    butHydra=createButton('HYDRA');
    butTaurus=createButton('TAURUS');
    butCassiopeia=createButton('CASSIOPEIA');
    butUrsaMajor=createButton('URSA MAJOR');
    butCanisMajor=createButton('CANIS MAJOR');
    }
    display(){
        butOrion.position(displayWidth/2-280,displayHeight/2-360);
        butLeo.position(displayWidth/2-280,displayHeight/2-300);
        butDraco.position(displayWidth/2-280,displayHeight/2-240);
        butHydra.position(displayWidth/2-280,displayHeight/2-180);
        butTaurus.position(displayWidth/2,displayHeight/2-360);
        butCassiopeia.position(displayWidth/2,displayHeight/2-300);
        butUrsaMajor.position(displayWidth/2,displayHeight/2-240);
        butCanisMajor.position(displayWidth/2,displayHeight/2-180);
        drawSprites();
        butOrion.size(200,50);
        butLeo.size(200,50);
        butDraco.size(200,50);
        butHydra.size(200,50);
        butTaurus.size(200,50);
        butCassiopeia.size(200,50);
        butUrsaMajor.size(200,50);
        butCanisMajor.size(200,50);

        butOrion.style('background','cream');
        butLeo.style('background','lightgreen');
        butDraco.style('background','cream');
        butHydra.style('background','lightgreen');
        butTaurus.style('background','cream');
        butCassiopeia.style('background','lightgreen');
        butUrsaMajor.style('background','cream');
        butCanisMajor.style('background','lightgreen');

        butTaurus.mousePressed(()=>{
            butOrion.hide();
            butLeo.hide();
            butTaurus.hide();
            butHydra.hide();
            butDraco.hide();
            butCassiopeia.hide();
            butUrsaMajor.hide();
            butCanisMajor.hide();
            
            orion.velocityX=1000000;
            cassiopeia.velocityX=1000000;
            leo.velocityX=1000000;
            canismajor.velocityX=1000000;
            
            background(sky1);
            textSize(40);
            fill("lightgreen");
            stroke("black")
            strokeWeight(7)
            text("TAURUS CONSTELLATION",displayWidth/2-280,displayHeight/2-340);
            
            taurus=createSprite(displayWidth/2-700,displayHeight/2,10,10);
            taurus.addImage(taurusi);
            taurus.scale=1

            taurus1=createSprite(displayWidth/2+650,displayHeight/2+100,10,10);
            taurus1.addImage(taurus1i);
            taurus1.scale=0.67

            textSize(35);
            fill("red");
            text("STARS:",displayWidth/2-125,displayHeight/2-285);
            fill("orange");
            textSize(30);
            text("ALDEBARAN",displayWidth/2-145,displayHeight/2-225);
            text("BETA TAURI",displayWidth/2-145,displayHeight/2-175);
            text("ZETA TAURI",displayWidth/2-145,displayHeight/2-125);
            text("EPSILON TAURI",displayWidth/2-145,displayHeight/2-75);
            text("LAMBDA TAURI",displayWidth/2-145,displayHeight/2-25);
            text("ELECTRA",displayWidth/2-145,displayHeight/2+25);
            text("PLEIONE",displayWidth/2-145,displayHeight/2+75);
            text("CELAENO",displayWidth/2-145,displayHeight/2+125);
            text("OMICRON TAURI",displayWidth/2-145,displayHeight/2+175);
    })
}
}