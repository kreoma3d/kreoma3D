import {
  ExtrudeGeometry
} from './three.module.js';

class TextGeometry extends ExtrudeGeometry {

  constructor( text, parameters = {} ) {

    const font = parameters.font;

    if ( font === undefined ) {
      console.error( 'TextGeometry: font parameter is required.' );
      return;
    }

    const shapes = font.generateShapes( text, parameters.size || 100 );
    const geometry = new ExtrudeGeometry( shapes, parameters );

    super( geometry.parameters.shapes, geometry.parameters.options );

    this.type = 'TextGeometry';
  }

}

export { TextGeometry };
