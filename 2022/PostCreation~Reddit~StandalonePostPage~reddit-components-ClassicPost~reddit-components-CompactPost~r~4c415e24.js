// https://www.redditstatic.com/desktop2x/PostCreation~Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~r~4c415e24.7c82db28f4389f7e036f.js
// Retrieved at 3/7/2022, 1:40:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PostCreation~Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~r~4c415e24"], {
		"./src/reddit/actions/economics/subredditPremium/actionCreators.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return d
			})), r.d(t, "c", (function() {
				return c
			})), r.d(t, "d", (function() {
				return l
			})), r.d(t, "e", (function() {
				return u
			})), r.d(t, "f", (function() {
				return m
			})), r.d(t, "g", (function() {
				return p
			})), r.d(t, "h", (function() {
				return h
			})), r.d(t, "i", (function() {
				return b
			})), r.d(t, "j", (function() {
				return f
			}));
			var n = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/reddit/actions/modal.ts"),
				a = r("./src/reddit/constants/modals.ts"),
				s = r("./src/reddit/actions/economics/subredditPremium/constants.ts");
			const i = Object(n.a)(s.a),
				d = Object(n.a)(s.b),
				c = Object(n.a)(s.c),
				l = Object(n.a)(s.d),
				u = Object(n.a)(s.e),
				m = Object(n.a)(s.f),
				p = Object(n.a)(s.g),
				h = Object(n.a)(s.h),
				b = Object(n.a)(s.i),
				f = e => Object(o.h)(a.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, {
					uploadAssetType: e
				})
		},
		"./src/reddit/actions/gold/communityAwards/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "i", (function() {
				return s
			})), r.d(t, "d", (function() {
				return i
			})), r.d(t, "e", (function() {
				return d
			})), r.d(t, "f", (function() {
				return c
			})), r.d(t, "b", (function() {
				return l
			})), r.d(t, "c", (function() {
				return u
			})), r.d(t, "j", (function() {
				return m
			})), r.d(t, "g", (function() {
				return p
			})), r.d(t, "h", (function() {
				return h
			}));
			var n = r("./src/lib/loadableAction/index.ts");
			const o = e => () => r.e("CommunityAwards").then(r.bind(null, "./src/reddit/actions/gold/communityAwards/communityAwards.ts")).then(t => t[e]),
				a = Object(n.a)(o("awardSheetInfoRequested")),
				s = Object(n.a)(o("manageableAwardsRequested")),
				i = Object(n.a)(o("createCommunityAward")),
				d = Object(n.a)(o("createGlobalAward")),
				c = Object(n.a)(o("createModAward")),
				l = Object(n.a)(o("createAwardFailed")),
				u = Object(n.a)(o("createAwardSuccessful")),
				m = Object(n.a)(o("removeCommunityAward")),
				p = Object(n.a)(o("disableAwardinCommunity")),
				h = Object(n.a)(o("enableAwardinCommunity"))
		},
		"./src/reddit/actions/gold/giveAward.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return c
			}));
			var n = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/reddit/actions/modal.ts"),
				a = r("./src/reddit/constants/modals.ts"),
				s = r("./src/reddit/actions/gold/constants.ts");
			const i = Object(n.a)(s.mb),
				d = Object(n.a)(s.t),
				c = e => async t => {
					await t(d({
						id: e
					})), t(Object(o.h)(a.a.GOLD_GILD_ANIMATION_OVERLAY))
				}
		},
		"./src/reddit/actions/gold/modals.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return f
			})), r.d(t, "b", (function() {
				return g
			})), r.d(t, "d", (function() {
				return x
			})), r.d(t, "c", (function() {
				return A
			})), r.d(t, "a", (function() {
				return y
			})), r.d(t, "f", (function() {
				return j
			}));
			var n = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/lib/postParentMessage/index.ts"),
				a = r("./src/reddit/helpers/isPost.ts"),
				s = r("./src/reddit/constants/modals.ts"),
				i = r("./src/reddit/selectors/gild.ts"),
				d = r("./src/reddit/helpers/correlationIdTracker.ts"),
				c = r("./src/reddit/actions/gold/communityAwards/index.ts"),
				l = r("./src/reddit/actions/modal.ts"),
				u = r("./src/reddit/selectors/communityAwards.ts"),
				m = r("./src/reddit/selectors/posts.ts"),
				p = r("./src/reddit/selectors/subreddit.ts"),
				h = r("./src/telemetry/index.ts"),
				b = r("./src/reddit/actions/gold/constants.ts");
			const f = Object(n.a)(b.L),
				v = Object(n.a)(b.f),
				g = () => async (e, t) => {
					const n = t();
					e(v()), Object(d.b)(d.a.GiftPremiumFlow);
					const {
						clickCloseModalEvent: o
					} = await r.e("givePremiumTrackers").then(r.bind(null, "./src/reddit/helpers/trackers/givePremium.ts"));
					Object(h.a)(o()(n))
				}, w = Object(n.a)(b.K), x = ({
					awardId: e,
					correlationId: t,
					thingId: r
				}) => async (n, o) => {
					const i = o(),
						d = e ? Object(u.a)(i, e) : void 0;
					n(w({
						award: d && d.isEnabled ? d : void 0,
						thingId: r,
						correlationId: t
					})), n(Object(l.h)(s.a.GOLD_GILD_MODAL));
					const h = Object(p.I)(i, {
						thingId: r
					});
					let b = null;
					if (h) b = h.id;
					else if (Object(a.a)(r)) {
						const e = Object(m.G)(i, {
							postId: r
						});
						e && (b = e.belongsTo.id)
					}
					b && Object(c.a)(b, r)
				}, O = Object(n.a)(b.e), A = Object(n.a)(b.J), y = () => async (e, t) => {
					const n = t(),
						a = Object(i.d)(n);
					if (Object(i.g)(n)) {
						const e = "close.gild";
						Object(o.a)({
							type: e
						})
					}
					e(O()), e(Object(l.g)(s.a.GOLD_GILD_MODAL));
					const {
						clickCloseGildModalEvent: c
					} = await Promise.resolve().then(r.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
					Object(h.a)(c(a)(n)), Object(d.b)(d.a.GildingFlow)
				}, j = () => async () => {
					Object(o.a)({
						type: "login.gild"
					})
				}
		},
		"./src/reddit/actions/gold/reportAward.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return l
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/reddit/actions/toaster.ts"),
				s = r("./src/reddit/models/Toast/index.ts"),
				i = r("./src/reddit/endpoints/gold/communityAwards.ts"),
				d = r("./src/reddit/actions/gold/constants.ts");
			const c = Object(o.a)(d.lb),
				l = e => async (t, r, {
					apiContext: o
				}) => {
					t(c());
					try {
						if ((await Object(i.e)(o(), e.id)).error) throw new Error;
						await t(Object(a.f)({
							kind: s.b.SuccessAward,
							duration: a.a,
							text: n.fbt._("{award name} Award successfully reported for review.", [n.fbt._param("award name", e.name)], {
								hk: "1fHb5Q"
							})
						}))
					} catch (d) {
						await t(Object(a.f)({
							kind: s.b.Error,
							duration: a.a,
							text: n.fbt._("Something went wrong. The report could not be created at this time.", null, {
								hk: "1ewigu"
							})
						}))
					}
				}
		},
		"./src/reddit/actions/gold/topAwarded.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return p
			})), r.d(t, "b", (function() {
				return b
			}));
			var n = r("./src/lib/env/index.ts"),
				o = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/lib/sentry/index.ts"),
				s = r("./src/reddit/constants/modals.ts"),
				i = r("./src/reddit/endpoints/gold/topAwarded.ts"),
				d = r("./src/reddit/actions/modal.ts"),
				c = r("./src/reddit/actions/gold/constants.ts");
			Object(o.a)(c.ub), Object(o.a)(c.tb), Object(o.a)(c.sb);
			const l = Object(o.a)(c.xb),
				u = Object(o.a)(c.wb),
				m = Object(o.a)(c.vb),
				p = (e, t = 25) => async (r, o, {
					gqlContext: s
				}) => {
					if (!o().users.topAwarders.list.length) {
						r(l());
						try {
							const n = await Object(i.b)(s(), {
									top: t,
									postId: e
								}),
								o = n.body;
							if (n.ok) await r(u({
								postId: e,
								...o.data.postInfoById.topAwarders
							}));
							else if (o.errors && o.errors.length) throw new Error(o.errors.map(e => e.message).join("; "))
						} catch (d) {
							Object(n.b)() || console.error(d), a.c.captureMessage(d), r(m(d.message))
						}
					}
				}, h = Object(o.a)(c.yb), b = e => async (t, r) => {
					t(h({
						postId: e
					})), t(Object(d.h)(s.a.ECON_TOP_AWARDERS))
				}
		},
		"./src/reddit/actions/snoovatar.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return h
			})), r.d(t, "a", (function() {
				return f
			})), r.d(t, "e", (function() {
				return g
			})), r.d(t, "c", (function() {
				return w
			})), r.d(t, "d", (function() {
				return x
			}));
			var n = r("./src/lib/initializeClient/installReducer.ts"),
				o = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/lib/sentry/index.ts"),
				s = r("./src/config.ts"),
				i = r("./src/lib/constants/index.ts"),
				d = r("./src/lib/makeApiRequest/index.ts"),
				c = r("./src/lib/omitHeaders/index.ts"),
				l = r("./src/reddit/constants/headers.ts");
			var u = r("./src/reddit/reducers/features/avatar/index.ts"),
				m = r("./src/reddit/selectors/avatar.ts"),
				p = r("./src/reddit/actions/users.ts");
			Object(n.a)({
				features: {
					avatar: u.a
				}
			});
			const h = "SET_AVATAR_USER",
				b = Object(o.a)(h),
				f = "RANDOM_AVATAR_LOADED",
				v = Object(o.a)(f),
				g = (e, t, r) => async (n, o, {
					apiContext: a
				}) => {
					var u, h, b, f;
					const v = Object(m.b)(o()),
						g = await (async (e, t, r, n, o) => Object(d.a)(Object(c.a)(e, [l.a]), {
							endpoint: `${s.a.snoovatarUrl}/api/snoovatar?skip_telemetry=true`,
							method: i.jb.POST,
							headers: {
								"Content-Type": "application/json ",
								"X-CSRF-Token": o || ""
							},
							data: {
								accessory_ids: t,
								styles: r,
								...n
							}
						}))(a(), e, t, r, v);
					if (!g.ok) throw new Error("User avatar failed to save");
					return n(Object(p.A)(g.body)), {
						accountIcon: null === (h = null === (u = g.body) || void 0 === u ? void 0 : u.avatar) || void 0 === h ? void 0 : h.headshot_image_url,
						fullBodySnoovatar: null === (f = null === (b = g.body) || void 0 === b ? void 0 : b.avatar) || void 0 === f ? void 0 : f.image_url
					}
				}, w = () => async (e, t, {
					apiContext: r
				}) => {
					try {
						const t = await (async e => Object(d.a)(Object(c.a)(e, [l.a]), {
							endpoint: `${s.a.snoovatarUrl}/api/account`,
							method: i.jb.GET
						}))(r());
						t.ok && e(b(t.body))
					} catch (n) {
						a.c.captureException(n)
					}
				}, x = () => async (e, t, {
					apiContext: r
				}) => {
					try {
						const t = await (async e => Object(d.a)(Object(c.a)(e, [l.a]), {
							endpoint: `${s.a.snoovatarUrl}/api/snoovatars/random:byId`,
							method: i.jb.GET
						}))(r());
						t.ok && e(v(t.body))
					} catch (n) {
						a.c.captureException(n)
					}
				}
		},
		"./src/reddit/actions/snoovatarModal.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return l
			})), r.d(t, "b", (function() {
				return u
			}));
			var n = r("./src/reddit/actions/login.ts"),
				o = r("./src/reddit/actions/modal.ts"),
				a = r("./src/reddit/actions/users.ts"),
				s = r("./src/reddit/constants/modals.ts"),
				i = r("./src/reddit/helpers/trackers/snoovatar.ts"),
				d = r("./src/reddit/selectors/user.ts"),
				c = r("./src/telemetry/index.ts");
			const l = () => async (e, t) => {
				const r = t();
				Object(c.a)(Object(i.k)(r)), e(Object(a.t)({
					forceFetch: !0
				})), await e(Object(o.g)(s.a.SNOOVATAR_MODAL))
			};

			function u(e = {}) {
				return async (t, r) => {
					const {
						clickSource: a,
						share: l,
						source: u,
						activeTab: m,
						activeDetails: p
					} = e, h = r();
					a && Object(c.a)(Object(i.f)(a)(h)), Object(d.O)(h) ? await t(Object(o.h)(s.a.SNOOVATAR_MODAL, {
						share: l,
						source: u,
						activeTab: m,
						activeDetails: p
					})) : await t(Object(n.i)())
				}
			}
		},
		"./src/reddit/components/AuthorLink/index.m.less": function(e, t, r) {
			e.exports = {
				authorLinkStyles: "_23wugcdiaj44hdfugIAlnX",
				isUnstyled: "oQctV4n0yUb0uiHDdGnmE",
				isStrong: "_2YPMtQeUrWhVZuFXPpgmXz",
				isLivestreaming: "_3otDgT22VIln-JT-1XwFbr",
				deletedAuthorLink: "lizQBHVukyun2S2babj-l"
			}
		},
		"./src/reddit/components/AuthorLink/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				s = r("./src/lib/classNames/index.ts"),
				i = r("./src/config.ts"),
				d = r("./src/reddit/actions/post.ts"),
				c = r("./src/reddit/controls/InternalLink/index.tsx"),
				l = r("./src/reddit/hooks/useClickSourceData.ts"),
				u = r("./src/reddit/selectors/experiments/cnc/index.ts"),
				m = r("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				p = r("./src/reddit/components/AuthorLink/index.m.less"),
				h = r.n(p);

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				var t, r;
				const n = Object(s.a)(e.className, h.a.authorLinkStyles, {
						[h.a.isLivestreaming]: e.isLivestreaming,
						[h.a.isStrong]: e.isStrong,
						[h.a.isUnstyled]: e.isUnstyled
					}),
					p = Object(l.a)(),
					f = Object(a.d)(),
					v = Object(a.e)(m.b),
					g = t => {
						var r;
						if (null === (r = e.onClick) || void 0 === r || r.call(e, t), v) {
							const r = e.isExternal || e.isLivestreaming || e.forceOpenInNewTab ? `${i.a.redditUrl}/user/${e.author}` : `/user/${e.author}/`;
							t.preventDefault(), f(Object(d.cb)(r))
						}
					};
				return Object(a.e)(u.a) ? o.a.createElement("span", {
					className: n
				}, e.children) : e.isExternal || e.isLivestreaming || e.forceOpenInNewTab ? o.a.createElement("a", b({}, null !== (t = e.linkProps) && void 0 !== t ? t : {}, {
					className: n,
					href: `${i.a.redditUrl}/user/${e.author}`,
					rel: "noopener noreferrer",
					target: "_blank",
					onClick: g
				}), e.children) : e.isAuthorDeleted ? o.a.createElement("span", {
					className: Object(s.a)(h.a.deletedAuthorLink, e.className)
				}, e.children) : o.a.createElement(c.a, b({}, null !== (r = e.linkProps) && void 0 !== r ? r : {}, {
					className: n,
					style: e.style,
					to: {
						pathname: `/user/${e.author}/`,
						state: p
					},
					onClick: g
				}), e.children)
			}
		},
		"./src/reddit/components/AwardBadges/AddAwardPill/index.m.less": function(e, t, r) {
			e.exports = {
				addAwardPill: "_3Wf5TsmUR8Qf8nr0fDHjur",
				giftIcon: "eQZZIJf9NTq5MBV2285S2"
			}
		},
		"./src/reddit/components/AwardBadges/AwardPill/index.m.less": function(e, t, r) {
			e.exports = {
				awardPillContainer: "yW-ely1Ik8KTYTO9TSOSa",
				awardPill: "q2KM5tcmhqOBd4ElRihZQ",
				userGiven: "_1HqRbG571qt3Nk2zj_W3TS",
				imageContainer: "_1rwi4ljDNaPtYUiOiXomov",
				count: "_1YpK2GgjHXEnSEetPdXV17",
				awardIcon: "_2lnLb-ItT6LeziBNeQZx8I",
				hidden: "_3JxvBqAeBggcg7vHXhdVlS",
				animationIcon: "_2qKgWPWPiz4EnwPhDH9jaU",
				elasticShrink: "_1nKXGUCyFMbujKJCUr7v1F",
				fadeIn: "_3Unh28GaDqT2GLqHAD02_S"
			}
		},
		"./src/reddit/components/AwardBadges/AwardPlaqueBadges/index.m.less": function(e, t, r) {
			e.exports = {
				awardBadges: "_1wgnb6w6OJogtEV2N4B3lD",
				noAwards: "_1pZRAWakamwUD9Urx217oC",
				multiline: "_3c1kr0TjcknQSAP9naDKGv",
				spacer: "_1FZ8jCjLuxoHLtbgJDekEU",
				clickablePlaqueItem: "_2PVXBodfFt50jjk5ydPpWY",
				"focus-visible": "_3JCIceLNhOdJUR_ABw_M2V",
				focusVisible: "_3JCIceLNhOdJUR_ABw_M2V"
			}
		},
		"./src/reddit/components/AwardBadges/AwardPlaqueScrollButton/index.m.less": function(e, t, r) {
			e.exports = {
				buttonContainer: "DInSK-8C_3_wtp8rkyyk_",
				right: "_3h4h05agLr2A_NU_Rf3yCn",
				scrollButton: "_2MU8EpOTDEghV1ecmq37UZ",
				"focus-visible": "_38NFrOkGDKwQs4baFR_XWF",
				focusVisible: "_38NFrOkGDKwQs4baFR_XWF",
				chevronIcon: "uPrjAc1vFe8cn_-JitBDg"
			}
		},
		"./src/reddit/components/AwardBadges/ClassicAwardBadges/index.m.less": function(e, t, r) {
			e.exports = {
				awardBadges: "_3XoW0oYd5806XiOr24gGdb",
				badgeButton: "_1vpnHb2bSTD6BcgVKisnPT",
				visibilityEffect: "_3vGYJIJIswDD8YOAMWGC4N",
				icon: "_3zozqOs5cvNd2uvuIiu2_L",
				showAllButton: "_1tAFPduILh7Zse0gkxT4vj"
			}
		},
		"./src/reddit/components/AwardBadges/ClassicAwardItem/index.m.less": function(e, t, r) {
			e.exports = {
				awardItem: "_2OYwDdghtXEuTF67C95YLY",
				awardIcon: "n08B7PrU01wzgZYIh-s7N",
				animate: "f18KwJcHh9SCfKw_W3Dm2",
				awardBounce: "_3bDgD_5hXKabLRqOe9sXRi"
			}
		},
		"./src/reddit/components/AwardBadges/FlagAwardModal/index.m.less": function(e, t, r) {
			e.exports = {
				reportStepButton: "_2ke5Q4KsrJWi6sCDENRwI2"
			}
		},
		"./src/reddit/components/AwardBadges/TopAwardedPill/index.m.less": function(e, t, r) {
			e.exports = {
				pill: "AavtiP0APDAhqwl7opcvC",
				iconContainer: "_2NhWk2-d-tn8oC0A-k_Ss-",
				awardIcon: "_20LMDg4_PtezakicbNPSfn",
				awardsPlaqueStyle: "qntP0rU06Z8LVP6TKmQHQ",
				"focus-visible": "qbP9Qnm2Qru28YDgfefpw",
				focusVisible: "qbP9Qnm2Qru28YDgfefpw"
			}
		},
		"./src/reddit/components/AwardBadges/index.tsx": function(e, t, r) {
			"use strict";
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./node_modules/react/index.js"),
				a = r.n(o),
				s = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/reselect/es/index.js"),
				d = r("./src/reddit/actions/gold/giveAward.ts"),
				c = r("./src/redditGQL/operations/HideAwardOnTarget.json"),
				l = r("./src/lib/makeActionCreator/index.ts"),
				u = r("./src/lib/makeGqlRequest/index.ts"),
				m = r("./src/reddit/actions/gold/constants.ts"),
				p = r("./src/reddit/actions/toaster.ts"),
				h = r("./src/reddit/models/Toast/index.ts");
			const b = Object(l.a)(m.D),
				f = ({
					awardId: e,
					thingId: t
				}) => async (r, o, {
					gqlContext: a
				}) => {
					r(b({
						awardId: e,
						thingId: t
					}));
					const s = n.fbt._("Something went wrong. The Award could not be hidden at this time.", null, {
						hk: "10OvOz"
					});
					try {
						(await ((e, t, r) => Object(u.a)(e, {
							...c,
							variables: {
								awardId: t,
								targetId: r
							}
						}))(a(), e, t)).error && r(Object(p.f)({
							kind: h.b.Error,
							duration: p.a,
							text: s
						}))
					} catch (i) {
						r(Object(p.f)({
							kind: h.b.Error,
							duration: p.a,
							text: s
						}))
					}
				};
			var v = r("./src/reddit/actions/gold/modals.ts"),
				g = r("./src/reddit/actions/modal.ts"),
				w = r("./src/reddit/actions/tooltip.ts"),
				x = r("./src/reddit/helpers/correlationIdTracker.ts"),
				O = r("./src/reddit/helpers/isPost.ts"),
				A = r("./src/reddit/helpers/trackers/gild.ts"),
				y = r("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				j = r("./src/reddit/components/TrackingHelper/index.tsx"),
				_ = r("./src/reddit/models/Gold/Award.ts"),
				C = r("./src/reddit/selectors/activeModalId.ts"),
				E = r("./src/reddit/selectors/experiments/econLeaderboards.ts"),
				I = r("./src/reddit/selectors/gold/awardIcon.ts"),
				k = r("./src/reddit/contexts/Post/index.tsx"),
				T = r("./src/reddit/contexts/User/index.tsx"),
				P = r("./node_modules/lodash/debounce.js"),
				M = r.n(P),
				S = r("./src/lib/classNames/index.ts"),
				N = r("./src/lib/fastdom/index.ts"),
				B = r("./src/reddit/models/Gold/TopAwarded/index.ts"),
				L = r("./src/reddit/icons/fonts/Gift/index.tsx"),
				F = r("./src/reddit/components/AwardBadges/AddAwardPill/index.m.less"),
				R = r.n(F);
			var H = a.a.memo(e => a.a.createElement("button", {
					className: Object(S.a)(e.className, R.a.addAwardPill),
					name: n.fbt._("Give award", null, {
						hk: "dQR06"
					}),
					onClick: e.onAddAward
				}, a.a.createElement(L.a, {
					className: R.a.giftIcon
				}))),
				D = r("./src/reddit/helpers/awards/getAwardItemId.ts"),
				G = r("./src/higherOrderComponents/makeAsync.tsx"),
				U = r("./src/lib/loadWithRetries/index.ts");
			var q = Object(G.a)({
					getComponent: () => Object(U.a)(() => r.e("AwardTooltip").then(r.bind(null, "./src/reddit/components/AwardTooltip/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				W = r("./src/reddit/components/AwardBadges/AwardPill/index.m.less"),
				z = r.n(W);
			const V = 3500,
				Q = 500;
			class J extends a.a.PureComponent {
				constructor(e) {
					super(e), this.imageRef = a.a.createRef(), this.triggerAnimation = () => {
						const {
							award: e,
							prefersReducedMotion: t,
							tooltipId: r,
							triggerOverlayAnimation: n
						} = this.props;
						e.id !== _.g && (this.setState({
							userGiven: !0,
							shouldAnimate: !t
						}), t || (n(r), setTimeout(() => {
							this.setState({
								shouldAnimate: !1
							})
						}, V)))
					}, this.handleOnClick = () => {
						const {
							onAddAward: e,
							award: t
						} = this.props;
						e(t.id === _.g ? void 0 : t.id)
					}, this.handleMouseEnter = () => {
						const {
							onShowTooltip: e,
							tooltipId: t
						} = this.props;
						this.hoverTimer = setTimeout(() => {
							e(t), this.setState({
								hoverStateTriggered: !0
							})
						}, Q)
					}, this.handleMouseLeave = () => {
						const {
							onHideTooltip: e
						} = this.props;
						this.state.hoverStateTriggered && (e(), this.setState({
							hoverStateTriggered: !1
						})), this.hoverTimer && (clearTimeout(this.hoverTimer), this.hoverTimer = void 0)
					}, this.handleHideAward = () => {
						const {
							onHideAward: e,
							award: t
						} = this.props;
						e(t)
					}, this.handleOpenReportFlow = () => {
						const {
							onOpenReportFlow: e,
							award: t
						} = this.props;
						e(t)
					}, this.state = {
						hoverStateTriggered: !1,
						shouldAnimate: !1,
						userGiven: !1
					}
				}
				componentDidMount() {
					const e = this.imageRef ? this.imageRef.current : null;
					e && e.addEventListener("awardAdded", this.triggerAnimation)
				}
				componentWillUnmount() {
					const e = this.imageRef ? this.imageRef.current : null;
					e && e.removeEventListener("awardAdded", this.triggerAnimation)
				}
				render() {
					const {
						award: e,
						className: t,
						count: r,
						giveAwardAnimationIconUrl: n,
						pillIconUrl: o,
						post: s,
						tooltipId: i
					} = this.props, {
						userGiven: d,
						shouldAnimate: c
					} = this.state, l = Object(D.a)(e.id, s.id);
					return a.a.createElement("span", {
						className: z.a.awardPillContainer,
						id: i,
						onMouseEnter: this.handleMouseEnter,
						onMouseLeave: this.handleMouseLeave
					}, a.a.createElement("button", {
						className: Object(S.a)(t, z.a.awardPill, {
							[z.a.userGiven]: d
						}),
						onClick: this.handleOnClick
					}, a.a.createElement("span", {
						className: z.a.imageContainer
					}, a.a.createElement("img", {
						alt: e.name,
						className: Object(S.a)(z.a.awardIcon, {
							[z.a.hidden]: c
						}),
						id: l,
						ref: this.imageRef,
						src: o
					}), c && a.a.createElement("img", {
						alt: e.name,
						className: z.a.animationIcon,
						src: n
					})), a.a.createElement("span", {
						className: z.a.count
					}, r.toLocaleString())), a.a.createElement(q, {
						award: e,
						onOpenReportFlow: this.handleOpenReportFlow,
						onHideAward: this.handleHideAward,
						postOrComment: s,
						tooltipId: i
					}))
				}
			}
			var K = J,
				Y = r("./src/reddit/icons/svgs/Chevron/index.tsx"),
				X = r("./src/reddit/components/AwardBadges/AwardPlaqueScrollButton/index.m.less"),
				$ = r.n(X);
			var Z = a.a.memo(e => {
				const {
					className: t,
					direction: r,
					onClick: o
				} = e, s = "right" === r, i = n.fbt._("Scroll left", null, {
					hk: "3MibS1"
				}), d = n.fbt._("Scroll right", null, {
					hk: "3xdEc5"
				});
				return a.a.createElement("div", {
					className: Object(S.a)($.a.buttonContainer, {
						[$.a.right]: s
					}, t)
				}, a.a.createElement("button", {
					className: $.a.scrollButton,
					name: s ? d : i,
					onClick: o
				}, a.a.createElement(Y.a, {
					className: $.a.chevronIcon
				})))
			});
			const ee = (e, t) => {
				let r = `${Object(O.a)(e)?"Post":"Comment"}AwardBadges--${e}`;
				return t && (r = `${r}--${t}`), r
			};
			var te = r("./src/reddit/helpers/trackers/topAwarded.ts"),
				re = r("./src/reddit/hooks/useTracking.ts"),
				ne = r("./src/reddit/actions/gold/topAwarded.ts"),
				oe = r("./src/reddit/icons/svgs/TopAwarded/index.tsx"),
				ae = r("./src/reddit/components/AwardBadges/TopAwardedPill/index.m.less"),
				se = r.n(ae);
			const {
				fbt: ie
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			var de = e => {
					const t = Object(s.d)(),
						r = Object(re.a)();
					return a.a.createElement("button", {
						className: Object(S.a)(se.a.pill, e.className, {
							[se.a.awardsPlaqueStyle]: !!e.awardsPlaqueStyle
						}),
						onClick: () => {
							const {
								postId: n
							} = e.post;
							r(Object(te.a)(n)), t(Object(ne.b)(n))
						}
					}, a.a.createElement("span", {
						className: se.a.iconContainer
					}, a.a.createElement(oe.a, {
						className: se.a.awardIcon
					})), a.a.createElement("span", null, ie._("Top Awarded", null, {
						hk: "49Ol5i"
					})))
				},
				ce = r("./src/reddit/components/AwardBadges/AwardPlaqueBadges/index.m.less"),
				le = r.n(ce);
			const ue = 11,
				me = 100;
			class pe extends a.a.Component {
				constructor(e) {
					super(e), this.plaqueRef = a.a.createRef(), this.handleResize = M()(() => {
						this.handlePlaquePositionChange()
					}, 300), this.handlePlaquePositionChange = () => {
						const {
							awards: e,
							awardsCountInView: t,
							multiline: r
						} = this.props, n = t || ue;
						if (e.length < n - 4) return;
						if (r) return;
						const o = this.plaqueRef.current;
						if (!o) return;
						const a = o.scrollLeft > 0,
							s = o.scrollLeft < o.scrollWidth - o.clientWidth;
						this.setState({
							canScrollLeft: a,
							canScrollRight: s
						})
					}, this.handleScrollLeft = () => {
						const e = this.plaqueRef.current;
						if (!e) return;
						const t = e.clientWidth,
							r = e.scrollLeft - (t - me);
						this.scrollPlaqueTo(r)
					}, this.handleScrollRight = () => {
						const e = this.plaqueRef.current;
						if (!e) return;
						const t = e.clientWidth,
							r = e.scrollLeft + (t - me);
						this.scrollPlaqueTo(r)
					}, this.handleTriggerAnimation = e => {
						this.props.triggerOverlayAnimation(), N.a.read(() => {
							const t = this.plaqueRef.current;
							if (!t) return;
							const r = document.getElementById(e);
							if (!r) return;
							const n = t.getBoundingClientRect(),
								o = r.getBoundingClientRect();
							if (o.left < n.left || o.right > n.right) {
								const e = o.left + (t.scrollLeft - n.left) - me;
								this.scrollPlaqueTo(e)
							}
						})
					};
					const t = e.awardsCountInView || ue,
						r = e.awards.length > t;
					this.state = {
						canScrollLeft: !1,
						canScrollRight: r && !e.multiline
					}
				}
				shouldComponentUpdate(e, t) {
					if (this.props.awards !== e.awards) {
						const t = this.props.awards.reduce((e, t) => (e[t.id] = (this.props.post.awardCountsById || {})[t.id], e), {});
						if (e.awards.reduce((r, n) => {
								const o = t[n.id],
									a = (e.post.awardCountsById || {})[n.id];
								return r || o !== a
							}, !1)) return !0
					}
					if (this.props.post.id !== e.post.id) return !0;
					for (const r in this.state)
						if (this.state[r] !== t[r]) return !0;
					return this.props.post.topAwardedType !== e.post.topAwardedType
				}
				componentDidUpdate(e) {
					this.props.awards.length !== e.awards.length && this.handlePlaquePositionChange()
				}
				componentDidMount() {
					window.addEventListener("resize", this.handleResize)
				}
				componentWillUnmount() {
					window.removeEventListener("resize", this.handleResize)
				}
				scrollPlaqueTo(e) {
					const {
						prefersReducedMotion: t
					} = this.props, r = t ? "auto" : "smooth", n = this.plaqueRef.current;
					if (!n) return;
					const o = n.clientWidth,
						a = n.scrollWidth - o,
						s = Math.min(Math.max(0, e), a);
					this.setState({
						canScrollLeft: s > 0,
						canScrollRight: s < a
					}), n.scrollTo({
						left: s,
						top: 0,
						behavior: r
					})
				}
				render() {
					const {
						awards: e,
						className: t,
						hideAddAwardButton: r,
						hideTopAwardedBadge: n,
						icons: o,
						isInEconLeaderboardsExperiment: s,
						multiline: i,
						post: d,
						prefersReducedMotion: c,
						onAddAward: l,
						onHideAward: u,
						onHideTooltip: m,
						onOpenReportFlow: p,
						onShowTooltip: h,
						tooltipType: b
					} = this.props, {
						canScrollLeft: f,
						canScrollRight: v
					} = this.state, g = e.length > 0, w = ee(d.id, b);
					return a.a.createElement("div", {
						className: Object(S.a)(le.a.awardBadges, t, {
							[le.a.noAwards]: !g,
							[le.a.multiline]: i
						}),
						ref: this.plaqueRef
					}, f && a.a.createElement(Z, {
						direction: "left",
						onClick: this.handleScrollLeft
					}), (d.topAwardedType === B.a.Active || d.topAwardedType === B.a.Inactive) && !n && s && a.a.createElement(de, {
						awardsPlaqueStyle: !0,
						post: d
					}), e.map(e => {
						const {
							awardCountsById: t = {}
						} = d, r = t[e.id], n = o.icon32[e.id], s = o.icon128[e.id];
						return a.a.createElement(K, {
							award: e,
							className: le.a.clickablePlaqueItem,
							count: r,
							giveAwardAnimationIconUrl: s,
							key: e.id,
							onAddAward: l,
							onHideAward: u,
							onOpenReportFlow: p,
							onHideTooltip: m,
							onShowTooltip: h,
							pillIconUrl: n,
							post: d,
							prefersReducedMotion: c,
							tooltipId: `${w}-${e.id}`,
							triggerOverlayAnimation: this.handleTriggerAnimation
						})
					}), !r && a.a.createElement(H, {
						className: le.a.clickablePlaqueItem,
						onAddAward: l
					}), !i && a.a.createElement("div", {
						className: le.a.spacer
					}), v && a.a.createElement(Z, {
						direction: "right",
						onClick: this.handleScrollRight
					}))
				}
			}
			var he = pe,
				be = r("./src/reddit/components/AwardBadges/ClassicAwardItem/index.m.less"),
				fe = r.n(be);
			const {
				fbt: ve
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			class ge extends a.a.PureComponent {
				constructor(e) {
					super(e), this.imageRef = a.a.createRef(), this.handleAwardAddedEvent = () => {
						this.setState({
							animate: !0
						}), setTimeout(() => this.setState({
							animate: !1
						}), 1e3)
					}, this.onShowTooltip = () => {
						const {
							onShowTooltip: e,
							tooltipId: t
						} = this.props;
						return e(t)
					}, this.state = {
						animate: !1
					}
				}
				componentDidMount() {
					const e = this.imageRef ? this.imageRef.current : null;
					e && e.addEventListener("awardAdded", this.handleAwardAddedEvent)
				}
				componentWillUnmount() {
					const e = this.imageRef ? this.imageRef.current : null;
					e && e.removeEventListener("awardAdded", this.handleAwardAddedEvent)
				}
				renderModAwardName() {
					const {
						award: e,
						count: t
					} = this.props;
					return a.a.createElement(a.a.Fragment, null, t > 1 && " • ", ve._("{award-name} Award", [ve._param("award-name", e.name)], {
						hk: "2QpjYF"
					}))
				}
				render() {
					const {
						award: e,
						className: t,
						count: r,
						iconClassName: n,
						iconUrl: o,
						onHideAward: s,
						onHideTooltip: i,
						onOpenReportFlow: d,
						postOrComment: c,
						tooltipId: l,
						tooltipLocation: u
					} = this.props;
					if (r <= 0) return null;
					const m = e.awardType === _.f.Moderator,
						p = Object(D.a)(e.id, c.id),
						h = "container" === u;
					return a.a.createElement("span", {
						className: Object(S.a)(fe.a.awardItem, t),
						id: h ? l : "",
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: i
					}, a.a.createElement("span", {
						id: h ? "" : l
					}, a.a.createElement("img", {
						alt: e.name,
						className: Object(S.a)(fe.a.awardIcon, {
							[fe.a.animate]: this.state.animate
						}, n),
						id: p,
						ref: this.imageRef,
						src: o
					})), a.a.createElement("span", null, r > 1 && r, m && this.renderModAwardName()), a.a.createElement(q, {
						award: e,
						onHideAward: () => s(e),
						postOrComment: c,
						tooltipId: l,
						onOpenReportFlow: () => d(e)
					}))
				}
			}
			var we = r("./src/reddit/components/InfoTextTooltip/index.tsx"),
				xe = r("./src/reddit/icons/fonts/index.tsx"),
				Oe = r("./src/reddit/components/AwardBadges/ClassicAwardBadges/index.m.less"),
				Ae = r.n(Oe);
			var ye = e => {
				const {
					className: t,
					onClick: r
				} = e;
				return a.a.createElement("button", {
					className: Object(S.a)(t, Ae.a.badgeButton, Ae.a.visibilityEffect),
					onClick: r
				}, a.a.createElement(xe.a, {
					name: "award",
					className: Ae.a.icon
				}))
			};
			var je, _e = e => {
					const {
						awards: t,
						className: r,
						hideBadgeButton: o,
						hideTopAwardedBadge: s,
						icons: i,
						isInEconLeaderboardsExperiment: d,
						onAddAward: c,
						onHideAward: l,
						onOpenReportFlow: u,
						onHideTooltip: m,
						onShowAllAwards: p,
						onShowTooltip: h,
						showAllAwards: b,
						tooltipType: f,
						thing: v
					} = e, g = ee(v.id, f), w = `${g}-view-all`;
					let x = [];
					x = b ? t : t.length > 5 ? t.slice(0, 4) : t;
					const A = !o && v.isGildable && t.length > 0,
						y = t.length > x.length ? t.slice(x.length).reduce((e, t) => e + (v.awardCountsById && v.awardCountsById[t.id] || 0), 0) : 0,
						j = n.fbt._("& {hidden award count} More", [n.fbt._param("hidden award count", y.toLocaleString())], {
							hk: "1OnmAi"
						});
					return a.a.createElement("div", {
						className: Object(S.a)(Ae.a.awardBadges, r)
					}, Object(O.a)(v.id) && (v.topAwardedType === B.a.Active || v.topAwardedType === B.a.Inactive) && !s && d && a.a.createElement(de, {
						post: v
					}), x.map(e => {
						const t = v.awardCountsById ? v.awardCountsById[e.id] : 0,
							r = i.icon32[e.id];
						return a.a.createElement(ge, {
							award: e,
							count: t,
							iconUrl: r,
							key: e.id,
							onHideAward: l,
							onOpenReportFlow: u,
							onHideTooltip: m,
							onShowTooltip: h,
							postOrComment: v,
							tooltipId: `${g}-${e.id}`,
							tooltipLocation: "icon"
						})
					}), y > 0 && a.a.createElement(a.a.Fragment, null, a.a.createElement("button", {
						"data-click-id": "awards",
						id: w,
						className: Ae.a.showAllButton,
						onClick: p,
						onMouseEnter: () => h(w),
						onMouseLeave: m
					}, j), a.a.createElement(we.c, {
						tooltipId: w,
						text: n.fbt._("View all Awards", null, {
							hk: "3JL2sD"
						})
					})), A && a.a.createElement(ye, {
						onClick: c
					}))
				},
				Ce = r("./src/reddit/actions/gold/reportAward.ts"),
				Ee = r("./src/reddit/controls/Button/index.tsx"),
				Ie = r("./src/reddit/components/AwardBadges/FlagAwardModal/index.m.less"),
				ke = r.n(Ie);
			! function(e) {
				e[e.BEGIN = 0] = "BEGIN", e[e.REPORT_COMMUNITY_AWARD = 1] = "REPORT_COMMUNITY_AWARD", e[e.FLAG_USAGE = 2] = "FLAG_USAGE"
			}(je || (je = {}));
			var Te = e => {
				const t = Object(re.a)(),
					[r, i] = Object(o.useState)(e.award.awardType === _.f.Global ? je.FLAG_USAGE : je.BEGIN),
					d = Object(s.d)(),
					c = () => {
						r === je.BEGIN ? t(Object(A.clickCancelAwardReportFlow)(e.award, e.thing.id)) : r === je.REPORT_COMMUNITY_AWARD ? t(Object(A.clickCancelReportAward)(e.award, e.thing.id)) : r === je.FLAG_USAGE && t(Object(A.clickCancelFlagAwardUsage)(e.award, e.thing.id)), e.onClose()
					},
					l = () => {
						t(Object(A.clickConfirmReportAward)(e.award, e.thing.id)), d(Object(Ce.a)(e.award)), e.onClose()
					},
					u = () => {
						t(Object(A.clickConfirmFlagAwardUsage)(e.award, e.thing.id)), d(Object(p.f)(Object(p.e)(n.fbt._("{award name} Award successfully flagged for review.", [n.fbt._param("award name", e.award.name)], {
							hk: "24QeOL"
						}), h.b.SuccessAward))), e.onClose()
					},
					m = a.a.createElement(a.a.Fragment, null, a.a.createElement(Ee.o, {
						onClick: () => {
							t(Object(A.clickReportAward)(e.award, e.thing.id)), i(je.REPORT_COMMUNITY_AWARD)
						},
						className: ke.a.reportStepButton
					}, n.fbt._("This community award violates Reddit's rules.", null, {
						hk: "2ObuGq"
					})), a.a.createElement(Ee.o, {
						onClick: () => {
							t(Object(A.clickFlagAwardUsage)(e.award, e.thing.id)), i(je.FLAG_USAGE)
						},
						className: ke.a.reportStepButton
					}, n.fbt._("This award is being used inappropriately.", null, {
						hk: "Y8giW"
					})));
				switch (r) {
					case je.BEGIN:
						return a.a.createElement(y.a, {
							withOverlay: !0,
							hideCancelButton: !0,
							onConfirm: c,
							onCancel: c,
							onClose: c,
							headerText: n.fbt._("What's Wrong?", null, {
								hk: "JqSAe"
							}),
							actionText: n.fbt._("Cancel", null, {
								hk: "370pdF"
							}),
							modalText: m
						});
					case je.REPORT_COMMUNITY_AWARD:
						return a.a.createElement(y.a, {
							withOverlay: !0,
							onConfirm: l,
							onCancel: c,
							onClose: c,
							headerText: n.fbt._("Report Community Award", null, {
								hk: "3T6dhH"
							}),
							actionText: n.fbt._("Report Award", null, {
								hk: "dHwed"
							}),
							modalText: n.fbt._("Do you want to report the {award name} Award?", [n.fbt._param("award name", e.award.name)], {
								hk: "4by1t"
							})
						});
					case je.FLAG_USAGE:
						return a.a.createElement(y.a, {
							withOverlay: !0,
							onConfirm: u,
							onCancel: c,
							onClose: c,
							headerText: n.fbt._("Flag Award Usage", null, {
								hk: "395heU"
							}),
							actionText: n.fbt._("Flag Award Usage", null, {
								hk: "24B1WV"
							}),
							modalText: n.fbt._("Is the {award name} Award inappropriate on this content? Reddit uses this information to improve the awarding experience and remove awards that are being misused.", [n.fbt._param("award name", e.award.name)], {
								hk: "3P3dMP"
							})
						})
				}
			};
			const Pe = [32, 128],
				Me = Object(i.c)({
					allAwards: e => e.awards.models,
					isConfirmModalOpen: e => "AwardBadges--Modal--HideAwardConfirmation" === Object(C.a)(e),
					isInEconLeaderboardsExperiment: E.b
				}),
				Se = e => Object(O.a)(e.id) ? e.postId : e.id,
				Ne = Object(s.b)(Me, (e, {
					thing: t
				}) => ({
					hideAward: r => e(f({
						awardId: r,
						thingId: Se(t)
					})),
					onAddAward: (r, n) => {
						const o = Se(t);
						return e(Object(v.d)({
							awardId: n,
							correlationId: r,
							thingId: o
						}))
					},
					onHideTooltip: () => e(Object(w.i)()),
					onShowTooltip: t => e(Object(w.f)({
						tooltipId: t
					})),
					onToggleHideAwardModal: () => e(Object(g.i)("AwardBadges--Modal--HideAwardConfirmation")),
					triggerOverlayAnimation: () => e(Object(d.b)(Se(t)))
				}));
			class Be extends a.a.Component {
				constructor(e) {
					super(e), this.handleAddAward = async e => {
						const t = Object(x.e)(x.a.GildingFlow, !0),
							{
								onAddAward: n,
								sendEvent: o,
								thing: a
							} = this.props;
						n(t, e);
						const {
							clickAddAward: s
						} = await Promise.resolve().then(r.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						o(s(a.id))
					}, this.handleShowAllAwards = () => {
						this.setState({
							showAllAwards: !0
						})
					}, this.handleHideAward = async e => {
						const {
							sendEvent: t,
							onToggleHideAwardModal: n,
							thing: o
						} = this.props;
						this.setState({
							selectedAward: e
						});
						const {
							clickHideAward: a
						} = await Promise.resolve().then(r.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						t(a(e, o.id)), n()
					}, this.handleHideAwardConfirmed = async () => {
						const {
							sendEvent: e,
							thing: t
						} = this.props, {
							selectedAward: n
						} = this.state, {
							clickConfirmHideAward: o
						} = await Promise.resolve().then(r.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						n && (e(o(n, t.id)), this.props.hideAward(n.id))
					}, this.handleHideAwardCanceled = async () => {
						const {
							sendEvent: e,
							thing: t
						} = this.props, {
							selectedAward: n
						} = this.state, {
							clickCancelHideAward: o
						} = await Promise.resolve().then(r.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						n && e(o(n, t.id))
					}, this.handleShowTooltip = e => {
						const {
							onShowTooltip: t
						} = this.props;
						t(e)
					}, this.handleHideTooltip = () => {
						const {
							onHideTooltip: e
						} = this.props;
						e()
					}, this.handleOpenReportFlow = e => {
						this.props.sendEvent(Object(A.clickAwardReportFlow)(e, this.props.thing.id)), this.setState({
							reportingAward: e
						})
					}, this.state = {
						selectedAward: null,
						showAllAwards: !1,
						reportingAward: null
					}
				}
				render() {
					const {
						allAwards: e,
						awardsCountInView: t,
						awardsPlaqueStyle: r,
						className: o,
						currentUser: s,
						hideCta: i,
						hideTopAwardedBadge: d,
						isConfirmModalOpen: c,
						isInEconLeaderboardsExperiment: l,
						isLoggedIn: u,
						isPostDetail: m,
						onHideTooltip: p,
						onShowTooltip: h,
						onToggleHideAwardModal: b,
						prefs: f,
						thing: v,
						triggerOverlayAnimation: g,
						tooltipType: w
					} = this.props, {
						showAllAwards: x
					} = this.state, A = f.reduceAnimationsFromAwards || "undefined" != typeof window && !!window.matchMedia("(prefers-reduced-motion)").matches, j = Object.keys(v.awardCountsById || {}), C = Object(_.r)(j.map(t => e[t]).filter(Boolean)), E = {};
					for (const n of Pe) {
						const e = {};
						E[`icon${n}`] = e;
						for (const t of C) e[t.id] = Object(I.c)({
							award: t,
							postOrComment: v,
							size: n,
							prefersReducedMotion: A
						})
					}
					const k = !!s && s.id === v.authorId;
					return a.a.createElement(a.a.Fragment, null, r ? a.a.createElement(he, {
						awards: C,
						awardsCountInView: t,
						className: o,
						hideAddAwardButton: i || !v.isGildable || k,
						hideTopAwardedBadge: d,
						icons: E,
						isInEconLeaderboardsExperiment: l,
						multiline: !!m,
						onAddAward: this.handleAddAward,
						onHideAward: this.handleHideAward,
						onOpenReportFlow: this.handleOpenReportFlow,
						onHideTooltip: this.handleHideTooltip,
						onShowTooltip: this.handleShowTooltip,
						post: v,
						prefersReducedMotion: A,
						tooltipType: w,
						triggerOverlayAnimation: g
					}) : a.a.createElement(_e, {
						awards: C,
						className: o,
						hideBadgeButton: i || !u,
						hideTopAwardedBadge: d,
						icons: E,
						isInEconLeaderboardsExperiment: l,
						onAddAward: this.handleAddAward,
						onHideAward: this.handleHideAward,
						onOpenReportFlow: this.handleOpenReportFlow,
						onHideTooltip: p,
						onShowAllAwards: this.handleShowAllAwards,
						onShowTooltip: h,
						showAllAwards: x || !!m,
						thing: v,
						tooltipType: w
					}), c && s && this.state.selectedAward && a.a.createElement(y.a, {
						actionText: n.fbt._("Hide", null, {
							hk: "4FKnfB"
						}),
						modalText: k ? Object(O.a)(v.id) ? n.fbt._("The award giver(s) will be notified that you have hidden their {awardName} award. This action cannot be undone. Are you sure you want to hide awards of this type from your post?", [n.fbt._param("awardName", this.state.selectedAward.name)], {
							hk: "4a7Cbu"
						}) : n.fbt._("The award giver(s) will be notified that you have hidden their {awardName} award. This action cannot be undone. Are you sure you want to hide awards of this type from your comment?", [n.fbt._param("awardName", this.state.selectedAward.name)], {
							hk: "294BlY"
						}) : Object(O.a)(v.id) ? n.fbt._("The award giver(s) and recipient will be notified that a moderator has hidden the {awardName} award. Are you sure you want to hide this award from the post?", [n.fbt._param("awardName", this.state.selectedAward.name)], {
							hk: "3LQVs7"
						}) : n.fbt._("The award giver(s) and recipient will be notified that a moderator has hidden the {awardName} award. Are you sure you want to hide this award from the comment?", [n.fbt._param("awardName", this.state.selectedAward.name)], {
							hk: "qlfga"
						}),
						onConfirm: this.handleHideAwardConfirmed,
						onCancel: this.handleHideAwardCanceled,
						toggleModal: b,
						withOverlay: !0
					}), this.state.reportingAward && a.a.createElement(Te, {
						award: this.state.reportingAward,
						thing: v,
						onClose: () => this.setState({
							reportingAward: null
						})
					}))
				}
			}
			t.a = Object(T.c)(Object(k.e)(Ne(Object(j.c)(Be))))
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
				return C
			})), r.d(t, "c", (function() {
				return M
			})), r.d(t, "a", (function() {
				return S
			}));
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				s = r("./node_modules/reselect/es/index.js"),
				i = r("./src/config.ts"),
				d = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				l = r("./src/reddit/actions/tooltip.ts"),
				u = r("./src/higherOrderComponents/makeAsync.tsx");
			var m = Object(u.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => r.e("SubredditPremiumBadgeHovercardTooltip").then(r.bind(null, "./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/tooltip.tsx")).then(e => e.default)
				}),
				p = r("./src/reddit/components/InfoTextTooltip/index.tsx"),
				h = r("./src/reddit/featureFlags/index.ts"),
				b = r("./src/reddit/helpers/economics/sortBadges.ts"),
				f = r("./src/reddit/icons/svgs/AddSquare/index.tsx"),
				v = r("./src/reddit/models/Badge/index.ts");
			var g = Object(u.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => r.e("CustomBadgeHovercardTooltip").then(r.bind(null, "./src/reddit/components/Badges/UserDisplay/AddCustomTooltip/tooltip.tsx")).then(e => e.default)
				}),
				w = r("./src/reddit/components/Badges/UserDisplay/index.m.less"),
				x = r.n(w);

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const A = "add-custom-badge-tooltip",
				y = 100,
				j = 2 * y,
				_ = 24;
			class C extends o.a.Component {
				constructor() {
					super(...arguments), this.mouseOverTooltip = void 0, this.enterTimeout = void 0, this.exitTimeout = void 0, this.handleMouseEnter = e => {
						this.mouseOverTooltip && this.mouseOverTooltip !== e ? this.props.onShowTooltip(e) : (clearTimeout(this.enterTimeout), this.enterTimeout = window.setTimeout(() => {
							this.mouseOverTooltip === e && this.props.onShowTooltip(e)
						}, y)), this.mouseOverTooltip = e
					}, this.handleMouseLeave = () => {
						clearTimeout(this.exitTimeout), clearTimeout(this.enterTimeout), this.mouseOverTooltip = void 0, this.exitTimeout = window.setTimeout(() => {
							this.mouseOverTooltip || (clearTimeout(this.enterTimeout), this.props.onHideTooltip())
						}, j)
					}
				}
				render() {
					const {
						badges: e
					} = this.props;
					if (this.props.usePlaceholder && !e.length) return o.a.createElement("img", {
						className: Object(d.a)(x.a.image, this.props.className),
						src: `${i.a.assetPath}/img/badges/placeholder.png`
					});
					const t = `${A}-${this.props.uniqueIdentifier}`,
						r = this.props.badgeSize || _;
					return o.a.createElement(n.Fragment, null, this.props.showAddCustom && o.a.createElement("div", {
						className: x.a.wrapper,
						id: t,
						onMouseEnter: () => this.handleMouseEnter(t),
						onMouseLeave: () => this.handleMouseLeave()
					}, o.a.createElement("button", {
						className: x.a.addCustomLink,
						onClick: this.props.onOpenUploadDialog
					}, o.a.createElement(f.a, {
						className: x.a.addCustom
					})), o.a.createElement(g, {
						className: x.a.badgeHovercard,
						subredditId: this.props.subredditId,
						targetPosition: ["left", "bottom"],
						tooltipId: t,
						tooltipPosition: ["left", "top"],
						onHideTooltip: () => this.props.onHideTooltip()
					})), Object(b.a)(e).map(e => {
						const t = Object(v.d)(r, r, e),
							a = `badges-display-${e.id}-${this.props.uniqueIdentifier}`;
						return o.a.createElement(n.Fragment, {
							key: `badges-fragement-${e.id}`
						}, o.a.createElement("div", {
							className: Object(d.a)(x.a.wrapper, this.props.className),
							key: `wrapper-${e.id}`,
							onMouseEnter: () => this.handleMouseEnter(a),
							onMouseLeave: () => this.handleMouseLeave()
						}, o.a.createElement("img", {
							className: x.a.image,
							id: a,
							key: e.id,
							src: t.url2x,
							srcSet: `${t.url}, ${t.url2x} 2x`,
							style: {
								height: `${r}px`
							}
						}), this.props.useHovercard ? o.a.createElement(m, {
							badge: e,
							correlationId: this.props.correlationId,
							className: x.a.badgeHovercard,
							key: `tooltip-${e.id}`,
							subredditId: this.props.subredditId,
							targetPosition: ["left", "bottom"],
							tooltipId: a,
							tooltipPosition: ["left", "top"],
							userId: "userId" in this.props ? this.props.userId : void 0
						}) : o.a.createElement(p.c, {
							caretOnTop: !0,
							key: `tooltip-${e.id}`,
							tooltipId: a,
							text: e.title
						})))
					}))
				}
			}
			const E = [],
				I = Object(s.c)({
					badgeIds: (e, {
						subredditId: t,
						userId: r
					}) => {
						var n;
						return (null === (n = e.users.appliedBadges[r]) || void 0 === n ? void 0 : n[t]) || E
					},
					allBadges: e => e.badges.models,
					useHovercard: h.d.spSpecialMemberships
				}),
				k = Object(s.c)({
					badgeIds: (e, {
						subredditId: t
					}) => {
						var r;
						const n = e.user.account;
						return n && (null === (r = e.users.appliedBadges[n.id]) || void 0 === r ? void 0 : r[t]) || E
					},
					allBadges: e => e.badges.models,
					useHovercard: h.d.spSpecialMemberships
				}),
				T = e => ({
					onShowTooltip: t => e(Object(l.f)({
						tooltipId: t
					})),
					onHideTooltip: () => e(Object(l.i)()),
					onOpenUploadDialog: () => e(Object(c.j)())
				});

			function P(e) {
				const {
					badgeIds: t,
					allBadges: r,
					...n
				} = e, a = t.map(e => r[e]).filter(Boolean);
				return o.a.createElement(C, O({
					badges: a
				}, n))
			}
			const M = Object(a.b)(I, T)(P),
				S = Object(a.b)(k, T)(P)
		},
		"./src/reddit/components/ConfirmUserActionModal/index.m.less": function(e, t, r) {
			e.exports = {
				buttonWidth: "ogOEj4x-0BpDZWeccJwxx",
				ModalText: "_2YxEi97B6Nm7NCgLG6pCud",
				modalText: "_2YxEi97B6Nm7NCgLG6pCud"
			}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./node_modules/react/index.js"),
				a = r.n(o),
				s = r("./src/higherOrderComponents/asModal/index.tsx"),
				i = r("./src/reddit/components/ModalStyledComponents/index.tsx"),
				d = r("./src/reddit/controls/TextButton/index.tsx"),
				c = r("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				l = r("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				u = r.n(l);
			const m = e => e.preventDefault();
			t.a = Object(s.a)(e => a.a.createElement(i.e, null, a.a.createElement(i.i, null, a.a.createElement(c.a, null, a.a.createElement(i.q, null, e.headerText || n.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), a.a.createElement(d.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, a.a.createElement(i.b, null)))), a.a.createElement(i.l, null, a.a.createElement(i.p, {
				className: u.a.ModalText
			}, e.modalText)), a.a.createElement(i.g, null, !e.hideCancelButton && a.a.createElement(i.a, {
				className: u.a.buttonWidth,
				onMouseDown: m,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || n.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), a.a.createElement(i.u, {
				className: u.a.buttonWidth,
				onMouseDown: m,
				onClick: t => {
					e.onConfirm(), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
				},
				"data-redditstyle": !e.disableRedditStyle,
				disabled: e.isDisabled
			}, e.actionText))))
		},
		"./src/reddit/components/Econ/Audio/index.m.less": function(e, t, r) {
			e.exports = {
				liveContainer: "reBgd-KYxGiWr_ZyzPgr_",
				userRow: "poHPrsWD-JtPCRh7foOm-",
				isListener: "_3DcaFqbAKhkVLYT6i2vxLy",
				listener: "_3fwbxY1I7EhKfr8MK7xT0S",
				speaker: "_1zEocOo_0euorSuKdx4-t2",
				snoovatar: "_23HWId-tu5O6LulDxLoVD1",
				userIcon: "Xzl_H3G7Qyd756Y0rQz4w",
				classic: "_2XdJHCLvUWJ2gdGBnugD5t",
				buttonContainer: "_2yhW3k4B2CUUSvt-3mqV3S",
				muteContainer: "_3mxKqH41iEa2lxIov7Eup-",
				muteIcon: "_18bneLE5nnOdUrY8P-eepo",
				fullRow: "_2cJzNEK-EGk9V7LDTIEFb-",
				endedContainer: "_21e_ZHJXEi7zMZ6XWWBz",
				speakerRings: "_1XlH7yy1d0pGBQ0hDDAaDv",
				fadein: "gReZnzbKn95aY9xCmFx8M",
				reverb: "_3ZoXC3S9OH5sdTAi4tFt7Z",
				fadeout: "_3os88AwHIpr1NBABjT_1zz",
				nightMode: "z6LY0qX0g0puWE-RPF8XB",
				liveClassicContainer: "_3JLTqaLlFv8aPfzi9eQazu",
				classicSpeaker: "QsNKjj4EDQH2hYFYQB6T4",
				endedClassicContainer: "_2YXJIDv8TLzRj5vNdYs-_t",
				metaStatus: "OvWqIzFfbWF0I-5FMZ18I",
				isLive: "_3Vqz8YzNczoVWpOtpwXAit",
				processingButton: "nxYqAuGeco2RA9q0e9ECw"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.m.less": function(e, t, r) {
			e.exports = {
				badge: "ekl2maIRbrCrsYFt1OwaE"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return f
			}));
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				s = r("./node_modules/reselect/es/index.js"),
				i = r("./src/lib/classNames/index.ts"),
				d = r("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				c = r("./src/reddit/actions/tooltip.ts"),
				l = r("./src/reddit/components/Badges/UserDisplay/index.tsx"),
				u = r("./src/reddit/featureFlags/index.ts"),
				m = r("./src/reddit/hooks/useUserContext.ts"),
				p = r("./src/reddit/selectors/economics.ts"),
				h = r("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.m.less"),
				b = r.n(h);

			function f(e) {
				var t, r;
				const {
					currentUser: n
				} = Object(m.a)(), a = null !== (t = e.badges) && void 0 !== t ? t : Object(p.i)(e.badgeIds, null !== (r = e.allBadges) && void 0 !== r ? r : {});
				return a.length ? o.a.createElement(l.b, {
					useHovercard: !0,
					badges: a,
					badgeSize: e.badgeSize,
					className: Object(i.a)(e.className, b.a.badge),
					uniqueIdentifier: e.uniqueIdentifier,
					showAddCustom: e.customBadgesEnabled && e.premiumEnabled && e.showAddCustom && a.length < 2 && (null == n ? void 0 : n.id) === e.userId,
					subredditId: e.subredditId,
					userId: e.userId,
					onShowTooltip: e.onShowTooltip,
					onHideTooltip: e.onHideTooltip,
					onOpenUploadDialog: e.onOpenUploadDialog
				}) : null
			}
			const v = [];
			t.b = Object(a.b)(() => Object(s.c)({
				badgeIds: (e, {
					subredditId: t,
					userId: r
				}) => {
					var n;
					return (null === (n = e.users.appliedBadges[r]) || void 0 === n ? void 0 : n[t]) || v
				},
				allBadges: e => e.badges.models,
				customBadgesEnabled: u.d.spCustomBadgesAndEmotes,
				premiumEnabled: e => u.d.spSpecialMemberships(e)
			}), e => ({
				onShowTooltip: t => e(Object(c.f)({
					tooltipId: t
				})),
				onHideTooltip: () => e(Object(c.i)()),
				onOpenUploadDialog: () => e(Object(d.j)())
			}))(f)
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				s = r("./node_modules/reselect/es/index.js"),
				i = r("./src/reddit/selectors/economics.ts");

			function d(e) {
				const {
					badges: t
				} = e, r = t[t.length - 1];
				return r && !e.ignore ? o.a.cloneElement(e.children, {
					style: r.extra && r.extra.style && r.extra.style.color ? {
						...e.children.props.style || {},
						color: r.extra.style.color,
						fontWeight: 700
					} : e.children.props.style
				}) : e.children
			}
			t.b = Object(a.b)(() => Object(s.c)({
				badges: (e, {
					subredditId: t,
					userId: r
				}) => Object(i.q)(e, t, r)
			}))(d)
		},
		"./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/higherOrderComponents/makeAsync.tsx");
			const o = Object(n.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => r.e("GovernanceUserPublicPointsDisplay").then(r.bind(null, "./src/reddit/components/Governance/UserPublicPointsDisplay/index.tsx")).then(e => e.default)
			});
			t.a = o
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/ModIdCard/async.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var n = r("./src/higherOrderComponents/makeAsync.tsx"),
				o = r("./src/lib/loadWithRetries/index.ts");
			const a = "UserInfoTooltip";
			t.b = Object(n.a)({
				ErrorComponent: () => null,
				getComponent: () => Object(o.a)(() => Promise.all([r.e("AuthorHovercard~Reddit"), r.e("AuthorHovercard")]).then(r.bind(null, "./src/reddit/components/Hovercards/AuthorHovercard/ModIdCard/index.tsx"))).then(e => e.default),
				LoadingComponent: () => null
			})
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				a = r("./src/higherOrderComponents/makeAsync.tsx"),
				s = r("./src/lib/loadWithRetries/index.ts");
			const i = "UserInfoTooltip",
				d = e => e.alwaysShowChildren ? o.a.createElement(o.a.Fragment, null, e.children) : null;
			t.b = Object(a.a)({
				ErrorComponent: d,
				getComponent: () => Object(s.a)(() => Promise.all([r.e("AuthorHovercard~Reddit"), r.e("AuthorHovercard")]).then(r.bind(null, "./src/reddit/components/Hovercards/AuthorHovercard/_AuthorHovercard.tsx"))).then(e => e.default),
				LoadingComponent: d
			})
		},
		"./src/reddit/components/Hovercards/HoverDiv/index.m.less": function(e, t, r) {
			e.exports = {
				HoverDiv: "_2mHuuvyV9doV3zwbZPtIPG",
				hoverDiv: "_2mHuuvyV9doV3zwbZPtIPG"
			}
		},
		"./src/reddit/components/Hovercards/HoverDiv/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return x
			})), r.d(t, "b", (function() {
				return O
			}));
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				a = r("./src/lib/lessComponent.tsx"),
				s = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/reselect/es/index.js"),
				d = r("./src/reddit/actions/profile/index.ts"),
				c = r("./src/reddit/actions/tooltip.ts"),
				l = r("./src/reddit/selectors/tooltip.ts");
			const u = Object(i.c)({
				dropdownIsOpen: (e, t) => Object(l.b)(t.tooltipId)(e)
			});
			var m = Object(s.b)(u, (e, t) => ({
					onCloseUserDropdown: () => e(Object(c.i)()),
					onOpenUserDropdown: async () => {
						e(Object(c.f)({
							tooltipId: t.tooltipId
						})), t.authorOrSubredditName && (await e(Object(d.d)(t.authorOrSubredditName)), t.sendHoverEvent(), t.onHover && t.onHover())
					}
				})),
				p = r("./src/reddit/actions/subreddit.ts");
			const h = Object(i.c)({
				dropdownIsOpen: (e, t) => Object(l.b)(t.tooltipId)(e)
			});
			var b = Object(s.b)(h, (e, t) => ({
					onCloseUserDropdown: () => e(Object(c.i)()),
					onOpenUserDropdown: async () => {
						var r;
						e(Object(c.f)({
							tooltipId: t.tooltipId
						})), t.authorOrSubredditName && e(Object(p.u)(t.authorOrSubredditName)), null === (r = t.onShow) || void 0 === r || r.call(t)
					}
				})),
				f = r("./src/reddit/components/Hovercards/HoverDiv/index.m.less"),
				v = r.n(f);
			class g extends o.a.Component {
				constructor() {
					super(...arguments), this.closeHovercardTimeoutId = 0, this.openHovercardTimeoutId = 0, this.isHovering = !1, this.hoverEl = void 0, this.onHoverElMouseEnter = () => {
						this.isHovering = !0
					}, this.onHoverElMouseLeave = () => {
						this.isHovering = !1
					}, this.onMouseEnter = e => {
						this.closeHovercardTimeoutId && clearTimeout(this.closeHovercardTimeoutId), this.openHovercardTimeoutId = window.setTimeout(() => {
							this.isHovering || this.props.dropdownIsOpen || this.props.onOpenUserDropdown()
						}, 500)
					}, this.onMouseLeave = () => {
						this.props.onClick || (this.openHovercardTimeoutId && clearTimeout(this.openHovercardTimeoutId), this.closeHovercardTimeoutId = window.setTimeout(() => {
							this.isHovering || this.props.onCloseUserDropdown()
						}, 300))
					}, this.onClick = e => {
						this.props.onlyLeaveOnClick && (this.isHovering ? clearTimeout(this.openHovercardTimeoutId) : clearTimeout(this.closeHovercardTimeoutId)), this.props.onClick && this.props.onClick(e)
					}
				}
				componentDidMount() {
					const e = document.getElementById(this.props.hoverId);
					e && (this.hoverEl = e, this.addHoverListeners(this.hoverEl))
				}
				componentWillUnmount() {
					this.hoverEl && this.removeHoverListeners(this.hoverEl), this.hoverEl = void 0, this.openHovercardTimeoutId && window.clearTimeout(this.openHovercardTimeoutId)
				}
				addHoverListeners(e) {
					e.addEventListener("mouseenter", this.onHoverElMouseEnter), this.props.onlyLeaveOnClick || e.addEventListener("mouseleave", this.onHoverElMouseLeave)
				}
				removeHoverListeners(e) {
					e.removeEventListener("mouseenter", this.onHoverElMouseEnter), this.props.onlyLeaveOnClick || e.removeEventListener("mouseleave", this.onHoverElMouseLeave)
				}
				render() {
					const {
						children: e,
						className: t
					} = this.props;
					return o.a.createElement("div", {
						className: t,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave,
						onClick: this.onClick
					}, e)
				}
			}
			const w = a.a.wrapped(g, "HoverDiv", v.a),
				x = m(w),
				O = b(w)
		},
		"./src/reddit/components/Hovercards/helpers.m.less": function(e, t, r) {
			e.exports = {
				UserActionItem: "_3HFQBVggvR9KDsFzm7jIdr",
				userActionItem: "_3HFQBVggvR9KDsFzm7jIdr"
			}
		},
		"./src/reddit/components/Hovercards/helpers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return d
			}));
			var n = r("./src/lib/lessComponent.tsx"),
				o = r("./src/reddit/layout/row/Inline/index.tsx"),
				a = r("./src/reddit/components/Hovercards/helpers.m.less"),
				s = r.n(a);
			const i = n.a.wrapped(o.a, "UserActionItem", s.a),
				d = e => {
					const {
						author: t,
						itemId: r,
						subredditName: n,
						tooltipIdPrefix: o,
						tooltipType: a
					} = e;
					let s = o;
					return r && (s = `${s}--${r}`), a && (s = `${s}--${a}`), t && (s = `${s}--${t}`), n && (s = `${s}--${n}`), s
				}
		},
		"./src/reddit/components/InfoTextTooltip/Hooked.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				a = r("./src/lib/classNames/index.ts"),
				s = r("./src/reddit/components/InfoTextTooltip/hooked.m.less"),
				i = r.n(s);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = o.a.memo((function({
				visible: e,
				...t
			}) {
				const [r, s] = Object(n.useState)(e);
				return Object(n.useEffect)(() => {
					let t = window.setTimeout(() => {
						t = void 0, s(e)
					}, 0);
					return () => {
						t && window.clearTimeout(t), s(!1)
					}
				}, [e]), e ? o.a.createElement("div", d({
					className: Object(a.a)(i.a.tooltip, t.className, {
						[i.a.visible]: r
					})
				}, t.popperProps), t.children, r && o.a.createElement("div", d({
					className: i.a.arrow
				}, t.arrowProps))) : null
			}))
		},
		"./src/reddit/components/InfoTextTooltip/hooked.m.less": function(e, t, r) {
			e.exports = {
				arrow: "_1jsc29CjRXZWjd2tr0Ji0Y",
				tooltip: "_2J_zB4R1FH2EjGMkQjedwc",
				visible: "u6HtAZu8_LKL721-EnKuR"
			}
		},
		"./src/reddit/components/LastAuthorModNoteIcon/index.m.less": function(e, t, r) {
			e.exports = {
				hoverContainer: "_282iT6zlGPTjxs4_wnUw_R",
				showBackground: "RaBr7sOrqehAgubv6f1hE",
				isNightMode: "_1-EjTsf9H83ryPyVjAZp2A"
			}
		},
		"./src/reddit/components/LastAuthorModNoteIcon/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				s = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/actions/tooltip.ts"),
				d = r("./src/reddit/components/Hovercards/AuthorHovercard/ModIdCard/async.tsx"),
				c = r("./src/reddit/components/Hovercards/helpers.ts"),
				l = r("./src/reddit/components/Hovercards/HoverDiv/index.tsx"),
				u = r("./src/reddit/helpers/trackers/modNote.ts"),
				m = r("./src/reddit/hooks/useTracking.ts"),
				p = r("./src/reddit/components/ModNoteItem/index.tsx"),
				h = r("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				b = r("./src/reddit/controls/Dropdown/index.tsx"),
				f = r("./src/reddit/components/LastAuthorModNoteTooltip/index.m.less"),
				v = r.n(f);

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const w = Object(h.a)(b.a),
				x = ({
					modNoteData: e,
					isOverlay: t,
					isPost: r,
					isNightMode: a,
					onClick: i,
					subredditId: d
				}) => {
					const c = t && r,
						l = Object(m.a)();
					return Object(n.useEffect)(() => (l(Object(u.v)({
						modNote: e,
						subredditId: d
					})), () => l(Object(u.q)({
						modNote: e,
						subredditId: d
					}))), []), o.a.createElement(o.a.Fragment, null, c && o.a.createElement("div", {
						className: v.a.TopSpacer
					}), o.a.createElement("div", {
						className: v.a.backgroundContrast
					}, o.a.createElement(p.b, {
						className: Object(s.a)(v.a.ModNoteItem, {
							[v.a.isNightMode]: a
						}),
						modNote: e,
						subredditId: d,
						context: p.a.LastAuthorUserNoteTooltip,
						onClick: i
					})), !c && o.a.createElement("div", {
						className: v.a.BottomSpacer
					}))
				},
				O = e => {
					const t = e.isOverlay && e.isPost,
						r = t ? ["center", "bottom"] : ["center", "top"],
						n = t ? ["center", "top"] : ["center", "bottom"];
					return o.a.createElement(w, g({
						className: v.a.dropdown,
						id: e.hoverId,
						isOpen: e.dropdownIsOpen,
						targetPosition: r,
						tooltipPosition: n,
						style: {
							backgroundColor: "transparent",
							border: "none",
							boxShadow: "none"
						}
					}, e), o.a.createElement(x, e))
				};
			O.WrappedComponent = x;
			var A = O,
				y = r("./src/reddit/components/PostTopMeta/index.tsx"),
				j = r("./src/reddit/helpers/isPost.ts"),
				_ = r("./src/reddit/hooks/useIsOverlay.ts"),
				C = r("./src/reddit/icons/fonts/index.tsx"),
				E = r("./src/reddit/models/ModUserNotes/index.ts"),
				I = r("./src/reddit/selectors/modUserNotes.ts"),
				k = r("./src/reddit/selectors/tooltip.ts"),
				T = r("./src/reddit/selectors/user.ts"),
				P = r("./src/reddit/components/LastAuthorModNoteIcon/index.m.less"),
				M = r.n(P);
			t.a = ({
				postOrComment: e,
				className: t
			}) => {
				var r;
				const u = Object(_.a)(),
					m = Object(E.g)(e.id, u),
					p = Object(E.h)(e),
					h = Object(a.e)(T.bb),
					b = Object(a.e)(t => Object(I.a)(t, e.authorId, p)),
					f = Object(a.e)(e => Object(k.a)(e) === m),
					v = Object(a.d)(),
					g = Object(n.useCallback)(() => v(Object(i.h)({
						tooltipId: m
					})), [v, m]),
					w = Object(n.useCallback)(() => v(Object(i.i)()), [v]),
					x = Object(n.useCallback)(() => {
						const t = Object(c.b)({
							author: null == b ? void 0 : b.user.displayName,
							itemId: e.id,
							tooltipIdPrefix: d.a,
							tooltipType: u ? y.c.Lightbox : void 0
						});
						v(Object(i.h)({
							tooltipId: t,
							args: {
								isModNotesView: !0
							}
						}))
					}, [e, b, v, u]);
				if (!b) return null;
				const O = "label" in b && (null == b ? void 0 : b.label) || E.c,
					P = Object(C.b)(E.e[O], {
						isFilled: !0
					}),
					S = `${m}-hover-id`;
				return o.a.createElement(l.a, {
					className: Object(s.a)(t, M.a.hoverContainer, {
						[M.a.isNightMode]: h,
						[M.a.showBackground]: f
					}),
					tooltipId: m,
					authorOrSubredditName: (null === (r = b.operator) || void 0 === r ? void 0 : r.displayName) || "",
					hoverId: S,
					sendHoverEvent: () => {},
					onClick: e => {
						e.stopPropagation(), g()
					}
				}, o.a.createElement(P, {
					style: {
						color: E.d[O],
						fontSize: "12px",
						lineHeight: "12px"
					}
				}), o.a.createElement("div", {
					id: m,
					onMouseLeave: w
				}, o.a.createElement(A, {
					dropdownIsOpen: f,
					hoverId: S,
					modNoteData: b,
					isOverlay: u,
					isPost: Object(j.a)(e.id),
					isNightMode: h,
					subredditId: p,
					tooltipId: m,
					onClick: x
				})))
			}
		},
		"./src/reddit/components/LastAuthorModNoteTooltip/index.m.less": function(e, t, r) {
			e.exports = {
				dropdown: "GPstmeFeO4czqJR2zs1mz",
				backgroundContrast: "_3r14JJj4Xkm_GnndoMhqik",
				ModNoteItem: "BQRl_o5B2PQPF96yT1qZc",
				modNoteItem: "BQRl_o5B2PQPF96yT1qZc",
				isNightMode: "_2NlJQ9MQqeRtsH7eKMyZVd",
				BottomSpacer: "sLQ_5L4_zMOcWEY-pLAkI",
				bottomSpacer: "sLQ_5L4_zMOcWEY-pLAkI",
				TopSpacer: "_2nXhIGpJFqVn_qWacMlFhL",
				topSpacer: "_2nXhIGpJFqVn_qWacMlFhL"
			}
		},
		"./src/reddit/components/ModNoteItem/index.m.less": function(e, t, r) {
			e.exports = {
				modNote: "pGw5f7WKM2dO9R0Aotv_x",
				header: "_3fOY2z5qmhIMTA5pHRw3HR",
				label: "_1s8o7TA7uhyKDAg_gBrROJ",
				labelIcon: "Z6i_tRKSyOfgORihc8AE2",
				note: "_16zfBhiOYAW7fHRK1jNOh",
				noLabel: "_1AvILjWpUTsm2yDYqIToxg",
				metadata: "OtVR2-taBTlpgc-PYOW3y",
				operatorBlock: "_15WP0iKlbJ_q8GgQVkCs0c",
				userIcon: "_399VmO76IeqVl7VMLjAdBG",
				createdDate: "_1wtfZke59yzfGrkBaSwBaO",
				deleteButton: "xqKTVgMXnrQEGC3NlgRNr",
				link: "_2Dl07XZ7LNM7tsrbGG4Ym1"
			}
		},
		"./src/reddit/components/ModNoteItem/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			var n, o = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./node_modules/react/index.js"),
				s = r.n(a),
				i = r("./node_modules/react-redux/es/index.js"),
				d = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/helpers/trackers/modNote.ts"),
				l = r("./src/reddit/hooks/useTracking.ts"),
				u = r("./src/reddit/components/UserIcon/index.tsx"),
				m = r("./src/reddit/controls/InternalLink/index.tsx"),
				p = r("./src/reddit/hooks/useLocale.ts"),
				h = r("./src/reddit/icons/fonts/index.tsx"),
				b = r("./src/reddit/models/ModUserNotes/index.ts"),
				f = r("./src/reddit/selectors/user.ts"),
				v = r("./src/reddit/components/ModNoteItem/index.m.less"),
				g = r.n(v);
			! function(e) {
				e.LastAuthorUserNoteTooltip = "LastAuthorUserNoteTooltip", e.ModIdCard = "ModIdCard"
			}(n || (n = {}));
			t.b = e => {
				var t, r, n;
				const a = Object(i.e)(f.bb),
					{
						className: v,
						modNote: w,
						onClick: x,
						subredditId: O,
						context: A
					} = e,
					y = "label" in w && w.label || b.c,
					j = "note" in w ? w.note : void 0,
					_ = Object(h.b)(b.e[y || "bot"], {
						isFilled: !0
					}),
					C = Object(p.a)(),
					E = new Intl.DateTimeFormat(C, {
						month: "short",
						day: "numeric",
						year: "numeric",
						hour: "numeric",
						minute: "numeric"
					}).format(new Date(w.createdAt)),
					I = w.commentInfo,
					{
						postInfo: k
					} = w,
					T = k ? k.permalink : I ? I.permalink : void 0,
					P = Object(h.b)("external_link"),
					M = Object(l.a)();
				return s.a.createElement("div", {
					className: Object(d.a)(v, g.a.modNote),
					onClick: e => {
						e.stopPropagation(), x && x(e), (() => {
							const e = "LastAuthorUserNoteTooltip" === A && c.d || "ModIdCard" === A && c.h;
							e && M(e({
								modNote: w,
								subredditId: O
							}))
						})()
					},
					style: y ? {
						backgroundColor: a ? b.b[y] : b.a[y]
					} : {}
				}, y !== b.c && s.a.createElement("div", {
					className: g.a.header
				}, s.a.createElement("div", {
					className: g.a.label
				}, s.a.createElement(_, {
					className: g.a.labelIcon,
					style: {
						color: b.d[y],
						fontSize: "15px",
						lineHeight: "15px"
					}
				}), b.f[y]())), j && s.a.createElement("div", {
					className: Object(d.a)(g.a.note, {
						[g.a.noLabel]: y === b.c
					})
				}, j), s.a.createElement("div", {
					className: g.a.metadata
				}, s.a.createElement(m.a, {
					className: g.a.operatorBlock,
					onClick: e => {
						e.stopPropagation(), (() => {
							const e = "LastAuthorUserNoteTooltip" === A && c.m || "ModIdCard" === A && c.n;
							e && M(e({
								modNote: w,
								subredditId: O
							}))
						})()
					},
					to: `/user/${null===(t=w.operator)||void 0===t?void 0:t.displayName}/`
				}, s.a.createElement(u.a, {
					className: g.a.userIcon,
					userName: (null === (r = w.operator) || void 0 === r ? void 0 : r.displayName) || "",
					isNSFW: !1
				}), "u/", null === (n = w.operator) || void 0 === n ? void 0 : n.displayName), s.a.createElement("span", {
					className: g.a.createdDate
				}, o.fbt._("on {createdDate}", [o.fbt._param("createdDate", E)], {
					hk: "2VoP7K"
				})), T && s.a.createElement("a", {
					className: g.a.link,
					href: T || "",
					target: "_blank",
					rel: "noopener noreferrer",
					onClick: e => {
						e.stopPropagation(), (() => {
							const e = "LastAuthorUserNoteTooltip" === A && c.e || "ModIdCard" === A && c.f;
							e && M(e({
								modNote: w,
								subredditId: O
							}))
						})()
					}
				}, s.a.createElement(P, {
					className: g.a.linkIcon,
					style: {
						color: a ? "white" : "black",
						fontSize: "14px",
						opacity: .3
					}
				}))))
			}
		},
		"./src/reddit/components/ModalStyledComponents/index.m.less": function(e, t, r) {
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
		"./src/reddit/components/ModalStyledComponents/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return p
			})), r.d(t, "e", (function() {
				return h
			})), r.d(t, "n", (function() {
				return b
			})), r.d(t, "p", (function() {
				return f
			})), r.d(t, "o", (function() {
				return v
			})), r.d(t, "f", (function() {
				return g
			})), r.d(t, "m", (function() {
				return w
			})), r.d(t, "h", (function() {
				return x
			})), r.d(t, "j", (function() {
				return O
			})), r.d(t, "k", (function() {
				return A
			})), r.d(t, "g", (function() {
				return y
			})), r.d(t, "i", (function() {
				return j
			})), r.d(t, "q", (function() {
				return _
			})), r.d(t, "d", (function() {
				return C
			})), r.d(t, "l", (function() {
				return E
			})), r.d(t, "t", (function() {
				return I
			})), r.d(t, "u", (function() {
				return k
			})), r.d(t, "r", (function() {
				return T
			})), r.d(t, "a", (function() {
				return P
			})), r.d(t, "s", (function() {
				return M
			})), r.d(t, "c", (function() {
				return S
			}));
			var n = r("./src/lib/classNames/index.ts"),
				o = r("./src/lib/lessComponent.tsx"),
				a = r("./node_modules/react/index.js"),
				s = r.n(a),
				i = r("./src/reddit/controls/Button/index.tsx"),
				d = r("./src/reddit/controls/Input/ModalInput.tsx"),
				c = r("./src/reddit/icons/svgs/Close/index.tsx"),
				l = r("./src/reddit/components/ModalStyledComponents/index.m.less"),
				u = r.n(l);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const p = o.a.wrapped(c.a, "CloseIcon", u.a),
				h = o.a.section("ModalBody", u.a),
				b = o.a.section("ModalPostPreview", u.a),
				f = o.a.p("ModalText", u.a),
				v = o.a.div("ModalSmallText", u.a),
				g = o.a.div("ModalDescriptionText", u.a),
				w = o.a.div("ModalMetaText", u.a),
				x = o.a.label("ModalFormItem", u.a),
				O = o.a.wrapped(d.a, "ModalInput", u.a),
				A = o.a.label("ModalInputLabel", u.a),
				y = o.a.footer("ModalFooter", u.a),
				j = o.a.header("ModalHeader", u.a),
				_ = o.a.div("ModalTitle", u.a),
				C = o.a.div("ModalAnnotation", u.a),
				E = o.a.div("ModalMain", u.a),
				I = o.a.textarea("TextArea", u.a),
				k = o.a.wrapped(i.l, "WarningButton", u.a),
				T = o.a.wrapped(i.l, "PrimaryButton", u.a),
				P = o.a.wrapped(i.o, "CancelButton", u.a),
				M = o.a.wrapped(i.r, "RemoveButton", u.a),
				S = ({
					className: e,
					...t
				}) => s.a.createElement(i.t, m({
					kind: i.b.Button,
					priority: i.c.Primary,
					className: Object(n.a)(u.a.ConfirmButton, e)
				}, t))
		},
		"./src/reddit/components/PostTopMeta/index.m.less": function(e, t, r) {
			e.exports = {
				icon: "_2kj4VmBwjxriyYFAErhLcT",
				iconTooltipHoverBox: "FCXb7huCxyBIXH7T23q_k",
				badge: "_2v3rPYFjifVGM7CfOh1dOl",
				container: "_3AStxql1mQsrZuUIFP9xSg",
				adminIcon: "s46mo3ittWDxpPuCSXJ_T",
				contractorIcon: "MMQAY3zdk1u4R9hIKTklf",
				premiumIcon: "_6W0v52Yp6BzEfoWlrczS8",
				crosspostIcon: "_3hh-iGjzOv78L_7t_PUHev",
				userIcon: "_1ra0Iw9wwPoS0QhWWssr-u",
				link: "eQgJJIfdY4JNXam_N622j",
				isDeleted: "_1pHpG_nGDGKayS5oFfQGDX",
				publicWallet: "SxdIdV2SgMWcIFG6Qsk0Q",
				authorLink: "_2tbHP6ZydRpjI44J3syuqC",
				isActionFont: "_1qzCGTSJOhg8noWqRayhmN",
				outboundLink: "_3V0C4FGg6153xIBQjwsycq",
				flairContainer: "NAURX0ARMmhJ5eqxQrlQW",
				externalLink: "_3jOxDPIQ0KaOWpzvSQo-1s",
				sponsored: "_1iAifs5p5MzPoJz5YrErUW",
				text: "_2fCzxBE1dlMh4OFc7B3Dun",
				MetaSeparator: "_3V4xlrklKBP2Hg51ejjjvz",
				metaSeparator: "_3V4xlrklKBP2Hg51ejjjvz",
				powerupBadge: "_22mcWwgVXFmw2-GrK4ZsJd",
				powerupIcon: "_1QXVZCgv3qdc2eb_RSi7qB"
			}
		},
		"./src/reddit/components/PostTopMeta/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return ve
			})), r.d(t, "e", (function() {
				return ge
			})), r.d(t, "a", (function() {
				return we
			})), r.d(t, "b", (function() {
				return Ae
			}));
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				s = r("./src/lib/ads/index.ts"),
				i = r("./src/lib/classNames/index.ts"),
				d = r("./src/lib/constants/index.ts"),
				c = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = r("./src/lib/lessComponent.tsx"),
				u = r("./src/reddit/actions/gold/powerups.ts"),
				m = r("./src/reddit/actions/post.ts"),
				p = r("./src/reddit/actions/profile/index.ts"),
				h = r("./src/reddit/constants/experiments.ts"),
				b = r("./src/reddit/helpers/isCrosspost.ts"),
				f = r("./src/reddit/helpers/trackers/powerups.ts"),
				v = r("./src/reddit/hooks/useInfoTextTooltip.ts"),
				g = r("./src/reddit/hooks/useTracking.ts"),
				w = r("./src/reddit/icons/svgs/Crosspost/index.tsx"),
				x = r("./src/reddit/icons/svgs/Powerup/index.tsx"),
				O = r("./src/reddit/components/AuthorLink/index.tsx"),
				A = r("./node_modules/fbt/lib/FbtPublic.js"),
				y = r("./src/reddit/models/Audio/index.ts"),
				j = r("./src/reddit/components/Econ/Audio/index.m.less"),
				_ = r.n(j);
			var C = ({
					post: e
				}) => {
					const {
						audioRoom: t
					} = e;
					if (!t) return null;
					const {
						recordingStatus: r
					} = t, n = [y.a.NotAvailable, y.a.Removed].includes(null != r ? r : y.a.NotAvailable);
					return !t.isLive && n ? null : o.a.createElement(o.a.Fragment, null, o.a.createElement("span", null, "• "), o.a.createElement("span", {
						"data-testid": "audio-meta-status",
						className: Object(i.a)(_.a.metaStatus, {
							[_.a.isLive]: t.isLive
						})
					}, t.isLive && A.fbt._("Live", null, {
						hk: "1wPVEx"
					}), !t.isLive && r === y.a.Available && A.fbt._("Recording", null, {
						hk: "1bhFSx"
					}), !t.isLive && r === y.a.Processing && A.fbt._("Processing...", null, {
						hk: "2MMuzJ"
					})))
				},
				E = r("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				I = r("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				k = r("./src/reddit/components/Flair/index.tsx"),
				T = r("./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx"),
				P = r("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				M = r("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				S = r("./src/reddit/components/HumanDate/index.tsx"),
				N = r("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				B = r("./src/reddit/components/JSAPIContainers/index.tsx"),
				L = r("./src/reddit/components/LastAuthorModNoteIcon/index.tsx"),
				F = r("./src/reddit/components/QuarantinedLabel/index.tsx"),
				R = r("./src/reddit/components/SponsoredLabel/index.tsx"),
				H = r("./src/reddit/components/SubredditNameLink/index.tsx"),
				D = r("./src/reddit/constants/posts.ts"),
				G = r("./src/reddit/contexts/InsideOverlay.tsx"),
				U = r("./src/reddit/controls/MetaSeparator/index.tsx"),
				q = r("./src/lib/portal/index.tsx"),
				W = r("./src/reddit/constants/elementIds.ts"),
				z = o.a.memo((function({
					children: e
				}) {
					const [t, r] = Object(n.useState)(!1);
					return Object(n.useEffect)(() => (r(!0), () => r(!1)), []), t ? o.a.createElement(q.a, {
						container: document.getElementById(W.d)
					}, o.a.Children.only(e)) : null
				})),
				V = r("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				Q = r("./src/reddit/helpers/styles/smartTextColor.ts"),
				J = r("./src/reddit/hooks/useClickSourceData.ts"),
				K = r("./src/reddit/icons/fonts/helpers.tsx"),
				Y = r("./src/reddit/icons/fonts/commonStyles.m.less"),
				X = r.n(Y);
			var $ = e => o.a.createElement("i", {
					className: Object(i.a)(Object(K.b)("admin", e.isFilled), X.a.adminIcon, e.className),
					id: e.id,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave
				}, o.a.createElement(K.a, null, e.desc)),
				Z = (r("./src/reddit/icons/fonts/Premium/index.tsx"), r("./src/reddit/components/UserIcon/index.tsx")),
				ee = r("./src/reddit/constants/postLayout.ts"),
				te = r("./src/reddit/contexts/PageLayer/index.tsx"),
				re = r("./src/reddit/models/Flair/index.ts"),
				ne = r("./src/reddit/models/NewStructuredStyles/index.ts"),
				oe = r("./src/reddit/models/Post/index.ts"),
				ae = r("./src/reddit/models/Subreddit/index.ts"),
				se = r("./src/reddit/selectors/authorFlair.ts"),
				ie = r("./src/reddit/selectors/experiments/adHeaderExperiment.ts"),
				de = r("./src/reddit/selectors/experiments/econ/index.ts"),
				ce = r("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				le = r("./src/reddit/selectors/gold/powerups/index.ts"),
				ue = r("./src/reddit/selectors/platform.ts"),
				me = r("./src/reddit/selectors/userFlair.ts"),
				pe = r("./src/reddit/components/PostTopMeta/index.m.less"),
				he = r.n(pe);
			const {
				fbt: be
			} = r("./node_modules/fbt/lib/FbtPublic.js"), fe = {
				placement: "top"
			};
			var ve;
			! function(e) {
				e.StickyPost = "sticky", e.Lightbox = "lightbox", e.TopAwardedModal = "topAwarded"
			}(ve || (ve = {}));
			const ge = e => Object(Q.a)(Object(V.a)(e), ne.a.metaText, ne.b.metaText),
				we = l.a.wrapped(U.b, "MetaSeparator", he.a),
				xe = l.a.span("text", he.a),
				Oe = Object(te.u)(),
				Ae = e => {
					const t = Object(v.a)(fe),
						r = be._("Reddit admin, speaking officially", null, {
							hk: "3vg8wE"
						}),
						n = be._("Reddit contractor", null, {
							hk: "3APwEh"
						}),
						a = !e.isDeleted && e.post.distinguishType === d.G.ADMIN;
					return o.a.createElement(O.a, {
						author: e.post.author,
						className: Object(i.a)(he.a.authorLink, {
							[he.a.isActionFont]: e.showActionFont,
							[he.a.isDeleted]: e.isDeleted
						}),
						"data-click-id": "user",
						forceOpenInNewTab: e.forceOpenInNewTab,
						isAuthorDeleted: e.isDeleted,
						isUnstyled: !0,
						linkProps: {
							"data-testid": "post_author_link"
						},
						onClick: e.onClick,
						style: e.style
					}, `u/${e.post.author}`, a && o.a.createElement(o.a.Fragment, null, o.a.createElement($, {
						className: he.a.adminIcon,
						isFilled: !0,
						desc: r
					}), o.a.createElement("span", {
						className: he.a.iconTooltipHoverBox,
						onMouseOut: t.hide,
						onMouseOver: t.show,
						ref: t.target.ref
					}), o.a.createElement(z, null, o.a.createElement(N.a, {
						arrowProps: t.arrowProps,
						popperProps: t.popperProps,
						visible: t.visible
					}, r))), e.renderContractorBadge && o.a.createElement(o.a.Fragment, null, o.a.createElement($, {
						className: he.a.contractorIcon,
						isFilled: !0,
						desc: n
					}), o.a.createElement("span", {
						className: he.a.iconTooltipHoverBox,
						onMouseOut: t.hide,
						onMouseOver: t.show,
						ref: t.target.ref
					}), o.a.createElement(z, null, o.a.createElement(N.a, {
						arrowProps: t.arrowProps,
						popperProps: t.popperProps,
						visible: t.visible
					}, r))), !1)
				},
				ye = o.a.memo((function(e) {
					const {
						className: t,
						forceOpenInNewTab: r,
						isInModNotesExperiment: c,
						isOverlay: l,
						onClickPostAuthor: O,
						onClickPostTimestamp: A,
						pageLayer: j,
						post: _,
						showSub: G = !1,
						showTimestamp: U = !0,
						subredditOrProfile: q,
						tooltipType: W
					} = e, V = Object(a.d)(), Q = Object(g.a)(), K = Object(a.e)(ie.a), Y = Object(a.e)(ue.d), X = Object(a.e)(ue.g) || ["popular", "all"].includes(Y || ""), $ = Object(a.e)(ce.b), ne = _.isSponsored || Object(s.u)(j), pe = !(!ne || !K || Object(h.xf)(K));
					Object(n.useEffect)(() => {
						pe && V(Object(p.d)(_.author))
					}, []);
					const ve = _.belongsTo.id,
						Oe = Object(n.useCallback)(e => Object(se.a)(e, {
							post: _
						}), [_]),
						ye = Object(a.e)(Oe),
						je = Object(J.a)(),
						_e = Object(n.useCallback)(e => Object(me.a)(e, {
							subredditId: ve
						}), [ve]),
						Ce = Object(a.e)(_e),
						Ee = Object(n.useCallback)(e => Object(le.a)(e, {
							subredditId: ve,
							userId: _.authorId
						}), [ve, _.authorId]),
						Ie = Object(a.e)(de.B),
						ke = Object(a.e)(Ee),
						Te = Object(n.useCallback)(e => Object(me.e)(e, {
							subredditId: ve
						}), [ve]),
						Pe = Object(a.e)(Te),
						Me = Object(v.a)(fe),
						Se = Object(v.a)(fe),
						Ne = j && j.meta && j.meta.name === d.Nb.COMMENTS,
						Be = Object(b.a)(_),
						Le = Pe === re.b.Left,
						Fe = _.authorIsContractor && !!q && q.type === ae.f.EmployeesOnly,
						Re = !!q && ke,
						He = !l && !Ne,
						De = () => o.a.createElement(we, {
							className: e.metaSeparatorClassName
						}, "•"),
						Ge = Object(a.e)(e => Object(te.R)(e, {
							pageLayer: j
						})),
						Ue = ee.e[Ge] === ee.d.Card,
						qe = X && Ue || !!Ne,
						We = pe && (X || !!Ne),
						ze = o.a.createElement(o.a.Fragment, null, ye && Le && o.a.createElement("div", {
							className: he.a.flairContainer
						}, o.a.createElement(k.b, {
							disabled: !Ce,
							flair: ye,
							forceSmallEmojis: !0,
							usesCommunityStyles: He
						})), Object(oe.o)(_.author) ? o.a.createElement(Ae, {
							isDeleted: !0,
							onClick: O,
							post: _,
							renderContractorBadge: Fe,
							showActionFont: We,
							style: pe ? {} : {
								color: ge(e)
							}
						}) : o.a.createElement(o.a.Fragment, null, o.a.createElement(E.b, {
							className: he.a.badge,
							subredditId: ve,
							uniqueIdentifier: `${_.id}-${l}`,
							userId: _.authorId
						}), o.a.createElement(P.b, {
							postOrComment: _,
							tooltipType: W
						}, o.a.createElement(I.b, {
							ignore: !!_.distinguishType && _.distinguishType !== d.G.NONE,
							subredditId: ve,
							userId: _.authorId
						}, o.a.createElement(Ae, {
							forceOpenInNewTab: r,
							onClick: O,
							post: _,
							renderContractorBadge: Fe,
							style: pe ? {} : {
								color: ge(e)
							},
							showActionFont: We
						}))), !Object(oe.o)(_.author) && c && o.a.createElement(L.a, {
							postOrComment: _,
							tooltipType: W
						}), Re && o.a.createElement(o.a.Fragment, null, o.a.createElement("button", {
							className: he.a.powerupBadge,
							onMouseEnter: Se.show,
							onMouseLeave: Se.hide,
							onClick: () => {
								Q(Object(f.J)(W ? "post" : "postlist")), V(Object(u.g)("post_top_supporter_badge"))
							},
							ref: Se.target.ref
						}, o.a.createElement(x.a, {
							className: he.a.powerupIcon
						})), o.a.createElement(z, null, o.a.createElement(N.a, {
							arrowProps: Se.arrowProps,
							popperProps: Se.popperProps,
							visible: Se.visible
						}, be._("Powerups Top Supporter", null, {
							hk: "1GLWsz"
						}))))), ye && !Le && o.a.createElement("div", {
							className: he.a.flairContainer
						}, o.a.createElement(k.b, {
							disabled: !Ce,
							flair: ye,
							forceSmallEmojis: !0,
							usesCommunityStyles: He
						})), _.belongsTo.type === D.a.SUBREDDIT && !Object(oe.o)(_.author) && o.a.createElement(T.a, {
							className: he.a.publicWallet,
							contentId: _.id,
							metaSeparator: o.a.createElement(De, null),
							subredditId: ve,
							userId: _.authorId,
							username: _.author
						})),
						Ve = be._("{=Posted by}{author}", [be._param("=Posted by", o.a.createElement(xe, {
							style: {
								color: ge(e)
							}
						}, be._("Posted by", null, {
							hk: "274iff"
						}))), be._param("author", ze)], {
							hk: "1abNaj"
						}),
						Qe = o.a.createElement(o.a.Fragment, null, o.a.createElement(w.a, {
							className: he.a.crosspostIcon
						}), be._("{=Crossposted by}{author}", [be._param("=Crossposted by", o.a.createElement(xe, {
							style: {
								color: ge(e)
							}
						}, be._("Crossposted by", null, {
							hk: "1YnHU8"
						}))), be._param("author", ze)], {
							hk: "3BfJwk"
						})),
						Je = () => Be || pe ? Be ? Qe : ze : Ve;
					return o.a.createElement("div", {
						className: Object(i.a)(he.a.container, t)
					}, G && q && o.a.createElement(M.a, {
						postId: _.id,
						subredditName: q.name,
						tooltipType: W
					}, o.a.createElement(H.a, {
						"data-click-id": "subreddit",
						to: {
							pathname: q.url,
							state: je
						}
					}, q.displayText)), q && q.isQuarantined && o.a.createElement(F.a, null), G && !Be && o.a.createElement(De, null), pe ? o.a.createElement(o.a.Fragment, null, (null == q ? void 0 : q.icon) && qe && o.a.createElement(Z.a, {
						iconUrl: q.icon.url,
						isNSFW: q.isNSFW,
						userName: q.name,
						className: he.a.userIcon,
						omitResponsivePresenceWrapper: !0
					}), Je(), ne && o.a.createElement(o.a.Fragment, null, o.a.createElement(De, null), o.a.createElement(R.a, {
						adHeaderVariant: K,
						greyTextColor: ge(e)
					}))) : o.a.createElement(o.a.Fragment, null, ne && o.a.createElement(o.a.Fragment, null, o.a.createElement(R.a, null), o.a.createElement(De, null)), Je()), o.a.createElement(B.e, null), U && !pe && o.a.createElement(o.a.Fragment, null, o.a.createElement("a", {
						className: he.a.externalLink,
						"data-testid": "post_timestamp",
						"data-click-id": "timestamp",
						href: _.permalink,
						onMouseEnter: Me.show,
						onMouseLeave: Me.hide,
						ref: Me.target.ref,
						style: {
							color: ge(e)
						},
						target: "_blank",
						rel: "nofollow noopener noreferrer",
						onClick: e => {
							null == A || A(e), $ && (e.preventDefault(), V(Object(m.ab)(_.permalink, _.id)))
						}
					}, o.a.createElement(S.d, {
						seconds: _.created / d.Sb
					})), o.a.createElement(z, null, o.a.createElement(N.a, {
						arrowProps: Me.arrowProps,
						popperProps: Me.popperProps,
						visible: Me.visible
					}, o.a.createElement(S.b, {
						seconds: _.created / d.Sb
					})))), Object(y.b)(_) && Ie && o.a.createElement(C, {
						post: _
					}))
				}));
			t.d = Oe(Object(G.b)(Object(c.a)(ye)))
		},
		"./src/reddit/components/RestrictedFlatlistButton/index.m.less": function(e, t, r) {
			e.exports = {
				removalReasonButton: "_3IEDcFIIs_TeXsZtKZGzUd",
				TextWrapper: "smOzqVIOoNqmSJcyBX2N6",
				textWrapper: "smOzqVIOoNqmSJcyBX2N6",
				Button: "_1rNBkuuOkN2SorEXyRkYjB",
				button: "_1rNBkuuOkN2SorEXyRkYjB",
				ApproveButton: "_2T9IigN7CfZvuc5KSKs2hx",
				approveButton: "_2T9IigN7CfZvuc5KSKs2hx",
				RemoveButton: "_2OvUr_pd3kddsNP_f35S28",
				removeButton: "_2OvUr_pd3kddsNP_f35S28"
			}
		},
		"./src/reddit/components/RestrictedFlatlistButton/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return c
			})), r.d(t, "b", (function() {
				return l
			})), r.d(t, "d", (function() {
				return u
			})), r.d(t, "a", (function() {
				return m
			}));
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				a = r("./src/lib/classNames/index.ts"),
				s = r("./src/lib/lessComponent.tsx"),
				i = r("./src/reddit/components/RestrictedFlatlistButton/index.m.less"),
				d = r.n(i);
			const c = e => o.a.createElement("button", {
					className: Object(a.a)(d.a.Button, e.className),
					disabled: e.disabled,
					id: e.id,
					onClick: e.disabled ? void 0 : e.onClick,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave
				}, e.children, e.text && o.a.createElement("span", {
					className: Object(a.a)(d.a.TextWrapper, e.textClassName)
				}, e.text, " ")),
				l = s.a.wrapped(c, "ApproveButton", d.a),
				u = s.a.wrapped(c, "RemoveButton", d.a),
				m = e => o.a.createElement("button", {
					className: Object(a.a)(d.a.removalReasonButton, e.className),
					onClick: e.onClick
				}, e.text)
		},
		"./src/reddit/components/SponsoredLabel/index.m.less": function(e, t, r) {
			e.exports = {
				Wrapper: "_2oEYZXchPfHwcf9mTMGMg8",
				wrapper: "_2oEYZXchPfHwcf9mTMGMg8",
				isPromotedBlue: "_3NAtxpywJRrKZN5zIU9vwP",
				isPromotedGrey: "V0WjfoF5BV7_qbExmbmeR"
			}
		},
		"./src/reddit/components/SponsoredLabel/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./node_modules/react/index.js"),
				a = r.n(o),
				s = r("./src/reddit/components/SponsoredLabel/index.m.less"),
				i = r.n(s),
				d = r("./src/lib/classNames/index.ts"),
				c = r("./src/lib/lessComponent.tsx"),
				l = r("./src/reddit/constants/experiments.ts");
			const u = c.a.span("Wrapper", i.a);
			t.a = ({
				className: e,
				adHeaderVariant: t,
				greyTextColor: r
			}) => {
				const o = t === l.u.PromotedGrey || t === l.u.NoLockIcon;
				return a.a.createElement(u, {
					className: Object(d.a)(e, {
						[i.a.isPromotedBlue]: t === l.u.PromotedBlue,
						[i.a.isPromotedGrey]: o
					})
				}, a.a.createElement("span", {
					style: o ? {
						color: r
					} : {}
				}, n.fbt._("promoted", null, {
					hk: "1R81m"
				})))
			}
		},
		"./src/reddit/controls/Input/ModalInput.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				s = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/actions/modal.ts"),
				d = r("./src/reddit/constants/keycodes.ts"),
				c = r("./src/reddit/controls/Input/index.m.less"),
				l = r.n(c);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			class m extends o.a.Component {
				constructor() {
					super(...arguments), this.handleKeyDown = ({
						keyCode: e
					}) => {
						e === d.a.Escape && this.props.closeModal()
					}
				}
				render() {
					const {
						className: e,
						closeModal: t,
						...r
					} = this.props;
					return o.a.createElement("input", u({
						className: Object(s.a)(l.a.input, e),
						onKeyDown: this.handleKeyDown
					}, r))
				}
			}
			t.a = Object(a.b)(null, {
				closeModal: i.f
			})(m)
		},
		"./src/reddit/controls/Input/index.m.less": function(e, t, r) {
			e.exports = {
				input: "_3eoXtlBWKbkFYoOHUIcIgK"
			}
		},
		"./src/reddit/controls/MetaSeparator/index.m.less": function(e, t, r) {
			e.exports = {
				unstyledMetaSeparator: "_3LS4zudUBagjFS7HjWJYxo",
				metaSeparator: "_37gsGHa8DMRAxBmQS-Ppg8"
			}
		},
		"./src/reddit/controls/MetaSeparator/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				a = r("./src/lib/classNames/index.ts"),
				s = r("./src/reddit/controls/MetaSeparator/index.m.less"),
				i = r.n(s);
			const d = e => o.a.createElement("span", {
				className: Object(a.a)(i.a.unstyledMetaSeparator, e.className),
				role: "presentation"
			}, e.isSmall ? "·" : "•");
			t.b = ({
				className: e,
				isSmall: t
			}) => o.a.createElement(d, {
				className: Object(a.a)(i.a.metaSeparator, e),
				isSmall: t
			})
		},
		"./src/reddit/endpoints/gold/communityAwards.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return O
			})), r.d(t, "n", (function() {
				return A
			})), r.d(t, "a", (function() {
				return y
			})), r.d(t, "c", (function() {
				return j
			})), r.d(t, "b", (function() {
				return _
			})), r.d(t, "k", (function() {
				return C
			})), r.d(t, "l", (function() {
				return E
			})), r.d(t, "j", (function() {
				return I
			})), r.d(t, "f", (function() {
				return k
			})), r.d(t, "g", (function() {
				return T
			})), r.d(t, "m", (function() {
				return P
			})), r.d(t, "h", (function() {
				return M
			})), r.d(t, "i", (function() {
				return S
			})), r.d(t, "e", (function() {
				return N
			}));
			var n = r("./src/lib/constants/index.ts"),
				o = r("./src/lib/makeApiRequest/index.ts"),
				a = r("./src/lib/makeGqlRequest/index.ts"),
				s = r("./src/lib/omitHeaders/index.ts"),
				i = r("./src/lib/uploadToS3/index.ts"),
				d = r("./src/redditGQL/operations/AwardSheetInfo.json"),
				c = r("./src/redditGQL/operations/AwardSheetInfoForProfile.json"),
				l = r("./src/redditGQL/operations/CreateCommunityAward.json"),
				u = r("./src/redditGQL/operations/CreateGlobalAward.json"),
				m = r("./src/redditGQL/operations/CreateModAward.json"),
				p = r("./src/redditGQL/operations/DisableAwardInCommunity.json"),
				h = r("./src/redditGQL/operations/EnableAwardInCommunity.json"),
				b = r("./src/redditGQL/operations/GlobalAwards.json"),
				f = r("./src/redditGQL/operations/ManageableAwards.json"),
				v = r("./src/redditGQL/operations/ManageableAwardsForProfile.json"),
				g = r("./src/redditGQL/operations/RemoveCommunityAward.json"),
				w = r("./src/reddit/constants/headers.ts"),
				x = r("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts");
			const O = (e, t, r, a) => {
					const i = {
						subreddit: t,
						filepath: r,
						mimetype: a
					};
					return Object(o.a)(Object(s.a)(e, [w.a]), {
						method: n.jb.POST,
						endpoint: `${e.apiUrl}/api/v1/community_awards/award_asset_upload_s3`,
						data: i
					})
				},
				A = async (e, t) => Object(i.a)(t, e), y = (e, t, r, n, o, s, i, d, c) => Object(a.a)(e, {
					...l,
					variables: {
						coinPrice: i,
						iconHeight: s,
						iconWidth: o,
						iconUrl: n,
						name: r,
						subredditId: t,
						startsAt: d,
						endsAt: c
					}
				}), j = (e, t, r, n, o, s, i, d, c) => Object(a.a)(e, {
					...m,
					variables: {
						iconHeight: s,
						iconWidth: o,
						iconUrl: n,
						monthsOfPremium: i,
						name: r,
						subredditId: t,
						startsAt: d,
						endsAt: c
					}
				}), _ = ({
					awardSubType: e,
					coinPrice: t,
					coinReward: r,
					context: n,
					daysOfDripExtension: o,
					daysOfPremium: s,
					description: i,
					endsAt: d,
					giverCoinReward: c,
					iconFormat: l,
					iconHeight: m,
					iconUrl: p,
					iconWidth: h,
					isNew: b,
					name: f,
					pennyPrice: v,
					pennyDonate: g,
					startsAt: w,
					subredditCoinReward: x
				}) => Object(a.a)(n, {
					...u,
					variables: {
						awardSubType: e,
						iconFormat: l,
						iconHeight: m,
						iconWidth: h,
						iconUrl: p,
						isNew: b,
						daysOfPremium: s,
						daysOfDripExtension: o,
						description: i,
						coinPrice: t,
						coinReward: r,
						name: f,
						pennyPrice: v,
						pennyDonate: g,
						giverCoinReward: c,
						startsAt: w,
						endsAt: d,
						subredditCoinReward: x
					}
				}), C = (e, t) => Object(a.a)(e, {
					...f,
					variables: {
						subredditId: t
					}
				}), E = (e, t) => Object(a.a)(e, {
					...v,
					variables: {
						profileName: t
					}
				}), I = e => Object(a.a)(e, {
					...b
				}), k = (e, t, r) => Object(a.a)(e, {
					...d,
					variables: {
						subredditId: t,
						thingId: r,
						includeGroup: !0
					}
				}), T = (e, t, r) => Object(a.a)(e, {
					...c,
					variables: {
						profileName: t,
						thingId: r,
						includeGroup: !0
					}
				}), P = (e, t) => Object(a.a)(e, {
					...g,
					variables: {
						awardId: t
					}
				}), M = (e, t, r) => Object(a.a)(e, {
					...p,
					variables: {
						awardId: t,
						subredditId: r
					}
				}), S = (e, t, r) => Object(a.a)(e, {
					...h,
					variables: {
						awardId: t,
						subredditId: r
					}
				}), N = async (e, t, r) => {
					const a = {
						api_type: "json",
						award_id: t,
						raw_json: 1
					};
					return Object(o.a)(Object(s.a)(e, [w.a]), {
						method: n.jb.POST,
						endpoint: `${e.apiUrl}/api/report_award`,
						data: a
					}).then(e => e.ok ? {
						...e
					} : {
						...e,
						error: Object(x.a)(e)
					})
				}
		},
		"./src/reddit/helpers/awards/getAwardItemId.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			const n = (e, t) => `awardItem__${t}-${e}`
		},
		"./src/reddit/helpers/isRemoved.ts": function(e, t, r) {
			"use strict";
			t.a = e => !!e.bannedBy && !e.isSpam
		},
		"./src/reddit/helpers/modTooltipTemplates/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return s
			})), r.d(t, "c", (function() {
				return i
			})), r.d(t, "d", (function() {
				return d
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./src/lib/humanizeUTCDate/index.tsx");
			const a = e => e.approvedBy && "string" == typeof e.approvedBy && e.approvedAtUTC ? n.fbt._("Approved by {username} at {time}", [n.fbt._param("username", e.approvedBy), n.fbt._param("time", Object(o.a)(e.approvedAtUTC))], {
					hk: "3G807D"
				}) : n.fbt._("Approved", null, {
					hk: "3CbKag"
				}),
				s = e => {
					let t = e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? n.fbt._("Removed by {username} at {time}", [n.fbt._param("username", e.bannedBy), n.fbt._param("time", Object(o.a)(e.bannedAtUTC))], {
						hk: "2Ey569"
					}) : n.fbt._("Removed", null, {
						hk: "238xK9"
					});
					return e.modReasonBy && e.modRemovalReason && (t = t + "\n" + n.fbt._("Reason by {username}:", [n.fbt._param("username", `u/${e.bannedBy}`)], {
						hk: "3qLdNZ"
					}) + e.modRemovalReason), e.modNote && (t = t + "\n" + n.fbt._("Note:", null, {
						hk: "2LD4vO"
					}) + e.modNote), t
				},
				i = e => n.fbt._({
					"*": "{number} Reports",
					_1: "1 Report"
				}, [n.fbt._plural(e, "number")], {
					hk: "3S0yx6"
				}),
				d = e => e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? n.fbt._("Removed as spam by {username} at {time}", [n.fbt._param("username", e.bannedBy), n.fbt._param("time", Object(o.a)(e.bannedAtUTC))], {
					hk: "2uutjk"
				}) : n.fbt._("Removed as spam", null, {
					hk: "1hD9G0"
				})
		},
		"./src/reddit/helpers/showReportIndicator/index.ts": function(e, t, r) {
			"use strict";
			t.a = e => !e.ignoreReports && (e.numReports || 0) > 0
		},
		"./src/reddit/helpers/trackers/communityAwards.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			})), r.d(t, "e", (function() {
				return c
			})), r.d(t, "g", (function() {
				return l
			})), r.d(t, "c", (function() {
				return u
			})), r.d(t, "f", (function() {
				return m
			})), r.d(t, "b", (function() {
				return p
			})), r.d(t, "d", (function() {
				return h
			})), r.d(t, "h", (function() {
				return f
			})), r.d(t, "i", (function() {
				return v
			}));
			var n = r("./src/reddit/models/Gold/Award.ts"),
				o = r("./src/reddit/selectors/telemetry.ts"),
				a = r("./src/reddit/helpers/correlationIdTracker.ts"),
				s = r("./src/reddit/helpers/trackers/gild.ts");
			const i = e => ({
					...o.o(e),
					screen: o.bb(e),
					subreddit: o.jb(e),
					userSubreddit: o.tb(e)
				}),
				d = e => ({
					awardId: e.id,
					awardName: e.name,
					isModAward: e.awardType === n.f.Moderator,
					isTemporatyAward: !!e.endsAt,
					numberCoins: e.coinPrice,
					numberMonths: Math.floor((e.daysOfPremium || 0) / 30),
					numberCoinsToRecipient: e.coinReward || 0,
					numberCoinsToCommunity: e.subredditCoinReward || 0,
					type: Object(s.getAwardTypeFromAward)(e)
				}),
				c = () => e => ({
					...i(e),
					source: "awards",
					action: "click",
					correlationId: Object(a.c)(a.a.AwardCreationFlow),
					noun: "create"
				}),
				l = e => t => ({
					...i(t),
					source: "awards",
					action: "click",
					correlationId: Object(a.c)(a.a.AwardDeletionFlow),
					noun: "delete",
					goldPurchase: e ? d(e) : null,
					media: e ? {
						url: e.icon.url
					} : null
				}),
				u = (e, t, r) => n => ({
					...i(n),
					source: "create_award",
					action: e,
					correlationId: Object(a.c)(a.a.AwardCreationFlow),
					noun: t,
					goldPurchase: r
				}),
				m = (e, t, r, n) => o => ({
					...i(o),
					source: "create_award",
					action: "upload",
					correlationId: Object(a.c)(a.a.AwardCreationFlow),
					noun: "image",
					actionInfo: n ? {
						reason: n
					} : {
						success: !0
					},
					media: t ? {
						fileName: t.file.name,
						height: t.height,
						id: t.id,
						mimetype: t.file.type,
						size: t.file.size,
						type: "image",
						uploadDuration: r,
						url: e,
						width: t.width
					} : null
				}),
				p = (e, t, r) => n => ({
					...i(n),
					source: "create_award",
					action: "click",
					correlationId: Object(a.c)(a.a.AwardCreationFlow),
					noun: "create",
					media: t && e ? {
						fileName: t.file.name,
						height: t.height,
						id: t.id,
						mimetype: t.file.type,
						size: t.file.size,
						type: "image",
						url: e,
						width: t.width
					} : null,
					goldPurchase: r ? d(r) : null
				}),
				h = (e, t, r) => n => ({
					...i(n),
					source: "create_award",
					action: e,
					correlationId: Object(a.c)(a.a.AwardCreationFlow),
					noun: t,
					goldPurchase: r ? d(r) : null
				}),
				b = (e, t, r) => n => ({
					...i(n),
					source: "awards",
					action: "click",
					noun: r,
					goldPurchase: d(e),
					profile: o.T(n, t),
					subreddit: o.kb(n, t)
				}),
				f = (e, t) => b(e, t, "disable_in_community"),
				v = (e, t) => b(e, t, "enable_in_community")
		},
		"./src/reddit/helpers/trackers/gild.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "getAwardTypeFromAward", (function() {
				return c
			})), r.d(t, "clickGildEvent", (function() {
				return m
			})), r.d(t, "clickRpanGiveAward", (function() {
				return p
			})), r.d(t, "clickAddAward", (function() {
				return h
			})), r.d(t, "clickHideAward", (function() {
				return b
			})), r.d(t, "clickConfirmHideAward", (function() {
				return f
			})), r.d(t, "clickCancelHideAward", (function() {
				return v
			})), r.d(t, "clickAwardReportFlow", (function() {
				return w
			})), r.d(t, "clickCancelAwardReportFlow", (function() {
				return x
			})), r.d(t, "clickFlagAwardUsage", (function() {
				return O
			})), r.d(t, "clickCancelFlagAwardUsage", (function() {
				return A
			})), r.d(t, "clickConfirmFlagAwardUsage", (function() {
				return y
			})), r.d(t, "clickReportAward", (function() {
				return j
			})), r.d(t, "clickCancelReportAward", (function() {
				return _
			})), r.d(t, "clickConfirmReportAward", (function() {
				return C
			})), r.d(t, "viewGildModalEvent", (function() {
				return E
			})), r.d(t, "clickSelectAwardEvent", (function() {
				return I
			})), r.d(t, "triggerAnonymousEvent", (function() {
				return k
			})), r.d(t, "clickMessageInputEvent", (function() {
				return T
			})), r.d(t, "typeMessageInputEvent", (function() {
				return P
			})), r.d(t, "clickLearnMoreLinkEvent", (function() {
				return M
			})), r.d(t, "clickQuestionMarkEvent", (function() {
				return S
			})), r.d(t, "clickConfirmAwardEvent", (function() {
				return N
			})), r.d(t, "clickGetPremiumEvent", (function() {
				return B
			})), r.d(t, "clickAddCoinsButtonEvent", (function() {
				return L
			})), r.d(t, "clickNextButtonEvent", (function() {
				return F
			})), r.d(t, "clickCloseGildModalEvent", (function() {
				return R
			})), r.d(t, "viewKarmaSuccessEvent", (function() {
				return H
			})), r.d(t, "clickFilterEvent", (function() {
				return D
			})), r.d(t, "clickNextFiltersEvent", (function() {
				return G
			})), r.d(t, "clickPreviousFiltersEvent", (function() {
				return U
			}));
			var n = r("./src/reddit/models/Gold/Award.ts"),
				o = r("./src/reddit/selectors/telemetry.ts"),
				a = r("./src/telemetry/models/GoldPurchase.ts"),
				s = r("./src/reddit/helpers/correlationIdTracker.ts"),
				i = r("./src/reddit/helpers/isComment.ts"),
				d = r("./src/reddit/selectors/gild.ts");
			const c = e => e.awardType === n.f.Global && e.awardSubType === n.d.Appreciation ? a.GoldPurchaseType.GidAppreciation : e.awardType === n.f.Global && e.awardSubType === n.d.Premium ? a.GoldPurchaseType.GidPremium : e.awardSubType === n.d.Group ? a.GoldPurchaseType.GidGroup : e.awardType === n.f.Community ? a.GoldPurchaseType.GidCommunity : e.awardType === n.f.Moderator ? a.GoldPurchaseType.GidMod : e.awardType === n.f.Global && e.awardSubType === n.d.Global ? a.GoldPurchaseType.GidGlobal : a.GoldPurchaseType.GidUnknown,
				l = (e, t) => ({
					awardId: e.id,
					awardName: e.name,
					isTemporaryAward: !!e.endsAt,
					numberCoinsToRecipient: e.coinReward,
					type: c(e),
					...t
				}),
				u = (e, t) => ({
					...o.o(e),
					comment: t ? o.i(e, t) : void 0,
					correlationId: Object(d.b)(e) || Object(s.e)(s.a.GildingFlow, !1),
					post: t ? o.J(e, t) : void 0,
					screen: o.bb(e),
					subreddit: o.jb(e),
					userSubreddit: o.tb(e)
				}),
				m = e => t => ({
					...u(t, e),
					source: Object(i.a)(e) ? "comment" : "post",
					action: "click",
					noun: "give_gold",
					feed: o.r(t)
				}),
				p = e => t => ({
					...u(t, e),
					source: "stream_player",
					action: "click",
					noun: "give_gold"
				}),
				h = e => t => ({
					...u(t, e),
					source: Object(i.a)(e) ? "comment" : "post",
					action: "click",
					noun: "add_award",
					feed: o.r(t)
				}),
				b = (e, t) => r => ({
					...u(r, t),
					source: Object(i.a)(t) ? "comment" : "post",
					action: "click",
					noun: "hide_award",
					goldPurchase: l(e)
				}),
				f = (e, t) => r => ({
					...u(r, t),
					source: Object(i.a)(t) ? "comment" : "post",
					action: "click",
					noun: "confirm_hide_award",
					goldPurchase: l(e)
				}),
				v = (e, t) => r => ({
					...u(r, t),
					source: Object(i.a)(t) ? "comment" : "post",
					action: "click",
					noun: "cancel_hide_award",
					goldPurchase: l(e)
				}),
				g = e => (t, r) => n => ({
					...u(n, r),
					source: Object(i.a)(r) ? "comment" : "post",
					action: "click",
					noun: e,
					goldPurchase: l(t)
				}),
				w = g("award_hovercard_report"),
				x = g("cancel_award_hovercard_report"),
				O = g("flag_award"),
				A = g("cancel_flag_award"),
				y = g("confirm_flag_award"),
				j = g("report_community_award"),
				_ = g("cancel_report_community_award"),
				C = g("confirm_report_community_award"),
				E = (e, t, r) => n => ({
					...u(n, r),
					source: "give_gold",
					action: "view",
					noun: "page",
					goldPurchase: {
						defaultOption: e,
						defaultAnonymous: t
					}
				}),
				I = (e, t, r) => n => ({
					...u(n, t),
					source: "give_gold",
					action: "click",
					noun: "award",
					goldPurchase: l(e, r)
				}),
				k = (e, t) => r => ({
					...u(r, t),
					source: "give_gold",
					action: e,
					noun: "anonymous"
				}),
				T = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "message_input"
				}),
				P = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "type",
					noun: "message_input"
				}),
				M = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "learn_more"
				}),
				S = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "question"
				}),
				N = (e, t) => r => ({
					...u(r, e),
					source: "give_gold",
					action: "click",
					noun: "confirm",
					goldPurchase: {
						contentType: Object(i.a)(e) ? "comment" : "post",
						...l(t)
					}
				}),
				B = (e, t) => r => ({
					...u(r, e),
					source: "give_gold",
					action: "click",
					noun: "get_premium",
					goldPurchase: {
						contentType: Object(i.a)(e) ? "comment" : "post",
						...l(t)
					}
				}),
				L = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "add_coins"
				}),
				F = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "next"
				}),
				R = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "close"
				}),
				H = ({
					award: e,
					awardeeKarmaEarned: t,
					awarderKarmaEarned: r,
					numberCoins: n,
					thingId: o
				}) => a => ({
					...u(a, o),
					source: "give_gold",
					action: "view",
					noun: "karma_success",
					goldPurchase: {
						contentType: Object(i.a)(o) ? "comment" : "post",
						awardeeKarmaEarned: t,
						awarderKarmaEarned: r,
						numberCoins: n,
						...l(e)
					}
				}),
				D = e => t => ({
					...u(t),
					source: "give_gold",
					action: "click",
					noun: "filter",
					goldPurchase: {
						filterId: e.tag,
						filterName: e.content.markdown
					}
				}),
				G = () => e => ({
					...u(e),
					source: "give_gold",
					action: "click",
					noun: "next_filters"
				}),
				U = () => e => ({
					...u(e),
					source: "give_gold",
					action: "click",
					noun: "previous_filters"
				})
		},
		"./src/reddit/helpers/trackers/goldPayment.ts": function(e, t, r) {
			"use strict";
			r.d(t, "h", (function() {
				return b
			})), r.d(t, "b", (function() {
				return f
			})), r.d(t, "f", (function() {
				return v
			})), r.d(t, "d", (function() {
				return g
			})), r.d(t, "e", (function() {
				return w
			})), r.d(t, "c", (function() {
				return x
			})), r.d(t, "a", (function() {
				return O
			})), r.d(t, "g", (function() {
				return A
			})), r.d(t, "i", (function() {
				return y
			})), r.d(t, "j", (function() {
				return j
			}));
			var n = r("./src/lib/constants/index.ts"),
				o = r("./src/reddit/models/Gold/ProductOffer.ts"),
				a = r("./src/reddit/selectors/gold/giveAwards.ts"),
				s = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				i = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				d = r("./src/reddit/selectors/telemetry.ts"),
				c = r("./src/telemetry/models/GoldPurchase.ts"),
				l = r("./src/telemetry/models/Payment.ts"),
				u = r("./src/reddit/helpers/trackers/gild.ts"),
				m = r("./src/reddit/helpers/correlationIdTracker.ts"),
				p = r("./src/reddit/helpers/isComment.ts"),
				h = r("./src/reddit/helpers/trackers/communityAwards.ts");
			const b = (e, t) => {
					const {
						thingId: r,
						packageId: l
					} = t, b = !!r, f = a.b(e), v = f ? Object(u.getAwardTypeFromAward)(f) : null, g = b ? v : i.o(e) ? c.GoldPurchaseType.Premium : c.GoldPurchaseType.Coins, w = r ? Object(p.a)(r) ? "comment" : "post" : void 0, x = l || i.t(e), O = [...Object(s.d)(e), ...Object(s.f)(e)].filter(e => e.mobileId === x)[0], A = t.offerContext || (f && 0 === f.coinPrice ? o.a.StorefrontFreeAward : Object(o.d)(O, b)), y = O ? Math.round(1e4 * (O.baselinePennies - O.pennies) / O.baselinePennies) / 100 : 0, j = O ? Math.round(1e4 * (O.coins - O.baselineCoins) / O.coins) / 100 : 0, _ = O ? O.baselinePennies !== O.pennies ? `${y}_percent_price` : O.baselineCoins !== O.coins ? `${j}_percent_bonus` : void 0 : void 0, C = g === c.GoldPurchaseType.Premium ? n.yb : O ? O.pennies : void 0;
					return {
						...d.o(e),
						comment: r ? d.i(e, r) : null,
						correlationId: i.r(e) || Object(m.e)(m.a.GoldPayment, !1),
						post: r ? d.J(e, r) : null,
						screen: d.bb(e),
						subreddit: r ? d.jb(e) : null,
						goldPurchase: {
							...f ? Object(h.a)(f) : null,
							type: g,
							gildedContent: b,
							contentType: w,
							numberCoins: O ? O.coins : void 0,
							offerContext: A,
							offerType: _
						},
						payment: {
							currency: "USD",
							amountInSmallestDenom: C
						},
						purchase: {
							priceMicros: C
						}
					}
				},
				f = (e, t, r) => n => ({
					...b(n, {
						packageId: t,
						thingId: e,
						offerContext: r
					}),
					source: "gold_payment",
					action: "click",
					noun: "close"
				}),
				v = e => t => ({
					...b(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "paypal"
				}),
				g = e => t => ({
					...b(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "continue_paypal"
				}),
				w = e => t => ({
					...b(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "credit_card"
				}),
				x = e => t => ({
					...b(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "complete_credit_card"
				}),
				O = (e, t) => r => ({
					...b(r, {
						packageId: e,
						offerContext: t
					}),
					source: "gold_payment",
					action: "click",
					noun: "confirm"
				}),
				A = e => t => ({
					...b(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "display",
					noun: "error"
				}),
				y = (e, t, r) => n => {
					const o = b(n, {
						packageId: t,
						thingId: e,
						offerContext: r
					});
					return {
						...o,
						source: "gold_payment",
						action: "view",
						noun: "page",
						payment: {
							...o.payment,
							defaultOption: l.PaymentMethod.Paypal
						},
						goldPurchase: {
							...o.goldPurchase,
							source: e ? c.GiveGold : i.o(n) ? c.PremiumMarketing : c.CoinsMarketing
						}
					}
				},
				j = e => t => {
					var r;
					const n = b(t, {
						thingId: e
					});
					return {
						...n,
						source: "gold_payment",
						action: "view",
						noun: "success",
						payment: {
							...n.payment,
							method: (null === (r = t.platform.currentPage) || void 0 === r ? void 0 : r.queryParams.thanks) ? l.PaymentMethod.Paypal : l.PaymentMethod.CreditCard
						}
					}
				}
		},
		"./src/reddit/helpers/trackers/snoovatar.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return d
			})), r.d(t, "g", (function() {
				return c
			})), r.d(t, "h", (function() {
				return l
			})), r.d(t, "q", (function() {
				return u
			})), r.d(t, "k", (function() {
				return m
			})), r.d(t, "m", (function() {
				return p
			})), r.d(t, "e", (function() {
				return h
			})), r.d(t, "p", (function() {
				return f
			})), r.d(t, "d", (function() {
				return v
			})), r.d(t, "j", (function() {
				return g
			})), r.d(t, "l", (function() {
				return x
			})), r.d(t, "i", (function() {
				return O
			})), r.d(t, "b", (function() {
				return A
			})), r.d(t, "o", (function() {
				return j
			})), r.d(t, "c", (function() {
				return _
			})), r.d(t, "a", (function() {
				return E
			})), r.d(t, "n", (function() {
				return I
			}));
			var n = r("./src/reddit/models/Gold/ProductOffer.ts"),
				o = r("./src/reddit/selectors/avatarMarketing.ts"),
				a = r("./src/reddit/selectors/telemetry.ts"),
				s = r("./src/reddit/selectors/user.ts");
			const i = {
					goldPurchase: {
						offerContext: n.a.AvatarNewGear
					}
				},
				d = e => t => {
					const r = {
						source: e,
						action: "click",
						noun: "edit_snoovatar",
						...a.o(t)
					};
					return Object(o.a)(t) && Object.assign(r, i), r
				},
				c = (e, t) => r => {
					const {
						id: n
					} = Object(s.wb)(r, {
						userName: t
					});
					return {
						source: e,
						action: "click",
						noun: "copy_avatar",
						...a.o(r),
						snoovatar: {
							userGenerated: n
						}
					}
				},
				l = e => ({
					...a.o(e),
					source: "avatar",
					action: "click",
					noun: "try_this_look_post",
					snoovatar: a.hb(e)
				}),
				u = e => ({
					...a.o(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "snoovatar_builder"
					},
					snoovatar: a.hb(e)
				}),
				m = e => ({
					...a.o(e),
					source: "avatar_builder",
					action: "click",
					noun: "close",
					snoovatar: a.hb(e)
				}),
				p = e => ({
					source: "nav",
					action: "view",
					noun: "avatar_marketing",
					...a.o(e),
					...i
				}),
				h = e => t => ({
					...a.o(t),
					source: "snoovatar",
					action: "set_to_profile",
					noun: "snoovatar",
					snoovatar: {
						userGeneratedSource: e
					}
				}),
				b = e => t => r => ({
					source: "avatar",
					action: e,
					noun: "community_spaces",
					...a.o(r),
					snoovatar: a.hb(r),
					actionInfo: {
						paneName: "avatar_community_spaces" + (t ? "_control" : "")
					}
				}),
				f = b("view"),
				v = b("click"),
				g = b("dismiss"),
				w = (e, t, r) => () => n => ({
					source: e,
					action: t,
					noun: r,
					...a.o(n),
					snoovatar: a.hb(n)
				}),
				x = w("anniversary_achievement", "view", "anniversary_achievement"),
				O = w("anniversary_achievement", "click", "close"),
				A = w("anniversary_achievement", "click", "equip"),
				y = e => () => t => ({
					...a.o(t),
					source: "gold_top_nav",
					action: e,
					noun: "quick_create_cta"
				}),
				j = y("view"),
				_ = y("click"),
				C = (e, t, r) => n => ({
					source: e,
					action: t,
					noun: r,
					...a.o(n),
					actionInfo: {
						pageType: "onboarding"
					},
					snoovatar: a.hb(n)
				}),
				E = e => C("onboarding", "click", e),
				I = () => C("avatar", "view", "onboarding")
		},
		"./src/reddit/helpers/trackers/topAwarded.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			})), r.d(t, "c", (function() {
				return c
			})), r.d(t, "b", (function() {
				return l
			}));
			var n = r("./src/reddit/helpers/correlationIdTracker.ts"),
				o = r("./src/reddit/helpers/trackers/goldPayment.ts"),
				a = r("./src/reddit/selectors/gold/topAwarded.ts"),
				s = r("./src/reddit/selectors/telemetry.ts");
			const i = (e, t = {}) => ({
					...Object(o.h)(e, t),
					correlationId: Object(n.e)(n.a.GildingFlow, !1),
					profile: s.S(e),
					subreddit: s.jb(e)
				}),
				d = e => t => ({
					source: "post",
					action: "click",
					noun: "award_spotlight_banner",
					...i(t, {
						thingId: e
					})
				}),
				c = e => t => ({
					source: "post_awards_leaderboard",
					action: "view",
					noun: "page",
					...i(t, {
						thingId: e
					})
				}),
				l = () => e => ({
					source: "post_awards_leaderboard",
					action: "click",
					noun: "give_gold",
					...i(e, {
						thingId: Object(a.a)(e) || void 0
					})
				})
		},
		"./src/reddit/hooks/useInfoTextTooltip.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var n = r("./node_modules/icepick/icepick.js"),
				o = r("./node_modules/react/index.js"),
				a = r("./src/lib/hooks/useTooltip.ts");
			const s = Object(n.freeze)({
				name: "offset",
				options: {
					offset: [0, 6]
				}
			});

			function i(e) {
				const t = Object(o.useMemo)(() => {
					const t = Object(a.a)(e);
					return Object(n.updateIn)(t, ["modifiers"], e => Object(n.push)(e, s))
				}, [e]);
				return Object(a.b)(t)
			}
		},
		"./src/reddit/hooks/useIsOverlay.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var n = r("./node_modules/react/index.js"),
				o = r("./src/reddit/contexts/InsideOverlay.tsx");

			function a() {
				return Object(n.useContext)(o.a)
			}
		},
		"./src/reddit/icons/fonts/Approve/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				a = r("./src/lib/classNames/index.ts"),
				s = r("./src/reddit/icons/fonts/helpers.tsx"),
				i = r("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = r.n(i);
			t.a = e => o.a.createElement("i", {
				className: Object(a.a)(Object(s.b)("approve", e.isFilled), d.a.approveIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(s.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Gift/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				a = r("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: `${Object(a.b)("award",e.isFilled)} ${e.className}`,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Lock/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				a = r("./src/lib/classNames/index.ts"),
				s = r("./src/reddit/icons/fonts/helpers.tsx"),
				i = r("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = r.n(i);
			t.a = e => o.a.createElement("i", {
				className: Object(a.a)(Object(s.b)("lock", e.isFilled), d.a.lockIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(s.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Premium/index.m.less": function(e, t, r) {
			e.exports = {
				PremiumIcon: "dLp3R7pmxclGjLS87yr5S",
				premiumIcon: "dLp3R7pmxclGjLS87yr5S"
			}
		},
		"./src/reddit/icons/fonts/Premium/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				a = r("./src/reddit/icons/fonts/helpers.tsx"),
				s = r("./src/reddit/icons/fonts/Premium/index.m.less"),
				i = r.n(s);
			const d = r("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				title: e.title,
				className: `${Object(a.b)("premium",e.isFilled)} ${e.className}`
			}), "PremiumIcon", i.a)
		},
		"./src/reddit/icons/fonts/Remove/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				a = r("./src/lib/classNames/index.ts"),
				s = r("./src/reddit/icons/fonts/helpers.tsx"),
				i = r("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = r.n(i);
			t.a = e => o.a.createElement("i", {
				className: Object(a.a)(Object(s.b)("remove", e.isFilled), d.a.removeIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(s.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Report/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				a = r("./src/lib/classNames/index.ts"),
				s = r("./src/reddit/icons/fonts/helpers.tsx"),
				i = r("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = r.n(i);
			t.a = e => o.a.createElement("i", {
				className: Object(a.a)(Object(s.b)("report", e.isFilled), d.a.reportIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(s.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Spam/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				a = r("./src/lib/classNames/index.ts"),
				s = r("./src/reddit/icons/fonts/helpers.tsx"),
				i = r("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = r.n(i);
			t.a = e => o.a.createElement("i", {
				className: Object(a.a)(Object(s.b)("spam", e.isFilled), d.a.spamIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(s.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/commonStyles.m.less": function(e, t, r) {},
		"./src/reddit/icons/svgs/AddSquare/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var n = r("./node_modules/react/index.js"),
				o = r.n(n);

			function a(e) {
				return o.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("rect", {
					fill: "transparent",
					height: "18",
					rx: "4.5",
					strokeDasharray: "2 2",
					strokeLinejoin: "round",
					strokeWidth: "1",
					width: "18",
					x: "1",
					y: "1"
				}), o.a.createElement("path", {
					clipRule: "evenodd",
					d: "M13 9H11V7C11 6.7235 10.7765 6.5 10.5 6.5H9.5C9.2235 6.5 9 6.7235 9 7V9H7C6.724 9 6.5 9.2235 6.5 9.5V10.5C6.5 10.7765 6.724 11 7 11H9V13C9 13.2765 9.2235 13.5 9.5 13.5H10.5C10.7765 13.5 11 13.2765 11 13V11H13C13.2765 11 13.5 10.7765 13.5 10.5V9.5C13.5 9.2235 13.2765 9 13 9Z",
					fillRule: "evenodd"
				}))
			}
		},
		"./src/reddit/icons/svgs/Crosspost/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				o = r.n(n);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", a({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), o.a.createElement("path", {
				d: "M9.06,8.64c1.12-1.26,2.2-2.45,4.44-2.6V7.5a1,1,0,0,0,.6.92,1,1,0,0,0,.41.09,1,1,0,0,0,.67-.26l3.16-2.9a.5.5,0,0,0,0-.74L15.18,1.7a1,1,0,0,0-1.68.74V4c-3.14.17-4.69,1.88-5.93,3.28C6.58,8.42,6,9,5,9H2a1,1,0,0,0,0,2H5C6.93,11,8,9.82,9.06,8.64Z"
			}), o.a.createElement("path", {
				d: "M15.18,11.76a1,1,0,0,0-1.68.74V14c-2.23-.16-3.29-1.32-4.39-2.56-.21-.24-.43-.48-.66-.72a5.63,5.63,0,0,1-1.77,1.06,13.34,13.34,0,0,1,.94,1A7.85,7.85,0,0,0,13.5,16v1.59a1,1,0,0,0,.6.92,1,1,0,0,0,.41.09,1,1,0,0,0,.67-.26l3.16-2.9a.5.5,0,0,0,0-.74Z"
			}))
		},
		"./src/reddit/icons/svgs/Powerup/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				o = r.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 32 32",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id
			}, e.title && o.a.createElement("title", null, e.title), o.a.createElement("path", {
				d: "M12.249 32c-.4 0-.8-.1-1.2-.25l-.05-.05-5.05-2.6c-1.25-.7-1.75-2.2-1.25-3.5l.05-.1 2.45-5.45-3.15-1.5a2.985 2.985 0 01-1.4-3.55l3.5-12.05C6.649 1.2 8.299 0 10.099 0h7.8c.45 0 .9.1 1.3.3l.15.1 4.85 2.45c1.5.8 2.05 2.55 1.35 4.05l-2.2 4.3 4.45 2.25c.8.45 1.35 1.25 1.45 2.2.1.9-.2 1.8-.9 2.45l-14.15 13.15c-.55.5-1.25.75-1.95.75z",
				fill: "#000"
			}), o.a.createElement("path", {
				d: "M10.648 17l-.85 2.1-4.65-2.2c.1.05.25.1.4.1h5.1zM23.749 13.6l3.1 1.6c.5.3.65 1 .15 1.45L12.849 29.8c-.3.25-.65.3-.95.15l-4.85-2.5c.3.1.65.1.9-.15l14.15-13.15c.5-.45.35-1.15-.15-1.45l1.8.9z",
				fill: "#FF4500"
			}), o.a.createElement("path", {
				d: "M23.75 13.6l3.1 1.6c.5.3.65 1 .15 1.45l-4.9-2.5c.5-.45.35-1.15-.15-1.45l1.8.9z",
				fill: "#FF8717"
			}), o.a.createElement("path", {
				d: "M18.898 3.5c.25-.55.05-1.1-.45-1.4l4.9 2.5c.5.25.7.85.45 1.4l-3.35 6.55h-6.05l4.5-9.05z",
				fill: "#FF4500"
			}), o.a.createElement("path", {
				d: "M18.9 3.5c.25-.55.05-1.1-.45-1.4l4.9 2.5c.5.25.7.85.45 1.4l-4.9-2.5z",
				fill: "#FF8717"
			}), o.a.createElement("path", {
				d: "M21.95 12.65c.5.3.65 1 .15 1.45L7.95 27.3c-.3.25-.65.3-.9.15l-.1-.05a.86.86 0 01-.4-1.05l4.1-9.35h-5.1c-.15 0-.3-.05-.45-.1l-.1-.05c-.4-.25-.65-.75-.5-1.25L8.05 3.55A2.19 2.19 0 0110.15 2h7.8c.15 0 .3.05.45.1l.05.05c.45.25.7.85.45 1.4l-4.5 9.05h7.1c.15 0 .3.05.4.1l.05-.05z",
				fill: "#FFD635"
			}), o.a.createElement("path", {
				d: "M15.599 3.45c.55-.15 1.15-.25 1.7-.45-.6-.1-1.15-.15-1.75-.2-.6-.05-1.15-.05-1.75-.1-1.15-.05-2.25 0-3.4.05-.55 0-1.05.3-1.35.8-.15.3-.15.35-.2.5l-.15.4-.5 1.55c-.35 1.05-.7 2.1-1 3.15-.3 1.05-.65 2.1-.9 3.2-.3 1.05-.6 2.15-.8 3.25.55-1 1-2 1.5-3 .45-1 .9-2 1.35-3.05.4-1 .85-2.05 1.2-3.1l.6-1.55.25-.65h.05c1.15-.1 2.3-.25 3.4-.45.6-.1 1.15-.2 1.75-.35zM20.25 13.35c-1.1-.05-2.2-.05-3.3 0-.55 0-1.1.05-1.65.1-.55.05-1.1.1-1.65.2.55.15 1.1.25 1.6.35.55.1 1.1.2 1.65.25.6.1 1.25.15 1.85.2-.45.45-.9.85-1.3 1.3-.75.75-1.5 1.5-2.25 2.3-.75.8-1.5 1.55-2.2 2.35-.7.8-1.45 1.6-2.1 2.45.9-.65 1.7-1.3 2.55-2 .85-.7 1.65-1.4 2.45-2.1.8-.7 1.6-1.45 2.4-2.15l2.35-2.2c.1-.1.15-.25.2-.4 0-.4-.3-.65-.6-.65z",
				fill: "#fff"
			}))
		},
		"./src/reddit/icons/svgs/TopAwarded/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				o = r.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 24 24",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				d: "M22.5 22.866h-21a1.5 1.5 0 01-1.5-1.5v-7.329c0-.59.34-1.1.835-1.345v-7.23a1.5 1.5 0 011.5-1.5h4.943v-1.65a1.5 1.5 0 011.5-1.5h6.444a1.5 1.5 0 011.5 1.5v4.363h4.943a1.5 1.5 0 011.5 1.5v4.517c.495.245.835.755.835 1.345v7.329a1.5 1.5 0 01-1.5 1.5z",
				fill: "#000"
			}), o.a.createElement("path", {
				d: "M22.5 18.971h-21v2.395h21V18.97z",
				fill: "#FFD635"
			}), o.a.createElement("path", {
				d: "M22.5 14.037h-21v5.119h21v-5.119z",
				fill: "#FF8717"
			}), o.a.createElement("path", {
				d: "M21.665 14.66v3.178h-6.443V12.85h6.443v1.812zM8.779 10.136v7.702H2.335v-7.702H8.78z",
				fill: "#FFD635"
			}), o.a.createElement("path", {
				d: "M15.222 17.838v.348H8.779V6.987h6.443v10.852z",
				fill: "#FFD635"
			}), o.a.createElement("path", {
				d: "M16.244 12.85h-1.022v4.988h1.022V12.85zM8.779 10.136H7.756v7.702H8.78v-7.702z",
				fill: "#FEB331"
			}), o.a.createElement("path", {
				d: "M15.734 12.85h-.512v4.988h.512V12.85zM8.78 10.136h-.512v7.702h.512v-7.702z",
				fill: "#F76B0B"
			}), o.a.createElement("path", {
				d: "M21.665 8.175h-6.443v4.674h6.443V8.175zM8.779 5.462H2.335v4.674H8.78V5.462z",
				fill: "#FF8717"
			}), o.a.createElement("path", {
				d: "M15.222 2.313H8.779v4.674h6.443V2.312z",
				fill: "#FF8717"
			}), o.a.createElement("path", {
				d: "M16.244 8.175h-1.022v4.674h1.022V8.175zM8.779 5.462H7.756v4.674H8.78V5.462z",
				fill: "#DB5003"
			}), o.a.createElement("path", {
				d: "M11.752 11.577h-.063l-1.143.772v-1.038l1.206-.822h1.206v4.742h-1.206v-3.654zM5.326 12.403c.916 0 1.462.496 1.462 1.174 0 .469-.208.779-.84 1.349l-.778.705v.052h1.665v.784H3.826v-.672l1.415-1.28c.489-.447.57-.617.57-.85 0-.275-.191-.502-.537-.502-.367 0-.584.25-.584.592H3.77c0-.804.633-1.352 1.557-1.352zM18.267 15.477h.412c.272 0 .448-.159.448-.39 0-.218-.167-.379-.443-.379-.29 0-.466.154-.479.415h-.744c.011-.617.5-1.025 1.263-1.025.753 0 1.165.394 1.162.873 0 .388-.25.644-.6.726v.042c.462.065.73.352.73.775 0 .575-.548.971-1.321.971-.764 0-1.283-.412-1.312-1.044h.78c.01.247.211.4.52.4.3 0 .502-.162.502-.405 0-.253-.192-.407-.506-.407h-.412v-.552z",
				fill: "#FFF1B6"
			}), o.a.createElement("path", {
				d: "M11.752 11.13h-.063l-1.143.771v-1.038l1.206-.822h1.206v4.742h-1.206V11.13zM5.326 11.955c.916 0 1.462.496 1.462 1.174 0 .469-.208.779-.84 1.349l-.778.705v.052h1.665v.784H3.826v-.672l1.415-1.28c.489-.447.57-.617.57-.85 0-.275-.191-.503-.537-.503-.367 0-.584.25-.584.593H3.77c0-.804.633-1.352 1.557-1.352zM18.267 15.029h.412c.272 0 .448-.159.448-.39 0-.218-.167-.379-.443-.379-.29 0-.466.154-.479.415h-.744c.011-.617.5-1.025 1.263-1.025.753 0 1.165.394 1.162.873 0 .388-.25.644-.6.726v.042c.462.065.73.352.73.775 0 .575-.548.971-1.321.971-.764 0-1.283-.412-1.312-1.044h.78c.01.247.211.4.52.4.3 0 .502-.162.502-.405 0-.253-.192-.407-.506-.407h-.412v-.552z",
				fill: "#000"
			}), o.a.createElement("path", {
				d: "M15.222 6.08H8.779v.907h6.443V6.08zM22.5 19.156h-21v.907h21v-.907zM21.665 12.866h-5.931l.51-.907h5.421v.907zM8.268 10.136H2.336v-.907h5.42l.512.907z",
				fill: "#FFFCD9"
			}))
		},
		"./src/reddit/layout/twoCol/ExpandLeft/index.m.less": function(e, t, r) {
			e.exports = {
				left: "_5gAwSCo7K8G413IoE78Ml",
				right: "_2ghjBMFIsORwdO3oh2Kq6g",
				exapndLeftContainer: "_1zTJo0Ndih4fp__5DjbClN"
			}
		},
		"./src/reddit/layout/twoCol/ExpandLeft/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				a = r("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				s = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/layout/twoCol/ExpandLeft/index.m.less"),
				d = r.n(i);
			t.a = Object(a.a)(e => o.a.createElement("div", {
				className: Object(s.a)(d.a.exapndLeftContainer, e.className)
			}, o.a.createElement("div", {
				className: d.a.left
			}, Array.isArray(e.children) && e.children[0]), o.a.createElement("div", {
				className: d.a.right,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[1])), 2)
		},
		"./src/reddit/models/Audio/index.ts": function(e, t, r) {
			"use strict";
			var n, o;

			function a(e) {
				return Boolean(e.audioRoom)
			}
			r.d(t, "a", (function() {
					return o
				})), r.d(t, "b", (function() {
					return a
				})),
				function(e) {
					e.Unknown = "UNKNOWN", e.Twilio = "TWILIO"
				}(n || (n = {})),
				function(e) {
					e[e.NotAvailable = 0] = "NotAvailable", e[e.Processing = 1] = "Processing", e[e.Available = 2] = "Available", e[e.Removed = 3] = "Removed"
				}(o || (o = {}))
		},
		"./src/reddit/models/Gold/TopAwarded/index.ts": function(e, t, r) {
			"use strict";
			var n;
			r.d(t, "a", (function() {
					return n
				})),
				function(e) {
					e.Active = "ACTIVE", e.Inactive = "INACTIVE"
				}(n || (n = {}))
		},
		"./src/reddit/models/ModUserNotes/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return s
			})), r.d(t, "g", (function() {
				return i
			})), r.d(t, "b", (function() {
				return d
			})), r.d(t, "a", (function() {
				return c
			})), r.d(t, "e", (function() {
				return l
			})), r.d(t, "d", (function() {
				return u
			})), r.d(t, "f", (function() {
				return m
			})), r.d(t, "h", (function() {
				return p
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./src/reddit/helpers/isPost.ts"),
				a = r("./src/redditGQL/types.ts");
			const s = "DEFAULT_MOD_NOTE",
				i = (e, t) => `LAST_AUTHOR_MOD_NOTE-${e}${t?"-overlay":""}`,
				d = {
					[a.q.BotBan]: "#1717604F",
					[a.q.PermaBan]: "#3E0A514F",
					[a.q.Ban]: "#5B00414F",
					[a.q.AbuseWarning]: "#6D001A4F",
					[a.q.SpamWarning]: "#5423134F",
					[a.q.SpamWatch]: "#3A26194F",
					[a.q.SolidContributor]: "#0044414F",
					[a.q.HelpfulUser]: "#02315C4F",
					[s]: "#242424"
				},
				c = {
					[a.q.BotBan]: "#CCD7FF",
					[a.q.PermaBan]: "#F3CCFF",
					[a.q.Ban]: "#FFC9D2",
					[a.q.AbuseWarning]: "#FFD5AE",
					[a.q.SpamWarning]: "#FFF494",
					[a.q.SpamWatch]: "#EAD5A2",
					[a.q.SolidContributor]: "#CBFD9A",
					[a.q.HelpfulUser]: "#A6EDFF",
					[s]: "#E6E6E6"
				},
				l = {
					[a.q.BotBan]: "ban_fill",
					[a.q.PermaBan]: "bot_fill",
					[a.q.Ban]: "bot_fill",
					[a.q.AbuseWarning]: "spoiler_fill",
					[a.q.SpamWarning]: "spoiler_fill",
					[a.q.SpamWatch]: "nsfw_language_fill",
					[a.q.SolidContributor]: "new_fill",
					[a.q.HelpfulUser]: "peace_fill",
					[s]: "user_note_fill"
				},
				u = {
					[a.q.BotBan]: "#5349DA",
					[a.q.PermaBan]: "#9C3CAC",
					[a.q.Ban]: "#DE107F",
					[a.q.AbuseWarning]: "#FB133A",
					[a.q.SpamWarning]: "#E79800",
					[a.q.SpamWatch]: "#9C6926",
					[a.q.SolidContributor]: "#00A368",
					[a.q.HelpfulUser]: "#006DC6",
					[s]: "#818384"
				},
				m = {
					[a.q.BotBan]: () => n.fbt._("Bot Ban", null, {
						hk: "2kKP5R"
					}),
					[a.q.PermaBan]: () => n.fbt._("Perma Ban", null, {
						hk: "2NKibN"
					}),
					[a.q.Ban]: () => n.fbt._("Ban", null, {
						hk: "4tkpUP"
					}),
					[a.q.AbuseWarning]: () => n.fbt._("Abuse Warning", null, {
						hk: "3yQJ5"
					}),
					[a.q.SpamWarning]: () => n.fbt._("Spam Warning", null, {
						hk: "4sYfYD"
					}),
					[a.q.SpamWatch]: () => n.fbt._("Spam Watch", null, {
						hk: "3CoM4o"
					}),
					[a.q.SolidContributor]: () => n.fbt._("Good Contributor", null, {
						hk: "31uTvb"
					}),
					[a.q.HelpfulUser]: () => n.fbt._("Helpful", null, {
						hk: "1iapJ2"
					})
				},
				p = e => Object(o.a)(e.id) ? e.belongsTo.id : e.subredditId
		},
		"./src/reddit/models/Payments/index.ts": function(e, t, r) {
			"use strict";
			var n, o, a, s;
			r.d(t, "b", (function() {
					return o
				})), r.d(t, "a", (function() {
					return a
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(n || (n = {})),
				function(e) {
					e.PayPal = "PAYPAL", e.Stripe = "STRIPE"
				}(o || (o = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(a || (a = {})),
				function(e) {
					e.Comment = "comment", e.Post = "post", e.Profile = "profile", e.Subreddit = "subreddit"
				}(s || (s = {}))
		},
		"./src/reddit/reducers/features/avatar/index.ts": function(e, t, r) {
			"use strict";
			var n, o, a = r("./node_modules/redux/es/redux.js"),
				s = r("./src/reddit/actions/snoovatar.ts");
			! function(e) {
				e.PREMIUM = "PREMIUM"
			}(n || (n = {})),
			function(e) {
				e[e.BACKGROUND = 0] = "BACKGROUND", e[e.ACCESSORY_BACK = 1] = "ACCESSORY_BACK", e[e.HAIR_BACK = 2] = "HAIR_BACK", e[e.BODY_BOTTOM = 3] = "BODY_BOTTOM", e[e.BODY = 4] = "BODY", e[e.ACCESSORY = 5] = "ACCESSORY", e[e.FACE_LOWER = 6] = "FACE_LOWER", e[e.FACE_UPPER = 7] = "FACE_UPPER", e[e.HAIR = 8] = "HAIR", e[e.HEAD_ACCESSORY = 9] = "HEAD_ACCESSORY"
			}(o || (o = {}));
			const i = {
				id: "",
				csrf_token: "",
				snoovatar: null,
				websocketsUrls: {
					renderer: "",
					download: ""
				},
				capabilities: [n.PREMIUM],
				hasActiveClosetSubscription: !1
			};
			var d = (e = i, t) => {
				switch (t.type) {
					case s.b:
						return {
							...t.payload
						};
					default:
						return e
				}
			};
			const c = {
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
				p = e => {
					const t = {};
					return e.forEach(e => {
						if (e.startsWith("targeting:")) {
							const r = e.split(":");
							if (!r.length && r.length < 3) return null;
							try {
								t[r[1]] = JSON.parse(r[2])
							} catch {
								t[r[1]] = r[2]
							}
						}
					}), t
				};
			var h = r("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				b = r("./src/reddit/actions/modal.ts"),
				f = r("./src/reddit/constants/modals.ts");
			var v = (e = null, t) => {
				var r;
				switch (t.type) {
					case h.s:
						const {
							avatarMarketingEvents: n
						} = t.payload;
						return n ? function(e) {
							if (!e) return c;
							const t = c;
							return e.forEach(e => {
								const {
									startsAt: r,
									endsAt: n,
									webAssetUrls: o,
									tags: a
								} = e, s = r && new Date(r) <= new Date, i = !!n && new Date(n) < new Date, d = !!s && !i, c = a.includes(m);
								if (a && a.includes(l) && !c) {
									const {
										text: r,
										id: n
									} = e, s = o || null, i = p(a);
									t && (t.quickCreateV1 = {
										...i,
										id: n,
										text: r,
										active: d && !!s,
										webAssetUrls: s
									})
								}
								if (a && a.includes(u) && !c) {
									const e = o || null;
									t && (t.marketingEvent = {
										active: d && !!e,
										assetUrls: e
									})
								}
							}), t
						}(n) : c;
					case b.c:
						return (null === (r = t.payload) || void 0 === r ? void 0 : r.id) === f.a.SNOOVATAR_MODAL ? c : e;
					default:
						return e
				}
			};
			var g = (e = null, t) => {
				switch (t.type) {
					case s.a: {
						const {
							image: e,
							accessory_ids: r
						} = t.payload;
						return {
							image: e,
							accessoryIds: r
						}
					}
					default:
						return e
				}
			};
			t.a = Object(a.c)({
				marketing: v,
				avatarUser: d,
				randomAvatar: g
			})
		},
		"./src/reddit/selectors/authorFlair.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return o
			})), r.d(t, "c", (function() {
				return a
			}));
			const n = (e, {
					post: t
				}) => {
					const r = t.belongsTo.id;
					if (!r) return null;
					const n = e.authorFlair.models[r];
					if (!n) return null;
					const o = t.author;
					return o && n[o] || null
				},
				o = (e, {
					subredditId: t
				}) => {
					const r = e.authorFlair && e.authorFlair.inContext && e.authorFlair.inContext.username;
					if (!r) return null;
					if (!t) return null;
					const n = e.authorFlair.models[t];
					return n ? n[r] : null
				},
				a = e => e.authorFlair.inContext
		},
		"./src/reddit/selectors/avatar.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return s
			})), r.d(t, "c", (function() {
				return i
			}));
			var n = r("./src/lib/initializeClient/installReducer.ts"),
				o = r("./src/reddit/reducers/features/avatar/index.ts");
			Object(n.a)({
				features: {
					avatar: o.a
				}
			});
			const a = e => {
					var t, r;
					return null === (r = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === r ? void 0 : r.avatarUser
				},
				s = e => {
					var t, r;
					return null === (r = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === r ? void 0 : r.avatarUser.csrf_token
				},
				i = e => {
					var t, r;
					return (null === (r = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === r ? void 0 : r.randomAvatar) || null
				}
		},
		"./src/reddit/selectors/avatarMarketing.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return i
			})), r.d(t, "a", (function() {
				return d
			}));
			var n = r("./node_modules/reselect/es/index.js"),
				o = r("./src/lib/initializeClient/installReducer.ts"),
				a = r("./src/reddit/reducers/features/avatar/index.ts"),
				s = r("./src/reddit/selectors/experiments/econ/index.ts");
			Object(o.a)({
				features: {
					avatar: a.a
				}
			});
			const i = e => {
					var t, r;
					return !!(null === (r = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === r ? void 0 : r.marketing)
				},
				d = Object(n.a)(s.b, e => {
					var t, r, n;
					const o = null === (n = null === (r = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === r ? void 0 : r.marketing) || void 0 === n ? void 0 : n.marketingEvent;
					return (null == o ? void 0 : o.active) ? (null == o ? void 0 : o.assetUrls) && (null == o ? void 0 : o.assetUrls[0]) : null
				}, (e, t) => e ? t : null)
		},
		"./src/reddit/selectors/economics.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return f
			})), r.d(t, "o", (function() {
				return v
			})), r.d(t, "a", (function() {
				return g
			})), r.d(t, "x", (function() {
				return w
			})), r.d(t, "f", (function() {
				return x
			})), r.d(t, "i", (function() {
				return O
			})), r.d(t, "q", (function() {
				return A
			})), r.d(t, "h", (function() {
				return y
			})), r.d(t, "z", (function() {
				return j
			})), r.d(t, "l", (function() {
				return _
			})), r.d(t, "n", (function() {
				return C
			})), r.d(t, "e", (function() {
				return E
			})), r.d(t, "d", (function() {
				return I
			})), r.d(t, "j", (function() {
				return k
			})), r.d(t, "p", (function() {
				return T
			})), r.d(t, "k", (function() {
				return S
			})), r.d(t, "r", (function() {
				return B
			})), r.d(t, "y", (function() {
				return L
			})), r.d(t, "u", (function() {
				return F
			})), r.d(t, "v", (function() {
				return R
			})), r.d(t, "b", (function() {
				return H
			})), r.d(t, "w", (function() {
				return D
			})), r.d(t, "s", (function() {
				return G
			})), r.d(t, "t", (function() {
				return U
			})), r.d(t, "g", (function() {
				return q
			})), r.d(t, "m", (function() {
				return W
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./src/reddit/featureFlags/index.ts"),
				o = r("./src/reddit/helpers/economics/sortBadges.ts"),
				a = r("./src/reddit/helpers/richTextJson/index.ts"),
				s = r("./src/reddit/models/Badge/index.ts"),
				i = r("./src/reddit/models/Badge/managementPage.ts"),
				d = r("./src/reddit/models/Payments/index.ts"),
				c = r("./src/reddit/models/Product/index.ts"),
				l = r("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				u = r("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				m = r("./src/reddit/selectors/commentSelector.ts"),
				p = r("./src/reddit/selectors/gold/powerups/index.ts"),
				h = r("./src/reddit/selectors/gold/powerups/benefitSettings.ts");
			const b = [],
				f = (e, t) => {
					const r = e.economics.subredditPremium[t];
					if (r && r.status === u.a.Fetched) {
						const e = r.data.subscription,
							t = e && e.active;
						if (t) {
							let e = Object.keys(t);
							return e.length > 1 && (e = e.filter(e => "provisional_membership" !== e)), t[e[0]] || null
						}
					}
					return null
				},
				v = (e, t) => {
					const r = f(e, t);
					return r && r.endsAt || null
				};
			var g;
			! function(e) {
				e[e.DontKnow = 0] = "DontKnow", e[e.NotSubscribed = 1] = "NotSubscribed", e[e.Subscribed = 2] = "Subscribed"
			}(g || (g = {}));
			const w = (e, t) => {
					const r = e.economics.subredditPremium[t];
					if (r && r.status === u.a.Fetched) {
						const r = v(e, t),
							n = Date.now();
						return r && n < r ? g.Subscribed : g.NotSubscribed
					}
					return g.DontKnow
				},
				x = (e, t) => {
					const r = e.user.account,
						n = e.economics.subredditPremium[t];
					if (r && n && n.status === u.a.Fetched) {
						const n = ((e.users.appliedBadges[r.id] || {})[t] || b).map(t => e.badges.models[t]).filter(Boolean);
						if (n) return {
							[i.a.Loyalty]: n.find(e => e.placement === s.a.First),
							[i.a.Achievement]: n.find(e => e.placement === s.a.Second),
							[i.a.Cosmetic]: n.find(e => !e.placement)
						}
					}
					return {
						[i.a.Loyalty]: void 0,
						[i.a.Achievement]: void 0,
						[i.a.Cosmetic]: void 0
					}
				};

			function O(e, t) {
				return (null == e ? void 0 : e.length) ? Object(o.a)(e.map(e => t[e]).filter(Boolean)) : b
			}
			const A = (e, t, r) => {
					var o;
					if (!n.d.spBadges(e)) return b;
					return O(null === (o = e.users.appliedBadges[r]) || void 0 === o ? void 0 : o[t], e.badges.models)
				},
				y = (e, t) => {
					const r = e.economics.subredditPremium[t.subredditId];
					if (r && r.status === u.a.Fetched) {
						const e = r.raw.collections[t.collectionId];
						if (e) return {
							highlight: e.extra && e.extra.style && e.extra.style.color,
							title: e.title
						}
					}
				};

			function j(e, t) {
				const r = (e.economics.me.data.specialMemberships || {})[t];
				return !!(r && r.settings && r.settings.optOut)
			}

			function _(e, t) {
				const {
					badge: r,
					subredditId: n
				} = t, o = e.user.account ? e.user.account.id : void 0;
				if (Object(s.e)(r) && r.userId === o) return r;
				const a = e.badges.models,
					i = e.user.ownedBadges[n] || {},
					d = Object(s.e)(r) ? r.type : r.id;
				return Object.keys(i).map(e => a[e]).find(e => e && e.type === d)
			}

			function C(e, t, r, n) {
				const o = e.economics.subredditPremium[t];
				if (o && o.status === u.a.Fetched) {
					if (r === i.a.Loyalty || r === i.a.Achievement) return o.data.collections[r];
					if (r === i.a.Cosmetic && n) return o.data.collections[r][n]
				}
				return b
			}

			function E(e, t) {
				const r = C(e, t, i.a.Loyalty).find(e => "membership" === e.id);
				return r ? [].concat(r.locked, r.unlocked).filter(e => e.position).sort((e, t) => e.position - t.position) : b
			}

			function I(e, t) {
				const r = e.economics.subredditPremium[t];
				if (r && r.status === u.a.Fetched) {
					const e = r.data.collections[i.a.Cosmetic];
					return Object.values(e).reduce((e, t) => e.concat(t), []).reduce((e, t) => e.concat(t.locked, t.unlocked), []).filter(s.f)
				}
				return b
			}

			function k(e, t) {
				return C(e, t, i.a.Cosmetic, i.c.Gallery).some(e => e.locked.some(e => Object(s.f)(e) || !!e.price))
			}
			const T = e => {
				const t = [],
					r = e.economics.paymentSystems;
				if (r.status === l.a.Fetched && r.data.stripe && r.data.stripe.sources) {
					const e = r.data.stripe.sources;
					for (const r in e) {
						const n = e[r];
						t.push({
							display: `${n.brand} •••• ${n.last4}`,
							id: r,
							type: d.a.SavedStripe
						})
					}
				}
				if (r.status === l.a.Fetched && r.data.braintree && r.data.braintree.sources) {
					const e = r.data.braintree.sources;
					for (const r in e) {
						const n = e[r];
						"PayPal" === n.brand && t.push({
							display: "PayPal",
							id: n.id,
							type: d.a.SavedPayPal
						})
					}
				}
				return t
			};
			var P;
			! function(e) {
				e[e.Fetched = 0] = "Fetched", e[e.Fetching = 1] = "Fetching", e[e.NotFetched = 2] = "NotFetched"
			}(P || (P = {}));
			const M = {
					prices: {},
					member: "Supporter",
					memberPlural: "Supporters",
					memberAlt: "Subreddit Supporter",
					memberAltPlural: "Subreddit Supporters",
					membership: "Membership",
					membershipAlt: "Supporter Membership"
				},
				S = (e, t) => Object.values(e.products.models).filter(e => e.type === c.a.Membership && t && e.subredditId === t),
				N = (e, t) => {
					if (!t) return {};
					const r = M.prices;
					S(e, t).forEach(e => {
						e.price && e.currency && (r[e.currency] = e.price)
					});
					const n = f(e, t);
					return n && n.price && n.currency && (r[n.currency] = n.price), r
				},
				B = (e, t) => {
					var r, n, o, a;
					const s = (null === (a = null === (o = null === (n = null === (r = e.features) || void 0 === r ? void 0 : r.crypto) || void 0 === n ? void 0 : n.points) || void 0 === o ? void 0 : o[t || ""]) || void 0 === a ? void 0 : a.nomenclature) || M;
					return {
						prices: N(e, t),
						member: s.member || M.member,
						memberPlural: s.memberPlural || M.memberPlural,
						memberAlt: s.memberAlt || M.memberAlt,
						memberAltPlural: s.memberAltPlural || M.memberAltPlural,
						membership: s.membership || M.membership,
						membershipAlt: s.membershipAlt || M.membershipAlt
					}
				},
				L = e => {
					const t = e.economics.paymentSystems;
					return !!(t.status === l.a.Fetched && t.data && t.data.tips && t.data.tips.usdr && t.data.tips.usdr.allowed)
				},
				F = (e, t) => {
					const r = e.user.ownedBadges[t] || {};
					return !!Object.keys(r).length
				},
				R = e => {
					const t = e.economics.paymentSystems;
					return t.status === l.a.Fetched && !!t.data && !!t.data.stripe && !!t.data.stripe.stripeAccountId
				},
				H = (e, {
					subredditId: t
				}) => {
					if (!t) return;
					return e.economics.emotes[t]
				},
				D = (e, t) => {
					const r = t && e.economics.gifs[t];
					return !!r && r.hasGifProduct
				},
				G = (e, t, r) => {
					if (Object(p.r)(e, {
							subredditId: t
						})) return !0;
					const n = "replyToPost" !== r && Object(m.b)(e, {
						commentId: r
					});
					return !(!n || !Object(a.a)(n))
				},
				U = (e, t, r) => {
					if (!Object(h.b)(e, {
							subredditId: t
						})) return !1;
					if (Object(p.s)(e, {
							subredditId: t
						})) return !0;
					const o = "replyToPost" !== r && Object(m.b)(e, {
						commentId: r
					});
					if (o && Object(a.b)(o)) return !0;
					const s = n.d.spGiphy(e),
						i = D(e, t);
					return !(!s || !i) || s && i
				},
				q = (e, t, r) => {
					if (t) {
						const n = e.economics.banners.dismissedBanners[t];
						if (n && n.data) return !!n.data[r]
					}
				},
				W = e => e.economics.pointsCopy.data
		},
		"./src/reddit/selectors/experiments/adHeaderExperiment.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var n = r("./node_modules/reselect/es/index.js"),
				o = r("./src/reddit/constants/experiments.ts"),
				a = r("./src/reddit/helpers/chooseVariant/index.ts");
			const s = Object(n.a)(e => Object(a.c)(e, {
				experimentName: o.kb,
				experimentEligibilitySelector: a.a
			}), e => e)
		},
		"./src/reddit/selectors/gild.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return n
			})), r.d(t, "b", (function() {
				return o
			})), r.d(t, "f", (function() {
				return a
			})), r.d(t, "g", (function() {
				return s
			})), r.d(t, "c", (function() {
				return i
			})), r.d(t, "e", (function() {
				return d
			})), r.d(t, "a", (function() {
				return c
			}));
			const n = e => e.gild.gildModalThingId,
				o = e => e.gild.correlationId || void 0,
				a = e => e.gild.isAnonymous,
				s = e => e.gild.isIframed,
				i = e => e.gild.message,
				d = e => e.gild.api.pending,
				c = e => e.gild.api.error
		},
		"./src/reddit/selectors/gold/awardIcon.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return m
			})), r.d(t, "b", (function() {
				return p
			})), r.d(t, "a", (function() {
				return h
			})), r.d(t, "e", (function() {
				return b
			})), r.d(t, "d", (function() {
				return f
			}));
			var n = r("./src/lib/objectSelector/index.ts"),
				o = r("./src/reddit/models/Gold/Award.ts"),
				a = r("./src/reddit/selectors/commentSelector.ts"),
				s = r("./src/reddit/selectors/gold/giveAwards.ts"),
				i = r("./src/reddit/selectors/posts.ts"),
				d = r("./src/reddit/selectors/user.ts"),
				c = r("./src/reddit/selectors/userPrefs.ts");
			const l = [32, 48, 64, 128],
				u = (e, t, r) => {
					const n = t ? e[`staticIcon${r}`] : e[`icon${r}`];
					return (null == n ? void 0 : n.url) ? n.url : t ? e.staticIcon.url : e.icon.url
				},
				m = ({
					award: e,
					size: t,
					prefersReducedMotion: r,
					postOrComment: n
				}) => e.awardSubType === o.d.Group ? (({
					award: e,
					size: t,
					prefersReducedMotion: r,
					postOrComment: n
				}) => {
					let o = e;
					if ((null == n ? void 0 : n.awardCountsById) && n.awardCountsById[e.id] && e.tiers) {
						const t = n.awardCountsById[e.id];
						o = e.tiers.reduce((e, r) => t >= r.awardingsRequired ? r : e)
					}
					return u(o, r, t)
				})({
					award: e,
					size: t,
					prefersReducedMotion: r,
					postOrComment: n
				}) : u(e, r, t),
				p = Object(n.a)((e, {
					awards: t,
					minSize: r,
					postOrCommentId: n
				}) => {
					const o = Object(c.c)(e),
						s = l.find(e => e >= r),
						d = n ? Object(i.G)(e, {
							postId: n
						}) || Object(a.b)(e, {
							commentId: n
						}) : void 0;
					return t.reduce((e, t) => (t && (e[t.id] = m({
						award: t,
						size: s,
						prefersReducedMotion: o,
						postOrComment: d
					})), e), {})
				}),
				h = (e, {
					award: t,
					minSize: r,
					postOrCommentId: n
				}) => t ? p(e, {
					awards: [t],
					minSize: r,
					postOrCommentId: n
				})[t.id] : void 0,
				b = (e, {
					minSize: t,
					userName: r
				}) => {
					const n = Object(d.wb)(e, {
						userName: r
					});
					if (n && n.awardedLastMonth && n.awardedLastMonth.topAward) return h(e, {
						award: n.awardedLastMonth.topAward,
						minSize: t
					})
				},
				f = e => {
					const t = Object(s.b)(e),
						r = Object(s.a)(e);
					return h(e, {
						award: t,
						postOrCommentId: r || void 0,
						minSize: 512
					})
				}
		},
		"./src/reddit/selectors/gold/giveAwards.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return o
			}));
			const n = e => e.gild.selectedAward,
				o = e => e.gild.gildedThing
		},
		"./src/reddit/selectors/gold/topAwarded.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "e", (function() {
				return o
			})), r.d(t, "c", (function() {
				return a
			})), r.d(t, "d", (function() {
				return s
			})), r.d(t, "b", (function() {
				return i
			}));
			const n = e => e.users.topAwarders.currentPostId,
				o = e => e.users.topAwarders.api.pending,
				a = e => e.users.topAwarders.api.error,
				s = (e, t) => e.users.topAwarders.list[t],
				i = (e, t) => e.users.topAwarders.currentRank[t]
		},
		"./src/reddit/selectors/goldPurchaseModals.ts": function(e, t, r) {
			"use strict";
			r.d(t, "q", (function() {
				return s
			})), r.d(t, "s", (function() {
				return i
			})), r.d(t, "r", (function() {
				return d
			})), r.d(t, "u", (function() {
				return c
			})), r.d(t, "t", (function() {
				return l
			})), r.d(t, "b", (function() {
				return u
			})), r.d(t, "p", (function() {
				return m
			})), r.d(t, "a", (function() {
				return p
			})), r.d(t, "n", (function() {
				return h
			})), r.d(t, "o", (function() {
				return b
			})), r.d(t, "c", (function() {
				return f
			})), r.d(t, "h", (function() {
				return v
			})), r.d(t, "l", (function() {
				return g
			})), r.d(t, "w", (function() {
				return w
			})), r.d(t, "x", (function() {
				return x
			})), r.d(t, "v", (function() {
				return O
			})), r.d(t, "y", (function() {
				return A
			})), r.d(t, "f", (function() {
				return y
			})), r.d(t, "g", (function() {
				return j
			})), r.d(t, "i", (function() {
				return _
			})), r.d(t, "k", (function() {
				return C
			})), r.d(t, "j", (function() {
				return E
			})), r.d(t, "m", (function() {
				return I
			})), r.d(t, "e", (function() {
				return k
			})), r.d(t, "d", (function() {
				return T
			}));
			var n = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				o = r("./src/lib/initializeClient/installReducer.ts"),
				a = r("./src/reddit/reducers/features/goldPurchase/index.ts");
			Object(o.a)({
				features: {
					goldPurchase: a.a
				}
			});
			const s = e => e.features.goldPurchase.purchaseModal.activePage,
				i = e => e.features.goldPurchase.purchaseModal.gildThingId || void 0,
				d = e => e.features.goldPurchase.purchaseModal.correlationId || void 0,
				c = e => e.features.goldPurchase.purchaseModal.showModal,
				l = e => e.features.goldPurchase.purchaseModal.packageId,
				u = e => e.features.goldPurchase.packageOfferModal.packageId,
				m = e => e.features.goldPurchase.premiumPurchaseModal.renewInterval,
				p = e => {
					const t = Object(n.l)(e),
						r = (e => e.features.goldPurchase.premiumPurchaseModal.packageId)(e);
					return t.length && r && t.find(e => e.mobileId === r) || null
				},
				h = e => e.features.goldPurchase.premiumPurchaseModal.activePage,
				b = e => e.features.goldPurchase.premiumPurchaseModal.showModal,
				f = e => e.features.goldPurchase.payment.paymentMethod,
				v = e => e.features.goldPurchase.payment.cardName,
				g = e => e.features.goldPurchase.payment.postalCode,
				w = e => e.features.goldPurchase.payment.savedCardsPending,
				x = e => e.features.goldPurchase.payment.savedCards,
				O = e => e.features.goldPurchase.payment.rememberCard,
				A = e => e.features.goldPurchase.payment.useSavedCard,
				y = e => e.features.goldPurchase.payment.cardValidation.cardCvc,
				j = e => e.features.goldPurchase.payment.cardValidation.cardExpiry,
				_ = e => e.features.goldPurchase.payment.cardValidation.cardNumber,
				C = e => e.features.goldPurchase.payment.cardValidation.nameOnCard,
				E = e => e.features.goldPurchase.payment.stripeToken.errorMessage,
				I = e => e.features.goldPurchase.payment.stripeToken.pending,
				k = e => e.features.goldPurchase.payment.paypal.passthrough,
				T = e => e.features.goldPurchase.payment.paypal.errorMessage
		},
		"./src/redditGQL/operations/AwardSheetInfo.json": function(e) {
			e.exports = JSON.parse('{"id":"e1be3a261389"}')
		},
		"./src/redditGQL/operations/AwardSheetInfoForProfile.json": function(e) {
			e.exports = JSON.parse('{"id":"3a33281f30db"}')
		},
		"./src/redditGQL/operations/CreateCommunityAward.json": function(e) {
			e.exports = JSON.parse('{"id":"38852e4f82b0"}')
		},
		"./src/redditGQL/operations/CreateGlobalAward.json": function(e) {
			e.exports = JSON.parse('{"id":"c11324579f8c"}')
		},
		"./src/redditGQL/operations/CreateModAward.json": function(e) {
			e.exports = JSON.parse('{"id":"a04c85b4e964"}')
		},
		"./src/redditGQL/operations/DisableAwardInCommunity.json": function(e) {
			e.exports = JSON.parse('{"id":"689f37138ede"}')
		},
		"./src/redditGQL/operations/EnableAwardInCommunity.json": function(e) {
			e.exports = JSON.parse('{"id":"3c2210d8ba4b"}')
		},
		"./src/redditGQL/operations/GlobalAwards.json": function(e) {
			e.exports = JSON.parse('{"id":"16101a740cd7"}')
		},
		"./src/redditGQL/operations/HideAwardOnTarget.json": function(e) {
			e.exports = JSON.parse('{"id":"4e43964bff6f"}')
		},
		"./src/redditGQL/operations/ManageableAwards.json": function(e) {
			e.exports = JSON.parse('{"id":"bce139cc4904"}')
		},
		"./src/redditGQL/operations/ManageableAwardsForProfile.json": function(e) {
			e.exports = JSON.parse('{"id":"f2dc00a6f019"}')
		},
		"./src/redditGQL/operations/RemoveCommunityAward.json": function(e) {
			e.exports = JSON.parse('{"id":"973872832463"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PostCreation~Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~r~4c415e24.7c82db28f4389f7e036f.js.map