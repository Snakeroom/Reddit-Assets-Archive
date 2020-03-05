// https://www.redditstatic.com/desktop2x/EconomicsCommunityTipJar.2a72ebe73c7a136c2a94.js
// Retrieved at 3/5/2020, 3:00:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EconomicsCommunityTipJar"], {
		"./node_modules/lodash/uniqueId.js": function(e, t, s) {
			var n = s("./node_modules/lodash/toString.js"),
				r = 0;
			e.exports = function(e) {
				var t = ++r;
				return n(e) + t
			}
		},
		"./src/reddit/actions/economics/tips/thunkedActions.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/endpoints/economics/tips.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/economics/tips/constants.ts");
			const i = Object(r.a)(o.a);
			s.d(t, "a", (function() {
				return a
			}));
			const a = e => async (t, s, r) => {
				let {
					apiContext: o
				} = r;
				const a = await Object(n.a)(o(), e);
				a.ok && t(i({
					subredditId: e.subredditId,
					tipData: a.body
				}))
			}
		},
		"./src/reddit/components/Economics/CommunityTipJar/index.m.less": function(e, t, s) {
			e.exports = {
				amount: "_1Vg9kfOV5OvBZ6EK2G-gi-",
				button: "_3v7owmIbrBTKdiWiex8Dhg",
				content: "_3ct9wGT87jldJVIJHsfiP0",
				goal: "_37n8VOW8fK9b8LAgco2HZu",
				goalTitle: "_2Pqr5MWiHAnwfJMjfhfjUR",
				icon: "_1J_634gl0E4ATgSheK7Kek",
				loading: "_1CE-gL19ZNW-w4xwcH6hHS",
				tipJar: "p33CirbMOI_meHAi6gTIs",
				tipJarDescription: "_1sdy876sB-lpEx9tnfBakQ"
			}
		},
		"./src/reddit/components/Economics/CommunityTipJar/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/currency/centsToDollars/index.ts"),
				c = s("./src/lib/prettyPrintNumber/index.ts"),
				d = s("./src/reddit/actions/economics/tips/thunkedActions.ts"),
				l = s("./src/lib/classNames/index.ts"),
				m = s("./src/reddit/components/Economics/EntryPoints/tooltipWrapper/index.tsx"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/i18n/components.tsx"),
				b = s("./src/reddit/icons/svgs/Dollar/index.tsx"),
				x = s("./src/reddit/models/Payments/index.ts"),
				h = s("./src/reddit/components/Economics/EntryPoints/CommunitySupportCTA/index.m.less"),
				f = s.n(h);
			var g = Object(m.a)((function(e) {
					return r.a.createElement(u.f, {
						className: Object(l.a)(f.a.button, {
							active: e.tooltipIsOpen
						}),
						onClick: e.onToggleTooltip
					}, r.a.createElement(b.a, {
						className: f.a.icon
					}), r.a.createElement(p.c, null, "support"))
				}), x.a.Subreddit),
				v = s("./src/reddit/components/RawHTMLDisplay/Listing.tsx"),
				C = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				y = s("./src/reddit/i18n/utils.ts"),
				E = s("./src/reddit/selectors/economics.ts"),
				w = s("./src/reddit/selectors/gov.ts"),
				O = s("./src/reddit/selectors/subreddit.ts"),
				j = s("./src/reddit/components/Economics/CommunityTipJar/index.m.less"),
				T = s.n(j);
			const I = 1e4,
				N = 500;
			class _ extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						loadBufferTimePassed: !1
					}
				}
				componentDidMount() {
					this.props.onFetchDetails(), setTimeout(() => this.setState(() => ({
						loadBufferTimePassed: !0
					})), N)
				}
				render() {
					const {
						communityTipJarAmount: e,
						subreddit: t,
						subredditAssets: s,
						tipsProportions: n
					} = this.props;
					return t ? r.a.createElement(C.a, {
						className: this.props.className,
						title: Object(y.c)("Community Jar")
					}, s && s.communityTipsDescription && s.communityTipsDescription.content && s.communityTipsDescription.content.bodyHtml && r.a.createElement("div", {
						className: T.a.goal
					}, r.a.createElement("div", {
						className: T.a.goalTitle
					}, r.a.createElement(p.c, null, "goal")), r.a.createElement(v.a, {
						html: s.communityTipsDescription.content.bodyHtml
					})), e && n ? r.a.createElement("div", {
						className: T.a.content
					}, r.a.createElement(g, {
						contentId: t.id,
						subredditId: t.id,
						targetName: t.displayText
					}), r.a.createElement("div", {
						className: T.a.tipJar
					}, r.a.createElement("div", {
						className: T.a.amount
					}, "$", Object(c.a)(Object(a.a)(e, parseInt(e) < I))), r.a.createElement("div", {
						className: T.a.tipJarDescription
					}, r.a.createElement(p.c, null, "Community Jar")))) : r.a.createElement("div", {
						className: T.a.loading
					}, this.state.loadBufferTimePassed && Object(y.c)("Loading..."))) : null
				}
			}
			const P = Object(i.c)({
				communityTipJarAmount: E.j,
				subredditAssets: w.k,
				subreddit: O.P,
				tipsProportions: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(E.w)(e, {
						subredditId: s,
						contentId: s
					})
				}
			});
			t.default = Object(o.b)(P, (e, t) => {
				let {
					subredditId: s
				} = t;
				return {
					onFetchDetails: () => e(Object(d.a)({
						subredditId: s,
						contentIds: [s]
					}))
				}
			})(_)
		},
		"./src/reddit/components/Economics/EntryPoints/CommunitySupportCTA/index.m.less": function(e, t, s) {
			e.exports = {
				button: "_2QEogCFTAA2svI8U136dYQ",
				icon: "_2nnKGkq1u4U2EYJ0F3Wh-8"
			}
		},
		"./src/reddit/components/Economics/EntryPoints/tooltipWrapper/PaymentReaction/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_29hSPzmaIfiSxXCwOgl9nv",
				anim: "_3FCWmng2PtVz4S6o199Vck",
				icon: "_3FsMmNzhrk41p2D1szfijw",
				pill: "_1L_GuzUvYSyjb91nxCNZzE"
			}
		},
		"./src/reddit/components/Economics/EntryPoints/tooltipWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3O4_KTZzaGIIbIPKl6RKqQ",
				tooltip: "ipuIu01PVYgRLGNOfxtII",
				tooltipAbove: "_1S__RzyW6wXWYfvTLxrwA5",
				tooltipBelow: "_3tpqbzy0wNs2Juyk-tLWnO",
				tooltipPortal: "SE551HAliNwRBfeaeYV7I"
			}
		},
		"./src/reddit/components/Economics/EntryPoints/tooltipWrapper/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/higherOrderComponents/asTooltip.tsx"),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/Economics/Support/PaymentTooltip/index.tsx"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				d = s("./src/reddit/models/Payments/index.ts"),
				l = s("./src/reddit/selectors/telemetry.ts"),
				m = s("./src/lib/currency/centsToDollars/index.ts"),
				u = s("./src/lib/prettyPrintNumber/index.ts"),
				p = s("./src/reddit/icons/svgs/Dollar/index.tsx"),
				b = s("./src/reddit/components/Economics/EntryPoints/tooltipWrapper/PaymentReaction/index.m.less"),
				x = s.n(b);

			function h(e) {
				return r.a.createElement("div", {
					className: Object(i.a)(x.a.container, e.className)
				}, r.a.createElement("div", {
					className: x.a.pill
				}, r.a.createElement(p.a, {
					className: x.a.icon
				}), Object(u.a)(Object(m.a)(e.amount, !0))))
			}
			var f = s("./src/reddit/components/Economics/EntryPoints/tooltipWrapper/index.m.less"),
				g = s.n(f);

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			s.d(t, "a", (function() {
				return E
			}));
			const C = 500,
				y = Object(o.a)(a.b);

			function E(e, t) {
				return Object(c.b)(class extends r.a.Component {
					constructor() {
						super(...arguments), this.ref = void 0, this.state = {
							successfulPaymentAmount: void 0,
							tooltipIsOpen: !1
						}, this.shouldRenderBelow = () => {
							if (this.ref) {
								const {
									top: e
								} = this.ref.getBoundingClientRect();
								return e <= C
							}
							return !1
						}, this.handleToggleTooltip = e => {
							this.setState(s => (s.tooltipIsOpen || this.props.sendEvent(e => Object.assign({
								source: "meta",
								action: "click",
								noun: "tip_button"
							}, l.defaults(e), {
								subreddit: l.subreddit(e)
							}, t === d.a.Comment ? {
								comment: l.comment(e, this.props.contentId)
							} : t === d.a.Post ? {
								post: l.post(e, this.props.contentId)
							} : {})), {
								successfulPaymentAmount: e,
								tooltipIsOpen: !s.tooltipIsOpen
							}))
						}
					}
					render() {
						const {
							contentId: s,
							subredditId: n,
							targetName: o
						} = this.props, c = this.shouldRenderBelow(), d = c ? a.a.Below : a.a.Above, l = "".concat(s, "-").concat(n, "-").concat(o);
						return r.a.createElement("div", {
							className: Object(i.a)(g.a.container, this.props.className),
							id: this.props.renderInPortal ? l : void 0,
							ref: e => {
								this.ref = e || void 0
							}
						}, r.a.createElement(e, v({}, this.props, {
							tooltipIsOpen: this.state.tooltipIsOpen,
							onToggleTooltip: () => this.handleToggleTooltip()
						})), this.state.tooltipIsOpen && (this.props.renderInPortal ? r.a.createElement(y, {
							isOpen: !0,
							position: a.a.Below,
							content: {
								id: this.props.contentId,
								type: t
							},
							className: g.a.tooltipPortal,
							subredditId: this.props.subredditId,
							targetName: o,
							targetPosition: ["center", "bottom"],
							tooltipId: l,
							tooltipPosition: ["center", "top"],
							onClose: this.handleToggleTooltip
						}) : r.a.createElement(a.b, {
							content: {
								id: this.props.contentId,
								type: t
							},
							className: Object(i.a)(g.a.tooltip, {
								[g.a.tooltipAbove]: !c,
								[g.a.tooltipBelow]: c
							}),
							position: d,
							subredditId: this.props.subredditId,
							targetName: o,
							onClose: this.handleToggleTooltip
						})), !!this.state.successfulPaymentAmount && r.a.createElement(h, {
							amount: this.state.successfulPaymentAmount
						}))
					}
				})
			}
		},
		"./src/reddit/components/RawHTMLDisplay/Listing.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				a = s("./src/reddit/components/RawHTMLDisplay/index.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(o.a)(e => r.a.createElement(a.a, c({
				style: {
					color: Object(i.a)(e).post
				}
			}, e)))
		},
		"./src/reddit/controls/Checkbox/index.m.less": function(e, t, s) {
			e.exports = {
				Checkbox: "_2nBuBcqz2x0pSPNZfAPkF",
				checkbox: "_2nBuBcqz2x0pSPNZfAPkF",
				mActive: "tLupTGll01Uj0qzkNAjEB",
				mActiveRedditStyle: "_3zu1ZycuCQZ6UeSogWYVka",
				mDisabled: "_2hst4PduZ_m486CeR0rkEm",
				mDisabledRedditStyle: "_2MFHixazvnGgoOmoOzwbIu",
				CheckboxSizing: "_1yJa2uREsO-mxGPj5tbxXy",
				checkboxSizing: "_1yJa2uREsO-mxGPj5tbxXy"
			}
		},
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/Checkbox/index.tsx");

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var c = e => r.a.createElement("svg", a({
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, e), r.a.createElement("g", {
					transform: "translate(-32.000000, -173.000000)"
				}, r.a.createElement("g", {
					transform: "translate(32.000000, 173.000000)"
				}, r.a.createElement("path", {
					d: "M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z M4.5,8.5 C4.22385763,8.5 4,8.72385763 4,9 L4,11 C4,11.2761424 4.22385763,11.5 4.5,11.5 L15.5,11.5 C15.7761424,11.5 16,11.2761424 16,11 L16,9 C16,8.72385763 15.7761424,8.5 15.5,8.5 L4.5,8.5 Z"
				})))),
				d = s("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				l = s("./src/reddit/controls/Checkbox/index.m.less"),
				m = s.n(l);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var p = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			const b = e => t => {
					const {
						className: s,
						disabled: n,
						redditStyle: i,
						"data-redditstyle": a
					} = t, c = p(t, ["className", "disabled", "redditStyle", "data-redditstyle"]), d = ((e, t, s) => {
						const n = !(!t && !s);
						let r = "";
						return r = e ? n ? m.a.mDisabledRedditStyle : m.a.mDisabled : n ? m.a.mActiveRedditStyle : m.a.mActive
					})(n, i, a);
					return r.a.createElement(e, u({
						className: Object(o.a)(m.a.Checkbox, d, s)
					}, c))
				},
				x = b(d.a),
				h = b(c);
			t.a = e => {
				const t = e.isHalfCheckboxSelected ? h : e.isCheckboxSelected ? x : i.a;
				return r.a.createElement("button", {
					"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
					className: e.className,
					onClick: t => {
						e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
					},
					disabled: e.disabled
				}, r.a.createElement(t, {
					className: Object(o.a)(m.a.CheckboxSizing, e.className),
					"data-redditstyle": e.redditStyle,
					disabled: e.disabled,
					style: e.checkBoxStyle
				}))
			}
		},
		"./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "_2AfJEqW9tv4b_kolKEuS9K",
				titleRow: "p4QfstubN5cRxd-gy8gFH",
				detailsContainer: "_2V3KEAhexNh-mP3TbrVClC",
				buttonRow: "_1fcbQFwN65ik28DNmWnpX4",
				confirmButton: "zcMEJWBL7q-mYGOPSpjN-"
			}
		},
		"./src/reddit/controls/ErrorText/index.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "_2hGJP-9xfXBXd0wqhBLHhY",
				description: "_3h_9YwxjuOr77VhScPrjCI",
				moreText: "_1Y0BrhDgcSTeSYvmSPYepI"
			}
		},
		"./src/reddit/controls/ErrorText/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/uniqueId.js"),
				r = s.n(n),
				o = s("./node_modules/raf/index.js"),
				i = s.n(o),
				a = s("./node_modules/react/index.js"),
				c = s.n(a),
				d = s("./node_modules/react-redux/es/index.js"),
				l = s("./node_modules/reselect/es/index.js"),
				m = s("./src/lib/classNames/index.ts"),
				u = s("./src/reddit/actions/modal.ts"),
				p = s("./src/reddit/i18n/utils.ts"),
				b = s("./src/reddit/selectors/activeModalId.ts"),
				x = s("./node_modules/fbt/lib/FbtPublic.js"),
				h = s("./src/higherOrderComponents/asModal/index.tsx"),
				f = s("./src/reddit/controls/Button/index.tsx"),
				g = s("./src/reddit/layout/row/Inline/index.tsx"),
				v = s("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				C = s.n(v);
			var y = Object(h.a)(e => {
					const {
						children: t,
						title: s
					} = e;
					return c.a.createElement("div", {
						className: C.a.wrapper
					}, c.a.createElement(g.a, {
						className: C.a.titleRow
					}, s), c.a.createElement("div", {
						className: C.a.detailsContainer
					}, t), c.a.createElement(g.a, {
						className: C.a.buttonRow
					}, c.a.createElement(f.f, {
						className: C.a.confirmButton,
						onClick: e.onConfirmed
					}, x.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				E = s("./src/reddit/controls/ErrorText/index.m.less"),
				w = s.n(E);
			s.d(t, "a", (function() {
				return I
			})), s.d(t, "c", (function() {
				return N
			}));
			const O = Object(l.c)({
				activeModalId: b.a
			});
			class j extends c.a.Component {
				constructor(e) {
					super(e), this.spanRef = c.a.createRef(), this.toggleModal = () => {
						this.props.toggleErrorTextModal(this.state.modalId)
					}, this.state = {
						textHasOverflowed: !1,
						modalId: "ErrorTextModal--".concat(r()())
					}
				}
				componentDidMount() {
					this.calcTextDidOverflow()
				}
				componentDidUpdate() {
					this.calcTextDidOverflow()
				}
				calcTextDidOverflow() {
					i()(() => {
						const e = this.spanRef.current;
						if (!e) return;
						const t = e.scrollWidth > e.clientWidth;
						this.setState(e => e.textHasOverflowed !== t ? {
							textHasOverflowed: t
						} : null)
					})
				}
				render() {
					const {
						children: e,
						activeModalId: t,
						className: s,
						errorModalBody: n,
						errorModalTitle: r = Object(p.c)("Error"),
						moreText: o = Object(p.c)("More")
					} = this.props, {
						modalId: i,
						textHasOverflowed: a
					} = this.state;
					return c.a.createElement("div", {
						className: Object(m.a)(w.a.wrapper, s)
					}, c.a.createElement("span", {
						className: w.a.description,
						ref: this.spanRef
					}, e), a && c.a.createElement("span", {
						className: w.a.moreText,
						onClick: this.toggleModal
					}, o), t === i && c.a.createElement(y, {
						onConfirmed: this.toggleModal,
						title: r
					}, n || e))
				}
			}
			const T = Object(d.b)(O, e => ({
					toggleErrorTextModal: t => e(Object(u.i)(t))
				}))(j),
				I = e => {
					const {
						className: t,
						errorClassName: s,
						errorModalTitle: n,
						fallbackMessage: r,
						messages: o = []
					} = e, i = o.length ? o : r ? [r] : [];
					return i.length ? c.a.createElement("div", {
						className: t
					}, i.map((e, t) => c.a.createElement(T, {
						className: s,
						errorModalTitle: n,
						key: t
					}, e))) : null
				},
				N = e => c.a.createElement(I, {
					fallbackMessage: Object(p.c)("Something went wrong"),
					messages: e
				});
			t.b = T
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "c", (function() {
				return i
			})), s.d(t, "d", (function() {
				return a
			})), s.d(t, "e", (function() {
				return c
			})), s.d(t, "b", (function() {
				return d
			}));
			var n, r = s("./src/config.ts"),
				o = s("./src/reddit/endpoints/governance/requester.ts");

			function i(e) {
				switch (e) {
					case n.Ethereum:
						return "Ethereum Main Network";
					case n.Rinkeby:
						return "Rinkeby Test Network"
				}
				return e + " Network"
			}
			async function a(e, t, s) {
				return Object(o.a)(e, {
					method: "post",
					endpoint: "".concat(r.a.metaUrl, "/crypto/").concat(t, "/challenges"),
					data: {
						challengeType: "registration-challenge-EIP712",
						address: s
					}
				})
			}
			async function c(e, t, s) {
				return await Object(o.a)(e, {
					method: "post",
					endpoint: "".concat(r.a.metaUrl, "/crypto/").concat(t, "/registrations"),
					data: s
				})
			}
			async function d(e, t, s) {
				return await Object(o.a)(e, {
					method: "delete",
					endpoint: "".concat(r.a.metaUrl, "/crypto/").concat(t, "/registrations/").concat(s)
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.Stellar = "stellar"
			}(n || (n = {}))
		},
		"./src/reddit/icons/svgs/Dollar/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				id: e.id,
				viewBox: "0 0 13 13",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M1.90108 1.90127C4.43662 -0.633374 8.5628 -0.634139 11.0983 1.90127C13.6339 4.43668 13.6339 8.56265 11.0983 11.0981C9.83057 12.3665 8.16495 13 6.5001 13C4.83447 13 3.16885 12.3665 1.90108 11.0981C-0.633694 8.56265 -0.633694 4.43668 1.90108 1.90127ZM5.96831 9.9002V10.8202H7.04991V9.8602C7.68242 9.74686 8.14731 9.50353 8.44459 9.1302C8.7482 8.75686 8.9 8.32353 8.9 7.8302C8.9 7.31686 8.73871 6.9102 8.41613 6.6102C8.09987 6.3102 7.60652 6.0802 6.93605 5.9202V4.2602C7.16376 4.31353 7.35667 4.39353 7.5148 4.5002C7.67293 4.60686 7.80892 4.72686 7.92277 4.8602L8.78615 4.0402C8.57742 3.78686 8.33074 3.58686 8.04611 3.4402C7.76148 3.28686 7.42941 3.18686 7.04991 3.14019V2.2002H5.96831V3.14019C5.35478 3.21353 4.88672 3.41686 4.56414 3.7502C4.24788 4.08353 4.08975 4.51353 4.08975 5.0402C4.08975 5.52686 4.24472 5.93353 4.55465 6.2602C4.86458 6.58686 5.37691 6.82686 6.09165 6.9802V8.7802C5.826 8.7402 5.58248 8.65686 5.3611 8.5302C5.13972 8.39686 4.93732 8.2302 4.75389 8.0302L3.9 8.8502C4.14035 9.1302 4.42498 9.36353 4.75389 9.5502C5.0828 9.73686 5.4876 9.85353 5.96831 9.9002ZM5.56034 5.4502C5.45282 5.34353 5.39905 5.19353 5.39905 5.0002C5.39905 4.80686 5.45282 4.64686 5.56034 4.5202C5.67419 4.38686 5.8513 4.29353 6.09165 4.2402V5.7202C5.8513 5.64686 5.67419 5.55686 5.56034 5.4502ZM7.46736 7.5202C7.54959 7.65353 7.5907 7.79353 7.5907 7.9402C7.5907 8.13353 7.53694 8.30353 7.42941 8.4502C7.32188 8.5902 7.15743 8.69353 6.93605 8.7602V7.1802C7.20803 7.26686 7.38514 7.3802 7.46736 7.5202Z"
			})))
		},
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M10,8.5 C10.553,8.5 11,8.948 11,9.5 L11,13.5 C11,14.052 10.553,14.5 10,14.5 C9.447,14.5 9,14.052 9,13.5 L9,9.5 C9,8.948 9.447,8.5 10,8.5 Z M10.7002,5.79 C10.8012,5.89 10.8702,6 10.9212,6.12 C10.9712,6.24 11.0002,6.37 11.0002,6.5 C11.0002,6.57 10.9902,6.63 10.9802,6.7 C10.9712,6.76 10.9502,6.82 10.9212,6.88 C10.9002,6.94 10.8702,7 10.8302,7.05 C10.7902,7.11 10.7502,7.16 10.7002,7.21 C10.6602,7.25 10.6102,7.29 10.5512,7.33 C10.5002,7.37 10.4402,7.4 10.3812,7.42 C10.3202,7.45 10.2612,7.47 10.1902,7.48 C10.1312,7.49 10.0602,7.5 10.0002,7.5 C9.7402,7.5 9.4802,7.39 9.2902,7.21 C9.1102,7.02 9.0002,6.77 9.0002,6.5 C9.0002,6.37 9.0302,6.24 9.0802,6.12 C9.1312,5.99 9.2002,5.89 9.2902,5.79 C9.5202,5.56 9.8702,5.46 10.1902,5.52 C10.2612,5.53 10.3202,5.55 10.3812,5.58 C10.4402,5.6 10.5002,5.63 10.5512,5.67 C10.6102,5.71 10.6602,5.75 10.7002,5.79 Z M10,16 C6.691,16 4,13.309 4,10 C4,6.691 6.691,4 10,4 C13.309,4 16,6.691 16,10 C16,13.309 13.309,16 10,16 M10,2 C5.589,2 2,5.589 2,10 C2,14.411 5.589,18 10,18 C14.411,18 18,14.411 18,10 C18,5.589 14.411,2 10,2"
			})))
		},
		"./src/reddit/icons/svgs/Trash2/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1Fa4RPHlhrfUZuNaXK2-eP"
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/Trash2/index.m.less"),
				a = s.n(i);
			const c = e => r.a.createElement("svg", {
				className: Object(o.a)(a.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, r.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), r.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = c
		},
		"./src/reddit/selectors/experiments/pollsGA.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			})), s.d(t, "b", (function() {
				return l
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				o = s("./src/reddit/selectors/platform.ts"),
				i = s("./src/reddit/selectors/user.ts");
			const a = new Set(["pollstest", "whatssnoo"]),
				c = new Set(["ps4", "casualconversation", "stardewvalley", "knitting", "dccomics", "premierleague", "zerocarb", "survivor", "supergirltv", "superman", "teenmfa", "whatssnoo", "poll_testing", "nfl", "sanfranciscoanalog", "communityactivation", "temescal", "amitheproblem", "amithebuttface"]),
				d = e => a.has(e.toLowerCase()) || c.has(e.toLowerCase()),
				l = e => a.has((Object(o.e)(e) || "").toLowerCase()) || c.has((Object(o.e)(e) || "").toLowerCase()) && Object(r.c)(e, {
					experimentEligibilitySelector: i.G,
					experimentName: n.bb
				}) === n.ib.Enabled
		},
		"./src/reddit/selectors/gov.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return m
			})), s.d(t, "c", (function() {
				return u
			})), s.d(t, "d", (function() {
				return p
			})), s.d(t, "e", (function() {
				return b
			})), s.d(t, "g", (function() {
				return x
			})), s.d(t, "h", (function() {
				return h
			})), s.d(t, "i", (function() {
				return f
			})), s.d(t, "j", (function() {
				return g
			})), s.d(t, "o", (function() {
				return v
			})), s.d(t, "p", (function() {
				return C
			})), s.d(t, "n", (function() {
				return y
			})), s.d(t, "k", (function() {
				return E
			})), s.d(t, "l", (function() {
				return w
			})), s.d(t, "s", (function() {
				return O
			})), s.d(t, "a", (function() {
				return j
			})), s.d(t, "f", (function() {
				return T
			})), s.d(t, "q", (function() {
				return I
			})), s.d(t, "m", (function() {
				return N
			})), s.d(t, "r", (function() {
				return _
			}));
			var n = s("./src/reddit/contexts/PageLayer/index.tsx"),
				r = s("./src/reddit/endpoints/governance/crypto.ts"),
				o = s("./src/reddit/featureFlags/index.ts"),
				i = s("./src/reddit/selectors/experiments/pollsGA.ts"),
				a = s("./src/reddit/selectors/postCreations.ts");
			const c = [],
				d = {},
				l = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				},
				m = (e, t) => {
					let {
						subredditId: s
					} = t;
					const n = O(e, {
						subredditId: s
					});
					return n && n.extra && n.extra.contracts && n.extra.contracts.harberger ? n.extra.contracts.harberger : {
						address: void 0,
						decimals: void 0,
						image: void 0,
						taxRate: .01,
						token: void 0
					}
				},
				u = (e, t) => {
					const s = E(e, t);
					if (s) return s.mainHeader
				},
				p = (e, t) => {
					const s = E(e, t);
					return s && s.mainHeader ? s.mainHeader.price : "0"
				},
				b = (e, t) => {
					const s = E(e, t);
					return s && s.mainHeader ? {
						owner: s.mainHeader.owner,
						ownerId: s.mainHeader.ownerId
					} : d
				},
				x = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				h = (e, t) => {
					if (Object(i.b)(e)) {
						const t = Object(a.g)(e);
						return !!t.allowedPostTypes && t.allowedPostTypes.polls
					}
					const s = o.d.spPolls(e) || o.d.spKarmaPoints(e),
						n = t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0;
					if (n) {
						const e = !!n.polls && !1 === n.polls.canCreate;
						return s && !e
					}
					return s
				},
				f = (e, t) => {
					return (e.users.publicWallets[t.userId] || {})[t.subredditId]
				},
				g = (e, t) => {
					const s = Object(n.m)(e, t);
					return s && e.subreddits.gov.releaseNotes[s] || c
				},
				v = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).name || "Subreddit Points",
				C = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).images || l,
				y = (e, t) => {
					const s = I(e, t);
					return s && s.decimals ? "1" + "0".repeat(s.decimals) : "1"
				},
				E = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0,
				w = (e, t) => t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0,
				O = (e, t) => {
					const s = w(e, t);
					return s && s.walletProvider
				},
				j = (e, t) => {
					const s = O(e, t),
						n = w(e, t);
					return s && s.provider || n && n.provider
				},
				T = (e, t) => {
					const s = j(e, t);
					return s === r.a.Ethereum || s === r.a.Rinkeby
				},
				I = (e, t) => {
					const s = O(e, t),
						n = j(e, t);
					if (s && !s.inTransition && n === r.a.Stellar) return {
						address: s.extra && s.extra.issuerAddress || "",
						decimals: s.extra && s.extra.decimals || 7,
						symbol: s.extra && s.extra.token || "PHOTON"
					};
					const o = s && s.extra && s.extra.contracts,
						i = o && o.unlocked;
					return i && {
						address: i.address,
						symbol: i.token || "",
						decimals: i.decimals || 18,
						image: i.image
					}
				},
				N = (e, t) => {
					let {
						subredditId: s
					} = t;
					const n = O(e, {
						subredditId: s
					});
					return n && n.extra && n.extra.contracts && n.extra.contracts.subscriptions ? n.extra.contracts.subscriptions : {
						address: void 0
					}
				},
				_ = (e, t) => {
					const s = w(e, t);
					return !!s && !!s.walletProvider && !s.walletProvider.inTransition
				}
		}
	}
]);
//# sourceMappingURL=EconomicsCommunityTipJar.2a72ebe73c7a136c2a94.js.map