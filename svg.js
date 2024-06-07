
class SvgBuilder{
  constructor(w = 500, h = 500){
    this.groupid = 0;
    this.svgEnded = false;
    this.start(w, h);
  }

  // Starts the svg, 500x500, or can be provided with a width and height
  start(w, h){
    this.s = "<svg width='" + w + "' height='" + h + "'>";
    this.s += "\n";
    this.s += "\n";
  }

  // Start a group, either with a provided id or defaults to incremented number 
  startGroup(id = this.groupid){
    this.s += "\n";
    this.s += "<g id='" + id +  "'>";
    this.s += "\n";

    this.groupid++;
  }

  // End a group
  endGroup(){
    this.s += "\n";
    this.s += "</g>";
    this.s += "\n";
  }

  // Add a comment to the svg 
  addComment(comment){
    this.s += "<!-- " + comment + " -->";
    this.s += "\n";
  }

  // Add a path in the format [{x:0,y:0},{x:0,y:0}...]
  addPath(path){
    this.s += "<path d='";
    
    for(let p of path){
      if (path.indexOf(p) == 0) this.s += "M ";
      else this.s += "L ";
      this.s += nf(p.x,0,2) + " " + nf(p.y,0,2) + " ";
    }

    this.s += "' fill='none' stroke='black' stroke-width='1'/>";
    this.s += "\n";
    this.s += "\n";
  }

  // Ends the svg
  end(){
    this.s  += "</svg>";
    this.svgEnded = true;
  }

  // Downloads svg with given filename or default to image.svg
  save(filename = "image.svg"){
    // If we didn't call this from elsewhere in the code, end the svg
    if (!this.svgEnded) this.end();

    const blob = new Blob([this.s], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const link = Object.assign(document.createElement('a'), {
        href: url,
        download: filename
    });
    link.click();
    URL.revokeObjectURL(url);
  }
}

