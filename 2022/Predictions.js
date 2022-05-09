// https://www.redditstatic.com/desktop2x/Predictions.0b53b4c4291d2ca0ebec.js
// Retrieved at 5/9/2022, 4:20:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Predictions"], {
		"./src/lib/currency/centsToDollars/index.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return r
			}));
			var n = a("./src/lib/currency/cleanNumber/index.ts");

			function r(e, t) {
				const a = Object(n.a)(e),
					r = parseInt(a) / 100;
				return Math.floor(r) !== r || t ? r.toFixed(2) : String(r)
			}
		},
		"./src/lib/currency/cleanNumber/index.ts": function(e, t, a) {
			"use strict";

			function n(e) {
				return e.replace(/[^0-9.]/g, "").replace(/^0+/, "") || "0"
			}
			a.d(t, "a", (function() {
				return n
			}))
		},
		"./src/lib/currency/currencies.ts": function(e, t, a) {
			"use strict";
			a.d(t, "b", (function() {
				return n
			})), a.d(t, "c", (function() {
				return l
			})), a.d(t, "d", (function() {
				return s
			})), a.d(t, "a", (function() {
				return i
			})), a.d(t, "f", (function() {
				return o
			})), a.d(t, "g", (function() {
				return c
			})), a.d(t, "e", (function() {
				return m
			}));
			var n, r = a("./node_modules/fbt/lib/FbtPublic.js");
			! function(e) {
				e.Real = "real", e.Crypto = "crypto", e.Reddit = "reddit"
			}(n || (n = {}));
			const l = "USD",
				s = "ETH",
				i = "COINS",
				o = [s, "BTC"],
				c = [i, "SUBREDDIT_POINTS", "GAME_TOKENS"],
				m = {
					COINS: () => r.fbt._("Coins", null, {
						hk: "1T2Y4p"
					}),
					SUBREDDIT_POINTS: () => r.fbt._("Subreddit points", null, {
						hk: "1ytOO3"
					}),
					GAME_TOKENS: () => r.fbt._("Game tokens", null, {
						hk: "16BUrU"
					})
				}
		},
		"./src/lib/getMobileOperatingSystem/index.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return n
			})), a.d(t, "b", (function() {
				return r
			})), a.d(t, "c", (function() {
				return l
			}));
			const n = "Android",
				r = () => {
					const e = navigator.userAgent || navigator.vendor || window.opera;
					return /android/i.test(e) ? n : /iPad|iPhone|iPod/.test(e) && !window.MSStream ? "iOS" : "unknown"
				},
				l = () => r() === n || "iOS" === r()
		},
		"./src/lib/localizeCurrency/index.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return c
			})), a.d(t, "b", (function() {
				return m
			}));
			var n = a("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				r = a("./src/lib/currency/centsToDollars/index.ts"),
				l = a("./src/lib/currency/currencies.ts"),
				s = a("./src/lib/prettyPrintNumber/index.ts"),
				i = a("./src/reddit/helpers/governance/tokens.ts"),
				o = a("./src/reddit/constants/intlSupport.ts");
			const c = function(e) {
					let {
						locale: t = n.DEFAULT_LOCALE,
						pretty: a,
						formatOptions: r
					} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					const l = Number(e);
					return Object(o.c)() ? a ? Object(s.b)(l) : new Intl.NumberFormat(t, r).format(l) : d(l, a, t)
				},
				m = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					const {
						locale: a = n.DEFAULT_LOCALE,
						pretty: s,
						formatOptions: c,
						displayConversion: m,
						forceDecimals: h,
						currency: g = t.currency || (t.type ? p(t.type) : l.c),
						type: b = t.type || (t.currency ? u(t.currency) : l.b.Real)
					} = t, k = Number(e), w = String(e);
					switch (b) {
						case l.b.Reddit: {
							const e = l.e[g],
								t = e ? e() : g;
							return Object(o.c)() ? new Intl.NumberFormat(a, {
								currencyDisplay: "symbol",
								...c
							}).format(k) + " " + t : d(k, s, a, t)
						}
						case l.b.Crypto: {
							if (s) {
								return Object(i.c)(w, m) + " " + g
							}
							const e = Number(Object(i.b)(w, m));
							return Object(o.c)() ? new Intl.NumberFormat(a, {
								style: "currency",
								currency: g,
								currencyDisplay: "symbol",
								minimumFractionDigits: 0,
								maximumFractionDigits: 0,
								...c
							}).format(e) : d(e, s, a, g)
						}
						case l.b.Real:
						default: {
							const e = Number(Object(r.a)(w, h));
							return Object(o.c)() ? new Intl.NumberFormat(a, {
								style: "currency",
								currency: g,
								currencyDisplay: "symbol",
								notation: s ? "compact" : "standard",
								...c
							}).format(e) : d(e, s, a, g)
						}
					}
				},
				d = (e, t, a, n) => {
					return (t ? Object(s.b)(e) : e.toLocaleString(a)) + (n ? " " + n : "")
				},
				u = e => l.g.includes(e.toUpperCase()) ? l.b.Reddit : l.f.includes(e.toUpperCase()) ? l.b.Crypto : l.b.Real,
				p = e => {
					switch (e) {
						case l.b.Crypto:
							return l.d;
						case l.b.Reddit:
							return l.a;
						case l.b.Real:
						default:
							return l.c
					}
				}
		},
		"./src/reddit/components/CollapsibleFAQ/index.m.less": function(e, t, a) {
			e.exports = {
				collapsibleFAQ: "PGMuR8fr8VizHP4fajECO",
				collapsibleFaq: "PGMuR8fr8VizHP4fajECO",
				questionButton: "AE_-OfcuQcVv1sMNAnYez",
				buttonContent: "_3GpGGAjkKUtSIydzuhDgjk",
				collapseIcon: "GcBEian3rJp0dqdStxeaG",
				collapsibleAnswer: "_2aCJykcYH0l0L0J29lNN6X",
				isOpen: "_1epMyDuMGgpwMk-QoPqYMi"
			}
		},
		"./src/reddit/components/CollapsibleFAQ/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				r = a.n(n),
				l = a("./src/reddit/components/CollapsibleFAQ/index.m.less"),
				s = a.n(l),
				i = a("./src/lib/classNames/index.ts"),
				o = a("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				c = a("./src/reddit/icons/svgs/ChevronUp/index.tsx");
			class m extends r.a.Component {
				constructor(e) {
					super(e), this.toggleOpen = () => {
						this.setState({
							isOpen: !this.state.isOpen
						})
					}, this.state = {
						isOpen: !e.defaultClosed
					}
				}
				render() {
					const {
						className: e,
						question: t,
						children: a
					} = this.props, {
						isOpen: n
					} = this.state, l = n ? s.a.isOpen : "";
					return r.a.createElement("div", {
						className: Object(i.a)(e, s.a.collapsibleFAQ)
					}, r.a.createElement("button", {
						className: s.a.questionButton,
						type: "button",
						onClick: this.toggleOpen
					}, r.a.createElement("span", {
						className: s.a.buttonContent,
						tabIndex: -1
					}, t, n ? r.a.createElement(c.a, {
						className: s.a.collapseIcon
					}) : r.a.createElement(o.a, {
						className: s.a.collapseIcon
					}))), r.a.createElement("div", {
						className: Object(i.a)(s.a.collapsibleAnswer, l)
					}, a))
				}
			}
			t.a = m
		},
		"./src/reddit/components/MarketingPageFooter/index.m.less": function(e, t, a) {
			e.exports = {
				marketingPageFooter: "_3BwBOzWryMj3__GUbbUsfT",
				marketingPageFooterInner: "_30YqpAvDOv6bhMsdX4RBmh",
				linkContainer: "_3k49tjCFDJWYNMxa7F_Vcz",
				linkCol: "Kc3eh30cKiJsqGyYdTomf",
				linkBoldCol: "NdUUYBbykS5XarNMBnwW8",
				link: "_2__-I0A5TrnEaHBIKzBzWG",
				linkColInner: "Qeqi5He8ogV_wEJHq4JuY",
				linkItem: "_2faDmx1pVndPEOOWcvmbzy",
				legal: "_37R5bPLs9vyWkel2akHN9v",
				legalItem: "_3sfkqPfhkeoURTGRzBv1TP",
				legalLink: "_38avtjw3edhexhYWmJx1Rw"
			}
		},
		"./src/reddit/components/MarketingPageFooter/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				r = a.n(n),
				l = a("./src/reddit/components/MarketingPageFooter/index.m.less"),
				s = a.n(l),
				i = a("./src/lib/classNames/index.ts");
			const {
				fbt: o
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => r.a.createElement("div", {
				className: Object(i.a)(e.className, s.a.marketingPageFooter)
			}, r.a.createElement("div", {
				className: Object(i.a)(e.className, s.a.marketingPageFooterInner)
			}, r.a.createElement("div", {
				className: s.a.linkContainer
			}, r.a.createElement("div", {
				className: s.a.linkCol
			}, r.a.createElement("ul", {
				className: s.a.linkColInner
			}, r.a.createElement("li", {
				className: s.a.linkItem
			}, r.a.createElement("a", {
				className: s.a.link,
				href: "https://www.redditinc.com/"
			}, o._("about", null, {
				hk: "3IO4c7"
			}))), r.a.createElement("li", {
				className: s.a.linkItem
			}, r.a.createElement("a", {
				className: s.a.link,
				href: "https://www.redditinc.com/careers"
			}, o._("careers", null, {
				hk: "2GATRU"
			}))), r.a.createElement("li", {
				className: s.a.linkItem
			}, r.a.createElement("a", {
				className: s.a.link,
				href: "https://www.redditinc.com/press"
			}, o._("press", null, {
				hk: "iUiGg"
			}))))), r.a.createElement("div", {
				className: s.a.linkCol
			}, r.a.createElement("ul", {
				className: s.a.linkColInner
			}, r.a.createElement("li", {
				className: s.a.linkItem
			}, r.a.createElement("a", {
				className: s.a.link,
				href: "https://www.redditinc.com/advertising"
			}, o._("advertise", null, {
				hk: "RYuIn"
			}))), r.a.createElement("li", {
				className: s.a.linkItem
			}, r.a.createElement("a", {
				className: s.a.link,
				href: "http://www.redditblog.com/"
			}, o._("blog", null, {
				hk: "4xzWuA"
			}))), r.a.createElement("li", {
				className: s.a.linkItem
			}, r.a.createElement("a", {
				className: s.a.link,
				href: "https://www.reddithelp.com"
			}, o._("help", null, {
				hk: "36XyzA"
			}))))), r.a.createElement("div", {
				className: Object(i.a)(s.a.linkCol, s.a.linkBoldCol)
			}, r.a.createElement("ul", {
				className: s.a.linkColInner
			}, r.a.createElement("li", {
				className: s.a.linkItem
			}, r.a.createElement("a", {
				className: s.a.link,
				href: "https://www.reddit.com/coins"
			}, o._("reddit coins", null, {
				hk: "3Ts6tu"
			}))), r.a.createElement("li", {
				className: s.a.linkItem
			}, r.a.createElement("a", {
				className: s.a.link,
				href: "https://www.reddit.com/premium"
			}, o._("reddit premium", null, {
				hk: "3vPbLO"
			}))))), r.a.createElement("div", {
				className: Object(i.a)(s.a.linkCol, s.a.linkBoldCol)
			}, r.a.createElement("ul", {
				className: s.a.linkColInner
			}, r.a.createElement("li", {
				className: s.a.linkItem
			}, r.a.createElement("a", {
				className: s.a.link,
				href: "https://www.facebook.com/reddit/"
			}, o._("Facebook", null, {
				hk: "47DT2F"
			}))), r.a.createElement("li", {
				className: s.a.linkItem
			}, r.a.createElement("a", {
				className: s.a.link,
				href: "https://twitter.com/reddit"
			}, o._("Twitter", null, {
				hk: "3aUv7u"
			}))), r.a.createElement("li", {
				className: s.a.linkItem
			}, r.a.createElement("a", {
				className: s.a.link,
				href: "https://www.instagram.com/reddit/"
			}, o._("Instagram", null, {
				hk: "dVIRX"
			})))))), r.a.createElement("ul", {
				className: s.a.legal
			}, r.a.createElement("li", {
				className: s.a.legalItem
			}, r.a.createElement("a", {
				className: s.a.legalLink,
				href: "https://www.redditinc.com/policies/content-policy"
			}, o._("content policy", null, {
				hk: "4ptiaZ"
			}))), r.a.createElement("li", {
				className: s.a.legalItem
			}, r.a.createElement("a", {
				className: s.a.legalLink,
				href: "https://www.reddit.com/help/privacypolicy"
			}, o._("privacy policy", null, {
				hk: "1ybjnz"
			}))), r.a.createElement("li", {
				className: s.a.legalItem
			}, r.a.createElement("a", {
				className: s.a.legalLink,
				href: "https://www.redditinc.com/policies/user-agreement"
			}, o._("user agreement", null, {
				hk: "4puRxC"
			}))), r.a.createElement("li", {
				className: s.a.legalItem
			}, r.a.createElement("a", {
				className: s.a.legalLink,
				href: "https://www.reddit.com/help/healthycommunities/"
			}, o._("mod policy", null, {
				hk: "1VvAdM"
			}))), r.a.createElement("li", {
				className: s.a.legalItem
			}, o._("© {year} Reddit, Inc. All rights reserved", [o._param("year", (new Date).getFullYear().toString())], {
				hk: "23FUx6"
			})))))
		},
		"./src/reddit/components/PowerupsCtaButton/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return c
			}));
			var n = a("./node_modules/react/index.js"),
				r = a.n(n),
				l = a("./node_modules/react-redux/es/index.js"),
				s = a("./src/reddit/controls/Button/index.tsx"),
				i = a("./src/reddit/selectors/gold/powerups/index.ts");
			const {
				fbt: o
			} = a("./node_modules/fbt/lib/FbtPublic.js"), c = e => {
				let {
					className: t,
					onClick: a,
					disabled: n
				} = e;
				const c = Object(l.e)(i.w);
				return r.a.createElement(s.t, {
					priority: s.c.Primary,
					className: t,
					onClick: a,
					isFullWidth: !0,
					disabled: n
				}, (() => c ? o._("Use Your Premium Powerup", null, {
					hk: "JJNaN"
				}) : o._("Become a Hero", null, {
					hk: "3IZNw3"
				}))())
			}
		},
		"./src/reddit/components/PredictionsSignupModal/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_3jhYZOhETFOfGuY1494l5x",
				closeButton: "_3HTLeavHIiZ68NrVgyV_C2",
				closeIcon: "YOx7GuTfDBMxN7sgdKtdM",
				headerImageContainer: "aZOwdDn6WqBErlbTLqsbl",
				headerImage: "_3iC9Ph3IZYOkUfGIqepoiB",
				body: "_3E-Ip_XqUIV73dzcbMrmIC",
				titleContainer: "_3Wm7di_hNOzFWK6HAJ2wE8",
				titleText: "_3GgvGkeJhpE0e6Tq8zkx6e",
				subtitleText: "_3cNvc9srH_eAd5ps1ks6tz",
				disclaimer: "_3q3Y40VQqbXYn73zPGK3na",
				radioContainer: "_3djdqNXpr3kbvfubm2MQeY",
				radioOption: "_1RC0vqFiEM7grdtyZ9ewbg",
				background: "_2uNABKqcrU96CxMgcT_J08",
				diagonalLayoutPrimary: "_6eegpaNZgagYUXUpwtGhn",
				diagonalLayoutSecondary: "aFzJXqeTYkNK6-VODEWed",
				circle: "_1qJxGxGUM5fOeA5ZiNY-hA",
				lineCircle: "C5VG-XT5Wfhpe6G2nIYc1",
				circleOrangeHollow: "_1wGMQvlZuGcpWPTaZXmLBf",
				dotCircle1: "_1F4QCG2x550stenFj9PYVO",
				circleGreenFilled: "_3TWBikuipkOaSFXndprUHY",
				circleGreenHollow: "_35XHodgaB-foW_k8Bqp-b1",
				circleYellowHollow: "_3z3LJufjEtVjCubLi7pExK",
				dotCircle2: "_1OqxEAH817goK-8MERcU5L"
			}
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, a) {
			"use strict";
			a.d(t, "b", (function() {
				return l
			})), a.d(t, "c", (function() {
				return s
			})), a.d(t, "a", (function() {
				return i
			}));
			var n = a("./node_modules/bignumber.js/bignumber.js"),
				r = a("./src/lib/prettyPrintNumber/index.ts");

			function l(e, t) {
				const a = new n.BigNumber(e),
					r = new n.BigNumber(t || 1);
				return a.dividedToIntegerBy(r).toString()
			}

			function s(e, t) {
				return Object(r.b)(parseInt(l(e, t), 10))
			}

			function i(e, t) {
				const a = new n.BigNumber(e),
					r = new n.BigNumber(t || 1);
				return a.multipliedBy(r).toFixed(0)
			}
		},
		"./src/reddit/icons/svgs/ChevronUp/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				r = a.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("polygon", {
				fill: "inherit",
				transform: "translate(6.029200, 6.044700) scale(1, -1) translate(-6.029200, -6.044700)",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/pages/Powerups/FaqSection.m.less": function(e, t, a) {
			e.exports = {
				faqSection: "_3jsS_1eJLc5H9_KZoN4bjn",
				faqSectionContent: "_1ZKHCXoF0MZoltuQG6eMK7",
				circleFaqDotted: "_1a7IfqNingZ5xZdLFfdsUW",
				circleFaqCyanSmall: "_1gx9nSc0SPQ9vmu6agjYl1",
				circleFaqYellowSmall: "_27wsbpO92APe7Nx2gqtF3O",
				circleFaqCyanBig: "_2P_VDzA8HhCIY8OVNJyUFx",
				circleFaqOrange: "_2pZa4VdYPPxEiDZG6Uw4Np",
				circleFaqYellowHollow: "_2r9-_jTCcEXIPMCokd0pGz",
				faqQuestionMark: "_3L6OKsNts2VrGVhkGZc4Wr",
				faqQuestionMarkTopLeft: "_3gY99knbNx7OcqOcfEJ2C6",
				faqQuestionMarkTopRight: "_3m9Cti_f4SYxMJNW2R5xIM",
				faqQuestionMarkLeft: "_34VQEfji42SpnmVXdTGLJA",
				faqQuestionMarkBottomRight: "_1Q0iQQnesHKoX398Xiw3kN",
				circleFaqYellowWithBolt: "_3BPWG5PqFn4DI2osSkAxvK",
				boltInCircleFaqYellow: "_2taFb8NS_KeC523kHSIj_i",
				faqQuestionMarkWithBolt: "_3xet1Sbc6baqNEbgRNs3il",
				faqHeading: "_2rgbJ2uCJrqPWAl9PE5G-9",
				faqs: "_2bP1iHgOFrtA_3AK9RRT36",
				faqMoreQuestionsHeading: "ttDZSbQIXUGMeea-vo2hp",
				fullFaqsButton: "_2XtfRS9mnRStbRWQaYUcCP",
				faqTryOutHeading: "_3k8SqLlh0ukFnY9V8FwM3R",
				faqTryOutSubheading: "_3PesDeGd65rVhZz2neXjlF",
				ctaLetsDoThisButton: "_16zoFIrRalpDu0fjqJ65Xm",
				ctaButtonCirclesAndBolt: "_1_yREmGPLRc5VJ_KfaTzId",
				circleFaqCtaStriped: "_3Ep0mXOVeFCAEUPNiqMTHk",
				circleFaqCtaYellowBig: "_2XXZXCJGJnUh8IZjYnGdhw",
				boltInCircleFaqCtaYellow: "_2QKl-Y6l1LDaYfROn1chi6",
				circleFaqCtaCyanHollow: "_1hu7wVhww6y-rSj9PuoeEr"
			}
		},
		"./src/reddit/pages/Powerups/FaqSection.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "b", (function() {
				return b
			})), a.d(t, "a", (function() {
				return _
			}));
			var n = a("./src/config.ts"),
				r = a("./node_modules/react/index.js"),
				l = a.n(r),
				s = a("./node_modules/react-redux/es/index.js"),
				i = a("./src/lib/classNames/index.ts"),
				o = a("./src/reddit/components/CollapsibleFAQ/index.tsx"),
				c = a("./src/reddit/controls/Button/index.tsx"),
				m = a("./src/reddit/selectors/gold/powerups/modSignup.ts"),
				d = a("./src/reddit/selectors/user.ts"),
				u = a("./src/reddit/pages/Powerups/FaqSection.m.less"),
				p = a.n(u);
			const {
				fbt: h
			} = a("./node_modules/fbt/lib/FbtPublic.js"), g = [{
				prompt: () => h._("How will my community know when Powerups are enabled?", null, {
					hk: "Q0fGk"
				}),
				answer: function() {
					return h._("When Powerups are enabled, a dedicated Powerups tab (on mobile) or a module in the right side menu (on web) will be added to your community where your members will see information about Powerups. They can learn about what features Powerups unlock (such as GIFs, emojis, and achievements) and how Powerups work. Some communities have used an announcement or sticky post about enabling the feature where they told members what perks they could unlock. We recommend doing the same.", null, {
						hk: "1jO63"
					})
				}
			}, {
				prompt: () => h._("What kind of moderator tools and permissions do Powerups have?", null, {
					hk: "3Rrxks"
				}),
				answer: function() {
					return l.a.createElement(l.a.Fragment, null, h._("We've built Powerups with feedback from moderators and added a few different controls that let you customize how you want Powerups to work in your community.", null, {
						hk: "4beNqr"
					}), l.a.createElement("br", null), l.a.createElement("br", null), h._("Mods of communities that have Powerups enabled can:", null, {
						hk: "3JWLHJ"
					}), l.a.createElement("ul", null, l.a.createElement("li", null, "• ", h._("Access all Powerups perks", null, {
						hk: "4iqCkq"
					})), l.a.createElement("li", null, "• ", h._("Can upload up to 20 custom emoji images (.png, .jpeg, .jpg, .heic are all supported)", null, {
						hk: "150yOT"
					})), l.a.createElement("li", null, "• ", h._("Can turn off GIFs", null, {
						hk: "2ulUhF"
					})), l.a.createElement("li", null, "• ", h._("Manage video controls and permissions. So, if videos aren't allowed in your community, then HD video won't be unlocked along with the other perks", null, {
						hk: "lAGuc"
					}))))
				}
			}, {
				prompt: () => h._("What happens if my community doesn’t unlock Powerups?", null, {
					hk: "qZaeO"
				}),
				answer: function() {
					return l.a.createElement(l.a.Fragment, null, h._("To unlock Powerups perks, communities need 25 powerups. If your community doesn’t get to 25 powerups, then the perks will remain locked for the majority of the community. (But those who have contributed a powerup unlock perks for themselves right away.)", null, {
						hk: "1SvUvT"
					}), l.a.createElement("br", null), l.a.createElement("br", null), h._("However, getting to 25 is easier than you may think. All Reddit Premium members can apply the monthly powerup that comes with their subscription to your community, and members who don’t have Reddit Premium can purchase powerups on the web. (Sorry, this isn’t available on mobile yet.)", null, {
						hk: "3JSZJc"
					}))
				}
			}, {
				prompt: () => h._("Which communities can enable Powerups?", null, {
					hk: "4zVdMW"
				}),
				answer: function() {
					return h._("Safe for Work (SFW) communities with 1,000 members or more can enable Powerups and join the open beta. Also, if you’re a community that already has Special Memberships enabled, Powerups won’t work for you.", null, {
						hk: "12qOw5"
					})
				}
			}, {
				prompt: () => h._("Can I disable Powerups after I’ve turned them on for my community?", null, {
					hk: "2SpQyV"
				}),
				answer: function() {
					return h._("No, because subscriptions from your community members help unlock Powerup perks, moderators can’t disable the feature. So before you enable Powerups, be absolutely sure it’s right for you and your community.", null, {
						hk: "4zJrwH"
					})
				}
			}, {
				prompt: () => h._("Can I get a preview of Powerups?", null, {
					hk: "cTFsH"
				}),
				answer: function() {
					return h._("Not in your community, but if you’d like to see Powerups in action, check out some of the communities that have successfully powered up such as r/thebachelor, r/tiktokcringe, and r/python.", null, {
						hk: "2u4guo"
					})
				}
			}], b = e => {
				let {
					openModal: t,
					modSubredditsInfo: a
				} = e;
				return Object(s.e)(m.b) ? l.a.createElement("div", {
					className: p.a.faqSection
				}, l.a.createElement("div", {
					className: Object(i.a)(p.a.faqSectionContent, p.a.contentWrapper)
				}, l.a.createElement(k, null), l.a.createElement(w, null), l.a.createElement(f, null), l.a.createElement("h2", {
					className: p.a.faqHeading
				}, h._("Questions about Powerups", null, {
					hk: "nzxYw"
				})), l.a.createElement("div", {
					className: p.a.faqs
				}, g.map((e, t) => {
					let {
						prompt: a,
						answer: n
					} = e;
					return l.a.createElement(o.a, {
						defaultClosed: !0,
						question: a(),
						key: t
					}, n())
				})), l.a.createElement("h3", {
					className: p.a.faqMoreQuestionsHeading
				}, h._("Have more questions? We've got answers.", null, {
					hk: "3Entyj"
				})), l.a.createElement(c.t, {
					className: p.a.fullFaqsButton,
					priority: c.c.Secondary,
					href: "https://mods.reddithelp.com/hc/en-us/articles/4403699823629",
					kind: c.b.ExternalLink,
					target: "_blank"
				}, h._("View Full FAQs", null, {
					hk: "1eOLlL"
				})), l.a.createElement("h2", {
					className: p.a.faqTryOutHeading
				}, h._("Try out Powerups today", null, {
					hk: "17RjMt"
				})), l.a.createElement("h3", {
					className: p.a.faqTryOutSubheading
				}, h._("Ok, you've made it to the bottom of the page. What do you think? Are Powerups for your community?", null, {
					hk: "3062Vv"
				})), l.a.createElement(c.k, {
					onClick: t,
					disabled: !(null == a ? void 0 : a.length),
					priority: c.c.Primary,
					className: p.a.ctaLetsDoThisButton
				}, h._("Let's Do This!", null, {
					hk: "6CnFH"
				})), l.a.createElement(y, null))) : null
			}, k = e => {
				let {
					hideBolt: t
				} = e;
				return l.a.createElement(l.a.Fragment, null, l.a.createElement("div", {
					className: Object(i.a)(p.a.faqQuestionMark, p.a.faqQuestionMarkWithBolt)
				}), l.a.createElement("div", {
					className: p.a.circleFaqYellowWithBolt
				}, !t && l.a.createElement("img", {
					alt: "Powerup bolt",
					className: p.a.boltInCircleFaqYellow,
					src: `${n.a.assetPath}/img/powerups/bolt.png`
				})))
			}, w = () => l.a.createElement(l.a.Fragment, null, l.a.createElement("div", {
				className: p.a.circleFaqCyanSmall
			}), l.a.createElement("div", {
				className: p.a.circleFaqDotted,
				style: {
					backgroundImage: `url(${n.a.assetPath}/img/powerups/dotcircle.png)`
				}
			}), l.a.createElement("div", {
				className: p.a.circleFaqYellowSmall
			}), l.a.createElement("div", {
				className: p.a.circleFaqCyanBig
			}), l.a.createElement("div", {
				className: p.a.circleFaqOrange
			}), l.a.createElement("div", {
				className: p.a.circleFaqYellowHollow
			})), f = () => l.a.createElement(l.a.Fragment, null, l.a.createElement("div", {
				className: Object(i.a)(p.a.faqQuestionMark, p.a.faqQuestionMarkTopLeft)
			}), l.a.createElement("div", {
				className: Object(i.a)(p.a.faqQuestionMark, p.a.faqQuestionMarkTopRight)
			}), l.a.createElement("div", {
				className: Object(i.a)(p.a.faqQuestionMark, p.a.faqQuestionMarkLeft)
			}), l.a.createElement("div", {
				className: Object(i.a)(p.a.faqQuestionMark, p.a.faqQuestionMarkBottomRight)
			})), _ = e => {
				let {
					hideBolt: t
				} = e;
				return l.a.createElement(l.a.Fragment, null, l.a.createElement(k, {
					hideBolt: t
				}), l.a.createElement(w, null), l.a.createElement(f, null))
			}, y = () => {
				const e = Object(s.e)(d.cb);
				return l.a.createElement("div", {
					className: p.a.ctaButtonCirclesAndBolt
				}, l.a.createElement("div", {
					className: p.a.circleFaqCtaStriped,
					style: {
						backgroundImage: e ? `url(${n.a.assetPath}/img/powerups/linecircle-orange.png)` : `url(${n.a.assetPath}/img/powerups/linecircle-blue.png)`
					}
				}), l.a.createElement("div", {
					className: p.a.circleFaqCtaYellowBig
				}, l.a.createElement("img", {
					alt: "Powerup bolt",
					className: p.a.boltInCircleFaqCtaYellow,
					src: `${n.a.assetPath}/img/powerups/bolt.png`
				})), l.a.createElement("div", {
					className: p.a.circleFaqCtaCyanHollow
				}))
			}
		},
		"./src/reddit/pages/Powerups/HeadingSection.m.less": function(e, t, a) {
			e.exports = {
				contentWrapper: "FIkrXGGm6_yR7jVsi9YbD",
				animatedCircle: "_3XbS54EqzA2cTpCg9Sh5Ya",
				animateTransformX: "e0zYrGJDducQDaejxfXn9",
				bodyText: "CkIU8OEGXvN26TDGW5g2l",
				headingSection: "_2wgjBcQ3TpkXrp1kfnbKd-",
				headingContent: "_3_uly-IS81U5ig_2SODw1D",
				headingArt: "EIx4Y06ZrIhzvAZF4-0F-",
				headingText: "_93_Y4zmf5c30W0HwwKqWa",
				powerupsMarketingImageContainer: "_3GgEDOY6yCBrLu_DNhqEeN",
				powerupsMarketingImage: "_34O94Eh4GC8JUzaaTCZEcV",
				fallbackStaticImage: "fJUgRxC1hjS7od7cM-AWG",
				heading: "_2ze91944nQz0QAKIZGezm1",
				isNightmodeOn: "_1vuvl6ciKFMtjfQMDK6tyJ",
				powerupsLogo: "_1GeGuxuBWvNj5ZEIhQe5Xu",
				subheading: "_1js-Rmth_fVU-2FRbz_buf",
				description: "_1Vomcyk98IXfFgKwavGRqR",
				modWarning: "_2R9jUuTk8pjdgMfUW3KGpW",
				modWarningItalic: "_30FZ3NbPXSW3xK8YdIxT7l",
				modWarningFooter: "_3c7w8IQ7W6GZDhj3bmG34k",
				modWarningTop: "_2jryBH7GCOxOk_BRmoKbl9",
				modWarningIcon: "h8gk_KoA-_B5hbqivR7iY",
				powerupsHeadingImg: "_1K6Xmpf_UORE99sukHFDlE",
				ctaButton: "_3Ix_Voar1gEgFjy_e6LL9t",
				active: "_3DvbQU8L4yzwJjWsQujq84",
				circleOrangeFull: "_2VO8WEMqJPJowNCcJBBUk5",
				circleOrangeHollow: "_2zPZykL1KGJSo9YRJ3Y5dy",
				circleYellowSmall: "_28ppeUvr7bkFdx0sEQ3jv",
				top: "_1TuT17eGP0VqaHpKMTgTSG",
				bottom: "_1hiOTBsV4AVUH-GFOhq476",
				circleYellowBig: "_M-WPg1FMisyW-utzS3Ky",
				circleYellowHollow: "_2ZPIUmdE7CWl0P15F7Ej3U",
				circleDotted: "JxUPDbdQY7focspcQwZOP",
				circleStriped: "PShhYr_qgqfqiPtBDWf6P",
				background: "fpMKjjygkCTJBHvcZrK-Y",
				diagonalLayoutPrimary: "_2CJH4bU4IBYt-xcRd43jsE",
				diagonalLayoutSecondary: "_1s2L_LvE9KboJlIJ_pVY7_"
			}
		},
		"./src/reddit/pages/Powerups/HeadingSection.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "b", (function() {
				return k
			})), a.d(t, "a", (function() {
				return w
			}));
			var n = a("./src/config.ts"),
				r = a("./src/lib/classNames/index.ts"),
				l = a("./node_modules/react/index.js"),
				s = a.n(l),
				i = a("./node_modules/react-redux/es/index.js"),
				o = a("./src/reddit/components/PowerupsCtaButton/index.tsx"),
				c = a("./src/reddit/controls/Button/index.tsx"),
				m = a("./src/reddit/icons/fonts/index.tsx");
			var d = e => s.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 437 96",
					xmlns: "http://www.w3.org/2000/svg"
				}, s.a.createElement("circle", {
					fill: "#ff4500",
					cx: "48",
					cy: "48",
					r: "48"
				}), s.a.createElement("path", {
					fill: "#ff4500",
					d: "M79.992,48a7,7,0,0,0-11.855-5.036,34.261,34.261,0,0,0-18.72-5.939l3.189-15,10.418,2.215a5.008,5.008,0,1,0,.512-2.447L51.9,19.318a1.25,1.25,0,0,0-1.483.963l-3.561,16.74a34.368,34.368,0,0,0-18.994,5.93,7,7,0,1,0-7.706,11.432,13.771,13.771,0,0,0-.167,2.117c0,10.77,12.536,19.5,28,19.5s28-8.73,28-19.5a13.851,13.851,0,0,0-.164-2.1A7,7,0,0,0,79.992,48ZM32,53a5,5,0,1,1,5,5A5.007,5.007,0,0,1,32,53ZM59.88,66.212c-3.412,3.408-9.951,3.673-11.874,3.673s-8.463-.265-11.872-3.673a1.3,1.3,0,1,1,1.833-1.832c2.151,2.151,6.752,2.914,10.039,2.914s7.889-.764,10.043-2.915a1.3,1.3,0,1,1,1.831,1.833ZM59,58a5,5,0,1,1,5-5A5.006,5.006,0,0,1,59,58Z"
				}), s.a.createElement("path", {
					fill: "#fff",
					d: "M79.992,48a7,7,0,0,0-11.855-5.036,34.261,34.261,0,0,0-18.72-5.939l3.189-15,10.418,2.215a5.008,5.008,0,1,0,.512-2.447L51.9,19.318a1.25,1.25,0,0,0-1.483.963l-3.561,16.74a34.368,34.368,0,0,0-18.994,5.93,7,7,0,1,0-7.706,11.432,13.771,13.771,0,0,0-.167,2.117c0,10.77,12.536,19.5,28,19.5s28-8.73,28-19.5a13.851,13.851,0,0,0-.164-2.1A7,7,0,0,0,79.992,48ZM32,53a5,5,0,1,1,5,5A5.007,5.007,0,0,1,32,53ZM59.88,66.212c-3.412,3.408-9.951,3.673-11.874,3.673s-8.463-.265-11.872-3.673a1.3,1.3,0,1,1,1.833-1.832c2.151,2.151,6.752,2.914,10.039,2.914s7.889-.764,10.043-2.915a1.3,1.3,0,1,1,1.831,1.833ZM59,58a5,5,0,1,1,5-5A5.006,5.006,0,0,1,59,58Z"
				}), s.a.createElement("path", {
					fill: "#ff4500",
					d: "M144.182,27.8a14.469,14.469,0,0,1,6.317,5.71,16.7,16.7,0,0,1,2.19,8.659,17.514,17.514,0,0,1-2.24,8.928,15.51,15.51,0,0,1-6.318,6.031,19.81,19.81,0,0,1-9.4,2.156h-6.165V75.454H117.515V25.793h16.913A22.1,22.1,0,0,1,144.182,27.8ZM134.159,49.545a8.731,8.731,0,0,0,4.076-.909,6.562,6.562,0,0,0,2.7-2.51,7.005,7.005,0,0,0,.943-3.622,6.126,6.126,0,0,0-2.173-5.021,8.96,8.96,0,0,0-5.947-1.852h-5.188V49.545Z"
				}), s.a.createElement("path", {
					fill: "#ff4500",
					d: "M162.611,73.5a18.725,18.725,0,0,1-6.957-6.772,18.466,18.466,0,0,1-.068-18.648,18.732,18.732,0,0,1,6.873-6.856,18.939,18.939,0,0,1,9.737-2.561,19.255,19.255,0,0,1,9.619,2.477,18.582,18.582,0,0,1,6.957,6.755,18.592,18.592,0,0,1,0,18.833,18.725,18.725,0,0,1-6.957,6.772,19.738,19.738,0,0,1-19.2,0Zm14.15-7.9a9.237,9.237,0,0,0,3.269-3.522,10.013,10.013,0,0,0,1.2-4.817,9.687,9.687,0,0,0-1.213-4.8,9.2,9.2,0,0,0-3.285-3.437,8.761,8.761,0,0,0-9.063,0A9.067,9.067,0,0,0,164.4,52.46a9.712,9.712,0,0,0-1.2,4.767,10.069,10.069,0,0,0,1.2,4.851,9.235,9.235,0,0,0,3.268,3.522,8.628,8.628,0,0,0,9.1,0Z"
				}), s.a.createElement("path", {
					fill: "#ff4500",
					d: "M211.413,75.454h-8.76L191.939,39.2h10.478l4.077,16.879,1.516,6.5h.135l1.752-4.11,6.873-17.756h3.942l6.94,17.756,1.786,4.11h.168l1.483-6.5L235.1,39.2h10.478L234.829,75.454H226.1l-3.167-7.042-3.976-9.77h-.27l-4.076,9.77Z"
				}), s.a.createElement("path", {
					fill: "#ff4500",
					d: "M280.75,60.765H256.357a9.363,9.363,0,0,0,3.454,4.969,9.772,9.772,0,0,0,5.913,1.8,16.431,16.431,0,0,0,4.885-.774,12.255,12.255,0,0,0,3.841-1.82l3.3,7.952a17.234,17.234,0,0,1-5.222,2.256,25.447,25.447,0,0,1-6.637.843,20.941,20.941,0,0,1-10.141-2.358,16.568,16.568,0,0,1-6.705-6.571,19.379,19.379,0,0,1-2.358-9.635,19.506,19.506,0,0,1,2.426-9.821,17.172,17.172,0,0,1,6.519-6.587,17.812,17.812,0,0,1,8.945-2.325,17.062,17.062,0,0,1,8.474,2.14,15.607,15.607,0,0,1,6.03,6.014,17.519,17.519,0,0,1,2.207,8.827A24.352,24.352,0,0,1,280.75,60.765Zm-9.265-6.671a6.819,6.819,0,0,0-1.937-5.121,7.006,7.006,0,0,0-5.105-1.887,7.871,7.871,0,0,0-5.374,1.9,9.213,9.213,0,0,0-2.88,5.105Z"
				}), s.a.createElement("path", {
					fill: "#ff4500",
					d: "M310.331,38.882a5.377,5.377,0,0,1,1.651.522L307.7,49.579a5.714,5.714,0,0,0-1.263-.388,8.242,8.242,0,0,0-1.735-.185,8.073,8.073,0,0,0-3.622.876,7.362,7.362,0,0,0-2.915,2.628,7.721,7.721,0,0,0-1.145,4.312V75.454H286.376V39.2H296.72v5.087h.2a15.107,15.107,0,0,1,4.582-4.025,12.459,12.459,0,0,1,6.368-1.6A13.094,13.094,0,0,1,310.331,38.882Z"
				}), s.a.createElement("path", {
					fill: "#ff4500",
					d: "M337.183,39.2H347.83V75.487H337.554V70.7h-.27a11.147,11.147,0,0,1-4.548,3.892,14.319,14.319,0,0,1-6.368,1.431,11.771,11.771,0,0,1-6.351-1.667,10.919,10.919,0,0,1-4.11-4.632,15.381,15.381,0,0,1-1.432-6.773V39.2h10.647V60.6a7.068,7.068,0,0,0,1.516,4.885,5.333,5.333,0,0,0,4.177,1.685,6.3,6.3,0,0,0,4.582-1.735,6.52,6.52,0,0,0,1.786-4.9Z"
				}), s.a.createElement("path", {
					fill: "#ff4500",
					d: "M390.685,67.217a16.49,16.49,0,0,1-6.132,6.5,16.168,16.168,0,0,1-8.389,2.274,14.7,14.7,0,0,1-5.862-1.145,14.106,14.106,0,0,1-4.683-3.269h-.27V89.705L354.7,89.6V39.2H364.81V43.48h.2a13.564,13.564,0,0,1,4.717-3.571,14.524,14.524,0,0,1,6.1-1.246A16.811,16.811,0,0,1,384.3,40.9a16.611,16.611,0,0,1,6.3,6.486,20.1,20.1,0,0,1,2.375,9.972A20.38,20.38,0,0,1,390.685,67.217ZM378.421,65.6a8.348,8.348,0,0,0,3.134-3.4,10.608,10.608,0,0,0,1.112-4.9,10.382,10.382,0,0,0-1.129-4.885,8.293,8.293,0,0,0-3.133-3.352,8.746,8.746,0,0,0-4.566-1.2,8.587,8.587,0,0,0-4.514,1.2,8.316,8.316,0,0,0-3.117,3.352,11.289,11.289,0,0,0,0,9.838,8.427,8.427,0,0,0,3.117,3.369,8.7,8.7,0,0,0,4.514,1.246A8.863,8.863,0,0,0,378.421,65.6Z"
				}), s.a.createElement("path", {
					fill: "#ff4500",
					d: "M404.128,74.848a16.616,16.616,0,0,1-5.273-3.2,13.586,13.586,0,0,1-3.419-4.682l8.557-3.571a8.694,8.694,0,0,0,2.662,2.981,6.466,6.466,0,0,0,3.874,1.264,5.111,5.111,0,0,0,2.157-.421,3.225,3.225,0,0,0,1.364-1.1,2.434,2.434,0,0,0,.455-1.381q0-1.516-1.971-2.426a29.107,29.107,0,0,0-5.1-1.684q-.776-.236-.944-.27a15.971,15.971,0,0,1-7.109-3.891,9.118,9.118,0,0,1-2.661-6.755,10.092,10.092,0,0,1,1.684-5.728,11.182,11.182,0,0,1,4.633-3.924,15.245,15.245,0,0,1,6.62-1.4,16.8,16.8,0,0,1,5.947,1.044,14.949,14.949,0,0,1,4.8,2.864,11.088,11.088,0,0,1,2.931,4.043l-8.153,3.437a8.4,8.4,0,0,0-1.954-2.14,4.906,4.906,0,0,0-3.167-1.027,4.176,4.176,0,0,0-2.645.825,2.493,2.493,0,0,0-1.061,2.038,2.332,2.332,0,0,0,.977,1.887,8.267,8.267,0,0,0,2.408,1.28q1.432.505,3.959,1.18a28.275,28.275,0,0,1,4.515,1.617,11.527,11.527,0,0,1,3.959,3.167,8.512,8.512,0,0,1,1.836,5.66,10.081,10.081,0,0,1-1.836,5.946,12.192,12.192,0,0,1-4.953,4.06,15.983,15.983,0,0,1-6.822,1.449A17.448,17.448,0,0,1,404.128,74.848Z"
				})),
				u = a("./src/reddit/selectors/gold/powerups/modSignup.ts"),
				p = a("./src/reddit/selectors/user.ts"),
				h = a("./src/reddit/pages/Powerups/HeadingSection.m.less"),
				g = a.n(h);
			const {
				fbt: b
			} = a("./node_modules/fbt/lib/FbtPublic.js"), k = e => {
				let {
					openModal: t
				} = e;
				const a = Object(i.e)(p.cb),
					l = Object(i.e)(u.b),
					h = Object(i.e)(p.P),
					k = l ? b._("Come together to level up the whole community", null, {
						hk: "n9eu8"
					}) : b._("Level up the whole community", null, {
						hk: "2kiP2p"
					}),
					f = l ? b._("Harness the power of your community to unlock special perks and advanced features.", null, {
						hk: "1VpJiW"
					}) : b._("Come together to unlock special perks and advanced features.", null, {
						hk: "1WTTiK"
					}),
					_ = l ? s.a.createElement(c.k, {
						onClick: t,
						priority: c.c.Primary,
						className: g.a.ctaButton
					}, b._("Turn on Powerups", null, {
						hk: "4E97KH"
					})) : s.a.createElement(o.a, {
						onClick: t,
						className: g.a.ctaButton,
						disabled: !h
					});
				return s.a.createElement("div", {
					className: g.a.headingSection
				}, s.a.createElement(w, {
					isNightmodeOn: a
				}), s.a.createElement("div", {
					className: Object(r.a)(g.a.contentWrapper, g.a.headingContent)
				}, s.a.createElement("div", {
					className: g.a.headingText
				}, s.a.createElement("h1", {
					className: Object(r.a)(g.a.heading, {
						[g.a.isNightmodeOn]: a
					})
				}, s.a.createElement(d, {
					className: g.a.powerupsLogo
				})), s.a.createElement("h2", {
					className: g.a.subheading
				}, k), s.a.createElement("p", {
					className: Object(r.a)(g.a.description, g.a.bodyText)
				}, f), l && s.a.createElement("div", {
					className: Object(r.a)(g.a.modWarning, g.a.bodyText)
				}, s.a.createElement("div", {
					className: g.a.modWarningTop
				}, s.a.createElement(m.a, {
					name: "mod",
					className: g.a.modWarningIcon
				})), b._("{=Only moderators with theManage Settings permission can turn on Powerups.}{=Heads up—Only Safe for Work (SFW) communities with 1,000 members or more can enable Powerups.}", [b._param("=Only moderators with theManage Settings permission can turn on Powerups.", s.a.createElement("div", null, b._("Only moderators with the {=Manage Settings} permission can turn on Powerups.", [b._param("=Manage Settings", s.a.createElement("span", {
					className: g.a.modWarningItalic
				}, b._("Manage Settings", null, {
					hk: "4AauR"
				})))], {
					hk: "1sKKo7"
				}))), b._param("=Heads up—Only Safe for Work (SFW) communities with 1,000 members or more can enable Powerups.", s.a.createElement("div", {
					className: g.a.modWarningFooter
				}, b._("Heads up—Only Safe for Work (SFW) communities with 1,000 members or more can enable Powerups.", null, {
					hk: "2euXqd"
				})))], {
					hk: "2FL5at"
				})), _), s.a.createElement("div", {
					className: g.a.headingArt
				}, s.a.createElement("div", {
					className: g.a.powerupsMarketingImageContainer
				}, s.a.createElement("picture", {
					className: g.a.powerupsMarketingImage
				}, s.a.createElement("source", {
					srcSet: `${n.a.assetPath}/img/powerups/powerups-rangers.webp`,
					type: "image/webp"
				}), s.a.createElement("source", {
					srcSet: `${n.a.assetPath}/img/powerups/powerups-rangers-static.png`,
					type: "image/png"
				}), s.a.createElement("img", {
					alt: b._("Powerups heroes", null, {
						hk: "3kHkNJ"
					}),
					className: g.a.fallbackStaticImage,
					src: `${n.a.assetPath}/img/powerups/powerups-rangers-static.png`
				}))))))
			}, w = e => {
				let {
					isNightmodeOn: t,
					accentDiagonalCustomStyles: a
				} = e;
				return s.a.createElement("div", {
					className: Object(r.a)(g.a.background, g.a.contentWrapper)
				}, s.a.createElement("div", {
					className: g.a.diagonalLayoutSecondary,
					style: a
				}), s.a.createElement("div", {
					className: g.a.diagonalLayoutPrimary
				}), s.a.createElement("div", {
					className: g.a.circleDotted,
					style: {
						backgroundImage: `url(${n.a.assetPath}/img/powerups/dotcircle.png)`
					}
				}), s.a.createElement("div", {
					className: Object(r.a)(g.a.animatedCircle, g.a.circleStriped),
					style: {
						backgroundImage: t ? `url(${n.a.assetPath}/img/powerups/linecircle-orange.png)` : `url(${n.a.assetPath}/img/powerups/linecircle-blue.png)`
					}
				}), s.a.createElement("div", {
					className: Object(r.a)(g.a.circleOrangeFull, g.a.animatedCircle)
				}), s.a.createElement("div", {
					className: Object(r.a)(g.a.circleYellowSmall, g.a.top, g.a.animatedCircle)
				}), s.a.createElement("div", {
					className: Object(r.a)(g.a.circleYellowBig, g.a.animatedCircle)
				}), s.a.createElement("div", {
					className: Object(r.a)(g.a.circleYellowHollow, g.a.animatedCircle)
				}), s.a.createElement("div", {
					className: Object(r.a)(g.a.circleYellowSmall, g.a.bottom, g.a.animatedCircle)
				}), s.a.createElement("div", {
					className: Object(r.a)(g.a.circleOrangeHollow, g.a.animatedCircle)
				}))
			}
		},
		"./src/reddit/pages/Predictions/Communities.m.less": function(e, t, a) {
			e.exports = {
				communitiesContainer: "loGdBlBZL2aZnzVF2z5n2",
				isNightMode: "_2B841E6E2h9BEl_pMXbZoU",
				communitiesHeading: "_1FRfdCwVzDGqu809GUe3Rf",
				communitiesContent: "_3eqUJhFnwtaqfoO7rLqPuy",
				community: "_3nHvwb-ikS-_u4Wsnel2g4",
				communityIcon: "L_avM26-9QEK3dtfwFt1v",
				communityContainer: "_18ZjkWd1NAKpqzSo1qADDU",
				communityName: "_3hkO2Bw07gf5qjCP5k2zlS",
				participationCount: "_2IKbdcMECbtW0GM9jsmBmP",
				communityStatistics: "_2KCz1hDcCJgauF3QIF15VI"
			}
		},
		"./src/reddit/pages/Predictions/FaqSection.m.less": function(e, t, a) {
			e.exports = {
				faqSection: "_2u78nMhJIiljLUkPpcT-NX",
				faqSectionContent: "_3pahUyRKaMkugNO8r2o2kD",
				circleFaqYellowWithBolt: "_3K1xxTCzW-narCXpjwUTjJ",
				boltInCircleFaqYellow: "_3Fm52kOvZRjZtxWq5rlgnc",
				faqQuestionMarkWithBolt: "_3oIANY1aAnTJzDBMLxgiO8",
				faqHeading: "_12DjdJ-k6PtyVSE6dZEcve",
				faqs: "_2s3JRtQKw_XVoTh5Vsh0JI",
				faqMoreQuestionsHeading: "_1YuKoDl6AkagomkSSGK045",
				collapsibleFaq: "KVfwPn2TlZyXiTTUJ7Ody",
				fullFaqsButton: "_2WRgCBdAHdPPA7rbpXbg6l",
				faqTryOutHeading: "_17cdX8mDHsir1YeOFzlBzV",
				ctaButtonCirlcesAndBolt: "Qd3WqMeHkBuQt6rh3O68o",
				circleFaqCtaStriped: "_2x1qmfu5HqLS0gbOv6dPqe",
				circleFaqCtaYellowBig: "_3sH4jVwPy1MruHkUV3TcuT",
				circleFaqCtaCyanHollow: "_2fay7lpWTZqkz0lUMdOi_6"
			}
		},
		"./src/reddit/pages/Predictions/Incentives.m.less": function(e, t, a) {
			e.exports = {
				perksSection: "jFucEL4UC_m_GlT_k4xxC",
				perksSectionBoltImage: "_3yYmmIeYD31TftfyR1KPmU",
				perksSectionTitle: "iH8TbyA71auWwUMvSonVQ",
				perksSectionGrid: "_1K_ASYKvod0hIdzsuIf12Z",
				perkCell: "kxUacwN6V8Vo8dxHcSJ14",
				isReversed: "_12iIb9Yk7yYle9IOcX-Fpy",
				perkImageContainer: "_3nWk5UehKhvP76Cvsk8XmY",
				perkImage: "esWspCNx27Cml_lMxXXK",
				perkText: "PF9GX6OBlVIwmfLHY4H__",
				perkTitle: "-xix10JhlApLlf4x-hx-e",
				perkDescription: "_3SFBv2OI25f3Fn_UDINdyG"
			}
		},
		"./src/reddit/pages/Predictions/index.m.less": function(e, t, a) {
			e.exports = {
				contentWrapper: "VtAkDyydhWV8sAKsyH_fm",
				relativeContainer: "_375I3gd-3n2sNejC_zWIvJ",
				circle: "_31CfaQy6Y5KrDs53ZaW4Kp",
				circleCyanHollow: "_1teM0bL0gwl2stfcuqLULh",
				bodyText: "_3VESk6XmmA7zV6Zj6ova5q",
				headingSection: "_2-KMg8Yje5fYjDOnSWjILI",
				headingContent: "xO5Jx-6IKNO5jOYLEi949",
				headingArt: "_3Ay4AYKY72n-YNbXKs9WYQ",
				headingText: "nVvsGi5oCgfeVm-Iigxok",
				predictionsMarketingImageContainer: "_2iu27f3ZACDB861VKzPJuI",
				predictionsMarketingImage: "_1jhtaWQQCDLNYS4tpZUha3",
				heading: "_1u6Lbw8Cl_uXOBWpXWFJVw",
				logo: "_1ARCYWhxi-r_O2Nqgxr7r_",
				subheading: "_3pQbRmp8JGRY-_eFAn32zv",
				description: "dYUk2i7rdx-AOLTvIW-Gc",
				modWarning: "_3Zee7pj7CT63_qVSO7-K4G",
				modWarningItalic: "_1cZZQ8EWTl8wfNfNQTWXqf",
				modWarningFooter: "_3ill1D01hOyDQsySJtQCux",
				modWarningTop: "_32YgK1PoWzzhZ9DBimQU7C",
				modWarningIcon: "_32OfL4E_uMSIO-8dOmHTKm",
				ctaButton: "_1FuO1kMdefsx-AKiyva-tg",
				howItWorksStepsSection: "_1PMuQ40LU3qjTZNHpDTW-6",
				howItWorksHeading: "_3i5JHLr0ZPzfK3NzXJvu-T",
				howItWorksStepsSectionContent: "QL2Hx0R6jyQQx0gB2BKym",
				circleStepsStriped: "_1SKX6NoCZoSSxmLh8wwaAy",
				circleStepsYellowFull: "_3kA3I2ZQvCV-4-26A3WKKh",
				howItWorksStep: "_1dJLIOiSd_vJ716-Oq6FK0",
				howItWorksStepCount: "_3_tf0sLGpqSuiZUKqu343P",
				howItWorksStepName: "_1UDlTQAAwPiBDrgaCw5cv4",
				howItWorksStepDescription: "_3JH3a6lQIzRZ3p_OSyY2id",
				footer: "_1juBusDFdY8roSz7i07O0t",
				modalBody: "_2u4PXGfZ67ELggUpJ32tXU",
				modalOverlay: "_3_K54vFgA1vBdAozcupLIm",
				tryOutSection: "_3rk4MNOtpfm15PubmS2RgY",
				tryOutHeading: "_2YJ28-CByIgxBykRV5_hg0",
				tryOutSubheading: "LTw1DhZxX4efJBsUDsHDw",
				ctaLetsDoThisButton: "_2UBpl4TJm_MiEXCsbj576L",
				ctaButtonCirclesAndBolt: "E-Wij0JWVd4iUZmUxGVXz",
				circleFaqCtaStriped: "_11lr0yqsVbl5-yCfnzqo-V",
				circleFaqCtaYellowBig: "_2mKiloXFkG6uQXsNADW294",
				predictorSnooImage: "iOfv_rIDw9QKfWEn2Vfxb",
				circleFaqCtaCyanHollow: "_2_-1RKEkGYqrU8Bsuc29Yl"
			}
		},
		"./src/reddit/pages/Predictions/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var n = a("./src/config.ts"),
				r = a("./node_modules/react/index.js"),
				l = a.n(r),
				s = a("./node_modules/react-redux/es/index.js"),
				i = a("./src/lib/classNames/index.ts"),
				o = a("./src/lib/getMobileOperatingSystem/index.ts"),
				c = a("./src/reddit/components/MarketingPageFooter/index.tsx"),
				m = a("./src/higherOrderComponents/asModal/index.tsx"),
				d = a("./src/reddit/hooks/useLocale.ts"),
				u = a("./src/lib/localizeCurrency/index.ts");
			var p = e => {
					let {
						num: t,
						className: a,
						...n
					} = e;
					const r = Object(d.a)(),
						s = Object(u.a)(t, {
							locale: r,
							...n
						});
					return l.a.createElement("span", {
						className: a
					}, s)
				},
				h = a("./src/reddit/controls/RadioInput/index.tsx"),
				g = a("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				b = a("./src/reddit/selectors/telemetry.ts");
			var k = a("./src/reddit/hooks/useTracking.ts"),
				w = (a("./node_modules/core-js/modules/web.dom.iterable.js"), a("./src/reddit/models/Subreddit/index.ts")),
				f = a("./src/reddit/selectors/moderatorPermissions.ts");
			const _ = e => {
				const t = Object(f.l)(e);
				return t ? Object.keys(t).reduce((t, a) => {
					const n = e.subreddits.models[a];
					if (!n) return t;
					const {
						allowPredictionsTournament: r,
						displayText: l,
						isNSFW: s,
						subscribers: i,
						type: o,
						url: c
					} = n;
					return !r && o === w.g.Public && !s && i >= j && t.push({
						id: a,
						subredditUrl: c,
						displayText: l
					}), t
				}, []) : null
			};
			var y = a("./src/reddit/controls/Button/index.tsx");
			const {
				fbt: E
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			var N = e => {
					let {
						isEligibleMod: t,
						selectedSubredditUrl: a,
						modSubredditsInfo: n,
						onClose: r
					} = e;
					const s = Object(k.a)();
					if (!t) {
						const e = () => {
							s((() => e => ({
								...Object(b.n)(e),
								source: "start_predictions_modal",
								action: "click",
								noun: "close"
							}))()), r()
						};
						return l.a.createElement(y.k, {
							onClick: e,
							isFullWidth: !0
						}, E._("Close", null, {
							hk: "3Qarlp"
						}))
					}
					return l.a.createElement("a", {
						href: `${a}about/edit?page=posts`
					}, l.a.createElement(y.k, {
						onClick: () => {
							const e = n.find(e => {
								let {
									subredditUrl: t
								} = e;
								return a === t
							});
							e && s((e => t => ({
								...Object(b.n)(t),
								source: "start_predictions_modal",
								action: "click",
								noun: "create_predictions_tournament",
								subreddit: {
									id: e
								}
							}))(e.id))
						},
						isFullWidth: !0
					}, E._("Start Using Predictions", null, {
						hk: "2AMnj"
					})))
				},
				v = a("./node_modules/fbt/lib/FbtPublic.js"),
				C = a("./src/reddit/icons/fonts/index.tsx"),
				O = a("./src/reddit/components/PredictionsSignupModal/index.m.less"),
				S = a.n(O);
			const P = e => {
				let {
					children: t,
					accentDiagonalCustomStyles: a
				} = e;
				return l.a.createElement("div", {
					className: S.a.background
				}, l.a.createElement("div", {
					className: S.a.diagonalLayoutSecondary,
					style: a
				}), l.a.createElement("div", {
					className: S.a.diagonalLayoutPrimary
				}), l.a.createElement("div", {
					className: Object(i.a)(S.a.circle, S.a.lineCircle),
					style: {
						backgroundImage: `url(${n.a.assetPath}/img/powerups/linecircle-blue.png)`
					}
				}), l.a.createElement("div", {
					className: Object(i.a)(S.a.circle, S.a.circleOrangeHollow)
				}), l.a.createElement("div", {
					className: Object(i.a)(S.a.circle, S.a.dotCircle1),
					style: {
						backgroundImage: `url(${n.a.assetPath}/img/powerups/dotcircle.png)`
					}
				}), l.a.createElement("div", {
					className: Object(i.a)(S.a.circle, S.a.circleGreenFilled)
				}), l.a.createElement("div", {
					className: Object(i.a)(S.a.circle, S.a.circleGreenHollow)
				}), l.a.createElement("div", {
					className: Object(i.a)(S.a.circle, S.a.circleYellowHollow)
				}), l.a.createElement("div", {
					className: Object(i.a)(S.a.circle, S.a.dotCircle2),
					style: {
						backgroundImage: `url(${n.a.assetPath}/img/powerups/dotcircle.png)`
					}
				}), t)
			};
			var x = e => {
				let {
					children: t,
					onClose: a
				} = e;
				return l.a.createElement("div", {
					className: S.a.container
				}, l.a.createElement(P, {
					accentDiagonalCustomStyles: {
						background: "#ddbd37"
					}
				}, l.a.createElement("div", {
					className: S.a.headerImageContainer
				}, l.a.createElement("img", {
					className: S.a.headerImage,
					alt: "Predictor Snoos",
					src: `${n.a.assetPath}/img/econ/predictions/predictor_snoos.png`
				}))), l.a.createElement(y.t, {
					"aria-label": v.fbt._("Close", null, {
						hk: "26np07"
					}),
					className: S.a.closeButton,
					Icon: Object(C.b)("close"),
					onClick: a,
					priority: y.c.Plain
				}), l.a.createElement("div", {
					className: S.a.body
				}, t))
			};
			const {
				fbt: I
			} = a("./node_modules/fbt/lib/FbtPublic.js"), j = 1e4;
			var F = Object(m.a)(e => {
					let {
						onClose: t
					} = e;
					var a;
					const n = Object(k.a)(),
						i = Object(s.e)(_),
						[o, c] = Object(r.useState)(i && (null === (a = i[0]) || void 0 === a ? void 0 : a.subredditUrl) || "");
					Object(r.useEffect)(() => {
						n((() => e => ({
							...Object(b.n)(e),
							source: "predictions_marketing_page",
							action: "view",
							noun: "start_predictions_modal"
						}))())
					}, [n]);
					const m = Boolean(null == i ? void 0 : i.length),
						d = m ? I._("Start a Tournament", null, {
							hk: "329F3U"
						}) : I._("Only moderators of communities that have at least {Minimum subscribers required to enable Prediction} members can turn on predictions.", [I._param("Minimum subscribers required to enable Prediction", l.a.createElement(p, {
							num: j
						}))], {
							hk: "3VaFr8"
						});
					return l.a.createElement(x, {
						onClose: t
					}, l.a.createElement("div", {
						className: S.a.titleContainer
					}, l.a.createElement("h1", {
						className: S.a.titleText
					}, d), m && l.a.createElement("h2", {
						className: S.a.subtitleText
					}, I._("Choose the community where you’d like to turn on Predictions", null, {
						hk: "1aaKTn"
					}))), m && l.a.createElement("div", {
						className: S.a.radioContainer
					}, l.a.createElement(h.a, {
						name: I._("subreddit", null, {
							hk: "sueo0"
						}),
						value: o,
						onChange: e => c(e)
					}, i.map(e => {
						let {
							id: t,
							subredditUrl: a,
							displayText: n
						} = e;
						const r = o === a;
						return l.a.createElement(g.a, {
							className: S.a.radioOption,
							key: t,
							selected: r,
							showButton: !0,
							value: a
						}, n)
					}))), !m && l.a.createElement("h3", {
						className: S.a.disclaimer
					}, I._("Predictions creation is only available on Web and iOS at this time.", null, {
						hk: "J1xBl"
					})), l.a.createElement(N, {
						isEligibleMod: m,
						selectedSubredditUrl: o,
						modSubredditsInfo: i,
						onClose: t
					}))
				}),
				q = a("./src/reddit/pages/Powerups/HeadingSection.tsx"),
				W = a("./src/reddit/selectors/user.ts"),
				M = a("./node_modules/react-router-dom/esm/react-router-dom.js"),
				B = a("./src/lib/opener/index.ts"),
				T = a("./src/reddit/hooks/useIsClient.ts"),
				H = a("./src/reddit/pages/Predictions/Communities.m.less"),
				A = a.n(H);
			const {
				fbt: Y
			} = a("./node_modules/fbt/lib/FbtPublic.js"), D = [{
				subredditName: "movies",
				participationCount: "100k",
				tournamentName: "Oscars"
			}, {
				subredditName: "formula1",
				participationCount: "200k",
				tournamentName: "2021"
			}, {
				subredditName: "soccer",
				participationCount: "300k",
				tournamentName: "2020 Eurocup"
			}], L = () => {
				const e = Object(k.a)(),
					t = Object(s.e)(W.cb),
					a = Object(T.a)(),
					r = () => {
						e((() => e => ({
							...Object(b.n)(e),
							source: "predictions_marketing_page",
							action: "click",
							noun: "community"
						}))())
					};
				return a ? l.a.createElement("section", {
					className: Object(i.a)(A.a.communitiesContainer, {
						[A.a.isNightMode]: t
					})
				}, l.a.createElement("h2", {
					className: A.a.communitiesHeading
				}, Y._("Previous tournaments", null, {
					hk: "2TCJGF"
				})), l.a.createElement("div", {
					className: A.a.communitiesContent
				}, D.map(e => {
					let {
						subredditName: t,
						participationCount: a,
						tournamentName: s
					} = e;
					return l.a.createElement(M.a, {
						className: A.a.community,
						key: t,
						to: `r/${t}/predictions`,
						target: B.d.BLANK,
						rel: B.c,
						onClick: r
					}, l.a.createElement("div", {
						className: A.a.communityIcon,
						style: {
							backgroundImage: `url(${n.a.assetPath}/img/econ/predictions/${t}.png)`
						}
					}), l.a.createElement("div", {
						className: A.a.communityContainer
					}, l.a.createElement("div", null, "r/", t), l.a.createElement("div", {
						className: A.a.communityStatistics
					}, Y._("{=[number of participants]} participants in the {subreddit tournament name} Tournament", [Y._param("=[number of participants]", l.a.createElement("span", {
						className: A.a.participationCount
					}, Y._("{number of participants}", [Y._param("number of participants", a)], {
						hk: "OjESd"
					}))), Y._param("subreddit tournament name", s)], {
						hk: "lgx3v"
					}))))
				}))) : null
			};
			var U = a("./src/reddit/components/CollapsibleFAQ/index.tsx"),
				G = a("./src/reddit/pages/Powerups/FaqSection.tsx"),
				V = a("./src/reddit/pages/Predictions/FaqSection.m.less"),
				K = a.n(V);
			const Q = [{
					prompt: v.fbt._("Where can I find Predictions?", null, {
						hk: "32ZI7C"
					}),
					answer: v.fbt._("You can find Predictions within participating communities, inside the “Predictions” tab. Communities that have participated in the past include: r/movies, r/leagueoflegends, r/Cryptocurrency, r/formula1 and r/soccer.", null, {
						hk: "Igxj1"
					})
				}, {
					prompt: v.fbt._("Do I need to have anything to play Predictions?", null, {
						hk: "22KDvv"
					}),
					answer: v.fbt._("Every user who plays will get a wallet of “tokens” that can be used to predict. You will get 1,000 tokens for every new Predictions tournament that you participate in.", null, {
						hk: "RnK1g"
					})
				}, {
					prompt: v.fbt._("What happens if I run out of tokens? Can I still play?", null, {
						hk: "3eQJBV"
					}),
					answer: v.fbt._("Unfortunately, once you exhaust your token wallet, you’re done for that tournament. But every tournament gives you a new token wallet - for example, if r/formula1 ran a Spring tournament and then later ran a Fall tournament, every user would get a fresh set of tokens for the Fall tournament (the Spring tournament tokens go away).", null, {
						hk: "uwWuz"
					})
				}, {
					prompt: v.fbt._("What if mods pick the wrong winner?", null, {
						hk: "4uoijH"
					}),
					answer: v.fbt._("Feel free to let mods know; mods have the ability to reverse decisions within their mod settings. However, mods do have final say on who wins, so keep that in mind as you play.", null, {
						hk: "1ivYvz"
					})
				}, {
					prompt: v.fbt._("Why predict with more tokens? Do I get the same rewards if I put down 10 tokens or 100 tokens?", null, {
						hk: "4h5gWj"
					}),
					answer: v.fbt._("People who predict higher token amounts on questions will get proportionately bigger rewards. For example, if a user who put down 10 tokens wins 30 tokens, then a user who put down 100 tokens would win 300 tokens.", null, {
						hk: "Dqx1"
					})
				}, {
					prompt: v.fbt._("Do I need to buy anything to participate?", null, {
						hk: "1NcFmJ"
					}),
					answer: v.fbt._("No purchase is necessary to play Predictions - 1,000 free tokens are given to every user per tournament. We may include some special benefits for Premium users from time to time, so stay tuned!", null, {
						hk: "3LTZkn"
					})
				}, {
					prompt: v.fbt._("How do Predictions impact votes on posts?", null, {
						hk: "13gvO2"
					}),
					answer: v.fbt._("Currently when you make a prediction, the Tournament post is automatically upvoted. We did this because Predictions are more fun when more people play and upvoting helps the Tournament to be seen by more people! Of course, you're in control and you can always remove your upvote if you'd like.", null, {
						hk: "3KIWZw"
					})
				}],
				Z = () => {
					const e = Object(k.a)();
					return l.a.createElement("div", {
						className: K.a.faqSection
					}, l.a.createElement("div", {
						className: Object(i.a)(K.a.faqSectionContent, K.a.contentWrapper)
					}, l.a.createElement(G.a, {
						hideBolt: !0
					}), l.a.createElement("h2", {
						className: K.a.faqHeading
					}, v.fbt._("Questions about Predictions?", null, {
						hk: "3e9tVH"
					})), l.a.createElement("div", {
						className: K.a.faqs
					}, Q.map((e, t) => {
						let {
							prompt: a,
							answer: n
						} = e;
						return l.a.createElement(U.a, {
							className: K.a.collapsibleFaq,
							defaultClosed: !0,
							question: a,
							key: t
						}, n)
					})), l.a.createElement("h3", {
						className: K.a.faqMoreQuestionsHeading
					}, v.fbt._("Have more questions? We've got answers.", null, {
						hk: "3Entyj"
					})), l.a.createElement(y.t, {
						className: K.a.fullFaqsButton,
						priority: y.c.Secondary,
						href: "https://mods.reddithelp.com/hc/en-us/articles/4409834282509",
						onClick: () => {
							e((() => e => ({
								...Object(b.n)(e),
								source: "predictions_marketing_page",
								action: "click",
								noun: "view_full_faqs"
							}))())
						},
						kind: y.b.ExternalLink,
						target: "_blank"
					}, v.fbt._("View Full FAQs", null, {
						hk: "1eOLlL"
					}))))
				};
			var R = a("./src/reddit/pages/Predictions/Incentives.m.less"),
				J = a.n(R);
			const {
				fbt: z
			} = a("./node_modules/fbt/lib/FbtPublic.js"), X = [{
				title: "Climb the leaderboard",
				description: "Show off your prediction skills and compete with your community",
				imageName: "leaderboard"
			}, {
				title: "Connect with fellow predictors",
				description: "Share and discuss your expert opinion in the comments",
				imageName: "fellow_predictors",
				isReversed: !0
			}, {
				title: "Become the undisputed prediction champion",
				description: "Get listed in the tournament forever as the redditor whose wisdom defeated them all",
				imageName: "prediction_champion"
			}], $ = e => {
				let {
					title: t,
					description: a,
					imageName: r,
					isReversed: s
				} = e;
				return l.a.createElement("div", {
					className: Object(i.a)(J.a.perkCell, {
						[J.a.isReversed]: s
					})
				}, l.a.createElement("div", {
					className: J.a.perkImageContainer
				}, l.a.createElement("img", {
					alt: `Prediction incentive ${t}`,
					className: J.a.perkImage,
					src: `${n.a.assetPath}/img/econ/predictions/${r}.png`
				})), l.a.createElement("div", {
					className: J.a.perkText
				}, l.a.createElement("h3", {
					className: J.a.perkTitle
				}, z._("{perkName}", [z._param("perkName", t)], {
					hk: "22kzoU"
				})), l.a.createElement("h4", {
					className: J.a.perkDescription
				}, z._("{perkDescription}", [z._param("perkDescription", a)], {
					hk: "3F6M9G"
				}))))
			}, ee = () => l.a.createElement("div", {
				className: Object(i.a)(J.a.perksSection)
			}, l.a.createElement("div", {
				className: Object(i.a)(J.a.perksSectionGrid)
			}, X.map(e => {
				let {
					title: t,
					description: a,
					imageName: n,
					isReversed: r
				} = e;
				return l.a.createElement($, {
					key: t,
					title: t,
					description: a,
					imageName: n,
					isReversed: r
				})
			})));
			var te = a("./src/reddit/pages/Predictions/index.m.less"),
				ae = a.n(te);
			const {
				fbt: ne
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			t.default = () => {
				const e = Object(k.a)(),
					t = Object(s.e)(W.cb),
					[a, m] = Object(r.useState)(!1);
				let d = !1;
				"undefined" != typeof window && void 0 !== window.navigator && (d = Object(o.b)() === o.a), Object(r.useEffect)(() => {
					e((() => e => ({
						source: "global",
						action: "view",
						noun: "screen",
						...Object(b.n)(e),
						actionInfo: Object(b.d)(e, {
							pageType: "predictions_marketing_page"
						})
					}))())
				}, [e]);
				const u = () => m(!0),
					p = () => m(!1);
				return l.a.createElement(l.a.Fragment, null, l.a.createElement("div", {
					className: ae.a.headingSection
				}, l.a.createElement(q.a, {
					isNightmodeOn: t,
					accentDiagonalCustomStyles: {
						background: "#ddbd37"
					}
				}), l.a.createElement("div", {
					className: Object(i.a)(ae.a.contentWrapper, ae.a.headingContent)
				}, l.a.createElement("div", {
					className: ae.a.headingText
				}, l.a.createElement("h1", {
					className: ae.a.heading
				}, l.a.createElement("img", {
					alt: ne._("Reddit Predictions", null, {
						hk: "4B4NPQ"
					}),
					className: ae.a.logo,
					src: `${n.a.assetPath}/img/econ/predictions/reddit_predictions_logo.png`
				})), l.a.createElement("h2", {
					className: ae.a.subheading
				}, ne._("Become the world’s greatest predictor on any topic.", null, {
					hk: "3XkX8B"
				})), l.a.createElement("p", {
					className: Object(i.a)(ae.a.description, ae.a.bodyText)
				}, ne._("Who will win the game tomorrow? Which character will meet their fate in the next episode? Flex your knowledge of a topic in a prediction tournament!", null, {
					hk: "2x0Fec"
				})), l.a.createElement("div", {
					className: Object(i.a)(ae.a.modWarning, ae.a.bodyText)
				}, l.a.createElement("div", {
					className: ae.a.modWarningTop
				}, l.a.createElement(C.a, {
					name: "mod",
					className: ae.a.modWarningIcon
				})), ne._("{=Only moderators of communities that are public, safe for work, and have at least 10,000 members can turn on predictions.}", [ne._param("=Only moderators of communities that are public, safe for work, and have at least 10,000 members can turn on predictions.", l.a.createElement("div", null, ne._("Only moderators of communities that are public, safe for work, and have at least 10,000 members can turn on predictions.", null, {
					hk: "4tXdPf"
				})))], {
					hk: "kXZNE"
				})), !d && l.a.createElement(y.k, {
					onClick: () => {
						e((() => e => ({
							...Object(b.n)(e),
							source: "predictions_marketing_page",
							action: "click",
							noun: "start_predictions_modal"
						}))()), u()
					},
					priority: y.c.Primary,
					className: ae.a.ctaButton
				}, ne._("Turn on Predictions", null, {
					hk: "2zU4Cm"
				}))), l.a.createElement("div", {
					className: ae.a.headingArt
				}, l.a.createElement("div", {
					className: ae.a.predictionsMarketingImageContainer
				}, l.a.createElement("img", {
					alt: ne._("Predictor Snoos", null, {
						hk: "2VJBoC"
					}),
					className: ae.a.predictionsMarketingImage,
					src: `${n.a.assetPath}/img/econ/predictions/predictor_snoos.png`
				}))))), l.a.createElement(L, null), l.a.createElement("div", {
					className: ae.a.relativeContainer
				}, l.a.createElement("div", {
					className: Object(i.a)(ae.a.circle, ae.a.circleCyanHollow)
				})), l.a.createElement(ee, null), l.a.createElement("div", {
					className: ae.a.howItWorksStepsSection
				}, l.a.createElement("h2", {
					className: ae.a.howItWorksHeading
				}, ne._("How it works", null, {
					hk: "4yfhNH"
				})), l.a.createElement("div", {
					className: Object(i.a)(ae.a.howItWorksStepsSectionContent, ae.a.contentWrapper)
				}, l.a.createElement("div", {
					className: Object(i.a)(ae.a.circle, ae.a.circleStepsYellowFull)
				}), l.a.createElement("div", {
					className: Object(i.a)(ae.a.circle, ae.a.circleStepsStriped),
					style: {
						backgroundImage: t ? `url(${n.a.assetPath}/img/powerups/linecircle-orange.png)` : `url(${n.a.assetPath}/img/powerups/linecircle-blue.png)`
					}
				}), l.a.createElement("div", {
					className: ae.a.howItWorksStep
				}, l.a.createElement("div", {
					className: ae.a.howItWorksStepCount
				}, "1"), l.a.createElement("div", {
					className: ae.a.howItWorksStepName
				}, ne._("Mods create a tournament", null, {
					hk: "1KjpAb"
				})), l.a.createElement("div", {
					className: ae.a.howItWorksStepDescription
				}, ne._("A tournament is a series of questions where redditors predict the answers. Mods can add as many questions as they want, even after the tournament has started.", null, {
					hk: "1CySSW"
				}))), l.a.createElement("div", {
					className: ae.a.howItWorksStep
				}, l.a.createElement("div", {
					className: ae.a.howItWorksStepCount
				}, "2"), l.a.createElement("div", {
					className: ae.a.howItWorksStepName
				}, ne._("Redditors make predictions", null, {
					hk: "4Dw0MP"
				})), l.a.createElement("div", {
					className: ae.a.howItWorksStepDescription
				}, ne._("Redditors get prediction tokens when joining a tournament, and use tokens for each prediction they submit. More tokens = bigger reward.", null, {
					hk: "3LX1yL"
				}))), l.a.createElement("div", {
					className: ae.a.howItWorksStep
				}, l.a.createElement("div", {
					className: ae.a.howItWorksStepCount
				}, "3"), l.a.createElement("div", {
					className: ae.a.howItWorksStepName
				}, ne._("Mods pick the answers and thus, the winners", null, {
					hk: "1TMDGG"
				})), l.a.createElement("div", {
					className: ae.a.howItWorksStepDescription
				}, ne._("Mods choose the correct answers, so they control who wins the tournament!", null, {
					hk: "4gxz6G"
				}))))), l.a.createElement(Z, null), l.a.createElement("div", {
					className: ae.a.tryOutSection
				}, l.a.createElement("h2", {
					className: ae.a.tryOutHeading
				}, ne._("Try out Predictions", null, {
					hk: "8IETg"
				})), l.a.createElement("h3", {
					className: ae.a.tryOutSubheading
				}, ne._("Create a tournament and get your community predicting!", null, {
					hk: "utApr"
				})), !d && l.a.createElement(y.k, {
					onClick: () => {
						e((() => e => ({
							...Object(b.n)(e),
							source: "predictions_marketing_page",
							action: "click",
							noun: "lets_do_this"
						}))()), u()
					},
					priority: y.c.Primary,
					className: ae.a.ctaLetsDoThisButton
				}, ne._("Let's Do This!", null, {
					hk: "2rvUWV"
				})), l.a.createElement(re, null)), l.a.createElement(c.a, {
					className: ae.a.footer
				}), a && l.a.createElement(F, {
					withOverlay: !0,
					onOverlayClick: p,
					onClose: p,
					className: ae.a.modalBody,
					overlayClassName: ae.a.modalOverlay
				}))
			};
			const re = () => {
				const e = Object(s.e)(W.cb);
				return l.a.createElement("div", {
					className: ae.a.ctaButtonCirclesAndBolt
				}, l.a.createElement("div", {
					className: ae.a.circleFaqCtaStriped,
					style: {
						backgroundImage: e ? `url(${n.a.assetPath}/img/powerups/linecircle-orange.png)` : `url(${n.a.assetPath}/img/powerups/linecircle-blue.png)`
					}
				}), l.a.createElement("div", {
					className: ae.a.circleFaqCtaYellowBig
				}), l.a.createElement("img", {
					alt: ne._("Predictor Snoo", null, {
						hk: "2bpdfe"
					}),
					className: ae.a.predictorSnooImage,
					src: `${n.a.assetPath}/img/econ/predictions/predictor_snoo.png`
				}), l.a.createElement("div", {
					className: ae.a.circleFaqCtaCyanHollow
				}))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Predictions.0b53b4c4291d2ca0ebec.js.map