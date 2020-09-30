// https://www.redditstatic.com/desktop2x/reddit-components-InFeedPostCreation.7da024ca245e96eac62d.js
// Retrieved at 9/30/2020, 5:50:09 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-InFeedPostCreation"], {
		"./src/reddit/components/InFeedPostCreation/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_2jJNpBqXMbbyOiGCElTYxZ",
				container: "_2jJNpBqXMbbyOiGCElTYxZ",
				UserIcon: "_1cvAFWcyUe8hsdIpCmJP0W",
				userIcon: "_1cvAFWcyUe8hsdIpCmJP0W",
				CurrentUserIcon: "-awYpPVpSqtYs7lioCLhw",
				currentUserIcon: "-awYpPVpSqtYs7lioCLhw",
				Input: "zgT5MfUrDMC54cpiCpZFu",
				input: "zgT5MfUrDMC54cpiCpZFu",
				Button: "_27e9yld2jAIIWQNc4A70if",
				button: "_27e9yld2jAIIWQNc4A70if"
			}
		},
		"./src/reddit/components/InFeedPostCreation/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				c = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = n("./node_modules/react-router-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/constants/index.ts"),
				u = n("./src/lib/lessComponent.tsx"),
				m = n("./src/reddit/actions/tooltip.ts"),
				p = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				b = n("./src/reddit/components/TrackingHelper/index.tsx"),
				x = n("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				I = n("./src/reddit/components/UserIcon/UserIcon.tsx"),
				_ = n("./src/reddit/controls/InternalLink/index.tsx"),
				E = n("./src/reddit/icons/svgs/FormattingHyperlink/index.tsx"),
				g = n("./src/reddit/icons/svgs/Media/index.tsx"),
				C = n("./src/reddit/selectors/subreddit.ts"),
				N = n("./src/reddit/selectors/telemetry.ts"),
				f = n("./src/reddit/selectors/user.ts"),
				k = n("./src/reddit/components/InFeedPostCreation/index.m.less"),
				v = n.n(k);
			const M = u.a.wrapped(x.a, "CurrentUserIcon", v.a);
			var L;
			! function(e) {
				e.Media = "post-composer-du-media", e.Link = "post-composer-du-link"
			}(L || (L = {}));
			const O = e => {
					switch (e) {
						case l.Jb.MEDIA:
							return "?media=true";
						case l.Jb.LINK_ONLY:
							return "?url";
						default:
							return ""
					}
				},
				w = e => {
					switch (e) {
						case l.Jb.MEDIA:
							return "media_post";
						case l.Jb.LINK_ONLY:
							return "link_post";
						default:
							return "create_post"
					}
				},
				h = Object(d.c)({
					currentUser: f.i,
					subredditAboutInfo: C.y,
					subreddit: C.B
				}),
				j = Object(o.b)(h, e => ({
					navigateTo: t => e(Object(a.b)(t)),
					toggleTooltip: t => e(Object(m.h)({
						tooltipId: t
					}))
				})),
				A = () => s.fbt._("Create Media Post", null, {
					hk: "3T3YMO"
				}),
				U = () => s.fbt._("Create Link Post", null, {
					hk: "JUQfs"
				});
			t.default = Object(b.c)(j(e => {
				let {
					currentUser: t,
					subredditAboutInfo: n,
					subreddit: r,
					sendEvent: o,
					subredditName: a,
					navigateTo: d,
					toggleTooltip: u
				} = e;
				const m = (a ? "/r/".concat(a) : "") + "/submit",
					b = function(e, t) {
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
							links: r,
							videos: c
						} = n;
						return {
							link: r,
							media: (c || s) && !e.isNSFW
						}
					}(r, n),
					x = e => {
						o(t => Object.assign({
							source: "post_composer_du",
							action: "click",
							noun: w(e)
						}, N.defaults(t)))
					},
					C = () => {
						x(l.Jb.POST), d(m)
					};
				let f;
				return t && (f = Object(I.b)(t.accountIcon) ? c.a.createElement(_.a, {
					className: v.a.UserIcon,
					to: "/settings/profile"
				}, c.a.createElement(M, null)) : c.a.createElement("span", {
					className: v.a.UserIcon
				}, c.a.createElement(M, null))), c.a.createElement("div", {
					className: v.a.Container
				}, f, c.a.createElement("input", {
					className: v.a.Input,
					onChange: C,
					onClick: C,
					onKeyPress: C,
					placeholder: s.fbt._("Create Post", null, {
						hk: "OcnKS"
					}),
					type: "text"
				}), b.media && c.a.createElement(i.a, {
					"aria-label": A(),
					className: v.a.Button,
					id: L.Media,
					onClick: () => x(l.Jb.MEDIA),
					onMouseEnter: () => u(L.Media),
					onMouseLeave: () => u(L.Media),
					to: m + O(l.Jb.MEDIA)
				}, c.a.createElement(g.a, null), c.a.createElement(p.c, {
					caretOnTop: !0,
					tooltipId: L.Media,
					text: A()
				})), b.link && c.a.createElement(i.a, {
					"aria-label": U(),
					className: v.a.Button,
					id: L.Link,
					onClick: () => x(l.Jb.LINK_ONLY),
					onMouseEnter: () => u(L.Link),
					onMouseLeave: () => u(L.Link),
					to: m + O(l.Jb.LINK_ONLY)
				}, c.a.createElement(E.a, null), c.a.createElement(p.c, {
					caretOnTop: !0,
					tooltipId: L.Link,
					text: U()
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
				r = n.n(s),
				c = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/FormattingHyperlink/index.m.less"),
				i = n.n(o);
			t.a = e => r.a.createElement("svg", {
				className: Object(c.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M17.15,2.86a6.33,6.33,0,1,0-9,9A1,1,0,0,0,9.6,10.4a4.39,4.39,0,1,1,4.92.83,7.41,7.41,0,0,1,.14,1.44c0,.23,0,.46,0,.68a6.33,6.33,0,0,0,2.51-10.5Z"
			}), r.a.createElement("path", {
				d: "M10.4,8.19a1,1,0,0,0,0,1.41,4.39,4.39,0,1,1-4.92-.83,7.41,7.41,0,0,1-.14-1.44c0-.23,0-.46,0-.68a6.33,6.33,0,1,0,6.44,1.54A1,1,0,0,0,10.4,8.19Z"
			}))
		},
		"./src/reddit/icons/svgs/Media/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				fill: "inherit",
				fillRule: "evenodd",
				d: "m8.986223,16.927949l2.240493,-3.024991l-3.521864,-5.376734c-0.102125,-0.156 -0.274999,-0.251499 -0.461249,-0.253749c-0.158375,-0.01 -0.362749,0.0875 -0.468249,0.241249l-5.239359,7.532977c-0.12,0.170624 -0.1335,0.394124 -0.037,0.579248c0.0975,0.185249 0.287499,0.301999 0.497498,0.301999l6.989729,0zm8.513724,3.071991l-14.999954,0c-1.378746,0 -2.499992,-1.121247 -2.499992,-2.499992l0,-14.999954c0,-1.378746 1.121247,-2.499992 2.499992,-2.499992l14.999954,0c1.378746,0 2.499992,1.121247 2.499992,2.499992l0,14.999954c0,1.378746 -1.121247,2.499992 -2.499992,2.499992zm0.803498,-3.071991c0.221249,0 0.420999,-0.129125 0.511873,-0.331249c0.091,-0.201999 0.05375,-0.437749 -0.092,-0.602748l-4.238862,-4.778985c-0.11125,-0.12575 -0.257124,-0.186249 -0.444499,-0.188749c-0.169624,0.008 -0.325624,0.091 -0.425499,0.226874l-3.540739,4.778985c-0.126875,0.170749 -0.145,0.398749 -0.0495,0.587123c0.094375,0.189749 0.288749,0.308749 0.500748,0.308749l7.778726,0l-0.00025,0zm-2.982116,-11.404215c0,-1.173746 -0.952497,-2.124994 -2.124994,-2.124994c-1.174996,0 -2.124994,0.951247 -2.124994,2.124994c0,1.172496 0.949997,2.123744 2.124994,2.123744c1.172496,0 2.124994,-0.951247 2.124994,-2.123744z"
			}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-InFeedPostCreation.7da024ca245e96eac62d.js.map