// https://www.redditstatic.com/desktop2x/reddit-components-Econ-PowerupsInFeedUnit-index-tsx.0b8aa1224de94c3f2569.js
// Retrieved at 10/13/2021, 5:40:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Econ-PowerupsInFeedUnit-index-tsx"], {
		"./src/reddit/actions/snoovatar.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return m
			})), s.d(t, "a", (function() {
				return E
			})), s.d(t, "e", (function() {
				return f
			})), s.d(t, "c", (function() {
				return h
			})), s.d(t, "d", (function() {
				return w
			}));
			var a = s("./src/lib/initializeClient/installReducer.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/lib/sentry/index.ts"),
				n = s("./src/config.ts"),
				c = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/makeApiRequest/index.ts"),
				d = s("./src/lib/omitHeaders/index.ts"),
				l = s("./src/reddit/constants/headers.ts");
			var u = s("./src/reddit/reducers/features/avatar/index.ts"),
				_ = s("./src/reddit/selectors/avatar.ts"),
				p = s("./src/reddit/actions/users.ts");
			Object(a.a)({
				features: {
					avatar: u.a
				}
			});
			const m = "SET_AVATAR_USER",
				b = Object(r.a)(m),
				E = "RANDOM_AVATAR_LOADED",
				v = Object(r.a)(E),
				f = (e, t, s) => async (a, r, {
					apiContext: o
				}) => {
					const u = Object(_.b)(r()),
						m = await (async (e, t, s, a, r) => Object(i.a)(Object(d.a)(e, [l.a]), {
							endpoint: `${n.a.snoovatarUrl}/api/snoovatar`,
							method: c.ib.POST,
							headers: {
								"Content-Type": "application/json ",
								"X-CSRF-Token": r
							},
							data: {
								accessory_ids: t,
								styles: s,
								...a
							}
						}))(o(), e, t, s, u);
					if (!m.ok) throw new Error("User avatar failed to save");
					a(Object(p.A)(m.body))
				}, h = () => async (e, t, {
					apiContext: s
				}) => {
					try {
						const t = await (async e => Object(i.a)(Object(d.a)(e, [l.a]), {
							endpoint: `${n.a.snoovatarUrl}/api/account`,
							method: c.ib.GET
						}))(s());
						t.ok && e(b(t.body))
					} catch (a) {
						o.c.captureException(a)
					}
				}, w = () => async (e, t, {
					apiContext: s
				}) => {
					try {
						const t = await (async e => Object(i.a)(Object(d.a)(e, [l.a]), {
							endpoint: `${n.a.snoovatarUrl}/api/snoovatars/random:byId`,
							method: c.ib.GET
						}))(s());
						t.ok && e(v(t.body))
					} catch (a) {
						o.c.captureException(a)
					}
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
				return p
			}));
			var a = s("./node_modules/react/index.js"),
				r = s.n(a),
				o = s("./node_modules/react-redux/es/index.js"),
				n = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/PowerupsProgressBar.tsx"),
				i = s("./src/reddit/components/UserIcon/index.tsx"),
				d = s("./src/reddit/selectors/gold/powerups/index.ts"),
				l = s("./src/reddit/components/Econ/Common/JoinHeroes/index.m.less"),
				u = s.n(l);
			const {
				fbt: _
			} = s("./node_modules/fbt/lib/FbtPublic.js"), p = ({
				className: e,
				subredditId: t,
				onClick: s
			}) => {
				const a = Object(o.e)(e => Object(d.k)(e, {
						subredditId: t
					})),
					l = Object(o.e)(e => Object(d.m)(e, {
						subredditId: t
					}));
				if (!a) return null;
				const {
					tier: p,
					count: m,
					tiersInfo: b,
					supportersCount: E
				} = a, v = b[1].powerupsCost, f = p >= 2, h = (null == l ? void 0 : l.filter(e => {
					var t;
					return !!(null === (t = e.supporterInfo) || void 0 === t ? void 0 : t.displayName)
				}).slice(0, 2)) || [], w = Math.min(m, v) / v, O = v - m;
				return r.a.createElement("div", {
					className: Object(n.a)(u.a.container, e, {
						[u.a.containerClickable]: !!s
					}),
					"data-testid": "join-heroes",
					onClick: () => null == s ? void 0 : s(m)
				}, r.a.createElement("div", {
					className: u.a.heroes
				}, !!h.length && r.a.createElement("div", {
					className: Object(n.a)(u.a.heroesAvatarContainer, {
						[u.a.twoAvatarsContainer]: h.length > 1
					})
				}, h.map(e => {
					var t, s;
					return r.a.createElement("div", {
						className: u.a.heroesAvatar,
						key: e.supporterInfo.id
					}, r.a.createElement(i.a, {
						className: u.a.heroImage,
						userName: e.supporterInfo.displayName,
						iconUrl: null === (t = e.supporterInfo.icon) || void 0 === t ? void 0 : t.url,
						isNSFW: !!(null === (s = e.supporterInfo.profile) || void 0 === s ? void 0 : s.isNsfw)
					}))
				})), r.a.createElement("div", {
					className: u.a.heroesTitle
				}, (() => E ? _._({
					"*": "Join {subreddit supporters} heroes",
					_1: "Join 1 hero"
				}, [_._plural(E, "subreddit supporters")], {
					hk: "2UisaO"
				}) : _._("Be the first hero!", null, {
					hk: "3TGmi4"
				}))())), r.a.createElement("p", {
					className: u.a.title
				}, f ? _._("Community perks are now unlocked!", null, {
					hk: "3xbTTM"
				}) : _._({
					"*": "{powerups needed} more Powerups will unlock perks for the community",
					_1: "{powerups needed} more Powerup will unlock perks for the community"
				}, [_._param("powerups needed", O), _._plural(O)], {
					hk: "2aHf4k"
				})), r.a.createElement(c.a, {
					className: u.a.progressBar,
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
				o = s.n(r),
				n = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = s("./src/reddit/components/Econ/Common/ModalCloseButton/index.m.less"),
				i = s.n(c);
			const {
				fbt: d
			} = s("./node_modules/fbt/lib/FbtPublic.js"), l = ({
				className: e,
				onClick: t
			}) => o.a.createElement("button", {
				onClick: t,
				className: Object(a.a)(e, i.a.closeButton),
				"aria-label": d._("Close", null, {
					hk: "3Qarlp"
				})
			}, o.a.createElement(n.b, {
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
				o = s.n(r),
				n = s("./src/reddit/components/Econ/Common/PowerupRotatingBolt/index.m.less"),
				c = s.n(n);
			const i = e => o.a.createElement("div", {
				className: e.className
			}, o.a.createElement("picture", null, o.a.createElement("source", {
				srcSet: `${a.a.assetPath}/img/powerups/rotating-bolt.webp`,
				type: "image/webp"
			}), o.a.createElement("source", {
				srcSet: `${a.a.assetPath}/img/powerups/powerup.png`,
				type: "image/png"
			}), o.a.createElement("img", {
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
				powerupsIcon: "w787eo650WzP0J00UYn-2",
				communityGearAvatar: "_35IGztfyzwQ3wZ8LAuV7rb",
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
				return z
			})), s.d(t, "MAX_DISPLAY_COUNT_ON_UNLOCKED_SUBREDDIT", (function() {
				return K
			}));
			var a, r = s("./node_modules/react/index.js"),
				o = s.n(r),
				n = s("./node_modules/react-redux/es/index.js"),
				c = s("./src/reddit/constants/localStorage.ts"),
				i = s("./src/reddit/helpers/localStorage/index.ts"),
				d = s("./src/reddit/helpers/trackers/powerups.ts"),
				l = s("./src/reddit/hooks/useTracking.ts"),
				u = s("./src/reddit/constants/posts.ts"),
				_ = s("./src/reddit/selectors/experiments/econ/index.ts"),
				p = s("./src/reddit/selectors/subreddit.ts"),
				m = s("./src/reddit/selectors/gold/powerups/index.ts");
			! function(e) {
				e[e.POWERUPS_DEFAULT = 0] = "POWERUPS_DEFAULT", e[e.POWERUPS_COMMUNITY_GEAR = 1] = "POWERUPS_COMMUNITY_GEAR", e[e.UNLOCKED_COMMUNITY_GEAR = 2] = "UNLOCKED_COMMUNITY_GEAR", e[e.HIDDEN = 3] = "HIDDEN"
			}(a || (a = {}));
			var b = s("./src/config.ts"),
				E = s("./src/lib/classNames/index.ts"),
				v = s("./src/reddit/controls/Button/index.tsx"),
				f = s("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				h = s("./src/reddit/components/Econ/PowerupsInFeedUnit/PostUnlock.m.less"),
				w = s.n(h),
				O = s("./src/higherOrderComponents/asModal/index.tsx"),
				y = s("./src/lib/opener/index.ts"),
				g = s("./src/reddit/actions/snoovatar.ts"),
				A = s("./src/reddit/actions/toaster.ts"),
				N = s("./src/reddit/actions/urlRequested.ts"),
				C = s("./src/reddit/components/Econ/Common/ModalCloseButton/index.tsx"),
				x = s("./src/reddit/constants/gold.ts"),
				k = s("./src/reddit/helpers/avatar/index.ts"),
				j = s("./src/reddit/models/Avatar/accessories.ts"),
				P = s("./src/reddit/models/Toast/index.ts"),
				U = s("./src/reddit/selectors/avatar.ts"),
				I = s("./src/reddit/components/Econ/PowerupsInFeedUnit/UpdateAvatarConfirmationModal/index.m.less"),
				D = s.n(I);
			const {
				fbt: R
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var S = Object(O.a)(({
				subredditId: e,
				closeModal: t
			}) => {
				const s = Object(l.a)(),
					a = Object(n.d)(),
					c = Object(n.e)(U.a);
				Object(r.useEffect)(() => {
					s(Object(d.o)()), a(Object(g.c)())
				}, [a, s]);
				const i = async () => a(Object(N.a)("/user/me", !0)), u = R._("Nice! Ready to update your avatar?", null, {
					hk: "20KFjx"
				}), _ = R._("Avatars and avatar visual elements © Reddit.", null, {
					hk: "2Y4y3g"
				}), p = R._("Learn more", null, {
					hk: "2S4fxr"
				});
				return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
					className: D.a.modal
				}, o.a.createElement("div", {
					className: D.a.header
				}, u, o.a.createElement(C.a, {
					onClick: t
				})), o.a.createElement("div", {
					className: D.a.contentWrapper
				}, o.a.createElement("img", {
					alt: "Avatar wearing community gear top",
					className: D.a.avatarTop,
					"data-testid": "community-gear-avatar",
					src: `${b.a.assetPath}/img/powerups/communityGear/${e}.png`
				}), o.a.createElement("div", {
					className: D.a.legalTextContainer
				}, o.a.createElement("span", null, _), o.a.createElement("a", {
					href: x.c,
					target: y.d.BLANK,
					className: D.a.learnMoreLink,
					rel: y.c
				}, p))), o.a.createElement("div", {
					className: D.a.buttonsRow
				}, o.a.createElement(v.s, {
					className: D.a.button,
					priority: v.b.Secondary,
					onClick: t
				}, R._("Go Back", null, {
					hk: "1EHXc5"
				})), o.a.createElement(v.s, {
					className: D.a.button,
					priority: v.b.Primary,
					onClick: async () => {
						if (s(Object(d.n)()), !c) return;
						const r = c.snoovatar,
							o = (null == r ? void 0 : r.accessories) || [],
							n = Object(k.a)(o, [j.d[e]]).map(e => e.id);
						try {
							a(Object(g.e)(n, null == r ? void 0 : r.styles, {
								set_avatar_to_profile: !0,
								source: "powerups_post_upsell"
							})), a(Object(A.f)({
								duration: A.a,
								kind: P.b.SuccessCommunityGreen,
								text: R._("Success!", null, {
									hk: "4ieEVt"
								}),
								buttonText: R._("View profile", null, {
									hk: "IGoMl"
								}),
								buttonAction: i
							})), t()
						} catch {
							a(Object(A.f)({
								duration: A.a,
								kind: P.b.Error,
								text: R._("Something went wrong!", null, {
									hk: "qD6OP"
								})
							}))
						}
					}
				}, R._("Yes", null, {
					hk: "27lXsL"
				})))))
			});
			const {
				fbt: T
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var M = ({
					className: e,
					subredditId: t
				}) => {
					const s = Object(l.a)(),
						[a, n] = Object(r.useState)(!1),
						c = () => n(!1);
					return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						className: Object(E.a)(w.a.container, e)
					}, o.a.createElement("div", {
						className: w.a.header
					}, o.a.createElement(f.a, {
						className: w.a.powerupsBolt
					}), o.a.createElement("div", {
						className: w.a.headerText
					}, o.a.createElement("h2", {
						className: w.a.title
					}, T._("Get the most out of Powerups", null, {
						hk: "4mSV6O"
					})), o.a.createElement("h3", {
						className: w.a.subtitle
					}, T._("Show your support with exclusive gear", null, {
						hk: "2rq6cz"
					})))), o.a.createElement("div", {
						className: w.a.contentWrapper
					}, o.a.createElement("img", {
						alt: "Avatar wearing community gear top",
						className: w.a.avatarTop,
						"data-testid": "community-gear-avatar",
						src: `${b.a.assetPath}/img/powerups/communityGear/withoutLegs/${t}.png`
					})), o.a.createElement("div", {
						className: w.a.buttonWrapper
					}, o.a.createElement(v.s, {
						priority: v.b.Secondary,
						onClick: () => {
							s(Object(d.m)()), (() => n(!0))()
						},
						isFullWidth: !0
					}, T._("Wear your community gear", null, {
						hk: "1Tt2q6"
					})))), a && o.a.createElement(S, {
						withOverlay: !0,
						closeModal: c,
						onOverlayClick: c,
						subredditId: t
					}))
				},
				B = s("./src/reddit/actions/gold/powerups.ts"),
				L = s("./src/reddit/components/Econ/Common/JoinHeroes/index.tsx"),
				q = s("./src/reddit/components/Econ/Common/PowerupRotatingBolt/index.tsx"),
				F = s("./src/reddit/components/PowerupsCtaButton/index.tsx"),
				W = s("./src/reddit/components/Econ/PowerupsInFeedUnit/PreUnlock.m.less"),
				Y = s.n(W);
			const {
				fbt: G
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var H = ({
				className: e,
				subredditId: t,
				inFeedDisplayState: s
			}) => {
				const r = Object(n.d)(),
					c = Object(l.a)(),
					i = Object(n.e)(e => Object(p.Q)(e, {
						subredditId: t
					}));
				if (s === a.HIDDEN) return null;
				const u = G._("Unlock perks for the whole community", null, {
					hk: "1DllPY"
				});
				return o.a.createElement("div", {
					className: Object(E.a)(Y.a.container, e)
				}, s === a.POWERUPS_DEFAULT ? o.a.createElement(() => o.a.createElement(o.a.Fragment, null, o.a.createElement(q.a, {
					className: Y.a.powerupsIcon
				}), o.a.createElement("h2", {
					className: Y.a.title
				}, G._("Powerup {subreddit name}", [G._param("subreddit name", i.displayText)], {
					hk: "2zwNZk"
				})), o.a.createElement("h3", {
					className: Y.a.subtitle
				}, u)), null) : o.a.createElement(() => o.a.createElement(o.a.Fragment, null, o.a.createElement("img", {
					alt: "Avatar wearing community gear",
					className: Y.a.communityGearAvatar,
					"data-testid": "community-gear-avatar",
					src: `${b.a.assetPath}/img/powerups/communityGear/withoutLegs/${t}.png`
				}), o.a.createElement("h2", {
					className: Y.a.title
				}, G._("Unlock gear for {subreddit name}", [G._param("subreddit name", i.displayText)], {
					hk: "208mAS"
				}))), null), o.a.createElement(L.a, {
					className: Y.a.supporters,
					subredditId: t,
					onClick: e => {
						c(Object(d.e)("post_upsell")), r(e ? Object(B.h)(t) : Object(B.f)("in_feed_unit"))
					}
				}), o.a.createElement(F.a, {
					className: Y.a.button,
					onClick: () => {
						s === a.POWERUPS_DEFAULT ? c(Object(d.q)()) : c(Object(d.r)()), r(Object(B.f)("in_feed_unit"))
					}
				}))
			};
			const {
				fbt: V
			} = s("./node_modules/fbt/lib/FbtPublic.js"), z = 2, K = 1;
			t.default = ({
				subredditId: e,
				className: t
			}) => {
				const s = Object(l.a)(),
					b = Object(n.e)(t => Object(p.Q)(t, {
						subredditId: e
					})),
					E = Object(n.e)(e => ((e, {
						subredditId: t,
						subredditName: s
					}) => {
						const r = Object(m.w)(e, {
								subredditId: t
							}),
							o = Object(p.cb)(e, {
								identifier: {
									name: s,
									type: u.a.SUBREDDIT
								}
							}),
							n = Object(m.l)(e, {
								subredditId: t
							}),
							c = Object(m.q)(e, {
								subredditId: t
							}),
							i = Object(m.g)(e, {
								subredditId: t
							});
						return n || r ? c && o && Object(_.j)(e) ? a.UNLOCKED_COMMUNITY_GEAR : a.HIDDEN : i && o && Object(_.j)(e) ? a.POWERUPS_COMMUNITY_GEAR : a.POWERUPS_DEFAULT
					})(e, {
						subredditId: b.id,
						subredditName: b.name
					})),
					v = E === a.UNLOCKED_COMMUNITY_GEAR,
					f = v ? c.b.POWERUPS_UNLOCKED_INFEED_UNIT_VISIBILITY_STORE : c.b.POWERUPS_INFEED_UNIT_VISIBILITY_STORE,
					[h, w] = Object(r.useState)(a.HIDDEN);
				switch (Object(r.useEffect)(() => {
					const t = ((e, t, s) => {
						return Object(i.j)(t, e) >= (s ? K : z)
					})(e, f, v) ? a.HIDDEN : E;
					w(t)
				}, [e, f, E, w, v]), Object(r.useEffect)(() => {
					if (h === a.HIDDEN) return;
					(() => v ? s(Object(d.p)()) : h === a.POWERUPS_DEFAULT ? s(Object(d.t)()) : s(Object(d.s)()))(), Object(i.S)(f, e)
				}, [h, f, e, v, s]), h) {
					case a.POWERUPS_DEFAULT:
					case a.POWERUPS_COMMUNITY_GEAR:
						return o.a.createElement(H, {
							className: t,
							subredditId: e,
							inFeedDisplayState: h
						});
					case a.UNLOCKED_COMMUNITY_GEAR:
						return o.a.createElement(M, {
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
				return o
			})), s.d(t, "f", (function() {
				return n
			})), s.d(t, "g", (function() {
				return c
			})), s.d(t, "d", (function() {
				return i
			})), s.d(t, "j", (function() {
				return d
			})), s.d(t, "i", (function() {
				return l
			})), s.d(t, "h", (function() {
				return u
			})), s.d(t, "c", (function() {
				return _
			}));
			const a = "ModerationPage--Modal--AddAward",
				r = "ModerationPage--Modal--DeleteAwardConfirmation",
				o = 20,
				n = 4,
				c = 1e4,
				i = .2,
				d = .1,
				l = .1,
				u = 500,
				_ = "https://reddit.zendesk.com/hc/en-us/articles/360050641932"
		},
		"./src/reddit/helpers/avatar/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var a = s("./node_modules/lodash/flatten.js"),
				r = s.n(a);
			const o = (e, t) => {
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
				return o
			})), s.d(t, "d", (function() {
				return n
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
				o = {
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
				n = {
					t5_4hmhx4: {
						id: "powerups_top_powerupsteam",
						section_id: "top_body_tops",
						customizable_classes: ["body"],
						capability_required: null,
						state: "ENABLED",
						assets: [{
							accessory_id: "powerups_top_powerupsteam",
							image_url: "https://i.redd.it/snoovatar/snoo_assets/np95XAspcxQ_powerups_top_powerupsteam.svg",
							slot: 40
						}],
						tags: ['powerups={"subreddit_i:"t5_4hmhx4"}'],
						available_for_closet: !1
					},
					t5_2qqoq: {
						id: "powerups_top_pennystocks",
						section_id: "top_body_tops",
						customizable_classes: ["body"],
						capability_required: null,
						state: "ENABLED",
						assets: [{
							accessory_id: "powerups_top_pennystocks",
							image_url: "https://i.redd.it/snoovatar/snoo_assets/V1w2MVt_pt0_powerups_top_pennystocks.svg",
							slot: 40
						}],
						tags: ['powerups={"subreddit_i:"t5_2qqoq"}'],
						available_for_closet: !1
					},
					t5_37xo2: {
						id: "powerups_top_roastme",
						section_id: "top_body_tops",
						customizable_classes: ["body"],
						capability_required: null,
						state: "ENABLED",
						assets: [{
							accessory_id: "powerups_top_roastme",
							image_url: "https://i.redd.it/snoovatar/snoo_assets/U5c4hNHwkok_powerups_top_roastme.svg",
							slot: 40
						}],
						tags: ['powerups={"subreddit_i:"t5_37xo2"}'],
						available_for_closet: !1
					},
					t5_2qhta: {
						id: "powerups_top_cats",
						section_id: "top_body_tops",
						customizable_classes: ["body"],
						capability_required: null,
						state: "ENABLED",
						assets: [{
							accessory_id: "powerups_top_cats",
							image_url: "https://i.redd.it/snoovatar/snoo_assets/gga_gu5iv6o_powerups_top_cats.svg",
							slot: 40
						}],
						tags: ['powerups={"subreddit_i:"t5_2qhta"}'],
						available_for_closet: !1
					},
					t5_2qh55: {
						id: "powerups_top_food",
						section_id: "top_body_tops",
						customizable_classes: ["body"],
						capability_required: null,
						state: "ENABLED",
						assets: [{
							accessory_id: "powerups_top_food",
							image_url: "https://i.redd.it/snoovatar/snoo_assets/np95XAspcxQ_powerups_top_food.svg",
							slot: 40
						}],
						tags: ['powerups={"subreddit_i:"t5_2qh55"}'],
						available_for_closet: !1
					},
					t5_4e4fpz: {
						id: "powerups_top_qa_powerupsenabled",
						section_id: "top_body_tops",
						customizable_classes: ["body"],
						capability_required: null,
						state: "ENABLED",
						assets: [{
							accessory_id: "powerups_top_qa_powerupsenabled",
							image_url: "https://i.redd.it/snoovatar/snoo_assets/V1w2MVt_pt0_powerups_top_qa_powerupsenabled.svg",
							slot: 40
						}],
						tags: ['powerups={"subreddit_i:"t5_4e4fpz"}'],
						available_for_closet: !1
					},
					t5_4e4ib9: {
						id: "powerups_top_qa_powerupsenabled2",
						section_id: "top_body_tops",
						customizable_classes: ["body"],
						capability_required: null,
						state: "ENABLED",
						assets: [{
							accessory_id: "powerups_top_qa_powerupsenabled2",
							image_url: "https://i.redd.it/snoovatar/snoo_assets/U5c4hNHwkok_powerups_top_qa_powerupsenabled2.svg",
							slot: 40
						}],
						tags: ['powerups={"subreddit_i:"t5_4e4ib9"}'],
						available_for_closet: !1
					},
					t5_4y3poa: {
						id: "powerups_top_qa_powerupsenabled3",
						section_id: "top_body_tops",
						customizable_classes: ["body"],
						capability_required: null,
						state: "ENABLED",
						assets: [{
							accessory_id: "powerups_top_qa_powerupsenabled3",
							image_url: "https://i.redd.it/snoovatar/snoo_assets/gga_gu5iv6o_powerups_top_qa_powerupsenabled3.svg",
							slot: 40
						}],
						tags: ['powerups={"subreddit_i:"t5_4y3poa"}'],
						available_for_closet: !1
					}
				}
		},
		"./src/reddit/reducers/features/avatar/index.ts": function(e, t, s) {
			"use strict";
			var a, r, o = s("./node_modules/redux/es/redux.js"),
				n = s("./src/reddit/actions/snoovatar.ts");
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
					case n.b:
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
						id: "-1",
						active: !1,
						text: "",
						min_days_on_reddit: 0,
						should_have_avatar: !1,
						max_event_views: 0,
						min_days_since_last_event_interaction: 0,
						webAssetUrls: []
					}
				},
				l = "avatar_quick_create_event",
				u = "avatar_marketing_event",
				_ = "avatar_promo_archived",
				p = e => {
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
			var m = s("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				b = s("./src/reddit/actions/modal.ts"),
				E = s("./src/reddit/constants/modals.ts");
			var v = (e = null, t) => {
				var s;
				switch (t.type) {
					case m.o:
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
									tags: o
								} = e, n = s && new Date(s) <= new Date, c = !!a && new Date(a) < new Date, i = !!n && !c, d = o.includes(_);
								if (o && o.includes(l) && !d) {
									const {
										text: s,
										id: a
									} = e, n = r || null, c = p(o);
									t && (t.quickCreateV1 = {
										...c,
										id: a,
										text: s,
										active: i && !!n,
										webAssetUrls: n
									})
								}
								if (o && o.includes(u) && !d) {
									const e = r || null;
									t && (t.marketingEvent = {
										active: i && !!e,
										assetUrls: e
									})
								}
							}), t
						}(a) : d;
					case b.c:
						return (null === (s = t.payload) || void 0 === s ? void 0 : s.id) === E.a.SNOOVATAR_MODAL ? d : e;
					default:
						return e
				}
			};
			var f = (e = null, t) => {
				switch (t.type) {
					case n.a: {
						const {
							image: e,
							accessory_ids: s
						} = t.payload;
						return {
							image: e,
							accessoryIds: s
						}
					}
					default:
						return e
				}
			};
			t.a = Object(o.c)({
				marketing: v,
				avatarUser: i,
				randomAvatar: f
			})
		},
		"./src/reddit/selectors/avatar.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return n
			})), s.d(t, "c", (function() {
				return c
			}));
			var a = s("./src/lib/initializeClient/installReducer.ts"),
				r = s("./src/reddit/reducers/features/avatar/index.ts");
			Object(a.a)({
				features: {
					avatar: r.a
				}
			});
			const o = e => {
					var t, s;
					return null === (s = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === s ? void 0 : s.avatarUser
				},
				n = e => {
					var t, s;
					return null === (s = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === s ? void 0 : s.avatarUser.csrf_token
				},
				c = e => {
					var t, s;
					return (null === (s = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === s ? void 0 : s.randomAvatar) || null
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Econ-PowerupsInFeedUnit-index-tsx.0b8aa1224de94c3f2569.js.map