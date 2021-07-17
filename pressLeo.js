class pressLeo{
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

        butLeo.mousePressed(()=>{
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
            text("LEO CONSTELLATION",displayWidth/2-280,displayHeight/2-340);

            leo=createSprite(displayWidth/2-640,displayHeight/2,10,10);
            leo.scale=1.7;
            leo.addImage(leoi);

            leo1=createSprite(displayWidth/2+630,displayHeight/2,10,10);
            leo1.addImage(leo1i);
            leo1.scale=2.8

            textSize(35);
            fill("red");
            text("STARS:",displayWidth/2-75,displayHeight/2-285);
            fill("orange");
            textSize(30);
            text("ZOSMA",displayWidth/2-70,displayHeight/2-225);
            text("ADHAFERA",displayWidth/2-70,displayHeight/2-175);            
            text("ALGIEBA",displayWidth/2-70,displayHeight/2-125);
            text("ALGENUBI",displayWidth/2-70,displayHeight/2-75);
            text("REGULUS",displayWidth/2-70,displayHeight/2-25);
            text("RASALAS",displayWidth/2-70,displayHeight/2+25);
            text("DENEBOLA",displayWidth/2-70,displayHeight/2+75);
            text("CHERTAN",displayWidth/2-70,displayHeight/2+125);
            text("AL JABHAH",displayWidth/2-70,displayHeight/2+175);
    })
}
}