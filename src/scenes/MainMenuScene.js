import Phaser from 'phaser';

export default class MainMenuScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MainMenuScene' });
    }

    preload() {
        // Load assets required for the main menu
        this.load.image('background', 'assets/background.png');
        this.load.image('startButton', 'assets/start_button.png');
    }

    create() {
        // Add background image
        this.add.image(400, 300, 'background');

        // Add game title
        const titleText = this.add.text(400, 150, 'My Visual Novel', {
            fontSize: '48px',
            color: '#ffffff',
        });
        titleText.setOrigin(0.5);

        // Add start button
        const startButton = this.add.image(400, 400, 'startButton').setInteractive();

        // Add start button functionality
        startButton.on('pointerdown', () => {
            this.scene.start('GameScene');  // Change this to the actual game scene key
        });

        // Add hover effect for start button
        startButton.on('pointerover', () => {
            startButton.setTint(0xcccccc);
        });

        startButton.on('pointerout', () => {
            startButton.clearTint();
        });
    }
}
