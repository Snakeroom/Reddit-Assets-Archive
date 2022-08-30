// https://www.redditstatic.com/desktop2x/SupportersListModal.453a8adaa4686e9eece5.js
// Retrieved at 8/30/2022, 3:10:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SupportersListModal"], {
		"./src/reddit/components/Econ/Common/ModalCloseButton/index.m.less": function(e, t, s) {
			e.exports = {
				closeButton: "zV6beQLWIuWX5Q9SvWfDR",
				highContrast: "_19iGSTvU7FOqhpDpMWKtDr",
				closeIcon: "_17EZNlAorafFssuT6Gw_Zg"
			}
		},
		"./src/reddit/components/Econ/Common/ModalCloseButton/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var r = s("./src/lib/classNames/index.ts"),
				n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				l = s("./src/reddit/components/Econ/Common/ModalCloseButton/index.m.less"),
				i = s.n(l);
			const {
				fbt: c
			} = s("./node_modules/fbt/lib/FbtPublic.js"), d = e => {
				let {
					className: t,
					highContrast: s,
					onClick: n
				} = e;
				return a.a.createElement("button", {
					onClick: n,
					className: Object(r.a)(i.a.closeButton, {
						[i.a.highContrast]: s
					}, t),
					"aria-label": c._("Close", null, {
						hk: "3Qarlp"
					})
				}, a.a.createElement(o.b, {
					className: i.a.closeIcon
				}))
			}
		},
		"./src/reddit/components/PowerupsSidebar/Supporters/Supporter/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/PowerupsSidebar/Supporters/Supporter/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return p
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/components/PowerupsSidebar/common/utils.ts"),
				l = s("./src/reddit/components/UserIcon/index.tsx"),
				i = s("./src/reddit/controls/InternalLink/index.tsx"),
				c = s("./src/reddit/helpers/trackers/powerups.ts"),
				d = s("./src/reddit/hooks/useTracking.ts"),
				u = s("./src/reddit/components/PowerupsSidebar/Supporters/Supporter/index.m.less"),
				m = s.n(u);
			const p = e => n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
				className: Object(a.a)(m.a.userIconContainer, e.iconClassName)
			}, n.a.createElement(l.a, {
				userName: e.userName || "",
				iconUrl: e.iconUrl,
				className: m.a.userIcon,
				isNSFW: e.isNsfw
			})), n.a.createElement("h4", {
				className: Object(a.a)(m.a.name, e.textClassName)
			}, e.displayName || e.userName));
			t.b = function(e) {
				var t;
				const s = Object(d.a)(),
					{
						className: r,
						supporter: l
					} = e,
					{
						score: u,
						supporterInfo: b
					} = l,
					f = Object(o.b)({
						displayName: null == b ? void 0 : b.displayName,
						score: u
					}),
					h = !!(null === (t = null == b ? void 0 : b.profile) || void 0 === t ? void 0 : t.isNsfw),
					x = Object(o.c)(b),
					E = Object(o.a)(u),
					N = n.a.createElement(p, {
						userName: f,
						isNsfw: h,
						iconUrl: x
					});
				return n.a.createElement("div", {
					className: Object(a.a)(r, m.a.container)
				}, b ? n.a.createElement(i.default, {
					className: m.a.user,
					to: `/user/${f}/`,
					onClick: () => {
						b && s(Object(c.o)(b.id, b.displayName))
					}
				}, N) : n.a.createElement("div", {
					className: m.a.user
				}, N), n.a.createElement("div", {
					className: m.a.counter
				}, n.a.createElement(E, {
					className: m.a.powerupIcon
				}), u))
			}
		},
		"./src/reddit/components/PowerupsSidebar/Supporters/index.m.less": function(e, t, s) {
			e.exports = {
				item: "_3NpbAeMPiQKpToWDGreg_t",
				itemCropper: "_1SUg9FHcJ66bjzBWDro10b",
				animation: "_3jKAUYS5MvU0Koz85fPn-S",
				container: "_2B49Ad8MgHu8TYDSLNtfM3",
				expandButton: "_3xPQmoZqoeq-xOuehYr_2f"
			}
		},
		"./src/reddit/components/PowerupsSidebar/Supporters/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return f
			}));
			var r = s("./src/lib/classNames/index.ts"),
				n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./node_modules/react-motion/lib/react-motion.js"),
				l = s("./src/reddit/controls/Button/index.tsx"),
				i = s("./src/reddit/components/PowerupsSidebar/Supporters/index.m.less"),
				c = s.n(i),
				d = s("./src/reddit/components/PowerupsSidebar/Supporters/Supporter/index.tsx");
			const {
				fbt: u
			} = s("./node_modules/fbt/lib/FbtPublic.js"), m = 100, p = 302, b = 40;

			function f(e) {
				return `${e.lastSupportedAt}__${e.score}`
			}
			const h = e => ({
				key: f(e),
				data: {
					supporter: e
				}
			});

			function x(e, t) {
				const s = t || m;
				return e.slice(0, s).map(h)
			}
			const E = () => ({
					width: p,
					height: Object(o.spring)(0)
				}),
				N = () => ({
					height: 0,
					width: 0,
					motionProgress: 0
				});
			class v extends a.a.Component {
				constructor(e) {
					super(e), this.state = {
						items: x(e.supporters, e.maxSupporters)
					}
				}
				render() {
					const {
						className: e,
						supporters: t,
						onShowFullSupportersList: s
					} = this.props, n = this.state.items.length < t.length;
					return a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
						className: Object(r.a)(c.a.container, e)
					}, a.a.createElement(o.TransitionMotion, {
						willLeave: E,
						willEnter: N,
						styles: this.state.items.map(e => ({
							...e,
							style: {
								width: Object(o.spring)(p),
								height: Object(o.spring)(b),
								motionProgress: Object(o.spring)(1)
							}
						}))
					}, e => a.a.createElement(a.a.Fragment, null, e.map(e => a.a.createElement("div", {
						className: c.a.item,
						key: e.key
					}, a.a.createElement("div", {
						className: c.a.itemCropper,
						style: {
							...e.style
						}
					}, a.a.createElement(d.b, {
						supporter: e.data.supporter
					}))))))), n && a.a.createElement(l.t, {
						priority: l.c.Secondary,
						className: c.a.expandButton,
						onClick: s,
						isFullWidth: !0
					}, u._("See All Heroes", null, {
						hk: "1VUmH9"
					})))
				}
				static getDerivedStateFromProps(e) {
					return {
						items: x(e.supporters, e.maxSupporters)
					}
				}
			}
			t.a = a.a.memo(v)
		},
		"./src/reddit/components/PowerupsSidebar/SupportersListModal/SupporterListItem/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/PowerupsSidebar/SupportersListModal/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2KUDaXyzE_hk_VaNQaFeiE",
				header: "_3QlgM9TPO7r3_RIKVE-Niw",
				heading: "Mxzo3Om3yx3TVmfnTGM4w",
				subheading: "_1akYW4Hm06hc_CYf8ti4ch",
				supportersContainer: "_2nsnGlUWjPDLPfUYMrKQIE",
				footer: "_1Db5CXe1DecnWF6czNCFXp"
			}
		},
		"./src/reddit/components/PowerupsSidebar/SupportersListModal/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/higherOrderComponents/asModal/index.tsx"),
				l = s("./src/reddit/actions/modal.ts"),
				i = s("./src/reddit/actions/toaster.ts"),
				c = s("./src/reddit/components/Econ/Common/ModalCloseButton/index.tsx"),
				d = s("./src/reddit/components/Econ/PowerupsMarketingModal/async.tsx"),
				u = s("./src/reddit/components/PowerupsSidebar/Supporters/index.tsx"),
				m = s("./src/reddit/components/PowerupsSidebar/common/utils.ts"),
				p = s("./src/reddit/components/PowerupsSidebar/SupportersListModal/SupporterListItem/index.m.less"),
				b = s.n(p),
				f = s("./src/reddit/components/UserIcon/index.tsx"),
				h = s("./src/reddit/controls/InternalLink/index.tsx"),
				x = s("./src/reddit/helpers/trackers/powerups.ts"),
				E = s("./src/reddit/hooks/useTracking.ts");
			const {
				fbt: N
			} = s("./node_modules/fbt/lib/FbtPublic.js"), v = e => n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
				className: b.a.supporterImageContainer
			}, n.a.createElement(f.a, {
				userName: e.name,
				iconUrl: e.iconUrl,
				isNSFW: e.isNsfw,
				className: b.a.supporterImage
			})), n.a.createElement("div", {
				className: b.a.supporterName
			}, e.name, " ", e.isCurrentUser && N._("(you)", null, {
				hk: "3foyZr"
			}))), S = e => e.isAnonymousUser ? n.a.createElement("div", {
				className: e.className
			}, e.children) : n.a.createElement(h.default, {
				className: e.className,
				to: `/user/${e.name}/`,
				onClick: e.onClick
			}, e.children), _ = e => {
				var t;
				const s = Object(E.a)(),
					{
						supporter: r,
						currentUser: a,
						rank: o
					} = e,
					l = r.supporterInfo,
					i = null == l ? void 0 : l.displayName,
					c = !!a && a.id === (null == l ? void 0 : l.id),
					d = r.score,
					u = i ? Math.min(o, 999) : null,
					p = Object(m.b)({
						displayName: i,
						score: d
					}),
					f = Object(m.c)(l),
					h = Boolean(null === (t = null == l ? void 0 : l.profile) || void 0 === t ? void 0 : t.isNsfw),
					N = Object(m.a)(d);
				return n.a.createElement("div", {
					className: b.a.supporter
				}, n.a.createElement("div", {
					className: b.a.supporterRank
				}, u), n.a.createElement(S, {
					className: b.a.user,
					name: p,
					isAnonymousUser: !l,
					onClick: () => {
						l && s(Object(x.h)(l.id, l.displayName))
					}
				}, n.a.createElement(v, {
					name: p,
					iconUrl: f,
					isNsfw: h,
					isCurrentUser: c
				})), n.a.createElement(N, {
					className: b.a.powerupIcon
				}), n.a.createElement("div", {
					className: b.a.score
				}, d))
			};
			var L = s("./src/reddit/components/ScrollGradient/index.tsx"),
				g = s("./src/reddit/constants/modals.ts"),
				w = s("./src/reddit/hooks/usePreloadModal.ts"),
				M = s("./src/reddit/hooks/useScrollGradient.ts"),
				j = s("./src/reddit/models/Toast/index.ts"),
				k = s("./src/reddit/selectors/gold/powerups/index.ts"),
				C = s("./src/reddit/selectors/platform.ts"),
				O = s("./src/reddit/selectors/user.ts"),
				P = s("./src/reddit/components/PowerupsSidebar/SupportersListModal/index.m.less"),
				y = s.n(P);
			const {
				fbt: F
			} = s("./node_modules/fbt/lib/FbtPublic.js"), z = e => ({
				data: e,
				key: Object(u.b)(e)
			});
			t.default = Object(o.a)(() => {
				const e = Object(a.e)(O.k),
					t = Object(a.e)(C.t),
					s = Object(a.e)(e => t ? Object(k.l)(e, {
						subredditId: t.id
					}) : []),
					[o, u] = Object(r.useState)([]);
				Object(r.useEffect)(() => {
					var e;
					u(null !== (e = null == s ? void 0 : s.map(z)) && void 0 !== e ? e : [])
				}, [s, u]);
				const m = Object(a.d)(),
					p = Object(E.a)();
				Object(r.useEffect)(() => {
					p(Object(x.d)())
				}, [p]), Object(w.a)(d.a);
				const b = () => {
						m(Object(l.g)(g.a.ECON_SUPPORTERS_LIST))
					},
					{
						container: f,
						isScrollGradientVisible: h,
						calculateGradientVisibility: N
					} = Object(M.b)(!0);
				return Object(r.useEffect)(() => {
					N()
				}), t ? n.a.createElement("div", {
					className: y.a.container
				}, n.a.createElement("div", {
					className: y.a.header
				}, n.a.createElement(c.a, {
					onClick: b
				}), n.a.createElement("h3", {
					className: y.a.heading
				}, F._("Community Heroes", null, {
					hk: "2ssat0"
				})), n.a.createElement("h4", {
					className: y.a.subheading
				}, t.displayText)), n.a.createElement("div", {
					className: y.a.supportersContainer,
					onScroll: N,
					ref: f
				}, o.map((t, s) => n.a.createElement(_, {
					key: t.key,
					supporter: t.data,
					currentUser: e,
					rank: s + 1
				}))), n.a.createElement("div", {
					className: y.a.footer
				}, n.a.createElement(L.a, {
					className: y.a.scrollGradient,
					isVisible: h
				}))) : (m(Object(i.f)({
					kind: j.b.Error,
					duration: i.a,
					text: F._("Something went wrong", null, {
						hk: "1IJNeH"
					})
				})), b(), null)
			})
		},
		"./src/reddit/components/PowerupsSidebar/common/utils.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			})), s.d(t, "c", (function() {
				return u
			})), s.d(t, "b", (function() {
				return m
			}));
			var r = s("./src/config.ts"),
				n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./src/reddit/icons/svgs/PowerupTier1/index.tsx"),
				o = s("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				l = s("./src/reddit/icons/svgs/PowerupTier3/index.tsx");
			const i = 2,
				c = 3;

			function d(e) {
				return e >= c ? l.a : e >= i ? o.a : a.a
			}

			function u(e) {
				var t;
				const s = !e,
					n = `${r.a.assetPath}/img/powerups/snoovatar_anonymous.svg`;
				return s ? n : null === (t = null == e ? void 0 : e.icon) || void 0 === t ? void 0 : t.url
			}
			const m = e => {
				let {
					displayName: t,
					score: s
				} = e;
				return t || n.fbt._({
					"*": "Anonymous Heroes",
					_1: "Anonymous Hero"
				}, [n.fbt._plural(s)], {
					hk: "8kyEI"
				}).toString()
			}
		},
		"./src/reddit/components/ScrollGradient/index.m.less": function(e, t, s) {
			e.exports = {
				gradient: "_3-kakYRJykUyPafukcDzry",
				visible: "_24Ju7hkI6TbfWdJ0X4gSqu"
			}
		},
		"./src/reddit/components/ScrollGradient/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var r = s("./src/lib/classNames/index.ts"),
				n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/reddit/components/ScrollGradient/index.m.less"),
				l = s.n(o);
			const i = e => {
				let {
					className: t,
					isVisible: s
				} = e;
				return a.a.createElement("div", {
					className: Object(r.a)(l.a.gradient, t, {
						[l.a.visible]: s
					})
				})
			}
		},
		"./src/reddit/hooks/usePreloadModal.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var r = s("./node_modules/react/index.js");

			function n(e) {
				Object(r.useEffect)(() => {
					e()
				}, [e])
			}
		},
		"./src/reddit/hooks/useScrollGradient.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return a
			}));
			var r, n = s("./node_modules/react/index.js");

			function a(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.Bottom;
				const [s, a] = Object(n.useState)(e), o = Object(n.useRef)(null);
				return {
					container: o,
					isScrollGradientVisible: s,
					calculateGradientVisibility: () => {
						const e = o.current;
						if (!e) return;
						const s = e.getBoundingClientRect().height,
							{
								scrollHeight: n,
								scrollTop: l
							} = e,
							i = Math.ceil(l + s) >= n,
							c = Math.ceil(s - l) >= n,
							d = t === r.Bottom ? i : c;
						a(!d)
					}
				}
			}! function(e) {
				e.Top = "top", e.Bottom = "bottom"
			}(r || (r = {}))
		},
		"./src/reddit/icons/svgs/PowerupTier1/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 74 74",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id
			}, e.title && n.a.createElement("title", null, e.title), n.a.createElement("path", {
				d: "M28.36 73.65a3.47 3.47 0 01-2.55-1.15l-6.94-7.59a3.47 3.47 0 01-.7-3.63l4.5-10.73h-2.73a3.47 3.47 0 01-2.57-1.15l-6.96-7.57a3.47 3.47 0 01-.65-3.67L25.19 2.62A3.47 3.47 0 0128.35.54l26.28-.2a3.47 3.47 0 012.58 1.16l6.94 7.59a3.47 3.47 0 01.16 4.5l-7.48 9.54c.27.16.52.36.73.6l6.93 7.58a3.47 3.47 0 010 4.7L30.91 72.53a3.47 3.47 0 01-2.55 1.12zM25.44 61.9l2.92 3.17 28.9-31.45-3.77-4.11h-3.47a3.47 3.47 0 01-2.61-5.62l9.67-12.32-3.9-4.26-22.48.16L17.02 38.8l4.42 4.8h6.45a3.47 3.47 0 013.2 4.81L25.44 61.9z",
				fill: "#000"
			}), n.a.createElement("path", {
				d: "M34.43 11.6l19.3-7.78 6.98 7.58-17.57 22.21 10.94-7.58 6.98 7.58-33.62 36.57-6.99-7.58L29.1 47l-10.1.06L12 39.5l22.42-27.9z",
				fill: "#FFD635"
			}), n.a.createElement("path", {
				d: "M27.45 4.01l26.28-.2-17.57 22.22h17.92L20.45 62.6l9.68-23.1-18.12-.01L27.45 4z",
				fill: "#fff"
			}), n.a.createElement("path", {
				d: "M36.12 35.25H18.1l11.74-27 15.34-.13-17.53 22.16h16.28L30.39 48.03l5.73-12.78z",
				fill: "#fff"
			}), n.a.createElement("path", {
				d: "M51.17 26.03H33.62l20-3.03-2.45 3.03zM26.44 48.32l4.34-10.37-7.98 10.14 3.64.23z",
				fill: "#000"
			}))
		},
		"./src/reddit/icons/svgs/PowerupTier2/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 74 74",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id,
				"data-testid": "bolt-tier2"
			}, e.title && n.a.createElement("title", null, e.title), n.a.createElement("path", {
				d: "M28.03 73.65h-.08a3.47 3.47 0 01-2.48-1.15l-6.93-7.59a3.47 3.47 0 01-.69-3.63l4.5-10.73H19.6a3.47 3.47 0 01-2.56-1.15L10.1 41.8a3.47 3.47 0 01-.67-3.65L24.86 2.62A3.47 3.47 0 0128.02.54l29.8-.2a3.47 3.47 0 012.55 1.16L67.3 9.1a3.47 3.47 0 01.16 4.5l-7.5 9.54c.27.16.51.36.72.6l6.94 7.58a3.47 3.47 0 01-.12 4.82L30.47 72.66c-.65.64-1.53 1-2.44 1zM25.1 61.9l3.06 3.31L60.3 33.53l-3.64-4.03h-3.47a3.47 3.47 0 01-2.72-5.62l9.75-12.32-3.93-4.28-25.96.17L16.7 38.8l4.4 4.8h6.45a3.47 3.47 0 013.2 4.81L25.1 61.9z",
				fill: "#000"
			}), n.a.createElement("path", {
				d: "M34.1 11.6l22.76-7.78 6.99 7.58-17.58 22.21 10.94-7.58 6.98 7.58L27.1 70.18l-6.98-7.58L28.77 47l-10.1.06-7-7.58 22.43-27.9z",
				fill: "#FF7A00"
			}), n.a.createElement("path", {
				d: "M27.11 4.01l29.75-.2L39.3 26.04H57.2L20.11 62.6l9.69-23.1-18.12-.01L27.1 4z",
				fill: "#FFD15C"
			}), n.a.createElement("path", {
				d: "M35.79 35.25H17.77l11.74-27 18.8-.13-17.53 22.16h16.28l-17 17.75 5.73-12.78z",
				fill: "#FFF5C7"
			}), n.a.createElement("path", {
				d: "M54.32 26.03H36.77l20-3.03-2.45 3.03zM26.1 48.32l4.34-10.37-7.97 10.14 3.64.23z",
				fill: "#000"
			}))
		},
		"./src/reddit/icons/svgs/PowerupTier3/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 74 74",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id
			}, e.title && n.a.createElement("title", null, e.title), n.a.createElement("path", {
				d: "M27.75 73.66a3.4 3.4 0 01-1.78-.5l-8.53-5.14a3.47 3.47 0 01-1.16-4.7l3.56-6.18h-.1l-8.54-5.18a3.47 3.47 0 01-1.15-4.8l5.78-9.32-7.74-4.68a3.47 3.47 0 01-1.3-4.57L20.15 2.8A3.47 3.47 0 0123.23.94h34.12c.8 0 1.58.27 2.2.78L67.4 8.1a3.47 3.47 0 01.25 5.15L57.52 23.3l5.29 4.5a3.47 3.47 0 010 5.26l-11.15 9.72 4.29 3.66a3.47 3.47 0 010 5.33L29.98 72.84c-.62.53-1.41.82-2.23.82zm-3.82-9.82l3.47 2.12 20.81-16.95-4.18-3.56a3.47 3.47 0 01-1.16-2.67 3.47 3.47 0 011.16-2.63l11.17-9.7-3.33-2.84h-.17a3.47 3.47 0 01-2.44-5.92L60 11.03 56.1 7.86H25.33L14.41 28.91l4.94 2.98h2.1a3.47 3.47 0 012.83 5.33l-6.54 10.6 4.7 2.84h3.11a3.47 3.47 0 013 5.2l-4.62 7.98z",
				fill: "#000"
			}), n.a.createElement("path", {
				d: "M30.6 9.53l26.28-5.14 7.16 6.43-18.67 18.54 6.65-5.17 7.38 6.3-14.21 12.33 7.36 6.25L26.63 70.2l-8.52-5.15 11.73-10.91-9.48-.02L11.84 49l19.92-13.33-14.57-.32-8.52-5.15L30.6 9.53z",
				fill: "#FF4500"
			}), n.a.createElement("path", {
				d: "M30.6 9.53l26.28-5.14 7.16 6.43L53.11 21.7l-1.09 2.5 7.38 6.3-14.21 12.33 7.36 6.25L26.63 70.2l-8.52-5.15 11.73-10.91-9.48-.02L11.84 49l19.92-13.33-14.57-.32-8.52-5.15L30.6 9.53z",
				fill: "#D01427"
			}), n.a.createElement("path", {
				d: "M22.07 4.4h34.8L36.86 24.21l15.17-.03-20.4 18.6h13.55L18.11 65.04 27.36 49 11.84 49l11.4-18.47-14.57-.33 13.4-25.8z",
				fill: "#FF4500"
			}), n.a.createElement("path", {
				d: "M49.56 7.39l-25.65-.1L13.46 27.4l15 .34-11.87 18.88h15.33l-4.22 7.24 10.53-8.74H24.6L44.4 27.09l-14.72.04L49.56 7.39z",
				fill: "#FF8717"
			}), n.a.createElement("path", {
				d: "M30.62 30.06h6.08L22.82 42.71l7.8-12.65zM18.3 24.64l7.5-14.45 16.55.07-14.7 14.59-9.35-.21z",
				fill: "#FFD635"
			}), n.a.createElement("path", {
				d: "M53.18 24.19l-17.55.03 19.7-2.88-2.15 2.85zM47.48 42.82l-17.42-.04 20-3-2.58 3.04zM20.6 54.78l7.01-6.22-4.52 7.84-2.49-1.62zM16.46 36.11l7.1-6.1-4.8 7.75-2.3-1.65z",
				fill: "#000"
			}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SupportersListModal.453a8adaa4686e9eece5.js.map