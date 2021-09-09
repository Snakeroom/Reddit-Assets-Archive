// https://www.redditstatic.com/desktop2x/OverlayNSFWWarning.2059fe163c002642c74c.js
// Retrieved at 9/9/2021, 7:40:07 PM by Reddit Dataminer v1.0.0
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
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/lib/lessComponent.tsx"),
				l = n("./src/chat/actions/channel.ts"),
				i = n("./src/chat/actions/promo/index.ts"),
				d = n("./src/chat/components/OverlayNav/index.tsx"),
				u = n("./src/chat/controls/Overlay/index.tsx"),
				m = n("./src/chat/controls/OverlayControlBar/index.tsx"),
				h = n("./src/chat/models/Promo/index.ts"),
				y = n("./src/chat/components/OverlayNSFWWarning/index.m.less"),
				B = n.n(y);
			const p = c.a.div("Container", B.a),
				x = c.a.p("Text", B.a),
				O = Object(s.b)(null, e => ({
					onAccept: t => {
						e(Object(i.a)(h.b.NSFWWarning)), e(Object(l.y)(t))
					}
				}));
			t.default = O(e => o.a.createElement(u.a, null, o.a.createElement(d.a, {
				channelId: e.channelId,
				title: a.fbt._("NSFW User", null, {
					hk: "3W2Bw2"
				})
			}), o.a.createElement(p, null, o.a.createElement(x, null, a.fbt._("One or more users in this chat are marked as NSFW (not safe for work), which means they tend to post explicit content elsewhere on Reddit. This doesn't necessarily mean that the content of this chat is explicit.", null, {
				hk: "4cRpQH"
			}))), o.a.createElement(m.a, {
				primaryButtonText: a.fbt._("Accept", null, {
					hk: "2ILlth"
				}),
				primaryButtonAction: () => e.onAccept(e.channelId)
			})))
		},
		"./src/chat/controls/OverlayControlBar/index.m.less": function(e, t, n) {
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
		"./src/chat/controls/OverlayControlBar/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/react-router-redux/es/index.js"),
				l = n("./src/config.ts"),
				i = n("./src/lib/classNames/index.ts"),
				d = n("./src/chat/controls/Button/index.tsx"),
				u = n("./src/chat/controls/OverlayControlBar/index.m.less"),
				m = n.n(u),
				h = n("./src/chat/helpers/dom.ts");
			const y = Object(s.b)(void 0, e => ({
				onSubmit: () => {},
				onCancel: Object(h.b)(() => e(Object(c.a)()))
			}))(e => o.a.createElement("div", {
				className: Object(i.a)({
					[m.a.primary]: e.primaryButtonOnly,
					[m.a.NoHeaderText]: !e.children
				}, m.a.OverlayControlBar, e.className)
			}, e.children && o.a.createElement("span", {
				className: m.a.HeaderText
			}, e.children), o.a.createElement("div", {
				className: m.a.ButtonsWrapper
			}, e.primaryButtonBlock && o.a.createElement(d.a, {
				onClick: e.primaryButtonBlockAction || e.onCancel,
				className: Object(i.a)(m.a.Button, m.a.NoBorderPrimaryButton),
				secondary: !0,
				noBorder: !0
			}, e.primaryButtonBlockText || a.fbt._("Block", null, {
				hk: "4CA4VX"
			})), !e.primaryButtonOnly && (e.secondaryButtonCTLOptions ? o.a.createElement(d.a, {
				className: m.a.Button,
				href: `${l.a.redditHelpUrl}/en/categories/rules-reporting/suicide-response/what-do-i-do-if-someone-talks-about-seriously-hurting`,
				secondary: !0
			}, a.fbt._("Other Options", null, {
				hk: "1RadlV"
			})) : o.a.createElement(d.a, {
				className: m.a.Button,
				onClick: e.secondaryButtonAction || e.onCancel,
				primary: !!e.secondaryButtonOnly,
				secondary: !e.secondaryButtonOnly
			}, e.secondaryButtonText || a.fbt._("Cancel", null, {
				hk: "2TSLl5"
			}))), !e.secondaryButtonOnly && o.a.createElement(d.a, {
				className: m.a.Button,
				type: "submit",
				primary: !0,
				onClick: e.primaryButtonAction || e.onSubmit,
				disabled: e.primaryButtonDisabled
			}, e.primaryButtonText || a.fbt._("Submit", null, {
				hk: "4aU3dh"
			})))));
			y.displayName = "OverlayControlBar", t.a = y
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/OverlayNSFWWarning.2059fe163c002642c74c.js.map