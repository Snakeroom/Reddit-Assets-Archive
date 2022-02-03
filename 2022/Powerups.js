// https://www.redditstatic.com/desktop2x/Powerups.d3f14ed554b86867c8b8.js
// Retrieved at 2/3/2022, 4:30:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Powerups"], {
		"./node_modules/lodash/_arraySampleSize.js": function(e, t, a) {
			var n = a("./node_modules/lodash/_baseClamp.js"),
				s = a("./node_modules/lodash/_copyArray.js"),
				r = a("./node_modules/lodash/_shuffleSelf.js");
			e.exports = function(e, t) {
				return r(s(e), n(t, 0, e.length))
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
				s = a("./node_modules/lodash/_shuffleSelf.js"),
				r = a("./node_modules/lodash/values.js");
			e.exports = function(e, t) {
				var a = r(e);
				return s(a, n(t, 0, a.length))
			}
		},
		"./node_modules/lodash/_shuffleSelf.js": function(e, t, a) {
			var n = a("./node_modules/lodash/_baseRandom.js");
			e.exports = function(e, t) {
				var a = -1,
					s = e.length,
					r = s - 1;
				for (t = void 0 === t ? s : t; ++a < t;) {
					var o = n(a, r),
						l = e[o];
					e[o] = e[a], e[a] = l
				}
				return e.length = t, e
			}
		},
		"./node_modules/lodash/sampleSize.js": function(e, t, a) {
			var n = a("./node_modules/lodash/_arraySampleSize.js"),
				s = a("./node_modules/lodash/_baseSampleSize.js"),
				r = a("./node_modules/lodash/isArray.js"),
				o = a("./node_modules/lodash/_isIterateeCall.js"),
				l = a("./node_modules/lodash/toInteger.js");
			e.exports = function(e, t, a) {
				return t = (a ? o(e, t, a) : void 0 === t) ? 1 : l(t), (r(e) ? n : s)(e, t)
			}
		},
		"./src/lib/intlList/index.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return o
			})), a.d(t, "b", (function() {
				return l
			}));
			a("./node_modules/react/index.js");
			var n = a("./node_modules/fbt/lib/FbtPublic.js");
			const s = function(e) {
				if (void 0 === e) throw new Error("invariant(...): Second argument must be a string.")
			};

			function r(e, t, ...a) {
				if (s(t), !e) {
					let e;
					if (void 0 === t) e = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
					else {
						let n = 0;
						(e = new Error(t.replace(/%s/g, () => String(a[n++])))).name = "Invariant Violation"
					}
					throw e.framesToPop = 1, e
				}
			}
			const o = {
					AND: "AND",
					NONE: "NONE",
					OR: "OR"
				},
				l = {
					COMMA: "COMMA",
					SEMICOLON: "SEMICOLON"
				};
			t.c = function(e, t, a) {
				const s = e.length;
				if (0 === s) return "";
				if (1 === s) return e[0];
				const i = e[s - 1];
				let c = e[0];
				for (let r = 1; r < s - 1; ++r) switch (a) {
					case l.SEMICOLON:
						c = n.fbt._("{previous items}; {following items}", [n.fbt._param("previous items", c), n.fbt._param("following items", e[r])], {
							hk: "4hs4xq"
						});
						break;
					default:
						c = n.fbt._("{previous items}, {following items}", [n.fbt._param("previous items", c), n.fbt._param("following items", e[r])], {
							hk: "2z8RMb"
						})
				}
				return function(e, t, a, s) {
					switch (a) {
						case o.AND:
							return n.fbt._("{list of items} and {last item }", [n.fbt._param("list of items", e), n.fbt._param("last item ", t)], {
								hk: "1ylan1"
							});
						case o.OR:
							return n.fbt._("{list of items} or {last item}", [n.fbt._param("list of items", e), n.fbt._param("last item", t)], {
								hk: "3q8AmB"
							});
						case o.NONE:
							switch (s) {
								case l.SEMICOLON:
									return n.fbt._("{previous item}; {last item}", [n.fbt._param("previous item", e), n.fbt._param("last item", t)], {
										hk: "1h77rJ"
									});
								default:
									return n.fbt._("{list of items}, {last item}", [n.fbt._param("list of items", e), n.fbt._param("last item", t)], {
										hk: "3Q0iaX"
									})
							}
							default:
								r(!1, "Invalid conjunction %s provided to intlList", a)
					}
				}(c, i, t || o.AND, a || l.COMMA)
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
				s = a.n(n),
				r = a("./src/reddit/components/CollapsibleFAQ/index.m.less"),
				o = a.n(r),
				l = a("./src/lib/classNames/index.ts"),
				i = a("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				c = a("./src/reddit/icons/svgs/ChevronUp/index.tsx");
			class d extends s.a.Component {
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
					} = this.state, r = n ? o.a.isOpen : "";
					return s.a.createElement("div", {
						className: Object(l.a)(e, o.a.collapsibleFAQ)
					}, s.a.createElement("button", {
						className: o.a.questionButton,
						type: "button",
						onClick: this.toggleOpen
					}, s.a.createElement("span", {
						className: o.a.buttonContent,
						tabIndex: -1
					}, t, n ? s.a.createElement(c.a, {
						className: o.a.collapseIcon
					}) : s.a.createElement(i.a, {
						className: o.a.collapseIcon
					}))), s.a.createElement("div", {
						className: Object(l.a)(o.a.collapsibleAnswer, r)
					}, a))
				}
			}
			t.a = d
		},
		"./src/reddit/components/Econ/Common/ModalCloseButton/index.m.less": function(e, t, a) {
			e.exports = {
				closeButton: "zV6beQLWIuWX5Q9SvWfDR",
				highContrast: "_19iGSTvU7FOqhpDpMWKtDr",
				closeIcon: "_17EZNlAorafFssuT6Gw_Zg"
			}
		},
		"./src/reddit/components/Econ/Common/ModalCloseButton/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return d
			}));
			var n = a("./src/lib/classNames/index.ts"),
				s = a("./node_modules/react/index.js"),
				r = a.n(s),
				o = a("./src/reddit/components/ModalStyledComponents/index.tsx"),
				l = a("./src/reddit/components/Econ/Common/ModalCloseButton/index.m.less"),
				i = a.n(l);
			const {
				fbt: c
			} = a("./node_modules/fbt/lib/FbtPublic.js"), d = ({
				className: e,
				highContrast: t,
				onClick: a
			}) => r.a.createElement("button", {
				onClick: a,
				className: Object(n.a)(i.a.closeButton, {
					[i.a.highContrast]: t
				}, e),
				"aria-label": c._("Close", null, {
					hk: "3Qarlp"
				})
			}, r.a.createElement(o.b, {
				className: i.a.closeIcon
			}))
		},
		"./src/reddit/components/Econ/PowerupsMarketingModal/async.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return c
			}));
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				r = a("./src/higherOrderComponents/makeAsync.tsx"),
				o = a("./src/lib/loadWithRetries/index.ts"),
				l = a("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = a("./src/reddit/constants/modals.ts");
			const c = () => a.e("EconPowerupsMarketingModal").then(a.bind(null, "./src/reddit/components/Econ/PowerupsMarketingModal/index.tsx")),
				d = Object(r.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => Object(o.a)(c).then(e => e.default)
				});
			Object(l.b)(i.a.ECON_POWERUPS_MARKETING, e => s.a.createElement(d, {
				onOverlayClick: e,
				withOverlay: !0
			}))
		},
		"./src/reddit/components/GlobalModalContainer/registry.ts": function(e, t, a) {
			"use strict";
			a.d(t, "b", (function() {
				return r
			})), a.d(t, "a", (function() {
				return o
			}));
			const n = {},
				s = () => null;

			function r(e, t) {
				if (e in n) throw new Error(`Modal with id ${e} already registered!`);
				n[e] = t
			}

			function o(e) {
				return e && e in n ? n[e] : s
			}
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
				s = a.n(n),
				r = a("./src/reddit/components/MarketingPageFooter/index.m.less"),
				o = a.n(r),
				l = a("./src/lib/classNames/index.ts");
			const {
				fbt: i
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => s.a.createElement("div", {
				className: Object(l.a)(e.className, o.a.marketingPageFooter)
			}, s.a.createElement("div", {
				className: Object(l.a)(e.className, o.a.marketingPageFooterInner)
			}, s.a.createElement("div", {
				className: o.a.linkContainer
			}, s.a.createElement("div", {
				className: o.a.linkCol
			}, s.a.createElement("ul", {
				className: o.a.linkColInner
			}, s.a.createElement("li", {
				className: o.a.linkItem
			}, s.a.createElement("a", {
				className: o.a.link,
				href: "https://about.reddit.com"
			}, i._("about", null, {
				hk: "3IO4c7"
			}))), s.a.createElement("li", {
				className: o.a.linkItem
			}, s.a.createElement("a", {
				className: o.a.link,
				href: "https://about.reddit.com/careers/"
			}, i._("careers", null, {
				hk: "2GATRU"
			}))), s.a.createElement("li", {
				className: o.a.linkItem
			}, s.a.createElement("a", {
				className: o.a.link,
				href: "https://about.reddit.com/press/"
			}, i._("press", null, {
				hk: "iUiGg"
			}))))), s.a.createElement("div", {
				className: o.a.linkCol
			}, s.a.createElement("ul", {
				className: o.a.linkColInner
			}, s.a.createElement("li", {
				className: o.a.linkItem
			}, s.a.createElement("a", {
				className: o.a.link,
				href: "https://www.redditinc.com/advertising"
			}, i._("advertise", null, {
				hk: "RYuIn"
			}))), s.a.createElement("li", {
				className: o.a.linkItem
			}, s.a.createElement("a", {
				className: o.a.link,
				href: "http://www.redditblog.com/"
			}, i._("blog", null, {
				hk: "4xzWuA"
			}))), s.a.createElement("li", {
				className: o.a.linkItem
			}, s.a.createElement("a", {
				className: o.a.link,
				href: "https://www.reddithelp.com"
			}, i._("help", null, {
				hk: "36XyzA"
			}))))), s.a.createElement("div", {
				className: Object(l.a)(o.a.linkCol, o.a.linkBoldCol)
			}, s.a.createElement("ul", {
				className: o.a.linkColInner
			}, s.a.createElement("li", {
				className: o.a.linkItem
			}, s.a.createElement("a", {
				className: o.a.link,
				href: "https://www.reddit.com/coins"
			}, i._("reddit coins", null, {
				hk: "3Ts6tu"
			}))), s.a.createElement("li", {
				className: o.a.linkItem
			}, s.a.createElement("a", {
				className: o.a.link,
				href: "https://www.reddit.com/premium"
			}, i._("reddit premium", null, {
				hk: "3vPbLO"
			}))))), s.a.createElement("div", {
				className: Object(l.a)(o.a.linkCol, o.a.linkBoldCol)
			}, s.a.createElement("ul", {
				className: o.a.linkColInner
			}, s.a.createElement("li", {
				className: o.a.linkItem
			}, s.a.createElement("a", {
				className: o.a.link,
				href: "https://www.facebook.com/reddit/"
			}, i._("Facebook", null, {
				hk: "47DT2F"
			}))), s.a.createElement("li", {
				className: o.a.linkItem
			}, s.a.createElement("a", {
				className: o.a.link,
				href: "https://twitter.com/reddit"
			}, i._("Twitter", null, {
				hk: "3aUv7u"
			}))), s.a.createElement("li", {
				className: o.a.linkItem
			}, s.a.createElement("a", {
				className: o.a.link,
				href: "https://www.instagram.com/reddit/"
			}, i._("Instagram", null, {
				hk: "dVIRX"
			})))))), s.a.createElement("ul", {
				className: o.a.legal
			}, s.a.createElement("li", {
				className: o.a.legalItem
			}, s.a.createElement("a", {
				className: o.a.legalLink,
				href: "https://www.redditinc.com/policies/content-policy"
			}, i._("content policy", null, {
				hk: "4ptiaZ"
			}))), s.a.createElement("li", {
				className: o.a.legalItem
			}, s.a.createElement("a", {
				className: o.a.legalLink,
				href: "https://www.reddit.com/help/privacypolicy"
			}, i._("privacy policy", null, {
				hk: "1ybjnz"
			}))), s.a.createElement("li", {
				className: o.a.legalItem
			}, s.a.createElement("a", {
				className: o.a.legalLink,
				href: "https://www.redditinc.com/policies/user-agreement"
			}, i._("user agreement", null, {
				hk: "4puRxC"
			}))), s.a.createElement("li", {
				className: o.a.legalItem
			}, s.a.createElement("a", {
				className: o.a.legalLink,
				href: "https://www.reddit.com/help/healthycommunities/"
			}, i._("mod policy", null, {
				hk: "1VvAdM"
			}))), s.a.createElement("li", {
				className: o.a.legalItem
			}, i._("© {year} Reddit, Inc. All rights reserved", [i._param("year", (new Date).getFullYear().toString())], {
				hk: "23FUx6"
			})))))
		},
		"./src/reddit/components/ModalStyledComponents/index.m.less": function(e, t, a) {
			e.exports = {
				CloseIcon: "_3XSQHPxjCTSWWZh_u-d0Xf",
				closeIcon: "_3XSQHPxjCTSWWZh_u-d0Xf",
				ModalBody: "_2R3RlhymCOkPrz9TusvcPq",
				modalBody: "_2R3RlhymCOkPrz9TusvcPq",
				ModalPostPreview: "HydQQ-TD4TUsVnxkYk_5F",
				modalPostPreview: "HydQQ-TD4TUsVnxkYk_5F",
				ModalText: "mFTHPdbEAklUs8yhT4Xm7",
				modalText: "mFTHPdbEAklUs8yhT4Xm7",
				ModalSmallText: "_3cwQrg-XvocnoG0U22wT8t",
				modalSmallText: "_3cwQrg-XvocnoG0U22wT8t",
				ModalDescriptionText: "_12g_PUGHD-w7T1w4Q3oTsq",
				modalDescriptionText: "_12g_PUGHD-w7T1w4Q3oTsq",
				ModalMetaText: "_27eskYssCs-urVW1uHI4YI",
				modalMetaText: "_27eskYssCs-urVW1uHI4YI",
				ModalFormItem: "_3xiY8nTCVp16qSb6CGW2Kv",
				modalFormItem: "_3xiY8nTCVp16qSb6CGW2Kv",
				ModalInput: "_20ZSV7ktyDYzPcd1UMQWZT",
				modalInput: "_20ZSV7ktyDYzPcd1UMQWZT",
				ModalInputLabel: "HVADn-LHFLaS8r6IBJWeq",
				modalInputLabel: "HVADn-LHFLaS8r6IBJWeq",
				ModalFooter: "_-0i7atRJ5NBsrRM5wuPpX",
				modalFooter: "_-0i7atRJ5NBsrRM5wuPpX",
				ModalHeader: "_1Fa5Xv7f16v5IC2Tq1m2Fy",
				modalHeader: "_1Fa5Xv7f16v5IC2Tq1m2Fy",
				ModalTitle: "eLnlHLGCDxjFf3jfGTcZu",
				modalTitle: "eLnlHLGCDxjFf3jfGTcZu",
				ModalMain: "_1uaasV6RaxBfRyVgQJdiKs",
				modalMain: "_1uaasV6RaxBfRyVgQJdiKs",
				ModalAnnotation: "gLlWG7Oj89Ost4_twUu8w",
				modalAnnotation: "gLlWG7Oj89Ost4_twUu8w",
				TextArea: "_2h8O7PjrCXfaJJWKrAxJPL",
				textArea: "_2h8O7PjrCXfaJJWKrAxJPL",
				WarningButton: "_17UyTSs2atqnKg9dIq5ERg",
				warningButton: "_17UyTSs2atqnKg9dIq5ERg",
				PrimaryButton: "_2X1FFYUx3jzlnbcegBC_Sr",
				primaryButton: "_2X1FFYUx3jzlnbcegBC_Sr",
				CancelButton: "_1QUX9-zZuGtifS6jJBUyh-",
				cancelButton: "_1QUX9-zZuGtifS6jJBUyh-",
				RemoveButton: "_2ulRgczjI5SWCMgSA1CNLj",
				removeButton: "_2ulRgczjI5SWCMgSA1CNLj",
				ConfirmButton: "JZC61-VzVuaiHdWuRUiSC",
				confirmButton: "JZC61-VzVuaiHdWuRUiSC"
			}
		},
		"./src/reddit/components/ModalStyledComponents/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "b", (function() {
				return p
			})), a.d(t, "e", (function() {
				return h
			})), a.d(t, "n", (function() {
				return g
			})), a.d(t, "p", (function() {
				return b
			})), a.d(t, "o", (function() {
				return f
			})), a.d(t, "f", (function() {
				return _
			})), a.d(t, "m", (function() {
				return w
			})), a.d(t, "h", (function() {
				return k
			})), a.d(t, "j", (function() {
				return v
			})), a.d(t, "k", (function() {
				return E
			})), a.d(t, "g", (function() {
				return x
			})), a.d(t, "i", (function() {
				return y
			})), a.d(t, "q", (function() {
				return N
			})), a.d(t, "d", (function() {
				return C
			})), a.d(t, "l", (function() {
				return S
			})), a.d(t, "t", (function() {
				return P
			})), a.d(t, "u", (function() {
				return O
			})), a.d(t, "r", (function() {
				return j
			})), a.d(t, "a", (function() {
				return M
			})), a.d(t, "s", (function() {
				return I
			})), a.d(t, "c", (function() {
				return F
			}));
			var n = a("./src/lib/classNames/index.ts"),
				s = a("./src/lib/lessComponent.tsx"),
				r = a("./node_modules/react/index.js"),
				o = a.n(r),
				l = a("./src/reddit/controls/Button/index.tsx"),
				i = a("./src/reddit/controls/Input/ModalInput.tsx"),
				c = a("./src/reddit/icons/svgs/Close/index.tsx"),
				d = a("./src/reddit/components/ModalStyledComponents/index.m.less"),
				m = a.n(d);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
					}
					return e
				}).apply(this, arguments)
			}
			const p = s.a.wrapped(c.a, "CloseIcon", m.a),
				h = s.a.section("ModalBody", m.a),
				g = s.a.section("ModalPostPreview", m.a),
				b = s.a.p("ModalText", m.a),
				f = s.a.div("ModalSmallText", m.a),
				_ = s.a.div("ModalDescriptionText", m.a),
				w = s.a.div("ModalMetaText", m.a),
				k = s.a.label("ModalFormItem", m.a),
				v = s.a.wrapped(i.a, "ModalInput", m.a),
				E = s.a.label("ModalInputLabel", m.a),
				x = s.a.footer("ModalFooter", m.a),
				y = s.a.header("ModalHeader", m.a),
				N = s.a.div("ModalTitle", m.a),
				C = s.a.div("ModalAnnotation", m.a),
				S = s.a.div("ModalMain", m.a),
				P = s.a.textarea("TextArea", m.a),
				O = s.a.wrapped(l.l, "WarningButton", m.a),
				j = s.a.wrapped(l.l, "PrimaryButton", m.a),
				M = s.a.wrapped(l.o, "CancelButton", m.a),
				I = s.a.wrapped(l.r, "RemoveButton", m.a),
				F = ({
					className: e,
					...t
				}) => o.a.createElement(l.t, u({
					kind: l.b.Button,
					priority: l.c.Primary,
					className: Object(n.a)(m.a.ConfirmButton, e)
				}, t))
		},
		"./src/reddit/components/PowerupsApplyToSubredditModal/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_34518MI1VDo3Wz0_Xa3Z1P",
				headerImageContainer: "_1pNTDzAv0XIYM8n74MQSZx",
				headerImage: "_1duv15GiLSc0teaTXqkqNf",
				body: "_1ZR7TpwgCz8wNeL_oebrX4",
				titleContainer: "_3rgc6zSaBdUf2eFdDqhj90",
				titleText: "_3MN__SdTbOrpk54arRlREP",
				subtitleText: "_1c9lw-Z0I-H7CuseiqDXvF",
				radioContainer: "Or4j6xxpmPEZrR6y9IWyd",
				radioOption: "_30jR2lUqq4yOfmDJPuvldx",
				ctaButton: "_2f8qc0vhWHmBjL6enjpbh",
				active: "_1f2qr208-lkmbvoXg3chJ6"
			}
		},
		"./src/reddit/components/PowerupsCtaButton/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return c
			}));
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				r = a("./node_modules/react-redux/es/index.js"),
				o = a("./src/reddit/controls/Button/index.tsx"),
				l = a("./src/reddit/selectors/gold/powerups/index.ts");
			const {
				fbt: i
			} = a("./node_modules/fbt/lib/FbtPublic.js"), c = ({
				className: e,
				onClick: t,
				disabled: a
			}) => {
				const n = Object(r.e)(l.w);
				return s.a.createElement(o.t, {
					priority: o.c.Primary,
					className: e,
					onClick: t,
					isFullWidth: !0,
					disabled: a
				}, (() => n ? i._("Use Your Premium Powerup", null, {
					hk: "JJNaN"
				}) : i._("Become a Hero", null, {
					hk: "3IZNw3"
				}))())
			}
		},
		"./src/reddit/components/PowerupsSidebar/PowerupsBackground.m.less": function(e, t, a) {
			e.exports = {
				background: "XVwx9Y9K0HdxTdtF2BPW0",
				isModal: "UtfYccpr1yXmbqvp5V4xO",
				isInFeedUnit: "_2hif8-1kZa1knghBW2qHUl",
				colorBlockCorner: "_3cb-_dMe8EWVymoglw4OyK",
				isNightmodeOn: "_2aTpeK-XP6gqT5wf5i532u",
				colorBlockThrough: "_1oWuVmyyrm-f2cYxR7EV9F",
				circle: "NsyhNpI3rn1O5dhzAooci",
				circleStriped: "_3wLmFEQT-lNFxQtTZSBM-A",
				circleDotted: "_2Y6YoeMfdGRReebFzEkb1a",
				circleOrangeHollow: "_2MNXM_uf6rOUZgaO42Wnl0",
				circleGreenHollow: "_1ThCjjX1kI9WTSqGhdfbEY",
				circleYellowHollow: "_2tVCe8UCeeIcsfKn_uIZKT"
			}
		},
		"./src/reddit/components/PowerupsSidebar/PowerupsBackground.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "b", (function() {
				return n
			})), a.d(t, "a", (function() {
				return u
			}));
			var n, s = a("./src/config.ts"),
				r = a("./src/lib/classNames/index.ts"),
				o = a("./node_modules/react/index.js"),
				l = a.n(o),
				i = a("./node_modules/react-redux/es/index.js"),
				c = a("./src/reddit/selectors/user.ts"),
				d = a("./src/reddit/components/PowerupsSidebar/PowerupsBackground.m.less"),
				m = a.n(d);
			! function(e) {
				e[e.SIDEBAR = 0] = "SIDEBAR", e[e.MODAL = 1] = "MODAL", e[e.INFEED_UNIT = 2] = "INFEED_UNIT"
			}(n || (n = {}));
			const u = ({
				space: e
			}) => {
				const t = Object(i.e)(c.X),
					a = e === n.MODAL,
					o = e === n.INFEED_UNIT;
				return l.a.createElement("div", {
					className: Object(r.a)(m.a.background, {
						[m.a.isNightmodeOn]: t,
						[m.a.isModal]: a,
						[m.a.isInFeedUnit]: o
					})
				}, l.a.createElement("div", {
					className: m.a.colorBlockCorner
				}), l.a.createElement("div", {
					className: m.a.colorBlockThrough
				}), l.a.createElement("div", {
					className: m.a.circleStriped,
					style: {
						backgroundImage: t ? `url(${s.a.assetPath}/img/powerups/linecircle-lightblue.png)` : `url(${s.a.assetPath}/img/powerups/linecircle-blue.png)`
					}
				}), l.a.createElement("div", {
					className: m.a.circleOrangeHollow
				}), l.a.createElement("div", {
					className: m.a.circleDotted,
					style: {
						backgroundImage: `url(${s.a.assetPath}/img/powerups/dotcircle.png)`
					}
				}), l.a.createElement("div", {
					className: m.a.circleGreenHollow
				}), l.a.createElement("div", {
					className: m.a.circleYellowHollow
				}))
			}
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
				headerImageContainer: "_29KrxpIQaoPJPUxEtm4B8Q",
				headerImage: "_1ghZ6lkmdRVBj30xcXSN_I",
				body: "_2DKUhe0A1QXWcxFCdX_XKW",
				footer: "oq2jQ1_NJTwSNJW5cihhn",
				titleContainer: "_3Z_APi5dTftxEdjJSGvM9",
				titleText: "_3CvPXzsDdnIWv4x_vCmnXn",
				subtitleText: "_2fkQCeEu-WrnnBt_ySOlUC",
				errorContainer: "_3WoB_AHR25QdUcmAz-qOwT",
				errorIcon: "_1gDcc-buz_eRI3WojAJCCa",
				errorText: "_3xziQ12Hb_yVRuFJtSe3T4",
				successText: "V9PocUNQDrlJqgU42fd-V",
				successButton: "j-tk8OKGHvjv3YMR3rzqz",
				active: "_1IEgxz5Ly3km_iF_vCIzlF"
			}
		},
		"./src/reddit/components/PowerupsSignUpModal/signupButton.m.less": function(e, t, a) {
			e.exports = {
				button: "_3ZSQSgkGYXZ9XJ5g3wsxpE",
				loading: "_2s-QMavjFJzrBs0ArvRNhu"
			}
		},
		"./src/reddit/controls/CheckboxWithLabel/index.m.less": function(e, t, a) {
			e.exports = {
				checkbox: "_21CrWSXdmd-ue61gDl6zRs",
				checkboxSelected: "_1xT_z2uw_7yX0esEUZVFwf",
				sharedIconStyles: "_1NVucoiiTLKJiKzRTPVKaW",
				checkboxLabel: "_1H6-wE3jxCdsIeXW5AMjj8",
				labelContent: "-kceiAQn0jpWOpu7qZRjD"
			}
		},
		"./src/reddit/controls/CheckboxWithLabel/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				r = a("./src/lib/classNames/index.ts"),
				o = a("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				l = a("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				i = a("./src/reddit/controls/CheckboxWithLabel/index.m.less"),
				c = a.n(i);
			t.a = e => s.a.createElement("button", {
				"aria-checked": e.isSelected,
				"aria-disabled": e.disabled,
				autoFocus: e.autoFocus,
				className: Object(r.a)(c.a.checkboxLabel, e.className),
				disabled: e.disabled,
				onClick: e.onClick,
				type: "button",
				role: "checkbox"
			}, s.a.createElement("span", {
				tabIndex: -1,
				className: c.a.labelContent
			}, e.isSelected ? s.a.createElement(l.a, {
				className: c.a.checkboxSelected
			}) : s.a.createElement(o.a, {
				className: c.a.checkbox
			}), e.text))
		},
		"./src/reddit/controls/Input/ModalInput.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				r = a("./node_modules/react-redux/es/index.js"),
				o = a("./src/lib/classNames/index.ts"),
				l = a("./src/reddit/actions/modal.ts"),
				i = a("./src/reddit/constants/keycodes.ts"),
				c = a("./src/reddit/controls/Input/index.m.less"),
				d = a.n(c);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
					}
					return e
				}).apply(this, arguments)
			}
			class u extends s.a.Component {
				constructor() {
					super(...arguments), this.handleKeyDown = ({
						keyCode: e
					}) => {
						e === i.a.Escape && this.props.closeModal()
					}
				}
				render() {
					const {
						className: e,
						closeModal: t,
						...a
					} = this.props;
					return s.a.createElement("input", m({
						className: Object(o.a)(d.a.input, e),
						onKeyDown: this.handleKeyDown
					}, a))
				}
			}
			t.a = Object(r.b)(null, {
				closeModal: l.f
			})(u)
		},
		"./src/reddit/controls/Input/index.m.less": function(e, t, a) {
			e.exports = {
				input: "_3eoXtlBWKbkFYoOHUIcIgK"
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
				s = a.n(n),
				r = a("./src/lib/classNames/index.ts"),
				o = a("./src/reddit/controls/LoadingIcon/index.m.less"),
				l = a.n(o);
			t.a = ({
				center: e,
				className: t,
				sizePx: a = 10
			}) => s.a.createElement("div", {
				className: Object(r.a)(l.a.loadingIcon, t, {
					[l.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${a}px`
				},
				"data-testid": "LoadingIcon"
			})
		},
		"./src/reddit/controls/RadioInput/RadioOption/index.m.less": function(e, t, a) {
			e.exports = {
				radioOption: "_2e6fJknJ4noSygWYov8-F1",
				radioOff: "_1lzSnSABNXX12WerTnwqI3",
				radioOn: "_3PYsg_uRJ6AGptv-hi7kqu"
			}
		},
		"./src/reddit/controls/RadioInput/RadioOption/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				r = a("./src/lib/classNames/index.ts"),
				o = a("./src/reddit/constants/keycodes.ts"),
				l = a("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				i = a("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				c = a("./src/reddit/layout/row/Inline/index.tsx"),
				d = a("./src/reddit/controls/RadioInput/RadioOption/index.m.less"),
				m = a.n(d);
			class u extends s.a.Component {
				constructor() {
					super(...arguments), this.ref = null, this.onKeyPress = e => {
						const {
							props: t
						} = this;
						t.disabled || e.key !== o.b.Enter && e.key !== o.b.Space || (t.onClick && t.onClick(t.value), e.preventDefault())
					}
				}
				componentDidUpdate(e) {
					this.props.selected && !e.selected && this.ref && this.ref.focus()
				}
				render() {
					const {
						props: e
					} = this;
					return e.hidden ? null : s.a.createElement(c.a, {
						"aria-checked": e.selected,
						className: Object(r.a)(e.className, m.a.radioOption),
						innerRef: e => this.ref = e,
						onClick: e.disabled ? void 0 : e.onClick,
						onKeyPress: this.onKeyPress,
						role: "radio",
						tabIndex: e.tabIndex
					}, e.showButton && (e.selected ? s.a.createElement(i.a, {
						className: m.a.radioOn,
						role: "presentation"
					}) : s.a.createElement(l.a, {
						className: m.a.radioOff,
						role: "presentation"
					})), e.children)
				}
			}
			t.a = u
		},
		"./src/reddit/controls/RadioInput/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return o
			}));
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				r = a("./src/reddit/constants/keycodes.ts");
			class o extends s.a.Component {
				constructor(e) {
					super(e), this.handleClick = e => {
						const {
							disabled: t,
							onChange: a
						} = this.props;
						t || this.state.value !== e && (a(e), this.setState({
							value: e
						}))
					}, this.getValues = () => {
						const e = [];
						return s.a.Children.forEach(this.props.children, t => {
							t.props.hidden || t.props.disabled || e.push(t.props.value)
						}), e
					}, this.onKeyDown = e => {
						const {
							disabled: t,
							onChange: a
						} = this.props, {
							value: n
						} = this.state;
						if (t) return;
						const s = e.key === r.b.ArrowUp,
							o = e.key === r.b.ArrowDown;
						if (s || o) {
							const t = this.getValues();
							if (!t.length) return;
							const r = n ? t.indexOf(n) : 0,
								o = t[((s ? r - 1 : r + 1) + t.length) % t.length];
							a(o), this.setState({
								value: o
							}), e.preventDefault()
						}
					}, this.state = {
						value: e.value || null
					}
				}
				UNSAFE_componentWillReceiveProps(e) {
					e.value !== this.props.value && this.setState({
						value: e.value || null
					})
				}
				render() {
					const {
						props: e
					} = this, {
						value: t
					} = this.state;
					return s.a.createElement("div", {
						"aria-label": e.name,
						className: e.className,
						role: "radiogroup",
						onKeyDown: this.onKeyDown
					}, s.a.createElement("input", {
						disabled: e.disabled,
						type: "hidden",
						value: t || ""
					}), s.a.Children.map(e.children, (a, n) => {
						const r = 0 === n,
							o = a.props.value === t,
							l = null !== t ? o ? 0 : -1 : r ? 0 : -1;
						return s.a.cloneElement(a, {
							disabled: e.disabled,
							onClick: e => this.handleClick(a.props.value),
							selected: o,
							tabIndex: l
						})
					}))
				}
			}
		},
		"./src/reddit/hooks/useIsClient.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return s
			}));
			var n = a("./node_modules/react/index.js");

			function s() {
				const [e, t] = Object(n.useState)(!1);
				return Object(n.useEffect)(() => {
					setTimeout(t, 1, !0)
				}, []), e
			}
		},
		"./src/reddit/hooks/usePreloadModal.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return s
			}));
			var n = a("./node_modules/react/index.js");

			function s(e) {
				Object(n.useEffect)(() => {
					e()
				}, [e])
			}
		},
		"./src/reddit/hooks/useThunkDispatch.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return s
			}));
			var n = a("./node_modules/react-redux/es/index.js");

			function s() {
				return Object(n.d)()
			}
		},
		"./src/reddit/icons/svgs/Checkbox/index.m.less": function(e, t, a) {
			e.exports = {
				checkbox: "_1vmueUAOJJg7fhS7wxztWa"
			}
		},
		"./src/reddit/icons/svgs/Checkbox/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				r = a("./src/lib/classNames/index.ts"),
				o = a("./src/reddit/icons/svgs/Checkbox/index.m.less"),
				l = a.n(o);

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = ({
				className: e,
				...t
			}) => s.a.createElement("svg", i({
				xmlns: "http://www.w3.org/2000/svg",
				width: "20",
				height: "20",
				viewBox: "0 0 20 20",
				className: Object(r.a)(l.a.checkbox, e)
			}, t), s.a.createElement("path", {
				fill: "inherit",
				d: "M1.66666667,3.34755033 L1.66666667,16.6524497 C1.66666667,17.5781756 2.42112363,18.3333333 3.34755033,18.3333333 L16.6524497,18.3333333 C17.5781756,18.3333333 18.3333333,17.5788764 18.3333333,16.6524497 L18.3333333,3.34755033 C18.3333333,2.42182438 17.5788764,1.66666667 16.6524497,1.66666667 L3.34755033,1.66666667 C2.42182438,1.66666667 1.66666667,2.42112363 1.66666667,3.34755033 Z M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z"
			}))
		},
		"./src/reddit/icons/svgs/CheckboxSelected/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", r({
				xmlns: "http://www.w3.org/2000/svg",
				width: "20",
				height: "20",
				viewBox: "0 0 20 20"
			}, e), s.a.createElement("path", {
				fill: "inherit",
				d: "M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z M8.50575,15.1995 L15.797625,7.907625 C16.25325,7.452625 16.25325,6.71325 15.797625,6.25825 C15.342,5.802625 14.602625,5.802625 14.147625,6.25825 L7.7295,12.676375 L5.635125,10.327625 C5.20575,9.846375 4.46825,9.805125 3.987625,10.23325 C3.506375,10.662625 3.4645,11.400125 3.89325,11.88075 L6.810125,15.151375 C7.023875,15.39075 7.327,15.531375 7.647625,15.54075 C7.658875,15.54075 7.6695,15.541375 7.68075,15.541375 C7.990125,15.541375 8.287,15.41825 8.50575,15.1995 Z"
			}))
		},
		"./src/reddit/icons/svgs/ChevronDown/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, s.a.createElement("g", null, s.a.createElement("polygon", {
				fill: "inherit",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/icons/svgs/ChevronUp/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("polygon", {
				fill: "inherit",
				transform: "translate(6.029200, 6.044700) scale(1, -1) translate(-6.029200, -6.044700)",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/icons/svgs/RadioOff/index.m.less": function(e, t, a) {
			e.exports = {
				icon: "_11Rht_b1e-kmk12gkz7Lug"
			}
		},
		"./src/reddit/icons/svgs/RadioOff/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				r = a("./src/lib/classNames/index.ts"),
				o = a("./src/reddit/icons/svgs/RadioOff/index.m.less"),
				l = a.n(o);

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", i({}, e, {
				className: Object(r.a)(l.a.icon, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}), s.a.createElement("g", {
				fill: "inherit"
			}, s.a.createElement("path", {
				d: "M10,1.66666667 C5.39762708,1.66666667 1.66666667,5.39762708 1.66666667,10 C1.66666667,14.6023729 5.39762708,18.3333333 10,18.3333333 C14.6023729,18.3333333 18.3333333,14.6023729 18.3333333,10 C18.3333333,5.39762708 14.6023729,1.66666667 10,1.66666667 Z M10,0 C15.5228475,-1.01453063e-15 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 6.76353751e-16,15.5228475 0,10 C-6.76353751e-16,4.4771525 4.4771525,1.01453063e-15 10,0 Z"
			})))
		},
		"./src/reddit/icons/svgs/RadioOn/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", r({}, e, {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}), s.a.createElement("g", {
				fill: "inherit"
			}, s.a.createElement("path", {
				d: "M10,6.66666667 C8.15905083,6.66666667 6.66666667,8.15905083 6.66666667,10 C6.66666667,11.8409492 8.15905083,13.3333333 10,13.3333333 C11.8409492,13.3333333 13.3333333,11.8409492 13.3333333,10 C13.3333333,8.15905083 11.8409492,6.66666667 10,6.66666667 Z M10,0 C15.5228475,-1.01453063e-15 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 6.76353751e-16,15.5228475 0,10 C-6.76353751e-16,4.4771525 4.4771525,1.01453063e-15 10,0 Z"
			})))
		},
		"./src/reddit/icons/svgs/SnooFacepalm/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 24 21",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				fill: "#000",
				d: "M5.1 3.2c.5.3 1.1.3 1.7.1 1.4-.5 2.9-.9 4.5-.7 1.2.2 1.8.2 2.3.4 1 .4 2 .9 3 1.4.5.3 1 .8 1.5 1.2.2.2.5.4.7.4 2.4-.1 4.1 1 5 3.3.8 2-.5 4.5-2 5.1-.3.1-.6.4-.7.7-.6 2-1.9 3.3-3.7 4.2-.1.1-.2.1-.3.1-.7.3-3.9 1.7-7.9 1-4.8-.9-9.3-4.6-8.7-10.2.1-1 0-1.9-.3-2.9-.2-.2-.2-.5-.2-.8.1-2.7 2.9-4.6 5.1-3.3z"
			}), s.a.createElement("path", {
				fill: "#FFF",
				d: "M.7 7.5c.4 1.3.7.5.8.5-.1.6-.3 1.3-.3 1.9-.3 2.4.3 4.6 1.9 6.3 3.7 4 8.5 4.6 13.2 2.7 1.2-.5 2.6-1.7 3.3-2.8.8-1.4 1.3-2.8 1.2-4.4 0-.1 0-.2.1-.4.1.4.3.8.3 1.1.1.4 0 .8 0 1.3 1.4-.5 2.2-2.3 1.8-3.9-.5-2-2.1-3.3-3.9-3 .9.8 1.6 3.3 1.4 3.6-1.5-3.8-4.4-6.1-8.2-6.8-3.8-.8-7.2.4-10.1 3.2.6-1.2 1.7-2 2.9-2.9-.6-.1-1-.3-1.4-.3-1.8.1-3.5 2.1-3 3.9z"
			}), s.a.createElement("path", {
				fill: "#000",
				d: "M7.2 16.7c1.4.6 2.9.9 4.4 1 .6 0 1.3-.4.3-.5-1.2-.1-2.4-.3-3.5-.8-.3-.1-.7-.1-1 0-.1 0-.5.2-.2.3zM7.3 13.4c-.1 0-.2-.1-.3-.2-.1-.2-.2-.4-.4-.6-.6-.6-1.4-1.1-2.2-.9-.3.1-.5.2-.8.2h-.5c0-.1-.1-.3 0-.4.2-.2.5-.3.6-.4 1.6-.6 3.7.6 3.9 1.7v.3c0 .3-.2.3-.3.3zm9.8 1.1c-.1 0-.3 0-.4-.1-.1 0-.1-.1-.2-.1-.7-.5-1.5-.5-2.3 0-.2.1-.5.2-.7.3 0-.2 0-.4.1-.6.6-.6 1.7-.8 2.7-.5.3.1.7.5.9.8.1 0 0 .2-.1.2z"
			}), s.a.createElement("path", {
				fill: "#000",
				d: "M16.1 20.7c-2-.2-2.7-.9-2.9-2.5-.1-.9-.3-1.6-.7-2.4-.4-.9-.5-1.4-1.5-1.7-1.3-.5-1.9-1.6-2-2.6 0-.8.2-1.7.8-2.3 1.1-1.1 2.9-1.1 4.2-.5 1.3.6 3.8 3.2 4.3 4.5 1.6 4.2.8 7.2-2.2 7.5zM12 5.6c.1.2.1.7.6.5.4-.1.4-.6-.2-1.6-.3-.6-.5-1.6 0-2.2 1-1.3 2.3-1 3.5-.7.4.1 1.5.3 1.5.8 0 .7.6 1.8 1.2 2.2 1.2 1 3.5-.1 3.5-1.8 0-1.5-1.1-2.7-2.5-2.6-.6 0-1.6.7-2 1.2-.6-.2-1.2-.4-1.9-.5-1.3-.3-2.6-.3-3.7.7-1.2 1.1-.8 2.9 0 4-.1-.1-.2-.2-.3-.4.1.1.2.3.3.4.1.1-.6-.9 0 0z"
			}), s.a.createElement("path", {
				fill: "#FFF",
				d: "M21.3 3.1c-.2.5-.6.9-1 1-.4.1-.9 0-1.3-.3s-.7-.7-.7-1.1c0-.2 0-.8.8-1.4.5-.4 1.4 0 1.9.4.2.4.5.8.3 1.4zM18 14.6c-.5-2.5-3.8-6.4-6.8-5.3-1.4.5-1.7 2.4-.8 3.5.7.8 2.1 1.2 3 1.6-.3 0-.6.1-.9 0 1.2 1.6.6 4.7 2.8 5.2 2.5.7 3.4-1.7 2.7-5z"
			}))
		},
		"./src/reddit/layout/row/Inline/index.m.less": function(e, t, a) {
			e.exports = {
				inlineRow: "XZK-LTFT5CgGo9MvPQQsy"
			}
		},
		"./src/reddit/layout/row/Inline/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./src/lib/lessComponent.tsx"),
				s = a("./src/reddit/layout/row/Inline/index.m.less"),
				r = a.n(s);
			t.a = n.a.div("inlineRow", r.a)
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
				return b
			})), a.d(t, "a", (function() {
				return k
			}));
			var n = a("./src/config.ts"),
				s = a("./node_modules/react/index.js"),
				r = a.n(s),
				o = a("./node_modules/react-redux/es/index.js"),
				l = a("./src/lib/classNames/index.ts"),
				i = a("./src/reddit/components/CollapsibleFAQ/index.tsx"),
				c = a("./src/reddit/controls/Button/index.tsx"),
				d = a("./src/reddit/selectors/gold/powerups/modSignup.ts"),
				m = a("./src/reddit/selectors/user.ts"),
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
					return r.a.createElement(r.a.Fragment, null, h._("We've built Powerups with feedback from moderators and added a few different controls that let you customize how you want Powerups to work in your community.", null, {
						hk: "4beNqr"
					}), r.a.createElement("br", null), r.a.createElement("br", null), h._("Mods of communities that have Powerups enabled can:", null, {
						hk: "3JWLHJ"
					}), r.a.createElement("ul", null, r.a.createElement("li", null, "• ", h._("Access all Powerups perks", null, {
						hk: "4iqCkq"
					})), r.a.createElement("li", null, "• ", h._("Can upload up to 20 custom emoji images (.png, .jpeg, .jpg, .heic are all supported)", null, {
						hk: "150yOT"
					})), r.a.createElement("li", null, "• ", h._("Can turn off GIFs", null, {
						hk: "2ulUhF"
					})), r.a.createElement("li", null, "• ", h._("Manage video controls and permissions. So, if videos aren't allowed in your community, then HD video won't be unlocked along with the other perks", null, {
						hk: "lAGuc"
					}))))
				}
			}, {
				prompt: () => h._("What happens if my community doesn’t unlock Powerups?", null, {
					hk: "qZaeO"
				}),
				answer: function() {
					return r.a.createElement(r.a.Fragment, null, h._("To unlock Powerups perks, communities need 25 powerups. If your community doesn’t get to 25 powerups, then the perks will remain locked for the majority of the community. (But those who have contributed a powerup unlock perks for themselves right away.)", null, {
						hk: "1SvUvT"
					}), r.a.createElement("br", null), r.a.createElement("br", null), h._("However, getting to 25 is easier than you may think. All Reddit Premium members can apply the monthly powerup that comes with their subscription to your community, and members who don’t have Reddit Premium can purchase powerups on the web. (Sorry, this isn’t available on mobile yet.)", null, {
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
			}], b = ({
				openModal: e,
				modSubredditsInfo: t
			}) => {
				return Object(o.e)(d.b) ? r.a.createElement("div", {
					className: p.a.faqSection
				}, r.a.createElement("div", {
					className: Object(l.a)(p.a.faqSectionContent, p.a.contentWrapper)
				}, r.a.createElement(f, null), r.a.createElement(_, null), r.a.createElement(w, null), r.a.createElement("h2", {
					className: p.a.faqHeading
				}, h._("Questions about Powerups", null, {
					hk: "nzxYw"
				})), r.a.createElement("div", {
					className: p.a.faqs
				}, g.map(({
					prompt: e,
					answer: t
				}, a) => r.a.createElement(i.a, {
					defaultClosed: !0,
					question: e(),
					key: a
				}, t()))), r.a.createElement("h3", {
					className: p.a.faqMoreQuestionsHeading
				}, h._("Have more questions? We've got answers.", null, {
					hk: "3Entyj"
				})), r.a.createElement(c.t, {
					className: p.a.fullFaqsButton,
					priority: c.c.Secondary,
					href: "https://mods.reddithelp.com/hc/en-us/articles/4403699823629",
					kind: c.b.ExternalLink,
					target: "_blank"
				}, h._("View Full FAQs", null, {
					hk: "1eOLlL"
				})), r.a.createElement("h2", {
					className: p.a.faqTryOutHeading
				}, h._("Try out Powerups today", null, {
					hk: "17RjMt"
				})), r.a.createElement("h3", {
					className: p.a.faqTryOutSubheading
				}, h._("Ok, you've made it to the bottom of the page. What do you think? Are Powerups for your community?", null, {
					hk: "3062Vv"
				})), r.a.createElement(c.k, {
					onClick: e,
					disabled: !(null == t ? void 0 : t.length),
					priority: c.c.Primary,
					className: p.a.ctaLetsDoThisButton
				}, h._("Let's Do This!", null, {
					hk: "6CnFH"
				})), r.a.createElement(v, null))) : null
			}, f = ({
				hideBolt: e
			}) => r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
				className: Object(l.a)(p.a.faqQuestionMark, p.a.faqQuestionMarkWithBolt)
			}), r.a.createElement("div", {
				className: p.a.circleFaqYellowWithBolt
			}, !e && r.a.createElement("img", {
				alt: "Powerup bolt",
				className: p.a.boltInCircleFaqYellow,
				src: `${n.a.assetPath}/img/powerups/bolt.png`
			}))), _ = () => r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
				className: p.a.circleFaqCyanSmall
			}), r.a.createElement("div", {
				className: p.a.circleFaqDotted,
				style: {
					backgroundImage: `url(${n.a.assetPath}/img/powerups/dotcircle.png)`
				}
			}), r.a.createElement("div", {
				className: p.a.circleFaqYellowSmall
			}), r.a.createElement("div", {
				className: p.a.circleFaqCyanBig
			}), r.a.createElement("div", {
				className: p.a.circleFaqOrange
			}), r.a.createElement("div", {
				className: p.a.circleFaqYellowHollow
			})), w = () => r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
				className: Object(l.a)(p.a.faqQuestionMark, p.a.faqQuestionMarkTopLeft)
			}), r.a.createElement("div", {
				className: Object(l.a)(p.a.faqQuestionMark, p.a.faqQuestionMarkTopRight)
			}), r.a.createElement("div", {
				className: Object(l.a)(p.a.faqQuestionMark, p.a.faqQuestionMarkLeft)
			}), r.a.createElement("div", {
				className: Object(l.a)(p.a.faqQuestionMark, p.a.faqQuestionMarkBottomRight)
			})), k = ({
				hideBolt: e
			}) => r.a.createElement(r.a.Fragment, null, r.a.createElement(f, {
				hideBolt: e
			}), r.a.createElement(_, null), r.a.createElement(w, null)), v = () => {
				const e = Object(o.e)(m.X);
				return r.a.createElement("div", {
					className: p.a.ctaButtonCirclesAndBolt
				}, r.a.createElement("div", {
					className: p.a.circleFaqCtaStriped,
					style: {
						backgroundImage: e ? `url(${n.a.assetPath}/img/powerups/linecircle-orange.png)` : `url(${n.a.assetPath}/img/powerups/linecircle-blue.png)`
					}
				}), r.a.createElement("div", {
					className: p.a.circleFaqCtaYellowBig
				}, r.a.createElement("img", {
					alt: "Powerup bolt",
					className: p.a.boltInCircleFaqCtaYellow,
					src: `${n.a.assetPath}/img/powerups/bolt.png`
				})), r.a.createElement("div", {
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
				return f
			})), a.d(t, "a", (function() {
				return _
			}));
			var n = a("./src/config.ts"),
				s = a("./src/lib/classNames/index.ts"),
				r = a("./node_modules/react/index.js"),
				o = a.n(r),
				l = a("./node_modules/react-redux/es/index.js"),
				i = a("./src/reddit/components/PowerupsCtaButton/index.tsx"),
				c = a("./src/reddit/controls/Button/index.tsx"),
				d = a("./src/reddit/icons/fonts/index.tsx");
			var m = e => o.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 437 96",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("circle", {
					fill: "#ff4500",
					cx: "48",
					cy: "48",
					r: "48"
				}), o.a.createElement("path", {
					fill: "#ff4500",
					d: "M79.992,48a7,7,0,0,0-11.855-5.036,34.261,34.261,0,0,0-18.72-5.939l3.189-15,10.418,2.215a5.008,5.008,0,1,0,.512-2.447L51.9,19.318a1.25,1.25,0,0,0-1.483.963l-3.561,16.74a34.368,34.368,0,0,0-18.994,5.93,7,7,0,1,0-7.706,11.432,13.771,13.771,0,0,0-.167,2.117c0,10.77,12.536,19.5,28,19.5s28-8.73,28-19.5a13.851,13.851,0,0,0-.164-2.1A7,7,0,0,0,79.992,48ZM32,53a5,5,0,1,1,5,5A5.007,5.007,0,0,1,32,53ZM59.88,66.212c-3.412,3.408-9.951,3.673-11.874,3.673s-8.463-.265-11.872-3.673a1.3,1.3,0,1,1,1.833-1.832c2.151,2.151,6.752,2.914,10.039,2.914s7.889-.764,10.043-2.915a1.3,1.3,0,1,1,1.831,1.833ZM59,58a5,5,0,1,1,5-5A5.006,5.006,0,0,1,59,58Z"
				}), o.a.createElement("path", {
					fill: "#fff",
					d: "M79.992,48a7,7,0,0,0-11.855-5.036,34.261,34.261,0,0,0-18.72-5.939l3.189-15,10.418,2.215a5.008,5.008,0,1,0,.512-2.447L51.9,19.318a1.25,1.25,0,0,0-1.483.963l-3.561,16.74a34.368,34.368,0,0,0-18.994,5.93,7,7,0,1,0-7.706,11.432,13.771,13.771,0,0,0-.167,2.117c0,10.77,12.536,19.5,28,19.5s28-8.73,28-19.5a13.851,13.851,0,0,0-.164-2.1A7,7,0,0,0,79.992,48ZM32,53a5,5,0,1,1,5,5A5.007,5.007,0,0,1,32,53ZM59.88,66.212c-3.412,3.408-9.951,3.673-11.874,3.673s-8.463-.265-11.872-3.673a1.3,1.3,0,1,1,1.833-1.832c2.151,2.151,6.752,2.914,10.039,2.914s7.889-.764,10.043-2.915a1.3,1.3,0,1,1,1.831,1.833ZM59,58a5,5,0,1,1,5-5A5.006,5.006,0,0,1,59,58Z"
				}), o.a.createElement("path", {
					fill: "#ff4500",
					d: "M144.182,27.8a14.469,14.469,0,0,1,6.317,5.71,16.7,16.7,0,0,1,2.19,8.659,17.514,17.514,0,0,1-2.24,8.928,15.51,15.51,0,0,1-6.318,6.031,19.81,19.81,0,0,1-9.4,2.156h-6.165V75.454H117.515V25.793h16.913A22.1,22.1,0,0,1,144.182,27.8ZM134.159,49.545a8.731,8.731,0,0,0,4.076-.909,6.562,6.562,0,0,0,2.7-2.51,7.005,7.005,0,0,0,.943-3.622,6.126,6.126,0,0,0-2.173-5.021,8.96,8.96,0,0,0-5.947-1.852h-5.188V49.545Z"
				}), o.a.createElement("path", {
					fill: "#ff4500",
					d: "M162.611,73.5a18.725,18.725,0,0,1-6.957-6.772,18.466,18.466,0,0,1-.068-18.648,18.732,18.732,0,0,1,6.873-6.856,18.939,18.939,0,0,1,9.737-2.561,19.255,19.255,0,0,1,9.619,2.477,18.582,18.582,0,0,1,6.957,6.755,18.592,18.592,0,0,1,0,18.833,18.725,18.725,0,0,1-6.957,6.772,19.738,19.738,0,0,1-19.2,0Zm14.15-7.9a9.237,9.237,0,0,0,3.269-3.522,10.013,10.013,0,0,0,1.2-4.817,9.687,9.687,0,0,0-1.213-4.8,9.2,9.2,0,0,0-3.285-3.437,8.761,8.761,0,0,0-9.063,0A9.067,9.067,0,0,0,164.4,52.46a9.712,9.712,0,0,0-1.2,4.767,10.069,10.069,0,0,0,1.2,4.851,9.235,9.235,0,0,0,3.268,3.522,8.628,8.628,0,0,0,9.1,0Z"
				}), o.a.createElement("path", {
					fill: "#ff4500",
					d: "M211.413,75.454h-8.76L191.939,39.2h10.478l4.077,16.879,1.516,6.5h.135l1.752-4.11,6.873-17.756h3.942l6.94,17.756,1.786,4.11h.168l1.483-6.5L235.1,39.2h10.478L234.829,75.454H226.1l-3.167-7.042-3.976-9.77h-.27l-4.076,9.77Z"
				}), o.a.createElement("path", {
					fill: "#ff4500",
					d: "M280.75,60.765H256.357a9.363,9.363,0,0,0,3.454,4.969,9.772,9.772,0,0,0,5.913,1.8,16.431,16.431,0,0,0,4.885-.774,12.255,12.255,0,0,0,3.841-1.82l3.3,7.952a17.234,17.234,0,0,1-5.222,2.256,25.447,25.447,0,0,1-6.637.843,20.941,20.941,0,0,1-10.141-2.358,16.568,16.568,0,0,1-6.705-6.571,19.379,19.379,0,0,1-2.358-9.635,19.506,19.506,0,0,1,2.426-9.821,17.172,17.172,0,0,1,6.519-6.587,17.812,17.812,0,0,1,8.945-2.325,17.062,17.062,0,0,1,8.474,2.14,15.607,15.607,0,0,1,6.03,6.014,17.519,17.519,0,0,1,2.207,8.827A24.352,24.352,0,0,1,280.75,60.765Zm-9.265-6.671a6.819,6.819,0,0,0-1.937-5.121,7.006,7.006,0,0,0-5.105-1.887,7.871,7.871,0,0,0-5.374,1.9,9.213,9.213,0,0,0-2.88,5.105Z"
				}), o.a.createElement("path", {
					fill: "#ff4500",
					d: "M310.331,38.882a5.377,5.377,0,0,1,1.651.522L307.7,49.579a5.714,5.714,0,0,0-1.263-.388,8.242,8.242,0,0,0-1.735-.185,8.073,8.073,0,0,0-3.622.876,7.362,7.362,0,0,0-2.915,2.628,7.721,7.721,0,0,0-1.145,4.312V75.454H286.376V39.2H296.72v5.087h.2a15.107,15.107,0,0,1,4.582-4.025,12.459,12.459,0,0,1,6.368-1.6A13.094,13.094,0,0,1,310.331,38.882Z"
				}), o.a.createElement("path", {
					fill: "#ff4500",
					d: "M337.183,39.2H347.83V75.487H337.554V70.7h-.27a11.147,11.147,0,0,1-4.548,3.892,14.319,14.319,0,0,1-6.368,1.431,11.771,11.771,0,0,1-6.351-1.667,10.919,10.919,0,0,1-4.11-4.632,15.381,15.381,0,0,1-1.432-6.773V39.2h10.647V60.6a7.068,7.068,0,0,0,1.516,4.885,5.333,5.333,0,0,0,4.177,1.685,6.3,6.3,0,0,0,4.582-1.735,6.52,6.52,0,0,0,1.786-4.9Z"
				}), o.a.createElement("path", {
					fill: "#ff4500",
					d: "M390.685,67.217a16.49,16.49,0,0,1-6.132,6.5,16.168,16.168,0,0,1-8.389,2.274,14.7,14.7,0,0,1-5.862-1.145,14.106,14.106,0,0,1-4.683-3.269h-.27V89.705L354.7,89.6V39.2H364.81V43.48h.2a13.564,13.564,0,0,1,4.717-3.571,14.524,14.524,0,0,1,6.1-1.246A16.811,16.811,0,0,1,384.3,40.9a16.611,16.611,0,0,1,6.3,6.486,20.1,20.1,0,0,1,2.375,9.972A20.38,20.38,0,0,1,390.685,67.217ZM378.421,65.6a8.348,8.348,0,0,0,3.134-3.4,10.608,10.608,0,0,0,1.112-4.9,10.382,10.382,0,0,0-1.129-4.885,8.293,8.293,0,0,0-3.133-3.352,8.746,8.746,0,0,0-4.566-1.2,8.587,8.587,0,0,0-4.514,1.2,8.316,8.316,0,0,0-3.117,3.352,11.289,11.289,0,0,0,0,9.838,8.427,8.427,0,0,0,3.117,3.369,8.7,8.7,0,0,0,4.514,1.246A8.863,8.863,0,0,0,378.421,65.6Z"
				}), o.a.createElement("path", {
					fill: "#ff4500",
					d: "M404.128,74.848a16.616,16.616,0,0,1-5.273-3.2,13.586,13.586,0,0,1-3.419-4.682l8.557-3.571a8.694,8.694,0,0,0,2.662,2.981,6.466,6.466,0,0,0,3.874,1.264,5.111,5.111,0,0,0,2.157-.421,3.225,3.225,0,0,0,1.364-1.1,2.434,2.434,0,0,0,.455-1.381q0-1.516-1.971-2.426a29.107,29.107,0,0,0-5.1-1.684q-.776-.236-.944-.27a15.971,15.971,0,0,1-7.109-3.891,9.118,9.118,0,0,1-2.661-6.755,10.092,10.092,0,0,1,1.684-5.728,11.182,11.182,0,0,1,4.633-3.924,15.245,15.245,0,0,1,6.62-1.4,16.8,16.8,0,0,1,5.947,1.044,14.949,14.949,0,0,1,4.8,2.864,11.088,11.088,0,0,1,2.931,4.043l-8.153,3.437a8.4,8.4,0,0,0-1.954-2.14,4.906,4.906,0,0,0-3.167-1.027,4.176,4.176,0,0,0-2.645.825,2.493,2.493,0,0,0-1.061,2.038,2.332,2.332,0,0,0,.977,1.887,8.267,8.267,0,0,0,2.408,1.28q1.432.505,3.959,1.18a28.275,28.275,0,0,1,4.515,1.617,11.527,11.527,0,0,1,3.959,3.167,8.512,8.512,0,0,1,1.836,5.66,10.081,10.081,0,0,1-1.836,5.946,12.192,12.192,0,0,1-4.953,4.06,15.983,15.983,0,0,1-6.822,1.449A17.448,17.448,0,0,1,404.128,74.848Z"
				})),
				u = a("./src/reddit/selectors/gold/powerups/modSignup.ts"),
				p = a("./src/reddit/selectors/user.ts"),
				h = a("./src/reddit/pages/Powerups/HeadingSection.m.less"),
				g = a.n(h);
			const {
				fbt: b
			} = a("./node_modules/fbt/lib/FbtPublic.js"), f = ({
				openModal: e
			}) => {
				const t = Object(l.e)(p.X),
					a = Object(l.e)(u.b),
					r = Object(l.e)(p.K),
					h = a ? b._("Come together to level up the whole community", null, {
						hk: "n9eu8"
					}) : b._("Level up the whole community", null, {
						hk: "2kiP2p"
					}),
					f = a ? b._("Harness the power of your community to unlock special perks and advanced features.", null, {
						hk: "1VpJiW"
					}) : b._("Come together to unlock special perks and advanced features.", null, {
						hk: "1WTTiK"
					}),
					w = a ? o.a.createElement(c.k, {
						onClick: e,
						priority: c.c.Primary,
						className: g.a.ctaButton
					}, b._("Turn on Powerups", null, {
						hk: "4E97KH"
					})) : o.a.createElement(i.a, {
						onClick: e,
						className: g.a.ctaButton,
						disabled: !r
					});
				return o.a.createElement("div", {
					className: g.a.headingSection
				}, o.a.createElement(_, {
					isNightmodeOn: t
				}), o.a.createElement("div", {
					className: Object(s.a)(g.a.contentWrapper, g.a.headingContent)
				}, o.a.createElement("div", {
					className: g.a.headingText
				}, o.a.createElement("h1", {
					className: Object(s.a)(g.a.heading, {
						[g.a.isNightmodeOn]: t
					})
				}, o.a.createElement(m, {
					className: g.a.powerupsLogo
				})), o.a.createElement("h2", {
					className: g.a.subheading
				}, h), o.a.createElement("p", {
					className: Object(s.a)(g.a.description, g.a.bodyText)
				}, f), a && o.a.createElement("div", {
					className: Object(s.a)(g.a.modWarning, g.a.bodyText)
				}, o.a.createElement("div", {
					className: g.a.modWarningTop
				}, o.a.createElement(d.a, {
					name: "mod",
					className: g.a.modWarningIcon
				})), b._("{=Only moderators with theManage Settings permission can turn on Powerups.}{=Heads up—Only Safe for Work (SFW) communities with 1,000 members or more can enable Powerups.}", [b._param("=Only moderators with theManage Settings permission can turn on Powerups.", o.a.createElement("div", null, b._("Only moderators with the {=Manage Settings} permission can turn on Powerups.", [b._param("=Manage Settings", o.a.createElement("span", {
					className: g.a.modWarningItalic
				}, b._("Manage Settings", null, {
					hk: "4AauR"
				})))], {
					hk: "1sKKo7"
				}))), b._param("=Heads up—Only Safe for Work (SFW) communities with 1,000 members or more can enable Powerups.", o.a.createElement("div", {
					className: g.a.modWarningFooter
				}, b._("Heads up—Only Safe for Work (SFW) communities with 1,000 members or more can enable Powerups.", null, {
					hk: "2euXqd"
				})))], {
					hk: "2FL5at"
				})), w), o.a.createElement("div", {
					className: g.a.headingArt
				}, o.a.createElement("div", {
					className: g.a.powerupsMarketingImageContainer
				}, o.a.createElement("picture", {
					className: g.a.powerupsMarketingImage
				}, o.a.createElement("source", {
					srcSet: `${n.a.assetPath}/img/powerups/powerups-rangers.webp`,
					type: "image/webp"
				}), o.a.createElement("source", {
					srcSet: `${n.a.assetPath}/img/powerups/powerups-rangers-static.png`,
					type: "image/png"
				}), o.a.createElement("img", {
					alt: b._("Powerups heroes", null, {
						hk: "3kHkNJ"
					}),
					className: g.a.fallbackStaticImage,
					src: `${n.a.assetPath}/img/powerups/powerups-rangers-static.png`
				}))))))
			}, _ = ({
				isNightmodeOn: e,
				accentDiagonalCustomStyles: t
			}) => o.a.createElement("div", {
				className: Object(s.a)(g.a.background, g.a.contentWrapper)
			}, o.a.createElement("div", {
				className: g.a.diagonalLayoutSecondary,
				style: t
			}), o.a.createElement("div", {
				className: g.a.diagonalLayoutPrimary
			}), o.a.createElement("div", {
				className: g.a.circleDotted,
				style: {
					backgroundImage: `url(${n.a.assetPath}/img/powerups/dotcircle.png)`
				}
			}), o.a.createElement("div", {
				className: Object(s.a)(g.a.animatedCircle, g.a.circleStriped),
				style: {
					backgroundImage: e ? `url(${n.a.assetPath}/img/powerups/linecircle-orange.png)` : `url(${n.a.assetPath}/img/powerups/linecircle-blue.png)`
				}
			}), o.a.createElement("div", {
				className: Object(s.a)(g.a.circleOrangeFull, g.a.animatedCircle)
			}), o.a.createElement("div", {
				className: Object(s.a)(g.a.circleYellowSmall, g.a.top, g.a.animatedCircle)
			}), o.a.createElement("div", {
				className: Object(s.a)(g.a.circleYellowBig, g.a.animatedCircle)
			}), o.a.createElement("div", {
				className: Object(s.a)(g.a.circleYellowHollow, g.a.animatedCircle)
			}), o.a.createElement("div", {
				className: Object(s.a)(g.a.circleYellowSmall, g.a.bottom, g.a.animatedCircle)
			}), o.a.createElement("div", {
				className: Object(s.a)(g.a.circleOrangeHollow, g.a.animatedCircle)
			}))
		},
		"./src/reddit/pages/Powerups/PerksSection.m.less": function(e, t, a) {
			e.exports = {
				perksSection: "_3xuSQMWvGF1ioIFvw3OAPd",
				isModPageVersion: "DJ1YbWxaJfDsxO1eUBbzd",
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
		"./src/reddit/pages/Powerups/PioneerSection.m.less": function(e, t, a) {
			e.exports = {
				pioneerSection: "_1AigALJ5_8_L9txj_NGgWt",
				circlePioneersCyanHollow: "_35z4rVyFyuGXStJc6gIzNh",
				powerupsPioneerContent: "_2g0PmzpLmWDpovuHZHG4H9",
				pioneerHeading: "_6LXOwukSdbSDn2ZEyyDLB",
				pioneerSubheading: "_28NRKjRCfnWkTFUGOWrsjn"
			}
		},
		"./src/reddit/pages/Powerups/PowerupStepsSection.m.less": function(e, t, a) {
			e.exports = {
				powerupStepsSection: "_1TArHcaReJQG2z4aYfFp8-",
				powerupStepsSectionContent: "_1d4po5OwyWpQkeDBOwNueP",
				circleStepsStriped: "_297lQDQNvSeahRlOa71Jx7",
				circleStepsYellowFull: "_3vq1Ue0dCQMOZVNHAiVTKX",
				powerupStep: "_1TJkcDtR_BEkm69vBbuvB7",
				powerupStepCounter: "_2lX0KnXpcHmaQaAqa0uMUg",
				powerupStepName: "_3CeRVGs8TJia7_SlnHlTcV",
				powerupStepDescription: "_3mUYyFSS149RszcS7hVfVT"
			}
		},
		"./src/reddit/pages/Powerups/index.m.less": function(e, t, a) {
			e.exports = {
				circle: "_1TvCFkzk-ajL6WvX-MoueU",
				footer: "_3W_fhNmXtO7pxVqENULN1r",
				modalBody: "_3H2XNRlTGeYM2CgAzJwzr",
				modalOverlay: "_3c_5_fSPEeIEoDBXAVgAZ3"
			}
		},
		"./src/reddit/pages/Powerups/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				r = a("./node_modules/react-redux/es/index.js"),
				o = a("./src/reddit/components/MarketingPageFooter/index.tsx"),
				l = a("./src/config.ts"),
				i = a("./src/higherOrderComponents/asModal/index.tsx"),
				c = a("./src/lib/intlList/index.ts"),
				d = a("./src/reddit/actions/gold/powerups.ts"),
				m = a("./src/reddit/components/Econ/Common/ModalCloseButton/index.tsx"),
				u = a("./src/reddit/components/Econ/PowerupsMarketingModal/async.tsx"),
				p = a("./src/reddit/components/PowerupsCtaButton/index.tsx"),
				h = a("./src/reddit/components/PowerupsSidebar/PowerupsBackground.tsx"),
				g = a("./src/reddit/controls/RadioInput/index.tsx"),
				b = a("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				f = a("./src/reddit/hooks/usePreloadModal.ts"),
				_ = a("./src/reddit/hooks/useThunkDispatch.ts"),
				w = a("./node_modules/lodash/sampleSize.js"),
				k = a.n(w),
				v = a("./node_modules/react-router-dom/esm/react-router-dom.js"),
				E = a("./src/lib/classNames/index.ts"),
				x = a("./src/lib/opener/index.ts"),
				y = a("./src/reddit/hooks/useIsClient.ts"),
				N = a("./src/reddit/hooks/useTracking.ts"),
				C = a("./src/reddit/selectors/telemetry.ts");
			var S = a("./src/reddit/selectors/user.ts"),
				P = a("./src/reddit/pages/Powerups/Communities.m.less"),
				O = a.n(P);
			const j = k()(["wallstreetbets", "pennystocks", "tiktokcringe", "lgbt", "python", "unexpected", "chloe", "pewdiepiesubmissions", "roastme", "jacksepticeye", "thebachelor", "taylorswift", "bigbrother", "belowdeck", "blackpink"], 3),
				M = () => {
					const e = Object(N.a)(),
						t = Object(r.e)(S.X),
						a = Object(y.a)(),
						n = () => {
							e((() => e => ({
								...C.n(e),
								source: "powerups_landing_page",
								action: "click",
								noun: "community"
							}))())
						};
					return a ? s.a.createElement("section", {
						className: Object(E.a)(O.a.communitiesContainer, {
							[O.a.isNightMode]: t
						})
					}, s.a.createElement("div", {
						className: O.a.communitiesContent
					}, j.map(e => s.a.createElement(v.a, {
						className: O.a.community,
						key: e,
						to: `r/${e}`,
						target: x.d.BLANK,
						rel: x.c,
						onClick: n
					}, s.a.createElement("div", {
						className: O.a.communityIcon,
						style: {
							backgroundImage: `url(${l.a.assetPath}/img/powerups/communities-placeholder.png)`
						}
					}), s.a.createElement("div", {
						className: O.a.communityName
					}, "r/", e))))) : null
				};
			var I = a("./src/reddit/selectors/gold/powerups/index.ts"),
				F = a("./src/reddit/components/PowerupsApplyToSubredditModal/index.m.less"),
				T = a.n(F);
			const {
				fbt: B
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			var q = Object(i.a)(({
					closeModal: e
				}) => {
					var t;
					const a = Object(_.a)(),
						o = Object(r.e)(I.u),
						[i, w] = Object(n.useState)((null === (t = o[0]) || void 0 === t ? void 0 : t.displayText) || "");
					Object(f.a)(u.a);
					const k = o.length ? B._("{=Come together to unlock special perks and advanced features.}", [B._param("=Come together to unlock special perks and advanced features.", s.a.createElement("div", null, B._("Come together to unlock special perks and advanced features.", null, {
						hk: "LTvLr"
					})))], {
						hk: "1Tbjpa"
					}) : B._("You are not subscribed to any communities that have Powerups enabled. Consider joining {listOfSubreddits}.", [B._param("listOfSubreddits", (e => Object(c.c)(e.map(e => `r/${e}`), c.a.OR, c.b.COMMA))([...j]))], {
						hk: "3i5kXR"
					});
					return s.a.createElement("div", {
						className: T.a.container,
						"data-testid": "powerups-signup-modal"
					}, s.a.createElement("div", {
						className: T.a.body
					}, s.a.createElement("div", {
						className: T.a.headerImageContainer
					}, s.a.createElement("img", {
						className: T.a.headerImage,
						alt: B._("Powerup heroes", null, {
							hk: "3MjoLQ"
						}),
						src: `${l.a.assetPath}/img/powerups/powerups-rangers-static.png`
					})), s.a.createElement("div", {
						className: T.a.titleContainer
					}, s.a.createElement("h1", {
						className: T.a.titleText
					}, B._("{=Power up}{=your communities}", [B._param("=Power up", s.a.createElement("div", null, B._("Power up", null, {
						hk: "Jrn2T"
					}))), B._param("=your communities", s.a.createElement("div", null, B._("your communities", null, {
						hk: "4EPQY"
					})))], {
						hk: "chRD1"
					})), s.a.createElement("h2", {
						className: T.a.subtitleText
					}, k)), s.a.createElement("div", {
						className: T.a.radioContainer
					}, s.a.createElement(g.a, {
						name: "subreddit",
						value: i,
						onChange: e => w(e)
					}, o.map(({
						id: e,
						displayText: t
					}) => {
						const a = i === t;
						return s.a.createElement(b.a, {
							className: T.a.radioOption,
							key: e,
							selected: a,
							showButton: !0,
							value: t
						}, t)
					}))), s.a.createElement(p.a, {
						onClick: async () => {
							var t;
							const n = null === (t = o.find(e => e.displayText === i)) || void 0 === t ? void 0 : t.id;
							n && (a(Object(d.g)("powerups_apply_form", n)), e())
						},
						className: T.a.ctaButton,
						disabled: !o.length
					})), s.a.createElement(m.a, {
						onClick: e,
						highContrast: !0
					}), s.a.createElement(h.a, {
						space: h.b.MODAL
					}))
				}),
				A = (a("./node_modules/core-js/modules/web.dom.iterable.js"), a("./src/reddit/controls/Button/index.tsx")),
				W = a("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				H = a("./src/reddit/selectors/gold/powerups/modSignup.ts"),
				L = a("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				R = a("./src/reddit/components/PowerupsSignUpModal/MultiSubredditForm.m.less"),
				D = a.n(R);
			const {
				fbt: U
			} = a("./node_modules/fbt/lib/FbtPublic.js"), V = e => {
				const {
					onChange: t,
					subredditIdsSelected: a,
					subredditsInfo: n,
					wasSuccessful: r,
					allEnabled: o
				} = e, l = n.filter(e => !e.hasPowerups), i = n.filter(e => e.hasPowerups), c = l.length === a.length;
				return s.a.createElement("div", {
					className: D.a.container
				}, s.a.createElement("div", {
					className: D.a.checkboxList
				}, i.map(({
					id: e,
					displayText: t
				}) => s.a.createElement(L.a, {
					className: Object(E.a)(D.a.checkbox, D.a.disabled),
					key: e,
					isSelected: !0,
					onClick: () => {},
					text: t,
					disabled: !0
				})), l.map(({
					id: e,
					displayText: n
				}) => {
					const o = a.includes(e);
					return s.a.createElement(L.a, {
						className: Object(E.a)(D.a.checkbox, {
							[D.a.disabled]: r
						}),
						key: e,
						isSelected: o,
						onClick: () => ((e, n) => {
							const s = n ? [...a, e] : a.filter(t => t !== e);
							t(s)
						})(e, !o),
						text: n,
						disabled: r
					})
				})), !r && !o && s.a.createElement(A.t, {
					className: D.a.selectAllButton,
					onClick: () => {
						t(c ? [] : l.map(({
							id: e
						}) => e))
					},
					priority: A.c.Secondary,
					isFullWidth: !0
				}, c ? U._("Deselect all", null, {
					hk: "46i6br"
				}) : U._("Select all", null, {
					hk: "2Eo4n2"
				})))
			};
			var Q = a("./src/reddit/controls/LoadingIcon/index.tsx"),
				Y = a("./src/reddit/components/PowerupsSignUpModal/signupButton.m.less"),
				z = a.n(Y);
			const {
				fbt: G
			} = a("./node_modules/fbt/lib/FbtPublic.js"), X = ({
				className: e,
				disabled: t,
				onClick: a,
				isLoading: n,
				wasError: r
			}) => {
				const o = r ? G._("Try again", null, {
					hk: "1cKOSe"
				}) : G._("Turn on Powerups", null, {
					hk: "AuDZE"
				});
				return s.a.createElement(A.k, {
					className: Object(E.a)(e, z.a.button, {
						[z.a.loading]: n
					}),
					disabled: t || n,
					onClick: a,
					priority: A.c.Primary,
					isFullWidth: !0
				}, n ? s.a.createElement(Q.a, {
					sizePx: 12,
					center: !0
				}) : o)
			};
			var Z = a("./src/reddit/components/PowerupsSignUpModal/index.m.less"),
				J = a.n(Z);
			const {
				fbt: K
			} = a("./node_modules/fbt/lib/FbtPublic.js"), $ = Object(i.a)(({
				closeModal: e
			}) => {
				var t;
				const a = Object(_.a)(),
					o = Object(N.a)(),
					i = Object(r.e)(H.a),
					c = null !== (t = 1 === (null == i ? void 0 : i.length)) && void 0 !== t && t,
					u = null == i ? void 0 : i.every(({
						hasPowerups: e
					}) => e),
					[p, g] = Object(n.useState)(i && c ? [i[0].id] : []),
					[b, f] = Object(n.useState)(!1),
					[w, k] = Object(n.useState)(!1),
					[v, E] = Object(n.useState)(!1);
				if (!(null == i ? void 0 : i.length)) return e(), null;
				const x = async e => {
					try {
						return await a(Object(d.a)(e)), {
							success: !0
						}
					} catch (t) {
						return {
							success: !1,
							error: t.message
						}
					}
				}, y = w || u ? K._("{=[r/community]}{=has Powerups}", [K._param("=[r/community]", s.a.createElement("div", null, K._("{r/community}", [K._param("r/community", i[0].displayText)], {
					hk: "1TzAG8"
				}))), K._param("=has Powerups", s.a.createElement("div", null, K._("has Powerups", null, {
					hk: "2zYYns"
				})))], {
					hk: "2bu88V"
				}) : K._("{=Power up}{=[r/community]}", [K._param("=Power up", s.a.createElement("div", null, K._("Power up", null, {
					hk: "3qh4XT"
				}))), K._param("=[r/community]", s.a.createElement("div", null, K._("{r/community}", [K._param("r/community", i[0].displayText)], {
					hk: "2Pz0Sn"
				})))], {
					hk: "p9zKt"
				}), S = w || u ? K._("{=Your communities}{=have Powerups}", [K._param("=Your communities", s.a.createElement("div", null, K._("Your communities", null, {
					hk: "3ySkxw"
				}))), K._param("=have Powerups", s.a.createElement("div", null, K._("have Powerups", null, {
					hk: "4rHX2f"
				})))], {
					hk: "E4Lct"
				}) : K._("{=Power up}{=your communities}", [K._param("=Power up", s.a.createElement("div", null, K._("Power up", null, {
					hk: "Jrn2T"
				}))), K._param("=your communities", s.a.createElement("div", null, K._("your communities", null, {
					hk: "4EPQY"
				})))], {
					hk: "1K9FOM"
				}), P = c ? y : S, O = b || w || v ? K._("{=Hold tight! It can take up to 5 minutes for}{=Powerups to appear in yourcommunity.}", [K._param("=Hold tight! It can take up to 5 minutes for", s.a.createElement("div", null, K._("Hold tight! It can take up to 5 minutes for", null, {
					hk: "1cFoaI"
				}))), K._param("=Powerups to appear in yourcommunity.", s.a.createElement("div", null, K._({
					"*": "Powerups to appear in your communities.",
					_1: "Powerups to appear in your community."
				}, [K._plural(i.length)], {
					hk: "1ky0qH"
				})))], {
					hk: "4tvqU7"
				}) : K._("{=Harness the power of yourcommunity to}{=unlock special perks and advanced features.}", [K._param("=Harness the power of yourcommunity to", s.a.createElement("div", null, K._({
					"*": "Harness the power of your communities to",
					_1: "Harness the power of your community to"
				}, [K._plural(i.length)], {
					hk: "2rOtDZ"
				}))), K._param("=unlock special perks and advanced features.", s.a.createElement("div", null, K._("unlock special perks and advanced features.", null, {
					hk: "2Xj3Tx"
				})))], {
					hk: "2cx1IK"
				});
				return s.a.createElement("div", {
					className: J.a.container,
					"data-testid": "powerups-signup-modal"
				}, s.a.createElement("div", {
					className: J.a.body
				}, s.a.createElement("div", {
					className: J.a.headerImageContainer
				}, s.a.createElement("img", {
					className: J.a.headerImage,
					alt: "Powerup heroes",
					src: `${l.a.assetPath}/img/powerups/powerups-rangers-static.png`
				})), s.a.createElement("div", {
					className: J.a.titleContainer
				}, s.a.createElement("h1", {
					className: J.a.titleText
				}, P), s.a.createElement("h2", {
					className: J.a.subtitleText
				}, O)), !c && s.a.createElement(V, {
					onChange: g,
					subredditIdsSelected: p,
					subredditsInfo: i,
					wasSuccessful: w,
					allEnabled: u
				}), v && s.a.createElement("div", {
					className: J.a.errorContainer
				}, s.a.createElement(W.a, {
					className: J.a.errorIcon
				}), s.a.createElement("span", {
					className: J.a.errorText
				}, K._("Something went wrong.", null, {
					hk: "N6RFp"
				}))), !w && !u && s.a.createElement(X, {
					disabled: 0 === p.length,
					onClick: async () => {
						o((e => t => ({
							...C.n(t),
							source: "powerups_apply_form",
							action: "click",
							noun: "turn_on_powerups",
							powerups: {
								subredditIds: e.join(",")
							}
						}))(p)), f(!0);
						const e = (await Promise.all(p.map(x))).every(({
							success: e
						}) => e);
						k(e), E(!e), f(!1)
					},
					isLoading: b,
					wasError: v
				}), (w || u) && c && s.a.createElement(s.a.Fragment, null, s.a.createElement("p", {
					className: J.a.successText
				}, K._("Let your community know about Powerups with a pinned post", null, {
					hk: "3bII20"
				})), s.a.createElement(A.t, {
					className: J.a.successButton,
					to: `/${i[0].displayText}/submit`,
					kind: A.b.InternalLink,
					priority: A.c.Primary,
					isFullWidth: !0
				}, K._("Spread the word", null, {
					hk: "1f68Nj"
				}))), s.a.createElement("footer", {
					className: J.a.footer
				}, K._("Heads up—once you turn on Powerups you can’t turn it off.", null, {
					hk: "3YQxrF"
				}))), s.a.createElement(m.a, {
					onClick: e,
					highContrast: !0
				}), s.a.createElement(h.a, {
					space: h.b.MODAL
				}))
			});
			var ee = a("./src/reddit/pages/Powerups/FaqSection.tsx"),
				te = a("./src/reddit/pages/Powerups/HeadingSection.tsx"),
				ae = a("./node_modules/fbt/lib/FbtPublic.js"),
				ne = a("./src/reddit/pages/Powerups/PerksSection.m.less"),
				se = a.n(ne);
			const re = [{
					title: ae.fbt._("Achievements", null, {
						hk: "2sAFRa"
					}),
					description: ae.fbt._("Recognize members' contributions and skills.", null, {
						hk: "2ueVeZ"
					}),
					imageName: "ACHIEVEMENT_FLAIRS_v3",
					imageAlt: ae.fbt._("Powerups perk Achievements", null, {
						hk: "OT6Cc"
					}).toString()
				}, {
					title: ae.fbt._("Gifs in Comments", null, {
						hk: "2FHbsG"
					}),
					description: ae.fbt._("When simple words won't do, let members use GIFs too.", null, {
						hk: "3o4Qbq"
					}),
					imageName: "COMMENTS_WITH_GIFS_v3",
					imageAlt: ae.fbt._("Powerups perk Gifs in Comments", null, {
						hk: "1060Ho"
					}).toString()
				}, {
					title: ae.fbt._("Custom Emojis", null, {
						hk: "3bRZHS"
					}),
					description: ae.fbt._("Create and use emojis exclusive to your community.", null, {
						hk: "4wDc2h"
					}),
					imageName: "CUSTOM_EMOJIS_v3",
					imageAlt: ae.fbt._("Powerups perk Custom Emojis", null, {
						hk: "SdKcQ"
					}).toString()
				}, {
					title: ae.fbt._("HD Video", null, {
						hk: "20Gh7k"
					}),
					description: ae.fbt._("Upload and watch in greater resolution.", null, {
						hk: "SewZA"
					}),
					imageName: "HD_VIDEO_v3",
					imageAlt: ae.fbt._("Powerups perk HD Video", null, {
						hk: "4uRAxP"
					}).toString()
				}, {
					title: ae.fbt._("Hero Status", null, {
						hk: "3raGK1"
					}),
					description: ae.fbt._("Reward members who give back to the community with hero badges and instant access to perks.", null, {
						hk: "43EB2T"
					}),
					imageName: "HERO_STATUS_v3",
					imageAlt: ae.fbt._("Powerups perk Hero Status", null, {
						hk: "11Egfw"
					}).toString()
				}],
				oe = ae.fbt._("Powerups Bolt", null, {
					hk: "4wk1W"
				}).toString(),
				le = ({
					title: e,
					description: t,
					imageName: a,
					imageAlt: n
				}) => s.a.createElement("div", {
					className: se.a.perkCell
				}, s.a.createElement("div", {
					className: se.a.perkImageBackgroundCircle
				}, s.a.createElement("img", {
					alt: n,
					className: se.a.perkImage,
					src: `${l.a.assetPath}/img/powerups/${a}.png`
				})), s.a.createElement("h3", {
					className: se.a.perkTitle
				}, e), s.a.createElement("h4", {
					className: se.a.perkDescription
				}, t)),
				ie = () => {
					const e = Object(r.e)(S.X),
						t = Object(r.e)(H.b);
					return s.a.createElement("div", {
						className: Object(E.a)(se.a.perksSection, {
							[se.a.isNightmodeOn]: e,
							[se.a.isModPageVersion]: t
						})
					}, s.a.createElement("img", {
						alt: oe,
						className: se.a.perksSectionBoltImage,
						src: `${l.a.assetPath}/img/powerups/bolt.png`
					}), s.a.createElement("h2", {
						className: se.a.perksSectionTitle
					}, ae.fbt._("Let's check out those perks!", null, {
						hk: "jugDp"
					})), s.a.createElement("div", {
						className: Object(E.a)(se.a.perksSectionGrid, se.a.contentWrapper)
					}, re.map(({
						title: e,
						description: t,
						imageName: a,
						imageAlt: n
					}) => s.a.createElement(le, {
						key: e,
						title: e,
						description: t,
						imageName: a,
						imageAlt: n
					}))))
				};
			var ce = a("./src/reddit/pages/Powerups/PioneerSection.m.less"),
				de = a.n(ce);
			const {
				fbt: me
			} = a("./node_modules/fbt/lib/FbtPublic.js"), ue = () => {
				return Object(r.e)(H.b) ? s.a.createElement("div", {
					className: de.a.pioneerSection
				}, s.a.createElement("div", {
					className: Object(E.a)(de.a.contentWrapper, de.a.powerupsPioneerContent)
				}, s.a.createElement("div", {
					className: de.a.circlePioneersCyanHollow
				}), s.a.createElement("h2", {
					className: de.a.pioneerHeading
				}, me._("Be a Powerups pioneer", null, {
					hk: "2P7QON"
				})), s.a.createElement("h3", {
					className: de.a.pioneerSubheading
				}, me._("Be one of the first communities to turn on Powerups and have an influence on what perks and advanced features we create next.", null, {
					hk: "2wFnM6"
				})))) : null
			};
			var pe = a("./src/reddit/pages/Powerups/PowerupStepsSection.m.less"),
				he = a.n(pe);
			const {
				fbt: ge
			} = a("./node_modules/fbt/lib/FbtPublic.js"), be = () => {
				const e = Object(r.e)(S.X);
				return Object(r.e)(H.b) ? s.a.createElement("div", {
					className: he.a.powerupStepsSection
				}, s.a.createElement("div", {
					className: Object(E.a)(he.a.powerupStepsSectionContent, he.a.contentWrapper)
				}, s.a.createElement("div", {
					className: he.a.circleStepsStriped,
					style: {
						backgroundImage: e ? `url(${l.a.assetPath}/img/powerups/linecircle-orange.png)` : `url(${l.a.assetPath}/img/powerups/linecircle-blue.png)`
					}
				}), s.a.createElement("div", {
					className: he.a.powerupStep
				}, s.a.createElement("div", {
					className: he.a.powerupStepCounter
				}, "1"), s.a.createElement("div", {
					className: he.a.powerupStepName
				}, ge._("Turn on powerups", null, {
					hk: "q0dHV"
				})), s.a.createElement("div", {
					className: he.a.powerupStepDescription
				}, ge._("Just click that big Turn on Powerups button and add Powerups to your community.", null, {
					hk: "1da6DP"
				}))), s.a.createElement("div", {
					className: he.a.powerupStep
				}, s.a.createElement("div", {
					className: he.a.powerupStepCounter
				}, "2"), s.a.createElement("div", {
					className: he.a.powerupStepName
				}, ge._("Rally the community", null, {
					hk: "4m8BDG"
				})), s.a.createElement("div", {
					className: he.a.powerupStepDescription
				}, ge._("Spread the word! You only need 25 powerups to give perks to the whole community.", null, {
					hk: "4eSNsf"
				}), s.a.createElement("div", {
					className: he.a.circleStepsYellowFull
				}))), s.a.createElement("div", {
					className: he.a.powerupStep
				}, s.a.createElement("div", {
					className: he.a.powerupStepCounter
				}, "3"), s.a.createElement("div", {
					className: he.a.powerupStepName
				}, ge._("Unlock perks", null, {
					hk: "20u0vD"
				})), s.a.createElement("div", {
					className: he.a.powerupStepDescription
				}, ge._("Once your community is powered up, the perks are unlocked for everyone to use.", null, {
					hk: "3Fs5Gm"
				}))))) : null
			};
			var fe = a("./src/reddit/pages/Powerups/index.m.less"),
				_e = a.n(fe);
			t.default = () => {
				const e = Object(N.a)(),
					t = Object(r.e)(H.a),
					a = Object(r.e)(H.b),
					[l, i] = Object(n.useState)(!1),
					[c, d] = Object(n.useState)(!1);
				Object(n.useEffect)(() => {
					e((() => e => ({
						...C.n(e),
						source: "global",
						action: "view",
						noun: "screen",
						actionInfo: {
							pageType: "powerups_landing_page"
						}
					}))())
				}, [e]);
				const m = () => {
						e((() => e => ({
							...C.n(e),
							source: "powerups_landing_page",
							action: "click",
							noun: "apply"
						}))()), a ? i(!0) : d(!0)
					},
					u = () => i(!1),
					p = () => d(!1);
				return s.a.createElement(s.a.Fragment, null, s.a.createElement(te.b, {
					openModal: m
				}), s.a.createElement(M, null), s.a.createElement(ue, null), s.a.createElement(be, null), s.a.createElement(ie, null), s.a.createElement(ee.b, {
					openModal: m,
					modSubredditsInfo: t
				}), s.a.createElement(o.a, {
					className: _e.a.footer
				}), a && l && s.a.createElement($, {
					withOverlay: !0,
					closeModal: u,
					onOverlayClick: u,
					className: _e.a.modalBody,
					overlayClassName: _e.a.modalOverlay
				}), !a && c && s.a.createElement(q, {
					withOverlay: !0,
					closeModal: p,
					onOverlayClick: p
				}))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Powerups.d3f14ed554b86867c8b8.js.map