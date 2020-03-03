// https://www.redditstatic.com/desktop2x/EconomicsEntryPointsPostFlatlistSupportCTA.b4794cf5217c00059fb1.js
// Retrieved at 3/3/2020, 6:36:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EconomicsEntryPointsPostFlatlistSupportCTA"], {
		"./src/reddit/actions/economics/paymentSystems/actionCreators.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return r
			})), n.d(e, "e", (function() {
				return c
			})), n.d(e, "b", (function() {
				return i
			})), n.d(e, "c", (function() {
				return a
			})), n.d(e, "d", (function() {
				return d
			}));
			var o = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/economics/paymentSystems/constants.ts");
			const r = Object(o.a)(s.a),
				c = Object(o.a)(s.e),
				i = Object(o.a)(s.b),
				a = Object(o.a)(s.c),
				d = Object(o.a)(s.d)
		},
		"./src/reddit/actions/economics/paymentSystems/thunkedActions.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return r
			}));
			var o = n("./src/reddit/endpoints/economics/paymentSystems.ts"),
				s = n("./src/reddit/actions/economics/paymentSystems/actionCreators.ts");
			const r = () => async (t, e, n) => {
				let {
					apiContext: r
				} = n;
				t(Object(s.d)());
				const c = await Object(o.d)(r());
				c.ok ? t(Object(s.c)(c.body)) : t(Object(s.b)({
					error: c.error
				}))
			}
		},
		"./src/reddit/components/Economics/EntryPoints/PostFlatlistSupportCTA/index.m.less": function(t, e, n) {
			t.exports = {
				button: "_1jk3a9xT1g521OffvnHp3G",
				buttonSelected: "JnQ6N6DNYPIEmNKTCiFDX",
				icon: "_4KyX6HJ_ZdRPMDVyUjOWp"
			}
		},
		"./src/reddit/components/Economics/EntryPoints/PostFlatlistSupportCTA/index.tsx": function(t, e, n) {
			"use strict";
			n.r(e);
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/components/Economics/EntryPoints/tooltipWrapper/index.tsx"),
				i = n("./src/reddit/i18n/utils.ts"),
				a = n("./src/reddit/icons/svgs/Dollar/index.tsx"),
				d = n("./src/reddit/models/Payments/index.ts"),
				l = n("./src/reddit/components/Economics/EntryPoints/PostFlatlistSupportCTA/index.m.less"),
				p = n.n(l);
			e.default = Object(c.a)((function(t) {
				return s.a.createElement("button", {
					className: Object(r.a)(p.a.button, {
						[p.a.buttonSelected]: t.tooltipIsOpen
					}),
					onClick: t.onToggleTooltip
				}, s.a.createElement(a.a, {
					className: p.a.icon
				}), t.modModeEnabled ? Object(i.c)("Tip") : Object(i.c)("Tip Creator"))
			}), d.a.Post)
		},
		"./src/reddit/components/Economics/EntryPoints/tooltipWrapper/PaymentReaction/index.m.less": function(t, e, n) {
			t.exports = {
				container: "_29hSPzmaIfiSxXCwOgl9nv",
				anim: "_3FCWmng2PtVz4S6o199Vck",
				icon: "_3FsMmNzhrk41p2D1szfijw",
				pill: "_1L_GuzUvYSyjb91nxCNZzE"
			}
		},
		"./src/reddit/components/Economics/EntryPoints/tooltipWrapper/index.m.less": function(t, e, n) {
			t.exports = {
				container: "_3O4_KTZzaGIIbIPKl6RKqQ",
				tooltip: "ipuIu01PVYgRLGNOfxtII",
				tooltipAbove: "_1S__RzyW6wXWYfvTLxrwA5",
				tooltipBelow: "_3tpqbzy0wNs2Juyk-tLWnO",
				tooltipPortal: "SE551HAliNwRBfeaeYV7I"
			}
		},
		"./src/reddit/components/Economics/EntryPoints/tooltipWrapper/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/higherOrderComponents/asTooltip.tsx"),
				c = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/Economics/Support/PaymentTooltip/index.tsx"),
				a = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/reddit/models/Payments/index.ts"),
				l = n("./src/reddit/selectors/telemetry.ts"),
				p = n("./src/lib/currency/centsToDollars/index.ts"),
				m = n("./src/lib/prettyPrintNumber/index.ts"),
				u = n("./src/reddit/icons/svgs/Dollar/index.tsx"),
				b = n("./src/reddit/components/Economics/EntryPoints/tooltipWrapper/PaymentReaction/index.m.less"),
				C = n.n(b);

			function x(t) {
				return s.a.createElement("div", {
					className: Object(c.a)(C.a.container, t.className)
				}, s.a.createElement("div", {
					className: C.a.pill
				}, s.a.createElement(u.a, {
					className: C.a.icon
				}), Object(m.a)(Object(p.a)(t.amount, !0))))
			}
			var h = n("./src/reddit/components/Economics/EntryPoints/tooltipWrapper/index.m.less"),
				y = n.n(h);

			function f() {
				return (f = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
					}
					return t
				}).apply(this, arguments)
			}
			n.d(e, "a", (function() {
				return w
			}));
			const g = 500,
				v = Object(r.a)(i.b);

			function w(t, e) {
				return Object(a.b)(class extends s.a.Component {
					constructor() {
						super(...arguments), this.ref = void 0, this.state = {
							successfulPaymentAmount: void 0,
							tooltipIsOpen: !1
						}, this.shouldRenderBelow = () => {
							if (this.ref) {
								const {
									top: t
								} = this.ref.getBoundingClientRect();
								return t <= g
							}
							return !1
						}, this.handleToggleTooltip = t => {
							this.setState(n => (n.tooltipIsOpen || this.props.sendEvent(t => Object.assign({
								source: "meta",
								action: "click",
								noun: "tip_button"
							}, l.defaults(t), {
								subreddit: l.subreddit(t)
							}, e === d.a.Comment ? {
								comment: l.comment(t, this.props.contentId)
							} : e === d.a.Post ? {
								post: l.post(t, this.props.contentId)
							} : {})), {
								successfulPaymentAmount: t,
								tooltipIsOpen: !n.tooltipIsOpen
							}))
						}
					}
					render() {
						const {
							contentId: n,
							subredditId: o,
							targetName: r
						} = this.props, a = this.shouldRenderBelow(), d = a ? i.a.Below : i.a.Above, l = "".concat(n, "-").concat(o, "-").concat(r);
						return s.a.createElement("div", {
							className: Object(c.a)(y.a.container, this.props.className),
							id: this.props.renderInPortal ? l : void 0,
							ref: t => {
								this.ref = t || void 0
							}
						}, s.a.createElement(t, f({}, this.props, {
							tooltipIsOpen: this.state.tooltipIsOpen,
							onToggleTooltip: () => this.handleToggleTooltip()
						})), this.state.tooltipIsOpen && (this.props.renderInPortal ? s.a.createElement(v, {
							isOpen: !0,
							position: i.a.Below,
							content: {
								id: this.props.contentId,
								type: e
							},
							className: y.a.tooltipPortal,
							subredditId: this.props.subredditId,
							targetName: r,
							targetPosition: ["center", "bottom"],
							tooltipId: l,
							tooltipPosition: ["center", "top"],
							onClose: this.handleToggleTooltip
						}) : s.a.createElement(i.b, {
							content: {
								id: this.props.contentId,
								type: e
							},
							className: Object(c.a)(y.a.tooltip, {
								[y.a.tooltipAbove]: !a,
								[y.a.tooltipBelow]: a
							}),
							position: d,
							subredditId: this.props.subredditId,
							targetName: r,
							onClose: this.handleToggleTooltip
						})), !!this.state.successfulPaymentAmount && s.a.createElement(x, {
							amount: this.state.successfulPaymentAmount
						}))
					}
				})
			}
		},
		"./src/reddit/contexts/ApiContext.tsx": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return i
			})), n.d(e, "b", (function() {
				return a
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);

			function r() {
				return (r = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
					}
					return t
				}).apply(this, arguments)
			}
			const c = {
					apiContext: () => {
						throw new Error("Component attempted to make an API request with no ApiContext")
					},
					gqlContext: () => {
						throw new Error("Component attempted to make an API request with no GqlContext")
					}
				},
				i = Object(o.createContext)(c);

			function a(t) {
				return e => s.a.createElement(i.Consumer, null, n => {
					let {
						apiContext: o,
						gqlContext: c
					} = n;
					return s.a.createElement(t, r({
						apiContext: o,
						gqlContext: c
					}, e))
				})
			}
		},
		"./src/reddit/controls/Checkbox/index.m.less": function(t, e, n) {
			t.exports = {
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
		"./src/reddit/controls/Checkbox/index.tsx": function(t, e, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.symbol.js");
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/icons/svgs/Checkbox/index.tsx");

			function i() {
				return (i = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
					}
					return t
				}).apply(this, arguments)
			}
			var a = t => s.a.createElement("svg", i({
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, t), s.a.createElement("g", {
					transform: "translate(-32.000000, -173.000000)"
				}, s.a.createElement("g", {
					transform: "translate(32.000000, 173.000000)"
				}, s.a.createElement("path", {
					d: "M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z M4.5,8.5 C4.22385763,8.5 4,8.72385763 4,9 L4,11 C4,11.2761424 4.22385763,11.5 4.5,11.5 L15.5,11.5 C15.7761424,11.5 16,11.2761424 16,11 L16,9 C16,8.72385763 15.7761424,8.5 15.5,8.5 L4.5,8.5 Z"
				})))),
				d = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				l = n("./src/reddit/controls/Checkbox/index.m.less"),
				p = n.n(l);

			function m() {
				return (m = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
					}
					return t
				}).apply(this, arguments)
			}
			var u = function(t, e) {
				var n = {};
				for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && e.indexOf(o) < 0 && (n[o] = t[o]);
				if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (o = Object.getOwnPropertySymbols(t); s < o.length; s++) e.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, o[s]) && (n[o[s]] = t[o[s]])
				}
				return n
			};
			const b = t => e => {
					const {
						className: n,
						disabled: o,
						redditStyle: c,
						"data-redditstyle": i
					} = e, a = u(e, ["className", "disabled", "redditStyle", "data-redditstyle"]), d = ((t, e, n) => {
						const o = !(!e && !n);
						let s = "";
						return s = t ? o ? p.a.mDisabledRedditStyle : p.a.mDisabled : o ? p.a.mActiveRedditStyle : p.a.mActive
					})(o, c, i);
					return s.a.createElement(t, m({
						className: Object(r.a)(p.a.Checkbox, d, n)
					}, a))
				},
				C = b(d.a),
				x = b(a);
			e.a = t => {
				const e = t.isHalfCheckboxSelected ? x : t.isCheckboxSelected ? C : c.a;
				return s.a.createElement("button", {
					"aria-checked": t.isHalfCheckboxSelected ? "mixed" : t.isCheckboxSelected,
					className: t.className,
					onClick: e => {
						t.toggleCheckbox && (e.stopPropagation(), t.toggleCheckbox())
					},
					disabled: t.disabled
				}, s.a.createElement(e, {
					className: Object(r.a)(p.a.CheckboxSizing, t.className),
					"data-redditstyle": t.redditStyle,
					disabled: t.disabled,
					style: t.checkBoxStyle
				}))
			}
		},
		"./src/reddit/endpoints/economics/paymentSystems.ts": function(t, e, n) {
			"use strict";
			n.d(e, "e", (function() {
				return r
			})), n.d(e, "a", (function() {
				return c
			})), n.d(e, "d", (function() {
				return i
			})), n.d(e, "b", (function() {
				return a
			})), n.d(e, "c", (function() {
				return d
			}));
			var o = n("./src/config.ts"),
				s = n("./src/reddit/endpoints/governance/requester.ts");

			function r(t) {
				return Object(s.a)(t, {
					endpoint: "".concat(o.a.metaUrl, "/ps/me/stripe-connect-links"),
					method: "post"
				})
			}

			function c(t, e) {
				return Object(s.a)(t, {
					endpoint: "".concat(o.a.metaUrl, "/ps/me"),
					method: "patch",
					data: {
						stripe: {
							authorization: Object.assign({}, e, {
								scope: "read_write"
							})
						}
					}
				})
			}

			function i(t) {
				return Object(s.a)(t, {
					endpoint: "".concat(o.a.metaUrl, "/ps/me"),
					method: "get"
				})
			}

			function a(t, e) {
				return Object(s.a)(t, {
					endpoint: "".concat(o.a.metaUrl, "/ps/me/stripe-sources/").concat(e),
					method: "delete"
				})
			}

			function d(t, e) {
				return Object(s.a)(t, {
					endpoint: "".concat(o.a.metaUrl, "/ps/me/braintree-sources/").concat(e),
					method: "delete"
				})
			}
		},
		"./src/reddit/helpers/loadThirdPartyScript.ts": function(t, e, n) {
			"use strict";
			n.d(e, "c", (function() {
				return d
			})), n.d(e, "b", (function() {
				return l
			})), n.d(e, "a", (function() {
				return p
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./src/config.ts"),
				s = n("./src/lib/fastdom/index.ts");
			const r = "https://js.stripe.com/v3/",
				c = "https://www.paypalobjects.com/api/checkout.js",
				i = {
					checkout: "https://js.braintreegateway.com/web/3.44.2/js/paypal-checkout.min.js",
					client: "https://js.braintreegateway.com/web/3.44.2/js/client.min.js",
					paypal: "https://www.paypal.com/sdk/js?client-id=".concat(o.a.paypal.braintreeApiKey) + "&currency=USD&vault=true"
				};

			function a(t, e) {
				return e() ? Promise.resolve() : new Promise((n, o) => s.a.write(() => {
					e() && n();
					const o = document.head;
					let s = o.querySelector("script[src='".concat(t, "']"));
					s || ((s = document.createElement("script")).src = t, o.appendChild(s)), s.addEventListener("load", (function t() {
						this.removeEventListener("load", t), n()
					}))
				}))
			}

			function d() {
				return a(r, () => "undefined" != typeof Stripe)
			}

			function l() {
				return a(c, () => "undefined" != typeof paypalCheckout).then(() => {
					"undefined" == typeof paypalCheckout && "undefined" != typeof window && (window.paypalCheckout = paypal), paypal = void 0
				})
			}

			function p() {
				return Promise.all(Object.keys(i).map(t => {
					const e = "__" + t;
					return a(i[t], () => void 0 !== window[e]).then(() => {
						window[e] = !0
					})
				}))
			}
		},
		"./src/reddit/icons/svgs/Dollar/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			e.a = t => s.a.createElement("svg", {
				className: t.className,
				id: t.id,
				viewBox: "0 0 13 13",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M1.90108 1.90127C4.43662 -0.633374 8.5628 -0.634139 11.0983 1.90127C13.6339 4.43668 13.6339 8.56265 11.0983 11.0981C9.83057 12.3665 8.16495 13 6.5001 13C4.83447 13 3.16885 12.3665 1.90108 11.0981C-0.633694 8.56265 -0.633694 4.43668 1.90108 1.90127ZM5.96831 9.9002V10.8202H7.04991V9.8602C7.68242 9.74686 8.14731 9.50353 8.44459 9.1302C8.7482 8.75686 8.9 8.32353 8.9 7.8302C8.9 7.31686 8.73871 6.9102 8.41613 6.6102C8.09987 6.3102 7.60652 6.0802 6.93605 5.9202V4.2602C7.16376 4.31353 7.35667 4.39353 7.5148 4.5002C7.67293 4.60686 7.80892 4.72686 7.92277 4.8602L8.78615 4.0402C8.57742 3.78686 8.33074 3.58686 8.04611 3.4402C7.76148 3.28686 7.42941 3.18686 7.04991 3.14019V2.2002H5.96831V3.14019C5.35478 3.21353 4.88672 3.41686 4.56414 3.7502C4.24788 4.08353 4.08975 4.51353 4.08975 5.0402C4.08975 5.52686 4.24472 5.93353 4.55465 6.2602C4.86458 6.58686 5.37691 6.82686 6.09165 6.9802V8.7802C5.826 8.7402 5.58248 8.65686 5.3611 8.5302C5.13972 8.39686 4.93732 8.2302 4.75389 8.0302L3.9 8.8502C4.14035 9.1302 4.42498 9.36353 4.75389 9.5502C5.0828 9.73686 5.4876 9.85353 5.96831 9.9002ZM5.56034 5.4502C5.45282 5.34353 5.39905 5.19353 5.39905 5.0002C5.39905 4.80686 5.45282 4.64686 5.56034 4.5202C5.67419 4.38686 5.8513 4.29353 6.09165 4.2402V5.7202C5.8513 5.64686 5.67419 5.55686 5.56034 5.4502ZM7.46736 7.5202C7.54959 7.65353 7.5907 7.79353 7.5907 7.9402C7.5907 8.13353 7.53694 8.30353 7.42941 8.4502C7.32188 8.5902 7.15743 8.69353 6.93605 8.7602V7.1802C7.20803 7.26686 7.38514 7.3802 7.46736 7.5202Z"
			})))
		},
		"./src/reddit/icons/svgs/Dropdown/index.m.less": function(t, e, n) {
			t.exports = {
				dropdown: "XHbKeEqnW58ib9mTN6jnS",
				mRedditStyle: "u_kypUXmB-k1A5TcC8MI9"
			}
		},
		"./src/reddit/icons/svgs/Dropdown/index.tsx": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return a
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				i = n.n(c);
			const a = t => s.a.createElement("svg", {
				className: Object(r.a)(t.className, i.a.dropdown, {
					[i.a.mRedditStyle]: !t.isSubreddit
				}),
				style: t.style,
				onClick: t.onClick,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
			}));
			e.b = a
		},
		"./src/reddit/icons/svgs/Info/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			e.a = t => s.a.createElement("svg", {
				className: t.className,
				style: t.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: t.onClick
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M10,8.5 C10.553,8.5 11,8.948 11,9.5 L11,13.5 C11,14.052 10.553,14.5 10,14.5 C9.447,14.5 9,14.052 9,13.5 L9,9.5 C9,8.948 9.447,8.5 10,8.5 Z M10.7002,5.79 C10.8012,5.89 10.8702,6 10.9212,6.12 C10.9712,6.24 11.0002,6.37 11.0002,6.5 C11.0002,6.57 10.9902,6.63 10.9802,6.7 C10.9712,6.76 10.9502,6.82 10.9212,6.88 C10.9002,6.94 10.8702,7 10.8302,7.05 C10.7902,7.11 10.7502,7.16 10.7002,7.21 C10.6602,7.25 10.6102,7.29 10.5512,7.33 C10.5002,7.37 10.4402,7.4 10.3812,7.42 C10.3202,7.45 10.2612,7.47 10.1902,7.48 C10.1312,7.49 10.0602,7.5 10.0002,7.5 C9.7402,7.5 9.4802,7.39 9.2902,7.21 C9.1102,7.02 9.0002,6.77 9.0002,6.5 C9.0002,6.37 9.0302,6.24 9.0802,6.12 C9.1312,5.99 9.2002,5.89 9.2902,5.79 C9.5202,5.56 9.8702,5.46 10.1902,5.52 C10.2612,5.53 10.3202,5.55 10.3812,5.58 C10.4402,5.6 10.5002,5.63 10.5512,5.67 C10.6102,5.71 10.6602,5.75 10.7002,5.79 Z M10,16 C6.691,16 4,13.309 4,10 C4,6.691 6.691,4 10,4 C13.309,4 16,6.691 16,10 C16,13.309 13.309,16 10,16 M10,2 C5.589,2 2,5.589 2,10 C2,14.411 5.589,18 10,18 C14.411,18 18,14.411 18,10 C18,5.589 14.411,2 10,2"
			})))
		}
	}
]);
//# sourceMappingURL=EconomicsEntryPointsPostFlatlistSupportCTA.b4794cf5217c00059fb1.js.map