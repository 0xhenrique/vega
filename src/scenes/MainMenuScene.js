// import Phaser from 'phaser';

// export default class MainMenuScene extends Phaser.Scene {
//     constructor() {
//         super({ key: 'MainMenuScene' });
//     }

//     preload() {
//         // Load assets required for the main menu
//         this.load.image('background', 'assets/background.png');
//         this.load.image('startButton', 'assets/start_button.png');
//     }

//     create() {
//         // Add background image
//         this.add.image(400, 300, 'background');

//         // Add game title
//         const titleText = this.add.text(400, 150, 'VEGA - TEST', {
//             fontSize: '48px',
//             color: '#ffffff',
//         });
//         titleText.setOrigin(0.5);

//         // Add start button
//         const startButton = this.add.image(400, 400, 'startButton').setInteractive();

//         // Add start button functionality
//         startButton.on('pointerdown', () => {
//             this.scene.start('GameScene');  // Change this to the actual game scene key
//         });

//         // Add hover effect for start button
//         startButton.on('pointerover', () => {
//             startButton.setTint(0xcccccc);
//         });

//         startButton.on('pointerout', () => {
//             startButton.clearTint();
//         });
//     }
// }


import { Scene } from 'phaser';

export default class MainMenuScene extends Scene
{
    constructor ()
    {
        super('MainMenuScene');
    }

    create ()
    {
        this.add.image(512, 384, 'background');

        this.add.image(512, 300, 'logo');

        this.add.text(512, 460, 'Main Menu', {
            fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);

        this.input.once('pointerdown', () => {

            this.scene.start('GameScene');

        });
    }
}
