// https://www.redditstatic.com/desktop2x/reddit-components-InFeedPostCreation.819613a9e38a5d02b58d.js
// Retrieved at 3/10/2021, 6:50:05 PM by Reddit Dataminer v1.0.0
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
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				u = s("./src/reddit/actions/tooltip.ts"),
				m = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				x = s("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				b = s("./src/reddit/components/UserIcon/UserIcon.tsx"),
				I = s("./src/reddit/controls/Button/index.tsx"),
				v = s("./src/reddit/controls/InternalLink/index.tsx"),
				E = s("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				_ = s("./src/reddit/icons/fonts/index.tsx"),
				f = s("./src/reddit/icons/svgs/FormattingHyperlink/index.tsx"),
				g = s("./src/reddit/icons/svgs/Media/index.tsx"),
				N = s("./src/reddit/selectors/subreddit.ts"),
				C = s("./src/reddit/selectors/telemetry.ts"),
				h = s("./src/reddit/selectors/user.ts"),
				U = s("./src/reddit/components/InFeedPostCreation/index.m.less"),
				O = s.n(U);

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const w = l.a.wrapped(x.a, "CurrentUserIcon", O.a);
			var L;
			! function(e) {
				e.Media = "post-composer-du-media", e.Link = "post-composer-du-link"
			}(L || (L = {}));
			const M = e => {
					switch (e) {
						case d.Lb.MEDIA:
							return "?media=true";
						case d.Lb.LINK_ONLY:
							return "?url";
						default:
							return ""
					}
				},
				k = e => {
					switch (e) {
						case d.Lb.MEDIA:
							return "media_post";
						case d.Lb.LINK_ONLY:
							return "link_post";
						default:
							return "create_post"
					}
				},
				P = Object(o.c)({
					currentUser: h.i,
					subredditAboutInfo: N.x,
					subreddit: N.A
				}),
				y = Object(a.b)(P, e => ({
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
			t.default = Object(p.c)(y(({
				currentUser: e,
				subredditAboutInfo: t,
				subreddit: s,
				sendEvent: r,
				subredditName: a,
				navigateTo: i,
				toggleTooltip: o
			}) => {
				const l = Object(E.a)(),
					u = (a ? `/r/${a}` : "") + "/submit",
					p = function(e, t) {
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
					}(s, t),
					x = e => {
						r(t => ({
							source: "post_composer_du",
							action: "click",
							noun: k(e),
							...C.defaults(t)
						}))
					},
					N = () => {
						x(d.Lb.POST), i(u)
					};
				let h;
				return e && (h = Object(b.b)(e.accountIcon) ? c.a.createElement(v.a, {
					className: O.a.UserIconWrapper,
					to: "/settings/profile"
				}, c.a.createElement(w, {
					className: O.a.UserIcon
				})) : c.a.createElement("span", {
					className: O.a.UserIconWrapper
				}, c.a.createElement(w, {
					className: O.a.UserIcon
				}))), c.a.createElement("div", {
					className: O.a.Container
				}, h, c.a.createElement("input", {
					className: O.a.Input,
					onChange: N,
					onClick: N,
					onKeyPress: N,
					placeholder: n.fbt._("Create Post", null, {
						hk: "OcnKS"
					}),
					type: "text"
				}), p.media && c.a.createElement(I.q, {
					className: O.a.Button,
					"aria-label": A(),
					priority: I.b.Plain,
					kind: I.a.InternalLink,
					size: I.c.M,
					id: L.Media,
					onClick: () => x(d.Lb.MEDIA),
					onMouseEnter: () => o(L.Media),
					onMouseLeave: () => o(L.Media),
					to: u + M(d.Lb.MEDIA),
					Icon: l ? e => c.a.createElement(_.a, j({
						name: "image_post"
					}, e)) : g.a,
					isSquare: !0
				}, c.a.createElement(m.c, {
					caretOnTop: !0,
					tooltipId: L.Media,
					text: A()
				})), p.link && c.a.createElement(I.q, {
					className: O.a.Button,
					priority: I.b.Plain,
					kind: I.a.InternalLink,
					size: I.c.M,
					"aria-label": F(),
					id: L.Link,
					onClick: () => x(d.Lb.LINK_ONLY),
					onMouseEnter: () => o(L.Link),
					onMouseLeave: () => o(L.Link),
					to: u + M(d.Lb.LINK_ONLY),
					Icon: l ? e => c.a.createElement(_.a, j({
						name: "link_post"
					}, e)) : f.a,
					isSquare: !0
				}, c.a.createElement(m.c, {
					caretOnTop: !0,
					tooltipId: L.Media,
					text: A()
				})))
			}))
		},
		"./src/reddit/components/UserIcon/CurrentUserIcon.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				c = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/helpers/userSnoovatar/index.ts"),
				d = s("./src/reddit/selectors/experiments/presenceIndicator.ts"),
				l = s("./src/reddit/selectors/user.ts"),
				u = s("./src/reddit/icons/svgs/PresenceCircle/index.tsx"),
				m = s("./src/reddit/components/UserIcon/UserIcon.m.less"),
				p = s.n(m);
			var x = e => {
					const {
						showPresence: t
					} = e;
					return r.a.createElement(u.a, {
						className: Object(i.a)(p.a.presenceDot, {
							[p.a.isLit]: t
						})
					})
				},
				b = s("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				I = s("./src/reddit/components/UserIcon/UserIcon.tsx");

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const E = Object(a.c)({
					currentUser: l.i,
					isNightMode: l.U,
					isPresenceExpEnabled: d.a,
					isPresenceUserPrefEnabled: l.gb,
					shouldHideNSFW: l.B
				}),
				_ = Object(c.b)(E);
			t.a = _(e => {
				const {
					currentUser: t,
					shouldShowPresenceIndicator: s,
					isPresenceUserPrefEnabled: n,
					isPresenceExpEnabled: c,
					wrapperClassName: a,
					...d
				} = e, l = Object(o.a)(null == t ? void 0 : t.accountIcon);
				return r.a.createElement("div", {
					className: Object(i.a)(p.a.currentUserIconWrapper, a)
				}, l ? r.a.createElement(b.a, {
					headshot: t.accountIcon,
					className: e.className
				}) : r.a.createElement(I.a, v({}, d, {
					iconUrl: t ? t.accountIcon : void 0,
					isCurrentUser: !0,
					isNSFW: !!t && t.isNSFW
				})), c && s && n && r.a.createElement(x, {
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
				a = s("./src/reddit/icons/svgs/FormattingHyperlink/index.m.less"),
				i = s.n(a);
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
		"./src/reddit/icons/svgs/PresenceCircle/index.m.less": function(e, t, s) {
			e.exports = {
				defaultInactiveState: "_1g3Xfh9mljLHWv24M9A3Rw",
				outline: "_3SlBAJb2MbUHwgBZFH8eL7"
			}
		},
		"./src/reddit/icons/svgs/PresenceCircle/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				c = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/PresenceCircle/index.m.less"),
				i = s.n(a);
			t.a = e => r.a.createElement("svg", {
				className: Object(c.a)(i.a.defaultInactiveState, e.className),
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg",
				width: "12",
				height: "12"
			}, r.a.createElement("circle", {
				cx: "6",
				cy: "6",
				r: "4"
			}), r.a.createElement("path", {
				className: i.a.outline,
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6ZM6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10Z"
			}))
		},
		"./src/reddit/selectors/experiments/presenceIndicator.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts");
			const c = e => {
				return Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: n.wc
				}) === n.Fc.Enabled
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-InFeedPostCreation.819613a9e38a5d02b58d.js.map