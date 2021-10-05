// https://www.redditstatic.com/desktop2x/reddit-components-InFeedPostCreation.f87fda633ca414a0f3bf.js
// Retrieved at 10/5/2021, 2:30:04 PM by Reddit Dataminer v1.0.0
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
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				c = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/constants/index.ts"),
				l = n("./src/lib/lessComponent.tsx"),
				u = n("./src/reddit/actions/tooltip.ts"),
				p = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				m = n("./src/reddit/components/TrackingHelper/index.tsx"),
				b = n("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				I = n("./src/reddit/controls/Button/index.tsx"),
				x = n("./src/reddit/controls/InternalLink/index.tsx"),
				_ = n("./src/reddit/icons/fonts/index.tsx"),
				E = n("./src/reddit/selectors/experiments/presenceIndicator.ts"),
				f = n("./src/reddit/selectors/subreddit.ts"),
				U = n("./src/reddit/selectors/telemetry.ts"),
				C = n("./src/reddit/selectors/user.ts"),
				N = n("./src/reddit/components/InFeedPostCreation/index.m.less"),
				O = n.n(N);
			const P = l.a.wrapped(b.a, "CurrentUserIcon", O.a);
			var j;
			! function(e) {
				e.Media = "post-composer-du-media", e.Link = "post-composer-du-link"
			}(j || (j = {}));
			const k = e => {
					switch (e) {
						case d.Tb.MEDIA:
							return "?media=true";
						case d.Tb.LINK_ONLY:
							return "?url";
						default:
							return ""
					}
				},
				h = e => {
					switch (e) {
						case d.Tb.MEDIA:
							return "media_post";
						case d.Tb.LINK_ONLY:
							return "link_post";
						default:
							return "create_post"
					}
				},
				T = Object(a.c)({
					currentUser: C.k,
					isPresenceConsumptionExpEnabled: E.b,
					isPresenceTogglePref: C.P,
					subreddit: f.w,
					subredditAboutInfo: f.t
				}),
				M = Object(c.b)(T, e => ({
					navigateTo: t => e(Object(i.b)(t)),
					toggleTooltip: t => e(Object(u.h)({
						tooltipId: t
					}))
				})),
				L = () => r.fbt._("Create Media Post", null, {
					hk: "3T3YMO"
				}),
				g = () => r.fbt._("Create Link Post", null, {
					hk: "JUQfs"
				});
			t.default = Object(m.c)(M(({
				currentUser: e,
				isPresenceConsumptionExpEnabled: t,
				isPresenceTogglePref: n,
				navigateTo: s,
				sendEvent: c,
				subreddit: i,
				subredditAboutInfo: a,
				subredditName: l,
				toggleTooltip: u
			}) => {
				const m = (l ? `/r/${l}` : "") + "/submit",
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
							images: r,
							links: s,
							videos: o
						} = n;
						return {
							link: s,
							media: (o || r) && !e.isNSFW
						}
					}(i, a),
					E = e => {
						c(t => ({
							source: "post_composer_du",
							action: "click",
							noun: h(e),
							...U.defaults(t)
						}))
					},
					f = () => {
						E(d.Tb.POST), s(m)
					},
					C = t && n,
					N = e ? o.a.createElement(x.a, {
						className: O.a.UserIconWrapper,
						to: e.url
					}, o.a.createElement(P, {
						className: O.a.UserIcon,
						shouldShowPresenceIndicator: C
					})) : null;
				return o.a.createElement("div", {
					className: O.a.Container
				}, N, o.a.createElement("input", {
					name: "createPost",
					className: O.a.Input,
					onChange: f,
					onClick: f,
					onKeyPress: f,
					placeholder: r.fbt._("Create Post", null, {
						hk: "OcnKS"
					}),
					type: "text"
				}), b.media && o.a.createElement(I.s, {
					className: O.a.Button,
					"aria-label": L(),
					priority: I.b.Plain,
					kind: I.a.InternalLink,
					size: I.c.M,
					id: j.Media,
					onClick: () => E(d.Tb.MEDIA),
					onMouseEnter: () => u(j.Media),
					onMouseLeave: () => u(j.Media),
					to: m + k(d.Tb.MEDIA),
					Icon: Object(_.b)("image_post"),
					isSquare: !0
				}, o.a.createElement(p.c, {
					caretOnTop: !0,
					tooltipId: j.Media,
					text: L()
				})), b.link && o.a.createElement(I.s, {
					className: O.a.Button,
					priority: I.b.Plain,
					kind: I.a.InternalLink,
					size: I.c.M,
					"aria-label": g(),
					id: j.Link,
					onClick: () => E(d.Tb.LINK_ONLY),
					onMouseEnter: () => u(j.Link),
					onMouseLeave: () => u(j.Link),
					to: m + k(d.Tb.LINK_ONLY),
					Icon: Object(_.b)("link_post"),
					isSquare: !0
				}, o.a.createElement(p.c, {
					caretOnTop: !0,
					tooltipId: j.Media,
					text: L()
				})))
			}))
		},
		"./src/reddit/components/UserIcon/CurrentUserIcon.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/classNames/index.ts"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				c = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/helpers/userSnoovatar/index.ts"),
				d = n("./src/reddit/selectors/user.ts"),
				l = n("./src/reddit/components/UserIcon/PresenceDot.tsx"),
				u = n("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				p = n("./src/reddit/components/UserIcon/UserIcon.tsx"),
				m = n("./src/reddit/components/UserIcon/UserIcon.m.less"),
				b = n.n(m);

			function I() {
				return (I = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const x = Object(i.c)({
					currentUser: d.k,
					isNightMode: d.X,
					isPresenceUserPrefEnabled: d.P,
					shouldHideNSFW: d.C
				}),
				_ = Object(c.b)(x);
			t.a = _(e => {
				const {
					currentUser: t,
					shouldShowPresenceIndicator: n,
					isPresenceUserPrefEnabled: s,
					wrapperClassName: c,
					...i
				} = e, d = Object(a.a)(null == t ? void 0 : t.accountIcon);
				return o.a.createElement("div", {
					className: Object(r.a)(b.a.currentUserIconWrapper, c)
				}, d ? o.a.createElement(u.a, {
					headshot: t.accountIcon,
					className: e.className
				}) : o.a.createElement(p.b, I({}, i, {
					iconUrl: t ? t.accountIcon : void 0,
					isCurrentUser: !0,
					isNSFW: !!t && t.isNSFW
				})), n && o.a.createElement(l.default, {
					showPresence: !0
				}))
			})
		},
		"./src/reddit/selectors/experiments/presenceIndicator.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return o
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "a", (function() {
				return i
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => {
					return Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: r.Gd
					}) === r.Ec
				},
				c = e => {
					return Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: r.Fd
					}) === r.Ec
				},
				i = e => {
					return Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: r.xd
					}) === r.Ec
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-InFeedPostCreation.f87fda633ca414a0f3bf.js.map