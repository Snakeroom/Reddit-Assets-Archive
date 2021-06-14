// https://www.redditstatic.com/desktop2x/OverlayKickUser.31ba9905474005211986.js
// Retrieved at 6/14/2021, 12:30:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["OverlayKickUser"], {
		"./src/chat/components/OverlayKickUser/index.m.less": function(e, t, n) {
			e.exports = {
				SubHeader: "jGKnqvkzsltpANG0DJlgO",
				subHeader: "jGKnqvkzsltpANG0DJlgO",
				Title: "_3Ra9KcBL07oH70jU3LOAXh",
				title: "_3Ra9KcBL07oH70jU3LOAXh",
				Header: "_1Tqno2ajLSYCm3V_okJFQ8",
				header: "_1Tqno2ajLSYCm3V_okJFQ8",
				Checkbox: "WElCAKjceOsUlyjpoY3xB",
				checkbox: "WElCAKjceOsUlyjpoY3xB",
				ListItem: "_2_OE0sk8Db21HH8QSRH1Bx",
				listItem: "_2_OE0sk8Db21HH8QSRH1Bx",
				OverlayContent: "_33MAHgxzLWMgmJnRELO8em",
				overlayContent: "_33MAHgxzLWMgmJnRELO8em"
			}
		},
		"./src/chat/components/OverlayKickUser/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				c = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				l = n("./src/lib/lessComponent.tsx"),
				o = n("./src/chat/actions/tracking.ts"),
				i = n("./src/chat/actions/user.ts"),
				d = n("./src/chat/components/OverlayNav/index.tsx"),
				m = n("./src/chat/components/Scroller/index.tsx"),
				h = n("./src/chat/controls/Checkbox/index.tsx"),
				u = n("./src/chat/controls/Overlay/index.tsx"),
				p = n("./src/chat/controls/OverlayControlBar/index.tsx"),
				y = n("./src/chat/helpers/chatSelector.ts"),
				b = n("./src/chat/helpers/dom.ts"),
				C = n("./src/chat/routes/chat.ts"),
				O = n("./src/chat/components/OverlayKickUser/index.m.less"),
				k = n.n(O);
			const _ = "kickUser",
				x = l.a.p("SubHeader", k.a),
				E = l.a.span("Title", k.a),
				v = l.a.span("Header", k.a),
				f = l.a.wrapped(h.a, "Checkbox", k.a),
				j = l.a.div("ListItem", k.a),
				g = l.a.div("OverlayContent", k.a);
			var B;
			! function(e) {
				e[e.TenMins = 600] = "TenMins", e[e.OneHour = 3600] = "OneHour", e[e.OneDay = 86400] = "OneDay", e[e.ThreeDays = 259200] = "ThreeDays", e[e.Permanently = -1] = "Permanently"
			}(B || (B = {}));
			const S = () => ({
					[B.TenMins]: a.fbt._("10 minutes", null, {
						hk: "3y8skZ"
					}),
					[B.OneHour]: a.fbt._("1 hour", null, {
						hk: "mgKhy"
					}),
					[B.OneDay]: a.fbt._("1 day", null, {
						hk: "37HQV9"
					}),
					[B.ThreeDays]: a.fbt._("3 days", null, {
						hk: "2R7GCT"
					}),
					[B.Permanently]: a.fbt._("Permanently", null, {
						hk: "2CHcpm"
					})
				}),
				L = Object(y.a)({
					message: (e, t) => t.attr === C.a.Message ? e.messages.models[t.attrId] : void 0,
					user: (e, t) => t.attr === C.a.User ? e.contacts.models[t.attrId] : void 0
				}),
				H = Object(s.b)(L, e => ({
					onKickUser: (t, n, a) => {
						e(Object(i.p)(t, n, a)), e(Object(o.E)(a))
					}
				}));
			class K extends r.Component {
				constructor(e) {
					super(e), this.onSubmit = e => {
						const {
							attrId: t,
							channelId: n,
							onKickUser: a
						} = this.props;
						e.target[_].forEach(({
							checked: e,
							value: r
						}) => {
							if (e) {
								const e = Number(r);
								a(n, t, e)
							}
						})
					}, this.renderIntro = this.renderIntro.bind(this)
				}
				renderIntro() {
					const {
						message: e,
						user: t
					} = this.props, n = e && e.sender ? e.sender.nickname : t ? "u/" + t.name : "this user";
					return c.a.createElement(c.a.Fragment, null, c.a.createElement(v, null, a.fbt._("Are you sure you want to kick {username} from this room?", [a.fbt._param("username", n)], {
						hk: "n1L3B"
					})), c.a.createElement(x, null, a.fbt._("They'll be able to join again once the kick duration is over.", null, {
						hk: "4zi1U1"
					})))
				}
				render() {
					const e = S(),
						{
							channelId: t
						} = this.props;
					return c.a.createElement(u.a, {
						onSubmit: Object(b.a)(this.onSubmit),
						form: !0,
						innerContent: !0
					}, c.a.createElement(d.a, {
						channelId: t,
						title: a.fbt._("Confirm Kick", null, {
							hk: "1upcSi"
						})
					}), c.a.createElement(g, null, c.a.createElement(m.b, null, this.renderIntro(), c.a.createElement(E, null, a.fbt._("Kick Duration", null, {
						hk: "4nENS8"
					})), Object.keys(e).map(t => c.a.createElement(j, {
						key: t
					}, c.a.createElement(f, {
						type: "radio",
						name: _,
						value: t
					}, e[t]))))), c.a.createElement(p.a, {
						primaryButtonText: a.fbt._("Kick", null, {
							hk: "10O2jX"
						}),
						secondaryButtonText: a.fbt._("Cancel", null, {
							hk: "2TSLl5"
						})
					}))
				}
			}
			t.default = H(K)
		},
		"./src/chat/controls/Checkbox/index.m.less": function(e, t, n) {
			e.exports = {
				CheckInput: "_1_de1ouiEaWxe0lu0R54Zf",
				checkInput: "_1_de1ouiEaWxe0lu0R54Zf",
				Content: "_1RHO7h5PWuKEmC8QD2KnOB",
				content: "_1RHO7h5PWuKEmC8QD2KnOB",
				Control: "aKXv6qpFIjz-_IZOZsYLz",
				control: "aKXv6qpFIjz-_IZOZsYLz",
				HiddenInput: "_3Q1_Do5LHdBSUlaIowvrfb",
				hiddenInput: "_3Q1_Do5LHdBSUlaIowvrfb",
				Checked: "_2rAAUOr_BEoWHcPUCIHPl_",
				checked: "_2rAAUOr_BEoWHcPUCIHPl_",
				Unchecked: "lKC5fIFqmLCg9yYtpR5rw",
				unchecked: "lKC5fIFqmLCg9yYtpR5rw",
				Wrapper: "_1SMteSSKECXjIaZTOLZ2z-",
				wrapper: "_1SMteSSKECXjIaZTOLZ2z-"
			}
		},
		"./src/chat/controls/Checkbox/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				c = n("./src/lib/classNames/index.ts"),
				s = n("./src/lib/lessComponent.tsx"),
				l = n("./src/chat/controls/Svg/index.tsx"),
				o = n("./src/chat/icons/svgs/Checkbox/checked.m.less"),
				i = n.n(o);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const m = s.a.wrapped(e => r.a.createElement("circle", {
					className: e.className,
					cy: "10",
					cx: "10",
					r: "10"
				}), "StyledCircle", i.a),
				h = s.a.wrapped(e => r.a.createElement("path", {
					className: e.className,
					d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z"
				}), "StyledCheckmark", i.a);
			var u = e => r.a.createElement(l.a, d({}, e, {
					viewBox: "0 0 20 20"
				}), r.a.createElement("g", null, r.a.createElement(m, null), r.a.createElement(h, null))),
				p = n("./src/chat/icons/svgs/Checkbox/unchecked.m.less"),
				y = n.n(p);

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const C = s.a.wrapped(e => r.a.createElement("circle", {
				className: e.className,
				cy: "10",
				cx: "10",
				r: "9"
			}), "StyledCircle", y.a);
			var O = e => r.a.createElement(l.a, b({}, e, {
					viewBox: "0 0 20 20"
				}), r.a.createElement("g", null, r.a.createElement(C, null))),
				k = n("./src/chat/controls/Checkbox/index.m.less"),
				_ = n.n(k);
			const x = s.a.input("HiddenInput", _.a),
				E = s.a.wrapped(u, "Checked", _.a),
				v = s.a.wrapped(O, "Unchecked", _.a),
				f = s.a.span("Wrapper", _.a),
				j = s.a.span("Content", _.a),
				g = s.a.span("Control", _.a),
				B = s.a.label("CheckInput", _.a);
			t.a = e => r.a.createElement(B, {
				className: Object(c.a)(e.className, {
					[_.a.checked]: e.checked
				}),
				style: {
					height: e.height || void 0,
					width: e.width || void 0
				}
			}, r.a.createElement(f, null, e.children && !e.rightPosition && r.a.createElement(j, null, e.children), r.a.createElement(g, null, r.a.createElement(x, {
				tabIndex: 0,
				type: e.type || "checkbox",
				checked: e.checked,
				disabled: e.disabled,
				name: e.name,
				value: e.value,
				onChange: e.onChange,
				id: e.id
			}), r.a.createElement(E, null), r.a.createElement(v, null)), e.children && e.rightPosition && r.a.createElement(j, null, e.children)))
		},
		"./src/chat/controls/OverlayControlBar/index.m.less": function(e, t, n) {
			e.exports = {
				Button: "jKsK0jQWRidPglQ7Czk8y",
				button: "jKsK0jQWRidPglQ7Czk8y",
				OverlayControlBar: "_3GhQcGD7m0hf9mkUK6I1JG",
				overlayControlBar: "_3GhQcGD7m0hf9mkUK6I1JG",
				primary: "_3fM86Pr7r-ObXeea2Dms_o"
			}
		},
		"./src/chat/controls/OverlayControlBar/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				c = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				l = n("./node_modules/react-router-redux/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				d = n("./src/chat/controls/Button/index.tsx"),
				m = n("./src/chat/helpers/dom.ts"),
				h = n("./src/chat/controls/OverlayControlBar/index.m.less"),
				u = n.n(h);
			const p = i.a.wrapped(d.a, "Button", u.a),
				y = Object(s.b)(void 0, e => ({
					onSubmit: () => {},
					onCancel: Object(m.b)(() => e(Object(l.a)()))
				})),
				b = i.a.div("OverlayControlBar", u.a),
				C = y(e => c.a.createElement(b, {
					className: Object(o.a)({
						[u.a.primary]: e.primaryButtonOnly
					}, e.className)
				}, !e.primaryButtonOnly && (e.secondaryButtonCTLOptions ? c.a.createElement(p, {
					href: "https://www.reddithelp.com/en/categories/rules-reporting/suicide-response/what-do-i-do-if-someone-talks-about-seriously-hurting",
					secondary: !0
				}, a.fbt._("Other Options", null, {
					hk: "1RadlV"
				})) : c.a.createElement(p, {
					onClick: e.secondaryButtonAction || e.onCancel,
					primary: !!e.secondaryButtonOnly,
					secondary: !e.secondaryButtonOnly
				}, e.secondaryButtonText || a.fbt._("Cancel", null, {
					hk: "2TSLl5"
				}))), !e.secondaryButtonOnly && c.a.createElement(p, {
					type: "submit",
					primary: !0,
					onClick: e.primaryButtonAction || e.onSubmit,
					disabled: e.primaryButtonDisabled
				}, e.primaryButtonText || a.fbt._("Submit", null, {
					hk: "2Iwjdv"
				}))));
			C.displayName = "OverlayControlBar", t.a = C
		},
		"./src/chat/icons/svgs/Checkbox/checked.m.less": function(e, t, n) {
			e.exports = {
				StyledCircle: "_2QEVbfgOdAh_E_UteGSdz9",
				styledCircle: "_2QEVbfgOdAh_E_UteGSdz9",
				StyledCheckmark: "_2hHL8LCEXapDOjiChO0JWH",
				styledCheckmark: "_2hHL8LCEXapDOjiChO0JWH"
			}
		},
		"./src/chat/icons/svgs/Checkbox/unchecked.m.less": function(e, t, n) {
			e.exports = {
				StyledCircle: "_2WDOoyLYNQZODKF6ScpgSO",
				styledCircle: "_2WDOoyLYNQZODKF6ScpgSO"
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/OverlayKickUser.31ba9905474005211986.js.map