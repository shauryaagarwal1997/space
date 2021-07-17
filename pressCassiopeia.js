class pressCassiopeia{
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

        butCassiopeia.mousePressed(()=>{
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
            text("CASSIOPEIA CONSTELLATION",displayWidth/2-280,displayHeight/2-340);

            cassiopeia=createSprite(displayWidth/2-650,displayHeight/2+50,10,10);
            cassiopeia.scale=2.3;
            cassiopeia.addImage(cassiopeiai);

            cassiopeia1=createSprite(displayWidth/2+680,displayHeight/2+50,10,10);
            cassiopeia1.addImage(cassiopeia1i);
            cassiopeia1.scale=3.4;

            textSize(35);
            fill("red");
            text("STARS:",displayWidth/2-125,displayHeight/2-285);
            fill("orange");
            textSize(30);
            text("CAPH",displayWidth/2-130,displayHeight/2-225);
            text("SCHEDAR",displayWidth/2-130,displayHeight/2-175);
            text("RUCHBAH",displayWidth/2-130,displayHeight/2-125);
            text("NAVI",displayWidth/2-130,displayHeight/2-75);
            text("SEGIN",displayWidth/2-130,displayHeight/2-25);
    })
}
}