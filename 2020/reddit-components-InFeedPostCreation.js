// https://www.redditstatic.com/desktop2x/reddit-components-InFeedPostCreation.46a47d38572ec41d8a62.js
// Retrieved at 10/21/2020, 2:40:07 PM by Reddit Dataminer v1.0.0
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
				button: "_27e9yld2jAIIWQNc4A70if",
				Button2020: "cnatTHCSPzH3Duf_danol",
				button2020: "cnatTHCSPzH3Duf_danol",
				active: "_191Jmn6u4ejtQPbRj1uMze"
			}
		},
		"./src/reddit/components/InFeedPostCreation/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = n("./node_modules/react-router-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/constants/index.ts"),
				u = n("./src/lib/lessComponent.tsx"),
				m = n("./src/reddit/actions/tooltip.ts"),
				p = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				b = n("./src/reddit/components/TrackingHelper/index.tsx"),
				x = n("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				I = n("./src/reddit/components/UserIcon/UserIcon.tsx"),
				_ = n("./src/reddit/controls/Button/index.tsx"),
				M = n("./src/reddit/controls/InternalLink/index.tsx"),
				E = n("./src/reddit/hooks/useButtons2020.ts"),
				k = n("./src/reddit/icons/svgs/FormattingHyperlink/index.tsx"),
				L = n("./src/reddit/icons/svgs/Media/index.tsx"),
				N = n("./src/reddit/selectors/subreddit.ts"),
				C = n("./src/reddit/selectors/telemetry.ts"),
				f = n("./src/reddit/selectors/user.ts"),
				g = n("./src/reddit/components/InFeedPostCreation/index.m.less"),
				v = n.n(g);
			const O = u.a.wrapped(x.a, "CurrentUserIcon", v.a);
			var j;
			! function(e) {
				e.Media = "post-composer-du-media", e.Link = "post-composer-du-link"
			}(j || (j = {}));
			const w = e => {
					switch (e) {
						case l.Jb.MEDIA:
							return "?media=true";
						case l.Jb.LINK_ONLY:
							return "?url";
						default:
							return ""
					}
				},
				A = e => {
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
					subredditAboutInfo: N.y,
					subreddit: N.B
				}),
				T = Object(r.b)(h, e => ({
					navigateTo: t => e(Object(i.b)(t)),
					toggleTooltip: t => e(Object(m.h)({
						tooltipId: t
					}))
				})),
				J = () => s.fbt._("Create Media Post", null, {
					hk: "3T3YMO"
				}),
				P = () => s.fbt._("Create Link Post", null, {
					hk: "JUQfs"
				});
			t.default = Object(b.c)(T(e => {
				let {
					currentUser: t,
					subredditAboutInfo: n,
					subreddit: o,
					sendEvent: r,
					subredditName: i,
					navigateTo: d,
					toggleTooltip: u
				} = e;
				const m = Object(E.a)(),
					b = (i ? "/r/".concat(i) : "") + "/submit",
					x = function(e, t) {
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
							links: o,
							videos: a
						} = n;
						return {
							link: o,
							media: (a || s) && !e.isNSFW
						}
					}(o, n),
					N = e => {
						r(t => Object.assign({
							source: "post_composer_du",
							action: "click",
							noun: A(e)
						}, C.defaults(t)))
					},
					f = () => {
						N(l.Jb.POST), d(b)
					};
				let g;
				return t && (g = Object(I.b)(t.accountIcon) ? a.a.createElement(M.a, {
					className: v.a.UserIcon,
					to: "/settings/profile"
				}, a.a.createElement(O, null)) : a.a.createElement("span", {
					className: v.a.UserIcon
				}, a.a.createElement(O, null))), a.a.createElement("div", {
					className: v.a.Container
				}, g, a.a.createElement("input", {
					className: v.a.Input,
					onChange: f,
					onClick: f,
					onKeyPress: f,
					placeholder: s.fbt._("Create Post", null, {
						hk: "OcnKS"
					}),
					type: "text"
				}), x.media && (m ? a.a.createElement(_.q, {
					className: v.a.Button2020,
					"aria-label": J(),
					priority: _.b.Plain,
					kind: _.a.InternalLink,
					size: _.c.M,
					id: j.Media,
					onClick: () => N(l.Jb.MEDIA),
					onMouseEnter: () => u(j.Media),
					onMouseLeave: () => u(j.Media),
					to: b + w(l.Jb.MEDIA),
					Icon: L.a,
					isSquare: !0
				}, a.a.createElement(p.c, {
					caretOnTop: !0,
					tooltipId: j.Media,
					text: J()
				})) : a.a.createElement(c.a, {
					"aria-label": J(),
					className: v.a.Button,
					id: j.Media,
					onClick: () => N(l.Jb.MEDIA),
					onMouseEnter: () => u(j.Media),
					onMouseLeave: () => u(j.Media),
					to: b + w(l.Jb.MEDIA)
				}, a.a.createElement(L.a, null), a.a.createElement(p.c, {
					caretOnTop: !0,
					tooltipId: j.Media,
					text: J()
				}))), x.link && (m ? a.a.createElement(_.q, {
					className: v.a.Button2020,
					priority: _.b.Plain,
					kind: _.a.InternalLink,
					size: _.c.M,
					"aria-label": P(),
					id: j.Link,
					onClick: () => N(l.Jb.LINK_ONLY),
					onMouseEnter: () => u(j.Link),
					onMouseLeave: () => u(j.Link),
					to: b + w(l.Jb.LINK_ONLY),
					Icon: k.a,
					isSquare: !0
				}, a.a.createElement(p.c, {
					caretOnTop: !0,
					tooltipId: j.Media,
					text: J()
				})) : a.a.createElement(c.a, {
					"aria-label": P(),
					className: v.a.Button,
					id: j.Link,
					onClick: () => N(l.Jb.LINK_ONLY),
					onMouseEnter: () => u(j.Link),
					onMouseLeave: () => u(j.Link),
					to: b + w(l.Jb.LINK_ONLY)
				}, a.a.createElement(k.a, null), a.a.createElement(p.c, {
					caretOnTop: !0,
					tooltipId: j.Link,
					text: P()
				}))))
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
				o = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/icons/svgs/FormattingHyperlink/index.m.less"),
				c = n.n(r);
			t.a = e => o.a.createElement("svg", {
				className: Object(a.a)(c.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				d: "M17.15,2.86a6.33,6.33,0,1,0-9,9A1,1,0,0,0,9.6,10.4a4.39,4.39,0,1,1,4.92.83,7.41,7.41,0,0,1,.14,1.44c0,.23,0,.46,0,.68a6.33,6.33,0,0,0,2.51-10.5Z"
			}), o.a.createElement("path", {
				d: "M10.4,8.19a1,1,0,0,0,0,1.41,4.39,4.39,0,1,1-4.92-.83,7.41,7.41,0,0,1-.14-1.44c0-.23,0-.46,0-.68a6.33,6.33,0,1,0,6.44,1.54A1,1,0,0,0,10.4,8.19Z"
			}))
		},
		"./src/reddit/icons/svgs/Media/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				fill: "inherit",
				fillRule: "evenodd",
				d: "m8.986223,16.927949l2.240493,-3.024991l-3.521864,-5.376734c-0.102125,-0.156 -0.274999,-0.251499 -0.461249,-0.253749c-0.158375,-0.01 -0.362749,0.0875 -0.468249,0.241249l-5.239359,7.532977c-0.12,0.170624 -0.1335,0.394124 -0.037,0.579248c0.0975,0.185249 0.287499,0.301999 0.497498,0.301999l6.989729,0zm8.513724,3.071991l-14.999954,0c-1.378746,0 -2.499992,-1.121247 -2.499992,-2.499992l0,-14.999954c0,-1.378746 1.121247,-2.499992 2.499992,-2.499992l14.999954,0c1.378746,0 2.499992,1.121247 2.499992,2.499992l0,14.999954c0,1.378746 -1.121247,2.499992 -2.499992,2.499992zm0.803498,-3.071991c0.221249,0 0.420999,-0.129125 0.511873,-0.331249c0.091,-0.201999 0.05375,-0.437749 -0.092,-0.602748l-4.238862,-4.778985c-0.11125,-0.12575 -0.257124,-0.186249 -0.444499,-0.188749c-0.169624,0.008 -0.325624,0.091 -0.425499,0.226874l-3.540739,4.778985c-0.126875,0.170749 -0.145,0.398749 -0.0495,0.587123c0.094375,0.189749 0.288749,0.308749 0.500748,0.308749l7.778726,0l-0.00025,0zm-2.982116,-11.404215c0,-1.173746 -0.952497,-2.124994 -2.124994,-2.124994c-1.174996,0 -2.124994,0.951247 -2.124994,2.124994c0,1.172496 0.949997,2.123744 2.124994,2.123744c1.172496,0 2.124994,-0.951247 2.124994,-2.123744z"
			}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-InFeedPostCreation.46a47d38572ec41d8a62.js.map