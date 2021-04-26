// https://www.redditstatic.com/desktop2x/SupportersListModal.b81eafce3db0081c16fa.js
// Retrieved at 4/26/2021, 3:00:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SupportersListModal"], {
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
				return g
			}));
			var r = s("./src/lib/classNames/index.ts"),
				a = s("./node_modules/react/index.js"),
				n = s.n(a),
				o = s("./node_modules/react-motion/lib/react-motion.js"),
				l = s("./src/reddit/controls/Button/index.tsx"),
				i = s("./src/reddit/components/PowerupsSidebar/Supporters/index.m.less"),
				c = s.n(i),
				d = s("./node_modules/fbt/lib/FbtPublic.js"),
				u = s("./src/reddit/components/PowerupsSidebar/common/utils.ts"),
				m = s("./src/reddit/hooks/useTracking.ts"),
				p = s("./src/reddit/components/UserIcon/index.tsx"),
				h = s("./src/reddit/controls/InternalLink/index.tsx"),
				E = s("./src/reddit/helpers/trackers/powerups.ts"),
				b = s("./src/reddit/components/PowerupsSidebar/Supporters/Supporter/index.m.less"),
				f = s.n(b);
			var v = function(e) {
				var t, s;
				const a = Object(m.a)(),
					{
						className: o,
						supporter: l
					} = e,
					{
						score: i,
						supporterInfo: c
					} = l,
					b = (null == c ? void 0 : c.displayName) || d.fbt._({
						"*": "Anonymous Heroes",
						_1: "Anonymous Hero"
					}, [d.fbt._plural(i)], {
						hk: "8kyEI"
					}).toString(),
					v = null === (t = null == c ? void 0 : c.icon) || void 0 === t ? void 0 : t.url,
					x = !!(null === (s = null == c ? void 0 : c.profile) || void 0 === s ? void 0 : s.isNsfw),
					_ = Object(u.a)(i),
					L = n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
						className: f.a.userIconContainer
					}, n.a.createElement(p.a, {
						userName: b,
						iconUrl: v,
						className: f.a.userIcon,
						isNSFW: x
					})), n.a.createElement("h4", {
						className: f.a.name
					}, b));
				return n.a.createElement("div", {
					className: Object(r.a)(o, f.a.container)
				}, c ? n.a.createElement(h.a, {
					className: f.a.user,
					to: `/user/${b}/`,
					onClick: () => {
						c && a(Object(E.r)(c.id, c.displayName))
					}
				}, L) : n.a.createElement("div", {
					className: f.a.user
				}, L), n.a.createElement("div", {
					className: f.a.counter
				}, n.a.createElement(_, {
					className: f.a.powerupIcon
				}), i))
			};
			const {
				fbt: x
			} = s("./node_modules/fbt/lib/FbtPublic.js"), _ = 100, L = 302, N = 40;

			function g(e) {
				return `${e.lastSupportedAt}__${e.score}`
			}
			const w = e => ({
				key: g(e),
				data: {
					supporter: e
				}
			});

			function S(e, t) {
				const s = t || _;
				return e.slice(0, s).map(w)
			}
			const M = () => ({
					width: L,
					height: Object(o.spring)(0)
				}),
				k = () => ({
					height: 0,
					width: 0,
					motionProgress: 0
				});
			class j extends n.a.Component {
				constructor(e) {
					super(e), this.state = {
						items: S(e.supporters, e.maxSupporters)
					}
				}
				render() {
					const {
						className: e,
						supporters: t,
						onShowFullSupportersList: s,
						isShortSupportersEnabled: a
					} = this.props, i = a && this.state.items.length < t.length;
					return n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
						className: Object(r.a)(c.a.container, e)
					}, n.a.createElement(o.TransitionMotion, {
						willLeave: M,
						willEnter: k,
						styles: this.state.items.map(e => ({
							...e,
							style: {
								width: Object(o.spring)(L),
								height: Object(o.spring)(N),
								motionProgress: Object(o.spring)(1)
							}
						}))
					}, e => n.a.createElement(n.a.Fragment, null, e.map(e => n.a.createElement("div", {
						className: c.a.item,
						key: e.key
					}, n.a.createElement("div", {
						className: c.a.itemCropper,
						style: {
							...e.style
						}
					}, n.a.createElement(v, {
						supporter: e.data.supporter
					}))))))), i && n.a.createElement(l.q, {
						priority: l.b.Secondary,
						className: c.a.expandButton,
						onClick: s,
						isFullWidth: !0
					}, x._("See All Heroes", null, {
						hk: "1VUmH9"
					})))
				}
				static getDerivedStateFromProps(e) {
					return {
						items: S(e.supporters, e.maxSupporters)
					}
				}
			}
			t.a = n.a.memo(j)
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
		"./src/reddit/components/PowerupsSidebar/SupportersListModal/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var r = s("./src/higherOrderComponents/asModal/index.tsx"),
				a = s("./src/lib/classNames/index.ts"),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				l = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/actions/gold/powerups.ts"),
				c = s("./src/reddit/actions/modal.ts"),
				d = s("./src/reddit/components/PowerupsSidebar/Supporters/index.tsx"),
				u = s("./node_modules/fbt/lib/FbtPublic.js"),
				m = s("./src/reddit/components/PowerupsSidebar/common/utils.ts"),
				p = s("./src/reddit/components/PowerupsSidebar/SupportersListModal/SupporterListItem/index.m.less"),
				h = s.n(p),
				E = s("./src/reddit/components/UserIcon/index.tsx"),
				b = s("./src/reddit/controls/InternalLink/index.tsx"),
				f = s("./src/reddit/helpers/trackers/powerups.ts"),
				v = s("./src/reddit/hooks/useTracking.ts");
			const x = e => o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
					className: h.a.supporterImageContainer
				}, o.a.createElement(E.a, {
					userName: e.name,
					iconUrl: e.iconUrl,
					isNSFW: e.isNsfw,
					className: h.a.supporterImage
				})), o.a.createElement("div", {
					className: h.a.supporterName
				}, e.name, " ", e.isCurrentUser && u.fbt._("(you)", null, {
					hk: "3foyZr"
				}))),
				_ = e => e.isAnonymousUser ? o.a.createElement("div", {
					className: e.className
				}, e.children) : o.a.createElement(b.a, {
					className: e.className,
					to: `/user/${e.name}/`,
					onClick: e.onClick
				}, e.children),
				L = e => {
					var t, s;
					const r = Object(v.a)(),
						{
							supporter: a,
							currentUser: n,
							rank: l
						} = e,
						i = a.supporterInfo,
						c = !!n && n.id === (null == i ? void 0 : i.id),
						d = a.score,
						p = (null == i ? void 0 : i.displayName) || u.fbt._({
							"*": "Anonymous Heroes",
							_1: "Anonymous Hero"
						}, [u.fbt._plural(d)], {
							hk: "8kyEI"
						}).toString(),
						E = null === (t = null == i ? void 0 : i.icon) || void 0 === t ? void 0 : t.url,
						b = Boolean(null === (s = null == i ? void 0 : i.profile) || void 0 === s ? void 0 : s.isNsfw),
						L = Object(m.a)(d);
					return o.a.createElement("div", {
						className: h.a.supporter
					}, o.a.createElement("div", {
						className: h.a.supporterRank
					}, Math.min(l, 999)), o.a.createElement(_, {
						className: h.a.user,
						name: p,
						isAnonymousUser: !i,
						onClick: () => {
							i && r(Object(f.g)(i.id, i.displayName))
						}
					}, o.a.createElement(x, {
						name: p,
						iconUrl: E,
						isNsfw: b,
						isCurrentUser: c
					})), o.a.createElement(L, {
						className: h.a.powerupIcon
					}), o.a.createElement("div", {
						className: h.a.score
					}, d))
				};
			var N = s("./src/reddit/constants/modals.ts"),
				g = s("./src/reddit/controls/Button/index.tsx"),
				w = s("./src/reddit/icons/svgs/Close/index.tsx"),
				S = s("./src/reddit/selectors/activeModal.ts"),
				M = s("./src/reddit/selectors/gold/powerups.ts"),
				k = s("./src/reddit/selectors/subreddit.ts"),
				j = s("./src/reddit/selectors/user.ts"),
				C = s("./node_modules/reselect/es/index.js"),
				P = s("./src/reddit/components/PowerupsSidebar/SupportersListModal/index.m.less"),
				O = s.n(P);
			const {
				fbt: y
			} = s("./node_modules/fbt/lib/FbtPublic.js"), z = e => ({
				data: e,
				key: Object(d.b)(e)
			});

			function F(e) {
				return (t, s) => e(t, {
					...s,
					...Object(S.a)(t)
				})
			}
			const I = Object(C.c)({
				currentUser: j.i,
				powerups: F(M.j),
				subreddit: F(k.T),
				topSupporters: F(M.m),
				userPowerupsData: M.u
			});
			t.default = Object(r.a)(Object(l.b)(I)(({
				topSupporters: e,
				currentUser: t,
				userPowerupsData: s,
				subreddit: r
			}) => {
				const [d, u] = Object(n.useState)([]);
				Object(n.useEffect)(() => {
					var t;
					u(null !== (t = null == e ? void 0 : e.map(z)) && void 0 !== t ? t : [])
				}, [e, u]);
				const m = Object(l.d)(),
					p = Object(v.a)();
				Object(n.useEffect)(() => {
					p(Object(f.c)())
				}, [p]);
				const h = Boolean(null == s ? void 0 : s.freeCount),
					[E, b] = Object(n.useState)(!1);
				return o.a.createElement("div", {
					className: O.a.container
				}, o.a.createElement("div", {
					className: O.a.header
				}, o.a.createElement(w.a, {
					className: O.a.close,
					onClick: () => {
						m(Object(c.g)(N.a.ECON_SUPPORTERS_LIST))
					}
				}), o.a.createElement("h3", {
					className: O.a.heading
				}, y._("Community Heroes", null, {
					hk: "2ssat0"
				})), o.a.createElement("h4", {
					className: O.a.subheading
				}, r.displayText)), o.a.createElement("div", {
					className: O.a.supportersContainer,
					onScroll: e => {
						const t = e.currentTarget,
							s = t.getBoundingClientRect().height,
							r = Math.ceil(t.scrollTop + s) >= t.scrollHeight;
						b(r)
					}
				}, d.map((e, s) => o.a.createElement(L, {
					key: e.key,
					supporter: e.data,
					currentUser: t,
					rank: s + 1
				}))), o.a.createElement("div", {
					className: O.a.footer
				}, o.a.createElement("div", {
					className: Object(a.a)(O.a.scrollGradient, {
						[O.a.gradientHidden]: E
					})
				}), o.a.createElement(g.q, {
					priority: g.b.Primary,
					className: O.a.ctaButton,
					onClick: () => {
						p(Object(f.o)()), m(Object(i.c)("supporters_list_modal"))
					}
				}, h ? y._("Use Your Premium Powerup", null, {
					hk: "1DC7G3"
				}) : y._("Become a Hero", null, {
					hk: "2sTjQV"
				}))))
			}))
		},
		"./src/reddit/components/PowerupsSidebar/common/utils.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var r = s("./src/reddit/icons/svgs/PowerupTier1/index.tsx"),
				a = s("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				n = s("./src/reddit/icons/svgs/PowerupTier3/index.tsx");
			const o = 2,
				l = 5;

			function i(e) {
				return e >= l ? n.a : e >= o ? a.a : r.a
			}
		},
		"./src/reddit/icons/svgs/PowerupTier1/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				a = s.n(r);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 74 74",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id
			}, e.title && a.a.createElement("title", null, e.title), a.a.createElement("path", {
				d: "M28.36 73.65a3.47 3.47 0 01-2.55-1.15l-6.94-7.59a3.47 3.47 0 01-.7-3.63l4.5-10.73h-2.73a3.47 3.47 0 01-2.57-1.15l-6.96-7.57a3.47 3.47 0 01-.65-3.67L25.19 2.62A3.47 3.47 0 0128.35.54l26.28-.2a3.47 3.47 0 012.58 1.16l6.94 7.59a3.47 3.47 0 01.16 4.5l-7.48 9.54c.27.16.52.36.73.6l6.93 7.58a3.47 3.47 0 010 4.7L30.91 72.53a3.47 3.47 0 01-2.55 1.12zM25.44 61.9l2.92 3.17 28.9-31.45-3.77-4.11h-3.47a3.47 3.47 0 01-2.61-5.62l9.67-12.32-3.9-4.26-22.48.16L17.02 38.8l4.42 4.8h6.45a3.47 3.47 0 013.2 4.81L25.44 61.9z",
				fill: "#000"
			}), a.a.createElement("path", {
				d: "M34.43 11.6l19.3-7.78 6.98 7.58-17.57 22.21 10.94-7.58 6.98 7.58-33.62 36.57-6.99-7.58L29.1 47l-10.1.06L12 39.5l22.42-27.9z",
				fill: "#FFD635"
			}), a.a.createElement("path", {
				d: "M27.45 4.01l26.28-.2-17.57 22.22h17.92L20.45 62.6l9.68-23.1-18.12-.01L27.45 4z",
				fill: "#fff"
			}), a.a.createElement("path", {
				d: "M36.12 35.25H18.1l11.74-27 15.34-.13-17.53 22.16h16.28L30.39 48.03l5.73-12.78z",
				fill: "#fff"
			}), a.a.createElement("path", {
				d: "M51.17 26.03H33.62l20-3.03-2.45 3.03zM26.44 48.32l4.34-10.37-7.98 10.14 3.64.23z",
				fill: "#000"
			}))
		},
		"./src/reddit/icons/svgs/PowerupTier2/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				a = s.n(r);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 74 74",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id
			}, e.title && a.a.createElement("title", null, e.title), a.a.createElement("path", {
				d: "M28.03 73.65h-.08a3.47 3.47 0 01-2.48-1.15l-6.93-7.59a3.47 3.47 0 01-.69-3.63l4.5-10.73H19.6a3.47 3.47 0 01-2.56-1.15L10.1 41.8a3.47 3.47 0 01-.67-3.65L24.86 2.62A3.47 3.47 0 0128.02.54l29.8-.2a3.47 3.47 0 012.55 1.16L67.3 9.1a3.47 3.47 0 01.16 4.5l-7.5 9.54c.27.16.51.36.72.6l6.94 7.58a3.47 3.47 0 01-.12 4.82L30.47 72.66c-.65.64-1.53 1-2.44 1zM25.1 61.9l3.06 3.31L60.3 33.53l-3.64-4.03h-3.47a3.47 3.47 0 01-2.72-5.62l9.75-12.32-3.93-4.28-25.96.17L16.7 38.8l4.4 4.8h6.45a3.47 3.47 0 013.2 4.81L25.1 61.9z",
				fill: "#000"
			}), a.a.createElement("path", {
				d: "M34.1 11.6l22.76-7.78 6.99 7.58-17.58 22.21 10.94-7.58 6.98 7.58L27.1 70.18l-6.98-7.58L28.77 47l-10.1.06-7-7.58 22.43-27.9z",
				fill: "#FF7A00"
			}), a.a.createElement("path", {
				d: "M27.11 4.01l29.75-.2L39.3 26.04H57.2L20.11 62.6l9.69-23.1-18.12-.01L27.1 4z",
				fill: "#FFD15C"
			}), a.a.createElement("path", {
				d: "M35.79 35.25H17.77l11.74-27 18.8-.13-17.53 22.16h16.28l-17 17.75 5.73-12.78z",
				fill: "#FFF5C7"
			}), a.a.createElement("path", {
				d: "M54.32 26.03H36.77l20-3.03-2.45 3.03zM26.1 48.32l4.34-10.37-7.97 10.14 3.64.23z",
				fill: "#000"
			}))
		},
		"./src/reddit/icons/svgs/PowerupTier3/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				a = s.n(r);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 74 74",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id
			}, e.title && a.a.createElement("title", null, e.title), a.a.createElement("path", {
				d: "M27.75 73.66a3.4 3.4 0 01-1.78-.5l-8.53-5.14a3.47 3.47 0 01-1.16-4.7l3.56-6.18h-.1l-8.54-5.18a3.47 3.47 0 01-1.15-4.8l5.78-9.32-7.74-4.68a3.47 3.47 0 01-1.3-4.57L20.15 2.8A3.47 3.47 0 0123.23.94h34.12c.8 0 1.58.27 2.2.78L67.4 8.1a3.47 3.47 0 01.25 5.15L57.52 23.3l5.29 4.5a3.47 3.47 0 010 5.26l-11.15 9.72 4.29 3.66a3.47 3.47 0 010 5.33L29.98 72.84c-.62.53-1.41.82-2.23.82zm-3.82-9.82l3.47 2.12 20.81-16.95-4.18-3.56a3.47 3.47 0 01-1.16-2.67 3.47 3.47 0 011.16-2.63l11.17-9.7-3.33-2.84h-.17a3.47 3.47 0 01-2.44-5.92L60 11.03 56.1 7.86H25.33L14.41 28.91l4.94 2.98h2.1a3.47 3.47 0 012.83 5.33l-6.54 10.6 4.7 2.84h3.11a3.47 3.47 0 013 5.2l-4.62 7.98z",
				fill: "#000"
			}), a.a.createElement("path", {
				d: "M30.6 9.53l26.28-5.14 7.16 6.43-18.67 18.54 6.65-5.17 7.38 6.3-14.21 12.33 7.36 6.25L26.63 70.2l-8.52-5.15 11.73-10.91-9.48-.02L11.84 49l19.92-13.33-14.57-.32-8.52-5.15L30.6 9.53z",
				fill: "#FF4500"
			}), a.a.createElement("path", {
				d: "M30.6 9.53l26.28-5.14 7.16 6.43L53.11 21.7l-1.09 2.5 7.38 6.3-14.21 12.33 7.36 6.25L26.63 70.2l-8.52-5.15 11.73-10.91-9.48-.02L11.84 49l19.92-13.33-14.57-.32-8.52-5.15L30.6 9.53z",
				fill: "#D01427"
			}), a.a.createElement("path", {
				d: "M22.07 4.4h34.8L36.86 24.21l15.17-.03-20.4 18.6h13.55L18.11 65.04 27.36 49 11.84 49l11.4-18.47-14.57-.33 13.4-25.8z",
				fill: "#FF4500"
			}), a.a.createElement("path", {
				d: "M49.56 7.39l-25.65-.1L13.46 27.4l15 .34-11.87 18.88h15.33l-4.22 7.24 10.53-8.74H24.6L44.4 27.09l-14.72.04L49.56 7.39z",
				fill: "#FF8717"
			}), a.a.createElement("path", {
				d: "M30.62 30.06h6.08L22.82 42.71l7.8-12.65zM18.3 24.64l7.5-14.45 16.55.07-14.7 14.59-9.35-.21z",
				fill: "#FFD635"
			}), a.a.createElement("path", {
				d: "M53.18 24.19l-17.55.03 19.7-2.88-2.15 2.85zM47.48 42.82l-17.42-.04 20-3-2.58 3.04zM20.6 54.78l7.01-6.22-4.52 7.84-2.49-1.62zM16.46 36.11l7.1-6.1-4.8 7.75-2.3-1.65z",
				fill: "#000"
			}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SupportersListModal.b81eafce3db0081c16fa.js.map