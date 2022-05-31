// https://www.redditstatic.com/desktop2x/reddit-components-InFeedPostCreation.c50356c0ce2c7d2f6070.js
// Retrieved at 5/31/2022, 1:30:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-InFeedPostCreation"], {
		"./src/reddit/components/InFeedPostCreation/index.m.less": function(e, t, r) {
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
		"./src/reddit/components/InFeedPostCreation/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				o = r.n(s),
				c = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/react-router-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				d = r("./src/lib/constants/index.ts"),
				l = r("./src/lib/lessComponent.tsx"),
				u = r("./src/reddit/actions/tooltip.ts"),
				p = r("./src/reddit/components/InfoTextTooltip/index.tsx"),
				m = r("./src/reddit/components/TrackingHelper/index.tsx"),
				b = r("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				I = r("./src/reddit/controls/Button/index.tsx"),
				x = r("./src/reddit/controls/InternalLink/index.tsx"),
				_ = r("./src/reddit/helpers/trackers/postComposer.ts"),
				f = r("./src/reddit/icons/fonts/index.tsx"),
				E = r("./src/reddit/selectors/experiments/onlineIndicator.ts"),
				U = r("./src/reddit/selectors/subreddit.ts"),
				O = r("./src/reddit/selectors/user.ts"),
				N = r("./src/reddit/components/InFeedPostCreation/index.m.less"),
				j = r.n(N);
			const C = l.a.wrapped(b.a, "CurrentUserIcon", j.a);
			var P;
			! function(e) {
				e.Media = "post-composer-du-media", e.Link = "post-composer-du-link"
			}(P || (P = {}));
			const k = e => {
					switch (e) {
						case d.Wb.MEDIA:
							return "?media=true";
						case d.Wb.LINK_ONLY:
							return "?url";
						default:
							return ""
					}
				},
				h = e => {
					switch (e) {
						case d.Wb.MEDIA:
							return "media_post";
						case d.Wb.LINK_ONLY:
							return "link_post";
						default:
							return "create_post"
					}
				},
				M = Object(a.c)({
					currentUser: O.k,
					isPresenceConsumptionExpEnabled: E.c,
					isPresenceTogglePref: O.U,
					subreddit: U.z,
					subredditAboutInfo: U.w
				}),
				L = Object(c.b)(M, e => ({
					navigateTo: t => e(Object(i.b)(t)),
					toggleTooltip: t => e(Object(u.h)({
						tooltipId: t
					}))
				})),
				g = () => n.fbt._("Create Media Post", null, {
					hk: "3T3YMO"
				}),
				v = () => n.fbt._("Create Link Post", null, {
					hk: "JUQfs"
				});
			t.default = Object(m.c)(L(e => {
				let {
					currentUser: t,
					isPresenceConsumptionExpEnabled: r,
					isPresenceTogglePref: s,
					navigateTo: c,
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
						const r = t && t.allowedPostTypes;
						if (!r) return {
							link: !0,
							media: !0
						};
						const {
							images: n,
							links: s,
							videos: o
						} = r;
						return {
							link: s,
							media: (o || n) && !e.isNSFW
						}
					}(a, l),
					U = e => {
						i(Object(_.x)({
							actionInfoType: "du",
							subredditId: null == a ? void 0 : a.id,
							noun: h(e)
						}))
					},
					O = () => {
						U(d.Wb.POST), c(b)
					},
					N = r && s,
					M = t ? o.a.createElement(x.default, {
						className: j.a.UserIconWrapper,
						to: t.url
					}, o.a.createElement(C, {
						className: j.a.UserIcon,
						shouldShowPresenceIndicator: N
					})) : null;
				return o.a.createElement("div", {
					className: j.a.Container
				}, M, o.a.createElement("input", {
					name: "createPost",
					className: j.a.Input,
					onChange: O,
					onClick: O,
					onKeyPress: O,
					placeholder: n.fbt._("Create Post", null, {
						hk: "OcnKS"
					}),
					type: "text"
				}), E.media && o.a.createElement(I.t, {
					className: j.a.Button,
					"aria-label": g(),
					priority: I.c.Plain,
					kind: I.b.InternalLink,
					size: I.d.M,
					id: P.Media,
					onClick: () => U(d.Wb.MEDIA),
					onMouseEnter: () => m(P.Media),
					onMouseLeave: () => m(P.Media),
					to: b + k(d.Wb.MEDIA),
					Icon: Object(f.b)("image_post"),
					isSquare: !0
				}, o.a.createElement(p.c, {
					caretOnTop: !0,
					tooltipId: P.Media,
					text: g()
				})), E.link && o.a.createElement(I.t, {
					className: j.a.Button,
					priority: I.c.Plain,
					kind: I.b.InternalLink,
					size: I.d.M,
					"aria-label": v(),
					id: P.Link,
					onClick: () => U(d.Wb.LINK_ONLY),
					onMouseEnter: () => m(P.Link),
					onMouseLeave: () => m(P.Link),
					to: b + k(d.Wb.LINK_ONLY),
					Icon: Object(f.b)("link_post"),
					isSquare: !0
				}, o.a.createElement(p.c, {
					caretOnTop: !0,
					tooltipId: P.Media,
					text: g()
				})))
			}))
		},
		"./src/reddit/components/UserIcon/CurrentUserIcon.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/lib/classNames/index.ts"),
				s = r("./node_modules/react/index.js"),
				o = r.n(s),
				c = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/reselect/es/index.js"),
				a = r("./src/reddit/helpers/userSnoovatar/index.ts"),
				d = r("./src/reddit/selectors/user.ts"),
				l = r("./src/reddit/components/UserIcon/PresenceDot.tsx"),
				u = r("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				p = r("./src/reddit/components/UserIcon/UserIcon.tsx"),
				m = r("./src/reddit/components/UserIcon/UserIcon.m.less"),
				b = r.n(m);

			function I() {
				return (I = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const x = Object(i.c)({
					currentUser: d.k,
					isNightMode: d.cb,
					isPresenceUserPrefEnabled: d.U,
					shouldHideNSFW: d.F
				}),
				_ = Object(c.b)(x);
			t.a = _(e => {
				const {
					currentUser: t,
					shouldShowPresenceIndicator: r,
					isPresenceUserPrefEnabled: s,
					wrapperClassName: c,
					...i
				} = e, d = Object(a.a)(null == t ? void 0 : t.accountIcon);
				return o.a.createElement("div", {
					className: Object(n.a)(b.a.currentUserIconWrapper, c)
				}, d ? o.a.createElement(u.a, {
					headshot: t.accountIcon,
					className: e.className
				}) : o.a.createElement(p.b, I({}, i, {
					iconUrl: t ? t.accountIcon : void 0,
					isCurrentUser: !0,
					isNSFW: !!t && t.isNSFW
				})), r && o.a.createElement(l.default, {
					showPresence: !0
				}))
			})
		},
		"./src/reddit/selectors/experiments/onlineIndicator.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return c
			})), r.d(t, "c", (function() {
				return i
			})), r.d(t, "b", (function() {
				return a
			})), r.d(t, "a", (function() {
				return d
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/helpers/chooseVariant/index.ts"),
				o = r("./src/reddit/selectors/experiments/presence.ts");
			const c = e => {
					return Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: n.He
					}) === n.rd
				},
				i = e => {
					if (Object(o.a)(e)) return !1;
					return Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: n.Ge
					}) === n.rd
				},
				a = e => {
					return Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: n.xe
					}) === n.rd
				},
				d = e => {
					if (Object(o.a)(e)) return !1;
					return Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: n.we
					}) === n.rd
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-InFeedPostCreation.c50356c0ce2c7d2f6070.js.map