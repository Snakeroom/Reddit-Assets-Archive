// https://www.redditstatic.com/desktop2x/EconAchievementFlairModal.020603aa0c04eb83b113.js
// Retrieved at 8/31/2021, 6:10:10 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EconAchievementFlairModal"], {
		"./src/reddit/actions/economics/subredditPremium/actionCreators.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			})), s.d(t, "b", (function() {
				return o
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "e", (function() {
				return m
			})), s.d(t, "f", (function() {
				return u
			})), s.d(t, "g", (function() {
				return p
			})), s.d(t, "h", (function() {
				return h
			})), s.d(t, "i", (function() {
				return v
			})), s.d(t, "j", (function() {
				return b
			}));
			var a = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/modal.ts"),
				i = s("./src/reddit/constants/modals.ts"),
				n = s("./src/reddit/actions/economics/subredditPremium/constants.ts");
			const c = Object(a.a)(n.a),
				o = Object(a.a)(n.b),
				d = Object(a.a)(n.c),
				l = Object(a.a)(n.d),
				m = Object(a.a)(n.e),
				u = Object(a.a)(n.f),
				p = Object(a.a)(n.g),
				h = Object(a.a)(n.h),
				v = Object(a.a)(n.i),
				b = e => Object(r.h)(i.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, {
					uploadAssetType: e
				})
		},
		"./src/reddit/components/Badges/UserDisplay/index.m.less": function(e, t, s) {
			e.exports = {
				addCustom: "LalRrQILNjt65y-p-QlWH",
				addCustomLink: "_3J2-xIxxxP9ISzeLWCOUVc",
				badgeHovercard: "FyLpt0kIWG1bTDWZ8HIL1",
				image: "_2ntJEAiwKXBGvxrJiqxx_2",
				wrapper: "_1SqBC7PQ5dMOdF0MhPIkA8"
			}
		},
		"./src/reddit/components/Badges/UserDisplay/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return F
			})), s.d(t, "c", (function() {
				return y
			})), s.d(t, "a", (function() {
				return C
			}));
			var a = s("./node_modules/react/index.js"),
				r = s.n(a),
				i = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				c = s("./src/config.ts"),
				o = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				l = s("./src/reddit/actions/tooltip.ts"),
				m = s("./src/higherOrderComponents/makeAsync.tsx");
			var u = Object(m.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => s.e("SubredditPremiumBadgeHovercardTooltip").then(s.bind(null, "./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/tooltip.tsx")).then(e => e.default)
				}),
				p = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				h = s("./src/reddit/featureFlags/index.ts"),
				v = s("./src/reddit/helpers/economics/sortBadges.ts"),
				b = s("./src/reddit/icons/svgs/AddSquare/index.tsx"),
				E = s("./src/reddit/models/Badge/index.ts");
			var f = Object(m.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => s.e("CustomBadgeHovercardTooltip").then(s.bind(null, "./src/reddit/components/Badges/UserDisplay/AddCustomTooltip/tooltip.tsx")).then(e => e.default)
				}),
				x = s("./src/reddit/components/Badges/UserDisplay/index.m.less"),
				I = s.n(x);

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
					}
					return e
				}).apply(this, arguments)
			}
			const g = "add-custom-badge-tooltip",
				j = 100,
				_ = 2 * j,
				N = 24;
			class F extends r.a.Component {
				constructor() {
					super(...arguments), this.mouseOverTooltip = void 0, this.enterTimeout = void 0, this.exitTimeout = void 0, this.handleMouseEnter = e => {
						this.mouseOverTooltip && this.mouseOverTooltip !== e ? this.props.onShowTooltip(e) : (clearTimeout(this.enterTimeout), this.enterTimeout = window.setTimeout(() => {
							this.mouseOverTooltip === e && this.props.onShowTooltip(e)
						}, j)), this.mouseOverTooltip = e
					}, this.handleMouseLeave = () => {
						clearTimeout(this.exitTimeout), clearTimeout(this.enterTimeout), this.mouseOverTooltip = void 0, this.exitTimeout = window.setTimeout(() => {
							this.mouseOverTooltip || (clearTimeout(this.enterTimeout), this.props.onHideTooltip())
						}, _)
					}
				}
				render() {
					const {
						badges: e
					} = this.props;
					if (this.props.usePlaceholder && !e.length) return r.a.createElement("img", {
						className: Object(o.a)(I.a.image, this.props.className),
						src: `${c.a.assetPath}/img/badges/placeholder.png`
					});
					const t = `${g}-${this.props.uniqueIdentifier}`,
						s = this.props.badgeSize || N;
					return r.a.createElement(a.Fragment, null, this.props.showAddCustom && r.a.createElement("div", {
						className: I.a.wrapper,
						id: t,
						onMouseEnter: () => this.handleMouseEnter(t),
						onMouseLeave: () => this.handleMouseLeave()
					}, r.a.createElement("button", {
						className: I.a.addCustomLink,
						onClick: this.props.onOpenUploadDialog
					}, r.a.createElement(b.a, {
						className: I.a.addCustom
					})), r.a.createElement(f, {
						className: I.a.badgeHovercard,
						subredditId: this.props.subredditId,
						targetPosition: ["left", "bottom"],
						tooltipId: t,
						tooltipPosition: ["left", "top"],
						onHideTooltip: () => this.props.onHideTooltip()
					})), Object(v.a)(e).map(e => {
						const t = Object(E.d)(s, s, e),
							i = `badges-display-${e.id}-${this.props.uniqueIdentifier}`;
						return r.a.createElement(a.Fragment, {
							key: `badges-fragement-${e.id}`
						}, r.a.createElement("div", {
							className: Object(o.a)(I.a.wrapper, this.props.className),
							key: `wrapper-${e.id}`,
							onMouseEnter: () => this.handleMouseEnter(i),
							onMouseLeave: () => this.handleMouseLeave()
						}, r.a.createElement("img", {
							className: I.a.image,
							id: i,
							key: e.id,
							src: t.url2x,
							srcSet: `${t.url}, ${t.url2x} 2x`,
							style: {
								height: `${s}px`
							}
						}), this.props.useHovercard ? r.a.createElement(u, {
							badge: e,
							correlationId: this.props.correlationId,
							className: I.a.badgeHovercard,
							key: `tooltip-${e.id}`,
							subredditId: this.props.subredditId,
							targetPosition: ["left", "bottom"],
							tooltipId: i,
							tooltipPosition: ["left", "top"],
							userId: "userId" in this.props ? this.props.userId : void 0
						}) : r.a.createElement(p.c, {
							caretOnTop: !0,
							key: `tooltip-${e.id}`,
							tooltipId: i,
							text: e.title
						})))
					}))
				}
			}
			const k = [],
				w = Object(n.c)({
					badgeIds: (e, {
						subredditId: t,
						userId: s
					}) => {
						var a;
						return (null === (a = e.users.appliedBadges[s]) || void 0 === a ? void 0 : a[t]) || k
					},
					allBadges: e => e.badges.models,
					useHovercard: h.d.spSpecialMemberships
				}),
				A = Object(n.c)({
					badgeIds: (e, {
						subredditId: t
					}) => {
						var s;
						const a = e.user.account;
						return a && (null === (s = e.users.appliedBadges[a.id]) || void 0 === s ? void 0 : s[t]) || k
					},
					allBadges: e => e.badges.models,
					useHovercard: h.d.spSpecialMemberships
				}),
				P = e => ({
					onShowTooltip: t => e(Object(l.f)({
						tooltipId: t
					})),
					onHideTooltip: () => e(Object(l.i)()),
					onOpenUploadDialog: () => e(Object(d.j)())
				});

			function T(e) {
				const {
					badgeIds: t,
					allBadges: s,
					...a
				} = e, i = t.map(e => s[e]).filter(Boolean);
				return r.a.createElement(F, O({
					badges: i
				}, a))
			}
			const y = Object(i.b)(w, P)(T),
				C = Object(i.b)(A, P)(T)
		},
		"./src/reddit/components/Econ/AchievementFlair/AchievementFlairModal/AchievementFlairs.m.less": function(e, t, s) {
			e.exports = {
				achievementsHeading: "_2MMWZ77acTlm_HNoeapQrs",
				headingPowerupsBolt: "_33HOGcxqKoE84O57mKGWIe",
				achievementsDescription: "sLeTiZCYDJEbJ01INVqgQ",
				achievementsList: "_27p8VqslTxRwJe-f0NSi2m",
				achievementItem: "_2HKHknVd9LlHZ26npnx_hF",
				achievementItemLocked: "_2KVQTU9959HwoV_Y5t6a9o",
				achievementImg: "_3pGwtkZgq76y6km-4aV-AX",
				achievementName: "_3y-oQjndG4AJDXCuKlgqsi",
				achievementImgLocked: "lJJ5VJ31kVOe0f0sVxmRa",
				achievementItemActive: "_1YPI1ZuBHDqkzs4wGUy_ey",
				achievementItemSelectable: "_2Q_KiHR7hwjxseAF5VH-67",
				achievementImgWrapper: "_5Rc7ZoY5MWCNTPigbIz52",
				achievementLock: "_9RN8EyAC7RajeViTsGJPw",
				achievementTooltip: "_1M4-T4IABYlmO-XJKv2wnt",
				powerupButton: "_1IO-3cKRnocfG9casq6y9P",
				Icon: "_13PSx7anaGbYWlueCodaW5",
				icon: "_13PSx7anaGbYWlueCodaW5",
				isLeft: "_2ACtdSQaOfAKorAXvPb7GO",
				isRight: "_2Ox74dQag88nuR4JTUxIcp",
				active: "_39m29j07mjDa2eptwIwnt7"
			}
		},
		"./src/reddit/components/Econ/AchievementFlair/AchievementFlairModal/Header.m.less": function(e, t, s) {
			e.exports = {
				container: "_2ofZ3SIhJTW1k6dqzsj4Zp",
				closeIcon: "_2-17aOl6GJdrxv9YJsJjeV"
			}
		},
		"./src/reddit/components/Econ/AchievementFlair/AchievementFlairModal/UserFlair.m.less": function(e, t, s) {
			e.exports = {
				container: "_2WodkoDy6Hve0i7HUiy0jY",
				header: "_1BgkB2WIlORMgfqEIN15-I",
				flairText: "l81EtFSYaVr_9EN_34aHH",
				editButton: "_3hO5HFaStSXbTk2jrf8Kvy",
				flair: "_1cXJeRWc_6Id1Pc6euMfe_"
			}
		},
		"./src/reddit/components/Econ/AchievementFlair/AchievementFlairModal/index.m.less": function(e, t, s) {
			e.exports = {
				container: "X-MUWdOjSUyI9mAZKbqSI"
			}
		},
		"./src/reddit/components/Econ/AchievementFlair/AchievementFlairModal/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var a = s("./node_modules/react/index.js"),
				r = s.n(a),
				i = s("./node_modules/react-redux/es/index.js"),
				n = s("./src/higherOrderComponents/asModal/index.tsx"),
				c = s("./src/reddit/actions/modal.ts"),
				o = s("./src/reddit/constants/modals.ts"),
				d = s("./src/reddit/models/User/index.ts"),
				l = s("./src/reddit/selectors/platform.ts"),
				m = s("./src/reddit/selectors/user.ts"),
				u = s("./src/reddit/selectors/userFlair.ts"),
				p = s("./src/reddit/actions/economics/powerups/achievements.ts"),
				h = s("./src/reddit/actions/gold/powerups.ts"),
				v = s("./src/reddit/components/Econ/PowerupsMarketingModal/async.tsx"),
				b = s("./src/reddit/components/PowerupsCtaButton/index.tsx"),
				E = s("./src/reddit/controls/Button/index.tsx"),
				f = s("./src/reddit/helpers/trackers/powerups.ts"),
				x = s("./src/reddit/hooks/useTracking.ts"),
				I = s("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				O = s("./src/reddit/selectors/gold/powerups/index.ts"),
				g = s("./src/reddit/selectors/gold/powerups/achievements.ts"),
				j = s("./src/lib/classNames/index.ts"),
				_ = s("./src/reddit/actions/tooltip.ts"),
				N = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				F = s("./src/reddit/helpers/trackers/userFlair.ts"),
				k = s("./src/reddit/icons/fonts/index.tsx"),
				w = s("./src/reddit/components/Econ/AchievementFlair/AchievementFlairModal/AchievementFlairs.m.less"),
				A = s.n(w);
			const {
				fbt: P
			} = s("./node_modules/fbt/lib/FbtPublic.js"), T = ({
				achievement: e,
				onSelect: t
			}) => {
				const s = Object(i.d)(),
					a = Object(x.a)(),
					n = `achievement-locked-${e.type}`,
					c = P._("To use this achievement, you gotta earn it!", null, {
						hk: "2RYhLB"
					}),
					o = () => {
						if (e.isLocked) return s(Object(_.h)({
							tooltipId: n
						}))
					},
					d = !e.isLocked && !e.isPreferred;
				return r.a.createElement("div", {
					onMouseEnter: o,
					onMouseLeave: o,
					onClick: () => {
						d && t(e.type), e.isPreferred || a(Object(F.b)({
							achievementFlair: e
						}))
					},
					className: Object(j.a)(A.a.achievementItem, {
						[A.a.achievementItemLocked]: e.isLocked,
						[A.a.achievementItemActive]: e.isPreferred,
						[A.a.achievementItemSelectable]: d
					}),
					"data-testid": `af-modal-achievement-flair-${e.type}`
				}, r.a.createElement("div", {
					className: A.a.achievementImgWrapper
				}, r.a.createElement("img", {
					id: n,
					className: A.a.achievementImg,
					src: e.icon.url,
					alt: e.name
				}), r.a.createElement("div", {
					className: A.a.achievementImgLocked
				}, r.a.createElement(k.a, {
					name: "lock",
					isFilled: !0,
					className: A.a.achievementLock
				}))), r.a.createElement("div", {
					className: A.a.achievementName
				}, r.a.createElement("span", null, e.name)), e.isLocked && r.a.createElement(N.c, {
					tooltipId: n,
					text: c,
					className: A.a.achievementTooltip
				}))
			}, {
				fbt: y
			} = s("./node_modules/fbt/lib/FbtPublic.js"), C = ({
				className: e,
				subredditId: t,
				userId: s
			}) => {
				const n = Object(x.a)(),
					c = Object(i.e)(e => Object(g.b)(e, {
						subredditId: t,
						userId: s
					})),
					o = Object(i.e)(e => Object(O.n)(e, {
						subredditId: t
					})),
					d = Object(i.e)(e => Object(g.e)(e, {
						subredditId: t,
						userId: s
					})),
					l = Object(i.d)(),
					m = e => {
						l(Object(p.d)(t, e))
					},
					u = () => {
						l(Object(h.f)("user_flair_picker"))
					};
				return Object(a.useEffect)(() => {
					Object(v.a)()
				}, []), r.a.createElement("div", {
					className: e
				}, r.a.createElement("h4", {
					className: A.a.achievementsHeading
				}, r.a.createElement(I.a, {
					className: A.a.headingPowerupsBolt
				}), y._("Achievements", null, {
					hk: "1DnL4g"
				})), r.a.createElement("p", {
					className: A.a.achievementsDescription
				}, (() => o && !d ? y._("Unlock the Powerup Supporter achievement when you Powerup this community", null, {
					hk: "2ZIvgm"
				}) : o ? y._("Unlocked with Powerups! Choose the achievement you’d like to highlight.", null, {
					hk: "4iPJwf"
				}) : y._("Powerup to unlock community achievements", null, {
					hk: "1oPooH"
				}))()), r.a.createElement("div", {
					className: A.a.achievementsList
				}, c.map(e => r.a.createElement(T, {
					achievement: e,
					key: e.type,
					onSelect: m
				}))), (() => o && !d ? r.a.createElement(b.a, {
					onClick: () => {
						n(Object(f.x)()), u()
					}
				}) : o ? null : r.a.createElement(E.q, {
					priority: E.b.Primary,
					className: A.a.powerupButton,
					isFullWidth: !0,
					onClick: () => {
						n(Object(f.v)()), u()
					}
				}, y._("Powerup to Unlock", null, {
					hk: "M8l7D"
				})))())
			};
			var L = s("./src/reddit/icons/svgs/Close/index.tsx"),
				M = s("./src/reddit/components/Econ/AchievementFlair/UserFlairPreview.tsx"),
				H = s("./src/reddit/components/Econ/AchievementFlair/AchievementFlairModal/Header.m.less"),
				S = s.n(H);
			const B = ({
				className: e,
				subredditId: t,
				userId: s,
				flairData: a,
				onModalClose: i,
				username: n
			}) => r.a.createElement("div", {
				className: Object(j.a)(S.a.container, e),
				"data-testid": "achievement-flair-modal-header"
			}, r.a.createElement(M.a, {
				className: S.a.userFlairPreview,
				subredditId: t,
				userId: s,
				username: n,
				flairData: a
			}), r.a.createElement(L.a, {
				className: S.a.closeIcon,
				onClick: i,
				"data-testid": "close-icon"
			}));
			var U = s("./src/reddit/components/Econ/AchievementFlair/AchievementFlairModal/index.m.less"),
				D = s.n(U),
				V = s("./src/reddit/actions/authorFlair.ts"),
				W = s("./src/reddit/components/Flair/index.tsx"),
				q = s("./src/reddit/components/Econ/AchievementFlair/AchievementFlairModal/UserFlair.m.less"),
				G = s.n(q);
			const {
				fbt: R
			} = s("./node_modules/fbt/lib/FbtPublic.js"), J = ({
				className: e,
				subredditId: t,
				flairData: s
			}) => {
				const a = Object(i.d)(),
					n = Object(x.a)(),
					c = Object(i.e)(m.k);
				return c ? r.a.createElement("div", {
					className: Object(j.a)(G.a.container, e)
				}, r.a.createElement("div", {
					className: G.a.header
				}, r.a.createElement("h4", {
					className: G.a.flairText
				}, R._("User flair", null, {
					hk: "3ToqP0"
				})), r.a.createElement(E.q, {
					className: G.a.editButton,
					priority: E.b.Plain,
					onClick: () => {
						const e = c ? Object(d.e)(c) : null;
						n(Object(F.a)()), a(Object(V.b)({
							username: e,
							subredditId: t,
							isOpenedFromAchievementsModal: !0
						}))
					},
					"data-testid": "edit-user-flair-button"
				}, r.a.createElement(k.a, {
					name: "edit"
				}))), (null == s ? void 0 : s.applied) && s.displaySettings.isUserEnabled && r.a.createElement(W.b, {
					className: G.a.flair,
					flair: s.applied,
					forceSmallEmojis: !0
				})) : null
			};
			t.default = Object(n.a)(() => {
				const e = Object(i.d)(),
					t = Object(i.e)(m.k),
					s = Object(i.e)(l.e),
					a = Object(i.e)(e => s ? Object(u.b)(e, {
						subredditId: s.id
					}) : null),
					n = Object(i.e)(e => s ? Object(u.d)(e, {
						subredditId: s.id
					}) : null),
					p = !!a && !!n;
				return t && s ? r.a.createElement("div", {
					className: D.a.container
				}, r.a.createElement(B, {
					subredditId: s.id,
					userId: t.id,
					username: Object(d.e)(t),
					flairData: n,
					onModalClose: () => {
						e(Object(c.g)(o.a.ACHIEVEMENT_FLAIR))
					}
				}), p && r.a.createElement(J, {
					subredditId: s.id,
					flairData: n
				}), r.a.createElement(C, {
					subredditId: s.id,
					userId: t.id
				})) : null
			})
		},
		"./src/reddit/components/Econ/AchievementFlair/AchivementsHoverPopup.m.less": function(e, t, s) {
			e.exports = {
				container: "_3kd-dlN-SayusCxdP2netc",
				header: "_2qYkItLcJFJyORCGH9k8xc",
				powerupsLogo: "_3tAkLAAQVM-WSVSzy-_cEa",
				headerText: "_1FyMArbFbR91zDup_aXAUI",
				headerDelimiter: "_1O5D69EOlVhvj5bzxwHE38",
				achievements: "_2184liSTNqbtEvYN_pvrvZ",
				achievementItem: "DpiFfz95qctN0--U4vopM",
				achievementImgWrapper: "EP4eFqOgkm9TaTOXYXyIA",
				achievementImg: "_32rRB3c7q17wOs_Fz7Bdk",
				achievementName: "_2RAw7XCPPgNLzOBs-_7Cix",
				footer: "_18M7nTbpMAhYLhlWT-5tla",
				scrollGradient: "_2nRTIGjTOu0IHUU0XJ6h9n",
				gradientVisible: "_3IBEob3IfIdXcuzrEz6Kg-",
				ctaButton: "D7NSPqulzWmB1gE8x95iQ"
			}
		},
		"./src/reddit/components/Econ/AchievementFlair/UserAchievementFlair.m.less": function(e, t, s) {
			e.exports = {
				container: "_2tytE20aBhQMtf6GkTvN3",
				hoverPopup: "_2-UmlwvzsKsjDIuXchymkf",
				icon: "_16Osj2XUXJVMQLOL8-1m8E",
				hiddenAchievementsCount: "BndgSmDj59XX1brHFAMZC"
			}
		},
		"./src/reddit/components/Econ/AchievementFlair/UserAchievementFlair.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return O
			}));
			var a = s("./node_modules/react/index.js"),
				r = s.n(a),
				i = s("./node_modules/react-redux/es/index.js"),
				n = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/actions/gold/powerups.ts"),
				o = s("./src/reddit/controls/Button/index.tsx"),
				d = s("./src/reddit/helpers/trackers/userFlair.ts"),
				l = s("./src/reddit/hooks/useScrollGradient.ts"),
				m = s("./src/reddit/hooks/useTracking.ts"),
				u = s("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				p = s("./src/reddit/selectors/gold/powerups/achievements.ts"),
				h = s("./src/reddit/selectors/subreddit.ts"),
				v = s("./src/reddit/components/Econ/AchievementFlair/AchivementsHoverPopup.m.less"),
				b = s.n(v);
			const {
				fbt: E
			} = s("./node_modules/fbt/lib/FbtPublic.js"), f = ({
				className: e,
				subredditId: t,
				userId: s
			}) => {
				const v = Object(i.e)(e => Object(p.b)(e, {
						subredditId: t,
						userId: s
					})),
					f = Object(i.e)(e => Object(h.Q)(e, {
						subredditId: t
					})),
					x = Object(i.d)(),
					I = Object(m.a)(),
					{
						container: O,
						isScrollGradientVisible: g,
						calculateGradientVisibility: j
					} = Object(l.a)(!1);
				Object(a.useEffect)(() => {
					j()
				}, [j]);
				return r.a.createElement("div", {
					className: Object(n.a)(b.a.container, e)
				}, r.a.createElement("div", {
					className: b.a.header
				}, r.a.createElement(u.a, {
					className: b.a.powerupsLogo
				}), E._("{r/community} {=achievements}", [E._param("r/community", f.displayText), E._param("=achievements", r.a.createElement("span", {
					className: b.a.headerText
				}, E._("achievements", null, {
					hk: "1IkAza"
				})))], {
					hk: "3GkQD9"
				})), r.a.createElement("div", {
					className: b.a.headerDelimiter
				}), r.a.createElement("div", {
					className: b.a.achievements,
					onScroll: j,
					ref: O
				}, v.map(e => !e.isLocked && r.a.createElement("div", {
					className: b.a.achievementItem,
					key: e.type
				}, r.a.createElement("div", {
					className: b.a.achievementImgWrapper
				}, r.a.createElement("img", {
					className: b.a.achievementImg,
					src: e.icon.url,
					alt: e.name
				})), r.a.createElement("div", {
					className: b.a.achievementName
				}, r.a.createElement("span", null, e.name))))), r.a.createElement("div", {
					className: b.a.footer
				}, r.a.createElement("div", {
					className: Object(n.a)(b.a.scrollGradient, {
						[b.a.gradientVisible]: g
					})
				}), r.a.createElement(o.q, {
					priority: o.b.Secondary,
					className: b.a.ctaButton,
					onClick: () => {
						I(Object(d.d)()), x(Object(c.e)())
					},
					isFullWidth: !0
				}, E._("View your achievements", null, {
					hk: "2ZyIE3"
				}))))
			};
			var x = s("./src/reddit/components/Econ/AchievementFlair/UserAchievementFlair.m.less"),
				I = s.n(x);
			const O = ({
					className: e,
					subredditId: t,
					userId: s,
					showPopupOnHover: c,
					onHover: o
				}) => {
					var d;
					const l = Object(i.e)(e => Object(p.d)(e, {
							subredditId: t,
							userId: s
						})),
						m = Object(i.e)(e => Object(p.e)(e, {
							subredditId: t,
							userId: s
						})),
						u = null === (d = Object(i.e)(e => Object(p.c)(e, {
							subredditId: t,
							userId: s
						}))) || void 0 === d ? void 0 : d.achievementTypes,
						[h, v] = Object(a.useState)(!1);
					if (!(!!l || !!m) || !u) return null;
					const b = (null == m ? void 0 : m.type) === (null == l ? void 0 : l.type) ? null : m,
						E = 1 + (b ? 1 : 0),
						x = (null == u ? void 0 : u.length) - E;
					return r.a.createElement("span", {
						className: Object(n.a)(I.a.container, e),
						"data-testid": "achievement-flairs",
						onMouseEnter: () => {
							c && (v(!0), null == o || o())
						},
						onMouseLeave: () => {
							v(!1)
						}
					}, r.a.createElement(g, {
						achievement: b
					}), r.a.createElement(g, {
						achievement: l
					}), !!x && r.a.createElement("span", {
						className: I.a.hiddenAchievementsCount
					}, "+", x), c && h && r.a.createElement(f, {
						className: I.a.hoverPopup,
						subredditId: t,
						userId: s
					}))
				},
				g = ({
					achievement: e
				}) => e ? r.a.createElement("img", {
					alt: e.name,
					className: I.a.icon,
					src: e.icon.url
				}) : null
		},
		"./src/reddit/components/Econ/AchievementFlair/UserFlairPreview.m.less": function(e, t, s) {
			e.exports = {
				flairPreviewLine: "_9U85xFylyRCZNL6qmFbx",
				flairPreview: "_3kS07M5t3AnCSn-dzPT28L",
				badge: "_3DumoWvuDZ7lI_JPA4ACHT",
				userIcon: "_2d6f5m40Wp18i0fC6mloL3",
				allFlair: "MsNDLMKXGpyANwNmwjClc",
				flairPreviewFirstLine: "_2zJmxsJUBCpVk9xUBGzZpP",
				username: "_3MMCPmniAei9M8H_KF1370",
				flairPreviewSecondLine: "_3f8i-0tQOqxvijtZIdqRv2",
				userFlair: "_1nNvsQvf6jy4_nUR_Sv0dS",
				achievementFlair: "_1SkwA-RUKQvmuGiuvGXPPW"
			}
		},
		"./src/reddit/components/Econ/AchievementFlair/UserFlairPreview.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return v
			}));
			var a = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				n = s("./node_modules/react-redux/es/index.js"),
				c = s("./src/reddit/components/Badges/UserDisplay/index.tsx"),
				o = s("./src/reddit/components/Econ/AchievementFlair/UserAchievementFlair.tsx"),
				d = s("./src/reddit/components/Flair/index.tsx"),
				l = s("./src/reddit/components/UserIcon/index.tsx"),
				m = s("./src/reddit/components/UserIcon/constants.ts"),
				u = s("./src/reddit/selectors/user.ts"),
				p = s("./src/reddit/components/Econ/AchievementFlair/UserFlairPreview.m.less"),
				h = s.n(p);
			const v = ({
				className: e,
				subredditId: t,
				userId: s,
				flairData: r,
				username: p,
				userHasBadge: v
			}) => {
				const b = Object(n.e)(e => Object(u.k)(e));
				return b ? i.a.createElement("div", {
					className: Object(a.a)(h.a.flairPreview, e),
					"data-testid": "user-flair-preview"
				}, i.a.createElement(l.a, {
					className: h.a.userIcon,
					iconUrl: b.accountIcon,
					isNSFW: b.isNSFW,
					nsfwIconUrl: m.a,
					userName: p || ""
				}), i.a.createElement("div", {
					className: h.a.allFlair
				}, i.a.createElement("div", {
					className: h.a.flairPreviewFirstLine
				}, v && i.a.createElement(c.a, {
					className: h.a.badge,
					subredditId: t,
					uniqueIdentifier: t,
					badgeSize: 20
				}), i.a.createElement("span", {
					className: h.a.username
				}, `${p||"username"}`), i.a.createElement(o.a, {
					className: h.a.achievementFlair,
					subredditId: t,
					userId: s
				})), (null == r ? void 0 : r.applied) && r.displaySettings.isUserEnabled && i.a.createElement("div", {
					className: h.a.flairPreviewSecondLine
				}, i.a.createElement(d.b, {
					className: h.a.userFlair,
					flair: r.applied,
					forceSmallEmojis: !0
				})))) : null
			}
		},
		"./src/reddit/components/PowerupsCtaButton/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			}));
			var a = s("./node_modules/react/index.js"),
				r = s.n(a),
				i = s("./node_modules/react-redux/es/index.js"),
				n = s("./src/reddit/controls/Button/index.tsx"),
				c = s("./src/reddit/selectors/experiments/econ/index.ts"),
				o = s("./src/reddit/selectors/gold/powerups/index.ts");
			const {
				fbt: d
			} = s("./node_modules/fbt/lib/FbtPublic.js"), l = ({
				className: e,
				onClick: t
			}) => {
				const s = Object(i.e)(o.t),
					a = Object(i.e)(c.g);
				return r.a.createElement(n.q, {
					priority: n.b.Primary,
					className: e,
					onClick: t,
					isFullWidth: !0
				}, (() => s ? d._("Use Your Premium Powerup", null, {
					hk: "JJNaN"
				}) : a ? d._("Help Your Community", null, {
					hk: "2v0E8W"
				}) : d._("Become a Hero", null, {
					hk: "3IZNw3"
				}))())
			}
		},
		"./src/reddit/components/UserIcon/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			const a = "https://www.redditstatic.com/avatars/avatar_default_02_24A0ED.png"
		},
		"./src/reddit/hooks/useScrollGradient.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var a = s("./node_modules/react/index.js");

			function r(e) {
				const [t, s] = Object(a.useState)(e), r = Object(a.useRef)(null);
				return {
					container: r,
					isScrollGradientVisible: t,
					calculateGradientVisibility: () => {
						const e = r.current;
						if (!e) return;
						const t = e.getBoundingClientRect().height,
							a = Math.ceil(e.scrollTop + t) >= e.scrollHeight;
						s(!a)
					}
				}
			}
		},
		"./src/reddit/icons/svgs/AddSquare/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var a = s("./node_modules/react/index.js"),
				r = s.n(a);

			function i(e) {
				return r.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("rect", {
					fill: "transparent",
					height: "18",
					rx: "4.5",
					strokeDasharray: "2 2",
					strokeLinejoin: "round",
					strokeWidth: "1",
					width: "18",
					x: "1",
					y: "1"
				}), r.a.createElement("path", {
					clipRule: "evenodd",
					d: "M13 9H11V7C11 6.7235 10.7765 6.5 10.5 6.5H9.5C9.2235 6.5 9 6.7235 9 7V9H7C6.724 9 6.5 9.2235 6.5 9.5V10.5C6.5 10.7765 6.724 11 7 11H9V13C9 13.2765 9.2235 13.5 9.5 13.5H10.5C10.7765 13.5 11 13.2765 11 13V11H13C13.2765 11 13.5 10.7765 13.5 10.5V9.5C13.5 9.2235 13.2765 9 13 9Z",
					fillRule: "evenodd"
				}))
			}
		},
		"./src/reddit/icons/svgs/PowerupTier2/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				r = s.n(a);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 74 74",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id
			}, e.title && r.a.createElement("title", null, e.title), r.a.createElement("path", {
				d: "M28.03 73.65h-.08a3.47 3.47 0 01-2.48-1.15l-6.93-7.59a3.47 3.47 0 01-.69-3.63l4.5-10.73H19.6a3.47 3.47 0 01-2.56-1.15L10.1 41.8a3.47 3.47 0 01-.67-3.65L24.86 2.62A3.47 3.47 0 0128.02.54l29.8-.2a3.47 3.47 0 012.55 1.16L67.3 9.1a3.47 3.47 0 01.16 4.5l-7.5 9.54c.27.16.51.36.72.6l6.94 7.58a3.47 3.47 0 01-.12 4.82L30.47 72.66c-.65.64-1.53 1-2.44 1zM25.1 61.9l3.06 3.31L60.3 33.53l-3.64-4.03h-3.47a3.47 3.47 0 01-2.72-5.62l9.75-12.32-3.93-4.28-25.96.17L16.7 38.8l4.4 4.8h6.45a3.47 3.47 0 013.2 4.81L25.1 61.9z",
				fill: "#000"
			}), r.a.createElement("path", {
				d: "M34.1 11.6l22.76-7.78 6.99 7.58-17.58 22.21 10.94-7.58 6.98 7.58L27.1 70.18l-6.98-7.58L28.77 47l-10.1.06-7-7.58 22.43-27.9z",
				fill: "#FF7A00"
			}), r.a.createElement("path", {
				d: "M27.11 4.01l29.75-.2L39.3 26.04H57.2L20.11 62.6l9.69-23.1-18.12-.01L27.1 4z",
				fill: "#FFD15C"
			}), r.a.createElement("path", {
				d: "M35.79 35.25H17.77l11.74-27 18.8-.13-17.53 22.16h16.28l-17 17.75 5.73-12.78z",
				fill: "#FFF5C7"
			}), r.a.createElement("path", {
				d: "M54.32 26.03H36.77l20-3.03-2.45 3.03zM26.1 48.32l4.34-10.37-7.97 10.14 3.64.23z",
				fill: "#000"
			}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconAchievementFlairModal.020603aa0c04eb83b113.js.map