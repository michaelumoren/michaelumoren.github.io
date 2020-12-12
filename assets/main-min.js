var CASTER = CASTER || {};
! function(e) {
    "use strict";
    CASTER.header = {
        init: function() {
            CASTER.header.menuItemTrigger(), CASTER.header.hamburgerTrigger(), CASTER.header.dropdownInvert(), CASTER.header.colorizeLogo(), CASTER.header.goToSection(), CASTER.header.highlightActiveSectionOnMMenu(), CASTER.header.setSiteContentHeight()
        },
        menuItemTrigger: function() {
            (i.hasClass("left-sidebar-menu") || i.hasClass("left-hamburger-menu") || i.hasClass("fullscreen-hamburger-menu") || s < 991) && (e("#top-menu").find("li.has-children > a").off("click"), e("#top-menu").find("li.has-children > a").on("click", function(i) {
                return e(this).closest("li").siblings().find("ul.sub-menu").slideUp(), e(this).closest("li").siblings().removeClass("active"), e(this).closest("li").children("ul.sub-menu").slideToggle(), e(this).closest("li").toggleClass("active"), !1
            }))
        },
        initHeadsUp: function() {
            i.hasClass("sticky") && headsup({
                duration: .3,
                easing: "ease",
                delay: 0
            })
        },
        hamburgerTrigger: function() {
            a.length > 0 && a.on("click", function() {
                if (i.hasClass("fullscreen-hamburger-menu") && s > 991) {
                    var a = "#masthead.site-header #site-navigation .menu > li";
                    r.toggleClass("fullscreen-hamburger-menu-acive"), e(".main-navigation-wrap").toggleClass("fullscreen-hamburger-menu-open"), t.toggleClass("display-menu"), e(this).toggleClass("open"), e(this).hasClass("open") ? gsap.timeline().set(a, {
                        y: 50,
                        opacity: 0
                    }).set(".main-navigation-wrap", {
                        height: 0
                    }).set(".contact-info-wrap", {
                        opacity: 0
                    }).to(".main-navigation-wrap", {
                        height: "100%",
                        visibility: "visible",
                        opacity: 1,
                        ease: Power2.easeOut
                    }).to(a, {
                        y: 0,
                        opacity: 1,
                        ease: Power2.easeOut,
                        stagger: .04
                    }).to(".contact-info-wrap", {
                        opacity: 1,
                        ease: Power2.easeOut
                    }) : e("#top-menu ul.sub-menu").slideUp("fast", function() {
                        gsap.timeline().to(".contact-info-wrap", {
                            duration: .2,
                            opacity: 0,
                            ease: Power2.easeIn
                        }).to(a, {
                            duration: .2,
                            opacity: 0,
                            ease: Power2.easeIn,
                            stagger: .04,
                            clearProps: "opacity,transform"
                        }).to(".main-navigation-wrap", {
                            duration: .4,
                            height: 0,
                            ease: Power2.easeOut,
                            clearProps: "visibility,opacity,transform"
                        })
                    })
                } else if (i.hasClass("left-hamburger-menu") && s > 991) {
                    a = "#masthead.site-header #site-navigation .menu > li";
                    e(this).toggleClass("open"), t.toggleClass("display-menu"), e(this).hasClass("open") ? gsap.timeline().set(a, {
                        y: 25,
                        opacity: 0
                    }).to(t, {
                        left: 0,
                        opacity: 1,
                        ease: Power2.easeOut
                    }).to(a, {
                        y: 0,
                        opacity: 1,
                        ease: Power2.easeOut,
                        stagger: .04
                    }) : e("#top-menu ul.sub-menu").slideUp("fast", function() {
                        gsap.timeline().to(a, {
                            duration: .1,
                            opacity: 0,
                            ease: Power2.easeIn,
                            stagger: .04,
                            clearProps: "opacity,transform"
                        }).to(t, {
                            duration: .2,
                            left: -350,
                            opacity: 0,
                            ease: Power2.easeIn,
                            clearProps: "opacity,transform,left"
                        })
                    })
                } else {
                    a = "#masthead.site-header #site-navigation .menu > li";
                    e(this).toggleClass("open"), e(this).hasClass("open") ? gsap.timeline().to(t, {
                        duration: .3,
                        visibility: "visible",
                        opacity: 1,
                        ease: Power2.easeOut
                    }).to(a, {
                        duration: .3,
                        opacity: 1,
                        ease: Power2.easeOut,
                        stagger: .04
                    }) : e("#top-menu ul.sub-menu").slideUp("fast", function() {
                        gsap.timeline().to(a, {
                            duration: .1,
                            opacity: 0,
                            ease: Power2.easeIn,
                            stagger: .04,
                            clearProps: "opacity"
                        }).to(t, {
                            duration: .1,
                            opacity: 0,
                            ease: Power2.easeIn,
                            clearProps: "visibility,opacity"
                        })
                    })
                }
                return !1
            })
        },
        dropdownInvert: function() {
            if (s > 991) {
                var i = e("#masthead.standard #top-menu");
                i.find("ul[class*=invert-dropdown]").removeClass("invert-dropdown");
                var t = i.find("ul");
                t.css("display", "block"), t.each(function(i, t) {
                    var a = e(t),
                        o = e(window).width(),
                        n = a.offset();
                    o - (a.width() + n.left) < 50 && a.addClass("invert-dropdown")
                }), t.css("display", "")
            }
        },
        colorizeLogo: function() {
          e(window).on("scroll", function() {
            if(window.pageYOffset+40 > e("#section_0").offset().top + e("#section_0").outerHeight()){
                if(!e(".logo-brand").hasClass("mu_colorized")){
                  e(".logo-brand").addClass("mu_colorized")
                }
            }
            else{
                e(".logo-brand").removeClass("mu_colorized")
            }
          })
        },
        goToSection: function() {
          e("#top-menu a").on("click", function(ev){
            ev.preventDefault();
            var go_to_section = e(this).data("sectionId");
            $( "body,html" ).animate({
                scrollTop: e("#"+go_to_section).offset().top,
            }, 1000);
          })
        },
        highlightActiveSectionOnMMenu: function() {
          e(window).on("scroll", function() {
            if (window.pageYOffset < e("#section_1").offset().top) {
              e('#top-menu li').removeClass("current-menu-item");
              e('#top-menu a[data-section-id="section_0"]').parent("li").addClass("current-menu-item");
            }
            else if (window.pageYOffset >= e("#section_1").offset().top && window.pageYOffset < e("#section_2").offset().top) {
              e('#top-menu li').removeClass("current-menu-item");
              e('#top-menu a[data-section-id="section_1"]').parent("li").addClass("current-menu-item");
            }
            else if (window.pageYOffset >= e("#section_2").offset().top) {
              e('#top-menu li').removeClass("current-menu-item");
              e('#top-menu a[data-section-id="section_2"]').parent("li").addClass("current-menu-item");
            }
            // else if (window.pageYOffset >= e("#section_3").offset().top) {
            //   e('#top-menu li').removeClass("current-menu-item");
            //   e('#top-menu a[data-section-id="section_3"]').parent("li").addClass("current-menu-item");
            // }
          })
          e(window).trigger("scroll");
        },
        setSiteContentHeight: function() {
            var t = e(window).height() - (i.outerHeight(!0) + e("#footer").outerHeight(!0));
            s > 992 ? e("#content").css("min-height", t) : e("#content").css("min-height", "")
        }
    },  CASTER.portfolio = {
        init: function() {
            e("#portfolio-container").each(function() {
                CASTER.portfolio.initializePortfolio(this, "#filters-container-subcategory")
            }), e("#widget-portfolio-container-grid").each(function() {
                CASTER.portfolio.initializePortfolio(this, "#filters-container")
            });
            var i = e("#widget-portfolio-listing.listing-vertical");
            i.length > 0 && i.hasClass("effect-fade-in-up") && CASTER.portfolio.portfolioItemDisplayTypeFadeInUp(i, ".portfolio-list")
        },
        initializePortfolio: function(i, filters = "#filters-container,[id^=filters-container-subcategory]") {
            var t = e(i),
                a = {
                    // filters: "#filters-container,[id^=filters-container-subcategory]",
                    filters,
                    layoutMode: null == t.data("layoutmode") ? "grid" : t.data("layoutmode"),
                    sortToPreventGaps: !0,
                    mediaQueries: [{
                        width: 1150,
                        cols: null == t.data("large-desktop") ? 4 : t.data("large-desktop")
                    }, {
                        width: 800,
                        cols: null == t.data("tablet-landscape") ? 3 : t.data("tablet-landscape")
                    }, {
                        width: 750,
                        cols: null == t.data("tablet-portrait") ? 2 : t.data("tablet-portrait")
                    }, {
                        width: 700,
                        cols: null == t.data("mobile") ? 1 : t.data("mobile")
                    }],
                    defaultFilter: e("#filters-container").data("defaultfilter"),
                    animationType: t.data("animationtype"),
                    gapHorizontal: null == t.data("gaphorizontal") ? 0 : t.data("gaphorizontal"),
                    gapVertical: null == t.data("gapvertical") ? 0 : t.data("gapvertical"),
                    gridAdjustment: "responsive",
                    caption: null == t.data("captionanimation") ? "fadeIn" : t.data("captionanimation"),
                    displayType: null == t.data("displaytype") ? "fadeIn" : t.data("displaytype"),
                    displayTypeSpeed: 100,
                    lightboxDelegate: ".cbp-lightbox",
                    lightboxGallery: !0,
                    lightboxTitleSrc: "data-title",
                    lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',
                    plugins: {
                        loadMore: {
                            element: "#more-projects",
                            action: t.data("loadmoreaction"),
                            loadItems: t.data("loadnoofitems")
                        }
                    }
                };
            t.cubeportfolio(a, function() {
                var e = t.get(0).id;
                "portfolio-container-category" != e && "portfolio-container-tag" != e && "widget-portfolio-container-grid" != e || CASTER.portfolio.portfolioItemInitMagnificPopup(t), "widget-portfolio-container-grid" == e && "wide" == t.data("layoutmode") && t.hasClass("effect-fade-in-up") && CASTER.portfolio.portfolioItemDisplayTypeFadeInUp(t, ".cbp-item")
            }), t.on("onAfterLoadMore.cbp", function() {
                "widget-portfolio-container-grid" == t.get(0).id && CASTER.portfolio.portfolioItemInitMagnificPopup(t), e(".cbp-l-loadMore-link").hasClass("cbp-l-loadMore-stop") && e(".cbp-l-loadMore-noMoreLoading").html(t.data("button-text"))
            })
        },
        portfolioItemInitMagnificPopup: function(i) {
            i.find("[id^=cbp-item-video],[id^=cbp-item-audio]").each(function() {
                e(this).magnificPopup({
                    disableOn: 700,
                    type: "iframe",
                    mainClass: "mfp-fade",
                    removalDelay: 160,
                    preloader: !1,
                    fixedContentPos: !1
                })
            })
        },
        portfolioItemDisplayTypeFadeInUp: function(e, i) {
            var t = e.find(i),
                a = new ScrollMagic.Controller;
            t.each(function() {
                var e;
                e = gsap.to(this, {
                    ease: Sine.easeOut,
                    opacity: 1,
                    y: 0,
                    onComplete: function() {
                        e.kill()
                    }
                }), new ScrollMagic.Scene({
                    triggerElement: this,
                    triggerHook: "1"
                }).setTween(e).addTo(a)
            })
        }
    }, CASTER.documentOnResize = {
        init: function() {
            var i = e("#widget-portfolio-listing.listing-fullwidth-parallax");
            s = e(window).width(), CASTER.header.menuItemTrigger(), CASTER.header.initHeadsUp(), CASTER.header.dropdownInvert(), CASTER.header.setSiteContentHeight(), i.length > 0 && CASTER.widget.initParallax(i)
        }
    }, CASTER.documentOnReady = {
        init: function() {
            CASTER.header.init(), CASTER.documentOnReady.windowscroll()
        },
        windowscroll: function() {
            e(window).on("scroll", function() {
                i.hasClass("sticky") && CASTER.header.onepageScroller(), e(window).scrollTop() > 0 ? n.addClass("active") : n.removeClass("active")
            })
        }
    }, CASTER.documentOnLoad = {
        init: function() {
            CASTER.portfolio.init()
        }
    }, document.addEventListener("lazybeforeunveil", function(e) {
        var i = e.target.getAttribute("data-bg");
        i && (e.target.style.backgroundImage = "url(" + i + ")")
    });
    var i = e("#masthead.site-header"),
        t = e("#site-navigation"),
        a = e("#ham-trigger-wrap"),
        o = e('section[data-element_type="section"]'),
        n = e("#gotoTop"),
        r = e("body"),
        s = e(window).width();
    e(document).ready(CASTER.documentOnReady.init), e(window).load(CASTER.documentOnLoad.init), e(window).on("resize", CASTER.documentOnResize.init)
}(jQuery);