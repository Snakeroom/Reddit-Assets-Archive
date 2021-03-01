// https://www.redditstatic.com/desktop2x/reddit-components-InFeedPostCreation.adaf0cba24a931f329d9.js
// Retrieved at 2/28/2021, 9:18:37 PM by Reddit Dataminer v1.0.0
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
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
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
				L = n("./src/reddit/controls/InternalLink/index.tsx"),
				E = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				M = n("./src/reddit/icons/fonts/index.tsx"),
				k = n("./src/reddit/icons/svgs/FormattingHyperlink/index.tsx"),
				N = n("./src/reddit/icons/svgs/Media/index.tsx"),
				f = n("./src/reddit/selectors/subreddit.ts"),
				C = n("./src/reddit/selectors/telemetry.ts"),
				O = n("./src/reddit/selectors/user.ts"),
				v = n("./src/reddit/components/InFeedPostCreation/index.m.less"),
				g = n.n(v);

			function U() {
				return (U = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const j = u.a.wrapped(x.a, "CurrentUserIcon", g.a);
			var w;
			! function(e) {
				e.Media = "post-composer-du-media", e.Link = "post-composer-du-link"
			}(w || (w = {}));
			const A = e => {
					switch (e) {
						case l.Lb.MEDIA:
							return "?media=true";
						case l.Lb.LINK_ONLY:
							return "?url";
						default:
							return ""
					}
				},
				h = e => {
					switch (e) {
						case l.Lb.MEDIA:
							return "media_post";
						case l.Lb.LINK_ONLY:
							return "link_post";
						default:
							return "create_post"
					}
				},
				T = Object(d.c)({
					currentUser: O.i,
					subredditAboutInfo: f.x,
					subreddit: f.A
				}),
				y = Object(o.b)(T, e => ({
					navigateTo: t => e(Object(i.b)(t)),
					toggleTooltip: t => e(Object(m.h)({
						tooltipId: t
					}))
				})),
				P = () => s.fbt._("Create Media Post", null, {
					hk: "3T3YMO"
				}),
				D = () => s.fbt._("Create Link Post", null, {
					hk: "JUQfs"
				});
			t.default = Object(b.c)(y(({
				currentUser: e,
				subredditAboutInfo: t,
				subreddit: n,
				sendEvent: r,
				subredditName: o,
				navigateTo: i,
				toggleTooltip: d
			}) => {
				const u = Object(E.a)(),
					m = Object(E.b)(),
					b = (o ? `/r/${o}` : "") + "/submit",
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
							links: r,
							videos: a
						} = n;
						return {
							link: r,
							media: (a || s) && !e.isNSFW
						}
					}(n, t),
					f = e => {
						r(t => ({
							source: "post_composer_du",
							action: "click",
							noun: h(e),
							...C.defaults(t)
						}))
					},
					O = () => {
						f(l.Lb.POST), i(b)
					};
				let v;
				return e && (v = Object(I.b)(e.accountIcon) ? a.a.createElement(L.a, {
					className: g.a.UserIconWrapper,
					to: "/settings/profile"
				}, a.a.createElement(j, {
					className: g.a.UserIcon
				})) : a.a.createElement("span", {
					className: g.a.UserIconWrapper
				}, a.a.createElement(j, {
					className: g.a.UserIcon
				}))), a.a.createElement("div", {
					className: g.a.Container
				}, v, a.a.createElement("input", {
					className: g.a.Input,
					onChange: O,
					onClick: O,
					onKeyPress: O,
					placeholder: s.fbt._("Create Post", null, {
						hk: "OcnKS"
					}),
					type: "text"
				}), x.media && (u ? a.a.createElement(_.q, {
					className: g.a.Button2020,
					"aria-label": P(),
					priority: _.b.Plain,
					kind: _.a.InternalLink,
					size: _.c.M,
					id: w.Media,
					onClick: () => f(l.Lb.MEDIA),
					onMouseEnter: () => d(w.Media),
					onMouseLeave: () => d(w.Media),
					to: b + A(l.Lb.MEDIA),
					Icon: m ? e => a.a.createElement(M.a, U({
						name: "image_post"
					}, e)) : N.a,
					isSquare: !0
				}, a.a.createElement(p.c, {
					caretOnTop: !0,
					tooltipId: w.Media,
					text: P()
				})) : a.a.createElement(c.a, {
					"aria-label": P(),
					className: g.a.Button,
					id: w.Media,
					onClick: () => f(l.Lb.MEDIA),
					onMouseEnter: () => d(w.Media),
					onMouseLeave: () => d(w.Media),
					to: b + A(l.Lb.MEDIA)
				}, a.a.createElement(N.a, null), a.a.createElement(p.c, {
					caretOnTop: !0,
					tooltipId: w.Media,
					text: P()
				}))), x.link && (u ? a.a.createElement(_.q, {
					className: g.a.Button2020,
					priority: _.b.Plain,
					kind: _.a.InternalLink,
					size: _.c.M,
					"aria-label": D(),
					id: w.Link,
					onClick: () => f(l.Lb.LINK_ONLY),
					onMouseEnter: () => d(w.Link),
					onMouseLeave: () => d(w.Link),
					to: b + A(l.Lb.LINK_ONLY),
					Icon: m ? e => a.a.createElement(M.a, U({
						name: "link_post"
					}, e)) : k.a,
					isSquare: !0
				}, a.a.createElement(p.c, {
					caretOnTop: !0,
					tooltipId: w.Media,
					text: P()
				})) : a.a.createElement(c.a, {
					"aria-label": D(),
					className: g.a.Button,
					id: w.Link,
					onClick: () => f(l.Lb.LINK_ONLY),
					onMouseEnter: () => d(w.Link),
					onMouseLeave: () => d(w.Link),
					to: b + A(l.Lb.LINK_ONLY)
				}, a.a.createElement(k.a, null), a.a.createElement(p.c, {
					caretOnTop: !0,
					tooltipId: w.Link,
					text: D()
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
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/FormattingHyperlink/index.m.less"),
				c = n.n(o);
			t.a = e => r.a.createElement("svg", {
				className: Object(a.a)(c.a.icon, e.className),
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-InFeedPostCreation.adaf0cba24a931f329d9.js.map