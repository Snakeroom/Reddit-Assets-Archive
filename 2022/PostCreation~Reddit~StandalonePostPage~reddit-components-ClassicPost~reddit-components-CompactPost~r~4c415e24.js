// https://www.redditstatic.com/desktop2x/PostCreation~Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~r~4c415e24.7452532e47b9306620d4.js
// Retrieved at 9/12/2022, 2:10:03 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PostCreation~Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~r~4c415e24"], {
		"./src/reddit/actions/gold/communityAwards/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "i", (function() {
				return c
			})), n.d(t, "d", (function() {
				return s
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "f", (function() {
				return i
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "j", (function() {
				return p
			})), n.d(t, "g", (function() {
				return f
			})), n.d(t, "h", (function() {
				return v
			}));
			var r = n("./src/lib/loadableAction/index.ts");
			const o = e => () => n.e("CommunityAwards").then(n.bind(null, "./src/reddit/actions/gold/communityAwards/communityAwards.ts")).then(t => t[e]),
				a = Object(r.a)(o("awardSheetInfoRequested")),
				c = Object(r.a)(o("manageableAwardsRequested")),
				s = Object(r.a)(o("createCommunityAward")),
				d = Object(r.a)(o("createGlobalAward")),
				i = Object(r.a)(o("createModAward")),
				u = Object(r.a)(o("createAwardFailed")),
				l = Object(r.a)(o("createAwardSuccessful")),
				p = Object(r.a)(o("removeCommunityAward")),
				f = Object(r.a)(o("disableAwardinCommunity")),
				v = Object(r.a)(o("enableAwardinCommunity"))
		},
		"./src/reddit/actions/gold/modals.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return g
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "d", (function() {
				return w
			})), n.d(t, "c", (function() {
				return j
			})), n.d(t, "a", (function() {
				return _
			})), n.d(t, "f", (function() {
				return I
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/lib/postParentMessage/index.ts"),
				a = n("./src/reddit/helpers/isPost.ts"),
				c = n("./src/reddit/constants/modals.ts"),
				s = n("./src/reddit/selectors/gild.ts"),
				d = n("./src/reddit/helpers/correlationIdTracker.ts"),
				i = n("./src/reddit/actions/gold/communityAwards/index.ts"),
				u = n("./src/reddit/actions/modal.ts"),
				l = n("./src/reddit/selectors/communityAwards.ts"),
				p = n("./src/reddit/selectors/posts.ts"),
				f = n("./src/reddit/selectors/subreddit.ts"),
				v = n("./src/telemetry/index.ts"),
				m = n("./src/reddit/actions/gold/constants.ts");
			const g = Object(r.a)(m.K),
				h = Object(r.a)(m.f),
				b = () => async (e, t) => {
					const r = t();
					e(h()), Object(d.b)(d.a.GiftPremiumFlow);
					const {
						clickCloseModalEvent: o
					} = await n.e("givePremiumTrackers").then(n.bind(null, "./src/reddit/helpers/trackers/givePremium.ts"));
					Object(v.a)(o()(r))
				}, y = Object(r.a)(m.J), w = e => {
					let {
						awardId: t,
						correlationId: n,
						thingId: r
					} = e;
					return async (e, o) => {
						const s = o(),
							d = t ? Object(l.a)(s, t) : void 0;
						e(y({
							award: d && d.isEnabled ? d : void 0,
							thingId: r,
							correlationId: n
						})), e(Object(u.h)(c.a.GOLD_GILD_MODAL));
						const v = Object(f.L)(s, {
							thingId: r
						});
						let m = null;
						if (v) m = v.id;
						else if (Object(a.a)(r)) {
							const e = Object(p.G)(s, {
								postId: r
							});
							e && (m = e.belongsTo.id)
						}
						m && Object(i.a)(m, r)
					}
				}, O = Object(r.a)(m.e), j = Object(r.a)(m.I), _ = () => async (e, t) => {
					const r = t(),
						a = Object(s.d)(r);
					if (Object(s.g)(r)) {
						const e = "close.gild";
						Object(o.a)({
							type: e
						})
					}
					e(O()), e(Object(u.g)(c.a.GOLD_GILD_MODAL));
					const {
						clickCloseGildModalEvent: i
					} = await Promise.resolve().then(n.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
					Object(v.a)(i(a)(r)), Object(d.b)(d.a.GildingFlow)
				}, I = () => async () => {
					Object(o.a)({
						type: "login.gild"
					})
				}
		},
		"./src/reddit/actions/inContextModeration.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "d", (function() {
				return s
			}));
			var r = n("./src/lib/makeActionCreator/index.ts");
			const o = "INCONTEXT__BANNED",
				a = "INCONTEXT__MUTED",
				c = Object(r.a)(o),
				s = Object(r.a)(a)
		},
		"./src/reddit/actions/moderationLog/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return o
			}));
			const r = "SUBREDDIT__MODERATION_LOG_LOADED",
				o = "SUBREDDIT__ALL_MODERATORS_LOADED"
		},
		"./src/reddit/actions/snoovatar.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return v
			})), n.d(t, "a", (function() {
				return g
			})), n.d(t, "e", (function() {
				return b
			})), n.d(t, "c", (function() {
				return y
			})), n.d(t, "d", (function() {
				return w
			}));
			var r = n("./src/lib/initializeClient/installReducer.ts"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/lib/sentry/index.ts"),
				c = n("./src/config.ts"),
				s = n("./src/lib/constants/index.ts"),
				d = n("./src/lib/makeApiRequest/index.ts"),
				i = n("./src/lib/omitHeaders/index.ts"),
				u = n("./src/reddit/constants/headers.ts");
			var l = n("./src/reddit/reducers/features/avatar/index.ts"),
				p = n("./src/reddit/selectors/avatar.ts"),
				f = n("./src/reddit/actions/users.ts");
			Object(r.a)({
				features: {
					avatar: l.a
				}
			});
			const v = "SET_AVATAR_USER",
				m = Object(o.a)(v),
				g = "RANDOM_AVATAR_LOADED",
				h = Object(o.a)(g),
				b = (e, t, n) => async (r, o, a) => {
					let {
						apiContext: l
					} = a;
					var v, m, g, h;
					const b = Object(p.b)(o()),
						y = await (async (e, t, n, r, o) => Object(d.a)(Object(i.a)(e, [u.a]), {
							endpoint: `${c.a.snoovatarUrl}/api/snoovatar?skip_telemetry=true`,
							method: s.mb.POST,
							headers: {
								"Content-Type": "application/json ",
								"X-CSRF-Token": o || ""
							},
							data: {
								accessory_ids: t,
								styles: n,
								...r
							}
						}))(l(), e, t, n, b);
					if (!y.ok) throw new Error("User avatar failed to save");
					return r(Object(f.A)(y.body)), {
						accountIcon: null === (m = null === (v = y.body) || void 0 === v ? void 0 : v.avatar) || void 0 === m ? void 0 : m.headshot_image_url,
						fullBodySnoovatar: null === (h = null === (g = y.body) || void 0 === g ? void 0 : g.avatar) || void 0 === h ? void 0 : h.image_url
					}
				}, y = () => async (e, t, n) => {
					let {
						apiContext: r
					} = n;
					try {
						const t = await (async e => Object(d.a)(Object(i.a)(e, [u.a]), {
							endpoint: `${c.a.snoovatarUrl}/api/account`,
							method: s.mb.GET
						}))(r());
						t.ok && e(m(t.body))
					} catch (o) {
						a.c.captureException(o)
					}
				}, w = () => async (e, t, n) => {
					let {
						apiContext: r
					} = n;
					try {
						const t = await (async e => Object(d.a)(Object(i.a)(e, [u.a]), {
							endpoint: `${c.a.snoovatarUrl}/api/snoovatars/random:byId`,
							method: s.mb.GET
						}))(r());
						t.ok && e(h(t.body))
					} catch (o) {
						a.c.captureException(o)
					}
				}
		},
		"./src/reddit/actions/snoovatarModal.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			})), n.d(t, "b", (function() {
				return l
			}));
			var r = n("./src/reddit/actions/login.ts"),
				o = n("./src/reddit/actions/modal.ts"),
				a = n("./src/reddit/actions/users.ts"),
				c = n("./src/reddit/constants/modals.ts"),
				s = n("./src/reddit/helpers/trackers/snoovatar.ts"),
				d = n("./src/reddit/selectors/user.ts"),
				i = n("./src/telemetry/index.ts");
			const u = () => async (e, t) => {
				const n = t();
				Object(i.a)(Object(s.l)(n)), e(Object(a.t)({
					forceFetch: !0
				})), await e(Object(o.g)(c.a.SNOOVATAR_MODAL))
			};

			function l() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
				return async (t, n) => {
					const {
						clickSource: a,
						share: u,
						source: l,
						activeTab: p,
						activeMeSubpage: f,
						activeDetails: v,
						shopTabState: m
					} = e, g = n();
					a && Object(i.a)(Object(s.g)(a)(g)), Object(d.Q)(g) ? await t(Object(o.h)(c.a.SNOOVATAR_MODAL, {
						share: u,
						source: l,
						activeTab: p,
						activeMeSubpage: f,
						activeDetails: v,
						shopTabState: m
					})) : await t(Object(r.openLoginModal)())
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
				a = n.n(o),
				c = n("./src/higherOrderComponents/asModal/index.tsx"),
				s = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				d = n("./src/reddit/controls/TextButton/index.tsx"),
				i = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				u = n("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				l = n.n(u);
			const p = e => e.preventDefault();
			t.a = Object(c.a)(e => a.a.createElement(s.e, null, a.a.createElement(s.i, null, a.a.createElement(i.a, null, a.a.createElement(s.q, null, e.headerText || r.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), a.a.createElement(d.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, a.a.createElement(s.b, null)))), a.a.createElement(s.l, null, a.a.createElement(s.p, {
				className: l.a.ModalText
			}, e.modalText)), a.a.createElement(s.g, null, !e.hideCancelButton && a.a.createElement(s.a, {
				className: l.a.buttonWidth,
				onMouseDown: p,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || r.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), a.a.createElement(s.u, {
				className: l.a.buttonWidth,
				onMouseDown: p,
				onClick: t => {
					e.onConfirm(), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
				},
				"data-redditstyle": !e.disableRedditStyle,
				disabled: e.isDisabled
			}, e.actionText))))
		},
		"./src/reddit/components/InfoTextTooltip/Hooked.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/components/InfoTextTooltip/hooked.m.less"),
				s = n.n(c);

			function d() {
				return (d = Object.assign || function(e) {
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
				const [c, i] = Object(r.useState)(t);
				return Object(r.useEffect)(() => {
					let e = window.setTimeout(() => {
						e = void 0, i(t)
					}, 0);
					return () => {
						e && window.clearTimeout(e), i(!1)
					}
				}, [t]), t ? o.a.createElement("div", d({
					className: Object(a.a)(s.a.tooltip, n.className, {
						[s.a.visible]: c
					})
				}, n.popperProps), n.children, c && o.a.createElement("div", d({
					className: s.a.arrow
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
				a = n.n(o);
			const c = n("./src/lib/lessComponent.tsx").a.wrapped(r.a, "SubredditName", a.a);
			t.a = c
		},
		"./src/reddit/helpers/trackers/commentsChat.ts": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return u
			})), n.d(t, "j", (function() {
				return p
			})), n.d(t, "f", (function() {
				return f
			})), n.d(t, "c", (function() {
				return v
			})), n.d(t, "d", (function() {
				return m
			})), n.d(t, "b", (function() {
				return g
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "k", (function() {
				return y
			})), n.d(t, "g", (function() {
				return w
			})), n.d(t, "h", (function() {
				return O
			}));
			var r = n("./src/lib/makeCommentsPageKey/index.ts"),
				o = n("./src/reddit/constants/tracking.ts"),
				a = n("./src/reddit/selectors/comments.ts"),
				c = n("./src/reddit/selectors/commentSelector.ts"),
				s = n("./src/reddit/selectors/telemetry.ts"),
				d = n("./src/telemetry/models/Event.ts");
			const i = (e, t) => ({
					...Object(s.n)(e),
					subreddit: Object(s.ib)(e),
					profile: Object(s.S)(e),
					post: Object(s.J)(e, t),
					comment: Object(s.h)(e, t)
				}),
				u = (e, t) => {
					const n = Object(c.b)(e, {
							commentId: t
						}),
						o = n && Object(r.a)(n.postId);
					if (!n || !o) return null;
					const d = {
							commentId: t,
							commentsPageKey: o
						},
						i = t && o && Object(a.j)(e, d) || 0;
					return Object(s.y)(e, void 0, {
						depth: i
					})
				},
				l = e => {
					var t;
					return null !== (t = e.split("chat_reaction_")[1]) && void 0 !== t ? t : ""
				},
				p = (e, t) => n => ({
					action: "load",
					noun: e,
					post: Object(s.J)(n, t),
					source: d.b.ChatView,
					subreddit: Object(s.ib)(n)
				}),
				f = (e, t) => n => ({
					...i(n, t),
					source: "live_post",
					action: o.c.CLICK,
					noun: e,
					actionInfo: {
						reason: "live_post",
						pageType: "actions_menu"
					},
					listing: u(n, t)
				}),
				v = e => t => ({
					...i(t, e),
					source: "chat_post",
					action: o.c.VIEW,
					noun: "last_message"
				}),
				m = e => t => ({
					...i(t, e),
					source: "chat_post",
					action: o.c.SUBMIT,
					noun: "reply",
					post: Object(s.J)(t, e),
					comment: Object(s.h)(t, e),
					actionInfo: Object(s.d)(t, {
						reason: "live_post",
						type: "live_post"
					})
				}),
				g = e => t => ({
					...i(t, e),
					source: "chat_post",
					action: o.c.CLICK,
					noun: "comment",
					actionInfo: Object(s.d)(t, {
						pageType: "user_mention",
						reason: "live_post",
						type: "live_post"
					})
				}),
				h = e => t => ({
					...i(t, e),
					source: "chat_post",
					action: o.c.VIEW,
					noun: "warning",
					post: Object(s.J)(t, e),
					actionInfo: {
						pageType: "spam_rate_countdown"
					}
				}),
				b = e => t => ({
					...i(t, e),
					source: "chat_post",
					action: o.c.CLOSE,
					noun: "warning",
					post: Object(s.J)(t, e),
					actionInfo: {
						pageType: "spam_rate_countdown"
					}
				}),
				y = e => t => ({
					...i(t, e),
					source: "global",
					action: o.c.VIEW,
					noun: "screen",
					actionInfo: {
						reason: "live_post",
						pageType: "given_awards_list"
					},
					listing: u(t, e)
				}),
				w = (e, t, n) => r => ({
					...i(r, t),
					source: d.b.Chat,
					action: o.c.CLICK,
					noun: "reaction",
					actionInfo: {
						pageType: n,
						reason: l(e)
					},
					chat: {
						type: "live_post"
					},
					listing: u(r, t)
				}),
				O = (e, t, n) => r => ({
					...i(r, t),
					source: d.b.Chat,
					action: o.c.DELETE,
					noun: "reaction",
					actionInfo: {
						pageType: n,
						reason: l(e)
					},
					chat: {
						type: "live_post"
					},
					listing: u(r, t)
				})
		},
		"./src/reddit/helpers/trackers/communityAwards.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "g", (function() {
				return u
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "f", (function() {
				return p
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "d", (function() {
				return v
			})), n.d(t, "h", (function() {
				return g
			})), n.d(t, "i", (function() {
				return h
			}));
			var r = n("./src/reddit/models/Gold/Award.ts"),
				o = n("./src/reddit/selectors/telemetry.ts"),
				a = n("./src/reddit/helpers/correlationIdTracker.ts"),
				c = n("./src/reddit/helpers/trackers/gild.ts");
			const s = e => ({
					...o.n(e),
					screen: o.ab(e),
					subreddit: o.ib(e),
					userSubreddit: o.sb(e)
				}),
				d = e => ({
					awardId: e.id,
					awardName: e.name,
					isModAward: e.awardType === r.f.Moderator,
					isTemporatyAward: !!e.endsAt,
					numberCoins: e.coinPrice,
					numberMonths: Math.floor((e.daysOfPremium || 0) / 30),
					numberCoinsToRecipient: e.coinReward || 0,
					numberCoinsToCommunity: e.subredditCoinReward || 0,
					type: Object(c.getAwardTypeFromAward)(e)
				}),
				i = () => e => ({
					...s(e),
					source: "awards",
					action: "click",
					correlationId: Object(a.c)(a.a.AwardCreationFlow),
					noun: "create"
				}),
				u = e => t => ({
					...s(t),
					source: "awards",
					action: "click",
					correlationId: Object(a.c)(a.a.AwardDeletionFlow),
					noun: "delete",
					goldPurchase: e ? d(e) : null,
					media: e ? {
						url: e.icon.url
					} : null
				}),
				l = (e, t, n) => r => ({
					...s(r),
					source: "create_award",
					action: e,
					correlationId: Object(a.c)(a.a.AwardCreationFlow),
					noun: t,
					goldPurchase: n
				}),
				p = (e, t, n, r) => o => ({
					...s(o),
					source: "create_award",
					action: "upload",
					correlationId: Object(a.c)(a.a.AwardCreationFlow),
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
				f = (e, t, n) => r => ({
					...s(r),
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
					goldPurchase: n ? d(n) : null
				}),
				v = (e, t, n) => r => ({
					...s(r),
					source: "create_award",
					action: e,
					correlationId: Object(a.c)(a.a.AwardCreationFlow),
					noun: t,
					goldPurchase: n ? d(n) : null
				}),
				m = (e, t, n) => r => ({
					...s(r),
					source: "awards",
					action: "click",
					noun: n,
					goldPurchase: d(e),
					profile: o.T(r, t),
					subreddit: o.jb(r, t)
				}),
				g = (e, t) => m(e, t, "disable_in_community"),
				h = (e, t) => m(e, t, "enable_in_community")
		},
		"./src/reddit/helpers/trackers/gild.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "getAwardTypeFromAward", (function() {
				return l
			})), n.d(t, "clickGildEvent", (function() {
				return v
			})), n.d(t, "clickRpanGiveAward", (function() {
				return m
			})), n.d(t, "clickAddAward", (function() {
				return g
			})), n.d(t, "clickHideAward", (function() {
				return h
			})), n.d(t, "clickConfirmHideAward", (function() {
				return b
			})), n.d(t, "clickCancelHideAward", (function() {
				return y
			})), n.d(t, "clickAwardReportFlow", (function() {
				return O
			})), n.d(t, "clickCancelAwardReportFlow", (function() {
				return j
			})), n.d(t, "clickFlagAwardUsage", (function() {
				return _
			})), n.d(t, "clickCancelFlagAwardUsage", (function() {
				return I
			})), n.d(t, "clickConfirmFlagAwardUsage", (function() {
				return k
			})), n.d(t, "clickReportAward", (function() {
				return C
			})), n.d(t, "clickCancelReportAward", (function() {
				return A
			})), n.d(t, "clickConfirmReportAward", (function() {
				return P
			})), n.d(t, "viewGildModalEvent", (function() {
				return x
			})), n.d(t, "clickSelectAwardEvent", (function() {
				return T
			})), n.d(t, "triggerAnonymousEvent", (function() {
				return M
			})), n.d(t, "clickMessageInputEvent", (function() {
				return E
			})), n.d(t, "typeMessageInputEvent", (function() {
				return S
			})), n.d(t, "clickLearnMoreLinkEvent", (function() {
				return R
			})), n.d(t, "clickQuestionMarkEvent", (function() {
				return G
			})), n.d(t, "clickConfirmAwardEvent", (function() {
				return L
			})), n.d(t, "clickGetPremiumEvent", (function() {
				return N
			})), n.d(t, "clickAddCoinsButtonEvent", (function() {
				return D
			})), n.d(t, "clickNextButtonEvent", (function() {
				return U
			})), n.d(t, "clickCloseGildModalEvent", (function() {
				return F
			})), n.d(t, "viewKarmaSuccessEvent", (function() {
				return q
			})), n.d(t, "clickFilterEvent", (function() {
				return K
			})), n.d(t, "clickNextFiltersEvent", (function() {
				return B
			})), n.d(t, "clickPreviousFiltersEvent", (function() {
				return z
			}));
			var r = n("./src/reddit/helpers/trackers/commentsChat.ts"),
				o = n("./src/reddit/models/Gold/Award.ts"),
				a = n("./src/reddit/selectors/commentSelector.ts"),
				c = n("./src/reddit/selectors/telemetry.ts"),
				s = n("./src/telemetry/models/GoldPurchase.ts"),
				d = n("./src/reddit/helpers/correlationIdTracker.ts"),
				i = n("./src/reddit/helpers/isComment.ts"),
				u = n("./src/reddit/selectors/gild.ts");
			const l = e => e.awardType === o.f.Global && e.awardSubType === o.d.Appreciation ? s.GoldPurchaseType.GidAppreciation : e.awardType === o.f.Global && e.awardSubType === o.d.Premium ? s.GoldPurchaseType.GidPremium : e.awardSubType === o.d.Group ? s.GoldPurchaseType.GidGroup : e.awardType === o.f.Community ? s.GoldPurchaseType.GidCommunity : e.awardType === o.f.Moderator ? s.GoldPurchaseType.GidMod : e.awardType === o.f.Global && e.awardSubType === o.d.Global ? s.GoldPurchaseType.GidGlobal : s.GoldPurchaseType.GidUnknown,
				p = (e, t) => ({
					awardId: e.id,
					awardName: e.name,
					isTemporaryAward: !!e.endsAt,
					numberCoinsToRecipient: e.coinReward,
					type: l(e),
					...t
				}),
				f = (e, t, n) => {
					const o = t && Object(a.f)(e, {
						commentId: t
					});
					return {
						...c.n(e),
						actionInfo: c.d(e, {
							reason: o ? "live_post" : void 0,
							...n
						}),
						comment: t ? c.h(e, t) : void 0,
						correlationId: Object(u.b)(e) || Object(d.d)(d.a.GildingFlow, !1),
						post: t ? c.J(e, t) : void 0,
						screen: c.ab(e),
						subreddit: c.ib(e),
						userSubreddit: c.sb(e),
						listing: t ? Object(r.i)(e, t) : void 0
					}
				},
				v = (e, t) => n => ({
					...f(n, e, t),
					source: Object(i.a)(e) ? "comment" : "post",
					action: "click",
					noun: "give_gold",
					feed: c.q(n)
				}),
				m = e => t => ({
					...f(t, e),
					source: "stream_player",
					action: "click",
					noun: "give_gold"
				}),
				g = e => t => ({
					...f(t, e),
					source: Object(i.a)(e) ? "comment" : "post",
					action: "click",
					noun: "add_award",
					feed: c.q(t)
				}),
				h = (e, t) => n => ({
					...f(n, t),
					source: Object(i.a)(t) ? "comment" : "post",
					action: "click",
					noun: "hide_award",
					goldPurchase: p(e)
				}),
				b = (e, t) => n => ({
					...f(n, t),
					source: Object(i.a)(t) ? "comment" : "post",
					action: "click",
					noun: "confirm_hide_award",
					goldPurchase: p(e)
				}),
				y = (e, t) => n => ({
					...f(n, t),
					source: Object(i.a)(t) ? "comment" : "post",
					action: "click",
					noun: "cancel_hide_award",
					goldPurchase: p(e)
				}),
				w = e => (t, n) => r => ({
					...f(r, n),
					source: Object(i.a)(n) ? "comment" : "post",
					action: "click",
					noun: e,
					goldPurchase: p(t)
				}),
				O = w("award_hovercard_report"),
				j = w("cancel_award_hovercard_report"),
				_ = w("flag_award"),
				I = w("cancel_flag_award"),
				k = w("confirm_flag_award"),
				C = w("report_community_award"),
				A = w("cancel_report_community_award"),
				P = w("confirm_report_community_award"),
				x = (e, t, n) => r => ({
					...f(r, n),
					source: "give_gold",
					action: "view",
					noun: "page",
					goldPurchase: {
						defaultOption: e,
						defaultAnonymous: t
					}
				}),
				T = (e, t, n) => r => ({
					...f(r, t),
					source: "give_gold",
					action: "click",
					noun: "award",
					goldPurchase: p(e, n)
				}),
				M = (e, t) => n => ({
					...f(n, t),
					source: "give_gold",
					action: e,
					noun: "anonymous"
				}),
				E = e => t => ({
					...f(t, e),
					source: "give_gold",
					action: "click",
					noun: "message_input"
				}),
				S = e => t => ({
					...f(t, e),
					source: "give_gold",
					action: "type",
					noun: "message_input"
				}),
				R = e => t => ({
					...f(t, e),
					source: "give_gold",
					action: "click",
					noun: "learn_more"
				}),
				G = e => t => ({
					...f(t, e),
					source: "give_gold",
					action: "click",
					noun: "question"
				}),
				L = (e, t) => n => ({
					...f(n, e),
					source: "give_gold",
					action: "click",
					noun: "confirm",
					goldPurchase: {
						contentType: Object(i.a)(e) ? "comment" : "post",
						...p(t)
					}
				}),
				N = (e, t) => n => ({
					...f(n, e),
					source: "give_gold",
					action: "click",
					noun: "get_premium",
					goldPurchase: {
						contentType: Object(i.a)(e) ? "comment" : "post",
						...p(t)
					}
				}),
				D = e => t => ({
					...f(t, e),
					source: "give_gold",
					action: "click",
					noun: "add_coins"
				}),
				U = e => t => ({
					...f(t, e),
					source: "give_gold",
					action: "click",
					noun: "next"
				}),
				F = e => t => ({
					...f(t, e),
					source: "give_gold",
					action: "click",
					noun: "close"
				}),
				q = e => {
					let {
						award: t,
						awardeeKarmaEarned: n,
						awarderKarmaEarned: r,
						numberCoins: o,
						thingId: a
					} = e;
					return e => ({
						...f(e, a),
						source: "give_gold",
						action: "view",
						noun: "karma_success",
						goldPurchase: {
							contentType: Object(i.a)(a) ? "comment" : "post",
							awardeeKarmaEarned: n,
							awarderKarmaEarned: r,
							numberCoins: o,
							...p(t)
						}
					})
				},
				K = e => t => ({
					...f(t),
					source: "give_gold",
					action: "click",
					noun: "filter",
					goldPurchase: {
						filterId: e.tag,
						filterName: e.content.markdown
					}
				}),
				B = () => e => ({
					...f(e),
					source: "give_gold",
					action: "click",
					noun: "next_filters"
				}),
				z = () => e => ({
					...f(e),
					source: "give_gold",
					action: "click",
					noun: "previous_filters"
				})
		},
		"./src/reddit/helpers/trackers/goldPayment.ts": function(e, t, n) {
			"use strict";
			n.d(t, "h", (function() {
				return m
			})), n.d(t, "b", (function() {
				return g
			})), n.d(t, "f", (function() {
				return h
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "e", (function() {
				return y
			})), n.d(t, "c", (function() {
				return w
			})), n.d(t, "a", (function() {
				return O
			})), n.d(t, "g", (function() {
				return j
			})), n.d(t, "i", (function() {
				return _
			})), n.d(t, "j", (function() {
				return I
			}));
			var r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/models/Gold/ProductOffer.ts"),
				a = n("./src/reddit/selectors/gold/giveAwards.ts"),
				c = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				s = n("./src/reddit/selectors/goldPurchaseModals.ts"),
				d = n("./src/reddit/selectors/telemetry.ts"),
				i = n("./src/telemetry/models/GoldPurchase.ts"),
				u = n("./src/telemetry/models/Payment.ts"),
				l = n("./src/reddit/helpers/trackers/gild.ts"),
				p = n("./src/reddit/helpers/correlationIdTracker.ts"),
				f = n("./src/reddit/helpers/isComment.ts"),
				v = n("./src/reddit/helpers/trackers/communityAwards.ts");
			const m = (e, t) => {
					const {
						thingId: n,
						packageId: u
					} = t, m = !!n, g = a.b(e), h = g ? Object(l.getAwardTypeFromAward)(g) : null, b = m ? h : s.o(e) ? i.GoldPurchaseType.Premium : i.GoldPurchaseType.Coins, y = n ? Object(f.a)(n) ? "comment" : "post" : void 0, w = u || s.t(e), O = [...Object(c.d)(e), ...Object(c.f)(e)].filter(e => e.mobileId === w)[0], j = t.offerContext || (g && 0 === g.coinPrice ? o.a.StorefrontFreeAward : Object(o.d)(O, m)), _ = O ? Math.round(1e4 * (O.baselinePennies - O.pennies) / O.baselinePennies) / 100 : 0, I = O ? Math.round(1e4 * (O.coins - O.baselineCoins) / O.coins) / 100 : 0, k = O ? O.baselinePennies !== O.pennies ? `${_}_percent_price` : O.baselineCoins !== O.coins ? `${I}_percent_bonus` : void 0 : void 0, C = b === i.GoldPurchaseType.Premium ? r.Bb : O ? O.pennies : void 0;
					return {
						...d.n(e),
						comment: n ? d.h(e, n) : null,
						correlationId: s.r(e) || Object(p.d)(p.a.GoldPayment, !1),
						post: n ? d.J(e, n) : null,
						screen: d.ab(e),
						subreddit: n ? d.ib(e) : null,
						goldPurchase: {
							...g ? Object(v.a)(g) : null,
							type: b,
							gildedContent: m,
							contentType: y,
							numberCoins: O ? O.coins : void 0,
							offerContext: j,
							offerType: k
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
				g = (e, t, n) => r => ({
					...m(r, {
						packageId: t,
						thingId: e,
						offerContext: n
					}),
					source: "gold_payment",
					action: "click",
					noun: "close"
				}),
				h = e => t => ({
					...m(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "paypal"
				}),
				b = e => t => ({
					...m(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "continue_paypal"
				}),
				y = e => t => ({
					...m(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "credit_card"
				}),
				w = e => t => ({
					...m(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "complete_credit_card"
				}),
				O = (e, t) => n => ({
					...m(n, {
						packageId: e,
						offerContext: t
					}),
					source: "gold_payment",
					action: "click",
					noun: "confirm"
				}),
				j = e => t => ({
					...m(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "display",
					noun: "error"
				}),
				_ = (e, t, n) => r => {
					const o = m(r, {
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
							defaultOption: u.PaymentMethod.Paypal
						},
						goldPurchase: {
							...o.goldPurchase,
							source: e ? i.GiveGold : s.o(r) ? i.PremiumMarketing : i.CoinsMarketing
						}
					}
				},
				I = e => t => {
					var n;
					const r = m(t, {
						thingId: e
					});
					return {
						...r,
						source: "gold_payment",
						action: "view",
						noun: "success",
						payment: {
							...r.payment,
							method: (null === (n = t.platform.currentPage) || void 0 === n ? void 0 : n.queryParams.thanks) ? u.PaymentMethod.Paypal : u.PaymentMethod.CreditCard
						}
					}
				}
		},
		"./src/reddit/helpers/trackers/snoovatar.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return d
			})), n.d(t, "h", (function() {
				return i
			})), n.d(t, "i", (function() {
				return u
			})), n.d(t, "r", (function() {
				return l
			})), n.d(t, "l", (function() {
				return p
			})), n.d(t, "n", (function() {
				return f
			})), n.d(t, "c", (function() {
				return v
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "q", (function() {
				return h
			})), n.d(t, "e", (function() {
				return b
			})), n.d(t, "k", (function() {
				return y
			})), n.d(t, "m", (function() {
				return O
			})), n.d(t, "j", (function() {
				return j
			})), n.d(t, "b", (function() {
				return _
			})), n.d(t, "p", (function() {
				return k
			})), n.d(t, "d", (function() {
				return C
			})), n.d(t, "a", (function() {
				return P
			})), n.d(t, "o", (function() {
				return x
			}));
			var r = n("./src/reddit/models/Gold/ProductOffer.ts"),
				o = n("./src/reddit/selectors/avatarMarketing.ts"),
				a = n("./src/reddit/selectors/telemetry.ts"),
				c = n("./src/reddit/selectors/user.ts");
			const s = {
					goldPurchase: {
						offerContext: r.a.AvatarNewGear
					}
				},
				d = e => t => {
					const n = {
						source: e,
						action: "click",
						noun: "edit_snoovatar",
						...a.n(t)
					};
					return Object(o.a)(t) && Object.assign(n, s), n
				},
				i = (e, t) => n => {
					const {
						id: r
					} = Object(c.Ab)(n, {
						userName: t
					});
					return {
						source: e,
						action: "click",
						noun: "copy_avatar",
						...a.n(n),
						snoovatar: {
							userGenerated: r
						}
					}
				},
				u = e => ({
					...a.n(e),
					source: "avatar",
					action: "click",
					noun: "try_this_look_post",
					snoovatar: a.gb(e)
				}),
				l = e => ({
					...a.n(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "snoovatar_builder"
					},
					snoovatar: a.gb(e)
				}),
				p = e => ({
					...a.n(e),
					source: "avatar_builder",
					action: "click",
					noun: "close",
					snoovatar: a.gb(e)
				}),
				f = e => ({
					source: "nav",
					action: "view",
					noun: "avatar_marketing",
					...a.n(e),
					...s
				}),
				v = e => ({
					source: "nav",
					action: "click",
					noun: "avatar_marketing",
					...a.n(e),
					...s
				}),
				m = e => t => ({
					...a.n(t),
					source: "snoovatar",
					action: "set_to_profile",
					noun: "snoovatar",
					snoovatar: {
						userGeneratedSource: e
					}
				}),
				g = e => t => n => ({
					source: "avatar",
					action: e,
					noun: "community_spaces",
					...a.n(n),
					snoovatar: a.gb(n),
					actionInfo: {
						paneName: "avatar_community_spaces" + (t ? "_control" : "")
					}
				}),
				h = g("view"),
				b = g("click"),
				y = g("dismiss"),
				w = (e, t, n) => () => r => ({
					source: e,
					action: t,
					noun: n,
					...a.n(r),
					snoovatar: a.gb(r)
				}),
				O = w("anniversary_achievement", "view", "anniversary_achievement"),
				j = w("anniversary_achievement", "click", "close"),
				_ = w("anniversary_achievement", "click", "equip"),
				I = e => () => t => ({
					...a.n(t),
					source: "gold_top_nav",
					action: e,
					noun: "quick_create_cta"
				}),
				k = I("view"),
				C = I("click"),
				A = (e, t, n) => r => ({
					source: e,
					action: t,
					noun: n,
					...a.n(r),
					actionInfo: {
						pageType: "onboarding"
					},
					snoovatar: a.gb(r)
				}),
				P = e => A("onboarding", "click", e),
				x = () => A("avatar", "view", "onboarding")
		},
		"./src/reddit/hooks/useInfoTextTooltip.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./node_modules/icepick/icepick.js"),
				o = n("./node_modules/react/index.js"),
				a = n("./src/lib/hooks/useTooltip.ts");
			const c = Object(r.freeze)({
				name: "offset",
				options: {
					offset: [0, 6]
				}
			});

			function s(e) {
				const t = Object(o.useMemo)(() => {
					const t = Object(a.a)(e);
					return Object(r.updateIn)(t, ["modifiers"], e => Object(r.push)(e, c))
				}, [e]);
				return Object(a.b)(t)
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
				return d
			}));
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				c = n("./src/reddit/icons/fonts/Premium/index.m.less"),
				s = n.n(c);
			const d = n("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				title: e.title,
				className: `${Object(a.b)("premium",e.isFilled)} ${e.className}`
			}), "PremiumIcon", s.a)
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
				a = n.n(o);
			t.a = r.a.div("inlineRow", a.a)
		},
		"./src/reddit/reducers/features/avatar/index.ts": function(e, t, n) {
			"use strict";
			var r, o, a = n("./node_modules/redux/es/redux.js"),
				c = n("./src/reddit/actions/snoovatar.ts");
			! function(e) {
				e.PREMIUM = "PREMIUM"
			}(r || (r = {})),
			function(e) {
				e[e.BACKGROUND = 0] = "BACKGROUND", e[e.ACCESSORY_BACK = 1] = "ACCESSORY_BACK", e[e.HAIR_BACK = 2] = "HAIR_BACK", e[e.BODY_BOTTOM = 3] = "BODY_BOTTOM", e[e.BODY = 4] = "BODY", e[e.ACCESSORY = 5] = "ACCESSORY", e[e.FACE_LOWER = 6] = "FACE_LOWER", e[e.FACE_UPPER = 7] = "FACE_UPPER", e[e.HAIR = 8] = "HAIR", e[e.HEAD_ACCESSORY = 9] = "HEAD_ACCESSORY"
			}(o || (o = {}));
			const s = {
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
			var d = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case c.b:
						return {
							...t.payload
						};
					default:
						return e
				}
			};
			const i = {
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
				u = "avatar_quick_create_event",
				l = "avatar_marketing_event",
				p = "avatar_promo_archived",
				f = e => {
					const t = {};
					return e.forEach(e => {
						if (e.startsWith("targeting:")) {
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

			function v(e) {
				if (!e) return i;
				const t = i;
				return e.forEach(e => {
					var n;
					const {
						startsAt: r,
						endsAt: o,
						webAssetUrls: a,
						tags: c
					} = e, s = r && new Date(r) <= new Date, d = !!o && new Date(o) < new Date, i = !!s && !d, v = (c || []).includes(p);
					if (c && c.includes(u) && !v) {
						const {
							text: n,
							id: r
						} = e, o = a || null, s = f(c);
						t && (t.quickCreateV1 = {
							...s,
							id: r,
							text: n,
							active: i && !!o,
							webAssetUrls: o
						})
					}
					if (c && c.includes(l) && !v) {
						const e = a || null,
							r = (null === (n = c.find(e => e.startsWith("feature:") && e.includes("web"))) || void 0 === n ? void 0 : n.split("feature:")[1]) || null;
						t && (t.marketingEvent = {
							active: i && !!e,
							assetUrls: e,
							experimentRequired: r
						})
					}
				}), t
			}
			var m = n("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				g = n("./src/reddit/actions/modal.ts"),
				h = n("./src/reddit/constants/modals.ts");
			var b = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				var n;
				switch (t.type) {
					case m.s:
						const {
							avatarMarketingEvents: r
						} = t.payload;
						return r ? v(r) : i;
					case g.c:
						return (null === (n = t.payload) || void 0 === n ? void 0 : n.id) === h.a.SNOOVATAR_MODAL ? i : e;
					default:
						return e
				}
			};
			var y = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case c.a: {
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
			t.a = Object(a.c)({
				marketing: b,
				avatarUser: d,
				randomAvatar: y
			})
		},
		"./src/reddit/reducers/pages/modHub/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/redux/es/redux.js"),
				o = n("./src/reddit/actions/subredditModeration/constants.ts");
			var a = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case o.g:
						case o.f:
							return null;
						case o.e:
							return t.payload;
						default:
							return e
					}
				},
				c = n("./src/reddit/models/SubredditModeration/index.ts");
			const s = {};
			var d = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case o.g: {
							const {
								subredditId: n,
								fetchedToken: r
							} = t.payload, o = Object(c.e)(n, r);
							return {
								...e,
								[o]: !0
							}
						}
						case o.f:
						case o.e: {
							const {
								subredditId: n,
								fetchedToken: r
							} = t.payload, o = Object(c.e)(n, r);
							return {
								...e,
								[o]: !1
							}
						}
						default:
							return e
					}
				},
				i = Object(r.c)({
					error: a,
					pending: d
				});
			const u = {};
			var l = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.f: {
						const {
							fetchedToken: n,
							subredditId: r
						} = t.payload, o = Object(c.e)(r, n);
						return {
							...e,
							[o]: !0
						}
					}
					default:
						return e
				}
			};
			const p = {};
			var f = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case o.f: {
							const {
								subredditId: e,
								after: n
							} = t.payload;
							return {
								[e]: n
							}
						}
						default:
							return e
					}
				},
				v = n("./node_modules/icepick/icepick.js");
			const m = {};
			var g = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.d:
					case o.f: {
						const {
							subredditId: n,
							approvedSubmitters: r
						} = t.payload, o = {
							[n]: r
						};
						return Object(v.merge)(e, o)
					}
					case o.k: {
						const {
							subredditId: n,
							userId: r
						} = t.payload;
						return Object(v.unsetIn)(e, [n, r])
					}
					default:
						return e
				}
			};
			var h = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.j:
					case o.i:
						return null;
					case o.h:
						return t.payload;
					default:
						return e
				}
			};
			var b = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case o.j:
							return !0;
						case o.i:
						case o.h:
							return !1;
						default:
							return e
					}
				},
				y = Object(r.c)({
					error: h,
					pending: b
				});
			var w = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case o.j:
							return null;
						case o.i: {
							const e = t.payload.approvedSubmitterIds[0];
							return e ? t.payload.approvedSubmitters[e] : null
						}
						default:
							return e
					}
				},
				O = Object(r.c)({
					api: y,
					result: w
				});
			const j = {};
			var _ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : j,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case o.f: {
							const {
								subredditId: n,
								approvedSubmitterIds: r
							} = t.payload;
							return e[n] ? {
								...e,
								[n]: [...e[n], ...r]
							} : {
								...e,
								[n]: r
							}
						}
						case o.k: {
							const {
								subredditId: n,
								userId: r
							} = t.payload;
							return {
								[n]: e[n].filter(e => e !== r)
							}
						}
						case o.d: {
							const {
								subredditId: n,
								approvedSubmitterIds: r
							} = t.payload, o = r[0];
							return o && e[n] && -1 === e[n].indexOf(o) ? {
								[n]: [o, ...e[n]]
							} : e
						}
						default:
							return e
					}
				},
				I = Object(r.c)({
					api: i,
					fetchedTokens: l,
					loadMore: f,
					models: g,
					search: O,
					userOrder: _
				});
			var k = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.n:
					case o.m:
						return null;
					case o.l:
						return t.payload;
					default:
						return e
				}
			};
			const C = {};
			var A = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : C,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case o.n: {
							const {
								subredditId: n,
								fetchedToken: r
							} = t.payload, o = Object(c.f)(n, r);
							return {
								...e,
								[o]: !0
							}
						}
						case o.m:
						case o.l: {
							const {
								subredditId: n,
								fetchedToken: r
							} = t.payload, o = Object(c.f)(n, r);
							return {
								...e,
								[o]: !1
							}
						}
						default:
							return e
					}
				},
				P = Object(r.c)({
					error: k,
					pending: A
				});
			const x = {};
			var T = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : x,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.m: {
						const {
							fetchedToken: n,
							subredditId: r
						} = t.payload, o = Object(c.f)(r, n);
						return {
							...e,
							[o]: !0
						}
					}
					default:
						return e
				}
			};
			const M = {};
			var E = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : M,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.m: {
						const {
							subredditId: e,
							loadMoreToken: n
						} = t.payload;
						return {
							[e]: n
						}
					}
					default:
						return e
				}
			};
			const S = {};
			var R = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case o.m: {
							const {
								subredditId: n,
								approvedTalkHosts: r,
								forceRefresh: o
							} = t.payload, a = {
								[n]: [...o ? [] : e[n] || [], ...r]
							};
							return Object(v.merge)(e, a)
						}
						case o.o: {
							const {
								subredditId: n,
								userId: r
							} = t.payload, o = {
								[n]: e[n].filter(e => e.redditor.id !== r)
							};
							return Object(v.merge)(e, o)
						}
						default:
							return e
					}
				},
				G = Object(r.c)({
					api: P,
					fetchedTokens: T,
					loadMore: E,
					models: R
				}),
				L = n("./src/reddit/actions/grantUserFlair/constants.ts");
			var N = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case L.g:
					case L.i:
						return null;
					case L.f:
						return t.payload;
					default:
						return e
				}
			};
			var D = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case L.i:
							return !0;
						case L.g:
						case L.f:
							return !1;
						default:
							return e
					}
				},
				U = Object(r.c)({
					error: N,
					pending: D
				}),
				F = n("./node_modules/lodash/merge.js"),
				q = n.n(F),
				K = n("./node_modules/lodash/omit.js"),
				B = n.n(K);
			const z = {};
			var V = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : z,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case L.g:
					case L.k: {
						const {
							subredditId: n,
							flairedUsers: r
						} = t.payload;
						return q()({
							...e
						}, {
							[n]: r
						})
					}
					case L.c: {
						const {
							subredditId: n,
							userName: r
						} = t.payload, o = B()(e[n], r);
						return {
							...e,
							[n]: o
						}
					}
					case L.a:
					case L.b:
					case L.h:
						const {
							subredditId: n, userName: r, applied: o
						} = t.payload;
						return o ? {
							...e,
							[n]: {
								...e[n],
								[r]: o
							}
						} : e;
					default:
						return e
				}
			};
			const H = {};
			var W = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : H,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case L.g: {
						const {
							key: n,
							pageInfo: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			var J = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case L.l:
					case L.k:
						return null;
					case L.j:
						return t.payload;
					default:
						return e
				}
			};
			var Y = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case L.l:
							return !0;
						case L.k:
						case L.j:
							return !1;
						default:
							return e
					}
				},
				$ = Object(r.c)({
					error: J,
					pending: Y
				});
			var Q = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case L.k: {
							const {
								searchResult: e
							} = t.payload;
							return e
						}
						case L.c: {
							const {
								userName: n
							} = t.payload;
							return e === n ? null : e
						}
						default:
							return e
					}
				},
				X = Object(r.c)({
					api: $,
					result: Q
				});
			const Z = {};
			var ee = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Z,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case L.g: {
							const {
								key: n,
								userOrder: r
							} = t.payload;
							return {
								...e,
								[n]: r
							}
						}
						case L.a: {
							const {
								key: n,
								userName: r
							} = t.payload;
							if (!n) return e;
							if (!e[n].includes(r)) {
								const t = [...e[n], r];
								return {
									...e,
									[n]: t
								}
							}
							return e
						}
						case L.c: {
							const {
								userName: n
							} = t.payload, r = {};
							for (const t in e) r[t] = e[t].filter(e => e !== n);
							return r
						}
						default:
							return e
					}
				},
				te = Object(r.c)({
					api: U,
					models: V,
					pageInfo: W,
					search: X,
					userOrder: ee
				}),
				ne = n("./src/reddit/actions/moderationLog/constants.ts");
			const re = {};
			var oe = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : re,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ne.b: {
						const {
							actionIds: n,
							key: r,
							subredditId: o
						} = t.payload;
						return {
							...e,
							[o]: {
								...e[o] || {},
								[r]: n
							}
						}
					}
					default:
						return e
				}
			};
			const ae = {};
			var ce = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ae,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ne.b: {
							const {
								normalizedModerationLog: n,
								subredditId: r
							} = t.payload, o = {};
							n.forEach(e => {
								o[e.id] = e
							});
							const a = {
								[r]: o
							};
							return q()({
								...e
							}, a)
						}
						default:
							return e
					}
				},
				se = Object(r.c)({
					itemOrder: oe,
					models: ce
				});
			var de = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ne.b: {
						const {
							endCursor: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			const ie = {};
			var ue = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ie,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ne.b: {
						const {
							hasNextPage: n,
							subredditId: r
						} = t.payload;
						return {
							...e,
							[r]: n
						}
					}
					default:
						return e
				}
			};
			const le = {};
			var pe = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : le,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ne.b: {
						const {
							hasPreviousPage: n,
							subredditId: r
						} = t.payload;
						return {
							...e,
							[r]: n
						}
					}
					default:
						return e
				}
			};
			const fe = [];
			var ve = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fe,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ne.a: {
						const {
							normalizedModerators: n,
							subredditId: r
						} = t.payload;
						return {
							...e,
							[r]: n
						}
					}
					default:
						return e
				}
			};
			var me = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ne.b: {
							const {
								startCursor: e
							} = t.payload;
							return e
						}
						default:
							return e
					}
				},
				ge = Object(r.c)({
					actions: se,
					endCursor: de,
					hasNextPage: ue,
					hasPreviousPage: pe,
					moderators: ve,
					startCursor: me
				});
			const he = {};
			var be = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : he,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.O:
					case o.y: {
						const {
							subredditId: n,
							moderators: r
						} = t.payload.response || t.payload, o = {
							[n]: r
						};
						return Object(v.merge)(e, o)
					}
					case o.C: {
						const {
							subredditId: n,
							userId: r,
							permissions: o
						} = t.payload;
						return Object(v.setIn)(e, [n, r, "modPermissions"], o)
					}
					case o.jb: {
						const {
							subredditId: n,
							userId: r
						} = t.payload;
						return Object(v.unsetIn)(e, [n, r])
					}
					default:
						return e
				}
			};
			const ye = {};
			var we = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ye,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.z:
					case o.y: {
						const {
							key: n,
							subredditId: r
						} = t.payload;
						return r ? {
							...e,
							[n]: null
						} : e
					}
					case o.x: {
						const {
							error: n,
							key: r,
							subredditId: o
						} = t.payload;
						return o ? {
							...e,
							[r]: n
						} : e
					}
					default:
						return e
				}
			};
			const Oe = {};
			var je = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Oe,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case o.x:
						case o.y: {
							const {
								subredditId: n,
								key: r
							} = t.payload;
							return n ? {
								...e,
								[r]: !1
							} : e
						}
						case o.z: {
							const {
								subredditId: n,
								key: r
							} = t.payload;
							return n ? {
								...e,
								[r]: !0
							} : e
						}
						default:
							return e
					}
				},
				_e = Object(r.c)({
					error: we,
					pending: je
				});
			const Ie = {};
			var ke = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ie,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case o.y: {
							const {
								subredditId: n,
								response: r,
								key: o
							} = t.payload;
							return Object(v.setIn)(e, [n, o], r.moderatorIds)
						}
						case o.jb: {
							const {
								subredditId: n,
								userId: r,
								key: o
							} = t.payload, a = e[n][o].filter(e => e !== r);
							return Object(v.setIn)(e, [n, o], a)
						}
						default:
							return e
					}
				},
				Ce = Object(r.c)({
					data: ke,
					api: _e
				});
			var Ae = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.F:
					case o.E:
						return null;
					case o.D:
						return t.payload;
					default:
						return e
				}
			};
			var Pe = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case o.E:
						case o.D:
							return !1;
						case o.F:
							return !0;
						default:
							return e
					}
				},
				xe = Object(r.c)({
					error: Ae,
					pending: Pe
				});
			const Te = {};
			var Me = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Te,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.E: {
						const {
							subredditId: n,
							moderators: r
						} = t.payload;
						return Object(v.set)(e, n, r)
					}
					case o.gb: {
						const {
							subredditId: n,
							userId: r
						} = t.payload;
						return Object(v.unsetIn)(e, [n, r])
					}
					case o.c: {
						const n = t.payload,
							{
								subredditId: r,
								moderators: o
							} = n,
							a = {
								[r]: o
							};
						return Object(v.merge)(e, a)
					}
					default:
						return e
				}
			};
			const Ee = {};
			var Se = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ee,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case o.E: {
							const {
								subredditId: n,
								moderatorIds: r
							} = t.payload;
							return {
								...e,
								[n]: r
							}
						}
						case o.gb: {
							const {
								subredditId: n,
								userId: r
							} = t.payload, o = e[n].filter(e => e !== r);
							return {
								...e,
								[n]: o
							}
						}
						case o.c: {
							const n = t.payload,
								{
									subredditId: r,
									moderatorIds: o
								} = n,
								a = [...e[r] || [], ...o];
							return {
								...e,
								[r]: a
							}
						}
						default:
							return e
					}
				},
				Re = Object(r.c)({
					api: xe,
					models: Me,
					userOrder: Se
				});
			const Ge = {};
			var Le = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ge,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.L: {
						const {
							subredditId: n,
							response: r
						} = t.payload, {
							invitePending: o
						} = r, a = {
							[n]: o
						};
						return Object(v.merge)(e, a)
					}
					case o.I:
					case o.J: {
						const {
							subredditId: n
						} = t.payload;
						return Object(v.unset)(e, n)
					}
					default:
						return e
				}
			};
			const Ne = {};
			var De = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ne,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.y: {
						const {
							response: e
						} = t.payload;
						return {
							[e.subredditId]: {
								after: e.after,
								before: e.before
							}
						}
					}
					default:
						return e
				}
			};
			const Ue = {};
			var Fe = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ue,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.L: {
						const {
							response: e
						} = t.payload;
						return {
							[e.subredditId]: {
								after: e.after,
								before: e.before
							}
						}
					}
					default:
						return e
				}
			};
			const qe = {};
			var Ke = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qe,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.L: {
						const {
							response: n
						} = t.payload, r = {
							[n.subredditId]: n.moderators
						};
						return Object(v.merge)({
							...e
						}, r)
					}
					case o.C: {
						const n = t.payload,
							{
								subredditId: r,
								userId: o,
								permissions: a
							} = n;
						return e[r] && e[r][o] ? Object(v.setIn)(e, [r, o, "modPermissions"], a) : e
					}
					default:
						return e
				}
			};
			var Be = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.P:
					case o.O:
						return null;
					case o.N:
						return t.payload;
					default:
						return e
				}
			};
			var ze = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case o.P:
							return !0;
						case o.O:
						case o.N:
							return !1;
						default:
							return e
					}
				},
				Ve = Object(r.c)({
					error: Be,
					pending: ze
				}),
				He = n("./node_modules/lodash/isEqual.js"),
				We = n.n(He);
			var Je = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case o.P:
						case o.N:
						case o.jb:
							return null;
						case o.O: {
							const e = t.payload.moderatorIds[0];
							return e ? t.payload.moderators[e] : null
						}
						case o.C: {
							const {
								userId: n,
								permissions: r
							} = t.payload;
							return e && e.id === n && !We()(e.modPermissions, r) ? {
								...e,
								modPermissions: r
							} : e
						}
						default:
							return e
					}
				},
				Ye = Object(r.c)({
					api: Ve,
					result: Je
				});
			const $e = {};
			var Qe = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $e,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.M:
					case o.L: {
						const {
							subredditId: n,
							key: r
						} = t.payload;
						return n ? {
							...e,
							[r]: null
						} : e
					}
					case o.K: {
						const {
							error: n,
							subredditId: r,
							key: o
						} = t.payload;
						return r ? {
							...e,
							[o]: n
						} : e
					}
					default:
						return e
				}
			};
			const Xe = {};
			var Ze = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xe,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case o.K:
						case o.L: {
							const {
								subredditId: n,
								key: r
							} = t.payload;
							return n ? {
								...e,
								[r]: !1
							} : e
						}
						case o.M: {
							const {
								subredditId: n,
								key: r
							} = t.payload;
							return n ? {
								...e,
								[r]: !0
							} : e
						}
						default:
							return e
					}
				},
				et = Object(r.c)({
					error: Qe,
					pending: Ze
				});
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			const tt = {};
			var nt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case o.L: {
							const {
								response: n,
								subredditId: r,
								key: o
							} = t.payload, {
								moderatorIds: a
							} = n;
							return Object(v.merge)(e, {
								[r]: {
									[o]: a
								}
							})
						}
						case o.jb: {
							const {
								subredditId: n,
								userId: r
							} = t.payload, o = {
								...e[n]
							};
							return Object.keys(e[n]).forEach(t => {
								const a = e[n][t].filter(e => e !== r);
								o[t] = a
							}), Object(v.set)(e, n, o)
						}
						default:
							return e
					}
				},
				rt = Object(r.c)({
					data: nt,
					api: et
				}),
				ot = Object(r.c)({
					editableModerators: be,
					editableUserOrder: Ce,
					invitedModerators: Re,
					invitePending: Le,
					loadMoreModerators: Fe,
					loadMoreEditableModerators: De,
					models: Ke,
					search: Ye,
					userOrder: rt
				}),
				at = n("./src/reddit/actions/bulkActions/constants.ts");
			var ct = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case at.c:
						case at.b:
							return null;
						case at.a:
							return t.payload;
						default:
							return e
					}
				},
				st = n("./src/reddit/actions/modQueue/constants.ts");
			var dt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case at.c:
							return !0;
						case at.b:
						case at.a:
						case st.s:
						case st.r:
							return !1;
						default:
							return e
					}
				},
				it = Object(r.c)({
					error: ct,
					pending: dt
				});
			const ut = {};
			var lt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ut,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case st.a: {
							const {
								ids: n
							} = t.payload, r = {};
							return n.forEach(e => r[e] = !0), {
								...e,
								...r
							}
						}
						case st.d: {
							const {
								ids: n
							} = t.payload;
							return B()(e, n)
						}
						case st.c: {
							const {
								ids: e
							} = t.payload, n = {};
							return e.forEach(e => n[e] = !0), n
						}
						default:
							return e
					}
				},
				pt = n("./src/reddit/models/ModQueue/index.ts");
			const ft = {};
			var vt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ft,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case at.b: {
							const {
								operation: e,
								ids: n
							} = t.payload;
							return "approve" === e ? ft : {
								[pt.c[e]]: n
							}
						}
						default:
							return e
					}
				},
				mt = Object(r.c)({
					api: it,
					selectedItems: lt,
					undoLastAction: vt
				});
			var gt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case st.g:
					case st.f:
						return null;
					case st.e:
						return t.payload;
					default:
						return e
				}
			};
			var ht = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case st.g:
							return !0;
						case st.f:
						case st.e:
							return !1;
						default:
							return e
					}
				},
				bt = Object(r.c)({
					error: gt,
					pending: ht
				});
			const yt = {};
			var wt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yt,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case st.f: {
						const {
							listingKey: n,
							page: r,
							response: o
						} = t.payload, {
							modqueue: a
						} = o;
						return {
							...e,
							[n]: {
								...e[n] || {},
								[r]: a
							}
						}
					}
					default:
						return e
				}
			};
			const Ot = {};
			var jt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ot,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case st.f: {
							const {
								listingKey: n,
								response: r
							} = t.payload, {
								modqueue: o
							} = r, a = o[o.length - 1] || null;
							return {
								...e,
								[n]: a
							}
						}
						default:
							return e
					}
				},
				_t = Object(r.c)({
					api: bt,
					itemOrder: wt,
					loadMore: jt
				}),
				It = n("./src/reddit/actions/pages/modListing/constants.ts");
			var kt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case It.e: {
						const n = t.payload,
							{
								moderatingSubreddits: r
							} = n;
						return r ? null : e
					}
					case st.i:
					case st.f:
					case st.m:
					case st.p:
					case st.v: {
						const {
							response: e
						} = t.payload, {
							moderatedAfter: n
						} = e;
						return n
					}
					case st.k: {
						const e = t.payload,
							{
								moderatedAfter: n
							} = e;
						return n
					}
					default:
						return e
				}
			};
			const Ct = [];
			var At = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ct,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case st.i:
					case st.f:
					case st.m:
					case st.p:
					case st.v: {
						const {
							response: e
						} = t.payload, {
							listingOrder: n
						} = e;
						return n
					}
					case st.k: {
						const n = t.payload,
							{
								listingOrder: r
							} = n;
						return [...e, ...r]
					}
					case It.e: {
						const n = t.payload,
							{
								listingOrder: r
							} = n;
						return r || e
					}
					default:
						return e
				}
			};
			var Pt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case st.b:
						return !0;
					default:
						return e
				}
			};
			var xt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case st.k:
							return !0;
						case st.b:
							return !1;
						default:
							return e
					}
				},
				Tt = Object(r.c)({
					after: kt,
					data: At,
					loaded: Pt,
					pending: xt
				});
			var Mt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case st.j:
					case st.i:
						return null;
					case st.h:
						return t.payload;
					default:
						return e
				}
			};
			var Et = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case st.j:
							return !0;
						case st.i:
						case st.h:
							return !1;
						default:
							return e
					}
				},
				St = Object(r.c)({
					error: Mt,
					pending: Et
				});
			const Rt = {};
			var Gt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Rt,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case st.i: {
						const {
							listingKey: n,
							page: r,
							response: o
						} = t.payload, {
							modqueue: a
						} = o;
						return {
							...e,
							[n]: {
								...e[n] || {},
								[r]: a
							}
						}
					}
					default:
						return e
				}
			};
			const Lt = {};
			var Nt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Lt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case st.i: {
							const {
								listingKey: n,
								response: r
							} = t.payload, {
								modqueue: o
							} = r, a = o[o.length - 1] || null;
							return {
								...e,
								[n]: a
							}
						}
						default:
							return e
					}
				},
				Dt = Object(r.c)({
					api: St,
					itemOrder: Gt,
					loadMore: Nt
				});
			var Ut = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case st.n:
					case st.m:
						return null;
					case st.l:
						return t.payload;
					default:
						return e
				}
			};
			var Ft = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case st.n:
							return !0;
						case st.m:
						case st.l:
							return !1;
						default:
							return e
					}
				},
				qt = Object(r.c)({
					error: Ut,
					pending: Ft
				});
			const Kt = {};
			var Bt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Kt,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case st.m: {
						const {
							listingKey: n,
							page: r,
							response: o
						} = t.payload, {
							modqueue: a
						} = o;
						return {
							...e,
							[n]: {
								...e[n] || {},
								[r]: a
							}
						}
					}
					default:
						return e
				}
			};
			const zt = {};
			var Vt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case st.m: {
							const {
								listingKey: n,
								response: r
							} = t.payload, {
								modqueue: o
							} = r, a = o[o.length - 1] || null;
							return {
								...e,
								[n]: a
							}
						}
						default:
							return e
					}
				},
				Ht = Object(r.c)({
					api: qt,
					itemOrder: Bt,
					loadMore: Vt
				});
			var Wt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case st.q:
					case st.p:
						return null;
					case st.o:
						return t.payload;
					default:
						return e
				}
			};
			var Jt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case st.q:
							return !0;
						case st.p:
						case st.o:
							return !1;
						default:
							return e
					}
				},
				Yt = Object(r.c)({
					error: Wt,
					pending: Jt
				});
			const $t = {};
			var Qt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $t,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case st.p: {
						const {
							listingKey: n,
							page: r,
							response: o
						} = t.payload, {
							modqueue: a
						} = o;
						return {
							...e,
							[n]: {
								...e[n] || {},
								[r]: a
							}
						}
					}
					default:
						return e
				}
			};
			const Xt = {};
			var Zt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case st.p: {
							const {
								listingKey: n,
								response: r
							} = t.payload, {
								modqueue: o
							} = r, a = o[o.length - 1] || null;
							return {
								...e,
								[n]: a
							}
						}
						default:
							return e
					}
				},
				en = Object(r.c)({
					api: Yt,
					itemOrder: Qt,
					loadMore: Zt
				});
			var tn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case st.w:
					case st.v:
						return null;
					case st.u:
						return t.payload;
					default:
						return e
				}
			};
			var nn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case st.w:
							return !0;
						case st.v:
						case st.u:
							return !1;
						default:
							return e
					}
				},
				rn = Object(r.c)({
					error: tn,
					pending: nn
				});
			const on = {};
			var an = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : on,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case st.v: {
						const {
							listingKey: n,
							page: r,
							response: o
						} = t.payload, {
							modqueue: a
						} = o;
						return {
							...e,
							[n]: {
								...e[n] || {},
								[r]: a
							}
						}
					}
					default:
						return e
				}
			};
			const cn = {};
			var sn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cn,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case st.v: {
							const {
								listingKey: n,
								response: r
							} = t.payload, {
								modqueue: o
							} = r, a = o[o.length - 1] || null;
							return {
								...e,
								[n]: a
							}
						}
						default:
							return e
					}
				},
				dn = Object(r.c)({
					api: rn,
					itemOrder: an,
					loadMore: sn
				}),
				un = Object(r.c)({
					bulkAction: mt,
					edited: _t,
					moderatedCommunitiesOrder: Tt,
					modqueue: Dt,
					reports: Ht,
					spam: en,
					unmoderated: dn
				});
			var ln = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.Y:
					case o.W:
						return null;
					case o.V:
						return t.payload;
					default:
						return e
				}
			};
			const pn = {};
			var fn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pn,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case o.Y: {
							const {
								subredditId: n,
								fetchedToken: r
							} = t.payload, o = Object(c.e)(n, r);
							return {
								...e,
								[o]: !0
							}
						}
						case o.W:
						case o.V: {
							const {
								subredditId: n,
								fetchedToken: r
							} = t.payload, o = Object(c.e)(n, r);
							return {
								...e,
								[o]: !1
							}
						}
						default:
							return e
					}
				},
				vn = Object(r.c)({
					error: ln,
					pending: fn
				});
			const mn = {};
			var gn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mn,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case o.W: {
							const {
								fetchedToken: n,
								subredditId: r
							} = t.payload, o = Object(c.e)(r, n);
							return {
								...e,
								[o]: !0
							}
						}
						default:
							return e
					}
				},
				hn = n("./src/reddit/actions/inContextModeration.ts");
			var bn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case hn.b:
						return t.payload;
					default:
						return e
				}
			};
			const yn = {};
			var wn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yn,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.W: {
						const {
							subredditId: e,
							after: n
						} = t.payload;
						return {
							[e]: n
						}
					}
					default:
						return e
				}
			};
			const On = {};
			var jn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : On,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.X:
					case o.W: {
						const {
							subredditId: n,
							mutedUsers: r
						} = t.payload, o = {
							[n]: r
						};
						return Object(v.merge)(e, o)
					}
					case o.cb: {
						const {
							subredditId: n,
							userId: r
						} = t.payload;
						return Object(v.unsetIn)(e, [n, r])
					}
					default:
						return e
				}
			};
			var _n = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.bb:
					case o.ab:
						return null;
					case o.Z:
						return t.payload;
					default:
						return e
				}
			};
			var In = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case o.bb:
							return !0;
						case o.ab:
						case o.Z:
							return !1;
						default:
							return e
					}
				},
				kn = Object(r.c)({
					error: _n,
					pending: In
				});
			var Cn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case o.bb:
						case o.Z:
							return null;
						case o.ab: {
							const e = t.payload.mutedUserIds[0];
							return e ? t.payload.mutedUsers[e] : null
						}
						default:
							return e
					}
				},
				An = Object(r.c)({
					api: kn,
					result: Cn
				});
			const Pn = {};
			var xn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pn,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case o.W: {
							const {
								subredditId: n,
								mutedUserIds: r
							} = t.payload;
							return e[n] ? {
								...e,
								[n]: [...e[n], ...r]
							} : {
								...e,
								[n]: r
							}
						}
						case o.cb: {
							const {
								subredditId: n,
								userId: r
							} = t.payload;
							return {
								[n]: e[n].filter(e => e !== r)
							}
						}
						case o.X: {
							const {
								subredditId: n,
								mutedUserIds: r
							} = t.payload, o = r[0];
							return o && e[n] && -1 === e[n].indexOf(o) ? {
								[n]: [o, ...e[n]]
							} : e
						}
						default:
							return e
					}
				},
				Tn = Object(r.c)({
					api: vn,
					fetchedTokens: gn,
					inContext: bn,
					loadMore: wn,
					models: jn,
					search: An,
					userOrder: xn
				});
			t.a = Object(r.c)({
				approvedSubmitters: I,
				approvedTalkHosts: G,
				flairedUsers: te,
				moderationLog: ge,
				moderators: ot,
				modQueue: un,
				muted: Tn
			})
		},
		"./src/reddit/selectors/authorFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return a
			}));
			const r = (e, t) => {
					let {
						post: n
					} = t;
					const r = n.belongsTo.id;
					if (!r) return null;
					const o = e.authorFlair.models[r];
					if (!o) return null;
					const a = n.author;
					return a && o[a] || null
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
				a = e => e.authorFlair.inContext
		},
		"./src/reddit/selectors/avatar.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return s
			}));
			var r = n("./src/lib/initializeClient/installReducer.ts"),
				o = n("./src/reddit/reducers/features/avatar/index.ts");
			Object(r.a)({
				features: {
					avatar: o.a
				}
			});
			const a = e => {
					var t, n;
					return null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.avatarUser
				},
				c = e => {
					var t, n;
					return null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.avatarUser.csrf_token
				},
				s = e => {
					var t, n;
					return (null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.randomAvatar) || null
				}
		},
		"./src/reddit/selectors/avatarMarketing.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			})), n.d(t, "a", (function() {
				return s
			}));
			var r = n("./src/lib/initializeClient/installReducer.ts"),
				o = n("./src/reddit/reducers/features/avatar/index.ts"),
				a = n("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			Object(r.a)({
				features: {
					avatar: o.a
				}
			});
			const c = e => {
					var t, n;
					return !!(null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.marketing)
				},
				s = e => {
					var t, n, r, o;
					const c = null === (r = null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.marketing) || void 0 === r ? void 0 : r.marketingEvent;
					if (!(null == c ? void 0 : c.active) || !(null === (o = null == c ? void 0 : c.assetUrls) || void 0 === o ? void 0 : o.length)) return null;
					const s = c.assetUrls[0];
					return !c.experimentRequired || Object(a.a)(c.experimentRequired)(e) ? s : null
				}
		},
		"./src/reddit/selectors/gild.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "f", (function() {
				return a
			})), n.d(t, "g", (function() {
				return c
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "a", (function() {
				return i
			}));
			const r = e => e.gild.gildModalThingId,
				o = e => e.gild.correlationId || void 0,
				a = e => e.gild.isAnonymous,
				c = e => e.gild.isIframed,
				s = e => e.gild.message,
				d = e => e.gild.api.pending,
				i = e => e.gild.api.error
		},
		"./src/reddit/selectors/gold/awardIcon.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return p
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "a", (function() {
				return v
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "d", (function() {
				return g
			}));
			var r = n("./src/lib/objectSelector/index.ts"),
				o = n("./src/reddit/models/Gold/Award.ts"),
				a = n("./src/reddit/selectors/commentSelector.ts"),
				c = n("./src/reddit/selectors/gold/giveAwards.ts"),
				s = n("./src/reddit/selectors/posts.ts"),
				d = n("./src/reddit/selectors/user.ts"),
				i = n("./src/reddit/selectors/userPrefs.ts");
			const u = [32, 48, 64, 128],
				l = (e, t, n) => {
					const r = t ? e[`staticIcon${n}`] : e[`icon${n}`];
					return (null == r ? void 0 : r.url) ? r.url : t ? e.staticIcon.url : e.icon.url
				},
				p = e => {
					let {
						award: t,
						size: n,
						prefersReducedMotion: r,
						postOrComment: a
					} = e;
					return t.awardSubType === o.d.Group ? (e => {
						let {
							award: t,
							size: n,
							prefersReducedMotion: r,
							postOrComment: o
						} = e, a = t;
						if ((null == o ? void 0 : o.awardCountsById) && o.awardCountsById[t.id] && t.tiers) {
							const e = o.awardCountsById[t.id];
							a = t.tiers.reduce((t, n) => e >= n.awardingsRequired ? n : t)
						}
						return l(a, r, n)
					})({
						award: t,
						size: n,
						prefersReducedMotion: r,
						postOrComment: a
					}) : l(t, r, n)
				},
				f = Object(r.a)((e, t) => {
					let {
						awards: n,
						minSize: r,
						postOrCommentId: o
					} = t;
					const c = Object(i.d)(e),
						d = u.find(e => e >= r),
						l = o ? Object(s.G)(e, {
							postId: o
						}) || Object(a.b)(e, {
							commentId: o
						}) : void 0;
					return n.reduce((e, t) => (t && (e[t.id] = p({
						award: t,
						size: d,
						prefersReducedMotion: c,
						postOrComment: l
					})), e), {})
				}),
				v = (e, t) => {
					let {
						award: n,
						minSize: r,
						postOrCommentId: o
					} = t;
					return n ? f(e, {
						awards: [n],
						minSize: r,
						postOrCommentId: o
					})[n.id] : void 0
				},
				m = (e, t) => {
					let {
						minSize: n,
						userName: r
					} = t;
					const o = Object(d.Ab)(e, {
						userName: r
					});
					if (o && o.awardedLastMonth && o.awardedLastMonth.topAward) return v(e, {
						award: o.awardedLastMonth.topAward,
						minSize: n
					})
				},
				g = e => {
					const t = Object(c.b)(e),
						n = Object(c.a)(e);
					return v(e, {
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
			n.d(t, "q", (function() {
				return c
			})), n.d(t, "s", (function() {
				return s
			})), n.d(t, "r", (function() {
				return d
			})), n.d(t, "u", (function() {
				return i
			})), n.d(t, "t", (function() {
				return u
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "p", (function() {
				return p
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "n", (function() {
				return v
			})), n.d(t, "o", (function() {
				return m
			})), n.d(t, "c", (function() {
				return g
			})), n.d(t, "h", (function() {
				return h
			})), n.d(t, "l", (function() {
				return b
			})), n.d(t, "w", (function() {
				return y
			})), n.d(t, "x", (function() {
				return w
			})), n.d(t, "v", (function() {
				return O
			})), n.d(t, "y", (function() {
				return j
			})), n.d(t, "f", (function() {
				return _
			})), n.d(t, "g", (function() {
				return I
			})), n.d(t, "i", (function() {
				return k
			})), n.d(t, "k", (function() {
				return C
			})), n.d(t, "j", (function() {
				return A
			})), n.d(t, "m", (function() {
				return P
			})), n.d(t, "e", (function() {
				return x
			})), n.d(t, "d", (function() {
				return T
			}));
			var r = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				o = n("./src/lib/initializeClient/installReducer.ts"),
				a = n("./src/reddit/reducers/features/goldPurchase/index.ts");
			Object(o.a)({
				features: {
					goldPurchase: a.a
				}
			});
			const c = e => e.features.goldPurchase.purchaseModal.activePage,
				s = e => e.features.goldPurchase.purchaseModal.gildThingId || void 0,
				d = e => e.features.goldPurchase.purchaseModal.correlationId || void 0,
				i = e => e.features.goldPurchase.purchaseModal.showModal,
				u = e => e.features.goldPurchase.purchaseModal.packageId,
				l = e => e.features.goldPurchase.packageOfferModal.packageId,
				p = e => e.features.goldPurchase.premiumPurchaseModal.renewInterval,
				f = e => {
					const t = Object(r.l)(e),
						n = (e => e.features.goldPurchase.premiumPurchaseModal.packageId)(e);
					return t.length && n && t.find(e => e.mobileId === n) || null
				},
				v = e => e.features.goldPurchase.premiumPurchaseModal.activePage,
				m = e => e.features.goldPurchase.premiumPurchaseModal.showModal,
				g = e => e.features.goldPurchase.payment.paymentMethod,
				h = e => e.features.goldPurchase.payment.cardName,
				b = e => e.features.goldPurchase.payment.postalCode,
				y = e => e.features.goldPurchase.payment.savedCardsPending,
				w = e => e.features.goldPurchase.payment.savedCards,
				O = e => e.features.goldPurchase.payment.rememberCard,
				j = e => e.features.goldPurchase.payment.useSavedCard,
				_ = e => e.features.goldPurchase.payment.cardValidation.cardCvc,
				I = e => e.features.goldPurchase.payment.cardValidation.cardExpiry,
				k = e => e.features.goldPurchase.payment.cardValidation.cardNumber,
				C = e => e.features.goldPurchase.payment.cardValidation.nameOnCard,
				A = e => e.features.goldPurchase.payment.stripeToken.errorMessage,
				P = e => e.features.goldPurchase.payment.stripeToken.pending,
				x = e => e.features.goldPurchase.payment.paypal.passthrough,
				T = e => e.features.goldPurchase.payment.paypal.errorMessage
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PostCreation~Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~r~4c415e24.7452532e47b9306620d4.js.map