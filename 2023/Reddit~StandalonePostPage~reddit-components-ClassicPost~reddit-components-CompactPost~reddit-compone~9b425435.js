// https://www.redditstatic.com/desktop2x/Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compone~9b425435.d4a94289f47762f32de3.js
// Retrieved at 6/8/2023, 12:50:03 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compone~9b425435"], {
		"./src/lib/avatarShareImages.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			const r = 16765092,
				o = "https://i.redd.it/snoovatar",
				s = "snoovatars",
				a = "avatars";

			function c(e) {
				return `${o}/${+e>=r?a:s}/shared/${e}.png`
			}
		},
		"./src/lib/colors/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "f", (function() {
				return i
			})), n.d(t, "g", (function() {
				return d
			}));
			const r = "#000",
				o = "#FFF",
				s = "#FF4500",
				a = "#0079D3",
				c = "#46D160",
				i = {
					black: r,
					white: o,
					orangered: s,
					alienblue: a,
					tone1: "#1A1A1B",
					tone2: "#6A6D6F",
					tone3: "#878A8C",
					tone4: "#D3D6DA",
					tone5: "#EDEFF1",
					tone6: "#F6F7F8",
					tone7: "#FFFFFF",
					primary: "#24A0ED",
					secondary: "#006CBF",
					upvote: s,
					downvote: "#7193FF",
					positive: c,
					negative: "#EA0027",
					caution: "#FFB000",
					admin: s,
					moderator: "#46D160",
					self: "#0DD3BB",
					coins: "#DDBD37",
					live: s,
					nsfw: "#FF585B",
					spoiler: "#1A1A1B"
				},
				d = {
					...i,
					tone1: "#D7DADC",
					tone2: "#818384",
					tone3: "#565758",
					tone4: "#3A3A3C",
					tone5: "#272729",
					tone6: "#1A1A1B",
					tone7: "#121213",
					primary: "#006CBF",
					secondary: "#24A0ED",
					coins: "#FFE600",
					spoiler: "#D7DADC"
				}
		},
		"./src/lib/combineRefs/index.tsx": function(e, t, n) {
			"use strict";
			t.a = function() {
				for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
				return e => {
					t.forEach(t => {
						if (t) return "function" == typeof t ? t(e) : void(t.current = e)
					})
				}
			}
		},
		"./src/lib/hooks/usePrevious.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./node_modules/react/index.js");

			function o(e) {
				const t = Object(r.useRef)();
				return Object(r.useEffect)(() => {
					t.current = e
				}), t.current
			}
		},
		"./src/lib/hooks/useTooltip.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return i
			}));
			var r = n("./node_modules/icepick/icepick.js"),
				o = n("./node_modules/react/index.js"),
				s = n("./node_modules/react-popper/lib/esm/usePopper.js");
			const a = Object(r.freeze)({
				modifiers: []
			});

			function c(e) {
				let t = "object" == typeof e ? e : a;
				return Array.isArray(t.modifiers) || (t = Object(r.assoc)(t, "modifiers", a.modifiers)), t
			}

			function i(e) {
				const [t, n] = Object(o.useState)(null), [a, i] = Object(o.useState)(null), [d, l] = Object(o.useState)(null), [u, m] = Object(o.useState)(!1), p = Object(o.useCallback)(async () => m(!0), []), b = Object(o.useCallback)(() => m(!1), []), f = Object(o.useCallback)(() => m(!u), [u]), v = Object(o.useMemo)(() => {
					const t = c(e);
					return d ? Object(r.updateIn)(t, ["modifiers"], e => Object(r.push)(e, {
						name: "arrow",
						options: {
							element: d
						}
					})) : t
				}, [d, e]), {
					attributes: h,
					styles: g,
					update: O
				} = Object(s.a)(t, a, v);
				return Object(o.useMemo)(() => ({
					arrowProps: {
						ref: l,
						style: g.arrow,
						...h.arrow
					},
					hide: b,
					popperProps: {
						ref: i,
						style: g.popper,
						...h.popper
					},
					show: p,
					target: {
						element: t,
						ref: n
					},
					toggle: f,
					visible: u,
					update: O
				}), [l, h, i, b, p, g, t, n, f, u, O])
			}
		},
		"./src/lib/memoizeByReference/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./node_modules/lodash/every.js"),
				o = n.n(r);

			function s(e) {
				let t = null,
					n = null;
				return function() {
					for (var r = arguments.length, s = new Array(r), a = 0; a < r; a++) s[a] = arguments[a];
					return null !== t && s.length === t.length && o()(s, (e, n) => e === t[n]) || (t = s, n = e(...s)), n
				}
			}
		},
		"./src/reddit/actions/creatorStats/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return o
			}));
			const r = "CREATOR_STATS_PENDING",
				o = "CREATOR_STATS_LOADED"
		},
		"./src/reddit/actions/gold/communityAwards/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "i", (function() {
				return a
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "j", (function() {
				return m
			})), n.d(t, "g", (function() {
				return p
			})), n.d(t, "h", (function() {
				return b
			}));
			var r = n("./src/lib/loadableAction/index.ts");
			const o = e => () => n.e("CommunityAwards").then(n.bind(null, "./src/reddit/actions/gold/communityAwards/communityAwards.ts")).then(t => t[e]),
				s = Object(r.a)(o("awardSheetInfoRequested")),
				a = Object(r.a)(o("manageableAwardsRequested")),
				c = Object(r.a)(o("createCommunityAward")),
				i = Object(r.a)(o("createGlobalAward")),
				d = Object(r.a)(o("createModAward")),
				l = Object(r.a)(o("createAwardFailed")),
				u = Object(r.a)(o("createAwardSuccessful")),
				m = Object(r.a)(o("removeCommunityAward")),
				p = Object(r.a)(o("disableAwardinCommunity")),
				b = Object(r.a)(o("enableAwardinCommunity"))
		},
		"./src/reddit/actions/gold/modals.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return v
			})), n.d(t, "b", (function() {
				return g
			})), n.d(t, "d", (function() {
				return j
			})), n.d(t, "c", (function() {
				return x
			})), n.d(t, "a", (function() {
				return w
			})), n.d(t, "f", (function() {
				return y
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/lib/postParentMessage/index.ts"),
				s = n("./src/reddit/helpers/isPost.ts"),
				a = n("./src/reddit/constants/modals.ts"),
				c = n("./src/reddit/selectors/gild.ts"),
				i = n("./src/reddit/helpers/correlationIdTracker.ts"),
				d = n("./src/reddit/actions/gold/communityAwards/index.ts"),
				l = n("./src/reddit/actions/modal.ts"),
				u = n("./src/reddit/selectors/communityAwards.ts"),
				m = n("./src/reddit/selectors/posts.ts"),
				p = n("./src/reddit/selectors/subreddit.ts"),
				b = n("./src/telemetry/index.ts"),
				f = n("./src/reddit/actions/gold/constants.ts");
			const v = Object(r.a)(f.J),
				h = Object(r.a)(f.f),
				g = () => async (e, t) => {
					const r = t();
					e(h()), Object(i.b)(i.a.GiftPremiumFlow);
					const {
						clickCloseModalEvent: o
					} = await n.e("givePremiumTrackers").then(n.bind(null, "./src/reddit/helpers/trackers/givePremium.ts"));
					Object(b.a)(o()(r))
				}, O = Object(r.a)(f.I), j = e => {
					let {
						awardId: t,
						correlationId: n,
						thingId: r
					} = e;
					return async (e, o) => {
						const c = o(),
							i = t ? Object(u.a)(c, t) : void 0;
						e(O({
							award: i && i.isEnabled ? i : void 0,
							thingId: r,
							correlationId: n
						})), e(Object(l.h)(a.a.GOLD_GILD_MODAL));
						const b = Object(p.O)(c, {
							thingId: r
						});
						let f = null;
						if (b) f = b.id;
						else if (Object(s.a)(r)) {
							const e = Object(m.F)(c, {
								postId: r
							});
							e && (f = e.belongsTo.id)
						}
						f && Object(d.a)(f, r)
					}
				}, _ = Object(r.a)(f.e), x = Object(r.a)(f.H), w = () => async (e, t) => {
					const r = t(),
						s = Object(c.d)(r);
					if (Object(c.g)(r)) {
						const e = "close.gild";
						Object(o.a)({
							type: e
						})
					}
					e(_()), e(Object(l.g)(a.a.GOLD_GILD_MODAL));
					const {
						clickCloseGildModalEvent: d
					} = await Promise.resolve().then(n.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
					Object(b.a)(d(s)(r)), Object(i.b)(i.a.GildingFlow)
				}, y = () => async () => {
					Object(o.a)({
						type: "login.gild"
					})
				}
		},
		"./src/reddit/actions/snoovatar.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return b
			})), n.d(t, "a", (function() {
				return v
			})), n.d(t, "e", (function() {
				return g
			})), n.d(t, "c", (function() {
				return O
			})), n.d(t, "d", (function() {
				return j
			}));
			var r = n("./src/lib/initializeClient/installReducer.ts"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/lib/sentry/index.ts"),
				a = n("./src/config.ts"),
				c = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/makeApiRequest/index.ts"),
				d = n("./src/lib/omitHeaders/index.ts"),
				l = n("./src/reddit/constants/headers.ts");
			var u = n("./src/reddit/reducers/features/avatar/index.ts"),
				m = n("./src/reddit/selectors/avatar.ts"),
				p = n("./src/reddit/actions/users.ts");
			Object(r.a)({
				features: {
					avatar: u.a
				}
			});
			const b = "SET_AVATAR_USER",
				f = Object(o.a)(b),
				v = "RANDOM_AVATAR_LOADED",
				h = Object(o.a)(v),
				g = (e, t, n) => async (r, o, s) => {
					let {
						apiContext: u
					} = s;
					var b, f, v, h;
					const g = Object(m.b)(o()),
						O = await (async (e, t, n, r, o) => Object(i.a)(Object(d.a)(e, [l.a]), {
							endpoint: `${a.a.snoovatarUrl}/api/snoovatar?skip_telemetry=true`,
							method: c.ob.POST,
							headers: {
								"Content-Type": "application/json ",
								"X-CSRF-Token": o || ""
							},
							data: {
								accessory_ids: t,
								styles: n,
								...r
							}
						}))(u(), e, t, n, g);
					if (!O.ok) throw new Error("User avatar failed to save");
					return r(Object(p.y)(O.body)), {
						accountIcon: null === (f = null === (b = O.body) || void 0 === b ? void 0 : b.avatar) || void 0 === f ? void 0 : f.headshot_image_url,
						fullBodySnoovatar: null === (h = null === (v = O.body) || void 0 === v ? void 0 : v.avatar) || void 0 === h ? void 0 : h.image_url
					}
				}, O = () => async (e, t, n) => {
					let {
						apiContext: r
					} = n;
					try {
						const t = await (async e => Object(i.a)(Object(d.a)(e, [l.a]), {
							endpoint: `${a.a.snoovatarUrl}/api/account`,
							method: c.ob.GET
						}))(r());
						t.ok && e(f(t.body))
					} catch (o) {
						s.c.captureException(o)
					}
				}, j = () => async (e, t, n) => {
					let {
						apiContext: r
					} = n;
					try {
						const t = await (async e => Object(i.a)(Object(d.a)(e, [l.a]), {
							endpoint: `${a.a.snoovatarUrl}/api/snoovatars/random:byId`,
							method: c.ob.GET
						}))(r());
						t.ok && e(h(t.body))
					} catch (o) {
						s.c.captureException(o)
					}
				}
		},
		"./src/reddit/actions/snoovatarModal.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			})), n.d(t, "b", (function() {
				return p
			}));
			var r = n("./src/lib/pageTitle/index.ts"),
				o = n("./src/reddit/actions/login.ts"),
				s = n("./src/reddit/actions/modal.ts"),
				a = n("./src/reddit/actions/platform.ts"),
				c = n("./src/reddit/actions/users.ts"),
				i = n("./src/reddit/constants/modals.ts"),
				d = n("./src/reddit/helpers/trackers/snoovatar.ts"),
				l = n("./src/reddit/selectors/user.ts"),
				u = n("./src/telemetry/index.ts");
			const m = () => async (e, t) => {
				const n = t();
				Object(u.a)(Object(d.l)(n)), e(Object(c.s)({
					forceFetch: !0
				})), await e(Object(s.g)(i.a.SNOOVATAR_MODAL))
			};

			function p() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
				return async (t, n) => {
					const {
						clickSource: c,
						share: m,
						source: p,
						activeTab: b,
						activeMeSubpage: f,
						activeDetails: v,
						shopTabState: h
					} = e, g = n();
					c && Object(u.a)(Object(d.g)(c)(g)), Object(l.S)(g) ? (await t(Object(s.h)(i.a.SNOOVATAR_MODAL, {
						share: m,
						source: p,
						activeTab: b,
						activeMeSubpage: f,
						activeDetails: v,
						shopTabState: h
					})), t(Object(a.n)({
						title: Object(r.n)()
					}))) : await t(Object(o.openLoginModal)())
				}
			}
		},
		"./src/reddit/components/BoostPost/BoostPostBanner.m.less": function(e, t, n) {
			e.exports = {
				root: "_1bFyAea2u1QxOQ1F5B4GkN",
				boostPost: "_2HRj2_i58dkRRJQoLcPYos",
				nightRoot: "_1gHnZ35aZq6j7V6-yJI8Ex",
				boostPostIcon: "_3-103Q5oLObJuUD_Kw30cF",
				boostPostTitle: "_1DC_jVf8m3dNMZizsj84j1",
				boostPostSubtitle: "_142PYc7s46KPZKVON3XAN8",
				boostPostText: "_1bYeQt_TV5_-qyJ0ou4R4g",
				boostPostButton: "pSzvw13UmARlu2u6QGtsR",
				boostPostButtonText: "_38B5eqRnC0dTpzLkC_7APC",
				boostPostCloseButton: "_3k7l59W74Y3dHDNBrT9oce",
				boostPostClose: "_9PWeID-JtyhyViXeQFfuq"
			}
		},
		"./src/reddit/components/BoostPost/BoostPostIconButton.m.less": function(e, t, n) {
			e.exports = {
				container: "Oqp_3zg4nUr27VgCF82qt",
				boostPostIconButton: "_3DV09faePsSW4n6z5V2kj1",
				boostPostIconButtonIconOnly: "ITg0gjNXOhVKsSbURGUvp",
				boostPostTooltipText: "_2q9Jd9uoQVrgF0qTQz8xC1"
			}
		},
		"./src/reddit/components/BoostPost/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return R
			})), n.d(t, "b", (function() {
				return _
			})), n.d(t, "d", (function() {
				return z
			})), n.d(t, "e", (function() {
				return T
			})), n.d(t, "c", (function() {
				return J
			}));
			var r = n("./src/config.ts"),
				o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
				c = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/constants/icons.ts"),
				l = n("./src/reddit/controls/Button/index.tsx"),
				u = n("./src/reddit/helpers/localStorage/index.ts"),
				m = n("./src/reddit/helpers/trackers/post.ts"),
				p = n("./src/reddit/hooks/useTracking.ts"),
				b = n("./src/reddit/icons/fonts/index.tsx"),
				f = n("./src/reddit/selectors/user.ts"),
				v = n("./src/reddit/components/BoostPost/BoostPostBanner.m.less"),
				h = n.n(v);
			const g = Object(s.createContext)({
					attemptVisiblePostIdUpdate: e => {},
					resetVisiblePostIdToDefault: () => {},
					visiblePostId: void 0
				}),
				O = () => {
					return Object(u.h)() ? null : void 0
				},
				j = () => {
					return Object(u.h)()
				},
				_ = e => {
					let {
						children: t
					} = e;
					const n = Object(s.useRef)(j()),
						[r, o] = Object(s.useState)(O()),
						c = Object(s.useCallback)(() => {
							n.current = j();
							const e = O();
							o(e)
						}, []);
					return Object(s.useEffect)(() => (window.addEventListener("storage", c), () => {
						window.removeEventListener("storage", c)
					}), [c]), a.a.createElement(g.Provider, {
						value: {
							attemptVisiblePostIdUpdate: e => {
								n.current || (n.current = !0, o(e))
							},
							resetVisiblePostIdToDefault: c,
							visiblePostId: r
						}
					}, t)
				};
			var x = n("./src/reddit/constants/experiments.ts"),
				w = n("./src/reddit/contexts/PageLayer/index.tsx"),
				y = n("./src/reddit/helpers/isCrosspost.ts"),
				C = n("./src/reddit/hooks/useExperimentVariant.ts"),
				k = n("./src/reddit/models/Post/index.ts"),
				I = n("./src/reddit/models/WhitelistStatus/index.ts"),
				E = n("./src/reddit/selectors/posts.ts"),
				P = n("./src/reddit/selectors/profile.ts"),
				S = n("./src/reddit/selectors/subreddit.ts");
			const T = (e, t) => !(!e || !t || e.authorId !== t.id || e.isSponsored || e.isNSFW || e.pollData || e.predictionTournament || e.discussionType && e.discussionType !== k.b.Comment || Object(y.a)(e)),
				A = e => !!e && e.hasVerifiedEmail,
				N = e => !!e && !e.isNSFW && !e.isQuarantined,
				F = e => {
					let {
						postId: t,
						user: n
					} = e;
					const r = Object(w.ib)(),
						o = Object(c.e)(e => Object(E.F)(e, {
							postId: t
						})),
						a = Object(k.s)(o) ? o.belongsTo.id : "",
						i = Object(k.w)(o) ? o.belongsTo.id : "",
						d = Object(c.e)(e => Object(P.j)(e, a)),
						l = Object(c.e)(e => Object(S.X)(e, {
							subredditId: i
						})),
						u = Object(c.e)(e => Object(w.G)(e, {
							pageLayer: r
						})),
						m = Object(s.useCallback)(() => !!(u && Object(k.s)(o) && T(o, n) && A(n) && N(d)), [u, o, d, n]),
						p = Object(s.useCallback)(() => T(o, n) && A(n) && N(l) && (e => !!e && (e.wls === I.b.ALL_ADS || "all_ads" === e.whitelistStatus))(l), [o, n, l]),
						b = Object(C.a)(x.r, m),
						f = Object(C.a)(x.q, m),
						v = Object(C.a)(x.s, p),
						h = Object(C.a)(x.t, p);
					return {
						canBoostPost: b === x.Ud || f === x.Ud || v === x.Ud || h === x.Ud
					}
				},
				R = e => {
					let {
						postId: t,
						user: n
					} = e;
					const {
						visiblePostId: r,
						attemptVisiblePostIdUpdate: o
					} = Object(s.useContext)(g), {
						canBoostPost: c
					} = F({
						postId: t,
						user: n
					});
					return c && o(t), r === t ? a.a.createElement(M, {
						postId: t
					}) : null
				};
			R.displayName = "BoostPostBanner";
			const M = Object(s.memo)(e => {
				let {
					postId: t
				} = e;
				const n = Object(p.a)(),
					v = Object(c.e)(f.fb);
				Object(s.useEffect)(() => {
					n(Object(m.w)(t))
				}, [n, t]);
				const g = Object(s.useCallback)(() => {
						Object(u.pb)(), n(Object(m.a)(t))
					}, [n, t]),
					O = Object(s.useCallback)(e => {
						e.stopPropagation(), Object(u.pb)(), n(Object(m.c)(t))
					}, [n, t]);
				return a.a.createElement("div", {
					className: Object(i.a)(h.a.root, {
						[h.a.nightRoot]: v
					})
				}, a.a.createElement("div", {
					className: h.a.boostPost
				}, a.a.createElement(b.a, {
					name: d.a.promote_snoo,
					className: h.a.boostPostIcon,
					style: {
						fontSize: 24,
						height: 24,
						width: 24
					}
				}), a.a.createElement("div", {
					className: h.a.boostPostText
				}, a.a.createElement("h6", {
					className: h.a.boostPostTitle
				}, o.fbt._("Reach more redditors!", null, {
					hk: "1kAZ0D"
				})), a.a.createElement("p", {
					className: h.a.boostPostSubtitle
				}, o.fbt._("Promote your post with Reddit Ads to reach more people and drive engagement.", null, {
					hk: "22s2iC"
				}))), a.a.createElement(l.t, {
					className: h.a.boostPostButton,
					kind: l.b.ExternalLink,
					priority: l.c.Secondary,
					onClick: g,
					href: `${r.a.adsUiOrigin}/boostPost?postId=${t}&utm_source=d2x_consumer&utm_name=boost_post_banner`,
					target: "_blank",
					Icon: Object(b.b)("external_link_fill", {
						style: {
							fontSize: 16,
							paddingRight: 4
						}
					}),
					text: a.a.createElement("p", {
						className: h.a.boostPostButtonText
					}, o.fbt._("Promote", null, {
						hk: "4fj8yW"
					}))
				}), a.a.createElement("button", {
					className: h.a.boostPostCloseButton,
					onClick: O,
					"aria-label": o.fbt._("Hide", null, {
						hk: "2qpeBI"
					})
				}, a.a.createElement(b.a, {
					className: h.a.boostPostClose,
					name: d.a.close_fill,
					onClick: O,
					style: {
						fontSize: 12,
						lineHeight: "12px",
						height: 12,
						width: 12
					}
				}))))
			});
			M.displayName = "BoostPostBannerMemo";
			var D = n("./node_modules/classnames/index.js"),
				B = n.n(D),
				V = n("./src/reddit/components/Flatlist/constants.ts"),
				L = n("./src/reddit/components/Flatlist/ResponsiveRow.tsx"),
				G = n("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				U = n("./src/reddit/components/TrackingHelper/index.tsx"),
				K = n("./src/reddit/hooks/useInfoTextTooltip.ts"),
				W = n("./src/reddit/components/BoostPost/BoostPostIconButton.m.less"),
				q = n.n(W),
				H = n("./src/reddit/components/BoostPost/useBoostPostAction.ts");
			const z = Object(s.memo)(e => {
				let {
					postId: t,
					user: n,
					userIsOp: r,
					showIconOnly: c
				} = e;
				const i = Object(K.a)(),
					{
						canBoostPost: l
					} = F({
						postId: t,
						user: n
					}),
					{
						onBoostPostClick: u
					} = Object(H.a)(t),
					p = Object(U.b)();
				return Object(s.useEffect)(() => {
					l && p(Object(m.x)(t))
				}, [l, p, t]), l ? a.a.createElement("span", {
					onMouseEnter: i.show,
					onMouseLeave: i.hide,
					ref: i.target.ref,
					className: q.a.container
				}, a.a.createElement(L.a, {
					iconWrapperClassName: B()(q.a.boostPostIconButton, {
						[q.a.boostPostIconButtonIconOnly]: c
					}),
					displayText: c ? void 0 : o.fbt._("Promote", null, {
						hk: "K797d"
					}),
					flatlistItem: V.a.PromotePost,
					isLoggedIn: !!n,
					isUserOp: r,
					onClick: u
				}, a.a.createElement(b.a, {
					name: d.a.promote_snoo
				})), a.a.createElement(G.a, {
					arrowProps: i.arrowProps,
					popperProps: {
						...i.popperProps,
						style: {
							...i.popperProps.style,
							width: "250px"
						}
					},
					visible: i.visible
				}, o.fbt._("Promote your post with Reddit Ads to reach more people and drive engagement", null, {
					hk: "38gIbE"
				}))) : null
			});
			z.displayName = "BoostPostIconButton";
			var Y = n("./src/reddit/hooks/usePageLayer.ts");
			const J = e => {
				let {
					children: t
				} = e;
				const {
					resetVisiblePostIdToDefault: n
				} = Object(s.useContext)(g), r = Object(Y.a)(), [o, a] = Object(s.useState)(null == r ? void 0 : r.queryParams);
				return Object(s.useEffect)(() => {
					(null == r ? void 0 : r.queryParams) && (null == r ? void 0 : r.queryParams) !== o && (a(null == r ? void 0 : r.queryParams), n())
				}, [r, o, n]), t
			}
		},
		"./src/reddit/components/BoostPost/useBoostPostAction.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var r = n("./src/config.ts"),
				o = n("./node_modules/react/index.js"),
				s = n("./src/reddit/components/TrackingHelper/index.tsx"),
				a = n("./src/reddit/helpers/trackers/post.ts");
			const c = e => {
				const t = Object(s.b)();
				return {
					onBoostPostClick: Object(o.useCallback)(() => {
						t(Object(a.b)(e)), window.open(`${r.a.adsUiOrigin}/boostPost?postId=${e}&utm_source=d2x_consumer&utm_name=boost_post_icon_button`, "_blank")
					}, [t, e])
				}
			}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.m.less": function(e, t, n) {
			e.exports = {
				buttonWidth: "ogOEj4x-0BpDZWeccJwxx",
				ModalText: "_2YxEi97B6Nm7NCgLG6pCud",
				modalText: "_2YxEi97B6Nm7NCgLG6pCud"
			}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				s = n.n(o),
				a = n("./src/higherOrderComponents/asModal/index.tsx"),
				c = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				i = n("./src/reddit/controls/TextButton/index.tsx"),
				d = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				l = n("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				u = n.n(l);
			const m = e => e.preventDefault();
			t.a = Object(a.a)(e => s.a.createElement(c.e, null, s.a.createElement(c.i, null, s.a.createElement(d.a, null, s.a.createElement(c.q, null, e.headerText || r.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), s.a.createElement(i.a, {
				onClick: t => {
					e.onClose && e.onClose(t), e.toggleModal && e.toggleModal()
				}
			}, s.a.createElement(c.b, null)))), s.a.createElement(c.l, null, s.a.createElement(c.p, {
				className: u.a.ModalText
			}, e.modalText)), s.a.createElement(c.g, null, !e.hideCancelButton && s.a.createElement(c.a, {
				className: u.a.buttonWidth,
				onMouseDown: m,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || r.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), s.a.createElement(c.u, {
				className: u.a.buttonWidth,
				onMouseDown: m,
				onClick: t => {
					e.onConfirm(t), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
				},
				"data-redditstyle": !e.disableRedditStyle,
				disabled: e.isDisabled
			}, e.actionText))))
		},
		"./src/reddit/components/CountAnimation/index.m.less": function(e, t, n) {
			e.exports = {
				countAnimation: "_3z5CnRH3l7hQGI8TQYFyqX",
				digitDeltaWrapper: "WBY6J5DJsZFZXSxBqtq0F",
				digitDelta: "_3LT2yD0gRFklddn3Ra9ElD",
				"sr-only": "D6SuXeSnAAagG8dKAb4O4",
				srOnly: "D6SuXeSnAAagG8dKAb4O4"
			}
		},
		"./src/reddit/components/CountAnimation/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/lib/hooks/usePrevious.ts"),
				a = n("./src/realtime/GQLSubscription/async.tsx"),
				c = n("./src/reddit/hooks/useIntersectionObserver.ts");
			const i = e => {
				return Math.abs(e).toString().split("").map(e => parseInt(e))
			};
			var d = n("./src/reddit/components/CountAnimation/index.m.less"),
				l = n.n(d);
			var u;
			! function(e) {
				e.Vote = "vote", e.Comment = "comment"
			}(u || (u = {}));
			const m = () => 0;
			t.b = e => {
				const {
					countToUpperBound: t,
					featureName: n,
					incrementDelta: d,
					initialDelay: u,
					initialDisplayCount: p,
					isLoadTestOnly: b,
					onDataCB: f,
					postId: v,
					queryKey: h,
					queryVariables: g,
					shouldDisjointAnimation: O,
					subsequentRecurringDelay: j
				} = e, [_, x] = Object(r.useState)(!1), [w, y] = Object(r.useState)(!0), [C, k] = Object(r.useState)([]), [I, E] = Object(r.useState)(i(p).reverse()), P = Object(r.useRef)(!1), S = Object(r.useRef)(null), T = Object(r.useRef)(e => {}), A = Object(r.useRef)();
				T.current = Object(r.useCallback)(e => {
					let n = e || d();
					const r = [...I].reverse().join("");
					let o = parseInt(r) + n;
					o > t && (n = t - parseInt(r), o = t);
					const s = i(o).reverse();
					x(!1), k(I), E(s), y(!1), A.current = setTimeout(() => {
						x(!0)
					}, 0)
				}, [t, d, I]);
				const N = Object(r.useRef)(() => {}),
					F = Object(r.useRef)(),
					R = Object(r.useRef)();
				N.current = Object(r.useCallback)(() => {
					R.current = setTimeout(() => {
						T.current();
						const e = [...C].reverse().join("");
						parseInt(e) < t && N.current()
					}, j())
				}, [t, j, C]);
				const M = Object(r.useRef)(0),
					D = Object(r.useRef)(!1),
					B = Object(r.useCallback)(e => {
						e.forEach(e => {
							const {
								isIntersecting: t,
								intersectionRatio: n
							} = e, r = 1 !== n;
							t ? (D.current = !0, P.current || (P.current = !0, F.current = setTimeout(() => {
								T.current(), N.current()
							}, u())), M.current > 0 && (T.current(M.current), M.current = 0)) : r && (D.current = !1)
						})
					}, []);
				Object(c.a)(S, B);
				const [V, L] = Object(r.useState)(!1), G = Object(r.useCallback)(e => {
					e.forEach(e => {
						const {
							isIntersecting: t,
							intersectionRatio: n
						} = e, r = 1 !== n;
						t ? L(!0) : r && L(!1)
					})
				}, []), U = Object(r.useRef)({
					rootMargin: "2000px 0px 2000px 0px"
				});
				Object(c.a)(S, G, U.current);
				const K = Object(s.a)(t);
				Object(r.useEffect)(() => {
					if (void 0 !== K && K !== t) {
						const e = t - K;
						D.current ? T.current(e) : M.current += e
					}
					return () => {
						clearTimeout(F.current), clearTimeout(R.current), clearTimeout(A.current)
					}
				}, [t]);
				const W = Object(r.useCallback)(() => y(!0), [y]),
					q = 0 === C.length,
					H = w || q,
					z = Object(r.useRef)(((e, t) => `${t}_${e}_count_anim`)(v, n));
				return o.a.createElement(o.a.Fragment, null, !b && o.a.createElement("div", {
					className: l.a.countAnimation
				}, I.map((e, t) => {
					const n = ((e, t) => {
						let n = Math.abs(e);
						const r = Math.abs(t),
							o = [n];
						if (n === r) return o;
						let s = !0;
						for (; s;) ++n > 9 && (n = 0), o.push(n), n === r && (s = !1);
						return o
					})(C[t] || 0, e);
					return o.a.createElement("span", {
						"aria-hidden": !0,
						className: l.a.digitDeltaWrapper,
						key: t,
						onTransitionEnd: W,
						style: _ && C.length > 0 && !w ? {
							transform: `translateY(-${O&&n.length>1?100:100*(n.length-1)}%)`,
							transitionDuration: `${(O?500:750)/1e3}s`
						} : {
							transform: "translateY(0)"
						}
					}, H ? o.a.createElement("span", {
						className: l.a.digitDelta
					}, e) : n.map((e, t) => {
						const r = 0 === t || t === n.length - 1;
						if (!O || O && r) return o.a.createElement("span", {
							className: l.a.digitDelta,
							key: t
						}, e)
					}).filter(e => !!e))
				}), o.a.createElement("span", {
					className: l.a.srOnly,
					role: "screen-reader"
				}, [...I].reverse().join(""))), o.a.createElement("span", {
					ref: S
				}), V && o.a.createElement(a.a, {
					variables: g,
					onData: b ? m : f,
					queryKey: h,
					uniqueKey: z.current
				}))
			}
		},
		"./src/reddit/components/CreatorStats/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "c", (function() {
				return d
			}));
			var r = n("./src/lib/constants/index.ts");
			const o = 16374492e5,
				s = 45 * r.D;
			var a;
			! function(e) {
				e.NotAvailableYet = "NotAvailableYet", e.NotAvailable = "NotAvailable", e.Available = "Available", e.Expired = "Expired", e.Quarantined = "Quarantined"
			}(a || (a = {}));
			const c = e => {
					return e < Date.now() - s
				},
				i = e => e > o,
				d = (e, t, n, r) => {
					if (!n && !i(e.created)) return a.NotAvailable;
					if (n && !i(e.created) || c(e.created)) return a.Expired;
					if (n && r) return a.Quarantined;
					if (!t) return a.NotAvailableYet;
					const {
						shareAllCountTotals: o,
						shareCopyCountTotals: s,
						viewCountTotals: d,
						viewCountTrends: l
					} = t;
					return (null == o ? void 0 : o.availability.isAvailable) && (null == s ? void 0 : s.availability.isAvailable) && (null == d ? void 0 : d.availability.isAvailable) && (null == l ? void 0 : l.availability.isAvailable) && l.data && 0 !== l.data.length ? !(null == d ? void 0 : d.totalCount) || d.totalCount < 10 ? a.NotAvailableYet : a.Available : a.NotAvailableYet
				}
		},
		"./src/reddit/components/FlairPickerTitle/index.m.less": function(e, t, n) {
			e.exports = {
				modalHeader: "_26bOTAKvGixX5tMC3vGfTv"
			}
		},
		"./src/reddit/components/FlairPickerTitle/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/lodash/noop.js"),
				o = n.n(r),
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
				c = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				i = n("./src/reddit/controls/TextButton/index.tsx"),
				d = n("./src/reddit/components/FlairPickerTitle/index.m.less"),
				l = n.n(d);
			t.a = e => a.a.createElement(c.i, {
				className: l.a.modalHeader
			}, a.a.createElement(c.q, null, e.title), a.a.createElement(i.a, {
				onClick: e.onClosePressed || o.a
			}, a.a.createElement(c.b, null)))
		},
		"./src/reddit/components/FlairPickerWrapper/index.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "_3nRJIwLuth2pKYrXnr2jPN",
				wrapper: "_3nRJIwLuth2pKYrXnr2jPN"
			}
		},
		"./src/reddit/components/FlairPickerWrapper/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/components/FlairPickerWrapper/index.m.less"),
				s = n.n(o);
			const a = r.a.div("Wrapper", s.a);
			t.a = a
		},
		"./src/reddit/components/FlairPreview/index.m.less": function(e, t, n) {
			e.exports = {
				Placeholder: "_30zvTaAcvBFmwfelq6Bvwg",
				placeholder: "_30zvTaAcvBFmwfelq6Bvwg",
				SelectedFlair: "BzonfS85jX2JTiu_i0Jyd",
				selectedFlair: "BzonfS85jX2JTiu_i0Jyd",
				FlairComponent: "vynkb69RQyUY-PA6bCaW0",
				flairComponent: "vynkb69RQyUY-PA6bCaW0"
			}
		},
		"./src/reddit/components/FlairPreview/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				s = n.n(o),
				a = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/Flair/index.tsx"),
				i = n("./src/reddit/components/FlairPreview/index.m.less"),
				d = n.n(i);
			const l = a.a.span("Placeholder", d.a),
				u = a.a.div("SelectedFlair", d.a),
				m = a.a.wrapped(c.c, "FlairComponent", d.a);
			t.a = e => e.flair ? s.a.createElement(u, null, s.a.createElement(l, null, r.fbt._("{placeholder}", [r.fbt._param("placeholder", e.placeholderText)], {
				hk: "4G6VRy"
			})), s.a.createElement(m, {
				flair: e.flair,
				forceSmallEmojis: !0
			})) : s.a.createElement(u, null, r.fbt._("No flair selected", null, {
				hk: "1XPXbv"
			}))
		},
		"./src/reddit/components/FlairSearch/FlairEdit/helper.m.less": function(e, t, n) {
			e.exports = {
				FlairEditStub: "Z7x0t_45z9vZGN2zw6US6",
				flairEditStub: "Z7x0t_45z9vZGN2zw6US6",
				isCompact: "_3YjPWOd9tK9O_DN50RI_FN"
			}
		},
		"./src/reddit/components/FlairSearch/FlairEdit/helper.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return b
			}));
			var r = n("./node_modules/lodash/once.js"),
				o = n.n(r),
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
				c = n("./src/higherOrderComponents/makeAsync.tsx"),
				i = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/lessComponent.tsx"),
				l = n("./src/lib/loadWithRetries/index.ts"),
				u = n("./src/reddit/components/FlairSearch/FlairEdit/helper.m.less"),
				m = n.n(u);
			const p = d.a.wrapped(e => a.a.createElement("div", {
					className: Object(i.a)(e.className, {
						[m.a.isCompact]: e.isCompact
					})
				}), "FlairEditStub", m.a),
				b = o()((function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p;
					return Object(c.a)({
						getComponent: () => Object(l.a)(() => Promise.all([n.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), n.e("FlairEdit")]).then(n.bind(null, "./src/reddit/components/FlairSearch/FlairEdit/index.tsx")).then(e => e.default)),
						ErrorComponent: e,
						LoadingComponent: e
					})
				}))
		},
		"./src/reddit/components/FlairSearch/FlairTemplateList/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1bdAduczElF9-gLoCvHz-p",
				flairComponent: "_2leID3tMN8hpvVd4XhEqTl",
				radioOption: "FJIE5E2gciCA8q3Jzvcyg",
				pencil: "_3H_wwe03-Fkrm6oWGakXI8",
				searchBoxWrapper: "_18cuM8Uu7RcIFu1bCT0r4t",
				searchIcon: "_2bECVWL_WJ9RGBx7-RnzfO",
				searchInput: "_1nQbRaoAvb6Uy0oI-OfDtZ"
			}
		},
		"./src/reddit/components/FlairSearch/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2AKP6aCod0Z6TuXXfc1ZqL",
				buttonsRow: "_3w7b_fPwMuVD17J7epjTXi",
				clearButton: "_3WykjMvdVO5xibqd5xlfTC",
				flairEditSection: "SVd7IxchgiWetdYbftTHx",
				editLabel: "KTa3kg9lzGPUeLuhAHMT_",
				restrictionHintText: "_1fV9kJfKnED9qQ2AF8f3iT"
			}
		},
		"./src/reddit/components/FlairSearch/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				s = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/memoizeByReference/index.ts"),
				l = n("./src/reddit/featureFlags/index.ts"),
				u = n("./src/reddit/helpers/flair.ts"),
				m = n("./src/reddit/helpers/trackers/userFlair.ts"),
				p = n("./src/reddit/hooks/useTracking.ts"),
				b = n("./src/reddit/selectors/moderatorPermissions.ts"),
				f = n("./src/reddit/components/FlairSearch/FlairEdit/helper.tsx"),
				v = n("./src/reddit/components/Flair/index.tsx"),
				h = n("./src/reddit/components/TrackingHelper/index.tsx"),
				g = n("./src/reddit/controls/RadioInput/index.tsx"),
				O = n("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				j = n("./src/reddit/helpers/trackers/postComposer.ts"),
				_ = n("./src/reddit/icons/svgs/Pencil/index.tsx"),
				x = n("./src/reddit/icons/svgs/Search/index.tsx"),
				w = n("./src/reddit/components/FlairSearch/FlairTemplateList/index.m.less"),
				y = n.n(w);
			class C extends s.a.Component {
				constructor() {
					super(...arguments), this.state = {
						searchQuery: ""
					}, this.onSearchChange = e => {
						this.setState({
							searchQuery: e.target.value
						})
					}, this.onSearchClick = () => {
						this.props.sendEvent(Object(j.n)())
					}
				}
				render() {
					const {
						templates: e,
						templateIds: t,
						selectedTemplateId: n
					} = this.props, {
						searchQuery: o
					} = this.state, a = t.map(t => e[t]).filter(e => e.text.toLowerCase().includes(o)), c = !!n && a.some(e => e.id === n);
					return s.a.createElement("div", {
						className: y.a.container
					}, s.a.createElement("div", {
						className: y.a.searchBoxWrapper
					}, s.a.createElement("input", {
						className: y.a.searchInput,
						onChange: this.onSearchChange,
						onClick: this.onSearchClick,
						type: "text",
						placeholder: r.fbt._("Search for flair", null, {
							hk: "jQdqA"
						}),
						value: o
					}), s.a.createElement(x.a, {
						className: y.a.searchIcon
					})), s.a.createElement(g.a, {
						name: "flair_picker",
						onChange: this.props.onChange,
						value: n
					}, a.map((e, t) => {
						const r = Object(u.c)(e),
							o = n === e.id || !c && 0 === t;
						return s.a.createElement(O.a, {
							className: y.a.radioOption,
							key: e.id,
							showButton: !0,
							tabIndex: o ? 0 : -1,
							value: e.id
						}, s.a.createElement(v.c, {
							className: y.a.flairComponent,
							flair: r,
							forceSmallEmojis: !0
						}), e.textEditable && s.a.createElement(_.a, {
							className: y.a.pencil
						}))
					})))
				}
			}
			var k = Object(h.c)(C),
				I = n("./src/reddit/components/FlairSearch/index.m.less"),
				E = n.n(I);
			const P = Object(d.a)(e => e && Object(u.c)(e)),
				S = Object(c.c)({
					areFlairRestrictionsEnabled: l.d.flairRestrictions,
					isModerator: b.g
				}),
				T = Object(a.b)(S);
			t.a = T(e => {
				const {
					flairTemplateType: t,
					flair: n,
					className: o,
					onChange: a,
					subredditId: c,
					templates: d,
					templateIds: l,
					areFlairRestrictionsEnabled: b,
					isModerator: v
				} = e, h = Object(p.a)(), g = d && n && n.templateId && d[n.templateId] || void 0, O = Object(f.a)(), j = n || P(g);
				return s.a.createElement("div", {
					className: Object(i.a)(o, E.a.container)
				}, d && l && s.a.createElement(k, {
					flairTemplateType: t,
					onChange: e => {
						if (d) {
							const t = d[e],
								n = Object(u.c)(t);
							h(Object(m.b)({
								userFlair: t
							})), a(n)
						}
					},
					selectedTemplateId: g ? g.id : "",
					templateIds: l,
					templates: d
				}), j && g && (v || g.textEditable) && s.a.createElement("div", {
					className: E.a.flairEditSection
				}, s.a.createElement("div", {
					className: E.a.editLabel
				}, r.fbt._("Edit flair", null, {
					hk: "1APWWu"
				})), b && s.a.createElement("div", {
					className: E.a.restrictionHintText
				}, Object(u.k)(g)), s.a.createElement(O, {
					autofocus: !0,
					emojiPickerId: "FlairSearch-EmojiPicker-DropdownId",
					flair: j,
					flairTemplate: g,
					flairTemplateType: t,
					isFlairModOnly: g.modOnly,
					onChange: e => {
						const t = d && e.templateId ? d[e.templateId] : void 0;
						let n = e;
						t && (n = Object(u.d)({
							flair: e,
							template: t,
							ignoreTextAllowance: !0
						})), a(n)
					},
					subredditId: c
				})))
			})
		},
		"./src/reddit/components/Flatlist/ResponsiveRow.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/Flatlist/getFlatlistBreakpoints.ts"),
				c = n("./src/reddit/controls/Dropdown/Row.tsx"),
				i = n("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				d = n("./src/reddit/components/Flatlist/index.m.less"),
				l = n.n(d);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				let {
					flatlistItem: t,
					isLoggedIn: n,
					isUserOp: r,
					noBreakpoints: d,
					...m
				} = e;
				return o.a.createElement("div", {
					"data-ignore-click": !!m.searchIgnoreClick,
					className: l.a.rowContainer,
					"data-adclicklocation": i.b.FLATLIST_GENERAL
				}, o.a.createElement(c.a, u({}, m, {
					className: d ? l.a.responsiveRow : Object(s.a)(l.a.responsiveRow, Object(a.b)({
						flatlistItem: t,
						isLoggedIn: n,
						isUserOp: r
					}))
				})))
			}
		},
		"./src/reddit/components/Flatlist/breakpoints.m.less": function(e, t, n) {
			e.exports = {
				HideIfVWSmaller: "_3yh2bniLq7bYr4BaiXowdO",
				hideIfVwSmaller: "_3yh2bniLq7bYr4BaiXowdO",
				FirstGroup: "_2sAFaB0tx4Hd5KxVkdUcAx",
				firstGroup: "_2sAFaB0tx4Hd5KxVkdUcAx",
				LoggedOutVariant: "_3sUJGnemgtNczijwoT8PGg",
				loggedOutVariant: "_3sUJGnemgtNczijwoT8PGg",
				LoggedInVariant: "_28vEaVlLWeas1CDiLuTCap",
				loggedInVariant: "_28vEaVlLWeas1CDiLuTCap",
				OpVariant: "Z-VR19FVnE3nOS0_BU4Wy",
				opVariant: "Z-VR19FVnE3nOS0_BU4Wy",
				EditingGroup: "_1EKOhBHXAW9y8Bgn93c9f3",
				editingGroup: "_1EKOhBHXAW9y8Bgn93c9f3",
				SecondGroup: "_1pShbCnOaF7EGWTq6IvZux",
				secondGroup: "_1pShbCnOaF7EGWTq6IvZux",
				AwardingGroup: "_1EWxiIupuIjiExPQeK4Kud",
				awardingGroup: "_1EWxiIupuIjiExPQeK4Kud",
				HideIfVWLarger: "_1k3nXWGGz2NdPr8dg49Tbs",
				hideIfVwLarger: "_1k3nXWGGz2NdPr8dg49Tbs"
			}
		},
		"./src/reddit/components/Flatlist/constants.ts": function(e, t, n) {
			"use strict";
			var r;
			n.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.EditPost = "EDITPOST", e.EditFlair = "EDITFLAIR", e.Save = "SAVE", e.Gild = "GILD", e.Hide = "HIDE", e.PostOverflowMenu = "POST_OVERFLOW_MENU", e.Report = "REPORT", e.Share = "SHARE", e.ShowFewerLikeThis = "SHOW_FEWER_LIKE_THIS", e.ShowMoreLikeThis = "SHOW_MORE_LIKE_THIS", e.Insights = "INSIGHTS", e.Mute = "MUTE", e.PromotePost = "PROMOTE_POST"
				}(r || (r = {}))
		},
		"./src/reddit/components/Flatlist/getFlatlistBreakpoints.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return u
			}));
			var r, o, s, a = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/components/Flatlist/breakpoints.m.less"),
				i = n.n(c),
				d = n("./src/reddit/components/Flatlist/constants.ts");
			! function(e) {
				e.HideIfVWSmaller = "HideIfVWSmaller", e.HideIfVWLarger = "HideIfVWLarger"
			}(r || (r = {})),
			function(e) {
				e.First = "FirstGroup", e.Editing = "EditingGroup", e.Second = "SecondGroup", e.Awarding = "AwardingGroup"
			}(o || (o = {})),
			function(e) {
				e.LoggedIn = "LoggedInVariant", e.LoggedOut = "LoggedOutVariant", e.Op = "OpVariant"
			}(s || (s = {}));
			const l = {
					[d.a.EditFlair]: o.Editing,
					[d.a.EditPost]: o.Editing,
					[d.a.Gild]: o.Awarding,
					[d.a.Hide]: o.First,
					[d.a.PostOverflowMenu]: o.First,
					[d.a.Report]: o.First,
					[d.a.Save]: o.First,
					[d.a.Share]: o.Second,
					[d.a.ShowFewerLikeThis]: o.First,
					[d.a.ShowMoreLikeThis]: o.First,
					[d.a.Insights]: o.First,
					[d.a.Mute]: o.First,
					[d.a.PromotePost]: o.First
				},
				u = e => {
					return (e => {
						const t = i.a[e.type],
							n = i.a[e.group],
							r = i.a[e.groupVariant];
						return Object(a.a)(t, n, r)
					})({
						type: e.breakpointType || r.HideIfVWSmaller,
						group: l[e.flatlistItem],
						groupVariant: ((e, t) => e && t ? s.Op : e ? s.LoggedIn : s.LoggedOut)(e.isLoggedIn, e.isUserOp)
					})
				}
		},
		"./src/reddit/components/Flatlist/index.m.less": function(e, t, n) {
			e.exports = {
				flatlistContainer: "_3-miAEojrCvx_4FQ8x3P-s",
				responsiveRow: "YszYBnnIoNY8pZ6UwCivd",
				rowContainer: "_3U_7i38RDPV5eBv7m4M-9J",
				responsiveRowText: "_70940WUuFmpHbhKlj8EjZ",
				insightsButtonText: "WH45FmM2j_4Snucem7pcm",
				flatlistSeparator: "x7sinePdvDKj7bf-cdm4Z",
				flexSpacer: "_21pmAV9gWG6F_UKVe7YIE0",
				modActionsIcon: "_15c1hqseW25EvRu0WP2Dq5",
				shareText: "_6_44iTtZoeY6_XChKt5b0",
				commentsLink: "_2qww3J5KKzsD7e5DO0BvvU",
				supportButton: "_3NIVQWStkLT7RXnwKpKNuT",
				text: "YCL-CnLJKXzXbwuLZEyh1",
				ShareButton: "kU8ebCMnbXfjCWfqn0WPb",
				shareButton: "kU8ebCMnbXfjCWfqn0WPb",
				shareIcon: "_1GQDWqbF-wkYWbrpmOvjqJ",
				ShareMenu: "_JRBNstMcGxbZUxrrIKXe",
				shareMenu: "_JRBNstMcGxbZUxrrIKXe",
				liveDiscussionWrapper: "_3rnnBQZL1OOttG3tFn629n",
				modLargePost: "_1rz4qmtk19qk1KbsKVMbAq",
				overflowMenuContainer: "_3MmwvEEt6fv5kQPFCVJizH",
				awardIcon: "_3yNNYT3e1avhAAWVHd0-92",
				saveIcon: "_1Xe01txJfRB9udUU85DNeR"
			}
		},
		"./src/reddit/components/InfoTextTooltip/Hooked.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/InfoTextTooltip/hooked.m.less"),
				c = n.n(a);

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = o.a.memo((function(e) {
				let {
					visible: t,
					...n
				} = e;
				const [a, d] = Object(r.useState)(t);
				return Object(r.useEffect)(() => {
					let e = window.setTimeout(() => {
						e = void 0, d(t)
					}, 0);
					return () => {
						e && window.clearTimeout(e), d(!1)
					}
				}, [t]), t ? o.a.createElement("div", i({
					className: Object(s.a)(c.a.tooltip, n.className, {
						[c.a.visible]: a
					})
				}, n.popperProps), n.children, a && o.a.createElement("div", i({
					className: c.a.arrow
				}, n.arrowProps))) : null
			}))
		},
		"./src/reddit/components/InfoTextTooltip/hooked.m.less": function(e, t, n) {
			e.exports = {
				arrow: "_1jsc29CjRXZWjd2tr0Ji0Y",
				tooltip: "_2J_zB4R1FH2EjGMkQjedwc",
				visible: "u6HtAZu8_LKL721-EnKuR"
			}
		},
		"./src/reddit/components/PostContent/ViewCount.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				s = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/prettyPrintNumber/index.ts"),
				d = n("./src/reddit/components/CreatorStats/helpers.ts"),
				l = n("./src/reddit/selectors/creatorStats.ts"),
				u = n("./src/reddit/components/PostContent/viewCount.m.less"),
				m = n.n(u);
			t.a = e => {
				let {
					className: t,
					post: n,
					showViewCount: o
				} = e;
				const {
					upvotePercentString: u,
					viewCountString: p
				} = (e => {
					const t = e.upvoteRatio ? Math.round(100 * e.upvoteRatio).toString() : "",
						n = Object(i.b)(e.viewCount);
					return {
						upvotePercentString: r.fbt._("{percent upvoted}% Upvoted", [r.fbt._param("percent upvoted", t)], {
							hk: "432tjJ"
						}),
						viewCountString: r.fbt._({
							"*": "{number of views} Views",
							_1: "1 View"
						}, [r.fbt._plural(e.viewCount, "number of views", n)], {
							hk: "rP01m"
						})
					}
				})(n), b = o && !!n.viewCount, f = Object(a.e)(e => Object(l.a)(e, n.id)), v = Object(a.e)(e => Object(l.c)(e, n.id)), h = Object(d.c)(n, v), g = f && h === d.b.Available;
				return s.a.createElement("div", {
					className: Object(c.a)(m.a.viewCounts, t)
				}, b && s.a.createElement("span", null, p), b && !!n.upvoteRatio && s.a.createElement("span", {
					className: m.a.dotSpacer
				}), !!n.upvoteRatio && !g && s.a.createElement("span", null, u))
			}
		},
		"./src/reddit/components/PostContent/viewCount.m.less": function(e, t, n) {
			e.exports = {
				dotSpacer: "_3g_cwSqBe5o5mAuhfMeGu5",
				viewCounts: "t4Hq30BDzTeJ85vREX7_M"
			}
		},
		"./src/reddit/components/PostFlairPicker/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return i
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			}));
			var r = n("./node_modules/lodash/isEqual.js"),
				o = n.n(r),
				s = n("./src/reddit/constants/flair.ts"),
				a = n("./src/reddit/helpers/flair.ts"),
				c = n("./src/reddit/models/Flair/index.ts");
			const i = e => (e || []).find(e => e.type === c.f.Text || e.type === c.f.Image || e.type === c.f.Richtext);
			var d;
			! function(e) {
				e[e.InvalidTemplate = 0] = "InvalidTemplate", e[e.NoChanges = 1] = "NoChanges", e[e.NotSelected = 2] = "NotSelected", e[e.TextIsNotAllowed = 3] = "TextIsNotAllowed", e[e.TextIsEmpty = 4] = "TextIsEmpty", e[e.TextIsTooLong = 5] = "TextIsTooLong"
			}(d || (d = {}));
			const l = (e, t, n) => {
				if (n && !t) return {
					canSave: !0
				};
				if (!t) return {
					canSave: !1,
					reason: d.NotSelected
				};
				const r = e && t.templateId ? e[t.templateId] : void 0;
				if (!r) return {
					canSave: !1,
					reason: d.InvalidTemplate
				};
				const c = Object(a.g)(t).length;
				return 0 === c ? {
					canSave: !1,
					reason: d.TextIsEmpty
				} : c > s.g ? {
					canSave: !1,
					reason: d.TextIsTooLong
				} : Object(a.n)(t) && !Object(a.r)(r) ? {
					canSave: !1,
					reason: d.TextIsNotAllowed
				} : o()(n, t) ? {
					canSave: !1,
					reason: d.NoChanges
				} : {
					canSave: !0
				}
			}
		},
		"./src/reddit/components/SubredditNameLink/index.m.less": function(e, t, n) {
			e.exports = {
				SubredditName: "_3ryJoIoycVkA88fy40qNJc",
				subredditName: "_3ryJoIoycVkA88fy40qNJc"
			}
		},
		"./src/reddit/components/SubredditNameLink/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				o = n("./src/reddit/components/SubredditNameLink/index.m.less"),
				s = n.n(o);
			const a = n("./src/lib/lessComponent.tsx").a.wrapped(r.a, "SubredditName", s.a);
			t.a = a
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js");
			const o = e => {
					let {
						type: t
					} = e;
					return "subreddit" === t ? "subredditActions" : "profileActions"
				},
				s = {
					subredditActions: {
						subscribe: () => r.fbt._("Join", null, {
							hk: "3Nhj3V"
						}),
						subscribed: () => r.fbt._("Joined", null, {
							hk: "1YGago"
						}),
						unsubscribe: () => r.fbt._("Leave", null, {
							hk: "299znK"
						})
					},
					profileActions: {
						subscribe: () => r.fbt._("Follow", null, {
							hk: "18PRa5"
						}),
						subscribed: () => r.fbt._("Following", null, {
							hk: "sjS3y"
						}),
						unsubscribe: () => r.fbt._("Unfollow", null, {
							hk: "3c0uwF"
						})
					}
				},
				a = e => {
					let {
						type: t,
						key: n
					} = e;
					return s[o({
						type: t
					})][n]()
				}
		},
		"./src/reddit/components/VerticalVotes/index.m.less": function(e, t, n) {
			e.exports = {
				votesContainer: "_1E9mcoVn4MYnuBQSVDt1gC",
				bounceUp: "nmB1I04Z-G4nY3g3s_17F",
				bounceDown: "_1L6r7KisMt3CYUGWSEMGiR",
				disabledVoteIcon: "mvlZFfW9BWm1bmljE_0Rg"
			}
		},
		"./src/reddit/components/VerticalVotes/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return w
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				s = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = n("./src/reddit/constants/elementClassNames.ts"),
				u = n("./src/reddit/controls/Score/index.tsx"),
				m = n("./src/reddit/components/VerticalVotes/votes.tsx"),
				p = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				b = n("./src/reddit/models/Vote/index.ts"),
				f = n("./src/reddit/selectors/posts.ts"),
				v = n("./src/reddit/selectors/user.ts"),
				h = n("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				g = n("./src/reddit/components/VerticalVotes/index.m.less"),
				O = n.n(g);
			const j = Object(c.c)({
					isNightMode: v.fb,
					isAnimatingUpvotePostId: f.k
				}),
				_ = Object(a.b)(j),
				x = e => !e.isCustomIconDisabled && !0 !== e.redditStyle && Object(p.a)(e).voteIcons.upvoteInactive && Object(p.a)(e).voteIcons.upvoteActive,
				w = e => !e.isCustomIconDisabled && !0 !== e.redditStyle && Object(p.a)(e).voteIcons.downvoteInactive && Object(p.a)(e).voteIcons.downvoteActive;
			class y extends s.a.Component {
				constructor() {
					super(...arguments), this.state = {
						voted: b.a.notVoted
					}, this.onUpvote = () => {
						const {
							voteState: e
						} = this.props.model, {
							onVoteClick: t
						} = this.props;
						t(b.a.upvoted), this.setState({
							voted: e !== b.a.upvoted ? b.a.upvoted : b.a.notVoted
						})
					}, this.onDownvote = () => {
						const {
							voteState: e
						} = this.props.model, {
							onVoteClick: t
						} = this.props;
						t(b.a.downvoted), this.setState({
							voted: e !== b.a.downvoted ? b.a.downvoted : b.a.notVoted
						})
					}
				}
				render() {
					const e = this.props,
						{
							downvoteButtonClassName: t,
							isCountAnimShadowTestEnabled: n,
							isNightMode: o,
							isAnimatingUpvotePostId: a,
							shouldShowUpvoteRatioOnHover: c,
							isVoteCountAnimation: d,
							shouldShowScore: p = !0,
							upvoteButtonClassName: f,
							containerRef: v,
							model: g,
							postId: j
						} = e,
						_ = x(e),
						y = w(e),
						C = g.voteState,
						k = a === j;
					return s.a.createElement("div", {
						className: Object(i.a)(O.a.votesContainer, e.className),
						id: `vote-arrows-${g.id}`,
						ref: v
					}, _ ? s.a.createElement(m.b, {
						"aria-label": r.fbt._("upvote", null, {
							hk: "G6dJB"
						}),
						"aria-pressed": C === b.a.upvoted,
						"data-click-id": "upvote",
						"data-adclicklocation": h.b.UPVOTE,
						compact: e.compact,
						className: e.upvoteClassName,
						id: e.upvoteTooltipId,
						isNightMode: o,
						onClick: this.onUpvote,
						voteState: C
					}) : s.a.createElement("button", {
						"aria-label": r.fbt._("upvote", null, {
							hk: "RguWS"
						}),
						"aria-pressed": C === b.a.upvoted,
						className: Object(i.a)(l.n, f, {
							[O.a.bounceUp]: k
						}),
						onClick: this.onUpvote,
						"data-click-id": "upvote",
						"data-adclicklocation": h.b.UPVOTE,
						id: e.upvoteTooltipId
					}, s.a.createElement(m.d, {
						compact: e.compact,
						className: e.upvoteClassName,
						voteState: C
					})), !e.compact && p && s.a.createElement(u.a, {
						className: Object(i.a)(O.a.Score, e.scoreClassName),
						flairStyleTemplate: e.flairStyleTemplate,
						light: e.light,
						score: e.model.score,
						voteState: C,
						shouldShowUpvoteRatioOnHover: c,
						isScoreHidden: e.model.isScoreHidden,
						isVoteCountAnimation: !!d,
						isCountAnimShadowTestEnabled: !!n,
						postId: j
					}), y ? s.a.createElement(m.a, {
						"aria-label": r.fbt._("downvote", null, {
							hk: "tNfDV"
						}),
						"aria-pressed": C === b.a.downvoted,
						"data-click-id": "downvote",
						"data-adclicklocation": h.b.DOWNVOTE,
						className: e.downvoteClassName,
						compact: e.compact,
						isNightMode: o,
						onClick: this.onDownvote,
						voteState: C
					}) : s.a.createElement("button", {
						"aria-label": r.fbt._("downvote", null, {
							hk: "1mDjTw"
						}),
						"aria-pressed": C === b.a.downvoted,
						className: Object(i.a)(l.n, t),
						onClick: this.onDownvote,
						"data-click-id": "downvote",
						"data-adclicklocation": h.b.DOWNVOTE
					}, s.a.createElement(m.c, {
						className: e.downvoteClassName,
						compact: e.compact,
						voteState: C
					})))
				}
			}
			const C = Object(d.a)(_(y));
			t.a = C
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				s = n("./src/reddit/actions/subscription/index.ts"),
				a = n("./src/reddit/selectors/subreddit.ts");
			t.a = Object(r.b)(() => Object(o.c)({
				userIsSubscriber: a.jb
			}), (e, t) => {
				let {
					identifier: n
				} = t;
				return {
					onSubscribe: () => e(s.d([n], !0)),
					onSubscriptionsRequested: () => e(s.e()),
					onUnsubscribe: () => e(s.d([n], !1))
				}
			})
		},
		"./src/reddit/constants/jsapiEvents.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return s
			}));
			const r = "reddit",
				o = "reddit.ready",
				s = "reddit.urlChanged"
		},
		"./src/reddit/controls/RadioInput/RadioOption/index.m.less": function(e, t, n) {
			e.exports = {
				radioOption: "_2e6fJknJ4noSygWYov8-F1",
				radioOff: "_1lzSnSABNXX12WerTnwqI3",
				radioOn: "_3PYsg_uRJ6AGptv-hi7kqu"
			}
		},
		"./src/reddit/controls/RadioInput/RadioOption/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/constants/keycodes.ts"),
				c = n("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				i = n("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				d = n("./src/reddit/layout/row/Inline/index.tsx"),
				l = n("./src/reddit/controls/RadioInput/RadioOption/index.m.less"),
				u = n.n(l);
			class m extends o.a.Component {
				constructor() {
					super(...arguments), this.ref = null, this.onKeyPress = e => {
						const {
							props: t
						} = this;
						t.disabled || e.key !== a.b.Enter && e.key !== a.b.Space || (t.onClick && t.onClick(t.value), e.preventDefault())
					}
				}
				componentDidUpdate(e) {
					this.props.selected && !e.selected && this.ref && this.ref.focus()
				}
				render() {
					const {
						props: e
					} = this;
					return e.hidden ? null : o.a.createElement(d.a, {
						"aria-checked": e.selected,
						className: Object(s.a)(e.className, u.a.radioOption),
						innerRef: e => this.ref = e,
						onClick: e.disabled ? void 0 : e.onClick,
						onKeyPress: this.onKeyPress,
						role: "radio",
						tabIndex: e.tabIndex
					}, e.showButton && (e.selected ? o.a.createElement(i.a, {
						className: u.a.radioOn,
						role: "presentation"
					}) : o.a.createElement(c.a, {
						className: u.a.radioOff,
						role: "presentation"
					})), e.children)
				}
			}
			t.a = m
		},
		"./src/reddit/controls/RadioInput/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/reddit/constants/keycodes.ts");
			class a extends o.a.Component {
				constructor(e) {
					super(e), this.handleClick = e => {
						const {
							disabled: t,
							onChange: n
						} = this.props;
						t || this.state.value !== e && (n(e), this.setState({
							value: e
						}))
					}, this.getValues = () => {
						const e = [];
						return o.a.Children.forEach(this.props.children, t => {
							t.props.hidden || t.props.disabled || e.push(t.props.value)
						}), e
					}, this.onKeyDown = e => {
						const {
							disabled: t,
							onChange: n
						} = this.props, {
							value: r
						} = this.state;
						if (t) return;
						const o = e.key === s.b.ArrowUp,
							a = e.key === s.b.ArrowDown;
						if (o || a) {
							const t = this.getValues();
							if (!t.length) return;
							const s = r ? t.indexOf(r) : 0,
								a = t[((o ? s - 1 : s + 1) + t.length) % t.length];
							n(a), this.setState({
								value: a
							}), e.preventDefault()
						}
					}, this.state = {
						value: e.value || null
					}
				}
				UNSAFE_componentWillReceiveProps(e) {
					e.value !== this.props.value && this.setState({
						value: e.value || null
					})
				}
				render() {
					const {
						props: e
					} = this, {
						value: t
					} = this.state;
					return o.a.createElement("div", {
						"aria-label": e.name,
						className: e.className,
						role: "radiogroup",
						onKeyDown: this.onKeyDown
					}, o.a.createElement("input", {
						disabled: e.disabled,
						type: "hidden",
						value: t || ""
					}), o.a.Children.map(e.children, (n, r) => {
						const s = 0 === r,
							a = n.props.value === t,
							c = null !== t ? a ? 0 : -1 : s ? 0 : -1;
						return o.a.cloneElement(n, {
							disabled: e.disabled,
							onClick: e => this.handleClick(n.props.value),
							selected: a,
							tabIndex: c
						})
					}))
				}
			}
		},
		"./src/reddit/controls/Score/index.m.less": function(e, t, n) {
			e.exports = {
				score: "_1rZYMD_4xY3gRcSS3p8ODO",
				dot: "uFieChpcVxrPI9VvCKqZu",
				viewCount: "_3bAGP2FKe97ijgBAGQOYsk"
			}
		},
		"./src/reddit/controls/Score/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/classNames/index.ts"),
				s = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = n("./src/lib/prettyPrintNumber/index.ts"),
				c = n("./node_modules/react/index.js"),
				i = n.n(c),
				d = n("./node_modules/react-redux/es/index.js"),
				l = n("./src/reddit/actions/post.ts"),
				u = n("./src/reddit/components/CountAnimation/index.tsx"),
				m = n("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				p = n("./src/reddit/components/PostContent/ViewCount.tsx"),
				b = n("./src/reddit/constants/colors.ts"),
				f = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				v = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				h = n("./src/reddit/hooks/useInfoTextTooltip.ts"),
				g = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				O = n("./src/reddit/models/Vote/index.ts"),
				j = n("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				_ = n("./src/reddit/selectors/meta.ts"),
				x = n("./src/reddit/selectors/posts.ts"),
				w = n("./node_modules/reselect/es/index.js"),
				y = n("./src/reddit/controls/Score/index.m.less"),
				C = n.n(y);
			const k = {
					placement: "right"
				},
				I = e => e.voteState === O.a.downvoted ? Object(g.a)(e).voteText.downvote : e.voteState === O.a.upvoted ? Object(g.a)(e).voteText.upvote : Object(v.a)(Object(f.a)(e)),
				E = Object(w.c)({
					locale: e => Object(_.k)(e),
					post: (e, t) => {
						let {
							shouldShowUpvoteRatioOnHover: n,
							postId: r
						} = t;
						if (n && r) return Object(x.F)(e, {
							postId: r
						})
					}
				}),
				P = () => 0,
				S = Object(d.b)(E),
				T = Object(s.a)(e => {
					const t = {
							color: e.light ? b.a.lightboxHeaderText : I(e)
						},
						{
							score: n,
							postId: s = "",
							locale: f,
							isVoteCountAnimation: v,
							isCountAnimShadowTestEnabled: g,
							shouldShowUpvoteRatioOnHover: O,
							post: _
						} = e,
						x = Object(d.d)(),
						w = null == f ? void 0 : f.startsWith("en"),
						y = e.isScoreHidden ? w ? r.fbt._("Vote", null, {
							hk: "2TMson"
						}) : i.a.createElement("span", {
							className: C.a.dot
						}, "•") : Object(a.b)(n),
						E = Object(c.useCallback)(e => {
							const {
								voteCountChange: t
							} = e.subscribe.data;
							0 !== t && x(Object(l.H)({
								postId: s,
								delta: t
							}))
						}, [x, s]),
						S = Object(c.useRef)({
							input: {
								channel: {
									teamOwner: "CONTENT_AND_COMMUNITIES",
									category: "VOTE_COUNT_UPDATE",
									postID: s
								}
							}
						}),
						T = !e.isScoreHidden && v && n < j.a,
						A = Object(h.a)(k),
						N = n < 0 ? 0 : n;
					return i.a.createElement("div", {
						className: Object(o.a)(C.a.score, e.className),
						style: t,
						onMouseEnter: O ? A.show : void 0,
						onMouseLeave: O ? A.hide : void 0,
						ref: O ? A.target.ref : void 0
					}, (T || g) && i.a.createElement(i.a.Fragment, null, i.a.createElement(u.b, {
						initialDisplayCount: N,
						countToUpperBound: N,
						initialDelay: P,
						subsequentRecurringDelay: P,
						incrementDelta: P,
						shouldDisjointAnimation: !0,
						postId: s,
						featureName: u.a.Vote,
						queryKey: "postVoteCount",
						queryVariables: S.current,
						onDataCB: E,
						isLoadTestOnly: g && !T
					})), !T && y, O && _ && i.a.createElement(m.a, A, i.a.createElement(p.a, {
						className: C.a.viewCount,
						post: _,
						showViewCount: !1
					})))
				});
			t.a = S(T)
		},
		"./src/reddit/helpers/crypto/vaultActionLink.ts": function(e, t, n) {
			"use strict";

			function r(e) {
				return e.match(/^https:\/\/www\.reddit\.com\/vault\/burn/)
			}

			function o(e) {
				const {
					subreddit: t,
					amount: n,
					memo: r,
					cta: o
				} = e;
				return t && n && r && o ? {
					subreddit: t,
					amount: n,
					memo: r,
					cta: o
				} : (console.error("subreddit, amount, and memo query params required for vault action"), null)
			}
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return o
			}))
		},
		"./src/reddit/helpers/trackers/commentsChat.ts": function(e, t, n) {
			"use strict";
			n.d(t, "k", (function() {
				return l
			})), n.d(t, "l", (function() {
				return m
			})), n.d(t, "f", (function() {
				return p
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "d", (function() {
				return f
			})), n.d(t, "b", (function() {
				return v
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "a", (function() {
				return g
			})), n.d(t, "n", (function() {
				return O
			})), n.d(t, "g", (function() {
				return j
			})), n.d(t, "h", (function() {
				return _
			})), n.d(t, "m", (function() {
				return x
			})), n.d(t, "i", (function() {
				return w
			})), n.d(t, "j", (function() {
				return y
			}));
			var r = n("./src/lib/makeCommentsPageKey/index.ts"),
				o = n("./src/reddit/constants/tracking.ts"),
				s = n("./src/reddit/selectors/comments.ts"),
				a = n("./src/reddit/selectors/commentSelector.ts"),
				c = n("./src/reddit/selectors/telemetry.ts"),
				i = n("./src/telemetry/models/Event.ts");
			const d = (e, t) => ({
					...Object(c.o)(e),
					subreddit: Object(c.lb)(e),
					profile: Object(c.T)(e),
					post: Object(c.K)(e, t),
					comment: Object(c.h)({
						state: e,
						commentId: t
					})
				}),
				l = (e, t) => {
					const n = Object(a.c)(e, {
							commentId: t
						}),
						o = n && Object(r.a)(n.postId);
					if (!n || !o) return null;
					const i = {
							commentId: t,
							commentsPageKey: o
						},
						d = t && o && Object(s.j)(e, i) || 0;
					return Object(c.z)(e, void 0, {
						depth: d
					})
				},
				u = e => {
					var t;
					return null !== (t = e.split("chat_reaction_")[1]) && void 0 !== t ? t : ""
				},
				m = (e, t) => n => ({
					action: "load",
					noun: e,
					post: Object(c.K)(n, t),
					source: i.b.ChatView,
					subreddit: Object(c.lb)(n)
				}),
				p = (e, t) => n => ({
					...d(n, t),
					source: "live_post",
					action: o.c.CLICK,
					noun: e,
					actionInfo: {
						reason: "live_post",
						pageType: "actions_menu"
					},
					listing: l(n, t)
				}),
				b = e => t => ({
					...d(t, e),
					source: "chat_post",
					action: o.c.VIEW,
					noun: "last_message"
				}),
				f = e => t => ({
					...d(t, e),
					source: "chat_post",
					action: o.c.SUBMIT,
					noun: "reply",
					post: Object(c.K)(t, e),
					comment: Object(c.h)({
						state: t,
						commentId: e
					}),
					actionInfo: Object(c.d)(t, {
						reason: "live_post",
						type: "live_post"
					})
				}),
				v = e => t => ({
					...d(t, e),
					source: "chat_post",
					action: o.c.CLICK,
					noun: "comment",
					actionInfo: Object(c.d)(t, {
						pageType: "user_mention",
						reason: "live_post",
						type: "live_post"
					})
				}),
				h = e => t => ({
					...d(t, e),
					source: "chat_post",
					action: o.c.VIEW,
					noun: "warning",
					post: Object(c.K)(t, e),
					actionInfo: {
						pageType: "spam_rate_countdown"
					}
				}),
				g = e => t => ({
					...d(t, e),
					source: "chat_post",
					action: o.c.CLOSE,
					noun: "warning",
					post: Object(c.K)(t, e),
					actionInfo: {
						pageType: "spam_rate_countdown"
					}
				}),
				O = e => t => ({
					...d(t, e),
					source: "global",
					action: o.c.VIEW,
					noun: "screen",
					actionInfo: {
						reason: "live_post",
						pageType: "given_awards_list"
					},
					listing: l(t, e)
				}),
				j = (e, t, n) => r => ({
					...d(r, t),
					source: i.b.Chat,
					action: o.c.CLICK,
					noun: "reaction",
					actionInfo: {
						pageType: n,
						reason: u(e)
					},
					chat: {
						type: "live_post"
					},
					listing: l(r, t)
				}),
				_ = (e, t, n) => r => ({
					...d(r, t),
					source: i.b.Chat,
					action: o.c.DELETE,
					noun: "reaction",
					actionInfo: {
						pageType: n,
						reason: u(e)
					},
					chat: {
						type: "live_post"
					},
					listing: l(r, t)
				}),
				x = () => e => {
					var t;
					return {
						...Object(c.o)(e),
						subreddit: Object(c.lb)(e),
						profile: Object(c.T)(e),
						actionInfo: {
							...Object(c.d)(e),
							paneName: (null === window || void 0 === window ? void 0 : window.parent) !== window ? "chat_tab" : (null === (t = null == e ? void 0 : e.platform.currentPage) || void 0 === t ? void 0 : t.locationState.clickSource) || ""
						},
						source: "chat_post",
						action: o.c.VIEW,
						noun: "hint"
					}
				},
				w = e => t => {
					const n = d(t, e);
					return n.comment.type = "thread_chat", {
						...n,
						source: "live_post",
						action: o.c.CLICK,
						noun: "chat_thread",
						actionInfo: Object(c.d)(t, {
							pageType: "actions_menu"
						})
					}
				},
				y = e => t => {
					const n = d(t, e);
					return n.comment.type = "thread_chat", {
						...n,
						source: "live_post",
						action: o.c.SUBMIT,
						noun: "comment",
						actionInfo: Object(c.d)(t)
					}
				}
		},
		"./src/reddit/helpers/trackers/communityAwards.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "h", (function() {
				return v
			})), n.d(t, "i", (function() {
				return h
			}));
			var r = n("./src/reddit/models/Gold/Award.ts"),
				o = n("./src/reddit/selectors/telemetry.ts"),
				s = n("./src/reddit/helpers/correlationIdTracker.ts"),
				a = n("./src/reddit/helpers/trackers/gild.ts");
			const c = e => ({
					...o.o(e),
					screen: o.cb(e),
					subreddit: o.lb(e),
					userSubreddit: o.ub(e)
				}),
				i = e => ({
					awardId: e.id,
					awardName: e.name,
					isModAward: e.awardType === r.e.Moderator,
					isTemporatyAward: !!e.endsAt,
					numberCoins: e.coinPrice,
					numberMonths: Math.floor((e.daysOfPremium || 0) / 30),
					numberCoinsToRecipient: e.coinReward || 0,
					numberCoinsToCommunity: e.subredditCoinReward || 0,
					type: Object(a.getAwardTypeFromAward)(e)
				}),
				d = () => e => ({
					...c(e),
					source: "awards",
					action: "click",
					correlationId: Object(s.c)(s.a.AwardCreationFlow),
					noun: "create"
				}),
				l = e => t => ({
					...c(t),
					source: "awards",
					action: "click",
					correlationId: Object(s.c)(s.a.AwardDeletionFlow),
					noun: "delete",
					goldPurchase: e ? i(e) : null,
					media: e ? {
						url: e.icon.url
					} : null
				}),
				u = (e, t, n) => r => ({
					...c(r),
					source: "create_award",
					action: e,
					correlationId: Object(s.c)(s.a.AwardCreationFlow),
					noun: t,
					goldPurchase: n
				}),
				m = (e, t, n, r) => o => ({
					...c(o),
					source: "create_award",
					action: "upload",
					correlationId: Object(s.c)(s.a.AwardCreationFlow),
					noun: "image",
					actionInfo: r ? {
						reason: r
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
						uploadDuration: n,
						url: e,
						width: t.width
					} : null
				}),
				p = (e, t, n) => r => ({
					...c(r),
					source: "create_award",
					action: "click",
					correlationId: Object(s.c)(s.a.AwardCreationFlow),
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
					goldPurchase: n ? i(n) : null
				}),
				b = (e, t, n) => r => ({
					...c(r),
					source: "create_award",
					action: e,
					correlationId: Object(s.c)(s.a.AwardCreationFlow),
					noun: t,
					goldPurchase: n ? i(n) : null
				}),
				f = (e, t, n) => r => ({
					...c(r),
					source: "awards",
					action: "click",
					noun: n,
					goldPurchase: i(e),
					profile: o.U(r, t),
					subreddit: o.mb(r, t)
				}),
				v = (e, t) => f(e, t, "disable_in_community"),
				h = (e, t) => f(e, t, "enable_in_community")
		},
		"./src/reddit/helpers/trackers/gild.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "getAwardTypeFromAward", (function() {
				return u
			})), n.d(t, "clickGildEvent", (function() {
				return b
			})), n.d(t, "clickAddAward", (function() {
				return f
			})), n.d(t, "clickHideAward", (function() {
				return v
			})), n.d(t, "clickConfirmHideAward", (function() {
				return h
			})), n.d(t, "clickCancelHideAward", (function() {
				return g
			})), n.d(t, "clickAwardReportFlow", (function() {
				return j
			})), n.d(t, "clickCancelAwardReportFlow", (function() {
				return _
			})), n.d(t, "clickFlagAwardUsage", (function() {
				return x
			})), n.d(t, "clickCancelFlagAwardUsage", (function() {
				return w
			})), n.d(t, "clickConfirmFlagAwardUsage", (function() {
				return y
			})), n.d(t, "clickReportAward", (function() {
				return C
			})), n.d(t, "clickCancelReportAward", (function() {
				return k
			})), n.d(t, "clickConfirmReportAward", (function() {
				return I
			})), n.d(t, "viewGildModalEvent", (function() {
				return E
			})), n.d(t, "clickSelectAwardEvent", (function() {
				return P
			})), n.d(t, "triggerAnonymousEvent", (function() {
				return S
			})), n.d(t, "clickMessageInputEvent", (function() {
				return T
			})), n.d(t, "typeMessageInputEvent", (function() {
				return A
			})), n.d(t, "clickLearnMoreLinkEvent", (function() {
				return N
			})), n.d(t, "clickQuestionMarkEvent", (function() {
				return F
			})), n.d(t, "clickConfirmAwardEvent", (function() {
				return R
			})), n.d(t, "clickGetPremiumEvent", (function() {
				return M
			})), n.d(t, "clickAddCoinsButtonEvent", (function() {
				return D
			})), n.d(t, "clickNextButtonEvent", (function() {
				return B
			})), n.d(t, "clickCloseGildModalEvent", (function() {
				return V
			})), n.d(t, "viewKarmaSuccessEvent", (function() {
				return L
			})), n.d(t, "clickFilterEvent", (function() {
				return G
			})), n.d(t, "clickNextFiltersEvent", (function() {
				return U
			})), n.d(t, "clickPreviousFiltersEvent", (function() {
				return K
			}));
			var r = n("./src/reddit/helpers/trackers/commentsChat.ts"),
				o = n("./src/reddit/models/Gold/Award.ts"),
				s = n("./src/reddit/selectors/commentSelector.ts"),
				a = n("./src/reddit/selectors/telemetry.ts"),
				c = n("./src/telemetry/models/GoldPurchase.ts"),
				i = n("./src/reddit/helpers/correlationIdTracker.ts"),
				d = n("./src/reddit/helpers/isComment.ts"),
				l = n("./src/reddit/selectors/gild.ts");
			const u = e => e.awardType === o.e.Global && e.awardSubType === o.d.Appreciation ? c.GoldPurchaseType.GidAppreciation : e.awardType === o.e.Global && e.awardSubType === o.d.Premium ? c.GoldPurchaseType.GidPremium : e.awardSubType === o.d.Group ? c.GoldPurchaseType.GidGroup : e.awardType === o.e.Community ? c.GoldPurchaseType.GidCommunity : e.awardType === o.e.Moderator ? c.GoldPurchaseType.GidMod : e.awardType === o.e.Global && e.awardSubType === o.d.Global ? c.GoldPurchaseType.GidGlobal : c.GoldPurchaseType.GidUnknown,
				m = (e, t) => ({
					awardId: e.id,
					awardName: e.name,
					isTemporaryAward: !!e.endsAt,
					numberCoinsToRecipient: e.coinReward,
					type: u(e),
					...t
				}),
				p = (e, t, n) => {
					const o = t && Object(s.g)(e, {
						commentId: t
					});
					return {
						...a.o(e),
						actionInfo: a.d(e, {
							reason: o ? "live_post" : void 0,
							...n
						}),
						comment: t ? a.h({
							state: e,
							commentId: t
						}) : void 0,
						correlationId: Object(l.b)(e) || Object(i.d)(i.a.GildingFlow, !1),
						post: t ? a.K(e, t) : void 0,
						screen: a.cb(e),
						subreddit: a.lb(e),
						userSubreddit: a.ub(e),
						listing: t ? Object(r.k)(e, t) : void 0
					}
				},
				b = (e, t) => n => ({
					...p(n, e, t),
					source: Object(d.a)(e) ? "comment" : "post",
					action: "click",
					noun: "give_gold",
					feed: a.r(n)
				}),
				f = e => t => ({
					...p(t, e),
					source: Object(d.a)(e) ? "comment" : "post",
					action: "click",
					noun: "add_award",
					feed: a.r(t)
				}),
				v = (e, t) => n => ({
					...p(n, t),
					source: Object(d.a)(t) ? "comment" : "post",
					action: "click",
					noun: "hide_award",
					goldPurchase: m(e)
				}),
				h = (e, t) => n => ({
					...p(n, t),
					source: Object(d.a)(t) ? "comment" : "post",
					action: "click",
					noun: "confirm_hide_award",
					goldPurchase: m(e)
				}),
				g = (e, t) => n => ({
					...p(n, t),
					source: Object(d.a)(t) ? "comment" : "post",
					action: "click",
					noun: "cancel_hide_award",
					goldPurchase: m(e)
				}),
				O = e => (t, n) => r => ({
					...p(r, n),
					source: Object(d.a)(n) ? "comment" : "post",
					action: "click",
					noun: e,
					goldPurchase: m(t)
				}),
				j = O("award_hovercard_report"),
				_ = O("cancel_award_hovercard_report"),
				x = O("flag_award"),
				w = O("cancel_flag_award"),
				y = O("confirm_flag_award"),
				C = O("report_community_award"),
				k = O("cancel_report_community_award"),
				I = O("confirm_report_community_award"),
				E = (e, t, n) => r => ({
					...p(r, n),
					source: "give_gold",
					action: "view",
					noun: "page",
					goldPurchase: {
						defaultOption: e,
						defaultAnonymous: t
					}
				}),
				P = (e, t, n) => r => ({
					...p(r, t),
					source: "give_gold",
					action: "click",
					noun: "award",
					goldPurchase: m(e, n)
				}),
				S = (e, t) => n => ({
					...p(n, t),
					source: "give_gold",
					action: e,
					noun: "anonymous"
				}),
				T = e => t => ({
					...p(t, e),
					source: "give_gold",
					action: "click",
					noun: "message_input"
				}),
				A = e => t => ({
					...p(t, e),
					source: "give_gold",
					action: "type",
					noun: "message_input"
				}),
				N = e => t => ({
					...p(t, e),
					source: "give_gold",
					action: "click",
					noun: "learn_more"
				}),
				F = e => t => ({
					...p(t, e),
					source: "give_gold",
					action: "click",
					noun: "question"
				}),
				R = (e, t) => n => ({
					...p(n, e),
					source: "give_gold",
					action: "click",
					noun: "confirm",
					goldPurchase: {
						contentType: Object(d.a)(e) ? "comment" : "post",
						...m(t)
					}
				}),
				M = (e, t) => n => ({
					...p(n, e),
					source: "give_gold",
					action: "click",
					noun: "get_premium",
					goldPurchase: {
						contentType: Object(d.a)(e) ? "comment" : "post",
						...m(t)
					}
				}),
				D = e => t => ({
					...p(t, e),
					source: "give_gold",
					action: "click",
					noun: "add_coins"
				}),
				B = e => t => ({
					...p(t, e),
					source: "give_gold",
					action: "click",
					noun: "next"
				}),
				V = e => t => ({
					...p(t, e),
					source: "give_gold",
					action: "click",
					noun: "close"
				}),
				L = e => {
					let {
						award: t,
						awardeeKarmaEarned: n,
						awarderKarmaEarned: r,
						numberCoins: o,
						thingId: s
					} = e;
					return e => ({
						...p(e, s),
						source: "give_gold",
						action: "view",
						noun: "karma_success",
						goldPurchase: {
							contentType: Object(d.a)(s) ? "comment" : "post",
							awardeeKarmaEarned: n,
							awarderKarmaEarned: r,
							numberCoins: o,
							...m(t)
						}
					})
				},
				G = e => t => ({
					...p(t),
					source: "give_gold",
					action: "click",
					noun: "filter",
					goldPurchase: {
						filterId: e.tag,
						filterName: e.content.markdown
					}
				}),
				U = () => e => ({
					...p(e),
					source: "give_gold",
					action: "click",
					noun: "next_filters"
				}),
				K = () => e => ({
					...p(e),
					source: "give_gold",
					action: "click",
					noun: "previous_filters"
				})
		},
		"./src/reddit/helpers/trackers/goldPayment.ts": function(e, t, n) {
			"use strict";
			n.d(t, "h", (function() {
				return f
			})), n.d(t, "b", (function() {
				return v
			})), n.d(t, "f", (function() {
				return h
			})), n.d(t, "d", (function() {
				return g
			})), n.d(t, "e", (function() {
				return O
			})), n.d(t, "c", (function() {
				return j
			})), n.d(t, "a", (function() {
				return _
			})), n.d(t, "g", (function() {
				return x
			})), n.d(t, "i", (function() {
				return w
			})), n.d(t, "j", (function() {
				return y
			}));
			var r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/models/Gold/ProductOffer.ts"),
				s = n("./src/reddit/selectors/gold/giveAwards.ts"),
				a = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				c = n("./src/reddit/selectors/goldPurchaseModals.ts"),
				i = n("./src/reddit/selectors/telemetry.ts"),
				d = n("./src/telemetry/models/GoldPurchase.ts"),
				l = n("./src/telemetry/models/Payment.ts"),
				u = n("./src/reddit/helpers/trackers/gild.ts"),
				m = n("./src/reddit/helpers/correlationIdTracker.ts"),
				p = n("./src/reddit/helpers/isComment.ts"),
				b = n("./src/reddit/helpers/trackers/communityAwards.ts");
			const f = (e, t) => {
					const {
						thingId: n,
						packageId: l
					} = t, f = !!n, v = s.b(e), h = v ? Object(u.getAwardTypeFromAward)(v) : null, g = f ? h : c.p(e) ? d.GoldPurchaseType.Premium : d.GoldPurchaseType.Coins, O = n ? Object(p.a)(n) ? "comment" : "post" : void 0, j = l || c.u(e), _ = [...Object(a.d)(e), ...Object(a.e)(e)].filter(e => e.mobileId === j)[0], x = t.offerContext || (v && 0 === v.coinPrice ? o.a.StorefrontFreeAward : Object(o.d)(_, f)), w = _ ? Math.round(1e4 * (_.baselinePennies - _.pennies) / _.baselinePennies) / 100 : 0, y = _ ? Math.round(1e4 * (_.coins - _.baselineCoins) / _.coins) / 100 : 0, C = _ ? _.baselinePennies !== _.pennies ? `${w}_percent_price` : _.baselineCoins !== _.coins ? `${y}_percent_bonus` : void 0 : void 0, k = g === d.GoldPurchaseType.Premium ? r.Db : _ ? _.pennies : void 0;
					return {
						...i.o(e),
						comment: n ? i.h({
							state: e,
							commentId: n
						}) : null,
						correlationId: c.s(e) || Object(m.d)(m.a.GoldPayment, !1),
						post: n ? i.K(e, n) : null,
						screen: i.cb(e),
						subreddit: n ? i.lb(e) : null,
						goldPurchase: {
							...v ? Object(b.a)(v) : null,
							type: g,
							gildedContent: f,
							contentType: O,
							numberCoins: _ ? _.coins : void 0,
							offerContext: x,
							offerType: C
						},
						payment: {
							currency: "USD",
							amountInSmallestDenom: k
						},
						purchase: {
							priceMicros: k
						}
					}
				},
				v = (e, t, n) => r => ({
					...f(r, {
						packageId: t,
						thingId: e,
						offerContext: n
					}),
					source: "gold_payment",
					action: "click",
					noun: "close"
				}),
				h = e => t => ({
					...f(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "paypal"
				}),
				g = e => t => ({
					...f(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "continue_paypal"
				}),
				O = e => t => ({
					...f(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "credit_card"
				}),
				j = e => t => ({
					...f(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "complete_credit_card"
				}),
				_ = (e, t) => n => ({
					...f(n, {
						packageId: e,
						offerContext: t
					}),
					source: "gold_payment",
					action: "click",
					noun: "confirm"
				}),
				x = e => t => ({
					...f(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "display",
					noun: "error"
				}),
				w = (e, t, n) => r => {
					const o = f(r, {
						packageId: t,
						thingId: e,
						offerContext: n
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
							source: e ? d.GiveGold : c.p(r) ? d.PremiumMarketing : d.CoinsMarketing
						}
					}
				},
				y = e => t => {
					var n;
					const r = f(t, {
						thingId: e
					});
					return {
						...r,
						source: "gold_payment",
						action: "view",
						noun: "success",
						payment: {
							...r.payment,
							method: (null === (n = t.platform.currentPage) || void 0 === n ? void 0 : n.queryParams.thanks) ? l.PaymentMethod.Paypal : l.PaymentMethod.CreditCard
						}
					}
				}
		},
		"./src/reddit/helpers/trackers/lightbox.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return d
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "a", (function() {
				return p
			}));
			var r = n("./src/reddit/constants/tracking.ts"),
				o = n("./src/telemetry/index.ts"),
				s = n("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				a = n("./src/reddit/selectors/platform.ts"),
				c = n("./src/reddit/selectors/telemetry.ts");
			const i = e => ({
					profile: c.T(e),
					screen: c.cb(e),
					subreddit: c.lb(e)
				}),
				d = (e, t, n) => r => ({
					source: Object(a.i)(r) || n ? "post_lightbox" : "post_detail",
					action: "click",
					noun: t,
					...i(r),
					post: c.K(r, e)
				}),
				l = (e, t, n, r) => o => {
					const a = n ? c.h({
							state: o,
							commentId: n
						}) : null,
						{
							sortToUse: i
						} = Object(s.a)(o, e);
					return {
						...d(e, t, r)(o),
						comment: a,
						listing: {
							sort: i
						}
					}
				},
				u = (e, t) => n => {
					const r = c.k(n);
					return r ? d(r.id, e, t)(n) : {
						source: Object(a.i)(n) || t ? "post_lightbox" : "post_detail",
						action: "click",
						noun: e,
						...i(n)
					}
				},
				m = (e, t) => n => Object(o.a)({
					...d(e, t)(n),
					...c.o(n)
				}),
				p = e => t => ({
					source: "id_card",
					action: r.c.CLICK,
					noun: e,
					...i(t),
					post: c.k(t),
					userSubreddit: c.ub(t)
				})
		},
		"./src/reddit/helpers/trackers/modTools.ts": function(e, t, n) {
			"use strict";
			n.d(t, "m", (function() {
				return a
			})), n.d(t, "n", (function() {
				return c
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "f", (function() {
				return u
			})), n.d(t, "d", (function() {
				return m
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "g", (function() {
				return b
			})), n.d(t, "o", (function() {
				return f
			})), n.d(t, "l", (function() {
				return v
			})), n.d(t, "k", (function() {
				return h
			})), n.d(t, "p", (function() {
				return g
			})), n.d(t, "i", (function() {
				return O
			})), n.d(t, "j", (function() {
				return j
			})), n.d(t, "a", (function() {
				return _
			}));
			var r = n("./src/reddit/constants/tracking.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			const s = e => ({
					screen: Object(o.cb)(e),
					profile: Object(o.T)(e),
					subreddit: Object(o.lb)(e),
					userSubreddit: Object(o.ub)(e)
				}),
				a = e => t => ({
					source: "nav",
					action: "click",
					noun: e ? "mod_mode_on" : "mod_mode_off",
					...s(t)
				}),
				c = (e, t) => n => ({
					source: "post_mod_action_menu",
					action: "click",
					noun: e,
					post: Object(o.K)(n, t),
					...s(n)
				}),
				i = (e, t) => n => ({
					source: "comment",
					action: "click",
					noun: e,
					post: Object(o.K)(n, t),
					comment: Object(o.h)({
						state: n,
						commentId: t
					}),
					media: {
						mimetype: Object(o.j)(n, t)
					},
					...s(n)
				}),
				d = (e, t) => n => ({
					source: "comment",
					action: r.c.CLICK,
					noun: e,
					post: Object(o.K)(n, t),
					comment: Object(o.h)({
						state: n,
						commentId: t
					}),
					actionInfo: {
						pageType: "chat_live_post"
					},
					...s(n)
				}),
				l = (e, t) => n => ({
					source: "comment",
					action: r.c.UNDO,
					noun: e,
					post: Object(o.K)(n, t),
					comment: Object(o.h)({
						state: n,
						commentId: t
					}),
					...s(n)
				}),
				u = (e, t) => n => ({
					source: "comment_overflow_menu",
					action: "click",
					noun: e,
					post: Object(o.K)(n, t),
					comment: Object(o.h)({
						state: n,
						commentId: t
					}),
					...s(n)
				}),
				m = (e, t) => n => ({
					source: "mod_distinguish_menu",
					action: "click",
					noun: e,
					post: Object(o.K)(n, t),
					comment: Object(o.h)({
						state: n,
						commentId: t
					}),
					...s(n)
				}),
				p = (e, t) => n => ({
					source: "comment_mod_action_menu",
					action: "click",
					noun: e,
					post: Object(o.K)(n, t),
					comment: Object(o.h)({
						state: n,
						commentId: t
					}),
					...s(n)
				}),
				b = (e, t) => n => ({
					source: "comment_report_menu",
					action: "click",
					noun: e,
					comment: Object(o.h)({
						state: n,
						commentId: t
					}),
					post: Object(o.K)(n, t),
					...s(n)
				}),
				f = (e, t) => n => ({
					source: "post_report_menu",
					action: "click",
					noun: e,
					post: Object(o.K)(n, t),
					...s(n)
				}),
				v = (e, t) => n => ({
					source: "post",
					action: "click",
					noun: e,
					post: Object(o.K)(n, t),
					subreddit: Object(o.ob)(n, t)
				}),
				h = (e, t) => n => ({
					source: "comment",
					action: "click",
					noun: e,
					comment: Object(o.h)({
						state: n,
						commentId: t
					}),
					post: Object(o.K)(n, t),
					subreddit: Object(o.ob)(n, t)
				}),
				g = (e, t, n, r) => s => ({
					source: e ? "comment" : "post",
					action: "click",
					noun: t ? "unsnooze_reporter" : "snooze_reporter",
					post: Object(o.K)(s, n),
					subreddit: Object(o.ob)(s, n),
					actionInfo: {
						reason: r
					},
					...e && {
						comment: Object(o.h)({
							state: s,
							commentId: n
						})
					}
				}),
				O = () => e => ({
					...s(e),
					source: "modqueue",
					noun: "content_type_live_post",
					action: "view",
					actionInfo: {
						pageType: "chat_live_post"
					}
				}),
				j = (e, t, n) => r => ({
					...s(r),
					source: "moderator",
					noun: "action",
					action: "click",
					actionInfo: {
						pageType: "mod_queue",
						paneName: n,
						reason: t
					},
					comment: Object(o.h)({
						state: r,
						commentId: e
					}) || void 0,
					post: Object(o.K)(r, e)
				}),
				_ = (e, t) => n => ({
					...s(n),
					source: "moderator",
					noun: "add_note_mod_queue",
					action: "click",
					comment: Object(o.h)({
						state: n,
						commentId: e
					}) || void 0,
					post: Object(o.K)(n, e),
					modAction: {
						targetUserId: t
					}
				})
		},
		"./src/reddit/helpers/trackers/snoovatar.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return d
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "i", (function() {
				return u
			})), n.d(t, "s", (function() {
				return m
			})), n.d(t, "l", (function() {
				return p
			})), n.d(t, "o", (function() {
				return b
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "f", (function() {
				return v
			})), n.d(t, "r", (function() {
				return g
			})), n.d(t, "e", (function() {
				return O
			})), n.d(t, "k", (function() {
				return j
			})), n.d(t, "n", (function() {
				return x
			})), n.d(t, "j", (function() {
				return w
			})), n.d(t, "b", (function() {
				return y
			})), n.d(t, "q", (function() {
				return k
			})), n.d(t, "d", (function() {
				return I
			})), n.d(t, "a", (function() {
				return P
			})), n.d(t, "p", (function() {
				return S
			})), n.d(t, "m", (function() {
				return T
			}));
			var r = n("./src/reddit/models/Gold/ProductOffer.ts"),
				o = n("./src/reddit/selectors/avatarMarketing.ts"),
				s = n("./src/reddit/selectors/telemetry.ts"),
				a = n("./src/reddit/selectors/user.ts"),
				c = n("./src/reddit/helpers/userSnoovatar/index.ts");
			const i = {
					goldPurchase: {
						offerContext: r.a.AvatarNewGear
					}
				},
				d = e => t => {
					const n = {
						source: e,
						action: "click",
						noun: "edit_snoovatar",
						...s.o(t)
					};
					return Object(o.a)(t) && Object.assign(n, i), n
				},
				l = (e, t) => n => {
					const {
						id: r
					} = Object(a.Db)(n, {
						userName: t
					});
					return {
						source: e,
						action: "click",
						noun: "copy_avatar",
						...s.o(n),
						snoovatar: {
							userGenerated: r
						}
					}
				},
				u = e => ({
					...s.o(e),
					source: "avatar",
					action: "click",
					noun: "try_this_look_post",
					snoovatar: s.jb(e)
				}),
				m = e => ({
					...s.o(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "snoovatar_builder"
					},
					snoovatar: s.jb(e)
				}),
				p = e => ({
					...s.o(e),
					source: "avatar_builder",
					action: "click",
					noun: "close",
					snoovatar: s.jb(e)
				}),
				b = e => ({
					source: "nav",
					action: "view",
					noun: "avatar_marketing",
					...s.o(e),
					...i
				}),
				f = e => ({
					source: "nav",
					action: "click",
					noun: "avatar_marketing",
					...s.o(e),
					...i
				}),
				v = e => t => ({
					...s.o(t),
					source: "snoovatar",
					action: "set_to_profile",
					noun: "snoovatar",
					snoovatar: {
						userGeneratedSource: e
					}
				}),
				h = e => t => n => ({
					source: "avatar",
					action: e,
					noun: "community_spaces",
					...s.o(n),
					snoovatar: s.jb(n),
					actionInfo: {
						paneName: "avatar_community_spaces" + (t ? "_control" : "")
					}
				}),
				g = h("view"),
				O = h("click"),
				j = h("dismiss"),
				_ = (e, t, n) => () => r => ({
					source: e,
					action: t,
					noun: n,
					...s.o(r),
					snoovatar: s.jb(r)
				}),
				x = _("anniversary_achievement", "view", "anniversary_achievement"),
				w = _("anniversary_achievement", "click", "close"),
				y = _("anniversary_achievement", "click", "equip"),
				C = e => () => t => ({
					...s.o(t),
					source: "gold_top_nav",
					action: e,
					noun: "quick_create_cta"
				}),
				k = C("view"),
				I = C("click"),
				E = (e, t, n) => r => ({
					source: e,
					action: t,
					noun: n,
					...s.o(r),
					actionInfo: {
						pageType: "onboarding"
					},
					snoovatar: s.jb(r)
				}),
				P = e => E("onboarding", "click", e),
				S = () => E("avatar", "view", "onboarding"),
				T = e => {
					let {
						user: t,
						pageType: n,
						userHasNft: r
					} = e;
					return e => {
						const o = Object(c.a)(t.accountIcon),
							a = (null == t ? void 0 : t.id) && (null == t ? void 0 : t.username);
						return {
							source: "profile",
							action: "screen",
							noun: "load",
							...s.o(e),
							actionInfo: {
								pageType: n
							},
							profile: a ? {
								id: t.id,
								name: t.username
							} : null,
							snoovatar: {
								snoovatarActive: o,
								userHasNft: r
							},
							marketplace: {
								hasCollectibleCollection: !1
							}
						}
					}
				}
		},
		"./src/reddit/helpers/trackers/userFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "d", (function() {
				return i
			}));
			var r = n("./src/reddit/helpers/flair.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			const s = () => e => ({
					source: "id_card",
					action: "click",
					noun: "user_flair_picker",
					...o.o(e)
				}),
				a = e => t => {
					const n = o.lb(t),
						{
							userFlair: s,
							achievementFlair: a
						} = e;
					return {
						source: "user_flair_picker",
						action: "click",
						noun: "user_flair",
						...o.o(t),
						subreddit: n,
						userFlair: {
							id: null == s ? void 0 : s.id,
							title: s ? Object(r.g)(s) : void 0,
							isActive: !!s || void 0,
							achievementFlairId: null == a ? void 0 : a.type,
							achievementFlairTitle: null == a ? void 0 : a.name,
							isLocked: null == a ? void 0 : a.isLocked
						}
					}
				},
				c = () => e => ({
					source: "user_flair_picker",
					action: "click",
					noun: "edit_user_flair",
					...o.o(e)
				}),
				i = e => t => ({
					source: "user_flair_picker",
					action: "click",
					noun: "enable_powerups_flair",
					setting: {
						value: e ? "0" : "1",
						oldValue: e ? "1" : "0"
					},
					subreddit: o.lb(t),
					...o.o(t)
				})
		},
		"./src/reddit/hooks/useExperimentVariant.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts");

			function s(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.a;
				return Object(r.e)(n => Object(o.c)(n, {
					experimentName: e,
					experimentEligibilitySelector: t
				}))
			}
		},
		"./src/reddit/hooks/useInfoTextTooltip.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var r = n("./node_modules/icepick/icepick.js"),
				o = n("./node_modules/react/index.js"),
				s = n("./src/lib/hooks/useTooltip.ts");
			const a = Object(r.freeze)({
				name: "offset",
				options: {
					offset: [0, 6]
				}
			});

			function c(e) {
				const t = Object(o.useMemo)(() => {
					const t = Object(s.a)(e);
					return Object(r.updateIn)(t, ["modifiers"], e => Object(r.push)(e, a))
				}, [e]);
				return Object(s.b)(t)
			}
		},
		"./src/reddit/icons/fonts/Premium/index.m.less": function(e, t, n) {
			e.exports = {
				PremiumIcon: "dLp3R7pmxclGjLS87yr5S",
				premiumIcon: "dLp3R7pmxclGjLS87yr5S"
			}
		},
		"./src/reddit/icons/fonts/Premium/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/Premium/index.m.less"),
				c = n.n(a);
			const i = n("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				title: e.title,
				className: `${Object(s.b)("premium",e.isFilled)} ${e.className}`
			}), "PremiumIcon", c.a)
		},
		"./src/reddit/icons/svgs/Pencil/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("title", {
				id: `${e.title}-title`
			}, e.title), o.a.createElement("g", null, o.a.createElement("path", {
				fill: "inherit",
				d: "M15.75,7.834625 L12,4.084625 L12.808,3.276625 C13.8435,2.241125 15.5225,2.241125 16.558,3.276625 C17.5935,4.312125 17.5935,5.991125 16.558,7.026625 L15.75,7.834625 Z M11.366,5 L15.116,8.75 L7.25,16.616 L3.5,12.866 L11.366,5 Z M2.5035,13.5 L6.1125,17.109 L1,18.6125 L2.5035,13.5 Z"
			})))
		},
		"./src/reddit/icons/svgs/RadioOff/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_11Rht_b1e-kmk12gkz7Lug"
			}
		},
		"./src/reddit/icons/svgs/RadioOff/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/RadioOff/index.m.less"),
				c = n.n(a);

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", i({}, e, {
				className: Object(s.a)(c.a.icon, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}), o.a.createElement("g", {
				fill: "inherit"
			}, o.a.createElement("path", {
				d: "M10,1.66666667 C5.39762708,1.66666667 1.66666667,5.39762708 1.66666667,10 C1.66666667,14.6023729 5.39762708,18.3333333 10,18.3333333 C14.6023729,18.3333333 18.3333333,14.6023729 18.3333333,10 C18.3333333,5.39762708 14.6023729,1.66666667 10,1.66666667 Z M10,0 C15.5228475,-1.01453063e-15 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 6.76353751e-16,15.5228475 0,10 C-6.76353751e-16,4.4771525 4.4771525,1.01453063e-15 10,0 Z"
			})))
		},
		"./src/reddit/icons/svgs/RadioOn/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r);

			function s() {
				return (s = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", s({}, e, {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}), o.a.createElement("g", {
				fill: "inherit"
			}, o.a.createElement("path", {
				d: "M10,6.66666667 C8.15905083,6.66666667 6.66666667,8.15905083 6.66666667,10 C6.66666667,11.8409492 8.15905083,13.3333333 10,13.3333333 C11.8409492,13.3333333 13.3333333,11.8409492 13.3333333,10 C13.3333333,8.15905083 11.8409492,6.66666667 10,6.66666667 Z M10,0 C15.5228475,-1.01453063e-15 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 6.76353751e-16,15.5228475 0,10 C-6.76353751e-16,4.4771525 4.4771525,1.01453063e-15 10,0 Z"
			})))
		},
		"./src/reddit/icons/svgs/Search/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				d: "M15.59,13.91l2.78,2.69a1.25,1.25,0,1,1-1.74,1.8l-2.82-2.73a8,8,0,1,1,1.78-1.76ZM14.64,9.2A5.45,5.45,0,1,0,9.2,14.64,5.45,5.45,0,0,0,14.64,9.2Z"
			}))
		},
		"./src/reddit/layout/row/Inline/index.m.less": function(e, t, n) {
			e.exports = {
				inlineRow: "XZK-LTFT5CgGo9MvPQQsy"
			}
		},
		"./src/reddit/layout/row/Inline/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/layout/row/Inline/index.m.less"),
				s = n.n(o);
			t.a = r.a.div("inlineRow", s.a)
		},
		"./src/reddit/reducers/features/avatar/index.ts": function(e, t, n) {
			"use strict";
			var r, o, s = n("./node_modules/redux/es/redux.js"),
				a = n("./src/reddit/actions/snoovatar.ts");
			! function(e) {
				e.PREMIUM = "PREMIUM"
			}(r || (r = {})),
			function(e) {
				e[e.BACKGROUND = 0] = "BACKGROUND", e[e.ACCESSORY_BACK = 1] = "ACCESSORY_BACK", e[e.HAIR_BACK = 2] = "HAIR_BACK", e[e.BODY_BOTTOM = 3] = "BODY_BOTTOM", e[e.BODY = 4] = "BODY", e[e.ACCESSORY = 5] = "ACCESSORY", e[e.FACE_LOWER = 6] = "FACE_LOWER", e[e.FACE_UPPER = 7] = "FACE_UPPER", e[e.HAIR = 8] = "HAIR", e[e.HEAD_ACCESSORY = 9] = "HEAD_ACCESSORY"
			}(o || (o = {}));
			const c = {
				id: "",
				csrf_token: "",
				snoovatar: null,
				websocketsUrls: {
					renderer: "",
					download: ""
				},
				capabilities: [r.PREMIUM],
				hasActiveClosetSubscription: !1
			};
			var i = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a.b:
						return {
							...t.payload
						};
					default:
						return e
				}
			};
			n("./node_modules/core-js/modules/web.dom.iterable.js");
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
					},
					pushcard: null
				},
				l = "avatar_quick_create_event",
				u = "avatar_marketing_event",
				m = "avatar_pushcard",
				p = "avatar_promo_archived";
			var b;
			! function(e) {
				e.MaxEventViews = "targeting:max_event_views", e.Title = "copy:pushcard_title", e.Cta = "copy:pushcard_cta", e.BannerTitle = "copy:banner_title", e.BannerBody = "copy:banner_body", e.Deeplink = "deeplink"
			}(b || (b = {}));
			const f = e => {
					let {
						startsAt: t,
						endsAt: n
					} = e;
					const r = t && new Date(t) <= new Date,
						o = !!n && new Date(n) < new Date;
					return !!r && !o
				},
				v = e => {
					const {
						id: t,
						tags: n,
						webAssetUrls: r
					} = e, [o, s] = r, a = n.reduce((e, t) => {
						if (!t) return e;
						const n = Object.values(b).find(e => t.startsWith(e));
						return n ? (e[n] = t.slice(n.length + 1), e) : e
					}, {});
					return {
						id: t,
						maxViews: parseInt(a[b.MaxEventViews], 10),
						banner: {
							id: t,
							iconUrl: o,
							title: a[b.BannerTitle],
							body: a[b.BannerBody]
						},
						imageUrl: s,
						title: a[b.Title],
						cta: a[b.Cta],
						deeplink: a[b.Deeplink]
					}
				},
				h = e => {
					const t = {};
					return null == e || e.forEach(e => {
						if (null == e ? void 0 : e.startsWith("targeting:")) {
							const n = e.split(":");
							if (!n.length && n.length < 3) return null;
							try {
								t[n[1]] = JSON.parse(n[2])
							} catch {
								t[n[1]] = n[2]
							}
						}
					}), t
				};

			function g(e) {
				const t = {};
				return e.forEach(e => {
					var n;
					const {
						webAssetUrls: r,
						tags: o
					} = e;
					if (!(null == o ? void 0 : o.includes(p))) {
						if ((null == o ? void 0 : o.includes(m)) && r && r.length >= 2 && (t.pushcard = v(e)), null == o ? void 0 : o.includes(l)) {
							const {
								text: n,
								id: s
							} = e, a = r || null, c = h(o);
							t.quickCreateV1 = {
								...c,
								id: s,
								text: n,
								active: f(e) && !!a,
								webAssetUrls: a
							}
						}
						if (null == o ? void 0 : o.includes(u)) {
							const s = r || null,
								a = (null === (n = o.find(e => (null == e ? void 0 : e.startsWith("feature:")) && e.includes("web"))) || void 0 === n ? void 0 : n.split("feature:")[1]) || null;
							t.marketingEvent = {
								active: f(e) && !!s,
								assetUrls: s,
								experimentRequired: a
							}
						}
					}
				}), t
			}
			var O = n("./src/reddit/actions/economics/marketplace/constants.ts"),
				j = n("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				_ = n("./src/reddit/actions/modal.ts"),
				x = n("./src/reddit/constants/modals.ts");
			var w = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				var n, r;
				switch (t.type) {
					case j.s:
						const {
							avatarMarketingEvents: o
						} = t.payload;
						return o ? {
							...d,
							...g(o)
						} : d;
					case O.b:
					case O.c:
					case O.f:
						return (null == e ? void 0 : e.pushcard) ? {
							...e,
							pushcard: {
								...e.pushcard
							}
						} : e;
					case _.c:
						return (null === (n = t.payload) || void 0 === n ? void 0 : n.id) === x.a.SNOOVATAR_MODAL ? {
							...d,
							pushcard: null !== (r = null == e ? void 0 : e.pushcard) && void 0 !== r ? r : null
						} : e;
					default:
						return e
				}
			};
			var y = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a.a: {
						const {
							image: e,
							accessory_ids: n
						} = t.payload;
						return {
							image: e,
							accessoryIds: n
						}
					}
					default:
						return e
				}
			};
			t.a = Object(s.c)({
				marketing: w,
				avatarUser: i,
				randomAvatar: y
			})
		},
		"./src/reddit/reducers/features/creatorStats/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/redux/es/redux.js"),
				o = n("./src/reddit/actions/creatorStats/constants.ts");
			const s = {};
			var a = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.a:
						const {
							postOtherDiscussions: n
						} = t.payload;
						return {
							...e, ...n
						};
					default:
						return e
				}
			};
			const c = {};
			var i = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.a:
						const {
							postStats: n
						} = t.payload;
						return {
							...e, ...n
						};
					default:
						return e
				}
			};
			const d = {};
			var l = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.a:
						const {
							subredditKarma: n
						} = t.payload;
						return {
							...e, ...n
						};
					default:
						return e
				}
			};
			t.a = Object(r.c)({
				postOtherDiscussions: a,
				postStats: i,
				subredditKarma: l
			})
		},
		"./src/reddit/selectors/authorFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return s
			}));
			const r = (e, t) => {
					let {
						post: n
					} = t;
					const r = n.belongsTo.id;
					if (!r) return null;
					const o = e.authorFlair.models[r];
					if (!o) return null;
					const s = n.author;
					return s && o[s] || null
				},
				o = (e, t) => {
					let {
						subredditId: n
					} = t;
					const r = e.authorFlair && e.authorFlair.inContext && e.authorFlair.inContext.username;
					if (!r) return null;
					if (!n) return null;
					const o = e.authorFlair.models[n];
					return o ? o[r] : null
				},
				s = e => e.authorFlair.inContext
		},
		"./src/reddit/selectors/avatar.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return c
			}));
			var r = n("./src/lib/initializeClient/installReducer.ts"),
				o = n("./src/reddit/reducers/features/avatar/index.ts");
			Object(r.a)({
				features: {
					avatar: o.a
				}
			});
			const s = e => {
					var t, n;
					return null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.avatarUser
				},
				a = e => {
					var t, n;
					return null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.avatarUser.csrf_token
				},
				c = e => {
					var t, n;
					return (null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.randomAvatar) || null
				}
		},
		"./src/reddit/selectors/avatarMarketing.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			}));
			var r = n("./src/lib/initializeClient/installReducer.ts"),
				o = n("./src/reddit/reducers/features/avatar/index.ts"),
				s = n("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			Object(r.a)({
				features: {
					avatar: o.a
				}
			});
			const a = e => {
					var t, n;
					return !!(null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.marketing)
				},
				c = e => {
					var t, n, r, o;
					const a = null === (r = null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.marketing) || void 0 === r ? void 0 : r.marketingEvent;
					if (!(null == a ? void 0 : a.active) || !(null === (o = null == a ? void 0 : a.assetUrls) || void 0 === o ? void 0 : o.length)) return null;
					const c = a.assetUrls[0];
					return !a.experimentRequired || Object(s.a)(a.experimentRequired)(e) ? c : null
				}
		},
		"./src/reddit/selectors/creatorStats.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "a", (function() {
				return u
			}));
			var r = n("./src/lib/initializeClient/installReducer.ts"),
				o = n("./src/reddit/reducers/features/creatorStats/index.ts"),
				s = n("./src/reddit/selectors/moderatorPermissions.ts"),
				a = n("./src/reddit/selectors/posts.ts"),
				c = n("./src/reddit/selectors/user.ts");
			Object(r.a)({
				features: {
					creatorStats: o.a
				}
			});
			const i = (e, t) => {
					var n, r;
					return null === (r = null === (n = e.features) || void 0 === n ? void 0 : n.creatorStats) || void 0 === r ? void 0 : r.postOtherDiscussions[t]
				},
				d = (e, t) => {
					var n, r;
					return null === (r = null === (n = e.features) || void 0 === n ? void 0 : n.creatorStats) || void 0 === r ? void 0 : r.postStats[t]
				},
				l = (e, t) => {
					var n, r, o;
					const s = null === (o = null === (r = null === (n = e.features) || void 0 === n ? void 0 : n.creatorStats) || void 0 === r ? void 0 : r.subredditKarma[t]) || void 0 === o ? void 0 : o.karma;
					if (!s) return;
					const {
						fromComments: a,
						fromPosts: c
					} = s;
					return {
						fromComments: a,
						fromPosts: c
					}
				},
				u = (e, t, n) => {
					const r = Object(a.F)(e, {
						postId: t
					});
					if (!r || r.isSponsored || r.removedByCategory) return !1;
					const o = Object(a.U)(e, {
						postId: t
					});
					if (o && o.isQuarantined) return !1;
					const i = !n && !!Object(s.m)(e, {
						postId: t
					});
					return Object(c.Gb)(e, {
						postId: t
					}) || i
				}
		},
		"./src/reddit/selectors/experiments/postActionBarAnimation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "g", (function() {
				return m
			})), n.d(t, "f", (function() {
				return p
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "e", (function() {
				return f
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				s = n("./src/reddit/selectors/experiments/index.ts"),
				a = n("./src/reddit/selectors/experiments/presence.ts"),
				c = n("./src/reddit/selectors/userPrefs.ts");
			const i = 1e4,
				d = e => {
					if (Object(a.a)(e)) return !1;
					const t = Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: r.h
					});
					return t === r.l.VoteCountOnly || t === r.l.CommentCountOnly || t === r.l.VoteAndCommentCount
				},
				l = e => {
					if (Object(c.d)(e) || Object(a.a)(e)) return !1;
					const t = Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: r.h
					});
					return t === r.l.VoteCountOnly || t === r.l.VoteAndCommentCount
				},
				u = e => {
					if (Object(c.d)(e) || Object(a.a)(e)) return !1;
					const t = Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: r.h
					});
					return t === r.l.CommentCountOnly || t === r.l.VoteAndCommentCount
				},
				m = (e, t) => {
					let {
						post: n
					} = t;
					return p(e, {
						postId: n.id
					})
				},
				p = (e, t) => {
					let {
						postId: n
					} = t;
					const o = e.posts.models[n];
					if (Object(c.d)(e) || !o || o.isSponsored || o.isScoreHidden || o.score >= i || Object(a.a)(e)) return !1;
					const d = Object(s.d)(e, {
							experimentName: r.h
						}),
						l = null == d ? void 0 : d.variant;
					return l === r.l.VoteCountOnly || l === r.l.VoteAndCommentCount
				},
				b = (e, t) => {
					let {
						postId: n
					} = t;
					const o = e.posts.models[n];
					if (Object(c.d)(e) || !o || o.isSponsored || o.numComments >= i || Object(a.a)(e)) return !1;
					const d = Object(s.d)(e, {
							experimentName: r.h
						}),
						l = null == d ? void 0 : d.variant;
					return l === r.l.CommentCountOnly || l === r.l.VoteAndCommentCount
				},
				f = e => {
					if (Object(a.a)(e)) return !1;
					return Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: r.Dc
					}) === r.od.Enabled
				}
		},
		"./src/reddit/selectors/experiments/presence.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts");
			const s = e => {
				return Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: r.lf
				}) === r.Ud
			}
		},
		"./src/reddit/selectors/gild.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "f", (function() {
				return s
			})), n.d(t, "g", (function() {
				return a
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "a", (function() {
				return d
			}));
			const r = e => e.gild.gildModalThingId,
				o = e => e.gild.correlationId || void 0,
				s = e => e.gild.isAnonymous,
				a = e => e.gild.isIframed,
				c = e => e.gild.message,
				i = e => e.gild.api.pending,
				d = e => e.gild.api.error
		},
		"./src/reddit/selectors/gold/awardIcon.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return m
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "d", (function() {
				return v
			}));
			var r = n("./src/lib/objectSelector/index.ts"),
				o = n("./src/reddit/models/Gold/Award.ts"),
				s = n("./src/reddit/selectors/commentSelector.ts"),
				a = n("./src/reddit/selectors/gold/giveAwards.ts"),
				c = n("./src/reddit/selectors/posts.ts"),
				i = n("./src/reddit/selectors/user.ts"),
				d = n("./src/reddit/selectors/userPrefs.ts");
			const l = [32, 48, 64, 128],
				u = (e, t, n) => {
					const r = t ? e[`staticIcon${n}`] : e[`icon${n}`];
					return (null == r ? void 0 : r.url) ? r.url : t ? e.staticIcon.url : e.icon.url
				},
				m = e => {
					let {
						award: t,
						size: n,
						prefersReducedMotion: r,
						postOrComment: s
					} = e;
					return t.awardSubType === o.d.Group ? (e => {
						let {
							award: t,
							size: n,
							prefersReducedMotion: r,
							postOrComment: o
						} = e, s = t;
						if ((null == o ? void 0 : o.awardCountsById) && o.awardCountsById[t.id] && t.tiers) {
							const e = o.awardCountsById[t.id];
							s = t.tiers.reduce((t, n) => e >= n.awardingsRequired ? n : t)
						}
						return u(s, r, n)
					})({
						award: t,
						size: n,
						prefersReducedMotion: r,
						postOrComment: s
					}) : u(t, r, n)
				},
				p = Object(r.a)((e, t) => {
					let {
						awards: n,
						minSize: r,
						postOrCommentId: o
					} = t;
					const a = Object(d.d)(e),
						i = l.find(e => e >= r),
						u = o ? Object(c.F)(e, {
							postId: o
						}) || Object(s.c)(e, {
							commentId: o
						}) : void 0;
					return n.reduce((e, t) => (t && (e[t.id] = m({
						award: t,
						size: i,
						prefersReducedMotion: a,
						postOrComment: u
					})), e), {})
				}),
				b = (e, t) => {
					let {
						award: n,
						minSize: r,
						postOrCommentId: o
					} = t;
					return n ? p(e, {
						awards: [n],
						minSize: r,
						postOrCommentId: o
					})[n.id] : void 0
				},
				f = (e, t) => {
					let {
						minSize: n,
						userName: r
					} = t;
					const o = Object(i.Db)(e, {
						userName: r
					});
					if (o && o.awardedLastMonth && o.awardedLastMonth.topAward) return b(e, {
						award: o.awardedLastMonth.topAward,
						minSize: n
					})
				},
				v = e => {
					const t = Object(a.b)(e),
						n = Object(a.a)(e);
					return b(e, {
						award: t,
						postOrCommentId: n || void 0,
						minSize: 512
					})
				}
		},
		"./src/reddit/selectors/gold/giveAwards.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return o
			}));
			const r = e => e.gild.selectedAward,
				o = e => e.gild.gildedThing
		},
		"./src/reddit/selectors/goldPurchaseModals.ts": function(e, t, n) {
			"use strict";
			n.d(t, "r", (function() {
				return a
			})), n.d(t, "t", (function() {
				return c
			})), n.d(t, "s", (function() {
				return i
			})), n.d(t, "v", (function() {
				return d
			})), n.d(t, "u", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "q", (function() {
				return m
			})), n.d(t, "a", (function() {
				return p
			})), n.d(t, "o", (function() {
				return b
			})), n.d(t, "p", (function() {
				return f
			})), n.d(t, "c", (function() {
				return v
			})), n.d(t, "h", (function() {
				return h
			})), n.d(t, "l", (function() {
				return g
			})), n.d(t, "x", (function() {
				return O
			})), n.d(t, "y", (function() {
				return j
			})), n.d(t, "w", (function() {
				return _
			})), n.d(t, "z", (function() {
				return x
			})), n.d(t, "f", (function() {
				return w
			})), n.d(t, "g", (function() {
				return y
			})), n.d(t, "i", (function() {
				return C
			})), n.d(t, "k", (function() {
				return k
			})), n.d(t, "m", (function() {
				return I
			})), n.d(t, "j", (function() {
				return E
			})), n.d(t, "n", (function() {
				return P
			})), n.d(t, "e", (function() {
				return S
			})), n.d(t, "d", (function() {
				return T
			}));
			var r = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				o = n("./src/lib/initializeClient/installReducer.ts"),
				s = n("./src/reddit/reducers/features/goldPurchase/index.ts");
			Object(o.a)({
				features: {
					goldPurchase: s.a
				}
			});
			const a = e => e.features.goldPurchase.purchaseModal.activePage,
				c = e => e.features.goldPurchase.purchaseModal.gildThingId || void 0,
				i = e => e.features.goldPurchase.purchaseModal.correlationId || void 0,
				d = e => e.features.goldPurchase.purchaseModal.showModal,
				l = e => e.features.goldPurchase.purchaseModal.packageId,
				u = e => e.features.goldPurchase.packageOfferModal.packageId,
				m = e => e.features.goldPurchase.premiumPurchaseModal.renewInterval,
				p = e => {
					const t = Object(r.i)(e),
						n = (e => e.features.goldPurchase.premiumPurchaseModal.packageId)(e);
					return t.length && n && t.find(e => e.mobileId === n) || null
				},
				b = e => e.features.goldPurchase.premiumPurchaseModal.activePage,
				f = e => e.features.goldPurchase.premiumPurchaseModal.showModal,
				v = e => e.features.goldPurchase.payment.paymentMethod,
				h = e => e.features.goldPurchase.payment.cardName,
				g = e => e.features.goldPurchase.payment.postalCode,
				O = e => e.features.goldPurchase.payment.savedCardsPending,
				j = e => e.features.goldPurchase.payment.savedCards,
				_ = e => e.features.goldPurchase.payment.rememberCard,
				x = e => e.features.goldPurchase.payment.useSavedCard,
				w = e => e.features.goldPurchase.payment.cardValidation.cardCvc,
				y = e => e.features.goldPurchase.payment.cardValidation.cardExpiry,
				C = e => e.features.goldPurchase.payment.cardValidation.cardNumber,
				k = e => e.features.goldPurchase.payment.cardValidation.nameOnCard,
				I = e => e.features.goldPurchase.payment.cardValidation.postalCode,
				E = e => e.features.goldPurchase.payment.stripeToken.errorMessage,
				P = e => e.features.goldPurchase.payment.stripeToken.pending,
				S = e => e.features.goldPurchase.payment.paypal.passthrough,
				T = e => e.features.goldPurchase.payment.paypal.errorMessage
		},
		"./src/reddit/selectors/userPrefs.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "a", (function() {
				return i
			}));
			var r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/selectors/user.ts");
			const s = e => {
					const t = Object(o.S)(e);
					if (a(e)) return !1;
					const {
						subscriptionsPinned: n
					} = e.user.prefs;
					return void 0 === n && !t || !!n
				},
				a = e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== r.Sb.MODERATION_PAGES),
				c = e => e.user.prefs.reduceAnimationsFromAwards,
				i = e => !!e.user.prefs.over18
		},
		"./src/reddit/singleton/EventSystem.ts": function(e, t, n) {
			"use strict";
			var r = n("./src/config.ts"),
				o = n("./src/lib/fastdom/index.ts"),
				s = n("./src/reddit/actions/jsApi.ts");
			const a = "JSAPI customEvent.detail.name is deprecated. Please upgrade to <meta>",
				c = "jsapi.consumer",
				i = "/r/redesign/wiki/jsapi";
			var d = n("./src/reddit/constants/jsapiEvents.ts");
			const l = 100;
			const u = new class {
				constructor() {
					if (this.queue = [], this.active = !1, "undefined" == typeof document) return;
					let e;
					this.store = new Promise(t => e = t), this.attachStore = t => e(t);
					const t = document.querySelectorAll(`meta[name="${c}"]`);
					t.length && (t.forEach(e => {
						const t = e.content;
						this.store.then(e => e.dispatch(s.b(t)))
					}), this.store.then(() => this.fireEventsQueue())), document.addEventListener(d.b, e => this.onReadyEvent(e), !0)
				}
				onReadyEvent(e) {
					let t;
					if (this.active = !0, e.target && e.target instanceof HTMLMetaElement && e.target.name === c && (t = e.target.content), !t) try {
						e.detail && (t = e.detail.name, console.warn(a, `${r.a.redditUrl}${i}`, e))
					} catch (n) {
						return void console.error(a, `${r.a.redditUrl}${i}`, n)
					}
					this.store.then(e => {
						e.dispatch(s.b(t || "")), this.fireEventsQueue()
					})
				}
				publish(e, t, n) {
					const r = {
						name: e,
						props: t,
						element: n
					};
					this.queue.push(r), this.queue.length > l && this.queue.shift(), this.active && this.fireEvent(r)
				}
				fireEvent(e) {
					e.element.dispatchEvent(new CustomEvent(e.name, {
						detail: e.props
					}))
				}
				fireEventsQueue() {
					o.a.read(() => {
						for (let e = 0; e < this.queue.length; e++) {
							const t = this.queue[e];
							this.fireEvent(t)
						}
					})
				}
			};
			t.a = u
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compone~9b425435.d4a94289f47762f32de3.js.map