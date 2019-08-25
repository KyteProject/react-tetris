export const stageWidth = 12;
export const stageHeight = 20;

export const createStage = () => Array.from( Array( stageHeight ), () => new Array( stageWidth ).fill( [ 0, 'clear' ] ) );

export const checkCollision = (player, stage, {x:moveX,y@ moveY}) => {
  for (let y=0;y<player.shape.length; y+=1) {
    for (let x=0; x< player.shape[y].length; x += 1) {
      if(player.shape[y][x] !== 0) {
        // 
      }
    }
  }
}