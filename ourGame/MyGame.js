/*global Phaser*/
/*global player*/



 var game = new Phaser.Game(800, 448, Phaser.AUTO, '');
var game_state = {}

game_state.main = function () {};
game_state.main.prototype = {

	preload: function() {
	    game.load.image('city', 'Assets/background.png');
	    game.load.spritesheet('main', 'Assets/main.png', 896, 896);
	    game.load.spritesheet('cop', 'Assets/cop.png', 720, 720);
	    game.load.spritesheet('jug', 'Assets/jug.png',720, 720);
	    game.load.spritesheet('ground', 'Assets/Ground.png', 32, 32);
	    game.load.spritesheet('portal', 'Assets/portal.png', 1176, 660);
	    game.load.spritesheet('reaper', 'Assets/reaper.png', 208, 188);
},
 
create: function() {
    
    game.physics.startSystem(Phaser.Physics.ARCADE);
        //Background Code
    this.city = game.add.sprite( 0, 0, 'city');
    
    this.platforms = game.add.group();
    this.platforms.enableBody = true;
    
    var level = [   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0], 
                    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,2,3,0,0,0,0,0,0], 
                    [0,0,0,0,0,0,0,0,0,0,1,2,2,3,0,0,7,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0], 
                    [0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,2], 
                    [0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
                    [0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
                    [0,0,0,0,0,0,7,0,0,0,0,1,2,3,0,0,0,0,0,0,1,2,3,0,0],
                    [0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
                    [1,2,2,2,2,2,2,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11]]

        for(var i = 0; i < level.length; i++){
            for(var j = 0; j < level[i].length; j++){
                if(level[i][j] === 1){
                    var tempTile = this.platforms.create(j * 32, i * 32, "ground");
                    tempTile.frame = 0;
                    tempTile.body.immovable = true;
                }
                if(level[i][j] === 2){
                    var tempTile = this.platforms.create(j * 32, i * 32, "ground");
                    tempTile.frame = 1;
                    tempTile.body.immovable = true;
                }
                if(level[i][j] === 3){
                    var tempTile = this.platforms.create(j * 32, i * 32, "ground");
                    tempTile.frame = 2;
                    tempTile.body.immovable = true;
                }
                if(level[i][j] === 4){
                    var tempTile = this.platforms.create(j * 32, i * 32, "ground");
                    tempTile.frame = 3;
                    tempTile.body.immovable = true;
                }
                if(level[i][j] === 5){
                    var tempTile = this.platforms.create(j * 32, i * 32, "ground");
                    tempTile.frame = 4;
                    tempTile.body.immovable = true;
                }
                if(level[i][j] === 6){
                    var tempTile = this.platforms.create(j * 32, i * 32, "ground");
                    tempTile.frame = 5;
                    tempTile.body.immovable = true;
                }
                if(level[i][j] === 7){
                    var tempTile = this.platforms.create(j * 32, i * 32, "ground");
                    tempTile.frame = 6;
                    tempTile.body.immovable = true;
                }
                if(level[i][j] === 8){
                    var tempTile = this.platforms.create(j * 32, i * 32, "ground");
                    tempTile.frame = 7;
                    tempTile.body.immovable = true;
                }
                if(level[i][j] === 9){
                    var tempTile = this.platforms.create(j * 32, i * 32, "ground");
                    tempTile.frame = 8;
                    tempTile.body.immovable = true;
                }
                if(level[i][j] === 10){
                    var tempTile = this.platforms.create(j * 32, i * 32, "ground");
                    tempTile.frame = 9;
                    tempTile.body.immovable = true;
                }
                if(level[i][j] === 11){
                    var tempTile = this.platforms.create(j * 32, i * 32, "ground");
                    tempTile.frame = 10;
                    tempTile.body.immovable = true;
                }
            }
        }
    
    //Main Character Code
    this.player = game.add.sprite(60, 290, 'main');
    game.physics.arcade.enable(this.player);
    this.player.enableBody = true;
    this.player.scale.setTo(0.1,0.1);
    this.player.animations.add('right', [ 0, 1], 6, true);
    this.player.animations.add('left', [2, 3], 6, true);
    this.player.body.gravity.y = 270;
    this.player.body.collideWorldBounds = true;
    this.player.body.bounce.y = 0.2;
    this.player.body.setSize(530, 600, 17, 8)
    
    //Cop Character Code
    // this.cop = game.add.sprite(200,295, 'cop');
    // this.cop.scale.setTo(0.16,0.16);
    // this.cop.animations.add('stableOne', [0, 1], 6, true);
    // this.cop.animations.play('stableOne');
    
    //Jug character Code
    // this.jug = game.add.sprite(400,20, 'jug');
    // this.jug.scale.setTo(0.5, 0.5);
    // this.jug.animations.add('stableTwo', [0, 1], 1, true);
    // this.jug.animations.play('stableTwo');
    
    this.portal = game.add.sprite(535, -10, 'portal');
    this.portal.animations.add('portal', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],13, true)
    game.physics.arcade.enable(this.portal);
    this.portal.enableBody = true;
    this.portal.body.immovable = true;
    this.portal.animations.play('portal');
    this.portal.scale.setTo(0.25, 0.15);
    this.portal.body.setSize(140, 450, 10, 8);
    
    this.reaper = game.add.sprite(0, 0, 'reaper');
    this.reaper.enableBody = true;
    this.reaper.scale.setTo(0.25, 0.25);
    
    this.deathText = game.add.text(50, 10, '= 0', {
        fontSize: '32px',
    });
    this.deathCounter = 0 

    
    //Control Code
    this.cursors = game.input.keyboard.createCursorKeys();
},
hitPortal: function(player, portal){
  game.state.start('levelTwo')  
},

update: function() {
    //game.debug.body(this.portal)
    
    game.physics.arcade.collide(this.player, this.platforms, this.hitPlatform, null, this);
    game.physics.arcade.overlap(this.player, this.portal, this.hitPortal, null, this);

    this.player.body.velocity.x=0;

    if (this.cursors.left.isDown) {
         this.player.body.velocity.x = -150;
           this.player.animations.play('left');
     }
      else if (this.cursors.right.isDown) {
          this.player.body.velocity.x = 150;
          this.player.animations.play('right');
      }
      else{
          this.player.frame =('stable');
      }
      if(this.cursors.up.isDown && this.player.body.touching.down){
          this.player.body.velocity.y= -300;
      }
      
    //   game.debug.body(this.player);
      
},
hitPlatform: function(player, platform){
    console.log(platform.frame);
    if(platform.frame === 9){
        player.x = 20;
        player.y = 300;
        this.deathCounter ++;
        this.deathText.text = "=" + this.deathCounter;
    }
},

},
game.state.add('main', game_state.main);
game.state.start('main');