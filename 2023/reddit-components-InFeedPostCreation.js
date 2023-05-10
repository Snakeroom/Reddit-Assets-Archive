// https://www.redditstatic.com/desktop2x/reddit-components-InFeedPostCreation.b24d23cd30067cf90226.js
// Retrieved at 5/10/2023, 2:10:03 PM by Reddit Dataminer v1.0.0
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
				c = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
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
				f = n("./src/reddit/helpers/trackers/postComposer.ts"),
				_ = n("./src/reddit/icons/fonts/index.tsx"),
				E = n("./src/reddit/selectors/experiments/onlineIndicator.ts"),
				O = n("./src/reddit/selectors/subreddit.ts"),
				U = n("./src/reddit/selectors/user.ts"),
				P = n("./src/reddit/components/InFeedPostCreation/index.m.less"),
				C = n.n(P);
			const N = l.a.wrapped(b.a, "CurrentUserIcon", C.a);
			var j;
			! function(e) {
				e.Media = "post-composer-du-media", e.Link = "post-composer-du-link"
			}(j || (j = {}));
			const h = e => {
					switch (e) {
						case d.cc.MEDIA:
							return "?media=true";
						case d.cc.LINK_ONLY:
							return "?url";
						default:
							return ""
					}
				},
				k = e => {
					switch (e) {
						case d.cc.MEDIA:
							return "media_post";
						case d.cc.LINK_ONLY:
							return "link_post";
						default:
							return "create_post"
					}
				},
				M = Object(a.c)({
					currentUser: U.m,
					isPresenceConsumptionExpEnabled: E.c,
					isPresenceTogglePref: U.X,
					subreddit: O.C,
					subredditAboutInfo: O.z
				}),
				g = Object(o.b)(M, e => ({
					navigateTo: t => e(Object(i.b)(t)),
					toggleTooltip: t => e(Object(u.h)({
						tooltipId: t
					}))
				})),
				L = () => r.fbt._("Create Media Post", null, {
					hk: "3T3YMO"
				}),
				v = () => r.fbt._("Create Link Post", null, {
					hk: "JUQfs"
				});
			t.default = Object(m.c)(g(e => {
				let {
					currentUser: t,
					isPresenceConsumptionExpEnabled: n,
					isPresenceTogglePref: s,
					navigateTo: o,
					sendEvent: i,
					subreddit: a,
					subredditAboutInfo: l,
					subredditName: u,
					toggleTooltip: m
				} = e;
				const b = (u ? `/r/${u}` : "") + "/submit",
					E = function(e, t) {
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
							videos: c
						} = n;
						return {
							link: s,
							media: (c || r) && !e.isNSFW
						}
					}(a, l),
					O = e => {
						i(Object(f.x)({
							actionInfoType: "du",
							subredditId: null == a ? void 0 : a.id,
							noun: k(e)
						}))
					},
					U = () => {
						O(d.cc.POST), o(b)
					},
					P = n && s,
					M = t ? c.a.createElement(x.default, {
						className: C.a.UserIconWrapper,
						to: t.url
					}, c.a.createElement(N, {
						className: C.a.UserIcon,
						shouldShowPresenceIndicator: P
					})) : null;
				return c.a.createElement("div", {
					className: C.a.Container
				}, M, c.a.createElement("input", {
					name: "createPost",
					className: C.a.Input,
					onChange: U,
					onClick: U,
					onKeyPress: U,
					placeholder: r.fbt._("Create Post", null, {
						hk: "OcnKS"
					}),
					type: "text"
				}), E.media && c.a.createElement(I.t, {
					className: C.a.Button,
					"aria-label": L(),
					priority: I.c.Plain,
					kind: I.b.InternalLink,
					size: I.d.M,
					id: j.Media,
					onClick: () => O(d.cc.MEDIA),
					onMouseEnter: () => m(j.Media),
					onMouseLeave: () => m(j.Media),
					to: b + h(d.cc.MEDIA),
					Icon: Object(_.b)("image_post"),
					isSquare: !0
				}, c.a.createElement(p.c, {
					caretOnTop: !0,
					tooltipId: j.Media,
					text: L()
				})), E.link && c.a.createElement(I.t, {
					className: C.a.Button,
					priority: I.c.Plain,
					kind: I.b.InternalLink,
					size: I.d.M,
					"aria-label": v(),
					id: j.Link,
					onClick: () => O(d.cc.LINK_ONLY),
					onMouseEnter: () => m(j.Link),
					onMouseLeave: () => m(j.Link),
					to: b + h(d.cc.LINK_ONLY),
					Icon: Object(_.b)("link_post"),
					isSquare: !0
				}, c.a.createElement(p.c, {
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
				c = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
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
					currentUser: d.m,
					isNightMode: d.fb,
					isPresenceUserPrefEnabled: d.X,
					shouldHideNSFW: d.H
				}),
				f = Object(o.b)(x);
			t.a = f(e => {
				const {
					currentUser: t,
					shouldShowPresenceIndicator: n,
					isPresenceUserPrefEnabled: s,
					wrapperClassName: o,
					...i
				} = e, d = Object(a.a)(null == t ? void 0 : t.accountIcon);
				return c.a.createElement("div", {
					className: Object(r.a)(b.a.currentUserIconWrapper, o)
				}, d ? c.a.createElement(u.a, {
					headshot: t.accountIcon,
					className: e.className
				}) : c.a.createElement(p.b, I({}, i, {
					iconUrl: t ? t.accountIcon : void 0,
					isCurrentUser: !0,
					isNSFW: !!t && t.isNSFW
				})), n && c.a.createElement(l.default, {
					showPresence: !0
				}))
			})
		},
		"./src/reddit/selectors/experiments/onlineIndicator.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return o
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return d
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts"),
				c = n("./src/reddit/selectors/experiments/presence.ts");
			const o = e => {
					return Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: r.gf
					}) === r.Pd
				},
				i = e => {
					if (Object(c.a)(e)) return !1;
					return Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: r.ff
					}) === r.Pd
				},
				a = e => {
					return Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: r.Te
					}) === r.Pd
				},
				d = e => {
					if (Object(c.a)(e)) return !1;
					return Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: r.Se
					}) === r.Pd
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-InFeedPostCreation.b24d23cd30067cf90226.js.map