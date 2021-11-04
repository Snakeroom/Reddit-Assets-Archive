// https://www.redditstatic.com/desktop2x/Powerups.d077871d75c3c448c25b.js
// Retrieved at 11/4/2021, 10:30:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Powerups"], {
		"./node_modules/lodash/_arraySampleSize.js": function(e, a, t) {
			var n = t("./node_modules/lodash/_baseClamp.js"),
				l = t("./node_modules/lodash/_copyArray.js"),
				s = t("./node_modules/lodash/_shuffleSelf.js");
			e.exports = function(e, a) {
				return s(l(e), n(a, 0, e.length))
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
				l = t("./node_modules/lodash/_shuffleSelf.js"),
				s = t("./node_modules/lodash/values.js");
			e.exports = function(e, a) {
				var t = s(e);
				return l(t, n(a, 0, t.length))
			}
		},
		"./node_modules/lodash/_shuffleSelf.js": function(e, a, t) {
			var n = t("./node_modules/lodash/_baseRandom.js");
			e.exports = function(e, a) {
				var t = -1,
					l = e.length,
					s = l - 1;
				for (a = void 0 === a ? l : a; ++t < a;) {
					var r = n(t, s),
						o = e[r];
					e[r] = e[t], e[t] = o
				}
				return e.length = a, e
			}
		},
		"./node_modules/lodash/sampleSize.js": function(e, a, t) {
			var n = t("./node_modules/lodash/_arraySampleSize.js"),
				l = t("./node_modules/lodash/_baseSampleSize.js"),
				s = t("./node_modules/lodash/isArray.js"),
				r = t("./node_modules/lodash/_isIterateeCall.js"),
				o = t("./node_modules/lodash/toInteger.js");
			e.exports = function(e, a, t) {
				return a = (t ? r(e, a, t) : void 0 === a) ? 1 : o(a), (s(e) ? n : l)(e, a)
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
				l = t.n(n),
				s = t("./src/reddit/components/CollapsibleFAQ/index.m.less"),
				r = t.n(s),
				o = t("./src/lib/classNames/index.ts"),
				c = t("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				i = t("./src/reddit/icons/svgs/ChevronUp/index.tsx");
			class m extends l.a.Component {
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
					} = this.state, s = n ? r.a.isOpen : "";
					return l.a.createElement("div", {
						className: Object(o.a)(e, r.a.collapsibleFAQ)
					}, l.a.createElement("button", {
						className: r.a.questionButton,
						type: "button",
						onClick: this.toggleOpen
					}, l.a.createElement("span", {
						className: r.a.buttonContent,
						tabIndex: -1
					}, a, n ? l.a.createElement(i.a, {
						className: r.a.collapseIcon
					}) : l.a.createElement(c.a, {
						className: r.a.collapseIcon
					}))), l.a.createElement("div", {
						className: Object(o.a)(r.a.collapsibleAnswer, s)
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
				l = t.n(n),
				s = t("./src/reddit/components/MarketingPageFooter/index.m.less"),
				r = t.n(s),
				o = t("./src/lib/classNames/index.ts");
			const {
				fbt: c
			} = t("./node_modules/fbt/lib/FbtPublic.js");
			a.a = e => l.a.createElement("div", {
				className: Object(o.a)(e.className, r.a.marketingPageFooter)
			}, l.a.createElement("div", {
				className: Object(o.a)(e.className, r.a.marketingPageFooterInner)
			}, l.a.createElement("div", {
				className: r.a.linkContainer
			}, l.a.createElement("div", {
				className: r.a.linkCol
			}, l.a.createElement("ul", {
				className: r.a.linkColInner
			}, l.a.createElement("li", {
				className: r.a.linkItem
			}, l.a.createElement("a", {
				className: r.a.link,
				href: "https://about.reddit.com"
			}, c._("about", null, {
				hk: "3IO4c7"
			}))), l.a.createElement("li", {
				className: r.a.linkItem
			}, l.a.createElement("a", {
				className: r.a.link,
				href: "https://about.reddit.com/careers/"
			}, c._("careers", null, {
				hk: "2GATRU"
			}))), l.a.createElement("li", {
				className: r.a.linkItem
			}, l.a.createElement("a", {
				className: r.a.link,
				href: "https://about.reddit.com/press/"
			}, c._("press", null, {
				hk: "iUiGg"
			}))))), l.a.createElement("div", {
				className: r.a.linkCol
			}, l.a.createElement("ul", {
				className: r.a.linkColInner
			}, l.a.createElement("li", {
				className: r.a.linkItem
			}, l.a.createElement("a", {
				className: r.a.link,
				href: "https://www.redditinc.com/advertising"
			}, c._("advertise", null, {
				hk: "RYuIn"
			}))), l.a.createElement("li", {
				className: r.a.linkItem
			}, l.a.createElement("a", {
				className: r.a.link,
				href: "http://www.redditblog.com/"
			}, c._("blog", null, {
				hk: "4xzWuA"
			}))), l.a.createElement("li", {
				className: r.a.linkItem
			}, l.a.createElement("a", {
				className: r.a.link,
				href: "https://www.reddithelp.com"
			}, c._("help", null, {
				hk: "36XyzA"
			}))))), l.a.createElement("div", {
				className: Object(o.a)(r.a.linkCol, r.a.linkBoldCol)
			}, l.a.createElement("ul", {
				className: r.a.linkColInner
			}, l.a.createElement("li", {
				className: r.a.linkItem
			}, l.a.createElement("a", {
				className: r.a.link,
				href: "https://www.reddit.com/coins"
			}, c._("reddit coins", null, {
				hk: "3Ts6tu"
			}))), l.a.createElement("li", {
				className: r.a.linkItem
			}, l.a.createElement("a", {
				className: r.a.link,
				href: "https://www.reddit.com/premium"
			}, c._("reddit premium", null, {
				hk: "3vPbLO"
			}))), l.a.createElement("li", {
				className: r.a.linkItem
			}, l.a.createElement("a", {
				className: r.a.link,
				href: "https://redditgifts.com/"
			}, c._("reddit gifts", null, {
				hk: "3WNNEy"
			}))))), l.a.createElement("div", {
				className: Object(o.a)(r.a.linkCol, r.a.linkBoldCol)
			}, l.a.createElement("ul", {
				className: r.a.linkColInner
			}, l.a.createElement("li", {
				className: r.a.linkItem
			}, l.a.createElement("a", {
				className: r.a.link,
				href: "https://www.facebook.com/reddit/"
			}, c._("Facebook", null, {
				hk: "47DT2F"
			}))), l.a.createElement("li", {
				className: r.a.linkItem
			}, l.a.createElement("a", {
				className: r.a.link,
				href: "https://twitter.com/reddit"
			}, c._("Twitter", null, {
				hk: "3aUv7u"
			}))), l.a.createElement("li", {
				className: r.a.linkItem
			}, l.a.createElement("a", {
				className: r.a.link,
				href: "https://www.instagram.com/reddit/"
			}, c._("Instagram", null, {
				hk: "dVIRX"
			})))))), l.a.createElement("ul", {
				className: r.a.legal
			}, l.a.createElement("li", {
				className: r.a.legalItem
			}, l.a.createElement("a", {
				className: r.a.legalLink,
				href: "https://www.redditinc.com/policies/content-policy"
			}, c._("content policy", null, {
				hk: "4ptiaZ"
			}))), l.a.createElement("li", {
				className: r.a.legalItem
			}, l.a.createElement("a", {
				className: r.a.legalLink,
				href: "https://www.reddit.com/help/privacypolicy"
			}, c._("privacy policy", null, {
				hk: "1ybjnz"
			}))), l.a.createElement("li", {
				className: r.a.legalItem
			}, l.a.createElement("a", {
				className: r.a.legalLink,
				href: "https://www.redditinc.com/policies/user-agreement"
			}, c._("user agreement", null, {
				hk: "4puRxC"
			}))), l.a.createElement("li", {
				className: r.a.legalItem
			}, l.a.createElement("a", {
				className: r.a.legalLink,
				href: "https://www.reddit.com/help/healthycommunities/"
			}, c._("mod policy", null, {
				hk: "1VvAdM"
			}))), l.a.createElement("li", {
				className: r.a.legalItem
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
				return j
			})), t.d(a, "a", (function() {
				return F
			}));
			t("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = t("./src/config.ts"),
				l = t("./node_modules/react/index.js"),
				s = t.n(l),
				r = t("./node_modules/react-redux/es/index.js"),
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
				k = t("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				_ = t("./src/reddit/components/PowerupsSignUpModal/MultiSubredditForm.m.less"),
				b = t.n(_);
			const {
				fbt: f
			} = t("./node_modules/fbt/lib/FbtPublic.js"), E = e => {
				const {
					onChange: a,
					subredditIdsSelected: t,
					subredditsInfo: n,
					wasSuccessful: l,
					allEnabled: r
				} = e, c = n.filter(e => !e.hasPowerups), i = n.filter(e => e.hasPowerups), u = c.length === t.length;
				return s.a.createElement("div", {
					className: b.a.container
				}, s.a.createElement("div", {
					className: b.a.checkboxList
				}, i.map(({
					id: e,
					displayText: a
				}) => s.a.createElement(k.a, {
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
					const r = t.includes(e);
					return s.a.createElement(k.a, {
						className: Object(o.a)(b.a.checkbox, {
							[b.a.disabled]: l
						}),
						key: e,
						isSelected: r,
						onClick: () => ((e, n) => {
							const l = n ? [...t, e] : t.filter(a => a !== e);
							a(l)
						})(e, !r),
						text: n,
						disabled: l
					})
				})), !l && !r && s.a.createElement(m.t, {
					className: b.a.selectAllButton,
					onClick: () => {
						a(u ? [] : c.map(({
							id: e
						}) => e))
					},
					priority: m.c.Secondary,
					isFullWidth: !0
				}, u ? f._("Deselect all", null, {
					hk: "46i6br"
				}) : f._("Select all", null, {
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
				wasError: l
			}) => {
				const r = l ? S._("Try again", null, {
					hk: "1cKOSe"
				}) : S._("Turn on Powerups", null, {
					hk: "AuDZE"
				});
				return s.a.createElement(m.k, {
					className: Object(o.a)(e, y.a.button, {
						[y.a.loading]: n
					}),
					disabled: a || n,
					onClick: t,
					priority: m.c.Primary,
					isFullWidth: !0
				}, n ? s.a.createElement(N.a, {
					sizePx: 12,
					center: !0
				}) : r)
			};
			var x = t("./src/reddit/components/PowerupsSignUpModal/index.m.less"),
				O = t.n(x);
			const {
				fbt: C
			} = t("./node_modules/fbt/lib/FbtPublic.js"), j = Object(c.a)(({
				closeModal: e
			}) => {
				var a;
				const t = Object(d.a)(),
					o = Object(p.a)(),
					c = Object(r.e)(w.a),
					k = null !== (a = 1 === (null == c ? void 0 : c.length)) && void 0 !== a && a,
					_ = null == c ? void 0 : c.every(({
						hasPowerups: e
					}) => e),
					[b, f] = Object(l.useState)(c && k ? [c[0].id] : []),
					[N, v] = Object(l.useState)(!1),
					[y, S] = Object(l.useState)(!1),
					[x, j] = Object(l.useState)(!1);
				if (!(null == c ? void 0 : c.length)) return e(), null;
				const I = async e => {
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
				}, M = y || _ ? C._("{=[r/community]}{=has Powerups}", [C._param("=[r/community]", s.a.createElement("div", null, C._("{r/community}", [C._param("r/community", c[0].displayText)], {
					hk: "1TzAG8"
				}))), C._param("=has Powerups", s.a.createElement("div", null, C._("has Powerups", null, {
					hk: "2zYYns"
				})))], {
					hk: "2bu88V"
				}) : C._("{=Power up}{=[r/community]}", [C._param("=Power up", s.a.createElement("div", null, C._("Power up", null, {
					hk: "3qh4XT"
				}))), C._param("=[r/community]", s.a.createElement("div", null, C._("{r/community}", [C._param("r/community", c[0].displayText)], {
					hk: "2Pz0Sn"
				})))], {
					hk: "p9zKt"
				}), q = y || _ ? C._("{=Your communities}{=have Powerups}", [C._param("=Your communities", s.a.createElement("div", null, C._("Your communities", null, {
					hk: "3ySkxw"
				}))), C._param("=have Powerups", s.a.createElement("div", null, C._("have Powerups", null, {
					hk: "4rHX2f"
				})))], {
					hk: "E4Lct"
				}) : C._("{=Power up}{=your communities}", [C._param("=Power up", s.a.createElement("div", null, C._("Power up", null, {
					hk: "Jrn2T"
				}))), C._param("=your communities", s.a.createElement("div", null, C._("your communities", null, {
					hk: "4EPQY"
				})))], {
					hk: "1K9FOM"
				}), H = k ? M : q, A = N || y || x ? C._("{=Hold tight! It can take up to 5 minutes for}{=Powerups to appear in yourcommunity.}", [C._param("=Hold tight! It can take up to 5 minutes for", s.a.createElement("div", null, C._("Hold tight! It can take up to 5 minutes for", null, {
					hk: "1cFoaI"
				}))), C._param("=Powerups to appear in yourcommunity.", s.a.createElement("div", null, C._({
					"*": "Powerups to appear in your communities.",
					_1: "Powerups to appear in your community."
				}, [C._plural(c.length)], {
					hk: "1ky0qH"
				})))], {
					hk: "4tvqU7"
				}) : C._("{=Harness the power of yourcommunity to}{=unlock special perks and advanced features.}", [C._param("=Harness the power of yourcommunity to", s.a.createElement("div", null, C._({
					"*": "Harness the power of your communities to",
					_1: "Harness the power of your community to"
				}, [C._plural(c.length)], {
					hk: "2rOtDZ"
				}))), C._param("=unlock special perks and advanced features.", s.a.createElement("div", null, C._("unlock special perks and advanced features.", null, {
					hk: "2Xj3Tx"
				})))], {
					hk: "2cx1IK"
				});
				return s.a.createElement("div", {
					className: O.a.container,
					"data-testid": "powerups-signup-modal"
				}, s.a.createElement(F, null, s.a.createElement("div", {
					className: O.a.headerImageContainer
				}, s.a.createElement("img", {
					className: O.a.headerImage,
					alt: "Powerup heroes",
					src: `${n.a.assetPath}/img/powerups/powerups-rangers-static.png`
				}))), s.a.createElement("button", {
					className: O.a.closeButton,
					onClick: e
				}, s.a.createElement(h.a, {
					className: O.a.closeIcon
				})), s.a.createElement("div", {
					className: O.a.body
				}, s.a.createElement("div", {
					className: O.a.titleContainer
				}, s.a.createElement("h1", {
					className: O.a.titleText
				}, H), s.a.createElement("h2", {
					className: O.a.subtitleText
				}, A)), !k && s.a.createElement(E, {
					onChange: f,
					subredditIdsSelected: b,
					subredditsInfo: c,
					wasSuccessful: y,
					allEnabled: _
				}), x && s.a.createElement("div", {
					className: O.a.errorContainer
				}, s.a.createElement(g.a, {
					className: O.a.errorIcon
				}), s.a.createElement("span", {
					className: O.a.errorText
				}, C._("Something went wrong.", null, {
					hk: "N6RFp"
				}))), !y && !_ && s.a.createElement(P, {
					disabled: 0 === b.length,
					onClick: async () => {
						o(Object(u.c)(b)), v(!0);
						const e = (await Promise.all(b.map(I))).every(({
							success: e
						}) => e);
						S(e), j(!e), v(!1)
					},
					isLoading: N,
					wasError: x
				}), (y || _) && k && s.a.createElement(s.a.Fragment, null, s.a.createElement("p", {
					className: O.a.successText
				}, C._("Let your community know about Powerups with a pinned post", null, {
					hk: "3bII20"
				})), s.a.createElement(m.t, {
					className: O.a.successButton,
					to: `/${c[0].displayText}/submit`,
					kind: m.b.InternalLink,
					priority: m.c.Primary,
					isFullWidth: !0
				}, C._("Spread the word", null, {
					hk: "1f68Nj"
				}))), s.a.createElement("footer", {
					className: O.a.footer
				}, C._("Heads up—once you turn on Powerups you can’t turn it off.", null, {
					hk: "3YQxrF"
				}))))
			}), F = ({
				children: e,
				accentDiagonalCustomStyles: a
			}) => s.a.createElement("div", {
				className: O.a.background
			}, s.a.createElement("div", {
				className: O.a.diagonalLayoutSecondary,
				style: a
			}), s.a.createElement("div", {
				className: O.a.diagonalLayoutPrimary
			}), s.a.createElement("div", {
				className: Object(o.a)(O.a.circle, O.a.lineCircle),
				style: {
					backgroundImage: `url(${n.a.assetPath}/img/powerups/linecircle-blue.png)`
				}
			}), s.a.createElement("div", {
				className: Object(o.a)(O.a.circle, O.a.circleOrangeHollow)
			}), s.a.createElement("div", {
				className: Object(o.a)(O.a.circle, O.a.dotCircle1),
				style: {
					backgroundImage: `url(${n.a.assetPath}/img/powerups/dotcircle.png)`
				}
			}), s.a.createElement("div", {
				className: Object(o.a)(O.a.circle, O.a.circleGreenFilled)
			}), s.a.createElement("div", {
				className: Object(o.a)(O.a.circle, O.a.circleGreenHollow)
			}), s.a.createElement("div", {
				className: Object(o.a)(O.a.circle, O.a.circleYellowHollow)
			}), s.a.createElement("div", {
				className: Object(o.a)(O.a.circle, O.a.dotCircle2),
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
				l = t.n(n),
				s = t("./src/lib/classNames/index.ts"),
				r = t("./src/reddit/controls/LoadingIcon/index.m.less"),
				o = t.n(r);
			a.a = ({
				center: e,
				className: a,
				sizePx: t = 10
			}) => l.a.createElement("div", {
				className: Object(s.a)(o.a.loadingIcon, a, {
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
				return l
			})), t.d(a, "b", (function() {
				return s
			})), t.d(a, "c", (function() {
				return r
			})), t.d(a, "a", (function() {
				return o
			}));
			var n = t("./src/reddit/selectors/telemetry.ts");
			const l = () => e => ({
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
				r = e => a => ({
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
				return l
			}));
			var n = t("./node_modules/react/index.js");

			function l() {
				const [e, a] = Object(n.useState)(!1);
				return Object(n.useEffect)(() => {
					setTimeout(a, 1, !0)
				}, []), e
			}
		},
		"./src/reddit/hooks/useThunkDispatch.ts": function(e, a, t) {
			"use strict";
			t.d(a, "a", (function() {
				return l
			}));
			var n = t("./node_modules/react-redux/es/index.js");

			function l() {
				return Object(n.d)()
			}
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
				l = t("./node_modules/react/index.js"),
				s = t.n(l),
				r = t("./node_modules/react-redux/es/index.js"),
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
				modSubredditsInfo: a
			}) => s.a.createElement("div", {
				className: d.a.faqSection
			}, s.a.createElement("div", {
				className: Object(o.a)(d.a.faqSectionContent, d.a.contentWrapper)
			}, s.a.createElement(w, null), s.a.createElement(k, null), s.a.createElement(_, null), s.a.createElement("h2", {
				className: d.a.faqHeading
			}, p._("Questions about Powerups", null, {
				hk: "nzxYw"
			})), s.a.createElement("div", {
				className: d.a.faqs
			}, h.map(({
				prompt: e,
				answer: a
			}, t) => s.a.createElement(c.a, {
				defaultClosed: !0,
				question: e(),
				key: t
			}, a()))), s.a.createElement("h3", {
				className: d.a.faqMoreQuestionsHeading
			}, p._("Have more questions? We've got answers.", null, {
				hk: "3Entyj"
			})), s.a.createElement(i.t, {
				className: d.a.fullFaqsButton,
				priority: i.c.Secondary,
				href: "https://mods.reddithelp.com/hc/en-us/articles/4403699823629",
				kind: i.b.ExternalLink,
				target: "_blank"
			}, p._("View Full FAQs", null, {
				hk: "1eOLlL"
			})), s.a.createElement("h2", {
				className: d.a.faqTryOutHeading
			}, p._("Try out Powerups today", null, {
				hk: "17RjMt"
			})), s.a.createElement("h3", {
				className: d.a.faqTryOutSubheading
			}, p._("Ok, you've made it to the bottom of the page. What do you think? Are Powerups for your community?", null, {
				hk: "3062Vv"
			})), s.a.createElement(i.k, {
				onClick: e,
				disabled: !(null == a ? void 0 : a.length),
				priority: i.c.Primary,
				className: d.a.ctaLetsDoThisButton
			}, p._("Let's Do This!", null, {
				hk: "6CnFH"
			})), s.a.createElement(f, null))), w = ({
				hideBolt: e
			}) => s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
				className: Object(o.a)(d.a.faqQuestionMark, d.a.faqQuestionMarkWithBolt)
			}), s.a.createElement("div", {
				className: d.a.circleFaqYellowWithBolt
			}, !e && s.a.createElement("img", {
				alt: "Powerup bolt",
				className: d.a.boltInCircleFaqYellow,
				src: `${n.a.assetPath}/img/powerups/bolt.png`
			}))), k = () => s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
				className: d.a.circleFaqCyanSmall
			}), s.a.createElement("div", {
				className: d.a.circleFaqDotted,
				style: {
					backgroundImage: `url(${n.a.assetPath}/img/powerups/dotcircle.png)`
				}
			}), s.a.createElement("div", {
				className: d.a.circleFaqYellowSmall
			}), s.a.createElement("div", {
				className: d.a.circleFaqCyanBig
			}), s.a.createElement("div", {
				className: d.a.circleFaqOrange
			}), s.a.createElement("div", {
				className: d.a.circleFaqYellowHollow
			})), _ = () => s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
				className: Object(o.a)(d.a.faqQuestionMark, d.a.faqQuestionMarkTopLeft)
			}), s.a.createElement("div", {
				className: Object(o.a)(d.a.faqQuestionMark, d.a.faqQuestionMarkTopRight)
			}), s.a.createElement("div", {
				className: Object(o.a)(d.a.faqQuestionMark, d.a.faqQuestionMarkLeft)
			}), s.a.createElement("div", {
				className: Object(o.a)(d.a.faqQuestionMark, d.a.faqQuestionMarkBottomRight)
			})), b = ({
				hideBolt: e
			}) => s.a.createElement(s.a.Fragment, null, s.a.createElement(w, {
				hideBolt: e
			}), s.a.createElement(k, null), s.a.createElement(_, null)), f = () => {
				const e = Object(r.e)(m.X);
				return s.a.createElement("div", {
					className: d.a.ctaButtonCirclesAndBolt
				}, s.a.createElement("div", {
					className: d.a.circleFaqCtaStriped,
					style: {
						backgroundImage: e ? `url(${n.a.assetPath}/img/powerups/linecircle-orange.png)` : `url(${n.a.assetPath}/img/powerups/linecircle-blue.png)`
					}
				}), s.a.createElement("div", {
					className: d.a.circleFaqCtaYellowBig
				}, s.a.createElement("img", {
					alt: "Powerup bolt",
					className: d.a.boltInCircleFaqCtaYellow,
					src: `${n.a.assetPath}/img/powerups/bolt.png`
				})), s.a.createElement("div", {
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
		"./src/reddit/pages/Powerups/index.tsx": function(e, a, t) {
			"use strict";
			t.r(a), t.d(a, "BannerCircles", (function() {
				return T
			}));
			var n = t("./src/config.ts"),
				l = t("./node_modules/react/index.js"),
				s = t.n(l),
				r = t("./node_modules/react-redux/es/index.js"),
				o = t("./src/lib/classNames/index.ts"),
				c = t("./src/reddit/components/MarketingPageFooter/index.tsx"),
				i = t("./src/reddit/components/PowerupsSignUpModal/index.tsx"),
				m = t("./src/reddit/controls/Button/index.tsx"),
				u = t("./src/reddit/helpers/trackers/powerupsSignup.ts"),
				d = t("./src/reddit/hooks/useTracking.ts"),
				p = t("./src/reddit/icons/fonts/index.tsx");
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
				g = t("./src/reddit/selectors/gold/powerups/modSignup.ts"),
				w = t("./src/reddit/selectors/user.ts"),
				k = t("./node_modules/lodash/sampleSize.js"),
				_ = t.n(k),
				b = t("./node_modules/react-router-dom/esm/react-router-dom.js"),
				f = t("./src/lib/opener/index.ts"),
				E = t("./src/reddit/hooks/useIsClient.ts"),
				N = t("./src/reddit/pages/Powerups/Communities.m.less"),
				v = t.n(N);
			const y = _()(["wallstreetbets", "pennystocks", "tiktokcringe", "lgbt", "python", "unexpected", "chloe", "pewdiepiesubmissions", "roastme", "jacksepticeye", "thebachelor", "taylorswift", "bigbrother", "belowdeck", "blackpink"], 3),
				S = () => {
					const e = Object(d.a)(),
						a = Object(r.e)(w.X),
						t = Object(E.a)(),
						l = () => {
							e(Object(u.a)())
						};
					return t ? s.a.createElement("section", {
						className: Object(o.a)(v.a.communitiesContainer, {
							[v.a.isNightMode]: a
						})
					}, s.a.createElement("div", {
						className: v.a.communitiesContent
					}, y.map(e => s.a.createElement(b.a, {
						className: v.a.community,
						key: e,
						to: `r/${e}`,
						target: f.d.BLANK,
						rel: f.c,
						onClick: l
					}, s.a.createElement("div", {
						className: v.a.communityIcon,
						style: {
							backgroundImage: `url(${n.a.assetPath}/img/powerups/communities-placeholder.png)`
						}
					}), s.a.createElement("div", {
						className: v.a.communityName
					}, "r/", e))))) : null
				};
			var P = t("./src/reddit/pages/Powerups/FaqSection.tsx"),
				x = t("./node_modules/fbt/lib/FbtPublic.js"),
				O = t("./src/reddit/pages/Powerups/PerksSection.m.less"),
				C = t.n(O);
			const j = [{
					title: x.fbt._("Achievements", null, {
						hk: "2sAFRa"
					}),
					description: x.fbt._("Recognize members' contributions and skills.", null, {
						hk: "2ueVeZ"
					}),
					imageName: "ACHIEVEMENT_FLAIRS_v3",
					imageAlt: x.fbt._("Powerups perk Achievements", null, {
						hk: "OT6Cc"
					}).toString()
				}, {
					title: x.fbt._("Gifs in Comments", null, {
						hk: "2FHbsG"
					}),
					description: x.fbt._("When simple words won't do, let members use GIFs too.", null, {
						hk: "3o4Qbq"
					}),
					imageName: "COMMENTS_WITH_GIFS_v3",
					imageAlt: x.fbt._("Powerups perk Gifs in Comments", null, {
						hk: "1060Ho"
					}).toString()
				}, {
					title: x.fbt._("Custom Emojis", null, {
						hk: "3bRZHS"
					}),
					description: x.fbt._("Create and use emojis exclusive to your community.", null, {
						hk: "4wDc2h"
					}),
					imageName: "CUSTOM_EMOJIS_v3",
					imageAlt: x.fbt._("Powerups perk Custom Emojis", null, {
						hk: "SdKcQ"
					}).toString()
				}, {
					title: x.fbt._("HD Video", null, {
						hk: "20Gh7k"
					}),
					description: x.fbt._("Upload and watch in greater resolution.", null, {
						hk: "SewZA"
					}),
					imageName: "HD_VIDEO_v3",
					imageAlt: x.fbt._("Powerups perk HD Video", null, {
						hk: "4uRAxP"
					}).toString()
				}, {
					title: x.fbt._("Hero Status", null, {
						hk: "3raGK1"
					}),
					description: x.fbt._("Reward members who give back to the community with hero badges and instant access to perks.", null, {
						hk: "43EB2T"
					}),
					imageName: "HERO_STATUS_v3",
					imageAlt: x.fbt._("Powerups perk Hero Status", null, {
						hk: "11Egfw"
					}).toString()
				}],
				F = x.fbt._("Powerups Bolt", null, {
					hk: "4wk1W"
				}).toString(),
				I = ({
					title: e,
					description: a,
					imageName: t,
					imageAlt: l
				}) => s.a.createElement("div", {
					className: C.a.perkCell
				}, s.a.createElement("div", {
					className: C.a.perkImageBackgroundCircle
				}, s.a.createElement("img", {
					alt: l,
					className: C.a.perkImage,
					src: `${n.a.assetPath}/img/powerups/${t}.png`
				})), s.a.createElement("h3", {
					className: C.a.perkTitle
				}, e), s.a.createElement("h4", {
					className: C.a.perkDescription
				}, a)),
				M = () => {
					const e = Object(r.e)(w.X);
					return s.a.createElement("div", {
						className: Object(o.a)(C.a.perksSection, {
							[C.a.isNightmodeOn]: e
						})
					}, s.a.createElement("img", {
						alt: F,
						className: C.a.perksSectionBoltImage,
						src: `${n.a.assetPath}/img/powerups/bolt.png`
					}), s.a.createElement("h2", {
						className: C.a.perksSectionTitle
					}, x.fbt._("Let's check out those perks!", null, {
						hk: "jugDp"
					})), s.a.createElement("div", {
						className: Object(o.a)(C.a.perksSectionGrid, C.a.contentWrapper)
					}, j.map(({
						title: e,
						description: a,
						imageName: t,
						imageAlt: n
					}) => s.a.createElement(I, {
						key: e,
						title: e,
						description: a,
						imageName: t,
						imageAlt: n
					}))))
				};
			var q = t("./src/reddit/pages/Powerups/index.m.less"),
				H = t.n(q);
			const {
				fbt: A
			} = t("./node_modules/fbt/lib/FbtPublic.js");
			a.default = () => {
				const e = Object(d.a)(),
					a = Object(r.e)(g.a),
					t = Object(r.e)(w.X),
					[k, _] = Object(l.useState)(!1);
				Object(l.useEffect)(() => {
					e(Object(u.d)())
				}, [e]);
				const b = () => {
						e(Object(u.b)()), _(!0)
					},
					f = () => _(!1);
				return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
					className: H.a.headingSection
				}, s.a.createElement(T, {
					isNightmodeOn: t
				}), s.a.createElement("div", {
					className: Object(o.a)(H.a.contentWrapper, H.a.headingContent)
				}, s.a.createElement("div", {
					className: H.a.headingText
				}, s.a.createElement("h1", {
					className: Object(o.a)(H.a.heading, {
						[H.a.isNightmodeOn]: t
					})
				}, s.a.createElement(h, {
					className: H.a.powerupsLogo
				})), s.a.createElement("h2", {
					className: H.a.subheading
				}, A._("Come together to level up the whole community", null, {
					hk: "3C0qLA"
				})), s.a.createElement("p", {
					className: Object(o.a)(H.a.description, H.a.bodyText)
				}, A._("Harness the power of your community to unlock special perks and advanced features.", null, {
					hk: "1NgNS2"
				})), s.a.createElement("div", {
					className: Object(o.a)(H.a.modWarning, H.a.bodyText)
				}, s.a.createElement("div", {
					className: H.a.modWarningTop
				}, s.a.createElement(p.a, {
					name: "mod",
					className: H.a.modWarningIcon
				})), A._("{=Only moderators with theManage Settings permission can turn on Powerups.}{=Heads up—Only Safe for Work (SFW) communities with 1,000 members or more can enable Powerups.}", [A._param("=Only moderators with theManage Settings permission can turn on Powerups.", s.a.createElement("div", null, A._("Only moderators with the {=Manage Settings} permission can turn on Powerups.", [A._param("=Manage Settings", s.a.createElement("span", {
					className: H.a.modWarningItalic
				}, A._("Manage Settings", null, {
					hk: "4AauR"
				})))], {
					hk: "1sKKo7"
				}))), A._param("=Heads up—Only Safe for Work (SFW) communities with 1,000 members or more can enable Powerups.", s.a.createElement("div", {
					className: H.a.modWarningFooter
				}, A._("Heads up—Only Safe for Work (SFW) communities with 1,000 members or more can enable Powerups.", null, {
					hk: "2euXqd"
				})))], {
					hk: "2FL5at"
				})), s.a.createElement(m.k, {
					onClick: b,
					disabled: !(null == a ? void 0 : a.length),
					priority: m.c.Primary,
					className: H.a.ctaButton
				}, A._("Turn on Powerups", null, {
					hk: "4E97KH"
				}))), s.a.createElement("div", {
					className: H.a.headingArt
				}, s.a.createElement("div", {
					className: H.a.powerupsMarketingImageContainer
				}, s.a.createElement("picture", {
					className: H.a.powerupsMarketingImage
				}, s.a.createElement("source", {
					srcSet: `${n.a.assetPath}/img/powerups/powerups-rangers.webp`,
					type: "image/webp"
				}), s.a.createElement("source", {
					srcSet: `${n.a.assetPath}/img/powerups/powerups-rangers-static.png`,
					type: "image/png"
				}), s.a.createElement("img", {
					alt: "Powerup heroes",
					className: H.a.fallbackStaticImage,
					src: `${n.a.assetPath}/img/powerups/powerups-rangers-static.png`
				})))))), s.a.createElement(S, null), s.a.createElement("div", {
					className: H.a.pioneerSection
				}, s.a.createElement("div", {
					className: Object(o.a)(H.a.contentWrapper, H.a.powerupsPioneerContent)
				}, s.a.createElement("div", {
					className: Object(o.a)(H.a.circle, H.a.circlePioneersCyanHollow)
				}), s.a.createElement("h2", {
					className: H.a.pioneerHeading
				}, A._("Be a Powerups pioneer", null, {
					hk: "2P7QON"
				})), s.a.createElement("h3", {
					className: H.a.pioneerSubheading
				}, A._("Be one of the first communities to turn on Powerups and have an influence on what perks and advanced features we create next.", null, {
					hk: "2wFnM6"
				})))), s.a.createElement("div", {
					className: H.a.powerupStepsSection
				}, s.a.createElement("div", {
					className: Object(o.a)(H.a.powerupStepsSectionContent, H.a.contentWrapper)
				}, s.a.createElement("div", {
					className: Object(o.a)(H.a.circle, H.a.circleStepsYellowFull)
				}), s.a.createElement("div", {
					className: Object(o.a)(H.a.circle, H.a.circleStepsStriped),
					style: {
						backgroundImage: t ? `url(${n.a.assetPath}/img/powerups/linecircle-orange.png)` : `url(${n.a.assetPath}/img/powerups/linecircle-blue.png)`
					}
				}), s.a.createElement("div", {
					className: H.a.powerupStep
				}, s.a.createElement("div", {
					className: H.a.powerupStepCounter
				}, "1"), s.a.createElement("div", {
					className: H.a.powerupStepName
				}, A._("Turn on powerups", null, {
					hk: "q0dHV"
				})), s.a.createElement("div", {
					className: H.a.powerupStepDescription
				}, A._("Just tap that big Turn on Powerups button and add Powerups to your community.", null, {
					hk: "oZMHo"
				}))), s.a.createElement("div", {
					className: H.a.powerupStep
				}, s.a.createElement("div", {
					className: H.a.powerupStepCounter
				}, "2"), s.a.createElement("div", {
					className: H.a.powerupStepName
				}, A._("Rally the community", null, {
					hk: "4m8BDG"
				})), s.a.createElement("div", {
					className: H.a.powerupStepDescription
				}, A._("Spread the word! You only need 25 powerups to give perks to the whole community.", null, {
					hk: "4eSNsf"
				}))), s.a.createElement("div", {
					className: H.a.powerupStep
				}, s.a.createElement("div", {
					className: H.a.powerupStepCounter
				}, "3"), s.a.createElement("div", {
					className: H.a.powerupStepName
				}, A._("Unlock perks", null, {
					hk: "20u0vD"
				})), s.a.createElement("div", {
					className: H.a.powerupStepDescription
				}, A._("Once your community is powered up, the perks are unlocked for everyone to use.", null, {
					hk: "3Fs5Gm"
				}))))), s.a.createElement(M, null), s.a.createElement(P.b, {
					openModal: b,
					modSubredditsInfo: a
				}), s.a.createElement(c.a, {
					className: H.a.footer
				}), k && s.a.createElement(i.b, {
					withOverlay: !0,
					closeModal: f,
					onOverlayClick: f,
					className: H.a.modalBody,
					overlayClassName: H.a.modalOverlay
				}))
			};
			const T = ({
				isNightmodeOn: e,
				accentDiagonalCustomStyles: a
			}) => s.a.createElement("div", {
				className: Object(o.a)(H.a.background, H.a.contentWrapper)
			}, s.a.createElement("div", {
				className: H.a.diagonalLayoutSecondary,
				style: a
			}), s.a.createElement("div", {
				className: H.a.diagonalLayoutPrimary
			}), s.a.createElement("div", {
				className: Object(o.a)(H.a.circle, H.a.circleDotted),
				style: {
					backgroundImage: `url(${n.a.assetPath}/img/powerups/dotcircle.png)`
				}
			}), s.a.createElement("div", {
				className: Object(o.a)(H.a.circle, H.a.animatedCircle, H.a.circleStriped),
				style: {
					backgroundImage: e ? `url(${n.a.assetPath}/img/powerups/linecircle-orange.png)` : `url(${n.a.assetPath}/img/powerups/linecircle-blue.png)`
				}
			}), s.a.createElement("div", {
				className: Object(o.a)(H.a.circle, H.a.circleOrangeFull, H.a.animatedCircle)
			}), s.a.createElement("div", {
				className: Object(o.a)(H.a.circle, H.a.circleYellowSmall, H.a.top, H.a.animatedCircle)
			}), s.a.createElement("div", {
				className: Object(o.a)(H.a.circle, H.a.circleYellowBig, H.a.animatedCircle)
			}), s.a.createElement("div", {
				className: Object(o.a)(H.a.circle, H.a.circleYellowHollow, H.a.animatedCircle)
			}), s.a.createElement("div", {
				className: Object(o.a)(H.a.circle, H.a.circleYellowSmall, H.a.bottom, H.a.animatedCircle)
			}), s.a.createElement("div", {
				className: Object(o.a)(H.a.circle, H.a.circleOrangeHollow, H.a.animatedCircle)
			}))
		},
		"./src/reddit/selectors/gold/powerups/modSignup.ts": function(e, a, t) {
			"use strict";
			t.d(a, "a", (function() {
				return o
			}));
			var n = t("./src/reddit/featureFlags/subredditPoints.ts"),
				l = t("./src/reddit/selectors/moderatorPermissions.ts"),
				s = t("./src/reddit/selectors/user.ts"),
				r = t("./src/reddit/selectors/gold/powerups/index.ts");
			const o = e => {
				const a = Object(l.a)(e);
				if (!a) return null;
				const t = Object(s.H)(e),
					o = [];
				for (const l of a) {
					const a = e.subreddits.models[l];
					if (!a) return null;
					const s = Object(r.h)(e, {
						subredditId: l
					});
					n.b.has(a.name) || a.isNSFW || a.subscribers < 1e3 && !t || o.push({
						id: l,
						displayText: a.displayText,
						hasPowerups: s
					})
				}
				return o
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Powerups.d077871d75c3c448c25b.js.map