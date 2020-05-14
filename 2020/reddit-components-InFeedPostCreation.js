// https://www.redditstatic.com/desktop2x/reddit-components-InFeedPostCreation.17dd72fe2e83a993af61.js
// Retrieved at 5/14/2020, 1:40:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-InFeedPostCreation"], {
		"./src/reddit/components/InFeedPostCreation/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_2jJNpBqXMbbyOiGCElTYxZ",
				container: "_2jJNpBqXMbbyOiGCElTYxZ",
				UserIcon: "_1cvAFWcyUe8hsdIpCmJP0W",
				userIcon: "_1cvAFWcyUe8hsdIpCmJP0W",
				Input: "zgT5MfUrDMC54cpiCpZFu",
				input: "zgT5MfUrDMC54cpiCpZFu",
				Button: "_27e9yld2jAIIWQNc4A70if",
				button: "_27e9yld2jAIIWQNc4A70if"
			}
		},
		"./src/reddit/components/InFeedPostCreation/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s, c = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = n("./node_modules/react-router-redux/es/index.js"),
				l = n("./node_modules/reselect/es/index.js"),
				u = n("./src/lib/constants/index.ts"),
				m = n("./src/reddit/actions/tooltip.ts"),
				p = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				b = n("./src/reddit/components/TrackingHelper/index.tsx"),
				x = n("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				_ = n("./src/reddit/components/UserIcon/UserIcon.tsx"),
				I = n("./src/reddit/controls/InternalLink/index.tsx"),
				E = n("./src/reddit/icons/svgs/FormattingHyperlink/index.tsx"),
				g = n("./src/reddit/icons/svgs/Media/index.tsx"),
				N = n("./src/reddit/selectors/subreddit.ts"),
				f = n("./src/reddit/selectors/telemetry.ts"),
				k = n("./src/reddit/selectors/user.ts"),
				M = n("./src/reddit/components/InFeedPostCreation/index.m.less"),
				v = n.n(M);
			! function(e) {
				e.Media = "post-composer-du-media", e.Link = "post-composer-du-link"
			}(s || (s = {}));
			const C = e => {
					switch (e) {
						case u.Gb.MEDIA:
							return "?media=true";
						case u.Gb.LINK_ONLY:
							return "?url";
						default:
							return ""
					}
				},
				L = e => {
					switch (e) {
						case u.Gb.MEDIA:
							return "media_post";
						case u.Gb.LINK_ONLY:
							return "link_post";
						default:
							return "create_post"
					}
				},
				O = Object(l.c)({
					currentUser: k.i,
					subredditAboutInfo: N.w,
					subreddit: N.z
				}),
				j = Object(i.b)(O, e => ({
					navigateTo: t => e(Object(d.b)(t)),
					toggleTooltip: t => e(Object(m.h)({
						tooltipId: t
					}))
				})),
				A = () => c.fbt._("Create Media Post", null, {
					hk: "3T3YMO"
				}),
				h = () => c.fbt._("Create Link Post", null, {
					hk: "JUQfs"
				});
			t.default = Object(b.c)(j(e => {
				let {
					currentUser: t,
					subredditAboutInfo: n,
					subreddit: r,
					sendEvent: i,
					subredditName: d,
					navigateTo: l,
					toggleTooltip: m
				} = e;
				const b = (d ? "/r/".concat(d) : "") + "/submit",
					N = function(e, t) {
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
							links: c,
							videos: r
						} = n;
						return {
							link: c,
							media: (r || s) && !e.isNSFW
						}
					}(r, n),
					k = e => {
						i(t => Object.assign({
							source: "post_composer_du",
							action: "click",
							noun: L(e)
						}, f.defaults(t)))
					},
					M = () => {
						k(u.Gb.POST), l(b)
					};
				let O;
				return t && (O = Object(_.b)(t.accountIcon) ? o.a.createElement(I.a, {
					className: v.a.UserIcon,
					to: "/settings/profile"
				}, o.a.createElement(x.a, null)) : o.a.createElement("span", {
					className: v.a.UserIcon
				}, o.a.createElement(x.a, null))), o.a.createElement("div", {
					className: v.a.Container
				}, O, o.a.createElement("input", {
					className: v.a.Input,
					onChange: M,
					onClick: M,
					onKeyPress: M,
					placeholder: c.fbt._("Create Post", null, {
						hk: "OcnKS"
					}),
					type: "text"
				}), N.media && o.a.createElement(a.a, {
					"aria-label": A(),
					className: v.a.Button,
					id: s.Media,
					onClick: () => k(u.Gb.MEDIA),
					onMouseEnter: () => m(s.Media),
					onMouseLeave: () => m(s.Media),
					to: b + C(u.Gb.MEDIA)
				}, o.a.createElement(g.a, null), o.a.createElement(p.c, {
					caretOnTop: !0,
					tooltipId: s.Media,
					text: A()
				})), N.link && o.a.createElement(a.a, {
					"aria-label": h(),
					className: v.a.Button,
					id: s.Link,
					onClick: () => k(u.Gb.LINK_ONLY),
					onMouseEnter: () => m(s.Link),
					onMouseLeave: () => m(s.Link),
					to: b + C(u.Gb.LINK_ONLY)
				}, o.a.createElement(E.a, null), o.a.createElement(p.c, {
					caretOnTop: !0,
					tooltipId: s.Link,
					text: h()
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
				c = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/FormattingHyperlink/index.m.less"),
				i = n.n(o);
			t.a = e => c.a.createElement("svg", {
				className: Object(r.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, c.a.createElement("path", {
				d: "M17.15,2.86a6.33,6.33,0,1,0-9,9A1,1,0,0,0,9.6,10.4a4.39,4.39,0,1,1,4.92.83,7.41,7.41,0,0,1,.14,1.44c0,.23,0,.46,0,.68a6.33,6.33,0,0,0,2.51-10.5Z"
			}), c.a.createElement("path", {
				d: "M10.4,8.19a1,1,0,0,0,0,1.41,4.39,4.39,0,1,1-4.92-.83,7.41,7.41,0,0,1-.14-1.44c0-.23,0-.46,0-.68a6.33,6.33,0,1,0,6.44,1.54A1,1,0,0,0,10.4,8.19Z"
			}))
		},
		"./src/reddit/icons/svgs/Media/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				c = n.n(s);
			t.a = e => c.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, c.a.createElement("path", {
				fill: "inherit",
				fillRule: "evenodd",
				d: "m8.986223,16.927949l2.240493,-3.024991l-3.521864,-5.376734c-0.102125,-0.156 -0.274999,-0.251499 -0.461249,-0.253749c-0.158375,-0.01 -0.362749,0.0875 -0.468249,0.241249l-5.239359,7.532977c-0.12,0.170624 -0.1335,0.394124 -0.037,0.579248c0.0975,0.185249 0.287499,0.301999 0.497498,0.301999l6.989729,0zm8.513724,3.071991l-14.999954,0c-1.378746,0 -2.499992,-1.121247 -2.499992,-2.499992l0,-14.999954c0,-1.378746 1.121247,-2.499992 2.499992,-2.499992l14.999954,0c1.378746,0 2.499992,1.121247 2.499992,2.499992l0,14.999954c0,1.378746 -1.121247,2.499992 -2.499992,2.499992zm0.803498,-3.071991c0.221249,0 0.420999,-0.129125 0.511873,-0.331249c0.091,-0.201999 0.05375,-0.437749 -0.092,-0.602748l-4.238862,-4.778985c-0.11125,-0.12575 -0.257124,-0.186249 -0.444499,-0.188749c-0.169624,0.008 -0.325624,0.091 -0.425499,0.226874l-3.540739,4.778985c-0.126875,0.170749 -0.145,0.398749 -0.0495,0.587123c0.094375,0.189749 0.288749,0.308749 0.500748,0.308749l7.778726,0l-0.00025,0zm-2.982116,-11.404215c0,-1.173746 -0.952497,-2.124994 -2.124994,-2.124994c-1.174996,0 -2.124994,0.951247 -2.124994,2.124994c0,1.172496 0.949997,2.123744 2.124994,2.123744c1.172496,0 2.124994,-0.951247 2.124994,-2.123744z"
			}))
		}
	}
]);
//# sourceMappingURL=reddit-components-InFeedPostCreation.17dd72fe2e83a993af61.js.map