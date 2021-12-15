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

var spriteslider2 = document.createElement('div2');
var clientWidth2 = document.getElementById('spritetarget2').clientWidth;

document.body.appendChild(spriteslider2);

spriteslider2.slider = document.getElementById('spriteslider2');
spriteslider2.sprite = document.getElementById('spritetarget2');
spriteslider2.spritesize = clientWidth2;
spriteslider2.spritecount = 37;
spriteslider2.pixelsperincrement = 5;
spriteslider2.multiplier = spriteslider2.lastmultiplier = 0;

Draggable.create(spriteslider2, {
  type: 'x',
  trigger: spriteslider2.slider,
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
  var clientWidth2 = document.getElementById('spritetarget2').clientWidth;
  spriteslider2.spritesize = clientWidth2;
  TweenLite.set(spriteslider2.sprite, {
    backgroundPosition: (-spriteslider2.multiplier * spriteslider2.spritesize) + "px 0"
  });
}, true);
