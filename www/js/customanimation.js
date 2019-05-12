var game1 = 0.3;
var game2 = 0.7;
var game3 = 0.5;
var game4 = 0.9;
var game5 = 0.6;
var game6 = 0.8;
$(document).ready(function(){
  populateh8();
  $(".home1").click(function(){
    destroyall();
  })
  $(".stats").click(function(){
    animateg1();
  })
  $(".prof").click(function(){
    destroyall();
  })
})
function populateh8() {
  if ((game1 >= 0) & (game1 <= 0.4)) {
    $("#K11").html("Beginner");
  } else if ((game1 > 0.4) & (game1 <= 0.7)) {
    $("#K11").html("Intermediate")
  } else {
    $("#K11").html("Advanced");
  }
  if ((game2 >= 0) & (game2 <= 0.4)) {
    $("#K12").html("Beginner");
  } else if ((game2 > 0.4) & (game2 <= 0.7)) {
    $("#K12").html("Intermediate")
  } else {
    $("#K12").html("Advanced");
  }
  if ((game3 >= 0) & (game3 <= 0.4)) {
    $("#K13").html("Beginner");
  } else if ((game3 > 0.4) & (game3 <= 0.7)) {
    $("#K13").html("Intermediate")
  } else {
    $("#K13").html("Advanced");
  }
  if ((game4 >= 0) & (game4 <= 0.4)) {
    $("#K14").html("Beginner");
  } else if ((game4 > 0.4) & (game4 <= 0.7)) {
    $("#K14").html("Intermediate")
  } else {
    $("#K14").html("Advanced");
  }
  if ((game5 >= 0) & (game5 <= 0.4)) {
    $("#K15").html("Beginner");
  } else if ((game5 > 0.4) & (game5 <= 0.7)) {
    $("#K15").html("Intermediate")
  } else {
    $("#K15").html("Advanced");
  }
  if ((game6 >= 0) & (game6 <= 0.4)) {
    $("#K16").html("Beginner");
  } else if ((game6 > 0.4) & (game6 <= 0.7)) {
    $("#K16").html("Intermediate")
  } else {
    $("#K16").html("Advanced");
  }
}
/*ARRAY FOR GRAPH*/
var progressBars = [];

function animateg1() {
  progressBars[0] = (new ProgressBar.Line(container, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {
      width: '100%',
      height: '100%'
    },
    from: {
      color: '#FFEA82'
    },
    to: {
      color: '#F44336'
    },
    step: (state, bar) => {
      bar.path.setAttribute('stroke', state.color);
    }
  }));
  progressBars[1] = (new ProgressBar.Line(container1, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {
      width: '100%',
      height: '100%'
    },
    from: {
      color: '#CE93D8'
    },
    to: {
      color: '#8E24AA'
    },
    step: (state, bar) => {
      bar.path.setAttribute('stroke', state.color);
    }
  }));
  progressBars[2] = (new ProgressBar.Line(container2, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {
      width: '100%',
      height: '100%'
    },
    from: {
      color: '#FFEA82'
    },
    to: {
      color: '#009688'
    },
    step: (state, bar) => {
      bar.path.setAttribute('stroke', state.color);
    }
  }));
  progressBars[3] = (new ProgressBar.Line(container3, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {
      width: '100%',
      height: '100%'
    },
    from: {
      color: '#FFEA82'
    },
    to: {
      color: '#3F51B5'
    },
    step: (state, bar) => {
      bar.path.setAttribute('stroke', state.color);
    }
  }));
  progressBars[4] = (new ProgressBar.Line(container4, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {
      width: '100%',
      height: '100%'
    },
    from: {
      color: '#FFEA82'
    },
    to: {
      color: '#E91E63'
    },
    step: (state, bar) => {
      bar.path.setAttribute('stroke', state.color);
    }
  }));
  progressBars[5] = (new ProgressBar.Line(container5, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {
      width: '100%',
      height: '100%'
    },
    from: {
      color: '#FFEA82'
    },
    to: {
      color: '#F57C00'
    },
    step: (state, bar) => {
      bar.path.setAttribute('stroke', state.color);
    }
  }));
  //ANIMATE SECTION
  var i;
  var a = [game1, game2, game3, game4, game5, game6];
  for (i = 0; i < 6; i++) {
    progressBars[i].animate(a[i]); // Number from 0.0 to 1.0
  }
}

function destroyall() {
  var i;
  progressBars.forEach(function(bar) {
    bar.destroy();
  });
  progressBars = [];
}
