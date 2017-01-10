(function () {

  initMobileMenu()
  if (PAGE_TYPE) {
    initVersionSelect()
    initSubHeaders()
    // initApiSpecLinks() // Disabled during initial setup 1/9/17
    initInterLinks() // Created during initial setup 1/9/17
    initLocationHashFuzzyMatching()
  }

  // function initApiSpecLinks () {
  //   var apiContent = document.querySelector('.content.api')
  //   if (apiContent) {
  //     var apiTitles = [].slice.call(apiContent.querySelectorAll('h2'))
  //     apiTitles.forEach(function (titleNode) {
  //       var ulNode = titleNode.parentNode.nextSibling
  //       if (ulNode.tagName !== 'UL') {
  //         ulNode = ulNode.nextSibling
  //       }
  //       if (ulNode.tagName === 'UL') {
  //         var specNode = document.createElement('li')
  //         var specLink = createSourceSearchPath(titleNode.textContent)
  //         specNode.innerHTML = '<a href="' + specLink + '" target="_blank">Source</a>'
  //         ulNode.appendChild(specNode)
  //       }
  //     })
  //   }
  //
  //   function createSourceSearchPath(query) {
  //     return 'https://github.com/search?utf8=%E2%9C%93&q=repo%3Avuejs%2Fvue+extension%3Ajs+' + encodeURIComponent(query) + '+&type=Code'
  //   }
  // }

  function initInterLinks () {
    var content = document.querySelector('.content.inter-linked')
    if (!content) return
    var isGuide = content.className.indexOf('guide') > -1
    if (isGuide) {
      var interLinks = [].slice.call(content.querySelectorAll('.api-link'))
      ,   section = content.querySelectorAll('h1')[0].textContent
      interLinks.forEach(function (interLink) {
        interLink.setAttribute('href', '/v1/api/' + encodeURIComponent(section.toLowerCase()) + '.html#' + findPriorTitle(interLink.parentNode))
      })
    } else {
      placeLinks('guide', 'View Guide', content)
    }

    function placeLinks (toPage, toText, content) {
      var section = content.querySelectorAll('h1')[0].textContent
      var titles = [].slice.call(content.querySelectorAll('h2'))
      titles.forEach(function (titleNode) {
        var ulNode = titleNode.parentNode.nextSibling
        ,   specNode = document.createElement('li')
        ,   specLink = createPath(toPage, section, titleNode.textContent)
        console.log(titleNode)
        specNode.innerHTML = '<p><a href="' + specLink + '">' + toText + '</a></p>'

        var i = 0
        while(i < 20) {
          console.log('ulNode', ulNode)
          if (ulNode.className === 'skip-interlink') {
            return
          } else if (ulNode.tagName !== 'UL') {
            ulNode = ulNode.nextSibling
            if (!ulNode) return titleNode.nextSibling.append(specNode)
          } else {
            return ulNode.appendChild(specNode)
          }
          i++
        }
      })
    }
    function findPriorTitle(sibling) {
      var i = 0
      while(i < 20) {
        sibling = sibling.previousSibling
        if (sibling && sibling.firstChild && sibling.firstChild.tagName === 'H2') return sibling.firstChild.id
        i++
      }
    }

    function createPath(toPage, section, subsection) {
      return '/v1/' + encodeURIComponent(toPage.toLowerCase()) + '/' + encodeURIComponent(section.toLowerCase()) + '.html#' + encodeURIComponent(subsection)
    }
  }

  function initLocationHashFuzzyMatching () {
    var hash = window.location.hash
    if (!hash) return
    var hashTarget = document.getElementById(hash)
    if (!hashTarget) {
      var normalizedHash = normalizeHash(hash)
      var possibleHashes = [].slice.call(document.querySelectorAll('[id]'))
        .map(function (el) { return el.id })
      possibleHashes.sort(function (hashA, hashB) {
        var distanceA = levenshteinDistance(normalizedHash, normalizeHash(hashA))
        var distanceB = levenshteinDistance(normalizedHash, normalizeHash(hashB))
        if (distanceA < distanceB) return -1
        if (distanceA > distanceB) return 1
        return 0
      })
      window.location.hash = possibleHashes[0]
    }

    function normalizeHash (rawHash) {
      return rawHash
        .toLowerCase()
        .replace(/\-(?:deprecated|removed|replaced|changed|obsolete)$/, '')
    }

    function levenshteinDistance (a, b) {
      var m = []
      if (!(a && b)) return (b || a).length
      for (var i = 0; i <= b.length; m[i] = [i++]) {}
      for (var j = 0; j <= a.length; m[0][j] = j++) {}
      for (var i = 1; i <= b.length; i++) {
        for (var j = 1; j <= a.length; j++) {
          m[i][j] = b.charAt(i - 1) === a.charAt(j - 1)
            ? m[i - 1][j - 1]
            : m[i][j] = Math.min(
              m[i - 1][j - 1] + 1,
              Math.min(m[i][j - 1] + 1, m[i - 1][j] + 1))
        }
      }
      return m[b.length][a.length]
    }
  }

  /**
   * Mobile burger menu button for toggling sidebar
   */

  function initMobileMenu () {
    var mobileBar = document.getElementById('mobile-bar')
    var sidebar = document.querySelector('.sidebar')
    var menuButton = mobileBar.querySelector('.menu-button')

    menuButton.addEventListener('click', function () {
      sidebar.classList.toggle('open')
    })

    document.body.addEventListener('click', function (e) {
      if (e.target !== menuButton && !sidebar.contains(e.target)) {
        sidebar.classList.remove('open')
      }
    })
  }

  /**
   * Doc version select
   */

  function initVersionSelect () {
    // version select
    var versionSelect = document.querySelector('.version-select')
    versionSelect && versionSelect.addEventListener('change', function (e) {
      var version = e.target.value
      var section = window.location.pathname.match(/\/v\d\/(\w+?)\//)[1]
      if (version === 'SELF') return
      window.location.assign(
        'http://' +
        version +
        (version && '.') +
        'vuejs.org/' + section + '/'
      )
    })
  }

  /**
   * Sub headers in sidebar
   */

  function initSubHeaders () {
    var each = [].forEach
    var main = document.getElementById('main')
    var header = document.getElementById('header')
    var sidebar = document.querySelector('.sidebar')
    var content = document.querySelector('.content')

    // build sidebar
    var currentPageAnchor = sidebar.querySelector('.sidebar-link.current')
    var isAPI = document.querySelector('.content').classList.contains('api')
    isAPI = false // Disabled 1/9/17 during setup
    if (currentPageAnchor || isAPI) {
      var allHeaders = []
      var sectionContainer
      if (isAPI) {
        sectionContainer = document.querySelector('.menu-root')
      } else {
        sectionContainer = document.createElement('ul')
        sectionContainer.className = 'menu-sub'
        currentPageAnchor.parentNode.appendChild(sectionContainer)
      }
      var headers = content.querySelectorAll('h2')
      if (headers.length) {
        each.call(headers, function (h) {
          sectionContainer.appendChild(makeLink(h))
          var h3s = collectH3s(h)
          allHeaders.push(h)
          allHeaders.push.apply(allHeaders, h3s)
          if (h3s.length) {
            sectionContainer.appendChild(makeSubLinks(h3s, isAPI))
          }
        })
      } else {
        headers = content.querySelectorAll('h3')
        each.call(headers, function (h) {
          sectionContainer.appendChild(makeLink(h))
          allHeaders.push(h)
        })
      }

      var animating = false
      sectionContainer.addEventListener('click', function (e) {
        e.preventDefault()
        if (e.target.classList.contains('section-link')) {
          sidebar.classList.remove('open')
          setActive(e.target)
          animating = true
          setTimeout(function () {
            animating = false
          }, 400)
        }
      }, true)

      // make links clickable
      allHeaders.forEach(makeHeaderClickable)

      smoothScroll.init({
        speed: 400,
        offset: 0
      })
    }

    var hoveredOverSidebar = false
    sidebar.addEventListener('mouseover', function () {
      hoveredOverSidebar = true
    })
    sidebar.addEventListener('mouseleave', function () {
      hoveredOverSidebar = false
    })

    // listen for scroll event to do positioning & highlights
    window.addEventListener('scroll', updateSidebar)
    window.addEventListener('resize', updateSidebar)

    function updateSidebar () {
      var doc = document.documentElement
      var top = doc && doc.scrollTop || document.body.scrollTop
      if (animating || !allHeaders) return
      var last
      for (var i = 0; i < allHeaders.length; i++) {
        var link = allHeaders[i]
        if (link.offsetTop > top) {
          if (!last) last = link
          break
        } else {
          last = link
        }
      }
      if (last)
      setActive(last.id, !hoveredOverSidebar)
    }

    function makeLink (h) {
      var link = document.createElement('li')
      var text = h.textContent.replace(/\(.*\)$/, '')
      link.innerHTML =
        '<a class="section-link" data-scroll href="#' + h.id + '">' +
          htmlEscape(text) +
        '</a>'
      return link
    }

    function htmlEscape (text) {
      return text
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
    }

    function collectH3s (h) {
      var h3s = []
      var next = h.nextSibling
      while (next && next.tagName !== 'H2') {
        if (next.tagName === 'H3') {
          h3s.push(next)
        }
        next = next.nextSibling
      }
      return h3s
    }

    function makeSubLinks (h3s, small) {
      var container = document.createElement('ul')
      if (small) {
        container.className = 'menu-sub'
      }
      h3s.forEach(function (h) {
        container.appendChild(makeLink(h))
      })
      return container
    }

    function setActive (id, shouldScrollIntoView) {
      var previousActive = sidebar.querySelector('.section-link.active')
      var currentActive = typeof id === 'string'
        ? sidebar.querySelector('.section-link[href="#' + id + '"]')
        : id
      if (currentActive !== previousActive) {
        if (previousActive) previousActive.classList.remove('active')
        currentActive.classList.add('active')
        if (shouldScrollIntoView) {
          var currentPageOffset = currentPageAnchor
            ? currentPageAnchor.offsetTop - 8
            : 0
          var currentActiveOffset = currentActive.offsetTop + currentActive.parentNode.clientHeight
          var sidebarHeight = sidebar.clientHeight
          var currentActiveIsInView = (
            currentActive.offsetTop >= sidebar.scrollTop &&
            currentActiveOffset <= sidebar.scrollTop + sidebarHeight
          )
          var linkNotFurtherThanSidebarHeight = currentActiveOffset - currentPageOffset < sidebarHeight
          var newScrollTop = currentActiveIsInView
            ? sidebar.scrollTop
            : linkNotFurtherThanSidebarHeight
              ? currentPageOffset
              : currentActiveOffset - sidebarHeight
          sidebar.scrollTop = newScrollTop
        }
      }
    }

    function makeHeaderClickable (link) {
      var wrapper = document.createElement('a')
      wrapper.href = '#' + link.id
      wrapper.setAttribute('data-scroll', '')
      link.parentNode.insertBefore(wrapper, link)
      wrapper.appendChild(link)
    }
  }
})()
