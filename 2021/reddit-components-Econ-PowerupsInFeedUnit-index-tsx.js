// https://www.redditstatic.com/desktop2x/reddit-components-Econ-PowerupsInFeedUnit-index-tsx.392a54c7fd8417e80a99.js
// Retrieved at 10/4/2021, 12:20:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Econ-PowerupsInFeedUnit-index-tsx"], {
		"./src/reddit/actions/snoovatar.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return _
			})), s.d(t, "c", (function() {
				return b
			})), s.d(t, "b", (function() {
				return E
			}));
			var a = s("./src/lib/initializeClient/installReducer.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/config.ts"),
				o = s("./src/lib/constants/index.ts"),
				c = s("./src/lib/makeApiRequest/index.ts"),
				i = s("./src/lib/omitHeaders/index.ts"),
				d = s("./src/reddit/constants/headers.ts");
			var l = s("./src/reddit/reducers/features/avatar/index.ts"),
				u = s("./src/reddit/selectors/avatar.ts"),
				m = s("./src/reddit/actions/users.ts");
			Object(a.a)({
				features: {
					avatar: l.a
				}
			});
			const _ = "SET_AVATAR_USER",
				p = Object(r.a)(_),
				b = (e, t, s) => async (a, r, {
					apiContext: l
				}) => {
					const _ = Object(u.b)(r()),
						p = await (async (e, t, s, a, r) => Object(c.a)(Object(i.a)(e, [d.a]), {
							endpoint: `${n.a.snoovatarUrl}/api/snoovatar`,
							method: o.ib.POST,
							headers: {
								"Content-Type": "application/json ",
								"X-CSRF-Token": r
							},
							data: {
								accessory_ids: t,
								styles: s,
								...a
							}
						}))(l(), e, t, s, _);
					if (!p.ok) throw new Error("User avatar failed to save");
					a(Object(m.A)(p.body))
				}, E = () => async (e, t, {
					apiContext: s
				}) => {
					const a = await (async e => Object(c.a)(Object(i.a)(e, [d.a]), {
						endpoint: `${n.a.snoovatarUrl}/api/account`,
						method: o.ib.GET
					}))(s());
					a.ok && e(p(a.body))
				}
		},
		"./src/reddit/components/Econ/Common/JoinHeroes/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1tjm5mAw6CbmqAm82cwaAe",
				containerClickable: "_12ETqwk_rEASwSwC4LTdl2",
				heroes: "_1xr8vOZkP3Z1aqi0GVlhG7",
				heroesAvatarContainer: "_33ipNjYYNHKNP6aRMCuqyu",
				twoAvatarsContainer: "QEGs83pht1e9sqreE8rdg",
				heroesAvatar: "_1Rhp-wU2kBaVjLOMcsBK7R",
				heroImage: "_1s4Q5XjokhPDv6KobkwfC_",
				heroesTitle: "_1lF-V9k5_vuSgmcqbFv1-r",
				title: "afIbbnRh2nmaJ17MKDECR",
				progressBar: "u6z9wwkHkYsAHhii9K7g9"
			}
		},
		"./src/reddit/components/Econ/Common/JoinHeroes/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return b
			}));
			var a = s("./node_modules/react/index.js"),
				r = s.n(a),
				n = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/PowerupsProgressBar.tsx"),
				i = s("./src/reddit/components/UserIcon/index.tsx"),
				d = s("./src/reddit/selectors/experiments/econ/index.ts"),
				l = s("./src/reddit/selectors/gold/powerups/index.ts"),
				u = s("./src/reddit/selectors/subreddit.ts"),
				m = s("./src/reddit/components/Econ/Common/JoinHeroes/index.m.less"),
				_ = s.n(m);
			const {
				fbt: p
			} = s("./node_modules/fbt/lib/FbtPublic.js"), b = ({
				className: e,
				subredditId: t,
				onClick: s
			}) => {
				const a = Object(n.e)(e => Object(l.j)(e, {
						subredditId: t
					})),
					m = Object(n.e)(e => Object(u.Q)(e, {
						subredditId: t
					})),
					b = Object(n.e)(e => Object(l.l)(e, {
						subredditId: t
					})),
					E = Object(n.e)(d.h);
				if (!a) return null;
				const {
					tier: v,
					count: h,
					tiersInfo: f,
					supportersCount: O
				} = a, C = f[1].powerupsCost, N = v >= 2, x = (null == b ? void 0 : b.filter(e => {
					var t;
					return !!(null === (t = e.supporterInfo) || void 0 === t ? void 0 : t.displayName)
				}).slice(0, 2)) || [], w = Math.min(h, C) / C, A = C - h;
				return r.a.createElement("div", {
					className: Object(o.a)(_.a.container, e, {
						[_.a.containerClickable]: !!s
					}),
					"data-testid": "join-heroes",
					onClick: () => null == s ? void 0 : s(h)
				}, r.a.createElement("div", {
					className: _.a.heroes
				}, !!x.length && r.a.createElement("div", {
					className: Object(o.a)(_.a.heroesAvatarContainer, {
						[_.a.twoAvatarsContainer]: x.length > 1
					})
				}, x.map(e => {
					var t, s;
					return r.a.createElement("div", {
						className: _.a.heroesAvatar,
						key: e.supporterInfo.id
					}, r.a.createElement(i.a, {
						className: _.a.heroImage,
						userName: e.supporterInfo.displayName,
						iconUrl: null === (t = e.supporterInfo.icon) || void 0 === t ? void 0 : t.url,
						isNSFW: !!(null === (s = e.supporterInfo.profile) || void 0 === s ? void 0 : s.isNsfw)
					}))
				})), r.a.createElement("div", {
					className: _.a.heroesTitle
				}, (() => E ? O ? p._({
					"*": "Join {subreddit supporters} supporters",
					_1: "Join 1 supporter"
				}, [p._plural(O, "subreddit supporters")], {
					hk: "20DKnU"
				}) : p._("Be the first supporter!", null, {
					hk: "3sBXnW"
				}) : O ? p._({
					"*": "Join {subreddit supporters} heroes",
					_1: "Join 1 hero"
				}, [p._plural(O, "subreddit supporters")], {
					hk: "2UisaO"
				}) : p._("Be the first hero!", null, {
					hk: "3TGmi4"
				}))())), r.a.createElement("p", {
					className: _.a.title
				}, N ? p._("Community perks are now unlocked!", null, {
					hk: "3xbTTM"
				}) : p._("{subredditName} needs {powerups needed} more Powerups to unlock perks for the entire community", [p._param("subredditName", m.displayText), p._param("powerups needed", A)], {
					hk: "4h33rf"
				})), r.a.createElement(c.a, {
					className: _.a.progressBar,
					progress: w
				}))
			}
		},
		"./src/reddit/components/Econ/Common/ModalCloseButton/index.m.less": function(e, t, s) {
			e.exports = {
				closeButton: "zV6beQLWIuWX5Q9SvWfDR",
				closeIcon: "_17EZNlAorafFssuT6Gw_Zg"
			}
		},
		"./src/reddit/components/Econ/Common/ModalCloseButton/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			}));
			var a = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = s("./src/reddit/components/Econ/Common/ModalCloseButton/index.m.less"),
				i = s.n(c);
			const {
				fbt: d
			} = s("./node_modules/fbt/lib/FbtPublic.js"), l = ({
				className: e,
				onClick: t
			}) => n.a.createElement("button", {
				onClick: t,
				className: Object(a.a)(e, i.a.closeButton),
				"aria-label": d._("Close", null, {
					hk: "3Qarlp"
				})
			}, n.a.createElement(o.b, {
				className: i.a.closeIcon
			}))
		},
		"./src/reddit/components/Econ/Common/PowerupRotatingBolt/index.m.less": function(e, t, s) {
			e.exports = {
				image: "_2UM9VBeA7xU3ro_DBfudN2"
			}
		},
		"./src/reddit/components/Econ/Common/PowerupRotatingBolt/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var a = s("./src/config.ts"),
				r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/reddit/components/Econ/Common/PowerupRotatingBolt/index.m.less"),
				c = s.n(o);
			const i = e => n.a.createElement("div", {
				className: e.className
			}, n.a.createElement("picture", null, n.a.createElement("source", {
				srcSet: `${a.a.assetPath}/img/powerups/rotating-bolt.webp`,
				type: "image/webp"
			}), n.a.createElement("source", {
				srcSet: `${a.a.assetPath}/img/powerups/powerup.png`,
				type: "image/png"
			}), n.a.createElement("img", {
				className: c.a.image,
				src: `${a.a.assetPath}/img/powerups/powerup.png`,
				alt: "Rotating Powerups bolt"
			})))
		},
		"./src/reddit/components/Econ/PowerupsInFeedUnit/PostUnlock.m.less": function(e, t, s) {
			e.exports = {
				container: "_33MYPSjwkqVjRxXoTiJthW",
				header: "_1vRhiolESYCTrQRySvgTx-",
				powerupsBolt: "_1qZhd-qYEiELfmLW4V8Z3J",
				headerText: "_194vkAQgnWXh-dqdChJ3Dl",
				title: "_1vjqPyaZdIUcFkhaLhJuez",
				subtitle: "_2dW3q3pqrs3OEyNdpkDm-8",
				contentWrapper: "_3IcKFT4KuyHxEhGrA58nzc",
				avatarTop: "_3kDi_3O7tYyWnvPW0Ech7_",
				buttonWrapper: "OT9ibvzuAuCCDGxEAe6rN"
			}
		},
		"./src/reddit/components/Econ/PowerupsInFeedUnit/PreUnlock.m.less": function(e, t, s) {
			e.exports = {
				container: "SS170RmKHoZuMMkJr141W",
				communityGearAvatar: "_35IGztfyzwQ3wZ8LAuV7rb",
				powerupsIcon: "w787eo650WzP0J00UYn-2",
				title: "_2QS5-06aVEbnm3x8WBjauN",
				subtitle: "_1hOGKkXaNRO6P9r7WcJZJO",
				supporters: "_1VV6QeoM4CWq3umVQYWm65",
				button: "ORJj8Dlz_GOfn6EWZgv_N"
			}
		},
		"./src/reddit/components/Econ/PowerupsInFeedUnit/UpdateAvatarConfirmationModal/index.m.less": function(e, t, s) {
			e.exports = {
				modal: "KIFmjkhl6CsM_ssGUPOoO",
				header: "_1IR2kSalhPpNDy8BmEJsrB",
				contentWrapper: "_1Pnt5yFEP56wwr-aoAwlsU",
				avatarTop: "_1iVy7VgXaXl6h3s-fy15i5",
				legalTextContainer: "_3UazWD2DH4Rj74kQRmz-W-",
				learnMoreLink: "_2I8RPPxDKkKfMlPASf0GrL",
				buttonsRow: "_2Jfecnw5-wIVQzu7ytHVdp",
				button: "_1jA6-LhbIbPbsxLaOcf1Xw"
			}
		},
		"./src/reddit/components/Econ/PowerupsInFeedUnit/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "MAX_DISPLAY_COUNT_ON_LOCKED_SUBREDDIT", (function() {
				return V
			})), s.d(t, "MAX_DISPLAY_COUNT_ON_UNLOCKED_SUBREDDIT", (function() {
				return z
			}));
			var a, r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				c = s("./src/reddit/constants/localStorage.ts"),
				i = s("./src/reddit/helpers/localStorage/index.ts"),
				d = s("./src/reddit/helpers/trackers/powerups.ts"),
				l = s("./src/reddit/hooks/useTracking.ts"),
				u = s("./src/reddit/constants/gold.ts"),
				m = s("./src/reddit/constants/posts.ts"),
				_ = s("./src/reddit/selectors/experiments/econ/index.ts"),
				p = s("./src/reddit/selectors/subreddit.ts"),
				b = s("./src/reddit/selectors/gold/powerups/index.ts");
			! function(e) {
				e[e.POWERUPS_DEFAULT = 0] = "POWERUPS_DEFAULT", e[e.POWERUPS_COMMUNITY_GEAR = 1] = "POWERUPS_COMMUNITY_GEAR", e[e.UNLOCKED_COMMUNITY_GEAR = 2] = "UNLOCKED_COMMUNITY_GEAR", e[e.HIDDEN = 3] = "HIDDEN"
			}(a || (a = {}));
			var E = s("./src/lib/classNames/index.ts"),
				v = s("./src/reddit/controls/Button/index.tsx"),
				h = s("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				f = s("./src/reddit/components/Econ/PowerupsInFeedUnit/PostUnlock.m.less"),
				O = s.n(f),
				C = s("./src/higherOrderComponents/asModal/index.tsx"),
				N = s("./src/lib/opener/index.ts"),
				x = s("./src/reddit/actions/snoovatar.ts"),
				w = s("./src/reddit/actions/toaster.ts"),
				A = s("./src/reddit/actions/urlRequested.ts"),
				y = s("./src/reddit/components/Econ/Common/ModalCloseButton/index.tsx"),
				k = s("./src/reddit/helpers/avatar/index.ts"),
				g = s("./src/reddit/models/Avatar/accessories.ts"),
				j = s("./src/reddit/models/Toast/index.ts"),
				P = s("./src/reddit/selectors/avatar.ts"),
				I = s("./src/reddit/components/Econ/PowerupsInFeedUnit/UpdateAvatarConfirmationModal/index.m.less"),
				U = s.n(I);
			const {
				fbt: D
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var R = Object(C.a)(({
				closeModal: e
			}) => {
				const t = Object(o.d)(),
					s = Object(o.e)(P.a);
				Object(r.useEffect)(() => {
					t(Object(x.b)())
				}, [t]);
				const a = async () => t(Object(A.a)("/user/me", !0)), c = D._("Nice! Ready to update your avatar?", null, {
					hk: "20KFjx"
				}), i = D._("Avatars and avatar visual elements © Reddit.", null, {
					hk: "2Y4y3g"
				}), d = D._("Learn more", null, {
					hk: "2S4fxr"
				});
				return n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
					className: U.a.modal
				}, n.a.createElement("div", {
					className: U.a.header
				}, c, n.a.createElement(y.a, {
					onClick: e
				})), n.a.createElement("div", {
					className: U.a.contentWrapper
				}, n.a.createElement(h.a, {
					className: U.a.avatarTop
				}), n.a.createElement("div", {
					className: U.a.legalTextContainer
				}, n.a.createElement("span", null, i), n.a.createElement("a", {
					href: u.c,
					target: N.d.BLANK,
					className: U.a.learnMoreLink,
					rel: N.c
				}, d))), n.a.createElement("div", {
					className: U.a.buttonsRow
				}, n.a.createElement(v.s, {
					className: U.a.button,
					priority: v.b.Secondary,
					onClick: e
				}, D._("Go Back", null, {
					hk: "1EHXc5"
				})), n.a.createElement(v.s, {
					className: U.a.button,
					priority: v.b.Primary,
					onClick: async () => {
						if (!s) return;
						const r = s.snoovatar,
							n = (null == r ? void 0 : r.accessories) || [],
							o = Object(k.a)(n, [g.d]).map(e => e.id);
						try {
							t(Object(x.c)(o, null == r ? void 0 : r.styles, {
								set_avatar_to_profile: !0,
								source: "powerups_post_upsell"
							})), t(Object(w.f)({
								duration: w.a,
								kind: j.b.SuccessCommunityGreen,
								text: D._("Success!", null, {
									hk: "4ieEVt"
								}),
								buttonText: D._("View profile", null, {
									hk: "IGoMl"
								}),
								buttonAction: a
							})), e()
						} catch {
							t(Object(w.f)({
								duration: w.a,
								kind: j.b.Error,
								text: D._("Something went wrong!", null, {
									hk: "qD6OP"
								})
							}))
						}
					}
				}, D._("Yes", null, {
					hk: "27lXsL"
				})))))
			});
			const {
				fbt: S
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var T = ({
					className: e
				}) => {
					const [t, s] = Object(r.useState)(!1), a = () => s(!1);
					return n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
						className: Object(E.a)(O.a.container, e)
					}, n.a.createElement("div", {
						className: O.a.header
					}, n.a.createElement(h.a, {
						className: O.a.powerupsBolt
					}), n.a.createElement("div", {
						className: O.a.headerText
					}, n.a.createElement("h2", {
						className: O.a.title
					}, S._("Get the most out of Powerups", null, {
						hk: "4mSV6O"
					})), n.a.createElement("h3", {
						className: O.a.subtitle
					}, S._("Show your support with exclusive gear", null, {
						hk: "2rq6cz"
					})))), n.a.createElement("div", {
						className: O.a.contentWrapper
					}, n.a.createElement(h.a, {
						className: O.a.avatarTop
					})), n.a.createElement("div", {
						className: O.a.buttonWrapper
					}, n.a.createElement(v.s, {
						priority: v.b.Secondary,
						onClick: () => {
							(() => s(!0))()
						},
						isFullWidth: !0
					}, S._("Wear your community gear", null, {
						hk: "1Tt2q6"
					})))), t && n.a.createElement(R, {
						withOverlay: !0,
						closeModal: a,
						onOverlayClick: a
					}))
				},
				M = s("./src/config.ts"),
				B = s("./src/reddit/actions/gold/powerups.ts"),
				F = s("./src/reddit/components/Econ/Common/JoinHeroes/index.tsx"),
				L = s("./src/reddit/components/Econ/Common/PowerupRotatingBolt/index.tsx"),
				W = s("./src/reddit/components/PowerupsCtaButton/index.tsx"),
				Y = s("./src/reddit/components/Econ/PowerupsInFeedUnit/PreUnlock.m.less"),
				K = s.n(Y);
			const {
				fbt: q
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var G = ({
				className: e,
				subredditId: t,
				inFeedDisplayState: s
			}) => {
				const r = Object(o.d)(),
					c = Object(l.a)(),
					i = Object(o.e)(e => Object(p.Q)(e, {
						subredditId: t
					})),
					u = Object(o.e)(_.h);
				if (s === a.HIDDEN) return null;
				const m = u ? q._("Support the whole community", null, {
					hk: "oOdGv"
				}) : q._("Unlock perks for the whole community", null, {
					hk: "1DllPY"
				});
				return n.a.createElement("div", {
					className: Object(E.a)(K.a.container, e)
				}, s === a.POWERUPS_DEFAULT ? n.a.createElement(() => n.a.createElement(n.a.Fragment, null, n.a.createElement(L.a, {
					className: K.a.powerupsIcon
				}), n.a.createElement("h2", {
					className: K.a.title
				}, q._("Powerup {subreddit name}", [q._param("subreddit name", i.displayText)], {
					hk: "2zwNZk"
				})), n.a.createElement("h3", {
					className: K.a.subtitle
				}, m)), null) : n.a.createElement(() => n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
					className: K.a.communityGearAvatar,
					"data-testid": "community-gear-avatar",
					style: {
						backgroundImage: `url("${M.a.assetPath}/img/snoovatars/snoovatar_6.png")`
					}
				}), n.a.createElement("h2", {
					className: K.a.title
				}, q._("Powerup to unlock community gear", null, {
					hk: "HyBcY"
				}))), null), n.a.createElement(F.a, {
					className: K.a.supporters,
					subredditId: t,
					onClick: e => {
						c(Object(d.e)("post_upsell")), r(e ? Object(B.h)(t) : Object(B.f)("in_feed_unit"))
					}
				}), n.a.createElement(W.a, {
					className: K.a.button,
					onClick: () => {
						c(Object(d.m)()), r(Object(B.f)("in_feed_unit"))
					}
				}))
			};
			const {
				fbt: H
			} = s("./node_modules/fbt/lib/FbtPublic.js"), V = 2, z = 1;
			t.default = ({
				subredditId: e,
				className: t
			}) => {
				const s = Object(l.a)(),
					E = Object(o.e)(t => Object(p.Q)(t, {
						subredditId: e
					})),
					v = Object(o.e)(e => ((e, {
						subredditId: t,
						subredditName: s
					}) => {
						const r = Object(b.v)(e, {
								subredditId: t
							}),
							n = Object(p.cb)(e, {
								identifier: {
									name: s,
									type: m.a.SUBREDDIT
								}
							}),
							o = Object(b.k)(e, {
								subredditId: t
							}),
							c = Object(b.p)(e, {
								subredditId: t
							});
						return o || r ? c && n && Object(_.j)(e) ? a.UNLOCKED_COMMUNITY_GEAR : a.HIDDEN : u.i.includes(t) && n && Object(_.j)(e) ? a.POWERUPS_COMMUNITY_GEAR : a.POWERUPS_DEFAULT
					})(e, {
						subredditId: E.id,
						subredditName: E.name
					})),
					h = v === a.UNLOCKED_COMMUNITY_GEAR,
					f = h ? c.b.POWERUPS_UNLOCKED_INFEED_UNIT_VISIBILITY_STORE : c.b.POWERUPS_INFEED_UNIT_VISIBILITY_STORE,
					[O, C] = Object(r.useState)(a.HIDDEN);
				switch (Object(r.useEffect)(() => {
					const t = ((e, t, s) => {
						return Object(i.j)(t, e) >= (s ? z : V)
					})(e, f, h) ? a.HIDDEN : v;
					C(t)
				}, [e, f, v, C, h]), Object(r.useEffect)(() => {
					O !== a.HIDDEN && (Object(i.R)(f, e), h || s(Object(d.n)()))
				}, [O, f, e, h, s]), O) {
					case a.POWERUPS_DEFAULT:
					case a.POWERUPS_COMMUNITY_GEAR:
						return n.a.createElement(G, {
							className: t,
							subredditId: e,
							inFeedDisplayState: O
						});
					case a.UNLOCKED_COMMUNITY_GEAR:
						return n.a.createElement(T, {
							className: t,
							subredditId: e
						});
					default:
						return null
				}
			}
		},
		"./src/reddit/constants/gold.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return r
			})), s.d(t, "e", (function() {
				return n
			})), s.d(t, "f", (function() {
				return o
			})), s.d(t, "g", (function() {
				return c
			})), s.d(t, "d", (function() {
				return i
			})), s.d(t, "k", (function() {
				return d
			})), s.d(t, "j", (function() {
				return l
			})), s.d(t, "h", (function() {
				return u
			})), s.d(t, "i", (function() {
				return m
			})), s.d(t, "c", (function() {
				return _
			}));
			const a = "ModerationPage--Modal--AddAward",
				r = "ModerationPage--Modal--DeleteAwardConfirmation",
				n = 20,
				o = 4,
				c = 1e4,
				i = .2,
				d = .1,
				l = .1,
				u = 500,
				m = ["t5_2qqoq", "t5_37xo2", "t5_2r60y", "t5_mvcq5", "t5_4e4fpz", "t5_4e4ib9", "t5_4y3poa", "t5_4hmhx4"],
				_ = "https://reddit.zendesk.com/hc/en-us/articles/360050641932"
		},
		"./src/reddit/helpers/avatar/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var a = s("./node_modules/lodash/flatten.js"),
				r = s.n(a);
			const n = (e, t) => {
				const s = r()(t.map(e => e.assets.map(e => e.slot)));
				return [...e.filter(e => !e.assets.find(e => s.includes(e.slot))), ...t]
			}
		},
		"./src/reddit/models/Avatar/accessories.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return a
			})), s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return n
			})), s.d(t, "d", (function() {
				return o
			}));
			const a = {
					id: "achievement_head_accessory_012",
					section_id: "head_accessories",
					assets: [{
						accessory_id: "achievement_head_accessory_012",
						slot: 80,
						image_url: "https://i.redd.it/snoovatar/accessory_assets/r13ZdtEfXFM_achievement_head_accessory_012.svg"
					}],
					customizable_classes: [],
					capability_required: null,
					state: "ENABLED",
					tags: ["achievement"],
					available_for_closet: !0
				},
				r = {
					id: "achievement_body_012",
					section_id: "top_body_tops",
					assets: [{
						accessory_id: "achievement_body_012",
						slot: 40,
						image_url: "https://i.redd.it/snoovatar/snoo_assets/XvgCbVDmabY_achievement_body_012.svg"
					}],
					customizable_classes: ["body"],
					capability_required: null,
					state: "ENABLED",
					tags: ["achievement"],
					available_for_closet: !0
				},
				n = {
					id: "achievement_body_bottom_012",
					section_id: "bottom_body_bottoms",
					assets: [{
						accessory_id: "achievement_body_bottom_012",
						slot: 30,
						image_url: "https://i.redd.it/snoovatar/snoo_assets/_Fx-Iq6Aueg_achievement_body_bottom_012.svg"
					}],
					customizable_classes: ["body"],
					capability_required: null,
					state: "ENABLED",
					tags: ["achievement"],
					available_for_closet: !0
				},
				o = {
					id: "body_pride_heart",
					section_id: "top_body_tops",
					customizable_classes: ["body"],
					capability_required: null,
					state: "closet_only",
					assets: [{
						accessory_id: "body_pride_heart",
						image_url: "https://i.redd.it/snoovatar/snoo_assets/ROlK_pFn6dw_body_pride_heart.svg",
						slot: 40
					}],
					tags: [],
					available_for_closet: !0
				}
		},
		"./src/reddit/reducers/features/avatar/index.ts": function(e, t, s) {
			"use strict";
			var a, r, n = s("./node_modules/redux/es/redux.js"),
				o = s("./src/reddit/actions/snoovatar.ts");
			! function(e) {
				e.PREMIUM = "PREMIUM"
			}(a || (a = {})),
			function(e) {
				e[e.BACKGROUND = 0] = "BACKGROUND", e[e.ACCESSORY_BACK = 1] = "ACCESSORY_BACK", e[e.HAIR_BACK = 2] = "HAIR_BACK", e[e.BODY_BOTTOM = 3] = "BODY_BOTTOM", e[e.BODY = 4] = "BODY", e[e.ACCESSORY = 5] = "ACCESSORY", e[e.FACE_LOWER = 6] = "FACE_LOWER", e[e.FACE_UPPER = 7] = "FACE_UPPER", e[e.HAIR = 8] = "HAIR", e[e.HEAD_ACCESSORY = 9] = "HEAD_ACCESSORY"
			}(r || (r = {}));
			const c = {
				id: "",
				csrf_token: "",
				snoovatar: null,
				websocketsUrls: {
					renderer: "",
					download: ""
				},
				capabilities: [a.PREMIUM],
				hasActiveClosetSubscription: !1
			};
			var i = (e = c, t) => {
				switch (t.type) {
					case o.a:
						return {
							...t.payload
						};
					default:
						return e
				}
			};
			const d = {
					marketingEvent: {
						active: !1,
						assetUrls: null
					},
					quickCreateV1: {
						active: !1,
						text: "",
						minDaysOnReddit: 0,
						shouldHaveAvatar: !1,
						maxEventViews: 0,
						minDaysSinceLastEventInteraction: 0,
						webAssetUrls: []
					}
				},
				l = "avatar_quick_create_event",
				u = "avatar_marketing_event",
				m = e => {
					const t = {};
					return e.forEach(e => {
						if (e.startsWith("targeting:")) {
							const s = e.split(":");
							if (!s.length && s.length < 3) return null;
							try {
								t[s[1]] = JSON.parse(s[2])
							} catch {
								t[s[1]] = s[2]
							}
						}
					}), t
				};
			var _ = s("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				p = s("./src/reddit/actions/modal.ts"),
				b = s("./src/reddit/constants/modals.ts");
			var E = (e = null, t) => {
				var s;
				switch (t.type) {
					case _.o:
						const {
							avatarMarketingEvents: a
						} = t.payload;
						return a ? function(e) {
							if (!e) return d;
							const t = d;
							return e.forEach(e => {
								const {
									startsAt: s,
									endsAt: a,
									webAssetUrls: r,
									tags: n
								} = e, o = s && new Date(s) <= new Date, c = !!a && new Date(a) < new Date, i = !!o && !c;
								if (n && n.includes(l)) {
									const {
										text: s
									} = e, a = r || null, o = m(n);
									t && (t.quickCreateV1 = {
										...o,
										text: s,
										active: i && !!a,
										webAssetUrls: a
									})
								}
								if (n && n.includes(u)) {
									const e = r || null;
									t && (t.marketingEvent = {
										active: i && !!e,
										assetUrls: e
									})
								}
							}), t
						}(a) : d;
					case p.c:
						return (null === (s = t.payload) || void 0 === s ? void 0 : s.id) === b.a.SNOOVATAR_MODAL ? d : e;
					default:
						return e
				}
			};
			t.a = Object(n.c)({
				marketing: E,
				avatarUser: i
			})
		},
		"./src/reddit/selectors/avatar.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return o
			}));
			var a = s("./src/lib/initializeClient/installReducer.ts"),
				r = s("./src/reddit/reducers/features/avatar/index.ts");
			Object(a.a)({
				features: {
					avatar: r.a
				}
			});
			const n = e => {
					var t, s;
					return null === (s = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === s ? void 0 : s.avatarUser
				},
				o = e => {
					var t, s;
					return null === (s = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === s ? void 0 : s.avatarUser.csrf_token
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Econ-PowerupsInFeedUnit-index-tsx.392a54c7fd8417e80a99.js.map