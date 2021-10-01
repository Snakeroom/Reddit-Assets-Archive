// https://www.redditstatic.com/desktop2x/Powerups.a17f61889e671afa5631.js
// Retrieved at 10/1/2021, 6:30:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Powerups"], {
		"./node_modules/lodash/_arraySampleSize.js": function(e, a, t) {
			var n = t("./node_modules/lodash/_baseClamp.js"),
				s = t("./node_modules/lodash/_copyArray.js"),
				r = t("./node_modules/lodash/_shuffleSelf.js");
			e.exports = function(e, a) {
				return r(s(e), n(a, 0, e.length))
			}
		},
		"./node_modules/lodash/_baseClamp.js": function(e, a) {
			e.exports = function(e, a, t) {
				return e == e && (void 0 !== t && (e = e <= t ? e : t), void 0 !== a && (e = e >= a ? e : a)), e
			}
		},
		"./node_modules/lodash/_baseRandom.js": function(e, a) {
			var t = Math.floor,
				n = Math.random;
			e.exports = function(e, a) {
				return e + t(n() * (a - e + 1))
			}
		},
		"./node_modules/lodash/_baseSampleSize.js": function(e, a, t) {
			var n = t("./node_modules/lodash/_baseClamp.js"),
				s = t("./node_modules/lodash/_shuffleSelf.js"),
				r = t("./node_modules/lodash/values.js");
			e.exports = function(e, a) {
				var t = r(e);
				return s(t, n(a, 0, t.length))
			}
		},
		"./node_modules/lodash/_shuffleSelf.js": function(e, a, t) {
			var n = t("./node_modules/lodash/_baseRandom.js");
			e.exports = function(e, a) {
				var t = -1,
					s = e.length,
					r = s - 1;
				for (a = void 0 === a ? s : a; ++t < a;) {
					var l = n(t, r),
						o = e[l];
					e[l] = e[t], e[t] = o
				}
				return e.length = a, e
			}
		},
		"./node_modules/lodash/sampleSize.js": function(e, a, t) {
			var n = t("./node_modules/lodash/_arraySampleSize.js"),
				s = t("./node_modules/lodash/_baseSampleSize.js"),
				r = t("./node_modules/lodash/isArray.js"),
				l = t("./node_modules/lodash/_isIterateeCall.js"),
				o = t("./node_modules/lodash/toInteger.js");
			e.exports = function(e, a, t) {
				return a = (t ? l(e, a, t) : void 0 === a) ? 1 : o(a), (r(e) ? n : s)(e, a)
			}
		},
		"./src/reddit/components/CollapsibleFAQ/index.m.less": function(e, a, t) {
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
		"./src/reddit/components/CollapsibleFAQ/index.tsx": function(e, a, t) {
			"use strict";
			var n = t("./node_modules/react/index.js"),
				s = t.n(n),
				r = t("./src/reddit/components/CollapsibleFAQ/index.m.less"),
				l = t.n(r),
				o = t("./src/lib/classNames/index.ts"),
				c = t("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				i = t("./src/reddit/icons/svgs/ChevronUp/index.tsx");
			class m extends s.a.Component {
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
						question: a,
						children: t
					} = this.props, {
						isOpen: n
					} = this.state, r = n ? l.a.isOpen : "";
					return s.a.createElement("div", {
						className: Object(o.a)(e, l.a.collapsibleFAQ)
					}, s.a.createElement("button", {
						className: l.a.questionButton,
						type: "button",
						onClick: this.toggleOpen
					}, s.a.createElement("span", {
						className: l.a.buttonContent,
						tabIndex: -1
					}, a, n ? s.a.createElement(i.a, {
						className: l.a.collapseIcon
					}) : s.a.createElement(c.a, {
						className: l.a.collapseIcon
					}))), s.a.createElement("div", {
						className: Object(o.a)(l.a.collapsibleAnswer, r)
					}, t))
				}
			}
			a.a = m
		},
		"./src/reddit/components/MarketingPageFooter/index.m.less": function(e, a, t) {
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
		"./src/reddit/components/MarketingPageFooter/index.tsx": function(e, a, t) {
			"use strict";
			var n = t("./node_modules/react/index.js"),
				s = t.n(n),
				r = t("./src/reddit/components/MarketingPageFooter/index.m.less"),
				l = t.n(r),
				o = t("./src/lib/classNames/index.ts");
			const {
				fbt: c
			} = t("./node_modules/fbt/lib/FbtPublic.js");
			a.a = e => s.a.createElement("div", {
				className: Object(o.a)(e.className, l.a.marketingPageFooter)
			}, s.a.createElement("div", {
				className: Object(o.a)(e.className, l.a.marketingPageFooterInner)
			}, s.a.createElement("div", {
				className: l.a.linkContainer
			}, s.a.createElement("div", {
				className: l.a.linkCol
			}, s.a.createElement("ul", {
				className: l.a.linkColInner
			}, s.a.createElement("li", {
				className: l.a.linkItem
			}, s.a.createElement("a", {
				className: l.a.link,
				href: "https://about.reddit.com"
			}, c._("about", null, {
				hk: "3IO4c7"
			}))), s.a.createElement("li", {
				className: l.a.linkItem
			}, s.a.createElement("a", {
				className: l.a.link,
				href: "https://about.reddit.com/careers/"
			}, c._("careers", null, {
				hk: "2GATRU"
			}))), s.a.createElement("li", {
				className: l.a.linkItem
			}, s.a.createElement("a", {
				className: l.a.link,
				href: "https://about.reddit.com/press/"
			}, c._("press", null, {
				hk: "iUiGg"
			}))))), s.a.createElement("div", {
				className: l.a.linkCol
			}, s.a.createElement("ul", {
				className: l.a.linkColInner
			}, s.a.createElement("li", {
				className: l.a.linkItem
			}, s.a.createElement("a", {
				className: l.a.link,
				href: "https://www.redditinc.com/advertising"
			}, c._("advertise", null, {
				hk: "RYuIn"
			}))), s.a.createElement("li", {
				className: l.a.linkItem
			}, s.a.createElement("a", {
				className: l.a.link,
				href: "http://www.redditblog.com/"
			}, c._("blog", null, {
				hk: "4xzWuA"
			}))), s.a.createElement("li", {
				className: l.a.linkItem
			}, s.a.createElement("a", {
				className: l.a.link,
				href: "https://www.reddithelp.com"
			}, c._("help", null, {
				hk: "36XyzA"
			}))))), s.a.createElement("div", {
				className: Object(o.a)(l.a.linkCol, l.a.linkBoldCol)
			}, s.a.createElement("ul", {
				className: l.a.linkColInner
			}, s.a.createElement("li", {
				className: l.a.linkItem
			}, s.a.createElement("a", {
				className: l.a.link,
				href: "https://www.reddit.com/coins"
			}, c._("reddit coins", null, {
				hk: "3Ts6tu"
			}))), s.a.createElement("li", {
				className: l.a.linkItem
			}, s.a.createElement("a", {
				className: l.a.link,
				href: "https://www.reddit.com/premium"
			}, c._("reddit premium", null, {
				hk: "3vPbLO"
			}))), s.a.createElement("li", {
				className: l.a.linkItem
			}, s.a.createElement("a", {
				className: l.a.link,
				href: "https://redditgifts.com/"
			}, c._("reddit gifts", null, {
				hk: "3WNNEy"
			}))))), s.a.createElement("div", {
				className: Object(o.a)(l.a.linkCol, l.a.linkBoldCol)
			}, s.a.createElement("ul", {
				className: l.a.linkColInner
			}, s.a.createElement("li", {
				className: l.a.linkItem
			}, s.a.createElement("a", {
				className: l.a.link,
				href: "https://www.facebook.com/reddit/"
			}, c._("Facebook", null, {
				hk: "47DT2F"
			}))), s.a.createElement("li", {
				className: l.a.linkItem
			}, s.a.createElement("a", {
				className: l.a.link,
				href: "https://twitter.com/reddit"
			}, c._("Twitter", null, {
				hk: "3aUv7u"
			}))), s.a.createElement("li", {
				className: l.a.linkItem
			}, s.a.createElement("a", {
				className: l.a.link,
				href: "https://www.instagram.com/reddit/"
			}, c._("Instagram", null, {
				hk: "dVIRX"
			})))))), s.a.createElement("ul", {
				className: l.a.legal
			}, s.a.createElement("li", {
				className: l.a.legalItem
			}, s.a.createElement("a", {
				className: l.a.legalLink,
				href: "https://www.redditinc.com/policies/content-policy"
			}, c._("content policy", null, {
				hk: "4ptiaZ"
			}))), s.a.createElement("li", {
				className: l.a.legalItem
			}, s.a.createElement("a", {
				className: l.a.legalLink,
				href: "https://www.reddit.com/help/privacypolicy"
			}, c._("privacy policy", null, {
				hk: "1ybjnz"
			}))), s.a.createElement("li", {
				className: l.a.legalItem
			}, s.a.createElement("a", {
				className: l.a.legalLink,
				href: "https://www.redditinc.com/policies/user-agreement"
			}, c._("user agreement", null, {
				hk: "4puRxC"
			}))), s.a.createElement("li", {
				className: l.a.legalItem
			}, s.a.createElement("a", {
				className: l.a.legalLink,
				href: "https://www.reddit.com/help/healthycommunities/"
			}, c._("mod policy", null, {
				hk: "1VvAdM"
			}))), s.a.createElement("li", {
				className: l.a.legalItem
			}, c._("© {year} Reddit, Inc. All rights reserved", [c._param("year", (new Date).getFullYear().toString())], {
				hk: "23FUx6"
			})))))
		},
		"./src/reddit/components/PowerupsSignUpModal/MultiSubredditForm.m.less": function(e, a, t) {
			e.exports = {
				container: "fpiu0NM2S8yHH6_ihcdWk",
				checkboxList: "_1m1zi-wGci3ttgxb9Hxaiv",
				checkbox: "_11oFoHgYhREHdxjIRuo-Y0",
				disabled: "_13t2B0OwZfs0pUbJWZX5zP",
				selectAllButton: "_3x9Z6fvYEgjxiOs6H1Uzrn",
				active: "w7Mleu6dWx4HFuv3HjRkC"
			}
		},
		"./src/reddit/components/PowerupsSignUpModal/index.m.less": function(e, a, t) {
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
		"./src/reddit/components/PowerupsSignUpModal/index.tsx": function(e, a, t) {
			"use strict";
			t.d(a, "b", (function() {
				return C
			})), t.d(a, "a", (function() {
				return I
			}));
			t("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = t("./src/config.ts"),
				s = t("./node_modules/react/index.js"),
				r = t.n(s),
				l = t("./node_modules/react-redux/es/index.js"),
				o = t("./src/lib/classNames/index.ts"),
				c = t("./src/higherOrderComponents/asModal/index.tsx"),
				i = t("./src/reddit/actions/gold/powerups.ts"),
				m = t("./src/reddit/controls/Button/index.tsx"),
				u = t("./src/reddit/helpers/trackers/powerupsSignup.ts"),
				d = t("./src/reddit/hooks/useThunkDispatch.ts"),
				p = t("./src/reddit/hooks/useTracking.ts"),
				h = t("./src/reddit/icons/svgs/Close/index.tsx"),
				g = t("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				w = t("./src/reddit/selectors/gold/powerups/modSignup.ts"),
				_ = t("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				k = t("./src/reddit/components/PowerupsSignUpModal/MultiSubredditForm.m.less"),
				b = t.n(k);
			const {
				fbt: E
			} = t("./node_modules/fbt/lib/FbtPublic.js"), f = e => {
				const {
					onChange: a,
					subredditIdsSelected: t,
					subredditsInfo: n,
					wasSuccessful: s,
					allEnabled: l
				} = e, c = n.filter(e => !e.hasPowerups), i = n.filter(e => e.hasPowerups), u = c.length === t.length;
				return r.a.createElement("div", {
					className: b.a.container
				}, r.a.createElement("div", {
					className: b.a.checkboxList
				}, i.map(({
					id: e,
					displayText: a
				}) => r.a.createElement(_.a, {
					className: Object(o.a)(b.a.checkbox, b.a.disabled),
					key: e,
					isSelected: !0,
					onClick: () => {},
					text: a,
					disabled: !0
				})), c.map(({
					id: e,
					displayText: n
				}) => {
					const l = t.includes(e);
					return r.a.createElement(_.a, {
						className: Object(o.a)(b.a.checkbox, {
							[b.a.disabled]: s
						}),
						key: e,
						isSelected: l,
						onClick: () => ((e, n) => {
							const s = n ? [...t, e] : t.filter(a => a !== e);
							a(s)
						})(e, !l),
						text: n,
						disabled: s
					})
				})), !s && !l && r.a.createElement(m.s, {
					className: b.a.selectAllButton,
					onClick: () => {
						a(u ? [] : c.map(({
							id: e
						}) => e))
					},
					priority: m.b.Secondary,
					isFullWidth: !0
				}, u ? E._("Deselect all", null, {
					hk: "46i6br"
				}) : E._("Select all", null, {
					hk: "2Eo4n2"
				})))
			};
			var N = t("./src/reddit/controls/LoadingIcon/index.tsx"),
				v = t("./src/reddit/components/PowerupsSignUpModal/signupButton.m.less"),
				y = t.n(v);
			const {
				fbt: S
			} = t("./node_modules/fbt/lib/FbtPublic.js"), P = ({
				className: e,
				disabled: a,
				onClick: t,
				isLoading: n,
				wasError: s
			}) => {
				const l = s ? S._("Try again", null, {
					hk: "1cKOSe"
				}) : S._("Turn on Powerups", null, {
					hk: "AuDZE"
				});
				return r.a.createElement(m.j, {
					className: Object(o.a)(e, y.a.button, {
						[y.a.loading]: n
					}),
					disabled: a || n,
					onClick: t,
					priority: m.b.Primary,
					isFullWidth: !0
				}, n ? r.a.createElement(N.a, {
					sizePx: 12,
					center: !0
				}) : l)
			};
			var x = t("./src/reddit/components/PowerupsSignUpModal/index.m.less"),
				j = t.n(x);
			const {
				fbt: O
			} = t("./node_modules/fbt/lib/FbtPublic.js"), C = Object(c.a)(({
				closeModal: e
			}) => {
				var a;
				const t = Object(d.a)(),
					o = Object(p.a)(),
					c = Object(l.e)(w.a),
					_ = null !== (a = 1 === (null == c ? void 0 : c.length)) && void 0 !== a && a,
					k = null == c ? void 0 : c.every(({
						hasPowerups: e
					}) => e),
					[b, E] = Object(s.useState)(c && _ ? [c[0].id] : []),
					[N, v] = Object(s.useState)(!1),
					[y, S] = Object(s.useState)(!1),
					[x, C] = Object(s.useState)(!1);
				if (!(null == c ? void 0 : c.length)) return e(), null;
				const F = async e => {
					try {
						return await t(Object(i.a)(e)), {
							success: !0
						}
					} catch (a) {
						return {
							success: !1,
							error: a.message
						}
					}
				}, q = y || k ? O._("{=[r/community]}{=has Powerups}", [O._param("=[r/community]", r.a.createElement("div", null, O._("{r/community}", [O._param("r/community", c[0].displayText)], {
					hk: "1TzAG8"
				}))), O._param("=has Powerups", r.a.createElement("div", null, O._("has Powerups", null, {
					hk: "2zYYns"
				})))], {
					hk: "2bu88V"
				}) : O._("{=Power up}{=[r/community]}", [O._param("=Power up", r.a.createElement("div", null, O._("Power up", null, {
					hk: "3qh4XT"
				}))), O._param("=[r/community]", r.a.createElement("div", null, O._("{r/community}", [O._param("r/community", c[0].displayText)], {
					hk: "2Pz0Sn"
				})))], {
					hk: "p9zKt"
				}), M = y || k ? O._("{=Your communities}{=have Powerups}", [O._param("=Your communities", r.a.createElement("div", null, O._("Your communities", null, {
					hk: "3ySkxw"
				}))), O._param("=have Powerups", r.a.createElement("div", null, O._("have Powerups", null, {
					hk: "4rHX2f"
				})))], {
					hk: "E4Lct"
				}) : O._("{=Power up}{=your communities}", [O._param("=Power up", r.a.createElement("div", null, O._("Power up", null, {
					hk: "Jrn2T"
				}))), O._param("=your communities", r.a.createElement("div", null, O._("your communities", null, {
					hk: "4EPQY"
				})))], {
					hk: "1K9FOM"
				}), T = _ ? q : M, H = N || y || x ? O._("{=Hold tight! It can take up to 5 minutes for}{=Powerups to appear in yourcommunity.}", [O._param("=Hold tight! It can take up to 5 minutes for", r.a.createElement("div", null, O._("Hold tight! It can take up to 5 minutes for", null, {
					hk: "1cFoaI"
				}))), O._param("=Powerups to appear in yourcommunity.", r.a.createElement("div", null, O._({
					"*": "Powerups to appear in your communities.",
					_1: "Powerups to appear in your community."
				}, [O._plural(c.length)], {
					hk: "1ky0qH"
				})))], {
					hk: "4tvqU7"
				}) : O._("{=Harness the power of yourcommunity to}{=unlock special perks and advanced features.}", [O._param("=Harness the power of yourcommunity to", r.a.createElement("div", null, O._({
					"*": "Harness the power of your communities to",
					_1: "Harness the power of your community to"
				}, [O._plural(c.length)], {
					hk: "2rOtDZ"
				}))), O._param("=unlock special perks and advanced features.", r.a.createElement("div", null, O._("unlock special perks and advanced features.", null, {
					hk: "2Xj3Tx"
				})))], {
					hk: "2cx1IK"
				});
				return r.a.createElement("div", {
					className: j.a.container,
					"data-testid": "powerups-signup-modal"
				}, r.a.createElement(I, null, r.a.createElement("div", {
					className: j.a.headerImageContainer
				}, r.a.createElement("img", {
					className: j.a.headerImage,
					alt: "Powerup heroes",
					src: `${n.a.assetPath}/img/powerups/powerups-rangers-static.png`
				}))), r.a.createElement("button", {
					className: j.a.closeButton,
					onClick: e
				}, r.a.createElement(h.a, {
					className: j.a.closeIcon
				})), r.a.createElement("div", {
					className: j.a.body
				}, r.a.createElement("div", {
					className: j.a.titleContainer
				}, r.a.createElement("h1", {
					className: j.a.titleText
				}, T), r.a.createElement("h2", {
					className: j.a.subtitleText
				}, H)), !_ && r.a.createElement(f, {
					onChange: E,
					subredditIdsSelected: b,
					subredditsInfo: c,
					wasSuccessful: y,
					allEnabled: k
				}), x && r.a.createElement("div", {
					className: j.a.errorContainer
				}, r.a.createElement(g.a, {
					className: j.a.errorIcon
				}), r.a.createElement("span", {
					className: j.a.errorText
				}, O._("Something went wrong.", null, {
					hk: "N6RFp"
				}))), !y && !k && r.a.createElement(P, {
					disabled: 0 === b.length,
					onClick: async () => {
						o(Object(u.c)(b)), v(!0);
						const e = (await Promise.all(b.map(F))).every(({
							success: e
						}) => e);
						S(e), C(!e), v(!1)
					},
					isLoading: N,
					wasError: x
				}), (y || k) && _ && r.a.createElement(r.a.Fragment, null, r.a.createElement("p", {
					className: j.a.successText
				}, O._("Let your community know about Powerups with a pinned post", null, {
					hk: "3bII20"
				})), r.a.createElement(m.s, {
					className: j.a.successButton,
					to: `/${c[0].displayText}/submit`,
					kind: m.a.InternalLink,
					priority: m.b.Primary,
					isFullWidth: !0
				}, O._("Spread the word", null, {
					hk: "1f68Nj"
				}))), r.a.createElement("footer", {
					className: j.a.footer
				}, O._("Heads up—once you turn on Powerups you can’t turn it off.", null, {
					hk: "3YQxrF"
				}))))
			}), I = ({
				children: e,
				accentDiagonalCustomStyles: a
			}) => r.a.createElement("div", {
				className: j.a.background
			}, r.a.createElement("div", {
				className: j.a.diagonalLayoutSecondary,
				style: a
			}), r.a.createElement("div", {
				className: j.a.diagonalLayoutPrimary
			}), r.a.createElement("div", {
				className: Object(o.a)(j.a.circle, j.a.lineCircle),
				style: {
					backgroundImage: `url(${n.a.assetPath}/img/powerups/linecircle-blue.png)`
				}
			}), r.a.createElement("div", {
				className: Object(o.a)(j.a.circle, j.a.circleOrangeHollow)
			}), r.a.createElement("div", {
				className: Object(o.a)(j.a.circle, j.a.dotCircle1),
				style: {
					backgroundImage: `url(${n.a.assetPath}/img/powerups/dotcircle.png)`
				}
			}), r.a.createElement("div", {
				className: Object(o.a)(j.a.circle, j.a.circleGreenFilled)
			}), r.a.createElement("div", {
				className: Object(o.a)(j.a.circle, j.a.circleGreenHollow)
			}), r.a.createElement("div", {
				className: Object(o.a)(j.a.circle, j.a.circleYellowHollow)
			}), r.a.createElement("div", {
				className: Object(o.a)(j.a.circle, j.a.dotCircle2),
				style: {
					backgroundImage: `url(${n.a.assetPath}/img/powerups/dotcircle.png)`
				}
			}), e)
		},
		"./src/reddit/components/PowerupsSignUpModal/signupButton.m.less": function(e, a, t) {
			e.exports = {
				button: "_3ZSQSgkGYXZ9XJ5g3wsxpE",
				loading: "_2s-QMavjFJzrBs0ArvRNhu"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, a, t) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, a, t) {
			"use strict";
			var n = t("./node_modules/react/index.js"),
				s = t.n(n),
				r = t("./src/lib/classNames/index.ts"),
				l = t("./src/reddit/controls/LoadingIcon/index.m.less"),
				o = t.n(l);
			a.a = ({
				center: e,
				className: a,
				sizePx: t = 10
			}) => s.a.createElement("div", {
				className: Object(r.a)(o.a.loadingIcon, a, {
					[o.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${t}px`
				},
				"data-testid": "LoadingIcon"
			})
		},
		"./src/reddit/helpers/trackers/powerupsSignup.ts": function(e, a, t) {
			"use strict";
			t.d(a, "d", (function() {
				return s
			})), t.d(a, "b", (function() {
				return r
			})), t.d(a, "c", (function() {
				return l
			})), t.d(a, "a", (function() {
				return o
			}));
			var n = t("./src/reddit/selectors/telemetry.ts");
			const s = () => e => ({
					...n.defaults(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "powerups_landing_page"
					}
				}),
				r = () => e => ({
					...n.defaults(e),
					source: "powerups_landing_page",
					action: "click",
					noun: "open_signup_modal"
				}),
				l = e => a => ({
					...n.defaults(a),
					source: "powerups_signup_form",
					action: "click",
					noun: "turn_on_powerups",
					powerups: {
						subredditIds: e.join(",")
					}
				}),
				o = () => e => ({
					...n.defaults(e),
					source: "powerups_landing_page",
					action: "click",
					noun: "community"
				})
		},
		"./src/reddit/hooks/useIsClient.ts": function(e, a, t) {
			"use strict";
			t.d(a, "a", (function() {
				return s
			}));
			var n = t("./node_modules/react/index.js");

			function s() {
				const [e, a] = Object(n.useState)(!1);
				return Object(n.useEffect)(() => {
					setTimeout(a, 1, !0)
				}, []), e
			}
		},
		"./src/reddit/hooks/useThunkDispatch.ts": function(e, a, t) {
			"use strict";
			t.d(a, "a", (function() {
				return s
			}));
			var n = t("./node_modules/react-redux/es/index.js");

			function s() {
				return Object(n.d)()
			}
		},
		"./src/reddit/icons/svgs/ChevronUp/index.tsx": function(e, a, t) {
			"use strict";
			var n = t("./node_modules/react/index.js"),
				s = t.n(n);
			a.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("polygon", {
				fill: "inherit",
				transform: "translate(6.029200, 6.044700) scale(1, -1) translate(-6.029200, -6.044700)",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/pages/Powerups/Communities.m.less": function(e, a, t) {
			e.exports = {
				communitiesContainer: "_2VWS7ATKcPK8kFgPYzh06g",
				isNightMode: "_2JPVTtZDQj-qJpwQ4iUwFE",
				communitiesContent: "_3Suw2A7GhnE8jIOQ0v2hwd",
				community: "_1pmakIscN9hjFpFbg2oI0S",
				communityIcon: "_1Tt4iKH_VsDX2eW0O14qyI",
				communityName: "_2O1MFdtNk8V8rvSq1Obfi1"
			}
		},
		"./src/reddit/pages/Powerups/FaqSection.m.less": function(e, a, t) {
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
		"./src/reddit/pages/Powerups/FaqSection.tsx": function(e, a, t) {
			"use strict";
			t.d(a, "b", (function() {
				return g
			})), t.d(a, "a", (function() {
				return b
			}));
			var n = t("./src/config.ts"),
				s = t("./node_modules/react/index.js"),
				r = t.n(s),
				l = t("./node_modules/react-redux/es/index.js"),
				o = t("./src/lib/classNames/index.ts"),
				c = t("./src/reddit/components/CollapsibleFAQ/index.tsx"),
				i = t("./src/reddit/controls/Button/index.tsx"),
				m = t("./src/reddit/selectors/user.ts"),
				u = t("./src/reddit/pages/Powerups/FaqSection.m.less"),
				d = t.n(u);
			const {
				fbt: p
			} = t("./node_modules/fbt/lib/FbtPublic.js"), h = [{
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
					return r.a.createElement(r.a.Fragment, null, p._("We've built Powerups with feedback from moderators and added a few different controls that let you customize how you want Powerups to work in your community.", null, {
						hk: "4beNqr"
					}), r.a.createElement("br", null), r.a.createElement("br", null), p._("Mods of communities that have Powerups enabled can:", null, {
						hk: "3JWLHJ"
					}), r.a.createElement("ul", null, r.a.createElement("li", null, "• ", p._("Access all Powerups perks", null, {
						hk: "4iqCkq"
					})), r.a.createElement("li", null, "• ", p._("Can upload up to 20 custom emoji images (.png, .jpeg, .jpg, .heic are all supported)", null, {
						hk: "150yOT"
					})), r.a.createElement("li", null, "• ", p._("Can turn off GIFs", null, {
						hk: "2ulUhF"
					})), r.a.createElement("li", null, "• ", p._("Manage video controls and permissions. So, if videos aren't allowed in your community, then HD video won't be unlocked along with the other perks", null, {
						hk: "lAGuc"
					}))))
				}
			}, {
				prompt: () => p._("What happens if my community doesn’t unlock Powerups?", null, {
					hk: "qZaeO"
				}),
				answer: function() {
					return r.a.createElement(r.a.Fragment, null, p._("To unlock Powerups perks, communities need 25 powerups. If your community doesn’t get to 25 powerups, then the perks will remain locked for the majority of the community. (But those who have contributed a powerup unlock perks for themselves right away.)", null, {
						hk: "1SvUvT"
					}), r.a.createElement("br", null), r.a.createElement("br", null), p._("However, getting to 25 is easier than you may think. All Reddit Premium members can apply the monthly powerup that comes with their subscription to your community, and members who don’t have Reddit Premium can purchase powerups on the web. (Sorry, this isn’t available on mobile yet.)", null, {
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
				modSubredditsInfo: a
			}) => r.a.createElement("div", {
				className: d.a.faqSection
			}, r.a.createElement("div", {
				className: Object(o.a)(d.a.faqSectionContent, d.a.contentWrapper)
			}, r.a.createElement(w, null), r.a.createElement(_, null), r.a.createElement(k, null), r.a.createElement("h2", {
				className: d.a.faqHeading
			}, p._("Questions about Powerups", null, {
				hk: "nzxYw"
			})), r.a.createElement("div", {
				className: d.a.faqs
			}, h.map(({
				prompt: e,
				answer: a
			}, t) => r.a.createElement(c.a, {
				defaultClosed: !0,
				question: e(),
				key: t
			}, a()))), r.a.createElement("h3", {
				className: d.a.faqMoreQuestionsHeading
			}, p._("Have more questions? We've got answers.", null, {
				hk: "3Entyj"
			})), r.a.createElement(i.s, {
				className: d.a.fullFaqsButton,
				priority: i.b.Secondary,
				href: "https://mods.reddithelp.com/hc/en-us/articles/4403699823629",
				kind: i.a.ExternalLink,
				target: "_blank"
			}, p._("View Full FAQs", null, {
				hk: "1eOLlL"
			})), r.a.createElement("h2", {
				className: d.a.faqTryOutHeading
			}, p._("Try out Powerups today", null, {
				hk: "17RjMt"
			})), r.a.createElement("h3", {
				className: d.a.faqTryOutSubheading
			}, p._("Ok, you've made it to the bottom of the page. What do you think? Are Powerups for your community?", null, {
				hk: "3062Vv"
			})), r.a.createElement(i.j, {
				onClick: e,
				disabled: !(null == a ? void 0 : a.length),
				priority: i.b.Primary,
				className: d.a.ctaLetsDoThisButton
			}, p._("Let's Do This!", null, {
				hk: "6CnFH"
			})), r.a.createElement(E, null))), w = ({
				hideBolt: e
			}) => r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
				className: Object(o.a)(d.a.faqQuestionMark, d.a.faqQuestionMarkWithBolt)
			}), r.a.createElement("div", {
				className: d.a.circleFaqYellowWithBolt
			}, !e && r.a.createElement("img", {
				alt: "Powerup bolt",
				className: d.a.boltInCircleFaqYellow,
				src: `${n.a.assetPath}/img/powerups/bolt.png`
			}))), _ = () => r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
				className: d.a.circleFaqCyanSmall
			}), r.a.createElement("div", {
				className: d.a.circleFaqDotted,
				style: {
					backgroundImage: `url(${n.a.assetPath}/img/powerups/dotcircle.png)`
				}
			}), r.a.createElement("div", {
				className: d.a.circleFaqYellowSmall
			}), r.a.createElement("div", {
				className: d.a.circleFaqCyanBig
			}), r.a.createElement("div", {
				className: d.a.circleFaqOrange
			}), r.a.createElement("div", {
				className: d.a.circleFaqYellowHollow
			})), k = () => r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
				className: Object(o.a)(d.a.faqQuestionMark, d.a.faqQuestionMarkTopLeft)
			}), r.a.createElement("div", {
				className: Object(o.a)(d.a.faqQuestionMark, d.a.faqQuestionMarkTopRight)
			}), r.a.createElement("div", {
				className: Object(o.a)(d.a.faqQuestionMark, d.a.faqQuestionMarkLeft)
			}), r.a.createElement("div", {
				className: Object(o.a)(d.a.faqQuestionMark, d.a.faqQuestionMarkBottomRight)
			})), b = ({
				hideBolt: e
			}) => r.a.createElement(r.a.Fragment, null, r.a.createElement(w, {
				hideBolt: e
			}), r.a.createElement(_, null), r.a.createElement(k, null)), E = () => {
				const e = Object(l.e)(m.X);
				return r.a.createElement("div", {
					className: d.a.ctaButtonCirclesAndBolt
				}, r.a.createElement("div", {
					className: d.a.circleFaqCtaStriped,
					style: {
						backgroundImage: e ? `url(${n.a.assetPath}/img/powerups/linecircle-orange.png)` : `url(${n.a.assetPath}/img/powerups/linecircle-blue.png)`
					}
				}), r.a.createElement("div", {
					className: d.a.circleFaqCtaYellowBig
				}, r.a.createElement("img", {
					alt: "Powerup bolt",
					className: d.a.boltInCircleFaqCtaYellow,
					src: `${n.a.assetPath}/img/powerups/bolt.png`
				})), r.a.createElement("div", {
					className: d.a.circleFaqCtaCyanHollow
				}))
			}
		},
		"./src/reddit/pages/Powerups/PerksSection.m.less": function(e, a, t) {
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
		"./src/reddit/pages/Powerups/index.m.less": function(e, a, t) {
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
				snoo: "yX-s6dxc0xlmMAnHxYVzy",
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
		"./src/reddit/pages/Powerups/index.tsx": function(e, a, t) {
			"use strict";
			t.r(a), t.d(a, "BannerCircles", (function() {
				return H
			}));
			var n = t("./src/config.ts"),
				s = t("./node_modules/react/index.js"),
				r = t.n(s),
				l = t("./node_modules/react-redux/es/index.js"),
				o = t("./src/lib/classNames/index.ts"),
				c = t("./src/reddit/components/MarketingPageFooter/index.tsx"),
				i = t("./src/reddit/components/PowerupsSignUpModal/index.tsx"),
				m = t("./src/reddit/controls/Button/index.tsx"),
				u = t("./src/reddit/helpers/trackers/powerupsSignup.ts"),
				d = t("./src/reddit/hooks/useTracking.ts"),
				p = t("./src/reddit/icons/fonts/index.tsx"),
				h = t("./src/reddit/icons/svgs/Snoo/index.tsx"),
				g = t("./src/reddit/selectors/gold/powerups/modSignup.ts"),
				w = t("./src/reddit/selectors/user.ts"),
				_ = t("./node_modules/lodash/sampleSize.js"),
				k = t.n(_),
				b = t("./node_modules/react-router-dom/esm/react-router-dom.js"),
				E = t("./src/lib/opener/index.ts"),
				f = t("./src/reddit/hooks/useIsClient.ts"),
				N = t("./src/reddit/pages/Powerups/Communities.m.less"),
				v = t.n(N);
			const y = k()(["wallstreetbets", "pennystocks", "tiktokcringe", "lgbt", "python", "unexpected", "chloe", "pewdiepiesubmissions", "roastme", "jacksepticeye", "thebachelor", "taylorswift", "bigbrother", "belowdeck", "blackpink"], 3),
				S = () => {
					const e = Object(d.a)(),
						a = Object(l.e)(w.X),
						t = Object(f.a)(),
						s = () => {
							e(Object(u.a)())
						};
					return t ? r.a.createElement("section", {
						className: Object(o.a)(v.a.communitiesContainer, {
							[v.a.isNightMode]: a
						})
					}, r.a.createElement("div", {
						className: v.a.communitiesContent
					}, y.map(e => r.a.createElement(b.a, {
						className: v.a.community,
						key: e,
						to: `r/${e}`,
						target: E.d.BLANK,
						rel: E.c,
						onClick: s
					}, r.a.createElement("div", {
						className: v.a.communityIcon,
						style: {
							backgroundImage: `url(${n.a.assetPath}/img/powerups/communities-placeholder.png)`
						}
					}), r.a.createElement("div", {
						className: v.a.communityName
					}, "r/", e))))) : null
				};
			var P = t("./src/reddit/pages/Powerups/FaqSection.tsx"),
				x = t("./src/reddit/pages/Powerups/PerksSection.m.less"),
				j = t.n(x);
			const {
				fbt: O
			} = t("./node_modules/fbt/lib/FbtPublic.js"), C = [{
				title: "Achievements",
				description: "Recognize members' contributions and skills.",
				imageName: "ACHIEVEMENT_FLAIRS_v3"
			}, {
				title: "Gifs in Comments",
				description: "When simple words won't do, let members use GIFs too.",
				imageName: "COMMENTS_WITH_GIFS_v3"
			}, {
				title: "Custom Emojis",
				description: "Create and use emojis exclusive to your community.",
				imageName: "CUSTOM_EMOJIS_v3"
			}, {
				title: "HD Video",
				description: "Upload and watch in greater resolution.",
				imageName: "HD_VIDEO_v3"
			}, {
				title: "Hero Status",
				description: "Reward members who give back to the community with hero badges and instant access to perks.",
				imageName: "HERO_STATUS_v3"
			}], I = ({
				title: e,
				description: a,
				imageName: t
			}) => r.a.createElement("div", {
				className: j.a.perkCell
			}, r.a.createElement("div", {
				className: j.a.perkImageBackgroundCircle
			}, r.a.createElement("img", {
				alt: `Powerups perk ${e}`,
				className: j.a.perkImage,
				src: `${n.a.assetPath}/img/powerups/${t}.png`
			})), r.a.createElement("h3", {
				className: j.a.perkTitle
			}, O._("{perkName}", [O._param("perkName", e)], {
				hk: "qThF1"
			})), r.a.createElement("h4", {
				className: j.a.perkDescription
			}, O._("{perkDescription}", [O._param("perkDescription", a)], {
				hk: "2Uanfp"
			}))), F = () => {
				const e = Object(l.e)(w.X);
				return r.a.createElement("div", {
					className: Object(o.a)(j.a.perksSection, {
						[j.a.isNightmodeOn]: e
					})
				}, r.a.createElement("img", {
					alt: "Powerups Bolt",
					className: j.a.perksSectionBoltImage,
					src: `${n.a.assetPath}/img/powerups/bolt.png`
				}), r.a.createElement("h2", {
					className: j.a.perksSectionTitle
				}, O._("Let's check out those perks!", null, {
					hk: "jugDp"
				})), r.a.createElement("div", {
					className: Object(o.a)(j.a.perksSectionGrid, j.a.contentWrapper)
				}, C.map(({
					title: e,
					description: a,
					imageName: t
				}) => r.a.createElement(I, {
					key: e,
					title: e,
					description: a,
					imageName: t
				}))))
			};
			var q = t("./src/reddit/pages/Powerups/index.m.less"),
				M = t.n(q);
			const {
				fbt: T
			} = t("./node_modules/fbt/lib/FbtPublic.js");
			a.default = () => {
				const e = Object(d.a)(),
					a = Object(l.e)(g.a),
					t = Object(l.e)(w.X),
					[_, k] = Object(s.useState)(!1);
				Object(s.useEffect)(() => {
					e(Object(u.d)())
				}, [e]);
				const b = () => {
						e(Object(u.b)()), k(!0)
					},
					E = () => k(!1);
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: M.a.headingSection
				}, r.a.createElement(H, {
					isNightmodeOn: t
				}), r.a.createElement("div", {
					className: Object(o.a)(M.a.contentWrapper, M.a.headingContent)
				}, r.a.createElement("div", {
					className: M.a.headingText
				}, r.a.createElement("h1", {
					className: Object(o.a)(M.a.heading, {
						[M.a.isNightmodeOn]: t
					})
				}, r.a.createElement(h.a, {
					className: M.a.snoo
				}), "Powerups"), r.a.createElement("h2", {
					className: M.a.subheading
				}, T._("Come together to level up the whole community", null, {
					hk: "3C0qLA"
				})), r.a.createElement("p", {
					className: Object(o.a)(M.a.description, M.a.bodyText)
				}, T._("Harness the power of your community to unlock special perks and advanced features.", null, {
					hk: "1NgNS2"
				})), r.a.createElement("div", {
					className: Object(o.a)(M.a.modWarning, M.a.bodyText)
				}, r.a.createElement("div", {
					className: M.a.modWarningTop
				}, r.a.createElement(p.a, {
					name: "mod",
					className: M.a.modWarningIcon
				})), T._("{=Only moderators with theManage Settings permission can turn on Powerups.}{=Heads up—Only Safe for Work (SFW) communities with 1,000 members or more can enable Powerups.}", [T._param("=Only moderators with theManage Settings permission can turn on Powerups.", r.a.createElement("div", null, T._("Only moderators with the {=Manage Settings} permission can turn on Powerups.", [T._param("=Manage Settings", r.a.createElement("span", {
					className: M.a.modWarningItalic
				}, T._("Manage Settings", null, {
					hk: "4AauR"
				})))], {
					hk: "1sKKo7"
				}))), T._param("=Heads up—Only Safe for Work (SFW) communities with 1,000 members or more can enable Powerups.", r.a.createElement("div", {
					className: M.a.modWarningFooter
				}, T._("Heads up—Only Safe for Work (SFW) communities with 1,000 members or more can enable Powerups.", null, {
					hk: "2euXqd"
				})))], {
					hk: "2FL5at"
				})), r.a.createElement(m.j, {
					onClick: b,
					disabled: !(null == a ? void 0 : a.length),
					priority: m.b.Primary,
					className: M.a.ctaButton
				}, T._("Turn on Powerups", null, {
					hk: "4E97KH"
				}))), r.a.createElement("div", {
					className: M.a.headingArt
				}, r.a.createElement("div", {
					className: M.a.powerupsMarketingImageContainer
				}, r.a.createElement("picture", {
					className: M.a.powerupsMarketingImage
				}, r.a.createElement("source", {
					srcSet: `${n.a.assetPath}/img/powerups/powerups-rangers.webp`,
					type: "image/webp"
				}), r.a.createElement("source", {
					srcSet: `${n.a.assetPath}/img/powerups/powerups-rangers-static.png`,
					type: "image/png"
				}), r.a.createElement("img", {
					alt: "Powerup heroes",
					className: M.a.fallbackStaticImage,
					src: `${n.a.assetPath}/img/powerups/powerups-rangers-static.png`
				})))))), r.a.createElement(S, null), r.a.createElement("div", {
					className: M.a.pioneerSection
				}, r.a.createElement("div", {
					className: Object(o.a)(M.a.contentWrapper, M.a.powerupsPioneerContent)
				}, r.a.createElement("div", {
					className: Object(o.a)(M.a.circle, M.a.circlePioneersCyanHollow)
				}), r.a.createElement("h2", {
					className: M.a.pioneerHeading
				}, T._("Be a Powerups pioneer", null, {
					hk: "2P7QON"
				})), r.a.createElement("h3", {
					className: M.a.pioneerSubheading
				}, T._("Be one of the first communities to turn on Powerups and have an influence on what perks and advanced features we create next.", null, {
					hk: "2wFnM6"
				})))), r.a.createElement("div", {
					className: M.a.powerupStepsSection
				}, r.a.createElement("div", {
					className: Object(o.a)(M.a.powerupStepsSectionContent, M.a.contentWrapper)
				}, r.a.createElement("div", {
					className: Object(o.a)(M.a.circle, M.a.circleStepsYellowFull)
				}), r.a.createElement("div", {
					className: Object(o.a)(M.a.circle, M.a.circleStepsStriped),
					style: {
						backgroundImage: t ? `url(${n.a.assetPath}/img/powerups/linecircle-orange.png)` : `url(${n.a.assetPath}/img/powerups/linecircle-blue.png)`
					}
				}), r.a.createElement("div", {
					className: M.a.powerupStep
				}, r.a.createElement("div", {
					className: M.a.powerupStepCounter
				}, "1"), r.a.createElement("div", {
					className: M.a.powerupStepName
				}, T._("Turn on powerups", null, {
					hk: "q0dHV"
				})), r.a.createElement("div", {
					className: M.a.powerupStepDescription
				}, T._("Just tap that big Turn on Powerups button and add Powerups to your community.", null, {
					hk: "oZMHo"
				}))), r.a.createElement("div", {
					className: M.a.powerupStep
				}, r.a.createElement("div", {
					className: M.a.powerupStepCounter
				}, "2"), r.a.createElement("div", {
					className: M.a.powerupStepName
				}, T._("Rally the community", null, {
					hk: "4m8BDG"
				})), r.a.createElement("div", {
					className: M.a.powerupStepDescription
				}, T._("Spread the word! You only need 25 powerups to give perks to the whole community.", null, {
					hk: "4eSNsf"
				}))), r.a.createElement("div", {
					className: M.a.powerupStep
				}, r.a.createElement("div", {
					className: M.a.powerupStepCounter
				}, "3"), r.a.createElement("div", {
					className: M.a.powerupStepName
				}, T._("Unlock perks", null, {
					hk: "20u0vD"
				})), r.a.createElement("div", {
					className: M.a.powerupStepDescription
				}, T._("Once your community is powered up, the perks are unlocked for everyone to use.", null, {
					hk: "3Fs5Gm"
				}))))), r.a.createElement(F, null), r.a.createElement(P.b, {
					openModal: b,
					modSubredditsInfo: a
				}), r.a.createElement(c.a, {
					className: M.a.footer
				}), _ && r.a.createElement(i.b, {
					withOverlay: !0,
					closeModal: E,
					onOverlayClick: E,
					className: M.a.modalBody,
					overlayClassName: M.a.modalOverlay
				}))
			};
			const H = ({
				isNightmodeOn: e,
				accentDiagonalCustomStyles: a
			}) => r.a.createElement("div", {
				className: Object(o.a)(M.a.background, M.a.contentWrapper)
			}, r.a.createElement("div", {
				className: M.a.diagonalLayoutSecondary,
				style: a
			}), r.a.createElement("div", {
				className: M.a.diagonalLayoutPrimary
			}), r.a.createElement("div", {
				className: Object(o.a)(M.a.circle, M.a.circleDotted),
				style: {
					backgroundImage: `url(${n.a.assetPath}/img/powerups/dotcircle.png)`
				}
			}), r.a.createElement("div", {
				className: Object(o.a)(M.a.circle, M.a.animatedCircle, M.a.circleStriped),
				style: {
					backgroundImage: e ? `url(${n.a.assetPath}/img/powerups/linecircle-orange.png)` : `url(${n.a.assetPath}/img/powerups/linecircle-blue.png)`
				}
			}), r.a.createElement("div", {
				className: Object(o.a)(M.a.circle, M.a.circleOrangeFull, M.a.animatedCircle)
			}), r.a.createElement("div", {
				className: Object(o.a)(M.a.circle, M.a.circleYellowSmall, M.a.top, M.a.animatedCircle)
			}), r.a.createElement("div", {
				className: Object(o.a)(M.a.circle, M.a.circleYellowBig, M.a.animatedCircle)
			}), r.a.createElement("div", {
				className: Object(o.a)(M.a.circle, M.a.circleYellowHollow, M.a.animatedCircle)
			}), r.a.createElement("div", {
				className: Object(o.a)(M.a.circle, M.a.circleYellowSmall, M.a.bottom, M.a.animatedCircle)
			}), r.a.createElement("div", {
				className: Object(o.a)(M.a.circle, M.a.circleOrangeHollow, M.a.animatedCircle)
			}))
		},
		"./src/reddit/selectors/gold/powerups/modSignup.ts": function(e, a, t) {
			"use strict";
			t.d(a, "a", (function() {
				return o
			}));
			var n = t("./src/reddit/featureFlags/subredditPoints.ts"),
				s = t("./src/reddit/selectors/moderatorPermissions.ts"),
				r = t("./src/reddit/selectors/user.ts"),
				l = t("./src/reddit/selectors/gold/powerups/index.ts");
			const o = e => {
				const a = Object(s.a)(e);
				if (!a) return null;
				const t = Object(r.H)(e),
					o = [];
				for (const s of a) {
					const a = e.subreddits.models[s];
					if (!a) return null;
					const r = Object(l.g)(e, {
						subredditId: s
					});
					n.b.has(a.name) || a.isNSFW || a.subscribers < 1e3 && !t || o.push({
						id: s,
						displayText: a.displayText,
						hasPowerups: r
					})
				}
				return o
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Powerups.a17f61889e671afa5631.js.map