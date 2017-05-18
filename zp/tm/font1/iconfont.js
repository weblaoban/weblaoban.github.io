;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-huanyipi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M195.163501 828.349383c-41.173247-41.173247-73.492549-89.102726-96.058302-142.454364-23.348817-55.204005-35.187813-113.880687-35.187813-174.40258s11.838995-119.199597 35.187813-174.40258c22.565753-53.352661 54.885055-101.281117 96.058302-142.454364 41.173247-41.173247 89.102726-73.492549 142.454364-96.058302 14.953875-6.324831 30.164341-11.797082 45.595619-16.424932l0 237.50879 63.381203 0L446.594688 63.388359l0-63.381203-63.381203 0L126.941815 0.007156l0 63.381203 138.28245 0c-157.802838 87.092928-264.688081 255.11343-264.688081 448.104081 0 260.507988 194.756124 475.521562 446.610533 507.400263 0-21.308351 0.397666-49.250261 0.397666-63.877007-37.78133-5.423182-74.566963-15.65209-109.925496-30.60801C284.266227 901.841932 236.337771 869.52263 195.163501 828.349383z"  ></path>' +
    '' +
    '<path d="M1022.441538 511.492439c0-260.507988-194.756124-475.521562-446.610533-507.401285 0 21.308351-0.397666 49.250261-0.397666 63.877007 37.78133 5.423182 74.566963 15.65209 109.925496 30.60801 53.352661 22.565753 101.281117 54.885055 142.454364 96.058302 41.173247 41.173247 73.492549 89.102726 96.058302 142.454364 23.348817 55.204005 35.187813 113.880687 35.187813 174.40258 0 60.521893-11.838995 119.199597-35.187813 174.40258-22.565753 53.352661-54.885055 101.281117-96.058302 142.454364-41.173247 41.173247-89.102726 73.492549-142.454364 96.058302-14.953875 6.324831-30.164341 11.797082-45.595619 16.424932L639.763215 703.323827l-63.381203 0 0 256.272693 0 63.381203 63.381203 0 256.272693 0 0-63.381203L757.753457 959.59652C915.555273 872.503591 1022.441538 704.482068 1022.441538 511.492439z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-quanzi_huanyihuan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M296.671797 404.181804c-11.714272-11.714272-30.707345-11.714272-42.421617 0l-51.68266 51.682659c27.031596-142.80743 155.286544-251.163166 309.700738-251.163166 99.569776 0 191.327307 45.337642 250.558049 121.068297 10.206089 13.049418 29.058889 15.354184 42.108308 5.148095 13.049418-10.206089 15.354184-29.058889 5.148096-42.108308-70.528293-90.176652-179.667301-144.102645-297.814453-144.102644-191.066217 0-348.955477 140.060345-372.048187 321.332075l-52.669685-52.669685c-11.714272-11.714272-30.707345-11.714272-42.421616 0-11.714272 11.714272-11.714272 30.707345 0 42.421616l99.966019 99.96602c11.714272 11.714272 30.707345 11.714272 42.421617 0l109.154367-109.154366c11.715296-11.713248 11.715296-30.706321 0.001024-42.420593zM974.905723 572.506503l-99.96602-99.96602c-11.714272-11.714272-30.707345-11.714272-42.421617 0L723.363719 581.695874c-11.714272 11.714272-11.714272 30.707345 0 42.421617 11.714272 11.714272 30.707345 11.714272 42.421617 0l56.232806-56.232806c-26.929208 142.93132-155.244565 251.414018-309.749884 251.414018-89.526485 0-172.919897-36.592638-232.21412-99.688547-11.344649-12.072632-30.328507-12.66239-42.401139-1.316717-12.072632 11.344649-12.66239 30.328507-1.316717 42.401139 70.555938 75.079463 169.732542 118.597661 275.931976 118.597661 188.341658 0 344.443214-136.095861 370.975155-313.604812l49.240693 49.241717c11.714272 11.714272 30.707345 11.714272 42.421617 0 11.715296-11.715296 11.715296-30.707345 0-42.422641z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)