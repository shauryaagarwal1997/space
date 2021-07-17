class pressOrion{
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
        drawSprites();

       
        
        butOrion.mousePressed(()=>{
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
            
            drawSprites();
            background(sky1);
            textSize(40);
            fill("lightgreen");
            stroke("black")
            strokeWeight(7)
            text("ORION CONSTELLATION",displayWidth/2-280,displayHeight/2-340);
    

            orion=createSprite(displayWidth/2-700,displayHeight/2,10,10);
            orion.addImage(orioni);
            orion.scale=1.4

            orion1=createSprite(displayWidth/2+650,displayHeight/2+80,10,10);
            orion1.addImage(orion1i);
            orion1.scale=1

            textSize(35);
            fill("red");
            text("STARS:",displayWidth/2-125,displayHeight/2-285);
            fill("orange");
            textSize(30);
            text("SAIPH",displayWidth/2-300,displayHeight/2-225);
            text("RIGEL",displayWidth/2-300,displayHeight/2-175);
            text("MINTAKA",displayWidth/2-300,displayHeight/2-125);
            text("ALNILAM",displayWidth/2-300,displayHeight/2-75);
            text("ALNITAK",displayWidth/2-300,displayHeight/2-25);
            text("BELLATRIX",displayWidth/2-300,displayHeight/2+25);
            text("BETELGEUSE",displayWidth/2-300,displayHeight/2+75);
            text("MEISSA",displayWidth/2-300,displayHeight/2+125);
            text("MU ORIONIS",displayWidth/2,displayHeight/2-225);
            text("NU ORIONIS",displayWidth/2,displayHeight/2-175);
            text("XI ORIONIS",displayWidth/2,displayHeight/2-125);
            text("PI1 ORIOINIS:",displayWidth/2,displayHeight/2-75);
            text("PI2 ORIONIS",displayWidth/2,displayHeight/2-25);
            text("P13 ORIONIS",displayWidth/2,displayHeight/2+25);
            text("P14 ORIONIS",displayWidth/2,displayHeight/2+75);
            text("TABIT",displayWidth/2,displayHeight/2+125);
    })
}
}