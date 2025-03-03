// ==UserScript==
// @name         Scratch Styles
// @namespace    github.com/redspacecat
// @version      0.3
// @description  Change scratch css
// @author       redspacecat
// @match        https://scratch.mit.edu/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=scratch.mit.edu
// @grant        none
// ==/UserScript==

//edit settings.css to change the colors
//i didn't do every page, so some are a bit broken

function addSheet(url) {
    document.getElementsByTagName("head")[0].appendChild(CSSLink(url))
}

function CSSLink(url) {
    let newStylesheet = document.createElement("link")
    newStylesheet.rel = "stylesheet"
    newStylesheet.href = url
    return(newStylesheet)
}

function urlHas(string) {
    return window.location.href.includes(string)
}

function standard() {
    addSheet("https://redspacecat.github.io/scratch-css/css/scratch3/normalize.min.css")
    addSheet("https://redspacecat.github.io/scratch-css/css/scratch3/common.css")
}

function isSupportedScratch3Page() {
    for (let i = 0; i < variousScratch3Pages.length; i++) {
        if (urlHas(variousScratch3Pages[i])) {
            return true
        }
    }
}

addSheet("https://redspacecat.github.io/scratch-css/css/settings.css")

let scratch2pages = ["users", "discuss", "mystuff", "cloudmonitor", "accounts"]
let variousScratch3Pages = ["parents", "educators", "developers", "credits", "faq", "download", "contact", "terms", "privacy", "cookies", "DMCA", "ideas", "about"]
let isScratch2 = false

for (let i = 0; i < scratch2pages.length; i++) {
    if (urlHas(scratch2pages[i])) {
        isScratch2 = true
    }
}

if (!isScratch2) {

    if (urlHas("explore")) {
        standard()
        addSheet("https://redspacecat.github.io/scratch-css/css/scratch3/explore.css")
    } else {
        if (urlHas("projects") & (!(urlHas("search")))) {
            standard()
            addSheet("https://redspacecat.github.io/scratch-css/css/scratch3/projects.css")
            addSheet("https://redspacecat.github.io/scratch-css/css/scratch3/editor.css")
        } else {
            if (urlHas("messages")) {
                standard()
                addSheet("https://redspacecat.github.io/scratch-css/css/scratch3/messages.css")
            } else {
                if (urlHas("community_guidelines")) {
                    standard()
                    addSheet("https://redspacecat.github.io/scratch-css/css/scratch3/guidelines.css")
                } else {
                    if (urlHas("studios")) {
                        standard()
                        addSheet("https://redspacecat.github.io/scratch-css/css/scratch3/studio.css")
                    } else {
                        if (urlHas("search")) {
                            standard()
                            addSheet("https://redspacecat.github.io/scratch-css/css/scratch3/search.css")
                        } else {
                            if (isSupportedScratch3Page() || window.location.pathname == "/") {
                                standard()
                                addSheet("https://redspacecat.github.io/scratch-css/css/scratch3/splash.css")
                            }
                        }
                    }
                }
            }
        }
    }

} else {
    if (urlHas("mystuff")) {
        addSheet("https://redspacecat.github.io/scratch-css/css/scratch2/main-mystuff.css")
        addSheet("https://redspacecat.github.io/scratch-css/css/scratch2/studio.css")
    } else {
        if (urlHas("discuss")) {
            addSheet("https://redspacecat.github.io/scratch-css/css/scratch2/forums/main.css")
            addSheet("https://redspacecat.github.io/scratch-css/css/scratch2/forums/themes-base.css")
            addSheet("https://redspacecat.github.io/scratch-css/css/scratch2/forums/default.css")
            addSheet("https://redspacecat.github.io/scratch-css/css/scratch2/forums/style.css")
            addSheet("https://redspacecat.github.io/scratch-css/css/scratch2/forums/pygments.css")
            addSheet("https://redspacecat.github.io/scratch-css/css/scratch2/forums/style2.css")
            addSheet("https://redspacecat.github.io/scratch-css/css/scratch2/forums/style3.css")
        } else {
            if (urlHas("cloudmonitor")) {
                addSheet("https://redspacecat.github.io/scratch-css/css/scratch2/main-cloudvarhistory.css")
            } else {
                if (urlHas("users")) {
                    addSheet("https://redspacecat.github.io/scratch-css/css/scratch2/main-profile.css")
                    addSheet("https://redspacecat.github.io/scratch-css/css/scratch2/profile.css")
                } else {
                    if (urlHas("accounts")) {
                        addSheet("https://redspacecat.github.io/scratch-css/css/scratch2/accounts-main.css")
                        addSheet("https://redspacecat.github.io/scratch-css/css/scratch2/accounts.css")

                    }
                }
            }
        }
    }
}
