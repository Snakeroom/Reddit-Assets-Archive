// https://www.redditstatic.com/desktop2x/reddit-components-InFeedPostCreation.6eaa838d4e52a6807cc6.js
// Retrieved at 5/24/2023, 2:40:04 PM by Reddit Dataminer v1.0.0
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
				i = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/react-router-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/constants/index.ts"),
				l = n("./src/lib/lessComponent.tsx"),
				u = n("./src/reddit/actions/tooltip.ts"),
				m = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				p = n("./src/reddit/components/TrackingHelper/index.tsx"),
				b = n("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				I = n("./src/reddit/controls/Button/index.tsx"),
				x = n("./src/reddit/controls/InternalLink/index.tsx"),
				f = n("./src/reddit/helpers/trackers/postComposer.ts"),
				U = n("./src/reddit/icons/fonts/index.tsx"),
				E = n("./src/reddit/selectors/experiments/onlineIndicator.ts"),
				_ = n("./src/reddit/selectors/subreddit.ts"),
				C = n("./src/reddit/selectors/user.ts"),
				N = n("./src/reddit/selectors/experiments/nsfwCommunityMediaUpload.ts"),
				O = n("./src/reddit/components/InFeedPostCreation/index.m.less"),
				j = n.n(O);
			const h = l.a.wrapped(b.a, "CurrentUserIcon", j.a);
			var P;
			! function(e) {
				e.Media = "post-composer-du-media", e.Link = "post-composer-du-link"
			}(P || (P = {}));
			const M = e => {
					switch (e) {
						case a.bc.MEDIA:
							return "?media=true";
						case a.bc.LINK_ONLY:
							return "?url";
						default:
							return ""
					}
				},
				k = e => {
					switch (e) {
						case a.bc.MEDIA:
							return "media_post";
						case a.bc.LINK_ONLY:
							return "link_post";
						default:
							return "create_post"
					}
				},
				w = Object(d.c)({
					currentUser: C.m,
					isNsfwCommunityMediaUploadKillSwitchEnabled: N.a,
					isPresenceConsumptionExpEnabled: E.c,
					isPresenceTogglePref: C.X,
					subreddit: _.C,
					subredditAboutInfo: _.z
				}),
				y = Object(o.b)(w, e => ({
					navigateTo: t => e(Object(c.b)(t)),
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
			t.default = Object(p.c)(y(e => {
				let {
					currentUser: t,
					isNsfwCommunityMediaUploadKillSwitchEnabled: n,
					isPresenceConsumptionExpEnabled: s,
					isPresenceTogglePref: o,
					navigateTo: c,
					sendEvent: d,
					subreddit: l,
					subredditAboutInfo: u,
					subredditName: p,
					toggleTooltip: b
				} = e;
				const E = (p ? `/r/${p}` : "") + "/submit",
					_ = function(e) {
						let {
							subreddit: t,
							subredditAboutInfo: n,
							isNsfwCommunityMediaUploadKillSwitchEnabled: r
						} = e;
						if (!t) return {
							link: !0,
							media: !0
						};
						const s = n && n.allowedPostTypes;
						if (!s) return {
							link: !0,
							media: !0
						};
						const {
							images: i,
							links: o,
							videos: c
						} = s, d = !!t && t.isNSFW;
						return {
							link: o,
							media: (c || i) && !(d && r)
						}
					}({
						subreddit: l,
						subredditAboutInfo: u,
						isNsfwCommunityMediaUploadKillSwitchEnabled: n
					}),
					C = e => {
						d(Object(f.x)({
							actionInfoType: "du",
							subredditId: null == l ? void 0 : l.id,
							noun: k(e)
						}))
					},
					N = () => {
						C(a.bc.POST), c(E)
					},
					O = s && o,
					w = t ? i.a.createElement(x.default, {
						className: j.a.UserIconWrapper,
						to: t.url
					}, i.a.createElement(h, {
						className: j.a.UserIcon,
						shouldShowPresenceIndicator: O
					})) : null;
				return i.a.createElement("div", {
					className: j.a.Container
				}, w, i.a.createElement("input", {
					name: "createPost",
					className: j.a.Input,
					onChange: N,
					onClick: N,
					onKeyPress: N,
					placeholder: r.fbt._("Create Post", null, {
						hk: "OcnKS"
					}),
					type: "text"
				}), _.media && i.a.createElement(I.t, {
					className: j.a.Button,
					"aria-label": L(),
					priority: I.c.Plain,
					kind: I.b.InternalLink,
					size: I.d.M,
					id: P.Media,
					onClick: () => C(a.bc.MEDIA),
					onMouseEnter: () => b(P.Media),
					onMouseLeave: () => b(P.Media),
					to: E + M(a.bc.MEDIA),
					Icon: Object(U.b)("image_post"),
					isSquare: !0
				}, i.a.createElement(m.c, {
					caretOnTop: !0,
					tooltipId: P.Media,
					text: L()
				})), _.link && i.a.createElement(I.t, {
					className: j.a.Button,
					priority: I.c.Plain,
					kind: I.b.InternalLink,
					size: I.d.M,
					"aria-label": g(),
					id: P.Link,
					onClick: () => C(a.bc.LINK_ONLY),
					onMouseEnter: () => b(P.Link),
					onMouseLeave: () => b(P.Link),
					to: E + M(a.bc.LINK_ONLY),
					Icon: Object(U.b)("link_post"),
					isSquare: !0
				}, i.a.createElement(m.c, {
					caretOnTop: !0,
					tooltipId: P.Media,
					text: L()
				})))
			}))
		},
		"./src/reddit/components/UserIcon/CurrentUserIcon.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/classNames/index.ts"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/helpers/userSnoovatar/index.ts"),
				a = n("./src/reddit/selectors/user.ts"),
				l = n("./src/reddit/components/UserIcon/PresenceDot.tsx"),
				u = n("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				m = n("./src/reddit/components/UserIcon/UserIcon.tsx"),
				p = n("./src/reddit/components/UserIcon/UserIcon.m.less"),
				b = n.n(p);

			function I() {
				return (I = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const x = Object(c.c)({
					currentUser: a.m,
					isNightMode: a.fb,
					isPresenceUserPrefEnabled: a.X,
					shouldHideNSFW: a.H
				}),
				f = Object(o.b)(x);
			t.a = f(e => {
				const {
					currentUser: t,
					shouldShowPresenceIndicator: n,
					isPresenceUserPrefEnabled: s,
					wrapperClassName: o,
					...c
				} = e, a = Object(d.a)(null == t ? void 0 : t.accountIcon);
				return i.a.createElement("div", {
					className: Object(r.a)(b.a.currentUserIconWrapper, o)
				}, a ? i.a.createElement(u.a, {
					headshot: t.accountIcon,
					className: e.className
				}) : i.a.createElement(m.b, I({}, c, {
					iconUrl: t ? t.accountIcon : void 0,
					isCurrentUser: !0,
					isNSFW: !!t && t.isNSFW
				})), n && i.a.createElement(l.default, {
					showPresence: !0
				}))
			})
		},
		"./src/reddit/selectors/experiments/onlineIndicator.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return o
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "a", (function() {
				return a
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/experiments/presence.ts");
			const o = e => {
					return Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: r.mf
					}) === r.Ud
				},
				c = e => {
					if (Object(i.a)(e)) return !1;
					return Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: r.lf
					}) === r.Ud
				},
				d = e => {
					return Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: r.af
					}) === r.Ud
				},
				a = e => {
					if (Object(i.a)(e)) return !1;
					return Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: r.Ze
					}) === r.Ud
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-InFeedPostCreation.6eaa838d4e52a6807cc6.js.map