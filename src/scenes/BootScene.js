export default class BootScene extends Phaser.Scene {
    constructor() {
        super({ key: 'BootScene' });
    }

    preload() {
        // Load assets here (images, audio, etc.)
        this.load.image('logo', 'assets/logo.webp');
    }

    create() {
        // Start the next scene
        this.scene.start('Preloader');
    }
}
