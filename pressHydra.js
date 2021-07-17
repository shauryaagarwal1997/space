class pressHydra{
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

        butHydra.mousePressed(()=>{
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
            text("HYDRA CONSTELLATION",displayWidth/2-280,displayHeight/2-340);
    
            hydra=createSprite(displayWidth/2-600,displayHeight/2,10,10);
            hydra.scale=0.7;
            hydra.addImage(hydrai);

            hydra1=createSprite(displayWidth/2+680,displayHeight/2,10,10);
            hydra1.addImage(hydra1i);
            hydra1.scale=2.2;

            textSize(35);
            fill("red");
            text("STARS:",displayWidth/2-50,displayHeight/2-285);
            fill("orange");
            textSize(30);
            text("ALPHARD",displayWidth/2-200,displayHeight/2-225);
            text("SIGMA HYDRAE",displayWidth/2-200,displayHeight/2-175);
            text("TW HYDRAE",displayWidth/2-200,displayHeight/2-125);
            text("GAMMA HYDRAE",displayWidth/2-200,displayHeight/2-75);
            text("EPSILON HYDRAE",displayWidth/2-200,displayHeight/2-25);
            text("LOTA HYDRAE",displayWidth/2-200,displayHeight/2+25);
            text("ZETA HYDRAE",displayWidth/2-200,displayHeight/2+75);
            text("R HYDRAE",displayWidth/2+90,displayHeight/2-225);
            text("DELTA HYDRAE",displayWidth/2+90,displayHeight/2-175);
            text("NU HYDRAE",displayWidth/2+90,displayHeight/2-125);
            text("PI HYDRAE",displayWidth/2+90,displayHeight/2-75);
            text("XI HYDRAE",displayWidth/2+90,displayHeight/2-25);
            text("MU HYDRAE",displayWidth/2+90,displayHeight/2+25);
            text("V HYDRAE",displayWidth/2+90,displayHeight/2+75);
            text("KAPPA HYDRAE",displayWidth/2-200,displayHeight/2+125);
            text("ETA HYDRAE",displayWidth/2+90,displayHeight/2+125);
    })
}
}