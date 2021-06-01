// https://www.redditstatic.com/desktop2x/OverlayNSFWWarning.8f45b19d857f4ed3f977.js
// Retrieved at 6/1/2021, 3:20:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["OverlayNSFWWarning"], {
		"./src/chat/components/OverlayNSFWWarning/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_3pqnKF777RDT3fBIOXoVeh",
				container: "_3pqnKF777RDT3fBIOXoVeh",
				Text: "v8ouzYTWr_vsFsZU3nJB4",
				text: "v8ouzYTWr_vsFsZU3nJB4"
			}
		},
		"./src/chat/components/OverlayNSFWWarning/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				s = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/lib/lessComponent.tsx"),
				l = n("./src/chat/actions/channel.ts"),
				i = n("./src/chat/actions/promo/index.ts"),
				d = n("./src/chat/components/OverlayNav/index.tsx"),
				m = n("./src/chat/controls/Overlay/index.tsx"),
				u = n("./src/chat/controls/OverlayControlBar/index.tsx"),
				h = n("./src/chat/models/Promo/index.ts"),
				y = n("./src/chat/components/OverlayNSFWWarning/index.m.less"),
				p = n.n(y);
			const x = c.a.div("Container", p.a),
				b = c.a.p("Text", p.a),
				O = Object(s.b)(null, e => ({
					onAccept: t => {
						e(Object(i.a)(h.b.NSFWWarning)), e(Object(l.y)(t))
					}
				}));
			t.default = O(e => o.a.createElement(m.a, null, o.a.createElement(d.a, {
				channelId: e.channelId,
				title: r.fbt._("NSFW User", null, {
					hk: "3W2Bw2"
				})
			}), o.a.createElement(x, null, o.a.createElement(b, null, r.fbt._("One or more users in this chat are marked as NSFW (not safe for work), which means they tend to post explicit content elsewhere on Reddit. This doesn't necessarily mean that the content of this chat is explicit.", null, {
				hk: "4cRpQH"
			}))), o.a.createElement(u.a, {
				primaryButtonText: r.fbt._("Accept", null, {
					hk: "2ILlth"
				}),
				primaryButtonAction: () => e.onAccept(e.channelId)
			})))
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
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				s = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/react-router-redux/es/index.js"),
				l = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				d = n("./src/chat/controls/Button/index.tsx"),
				m = n("./src/chat/helpers/dom.ts"),
				u = n("./src/chat/controls/OverlayControlBar/index.m.less"),
				h = n.n(u);
			const y = i.a.wrapped(d.a, "Button", h.a),
				p = Object(s.b)(void 0, e => ({
					onSubmit: () => {},
					onCancel: Object(m.b)(() => e(Object(c.a)()))
				})),
				x = i.a.div("OverlayControlBar", h.a),
				b = p(e => o.a.createElement(x, {
					className: Object(l.a)({
						[h.a.primary]: e.primaryButtonOnly
					}, e.className)
				}, !e.primaryButtonOnly && (e.secondaryButtonCTLOptions ? o.a.createElement(y, {
					href: "https://www.reddithelp.com/en/categories/rules-reporting/suicide-response/what-do-i-do-if-someone-talks-about-seriously-hurting",
					secondary: !0
				}, r.fbt._("Other Options", null, {
					hk: "1RadlV"
				})) : o.a.createElement(y, {
					onClick: e.secondaryButtonAction || e.onCancel,
					primary: !!e.secondaryButtonOnly,
					secondary: !e.secondaryButtonOnly
				}, e.secondaryButtonText || r.fbt._("Cancel", null, {
					hk: "2TSLl5"
				}))), !e.secondaryButtonOnly && o.a.createElement(y, {
					type: "submit",
					primary: !0,
					onClick: e.primaryButtonAction || e.onSubmit,
					disabled: e.primaryButtonDisabled
				}, e.primaryButtonText || r.fbt._("Submit", null, {
					hk: "2Iwjdv"
				}))));
			b.displayName = "OverlayControlBar", t.a = b
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/OverlayNSFWWarning.8f45b19d857f4ed3f977.js.map