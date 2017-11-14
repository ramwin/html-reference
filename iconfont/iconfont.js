;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-wode" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512.021489 61.675049c-246.079558 0-447.418123 202.64635-447.418123 450.325335s201.338564 450.325335 447.418123 450.325335 447.418123-202.64635 447.418123-450.325335S758.101047 61.675049 512.021489 61.675049L512.021489 61.675049zM512.021489 196.771934c76.061326 0 134.225027 58.542324 134.225027 135.097908s-58.164724 135.097908-134.225027 135.097908-134.225027-58.542324-134.225027-135.097908S435.960163 196.771934 512.021489 196.771934L512.021489 196.771934zM512.021489 836.23393c-111.854531 0-210.286354-58.542324-268.451078-144.104025 0-90.065272 178.967044-139.600455 268.451078-139.600455s268.451078 49.536206 268.451078 139.600455C722.307843 777.691606 623.87602 836.23393 512.021489 836.23393L512.021489 836.23393z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-create" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M880.814392 562.062186 567.324538 562.062186l0 313.489854c0 30.531364-24.762987 55.326073-55.32505 55.326073-30.56104 0-55.324026-24.794709-55.324026-55.326073l0-313.489854-313.489854 0c-30.562063 0-55.32505-24.792663-55.32505-55.324026 0-30.592762 24.762987-55.32505 55.32505-55.32505l313.489854 0L456.675462 137.907906c0-30.562063 24.762987-55.32505 55.324026-55.32505 30.562063 0 55.32505 24.762987 55.32505 55.32505l0 313.50418L880.814392 451.412087c30.56104 0 55.324026 24.732288 55.324026 55.32505C936.138418 537.269523 911.375431 562.062186 880.814392 562.062186z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-suoyouleibie" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M64 85.310145C64 73.540877 73.518922 64 85.310145 64L460.823189 64C472.592457 64 482.133333 73.518922 482.133333 85.310145L482.133333 460.823189C482.133333 472.592457 472.614411 482.133333 460.823189 482.133333L85.310145 482.133333C73.540877 482.133333 64 472.614411 64 460.823189L64 85.310145 64 85.310145 64 85.310145ZM541.866667 563.176811C541.866667 551.407543 551.385589 541.866667 563.176811 541.866667L938.689856 541.866667C950.459123 541.866667 960 551.385589 960 563.176811L960 938.689856C960 950.459123 950.481077 960 938.689856 960L563.176811 960C551.407543 960 541.866667 950.481077 541.866667 938.689856L541.866667 563.176811 541.866667 563.176811 541.866667 563.176811ZM64 563.176811C64 551.407543 73.518922 541.866667 85.310145 541.866667L460.823189 541.866667C472.592457 541.866667 482.133333 551.385589 482.133333 563.176811L482.133333 938.689856C482.133333 950.459123 472.614411 960 460.823189 960L85.310145 960C73.540877 960 64 950.481077 64 938.689856L64 563.176811 64 563.176811 64 563.176811Z"  ></path>' +
    '' +
    '<path d="M601.6 123.908312 601.6 123.908312 601.6 422.225022C601.6 422.654003 601.344032 422.4 601.774978 422.4L900.091689 422.4C900.52067 422.4 900.266667 422.655968 900.266667 422.225022L900.266667 123.908312C900.266667 123.47933 900.522635 123.733333 900.091689 123.733333L601.774978 123.733333C601.345997 123.733333 601.6 123.477365 601.6 123.908312L601.6 123.908312 601.6 123.908312ZM541.866667 123.908312C541.866667 90.821865 568.02278 64 601.774978 64L900.091689 64C933.178135 64 960 90.156113 960 123.908312L960 422.225022C960 455.311469 933.843887 482.133333 900.091689 482.133333L601.774978 482.133333C568.688531 482.133333 541.866667 455.97722 541.866667 422.225022L541.866667 123.908312 541.866667 123.908312 541.866667 123.908312Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-ldc-write" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M170.868 12C103.8 12 49.235 66.564 49.235 133.632v756.735C49.235 957.436 103.8 1012 170.868 1012H794.06c67.069 0 121.633-54.564 121.633-121.633V622.551l-65.208 65.21v202.607c0 31.111-25.312 56.422-56.425 56.422H170.868c-31.112 0-56.423-25.311-56.423-56.422V133.632c0-31.111 25.312-56.421 56.423-56.421h589.094l69.548-59.623C817.851 13.874 805.984 12 794.059 12H170.868z" fill="" ></path>' +
    '' +
    '<path d="M932.775 277.347c-44.873-44.843-79.53-50.41-97.486-32.488l-48.711 48.745 129.94 129.907 48.709-48.71c17.955-17.922 12.389-52.615-32.452-97.454zM477.989 602.159C469.027 611.121 436 776.361 436 776.361s161.201-34.621 171.928-44.262L884.03 455.995l-129.939-129.94-276.102 276.104zM259.894 274.924h356.111V334H259.894v-59.076zM259.894 452.98h222.57v59.075h-222.57V452.98zM259.894 631.034h89.028v59.075h-89.028v-59.075z" fill="" ></path>' +
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