// https://www.redditstatic.com/desktop2x/Predictions.da2fc0dfa350bc655488.js
// Retrieved at 11/4/2021, 10:30:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Predictions", "Powerups"], {
		"./node_modules/lodash/_arraySampleSize.js": function(e, t, a) {
			var n = a("./node_modules/lodash/_baseClamp.js"),
				r = a("./node_modules/lodash/_copyArray.js"),
				s = a("./node_modules/lodash/_shuffleSelf.js");
			e.exports = function(e, t) {
				return s(r(e), n(t, 0, e.length))
			}
		},
		"./node_modules/lodash/_baseClamp.js": function(e, t) {
			e.exports = function(e, t, a) {
				return e == e && (void 0 !== a && (e = e <= a ? e : a), void 0 !== t && (e = e >= t ? e : t)), e
			}
		},
		"./node_modules/lodash/_baseRandom.js": function(e, t) {
			var a = Math.floor,
				n = Math.random;
			e.exports = function(e, t) {
				return e + a(n() * (t - e + 1))
			}
		},
		"./node_modules/lodash/_baseSampleSize.js": function(e, t, a) {
			var n = a("./node_modules/lodash/_baseClamp.js"),
				r = a("./node_modules/lodash/_shuffleSelf.js"),
				s = a("./node_modules/lodash/values.js");
			e.exports = function(e, t) {
				var a = s(e);
				return r(a, n(t, 0, a.length))
			}
		},
		"./node_modules/lodash/_shuffleSelf.js": function(e, t, a) {
			var n = a("./node_modules/lodash/_baseRandom.js");
			e.exports = function(e, t) {
				var a = -1,
					r = e.length,
					s = r - 1;
				for (t = void 0 === t ? r : t; ++a < t;) {
					var o = n(a, s),
						l = e[o];
					e[o] = e[a], e[a] = l
				}
				return e.length = t, e
			}
		},
		"./node_modules/lodash/sampleSize.js": function(e, t, a) {
			var n = a("./node_modules/lodash/_arraySampleSize.js"),
				r = a("./node_modules/lodash/_baseSampleSize.js"),
				s = a("./node_modules/lodash/isArray.js"),
				o = a("./node_modules/lodash/_isIterateeCall.js"),
				l = a("./node_modules/lodash/toInteger.js");
			e.exports = function(e, t, a) {
				return t = (a ? o(e, t, a) : void 0 === t) ? 1 : l(t), (s(e) ? n : r)(e, t)
			}
		},
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
				return s
			})), a.d(t, "d", (function() {
				return o
			})), a.d(t, "a", (function() {
				return l
			})), a.d(t, "f", (function() {
				return i
			})), a.d(t, "g", (function() {
				return c
			})), a.d(t, "e", (function() {
				return m
			}));
			var n, r = a("./node_modules/fbt/lib/FbtPublic.js");
			! function(e) {
				e.Real = "real", e.Crypto = "crypto", e.Reddit = "reddit"
			}(n || (n = {}));
			const s = "USD",
				o = "ETH",
				l = "COINS",
				i = [o, "BTC"],
				c = [l, "SUBREDDIT_POINTS", "GAME_TOKENS"],
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
		"./src/lib/localizeCurrency/index.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return c
			})), a.d(t, "b", (function() {
				return m
			}));
			var n = a("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				r = a("./src/lib/currency/centsToDollars/index.ts"),
				s = a("./src/lib/currency/currencies.ts"),
				o = a("./src/lib/prettyPrintNumber/index.ts"),
				l = a("./src/reddit/helpers/governance/tokens.ts"),
				i = a("./src/reddit/constants/intlSupport.ts");
			const c = (e, {
					locale: t = n.DEFAULT_LOCALE,
					pretty: a,
					formatOptions: r
				} = {}) => {
					const s = Number(e);
					return Object(i.c)() ? a ? Object(o.b)(s) : new Intl.NumberFormat(t, r).format(s) : d(s, a, t)
				},
				m = (e, t = {}) => {
					const {
						locale: a = n.DEFAULT_LOCALE,
						pretty: o,
						formatOptions: c,
						displayConversion: m,
						forceDecimals: h,
						currency: g = t.currency || (t.type ? p(t.type) : s.c),
						type: b = t.type || (t.currency ? u(t.currency) : s.b.Real)
					} = t, k = Number(e), _ = String(e);
					switch (b) {
						case s.b.Reddit: {
							const e = s.e[g],
								t = e ? e() : g;
							return Object(i.c)() ? new Intl.NumberFormat(a, {
								currencyDisplay: "symbol",
								...c
							}).format(k) + " " + t : d(k, o, a, t)
						}
						case s.b.Crypto: {
							if (o) {
								return Object(l.c)(_, m) + " " + g
							}
							const e = Number(Object(l.b)(_, m));
							return Object(i.c)() ? new Intl.NumberFormat(a, {
								style: "currency",
								currency: g,
								currencyDisplay: "symbol",
								minimumFractionDigits: 0,
								maximumFractionDigits: 0,
								...c
							}).format(e) : d(e, o, a, g)
						}
						case s.b.Real:
						default: {
							const e = Number(Object(r.a)(_, h));
							return Object(i.c)() ? new Intl.NumberFormat(a, {
								style: "currency",
								currency: g,
								currencyDisplay: "symbol",
								notation: o ? "compact" : "standard",
								...c
							}).format(e) : d(e, o, a, g)
						}
					}
				},
				d = (e, t, a, n) => {
					return (t ? Object(o.b)(e) : e.toLocaleString(a)) + (n ? " " + n : "")
				},
				u = e => s.g.includes(e.toUpperCase()) ? s.b.Reddit : s.f.includes(e.toUpperCase()) ? s.b.Crypto : s.b.Real,
				p = e => {
					switch (e) {
						case s.b.Crypto:
							return s.d;
						case s.b.Reddit:
							return s.a;
						case s.b.Real:
						default:
							return s.c
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
				s = a("./src/reddit/components/CollapsibleFAQ/index.m.less"),
				o = a.n(s),
				l = a("./src/lib/classNames/index.ts"),
				i = a("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
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
					} = this.state, s = n ? o.a.isOpen : "";
					return r.a.createElement("div", {
						className: Object(l.a)(e, o.a.collapsibleFAQ)
					}, r.a.createElement("button", {
						className: o.a.questionButton,
						type: "button",
						onClick: this.toggleOpen
					}, r.a.createElement("span", {
						className: o.a.buttonContent,
						tabIndex: -1
					}, t, n ? r.a.createElement(c.a, {
						className: o.a.collapseIcon
					}) : r.a.createElement(i.a, {
						className: o.a.collapseIcon
					}))), r.a.createElement("div", {
						className: Object(l.a)(o.a.collapsibleAnswer, s)
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
				s = a("./src/reddit/components/MarketingPageFooter/index.m.less"),
				o = a.n(s),
				l = a("./src/lib/classNames/index.ts");
			const {
				fbt: i
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => r.a.createElement("div", {
				className: Object(l.a)(e.className, o.a.marketingPageFooter)
			}, r.a.createElement("div", {
				className: Object(l.a)(e.className, o.a.marketingPageFooterInner)
			}, r.a.createElement("div", {
				className: o.a.linkContainer
			}, r.a.createElement("div", {
				className: o.a.linkCol
			}, r.a.createElement("ul", {
				className: o.a.linkColInner
			}, r.a.createElement("li", {
				className: o.a.linkItem
			}, r.a.createElement("a", {
				className: o.a.link,
				href: "https://about.reddit.com"
			}, i._("about", null, {
				hk: "3IO4c7"
			}))), r.a.createElement("li", {
				className: o.a.linkItem
			}, r.a.createElement("a", {
				className: o.a.link,
				href: "https://about.reddit.com/careers/"
			}, i._("careers", null, {
				hk: "2GATRU"
			}))), r.a.createElement("li", {
				className: o.a.linkItem
			}, r.a.createElement("a", {
				className: o.a.link,
				href: "https://about.reddit.com/press/"
			}, i._("press", null, {
				hk: "iUiGg"
			}))))), r.a.createElement("div", {
				className: o.a.linkCol
			}, r.a.createElement("ul", {
				className: o.a.linkColInner
			}, r.a.createElement("li", {
				className: o.a.linkItem
			}, r.a.createElement("a", {
				className: o.a.link,
				href: "https://www.redditinc.com/advertising"
			}, i._("advertise", null, {
				hk: "RYuIn"
			}))), r.a.createElement("li", {
				className: o.a.linkItem
			}, r.a.createElement("a", {
				className: o.a.link,
				href: "http://www.redditblog.com/"
			}, i._("blog", null, {
				hk: "4xzWuA"
			}))), r.a.createElement("li", {
				className: o.a.linkItem
			}, r.a.createElement("a", {
				className: o.a.link,
				href: "https://www.reddithelp.com"
			}, i._("help", null, {
				hk: "36XyzA"
			}))))), r.a.createElement("div", {
				className: Object(l.a)(o.a.linkCol, o.a.linkBoldCol)
			}, r.a.createElement("ul", {
				className: o.a.linkColInner
			}, r.a.createElement("li", {
				className: o.a.linkItem
			}, r.a.createElement("a", {
				className: o.a.link,
				href: "https://www.reddit.com/coins"
			}, i._("reddit coins", null, {
				hk: "3Ts6tu"
			}))), r.a.createElement("li", {
				className: o.a.linkItem
			}, r.a.createElement("a", {
				className: o.a.link,
				href: "https://www.reddit.com/premium"
			}, i._("reddit premium", null, {
				hk: "3vPbLO"
			}))), r.a.createElement("li", {
				className: o.a.linkItem
			}, r.a.createElement("a", {
				className: o.a.link,
				href: "https://redditgifts.com/"
			}, i._("reddit gifts", null, {
				hk: "3WNNEy"
			}))))), r.a.createElement("div", {
				className: Object(l.a)(o.a.linkCol, o.a.linkBoldCol)
			}, r.a.createElement("ul", {
				className: o.a.linkColInner
			}, r.a.createElement("li", {
				className: o.a.linkItem
			}, r.a.createElement("a", {
				className: o.a.link,
				href: "https://www.facebook.com/reddit/"
			}, i._("Facebook", null, {
				hk: "47DT2F"
			}))), r.a.createElement("li", {
				className: o.a.linkItem
			}, r.a.createElement("a", {
				className: o.a.link,
				href: "https://twitter.com/reddit"
			}, i._("Twitter", null, {
				hk: "3aUv7u"
			}))), r.a.createElement("li", {
				className: o.a.linkItem
			}, r.a.createElement("a", {
				className: o.a.link,
				href: "https://www.instagram.com/reddit/"
			}, i._("Instagram", null, {
				hk: "dVIRX"
			})))))), r.a.createElement("ul", {
				className: o.a.legal
			}, r.a.createElement("li", {
				className: o.a.legalItem
			}, r.a.createElement("a", {
				className: o.a.legalLink,
				href: "https://www.redditinc.com/policies/content-policy"
			}, i._("content policy", null, {
				hk: "4ptiaZ"
			}))), r.a.createElement("li", {
				className: o.a.legalItem
			}, r.a.createElement("a", {
				className: o.a.legalLink,
				href: "https://www.reddit.com/help/privacypolicy"
			}, i._("privacy policy", null, {
				hk: "1ybjnz"
			}))), r.a.createElement("li", {
				className: o.a.legalItem
			}, r.a.createElement("a", {
				className: o.a.legalLink,
				href: "https://www.redditinc.com/policies/user-agreement"
			}, i._("user agreement", null, {
				hk: "4puRxC"
			}))), r.a.createElement("li", {
				className: o.a.legalItem
			}, r.a.createElement("a", {
				className: o.a.legalLink,
				href: "https://www.reddit.com/help/healthycommunities/"
			}, i._("mod policy", null, {
				hk: "1VvAdM"
			}))), r.a.createElement("li", {
				className: o.a.legalItem
			}, i._("© {year} Reddit, Inc. All rights reserved", [i._param("year", (new Date).getFullYear().toString())], {
				hk: "23FUx6"
			})))))
		},
		"./src/reddit/components/PowerupsSignUpModal/MultiSubredditForm.m.less": function(e, t, a) {
			e.exports = {
				container: "fpiu0NM2S8yHH6_ihcdWk",
				checkboxList: "_1m1zi-wGci3ttgxb9Hxaiv",
				checkbox: "_11oFoHgYhREHdxjIRuo-Y0",
				disabled: "_13t2B0OwZfs0pUbJWZX5zP",
				selectAllButton: "_3x9Z6fvYEgjxiOs6H1Uzrn",
				active: "w7Mleu6dWx4HFuv3HjRkC"
			}
		},
		"./src/reddit/components/PowerupsSignUpModal/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_3J2N8PrCM-22npsTEiB1Ku",
				body: "_2DKUhe0A1QXWcxFCdX_XKW",
				footer: "oq2jQ1_NJTwSNJW5cihhn",
				closeButton: "_1aDxdMMvhHKy3vwjBfVU_l",
				closeIcon: "_1jor546QmxB0BnzJcj0I7E",
				titleContainer: "_3Z_APi5dTftxEdjJSGvM9",
				titleText: "_3CvPXzsDdnIWv4x_vCmnXn",
				subtitleText: "_2fkQCeEu-WrnnBt_ySOlUC",
				errorContainer: "_3WoB_AHR25QdUcmAz-qOwT",
				errorIcon: "_1gDcc-buz_eRI3WojAJCCa",
				errorText: "_3xziQ12Hb_yVRuFJtSe3T4",
				successText: "V9PocUNQDrlJqgU42fd-V",
				successButton: "j-tk8OKGHvjv3YMR3rzqz",
				active: "_1IEgxz5Ly3km_iF_vCIzlF",
				background: "_24IdG0yO57Ns_cHkTgWw2x",
				diagonalLayoutPrimary: "_2YBER88ttGc9PiTkjc2-Wq",
				diagonalLayoutSecondary: "_39WpGUnkULE5PdOMtAH3cq",
				headerImageContainer: "_29KrxpIQaoPJPUxEtm4B8Q",
				headerImage: "_1ghZ6lkmdRVBj30xcXSN_I",
				circle: "X9dGk9FD4tM0l6yeMxB_a",
				lineCircle: "_2YSvKW89Z3ZZKzo1TdozwV",
				circleOrangeHollow: "e84hE0QN-IeWluXURezRL",
				dotCircle1: "_2nTLKgCJvLzlMVoEq_VOr_",
				circleGreenFilled: "_3IaaEpvnJY-YBYefnps9pN",
				circleGreenHollow: "_1Kvvdn4WL-bQHEHgd3tVlS",
				circleYellowHollow: "v3hW0tczBXwa0jx8u83mv",
				dotCircle2: "_3e8hBySJ8imySq9u5ryzne"
			}
		},
		"./src/reddit/components/PowerupsSignUpModal/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "b", (function() {
				return j
			})), a.d(t, "a", (function() {
				return I
			}));
			a("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = a("./src/config.ts"),
				r = a("./node_modules/react/index.js"),
				s = a.n(r),
				o = a("./node_modules/react-redux/es/index.js"),
				l = a("./src/lib/classNames/index.ts"),
				i = a("./src/higherOrderComponents/asModal/index.tsx"),
				c = a("./src/reddit/actions/gold/powerups.ts"),
				m = a("./src/reddit/controls/Button/index.tsx"),
				d = a("./src/reddit/helpers/trackers/powerupsSignup.ts"),
				u = a("./src/reddit/hooks/useThunkDispatch.ts"),
				p = a("./src/reddit/hooks/useTracking.ts"),
				h = a("./src/reddit/icons/svgs/Close/index.tsx"),
				g = a("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				b = a("./src/reddit/selectors/gold/powerups/modSignup.ts"),
				k = a("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				_ = a("./src/reddit/components/PowerupsSignUpModal/MultiSubredditForm.m.less"),
				w = a.n(_);
			const {
				fbt: f
			} = a("./node_modules/fbt/lib/FbtPublic.js"), y = e => {
				const {
					onChange: t,
					subredditIdsSelected: a,
					subredditsInfo: n,
					wasSuccessful: r,
					allEnabled: o
				} = e, i = n.filter(e => !e.hasPowerups), c = n.filter(e => e.hasPowerups), d = i.length === a.length;
				return s.a.createElement("div", {
					className: w.a.container
				}, s.a.createElement("div", {
					className: w.a.checkboxList
				}, c.map(({
					id: e,
					displayText: t
				}) => s.a.createElement(k.a, {
					className: Object(l.a)(w.a.checkbox, w.a.disabled),
					key: e,
					isSelected: !0,
					onClick: () => {},
					text: t,
					disabled: !0
				})), i.map(({
					id: e,
					displayText: n
				}) => {
					const o = a.includes(e);
					return s.a.createElement(k.a, {
						className: Object(l.a)(w.a.checkbox, {
							[w.a.disabled]: r
						}),
						key: e,
						isSelected: o,
						onClick: () => ((e, n) => {
							const r = n ? [...a, e] : a.filter(t => t !== e);
							t(r)
						})(e, !o),
						text: n,
						disabled: r
					})
				})), !r && !o && s.a.createElement(m.t, {
					className: w.a.selectAllButton,
					onClick: () => {
						t(d ? [] : i.map(({
							id: e
						}) => e))
					},
					priority: m.c.Secondary,
					isFullWidth: !0
				}, d ? f._("Deselect all", null, {
					hk: "46i6br"
				}) : f._("Select all", null, {
					hk: "2Eo4n2"
				})))
			};
			var E = a("./src/reddit/controls/LoadingIcon/index.tsx"),
				N = a("./src/reddit/components/PowerupsSignUpModal/signupButton.m.less"),
				v = a.n(N);
			const {
				fbt: S
			} = a("./node_modules/fbt/lib/FbtPublic.js"), C = ({
				className: e,
				disabled: t,
				onClick: a,
				isLoading: n,
				wasError: r
			}) => {
				const o = r ? S._("Try again", null, {
					hk: "1cKOSe"
				}) : S._("Turn on Powerups", null, {
					hk: "AuDZE"
				});
				return s.a.createElement(m.k, {
					className: Object(l.a)(e, v.a.button, {
						[v.a.loading]: n
					}),
					disabled: t || n,
					onClick: a,
					priority: m.c.Primary,
					isFullWidth: !0
				}, n ? s.a.createElement(E.a, {
					sizePx: 12,
					center: !0
				}) : o)
			};
			var O = a("./src/reddit/components/PowerupsSignUpModal/index.m.less"),
				x = a.n(O);
			const {
				fbt: P
			} = a("./node_modules/fbt/lib/FbtPublic.js"), j = Object(i.a)(({
				closeModal: e
			}) => {
				var t;
				const a = Object(u.a)(),
					l = Object(p.a)(),
					i = Object(o.e)(b.a),
					k = null !== (t = 1 === (null == i ? void 0 : i.length)) && void 0 !== t && t,
					_ = null == i ? void 0 : i.every(({
						hasPowerups: e
					}) => e),
					[w, f] = Object(r.useState)(i && k ? [i[0].id] : []),
					[E, N] = Object(r.useState)(!1),
					[v, S] = Object(r.useState)(!1),
					[O, j] = Object(r.useState)(!1);
				if (!(null == i ? void 0 : i.length)) return e(), null;
				const F = async e => {
					try {
						return await a(Object(c.a)(e)), {
							success: !0
						}
					} catch (t) {
						return {
							success: !1,
							error: t.message
						}
					}
				}, q = v || _ ? P._("{=[r/community]}{=has Powerups}", [P._param("=[r/community]", s.a.createElement("div", null, P._("{r/community}", [P._param("r/community", i[0].displayText)], {
					hk: "1TzAG8"
				}))), P._param("=has Powerups", s.a.createElement("div", null, P._("has Powerups", null, {
					hk: "2zYYns"
				})))], {
					hk: "2bu88V"
				}) : P._("{=Power up}{=[r/community]}", [P._param("=Power up", s.a.createElement("div", null, P._("Power up", null, {
					hk: "3qh4XT"
				}))), P._param("=[r/community]", s.a.createElement("div", null, P._("{r/community}", [P._param("r/community", i[0].displayText)], {
					hk: "2Pz0Sn"
				})))], {
					hk: "p9zKt"
				}), T = v || _ ? P._("{=Your communities}{=have Powerups}", [P._param("=Your communities", s.a.createElement("div", null, P._("Your communities", null, {
					hk: "3ySkxw"
				}))), P._param("=have Powerups", s.a.createElement("div", null, P._("have Powerups", null, {
					hk: "4rHX2f"
				})))], {
					hk: "E4Lct"
				}) : P._("{=Power up}{=your communities}", [P._param("=Power up", s.a.createElement("div", null, P._("Power up", null, {
					hk: "Jrn2T"
				}))), P._param("=your communities", s.a.createElement("div", null, P._("your communities", null, {
					hk: "4EPQY"
				})))], {
					hk: "1K9FOM"
				}), M = k ? q : T, W = E || v || O ? P._("{=Hold tight! It can take up to 5 minutes for}{=Powerups to appear in yourcommunity.}", [P._param("=Hold tight! It can take up to 5 minutes for", s.a.createElement("div", null, P._("Hold tight! It can take up to 5 minutes for", null, {
					hk: "1cFoaI"
				}))), P._param("=Powerups to appear in yourcommunity.", s.a.createElement("div", null, P._({
					"*": "Powerups to appear in your communities.",
					_1: "Powerups to appear in your community."
				}, [P._plural(i.length)], {
					hk: "1ky0qH"
				})))], {
					hk: "4tvqU7"
				}) : P._("{=Harness the power of yourcommunity to}{=unlock special perks and advanced features.}", [P._param("=Harness the power of yourcommunity to", s.a.createElement("div", null, P._({
					"*": "Harness the power of your communities to",
					_1: "Harness the power of your community to"
				}, [P._plural(i.length)], {
					hk: "2rOtDZ"
				}))), P._param("=unlock special perks and advanced features.", s.a.createElement("div", null, P._("unlock special perks and advanced features.", null, {
					hk: "2Xj3Tx"
				})))], {
					hk: "2cx1IK"
				});
				return s.a.createElement("div", {
					className: x.a.container,
					"data-testid": "powerups-signup-modal"
				}, s.a.createElement(I, null, s.a.createElement("div", {
					className: x.a.headerImageContainer
				}, s.a.createElement("img", {
					className: x.a.headerImage,
					alt: "Powerup heroes",
					src: `${n.a.assetPath}/img/powerups/powerups-rangers-static.png`
				}))), s.a.createElement("button", {
					className: x.a.closeButton,
					onClick: e
				}, s.a.createElement(h.a, {
					className: x.a.closeIcon
				})), s.a.createElement("div", {
					className: x.a.body
				}, s.a.createElement("div", {
					className: x.a.titleContainer
				}, s.a.createElement("h1", {
					className: x.a.titleText
				}, M), s.a.createElement("h2", {
					className: x.a.subtitleText
				}, W)), !k && s.a.createElement(y, {
					onChange: f,
					subredditIdsSelected: w,
					subredditsInfo: i,
					wasSuccessful: v,
					allEnabled: _
				}), O && s.a.createElement("div", {
					className: x.a.errorContainer
				}, s.a.createElement(g.a, {
					className: x.a.errorIcon
				}), s.a.createElement("span", {
					className: x.a.errorText
				}, P._("Something went wrong.", null, {
					hk: "N6RFp"
				}))), !v && !_ && s.a.createElement(C, {
					disabled: 0 === w.length,
					onClick: async () => {
						l(Object(d.c)(w)), N(!0);
						const e = (await Promise.all(w.map(F))).every(({
							success: e
						}) => e);
						S(e), j(!e), N(!1)
					},
					isLoading: E,
					wasError: O
				}), (v || _) && k && s.a.createElement(s.a.Fragment, null, s.a.createElement("p", {
					className: x.a.successText
				}, P._("Let your community know about Powerups with a pinned post", null, {
					hk: "3bII20"
				})), s.a.createElement(m.t, {
					className: x.a.successButton,
					to: `/${i[0].displayText}/submit`,
					kind: m.b.InternalLink,
					priority: m.c.Primary,
					isFullWidth: !0
				}, P._("Spread the word", null, {
					hk: "1f68Nj"
				}))), s.a.createElement("footer", {
					className: x.a.footer
				}, P._("Heads up—once you turn on Powerups you can’t turn it off.", null, {
					hk: "3YQxrF"
				}))))
			}), I = ({
				children: e,
				accentDiagonalCustomStyles: t
			}) => s.a.createElement("div", {
				className: x.a.background
			}, s.a.createElement("div", {
				className: x.a.diagonalLayoutSecondary,
				style: t
			}), s.a.createElement("div", {
				className: x.a.diagonalLayoutPrimary
			}), s.a.createElement("div", {
				className: Object(l.a)(x.a.circle, x.a.lineCircle),
				style: {
					backgroundImage: `url(${n.a.assetPath}/img/powerups/linecircle-blue.png)`
				}
			}), s.a.createElement("div", {
				className: Object(l.a)(x.a.circle, x.a.circleOrangeHollow)
			}), s.a.createElement("div", {
				className: Object(l.a)(x.a.circle, x.a.dotCircle1),
				style: {
					backgroundImage: `url(${n.a.assetPath}/img/powerups/dotcircle.png)`
				}
			}), s.a.createElement("div", {
				className: Object(l.a)(x.a.circle, x.a.circleGreenFilled)
			}), s.a.createElement("div", {
				className: Object(l.a)(x.a.circle, x.a.circleGreenHollow)
			}), s.a.createElement("div", {
				className: Object(l.a)(x.a.circle, x.a.circleYellowHollow)
			}), s.a.createElement("div", {
				className: Object(l.a)(x.a.circle, x.a.dotCircle2),
				style: {
					backgroundImage: `url(${n.a.assetPath}/img/powerups/dotcircle.png)`
				}
			}), e)
		},
		"./src/reddit/components/PowerupsSignUpModal/signupButton.m.less": function(e, t, a) {
			e.exports = {
				button: "_3ZSQSgkGYXZ9XJ5g3wsxpE",
				loading: "_2s-QMavjFJzrBs0ArvRNhu"
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
				radioOption: "_1RC0vqFiEM7grdtyZ9ewbg"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, a) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				r = a.n(n),
				s = a("./src/lib/classNames/index.ts"),
				o = a("./src/reddit/controls/LoadingIcon/index.m.less"),
				l = a.n(o);
			t.a = ({
				center: e,
				className: t,
				sizePx: a = 10
			}) => r.a.createElement("div", {
				className: Object(s.a)(l.a.loadingIcon, t, {
					[l.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${a}px`
				},
				"data-testid": "LoadingIcon"
			})
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, a) {
			"use strict";
			a.d(t, "b", (function() {
				return s
			})), a.d(t, "c", (function() {
				return o
			})), a.d(t, "a", (function() {
				return l
			}));
			var n = a("./node_modules/bignumber.js/bignumber.js"),
				r = a("./src/lib/prettyPrintNumber/index.ts");

			function s(e, t) {
				const a = new n.BigNumber(e),
					r = new n.BigNumber(t || 1);
				return a.dividedToIntegerBy(r).toString()
			}

			function o(e, t) {
				return Object(r.b)(parseInt(s(e, t), 10))
			}

			function l(e, t) {
				const a = new n.BigNumber(e),
					r = new n.BigNumber(t || 1);
				return a.multipliedBy(r).toFixed(0)
			}
		},
		"./src/reddit/helpers/trackers/powerupsSignup.ts": function(e, t, a) {
			"use strict";
			a.d(t, "d", (function() {
				return r
			})), a.d(t, "b", (function() {
				return s
			})), a.d(t, "c", (function() {
				return o
			})), a.d(t, "a", (function() {
				return l
			}));
			var n = a("./src/reddit/selectors/telemetry.ts");
			const r = () => e => ({
					...n.defaults(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "powerups_landing_page"
					}
				}),
				s = () => e => ({
					...n.defaults(e),
					source: "powerups_landing_page",
					action: "click",
					noun: "open_signup_modal"
				}),
				o = e => t => ({
					...n.defaults(t),
					source: "powerups_signup_form",
					action: "click",
					noun: "turn_on_powerups",
					powerups: {
						subredditIds: e.join(",")
					}
				}),
				l = () => e => ({
					...n.defaults(e),
					source: "powerups_landing_page",
					action: "click",
					noun: "community"
				})
		},
		"./src/reddit/hooks/useIsClient.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return r
			}));
			var n = a("./node_modules/react/index.js");

			function r() {
				const [e, t] = Object(n.useState)(!1);
				return Object(n.useEffect)(() => {
					setTimeout(t, 1, !0)
				}, []), e
			}
		},
		"./src/reddit/hooks/useThunkDispatch.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return r
			}));
			var n = a("./node_modules/react-redux/es/index.js");

			function r() {
				return Object(n.d)()
			}
		},
		"./src/reddit/pages/Powerups/Communities.m.less": function(e, t, a) {
			e.exports = {
				communitiesContainer: "_2VWS7ATKcPK8kFgPYzh06g",
				isNightMode: "_2JPVTtZDQj-qJpwQ4iUwFE",
				communitiesContent: "_3Suw2A7GhnE8jIOQ0v2hwd",
				community: "_1pmakIscN9hjFpFbg2oI0S",
				communityIcon: "_1Tt4iKH_VsDX2eW0O14qyI",
				communityName: "_2O1MFdtNk8V8rvSq1Obfi1"
			}
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
				return g
			})), a.d(t, "a", (function() {
				return w
			}));
			var n = a("./src/config.ts"),
				r = a("./node_modules/react/index.js"),
				s = a.n(r),
				o = a("./node_modules/react-redux/es/index.js"),
				l = a("./src/lib/classNames/index.ts"),
				i = a("./src/reddit/components/CollapsibleFAQ/index.tsx"),
				c = a("./src/reddit/controls/Button/index.tsx"),
				m = a("./src/reddit/selectors/user.ts"),
				d = a("./src/reddit/pages/Powerups/FaqSection.m.less"),
				u = a.n(d);
			const {
				fbt: p
			} = a("./node_modules/fbt/lib/FbtPublic.js"), h = [{
				prompt: () => p._("How will my community know when Powerups are enabled?", null, {
					hk: "Q0fGk"
				}),
				answer: function() {
					return p._("When Powerups are enabled, a dedicated Powerups tab (on mobile) or a module in the right side menu (on web) will be added to your community where your members will see information about Powerups. They can learn about what features Powerups unlock (such as GIFs, emojis, and achievements) and how Powerups work. Some communities have used an announcement or sticky post about enabling the feature where they told members what perks they could unlock. We recommend doing the same.", null, {
						hk: "1jO63"
					})
				}
			}, {
				prompt: () => p._("What kind of moderator tools and permissions do Powerups have?", null, {
					hk: "3Rrxks"
				}),
				answer: function() {
					return s.a.createElement(s.a.Fragment, null, p._("We've built Powerups with feedback from moderators and added a few different controls that let you customize how you want Powerups to work in your community.", null, {
						hk: "4beNqr"
					}), s.a.createElement("br", null), s.a.createElement("br", null), p._("Mods of communities that have Powerups enabled can:", null, {
						hk: "3JWLHJ"
					}), s.a.createElement("ul", null, s.a.createElement("li", null, "• ", p._("Access all Powerups perks", null, {
						hk: "4iqCkq"
					})), s.a.createElement("li", null, "• ", p._("Can upload up to 20 custom emoji images (.png, .jpeg, .jpg, .heic are all supported)", null, {
						hk: "150yOT"
					})), s.a.createElement("li", null, "• ", p._("Can turn off GIFs", null, {
						hk: "2ulUhF"
					})), s.a.createElement("li", null, "• ", p._("Manage video controls and permissions. So, if videos aren't allowed in your community, then HD video won't be unlocked along with the other perks", null, {
						hk: "lAGuc"
					}))))
				}
			}, {
				prompt: () => p._("What happens if my community doesn’t unlock Powerups?", null, {
					hk: "qZaeO"
				}),
				answer: function() {
					return s.a.createElement(s.a.Fragment, null, p._("To unlock Powerups perks, communities need 25 powerups. If your community doesn’t get to 25 powerups, then the perks will remain locked for the majority of the community. (But those who have contributed a powerup unlock perks for themselves right away.)", null, {
						hk: "1SvUvT"
					}), s.a.createElement("br", null), s.a.createElement("br", null), p._("However, getting to 25 is easier than you may think. All Reddit Premium members can apply the monthly powerup that comes with their subscription to your community, and members who don’t have Reddit Premium can purchase powerups on the web. (Sorry, this isn’t available on mobile yet.)", null, {
						hk: "3JSZJc"
					}))
				}
			}, {
				prompt: () => p._("Which communities can enable Powerups?", null, {
					hk: "4zVdMW"
				}),
				answer: function() {
					return p._("Safe for Work (SFW) communities with 1,000 members or more can enable Powerups and join the open beta. Also, if you’re a community that already has Special Memberships enabled, Powerups won’t work for you.", null, {
						hk: "12qOw5"
					})
				}
			}, {
				prompt: () => p._("Can I disable Powerups after I’ve turned them on for my community?", null, {
					hk: "2SpQyV"
				}),
				answer: function() {
					return p._("No, because subscriptions from your community members help unlock Powerup perks, moderators can’t disable the feature. So before you enable Powerups, be absolutely sure it’s right for you and your community.", null, {
						hk: "4zJrwH"
					})
				}
			}, {
				prompt: () => p._("Can I get a preview of Powerups?", null, {
					hk: "cTFsH"
				}),
				answer: function() {
					return p._("Not in your community, but if you’d like to see Powerups in action, check out some of the communities that have successfully powered up such as r/thebachelor, r/tiktokcringe, and r/python.", null, {
						hk: "2u4guo"
					})
				}
			}], g = ({
				openModal: e,
				modSubredditsInfo: t
			}) => s.a.createElement("div", {
				className: u.a.faqSection
			}, s.a.createElement("div", {
				className: Object(l.a)(u.a.faqSectionContent, u.a.contentWrapper)
			}, s.a.createElement(b, null), s.a.createElement(k, null), s.a.createElement(_, null), s.a.createElement("h2", {
				className: u.a.faqHeading
			}, p._("Questions about Powerups", null, {
				hk: "nzxYw"
			})), s.a.createElement("div", {
				className: u.a.faqs
			}, h.map(({
				prompt: e,
				answer: t
			}, a) => s.a.createElement(i.a, {
				defaultClosed: !0,
				question: e(),
				key: a
			}, t()))), s.a.createElement("h3", {
				className: u.a.faqMoreQuestionsHeading
			}, p._("Have more questions? We've got answers.", null, {
				hk: "3Entyj"
			})), s.a.createElement(c.t, {
				className: u.a.fullFaqsButton,
				priority: c.c.Secondary,
				href: "https://mods.reddithelp.com/hc/en-us/articles/4403699823629",
				kind: c.b.ExternalLink,
				target: "_blank"
			}, p._("View Full FAQs", null, {
				hk: "1eOLlL"
			})), s.a.createElement("h2", {
				className: u.a.faqTryOutHeading
			}, p._("Try out Powerups today", null, {
				hk: "17RjMt"
			})), s.a.createElement("h3", {
				className: u.a.faqTryOutSubheading
			}, p._("Ok, you've made it to the bottom of the page. What do you think? Are Powerups for your community?", null, {
				hk: "3062Vv"
			})), s.a.createElement(c.k, {
				onClick: e,
				disabled: !(null == t ? void 0 : t.length),
				priority: c.c.Primary,
				className: u.a.ctaLetsDoThisButton
			}, p._("Let's Do This!", null, {
				hk: "6CnFH"
			})), s.a.createElement(f, null))), b = ({
				hideBolt: e
			}) => s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
				className: Object(l.a)(u.a.faqQuestionMark, u.a.faqQuestionMarkWithBolt)
			}), s.a.createElement("div", {
				className: u.a.circleFaqYellowWithBolt
			}, !e && s.a.createElement("img", {
				alt: "Powerup bolt",
				className: u.a.boltInCircleFaqYellow,
				src: `${n.a.assetPath}/img/powerups/bolt.png`
			}))), k = () => s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
				className: u.a.circleFaqCyanSmall
			}), s.a.createElement("div", {
				className: u.a.circleFaqDotted,
				style: {
					backgroundImage: `url(${n.a.assetPath}/img/powerups/dotcircle.png)`
				}
			}), s.a.createElement("div", {
				className: u.a.circleFaqYellowSmall
			}), s.a.createElement("div", {
				className: u.a.circleFaqCyanBig
			}), s.a.createElement("div", {
				className: u.a.circleFaqOrange
			}), s.a.createElement("div", {
				className: u.a.circleFaqYellowHollow
			})), _ = () => s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
				className: Object(l.a)(u.a.faqQuestionMark, u.a.faqQuestionMarkTopLeft)
			}), s.a.createElement("div", {
				className: Object(l.a)(u.a.faqQuestionMark, u.a.faqQuestionMarkTopRight)
			}), s.a.createElement("div", {
				className: Object(l.a)(u.a.faqQuestionMark, u.a.faqQuestionMarkLeft)
			}), s.a.createElement("div", {
				className: Object(l.a)(u.a.faqQuestionMark, u.a.faqQuestionMarkBottomRight)
			})), w = ({
				hideBolt: e
			}) => s.a.createElement(s.a.Fragment, null, s.a.createElement(b, {
				hideBolt: e
			}), s.a.createElement(k, null), s.a.createElement(_, null)), f = () => {
				const e = Object(o.e)(m.X);
				return s.a.createElement("div", {
					className: u.a.ctaButtonCirclesAndBolt
				}, s.a.createElement("div", {
					className: u.a.circleFaqCtaStriped,
					style: {
						backgroundImage: e ? `url(${n.a.assetPath}/img/powerups/linecircle-orange.png)` : `url(${n.a.assetPath}/img/powerups/linecircle-blue.png)`
					}
				}), s.a.createElement("div", {
					className: u.a.circleFaqCtaYellowBig
				}, s.a.createElement("img", {
					alt: "Powerup bolt",
					className: u.a.boltInCircleFaqCtaYellow,
					src: `${n.a.assetPath}/img/powerups/bolt.png`
				})), s.a.createElement("div", {
					className: u.a.circleFaqCtaCyanHollow
				}))
			}
		},
		"./src/reddit/pages/Powerups/PerksSection.m.less": function(e, t, a) {
			e.exports = {
				perksSection: "_3xuSQMWvGF1ioIFvw3OAPd",
				isNightmodeOn: "_1JMb2sjd5kjeOrJWkUT1dn",
				perksSectionBoltImage: "_2ElCVOYaFqbLESDkOj_Fqu",
				perksSectionTitle: "_1vMIaTe8VQd0PNnJMGmCa2",
				perksSectionGrid: "_14u-ZHx0iISNWy4F3ArrLn",
				perkCell: "_3_bBYXgN2MJy8QV6ZZyOQo",
				perkImageBackgroundCircle: "_3w_NEcT61xX_hmra2rPY1T",
				perkImage: "_1fVJ47XpFkmBk6kcPLj5ZP",
				perkTitle: "_23PAj_ll6XMhH7f8bFiE6T",
				perkDescription: "_1LiW2pFhXLXoYHN8Sbedzg"
			}
		},
		"./src/reddit/pages/Powerups/index.m.less": function(e, t, a) {
			e.exports = {
				contentWrapper: "_2R6i6j_xoX2x5EKFAQMYU7",
				circle: "_1TvCFkzk-ajL6WvX-MoueU",
				animatedCircle: "_39m5MLXkVR-MhOWmz5ROl5",
				animateTransformX: "_3P3w3AfWeRp7T4EPhPUvmH",
				bodyText: "_2FWf39V9O9bIdx86VyTLF2",
				circleOrangeFull: "_3qq5WIoCkksegldcrrNPw0",
				circleOrangeHollow: "_2HLB20xcux-8DBYl0vHSDI",
				circleYellowSmall: "_22dshpdH0Ly8n6l4FboD59",
				top: "_34hoXqZzopGHUv4Rv6Oxjt",
				bottom: "KGG7keObUEMEVhC5m8x7A",
				circleYellowBig: "ZDBOZt2XcmGEyefhU9U8s",
				circleYellowHollow: "hcOrcUEh5GFQbdyLS6Q6m",
				circleDotted: "_1rFZb05EJLSJzDZmkf398N",
				circleStriped: "vWQWxIJ-Qq7wA5UUJwc-X",
				background: "AcXhBU8kMR2LwPZx7Mj3w",
				diagonalLayoutPrimary: "L9B1_iarAR4qUTFNbqAw7",
				diagonalLayoutSecondary: "_2YaYbB9n2Y7GVRVXgspHga",
				headingSection: "_23_Ow8luA15sc4g2vUGqww",
				headingContent: "KKIk5tC7vdU5bSFZiq4wT",
				headingArt: "_10FYcfyS7aMPS1WaV8fgA-",
				headingText: "rT3nmBzh3aktvoCPVp8Rl",
				powerupsMarketingImageContainer: "v1VhjMFWp37LMbeZ9EhHZ",
				powerupsMarketingImage: "_2fhpicvjBRUQh2FrmS145-",
				fallbackStaticImage: "_20svk_IXXvk6YtibBOeP7m",
				heading: "_1KZo5pqbPxIDnKlhUQ1iCV",
				isNightmodeOn: "_1AMPSEEofXw60FMrbdtq5e",
				powerupsLogo: "_2GWfwPdvzcyyo4cFPRkDgZ",
				subheading: "tJ01nrUeIibPLtvHf4n1Z",
				description: "_86QWvEglWWuqLFZMfXGgG",
				modWarning: "d3Nxc9efGC2tIyFFSPD_w",
				modWarningItalic: "_1n72yu3o7zjePGJgXqTrMp",
				modWarningFooter: "_3MGHLQUzFt1vaqX_qVvilR",
				modWarningTop: "_265wuoNoe98zlt0Y3SN6I5",
				modWarningIcon: "_2tIDi1LByghlwuY5AIrRu0",
				powerupsHeadingImg: "_3YE0rPo3AxLcTHATYQY95X",
				ctaButton: "_33rTpS2jR1JFHryoTOhYpa",
				pioneerSection: "_3gonL1T02ROiGMAYnvLcrP",
				circlePioneersCyanHollow: "_2z4yxEcLqQnh9mYn7cT6VZ",
				powerupsPioneerContent: "vOTXeymnEUd4bKDADeCCW",
				pioneerHeading: "_3smmvSO29wx9Xz39UGc1mk",
				pioneerSubheading: "_2dVOGLdupS1ZrH_JnEFShD",
				powerupStepsSection: "_3vDzGx-htbtjH-at_nSjZl",
				powerupStepsSectionContent: "_3UY1DNtOZYpcG23LJ-3fsc",
				circleStepsStriped: "_1XeNisAsrOqiBVWBgYD9cD",
				circleStepsYellowFull: "xcR8so_IQTdAydDYnuRB0",
				powerupStep: "_2bqDrka228N3joKdevUUAC",
				powerupStepCounter: "_1M2TF25U4Wqv-kDpvCsnkl",
				powerupStepName: "_3_pv1hGZ6dC45xNg686Ox2",
				powerupStepDescription: "_3UCrc_RFft8q0Y0CgFeYcf",
				footer: "_3W_fhNmXtO7pxVqENULN1r",
				modalBody: "_3H2XNRlTGeYM2CgAzJwzr",
				modalOverlay: "_3c_5_fSPEeIEoDBXAVgAZ3"
			}
		},
		"./src/reddit/pages/Powerups/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t), a.d(t, "BannerCircles", (function() {
				return B
			}));
			var n = a("./src/config.ts"),
				r = a("./node_modules/react/index.js"),
				s = a.n(r),
				o = a("./node_modules/react-redux/es/index.js"),
				l = a("./src/lib/classNames/index.ts"),
				i = a("./src/reddit/components/MarketingPageFooter/index.tsx"),
				c = a("./src/reddit/components/PowerupsSignUpModal/index.tsx"),
				m = a("./src/reddit/controls/Button/index.tsx"),
				d = a("./src/reddit/helpers/trackers/powerupsSignup.ts"),
				u = a("./src/reddit/hooks/useTracking.ts"),
				p = a("./src/reddit/icons/fonts/index.tsx");
			var h = e => s.a.createElement("svg", {
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
				g = a("./src/reddit/selectors/gold/powerups/modSignup.ts"),
				b = a("./src/reddit/selectors/user.ts"),
				k = a("./node_modules/lodash/sampleSize.js"),
				_ = a.n(k),
				w = a("./node_modules/react-router-dom/esm/react-router-dom.js"),
				f = a("./src/lib/opener/index.ts"),
				y = a("./src/reddit/hooks/useIsClient.ts"),
				E = a("./src/reddit/pages/Powerups/Communities.m.less"),
				N = a.n(E);
			const v = _()(["wallstreetbets", "pennystocks", "tiktokcringe", "lgbt", "python", "unexpected", "chloe", "pewdiepiesubmissions", "roastme", "jacksepticeye", "thebachelor", "taylorswift", "bigbrother", "belowdeck", "blackpink"], 3),
				S = () => {
					const e = Object(u.a)(),
						t = Object(o.e)(b.X),
						a = Object(y.a)(),
						r = () => {
							e(Object(d.a)())
						};
					return a ? s.a.createElement("section", {
						className: Object(l.a)(N.a.communitiesContainer, {
							[N.a.isNightMode]: t
						})
					}, s.a.createElement("div", {
						className: N.a.communitiesContent
					}, v.map(e => s.a.createElement(w.a, {
						className: N.a.community,
						key: e,
						to: `r/${e}`,
						target: f.d.BLANK,
						rel: f.c,
						onClick: r
					}, s.a.createElement("div", {
						className: N.a.communityIcon,
						style: {
							backgroundImage: `url(${n.a.assetPath}/img/powerups/communities-placeholder.png)`
						}
					}), s.a.createElement("div", {
						className: N.a.communityName
					}, "r/", e))))) : null
				};
			var C = a("./src/reddit/pages/Powerups/FaqSection.tsx"),
				O = a("./node_modules/fbt/lib/FbtPublic.js"),
				x = a("./src/reddit/pages/Powerups/PerksSection.m.less"),
				P = a.n(x);
			const j = [{
					title: O.fbt._("Achievements", null, {
						hk: "2sAFRa"
					}),
					description: O.fbt._("Recognize members' contributions and skills.", null, {
						hk: "2ueVeZ"
					}),
					imageName: "ACHIEVEMENT_FLAIRS_v3",
					imageAlt: O.fbt._("Powerups perk Achievements", null, {
						hk: "OT6Cc"
					}).toString()
				}, {
					title: O.fbt._("Gifs in Comments", null, {
						hk: "2FHbsG"
					}),
					description: O.fbt._("When simple words won't do, let members use GIFs too.", null, {
						hk: "3o4Qbq"
					}),
					imageName: "COMMENTS_WITH_GIFS_v3",
					imageAlt: O.fbt._("Powerups perk Gifs in Comments", null, {
						hk: "1060Ho"
					}).toString()
				}, {
					title: O.fbt._("Custom Emojis", null, {
						hk: "3bRZHS"
					}),
					description: O.fbt._("Create and use emojis exclusive to your community.", null, {
						hk: "4wDc2h"
					}),
					imageName: "CUSTOM_EMOJIS_v3",
					imageAlt: O.fbt._("Powerups perk Custom Emojis", null, {
						hk: "SdKcQ"
					}).toString()
				}, {
					title: O.fbt._("HD Video", null, {
						hk: "20Gh7k"
					}),
					description: O.fbt._("Upload and watch in greater resolution.", null, {
						hk: "SewZA"
					}),
					imageName: "HD_VIDEO_v3",
					imageAlt: O.fbt._("Powerups perk HD Video", null, {
						hk: "4uRAxP"
					}).toString()
				}, {
					title: O.fbt._("Hero Status", null, {
						hk: "3raGK1"
					}),
					description: O.fbt._("Reward members who give back to the community with hero badges and instant access to perks.", null, {
						hk: "43EB2T"
					}),
					imageName: "HERO_STATUS_v3",
					imageAlt: O.fbt._("Powerups perk Hero Status", null, {
						hk: "11Egfw"
					}).toString()
				}],
				I = O.fbt._("Powerups Bolt", null, {
					hk: "4wk1W"
				}).toString(),
				F = ({
					title: e,
					description: t,
					imageName: a,
					imageAlt: r
				}) => s.a.createElement("div", {
					className: P.a.perkCell
				}, s.a.createElement("div", {
					className: P.a.perkImageBackgroundCircle
				}, s.a.createElement("img", {
					alt: r,
					className: P.a.perkImage,
					src: `${n.a.assetPath}/img/powerups/${a}.png`
				})), s.a.createElement("h3", {
					className: P.a.perkTitle
				}, e), s.a.createElement("h4", {
					className: P.a.perkDescription
				}, t)),
				q = () => {
					const e = Object(o.e)(b.X);
					return s.a.createElement("div", {
						className: Object(l.a)(P.a.perksSection, {
							[P.a.isNightmodeOn]: e
						})
					}, s.a.createElement("img", {
						alt: I,
						className: P.a.perksSectionBoltImage,
						src: `${n.a.assetPath}/img/powerups/bolt.png`
					}), s.a.createElement("h2", {
						className: P.a.perksSectionTitle
					}, O.fbt._("Let's check out those perks!", null, {
						hk: "jugDp"
					})), s.a.createElement("div", {
						className: Object(l.a)(P.a.perksSectionGrid, P.a.contentWrapper)
					}, j.map(({
						title: e,
						description: t,
						imageName: a,
						imageAlt: n
					}) => s.a.createElement(F, {
						key: e,
						title: e,
						description: t,
						imageName: a,
						imageAlt: n
					}))))
				};
			var T = a("./src/reddit/pages/Powerups/index.m.less"),
				M = a.n(T);
			const {
				fbt: W
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			t.default = () => {
				const e = Object(u.a)(),
					t = Object(o.e)(g.a),
					a = Object(o.e)(b.X),
					[k, _] = Object(r.useState)(!1);
				Object(r.useEffect)(() => {
					e(Object(d.d)())
				}, [e]);
				const w = () => {
						e(Object(d.b)()), _(!0)
					},
					f = () => _(!1);
				return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
					className: M.a.headingSection
				}, s.a.createElement(B, {
					isNightmodeOn: a
				}), s.a.createElement("div", {
					className: Object(l.a)(M.a.contentWrapper, M.a.headingContent)
				}, s.a.createElement("div", {
					className: M.a.headingText
				}, s.a.createElement("h1", {
					className: Object(l.a)(M.a.heading, {
						[M.a.isNightmodeOn]: a
					})
				}, s.a.createElement(h, {
					className: M.a.powerupsLogo
				})), s.a.createElement("h2", {
					className: M.a.subheading
				}, W._("Come together to level up the whole community", null, {
					hk: "3C0qLA"
				})), s.a.createElement("p", {
					className: Object(l.a)(M.a.description, M.a.bodyText)
				}, W._("Harness the power of your community to unlock special perks and advanced features.", null, {
					hk: "1NgNS2"
				})), s.a.createElement("div", {
					className: Object(l.a)(M.a.modWarning, M.a.bodyText)
				}, s.a.createElement("div", {
					className: M.a.modWarningTop
				}, s.a.createElement(p.a, {
					name: "mod",
					className: M.a.modWarningIcon
				})), W._("{=Only moderators with theManage Settings permission can turn on Powerups.}{=Heads up—Only Safe for Work (SFW) communities with 1,000 members or more can enable Powerups.}", [W._param("=Only moderators with theManage Settings permission can turn on Powerups.", s.a.createElement("div", null, W._("Only moderators with the {=Manage Settings} permission can turn on Powerups.", [W._param("=Manage Settings", s.a.createElement("span", {
					className: M.a.modWarningItalic
				}, W._("Manage Settings", null, {
					hk: "4AauR"
				})))], {
					hk: "1sKKo7"
				}))), W._param("=Heads up—Only Safe for Work (SFW) communities with 1,000 members or more can enable Powerups.", s.a.createElement("div", {
					className: M.a.modWarningFooter
				}, W._("Heads up—Only Safe for Work (SFW) communities with 1,000 members or more can enable Powerups.", null, {
					hk: "2euXqd"
				})))], {
					hk: "2FL5at"
				})), s.a.createElement(m.k, {
					onClick: w,
					disabled: !(null == t ? void 0 : t.length),
					priority: m.c.Primary,
					className: M.a.ctaButton
				}, W._("Turn on Powerups", null, {
					hk: "4E97KH"
				}))), s.a.createElement("div", {
					className: M.a.headingArt
				}, s.a.createElement("div", {
					className: M.a.powerupsMarketingImageContainer
				}, s.a.createElement("picture", {
					className: M.a.powerupsMarketingImage
				}, s.a.createElement("source", {
					srcSet: `${n.a.assetPath}/img/powerups/powerups-rangers.webp`,
					type: "image/webp"
				}), s.a.createElement("source", {
					srcSet: `${n.a.assetPath}/img/powerups/powerups-rangers-static.png`,
					type: "image/png"
				}), s.a.createElement("img", {
					alt: "Powerup heroes",
					className: M.a.fallbackStaticImage,
					src: `${n.a.assetPath}/img/powerups/powerups-rangers-static.png`
				})))))), s.a.createElement(S, null), s.a.createElement("div", {
					className: M.a.pioneerSection
				}, s.a.createElement("div", {
					className: Object(l.a)(M.a.contentWrapper, M.a.powerupsPioneerContent)
				}, s.a.createElement("div", {
					className: Object(l.a)(M.a.circle, M.a.circlePioneersCyanHollow)
				}), s.a.createElement("h2", {
					className: M.a.pioneerHeading
				}, W._("Be a Powerups pioneer", null, {
					hk: "2P7QON"
				})), s.a.createElement("h3", {
					className: M.a.pioneerSubheading
				}, W._("Be one of the first communities to turn on Powerups and have an influence on what perks and advanced features we create next.", null, {
					hk: "2wFnM6"
				})))), s.a.createElement("div", {
					className: M.a.powerupStepsSection
				}, s.a.createElement("div", {
					className: Object(l.a)(M.a.powerupStepsSectionContent, M.a.contentWrapper)
				}, s.a.createElement("div", {
					className: Object(l.a)(M.a.circle, M.a.circleStepsYellowFull)
				}), s.a.createElement("div", {
					className: Object(l.a)(M.a.circle, M.a.circleStepsStriped),
					style: {
						backgroundImage: a ? `url(${n.a.assetPath}/img/powerups/linecircle-orange.png)` : `url(${n.a.assetPath}/img/powerups/linecircle-blue.png)`
					}
				}), s.a.createElement("div", {
					className: M.a.powerupStep
				}, s.a.createElement("div", {
					className: M.a.powerupStepCounter
				}, "1"), s.a.createElement("div", {
					className: M.a.powerupStepName
				}, W._("Turn on powerups", null, {
					hk: "q0dHV"
				})), s.a.createElement("div", {
					className: M.a.powerupStepDescription
				}, W._("Just tap that big Turn on Powerups button and add Powerups to your community.", null, {
					hk: "oZMHo"
				}))), s.a.createElement("div", {
					className: M.a.powerupStep
				}, s.a.createElement("div", {
					className: M.a.powerupStepCounter
				}, "2"), s.a.createElement("div", {
					className: M.a.powerupStepName
				}, W._("Rally the community", null, {
					hk: "4m8BDG"
				})), s.a.createElement("div", {
					className: M.a.powerupStepDescription
				}, W._("Spread the word! You only need 25 powerups to give perks to the whole community.", null, {
					hk: "4eSNsf"
				}))), s.a.createElement("div", {
					className: M.a.powerupStep
				}, s.a.createElement("div", {
					className: M.a.powerupStepCounter
				}, "3"), s.a.createElement("div", {
					className: M.a.powerupStepName
				}, W._("Unlock perks", null, {
					hk: "20u0vD"
				})), s.a.createElement("div", {
					className: M.a.powerupStepDescription
				}, W._("Once your community is powered up, the perks are unlocked for everyone to use.", null, {
					hk: "3Fs5Gm"
				}))))), s.a.createElement(q, null), s.a.createElement(C.b, {
					openModal: w,
					modSubredditsInfo: t
				}), s.a.createElement(i.a, {
					className: M.a.footer
				}), k && s.a.createElement(c.b, {
					withOverlay: !0,
					closeModal: f,
					onOverlayClick: f,
					className: M.a.modalBody,
					overlayClassName: M.a.modalOverlay
				}))
			};
			const B = ({
				isNightmodeOn: e,
				accentDiagonalCustomStyles: t
			}) => s.a.createElement("div", {
				className: Object(l.a)(M.a.background, M.a.contentWrapper)
			}, s.a.createElement("div", {
				className: M.a.diagonalLayoutSecondary,
				style: t
			}), s.a.createElement("div", {
				className: M.a.diagonalLayoutPrimary
			}), s.a.createElement("div", {
				className: Object(l.a)(M.a.circle, M.a.circleDotted),
				style: {
					backgroundImage: `url(${n.a.assetPath}/img/powerups/dotcircle.png)`
				}
			}), s.a.createElement("div", {
				className: Object(l.a)(M.a.circle, M.a.animatedCircle, M.a.circleStriped),
				style: {
					backgroundImage: e ? `url(${n.a.assetPath}/img/powerups/linecircle-orange.png)` : `url(${n.a.assetPath}/img/powerups/linecircle-blue.png)`
				}
			}), s.a.createElement("div", {
				className: Object(l.a)(M.a.circle, M.a.circleOrangeFull, M.a.animatedCircle)
			}), s.a.createElement("div", {
				className: Object(l.a)(M.a.circle, M.a.circleYellowSmall, M.a.top, M.a.animatedCircle)
			}), s.a.createElement("div", {
				className: Object(l.a)(M.a.circle, M.a.circleYellowBig, M.a.animatedCircle)
			}), s.a.createElement("div", {
				className: Object(l.a)(M.a.circle, M.a.circleYellowHollow, M.a.animatedCircle)
			}), s.a.createElement("div", {
				className: Object(l.a)(M.a.circle, M.a.circleYellowSmall, M.a.bottom, M.a.animatedCircle)
			}), s.a.createElement("div", {
				className: Object(l.a)(M.a.circle, M.a.circleOrangeHollow, M.a.animatedCircle)
			}))
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
				s = a.n(r),
				o = a("./node_modules/react-redux/es/index.js"),
				l = a("./src/lib/classNames/index.ts"),
				i = a("./src/reddit/components/MarketingPageFooter/index.tsx"),
				c = a("./src/higherOrderComponents/asModal/index.tsx"),
				m = a("./src/reddit/hooks/useLocale.ts"),
				d = a("./src/lib/localizeCurrency/index.ts");
			var u = ({
					num: e,
					className: t,
					...a
				}) => {
					const n = Object(m.a)(),
						r = Object(d.a)(e, {
							locale: n,
							...a
						});
					return s.a.createElement("span", {
						className: t
					}, r)
				},
				p = a("./src/reddit/controls/RadioInput/index.tsx"),
				h = a("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				g = a("./src/reddit/selectors/telemetry.ts");
			var b = a("./src/reddit/hooks/useTracking.ts"),
				k = (a("./node_modules/core-js/modules/web.dom.iterable.js"), a("./src/reddit/selectors/moderatorPermissions.ts"));
			const _ = e => {
				const t = Object(k.k)(e);
				return t ? Object.keys(t).reduce((t, a) => {
					const n = e.subreddits.models[a];
					return (null == n ? void 0 : n.allowPredictionsTournament) && t.push({
						id: a,
						subredditUrl: n.url,
						displayText: n.displayText
					}), t
				}, []) : null
			};
			var w = a("./src/lib/constants/index.ts"),
				f = a("./src/reddit/controls/Button/index.tsx");
			const {
				fbt: y
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			var E = ({
					isEligibleMod: e,
					selectedSubredditUrl: t,
					modSubredditsInfo: a,
					onClose: n
				}) => {
					const r = Object(b.a)();
					if (!e) {
						const e = () => {
							r((() => e => ({
								...Object(g.defaults)(e),
								source: "start_predictions_modal",
								action: "click",
								noun: "close"
							}))()), n()
						};
						return s.a.createElement(f.k, {
							onClick: e,
							isFullWidth: !0
						}, y._("Close", null, {
							hk: "3Qarlp"
						}))
					}
					return s.a.createElement("a", {
						href: `${t}submit?type=${w.wb}`
					}, s.a.createElement(f.k, {
						onClick: () => {
							const e = a.find(({
								subredditUrl: e
							}) => t === e);
							e && r((e => t => ({
								...Object(g.defaults)(t),
								source: "start_predictions_modal",
								action: "click",
								noun: "create_predictions_tournament",
								subreddit: {
									id: e
								}
							}))(e.id))
						},
						isFullWidth: !0
					}, y._("Create a Prediction", null, {
						hk: "JgEmz"
					})))
				},
				N = a("./node_modules/fbt/lib/FbtPublic.js"),
				v = a("./src/reddit/components/PowerupsSignUpModal/index.tsx"),
				S = a("./src/reddit/icons/fonts/index.tsx"),
				C = a("./src/reddit/components/PredictionsSignupModal/index.m.less"),
				O = a.n(C);
			var x = ({
				children: e,
				onClose: t
			}) => s.a.createElement("div", {
				className: O.a.container
			}, s.a.createElement(v.a, {
				accentDiagonalCustomStyles: {
					background: "#ddbd37"
				}
			}, s.a.createElement("div", {
				className: O.a.headerImageContainer
			}, s.a.createElement("img", {
				className: O.a.headerImage,
				alt: "Predictor Snoos",
				src: `${n.a.assetPath}/img/econ/predictions/predictor_snoos.png`
			}))), s.a.createElement(f.t, {
				"aria-label": N.fbt._("Close", null, {
					hk: "26np07"
				}),
				className: O.a.closeButton,
				Icon: Object(S.b)("close"),
				onClick: t,
				priority: f.c.Plain
			}), s.a.createElement("div", {
				className: O.a.body
			}, e));
			const {
				fbt: P
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			var j = Object(c.a)(({
					onClose: e
				}) => {
					var t;
					const a = Object(b.a)(),
						n = Object(o.e)(_),
						[l, i] = Object(r.useState)(n && (null === (t = n[0]) || void 0 === t ? void 0 : t.subredditUrl) || "");
					Object(r.useEffect)(() => {
						a((() => e => ({
							...Object(g.defaults)(e),
							source: "predictions_marketing_page",
							action: "view",
							noun: "start_predictions_modal"
						}))())
					}, [a]);
					const c = Boolean(null == n ? void 0 : n.length),
						m = c ? P._("Start a Tournament", null, {
							hk: "329F3U"
						}) : P._("Only moderators of communities that have at least {Minimum subscribers required to enable Prediction} members can turn on predictions.", [P._param("Minimum subscribers required to enable Prediction", s.a.createElement(u, {
							num: 1e4
						}))], {
							hk: "3VaFr8"
						});
					return s.a.createElement(x, {
						onClose: e
					}, s.a.createElement("div", {
						className: O.a.titleContainer
					}, s.a.createElement("h1", {
						className: O.a.titleText
					}, m), c && s.a.createElement("h2", {
						className: O.a.subtitleText
					}, P._("Choose the community where you’d like to create a prediction tournament", null, {
						hk: "2Ui7Zf"
					}))), c && s.a.createElement("div", {
						className: O.a.radioContainer
					}, s.a.createElement(p.a, {
						name: "subreddit",
						value: l,
						onChange: e => i(e)
					}, n.map(({
						id: e,
						subredditUrl: t,
						displayText: a
					}) => {
						const n = l === t;
						return s.a.createElement(h.a, {
							className: O.a.radioOption,
							key: e,
							selected: n,
							showButton: !0,
							value: t
						}, a)
					}))), !c && s.a.createElement("h3", {
						className: O.a.disclaimer
					}, P._("Predictions creation is only available on Web and iOS at this time.", null, {
						hk: "J1xBl"
					})), s.a.createElement(E, {
						isEligibleMod: c,
						selectedSubredditUrl: l,
						modSubredditsInfo: n,
						onClose: e
					}))
				}),
				I = a("./src/reddit/pages/Powerups/index.tsx"),
				F = a("./src/reddit/selectors/user.ts"),
				q = a("./node_modules/react-router-dom/esm/react-router-dom.js"),
				T = a("./src/lib/opener/index.ts"),
				M = a("./src/reddit/hooks/useIsClient.ts"),
				W = a("./src/reddit/pages/Predictions/Communities.m.less"),
				B = a.n(W);
			const {
				fbt: H
			} = a("./node_modules/fbt/lib/FbtPublic.js"), A = [{
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
				const e = Object(b.a)(),
					t = Object(o.e)(F.X),
					a = Object(M.a)(),
					r = () => {
						e((() => e => ({
							...Object(g.defaults)(e),
							source: "predictions_marketing_page",
							action: "click",
							noun: "community"
						}))())
					};
				return a ? s.a.createElement("section", {
					className: Object(l.a)(B.a.communitiesContainer, {
						[B.a.isNightMode]: t
					})
				}, s.a.createElement("h2", {
					className: B.a.communitiesHeading
				}, H._("Previous tournaments", null, {
					hk: "2TCJGF"
				})), s.a.createElement("div", {
					className: B.a.communitiesContent
				}, A.map(({
					subredditName: e,
					participationCount: t,
					tournamentName: a
				}) => s.a.createElement(q.a, {
					className: B.a.community,
					key: e,
					to: `r/${e}/predictions`,
					target: T.d.BLANK,
					rel: T.c,
					onClick: r
				}, s.a.createElement("div", {
					className: B.a.communityIcon,
					style: {
						backgroundImage: `url(${n.a.assetPath}/img/econ/predictions/${e}.png)`
					}
				}), s.a.createElement("div", {
					className: B.a.communityContainer
				}, s.a.createElement("div", null, "r/", e), s.a.createElement("div", {
					className: B.a.communityStatistics
				}, H._("{=[number of participants]} participants in the {subreddit tournament name} Tournament", [H._param("=[number of participants]", s.a.createElement("span", {
					className: B.a.participationCount
				}, H._("{number of participants}", [H._param("number of participants", t)], {
					hk: "OjESd"
				}))), H._param("subreddit tournament name", a)], {
					hk: "lgx3v"
				}))))))) : null
			};
			var D = a("./src/reddit/components/CollapsibleFAQ/index.tsx"),
				Y = a("./src/reddit/pages/Powerups/FaqSection.tsx"),
				U = a("./src/reddit/pages/Predictions/FaqSection.m.less"),
				V = a.n(U);
			const R = [{
					prompt: N.fbt._("Where can I find Predictions?", null, {
						hk: "32ZI7C"
					}),
					answer: N.fbt._("You can find Predictions within participating communities, inside the “Predictions” tab. Communities that have participated in the past include: r/movies, r/leagueoflegends, r/Cryptocurrency, r/formula1 and r/soccer.", null, {
						hk: "Igxj1"
					})
				}, {
					prompt: N.fbt._("Do I need to have anything to play Predictions?", null, {
						hk: "22KDvv"
					}),
					answer: N.fbt._("Every user who plays will get a wallet of “tokens” that can be used to predict. You will get 1,000 tokens for every new Predictions tournament that you participate in.", null, {
						hk: "RnK1g"
					})
				}, {
					prompt: N.fbt._("What happens if I run out of tokens? Can I still play?", null, {
						hk: "3eQJBV"
					}),
					answer: N.fbt._("Unfortunately, once you exhaust your token wallet, you’re done for that tournament. But every tournament gives you a new token wallet - for example, if r/formula1 ran a Spring tournament and then later ran a Fall tournament, every user would get a fresh set of tokens for the Fall tournament (the Spring tournament tokens go away).", null, {
						hk: "uwWuz"
					})
				}, {
					prompt: N.fbt._("What if mods pick the wrong winner?", null, {
						hk: "4uoijH"
					}),
					answer: N.fbt._("Feel free to let mods know; mods have the ability to reverse decisions within their mod settings. However, mods do have final say on who wins, so keep that in mind as you play.", null, {
						hk: "1ivYvz"
					})
				}, {
					prompt: N.fbt._("Why predict with more tokens? Do I get the same rewards if I put down 10 tokens or 100 tokens?", null, {
						hk: "4h5gWj"
					}),
					answer: N.fbt._("People who predict higher token amounts on questions will get proportionately bigger rewards. For example, if a user who put down 10 tokens wins 30 tokens, then a user who put down 100 tokens would win 300 tokens.", null, {
						hk: "Dqx1"
					})
				}, {
					prompt: N.fbt._("Do I need to buy anything to participate?", null, {
						hk: "1NcFmJ"
					}),
					answer: N.fbt._("No purchase is necessary to play Predictions - 1,000 free tokens are given to every user per tournament. We may include some special benefits for Premium users from time to time, so stay tuned!", null, {
						hk: "3LTZkn"
					})
				}, {
					prompt: N.fbt._("How do Predictions impact votes on posts?", null, {
						hk: "13gvO2"
					}),
					answer: N.fbt._("Currently when you make a prediction, the Tournament post is automatically upvoted. We did this because Predictions are more fun when more people play and upvoting helps the Tournament to be seen by more people! Of course, you're in control and you can always remove your upvote if you'd like.", null, {
						hk: "3KIWZw"
					})
				}],
				G = () => {
					const e = Object(b.a)();
					return s.a.createElement("div", {
						className: V.a.faqSection
					}, s.a.createElement("div", {
						className: Object(l.a)(V.a.faqSectionContent, V.a.contentWrapper)
					}, s.a.createElement(Y.a, {
						hideBolt: !0
					}), s.a.createElement("h2", {
						className: V.a.faqHeading
					}, N.fbt._("Questions about Predictions?", null, {
						hk: "3e9tVH"
					})), s.a.createElement("div", {
						className: V.a.faqs
					}, R.map(({
						prompt: e,
						answer: t
					}, a) => s.a.createElement(D.a, {
						className: V.a.collapsibleFaq,
						defaultClosed: !0,
						question: e,
						key: a
					}, t))), s.a.createElement("h3", {
						className: V.a.faqMoreQuestionsHeading
					}, N.fbt._("Have more questions? We've got answers.", null, {
						hk: "3Entyj"
					})), s.a.createElement(f.t, {
						className: V.a.fullFaqsButton,
						priority: f.c.Secondary,
						href: "https://mods.reddithelp.com/hc/en-us/articles/4409834282509",
						onClick: () => {
							e((() => e => ({
								...Object(g.defaults)(e),
								source: "predictions_marketing_page",
								action: "click",
								noun: "view_full_faqs"
							}))())
						},
						kind: f.b.ExternalLink,
						target: "_blank"
					}, N.fbt._("View Full FAQs", null, {
						hk: "1eOLlL"
					}))))
				};
			var Q = a("./src/reddit/pages/Predictions/Incentives.m.less"),
				Z = a.n(Q);
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
			}], K = ({
				title: e,
				description: t,
				imageName: a,
				isReversed: r
			}) => s.a.createElement("div", {
				className: Object(l.a)(Z.a.perkCell, {
					[Z.a.isReversed]: r
				})
			}, s.a.createElement("div", {
				className: Z.a.perkImageContainer
			}, s.a.createElement("img", {
				alt: `Prediction incentive ${e}`,
				className: Z.a.perkImage,
				src: `${n.a.assetPath}/img/econ/predictions/${a}.png`
			})), s.a.createElement("div", {
				className: Z.a.perkText
			}, s.a.createElement("h3", {
				className: Z.a.perkTitle
			}, z._("{perkName}", [z._param("perkName", e)], {
				hk: "22kzoU"
			})), s.a.createElement("h4", {
				className: Z.a.perkDescription
			}, z._("{perkDescription}", [z._param("perkDescription", t)], {
				hk: "3F6M9G"
			})))), J = () => s.a.createElement("div", {
				className: Object(l.a)(Z.a.perksSection)
			}, s.a.createElement("div", {
				className: Object(l.a)(Z.a.perksSectionGrid)
			}, X.map(({
				title: e,
				description: t,
				imageName: a,
				isReversed: n
			}) => s.a.createElement(K, {
				key: e,
				title: e,
				description: t,
				imageName: a,
				isReversed: n
			}))));
			var $ = a("./src/reddit/pages/Predictions/index.m.less"),
				ee = a.n($);
			const {
				fbt: te
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			t.default = () => {
				const e = Object(b.a)(),
					t = Object(o.e)(F.X),
					[a, c] = Object(r.useState)(!1);
				Object(r.useEffect)(() => {
					e((() => e => ({
						source: "global",
						action: "view",
						noun: "screen",
						...Object(g.defaults)(e),
						actionInfo: Object(g.actionInfo)(e, {
							pageType: "predictions_marketing_page"
						})
					}))())
				}, [e]);
				const m = () => c(!0),
					d = () => c(!1);
				return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
					className: ee.a.headingSection
				}, s.a.createElement(I.BannerCircles, {
					isNightmodeOn: t,
					accentDiagonalCustomStyles: {
						background: "#ddbd37"
					}
				}), s.a.createElement("div", {
					className: Object(l.a)(ee.a.contentWrapper, ee.a.headingContent)
				}, s.a.createElement("div", {
					className: ee.a.headingText
				}, s.a.createElement("h1", {
					className: ee.a.heading
				}, s.a.createElement("img", {
					alt: te._("Reddit Predictions", null, {
						hk: "4B4NPQ"
					}),
					className: ee.a.logo,
					src: `${n.a.assetPath}/img/econ/predictions/reddit_predictions_logo.png`
				})), s.a.createElement("h2", {
					className: ee.a.subheading
				}, te._("Become the world’s greatest predictor on any topic.", null, {
					hk: "3XkX8B"
				})), s.a.createElement("p", {
					className: Object(l.a)(ee.a.description, ee.a.bodyText)
				}, te._("Who will win the game tomorrow? Which character will meet their fate in the next episode? Flex your knowledge of a topic in a prediction tournament!", null, {
					hk: "2x0Fec"
				})), s.a.createElement("div", {
					className: Object(l.a)(ee.a.modWarning, ee.a.bodyText)
				}, s.a.createElement("div", {
					className: ee.a.modWarningTop
				}, s.a.createElement(S.a, {
					name: "mod",
					className: ee.a.modWarningIcon
				})), te._("{=Only moderators of communities that are public, safe for work, and have at least 10,000 members can turn on predictions.}", [te._param("=Only moderators of communities that are public, safe for work, and have at least 10,000 members can turn on predictions.", s.a.createElement("div", null, te._("Only moderators of communities that are public, safe for work, and have at least 10,000 members can turn on predictions.", null, {
					hk: "4tXdPf"
				})))], {
					hk: "kXZNE"
				})), s.a.createElement(f.k, {
					onClick: () => {
						e((() => e => ({
							...Object(g.defaults)(e),
							source: "predictions_marketing_page",
							action: "click",
							noun: "start_predictions_modal"
						}))()), m()
					},
					priority: f.c.Primary,
					className: ee.a.ctaButton
				}, te._("Turn on Predictions", null, {
					hk: "2zU4Cm"
				}))), s.a.createElement("div", {
					className: ee.a.headingArt
				}, s.a.createElement("div", {
					className: ee.a.predictionsMarketingImageContainer
				}, s.a.createElement("img", {
					alt: te._("Predictor Snoos", null, {
						hk: "2VJBoC"
					}),
					className: ee.a.predictionsMarketingImage,
					src: `${n.a.assetPath}/img/econ/predictions/predictor_snoos.png`
				}))))), s.a.createElement(L, null), s.a.createElement("div", {
					className: ee.a.relativeContainer
				}, s.a.createElement("div", {
					className: Object(l.a)(ee.a.circle, ee.a.circleCyanHollow)
				})), s.a.createElement(J, null), s.a.createElement("div", {
					className: ee.a.howItWorksStepsSection
				}, s.a.createElement("h2", {
					className: ee.a.howItWorksHeading
				}, te._("How it works", null, {
					hk: "4yfhNH"
				})), s.a.createElement("div", {
					className: Object(l.a)(ee.a.howItWorksStepsSectionContent, ee.a.contentWrapper)
				}, s.a.createElement("div", {
					className: Object(l.a)(ee.a.circle, ee.a.circleStepsYellowFull)
				}), s.a.createElement("div", {
					className: Object(l.a)(ee.a.circle, ee.a.circleStepsStriped),
					style: {
						backgroundImage: t ? `url(${n.a.assetPath}/img/powerups/linecircle-orange.png)` : `url(${n.a.assetPath}/img/powerups/linecircle-blue.png)`
					}
				}), s.a.createElement("div", {
					className: ee.a.howItWorksStep
				}, s.a.createElement("div", {
					className: ee.a.howItWorksStepCount
				}, "1"), s.a.createElement("div", {
					className: ee.a.howItWorksStepName
				}, te._("Mods create a tournament", null, {
					hk: "1KjpAb"
				})), s.a.createElement("div", {
					className: ee.a.howItWorksStepDescription
				}, te._("A tournament is a series of questions where redditors predict the answers. Mods can add as many questions as they want, even after the tournament has started.", null, {
					hk: "1CySSW"
				}))), s.a.createElement("div", {
					className: ee.a.howItWorksStep
				}, s.a.createElement("div", {
					className: ee.a.howItWorksStepCount
				}, "2"), s.a.createElement("div", {
					className: ee.a.howItWorksStepName
				}, te._("Redditors make predictions", null, {
					hk: "4Dw0MP"
				})), s.a.createElement("div", {
					className: ee.a.howItWorksStepDescription
				}, te._("Redditors get prediction tokens when joining a tournament, and use tokens for each prediction they submit. More tokens = bigger reward.", null, {
					hk: "3LX1yL"
				}))), s.a.createElement("div", {
					className: ee.a.howItWorksStep
				}, s.a.createElement("div", {
					className: ee.a.howItWorksStepCount
				}, "3"), s.a.createElement("div", {
					className: ee.a.howItWorksStepName
				}, te._("Mods pick the answers and thus, the winners", null, {
					hk: "1TMDGG"
				})), s.a.createElement("div", {
					className: ee.a.howItWorksStepDescription
				}, te._("Mods choose the correct answers, so they control who wins the tournament!", null, {
					hk: "4gxz6G"
				}))))), s.a.createElement(G, null), s.a.createElement("div", {
					className: ee.a.tryOutSection
				}, s.a.createElement("h2", {
					className: ee.a.tryOutHeading
				}, te._("Try out Predictions", null, {
					hk: "8IETg"
				})), s.a.createElement("h3", {
					className: ee.a.tryOutSubheading
				}, te._("Create a tournament and get your community predicting!", null, {
					hk: "utApr"
				})), s.a.createElement(f.k, {
					onClick: () => {
						e((() => e => ({
							...Object(g.defaults)(e),
							source: "predictions_marketing_page",
							action: "click",
							noun: "lets_do_this"
						}))()), m()
					},
					priority: f.c.Primary,
					className: ee.a.ctaLetsDoThisButton
				}, te._("Let's Do This!", null, {
					hk: "2rvUWV"
				})), s.a.createElement(ae, null)), s.a.createElement(i.a, {
					className: ee.a.footer
				}), a && s.a.createElement(j, {
					withOverlay: !0,
					onOverlayClick: d,
					onClose: d,
					className: ee.a.modalBody,
					overlayClassName: ee.a.modalOverlay
				}))
			};
			const ae = () => {
				const e = Object(o.e)(F.X);
				return s.a.createElement("div", {
					className: ee.a.ctaButtonCirclesAndBolt
				}, s.a.createElement("div", {
					className: ee.a.circleFaqCtaStriped,
					style: {
						backgroundImage: e ? `url(${n.a.assetPath}/img/powerups/linecircle-orange.png)` : `url(${n.a.assetPath}/img/powerups/linecircle-blue.png)`
					}
				}), s.a.createElement("div", {
					className: ee.a.circleFaqCtaYellowBig
				}), s.a.createElement("img", {
					alt: te._("Predictor Snoo", null, {
						hk: "2bpdfe"
					}),
					className: ee.a.predictorSnooImage,
					src: `${n.a.assetPath}/img/econ/predictions/predictor_snoo.png`
				}), s.a.createElement("div", {
					className: ee.a.circleFaqCtaCyanHollow
				}))
			}
		},
		"./src/reddit/selectors/gold/powerups/modSignup.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return l
			}));
			var n = a("./src/reddit/featureFlags/subredditPoints.ts"),
				r = a("./src/reddit/selectors/moderatorPermissions.ts"),
				s = a("./src/reddit/selectors/user.ts"),
				o = a("./src/reddit/selectors/gold/powerups/index.ts");
			const l = e => {
				const t = Object(r.a)(e);
				if (!t) return null;
				const a = Object(s.H)(e),
					l = [];
				for (const r of t) {
					const t = e.subreddits.models[r];
					if (!t) return null;
					const s = Object(o.h)(e, {
						subredditId: r
					});
					n.b.has(t.name) || t.isNSFW || t.subscribers < 1e3 && !a || l.push({
						id: r,
						displayText: t.displayText,
						hasPowerups: s
					})
				}
				return l
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Predictions.da2fc0dfa350bc655488.js.map