# svg-builder

A simple class to build svgs from paths.    
See sketch.js for an example of it in use.

**Create an svg**   
svg = new SvgBuilder(width, height); 
  
**Add a path**   
svg.addPath(path);   
Path should be in the format [{x:0,y:0},{x:0,y:0}...]  
  
**Start a group**   
svg.startGroup();  
Adding groups is optional.  
  
**End a group**    
svg.endGroup();  
  
**End the svg**     
svg.end();    
Svg will be automatically ended before saving if this is not called.   
  
**Save the svg**  
svg.save("filename.svg");  
Specifying filename is optional, will default to "image.svg"  
