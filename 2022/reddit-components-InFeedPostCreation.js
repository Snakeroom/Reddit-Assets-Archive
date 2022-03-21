// https://www.redditstatic.com/desktop2x/reddit-components-InFeedPostCreation.228b38051bd65bf114d3.js
// Retrieved at 3/21/2022, 5:00:08 PM by Reddit Dataminer v1.0.0
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
				d = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/constants/index.ts"),
				l = n("./src/lib/lessComponent.tsx"),
				u = n("./src/reddit/actions/tooltip.ts"),
				p = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				m = n("./src/reddit/components/TrackingHelper/index.tsx"),
				b = n("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				I = n("./src/reddit/controls/Button/index.tsx"),
				x = n("./src/reddit/controls/InternalLink/index.tsx"),
				_ = n("./src/reddit/helpers/trackers/postComposer.ts"),
				f = n("./src/reddit/icons/fonts/index.tsx"),
				E = n("./src/reddit/selectors/experiments/onlineIndicator.ts"),
				U = n("./src/reddit/selectors/subreddit.ts"),
				O = n("./src/reddit/selectors/user.ts"),
				N = n("./src/reddit/components/InFeedPostCreation/index.m.less"),
				j = n.n(N);
			const C = l.a.wrapped(b.a, "CurrentUserIcon", j.a);
			var P;
			! function(e) {
				e.Media = "post-composer-du-media", e.Link = "post-composer-du-link"
			}(P || (P = {}));
			const k = e => {
					switch (e) {
						case a.Wb.MEDIA:
							return "?media=true";
						case a.Wb.LINK_ONLY:
							return "?url";
						default:
							return ""
					}
				},
				h = e => {
					switch (e) {
						case a.Wb.MEDIA:
							return "media_post";
						case a.Wb.LINK_ONLY:
							return "link_post";
						default:
							return "create_post"
					}
				},
				M = Object(d.c)({
					currentUser: O.k,
					isPresenceConsumptionExpEnabled: E.c,
					isPresenceTogglePref: O.U,
					subreddit: U.x,
					subredditAboutInfo: U.u
				}),
				L = Object(c.b)(M, e => ({
					navigateTo: t => e(Object(i.b)(t)),
					toggleTooltip: t => e(Object(u.h)({
						tooltipId: t
					}))
				})),
				g = () => r.fbt._("Create Media Post", null, {
					hk: "3T3YMO"
				}),
				v = () => r.fbt._("Create Link Post", null, {
					hk: "JUQfs"
				});
			t.default = Object(m.c)(L(({
				currentUser: e,
				isPresenceConsumptionExpEnabled: t,
				isPresenceTogglePref: n,
				navigateTo: s,
				sendEvent: c,
				subreddit: i,
				subredditAboutInfo: d,
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
					}(i, d),
					E = e => {
						c(Object(_.x)({
							actionInfoType: "du",
							subredditId: null == i ? void 0 : i.id,
							noun: h(e)
						}))
					},
					U = () => {
						E(a.Wb.POST), s(m)
					},
					O = t && n,
					N = e ? o.a.createElement(x.a, {
						className: j.a.UserIconWrapper,
						to: e.url
					}, o.a.createElement(C, {
						className: j.a.UserIcon,
						shouldShowPresenceIndicator: O
					})) : null;
				return o.a.createElement("div", {
					className: j.a.Container
				}, N, o.a.createElement("input", {
					name: "createPost",
					className: j.a.Input,
					onChange: U,
					onClick: U,
					onKeyPress: U,
					placeholder: r.fbt._("Create Post", null, {
						hk: "OcnKS"
					}),
					type: "text"
				}), b.media && o.a.createElement(I.t, {
					className: j.a.Button,
					"aria-label": g(),
					priority: I.c.Plain,
					kind: I.b.InternalLink,
					size: I.d.M,
					id: P.Media,
					onClick: () => E(a.Wb.MEDIA),
					onMouseEnter: () => u(P.Media),
					onMouseLeave: () => u(P.Media),
					to: m + k(a.Wb.MEDIA),
					Icon: Object(f.b)("image_post"),
					isSquare: !0
				}, o.a.createElement(p.c, {
					caretOnTop: !0,
					tooltipId: P.Media,
					text: g()
				})), b.link && o.a.createElement(I.t, {
					className: j.a.Button,
					priority: I.c.Plain,
					kind: I.b.InternalLink,
					size: I.d.M,
					"aria-label": v(),
					id: P.Link,
					onClick: () => E(a.Wb.LINK_ONLY),
					onMouseEnter: () => u(P.Link),
					onMouseLeave: () => u(P.Link),
					to: m + k(a.Wb.LINK_ONLY),
					Icon: Object(f.b)("link_post"),
					isSquare: !0
				}, o.a.createElement(p.c, {
					caretOnTop: !0,
					tooltipId: P.Media,
					text: g()
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
				d = n("./src/reddit/helpers/userSnoovatar/index.ts"),
				a = n("./src/reddit/selectors/user.ts"),
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
					currentUser: a.k,
					isNightMode: a.cb,
					isPresenceUserPrefEnabled: a.U,
					shouldHideNSFW: a.F
				}),
				_ = Object(c.b)(x);
			t.a = _(e => {
				const {
					currentUser: t,
					shouldShowPresenceIndicator: n,
					isPresenceUserPrefEnabled: s,
					wrapperClassName: c,
					...i
				} = e, a = Object(d.b)(null == t ? void 0 : t.accountIcon);
				return o.a.createElement("div", {
					className: Object(r.a)(b.a.currentUserIconWrapper, c)
				}, a ? o.a.createElement(u.a, {
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
		"./src/reddit/selectors/experiments/onlineIndicator.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return c
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "a", (function() {
				return a
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts"),
				o = n("./src/reddit/selectors/experiments/presence.ts");
			const c = e => {
					return Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: r.se
					}) === r.dd
				},
				i = e => {
					if (Object(o.a)(e)) return !1;
					return Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: r.re
					}) === r.dd
				},
				d = e => {
					return Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: r.ie
					}) === r.dd
				},
				a = e => {
					if (Object(o.a)(e)) return !1;
					return Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: r.he
					}) === r.dd
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-InFeedPostCreation.228b38051bd65bf114d3.js.map