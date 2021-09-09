// https://www.redditstatic.com/desktop2x/OverlayKickUser.3c662ba9225a37397007.js
// Retrieved at 9/9/2021, 7:40:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["OverlayKickUser"], {
		"./src/chat/components/OverlayKickUser/index.m.less": function(e, t, a) {
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
		"./src/chat/components/OverlayKickUser/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			a("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = a("./node_modules/fbt/lib/FbtPublic.js"),
				r = a("./node_modules/react/index.js"),
				c = a.n(r),
				s = a("./node_modules/react-redux/es/index.js"),
				o = a("./src/lib/lessComponent.tsx"),
				l = a("./src/chat/actions/tracking.ts"),
				i = a("./src/chat/actions/user.ts"),
				d = a("./src/chat/components/OverlayNav/index.tsx"),
				u = a("./src/chat/components/Scroller/index.tsx"),
				m = a("./src/chat/controls/Checkbox/index.tsx"),
				h = a("./src/chat/controls/Overlay/index.tsx"),
				p = a("./src/chat/controls/OverlayControlBar/index.tsx"),
				k = a("./src/chat/helpers/chatSelector.ts"),
				y = a("./src/chat/helpers/dom.ts"),
				b = a("./src/chat/routes/chat.ts"),
				_ = a("./src/chat/components/OverlayKickUser/index.m.less"),
				O = a.n(_);
			const C = "kickUser",
				x = o.a.p("SubHeader", O.a),
				E = o.a.span("Title", O.a),
				B = o.a.span("Header", O.a),
				v = o.a.wrapped(m.a, "Checkbox", O.a),
				f = o.a.div("ListItem", O.a),
				g = o.a.div("OverlayContent", O.a);
			var j;
			! function(e) {
				e[e.TenMins = 600] = "TenMins", e[e.OneHour = 3600] = "OneHour", e[e.OneDay = 86400] = "OneDay", e[e.ThreeDays = 259200] = "ThreeDays", e[e.Permanently = -1] = "Permanently"
			}(j || (j = {}));
			const H = () => ({
					[j.TenMins]: n.fbt._("10 minutes", null, {
						hk: "3y8skZ"
					}),
					[j.OneHour]: n.fbt._("1 hour", null, {
						hk: "mgKhy"
					}),
					[j.OneDay]: n.fbt._("1 day", null, {
						hk: "37HQV9"
					}),
					[j.ThreeDays]: n.fbt._("3 days", null, {
						hk: "2R7GCT"
					}),
					[j.Permanently]: n.fbt._("Permanently", null, {
						hk: "2CHcpm"
					})
				}),
				L = Object(k.a)({
					message: (e, t) => t.attr === b.a.Message ? e.messages.models[t.attrId] : void 0,
					user: (e, t) => t.attr === b.a.User ? e.contacts.models[t.attrId] : void 0
				}),
				S = Object(s.b)(L, e => ({
					onKickUser: (t, a, n) => {
						e(Object(i.p)(t, a, n)), e(Object(l.G)(n))
					}
				}));
			class K extends r.Component {
				constructor(e) {
					super(e), this.onSubmit = e => {
						const {
							attrId: t,
							channelId: a,
							onKickUser: n
						} = this.props;
						e.target[C].forEach(({
							checked: e,
							value: r
						}) => {
							if (e) {
								const e = Number(r);
								n(a, t, e)
							}
						})
					}, this.renderIntro = this.renderIntro.bind(this)
				}
				renderIntro() {
					const {
						message: e,
						user: t
					} = this.props, a = e && e.sender ? e.sender.nickname : t ? "u/" + t.name : "this user";
					return c.a.createElement(c.a.Fragment, null, c.a.createElement(B, null, n.fbt._("Are you sure you want to kick {username} from this room?", [n.fbt._param("username", a)], {
						hk: "n1L3B"
					})), c.a.createElement(x, null, n.fbt._("They'll be able to join again once the kick duration is over.", null, {
						hk: "4zi1U1"
					})))
				}
				render() {
					const e = H(),
						{
							channelId: t
						} = this.props;
					return c.a.createElement(h.a, {
						onSubmit: Object(y.a)(this.onSubmit),
						form: !0,
						innerContent: !0
					}, c.a.createElement(d.a, {
						channelId: t,
						title: n.fbt._("Confirm Kick", null, {
							hk: "1upcSi"
						})
					}), c.a.createElement(g, null, c.a.createElement(u.b, null, this.renderIntro(), c.a.createElement(E, null, n.fbt._("Kick Duration", null, {
						hk: "4nENS8"
					})), Object.keys(e).map(t => c.a.createElement(f, {
						key: t
					}, c.a.createElement(v, {
						type: "radio",
						name: C,
						value: t
					}, e[t]))))), c.a.createElement(p.a, {
						primaryButtonText: n.fbt._("Kick", null, {
							hk: "10O2jX"
						}),
						secondaryButtonText: n.fbt._("Cancel", null, {
							hk: "2TSLl5"
						})
					}))
				}
			}
			t.default = S(K)
		},
		"./src/chat/controls/Checkbox/index.m.less": function(e, t, a) {
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
		"./src/chat/controls/Checkbox/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				r = a.n(n),
				c = a("./src/lib/classNames/index.ts"),
				s = a("./src/lib/lessComponent.tsx"),
				o = a("./src/chat/controls/Svg/index.tsx"),
				l = a("./src/chat/icons/svgs/Checkbox/checked.m.less"),
				i = a.n(l);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
					}
					return e
				}).apply(this, arguments)
			}
			const u = s.a.wrapped(e => r.a.createElement("circle", {
					className: e.className,
					cy: "10",
					cx: "10",
					r: "10"
				}), "StyledCircle", i.a),
				m = s.a.wrapped(e => r.a.createElement("path", {
					className: e.className,
					d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z"
				}), "StyledCheckmark", i.a);
			var h = e => r.a.createElement(o.a, d({}, e, {
					viewBox: "0 0 20 20"
				}), r.a.createElement("g", null, r.a.createElement(u, null), r.a.createElement(m, null))),
				p = a("./src/chat/icons/svgs/Checkbox/unchecked.m.less"),
				k = a.n(p);

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
					}
					return e
				}).apply(this, arguments)
			}
			const b = s.a.wrapped(e => r.a.createElement("circle", {
				className: e.className,
				cy: "10",
				cx: "10",
				r: "9"
			}), "StyledCircle", k.a);
			var _ = e => r.a.createElement(o.a, y({}, e, {
					viewBox: "0 0 20 20"
				}), r.a.createElement("g", null, r.a.createElement(b, null))),
				O = a("./src/chat/controls/Checkbox/index.m.less"),
				C = a.n(O);
			const x = s.a.input("HiddenInput", C.a),
				E = s.a.wrapped(h, "Checked", C.a),
				B = s.a.wrapped(_, "Unchecked", C.a),
				v = s.a.span("Wrapper", C.a),
				f = s.a.span("Content", C.a),
				g = s.a.span("Control", C.a),
				j = s.a.label("CheckInput", C.a);
			t.a = e => r.a.createElement(j, {
				className: Object(c.a)(e.className, {
					[C.a.checked]: e.checked
				}),
				style: {
					height: e.height || void 0,
					width: e.width || void 0
				}
			}, r.a.createElement(v, null, e.children && !e.rightPosition && r.a.createElement(f, null, e.children), r.a.createElement(g, null, r.a.createElement(x, {
				tabIndex: 0,
				type: e.type || "checkbox",
				checked: e.checked,
				disabled: e.disabled,
				name: e.name,
				value: e.value,
				onChange: e.onChange,
				id: e.id
			}), r.a.createElement(E, null), r.a.createElement(B, null)), e.children && e.rightPosition && r.a.createElement(f, null, e.children)))
		},
		"./src/chat/controls/OverlayControlBar/index.m.less": function(e, t, a) {
			e.exports = {
				Button: "jKsK0jQWRidPglQ7Czk8y",
				button: "jKsK0jQWRidPglQ7Czk8y",
				NoBorderPrimaryButton: "_2_xFtB6XsnUOGk0YPukDeu",
				noBorderPrimaryButton: "_2_xFtB6XsnUOGk0YPukDeu",
				OverlayControlBar: "_3GhQcGD7m0hf9mkUK6I1JG",
				overlayControlBar: "_3GhQcGD7m0hf9mkUK6I1JG",
				NoHeaderText: "_1KR6Li0ovE5q7gSH0Rl19G",
				noHeaderText: "_1KR6Li0ovE5q7gSH0Rl19G",
				ButtonsWrapper: "_2-kvEgGOQg3X-keFfUpUa",
				buttonsWrapper: "_2-kvEgGOQg3X-keFfUpUa",
				HeaderText: "_3kD8pfjcLZgRDsMewcOmc4",
				headerText: "_3kD8pfjcLZgRDsMewcOmc4"
			}
		},
		"./src/chat/controls/OverlayControlBar/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/fbt/lib/FbtPublic.js"),
				r = a("./node_modules/react/index.js"),
				c = a.n(r),
				s = a("./node_modules/react-redux/es/index.js"),
				o = a("./node_modules/react-router-redux/es/index.js"),
				l = a("./src/config.ts"),
				i = a("./src/lib/classNames/index.ts"),
				d = a("./src/chat/controls/Button/index.tsx"),
				u = a("./src/chat/controls/OverlayControlBar/index.m.less"),
				m = a.n(u),
				h = a("./src/chat/helpers/dom.ts");
			const p = Object(s.b)(void 0, e => ({
				onSubmit: () => {},
				onCancel: Object(h.b)(() => e(Object(o.a)()))
			}))(e => c.a.createElement("div", {
				className: Object(i.a)({
					[m.a.primary]: e.primaryButtonOnly,
					[m.a.NoHeaderText]: !e.children
				}, m.a.OverlayControlBar, e.className)
			}, e.children && c.a.createElement("span", {
				className: m.a.HeaderText
			}, e.children), c.a.createElement("div", {
				className: m.a.ButtonsWrapper
			}, e.primaryButtonBlock && c.a.createElement(d.a, {
				onClick: e.primaryButtonBlockAction || e.onCancel,
				className: Object(i.a)(m.a.Button, m.a.NoBorderPrimaryButton),
				secondary: !0,
				noBorder: !0
			}, e.primaryButtonBlockText || n.fbt._("Block", null, {
				hk: "4CA4VX"
			})), !e.primaryButtonOnly && (e.secondaryButtonCTLOptions ? c.a.createElement(d.a, {
				className: m.a.Button,
				href: `${l.a.redditHelpUrl}/en/categories/rules-reporting/suicide-response/what-do-i-do-if-someone-talks-about-seriously-hurting`,
				secondary: !0
			}, n.fbt._("Other Options", null, {
				hk: "1RadlV"
			})) : c.a.createElement(d.a, {
				className: m.a.Button,
				onClick: e.secondaryButtonAction || e.onCancel,
				primary: !!e.secondaryButtonOnly,
				secondary: !e.secondaryButtonOnly
			}, e.secondaryButtonText || n.fbt._("Cancel", null, {
				hk: "2TSLl5"
			}))), !e.secondaryButtonOnly && c.a.createElement(d.a, {
				className: m.a.Button,
				type: "submit",
				primary: !0,
				onClick: e.primaryButtonAction || e.onSubmit,
				disabled: e.primaryButtonDisabled
			}, e.primaryButtonText || n.fbt._("Submit", null, {
				hk: "4aU3dh"
			})))));
			p.displayName = "OverlayControlBar", t.a = p
		},
		"./src/chat/icons/svgs/Checkbox/checked.m.less": function(e, t, a) {
			e.exports = {
				StyledCircle: "_2QEVbfgOdAh_E_UteGSdz9",
				styledCircle: "_2QEVbfgOdAh_E_UteGSdz9",
				StyledCheckmark: "_2hHL8LCEXapDOjiChO0JWH",
				styledCheckmark: "_2hHL8LCEXapDOjiChO0JWH"
			}
		},
		"./src/chat/icons/svgs/Checkbox/unchecked.m.less": function(e, t, a) {
			e.exports = {
				StyledCircle: "_2WDOoyLYNQZODKF6ScpgSO",
				styledCircle: "_2WDOoyLYNQZODKF6ScpgSO"
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/OverlayKickUser.3c662ba9225a37397007.js.map