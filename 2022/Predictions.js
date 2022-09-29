// https://www.redditstatic.com/desktop2x/Predictions.2328961ef29ca3512308.js
// Retrieved at 9/29/2022, 4:30:05 PM by Reddit Dataminer v1.0.0
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
				return i
			})), a.d(t, "d", (function() {
				return l
			})), a.d(t, "a", (function() {
				return s
			})), a.d(t, "f", (function() {
				return c
			})), a.d(t, "g", (function() {
				return o
			})), a.d(t, "e", (function() {
				return m
			}));
			var n, r = a("./node_modules/fbt/lib/FbtPublic.js");
			! function(e) {
				e.Real = "real", e.Crypto = "crypto", e.Reddit = "reddit"
			}(n || (n = {}));
			const i = "USD",
				l = "ETH",
				s = "COINS",
				c = [l, "BTC"],
				o = [s, "SUBREDDIT_POINTS", "GAME_TOKENS"],
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
				return i
			}));
			const n = "Android",
				r = () => {
					const e = navigator.userAgent || navigator.vendor || window.opera;
					return /android/i.test(e) ? n : /iPad|iPhone|iPod/.test(e) && !window.MSStream ? "iOS" : "unknown"
				},
				i = () => r() === n || "iOS" === r()
		},
		"./src/lib/localizeCurrency/index.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return o
			})), a.d(t, "b", (function() {
				return m
			}));
			var n = a("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				r = a("./src/lib/currency/centsToDollars/index.ts"),
				i = a("./src/lib/currency/currencies.ts"),
				l = a("./src/lib/prettyPrintNumber/index.ts"),
				s = a("./src/reddit/helpers/governance/tokens.ts"),
				c = a("./src/reddit/constants/intlSupport.ts");
			const o = function(e) {
					let {
						locale: t = n.DEFAULT_LOCALE,
						pretty: a,
						formatOptions: r
					} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					const i = Number(e);
					return Object(c.c)() ? a ? Object(l.b)(i) : new Intl.NumberFormat(t, r).format(i) : d(i, a, t)
				},
				m = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					const {
						locale: a = n.DEFAULT_LOCALE,
						pretty: l,
						formatOptions: o,
						displayConversion: m,
						forceDecimals: g,
						currency: h = t.currency || (t.type ? p(t.type) : i.c),
						type: b = t.type || (t.currency ? u(t.currency) : i.b.Real)
					} = t, k = Number(e), _ = String(e);
					switch (b) {
						case i.b.Reddit: {
							const e = i.e[h],
								t = e ? e() : h;
							return Object(c.c)() ? new Intl.NumberFormat(a, {
								currencyDisplay: "symbol",
								...o
							}).format(k) + " " + t : d(k, l, a, t)
						}
						case i.b.Crypto: {
							if (l) {
								return Object(s.d)(_, m) + " " + h
							}
							const e = Number(Object(s.c)(_, m));
							return Object(c.c)() ? new Intl.NumberFormat(a, {
								style: "currency",
								currency: h,
								currencyDisplay: "symbol",
								minimumFractionDigits: 0,
								maximumFractionDigits: 0,
								...o
							}).format(e) : d(e, l, a, h)
						}
						case i.b.Real:
						default: {
							const e = Number(Object(r.a)(_, g));
							return Object(c.c)() ? new Intl.NumberFormat(a, {
								style: "currency",
								currency: h,
								currencyDisplay: "symbol",
								notation: l ? "compact" : "standard",
								...o
							}).format(e) : d(e, l, a, h)
						}
					}
				},
				d = (e, t, a, n) => {
					return (t ? Object(l.b)(e) : e.toLocaleString(a)) + (n ? " " + n : "")
				},
				u = e => i.g.includes(e.toUpperCase()) ? i.b.Reddit : i.f.includes(e.toUpperCase()) ? i.b.Crypto : i.b.Real,
				p = e => {
					switch (e) {
						case i.b.Crypto:
							return i.d;
						case i.b.Reddit:
							return i.a;
						case i.b.Real:
						default:
							return i.c
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
				i = a("./src/reddit/components/CollapsibleFAQ/index.m.less"),
				l = a.n(i),
				s = a("./src/lib/classNames/index.ts"),
				c = a("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				o = a("./src/reddit/icons/svgs/ChevronUp/index.tsx");
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
					} = this.state, i = n ? l.a.isOpen : "";
					return r.a.createElement("div", {
						className: Object(s.a)(e, l.a.collapsibleFAQ)
					}, r.a.createElement("button", {
						className: l.a.questionButton,
						type: "button",
						onClick: this.toggleOpen
					}, r.a.createElement("span", {
						className: l.a.buttonContent,
						tabIndex: -1
					}, t, n ? r.a.createElement(o.a, {
						className: l.a.collapseIcon
					}) : r.a.createElement(c.a, {
						className: l.a.collapseIcon
					}))), r.a.createElement("div", {
						className: Object(s.a)(l.a.collapsibleAnswer, i)
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
				i = a("./src/reddit/components/MarketingPageFooter/index.m.less"),
				l = a.n(i),
				s = a("./src/lib/classNames/index.ts");
			const {
				fbt: c
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => r.a.createElement("div", {
				className: Object(s.a)(e.className, l.a.marketingPageFooter)
			}, r.a.createElement("div", {
				className: Object(s.a)(e.className, l.a.marketingPageFooterInner)
			}, r.a.createElement("div", {
				className: l.a.linkContainer
			}, r.a.createElement("div", {
				className: l.a.linkCol
			}, r.a.createElement("ul", {
				className: l.a.linkColInner
			}, r.a.createElement("li", {
				className: l.a.linkItem
			}, r.a.createElement("a", {
				className: l.a.link,
				href: "https://www.redditinc.com/"
			}, c._("about", null, {
				hk: "3IO4c7"
			}))), r.a.createElement("li", {
				className: l.a.linkItem
			}, r.a.createElement("a", {
				className: l.a.link,
				href: "https://www.redditinc.com/careers"
			}, c._("careers", null, {
				hk: "2GATRU"
			}))), r.a.createElement("li", {
				className: l.a.linkItem
			}, r.a.createElement("a", {
				className: l.a.link,
				href: "https://www.redditinc.com/press"
			}, c._("press", null, {
				hk: "iUiGg"
			}))))), r.a.createElement("div", {
				className: l.a.linkCol
			}, r.a.createElement("ul", {
				className: l.a.linkColInner
			}, r.a.createElement("li", {
				className: l.a.linkItem
			}, r.a.createElement("a", {
				className: l.a.link,
				href: "https://www.redditinc.com/advertising"
			}, c._("advertise", null, {
				hk: "RYuIn"
			}))), r.a.createElement("li", {
				className: l.a.linkItem
			}, r.a.createElement("a", {
				className: l.a.link,
				href: "http://www.redditblog.com/"
			}, c._("blog", null, {
				hk: "4xzWuA"
			}))), r.a.createElement("li", {
				className: l.a.linkItem
			}, r.a.createElement("a", {
				className: l.a.link,
				href: "https://www.reddithelp.com"
			}, c._("help", null, {
				hk: "36XyzA"
			}))))), r.a.createElement("div", {
				className: Object(s.a)(l.a.linkCol, l.a.linkBoldCol)
			}, r.a.createElement("ul", {
				className: l.a.linkColInner
			}, r.a.createElement("li", {
				className: l.a.linkItem
			}, r.a.createElement("a", {
				className: l.a.link,
				href: "https://www.reddit.com/coins"
			}, c._("reddit coins", null, {
				hk: "3Ts6tu"
			}))), r.a.createElement("li", {
				className: l.a.linkItem
			}, r.a.createElement("a", {
				className: l.a.link,
				href: "https://www.reddit.com/premium"
			}, c._("reddit premium", null, {
				hk: "3vPbLO"
			}))))), r.a.createElement("div", {
				className: Object(s.a)(l.a.linkCol, l.a.linkBoldCol)
			}, r.a.createElement("ul", {
				className: l.a.linkColInner
			}, r.a.createElement("li", {
				className: l.a.linkItem
			}, r.a.createElement("a", {
				className: l.a.link,
				href: "https://www.facebook.com/reddit/"
			}, c._("Facebook", null, {
				hk: "47DT2F"
			}))), r.a.createElement("li", {
				className: l.a.linkItem
			}, r.a.createElement("a", {
				className: l.a.link,
				href: "https://twitter.com/reddit"
			}, c._("Twitter", null, {
				hk: "3aUv7u"
			}))), r.a.createElement("li", {
				className: l.a.linkItem
			}, r.a.createElement("a", {
				className: l.a.link,
				href: "https://www.instagram.com/reddit/"
			}, c._("Instagram", null, {
				hk: "dVIRX"
			})))))), r.a.createElement("ul", {
				className: l.a.legal
			}, r.a.createElement("li", {
				className: l.a.legalItem
			}, r.a.createElement("a", {
				className: l.a.legalLink,
				href: "https://www.redditinc.com/policies/content-policy"
			}, c._("content policy", null, {
				hk: "4ptiaZ"
			}))), r.a.createElement("li", {
				className: l.a.legalItem
			}, r.a.createElement("a", {
				className: l.a.legalLink,
				href: "https://www.reddit.com/help/privacypolicy"
			}, c._("privacy policy", null, {
				hk: "1ybjnz"
			}))), r.a.createElement("li", {
				className: l.a.legalItem
			}, r.a.createElement("a", {
				className: l.a.legalLink,
				href: "https://www.redditinc.com/policies/user-agreement"
			}, c._("user agreement", null, {
				hk: "4puRxC"
			}))), r.a.createElement("li", {
				className: l.a.legalItem
			}, r.a.createElement("a", {
				className: l.a.legalLink,
				href: "https://www.reddit.com/help/healthycommunities/"
			}, c._("mod policy", null, {
				hk: "1VvAdM"
			}))), r.a.createElement("li", {
				className: l.a.legalItem
			}, c._("© {year} Reddit, Inc. All rights reserved", [c._param("year", (new Date).getFullYear().toString())], {
				hk: "23FUx6"
			})))))
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
			a.d(t, "c", (function() {
				return i
			})), a.d(t, "d", (function() {
				return l
			})), a.d(t, "a", (function() {
				return s
			})), a.d(t, "b", (function() {
				return c
			}));
			var n = a("./node_modules/bignumber.js/bignumber.js"),
				r = a("./src/lib/prettyPrintNumber/index.ts");

			function i(e, t) {
				const a = new n.BigNumber(e),
					r = new n.BigNumber(t || 1);
				return a.dividedToIntegerBy(r).toString()
			}

			function l(e, t) {
				return Object(r.b)(parseInt(i(e, t), 10))
			}

			function s(e, t) {
				const a = new n.BigNumber(e),
					r = new n.BigNumber(t || 1);
				return a.multipliedBy(r).toFixed(0)
			}

			function c(e) {
				const t = new n.BigNumber(e),
					a = new n.BigNumber("1e18");
				return t.dividedBy(a).toString()
			}
		},
		"./src/reddit/pages/Predictions/BannerCircles.m.less": function(e, t, a) {
			e.exports = {
				animatedCircle: "_3ygsRQNsp81DI5GRglsdv2",
				animateTransformX: "_2nsRZDDcGMLBsKvZqgQiDt",
				circleOrangeFull: "_38WqM4FgFTWZmRByhdd2cL",
				circleOrangeHollow: "_3Ylylt6Da_0LIMVWYghHqc",
				circleYellowSmall: "_3N5q3y6Q3taWFywSdq4qAL",
				top: "_3w2YLCwy06M-olmNpGpSAW",
				bottom: "_9GRwwdF6ysMCOxzOLoN0w",
				circleYellowBig: "_3PYC1PougncMKM8sv4SqEX",
				circleYellowHollow: "_23d3CNpKAEOKk-qfsQyh21",
				circleDotted: "_2dijSygIJXtnUJltKJWoVM",
				circleStriped: "_3deB3XXXDsi7oSt4rmG_bI",
				background: "TtCCj4d-mJTvDUDC7gnH8",
				diagonalLayoutPrimary: "_2KNU0GNqC5D4_-DsQUsg7n",
				diagonalLayoutSecondary: "_1v1RVfAG5i8ryNTInIDDZH"
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
				circleFaqYellowBig: "_60J60lNmLaupZilmVPVCf",
				circleFaqDotted: "curctjKPcmwGaLEbEJdAV",
				circleFaqCyanSmall: "_3OhBgoQiavhog080YxCxgp",
				circleFaqYellowSmall: "jnzNgEadZcgDf4etMBcCV",
				circleFaqCyanBig: "_3NXY313LFUfvjNedO26EQp",
				circleFaqOrange: "gF52Jq9-tz9Od6EFqDImV",
				circleFaqYellowHollow: "_3VPAC5p98mtJkCEdr1aU7S",
				faqQuestionMark: "-Ug7V4VthXoW2qsojwfXj",
				faqQuestionMarkTopLeft: "_2rLO3OD5m6JNaBU5npvSxJ",
				faqQuestionMarkTopRight: "fZxiOAc94-7S8Zl83d9Dt",
				faqQuestionMarkLeft: "_3rLXFd6eyLaYYJksJ4sTY6",
				faqQuestionMarkBottomRight: "_29AtGtMIoySsaiT0etACJB",
				faqQuestionMarkRight: "_1CiZyCZnVOTCAHvteVMhUX",
				faqHeading: "_12DjdJ-k6PtyVSE6dZEcve",
				faqs: "_2s3JRtQKw_XVoTh5Vsh0JI",
				faqMoreQuestionsHeading: "_1YuKoDl6AkagomkSSGK045",
				collapsibleFaq: "KVfwPn2TlZyXiTTUJ7Ody",
				fullFaqsButton: "_2WRgCBdAHdPPA7rbpXbg6l",
				faqTryOutHeading: "_17cdX8mDHsir1YeOFzlBzV"
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
				i = a.n(r),
				l = a("./node_modules/react-redux/es/index.js"),
				s = a("./src/lib/classNames/index.ts"),
				c = a("./src/lib/getMobileOperatingSystem/index.ts"),
				o = a("./src/reddit/components/MarketingPageFooter/index.tsx"),
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
						l = Object(u.a)(t, {
							locale: r,
							...n
						});
					return i.a.createElement("span", {
						className: a
					}, l)
				},
				g = a("./src/reddit/controls/RadioInput/index.tsx"),
				h = a("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				b = a("./src/reddit/selectors/telemetry.ts");
			var k = a("./src/reddit/hooks/useTracking.ts"),
				_ = (a("./node_modules/core-js/modules/web.dom.iterable.js"), a("./src/reddit/models/Subreddit/index.ts")),
				f = a("./src/reddit/selectors/moderatorPermissions.ts");
			const N = e => {
				const t = Object(f.l)(e);
				return t ? Object.keys(t).reduce((t, a) => {
					const n = e.subreddits.models[a];
					if (!n) return t;
					const {
						allowPredictionsTournament: r,
						displayText: i,
						isNSFW: l,
						subscribers: s,
						type: c,
						url: o
					} = n;
					return !r && c === _.f.Public && !l && s >= P && t.push({
						id: a,
						subredditUrl: o,
						displayText: i
					}), t
				}, []) : null
			};
			var w = a("./src/reddit/controls/Button/index.tsx");
			const {
				fbt: y
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			var E = e => {
					let {
						isEligibleMod: t,
						selectedSubredditUrl: a,
						modSubredditsInfo: n,
						onClose: r
					} = e;
					const l = Object(k.a)();
					if (!t) {
						const e = () => {
							l((() => e => ({
								...Object(b.o)(e),
								source: "start_predictions_modal",
								action: "click",
								noun: "close"
							}))()), r()
						};
						return i.a.createElement(w.k, {
							onClick: e,
							isFullWidth: !0
						}, y._("Close", null, {
							hk: "3Qarlp"
						}))
					}
					return i.a.createElement("a", {
						href: `${a}about/edit?page=posts`
					}, i.a.createElement(w.k, {
						onClick: () => {
							const e = n.find(e => {
								let {
									subredditUrl: t
								} = e;
								return a === t
							});
							e && l((e => t => ({
								...Object(b.o)(t),
								source: "start_predictions_modal",
								action: "click",
								noun: "create_predictions_tournament",
								subreddit: {
									id: e
								}
							}))(e.id))
						},
						isFullWidth: !0
					}, y._("Start Using Predictions", null, {
						hk: "2AMnj"
					})))
				},
				v = a("./node_modules/fbt/lib/FbtPublic.js"),
				C = a("./src/reddit/icons/fonts/index.tsx"),
				O = a("./src/reddit/components/PredictionsSignupModal/index.m.less"),
				I = a.n(O);
			const S = e => {
				let {
					children: t,
					accentDiagonalCustomStyles: a
				} = e;
				return i.a.createElement("div", {
					className: I.a.background
				}, i.a.createElement("div", {
					className: I.a.diagonalLayoutSecondary,
					style: a
				}), i.a.createElement("div", {
					className: I.a.diagonalLayoutPrimary
				}), i.a.createElement("div", {
					className: Object(s.a)(I.a.circle, I.a.lineCircle),
					style: {
						backgroundImage: `url(${n.a.assetPath}/img/powerups/linecircle-blue.png)`
					}
				}), i.a.createElement("div", {
					className: Object(s.a)(I.a.circle, I.a.circleOrangeHollow)
				}), i.a.createElement("div", {
					className: Object(s.a)(I.a.circle, I.a.dotCircle1),
					style: {
						backgroundImage: `url(${n.a.assetPath}/img/powerups/dotcircle.png)`
					}
				}), i.a.createElement("div", {
					className: Object(s.a)(I.a.circle, I.a.circleGreenFilled)
				}), i.a.createElement("div", {
					className: Object(s.a)(I.a.circle, I.a.circleGreenHollow)
				}), i.a.createElement("div", {
					className: Object(s.a)(I.a.circle, I.a.circleYellowHollow)
				}), i.a.createElement("div", {
					className: Object(s.a)(I.a.circle, I.a.dotCircle2),
					style: {
						backgroundImage: `url(${n.a.assetPath}/img/powerups/dotcircle.png)`
					}
				}), t)
			};
			var j = e => {
				let {
					children: t,
					onClose: a
				} = e;
				return i.a.createElement("div", {
					className: I.a.container
				}, i.a.createElement(S, {
					accentDiagonalCustomStyles: {
						background: "#ddbd37"
					}
				}, i.a.createElement("div", {
					className: I.a.headerImageContainer
				}, i.a.createElement("img", {
					className: I.a.headerImage,
					alt: "Predictor Snoos",
					src: `${n.a.assetPath}/img/econ/predictions/predictor_snoos.png`
				}))), i.a.createElement(w.t, {
					"aria-label": v.fbt._("Close", null, {
						hk: "26np07"
					}),
					className: I.a.closeButton,
					Icon: Object(C.b)("close"),
					onClick: a,
					priority: w.c.Plain
				}), i.a.createElement("div", {
					className: I.a.body
				}, t))
			};
			const {
				fbt: x
			} = a("./node_modules/fbt/lib/FbtPublic.js"), P = 1e4;
			var F = Object(m.a)(e => {
					let {
						onClose: t
					} = e;
					var a;
					const n = Object(k.a)(),
						s = Object(l.e)(N),
						[c, o] = Object(r.useState)(s && (null === (a = s[0]) || void 0 === a ? void 0 : a.subredditUrl) || "");
					Object(r.useEffect)(() => {
						n((() => e => ({
							...Object(b.o)(e),
							source: "predictions_marketing_page",
							action: "view",
							noun: "start_predictions_modal"
						}))())
					}, [n]);
					const m = Boolean(null == s ? void 0 : s.length),
						d = m ? x._("Start a Tournament", null, {
							hk: "329F3U"
						}) : x._("Only moderators of communities that have at least {Minimum subscribers required to enable Prediction} members can turn on predictions.", [x._param("Minimum subscribers required to enable Prediction", i.a.createElement(p, {
							num: P
						}))], {
							hk: "3VaFr8"
						});
					return i.a.createElement(j, {
						onClose: t
					}, i.a.createElement("div", {
						className: I.a.titleContainer
					}, i.a.createElement("h1", {
						className: I.a.titleText
					}, d), m && i.a.createElement("h2", {
						className: I.a.subtitleText
					}, x._("Choose the community where you’d like to turn on Predictions", null, {
						hk: "1aaKTn"
					}))), m && i.a.createElement("div", {
						className: I.a.radioContainer
					}, i.a.createElement(g.a, {
						name: x._("subreddit", null, {
							hk: "sueo0"
						}),
						value: c,
						onChange: e => o(e)
					}, s.map(e => {
						let {
							id: t,
							subredditUrl: a,
							displayText: n
						} = e;
						const r = c === a;
						return i.a.createElement(h.a, {
							className: I.a.radioOption,
							key: t,
							selected: r,
							showButton: !0,
							value: a
						}, n)
					}))), !m && i.a.createElement("h3", {
						className: I.a.disclaimer
					}, x._("Predictions creation is only available on Web and iOS at this time.", null, {
						hk: "J1xBl"
					})), i.a.createElement(E, {
						isEligibleMod: m,
						selectedSubredditUrl: c,
						modSubredditsInfo: s,
						onClose: t
					}))
				}),
				q = a("./src/reddit/selectors/user.ts"),
				B = a("./src/reddit/pages/Predictions/BannerCircles.m.less"),
				W = a.n(B);
			const D = e => {
				let {
					className: t,
					isNightmodeOn: a,
					accentDiagonalCustomStyles: r
				} = e;
				return i.a.createElement("div", {
					className: Object(s.a)(W.a.background, t)
				}, i.a.createElement("div", {
					className: W.a.diagonalLayoutSecondary,
					style: r
				}), i.a.createElement("div", {
					className: W.a.diagonalLayoutPrimary
				}), i.a.createElement("div", {
					className: W.a.circleDotted,
					style: {
						backgroundImage: `url(${n.a.assetPath}/img/powerups/dotcircle.png)`
					}
				}), i.a.createElement("div", {
					className: Object(s.a)(W.a.animatedCircle, W.a.circleStriped),
					style: {
						backgroundImage: a ? `url(${n.a.assetPath}/img/powerups/linecircle-orange.png)` : `url(${n.a.assetPath}/img/powerups/linecircle-blue.png)`
					}
				}), i.a.createElement("div", {
					className: Object(s.a)(W.a.circleOrangeFull, W.a.animatedCircle)
				}), i.a.createElement("div", {
					className: Object(s.a)(W.a.circleYellowSmall, W.a.top, W.a.animatedCircle)
				}), i.a.createElement("div", {
					className: Object(s.a)(W.a.circleYellowBig, W.a.animatedCircle)
				}), i.a.createElement("div", {
					className: Object(s.a)(W.a.circleYellowHollow, W.a.animatedCircle)
				}), i.a.createElement("div", {
					className: Object(s.a)(W.a.circleYellowSmall, W.a.bottom, W.a.animatedCircle)
				}), i.a.createElement("div", {
					className: Object(s.a)(W.a.circleOrangeHollow, W.a.animatedCircle)
				}))
			};
			var T = a("./node_modules/react-router-dom/esm/react-router-dom.js"),
				M = a("./src/lib/opener/index.ts"),
				L = a("./src/reddit/hooks/useIsClient.ts"),
				A = a("./src/reddit/pages/Predictions/Communities.m.less"),
				Y = a.n(A);
			const {
				fbt: U
			} = a("./node_modules/fbt/lib/FbtPublic.js"), G = [{
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
			}], H = () => {
				const e = Object(k.a)(),
					t = Object(l.e)(q.db),
					a = Object(L.a)(),
					r = () => {
						e((() => e => ({
							...Object(b.o)(e),
							source: "predictions_marketing_page",
							action: "click",
							noun: "community"
						}))())
					};
				return a ? i.a.createElement("section", {
					className: Object(s.a)(Y.a.communitiesContainer, {
						[Y.a.isNightMode]: t
					})
				}, i.a.createElement("h2", {
					className: Y.a.communitiesHeading
				}, U._("Previous tournaments", null, {
					hk: "2TCJGF"
				})), i.a.createElement("div", {
					className: Y.a.communitiesContent
				}, G.map(e => {
					let {
						subredditName: t,
						participationCount: a,
						tournamentName: l
					} = e;
					return i.a.createElement(T.a, {
						className: Y.a.community,
						key: t,
						to: `r/${t}/predictions`,
						target: M.d.BLANK,
						rel: M.c,
						onClick: r
					}, i.a.createElement("div", {
						className: Y.a.communityIcon,
						style: {
							backgroundImage: `url(${n.a.assetPath}/img/econ/predictions/${t}.png)`
						}
					}), i.a.createElement("div", {
						className: Y.a.communityContainer
					}, i.a.createElement("div", null, "r/", t), i.a.createElement("div", {
						className: Y.a.communityStatistics
					}, U._("{=[number of participants]} participants in the {subreddit tournament name} Tournament", [U._param("=[number of participants]", i.a.createElement("span", {
						className: Y.a.participationCount
					}, U._("{number of participants}", [U._param("number of participants", a)], {
						hk: "OjESd"
					}))), U._param("subreddit tournament name", l)], {
						hk: "lgx3v"
					}))))
				}))) : null
			};
			var Q = a("./src/reddit/components/CollapsibleFAQ/index.tsx"),
				K = a("./src/reddit/pages/Predictions/FaqSection.m.less"),
				R = a.n(K);
			const V = [{
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
				J = () => {
					const e = Object(k.a)();
					return i.a.createElement("div", {
						className: R.a.faqSection
					}, i.a.createElement("div", {
						className: Object(s.a)(R.a.faqSectionContent, R.a.contentWrapper)
					}, i.a.createElement(Z, null), i.a.createElement("h2", {
						className: R.a.faqHeading
					}, v.fbt._("Questions about Predictions?", null, {
						hk: "3e9tVH"
					})), i.a.createElement("div", {
						className: R.a.faqs
					}, V.map((e, t) => {
						let {
							prompt: a,
							answer: n
						} = e;
						return i.a.createElement(Q.a, {
							className: R.a.collapsibleFaq,
							defaultClosed: !0,
							question: a,
							key: t
						}, n)
					})), i.a.createElement("h3", {
						className: R.a.faqMoreQuestionsHeading
					}, v.fbt._("Have more questions? We've got answers.", null, {
						hk: "3Entyj"
					})), i.a.createElement(w.t, {
						className: R.a.fullFaqsButton,
						priority: w.c.Secondary,
						href: "https://mods.reddithelp.com/hc/en-us/articles/4409834282509",
						onClick: () => {
							e((() => e => ({
								...Object(b.o)(e),
								source: "predictions_marketing_page",
								action: "click",
								noun: "view_full_faqs"
							}))())
						},
						kind: w.b.ExternalLink,
						target: "_blank"
					}, v.fbt._("View Full FAQs", null, {
						hk: "1eOLlL"
					}))))
				},
				X = () => i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
					className: R.a.circleFaqYellowBig
				}), i.a.createElement("div", {
					className: R.a.circleFaqCyanSmall
				}), i.a.createElement("div", {
					className: R.a.circleFaqDotted,
					style: {
						backgroundImage: `url(${n.a.assetPath}/img/powerups/dotcircle.png)`
					}
				}), i.a.createElement("div", {
					className: R.a.circleFaqYellowSmall
				}), i.a.createElement("div", {
					className: R.a.circleFaqCyanBig
				}), i.a.createElement("div", {
					className: R.a.circleFaqOrange
				}), i.a.createElement("div", {
					className: R.a.circleFaqYellowHollow
				})),
				z = () => i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
					className: Object(s.a)(R.a.faqQuestionMark, R.a.faqQuestionMarkRight)
				}), i.a.createElement("div", {
					className: Object(s.a)(R.a.faqQuestionMark, R.a.faqQuestionMarkTopLeft)
				}), i.a.createElement("div", {
					className: Object(s.a)(R.a.faqQuestionMark, R.a.faqQuestionMarkTopRight)
				}), i.a.createElement("div", {
					className: Object(s.a)(R.a.faqQuestionMark, R.a.faqQuestionMarkLeft)
				}), i.a.createElement("div", {
					className: Object(s.a)(R.a.faqQuestionMark, R.a.faqQuestionMarkBottomRight)
				})),
				Z = () => i.a.createElement(i.a.Fragment, null, i.a.createElement(X, null), i.a.createElement(z, null));
			var $ = a("./src/reddit/pages/Predictions/Incentives.m.less"),
				ee = a.n($);
			const {
				fbt: te
			} = a("./node_modules/fbt/lib/FbtPublic.js"), ae = [{
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
			}], ne = e => {
				let {
					title: t,
					description: a,
					imageName: r,
					isReversed: l
				} = e;
				return i.a.createElement("div", {
					className: Object(s.a)(ee.a.perkCell, {
						[ee.a.isReversed]: l
					})
				}, i.a.createElement("div", {
					className: ee.a.perkImageContainer
				}, i.a.createElement("img", {
					alt: `Prediction incentive ${t}`,
					className: ee.a.perkImage,
					src: `${n.a.assetPath}/img/econ/predictions/${r}.png`
				})), i.a.createElement("div", {
					className: ee.a.perkText
				}, i.a.createElement("h3", {
					className: ee.a.perkTitle
				}, te._("{perkName}", [te._param("perkName", t)], {
					hk: "22kzoU"
				})), i.a.createElement("h4", {
					className: ee.a.perkDescription
				}, te._("{perkDescription}", [te._param("perkDescription", a)], {
					hk: "3F6M9G"
				}))))
			}, re = () => i.a.createElement("div", {
				className: Object(s.a)(ee.a.perksSection)
			}, i.a.createElement("div", {
				className: Object(s.a)(ee.a.perksSectionGrid)
			}, ae.map(e => {
				let {
					title: t,
					description: a,
					imageName: n,
					isReversed: r
				} = e;
				return i.a.createElement(ne, {
					key: t,
					title: t,
					description: a,
					imageName: n,
					isReversed: r
				})
			})));
			var ie = a("./src/reddit/pages/Predictions/index.m.less"),
				le = a.n(ie);
			const {
				fbt: se
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			t.default = () => {
				const e = Object(k.a)(),
					t = Object(l.e)(q.db),
					[a, m] = Object(r.useState)(!1);
				let d = !1;
				"undefined" != typeof window && void 0 !== window.navigator && (d = Object(c.b)() === c.a), Object(r.useEffect)(() => {
					e((() => e => ({
						source: "global",
						action: "view",
						noun: "screen",
						...Object(b.o)(e),
						actionInfo: Object(b.d)(e, {
							pageType: "predictions_marketing_page"
						})
					}))())
				}, [e]);
				const u = () => m(!0),
					p = () => m(!1);
				return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
					className: le.a.headingSection
				}, i.a.createElement(D, {
					className: le.a.contentWrapper,
					isNightmodeOn: t,
					accentDiagonalCustomStyles: {
						background: "#ddbd37"
					}
				}), i.a.createElement("div", {
					className: Object(s.a)(le.a.contentWrapper, le.a.headingContent)
				}, i.a.createElement("div", {
					className: le.a.headingText
				}, i.a.createElement("h1", {
					className: le.a.heading
				}, i.a.createElement("img", {
					alt: se._("Reddit Predictions", null, {
						hk: "4B4NPQ"
					}),
					className: le.a.logo,
					src: `${n.a.assetPath}/img/econ/predictions/reddit_predictions_logo.png`
				})), i.a.createElement("h2", {
					className: le.a.subheading
				}, se._("Become the world’s greatest predictor on any topic.", null, {
					hk: "3XkX8B"
				})), i.a.createElement("p", {
					className: Object(s.a)(le.a.description, le.a.bodyText)
				}, se._("Who will win the game tomorrow? Which character will meet their fate in the next episode? Flex your knowledge of a topic in a prediction tournament!", null, {
					hk: "2x0Fec"
				})), i.a.createElement("div", {
					className: Object(s.a)(le.a.modWarning, le.a.bodyText)
				}, i.a.createElement("div", {
					className: le.a.modWarningTop
				}, i.a.createElement(C.a, {
					name: "mod",
					className: le.a.modWarningIcon
				})), se._("{=Only moderators of communities that are public, safe for work, and have at least 10,000 members can turn on predictions.}", [se._param("=Only moderators of communities that are public, safe for work, and have at least 10,000 members can turn on predictions.", i.a.createElement("div", null, se._("Only moderators of communities that are public, safe for work, and have at least 10,000 members can turn on predictions.", null, {
					hk: "4tXdPf"
				})))], {
					hk: "kXZNE"
				})), !d && i.a.createElement(w.k, {
					onClick: () => {
						e((() => e => ({
							...Object(b.o)(e),
							source: "predictions_marketing_page",
							action: "click",
							noun: "start_predictions_modal"
						}))()), u()
					},
					priority: w.c.Primary,
					className: le.a.ctaButton
				}, se._("Turn on Predictions", null, {
					hk: "2zU4Cm"
				}))), i.a.createElement("div", {
					className: le.a.headingArt
				}, i.a.createElement("div", {
					className: le.a.predictionsMarketingImageContainer
				}, i.a.createElement("img", {
					alt: se._("Predictor Snoos", null, {
						hk: "2VJBoC"
					}),
					className: le.a.predictionsMarketingImage,
					src: `${n.a.assetPath}/img/econ/predictions/predictor_snoos.png`
				}))))), i.a.createElement(H, null), i.a.createElement("div", {
					className: le.a.relativeContainer
				}, i.a.createElement("div", {
					className: Object(s.a)(le.a.circle, le.a.circleCyanHollow)
				})), i.a.createElement(re, null), i.a.createElement("div", {
					className: le.a.howItWorksStepsSection
				}, i.a.createElement("h2", {
					className: le.a.howItWorksHeading
				}, se._("How it works", null, {
					hk: "4yfhNH"
				})), i.a.createElement("div", {
					className: Object(s.a)(le.a.howItWorksStepsSectionContent, le.a.contentWrapper)
				}, i.a.createElement("div", {
					className: Object(s.a)(le.a.circle, le.a.circleStepsYellowFull)
				}), i.a.createElement("div", {
					className: Object(s.a)(le.a.circle, le.a.circleStepsStriped),
					style: {
						backgroundImage: t ? `url(${n.a.assetPath}/img/powerups/linecircle-orange.png)` : `url(${n.a.assetPath}/img/powerups/linecircle-blue.png)`
					}
				}), i.a.createElement("div", {
					className: le.a.howItWorksStep
				}, i.a.createElement("div", {
					className: le.a.howItWorksStepCount
				}, "1"), i.a.createElement("div", {
					className: le.a.howItWorksStepName
				}, se._("Mods create a tournament", null, {
					hk: "1KjpAb"
				})), i.a.createElement("div", {
					className: le.a.howItWorksStepDescription
				}, se._("A tournament is a series of questions where redditors predict the answers. Mods can add as many questions as they want, even after the tournament has started.", null, {
					hk: "1CySSW"
				}))), i.a.createElement("div", {
					className: le.a.howItWorksStep
				}, i.a.createElement("div", {
					className: le.a.howItWorksStepCount
				}, "2"), i.a.createElement("div", {
					className: le.a.howItWorksStepName
				}, se._("Redditors make predictions", null, {
					hk: "4Dw0MP"
				})), i.a.createElement("div", {
					className: le.a.howItWorksStepDescription
				}, se._("Redditors get prediction tokens when joining a tournament, and use tokens for each prediction they submit. More tokens = bigger reward.", null, {
					hk: "3LX1yL"
				}))), i.a.createElement("div", {
					className: le.a.howItWorksStep
				}, i.a.createElement("div", {
					className: le.a.howItWorksStepCount
				}, "3"), i.a.createElement("div", {
					className: le.a.howItWorksStepName
				}, se._("Mods pick the answers and thus, the winners", null, {
					hk: "1TMDGG"
				})), i.a.createElement("div", {
					className: le.a.howItWorksStepDescription
				}, se._("Mods choose the correct answers, so they control who wins the tournament!", null, {
					hk: "4gxz6G"
				}))))), i.a.createElement(J, null), i.a.createElement("div", {
					className: le.a.tryOutSection
				}, i.a.createElement("h2", {
					className: le.a.tryOutHeading
				}, se._("Try out Predictions", null, {
					hk: "8IETg"
				})), i.a.createElement("h3", {
					className: le.a.tryOutSubheading
				}, se._("Create a tournament and get your community predicting!", null, {
					hk: "utApr"
				})), !d && i.a.createElement(w.k, {
					onClick: () => {
						e((() => e => ({
							...Object(b.o)(e),
							source: "predictions_marketing_page",
							action: "click",
							noun: "lets_do_this"
						}))()), u()
					},
					priority: w.c.Primary,
					className: le.a.ctaLetsDoThisButton
				}, se._("Let's Do This!", null, {
					hk: "2rvUWV"
				})), i.a.createElement(ce, null)), i.a.createElement(o.a, {
					className: le.a.footer
				}), a && i.a.createElement(F, {
					withOverlay: !0,
					onOverlayClick: p,
					onClose: p,
					className: le.a.modalBody,
					overlayClassName: le.a.modalOverlay
				}))
			};
			const ce = () => {
				const e = Object(l.e)(q.db);
				return i.a.createElement("div", {
					className: le.a.ctaButtonCirclesAndBolt
				}, i.a.createElement("div", {
					className: le.a.circleFaqCtaStriped,
					style: {
						backgroundImage: e ? `url(${n.a.assetPath}/img/powerups/linecircle-orange.png)` : `url(${n.a.assetPath}/img/powerups/linecircle-blue.png)`
					}
				}), i.a.createElement("div", {
					className: le.a.circleFaqCtaYellowBig
				}), i.a.createElement("img", {
					alt: se._("Predictor Snoo", null, {
						hk: "2bpdfe"
					}),
					className: le.a.predictorSnooImage,
					src: `${n.a.assetPath}/img/econ/predictions/predictor_snoo.png`
				}), i.a.createElement("div", {
					className: le.a.circleFaqCtaCyanHollow
				}))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Predictions.2328961ef29ca3512308.js.map