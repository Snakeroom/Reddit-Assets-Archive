// https://www.redditstatic.com/desktop2x/SupportersListModal.8d4c55a57fbd41eff115.js
// Retrieved at 11/9/2021, 10:30:05 AM by Reddit Dataminer v1.0.0
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
				o = s.n(n),
				a = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = s("./src/reddit/components/Econ/Common/ModalCloseButton/index.m.less"),
				i = s.n(c);
			const {
				fbt: l
			} = s("./node_modules/fbt/lib/FbtPublic.js"), d = ({
				className: e,
				highContrast: t,
				onClick: s
			}) => o.a.createElement("button", {
				onClick: s,
				className: Object(r.a)(i.a.closeButton, {
					[i.a.highContrast]: t
				}, e),
				"aria-label": l._("Close", null, {
					hk: "3Qarlp"
				})
			}, o.a.createElement(a.b, {
				className: i.a.closeIcon
			}))
		},
		"./src/reddit/components/PowerupsCtaButton/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/controls/Button/index.tsx"),
				c = s("./src/reddit/selectors/gold/powerups/index.ts");
			const {
				fbt: i
			} = s("./node_modules/fbt/lib/FbtPublic.js"), l = ({
				className: e,
				onClick: t
			}) => {
				const s = Object(o.e)(c.v);
				return n.a.createElement(a.t, {
					priority: a.c.Primary,
					className: e,
					onClick: t,
					isFullWidth: !0
				}, (() => s ? i._("Use Your Premium Powerup", null, {
					hk: "JJNaN"
				}) : i._("Become a Hero", null, {
					hk: "3IZNw3"
				}))())
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
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/PowerupsSidebar/common/utils.ts"),
				c = s("./src/reddit/components/UserIcon/index.tsx"),
				i = s("./src/reddit/controls/InternalLink/index.tsx"),
				l = s("./src/reddit/helpers/trackers/powerups.ts"),
				d = s("./src/reddit/hooks/useTracking.ts"),
				u = s("./src/reddit/components/PowerupsSidebar/Supporters/Supporter/index.m.less"),
				m = s.n(u);
			const p = e => n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
				className: Object(o.a)(m.a.userIconContainer, e.iconClassName)
			}, n.a.createElement(c.a, {
				userName: e.userName || "",
				iconUrl: e.iconUrl,
				className: m.a.userIcon,
				isNSFW: e.isNsfw
			})), n.a.createElement("h4", {
				className: Object(o.a)(m.a.name, e.textClassName)
			}, e.displayName || e.userName));
			t.b = function(e) {
				var t;
				const s = Object(d.a)(),
					{
						className: r,
						supporter: c
					} = e,
					{
						score: u,
						supporterInfo: b
					} = c,
					x = Object(a.b)({
						displayName: null == b ? void 0 : b.displayName,
						score: u
					}),
					N = !!(null === (t = null == b ? void 0 : b.profile) || void 0 === t ? void 0 : t.isNsfw),
					f = Object(a.c)(b),
					_ = Object(a.a)(u),
					S = n.a.createElement(p, {
						userName: x,
						isNsfw: N,
						iconUrl: f
					});
				return n.a.createElement("div", {
					className: Object(o.a)(r, m.a.container)
				}, b ? n.a.createElement(i.a, {
					className: m.a.user,
					to: `/user/${x}/`,
					onClick: () => {
						b && s(Object(l.K)(b.id, b.displayName))
					}
				}, S) : n.a.createElement("div", {
					className: m.a.user
				}, S), n.a.createElement("div", {
					className: m.a.counter
				}, n.a.createElement(_, {
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
				return x
			}));
			var r = s("./src/lib/classNames/index.ts"),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./node_modules/react-motion/lib/react-motion.js"),
				c = s("./src/reddit/controls/Button/index.tsx"),
				i = s("./src/reddit/components/PowerupsSidebar/Supporters/index.m.less"),
				l = s.n(i),
				d = s("./src/reddit/components/PowerupsSidebar/Supporters/Supporter/index.tsx");
			const {
				fbt: u
			} = s("./node_modules/fbt/lib/FbtPublic.js"), m = 100, p = 302, b = 40;

			function x(e) {
				return `${e.lastSupportedAt}__${e.score}`
			}
			const N = e => ({
				key: x(e),
				data: {
					supporter: e
				}
			});

			function f(e, t) {
				const s = t || m;
				return e.slice(0, s).map(N)
			}
			const _ = () => ({
					width: p,
					height: Object(a.spring)(0)
				}),
				S = () => ({
					height: 0,
					width: 0,
					motionProgress: 0
				});
			class h extends o.a.Component {
				constructor(e) {
					super(e), this.state = {
						items: f(e.supporters, e.maxSupporters)
					}
				}
				render() {
					const {
						className: e,
						supporters: t,
						onShowFullSupportersList: s
					} = this.props, n = this.state.items.length < t.length;
					return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						className: Object(r.a)(l.a.container, e)
					}, o.a.createElement(a.TransitionMotion, {
						willLeave: _,
						willEnter: S,
						styles: this.state.items.map(e => ({
							...e,
							style: {
								width: Object(a.spring)(p),
								height: Object(a.spring)(b),
								motionProgress: Object(a.spring)(1)
							}
						}))
					}, e => o.a.createElement(o.a.Fragment, null, e.map(e => o.a.createElement("div", {
						className: l.a.item,
						key: e.key
					}, o.a.createElement("div", {
						className: l.a.itemCropper,
						style: {
							...e.style
						}
					}, o.a.createElement(d.b, {
						supporter: e.data.supporter
					}))))))), n && o.a.createElement(c.t, {
						priority: c.c.Secondary,
						className: l.a.expandButton,
						onClick: s,
						isFullWidth: !0
					}, u._("See All Heroes", null, {
						hk: "1VUmH9"
					})))
				}
				static getDerivedStateFromProps(e) {
					return {
						items: f(e.supporters, e.maxSupporters)
					}
				}
			}
			t.a = o.a.memo(h)
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
				footer: "_1Db5CXe1DecnWF6czNCFXp",
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
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/higherOrderComponents/asModal/index.tsx"),
				c = s("./src/reddit/actions/gold/powerups.ts"),
				i = s("./src/reddit/actions/modal.ts"),
				l = s("./src/reddit/actions/toaster.ts"),
				d = s("./src/reddit/components/Econ/Common/ModalCloseButton/index.tsx"),
				u = s("./src/reddit/components/Econ/PowerupsMarketingModal/async.tsx"),
				m = s("./src/reddit/components/PowerupsCtaButton/index.tsx"),
				p = s("./src/reddit/components/PowerupsSidebar/Supporters/index.tsx"),
				b = s("./src/reddit/components/PowerupsSidebar/common/utils.ts"),
				x = s("./src/reddit/components/PowerupsSidebar/SupportersListModal/SupporterListItem/index.m.less"),
				N = s.n(x),
				f = s("./src/reddit/components/UserIcon/index.tsx"),
				_ = s("./src/reddit/controls/InternalLink/index.tsx"),
				S = s("./src/reddit/helpers/trackers/powerups.ts"),
				h = s("./src/reddit/hooks/useTracking.ts");
			const {
				fbt: E
			} = s("./node_modules/fbt/lib/FbtPublic.js"), g = e => n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
				className: N.a.supporterImageContainer
			}, n.a.createElement(f.a, {
				userName: e.name,
				iconUrl: e.iconUrl,
				isNSFW: e.isNsfw,
				className: N.a.supporterImage
			})), n.a.createElement("div", {
				className: N.a.supporterName
			}, e.name, " ", e.isCurrentUser && E._("(you)", null, {
				hk: "3foyZr"
			}))), j = e => e.isAnonymousUser ? n.a.createElement("div", {
				className: e.className
			}, e.children) : n.a.createElement(_.a, {
				className: e.className,
				to: `/user/${e.name}/`,
				onClick: e.onClick
			}, e.children), v = e => {
				var t;
				const s = Object(h.a)(),
					{
						supporter: r,
						currentUser: o,
						rank: a
					} = e,
					c = r.supporterInfo,
					i = null == c ? void 0 : c.displayName,
					l = !!o && o.id === (null == c ? void 0 : c.id),
					d = r.score,
					u = i ? Math.min(a, 999) : null,
					m = Object(b.b)({
						displayName: i,
						score: d
					}),
					p = Object(b.c)(c),
					x = Boolean(null === (t = null == c ? void 0 : c.profile) || void 0 === t ? void 0 : t.isNsfw),
					f = Object(b.a)(d);
				return n.a.createElement("div", {
					className: N.a.supporter
				}, n.a.createElement("div", {
					className: N.a.supporterRank
				}, u), n.a.createElement(j, {
					className: N.a.user,
					name: m,
					isAnonymousUser: !c,
					onClick: () => {
						c && s(Object(S.j)(c.id, c.displayName))
					}
				}, n.a.createElement(g, {
					name: m,
					iconUrl: p,
					isNsfw: x,
					isCurrentUser: l
				})), n.a.createElement(f, {
					className: N.a.powerupIcon
				}), n.a.createElement("div", {
					className: N.a.score
				}, d))
			};
			var w = s("./src/reddit/components/ScrollGradient/index.tsx"),
				C = s("./src/reddit/constants/modals.ts"),
				k = s("./src/reddit/hooks/useScrollGradient.ts"),
				O = s("./src/reddit/models/Toast/index.ts"),
				P = s("./src/reddit/selectors/gold/powerups/index.ts"),
				y = s("./src/reddit/selectors/platform.ts"),
				I = s("./src/reddit/selectors/user.ts"),
				M = s("./src/reddit/components/PowerupsSidebar/SupportersListModal/index.m.less"),
				U = s.n(M);
			const {
				fbt: B
			} = s("./node_modules/fbt/lib/FbtPublic.js"), L = e => ({
				data: e,
				key: Object(p.b)(e)
			});
			t.default = Object(a.a)(() => {
				const e = Object(o.e)(I.k),
					t = Object(o.e)(y.t),
					s = Object(o.e)(e => t ? Object(P.n)(e, {
						subredditId: t.id
					}) : []),
					[a, p] = Object(r.useState)([]);
				Object(r.useEffect)(() => {
					var e;
					p(null !== (e = null == s ? void 0 : s.map(L)) && void 0 !== e ? e : [])
				}, [s, p]);
				const b = Object(o.d)(),
					x = Object(h.a)();
				Object(r.useEffect)(() => {
					x(Object(S.f)())
				}, [x]), Object(r.useEffect)(() => {
					Object(u.a)()
				}, []);
				const N = () => {
						b(Object(i.g)(C.a.ECON_SUPPORTERS_LIST))
					},
					{
						container: f,
						isScrollGradientVisible: _,
						calculateGradientVisibility: E
					} = Object(k.a)(!0);
				return Object(r.useEffect)(() => {
					E()
				}), t ? n.a.createElement("div", {
					className: U.a.container
				}, n.a.createElement("div", {
					className: U.a.header
				}, n.a.createElement(d.a, {
					onClick: N
				}), n.a.createElement("h3", {
					className: U.a.heading
				}, B._("Community Heroes", null, {
					hk: "2ssat0"
				})), n.a.createElement("h4", {
					className: U.a.subheading
				}, t.displayText)), n.a.createElement("div", {
					className: U.a.supportersContainer,
					onScroll: E,
					ref: f
				}, a.map((t, s) => n.a.createElement(v, {
					key: t.key,
					supporter: t.data,
					currentUser: e,
					rank: s + 1
				}))), n.a.createElement("div", {
					className: U.a.footer
				}, n.a.createElement(w.a, {
					className: U.a.scrollGradient,
					isVisible: _
				}), n.a.createElement(m.a, {
					className: U.a.ctaButton,
					onClick: () => {
						x(Object(S.C)()), b(Object(c.g)("supporters_list_modal"))
					}
				}))) : (b(Object(l.f)({
					kind: O.b.Error,
					duration: l.a,
					text: B._("Something went wrong", null, {
						hk: "1IJNeH"
					})
				})), N(), null)
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
				o = s("./src/reddit/icons/svgs/PowerupTier1/index.tsx"),
				a = s("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				c = s("./src/reddit/icons/svgs/PowerupTier3/index.tsx");
			const i = 2,
				l = 3;

			function d(e) {
				return e >= l ? c.a : e >= i ? a.a : o.a
			}

			function u(e) {
				var t;
				const s = !e,
					n = `${r.a.assetPath}/img/powerups/snoovatar_anonymous.svg`;
				return s ? n : null === (t = null == e ? void 0 : e.icon) || void 0 === t ? void 0 : t.url
			}
			const m = ({
				displayName: e,
				score: t
			}) => e || n.fbt._({
				"*": "Anonymous Heroes",
				_1: "Anonymous Hero"
			}, [n.fbt._plural(t)], {
				hk: "8kyEI"
			}).toString()
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
				o = s.n(n),
				a = s("./src/reddit/components/ScrollGradient/index.m.less"),
				c = s.n(a);
			const i = ({
				className: e,
				isVisible: t
			}) => o.a.createElement("div", {
				className: Object(r.a)(c.a.gradient, e, {
					[c.a.visible]: t
				})
			})
		},
		"./src/reddit/hooks/useScrollGradient.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var r = s("./node_modules/react/index.js");

			function n(e) {
				const [t, s] = Object(r.useState)(e), n = Object(r.useRef)(null);
				return {
					container: n,
					isScrollGradientVisible: t,
					calculateGradientVisibility: () => {
						const e = n.current;
						if (!e) return;
						const t = e.getBoundingClientRect().height,
							r = Math.ceil(e.scrollTop + t) >= e.scrollHeight;
						s(!r)
					}
				}
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SupportersListModal.8d4c55a57fbd41eff115.js.map