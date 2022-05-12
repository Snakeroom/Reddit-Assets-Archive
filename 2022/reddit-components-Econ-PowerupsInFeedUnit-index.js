// https://www.redditstatic.com/desktop2x/reddit-components-Econ-PowerupsInFeedUnit-index.d27132ab1656c7e3009a.js
// Retrieved at 5/12/2022, 1:20:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Econ-PowerupsInFeedUnit-index"], {
		"./src/reddit/actions/snoovatar.ts": function(e, t, a) {
			"use strict";
			a.d(t, "b", (function() {
				return m
			})), a.d(t, "a", (function() {
				return v
			})), a.d(t, "e", (function() {
				return f
			})), a.d(t, "c", (function() {
				return h
			})), a.d(t, "d", (function() {
				return w
			}));
			var s = a("./src/lib/initializeClient/installReducer.ts"),
				r = a("./src/lib/makeActionCreator/index.ts"),
				o = a("./src/lib/sentry/index.ts"),
				n = a("./src/config.ts"),
				i = a("./src/lib/constants/index.ts"),
				c = a("./src/lib/makeApiRequest/index.ts"),
				d = a("./src/lib/omitHeaders/index.ts"),
				l = a("./src/reddit/constants/headers.ts");
			var u = a("./src/reddit/reducers/features/avatar/index.ts"),
				_ = a("./src/reddit/selectors/avatar.ts"),
				p = a("./src/reddit/actions/users.ts");
			Object(s.a)({
				features: {
					avatar: u.a
				}
			});
			const m = "SET_AVATAR_USER",
				b = Object(r.a)(m),
				v = "RANDOM_AVATAR_LOADED",
				E = Object(r.a)(v),
				f = (e, t, a) => async (s, r, o) => {
					let {
						apiContext: u
					} = o;
					var m, b, v, E;
					const f = Object(_.b)(r()),
						h = await (async (e, t, a, s, r) => Object(c.a)(Object(d.a)(e, [l.a]), {
							endpoint: `${n.a.snoovatarUrl}/api/snoovatar?skip_telemetry=true`,
							method: i.jb.POST,
							headers: {
								"Content-Type": "application/json ",
								"X-CSRF-Token": r || ""
							},
							data: {
								accessory_ids: t,
								styles: a,
								...s
							}
						}))(u(), e, t, a, f);
					if (!h.ok) throw new Error("User avatar failed to save");
					return s(Object(p.A)(h.body)), {
						accountIcon: null === (b = null === (m = h.body) || void 0 === m ? void 0 : m.avatar) || void 0 === b ? void 0 : b.headshot_image_url,
						fullBodySnoovatar: null === (E = null === (v = h.body) || void 0 === v ? void 0 : v.avatar) || void 0 === E ? void 0 : E.image_url
					}
				}, h = () => async (e, t, a) => {
					let {
						apiContext: s
					} = a;
					try {
						const t = await (async e => Object(c.a)(Object(d.a)(e, [l.a]), {
							endpoint: `${n.a.snoovatarUrl}/api/account`,
							method: i.jb.GET
						}))(s());
						t.ok && e(b(t.body))
					} catch (r) {
						o.c.captureException(r)
					}
				}, w = () => async (e, t, a) => {
					let {
						apiContext: s
					} = a;
					try {
						const t = await (async e => Object(c.a)(Object(d.a)(e, [l.a]), {
							endpoint: `${n.a.snoovatarUrl}/api/snoovatars/random:byId`,
							method: i.jb.GET
						}))(s());
						t.ok && e(E(t.body))
					} catch (r) {
						o.c.captureException(r)
					}
				}
		},
		"./src/reddit/components/Econ/Common/JoinHeroes/index.m.less": function(e, t, a) {
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
		"./src/reddit/components/Econ/Common/JoinHeroes/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return p
			}));
			var s = a("./node_modules/react/index.js"),
				r = a.n(s),
				o = a("./node_modules/react-redux/es/index.js"),
				n = a("./src/lib/classNames/index.ts"),
				i = a("./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/PowerupsProgressBar.tsx"),
				c = a("./src/reddit/components/UserIcon/index.tsx"),
				d = a("./src/reddit/selectors/gold/powerups/index.ts"),
				l = a("./src/reddit/components/Econ/Common/JoinHeroes/index.m.less"),
				u = a.n(l);
			const {
				fbt: _
			} = a("./node_modules/fbt/lib/FbtPublic.js"), p = e => {
				let {
					className: t,
					subredditId: a,
					onClick: s
				} = e;
				const l = Object(o.e)(e => Object(d.k)(e, {
						subredditId: a
					})),
					p = Object(o.e)(e => Object(d.m)(e, {
						subredditId: a
					}));
				if (!l) return null;
				const {
					tier: m,
					count: b,
					tiersInfo: v,
					supportersCount: E
				} = l, f = v[1].powerupsCost, h = m >= 2, w = (null == p ? void 0 : p.filter(e => {
					var t;
					return !!(null === (t = e.supporterInfo) || void 0 === t ? void 0 : t.displayName)
				}).slice(0, 2)) || [], O = Math.min(b, f) / f, g = f - b;
				return r.a.createElement("div", {
					className: Object(n.a)(u.a.container, t, {
						[u.a.containerClickable]: !!s
					}),
					"data-testid": "join-heroes",
					onClick: () => null == s ? void 0 : s(b)
				}, r.a.createElement("div", {
					className: u.a.heroes
				}, !!w.length && r.a.createElement("div", {
					className: Object(n.a)(u.a.heroesAvatarContainer, {
						[u.a.twoAvatarsContainer]: w.length > 1
					})
				}, w.map(e => {
					var t, a;
					return r.a.createElement("div", {
						className: u.a.heroesAvatar,
						key: e.supporterInfo.id
					}, r.a.createElement(c.a, {
						className: u.a.heroImage,
						userName: e.supporterInfo.displayName,
						iconUrl: null === (t = e.supporterInfo.icon) || void 0 === t ? void 0 : t.url,
						isNSFW: !!(null === (a = e.supporterInfo.profile) || void 0 === a ? void 0 : a.isNsfw)
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
				}, h ? _._("Community perks are now unlocked!", null, {
					hk: "3xbTTM"
				}) : _._({
					"*": "{powerups needed} more Powerups will unlock perks for the community",
					_1: "{powerups needed} more Powerup will unlock perks for the community"
				}, [_._param("powerups needed", g), _._plural(g)], {
					hk: "2aHf4k"
				})), r.a.createElement(i.a, {
					className: u.a.progressBar,
					progress: O
				}))
			}
		},
		"./src/reddit/components/Econ/Common/ModalCloseButton/index.m.less": function(e, t, a) {
			e.exports = {
				closeButton: "zV6beQLWIuWX5Q9SvWfDR",
				highContrast: "_19iGSTvU7FOqhpDpMWKtDr",
				closeIcon: "_17EZNlAorafFssuT6Gw_Zg"
			}
		},
		"./src/reddit/components/Econ/Common/ModalCloseButton/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return l
			}));
			var s = a("./src/lib/classNames/index.ts"),
				r = a("./node_modules/react/index.js"),
				o = a.n(r),
				n = a("./src/reddit/components/ModalStyledComponents/index.tsx"),
				i = a("./src/reddit/components/Econ/Common/ModalCloseButton/index.m.less"),
				c = a.n(i);
			const {
				fbt: d
			} = a("./node_modules/fbt/lib/FbtPublic.js"), l = e => {
				let {
					className: t,
					highContrast: a,
					onClick: r
				} = e;
				return o.a.createElement("button", {
					onClick: r,
					className: Object(s.a)(c.a.closeButton, {
						[c.a.highContrast]: a
					}, t),
					"aria-label": d._("Close", null, {
						hk: "3Qarlp"
					})
				}, o.a.createElement(n.b, {
					className: c.a.closeIcon
				}))
			}
		},
		"./src/reddit/components/Econ/PowerupsInFeedUnit/PostUnlock/ApplyFromPremiumUnit.m.less": function(e, t, a) {
			e.exports = {
				powerupsIcon: "_2uNsATPrzL4yprAYn1bgAq",
				container: "_3tZDqkm04pN0jRZCQWdnnj",
				title: "J2b6z_YpR1EFwlnmZXj_L",
				subtitle: "_3nx0CetCO-ndQlUSq4tL5d",
				button: "_1Ud8Fg6fg8z0GmHHNKYuJT"
			}
		},
		"./src/reddit/components/Econ/PowerupsInFeedUnit/PostUnlock/CommunityGearUnit.m.less": function(e, t, a) {
			e.exports = {
				container: "_37a4QiPrsVtozH4qkNZwDj",
				header: "bX7tNotjfQnMB5sOh-EW_",
				powerupsBolt: "_2ESHZ6sIUs88srzVghBenH",
				headerText: "_14PHStRBtEebDMSDZ5gwap",
				title: "_2m5AtT2c7vrZXTy6boHoWC",
				subtitle: "_3kjiDzYc4g7JRxNgi_6Iw8",
				contentWrapper: "k8OChSaeB7FZt7X8KAEE3",
				avatarTop: "_20FNJCIiSq78ipBmWSou11",
				buttonWrapper: "_20LKMnJw4sWV3Hg4KP7SiO"
			}
		},
		"./src/reddit/components/Econ/PowerupsInFeedUnit/PostUnlock/UpdateAvatarConfirmationModal/index.m.less": function(e, t, a) {
			e.exports = {
				modal: "tN9N11BZQzYVXGR9sYOH",
				header: "Ko7mD2xrA_T-hQnAg7bhU",
				contentWrapper: "_1s5hpVw5eWY5fVoZu-xj38",
				avatarTop: "_3APzLANFCmQxIfBEaPQ6k5",
				legalTextContainer: "_2n_vOmlSXLcswAhWo-jIhQ",
				learnMoreLink: "_3VKGwE-5XCUuOCDowqOGIn",
				buttonsRow: "_2CEDH2oWtfy4MrBEpw9HFT",
				button: "UCyCqzqk4J3lkNPrxCX4r"
			}
		},
		"./src/reddit/components/Econ/PowerupsInFeedUnit/PreUnlock.m.less": function(e, t, a) {
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
		"./src/reddit/components/Econ/PowerupsInFeedUnit/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var s, r = a("./node_modules/react/index.js"),
				o = a.n(r),
				n = a("./node_modules/react-redux/es/index.js"),
				i = a("./src/reddit/constants/localStorage.ts"),
				c = a("./src/reddit/helpers/localStorage/index.ts"),
				d = a("./src/reddit/helpers/trackers/powerups.ts"),
				l = a("./src/reddit/hooks/useTracking.ts"),
				u = a("./src/reddit/constants/posts.ts"),
				_ = a("./src/reddit/selectors/experiments/econ/index.ts"),
				p = a("./src/reddit/selectors/experiments/i18n/hiddenPowerups.ts"),
				m = a("./src/reddit/selectors/subreddit.ts"),
				b = a("./src/reddit/selectors/user.ts"),
				v = a("./src/reddit/selectors/gold/powerups/index.ts");
			! function(e) {
				e[e.POWERUPS_DEFAULT = 0] = "POWERUPS_DEFAULT", e[e.POWERUPS_COMMUNITY_GEAR = 1] = "POWERUPS_COMMUNITY_GEAR", e[e.UNLOCKED_COMMUNITY_GEAR = 2] = "UNLOCKED_COMMUNITY_GEAR", e[e.UNLOCKED_UNAPPLIED_FROM_PREMIUM = 3] = "UNLOCKED_UNAPPLIED_FROM_PREMIUM", e[e.HIDDEN = 4] = "HIDDEN"
			}(s || (s = {}));
			var E = a("./src/config.ts"),
				f = a("./src/lib/classNames/index.ts"),
				h = a("./src/reddit/actions/gold/powerups.ts"),
				w = a("./src/reddit/components/PowerupsCtaButton/index.tsx"),
				O = a("./src/reddit/components/PowerupsSidebar/PowerupsBackground.tsx"),
				g = a("./src/reddit/components/Econ/PowerupsInFeedUnit/PostUnlock/ApplyFromPremiumUnit.m.less"),
				y = a.n(g);
			const {
				fbt: C
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			var x = e => {
					let {
						subredditId: t,
						className: a
					} = e;
					const s = Object(n.d)(),
						r = Object(l.a)(),
						i = Object(n.e)(e => Object(m.U)(e, {
							subredditId: t
						}).displayText);
					return o.a.createElement("div", {
						className: Object(f.a)(y.a.container, a)
					}, o.a.createElement("img", {
						className: y.a.powerupsIcon,
						src: `${E.a.assetPath}/img/powerups/powerups-rangers.png`,
						"data-testid": "powerups-icon-rangers"
					}), o.a.createElement("h2", {
						className: y.a.title
					}, C._("Use your Powerup to support {subreddit name}", [C._param("subreddit name", i)], {
						hk: "2OMTwG"
					})), o.a.createElement("h3", {
						className: y.a.subtitle
					}, C._("Go ahead, show them some love!", null, {
						hk: "3NzF6j"
					})), o.a.createElement(w.a, {
						className: y.a.button,
						onClick: () => {
							r(Object(d.r)()), s(Object(h.g)("in_feed_unit"))
						}
					}), o.a.createElement(O.a, {
						space: O.b.INFEED_UNIT
					}))
				},
				N = a("./src/reddit/controls/Button/index.tsx"),
				I = a("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				U = a("./src/reddit/components/Econ/PowerupsInFeedUnit/PostUnlock/CommunityGearUnit.m.less"),
				P = a.n(U),
				j = a("./src/higherOrderComponents/asModal/index.tsx"),
				k = a("./src/lib/opener/index.ts"),
				A = a("./src/reddit/actions/snoovatar.ts"),
				M = a("./src/reddit/actions/toaster.ts"),
				T = a("./src/reddit/actions/urlRequested.ts"),
				R = a("./src/reddit/components/Econ/Common/ModalCloseButton/index.tsx"),
				D = a("./src/reddit/constants/avatars.ts"),
				S = a("./src/reddit/controls/LoadingIcon/index.tsx"),
				F = a("./src/reddit/helpers/avatar/index.ts"),
				B = a("./src/reddit/helpers/trackers/snoovatar.ts"),
				L = a("./src/reddit/models/Avatar/accessories.ts"),
				q = a("./src/reddit/models/Toast/index.ts"),
				W = a("./src/reddit/selectors/avatar.ts"),
				G = a("./src/reddit/components/Econ/PowerupsInFeedUnit/PostUnlock/UpdateAvatarConfirmationModal/index.m.less"),
				H = a.n(G);
			const {
				fbt: K
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			var Y = Object(j.a)(e => {
				let {
					subredditId: t,
					closeModal: a
				} = e;
				const s = Object(l.a)(),
					i = Object(n.d)(),
					c = Object(n.e)(W.a),
					[u, _] = Object(r.useState)(!1);
				Object(r.useEffect)(() => {
					s(Object(d.o)()), i(Object(A.c)())
				}, [i, s]);
				const p = async () => i(Object(T.a)("/user/me", !0)), m = K._("Nice! Ready to update your avatar?", null, {
					hk: "20KFjx"
				}), {
					legalCopy: b,
					learnMoreText: v,
					url: f
				} = D.a;
				return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
					className: H.a.modal
				}, o.a.createElement("div", {
					className: H.a.header
				}, m, o.a.createElement(R.a, {
					onClick: a
				})), o.a.createElement("div", {
					className: H.a.contentWrapper
				}, o.a.createElement("img", {
					alt: "Avatar wearing community gear top",
					className: H.a.avatarTop,
					"data-testid": "community-gear-avatar",
					src: `${E.a.assetPath}/img/powerups/communityGear/${t}.png`
				}), o.a.createElement("div", {
					className: H.a.legalTextContainer
				}, o.a.createElement("span", null, b()), o.a.createElement("a", {
					href: f,
					target: k.d.BLANK,
					className: H.a.learnMoreLink,
					rel: k.c
				}, v()))), o.a.createElement("div", {
					className: H.a.buttonsRow
				}, o.a.createElement(N.t, {
					className: H.a.button,
					priority: N.c.Secondary,
					onClick: a
				}, K._("Go Back", null, {
					hk: "1EHXc5"
				})), o.a.createElement(N.t, {
					className: H.a.button,
					priority: N.c.Primary,
					onClick: async () => {
						if (s(Object(d.n)()), !c) return;
						const e = c.snoovatar,
							r = (null == e ? void 0 : e.styles) || {},
							o = (null == e ? void 0 : e.accessories) || [],
							n = Object(F.a)(o, [L.d[t]]).map(e => e.id);
						try {
							_(!0), s(Object(B.f)("powerups_post_upsell"));
							const e = await i(Object(A.e)(n, r, {
								set_avatar_to_profile: !0,
								source: "powerups_post_upsell"
							}));
							_(!1), a(), i(Object(M.f)({
								customIconAsset: e.accountIcon,
								duration: M.a,
								kind: q.b.SuccessCommunityGreen,
								text: K._("Success!", null, {
									hk: "4ieEVt"
								}),
								buttonText: K._("View profile", null, {
									hk: "IGoMl"
								}),
								buttonAction: p
							}))
						} catch {
							_(!1), i(Object(M.f)({
								duration: M.a,
								kind: q.b.Error,
								text: K._("Something went wrong!", null, {
									hk: "qD6OP"
								})
							}))
						}
					},
					disabled: u
				}, u ? o.a.createElement(S.a, {
					sizePx: 12,
					center: !0
				}) : o.a.createElement(o.a.Fragment, null, K._("Yes", null, {
					hk: "27lXsL"
				}))))))
			});
			const {
				fbt: z
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			var V = e => {
					let {
						className: t,
						subredditId: a
					} = e;
					const s = Object(l.a)(),
						[n, i] = Object(r.useState)(!1),
						c = () => i(!1);
					return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						className: Object(f.a)(P.a.container, t)
					}, o.a.createElement("div", {
						className: P.a.header
					}, o.a.createElement(I.a, {
						className: P.a.powerupsBolt
					}), o.a.createElement("div", {
						className: P.a.headerText
					}, o.a.createElement("h2", {
						className: P.a.title
					}, z._("Get the most out of Powerups", null, {
						hk: "4mSV6O"
					})), o.a.createElement("h3", {
						className: P.a.subtitle
					}, z._("Show your support with exclusive gear", null, {
						hk: "2rq6cz"
					})))), o.a.createElement("div", {
						className: P.a.contentWrapper
					}, o.a.createElement("img", {
						alt: "Avatar wearing community gear top",
						className: P.a.avatarTop,
						"data-testid": "community-gear-avatar",
						src: `${E.a.assetPath}/img/powerups/communityGear/withoutLegs/${a}.png`
					})), o.a.createElement("div", {
						className: P.a.buttonWrapper
					}, o.a.createElement(N.t, {
						priority: N.c.Secondary,
						onClick: () => {
							s(Object(d.m)()), (() => i(!0))()
						},
						isFullWidth: !0
					}, z._("Wear your community gear", null, {
						hk: "1Tt2q6"
					})))), n && o.a.createElement(Y, {
						withOverlay: !0,
						closeModal: c,
						onOverlayClick: c,
						subredditId: a
					}))
				},
				X = a("./src/reddit/components/Econ/Common/JoinHeroes/index.tsx"),
				J = a("./src/reddit/components/Econ/PowerupsInFeedUnit/PreUnlock.m.less"),
				Q = a.n(J);
			const {
				fbt: Z
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			var $ = e => {
				let {
					className: t,
					subredditId: a,
					inFeedDisplayState: r
				} = e;
				const i = Object(n.d)(),
					c = Object(l.a)(),
					u = Object(n.e)(e => Object(m.U)(e, {
						subredditId: a
					}));
				if (r === s.HIDDEN) return null;
				const _ = Z._("Unlock perks for the whole community", null, {
					hk: "1DllPY"
				});
				return o.a.createElement("div", {
					className: Object(f.a)(Q.a.container, t)
				}, r === s.POWERUPS_DEFAULT ? o.a.createElement(() => o.a.createElement(o.a.Fragment, null, o.a.createElement("img", {
					className: Q.a.powerupsIcon,
					src: `${E.a.assetPath}/img/powerups/powerups-rangers.png`,
					"data-testid": "powerups-icon-rangers"
				}), o.a.createElement("h2", {
					className: Q.a.title
				}, Z._("Powerup {subreddit name}", [Z._param("subreddit name", u.displayText)], {
					hk: "2zwNZk"
				})), o.a.createElement("h3", {
					className: Q.a.subtitle
				}, _)), null) : o.a.createElement(() => o.a.createElement(o.a.Fragment, null, o.a.createElement("img", {
					alt: "Avatar wearing community gear",
					className: Q.a.communityGearAvatar,
					"data-testid": "community-gear-avatar",
					src: `${E.a.assetPath}/img/powerups/communityGear/withoutLegs/${a}.png`
				}), o.a.createElement("h2", {
					className: Q.a.title
				}, Z._("Unlock gear for {subreddit name}", [Z._param("subreddit name", u.displayText)], {
					hk: "208mAS"
				}))), null), o.a.createElement(X.a, {
					className: Q.a.supporters,
					subredditId: a,
					onClick: e => {
						c(Object(d.e)("post_upsell")), i(e ? Object(h.i)(a) : Object(h.g)("in_feed_unit"))
					}
				}), o.a.createElement(w.a, {
					className: Q.a.button,
					onClick: () => {
						r === s.POWERUPS_DEFAULT ? c(Object(d.q)()) : c(Object(d.t)()), i(Object(h.g)("in_feed_unit"))
					}
				}), o.a.createElement(O.a, {
					space: O.b.INFEED_UNIT
				}))
			};
			t.default = e => {
				let {
					subredditId: t,
					className: a
				} = e;
				const E = Object(l.a)(),
					f = Object(n.e)(e => Object(m.U)(e, {
						subredditId: t
					})),
					[h, w] = Object(r.useState)(s.HIDDEN),
					O = Object(n.e)(e => ((e, t) => {
						let {
							subredditId: a,
							subredditName: r
						} = t;
						const o = Object(v.x)(e, {
								subredditId: a
							}),
							n = Object(m.gb)(e, {
								identifier: {
									name: r,
									type: u.a.SUBREDDIT
								}
							}),
							i = Object(v.l)(e, {
								subredditId: a
							}),
							c = Object(v.q)(e, {
								subredditId: a
							}),
							d = Object(v.g)(e, {
								subredditId: a
							}),
							l = Object(v.w)(e) && Object(b.v)(e);
						return Object(p.a)(e) && Object(p.b)(a) ? s.HIDDEN : i || o ? c && n && Object(_.h)(e) ? s.UNLOCKED_COMMUNITY_GEAR : l ? s.UNLOCKED_UNAPPLIED_FROM_PREMIUM : s.HIDDEN : d && n && Object(_.h)(e) ? s.POWERUPS_COMMUNITY_GEAR : s.POWERUPS_DEFAULT
					})(e, {
						subredditId: f.id,
						subredditName: f.name
					})),
					g = (e => e === s.POWERUPS_DEFAULT || e === s.POWERUPS_COMMUNITY_GEAR ? i.b.POWERUPS_INFEED_UNIT_VISIBILITY_STORE : e === s.UNLOCKED_UNAPPLIED_FROM_PREMIUM ? i.b.POWERUPS_UNAPPLIED_PREMIUM_INFEED_UNIT_VISIBILITY_STORE : e === s.UNLOCKED_COMMUNITY_GEAR ? i.b.POWERUPS_UNLOCKED_INFEED_UNIT_VISIBILITY_STORE : null)(O);
				switch (Object(r.useEffect)(() => {
					const e = ((e, t) => {
						if (!t) return !0;
						return Object(c.j)(t, e) >= 2
					})(t, g) ? s.HIDDEN : O;
					w(e)
				}, [t, g, O, w]), Object(r.useEffect)(() => {
					if (h === s.HIDDEN) return;
					(() => h === s.UNLOCKED_COMMUNITY_GEAR ? E(Object(d.p)()) : h === s.POWERUPS_DEFAULT ? E(Object(d.v)()) : h === s.POWERUPS_COMMUNITY_GEAR ? E(Object(d.u)()) : h === s.UNLOCKED_UNAPPLIED_FROM_PREMIUM ? E(Object(d.s)()) : void 0)(), Object(c.S)(g, t)
				}, [h, w, g, t, E, O]), h) {
					case s.POWERUPS_DEFAULT:
					case s.POWERUPS_COMMUNITY_GEAR:
						return o.a.createElement($, {
							className: a,
							subredditId: t,
							inFeedDisplayState: h
						});
					case s.UNLOCKED_UNAPPLIED_FROM_PREMIUM:
						return o.a.createElement(x, {
							className: a,
							subredditId: t
						});
					case s.UNLOCKED_COMMUNITY_GEAR:
						return o.a.createElement(V, {
							className: a,
							subredditId: t
						});
					default:
						return null
				}
			}
		},
		"./src/reddit/components/ModalStyledComponents/index.m.less": function(e, t, a) {
			e.exports = {
				CloseIcon: "_3XSQHPxjCTSWWZh_u-d0Xf",
				closeIcon: "_3XSQHPxjCTSWWZh_u-d0Xf",
				ModalBody: "_2R3RlhymCOkPrz9TusvcPq",
				modalBody: "_2R3RlhymCOkPrz9TusvcPq",
				ModalPostPreview: "HydQQ-TD4TUsVnxkYk_5F",
				modalPostPreview: "HydQQ-TD4TUsVnxkYk_5F",
				ModalText: "mFTHPdbEAklUs8yhT4Xm7",
				modalText: "mFTHPdbEAklUs8yhT4Xm7",
				ModalSmallText: "_3cwQrg-XvocnoG0U22wT8t",
				modalSmallText: "_3cwQrg-XvocnoG0U22wT8t",
				ModalDescriptionText: "_12g_PUGHD-w7T1w4Q3oTsq",
				modalDescriptionText: "_12g_PUGHD-w7T1w4Q3oTsq",
				ModalMetaText: "_27eskYssCs-urVW1uHI4YI",
				modalMetaText: "_27eskYssCs-urVW1uHI4YI",
				ModalFormItem: "_3xiY8nTCVp16qSb6CGW2Kv",
				modalFormItem: "_3xiY8nTCVp16qSb6CGW2Kv",
				ModalInput: "_20ZSV7ktyDYzPcd1UMQWZT",
				modalInput: "_20ZSV7ktyDYzPcd1UMQWZT",
				ModalInputLabel: "HVADn-LHFLaS8r6IBJWeq",
				modalInputLabel: "HVADn-LHFLaS8r6IBJWeq",
				ModalFooter: "_-0i7atRJ5NBsrRM5wuPpX",
				modalFooter: "_-0i7atRJ5NBsrRM5wuPpX",
				ModalHeader: "_1Fa5Xv7f16v5IC2Tq1m2Fy",
				modalHeader: "_1Fa5Xv7f16v5IC2Tq1m2Fy",
				ModalTitle: "eLnlHLGCDxjFf3jfGTcZu",
				modalTitle: "eLnlHLGCDxjFf3jfGTcZu",
				ModalMain: "_1uaasV6RaxBfRyVgQJdiKs",
				modalMain: "_1uaasV6RaxBfRyVgQJdiKs",
				ModalAnnotation: "gLlWG7Oj89Ost4_twUu8w",
				modalAnnotation: "gLlWG7Oj89Ost4_twUu8w",
				TextArea: "_2h8O7PjrCXfaJJWKrAxJPL",
				textArea: "_2h8O7PjrCXfaJJWKrAxJPL",
				WarningButton: "_17UyTSs2atqnKg9dIq5ERg",
				warningButton: "_17UyTSs2atqnKg9dIq5ERg",
				PrimaryButton: "_2X1FFYUx3jzlnbcegBC_Sr",
				primaryButton: "_2X1FFYUx3jzlnbcegBC_Sr",
				CancelButton: "_1QUX9-zZuGtifS6jJBUyh-",
				cancelButton: "_1QUX9-zZuGtifS6jJBUyh-",
				RemoveButton: "_2ulRgczjI5SWCMgSA1CNLj",
				removeButton: "_2ulRgczjI5SWCMgSA1CNLj",
				ConfirmButton: "JZC61-VzVuaiHdWuRUiSC",
				confirmButton: "JZC61-VzVuaiHdWuRUiSC"
			}
		},
		"./src/reddit/components/ModalStyledComponents/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "b", (function() {
				return p
			})), a.d(t, "e", (function() {
				return m
			})), a.d(t, "n", (function() {
				return b
			})), a.d(t, "p", (function() {
				return v
			})), a.d(t, "o", (function() {
				return E
			})), a.d(t, "f", (function() {
				return f
			})), a.d(t, "m", (function() {
				return h
			})), a.d(t, "h", (function() {
				return w
			})), a.d(t, "j", (function() {
				return O
			})), a.d(t, "k", (function() {
				return g
			})), a.d(t, "g", (function() {
				return y
			})), a.d(t, "i", (function() {
				return C
			})), a.d(t, "q", (function() {
				return x
			})), a.d(t, "d", (function() {
				return N
			})), a.d(t, "l", (function() {
				return I
			})), a.d(t, "t", (function() {
				return U
			})), a.d(t, "u", (function() {
				return P
			})), a.d(t, "r", (function() {
				return j
			})), a.d(t, "a", (function() {
				return k
			})), a.d(t, "s", (function() {
				return A
			})), a.d(t, "c", (function() {
				return M
			}));
			var s = a("./src/lib/classNames/index.ts"),
				r = a("./src/lib/lessComponent.tsx"),
				o = a("./node_modules/react/index.js"),
				n = a.n(o),
				i = a("./src/reddit/controls/Button/index.tsx"),
				c = a("./src/reddit/controls/Input/ModalInput.tsx"),
				d = a("./src/reddit/icons/svgs/Close/index.tsx"),
				l = a("./src/reddit/components/ModalStyledComponents/index.m.less"),
				u = a.n(l);

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
					}
					return e
				}).apply(this, arguments)
			}
			const p = r.a.wrapped(d.a, "CloseIcon", u.a),
				m = r.a.section("ModalBody", u.a),
				b = r.a.section("ModalPostPreview", u.a),
				v = r.a.p("ModalText", u.a),
				E = r.a.div("ModalSmallText", u.a),
				f = r.a.div("ModalDescriptionText", u.a),
				h = r.a.div("ModalMetaText", u.a),
				w = r.a.label("ModalFormItem", u.a),
				O = r.a.wrapped(c.a, "ModalInput", u.a),
				g = r.a.label("ModalInputLabel", u.a),
				y = r.a.footer("ModalFooter", u.a),
				C = r.a.header("ModalHeader", u.a),
				x = r.a.div("ModalTitle", u.a),
				N = r.a.div("ModalAnnotation", u.a),
				I = r.a.div("ModalMain", u.a),
				U = r.a.textarea("TextArea", u.a),
				P = r.a.wrapped(i.l, "WarningButton", u.a),
				j = r.a.wrapped(i.l, "PrimaryButton", u.a),
				k = r.a.wrapped(i.o, "CancelButton", u.a),
				A = r.a.wrapped(i.r, "RemoveButton", u.a),
				M = e => {
					let {
						className: t,
						...a
					} = e;
					return n.a.createElement(i.t, _({
						kind: i.b.Button,
						priority: i.c.Primary,
						className: Object(s.a)(u.a.ConfirmButton, t)
					}, a))
				}
		},
		"./src/reddit/constants/avatars.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return r
			}));
			var s = a("./node_modules/fbt/lib/FbtPublic.js");
			const r = {
				legalCopy: () => s.fbt._("Avatars and avatar visual elements © Reddit and its licensors.", null, {
					hk: "ZgN7P"
				}),
				learnMoreText: () => s.fbt._("Learn more", null, {
					hk: "1rlvT"
				}),
				url: "https://reddit.zendesk.com/hc/en-us/articles/360050641932"
			}
		},
		"./src/reddit/controls/Input/ModalInput.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/react/index.js"),
				r = a.n(s),
				o = a("./node_modules/react-redux/es/index.js"),
				n = a("./src/lib/classNames/index.ts"),
				i = a("./src/reddit/actions/modal.ts"),
				c = a("./src/reddit/constants/keycodes.ts"),
				d = a("./src/reddit/controls/Input/index.m.less"),
				l = a.n(d);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
					}
					return e
				}).apply(this, arguments)
			}
			class _ extends r.a.Component {
				constructor() {
					super(...arguments), this.handleKeyDown = e => {
						let {
							keyCode: t
						} = e;
						t === c.a.Escape && this.props.closeModal()
					}
				}
				render() {
					const {
						className: e,
						closeModal: t,
						...a
					} = this.props;
					return r.a.createElement("input", u({
						className: Object(n.a)(l.a.input, e),
						onKeyDown: this.handleKeyDown
					}, a))
				}
			}
			t.a = Object(o.b)(null, {
				closeModal: i.f
			})(_)
		},
		"./src/reddit/controls/Input/index.m.less": function(e, t, a) {
			e.exports = {
				input: "_3eoXtlBWKbkFYoOHUIcIgK"
			}
		},
		"./src/reddit/helpers/avatar/index.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return o
			}));
			var s = a("./node_modules/lodash/flatten.js"),
				r = a.n(s);
			const o = (e, t) => {
				const a = r()(t.map(e => e.assets.map(e => e.slot)));
				return [...e.filter(e => !e.assets.find(e => a.includes(e.slot))), ...t]
			}
		},
		"./src/reddit/helpers/trackers/snoovatar.ts": function(e, t, a) {
			"use strict";
			a.d(t, "g", (function() {
				return c
			})), a.d(t, "h", (function() {
				return d
			})), a.d(t, "i", (function() {
				return l
			})), a.d(t, "r", (function() {
				return u
			})), a.d(t, "l", (function() {
				return _
			})), a.d(t, "n", (function() {
				return p
			})), a.d(t, "c", (function() {
				return m
			})), a.d(t, "f", (function() {
				return b
			})), a.d(t, "q", (function() {
				return E
			})), a.d(t, "e", (function() {
				return f
			})), a.d(t, "k", (function() {
				return h
			})), a.d(t, "m", (function() {
				return O
			})), a.d(t, "j", (function() {
				return g
			})), a.d(t, "b", (function() {
				return y
			})), a.d(t, "p", (function() {
				return x
			})), a.d(t, "d", (function() {
				return N
			})), a.d(t, "a", (function() {
				return U
			})), a.d(t, "o", (function() {
				return P
			}));
			var s = a("./src/reddit/models/Gold/ProductOffer.ts"),
				r = a("./src/reddit/selectors/avatarMarketing.ts"),
				o = a("./src/reddit/selectors/telemetry.ts"),
				n = a("./src/reddit/selectors/user.ts");
			const i = {
					goldPurchase: {
						offerContext: s.a.AvatarNewGear
					}
				},
				c = e => t => {
					const a = {
						source: e,
						action: "click",
						noun: "edit_snoovatar",
						...o.n(t)
					};
					return Object(r.a)(t) && Object.assign(a, i), a
				},
				d = (e, t) => a => {
					const {
						id: s
					} = Object(n.zb)(a, {
						userName: t
					});
					return {
						source: e,
						action: "click",
						noun: "copy_avatar",
						...o.n(a),
						snoovatar: {
							userGenerated: s
						}
					}
				},
				l = e => ({
					...o.n(e),
					source: "avatar",
					action: "click",
					noun: "try_this_look_post",
					snoovatar: o.eb(e)
				}),
				u = e => ({
					...o.n(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "snoovatar_builder"
					},
					snoovatar: o.eb(e)
				}),
				_ = e => ({
					...o.n(e),
					source: "avatar_builder",
					action: "click",
					noun: "close",
					snoovatar: o.eb(e)
				}),
				p = e => ({
					source: "nav",
					action: "view",
					noun: "avatar_marketing",
					...o.n(e),
					...i
				}),
				m = e => ({
					source: "nav",
					action: "click",
					noun: "avatar_marketing",
					...o.n(e),
					...i
				}),
				b = e => t => ({
					...o.n(t),
					source: "snoovatar",
					action: "set_to_profile",
					noun: "snoovatar",
					snoovatar: {
						userGeneratedSource: e
					}
				}),
				v = e => t => a => ({
					source: "avatar",
					action: e,
					noun: "community_spaces",
					...o.n(a),
					snoovatar: o.eb(a),
					actionInfo: {
						paneName: "avatar_community_spaces" + (t ? "_control" : "")
					}
				}),
				E = v("view"),
				f = v("click"),
				h = v("dismiss"),
				w = (e, t, a) => () => s => ({
					source: e,
					action: t,
					noun: a,
					...o.n(s),
					snoovatar: o.eb(s)
				}),
				O = w("anniversary_achievement", "view", "anniversary_achievement"),
				g = w("anniversary_achievement", "click", "close"),
				y = w("anniversary_achievement", "click", "equip"),
				C = e => () => t => ({
					...o.n(t),
					source: "gold_top_nav",
					action: e,
					noun: "quick_create_cta"
				}),
				x = C("view"),
				N = C("click"),
				I = (e, t, a) => s => ({
					source: e,
					action: t,
					noun: a,
					...o.n(s),
					actionInfo: {
						pageType: "onboarding"
					},
					snoovatar: o.eb(s)
				}),
				U = e => I("onboarding", "click", e),
				P = () => I("avatar", "view", "onboarding")
		},
		"./src/reddit/models/Avatar/accessories.ts": function(e, t, a) {
			"use strict";
			a.d(t, "c", (function() {
				return s
			})), a.d(t, "a", (function() {
				return r
			})), a.d(t, "b", (function() {
				return o
			})), a.d(t, "d", (function() {
				return n
			}));
			const s = {
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
						available_for_closet: !0
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
						available_for_closet: !0
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
						available_for_closet: !0
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
						available_for_closet: !0
					},
					t5_3f1s6: {
						id: "powerups_top_breathofthewild",
						section_id: "top_body_tops",
						customizable_classes: ["body"],
						capability_required: null,
						state: "enabled",
						assets: [{
							accessory_id: "powerups_top_breathofthewild",
							image_url: "https://i.redd.it/snoovatar/snoo_assets/oahPwJK8sSk_powerups_top_breathofthewild.svg",
							slot: 40
						}],
						tags: ['powerups={"subreddit_id":"t5_3f1s6"}'],
						available_for_closet: !0
					},
					t5_mvcq5: {
						id: "powerups_top_tiktokcringe",
						section_id: "top_body_tops",
						customizable_classes: ["body"],
						capability_required: null,
						state: "enabled",
						assets: [{
							accessory_id: "powerups_top_tiktokcringe",
							image_url: "https://i.redd.it/snoovatar/snoo_assets/XlGK2-AG3V0_powerups_top_tiktokcringe.svg",
							slot: 40
						}],
						tags: ['powerups={"subreddit_id":"t5_mvcq5"}'],
						available_for_closet: !0
					},
					t5_4e4fpz: {
						id: "powerups_top_qa_powerupsenabled",
						section_id: "top_body_tops",
						customizable_classes: ["body"],
						capability_required: null,
						state: "enabled",
						assets: [{
							accessory_id: "powerups_top_qa_powerupsenabled",
							image_url: "https://i.redd.it/snoovatar/snoo_assets/oahPwJK8sSk_powerups_top_qa_powerupsenabled.svg",
							slot: 40
						}],
						tags: ['powerups={"subreddit_id":"t5_4e4fpz"}'],
						available_for_closet: !0
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
						available_for_closet: !0
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
						available_for_closet: !0
					}
				}
		},
		"./src/reddit/reducers/features/avatar/index.ts": function(e, t, a) {
			"use strict";
			var s, r, o = a("./node_modules/redux/es/redux.js"),
				n = a("./src/reddit/actions/snoovatar.ts");
			! function(e) {
				e.PREMIUM = "PREMIUM"
			}(s || (s = {})),
			function(e) {
				e[e.BACKGROUND = 0] = "BACKGROUND", e[e.ACCESSORY_BACK = 1] = "ACCESSORY_BACK", e[e.HAIR_BACK = 2] = "HAIR_BACK", e[e.BODY_BOTTOM = 3] = "BODY_BOTTOM", e[e.BODY = 4] = "BODY", e[e.ACCESSORY = 5] = "ACCESSORY", e[e.FACE_LOWER = 6] = "FACE_LOWER", e[e.FACE_UPPER = 7] = "FACE_UPPER", e[e.HAIR = 8] = "HAIR", e[e.HEAD_ACCESSORY = 9] = "HEAD_ACCESSORY"
			}(r || (r = {}));
			const i = {
				id: "",
				csrf_token: "",
				snoovatar: null,
				websocketsUrls: {
					renderer: "",
					download: ""
				},
				capabilities: [s.PREMIUM],
				hasActiveClosetSubscription: !1
			};
			var c = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i,
					t = arguments.length > 1 ? arguments[1] : void 0;
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
						assetUrls: null,
						experimentRequired: null
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
							const a = e.split(":");
							if (!a.length && a.length < 3) return null;
							try {
								t[a[1]] = JSON.parse(a[2])
							} catch {
								t[a[1]] = a[2]
							}
						}
					}), t
				};

			function m(e) {
				if (!e) return d;
				const t = d;
				return e.forEach(e => {
					const {
						startsAt: a,
						endsAt: s,
						webAssetUrls: r,
						tags: o
					} = e, n = a && new Date(a) <= new Date, i = !!s && new Date(s) < new Date, c = !!n && !i, d = o.includes(_);
					if (o && o.includes(l) && !d) {
						const {
							text: a,
							id: s
						} = e, n = r || null, i = p(o);
						t && (t.quickCreateV1 = {
							...i,
							id: s,
							text: a,
							active: c && !!n,
							webAssetUrls: n
						})
					}
					if (o && o.includes(u) && !d) {
						const e = r || null,
							a = o.find(e => e.startsWith("feature:") && e.includes("web")) || null;
						t && (t.marketingEvent = {
							active: c && !!e,
							assetUrls: e,
							experimentRequired: a
						})
					}
				}), t
			}
			var b = a("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				v = a("./src/reddit/actions/modal.ts"),
				E = a("./src/reddit/constants/modals.ts");
			var f = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				var a;
				switch (t.type) {
					case b.s:
						const {
							avatarMarketingEvents: s
						} = t.payload;
						return s ? m(s) : d;
					case v.c:
						return (null === (a = t.payload) || void 0 === a ? void 0 : a.id) === E.a.SNOOVATAR_MODAL ? d : e;
					default:
						return e
				}
			};
			var h = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case n.a: {
						const {
							image: e,
							accessory_ids: a
						} = t.payload;
						return {
							image: e,
							accessoryIds: a
						}
					}
					default:
						return e
				}
			};
			t.a = Object(o.c)({
				marketing: f,
				avatarUser: c,
				randomAvatar: h
			})
		},
		"./src/reddit/selectors/avatar.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return o
			})), a.d(t, "b", (function() {
				return n
			})), a.d(t, "c", (function() {
				return i
			}));
			var s = a("./src/lib/initializeClient/installReducer.ts"),
				r = a("./src/reddit/reducers/features/avatar/index.ts");
			Object(s.a)({
				features: {
					avatar: r.a
				}
			});
			const o = e => {
					var t, a;
					return null === (a = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === a ? void 0 : a.avatarUser
				},
				n = e => {
					var t, a;
					return null === (a = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === a ? void 0 : a.avatarUser.csrf_token
				},
				i = e => {
					var t, a;
					return (null === (a = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === a ? void 0 : a.randomAvatar) || null
				}
		},
		"./src/reddit/selectors/avatarMarketing.ts": function(e, t, a) {
			"use strict";
			a.d(t, "b", (function() {
				return n
			})), a.d(t, "a", (function() {
				return i
			}));
			var s = a("./src/lib/initializeClient/installReducer.ts"),
				r = a("./src/reddit/reducers/features/avatar/index.ts"),
				o = a("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			Object(s.a)({
				features: {
					avatar: r.a
				}
			});
			const n = e => {
					var t, a;
					return !!(null === (a = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === a ? void 0 : a.marketing)
				},
				i = e => {
					var t, a, s, r;
					const n = null === (s = null === (a = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === a ? void 0 : a.marketing) || void 0 === s ? void 0 : s.marketingEvent;
					if (!(null == n ? void 0 : n.active) || !(null === (r = null == n ? void 0 : n.assetUrls) || void 0 === r ? void 0 : r.length)) return null;
					const i = n.assetUrls[0];
					return !n.experimentRequired || Object(o.a)(n.experimentRequired)(e) ? i : null
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Econ-PowerupsInFeedUnit-index.d27132ab1656c7e3009a.js.map