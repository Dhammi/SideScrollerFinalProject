
class Shield extends createjs.Sprite {

    constructor(img: HTMLImageElement) {
        super(new createjs.SpriteSheet({
            images: [img],
            frames: { width: 96, height: 96 },
            animations: { shield: [0, 19, false, 0.5] }
        }), 'shield');

    }

    public get LastFrame(): number {
        return 19;
    }
}   