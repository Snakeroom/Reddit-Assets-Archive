// https://www.redditstatic.com/desktop2x/reddit-components-InFeedPostCreation.d9444414c15ed9ea78e0.js
// Retrieved at 10/22/2020, 3:30:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-InFeedPostCreation"], {
		"./src/reddit/components/InFeedPostCreation/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_2jJNpBqXMbbyOiGCElTYxZ",
				container: "_2jJNpBqXMbbyOiGCElTYxZ",
				UserIconWrapper: "_2E_zUw3OUkCKUFrIQwE894",
				userIconWrapper: "_2E_zUw3OUkCKUFrIQwE894",
				UserIcon: "_1cvAFWcyUe8hsdIpCmJP0W",
				userIcon: "_1cvAFWcyUe8hsdIpCmJP0W",
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
				a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = n("./node_modules/react-router-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/constants/index.ts"),
				u = n("./src/lib/lessComponent.tsx"),
				m = n("./src/reddit/actions/tooltip.ts"),
				p = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				b = n("./src/reddit/components/TrackingHelper/index.tsx"),
				I = n("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				x = n("./src/reddit/components/UserIcon/UserIcon.tsx"),
				_ = n("./src/reddit/controls/Button/index.tsx"),
				E = n("./src/reddit/controls/InternalLink/index.tsx"),
				M = n("./src/reddit/hooks/useButtons2020.ts"),
				k = n("./src/reddit/icons/svgs/FormattingHyperlink/index.tsx"),
				N = n("./src/reddit/icons/svgs/Media/index.tsx"),
				L = n("./src/reddit/selectors/subreddit.ts"),
				C = n("./src/reddit/selectors/telemetry.ts"),
				f = n("./src/reddit/selectors/user.ts"),
				O = n("./src/reddit/components/InFeedPostCreation/index.m.less"),
				g = n.n(O);
			const v = u.a.wrapped(I.a, "CurrentUserIcon", g.a);
			var U;
			! function(e) {
				e.Media = "post-composer-du-media", e.Link = "post-composer-du-link"
			}(U || (U = {}));
			const j = e => {
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
				A = Object(d.c)({
					currentUser: f.i,
					subredditAboutInfo: L.y,
					subreddit: L.B
				}),
				T = Object(o.b)(A, e => ({
					navigateTo: t => e(Object(i.b)(t)),
					toggleTooltip: t => e(Object(m.h)({
						tooltipId: t
					}))
				})),
				J = () => s.fbt._("Create Media Post", null, {
					hk: "3T3YMO"
				}),
				h = () => s.fbt._("Create Link Post", null, {
					hk: "JUQfs"
				});
			t.default = Object(b.c)(T(e => {
				let {
					currentUser: t,
					subredditAboutInfo: n,
					subreddit: a,
					sendEvent: o,
					subredditName: i,
					navigateTo: d,
					toggleTooltip: u
				} = e;
				const m = Object(M.a)(),
					b = (i ? "/r/".concat(i) : "") + "/submit",
					I = function(e, t) {
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
							links: a,
							videos: r
						} = n;
						return {
							link: a,
							media: (r || s) && !e.isNSFW
						}
					}(a, n),
					L = e => {
						o(t => Object.assign({
							source: "post_composer_du",
							action: "click",
							noun: w(e)
						}, C.defaults(t)))
					},
					f = () => {
						L(l.Jb.POST), d(b)
					};
				let O;
				return t && (O = Object(x.b)(t.accountIcon) ? r.a.createElement(E.a, {
					className: g.a.UserIconWrapper,
					to: "/settings/profile"
				}, r.a.createElement(v, {
					className: g.a.UserIcon
				})) : r.a.createElement("span", {
					className: g.a.UserIconWrapper
				}, r.a.createElement(v, {
					className: g.a.UserIcon
				}))), r.a.createElement("div", {
					className: g.a.Container
				}, O, r.a.createElement("input", {
					className: g.a.Input,
					onChange: f,
					onClick: f,
					onKeyPress: f,
					placeholder: s.fbt._("Create Post", null, {
						hk: "OcnKS"
					}),
					type: "text"
				}), I.media && (m ? r.a.createElement(_.q, {
					className: g.a.Button2020,
					"aria-label": J(),
					priority: _.b.Plain,
					kind: _.a.InternalLink,
					size: _.c.M,
					id: U.Media,
					onClick: () => L(l.Jb.MEDIA),
					onMouseEnter: () => u(U.Media),
					onMouseLeave: () => u(U.Media),
					to: b + j(l.Jb.MEDIA),
					Icon: N.a,
					isSquare: !0
				}, r.a.createElement(p.c, {
					caretOnTop: !0,
					tooltipId: U.Media,
					text: J()
				})) : r.a.createElement(c.a, {
					"aria-label": J(),
					className: g.a.Button,
					id: U.Media,
					onClick: () => L(l.Jb.MEDIA),
					onMouseEnter: () => u(U.Media),
					onMouseLeave: () => u(U.Media),
					to: b + j(l.Jb.MEDIA)
				}, r.a.createElement(N.a, null), r.a.createElement(p.c, {
					caretOnTop: !0,
					tooltipId: U.Media,
					text: J()
				}))), I.link && (m ? r.a.createElement(_.q, {
					className: g.a.Button2020,
					priority: _.b.Plain,
					kind: _.a.InternalLink,
					size: _.c.M,
					"aria-label": h(),
					id: U.Link,
					onClick: () => L(l.Jb.LINK_ONLY),
					onMouseEnter: () => u(U.Link),
					onMouseLeave: () => u(U.Link),
					to: b + j(l.Jb.LINK_ONLY),
					Icon: k.a,
					isSquare: !0
				}, r.a.createElement(p.c, {
					caretOnTop: !0,
					tooltipId: U.Media,
					text: J()
				})) : r.a.createElement(c.a, {
					"aria-label": h(),
					className: g.a.Button,
					id: U.Link,
					onClick: () => L(l.Jb.LINK_ONLY),
					onMouseEnter: () => u(U.Link),
					onMouseLeave: () => u(U.Link),
					to: b + j(l.Jb.LINK_ONLY)
				}, r.a.createElement(k.a, null), r.a.createElement(p.c, {
					caretOnTop: !0,
					tooltipId: U.Link,
					text: h()
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
				a = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/FormattingHyperlink/index.m.less"),
				c = n.n(o);
			t.a = e => a.a.createElement("svg", {
				className: Object(r.a)(c.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("path", {
				d: "M17.15,2.86a6.33,6.33,0,1,0-9,9A1,1,0,0,0,9.6,10.4a4.39,4.39,0,1,1,4.92.83,7.41,7.41,0,0,1,.14,1.44c0,.23,0,.46,0,.68a6.33,6.33,0,0,0,2.51-10.5Z"
			}), a.a.createElement("path", {
				d: "M10.4,8.19a1,1,0,0,0,0,1.41,4.39,4.39,0,1,1-4.92-.83,7.41,7.41,0,0,1-.14-1.44c0-.23,0-.46,0-.68a6.33,6.33,0,1,0,6.44,1.54A1,1,0,0,0,10.4,8.19Z"
			}))
		},
		"./src/reddit/icons/svgs/Media/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("path", {
				fill: "inherit",
				fillRule: "evenodd",
				d: "m8.986223,16.927949l2.240493,-3.024991l-3.521864,-5.376734c-0.102125,-0.156 -0.274999,-0.251499 -0.461249,-0.253749c-0.158375,-0.01 -0.362749,0.0875 -0.468249,0.241249l-5.239359,7.532977c-0.12,0.170624 -0.1335,0.394124 -0.037,0.579248c0.0975,0.185249 0.287499,0.301999 0.497498,0.301999l6.989729,0zm8.513724,3.071991l-14.999954,0c-1.378746,0 -2.499992,-1.121247 -2.499992,-2.499992l0,-14.999954c0,-1.378746 1.121247,-2.499992 2.499992,-2.499992l14.999954,0c1.378746,0 2.499992,1.121247 2.499992,2.499992l0,14.999954c0,1.378746 -1.121247,2.499992 -2.499992,2.499992zm0.803498,-3.071991c0.221249,0 0.420999,-0.129125 0.511873,-0.331249c0.091,-0.201999 0.05375,-0.437749 -0.092,-0.602748l-4.238862,-4.778985c-0.11125,-0.12575 -0.257124,-0.186249 -0.444499,-0.188749c-0.169624,0.008 -0.325624,0.091 -0.425499,0.226874l-3.540739,4.778985c-0.126875,0.170749 -0.145,0.398749 -0.0495,0.587123c0.094375,0.189749 0.288749,0.308749 0.500748,0.308749l7.778726,0l-0.00025,0zm-2.982116,-11.404215c0,-1.173746 -0.952497,-2.124994 -2.124994,-2.124994c-1.174996,0 -2.124994,0.951247 -2.124994,2.124994c0,1.172496 0.949997,2.123744 2.124994,2.123744c1.172496,0 2.124994,-0.951247 2.124994,-2.123744z"
			}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-InFeedPostCreation.d9444414c15ed9ea78e0.js.map