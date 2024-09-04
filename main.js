import Phaser from 'phaser';
import BootScene from './src/scenes/BootScene';
import MainMenuScene from './src/scenes/MainMenuScene';
import GameScene from './src/scenes/GameScene';

const config = {
    type: Phaser.AUTO,
    width: 1024,
    height: 768,
    parent: 'game-container',
    backgroundColor: '#028af8',

    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },

    scene: [
	BootScene,
	MainMenuScene,
	GameScene
    ],
};

const game = new Phaser.Game(config);
