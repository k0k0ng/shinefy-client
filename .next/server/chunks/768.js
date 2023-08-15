exports.id = 768;
exports.ids = [768];
exports.modules = {

/***/ 8194:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4282, 23))

/***/ }),

/***/ 727:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3097));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3380, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2996))

/***/ }),

/***/ 3097:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2451);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_assets_logo_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2996);
/* harmony import */ var _styles_NavigationBar_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3576);
/* harmony import */ var _styles_NavigationBar_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_NavigationBar_css__WEBPACK_IMPORTED_MODULE_4__);
/* __next_internal_client_entry_do_not_use__ default auto */ 




const NavigationBar = ()=>{
    const [showMobileNav, setShowMobileNav] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isSticky, setIsSticky] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    // Add an event listener to track scrolling and set the sticky state accordingly
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const handleScroll = ()=>{
            if (window.scrollY > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        // Clean up the event listener on component unmount
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return(// Main Navigation
    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
        className: isSticky ? "sticky" : "",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: `absolute w-full navContainer ${isSticky ? "changeNavColor" : ""}`,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-wrap items-center justify-between mx-[5vw] lg:mx-[20vw] py-4",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                            href: "/",
                            className: "flex items-center navLogo",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    src: _public_assets_logo_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
                                    alt: "Shine Ranker Logo",
                                    width: 51,
                                    height: 52,
                                    className: "h-[51px] w-[52px] mr-2"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-white self-center font-Inter text-[22px] tracking-[1.76px] whitespace-nowrap",
                                    children: "SHINE RANKER"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex md:order-2 hamburger",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                "data-collapse-toggle": "navbar-sticky",
                                type: "button",
                                className: "inline-flex items-center w-11 h-10 justify-center text-sm text-gray-100 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-gray-200",
                                "aria-controls": "navbar-sticky",
                                onClick: ()=>{
                                    setShowMobileNav(!showMobileNav);
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                    className: "w-5 h-5",
                                    "aria-hidden": "true",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    viewBox: "0 0 17 14",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        stroke: "currentColor",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "2",
                                        d: "M1 1h15M1 7h15M1 13h15"
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex items-center justify-end hidden w-full md:flex md:w-auto md:order-1 navLinksCont",
                            id: "navbar-sticky",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                className: "flex flex-col justify-end items-center p-4 md:p-0 font-karla mt-4 md:flex-row md:mt-0 navLinks",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "/about",
                                            className: "block py-2 pl-3 pr-4 text-white rounded md:p-0 mr-[44px] transition hover:opacity-75",
                                            children: "About"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "/faq",
                                            className: "block py-2 pl-3 pr-4 text-white rounded md:p-0 mr-[44px] transition hover:opacity-75",
                                            children: "FAQ"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "/tools",
                                            className: "block py-2 pl-3 pr-4 text-white rounded md:p-0 mr-[44px] transition hover:opacity-75",
                                            children: "Tools"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "/pricing",
                                            className: "block py-2 pl-3 pr-4 text-white rounded md:p-0 mr-[44px] transition hover:opacity-75",
                                            children: "Pricing Plan"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "https://app.shineranker.com/signup_free/",
                                            type: "button",
                                            className: "text-white h-10 bg-purp hover:bg-purple-800 transition font-medium rounded-lg text-sm px-10 flex justify-center items-center font-karla mr-3",
                                            children: "Sign Up"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "https://app.shineranker.com/login/",
                                            type: "button",
                                            className: "text-white h-10 border-2 hover:bg-purple-800 transition hover:border-purple-800 font-medium rounded-lg text-sm px-10 flex justify-center items-center md:mr-0 font-karla ",
                                            children: "Log in"
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                }),
                showMobileNav && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("aside", {
                    className: "flex justify-end mobileLinksContainer",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                        className: " md:p-0 font-karla md:flex-row md:mt-0 mobileNavLinks",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "/about",
                                    className: "text-white h-16 hover:bg-purple-800 text-sm px-10 flex justify-end items-center font-karla",
                                    children: "About"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "/faq",
                                    className: "text-white h-16 hover:bg-purple-800 text-sm px-10 flex justify-end items-center font-karla",
                                    children: "FAQ"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "/tools",
                                    className: "text-white h-16 hover:bg-purple-800 text-sm px-10 flex justify-end items-center font-karla",
                                    children: "Tools"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "/pricing",
                                    className: "text-white h-16 hover:bg-purple-800 text-sm px-10 flex justify-end items-center font-karla",
                                    children: "Pricing Plan"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "https://app.shineranker.com/signup_free/",
                                    type: "button",
                                    className: "text-white h-16 hover:bg-purple-800 text-sm px-10 flex justify-end items-center font-karla",
                                    children: "Sign Up"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "https://app.shineranker.com/login/",
                                    type: "button",
                                    className: "text-white h-16 hover:bg-purple-800 text-sm px-10 flex justify-end items-center font-karla",
                                    children: "Log in"
                                })
                            })
                        ]
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavigationBar);


/***/ }),

/***/ 158:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src\\app\\layout.js","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"inter"}
var target_path_src_app_layout_js_import_Inter_arguments_subsets_latin_variableName_inter_ = __webpack_require__(7155);
var target_path_src_app_layout_js_import_Inter_arguments_subsets_latin_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(target_path_src_app_layout_js_import_Inter_arguments_subsets_latin_variableName_inter_);
// EXTERNAL MODULE: ./src/styles/globals.css
var globals = __webpack_require__(4315);
// EXTERNAL MODULE: ./src/styles/legalpages.css
var legalpages = __webpack_require__(5010);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1363);
;// CONCATENATED MODULE: ./src/components/Navbar/NavigationBar.js

const proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\LENOVO\Documents\GitHub\shineranker-home-v2\src\components\Navbar\NavigationBar.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const NavigationBar = (__default__);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(4178);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/assets/logo.svg
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.5387d068.svg","height":52,"width":51,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./src/components/Footer/Footer.js



const FooterPage = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: "bg-footerpurp",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8 text-center lg:text-left",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex justify-center",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            href: "/",
                            className: "flex items-center justify-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: logo,
                                    alt: "Shine Ranker Logo",
                                    width: 51,
                                    height: 52,
                                    className: "h-[51px] w-[52px] mr-2"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "text-white self-center font-semibold font-Inter text-[22px] tracking-[1.76px]",
                                    children: "SHINE RANKER"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "m-[10px] text-[18px] font-semibold text-white text-center",
                            children: "Earn Money With Shine Ranker Tools!"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: "mt-4 flex flex-col text-center md:flex-row flex-wrap gap-6 justify-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "/legal/terms-of-use",
                                        className: "text-white-700 transition hover:opacity-75",
                                        rel: "noreferrer",
                                        target: "_blank",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "text-gray-200",
                                            children: "Terms of Use"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "/legal/refund",
                                        className: "text-white-700 transition hover:opacity-75",
                                        rel: "noreferrer",
                                        target: "_blank",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "text-gray-200",
                                            children: "Refund & Cancelation"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "/legal/earnings-disclaimer",
                                        className: "text-white-700 transition hover:opacity-75",
                                        rel: "noreferrer",
                                        target: "_blank",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "text-gray-200",
                                            children: "Earnings Disclaimer"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "/legal/facebook-disclaimer",
                                        className: "text-white-700 transition hover:opacity-75",
                                        rel: "noreferrer",
                                        target: "_blank",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "text-gray-200",
                                            children: "Facebook Disclaimer"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "/legal/affiliate-promotions",
                                        className: "text-white-700 transition hover:opacity-75",
                                        rel: "noreferrer",
                                        target: "_blank",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "text-gray-200",
                                            children: "Affiliate Promotions"
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: "mt-8 flex gap-6 justify-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        href: "https://www.facebook.com/shineranker",
                                        rel: "noreferrer",
                                        target: "_blank",
                                        className: "text-white-700 transition hover:opacity-75",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "sr-only",
                                                children: "Facebook"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fa-brands fa-facebook fa-2xl text-white"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        href: "https://www.instagram.com/shineranker/",
                                        rel: "noreferrer",
                                        target: "_blank",
                                        className: "text-white-700 transition hover:opacity-75",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "sr-only",
                                                children: "Instagram"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fa-brands fa-instagram fa-2xl text-white"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        href: "https://discord.gg/BnfsXW2Jma",
                                        rel: "noreferrer",
                                        target: "_blank",
                                        className: "text-white-700 transition hover:opacity-75",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "sr-only",
                                                children: "Discord"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fa-brands fa-discord fa-2xl text-white"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        href: "https://www.youtube.com/@shinerankerofficial",
                                        rel: "noreferrer",
                                        target: "_blank",
                                        className: "text-white-700 transition hover:opacity-75",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "sr-only",
                                                children: "Youtube"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fa-brands fa-youtube fa-2xl text-white"
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const Footer = (FooterPage);

;// CONCATENATED MODULE: ./src/app/layout.js






const metadata = {
    title: "Create Next App",
    description: "Generated by create next app"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("html", {
        lang: "en",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("head", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        charSet: "utf-8"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        type: "image/svg+xml",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Shine Ranker AI website was created using NextJS."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Shine Ranker AI"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/images/Shine-Ranker-Logo-Favicon.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
                className: (target_path_src_app_layout_js_import_Inter_arguments_subsets_latin_variableName_inter_default()).className,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(NavigationBar, {}),
                    children,
                    /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
                ]
            })
        ]
    });
}


/***/ }),

/***/ 2996:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/logo.5387d068.svg","height":52,"width":51,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 3881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"16x16"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 3576:
/***/ (() => {



/***/ }),

/***/ 4315:
/***/ (() => {



/***/ }),

/***/ 5010:
/***/ (() => {



/***/ })

};
;