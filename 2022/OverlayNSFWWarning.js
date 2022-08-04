// https://www.redditstatic.com/desktop2x/OverlayNSFWWarning.3b815b051090cc8e4a81.js
// Retrieved at 8/4/2022, 3:30:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["OverlayNSFWWarning"], {
		"./src/chat/components/OverlayNSFWWarning/index.m.less": function(e, n, t) {
			e.exports = {
				Container: "_3pqnKF777RDT3fBIOXoVeh",
				container: "_3pqnKF777RDT3fBIOXoVeh",
				Text: "v8ouzYTWr_vsFsZU3nJB4",
				text: "v8ouzYTWr_vsFsZU3nJB4"
			}
		},
		"./src/chat/components/OverlayNSFWWarning/index.tsx": function(e, n, t) {
			"use strict";
			t.r(n);
			var a = t("./node_modules/fbt/lib/FbtPublic.js"),
				s = t("./node_modules/react/index.js"),
				c = t.n(s),
				r = t("./node_modules/react-redux/es/index.js"),
				o = t("./src/lib/lessComponent.tsx"),
				l = t("./src/chat/actions/channel.ts"),
				i = t("./src/chat/components/OverlayNav/index.tsx"),
				h = t("./src/chat/controls/Overlay/index.tsx"),
				d = t("./src/chat/controls/OverlayControlBar/index.tsx"),
				u = t("./src/chat/components/OverlayNSFWWarning/index.m.less"),
				_ = t.n(u);
			const m = o.a.div("Container", _.a),
				x = o.a.p("Text", _.a),
				p = Object(r.b)(null, e => ({
					onAccept: n => {
						e(Object(l.y)(n))
					}
				}));
			n.default = p(e => c.a.createElement(h.a, null, c.a.createElement(i.a, {
				channelId: e.channelId,
				title: a.fbt._("NSFW User", null, {
					hk: "3W2Bw2"
				})
			}), c.a.createElement(m, null, c.a.createElement(x, null, a.fbt._("One or more users in this chat are marked as NSFW (not safe for work), which means they tend to post explicit content elsewhere on Reddit. This doesn't necessarily mean that the content of this chat is explicit.", null, {
				hk: "4cRpQH"
			}))), c.a.createElement(d.a, {
				primaryButtonText: a.fbt._("Accept", null, {
					hk: "2ILlth"
				}),
				primaryButtonAction: () => e.onAccept(e.channelId)
			})))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/OverlayNSFWWarning.3b815b051090cc8e4a81.js.map