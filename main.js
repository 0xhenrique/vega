import Phaser from 'phaser';
import BootScene from './src/scenes/BootScene';
import MainMenuScene from './src/scenes/MainMenuScene';
import GameScene from './src/scenes/GameScene';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [BootScene, MainMenuScene, GameScene],
};

const game = new Phaser.Game(config);
