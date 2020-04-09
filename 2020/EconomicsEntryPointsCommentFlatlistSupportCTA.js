// https://www.redditstatic.com/desktop2x/EconomicsEntryPointsCommentFlatlistSupportCTA.be0204b9c532d4c1d5b3.js
// Retrieved at 4/9/2020, 2:30:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EconomicsEntryPointsCommentFlatlistSupportCTA"], {
		"./src/reddit/components/Economics/EntryPoints/CommentFlatlistSupportCTA/index.m.less": function(t, e, o) {
			t.exports = {
				button: "_2UNPRWF_2loDdny-u6MUHy"
			}
		},
		"./src/reddit/components/Economics/EntryPoints/CommentFlatlistSupportCTA/index.tsx": function(t, e, o) {
			"use strict";
			o.r(e);
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./src/lib/classNames/index.ts"),
				i = o("./node_modules/react/index.js"),
				r = o.n(i),
				c = o("./src/reddit/components/Economics/EntryPoints/tooltipWrapper/index.tsx"),
				a = o("./src/reddit/models/Payments/index.ts"),
				l = o("./src/reddit/components/Economics/EntryPoints/CommentFlatlistSupportCTA/index.m.less"),
				d = o.n(l);
			e.default = Object(c.a)((function(t) {
				return r.a.createElement("button", {
					className: Object(s.a)(d.a.button),
					onClick: t.onToggleTooltip
				}, n.fbt._("Tip Creator", null, {
					hk: "20gWdm"
				}))
			}), a.a.Comment)
		},
		"./src/reddit/components/Economics/EntryPoints/tooltipWrapper/PaymentReaction/index.m.less": function(t, e, o) {
			t.exports = {
				container: "_29hSPzmaIfiSxXCwOgl9nv",
				anim: "_3FCWmng2PtVz4S6o199Vck",
				icon: "_3FsMmNzhrk41p2D1szfijw",
				pill: "_1L_GuzUvYSyjb91nxCNZzE"
			}
		},
		"./src/reddit/components/Economics/EntryPoints/tooltipWrapper/index.m.less": function(t, e, o) {
			t.exports = {
				container: "_3O4_KTZzaGIIbIPKl6RKqQ",
				tooltip: "ipuIu01PVYgRLGNOfxtII",
				tooltipAbove: "_1S__RzyW6wXWYfvTLxrwA5",
				tooltipBelow: "_3tpqbzy0wNs2Juyk-tLWnO",
				tooltipPortal: "SE551HAliNwRBfeaeYV7I"
			}
		},
		"./src/reddit/components/Economics/EntryPoints/tooltipWrapper/index.tsx": function(t, e, o) {
			"use strict";
			o.d(e, "a", (function() {
				return y
			}));
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				i = o("./src/higherOrderComponents/asTooltip.tsx"),
				r = o("./src/lib/classNames/index.ts"),
				c = o("./src/reddit/components/Economics/Support/PaymentTooltip/index.tsx"),
				a = o("./src/reddit/components/TrackingHelper/index.tsx"),
				l = o("./src/reddit/models/Payments/index.ts"),
				d = o("./src/reddit/selectors/telemetry.ts"),
				p = o("./src/lib/currency/centsToDollars/index.ts"),
				m = o("./src/lib/prettyPrintNumber/index.ts"),
				u = o("./src/reddit/icons/svgs/Dollar/index.tsx"),
				C = o("./src/reddit/components/Economics/EntryPoints/tooltipWrapper/PaymentReaction/index.m.less"),
				h = o.n(C);

			function b(t) {
				return s.a.createElement("div", {
					className: Object(r.a)(h.a.container, t.className)
				}, s.a.createElement("div", {
					className: h.a.pill
				}, s.a.createElement(u.a, {
					className: h.a.icon
				}), Object(m.a)(Object(p.a)(t.amount, !0))))
			}
			var x = o("./src/reddit/components/Economics/EntryPoints/tooltipWrapper/index.m.less"),
				E = o.n(x);

			function f() {
				return (f = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var o = arguments[e];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (t[n] = o[n])
					}
					return t
				}).apply(this, arguments)
			}
			const P = 500,
				g = Object(i.a)(c.b);

			function y(t, e) {
				return Object(a.c)(class extends s.a.Component {
					constructor() {
						super(...arguments), this.ref = void 0, this.state = {
							successfulPaymentAmount: void 0,
							tooltipIsOpen: !1
						}, this.shouldRenderBelow = () => {
							if (this.ref) {
								const {
									top: t
								} = this.ref.getBoundingClientRect();
								return t <= P
							}
							return !1
						}, this.handleToggleTooltip = t => {
							this.setState(o => (o.tooltipIsOpen || this.props.sendEvent(t => Object.assign({
								source: "meta",
								action: "click",
								noun: "tip_button"
							}, d.defaults(t), {
								subreddit: d.subreddit(t)
							}, e === l.a.Comment ? {
								comment: d.comment(t, this.props.contentId)
							} : e === l.a.Post ? {
								post: d.post(t, this.props.contentId)
							} : {})), {
								successfulPaymentAmount: t,
								tooltipIsOpen: !o.tooltipIsOpen
							}))
						}
					}
					render() {
						const {
							contentId: o,
							subredditId: n,
							targetName: i
						} = this.props, a = this.shouldRenderBelow(), l = a ? c.a.Below : c.a.Above, d = "".concat(o, "-").concat(n, "-").concat(i);
						return s.a.createElement("div", {
							className: Object(r.a)(E.a.container, this.props.className),
							id: this.props.renderInPortal ? d : void 0,
							ref: t => {
								this.ref = t || void 0
							}
						}, s.a.createElement(t, f({}, this.props, {
							tooltipIsOpen: this.state.tooltipIsOpen,
							onToggleTooltip: () => this.handleToggleTooltip()
						})), this.state.tooltipIsOpen && (this.props.renderInPortal ? s.a.createElement(g, {
							isOpen: !0,
							position: c.a.Below,
							content: {
								id: this.props.contentId,
								type: e
							},
							className: E.a.tooltipPortal,
							subredditId: this.props.subredditId,
							targetName: i,
							targetPosition: ["center", "bottom"],
							tooltipId: d,
							tooltipPosition: ["center", "top"],
							onClose: this.handleToggleTooltip
						}) : s.a.createElement(c.b, {
							content: {
								id: this.props.contentId,
								type: e
							},
							className: Object(r.a)(E.a.tooltip, {
								[E.a.tooltipAbove]: !a,
								[E.a.tooltipBelow]: a
							}),
							position: l,
							subredditId: this.props.subredditId,
							targetName: i,
							onClose: this.handleToggleTooltip
						})), !!this.state.successfulPaymentAmount && s.a.createElement(b, {
							amount: this.state.successfulPaymentAmount
						}))
					}
				})
			}
		},
		"./src/reddit/icons/svgs/Dollar/index.tsx": function(t, e, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n);
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
		}
	}
]);
//# sourceMappingURL=EconomicsEntryPointsCommentFlatlistSupportCTA.be0204b9c532d4c1d5b3.js.map