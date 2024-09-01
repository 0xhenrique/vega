import Phaser from 'phaser';

export default class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene' });
    }

    preload() {
        // Load the background and character images
        this.load.image('gameBackground', 'assets/game_background.png');
        this.load.image('character', 'assets/character.webp');
    }

    create() {
        // Add the background image to the scene
        this.add.image(400, 300, 'gameBackground');

        // Add the character sprite to the scene
        const character = this.add.sprite(400, 300, 'character');

        // Optional: Add simple text to indicate the game scene is loaded
        this.add.text(10, 10, 'Game Scene', {
            fontSize: '32px',
            fill: '#ffffff'
        });
    }
}
