// https://www.redditstatic.com/desktop2x/SupportersListModal.fdfb8c88309eb6a2ea90.js
// Retrieved at 4/21/2021, 11:40:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SupportersListModal"], {
		"./src/reddit/components/PowerupsSidebar/Supporters/Supporter/index.m.less": function(e, t, r) {
			e.exports = {
				container: "nLQ3kCzR-nlu3TdaikC9s",
				user: "_2RyQRwN8Zuq56O4TBtmkg1",
				name: "_2IGaFqLglCamTtD4mDQRiZ",
				userIconContainer: "k58KWeKTpmEL6oqR3bKIu",
				userIcon: "_1y6mzxZTJEsSjG3_NbXIiS",
				counter: "_2tSuwxjSKGj8dCE3nAMNQ1",
				powerupIcon: "_1zBtXZdl9mR2-othyOeQr6"
			}
		},
		"./src/reddit/components/PowerupsSidebar/Supporters/index.m.less": function(e, t, r) {
			e.exports = {
				item: "_3NpbAeMPiQKpToWDGreg_t",
				itemCropper: "_1SUg9FHcJ66bjzBWDro10b",
				animation: "_3jKAUYS5MvU0Koz85fPn-S",
				container: "_2B49Ad8MgHu8TYDSLNtfM3",
				expandButton: "_3xPQmoZqoeq-xOuehYr_2f"
			}
		},
		"./src/reddit/components/PowerupsSidebar/Supporters/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return L
			}));
			var s = r("./src/lib/classNames/index.ts"),
				o = r("./node_modules/react/index.js"),
				n = r.n(o),
				a = r("./node_modules/react-motion/lib/react-motion.js"),
				l = r("./src/reddit/controls/Button/index.tsx"),
				c = r("./src/reddit/components/PowerupsSidebar/Supporters/index.m.less"),
				i = r.n(c),
				u = r("./node_modules/fbt/lib/FbtPublic.js"),
				d = r("./src/reddit/components/PowerupsSidebar/common/utils.ts"),
				p = r("./src/reddit/hooks/useTracking.ts"),
				m = r("./src/reddit/components/UserIcon/index.tsx"),
				w = r("./src/reddit/controls/InternalLink/index.tsx"),
				b = r("./src/reddit/helpers/trackers/powerups.ts"),
				h = r("./src/reddit/components/PowerupsSidebar/Supporters/Supporter/index.m.less"),
				f = r.n(h);
			var _ = function(e) {
				var t, r;
				const o = Object(p.a)(),
					{
						className: a,
						supporter: l
					} = e,
					{
						score: c,
						supporterInfo: i
					} = l,
					h = (null == i ? void 0 : i.displayName) || u.fbt._({
						"*": "Anonymous Heroes",
						_1: "Anonymous Hero"
					}, [u.fbt._plural(c)], {
						hk: "8kyEI"
					}).toString(),
					_ = null === (t = null == i ? void 0 : i.icon) || void 0 === t ? void 0 : t.url,
					E = !!(null === (r = null == i ? void 0 : i.profile) || void 0 === r ? void 0 : r.isNsfw),
					v = Object(d.a)(c),
					x = n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
						className: f.a.userIconContainer
					}, n.a.createElement(m.a, {
						userName: h,
						iconUrl: _,
						className: f.a.userIcon,
						isNSFW: E
					})), n.a.createElement("h4", {
						className: f.a.name
					}, h));
				return n.a.createElement("div", {
					className: Object(s.a)(a, f.a.container)
				}, i ? n.a.createElement(w.a, {
					className: f.a.user,
					to: `/user/${h}/`,
					onClick: () => {
						i && o(Object(b.q)(i.id, i.displayName))
					}
				}, x) : n.a.createElement("div", {
					className: f.a.user
				}, x), n.a.createElement("div", {
					className: f.a.counter
				}, n.a.createElement(v, {
					className: f.a.powerupIcon
				}), c))
			};
			const {
				fbt: E
			} = r("./node_modules/fbt/lib/FbtPublic.js"), v = 100, x = 302, N = 40;

			function L(e) {
				return `${e.lastSupportedAt}__${e.score}`
			}
			const g = e => ({
				key: L(e),
				data: {
					supporter: e
				}
			});

			function j(e, t) {
				const r = t || v;
				return e.slice(0, r).map(g)
			}
			const S = () => ({
					width: x,
					height: Object(a.spring)(0)
				}),
				k = () => ({
					height: 0,
					width: 0,
					motionProgress: 0
				});
			class M extends n.a.Component {
				constructor(e) {
					super(e), this.state = {
						items: j(e.supporters, e.maxSupporters)
					}
				}
				render() {
					const {
						className: e,
						supporters: t,
						onShowFullSupportersList: r,
						isShortSupportersEnabled: o
					} = this.props, c = o && this.state.items.length < t.length;
					return n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
						className: Object(s.a)(i.a.container, e)
					}, n.a.createElement(a.TransitionMotion, {
						willLeave: S,
						willEnter: k,
						styles: this.state.items.map(e => ({
							...e,
							style: {
								width: Object(a.spring)(x),
								height: Object(a.spring)(N),
								motionProgress: Object(a.spring)(1)
							}
						}))
					}, e => n.a.createElement(n.a.Fragment, null, e.map(e => n.a.createElement("div", {
						className: i.a.item,
						key: e.key
					}, n.a.createElement("div", {
						className: i.a.itemCropper,
						style: {
							...e.style
						}
					}, n.a.createElement(_, {
						supporter: e.data.supporter
					}))))))), c && n.a.createElement(l.q, {
						priority: l.b.Secondary,
						className: i.a.expandButton,
						onClick: r,
						isFullWidth: !0
					}, E._("See All Heroes", null, {
						hk: "1VUmH9"
					})))
				}
				static getDerivedStateFromProps(e) {
					return {
						items: j(e.supporters, e.maxSupporters)
					}
				}
			}
			t.a = n.a.memo(M)
		},
		"./src/reddit/components/PowerupsSidebar/SupportersListModal/SupporterListItem/index.m.less": function(e, t, r) {
			e.exports = {
				supporter: "_2Kz24CA50SWyA5WKw8zC_",
				supporterRank: "_1ynyPq9kRFaA9N8AnhED23",
				user: "_1JeuJtxIf45Lbi8u9Y5p-2",
				supporterImageContainer: "pMBs1dX4PPfUXKCvRkWKj",
				supporterImage: "QsYRXJ5LAZUxXyBgdK7D8",
				supporterName: "kKDNFNseKMcPaNK-kOqAx",
				powerupIcon: "_2jU7-xXArZSgVZNuR-2mC_",
				score: "_1NRUW1ZbfWY0UABiD7BOPh"
			}
		},
		"./src/reddit/components/PowerupsSidebar/SupportersListModal/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_2KUDaXyzE_hk_VaNQaFeiE",
				header: "_3QlgM9TPO7r3_RIKVE-Niw",
				close: "_1GrB-l2oMdmh7l3UywkzKJ",
				heading: "Mxzo3Om3yx3TVmfnTGM4w",
				subheading: "_1akYW4Hm06hc_CYf8ti4ch",
				supportersContainer: "_2nsnGlUWjPDLPfUYMrKQIE",
				footer: "_1Db5CXe1DecnWF6czNCFXp",
				scrollGradient: "IXi_z31DcLZ0h0F211hHJ",
				gradientHidden: "_1AKZ6rRqqqsRwmDGkHv-2h",
				ctaButton: "_1ytVq8M9vMl0g5eS_HICcx",
				Icon: "_3lJhvYnKhKB3EvB1ZTTSgm",
				icon: "_3lJhvYnKhKB3EvB1ZTTSgm",
				isLeft: "_1UtM-gwQGwB1nfgb6ogGP4",
				isRight: "_12Lw4MfcICcZmluPq2tUzN",
				active: "WxKnsqt8a_mqSaMTYCko"
			}
		},
		"./src/reddit/components/PowerupsSidebar/SupportersListModal/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var s = r("./src/higherOrderComponents/asModal/index.tsx"),
				o = r("./src/lib/classNames/index.ts"),
				n = r("./node_modules/react/index.js"),
				a = r.n(n),
				l = r("./node_modules/react-redux/es/index.js"),
				c = r("./src/reddit/actions/login.ts"),
				i = r("./src/reddit/actions/modal.ts"),
				u = r("./src/reddit/components/PowerupsSidebar/Supporters/index.tsx"),
				d = r("./node_modules/fbt/lib/FbtPublic.js"),
				p = r("./src/reddit/components/PowerupsSidebar/common/utils.ts"),
				m = r("./src/reddit/components/PowerupsSidebar/SupportersListModal/SupporterListItem/index.m.less"),
				w = r.n(m),
				b = r("./src/reddit/components/UserIcon/index.tsx"),
				h = r("./src/reddit/controls/InternalLink/index.tsx"),
				f = r("./src/reddit/helpers/trackers/powerups.ts"),
				_ = r("./src/reddit/hooks/useTracking.ts");
			const E = e => a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
					className: w.a.supporterImageContainer
				}, a.a.createElement(b.a, {
					userName: e.name,
					iconUrl: e.iconUrl,
					isNSFW: e.isNsfw,
					className: w.a.supporterImage
				})), a.a.createElement("div", {
					className: w.a.supporterName
				}, e.name, " ", e.isCurrentUser && d.fbt._("(you)", null, {
					hk: "3foyZr"
				}))),
				v = e => e.isAnonymousUser ? a.a.createElement("div", {
					className: e.className
				}, e.children) : a.a.createElement(h.a, {
					className: e.className,
					to: `/user/${e.name}/`,
					onClick: e.onClick
				}, e.children),
				x = e => {
					var t, r;
					const s = Object(_.a)(),
						{
							supporter: o,
							currentUser: n,
							rank: l
						} = e,
						c = o.supporterInfo,
						i = !!n && n.id === (null == c ? void 0 : c.id),
						u = o.score,
						m = (null == c ? void 0 : c.displayName) || d.fbt._({
							"*": "Anonymous Heroes",
							_1: "Anonymous Hero"
						}, [d.fbt._plural(u)], {
							hk: "8kyEI"
						}).toString(),
						b = null === (t = null == c ? void 0 : c.icon) || void 0 === t ? void 0 : t.url,
						h = Boolean(null === (r = null == c ? void 0 : c.profile) || void 0 === r ? void 0 : r.isNsfw),
						x = Object(p.a)(u);
					return a.a.createElement("div", {
						className: w.a.supporter
					}, a.a.createElement("div", {
						className: w.a.supporterRank
					}, Math.min(l, 999)), a.a.createElement(v, {
						className: w.a.user,
						name: m,
						isAnonymousUser: !c,
						onClick: () => {
							c && s(Object(f.f)(c.id, c.displayName))
						}
					}, a.a.createElement(E, {
						name: m,
						iconUrl: b,
						isNsfw: h,
						isCurrentUser: i
					})), a.a.createElement(x, {
						className: w.a.powerupIcon
					}), a.a.createElement("div", {
						className: w.a.score
					}, u))
				};
			var N = r("./src/reddit/constants/modals.ts"),
				L = r("./src/reddit/controls/Button/index.tsx"),
				g = r("./src/reddit/icons/svgs/Close/index.tsx"),
				j = r("./src/reddit/selectors/activeModal.ts"),
				S = r("./src/reddit/selectors/gold/powerups.ts"),
				k = r("./src/reddit/selectors/subreddit.ts"),
				M = r("./src/reddit/selectors/user.ts"),
				P = r("./node_modules/reselect/es/index.js"),
				O = r("./src/reddit/components/PowerupsSidebar/SupportersListModal/index.m.less"),
				C = r.n(O);
			const {
				fbt: F
			} = r("./node_modules/fbt/lib/FbtPublic.js"), I = e => ({
				data: e,
				key: Object(u.b)(e)
			});

			function y(e) {
				return (t, r) => e(t, {
					...r,
					...Object(j.a)(t)
				})
			}
			const z = Object(P.c)({
				currentUser: M.i,
				powerups: y(S.i),
				subreddit: y(k.T),
				topSupporters: y(S.l),
				userPowerupsData: S.t
			});
			t.default = Object(s.a)(Object(l.b)(z)(({
				topSupporters: e,
				currentUser: t,
				userPowerupsData: r,
				subreddit: s
			}) => {
				const [u, d] = Object(n.useState)([]);
				Object(n.useEffect)(() => {
					var t;
					d(null !== (t = null == e ? void 0 : e.map(I)) && void 0 !== t ? t : [])
				}, [e, d]);
				const p = Object(l.d)(),
					m = Object(_.a)();
				Object(n.useEffect)(() => {
					m(Object(f.c)())
				}, [m]);
				const w = Boolean(null == r ? void 0 : r.freeCount),
					[b, h] = Object(n.useState)(!1);
				return a.a.createElement("div", {
					className: C.a.container
				}, a.a.createElement("div", {
					className: C.a.header
				}, a.a.createElement(g.a, {
					className: C.a.close,
					onClick: () => {
						p(Object(i.g)(N.a.ECON_SUPPORTERS_LIST))
					}
				}), a.a.createElement("h3", {
					className: C.a.heading
				}, F._("Community Heroes", null, {
					hk: "2ssat0"
				})), a.a.createElement("h4", {
					className: C.a.subheading
				}, s.displayText)), a.a.createElement("div", {
					className: C.a.supportersContainer,
					onScroll: e => {
						const t = e.currentTarget,
							r = t.getBoundingClientRect().height,
							s = Math.ceil(t.scrollTop + r) >= t.scrollHeight;
						h(s)
					}
				}, u.map((e, r) => a.a.createElement(x, {
					key: e.key,
					supporter: e.data,
					currentUser: t,
					rank: r + 1
				}))), a.a.createElement("div", {
					className: C.a.footer
				}, a.a.createElement("div", {
					className: Object(o.a)(C.a.scrollGradient, {
						[C.a.gradientHidden]: b
					})
				}), a.a.createElement(L.q, {
					priority: L.b.Primary,
					className: C.a.ctaButton,
					onClick: () => {
						m(Object(f.n)()), p(t ? Object(i.h)(N.a.ECON_POWERUPS_MARKETING) : Object(c.h)())
					}
				}, w ? F._("Use Your Premium Powerup", null, {
					hk: "1DC7G3"
				}) : F._("Become a Hero", null, {
					hk: "2sTjQV"
				}))))
			}))
		},
		"./src/reddit/components/PowerupsSidebar/common/utils.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return l
			}));
			var s = r("./src/reddit/icons/svgs/PowerupTier1/index.tsx"),
				o = r("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				n = r("./src/reddit/icons/svgs/PowerupTier3/index.tsx"),
				a = r("./src/reddit/models/Gold/Powerups/index.ts");

			function l(e) {
				return e >= a.c ? n.a : e >= a.b ? o.a : s.a
			}
		},
		"./src/reddit/helpers/trackers/powerups.ts": function(e, t, r) {
			"use strict";
			r.d(t, "p", (function() {
				return a
			})), r.d(t, "g", (function() {
				return l
			})), r.d(t, "k", (function() {
				return c
			})), r.d(t, "m", (function() {
				return i
			})), r.d(t, "q", (function() {
				return d
			})), r.d(t, "f", (function() {
				return p
			})), r.d(t, "j", (function() {
				return m
			})), r.d(t, "i", (function() {
				return w
			})), r.d(t, "n", (function() {
				return b
			})), r.d(t, "d", (function() {
				return h
			})), r.d(t, "e", (function() {
				return f
			})), r.d(t, "c", (function() {
				return _
			})), r.d(t, "o", (function() {
				return E
			})), r.d(t, "h", (function() {
				return v
			})), r.d(t, "a", (function() {
				return x
			})), r.d(t, "l", (function() {
				return N
			})), r.d(t, "b", (function() {
				return L
			}));
			var s = r("./src/reddit/helpers/correlationIdTracker.ts"),
				o = r("./src/reddit/selectors/telemetry.ts");
			const n = (e, t, r) => ({
					...o.defaults(e),
					correlationId: Object(s.d)(s.a.PowerupsFlow, !1),
					profile: o.profile(e),
					subreddit: o.subreddit(e),
					powerups: {
						...o.subredditPowerups(e),
						freeCount: t,
						paidCount: r
					}
				}),
				a = e => t => ({
					source: e,
					action: "click",
					noun: "powerups_user_badge",
					...n(t),
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				}),
				l = () => e => ({
					source: "postlist",
					action: "click",
					noun: "powerups_supporters_cta",
					...n(e),
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				}),
				c = () => e => ({
					source: "postlist_supporters_cta",
					action: "click",
					noun: "powersup_become_hero",
					...n(e),
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				}),
				i = () => e => ({
					source: "postlist_supporters_cta",
					action: "click",
					noun: "powersups_see_all_heroes",
					...n(e),
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				}),
				u = e => (t, r) => s => ({
					source: e,
					action: "click",
					noun: "powerup_supporter",
					...n(s),
					profile: {
						id: t,
						name: r,
						type: "default"
					}
				}),
				d = u("postlist_supporters_cta"),
				p = u("comm_heroes_modal"),
				m = () => e => ({
					source: "powerups",
					action: "view",
					noun: "post_upsell",
					...n(e),
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				}),
				w = () => e => ({
					source: "powerups",
					action: "click",
					noun: "post_upsell",
					...n(e),
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				}),
				b = () => e => ({
					source: "powerups",
					action: "click",
					noun: "premium",
					...n(e)
				}),
				h = (e, t) => r => ({
					source: "powerups_modal",
					action: "click",
					noun: "benefit",
					...n(r, e, t)
				}),
				f = (e, t) => r => ({
					source: "powerups_modal",
					action: "view",
					noun: "purchase_step",
					...n(r, e, t)
				}),
				_ = (e, t) => r => ({
					source: "global",
					action: "view",
					noun: "screen",
					...n(r, e, t),
					actionInfo: {
						pageType: "community_heroes_modal"
					}
				}),
				E = () => e => ({
					source: "powerups",
					action: "click",
					noun: "unlock_emojis",
					...n(e),
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				}),
				v = () => e => ({
					source: "meta",
					action: "open",
					noun: "emote_picker",
					...n(e),
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				}),
				x = e => t => ({
					source: "powerups",
					action: "click",
					noun: "add_custom_emojis",
					...n(t),
					powerups: {
						...o.subredditPowerups(t),
						emojiCount: e
					},
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				}),
				N = e => t => ({
					source: "powerups",
					action: "save",
					noun: "custom_emojis",
					...n(t),
					powerups: {
						...o.subredditPowerups(t),
						emojiCount: e
					},
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				}),
				L = (e = 1) => t => ({
					source: "powerups",
					action: "delete",
					noun: "custom_emojis",
					...n(t),
					powerups: {
						...o.subredditPowerups(t),
						emojiCount: e
					},
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				})
		},
		"./src/reddit/icons/svgs/PowerupTier1/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				o = r.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 74 74",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id
			}, e.title && o.a.createElement("title", null, e.title), o.a.createElement("path", {
				d: "M28.36 73.65a3.47 3.47 0 01-2.55-1.15l-6.94-7.59a3.47 3.47 0 01-.7-3.63l4.5-10.73h-2.73a3.47 3.47 0 01-2.57-1.15l-6.96-7.57a3.47 3.47 0 01-.65-3.67L25.19 2.62A3.47 3.47 0 0128.35.54l26.28-.2a3.47 3.47 0 012.58 1.16l6.94 7.59a3.47 3.47 0 01.16 4.5l-7.48 9.54c.27.16.52.36.73.6l6.93 7.58a3.47 3.47 0 010 4.7L30.91 72.53a3.47 3.47 0 01-2.55 1.12zM25.44 61.9l2.92 3.17 28.9-31.45-3.77-4.11h-3.47a3.47 3.47 0 01-2.61-5.62l9.67-12.32-3.9-4.26-22.48.16L17.02 38.8l4.42 4.8h6.45a3.47 3.47 0 013.2 4.81L25.44 61.9z",
				fill: "#000"
			}), o.a.createElement("path", {
				d: "M34.43 11.6l19.3-7.78 6.98 7.58-17.57 22.21 10.94-7.58 6.98 7.58-33.62 36.57-6.99-7.58L29.1 47l-10.1.06L12 39.5l22.42-27.9z",
				fill: "#FFD635"
			}), o.a.createElement("path", {
				d: "M27.45 4.01l26.28-.2-17.57 22.22h17.92L20.45 62.6l9.68-23.1-18.12-.01L27.45 4z",
				fill: "#fff"
			}), o.a.createElement("path", {
				d: "M36.12 35.25H18.1l11.74-27 15.34-.13-17.53 22.16h16.28L30.39 48.03l5.73-12.78z",
				fill: "#fff"
			}), o.a.createElement("path", {
				d: "M51.17 26.03H33.62l20-3.03-2.45 3.03zM26.44 48.32l4.34-10.37-7.98 10.14 3.64.23z",
				fill: "#000"
			}))
		},
		"./src/reddit/icons/svgs/PowerupTier2/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				o = r.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 74 74",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id
			}, e.title && o.a.createElement("title", null, e.title), o.a.createElement("path", {
				d: "M28.03 73.65h-.08a3.47 3.47 0 01-2.48-1.15l-6.93-7.59a3.47 3.47 0 01-.69-3.63l4.5-10.73H19.6a3.47 3.47 0 01-2.56-1.15L10.1 41.8a3.47 3.47 0 01-.67-3.65L24.86 2.62A3.47 3.47 0 0128.02.54l29.8-.2a3.47 3.47 0 012.55 1.16L67.3 9.1a3.47 3.47 0 01.16 4.5l-7.5 9.54c.27.16.51.36.72.6l6.94 7.58a3.47 3.47 0 01-.12 4.82L30.47 72.66c-.65.64-1.53 1-2.44 1zM25.1 61.9l3.06 3.31L60.3 33.53l-3.64-4.03h-3.47a3.47 3.47 0 01-2.72-5.62l9.75-12.32-3.93-4.28-25.96.17L16.7 38.8l4.4 4.8h6.45a3.47 3.47 0 013.2 4.81L25.1 61.9z",
				fill: "#000"
			}), o.a.createElement("path", {
				d: "M34.1 11.6l22.76-7.78 6.99 7.58-17.58 22.21 10.94-7.58 6.98 7.58L27.1 70.18l-6.98-7.58L28.77 47l-10.1.06-7-7.58 22.43-27.9z",
				fill: "#FF7A00"
			}), o.a.createElement("path", {
				d: "M27.11 4.01l29.75-.2L39.3 26.04H57.2L20.11 62.6l9.69-23.1-18.12-.01L27.1 4z",
				fill: "#FFD15C"
			}), o.a.createElement("path", {
				d: "M35.79 35.25H17.77l11.74-27 18.8-.13-17.53 22.16h16.28l-17 17.75 5.73-12.78z",
				fill: "#FFF5C7"
			}), o.a.createElement("path", {
				d: "M54.32 26.03H36.77l20-3.03-2.45 3.03zM26.1 48.32l4.34-10.37-7.97 10.14 3.64.23z",
				fill: "#000"
			}))
		},
		"./src/reddit/icons/svgs/PowerupTier3/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				o = r.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 74 74",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id
			}, e.title && o.a.createElement("title", null, e.title), o.a.createElement("path", {
				d: "M27.75 73.66a3.4 3.4 0 01-1.78-.5l-8.53-5.14a3.47 3.47 0 01-1.16-4.7l3.56-6.18h-.1l-8.54-5.18a3.47 3.47 0 01-1.15-4.8l5.78-9.32-7.74-4.68a3.47 3.47 0 01-1.3-4.57L20.15 2.8A3.47 3.47 0 0123.23.94h34.12c.8 0 1.58.27 2.2.78L67.4 8.1a3.47 3.47 0 01.25 5.15L57.52 23.3l5.29 4.5a3.47 3.47 0 010 5.26l-11.15 9.72 4.29 3.66a3.47 3.47 0 010 5.33L29.98 72.84c-.62.53-1.41.82-2.23.82zm-3.82-9.82l3.47 2.12 20.81-16.95-4.18-3.56a3.47 3.47 0 01-1.16-2.67 3.47 3.47 0 011.16-2.63l11.17-9.7-3.33-2.84h-.17a3.47 3.47 0 01-2.44-5.92L60 11.03 56.1 7.86H25.33L14.41 28.91l4.94 2.98h2.1a3.47 3.47 0 012.83 5.33l-6.54 10.6 4.7 2.84h3.11a3.47 3.47 0 013 5.2l-4.62 7.98z",
				fill: "#000"
			}), o.a.createElement("path", {
				d: "M30.6 9.53l26.28-5.14 7.16 6.43-18.67 18.54 6.65-5.17 7.38 6.3-14.21 12.33 7.36 6.25L26.63 70.2l-8.52-5.15 11.73-10.91-9.48-.02L11.84 49l19.92-13.33-14.57-.32-8.52-5.15L30.6 9.53z",
				fill: "#FF4500"
			}), o.a.createElement("path", {
				d: "M30.6 9.53l26.28-5.14 7.16 6.43L53.11 21.7l-1.09 2.5 7.38 6.3-14.21 12.33 7.36 6.25L26.63 70.2l-8.52-5.15 11.73-10.91-9.48-.02L11.84 49l19.92-13.33-14.57-.32-8.52-5.15L30.6 9.53z",
				fill: "#D01427"
			}), o.a.createElement("path", {
				d: "M22.07 4.4h34.8L36.86 24.21l15.17-.03-20.4 18.6h13.55L18.11 65.04 27.36 49 11.84 49l11.4-18.47-14.57-.33 13.4-25.8z",
				fill: "#FF4500"
			}), o.a.createElement("path", {
				d: "M49.56 7.39l-25.65-.1L13.46 27.4l15 .34-11.87 18.88h15.33l-4.22 7.24 10.53-8.74H24.6L44.4 27.09l-14.72.04L49.56 7.39z",
				fill: "#FF8717"
			}), o.a.createElement("path", {
				d: "M30.62 30.06h6.08L22.82 42.71l7.8-12.65zM18.3 24.64l7.5-14.45 16.55.07-14.7 14.59-9.35-.21z",
				fill: "#FFD635"
			}), o.a.createElement("path", {
				d: "M53.18 24.19l-17.55.03 19.7-2.88-2.15 2.85zM47.48 42.82l-17.42-.04 20-3-2.58 3.04zM20.6 54.78l7.01-6.22-4.52 7.84-2.49-1.62zM16.46 36.11l7.1-6.1-4.8 7.75-2.3-1.65z",
				fill: "#000"
			}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SupportersListModal.fdfb8c88309eb6a2ea90.js.map