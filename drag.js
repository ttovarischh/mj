// function getBgUrl(el) {
//     var bg = "";
//     if (el.currentStyle) {
//         bg = el.currentStyle.backgroundImage;
//     } else if (document.defaultView && document.defaultView.getComputedStyle) {
//         bg = document.defaultView.getComputedStyle(el, "").backgroundImage;
//     } else {
//         bg = el.style.backgroundImage;
//     }
//     return bg.replace(/url\(['"]?(.*?)['"]?\)/i, "$1");
// }
//
// var image = document.createElement('img');
// image.src = getBgUrl(document.getElementById('spritetarget'));
// image.onload = function () {
//     alert('Loaded!');
// };



var spriteslider = document.createElement('div');
var clientWidth = document.getElementById('spritetarget').clientWidth;

document.body.appendChild(spriteslider);

spriteslider.slider = document.getElementById('spriteslider');
spriteslider.sprite = document.getElementById('spritetarget');
spriteslider.spritesize = clientWidth;
spriteslider.spritecount = 37;
spriteslider.pixelsperincrement = 5;
spriteslider.multiplier = spriteslider.lastmultiplier = 0;

Draggable.create(spriteslider, {
  type: 'x',
  trigger: spriteslider.slider,
  bounds: {
    minX: 0,
    maxX: 0,
    minY: 0,
    maxY: 0
  },
  edgeResistance: 0,
  // cursor: 'e-resize',
  onDrag: function() {
    if (this.isDragging) {
      var t = this.target;
      t.multiplier = Math.floor(this.x / t.pixelsperincrement) + t.lastmultiplier;
      TweenLite.set(t.sprite, {
        backgroundPosition: (-t.multiplier * t.spritesize) + "px 0"
      });

    }
  },
  onDragEnd: function() {
    var t = this.target;
    t.lastmultiplier = t.multiplier % t.spritecount;
  }
});

window.addEventListener('resize', function(event) {
  var clientWidth = document.getElementById('spritetarget').clientWidth;
  spriteslider.spritesize = clientWidth;
  TweenLite.set(spriteslider.sprite, {
    backgroundPosition: (-spriteslider.multiplier * spriteslider.spritesize) + "px 0"
  });
}, true);

// all_new

var spriteslider = document.createElement('div2');
var clientWidth = document.getElementById('spritetarget2').clientWidth;

document.body.appendChild(spriteslider);

spriteslider.slider = document.getElementById('spriteslider2');
spriteslider.sprite = document.getElementById('spritetarget2');
spriteslider.spritesize = clientWidth;
spriteslider.spritecount = 20;
spriteslider.pixelsperincrement = 5;
spriteslider.multiplier = spriteslider.lastmultiplier = 0;

Draggable.create(spriteslider, {
  type: 'x',
  trigger: spriteslider.slider,
  bounds: {
    minX: 0,
    maxX: 0,
    minY: 0,
    maxY: 0
  },
  edgeResistance: 0,
  // cursor: 'e-resize',
  onDrag: function() {
    if (this.isDragging) {
      var t = this.target;
      t.multiplier = Math.floor(this.x / t.pixelsperincrement) + t.lastmultiplier;
      TweenLite.set(t.sprite, {
        backgroundPosition: (-t.multiplier * t.spritesize) + "px 0"
      });

    }
  },
  onDragEnd: function() {
    var t = this.target;
    t.lastmultiplier = t.multiplier % t.spritecount;
  }
});

window.addEventListener('resize', function(event) {
  var clientWidth = document.getElementById('spritetarget2').clientWidth;
  spriteslider.spritesize = clientWidth;
  TweenLite.set(spriteslider.sprite, {
    backgroundPosition: (-spriteslider.multiplier * spriteslider.spritesize) + "px 0"
  });
}, true);

// all_new

var spriteslider = document.createElement('div3');
var clientWidth = document.getElementById('spritetarget3').clientWidth;

document.body.appendChild(spriteslider);

spriteslider.slider = document.getElementById('spriteslider3');
spriteslider.sprite = document.getElementById('spritetarget3');
spriteslider.spritesize = clientWidth;
spriteslider.spritecount = 20;
spriteslider.pixelsperincrement = 5;
spriteslider.multiplier = spriteslider.lastmultiplier = 0;

Draggable.create(spriteslider, {
  type: 'x',
  trigger: spriteslider.slider,
  bounds: {
    minX: 0,
    maxX: 0,
    minY: 0,
    maxY: 0
  },
  edgeResistance: 0,
  // cursor: 'e-resize',
  onDrag: function() {
    if (this.isDragging) {
      var t = this.target;
      t.multiplier = Math.floor(this.x / t.pixelsperincrement) + t.lastmultiplier;
      TweenLite.set(t.sprite, {
        backgroundPosition: (-t.multiplier * t.spritesize) + "px 0"
      });

    }
  },
  onDragEnd: function() {
    var t = this.target;
    t.lastmultiplier = t.multiplier % t.spritecount;
  }
});

window.addEventListener('resize', function(event) {
  var clientWidth = document.getElementById('spritetarget3').clientWidth;
  spriteslider.spritesize = clientWidth;
  TweenLite.set(spriteslider.sprite, {
    backgroundPosition: (-spriteslider.multiplier * spriteslider.spritesize) + "px 0"
  });
}, true);

// all_new

var spriteslider = document.createElement('div4');
var clientWidth = document.getElementById('spritetarget4').clientWidth;

document.body.appendChild(spriteslider);

spriteslider.slider = document.getElementById('spriteslider4');
spriteslider.sprite = document.getElementById('spritetarget4');
spriteslider.spritesize = clientWidth;
spriteslider.spritecount = 20;
spriteslider.pixelsperincrement = 5;
spriteslider.multiplier = spriteslider.lastmultiplier = 0;

Draggable.create(spriteslider, {
  type: 'x',
  trigger: spriteslider.slider,
  bounds: {
    minX: 0,
    maxX: 0,
    minY: 0,
    maxY: 0
  },
  edgeResistance: 0,
  // cursor: 'e-resize',
  onDrag: function() {
    if (this.isDragging) {
      var t = this.target;
      t.multiplier = Math.floor(this.x / t.pixelsperincrement) + t.lastmultiplier;
      TweenLite.set(t.sprite, {
        backgroundPosition: (-t.multiplier * t.spritesize) + "px 0"
      });

    }
  },
  onDragEnd: function() {
    var t = this.target;
    t.lastmultiplier = t.multiplier % t.spritecount;
  }
});

window.addEventListener('resize', function(event) {
  var clientWidth = document.getElementById('spritetarget4').clientWidth;
  spriteslider.spritesize = clientWidth;
  TweenLite.set(spriteslider.sprite, {
    backgroundPosition: (-spriteslider.multiplier * spriteslider.spritesize) + "px 0"
  });
}, true);
