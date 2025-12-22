import * as THREE from './three.module.js';

class FontLoader extends THREE.Loader {

  load( url, onLoad, onProgress, onError ) {

    const loader = new THREE.FileLoader( this.manager );
    loader.setPath( this.path );
    loader.setRequestHeader( this.requestHeader );
    loader.setWithCredentials( this.withCredentials );
    loader.load( url, text => {

      const json = JSON.parse( text );
      const font = this.parse( json );
      if ( onLoad ) onLoad( font );

    }, onProgress, onError );

  }

  parse( json ) {
    return new THREE.Font( json );
  }

}

export { FontLoader };
