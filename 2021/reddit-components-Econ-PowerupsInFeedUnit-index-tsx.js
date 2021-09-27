// https://www.redditstatic.com/desktop2x/reddit-components-Econ-PowerupsInFeedUnit-index-tsx.d2a3c9ec13792c0359be.js
// Retrieved at 9/27/2021, 11:20:06 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Econ-PowerupsInFeedUnit-index-tsx"], {
		"./src/reddit/components/Econ/Common/JoinHeroes/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Econ/Common/JoinHeroes/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return E
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/PowerupsProgressBar.tsx"),
				d = n("./src/reddit/components/UserIcon/index.tsx"),
				i = n("./src/reddit/selectors/experiments/econ/index.ts"),
				l = n("./src/reddit/selectors/gold/powerups/index.ts"),
				u = n("./src/reddit/selectors/subreddit.ts"),
				m = n("./src/reddit/components/Econ/Common/JoinHeroes/index.m.less"),
				p = n.n(m);
			const {
				fbt: b
			} = n("./node_modules/fbt/lib/FbtPublic.js"), E = ({
				className: e,
				subredditId: t,
				onClick: n
			}) => {
				const s = Object(a.e)(e => Object(l.j)(e, {
						subredditId: t
					})),
					m = Object(a.e)(e => Object(u.Q)(e, {
						subredditId: t
					})),
					E = Object(a.e)(e => Object(l.l)(e, {
						subredditId: t
					})),
					_ = Object(a.e)(i.h);
				if (!s) return null;
				const {
					tier: N,
					count: h,
					tiersInfo: O,
					supportersCount: f
				} = s, x = O[1].powerupsCost, P = N >= 2, I = (null == E ? void 0 : E.filter(e => {
					var t;
					return !!(null === (t = e.supporterInfo) || void 0 === t ? void 0 : t.displayName)
				}).slice(0, 2)) || [], w = Math.min(h, x) / x, C = x - h;
				return r.a.createElement("div", {
					className: Object(o.a)(p.a.container, e, {
						[p.a.containerClickable]: !!n
					}),
					"data-testid": "join-heroes",
					onClick: () => null == n ? void 0 : n(h)
				}, r.a.createElement("div", {
					className: p.a.heroes
				}, !!I.length && r.a.createElement("div", {
					className: Object(o.a)(p.a.heroesAvatarContainer, {
						[p.a.twoAvatarsContainer]: I.length > 1
					})
				}, I.map(e => {
					var t, n;
					return r.a.createElement("div", {
						className: p.a.heroesAvatar,
						key: e.supporterInfo.id
					}, r.a.createElement(d.a, {
						className: p.a.heroImage,
						userName: e.supporterInfo.displayName,
						iconUrl: null === (t = e.supporterInfo.icon) || void 0 === t ? void 0 : t.url,
						isNSFW: !!(null === (n = e.supporterInfo.profile) || void 0 === n ? void 0 : n.isNsfw)
					}))
				})), r.a.createElement("div", {
					className: p.a.heroesTitle
				}, (() => _ ? f ? b._({
					"*": "Join {subreddit supporters} supporters",
					_1: "Join 1 supporter"
				}, [b._plural(f, "subreddit supporters")], {
					hk: "20DKnU"
				}) : b._("Be the first supporter!", null, {
					hk: "3sBXnW"
				}) : f ? b._({
					"*": "Join {subreddit supporters} heroes",
					_1: "Join 1 hero"
				}, [b._plural(f, "subreddit supporters")], {
					hk: "2UisaO"
				}) : b._("Be the first hero!", null, {
					hk: "3TGmi4"
				}))())), r.a.createElement("p", {
					className: p.a.title
				}, P ? b._("Community perks are now unlocked!", null, {
					hk: "3xbTTM"
				}) : b._("{subredditName} needs {powerups needed} more Powerups to unlock perks for the entire community", [b._param("subredditName", m.displayText), b._param("powerups needed", C)], {
					hk: "4h33rf"
				})), r.a.createElement(c.a, {
					className: p.a.progressBar,
					progress: w
				}))
			}
		},
		"./src/reddit/components/Econ/Common/ModalCloseButton/index.m.less": function(e, t, n) {
			e.exports = {
				closeButton: "zV6beQLWIuWX5Q9SvWfDR",
				closeIcon: "_17EZNlAorafFssuT6Gw_Zg"
			}
		},
		"./src/reddit/components/Econ/Common/ModalCloseButton/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var s = n("./src/lib/classNames/index.ts"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = n("./src/reddit/components/Econ/Common/ModalCloseButton/index.m.less"),
				d = n.n(c);
			const {
				fbt: i
			} = n("./node_modules/fbt/lib/FbtPublic.js"), l = ({
				className: e,
				onClick: t
			}) => a.a.createElement("button", {
				onClick: t,
				className: Object(s.a)(e, d.a.closeButton),
				"aria-label": i._("Close", null, {
					hk: "3Qarlp"
				})
			}, a.a.createElement(o.b, {
				className: d.a.closeIcon
			}))
		},
		"./src/reddit/components/Econ/Common/PowerupRotatingBolt/index.m.less": function(e, t, n) {
			e.exports = {
				image: "_2UM9VBeA7xU3ro_DBfudN2"
			}
		},
		"./src/reddit/components/Econ/Common/PowerupRotatingBolt/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./src/config.ts"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./src/reddit/components/Econ/Common/PowerupRotatingBolt/index.m.less"),
				c = n.n(o);
			const d = e => a.a.createElement("div", {
				className: e.className
			}, a.a.createElement("picture", null, a.a.createElement("source", {
				srcSet: `${s.a.assetPath}/img/powerups/rotating-bolt.webp`,
				type: "image/webp"
			}), a.a.createElement("source", {
				srcSet: `${s.a.assetPath}/img/powerups/powerup.png`,
				type: "image/png"
			}), a.a.createElement("img", {
				className: c.a.image,
				src: `${s.a.assetPath}/img/powerups/powerup.png`,
				alt: "Rotating Powerups bolt"
			})))
		},
		"./src/reddit/components/Econ/PowerupsInFeedUnit/PostUnlock.m.less": function(e, t, n) {
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
		"./src/reddit/components/Econ/PowerupsInFeedUnit/PreUnlock.m.less": function(e, t, n) {
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
		"./src/reddit/components/Econ/PowerupsInFeedUnit/UpdateAvatarConfirmationModal/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Econ/PowerupsInFeedUnit/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "MAX_DISPLAY_COUNT_ON_LOCKED_SUBREDDIT", (function() {
				return B
			})), n.d(t, "MAX_DISPLAY_COUNT_ON_UNLOCKED_SUBREDDIT", (function() {
				return F
			}));
			var s, r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/reddit/constants/localStorage.ts"),
				d = n("./src/reddit/helpers/localStorage/index.ts"),
				i = n("./src/reddit/helpers/trackers/powerups.ts"),
				l = n("./src/reddit/hooks/useTracking.ts"),
				u = n("./src/reddit/constants/gold.ts"),
				m = n("./src/reddit/constants/posts.ts"),
				p = n("./src/reddit/selectors/experiments/econ/index.ts"),
				b = n("./src/reddit/selectors/subreddit.ts"),
				E = n("./src/reddit/selectors/gold/powerups/index.ts");
			! function(e) {
				e[e.POWERUPS_DEFAULT = 0] = "POWERUPS_DEFAULT", e[e.POWERUPS_COMMUNITY_GEAR = 1] = "POWERUPS_COMMUNITY_GEAR", e[e.UNLOCKED_COMMUNITY_GEAR = 2] = "UNLOCKED_COMMUNITY_GEAR", e[e.HIDDEN = 3] = "HIDDEN"
			}(s || (s = {}));
			var _ = n("./src/lib/classNames/index.ts"),
				N = n("./src/reddit/controls/Button/index.tsx"),
				h = n("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				O = n("./src/reddit/components/Econ/PowerupsInFeedUnit/PostUnlock.m.less"),
				f = n.n(O),
				x = n("./src/higherOrderComponents/asModal/index.tsx"),
				P = n("./src/lib/opener/index.ts"),
				I = n("./src/reddit/components/Econ/Common/ModalCloseButton/index.tsx"),
				w = n("./src/reddit/components/Econ/PowerupsInFeedUnit/UpdateAvatarConfirmationModal/index.m.less"),
				C = n.n(w);
			const {
				fbt: v
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var k = Object(x.a)(({
				closeModal: e
			}) => {
				const t = v._("Nice! Ready to update your avatar?", null, {
						hk: "20KFjx"
					}),
					n = v._("Avatars and avatar visual elements © Reddit.", null, {
						hk: "2Y4y3g"
					}),
					s = v._("Learn more", null, {
						hk: "2S4fxr"
					});
				return a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
					className: C.a.modal
				}, a.a.createElement("div", {
					className: C.a.header
				}, t, a.a.createElement(I.a, {
					onClick: e
				})), a.a.createElement("div", {
					className: C.a.contentWrapper
				}, a.a.createElement(h.a, {
					className: C.a.avatarTop
				}), a.a.createElement("div", {
					className: C.a.legalTextContainer
				}, a.a.createElement("span", null, n), a.a.createElement("a", {
					href: u.c,
					target: P.d.BLANK,
					className: C.a.learnMoreLink
				}, s))), a.a.createElement("div", {
					className: C.a.buttonsRow
				}, a.a.createElement(N.s, {
					className: C.a.button,
					priority: N.b.Secondary,
					onClick: e
				}, v._("Go Back", null, {
					hk: "1EHXc5"
				})), a.a.createElement(N.s, {
					className: C.a.button,
					priority: N.b.Primary,
					onClick: () => {
						console.log("send mutation")
					}
				}, v._("Yes", null, {
					hk: "27lXsL"
				})))))
			});
			const {
				fbt: j
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var U = ({
					className: e
				}) => {
					const [t, n] = Object(r.useState)(!1), s = () => n(!1);
					return a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
						className: Object(_.a)(f.a.container, e)
					}, a.a.createElement("div", {
						className: f.a.header
					}, a.a.createElement(h.a, {
						className: f.a.powerupsBolt
					}), a.a.createElement("div", {
						className: f.a.headerText
					}, a.a.createElement("h2", {
						className: f.a.title
					}, j._("Get the most out of Powerups", null, {
						hk: "4mSV6O"
					})), a.a.createElement("h3", {
						className: f.a.subtitle
					}, j._("Show your support with exclusive gear", null, {
						hk: "2rq6cz"
					})))), a.a.createElement("div", {
						className: f.a.contentWrapper
					}, a.a.createElement(h.a, {
						className: f.a.avatarTop
					})), a.a.createElement("div", {
						className: f.a.buttonWrapper
					}, a.a.createElement(N.s, {
						priority: N.b.Secondary,
						onClick: () => {
							(() => n(!0))()
						},
						isFullWidth: !0
					}, j._("Wear your community gear", null, {
						hk: "1Tt2q6"
					})))), t && a.a.createElement(k, {
						withOverlay: !0,
						closeModal: s,
						onOverlayClick: s
					}))
				},
				g = n("./src/config.ts"),
				D = n("./src/reddit/actions/gold/powerups.ts"),
				A = n("./src/reddit/components/Econ/Common/JoinHeroes/index.tsx"),
				R = n("./src/reddit/components/Econ/Common/PowerupRotatingBolt/index.tsx"),
				S = n("./src/reddit/components/PowerupsCtaButton/index.tsx"),
				T = n("./src/reddit/components/Econ/PowerupsInFeedUnit/PreUnlock.m.less"),
				y = n.n(T);
			const {
				fbt: M
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var W = ({
				className: e,
				subredditId: t,
				inFeedDisplayState: n
			}) => {
				const r = Object(o.d)(),
					c = Object(l.a)(),
					d = Object(o.e)(e => Object(b.Q)(e, {
						subredditId: t
					})),
					u = Object(o.e)(p.h);
				if (n === s.HIDDEN) return null;
				const m = u ? M._("Support the whole community", null, {
					hk: "oOdGv"
				}) : M._("Unlock perks for the whole community", null, {
					hk: "1DllPY"
				});
				return a.a.createElement("div", {
					className: Object(_.a)(y.a.container, e)
				}, n === s.POWERUPS_DEFAULT ? a.a.createElement(() => a.a.createElement(a.a.Fragment, null, a.a.createElement(R.a, {
					className: y.a.powerupsIcon
				}), a.a.createElement("h2", {
					className: y.a.title
				}, M._("Powerup {subreddit name}", [M._param("subreddit name", d.displayText)], {
					hk: "2zwNZk"
				})), a.a.createElement("h3", {
					className: y.a.subtitle
				}, m)), null) : a.a.createElement(() => a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
					className: y.a.communityGearAvatar,
					"data-testid": "community-gear-avatar",
					style: {
						backgroundImage: `url("${g.a.assetPath}/img/snoovatars/snoovatar_6.png")`
					}
				}), a.a.createElement("h2", {
					className: y.a.title
				}, M._("Powerup to unlock community gear", null, {
					hk: "HyBcY"
				}))), null), a.a.createElement(A.a, {
					className: y.a.supporters,
					subredditId: t,
					onClick: e => {
						c(Object(i.e)("post_upsell")), r(e ? Object(D.h)(t) : Object(D.f)("in_feed_unit"))
					}
				}), a.a.createElement(S.a, {
					className: y.a.button,
					onClick: () => {
						c(Object(i.m)()), r(Object(D.f)("in_feed_unit"))
					}
				}))
			};
			const {
				fbt: L
			} = n("./node_modules/fbt/lib/FbtPublic.js"), B = 2, F = 1;
			t.default = ({
				subredditId: e,
				className: t
			}) => {
				const n = Object(l.a)(),
					_ = Object(o.e)(t => Object(b.Q)(t, {
						subredditId: e
					})),
					N = Object(o.e)(e => ((e, {
						subredditId: t,
						subredditName: n
					}) => {
						const r = Object(E.v)(e, {
								subredditId: t
							}),
							a = Object(b.cb)(e, {
								identifier: {
									name: n,
									type: m.a.SUBREDDIT
								}
							}),
							o = Object(E.k)(e, {
								subredditId: t
							}),
							c = Object(E.p)(e, {
								subredditId: t
							});
						return o || r ? c && a && Object(p.j)(e) ? s.UNLOCKED_COMMUNITY_GEAR : s.HIDDEN : u.i.includes(t) && a && Object(p.j)(e) ? s.POWERUPS_COMMUNITY_GEAR : s.POWERUPS_DEFAULT
					})(e, {
						subredditId: _.id,
						subredditName: _.name
					})),
					h = N === s.UNLOCKED_COMMUNITY_GEAR,
					O = h ? c.b.POWERUPS_UNLOCKED_INFEED_UNIT_VISIBILITY_STORE : c.b.POWERUPS_INFEED_UNIT_VISIBILITY_STORE,
					[f, x] = Object(r.useState)(s.HIDDEN);
				switch (Object(r.useEffect)(() => {
					const t = ((e, t, n) => {
						return Object(d.j)(t, e) >= (n ? F : B)
					})(e, O, h) ? s.HIDDEN : N;
					x(t)
				}, [e, O, N, x, h]), Object(r.useEffect)(() => {
					f !== s.HIDDEN && (Object(d.R)(O, e), h || n(Object(i.n)()))
				}, [f, O, e, h, n]), f) {
					case s.POWERUPS_DEFAULT:
					case s.POWERUPS_COMMUNITY_GEAR:
						return a.a.createElement(W, {
							className: t,
							subredditId: e,
							inFeedDisplayState: f
						});
					case s.UNLOCKED_COMMUNITY_GEAR:
						return a.a.createElement(U, {
							className: t,
							subredditId: e
						});
					default:
						return null
				}
			}
		},
		"./src/reddit/constants/gold.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "f", (function() {
				return o
			})), n.d(t, "g", (function() {
				return c
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "k", (function() {
				return i
			})), n.d(t, "j", (function() {
				return l
			})), n.d(t, "h", (function() {
				return u
			})), n.d(t, "i", (function() {
				return m
			})), n.d(t, "c", (function() {
				return p
			}));
			const s = "ModerationPage--Modal--AddAward",
				r = "ModerationPage--Modal--DeleteAwardConfirmation",
				a = 20,
				o = 4,
				c = 1e4,
				d = .2,
				i = .1,
				l = .1,
				u = 500,
				m = ["t5_2qqoq", "t5_37xo2", "t5_2r60y", "t5_mvcq5", "t5_4e4fpz", "t5_4e4ib9", "t5_4y3poa", "t5_4hmhx4"],
				p = "https://reddit.zendesk.com/hc/en-us/articles/360050641932"
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Econ-PowerupsInFeedUnit-index-tsx.d2a3c9ec13792c0359be.js.map