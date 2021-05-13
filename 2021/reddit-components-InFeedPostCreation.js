// https://www.redditstatic.com/desktop2x/reddit-components-InFeedPostCreation.233000e959b0c9865531.js
// Retrieved at 5/13/2021, 10:30:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-InFeedPostCreation"], {
		"./src/reddit/components/InFeedPostCreation/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/InFeedPostCreation/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				c = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				u = s("./src/reddit/actions/tooltip.ts"),
				m = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				b = s("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				x = s("./src/reddit/controls/Button/index.tsx"),
				I = s("./src/reddit/controls/InternalLink/index.tsx"),
				E = s("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				_ = s("./src/reddit/icons/fonts/index.tsx"),
				O = s("./src/reddit/icons/svgs/FormattingHyperlink/index.tsx"),
				f = s("./src/reddit/icons/svgs/Media/index.tsx"),
				h = s("./src/reddit/selectors/experiments/presenceIndicator.ts"),
				v = s("./src/reddit/selectors/subreddit.ts"),
				N = s("./src/reddit/selectors/telemetry.ts"),
				g = s("./src/reddit/selectors/user.ts"),
				U = s("./src/reddit/components/InFeedPostCreation/index.m.less"),
				C = s.n(U);

			function P() {
				return (P = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const j = l.a.wrapped(b.a, "CurrentUserIcon", C.a);
			var k;
			! function(e) {
				e.Media = "post-composer-du-media", e.Link = "post-composer-du-link"
			}(k || (k = {}));
			const M = e => {
					switch (e) {
						case d.Ob.MEDIA:
							return "?media=true";
						case d.Ob.LINK_ONLY:
							return "?url";
						default:
							return ""
					}
				},
				w = e => {
					switch (e) {
						case d.Ob.MEDIA:
							return "media_post";
						case d.Ob.LINK_ONLY:
							return "link_post";
						default:
							return "create_post"
					}
				},
				y = Object(a.c)({
					currentUser: g.i,
					isPresenceConsumptionExpEnabled: h.a,
					isPresenceTogglePref: g.hb,
					subreddit: v.A,
					subredditAboutInfo: v.x
				}),
				L = Object(o.b)(y, e => ({
					navigateTo: t => e(Object(i.b)(t)),
					toggleTooltip: t => e(Object(u.h)({
						tooltipId: t
					}))
				})),
				A = () => n.fbt._("Create Media Post", null, {
					hk: "3T3YMO"
				}),
				F = () => n.fbt._("Create Link Post", null, {
					hk: "JUQfs"
				});
			t.default = Object(p.c)(L(({
				currentUser: e,
				isPresenceConsumptionExpEnabled: t,
				isPresenceTogglePref: s,
				navigateTo: r,
				sendEvent: o,
				subreddit: i,
				subredditAboutInfo: a,
				subredditName: l,
				toggleTooltip: u
			}) => {
				const p = Object(E.a)(),
					b = (l ? `/r/${l}` : "") + "/submit",
					h = function(e, t) {
						if (!e) return {
							link: !0,
							media: !0
						};
						const s = t && t.allowedPostTypes;
						if (!s) return {
							link: !0,
							media: !0
						};
						const {
							images: n,
							links: r,
							videos: c
						} = s;
						return {
							link: r,
							media: (c || n) && !e.isNSFW
						}
					}(i, a),
					v = e => {
						o(t => ({
							source: "post_composer_du",
							action: "click",
							noun: w(e),
							...N.defaults(t)
						}))
					},
					g = () => {
						v(d.Ob.POST), r(b)
					},
					U = t && s,
					y = e ? c.a.createElement(I.a, {
						className: C.a.UserIconWrapper,
						to: e.url
					}, c.a.createElement(j, {
						className: C.a.UserIcon,
						shouldShowPresenceIndicator: U
					})) : null;
				return c.a.createElement("div", {
					className: C.a.Container
				}, y, c.a.createElement("input", {
					name: "createPost",
					className: C.a.Input,
					onChange: g,
					onClick: g,
					onKeyPress: g,
					placeholder: n.fbt._("Create Post", null, {
						hk: "OcnKS"
					}),
					type: "text"
				}), h.media && c.a.createElement(x.q, {
					className: C.a.Button,
					"aria-label": A(),
					priority: x.b.Plain,
					kind: x.a.InternalLink,
					size: x.c.M,
					id: k.Media,
					onClick: () => v(d.Ob.MEDIA),
					onMouseEnter: () => u(k.Media),
					onMouseLeave: () => u(k.Media),
					to: b + M(d.Ob.MEDIA),
					Icon: p ? e => c.a.createElement(_.a, P({
						name: "image_post"
					}, e)) : f.a,
					isSquare: !0
				}, c.a.createElement(m.c, {
					caretOnTop: !0,
					tooltipId: k.Media,
					text: A()
				})), h.link && c.a.createElement(x.q, {
					className: C.a.Button,
					priority: x.b.Plain,
					kind: x.a.InternalLink,
					size: x.c.M,
					"aria-label": F(),
					id: k.Link,
					onClick: () => v(d.Ob.LINK_ONLY),
					onMouseEnter: () => u(k.Link),
					onMouseLeave: () => u(k.Link),
					to: b + M(d.Ob.LINK_ONLY),
					Icon: p ? e => c.a.createElement(_.a, P({
						name: "link_post"
					}, e)) : O.a,
					isSquare: !0
				}, c.a.createElement(m.c, {
					caretOnTop: !0,
					tooltipId: k.Media,
					text: A()
				})))
			}))
		},
		"./src/reddit/components/UserIcon/CurrentUserIcon.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/react/index.js"),
				c = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/helpers/userSnoovatar/index.ts"),
				d = s("./src/reddit/selectors/user.ts"),
				l = s("./src/reddit/components/UserIcon/PresenceDot.tsx"),
				u = s("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				m = s("./src/reddit/components/UserIcon/UserIcon.tsx"),
				p = s("./src/reddit/components/UserIcon/UserIcon.m.less"),
				b = s.n(p);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const I = Object(i.c)({
					currentUser: d.i,
					isNightMode: d.V,
					isPresenceUserPrefEnabled: d.hb,
					shouldHideNSFW: d.B
				}),
				E = Object(o.b)(I);
			t.a = E(e => {
				const {
					currentUser: t,
					shouldShowPresenceIndicator: s,
					isPresenceUserPrefEnabled: r,
					wrapperClassName: o,
					...i
				} = e, d = Object(a.a)(null == t ? void 0 : t.accountIcon);
				return c.a.createElement("div", {
					className: Object(n.a)(b.a.currentUserIconWrapper, o)
				}, d ? c.a.createElement(u.a, {
					headshot: t.accountIcon,
					className: e.className
				}) : c.a.createElement(m.a, x({}, i, {
					iconUrl: t ? t.accountIcon : void 0,
					isCurrentUser: !0,
					isNSFW: !!t && t.isNSFW
				})), s && c.a.createElement(l.a, {
					showPresence: !0
				}))
			})
		},
		"./src/reddit/icons/svgs/FormattingHyperlink/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_2-0pxD6-cM6bWeb73TNNhJ"
			}
		},
		"./src/reddit/icons/svgs/FormattingHyperlink/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				c = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/FormattingHyperlink/index.m.less"),
				i = s.n(o);
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
		"./src/reddit/icons/svgs/Media/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				fill: "inherit",
				fillRule: "evenodd",
				d: "m8.986223,16.927949l2.240493,-3.024991l-3.521864,-5.376734c-0.102125,-0.156 -0.274999,-0.251499 -0.461249,-0.253749c-0.158375,-0.01 -0.362749,0.0875 -0.468249,0.241249l-5.239359,7.532977c-0.12,0.170624 -0.1335,0.394124 -0.037,0.579248c0.0975,0.185249 0.287499,0.301999 0.497498,0.301999l6.989729,0zm8.513724,3.071991l-14.999954,0c-1.378746,0 -2.499992,-1.121247 -2.499992,-2.499992l0,-14.999954c0,-1.378746 1.121247,-2.499992 2.499992,-2.499992l14.999954,0c1.378746,0 2.499992,1.121247 2.499992,2.499992l0,14.999954c0,1.378746 -1.121247,2.499992 -2.499992,2.499992zm0.803498,-3.071991c0.221249,0 0.420999,-0.129125 0.511873,-0.331249c0.091,-0.201999 0.05375,-0.437749 -0.092,-0.602748l-4.238862,-4.778985c-0.11125,-0.12575 -0.257124,-0.186249 -0.444499,-0.188749c-0.169624,0.008 -0.325624,0.091 -0.425499,0.226874l-3.540739,4.778985c-0.126875,0.170749 -0.145,0.398749 -0.0495,0.587123c0.094375,0.189749 0.288749,0.308749 0.500748,0.308749l7.778726,0l-0.00025,0zm-2.982116,-11.404215c0,-1.173746 -0.952497,-2.124994 -2.124994,-2.124994c-1.174996,0 -2.124994,0.951247 -2.124994,2.124994c0,1.172496 0.949997,2.123744 2.124994,2.123744c1.172496,0 2.124994,-0.951247 2.124994,-2.123744z"
			}))
		},
		"./src/reddit/selectors/experiments/presenceIndicator.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return c
			})), s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts");
			const c = e => {
					return Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: n.Fc
					}) === n.Pc.Enabled
				},
				o = e => {
					return Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: n.Ec
					}) === n.Oc.Enabled
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-InFeedPostCreation.233000e959b0c9865531.js.map