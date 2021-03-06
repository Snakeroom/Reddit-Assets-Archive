// https://www.redditstatic.com/desktop2x/reddit-components-InFeedPostCreation.bc8be8c4ffb851fe290c.js
// Retrieved at 7/15/2021, 10:50:05 AM by Reddit Dataminer v1.0.0
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
				U = n("./src/reddit/selectors/subreddit.ts"),
				f = n("./src/reddit/selectors/telemetry.ts"),
				C = n("./src/reddit/selectors/user.ts"),
				N = n("./src/reddit/components/InFeedPostCreation/index.m.less"),
				O = n.n(N);
			const P = l.a.wrapped(b.a, "CurrentUserIcon", O.a);
			var j;
			! function(e) {
				e.Media = "post-composer-du-media", e.Link = "post-composer-du-link"
			}(j || (j = {}));
			const h = e => {
					switch (e) {
						case d.Rb.MEDIA:
							return "?media=true";
						case d.Rb.LINK_ONLY:
							return "?url";
						default:
							return ""
					}
				},
				k = e => {
					switch (e) {
						case d.Rb.MEDIA:
							return "media_post";
						case d.Rb.LINK_ONLY:
							return "link_post";
						default:
							return "create_post"
					}
				},
				M = Object(a.c)({
					currentUser: C.j,
					isPresenceConsumptionExpEnabled: E.a,
					isPresenceTogglePref: C.hb,
					subreddit: U.y,
					subredditAboutInfo: U.v
				}),
				L = Object(c.b)(M, e => ({
					navigateTo: t => e(Object(i.b)(t)),
					toggleTooltip: t => e(Object(u.h)({
						tooltipId: t
					}))
				})),
				v = () => r.fbt._("Create Media Post", null, {
					hk: "3T3YMO"
				}),
				g = () => r.fbt._("Create Link Post", null, {
					hk: "JUQfs"
				});
			t.default = Object(m.c)(L(({
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
							noun: k(e),
							...f.defaults(t)
						}))
					},
					U = () => {
						E(d.Rb.POST), s(m)
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
					onChange: U,
					onClick: U,
					onKeyPress: U,
					placeholder: r.fbt._("Create Post", null, {
						hk: "OcnKS"
					}),
					type: "text"
				}), b.media && o.a.createElement(I.q, {
					className: O.a.Button,
					"aria-label": v(),
					priority: I.b.Plain,
					kind: I.a.InternalLink,
					size: I.c.M,
					id: j.Media,
					onClick: () => E(d.Rb.MEDIA),
					onMouseEnter: () => u(j.Media),
					onMouseLeave: () => u(j.Media),
					to: m + h(d.Rb.MEDIA),
					Icon: Object(_.b)("image_post"),
					isSquare: !0
				}, o.a.createElement(p.c, {
					caretOnTop: !0,
					tooltipId: j.Media,
					text: v()
				})), b.link && o.a.createElement(I.q, {
					className: O.a.Button,
					priority: I.b.Plain,
					kind: I.a.InternalLink,
					size: I.c.M,
					"aria-label": g(),
					id: j.Link,
					onClick: () => E(d.Rb.LINK_ONLY),
					onMouseEnter: () => u(j.Link),
					onMouseLeave: () => u(j.Link),
					to: m + h(d.Rb.LINK_ONLY),
					Icon: Object(_.b)("link_post"),
					isSquare: !0
				}, o.a.createElement(p.c, {
					caretOnTop: !0,
					tooltipId: j.Media,
					text: v()
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
					currentUser: d.j,
					isNightMode: d.V,
					isPresenceUserPrefEnabled: d.hb,
					shouldHideNSFW: d.B
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
				})), n && o.a.createElement(l.a, {
					showPresence: !0
				}))
			})
		},
		"./src/reddit/selectors/experiments/presenceIndicator.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return c
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => {
					return Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: r.Uc
					}) === r.ed.Enabled
				},
				c = e => {
					return Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: r.Tc
					}) === r.dd.Enabled
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-InFeedPostCreation.bc8be8c4ffb851fe290c.js.map