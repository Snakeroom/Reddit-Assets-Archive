// https://www.redditstatic.com/desktop2x/reddit-components-Econ-PowerupsInFeedUnit-index-tsx.fd2f75fb3869ef56ef50.js
// Retrieved at 10/5/2021, 1:40:05 PM by Reddit Dataminer v1.0.0
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
				return p
			}));
			var a = s("./node_modules/react/index.js"),
				r = s.n(a),
				n = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/PowerupsProgressBar.tsx"),
				i = s("./src/reddit/components/UserIcon/index.tsx"),
				d = s("./src/reddit/selectors/experiments/econ/index.ts"),
				l = s("./src/reddit/selectors/gold/powerups/index.ts"),
				u = s("./src/reddit/components/Econ/Common/JoinHeroes/index.m.less"),
				m = s.n(u);
			const {
				fbt: _
			} = s("./node_modules/fbt/lib/FbtPublic.js"), p = ({
				className: e,
				subredditId: t,
				onClick: s
			}) => {
				const a = Object(n.e)(e => Object(l.k)(e, {
						subredditId: t
					})),
					u = Object(n.e)(e => Object(l.m)(e, {
						subredditId: t
					})),
					p = Object(n.e)(d.h);
				if (!a) return null;
				const {
					tier: b,
					count: E,
					tiersInfo: v,
					supportersCount: h
				} = a, f = v[1].powerupsCost, O = b >= 2, w = (null == u ? void 0 : u.filter(e => {
					var t;
					return !!(null === (t = e.supporterInfo) || void 0 === t ? void 0 : t.displayName)
				}).slice(0, 2)) || [], C = Math.min(E, f) / f, N = f - E;
				return r.a.createElement("div", {
					className: Object(o.a)(m.a.container, e, {
						[m.a.containerClickable]: !!s
					}),
					"data-testid": "join-heroes",
					onClick: () => null == s ? void 0 : s(E)
				}, r.a.createElement("div", {
					className: m.a.heroes
				}, !!w.length && r.a.createElement("div", {
					className: Object(o.a)(m.a.heroesAvatarContainer, {
						[m.a.twoAvatarsContainer]: w.length > 1
					})
				}, w.map(e => {
					var t, s;
					return r.a.createElement("div", {
						className: m.a.heroesAvatar,
						key: e.supporterInfo.id
					}, r.a.createElement(i.a, {
						className: m.a.heroImage,
						userName: e.supporterInfo.displayName,
						iconUrl: null === (t = e.supporterInfo.icon) || void 0 === t ? void 0 : t.url,
						isNSFW: !!(null === (s = e.supporterInfo.profile) || void 0 === s ? void 0 : s.isNsfw)
					}))
				})), r.a.createElement("div", {
					className: m.a.heroesTitle
				}, (() => p ? h ? _._({
					"*": "Join {subreddit supporters} supporters",
					_1: "Join 1 supporter"
				}, [_._plural(h, "subreddit supporters")], {
					hk: "20DKnU"
				}) : _._("Be the first supporter!", null, {
					hk: "3sBXnW"
				}) : h ? _._({
					"*": "Join {subreddit supporters} heroes",
					_1: "Join 1 hero"
				}, [_._plural(h, "subreddit supporters")], {
					hk: "2UisaO"
				}) : _._("Be the first hero!", null, {
					hk: "3TGmi4"
				}))())), r.a.createElement("p", {
					className: m.a.title
				}, O ? _._("Community perks are now unlocked!", null, {
					hk: "3xbTTM"
				}) : _._({
					"*": "{powerups needed} more Powerups will unlock perks for the community",
					_1: "{powerups needed} more Powerup will unlock perks for the community"
				}, [_._param("powerups needed", N), _._plural(N)], {
					hk: "2aHf4k"
				})), r.a.createElement(c.a, {
					className: m.a.progressBar,
					progress: C
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
				u = s("./src/reddit/constants/posts.ts"),
				m = s("./src/reddit/selectors/experiments/econ/index.ts"),
				_ = s("./src/reddit/selectors/subreddit.ts"),
				p = s("./src/reddit/selectors/gold/powerups/index.ts");
			! function(e) {
				e[e.POWERUPS_DEFAULT = 0] = "POWERUPS_DEFAULT", e[e.POWERUPS_COMMUNITY_GEAR = 1] = "POWERUPS_COMMUNITY_GEAR", e[e.UNLOCKED_COMMUNITY_GEAR = 2] = "UNLOCKED_COMMUNITY_GEAR", e[e.HIDDEN = 3] = "HIDDEN"
			}(a || (a = {}));
			var b = s("./src/config.ts"),
				E = s("./src/lib/classNames/index.ts"),
				v = s("./src/reddit/controls/Button/index.tsx"),
				h = s("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				f = s("./src/reddit/components/Econ/PowerupsInFeedUnit/PostUnlock.m.less"),
				O = s.n(f),
				w = s("./src/higherOrderComponents/asModal/index.tsx"),
				C = s("./src/lib/opener/index.ts"),
				N = s("./src/reddit/actions/snoovatar.ts"),
				g = s("./src/reddit/actions/toaster.ts"),
				x = s("./src/reddit/actions/urlRequested.ts"),
				y = s("./src/reddit/components/Econ/Common/ModalCloseButton/index.tsx"),
				A = s("./src/reddit/constants/gold.ts"),
				k = s("./src/reddit/helpers/avatar/index.ts"),
				P = s("./src/reddit/models/Avatar/accessories.ts"),
				I = s("./src/reddit/models/Toast/index.ts"),
				j = s("./src/reddit/selectors/avatar.ts"),
				U = s("./src/reddit/components/Econ/PowerupsInFeedUnit/UpdateAvatarConfirmationModal/index.m.less"),
				D = s.n(U);
			const {
				fbt: R
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var S = Object(w.a)(({
				subredditId: e,
				closeModal: t
			}) => {
				const s = Object(o.d)(),
					a = Object(o.e)(j.a);
				Object(r.useEffect)(() => {
					s(Object(N.b)())
				}, [s]);
				const c = async () => s(Object(x.a)("/user/me", !0)), i = R._("Nice! Ready to update your avatar?", null, {
					hk: "20KFjx"
				}), d = R._("Avatars and avatar visual elements © Reddit.", null, {
					hk: "2Y4y3g"
				}), l = R._("Learn more", null, {
					hk: "2S4fxr"
				});
				return n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
					className: D.a.modal
				}, n.a.createElement("div", {
					className: D.a.header
				}, i, n.a.createElement(y.a, {
					onClick: t
				})), n.a.createElement("div", {
					className: D.a.contentWrapper
				}, n.a.createElement("img", {
					alt: "Avatar wearing community gear top",
					className: D.a.avatarTop,
					"data-testid": "community-gear-avatar",
					src: `${b.a.assetPath}/img/powerups/communityGear/${e}.png`
				}), n.a.createElement("div", {
					className: D.a.legalTextContainer
				}, n.a.createElement("span", null, d), n.a.createElement("a", {
					href: A.c,
					target: C.d.BLANK,
					className: D.a.learnMoreLink,
					rel: C.c
				}, l))), n.a.createElement("div", {
					className: D.a.buttonsRow
				}, n.a.createElement(v.s, {
					className: D.a.button,
					priority: v.b.Secondary,
					onClick: t
				}, R._("Go Back", null, {
					hk: "1EHXc5"
				})), n.a.createElement(v.s, {
					className: D.a.button,
					priority: v.b.Primary,
					onClick: async () => {
						if (!a) return;
						const e = a.snoovatar,
							r = (null == e ? void 0 : e.accessories) || [],
							n = Object(k.a)(r, [P.d]).map(e => e.id);
						try {
							s(Object(N.c)(n, null == e ? void 0 : e.styles, {
								set_avatar_to_profile: !0,
								source: "powerups_post_upsell"
							})), s(Object(g.f)({
								duration: g.a,
								kind: I.b.SuccessCommunityGreen,
								text: R._("Success!", null, {
									hk: "4ieEVt"
								}),
								buttonText: R._("View profile", null, {
									hk: "IGoMl"
								}),
								buttonAction: c
							})), t()
						} catch {
							s(Object(g.f)({
								duration: g.a,
								kind: I.b.Error,
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
					const [s, a] = Object(r.useState)(!1), o = () => a(!1);
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
					}, T._("Get the most out of Powerups", null, {
						hk: "4mSV6O"
					})), n.a.createElement("h3", {
						className: O.a.subtitle
					}, T._("Show your support with exclusive gear", null, {
						hk: "2rq6cz"
					})))), n.a.createElement("div", {
						className: O.a.contentWrapper
					}, n.a.createElement("img", {
						alt: "Avatar wearing community gear top",
						className: O.a.avatarTop,
						"data-testid": "community-gear-avatar",
						src: `${b.a.assetPath}/img/powerups/communityGear/withoutLegs/${t}.png`
					})), n.a.createElement("div", {
						className: O.a.buttonWrapper
					}, n.a.createElement(v.s, {
						priority: v.b.Secondary,
						onClick: () => {
							(() => a(!0))()
						},
						isFullWidth: !0
					}, T._("Wear your community gear", null, {
						hk: "1Tt2q6"
					})))), s && n.a.createElement(S, {
						withOverlay: !0,
						closeModal: o,
						onOverlayClick: o,
						subredditId: t
					}))
				},
				B = s("./src/reddit/actions/gold/powerups.ts"),
				L = s("./src/reddit/components/Econ/Common/JoinHeroes/index.tsx"),
				F = s("./src/reddit/components/Econ/Common/PowerupRotatingBolt/index.tsx"),
				W = s("./src/reddit/components/PowerupsCtaButton/index.tsx"),
				Y = s("./src/reddit/components/Econ/PowerupsInFeedUnit/PreUnlock.m.less"),
				G = s.n(Y);
			const {
				fbt: K
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var H = ({
				className: e,
				subredditId: t,
				inFeedDisplayState: s
			}) => {
				const r = Object(o.d)(),
					c = Object(l.a)(),
					i = Object(o.e)(e => Object(_.Q)(e, {
						subredditId: t
					})),
					u = Object(o.e)(m.h);
				if (s === a.HIDDEN) return null;
				const p = u ? K._("Support the whole community", null, {
					hk: "oOdGv"
				}) : K._("Unlock perks for the whole community", null, {
					hk: "1DllPY"
				});
				return n.a.createElement("div", {
					className: Object(E.a)(G.a.container, e)
				}, s === a.POWERUPS_DEFAULT ? n.a.createElement(() => n.a.createElement(n.a.Fragment, null, n.a.createElement(F.a, {
					className: G.a.powerupsIcon
				}), n.a.createElement("h2", {
					className: G.a.title
				}, K._("Powerup {subreddit name}", [K._param("subreddit name", i.displayText)], {
					hk: "2zwNZk"
				})), n.a.createElement("h3", {
					className: G.a.subtitle
				}, p)), null) : n.a.createElement(() => n.a.createElement(n.a.Fragment, null, n.a.createElement("img", {
					alt: "Avatar wearing community gear",
					className: G.a.communityGearAvatar,
					"data-testid": "community-gear-avatar",
					src: `${b.a.assetPath}/img/powerups/communityGear/withoutLegs/${t}.png`
				}), n.a.createElement("h2", {
					className: G.a.title
				}, K._("Unlock gear for {subreddit name}", [K._param("subreddit name", i.displayText)], {
					hk: "208mAS"
				}))), null), n.a.createElement(L.a, {
					className: G.a.supporters,
					subredditId: t,
					onClick: e => {
						c(Object(d.e)("post_upsell")), r(e ? Object(B.h)(t) : Object(B.f)("in_feed_unit"))
					}
				}), n.a.createElement(W.a, {
					className: G.a.button,
					onClick: () => {
						c(Object(d.m)()), r(Object(B.f)("in_feed_unit"))
					}
				}))
			};
			const {
				fbt: q
			} = s("./node_modules/fbt/lib/FbtPublic.js"), V = 2, z = 1;
			t.default = ({
				subredditId: e,
				className: t
			}) => {
				const s = Object(l.a)(),
					b = Object(o.e)(t => Object(_.Q)(t, {
						subredditId: e
					})),
					E = Object(o.e)(e => ((e, {
						subredditId: t,
						subredditName: s
					}) => {
						const r = Object(p.w)(e, {
								subredditId: t
							}),
							n = Object(_.cb)(e, {
								identifier: {
									name: s,
									type: u.a.SUBREDDIT
								}
							}),
							o = Object(p.l)(e, {
								subredditId: t
							}),
							c = Object(p.q)(e, {
								subredditId: t
							}),
							i = Object(p.g)(e, {
								subredditId: t
							});
						return o || r ? c && n && Object(m.j)(e) ? a.UNLOCKED_COMMUNITY_GEAR : a.HIDDEN : i && n && Object(m.j)(e) ? a.POWERUPS_COMMUNITY_GEAR : a.POWERUPS_DEFAULT
					})(e, {
						subredditId: b.id,
						subredditName: b.name
					})),
					v = E === a.UNLOCKED_COMMUNITY_GEAR,
					h = v ? c.b.POWERUPS_UNLOCKED_INFEED_UNIT_VISIBILITY_STORE : c.b.POWERUPS_INFEED_UNIT_VISIBILITY_STORE,
					[f, O] = Object(r.useState)(a.HIDDEN);
				switch (Object(r.useEffect)(() => {
					const t = ((e, t, s) => {
						return Object(i.j)(t, e) >= (s ? z : V)
					})(e, h, v) ? a.HIDDEN : E;
					O(t)
				}, [e, h, E, O, v]), Object(r.useEffect)(() => {
					f !== a.HIDDEN && (Object(i.S)(h, e), v || s(Object(d.n)()))
				}, [f, h, e, v, s]), f) {
					case a.POWERUPS_DEFAULT:
					case a.POWERUPS_COMMUNITY_GEAR:
						return n.a.createElement(H, {
							className: t,
							subredditId: e,
							inFeedDisplayState: f
						});
					case a.UNLOCKED_COMMUNITY_GEAR:
						return n.a.createElement(M, {
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
			})), s.d(t, "j", (function() {
				return d
			})), s.d(t, "i", (function() {
				return l
			})), s.d(t, "h", (function() {
				return u
			})), s.d(t, "c", (function() {
				return m
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
				m = "https://reddit.zendesk.com/hc/en-us/articles/360050641932"
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
				m = "avatar_promo_archived",
				_ = e => {
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
			var p = s("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				b = s("./src/reddit/actions/modal.ts"),
				E = s("./src/reddit/constants/modals.ts");
			var v = (e = null, t) => {
				var s;
				switch (t.type) {
					case p.o:
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
								} = e, o = s && new Date(s) <= new Date, c = !!a && new Date(a) < new Date, i = !!o && !c, d = n.includes(m);
								if (n && n.includes(l) && !d) {
									const {
										text: s,
										id: a
									} = e, o = r || null, c = _(n);
									t && (t.quickCreateV1 = {
										...c,
										id: a,
										text: s,
										active: i && !!o,
										webAssetUrls: o
									})
								}
								if (n && n.includes(u) && !d) {
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
			t.a = Object(n.c)({
				marketing: v,
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Econ-PowerupsInFeedUnit-index-tsx.fd2f75fb3869ef56ef50.js.map