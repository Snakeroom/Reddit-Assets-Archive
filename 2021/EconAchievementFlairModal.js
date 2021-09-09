// https://www.redditstatic.com/desktop2x/EconAchievementFlairModal.a2d69022130d9a7e43a1.js
// Retrieved at 9/9/2021, 11:40:06 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EconAchievementFlairModal"], {
		"./src/reddit/actions/economics/powerups/achievements/index.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "onSubredditUserAchievementsLoaded", (function() {
				return x
			})), r.d(t, "onUsersSupportedSubredditsLoaded", (function() {
				return O
			})), r.d(t, "onSubredditUserAchievementPreferenceUpdateRequested", (function() {
				return E
			})), r.d(t, "onSubredditUserAchievementPreferenceUpdateSuccess", (function() {
				return g
			})), r.d(t, "onSubredditUserAchievementPreferenceUpdateFailed", (function() {
				return w
			})), r.d(t, "getSubredditUserAchievementsAndSupporterInfo", (function() {
				return _
			})), r.d(t, "getSubredditCurrentUserAchievementsAndSupporterInfo", (function() {
				return y
			})), r.d(t, "shouldFetchCommentsPowerupsInfo", (function() {
				return A
			})), r.d(t, "getSubredditUserCommentsPowerupsInfoFromCommentLinks", (function() {
				return k
			})), r.d(t, "getSubredditUserCommentsPowerupsInfoFromCommentCollection", (function() {
				return F
			})), r.d(t, "setSubredditUserAchievement", (function() {
				return N
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/lib/sentry/index.ts"),
				a = r("./src/lib/makeGqlRequest/index.ts"),
				d = r("./src/redditGQL/operations/SubredditUserAchievements.json"),
				c = r("./src/redditGQL/operations/UpdateAchievementFlairPreference.json");
			var o = r("./src/reddit/selectors/experiments/econ/index.ts"),
				l = r("./src/lib/initializeClient/installReducer.ts"),
				u = r("./src/reddit/reducers/features/powerups/index.ts"),
				m = r("./src/reddit/actions/gold/powerups.ts"),
				p = r("./src/reddit/actions/toaster.ts"),
				v = r("./src/reddit/models/Toast/index.ts"),
				b = r("./src/reddit/selectors/commentSelector.ts"),
				h = r("./src/reddit/selectors/gold/powerups/index.ts"),
				f = r("./src/reddit/selectors/gold/powerups/achievements.ts"),
				I = r("./src/reddit/selectors/user.ts"),
				j = r("./src/reddit/actions/economics/powerups/constants.ts");
			Object(l.a)({
				features: {
					powerups: u.a
				}
			});
			const x = Object(n.a)(j.d),
				O = Object(n.a)(j.h),
				E = Object(n.a)(j.f),
				g = Object(n.a)(j.g),
				w = Object(n.a)(j.e),
				_ = (e, t) => async (r, s, {
					gqlContext: n
				}) => {
					const c = t.filter(e => !!(null == e ? void 0 : e.trim()));
					if (c.length) try {
						const t = s(),
							i = Object(o.i)(t),
							l = await (async (e, t, r, s) => {
								const n = await Object(a.a)(e, {
									...d,
									variables: {
										subredditId: t,
										redditorIds: r,
										includeSupporterInfo: s
									}
								});
								if (!n.ok) throw new Error("Unable to fetch user achievements");
								return n.body.data
							})(n(), e, c, i),
							{
								subredditInfoById: u,
								redditorsInfoByIds: m
							} = l;
						await r(x(u)), i && m && await r(O(m))
					} catch (l) {
						i.c.captureException(l)
					}
				}, y = (e, t) => async (r, s) => {
					if (!e) return;
					const n = s(),
						i = Object(I.k)(n);
					if (!i || !Object(h.g)(n, {
							subredditId: e
						})) return;
					const a = !!Object(f.c)(n, {
						subredditId: e,
						userId: i.id
					});
					!t && a || await r(_(e, [i.id]))
				}, A = e => async (t, r) => {
					if (!e) return !1;
					await t(Object(m.l)(e, {
						fullData: !0
					}));
					const s = r();
					return Object(h.g)(s, {
						subredditId: e
					})
				}, k = e => async (t, r) => {
					var s;
					const n = r(),
						i = e.map(({
							id: e
						}) => e),
						a = Object(b.b)(n, {
							commentIds: i
						}),
						d = null === (s = a.find(e => e && e.subredditId)) || void 0 === s ? void 0 : s.subredditId;
					if (!(await t(A(d)))) return;
					const c = new Set(a.filter(e => !!(null == e ? void 0 : e.authorId)).map(({
						authorId: e
					}) => e));
					await t(_(d, Array.from(c)))
				}, F = (e, t) => async (r, s) => {
					if (!t) return;
					if (!(await r(A(e)))) return;
					const n = new Set;
					Object.values(t).forEach(e => {
						n.add(e.authorId)
					}), await r(_(e, Array.from(n)))
				}, N = (e, t) => async (r, n, {
					gqlContext: d
				}) => {
					const o = n(),
						l = Object(I.k)(o);
					if (!l) return;
					const u = {
						subredditId: e,
						userId: l.id,
						achievementType: t
					};
					r(E(u));
					try {
						await (async (e, t, r) => {
							const s = await Object(a.a)(e, {
								...c,
								variables: {
									subredditId: t,
									achievementType: r
								}
							});
							if (!s.ok || !s.body.data.updateAchievementFlairPreference.ok) throw new Error("Unable to update the preferred achievement flair")
						})(d(), u.subredditId, u.achievementType), r(g(u))
					} catch (m) {
						r(w(u)), i.c.captureException(m), r(Object(p.f)({
							duration: p.a,
							kind: v.b.Error,
							text: s.fbt._("Failed to set preferred achievement flair", null, {
								hk: "4bEftA"
							})
						}))
					}
				}
		},
		"./src/reddit/actions/economics/subredditPremium/actionCreators.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			})), r.d(t, "b", (function() {
				return c
			})), r.d(t, "c", (function() {
				return o
			})), r.d(t, "d", (function() {
				return l
			})), r.d(t, "e", (function() {
				return u
			})), r.d(t, "f", (function() {
				return m
			})), r.d(t, "g", (function() {
				return p
			})), r.d(t, "h", (function() {
				return v
			})), r.d(t, "i", (function() {
				return b
			})), r.d(t, "j", (function() {
				return h
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/reddit/actions/modal.ts"),
				i = r("./src/reddit/constants/modals.ts"),
				a = r("./src/reddit/actions/economics/subredditPremium/constants.ts");
			const d = Object(s.a)(a.a),
				c = Object(s.a)(a.b),
				o = Object(s.a)(a.c),
				l = Object(s.a)(a.d),
				u = Object(s.a)(a.e),
				m = Object(s.a)(a.f),
				p = Object(s.a)(a.g),
				v = Object(s.a)(a.h),
				b = Object(s.a)(a.i),
				h = e => Object(n.h)(i.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, {
					uploadAssetType: e
				})
		},
		"./src/reddit/components/Badges/UserDisplay/index.m.less": function(e, t, r) {
			e.exports = {
				addCustom: "LalRrQILNjt65y-p-QlWH",
				addCustomLink: "_3J2-xIxxxP9ISzeLWCOUVc",
				badgeHovercard: "FyLpt0kIWG1bTDWZ8HIL1",
				image: "_2ntJEAiwKXBGvxrJiqxx_2",
				wrapper: "_1SqBC7PQ5dMOdF0MhPIkA8"
			}
		},
		"./src/reddit/components/Badges/UserDisplay/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return y
			})), r.d(t, "c", (function() {
				return C
			})), r.d(t, "a", (function() {
				return T
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				d = r("./src/config.ts"),
				c = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				l = r("./src/reddit/actions/tooltip.ts"),
				u = r("./src/higherOrderComponents/makeAsync.tsx");
			var m = Object(u.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => r.e("SubredditPremiumBadgeHovercardTooltip").then(r.bind(null, "./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/tooltip.tsx")).then(e => e.default)
				}),
				p = r("./src/reddit/components/InfoTextTooltip/index.tsx"),
				v = r("./src/reddit/featureFlags/index.ts"),
				b = r("./src/reddit/helpers/economics/sortBadges.ts"),
				h = r("./src/reddit/icons/svgs/AddSquare/index.tsx"),
				f = r("./src/reddit/models/Badge/index.ts");
			var I = Object(u.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => r.e("CustomBadgeHovercardTooltip").then(r.bind(null, "./src/reddit/components/Badges/UserDisplay/AddCustomTooltip/tooltip.tsx")).then(e => e.default)
				}),
				j = r("./src/reddit/components/Badges/UserDisplay/index.m.less"),
				x = r.n(j);

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const E = "add-custom-badge-tooltip",
				g = 100,
				w = 2 * g,
				_ = 24;
			class y extends n.a.Component {
				constructor() {
					super(...arguments), this.mouseOverTooltip = void 0, this.enterTimeout = void 0, this.exitTimeout = void 0, this.handleMouseEnter = e => {
						this.mouseOverTooltip && this.mouseOverTooltip !== e ? this.props.onShowTooltip(e) : (clearTimeout(this.enterTimeout), this.enterTimeout = window.setTimeout(() => {
							this.mouseOverTooltip === e && this.props.onShowTooltip(e)
						}, g)), this.mouseOverTooltip = e
					}, this.handleMouseLeave = () => {
						clearTimeout(this.exitTimeout), clearTimeout(this.enterTimeout), this.mouseOverTooltip = void 0, this.exitTimeout = window.setTimeout(() => {
							this.mouseOverTooltip || (clearTimeout(this.enterTimeout), this.props.onHideTooltip())
						}, w)
					}
				}
				render() {
					const {
						badges: e
					} = this.props;
					if (this.props.usePlaceholder && !e.length) return n.a.createElement("img", {
						className: Object(c.a)(x.a.image, this.props.className),
						src: `${d.a.assetPath}/img/badges/placeholder.png`
					});
					const t = `${E}-${this.props.uniqueIdentifier}`,
						r = this.props.badgeSize || _;
					return n.a.createElement(s.Fragment, null, this.props.showAddCustom && n.a.createElement("div", {
						className: x.a.wrapper,
						id: t,
						onMouseEnter: () => this.handleMouseEnter(t),
						onMouseLeave: () => this.handleMouseLeave()
					}, n.a.createElement("button", {
						className: x.a.addCustomLink,
						onClick: this.props.onOpenUploadDialog
					}, n.a.createElement(h.a, {
						className: x.a.addCustom
					})), n.a.createElement(I, {
						className: x.a.badgeHovercard,
						subredditId: this.props.subredditId,
						targetPosition: ["left", "bottom"],
						tooltipId: t,
						tooltipPosition: ["left", "top"],
						onHideTooltip: () => this.props.onHideTooltip()
					})), Object(b.a)(e).map(e => {
						const t = Object(f.d)(r, r, e),
							i = `badges-display-${e.id}-${this.props.uniqueIdentifier}`;
						return n.a.createElement(s.Fragment, {
							key: `badges-fragement-${e.id}`
						}, n.a.createElement("div", {
							className: Object(c.a)(x.a.wrapper, this.props.className),
							key: `wrapper-${e.id}`,
							onMouseEnter: () => this.handleMouseEnter(i),
							onMouseLeave: () => this.handleMouseLeave()
						}, n.a.createElement("img", {
							className: x.a.image,
							id: i,
							key: e.id,
							src: t.url2x,
							srcSet: `${t.url}, ${t.url2x} 2x`,
							style: {
								height: `${r}px`
							}
						}), this.props.useHovercard ? n.a.createElement(m, {
							badge: e,
							correlationId: this.props.correlationId,
							className: x.a.badgeHovercard,
							key: `tooltip-${e.id}`,
							subredditId: this.props.subredditId,
							targetPosition: ["left", "bottom"],
							tooltipId: i,
							tooltipPosition: ["left", "top"],
							userId: "userId" in this.props ? this.props.userId : void 0
						}) : n.a.createElement(p.c, {
							caretOnTop: !0,
							key: `tooltip-${e.id}`,
							tooltipId: i,
							text: e.title
						})))
					}))
				}
			}
			const A = [],
				k = Object(a.c)({
					badgeIds: (e, {
						subredditId: t,
						userId: r
					}) => {
						var s;
						return (null === (s = e.users.appliedBadges[r]) || void 0 === s ? void 0 : s[t]) || A
					},
					allBadges: e => e.badges.models,
					useHovercard: v.d.spSpecialMemberships
				}),
				F = Object(a.c)({
					badgeIds: (e, {
						subredditId: t
					}) => {
						var r;
						const s = e.user.account;
						return s && (null === (r = e.users.appliedBadges[s.id]) || void 0 === r ? void 0 : r[t]) || A
					},
					allBadges: e => e.badges.models,
					useHovercard: v.d.spSpecialMemberships
				}),
				N = e => ({
					onShowTooltip: t => e(Object(l.f)({
						tooltipId: t
					})),
					onHideTooltip: () => e(Object(l.i)()),
					onOpenUploadDialog: () => e(Object(o.j)())
				});

			function P(e) {
				const {
					badgeIds: t,
					allBadges: r,
					...s
				} = e, i = t.map(e => r[e]).filter(Boolean);
				return n.a.createElement(y, O({
					badges: i
				}, s))
			}
			const C = Object(i.b)(k, N)(P),
				T = Object(i.b)(F, N)(P)
		},
		"./src/reddit/components/Econ/AchievementFlair/AchievementFlairModal/AchievementFlairs.m.less": function(e, t, r) {
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
		"./src/reddit/components/Econ/AchievementFlair/AchievementFlairModal/Header.m.less": function(e, t, r) {
			e.exports = {
				container: "_2ofZ3SIhJTW1k6dqzsj4Zp"
			}
		},
		"./src/reddit/components/Econ/AchievementFlair/AchievementFlairModal/UserFlair.m.less": function(e, t, r) {
			e.exports = {
				container: "_2WodkoDy6Hve0i7HUiy0jY",
				header: "_1BgkB2WIlORMgfqEIN15-I",
				flairText: "l81EtFSYaVr_9EN_34aHH",
				editButton: "_3hO5HFaStSXbTk2jrf8Kvy",
				flair: "_1cXJeRWc_6Id1Pc6euMfe_"
			}
		},
		"./src/reddit/components/Econ/AchievementFlair/AchievementFlairModal/index.m.less": function(e, t, r) {
			e.exports = {
				container: "X-MUWdOjSUyI9mAZKbqSI"
			}
		},
		"./src/reddit/components/Econ/AchievementFlair/AchievementFlairModal/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/higherOrderComponents/asModal/index.tsx"),
				d = r("./src/reddit/actions/modal.ts"),
				c = r("./src/reddit/constants/modals.ts"),
				o = r("./src/reddit/models/User/index.ts"),
				l = r("./src/reddit/selectors/platform.ts"),
				u = r("./src/reddit/selectors/user.ts"),
				m = r("./src/reddit/selectors/userFlair.ts"),
				p = r("./src/reddit/actions/economics/powerups/achievements/index.ts"),
				v = r("./src/reddit/actions/gold/powerups.ts"),
				b = r("./src/reddit/components/Econ/PowerupsMarketingModal/async.tsx"),
				h = r("./src/reddit/components/PowerupsCtaButton/index.tsx"),
				f = r("./src/reddit/controls/Button/index.tsx"),
				I = r("./src/reddit/helpers/trackers/powerups.ts"),
				j = r("./src/reddit/hooks/useTracking.ts"),
				x = r("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				O = r("./src/reddit/selectors/gold/powerups/index.ts"),
				E = r("./src/reddit/selectors/gold/powerups/achievements.ts"),
				g = r("./src/lib/classNames/index.ts"),
				w = r("./src/reddit/actions/tooltip.ts"),
				_ = r("./src/reddit/components/InfoTextTooltip/index.tsx"),
				y = r("./src/reddit/helpers/trackers/userFlair.ts"),
				A = r("./src/reddit/icons/fonts/index.tsx"),
				k = r("./src/reddit/components/Econ/AchievementFlair/AchievementFlairModal/AchievementFlairs.m.less"),
				F = r.n(k);
			const {
				fbt: N
			} = r("./node_modules/fbt/lib/FbtPublic.js"), P = ({
				achievement: e,
				onSelect: t
			}) => {
				const r = Object(i.d)(),
					s = Object(j.a)(),
					a = `achievement-locked-${e.type}`,
					d = N._("To use this achievement, you gotta earn it!", null, {
						hk: "2RYhLB"
					}),
					c = () => {
						if (e.isLocked) return r(Object(w.h)({
							tooltipId: a
						}))
					},
					o = !e.isLocked && !e.isPreferred;
				return n.a.createElement("div", {
					onMouseEnter: c,
					onMouseLeave: c,
					onClick: () => {
						o && t(e.type), e.isPreferred || s(Object(y.b)({
							achievementFlair: e
						}))
					},
					className: Object(g.a)(F.a.achievementItem, {
						[F.a.achievementItemLocked]: e.isLocked,
						[F.a.achievementItemActive]: e.isPreferred,
						[F.a.achievementItemSelectable]: o
					}),
					"data-testid": `af-modal-achievement-flair-${e.type}`
				}, n.a.createElement("div", {
					className: F.a.achievementImgWrapper
				}, n.a.createElement("img", {
					id: a,
					className: F.a.achievementImg,
					src: e.icon.url,
					alt: e.name
				}), n.a.createElement("div", {
					className: F.a.achievementImgLocked
				}, n.a.createElement(A.a, {
					name: "lock",
					isFilled: !0,
					className: F.a.achievementLock
				}))), n.a.createElement("div", {
					className: F.a.achievementName
				}, n.a.createElement("span", null, e.name)), e.isLocked && n.a.createElement(_.c, {
					tooltipId: a,
					text: d,
					className: F.a.achievementTooltip
				}))
			}, {
				fbt: C
			} = r("./node_modules/fbt/lib/FbtPublic.js"), T = ({
				className: e,
				subredditId: t,
				userId: r
			}) => {
				const a = Object(j.a)(),
					d = Object(i.e)(e => Object(E.b)(e, {
						subredditId: t,
						userId: r
					})),
					c = Object(i.e)(e => Object(O.n)(e, {
						subredditId: t
					})),
					o = Object(i.e)(e => Object(E.e)(e, {
						subredditId: t,
						userId: r
					})),
					l = Object(i.d)(),
					u = e => {
						l(Object(p.setSubredditUserAchievement)(t, e))
					},
					m = () => {
						l(Object(v.f)("user_flair_picker"))
					};
				return Object(s.useEffect)(() => {
					Object(b.a)()
				}, []), n.a.createElement("div", {
					className: e
				}, n.a.createElement("h4", {
					className: F.a.achievementsHeading
				}, n.a.createElement(x.a, {
					className: F.a.headingPowerupsBolt
				}), C._("Achievements", null, {
					hk: "1DnL4g"
				})), n.a.createElement("p", {
					className: F.a.achievementsDescription
				}, (() => c && !o ? C._("Unlock the Powerup Supporter achievement when you Powerup this community", null, {
					hk: "2ZIvgm"
				}) : c ? C._("Unlocked with Powerups! Choose the achievement you’d like to highlight.", null, {
					hk: "4iPJwf"
				}) : C._("Powerup to unlock community achievements", null, {
					hk: "1oPooH"
				}))()), n.a.createElement("div", {
					className: F.a.achievementsList
				}, d.map(e => n.a.createElement(P, {
					achievement: e,
					key: e.type,
					onSelect: u
				}))), (() => c && !o ? n.a.createElement(h.a, {
					onClick: () => {
						a(Object(I.y)()), m()
					}
				}) : c ? null : n.a.createElement(f.q, {
					priority: f.b.Primary,
					className: F.a.powerupButton,
					isFullWidth: !0,
					onClick: () => {
						a(Object(I.v)()), m()
					}
				}, C._("Powerup to Unlock", null, {
					hk: "M8l7D"
				})))())
			};
			var S = r("./src/reddit/components/Econ/Common/ModalCloseButton/index.tsx"),
				L = r("./src/reddit/components/Econ/AchievementFlair/UserFlairPreview.tsx"),
				M = r("./src/reddit/components/Econ/AchievementFlair/AchievementFlairModal/Header.m.less"),
				U = r.n(M);
			const B = ({
				className: e,
				subredditId: t,
				userId: r,
				flairData: s,
				onModalClose: i,
				username: a
			}) => n.a.createElement("div", {
				className: Object(g.a)(U.a.container, e),
				"data-testid": "achievement-flair-modal-header"
			}, n.a.createElement(L.a, {
				className: U.a.userFlairPreview,
				subredditId: t,
				userId: r,
				username: a,
				flairData: s
			}), n.a.createElement(S.a, {
				onClick: i
			}));
			var H = r("./src/reddit/components/Econ/AchievementFlair/AchievementFlairModal/index.m.less"),
				D = r.n(H),
				R = r("./src/reddit/actions/authorFlair.ts"),
				W = r("./src/reddit/components/Flair/index.tsx"),
				q = r("./src/reddit/components/Econ/AchievementFlair/AchievementFlairModal/UserFlair.m.less"),
				G = r.n(q);
			const {
				fbt: V
			} = r("./node_modules/fbt/lib/FbtPublic.js"), z = ({
				className: e,
				subredditId: t,
				flairData: r
			}) => {
				const s = Object(i.d)(),
					a = Object(j.a)(),
					d = Object(i.e)(u.k);
				return d ? n.a.createElement("div", {
					className: Object(g.a)(G.a.container, e)
				}, n.a.createElement("div", {
					className: G.a.header
				}, n.a.createElement("h4", {
					className: G.a.flairText
				}, V._("User flair", null, {
					hk: "3ToqP0"
				})), n.a.createElement(f.q, {
					className: G.a.editButton,
					priority: f.b.Plain,
					onClick: () => {
						const e = d ? Object(o.e)(d) : null;
						a(Object(y.a)()), s(Object(R.b)({
							username: e,
							subredditId: t,
							isOpenedFromAchievementsModal: !0
						}))
					},
					"data-testid": "edit-user-flair-button"
				}, n.a.createElement(A.a, {
					name: "edit"
				}))), (null == r ? void 0 : r.applied) && r.displaySettings.isUserEnabled && n.a.createElement(W.b, {
					className: G.a.flair,
					flair: r.applied,
					forceSmallEmojis: !0
				})) : null
			};
			t.default = Object(a.a)(() => {
				const e = Object(i.d)(),
					t = Object(i.e)(u.k),
					r = Object(i.e)(l.e),
					s = Object(i.e)(e => r ? Object(m.b)(e, {
						subredditId: r.id
					}) : null),
					a = Object(i.e)(e => r ? Object(m.d)(e, {
						subredditId: r.id
					}) : null),
					p = !!s && !!a;
				return t && r ? n.a.createElement("div", {
					className: D.a.container
				}, n.a.createElement(B, {
					subredditId: r.id,
					userId: t.id,
					username: Object(o.e)(t),
					flairData: a,
					onModalClose: () => {
						e(Object(d.g)(c.a.ACHIEVEMENT_FLAIR))
					}
				}), p && n.a.createElement(z, {
					subredditId: r.id,
					flairData: a
				}), n.a.createElement(T, {
					subredditId: r.id,
					userId: t.id
				})) : null
			})
		},
		"./src/reddit/components/Econ/AchievementFlair/AchivementsHoverPopup.m.less": function(e, t, r) {
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
		"./src/reddit/components/Econ/AchievementFlair/UserAchievementFlair.m.less": function(e, t, r) {
			e.exports = {
				container: "_2tytE20aBhQMtf6GkTvN3",
				hoverPopup: "_2-UmlwvzsKsjDIuXchymkf",
				icon: "_16Osj2XUXJVMQLOL8-1m8E",
				hiddenAchievementsCount: "BndgSmDj59XX1brHFAMZC"
			}
		},
		"./src/reddit/components/Econ/AchievementFlair/UserAchievementFlair.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return O
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/lib/classNames/index.ts"),
				d = r("./src/reddit/actions/gold/powerups.ts"),
				c = r("./src/reddit/controls/Button/index.tsx"),
				o = r("./src/reddit/helpers/trackers/features/achievementFlair.ts"),
				l = r("./src/reddit/hooks/useScrollGradient.ts"),
				u = r("./src/reddit/hooks/useTracking.ts"),
				m = r("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				p = r("./src/reddit/selectors/gold/powerups/achievements.ts"),
				v = r("./src/reddit/selectors/subreddit.ts"),
				b = r("./src/reddit/components/Econ/AchievementFlair/AchivementsHoverPopup.m.less"),
				h = r.n(b);
			const {
				fbt: f
			} = r("./node_modules/fbt/lib/FbtPublic.js"), I = ({
				className: e,
				subredditId: t,
				userId: r
			}) => {
				const b = Object(i.e)(e => Object(p.b)(e, {
						subredditId: t,
						userId: r
					})),
					I = Object(i.e)(e => Object(v.Q)(e, {
						subredditId: t
					})),
					j = Object(i.d)(),
					x = Object(u.a)(),
					{
						container: O,
						isScrollGradientVisible: E,
						calculateGradientVisibility: g
					} = Object(l.a)(!1);
				Object(s.useEffect)(() => {
					g()
				}, [g]);
				return n.a.createElement("div", {
					className: Object(a.a)(h.a.container, e)
				}, n.a.createElement("div", {
					className: h.a.header
				}, n.a.createElement(m.a, {
					className: h.a.powerupsLogo
				}), f._("{r/community} {=achievements}", [f._param("r/community", I.displayText), f._param("=achievements", n.a.createElement("span", {
					className: h.a.headerText
				}, f._("achievements", null, {
					hk: "1IkAza"
				})))], {
					hk: "3GkQD9"
				})), n.a.createElement("div", {
					className: h.a.headerDelimiter
				}), n.a.createElement("div", {
					className: h.a.achievements,
					onScroll: g,
					ref: O
				}, b.map(e => !e.isLocked && n.a.createElement("div", {
					className: h.a.achievementItem,
					key: e.type
				}, n.a.createElement("div", {
					className: h.a.achievementImgWrapper
				}, n.a.createElement("img", {
					className: h.a.achievementImg,
					src: e.icon.url,
					alt: e.name
				})), n.a.createElement("div", {
					className: h.a.achievementName
				}, n.a.createElement("span", null, e.name))))), n.a.createElement("div", {
					className: h.a.footer
				}, n.a.createElement("div", {
					className: Object(a.a)(h.a.scrollGradient, {
						[h.a.gradientVisible]: E
					})
				}), n.a.createElement(c.q, {
					priority: c.b.Secondary,
					className: h.a.ctaButton,
					onClick: () => {
						x(Object(o.a)()), j(Object(d.e)())
					},
					isFullWidth: !0
				}, f._("View your achievements", null, {
					hk: "2ZyIE3"
				}))))
			};
			var j = r("./src/reddit/components/Econ/AchievementFlair/UserAchievementFlair.m.less"),
				x = r.n(j);
			const O = ({
					className: e,
					subredditId: t,
					userId: r,
					showPopupOnHover: d,
					onHover: c
				}) => {
					var o;
					const l = Object(i.e)(e => Object(p.d)(e, {
							subredditId: t,
							userId: r
						})),
						u = Object(i.e)(e => Object(p.e)(e, {
							subredditId: t,
							userId: r
						})),
						m = null === (o = Object(i.e)(e => Object(p.c)(e, {
							subredditId: t,
							userId: r
						}))) || void 0 === o ? void 0 : o.achievementTypes,
						[v, b] = Object(s.useState)(!1);
					if (!(!!l || !!u) || !m) return null;
					const h = (null == u ? void 0 : u.type) === (null == l ? void 0 : l.type) ? null : u,
						f = 1 + (h ? 1 : 0),
						j = (null == m ? void 0 : m.length) - f;
					return n.a.createElement("span", {
						className: Object(a.a)(x.a.container, e),
						"data-testid": "achievement-flairs",
						onMouseEnter: () => {
							d && (b(!0), null == c || c())
						},
						onMouseLeave: () => {
							b(!1)
						}
					}, n.a.createElement(E, {
						achievement: h
					}), n.a.createElement(E, {
						achievement: l
					}), !!j && n.a.createElement("span", {
						className: x.a.hiddenAchievementsCount
					}, "+", j), d && v && n.a.createElement(I, {
						className: x.a.hoverPopup,
						subredditId: t,
						userId: r
					}))
				},
				E = ({
					achievement: e
				}) => e ? n.a.createElement("img", {
					alt: e.name,
					className: x.a.icon,
					src: e.icon.url
				}) : null
		},
		"./src/reddit/components/Econ/AchievementFlair/UserFlairPreview.m.less": function(e, t, r) {
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
		"./src/reddit/components/Econ/AchievementFlair/UserFlairPreview.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return b
			}));
			var s = r("./src/lib/classNames/index.ts"),
				n = r("./node_modules/react/index.js"),
				i = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				d = r("./src/reddit/components/Badges/UserDisplay/index.tsx"),
				c = r("./src/reddit/components/Econ/AchievementFlair/UserAchievementFlair.tsx"),
				o = r("./src/reddit/components/Flair/index.tsx"),
				l = r("./src/reddit/components/UserIcon/index.tsx"),
				u = r("./src/reddit/components/UserIcon/constants.ts"),
				m = r("./src/reddit/selectors/user.ts"),
				p = r("./src/reddit/components/Econ/AchievementFlair/UserFlairPreview.m.less"),
				v = r.n(p);
			const b = ({
				className: e,
				subredditId: t,
				userId: r,
				flairData: n,
				username: p,
				userHasBadge: b
			}) => {
				const h = Object(a.e)(e => Object(m.k)(e));
				return h ? i.a.createElement("div", {
					className: Object(s.a)(v.a.flairPreview, e),
					"data-testid": "user-flair-preview"
				}, i.a.createElement(l.a, {
					className: v.a.userIcon,
					iconUrl: h.accountIcon,
					isNSFW: h.isNSFW,
					nsfwIconUrl: u.a,
					userName: p || ""
				}), i.a.createElement("div", {
					className: v.a.allFlair
				}, i.a.createElement("div", {
					className: v.a.flairPreviewFirstLine
				}, b && i.a.createElement(d.a, {
					className: v.a.badge,
					subredditId: t,
					uniqueIdentifier: t,
					badgeSize: 20
				}), i.a.createElement("span", {
					className: v.a.username
				}, `${p||"username"}`), i.a.createElement(c.a, {
					className: v.a.achievementFlair,
					subredditId: t,
					userId: r
				})), (null == n ? void 0 : n.applied) && n.displaySettings.isUserEnabled && i.a.createElement("div", {
					className: v.a.flairPreviewSecondLine
				}, i.a.createElement(o.b, {
					className: v.a.userFlair,
					flair: n.applied,
					forceSmallEmojis: !0
				})))) : null
			}
		},
		"./src/reddit/components/Econ/Common/ModalCloseButton/index.m.less": function(e, t, r) {
			e.exports = {
				closeButton: "zV6beQLWIuWX5Q9SvWfDR",
				closeIcon: "_17EZNlAorafFssuT6Gw_Zg"
			}
		},
		"./src/reddit/components/Econ/Common/ModalCloseButton/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./src/reddit/components/ModalStyledComponents/index.tsx"),
				a = r("./src/reddit/components/Econ/Common/ModalCloseButton/index.m.less"),
				d = r.n(a);
			const {
				fbt: c
			} = r("./node_modules/fbt/lib/FbtPublic.js"), o = ({
				className: e,
				onClick: t
			}) => n.a.createElement("button", {
				onClick: t,
				className: d.a.closeButton,
				"aria-label": c._("Close", null, {
					hk: "3Qarlp"
				})
			}, n.a.createElement(i.b, {
				className: d.a.closeIcon
			}))
		},
		"./src/reddit/components/PowerupsCtaButton/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return l
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/reddit/controls/Button/index.tsx"),
				d = r("./src/reddit/selectors/experiments/econ/index.ts"),
				c = r("./src/reddit/selectors/gold/powerups/index.ts");
			const {
				fbt: o
			} = r("./node_modules/fbt/lib/FbtPublic.js"), l = ({
				className: e,
				onClick: t
			}) => {
				const r = Object(i.e)(c.t),
					s = Object(i.e)(d.h);
				return n.a.createElement(a.q, {
					priority: a.b.Primary,
					className: e,
					onClick: t,
					isFullWidth: !0
				}, (() => r ? o._("Use Your Premium Powerup", null, {
					hk: "JJNaN"
				}) : s ? o._("Help Your Community", null, {
					hk: "2v0E8W"
				}) : o._("Become a Hero", null, {
					hk: "3IZNw3"
				}))())
			}
		},
		"./src/reddit/components/UserIcon/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			const s = "https://www.redditstatic.com/avatars/avatar_default_02_24A0ED.png"
		},
		"./src/reddit/helpers/trackers/features/achievementFlair.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return d
			})), r.d(t, "a", (function() {
				return c
			}));
			var s = r("./src/reddit/helpers/flair.ts"),
				n = r("./src/reddit/selectors/comments.ts"),
				i = r("./src/reddit/selectors/gold/powerups/achievements.ts"),
				a = r("./src/reddit/selectors/telemetry.ts");
			const d = (e, t, r) => d => {
					const c = Object(n.e)(d, {
							commentId: e
						}),
						o = Object(i.d)(d, {
							subredditId: t,
							userId: r
						});
					return {
						source: "meta",
						action: "hover",
						noun: "achieve_flair",
						...a.defaults(d),
						subreddit: {
							id: t
						},
						userFlair: {
							id: null == c ? void 0 : c.templateId,
							title: c ? Object(s.g)(c) : void 0,
							achievementFlairId: null == o ? void 0 : o.type,
							achievementFlairTitle: null == o ? void 0 : o.name
						}
					}
				},
				c = () => e => ({
					source: "powerups",
					action: "click",
					noun: "view_your_achievements",
					...a.defaults(e)
				})
		},
		"./src/reddit/hooks/useScrollGradient.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			var s = r("./node_modules/react/index.js");

			function n(e) {
				const [t, r] = Object(s.useState)(e), n = Object(s.useRef)(null);
				return {
					container: n,
					isScrollGradientVisible: t,
					calculateGradientVisibility: () => {
						const e = n.current;
						if (!e) return;
						const t = e.getBoundingClientRect().height,
							s = Math.ceil(e.scrollTop + t) >= e.scrollHeight;
						r(!s)
					}
				}
			}
		},
		"./src/reddit/icons/svgs/AddSquare/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);

			function i(e) {
				return n.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("rect", {
					fill: "transparent",
					height: "18",
					rx: "4.5",
					strokeDasharray: "2 2",
					strokeLinejoin: "round",
					strokeWidth: "1",
					width: "18",
					x: "1",
					y: "1"
				}), n.a.createElement("path", {
					clipRule: "evenodd",
					d: "M13 9H11V7C11 6.7235 10.7765 6.5 10.5 6.5H9.5C9.2235 6.5 9 6.7235 9 7V9H7C6.724 9 6.5 9.2235 6.5 9.5V10.5C6.5 10.7765 6.724 11 7 11H9V13C9 13.2765 9.2235 13.5 9.5 13.5H10.5C10.7765 13.5 11 13.2765 11 13V11H13C13.2765 11 13.5 10.7765 13.5 10.5V9.5C13.5 9.2235 13.2765 9 13 9Z",
					fillRule: "evenodd"
				}))
			}
		},
		"./src/reddit/icons/svgs/PowerupTier2/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);
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
		"./src/reddit/reducers/features/powerups/index.ts": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/redux/es/redux.js"),
				n = r("./src/reddit/actions/gold/constants.ts");
			const i = {};
			var a = r("./node_modules/icepick/icepick.js"),
				d = r("./src/reddit/actions/economics/powerups/constants.ts");
			const c = {},
				o = {};
			t.a = Object(s.c)({
				subredditAchievements: (e = i, t) => {
					switch (t.type) {
						case n.pb:
							const {
								subredditId: r, subredditAchievementFlairs: s
							} = t.payload, i = s.reduce((e, t) => ({
								...e,
								[t.type]: t
							}), e[r] || {});
							return {
								...e, [r]: i
							};
						default:
							return e
					}
				},
				subredditUserAchievements: (e = c, t) => {
					var r, s, n;
					switch (t.type) {
						case d.d: {
							const {
								id: i,
								userAchievementFlairsByRedditorIds: a
							} = t.payload;
							let d = e[i] || {};
							for (const {
									redditorId: e,
									userAchievementFlairs: t
								} of a) {
								const i = t.map(({
										type: e
									}) => e),
									a = (null === (r = t.find(({
										isPreferred: e
									}) => e)) || void 0 === r ? void 0 : r.type) || (null === (s = t[0]) || void 0 === s ? void 0 : s.type),
									c = null === (n = t.find(({
										type: e
									}) => e.startsWith("POWERUPS_SUPPORTER"))) || void 0 === n ? void 0 : n.type;
								d = {
									...d,
									[e]: {
										achievementTypes: i,
										preferredType: a,
										supporterType: c
									}
								}
							}
							return {
								...e,
								[i]: d
							}
						}
						case d.f: {
							const {
								subredditId: r,
								userId: s,
								achievementType: n
							} = t.payload;
							return Object(a.setIn)(e, [r, s, "pendingPreferredType"], n)
						}
						case d.g: {
							const {
								subredditId: r,
								userId: s,
								achievementType: n
							} = t.payload;
							return Object(a.updateIn)(e, [r, s], e => ({
								...e,
								preferredType: n,
								pendingPreferredType: void 0
							}))
						}
						case d.e: {
							const {
								subredditId: r,
								userId: s
							} = t.payload;
							return Object(a.setIn)(e, [r, s, "pendingPreferredType"], void 0)
						}
						default:
							return e
					}
				},
				usersSupportedSubreddits: (e = o, t) => {
					switch (t.type) {
						case d.h: {
							let r = {};
							return t.payload.forEach(e => {
								const t = e.id,
									s = e.powerups;
								if (!t || !s) return;
								const n = s.supportedSubreddits.filter(({
									subredditInfo: e
								}) => null == e ? void 0 : e.id).map(({
									subredditInfo: e
								}) => e.id);
								r = {
									...r,
									[t]: n.reduce((e, t) => (e[t] = !0, e), {})
								}
							}), {
								...e,
								...r
							}
						}
						default:
							return e
					}
				}
			})
		},
		"./src/reddit/selectors/gold/powerups/achievements.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return o
			})), r.d(t, "d", (function() {
				return u
			})), r.d(t, "e", (function() {
				return p
			})), r.d(t, "b", (function() {
				return v
			})), r.d(t, "a", (function() {
				return b
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/reselect/es/index.js"),
				n = r("./src/reddit/selectors/commentSelector.ts"),
				i = r("./src/reddit/selectors/experiments/econ/index.ts"),
				a = r("./src/lib/initializeClient/installReducer.ts"),
				d = r("./src/reddit/reducers/features/powerups/index.ts");
			Object(a.a)({
				features: {
					powerups: d.a
				}
			});
			const c = (e, {
					subredditId: t
				}) => {
					var r;
					return t ? null === (r = e.features.powerups.subredditAchievements) || void 0 === r ? void 0 : r[t] : null
				},
				o = (e, {
					subredditId: t,
					userId: r
				}) => {
					var s, n;
					return t && r ? null === (n = null === (s = e.features.powerups.subredditUserAchievements) || void 0 === s ? void 0 : s[t]) || void 0 === n ? void 0 : n[r] : null
				},
				l = Object(s.a)(o, e => (null == e ? void 0 : e.pendingPreferredType) || (null == e ? void 0 : e.preferredType)),
				u = Object(s.a)([c, l], (e, t) => e && t ? e[t] : null),
				m = Object(s.a)(o, e => null == e ? void 0 : e.supporterType),
				p = Object(s.a)([c, m], (e, t) => e && t ? e[t] : null),
				v = Object(s.a)([c, o], (e, t) => {
					if (!e) return [];
					const r = t ? t.achievementTypes : [],
						s = (null == t ? void 0 : t.pendingPreferredType) || (null == t ? void 0 : t.preferredType);
					return Object.values(e).map(e => ({
						...e,
						isLocked: !r.includes(e.type),
						isPreferred: e.type === s
					})).sort((e, t) => e.isLocked === t.isLocked ? 0 : e.isLocked ? 1 : -1)
				}),
				b = (e, {
					commentId: t
				}) => {
					const r = Object(n.a)(e, {
							commentId: t
						}),
						s = null == r ? void 0 : r.subredditId,
						a = null == r ? void 0 : r.authorId;
					return !(!s || !a) && !(!((e, {
						subredditId: t,
						userId: r
					}) => {
						var s, n, i;
						return t && r ? null === (i = null === (n = null === (s = e.features.powerups) || void 0 === s ? void 0 : s.usersSupportedSubreddits) || void 0 === n ? void 0 : n[r]) || void 0 === i ? void 0 : i[t] : null
					})(e, {
						subredditId: s,
						userId: a
					}) || !Object(i.i)(e))
				}
		},
		"./src/redditGQL/operations/SubredditUserAchievements.json": function(e) {
			e.exports = JSON.parse('{"id":"df1c1b9b6408"}')
		},
		"./src/redditGQL/operations/UpdateAchievementFlairPreference.json": function(e) {
			e.exports = JSON.parse('{"id":"eab9458f507c"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconAchievementFlairModal.a2d69022130d9a7e43a1.js.map