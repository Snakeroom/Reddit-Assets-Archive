// https://www.redditstatic.com/desktop2x/reddit-components-InFeedPostCreation.86820612372f9bccad46.js
// Retrieved at 3/9/2021, 3:40:12 PM by Reddit Dataminer v1.0.0
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
				active: "_191Jmn6u4ejtQPbRj1uMze"
			}
		},
		"./src/reddit/components/InFeedPostCreation/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				c = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/react-router-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/constants/index.ts"),
				l = n("./src/lib/lessComponent.tsx"),
				u = n("./src/reddit/actions/tooltip.ts"),
				m = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				p = n("./src/reddit/components/TrackingHelper/index.tsx"),
				b = n("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				x = n("./src/reddit/components/UserIcon/UserIcon.tsx"),
				I = n("./src/reddit/controls/Button/index.tsx"),
				_ = n("./src/reddit/controls/InternalLink/index.tsx"),
				E = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				f = n("./src/reddit/icons/fonts/index.tsx"),
				k = n("./src/reddit/icons/svgs/FormattingHyperlink/index.tsx"),
				L = n("./src/reddit/icons/svgs/Media/index.tsx"),
				g = n("./src/reddit/selectors/subreddit.ts"),
				N = n("./src/reddit/selectors/telemetry.ts"),
				v = n("./src/reddit/selectors/user.ts"),
				M = n("./src/reddit/components/InFeedPostCreation/index.m.less"),
				C = n.n(M);

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const U = l.a.wrapped(b.a, "CurrentUserIcon", C.a);
			var j;
			! function(e) {
				e.Media = "post-composer-du-media", e.Link = "post-composer-du-link"
			}(j || (j = {}));
			const w = e => {
					switch (e) {
						case d.Lb.MEDIA:
							return "?media=true";
						case d.Lb.LINK_ONLY:
							return "?url";
						default:
							return ""
					}
				},
				h = e => {
					switch (e) {
						case d.Lb.MEDIA:
							return "media_post";
						case d.Lb.LINK_ONLY:
							return "link_post";
						default:
							return "create_post"
					}
				},
				A = Object(a.c)({
					currentUser: v.i,
					subredditAboutInfo: g.x,
					subreddit: g.A
				}),
				y = Object(i.b)(A, e => ({
					navigateTo: t => e(Object(o.b)(t)),
					toggleTooltip: t => e(Object(u.h)({
						tooltipId: t
					}))
				})),
				P = () => s.fbt._("Create Media Post", null, {
					hk: "3T3YMO"
				}),
				T = () => s.fbt._("Create Link Post", null, {
					hk: "JUQfs"
				});
			t.default = Object(p.c)(y(({
				currentUser: e,
				subredditAboutInfo: t,
				subreddit: n,
				sendEvent: r,
				subredditName: i,
				navigateTo: o,
				toggleTooltip: a
			}) => {
				const l = Object(E.a)(),
					u = (i ? `/r/${i}` : "") + "/submit",
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
							links: r,
							videos: c
						} = n;
						return {
							link: r,
							media: (c || s) && !e.isNSFW
						}
					}(n, t),
					b = e => {
						r(t => ({
							source: "post_composer_du",
							action: "click",
							noun: h(e),
							...N.defaults(t)
						}))
					},
					g = () => {
						b(d.Lb.POST), o(u)
					};
				let v;
				return e && (v = Object(x.b)(e.accountIcon) ? c.a.createElement(_.a, {
					className: C.a.UserIconWrapper,
					to: "/settings/profile"
				}, c.a.createElement(U, {
					className: C.a.UserIcon
				})) : c.a.createElement("span", {
					className: C.a.UserIconWrapper
				}, c.a.createElement(U, {
					className: C.a.UserIcon
				}))), c.a.createElement("div", {
					className: C.a.Container
				}, v, c.a.createElement("input", {
					className: C.a.Input,
					onChange: g,
					onClick: g,
					onKeyPress: g,
					placeholder: s.fbt._("Create Post", null, {
						hk: "OcnKS"
					}),
					type: "text"
				}), p.media && c.a.createElement(I.q, {
					className: C.a.Button,
					"aria-label": P(),
					priority: I.b.Plain,
					kind: I.a.InternalLink,
					size: I.c.M,
					id: j.Media,
					onClick: () => b(d.Lb.MEDIA),
					onMouseEnter: () => a(j.Media),
					onMouseLeave: () => a(j.Media),
					to: u + w(d.Lb.MEDIA),
					Icon: l ? e => c.a.createElement(f.a, O({
						name: "image_post"
					}, e)) : L.a,
					isSquare: !0
				}, c.a.createElement(m.c, {
					caretOnTop: !0,
					tooltipId: j.Media,
					text: P()
				})), p.link && c.a.createElement(I.q, {
					className: C.a.Button,
					priority: I.b.Plain,
					kind: I.a.InternalLink,
					size: I.c.M,
					"aria-label": T(),
					id: j.Link,
					onClick: () => b(d.Lb.LINK_ONLY),
					onMouseEnter: () => a(j.Link),
					onMouseLeave: () => a(j.Link),
					to: u + w(d.Lb.LINK_ONLY),
					Icon: l ? e => c.a.createElement(f.a, O({
						name: "link_post"
					}, e)) : k.a,
					isSquare: !0
				}, c.a.createElement(m.c, {
					caretOnTop: !0,
					tooltipId: j.Media,
					text: P()
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
				i = n("./src/reddit/icons/svgs/FormattingHyperlink/index.m.less"),
				o = n.n(i);
			t.a = e => r.a.createElement("svg", {
				className: Object(c.a)(o.a.icon, e.className),
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-InFeedPostCreation.86820612372f9bccad46.js.map