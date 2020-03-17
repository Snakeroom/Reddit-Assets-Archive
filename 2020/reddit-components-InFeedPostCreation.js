// https://www.redditstatic.com/desktop2x/reddit-components-InFeedPostCreation.aa8f5f1f31c96e15e18e.js
// Retrieved at 3/17/2020, 2:00:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-InFeedPostCreation"], {
		"./src/reddit/components/InFeedPostCreation/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_2jJNpBqXMbbyOiGCElTYxZ",
				container: "_2jJNpBqXMbbyOiGCElTYxZ",
				Input: "zgT5MfUrDMC54cpiCpZFu",
				input: "zgT5MfUrDMC54cpiCpZFu",
				Button: "_27e9yld2jAIIWQNc4A70if",
				button: "_27e9yld2jAIIWQNc4A70if"
			}
		},
		"./src/reddit/components/InFeedPostCreation/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s, i = n("./node_modules/react/index.js"),
				c = n.n(i),
				o = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = n("./node_modules/react-router-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/constants/index.ts"),
				u = n("./src/reddit/actions/tooltip.ts"),
				m = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				p = n("./src/reddit/components/TrackingHelper/index.tsx"),
				b = n("./src/reddit/i18n/utils.ts"),
				x = n("./src/reddit/icons/svgs/FormattingHyperlink/index.tsx"),
				_ = n("./src/reddit/icons/svgs/Media/index.tsx"),
				g = n("./src/reddit/selectors/subreddit.ts"),
				N = n("./src/reddit/selectors/telemetry.ts"),
				E = n("./src/reddit/components/InFeedPostCreation/index.m.less"),
				M = n.n(E);
			! function(e) {
				e.Media = "post-composer-du-media", e.Link = "post-composer-du-link"
			}(s || (s = {}));
			const v = e => {
					switch (e) {
						case l.Hb.MEDIA:
							return "?media=true";
						case l.Hb.LINK_ONLY:
							return "?url";
						default:
							return ""
					}
				},
				I = e => {
					switch (e) {
						case l.Hb.MEDIA:
							return "media_post";
						case l.Hb.LINK_ONLY:
							return "link_post";
						default:
							return "create_post"
					}
				},
				O = Object(d.c)({
					subredditAboutInfo: g.v,
					subreddit: g.y
				}),
				f = Object(o.b)(O, e => ({
					navigateTo: t => e(Object(a.b)(t)),
					toggleTooltip: t => e(Object(u.h)({
						tooltipId: t
					}))
				})),
				k = Object(b.c)("Create Media Post"),
				L = Object(b.c)("Create Link Post");
			t.default = Object(p.c)(f(e => {
				let {
					subredditAboutInfo: t,
					subreddit: n,
					sendEvent: i,
					subredditName: o,
					navigateTo: a,
					toggleTooltip: d
				} = e;
				const u = (o ? "/r/".concat(o) : "") + "/submit",
					p = function(e, t) {
						if (!e) return {
							link: !0,
							media: !0
						};
						const n = t && t.allowedPostTypes;
						if (!n) return {
							link: !0,
							media: !0
						};
						const {
							images: s,
							links: i,
							videos: c
						} = n;
						return {
							link: i,
							media: (c || s) && !e.isNSFW
						}
					}(n, t),
					g = e => {
						i(t => Object.assign({
							source: "post_composer_du",
							action: "click",
							noun: I(e)
						}, N.defaults(t)))
					},
					E = () => {
						g(l.Hb.POST), a(u)
					};
				return c.a.createElement("div", {
					className: M.a.Container
				}, c.a.createElement("input", {
					className: M.a.Input,
					onChange: E,
					onClick: E,
					onKeyPress: E,
					placeholder: Object(b.c)("Create Post"),
					type: "text"
				}), p.media && c.a.createElement(r.a, {
					"aria-label": k,
					className: M.a.Button,
					id: s.Media,
					onClick: () => g(l.Hb.MEDIA),
					onMouseEnter: () => d(s.Media),
					onMouseLeave: () => d(s.Media),
					to: u + v(l.Hb.MEDIA)
				}, c.a.createElement(_.a, null), c.a.createElement(m.c, {
					caretOnTop: !0,
					tooltipId: s.Media,
					text: k
				})), p.link && c.a.createElement(r.a, {
					"aria-label": L,
					className: M.a.Button,
					id: s.Link,
					onClick: () => g(l.Hb.LINK_ONLY),
					onMouseEnter: () => d(s.Link),
					onMouseLeave: () => d(s.Link),
					to: u + v(l.Hb.LINK_ONLY)
				}, c.a.createElement(x.a, null), c.a.createElement(m.c, {
					caretOnTop: !0,
					tooltipId: s.Link,
					text: L
				})))
			}))
		},
		"./src/reddit/icons/svgs/FormattingHyperlink/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_2-0pxD6-cM6bWeb73TNNhJ"
			}
		},
		"./src/reddit/icons/svgs/FormattingHyperlink/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				i = n.n(s),
				c = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/FormattingHyperlink/index.m.less"),
				r = n.n(o);
			t.a = e => i.a.createElement("svg", {
				className: Object(c.a)(r.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, i.a.createElement("path", {
				d: "M17.15,2.86a6.33,6.33,0,1,0-9,9A1,1,0,0,0,9.6,10.4a4.39,4.39,0,1,1,4.92.83,7.41,7.41,0,0,1,.14,1.44c0,.23,0,.46,0,.68a6.33,6.33,0,0,0,2.51-10.5Z"
			}), i.a.createElement("path", {
				d: "M10.4,8.19a1,1,0,0,0,0,1.41,4.39,4.39,0,1,1-4.92-.83,7.41,7.41,0,0,1-.14-1.44c0-.23,0-.46,0-.68a6.33,6.33,0,1,0,6.44,1.54A1,1,0,0,0,10.4,8.19Z"
			}))
		},
		"./src/reddit/icons/svgs/Media/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				i = n.n(s);
			t.a = e => i.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, i.a.createElement("path", {
				fill: "inherit",
				fillRule: "evenodd",
				d: "m8.986223,16.927949l2.240493,-3.024991l-3.521864,-5.376734c-0.102125,-0.156 -0.274999,-0.251499 -0.461249,-0.253749c-0.158375,-0.01 -0.362749,0.0875 -0.468249,0.241249l-5.239359,7.532977c-0.12,0.170624 -0.1335,0.394124 -0.037,0.579248c0.0975,0.185249 0.287499,0.301999 0.497498,0.301999l6.989729,0zm8.513724,3.071991l-14.999954,0c-1.378746,0 -2.499992,-1.121247 -2.499992,-2.499992l0,-14.999954c0,-1.378746 1.121247,-2.499992 2.499992,-2.499992l14.999954,0c1.378746,0 2.499992,1.121247 2.499992,2.499992l0,14.999954c0,1.378746 -1.121247,2.499992 -2.499992,2.499992zm0.803498,-3.071991c0.221249,0 0.420999,-0.129125 0.511873,-0.331249c0.091,-0.201999 0.05375,-0.437749 -0.092,-0.602748l-4.238862,-4.778985c-0.11125,-0.12575 -0.257124,-0.186249 -0.444499,-0.188749c-0.169624,0.008 -0.325624,0.091 -0.425499,0.226874l-3.540739,4.778985c-0.126875,0.170749 -0.145,0.398749 -0.0495,0.587123c0.094375,0.189749 0.288749,0.308749 0.500748,0.308749l7.778726,0l-0.00025,0zm-2.982116,-11.404215c0,-1.173746 -0.952497,-2.124994 -2.124994,-2.124994c-1.174996,0 -2.124994,0.951247 -2.124994,2.124994c0,1.172496 0.949997,2.123744 2.124994,2.123744c1.172496,0 2.124994,-0.951247 2.124994,-2.123744z"
			}))
		}
	}
]);
//# sourceMappingURL=reddit-components-InFeedPostCreation.aa8f5f1f31c96e15e18e.js.map