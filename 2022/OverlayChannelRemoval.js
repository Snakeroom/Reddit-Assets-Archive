// https://www.redditstatic.com/desktop2x/OverlayChannelRemoval.8c12f74a7cefa5a0b2f6.js
// Retrieved at 9/12/2022, 2:10:03 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["OverlayChannelRemoval"], {
		"./src/chat/components/OverlayChannelRemoval/index.m.less": function(e, n, a) {
			e.exports = {
				SubHeader: "wmCucbS6jibsxQaqbOhd-",
				subHeader: "wmCucbS6jibsxQaqbOhd-",
				Header: "_2sNvTIhUwrcntNuPu0dMCh",
				header: "_2sNvTIhUwrcntNuPu0dMCh"
			}
		},
		"./src/chat/components/OverlayChannelRemoval/index.tsx": function(e, n, a) {
			"use strict";
			a.r(n);
			var t, r = a("./node_modules/fbt/lib/FbtPublic.js"),
				l = a("./node_modules/react/index.js"),
				o = a.n(l),
				u = a("./src/lib/lessComponent.tsx"),
				s = a("./src/chat/components/OverlayNav/index.tsx");
			! function(e) {
				e.DEFAULT = "default", e.BANNED = "banned", e.KICKED = "kicked"
			}(t || (t = {}));
			var c = a("./src/chat/controls/Overlay/index.tsx"),
				d = a("./src/chat/components/OverlayChannelRemoval/index.m.less"),
				m = a.n(d);
			const h = u.a.p("SubHeader", m.a),
				i = u.a.span("Header", m.a),
				b = e => {
					switch (e) {
						case t.BANNED:
							return r.fbt._("Banned", null, {
								hk: "45AEK1"
							});
						case t.KICKED:
							return r.fbt._("Kicked", null, {
								hk: "20JwrF"
							});
						case t.DEFAULT:
						default:
							return r.fbt._("Removed", null, {
								hk: "3yZ2SQ"
							})
					}
				};
			n.default = e => o.a.createElement(c.a, null, o.a.createElement(s.a, {
				channelId: e.channelId,
				title: b(e.status)
			}), o.a.createElement(o.a.Fragment, null, o.a.createElement(i, null, (e => {
				switch (e) {
					case t.BANNED:
						return r.fbt._("You are banned from this room.", null, {
							hk: "2MKZpa"
						});
					case t.KICKED:
						return r.fbt._("You are temporarily kicked from this room.", null, {
							hk: "48m5JB"
						});
					case t.DEFAULT:
					default:
						return r.fbt._("You have been removed from this room.", null, {
							hk: "46tIu8"
						})
				}
			})(e.status)), o.a.createElement(h, null, (e => {
				switch (e) {
					case t.BANNED:
						return r.fbt._("You are banned from this room and may not join until you are unbanned.", null, {
							hk: "1SH7uY"
						});
					case t.KICKED:
						return r.fbt._("You are temporarily kicked from this room and may not join until you are no longer kicked.", null, {
							hk: "1QQa96"
						});
					case t.DEFAULT:
					default:
						return r.fbt._("You have been removed from this room.", null, {
							hk: "46tIu8"
						})
				}
			})(e.status))))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/OverlayChannelRemoval.8c12f74a7cefa5a0b2f6.js.map