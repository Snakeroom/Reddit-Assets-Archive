// https://www.redditstatic.com/desktop2x/OverlayKickUser.1f97896cfb19c1776e5c.js
// Retrieved at 12/8/2021, 3:30:04 PM by Reddit Dataminer v1.0.0
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
				s = n.n(r),
				c = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/lib/lessComponent.tsx"),
				l = n("./src/chat/actions/tracking.ts"),
				i = n("./src/chat/actions/user.ts"),
				m = n("./src/chat/components/OverlayNav/index.tsx"),
				u = n("./src/chat/components/Scroller/index.tsx"),
				d = n("./src/chat/controls/Checkbox/index.tsx"),
				h = n("./src/chat/controls/Overlay/index.tsx"),
				b = n("./src/chat/controls/OverlayControlBar/index.tsx"),
				k = n("./src/chat/helpers/chatSelector.ts"),
				_ = n("./src/chat/helpers/dom.ts"),
				O = n("./src/chat/routes/chat.ts"),
				p = n("./src/chat/components/OverlayKickUser/index.m.less"),
				y = n.n(p);
			const x = "kickUser",
				j = o.a.p("SubHeader", y.a),
				E = o.a.span("Title", y.a),
				f = o.a.span("Header", y.a),
				v = o.a.wrapped(d.a, "Checkbox", y.a),
				H = o.a.div("ListItem", y.a),
				C = o.a.div("OverlayContent", y.a);
			var L;
			! function(e) {
				e[e.TenMins = 600] = "TenMins", e[e.OneHour = 3600] = "OneHour", e[e.OneDay = 86400] = "OneDay", e[e.ThreeDays = 259200] = "ThreeDays", e[e.Permanently = -1] = "Permanently"
			}(L || (L = {}));
			const K = () => ({
					[L.TenMins]: a.fbt._("10 minutes", null, {
						hk: "3y8skZ"
					}),
					[L.OneHour]: a.fbt._("1 hour", null, {
						hk: "mgKhy"
					}),
					[L.OneDay]: a.fbt._("1 day", null, {
						hk: "37HQV9"
					}),
					[L.ThreeDays]: a.fbt._("3 days", null, {
						hk: "2R7GCT"
					}),
					[L.Permanently]: a.fbt._("Permanently", null, {
						hk: "2CHcpm"
					})
				}),
				D = Object(k.a)({
					message: (e, t) => t.attr === O.a.Message ? e.messages.models[t.attrId] : void 0,
					user: (e, t) => t.attr === O.a.User ? e.contacts.models[t.attrId] : void 0
				}),
				S = Object(c.b)(D, e => ({
					onKickUser: (t, n, a) => {
						e(Object(i.p)(t, n, a)), e(Object(l.N)(a))
					}
				}));
			class g extends r.Component {
				constructor(e) {
					super(e), this.onSubmit = e => {
						const {
							attrId: t,
							channelId: n,
							onKickUser: a
						} = this.props;
						e.target[x].forEach(({
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
					return s.a.createElement(s.a.Fragment, null, s.a.createElement(f, null, a.fbt._("Are you sure you want to kick {username} from this room?", [a.fbt._param("username", n)], {
						hk: "n1L3B"
					})), s.a.createElement(j, null, a.fbt._("They'll be able to join again once the kick duration is over.", null, {
						hk: "4zi1U1"
					})))
				}
				render() {
					const e = K(),
						{
							channelId: t
						} = this.props;
					return s.a.createElement(h.a, {
						onSubmit: Object(_.a)(this.onSubmit),
						form: !0,
						innerContent: !0
					}, s.a.createElement(m.a, {
						channelId: t,
						title: a.fbt._("Confirm Kick", null, {
							hk: "1upcSi"
						})
					}), s.a.createElement(C, null, s.a.createElement(u.b, null, this.renderIntro(), s.a.createElement(E, null, a.fbt._("Kick Duration", null, {
						hk: "4nENS8"
					})), Object.keys(e).map(t => s.a.createElement(H, {
						key: t
					}, s.a.createElement(v, {
						type: "radio",
						name: x,
						value: t
					}, e[t]))))), s.a.createElement(b.a, {
						primaryButtonText: a.fbt._("Kick", null, {
							hk: "10O2jX"
						}),
						secondaryButtonText: a.fbt._("Cancel", null, {
							hk: "2TSLl5"
						})
					}))
				}
			}
			t.default = S(g)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/OverlayKickUser.1f97896cfb19c1776e5c.js.map