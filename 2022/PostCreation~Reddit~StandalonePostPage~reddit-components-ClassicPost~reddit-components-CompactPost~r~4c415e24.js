// https://www.redditstatic.com/desktop2x/PostCreation~Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~r~4c415e24.2c818a70ed027fce9649.js
// Retrieved at 6/13/2022, 1:00:03 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PostCreation~Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~r~4c415e24"], {
		"./src/reddit/actions/gold/communityAwards/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "i", (function() {
				return d
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "e", (function() {
				return s
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
				return m
			}));
			var r = n("./src/lib/loadableAction/index.ts");
			const o = e => () => n.e("CommunityAwards").then(n.bind(null, "./src/reddit/actions/gold/communityAwards/communityAwards.ts")).then(t => t[e]),
				a = Object(r.a)(o("awardSheetInfoRequested")),
				d = Object(r.a)(o("manageableAwardsRequested")),
				c = Object(r.a)(o("createCommunityAward")),
				s = Object(r.a)(o("createGlobalAward")),
				i = Object(r.a)(o("createModAward")),
				u = Object(r.a)(o("createAwardFailed")),
				l = Object(r.a)(o("createAwardSuccessful")),
				p = Object(r.a)(o("removeCommunityAward")),
				f = Object(r.a)(o("disableAwardinCommunity")),
				m = Object(r.a)(o("enableAwardinCommunity"))
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
				d = n("./src/reddit/constants/modals.ts"),
				c = n("./src/reddit/selectors/gild.ts"),
				s = n("./src/reddit/helpers/correlationIdTracker.ts"),
				i = n("./src/reddit/actions/gold/communityAwards/index.ts"),
				u = n("./src/reddit/actions/modal.ts"),
				l = n("./src/reddit/selectors/communityAwards.ts"),
				p = n("./src/reddit/selectors/posts.ts"),
				f = n("./src/reddit/selectors/subreddit.ts"),
				m = n("./src/telemetry/index.ts"),
				v = n("./src/reddit/actions/gold/constants.ts");
			const g = Object(r.a)(v.L),
				h = Object(r.a)(v.f),
				b = () => async (e, t) => {
					const r = t();
					e(h()), Object(s.b)(s.a.GiftPremiumFlow);
					const {
						clickCloseModalEvent: o
					} = await n.e("givePremiumTrackers").then(n.bind(null, "./src/reddit/helpers/trackers/givePremium.ts"));
					Object(m.a)(o()(r))
				}, y = Object(r.a)(v.K), w = e => {
					let {
						awardId: t,
						correlationId: n,
						thingId: r
					} = e;
					return async (e, o) => {
						const c = o(),
							s = t ? Object(l.a)(c, t) : void 0;
						e(y({
							award: s && s.isEnabled ? s : void 0,
							thingId: r,
							correlationId: n
						})), e(Object(u.h)(d.a.GOLD_GILD_MODAL));
						const m = Object(f.K)(c, {
							thingId: r
						});
						let v = null;
						if (m) v = m.id;
						else if (Object(a.a)(r)) {
							const e = Object(p.G)(c, {
								postId: r
							});
							e && (v = e.belongsTo.id)
						}
						v && Object(i.a)(v, r)
					}
				}, O = Object(r.a)(v.e), j = Object(r.a)(v.J), _ = () => async (e, t) => {
					const r = t(),
						a = Object(c.d)(r);
					if (Object(c.g)(r)) {
						const e = "close.gild";
						Object(o.a)({
							type: e
						})
					}
					e(O()), e(Object(u.g)(d.a.GOLD_GILD_MODAL));
					const {
						clickCloseGildModalEvent: i
					} = await Promise.resolve().then(n.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
					Object(m.a)(i(a)(r)), Object(s.b)(s.a.GildingFlow)
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
				return d
			})), n.d(t, "d", (function() {
				return c
			}));
			var r = n("./src/lib/makeActionCreator/index.ts");
			const o = "INCONTEXT__BANNED",
				a = "INCONTEXT__MUTED",
				d = Object(r.a)(o),
				c = Object(r.a)(a)
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
				return m
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
				d = n("./src/config.ts"),
				c = n("./src/lib/constants/index.ts"),
				s = n("./src/lib/makeApiRequest/index.ts"),
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
			const m = "SET_AVATAR_USER",
				v = Object(o.a)(m),
				g = "RANDOM_AVATAR_LOADED",
				h = Object(o.a)(g),
				b = (e, t, n) => async (r, o, a) => {
					let {
						apiContext: l
					} = a;
					var m, v, g, h;
					const b = Object(p.b)(o()),
						y = await (async (e, t, n, r, o) => Object(s.a)(Object(i.a)(e, [u.a]), {
							endpoint: `${d.a.snoovatarUrl}/api/snoovatar?skip_telemetry=true`,
							method: c.jb.POST,
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
						accountIcon: null === (v = null === (m = y.body) || void 0 === m ? void 0 : m.avatar) || void 0 === v ? void 0 : v.headshot_image_url,
						fullBodySnoovatar: null === (h = null === (g = y.body) || void 0 === g ? void 0 : g.avatar) || void 0 === h ? void 0 : h.image_url
					}
				}, y = () => async (e, t, n) => {
					let {
						apiContext: r
					} = n;
					try {
						const t = await (async e => Object(s.a)(Object(i.a)(e, [u.a]), {
							endpoint: `${d.a.snoovatarUrl}/api/account`,
							method: c.jb.GET
						}))(r());
						t.ok && e(v(t.body))
					} catch (o) {
						a.c.captureException(o)
					}
				}, w = () => async (e, t, n) => {
					let {
						apiContext: r
					} = n;
					try {
						const t = await (async e => Object(s.a)(Object(i.a)(e, [u.a]), {
							endpoint: `${d.a.snoovatarUrl}/api/snoovatars/random:byId`,
							method: c.jb.GET
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
				d = n("./src/reddit/constants/modals.ts"),
				c = n("./src/reddit/helpers/trackers/snoovatar.ts"),
				s = n("./src/reddit/selectors/user.ts"),
				i = n("./src/telemetry/index.ts");
			const u = () => async (e, t) => {
				const n = t();
				Object(i.a)(Object(c.l)(n)), e(Object(a.t)({
					forceFetch: !0
				})), await e(Object(o.g)(d.a.SNOOVATAR_MODAL))
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
						activeDetails: m,
						shopTabState: v
					} = e, g = n();
					a && Object(i.a)(Object(c.g)(a)(g)), Object(s.Q)(g) ? await t(Object(o.h)(d.a.SNOOVATAR_MODAL, {
						share: u,
						source: l,
						activeTab: p,
						activeMeSubpage: f,
						activeDetails: m,
						shopTabState: v
					})) : await t(Object(r.i)())
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
				d = n("./src/higherOrderComponents/asModal/index.tsx"),
				c = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				s = n("./src/reddit/controls/TextButton/index.tsx"),
				i = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				u = n("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				l = n.n(u);
			const p = e => e.preventDefault();
			t.a = Object(d.a)(e => a.a.createElement(c.e, null, a.a.createElement(c.i, null, a.a.createElement(i.a, null, a.a.createElement(c.q, null, e.headerText || r.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), a.a.createElement(s.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, a.a.createElement(c.b, null)))), a.a.createElement(c.l, null, a.a.createElement(c.p, {
				className: l.a.ModalText
			}, e.modalText)), a.a.createElement(c.g, null, !e.hideCancelButton && a.a.createElement(c.a, {
				className: l.a.buttonWidth,
				onMouseDown: p,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || r.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), a.a.createElement(c.u, {
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
				d = n("./src/reddit/components/InfoTextTooltip/hooked.m.less"),
				c = n.n(d);

			function s() {
				return (s = Object.assign || function(e) {
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
				const [d, i] = Object(r.useState)(t);
				return Object(r.useEffect)(() => {
					let e = window.setTimeout(() => {
						e = void 0, i(t)
					}, 0);
					return () => {
						e && window.clearTimeout(e), i(!1)
					}
				}, [t]), t ? o.a.createElement("div", s({
					className: Object(a.a)(c.a.tooltip, n.className, {
						[c.a.visible]: d
					})
				}, n.popperProps), n.children, d && o.a.createElement("div", s({
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
		"./src/reddit/components/ModalStyledComponents/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/ModalStyledComponents/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return f
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "n", (function() {
				return v
			})), n.d(t, "p", (function() {
				return g
			})), n.d(t, "o", (function() {
				return h
			})), n.d(t, "f", (function() {
				return b
			})), n.d(t, "m", (function() {
				return y
			})), n.d(t, "h", (function() {
				return w
			})), n.d(t, "j", (function() {
				return O
			})), n.d(t, "k", (function() {
				return j
			})), n.d(t, "g", (function() {
				return _
			})), n.d(t, "i", (function() {
				return I
			})), n.d(t, "q", (function() {
				return k
			})), n.d(t, "d", (function() {
				return C
			})), n.d(t, "l", (function() {
				return x
			})), n.d(t, "t", (function() {
				return A
			})), n.d(t, "u", (function() {
				return P
			})), n.d(t, "r", (function() {
				return M
			})), n.d(t, "a", (function() {
				return T
			})), n.d(t, "s", (function() {
				return E
			})), n.d(t, "c", (function() {
				return S
			}));
			var r = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/lessComponent.tsx"),
				a = n("./node_modules/react/index.js"),
				d = n.n(a),
				c = n("./src/reddit/controls/Button/index.tsx"),
				s = n("./src/reddit/controls/Input/ModalInput.tsx"),
				i = n("./src/reddit/icons/svgs/Close/index.tsx"),
				u = n("./src/reddit/components/ModalStyledComponents/index.m.less"),
				l = n.n(u);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const f = o.a.wrapped(i.a, "CloseIcon", l.a),
				m = o.a.section("ModalBody", l.a),
				v = o.a.section("ModalPostPreview", l.a),
				g = o.a.p("ModalText", l.a),
				h = o.a.div("ModalSmallText", l.a),
				b = o.a.div("ModalDescriptionText", l.a),
				y = o.a.div("ModalMetaText", l.a),
				w = o.a.label("ModalFormItem", l.a),
				O = o.a.wrapped(s.a, "ModalInput", l.a),
				j = o.a.label("ModalInputLabel", l.a),
				_ = o.a.footer("ModalFooter", l.a),
				I = o.a.header("ModalHeader", l.a),
				k = o.a.div("ModalTitle", l.a),
				C = o.a.div("ModalAnnotation", l.a),
				x = o.a.div("ModalMain", l.a),
				A = o.a.textarea("TextArea", l.a),
				P = o.a.wrapped(c.l, "WarningButton", l.a),
				M = o.a.wrapped(c.l, "PrimaryButton", l.a),
				T = o.a.wrapped(c.o, "CancelButton", l.a),
				E = o.a.wrapped(c.r, "RemoveButton", l.a),
				S = e => {
					let {
						className: t,
						...n
					} = e;
					return d.a.createElement(c.t, p({
						kind: c.b.Button,
						priority: c.c.Primary,
						className: Object(r.a)(l.a.ConfirmButton, t)
					}, n))
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
			const d = n("./src/lib/lessComponent.tsx").a.wrapped(r.a, "SubredditName", a.a);
			t.a = d
		},
		"./src/reddit/controls/Input/ModalInput.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/actions/modal.ts"),
				s = n("./src/reddit/constants/keycodes.ts"),
				i = n("./src/reddit/controls/Input/index.m.less"),
				u = n.n(i);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			class p extends o.a.Component {
				constructor() {
					super(...arguments), this.handleKeyDown = e => {
						let {
							keyCode: t
						} = e;
						t === s.a.Escape && this.props.closeModal()
					}
				}
				render() {
					const {
						className: e,
						closeModal: t,
						...n
					} = this.props;
					return o.a.createElement("input", l({
						className: Object(d.a)(u.a.input, e),
						onKeyDown: this.handleKeyDown
					}, n))
				}
			}
			t.a = Object(a.b)(null, {
				closeModal: c.f
			})(p)
		},
		"./src/reddit/controls/Input/index.m.less": function(e, t, n) {
			e.exports = {
				input: "_3eoXtlBWKbkFYoOHUIcIgK"
			}
		},
		"./src/reddit/helpers/trackers/communityAwards.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
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
				return m
			})), n.d(t, "h", (function() {
				return g
			})), n.d(t, "i", (function() {
				return h
			}));
			var r = n("./src/reddit/models/Gold/Award.ts"),
				o = n("./src/reddit/selectors/telemetry.ts"),
				a = n("./src/reddit/helpers/correlationIdTracker.ts"),
				d = n("./src/reddit/helpers/trackers/gild.ts");
			const c = e => ({
					...o.n(e),
					screen: o.Y(e),
					subreddit: o.gb(e),
					userSubreddit: o.qb(e)
				}),
				s = e => ({
					awardId: e.id,
					awardName: e.name,
					isModAward: e.awardType === r.f.Moderator,
					isTemporatyAward: !!e.endsAt,
					numberCoins: e.coinPrice,
					numberMonths: Math.floor((e.daysOfPremium || 0) / 30),
					numberCoinsToRecipient: e.coinReward || 0,
					numberCoinsToCommunity: e.subredditCoinReward || 0,
					type: Object(d.getAwardTypeFromAward)(e)
				}),
				i = () => e => ({
					...c(e),
					source: "awards",
					action: "click",
					correlationId: Object(a.c)(a.a.AwardCreationFlow),
					noun: "create"
				}),
				u = e => t => ({
					...c(t),
					source: "awards",
					action: "click",
					correlationId: Object(a.c)(a.a.AwardDeletionFlow),
					noun: "delete",
					goldPurchase: e ? s(e) : null,
					media: e ? {
						url: e.icon.url
					} : null
				}),
				l = (e, t, n) => r => ({
					...c(r),
					source: "create_award",
					action: e,
					correlationId: Object(a.c)(a.a.AwardCreationFlow),
					noun: t,
					goldPurchase: n
				}),
				p = (e, t, n, r) => o => ({
					...c(o),
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
					...c(r),
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
					goldPurchase: n ? s(n) : null
				}),
				m = (e, t, n) => r => ({
					...c(r),
					source: "create_award",
					action: e,
					correlationId: Object(a.c)(a.a.AwardCreationFlow),
					noun: t,
					goldPurchase: n ? s(n) : null
				}),
				v = (e, t, n) => r => ({
					...c(r),
					source: "awards",
					action: "click",
					noun: n,
					goldPurchase: s(e),
					profile: o.R(r, t),
					subreddit: o.hb(r, t)
				}),
				g = (e, t) => v(e, t, "disable_in_community"),
				h = (e, t) => v(e, t, "enable_in_community")
		},
		"./src/reddit/helpers/trackers/gild.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "getAwardTypeFromAward", (function() {
				return i
			})), n.d(t, "clickGildEvent", (function() {
				return p
			})), n.d(t, "clickRpanGiveAward", (function() {
				return f
			})), n.d(t, "clickAddAward", (function() {
				return m
			})), n.d(t, "clickHideAward", (function() {
				return v
			})), n.d(t, "clickConfirmHideAward", (function() {
				return g
			})), n.d(t, "clickCancelHideAward", (function() {
				return h
			})), n.d(t, "clickAwardReportFlow", (function() {
				return y
			})), n.d(t, "clickCancelAwardReportFlow", (function() {
				return w
			})), n.d(t, "clickFlagAwardUsage", (function() {
				return O
			})), n.d(t, "clickCancelFlagAwardUsage", (function() {
				return j
			})), n.d(t, "clickConfirmFlagAwardUsage", (function() {
				return _
			})), n.d(t, "clickReportAward", (function() {
				return I
			})), n.d(t, "clickCancelReportAward", (function() {
				return k
			})), n.d(t, "clickConfirmReportAward", (function() {
				return C
			})), n.d(t, "viewGildModalEvent", (function() {
				return x
			})), n.d(t, "clickSelectAwardEvent", (function() {
				return A
			})), n.d(t, "triggerAnonymousEvent", (function() {
				return P
			})), n.d(t, "clickMessageInputEvent", (function() {
				return M
			})), n.d(t, "typeMessageInputEvent", (function() {
				return T
			})), n.d(t, "clickLearnMoreLinkEvent", (function() {
				return E
			})), n.d(t, "clickQuestionMarkEvent", (function() {
				return S
			})), n.d(t, "clickConfirmAwardEvent", (function() {
				return R
			})), n.d(t, "clickGetPremiumEvent", (function() {
				return G
			})), n.d(t, "clickAddCoinsButtonEvent", (function() {
				return N
			})), n.d(t, "clickNextButtonEvent", (function() {
				return L
			})), n.d(t, "clickCloseGildModalEvent", (function() {
				return D
			})), n.d(t, "viewKarmaSuccessEvent", (function() {
				return U
			})), n.d(t, "clickFilterEvent", (function() {
				return F
			})), n.d(t, "clickNextFiltersEvent", (function() {
				return B
			})), n.d(t, "clickPreviousFiltersEvent", (function() {
				return q
			}));
			var r = n("./src/reddit/models/Gold/Award.ts"),
				o = n("./src/reddit/selectors/telemetry.ts"),
				a = n("./src/telemetry/models/GoldPurchase.ts"),
				d = n("./src/reddit/helpers/correlationIdTracker.ts"),
				c = n("./src/reddit/helpers/isComment.ts"),
				s = n("./src/reddit/selectors/gild.ts");
			const i = e => e.awardType === r.f.Global && e.awardSubType === r.d.Appreciation ? a.GoldPurchaseType.GidAppreciation : e.awardType === r.f.Global && e.awardSubType === r.d.Premium ? a.GoldPurchaseType.GidPremium : e.awardSubType === r.d.Group ? a.GoldPurchaseType.GidGroup : e.awardType === r.f.Community ? a.GoldPurchaseType.GidCommunity : e.awardType === r.f.Moderator ? a.GoldPurchaseType.GidMod : e.awardType === r.f.Global && e.awardSubType === r.d.Global ? a.GoldPurchaseType.GidGlobal : a.GoldPurchaseType.GidUnknown,
				u = (e, t) => ({
					awardId: e.id,
					awardName: e.name,
					isTemporaryAward: !!e.endsAt,
					numberCoinsToRecipient: e.coinReward,
					type: i(e),
					...t
				}),
				l = (e, t) => ({
					...o.n(e),
					comment: t ? o.h(e, t) : void 0,
					correlationId: Object(s.b)(e) || Object(d.d)(d.a.GildingFlow, !1),
					post: t ? o.H(e, t) : void 0,
					screen: o.Y(e),
					subreddit: o.gb(e),
					userSubreddit: o.qb(e)
				}),
				p = e => t => ({
					...l(t, e),
					source: Object(c.a)(e) ? "comment" : "post",
					action: "click",
					noun: "give_gold",
					feed: o.q(t)
				}),
				f = e => t => ({
					...l(t, e),
					source: "stream_player",
					action: "click",
					noun: "give_gold"
				}),
				m = e => t => ({
					...l(t, e),
					source: Object(c.a)(e) ? "comment" : "post",
					action: "click",
					noun: "add_award",
					feed: o.q(t)
				}),
				v = (e, t) => n => ({
					...l(n, t),
					source: Object(c.a)(t) ? "comment" : "post",
					action: "click",
					noun: "hide_award",
					goldPurchase: u(e)
				}),
				g = (e, t) => n => ({
					...l(n, t),
					source: Object(c.a)(t) ? "comment" : "post",
					action: "click",
					noun: "confirm_hide_award",
					goldPurchase: u(e)
				}),
				h = (e, t) => n => ({
					...l(n, t),
					source: Object(c.a)(t) ? "comment" : "post",
					action: "click",
					noun: "cancel_hide_award",
					goldPurchase: u(e)
				}),
				b = e => (t, n) => r => ({
					...l(r, n),
					source: Object(c.a)(n) ? "comment" : "post",
					action: "click",
					noun: e,
					goldPurchase: u(t)
				}),
				y = b("award_hovercard_report"),
				w = b("cancel_award_hovercard_report"),
				O = b("flag_award"),
				j = b("cancel_flag_award"),
				_ = b("confirm_flag_award"),
				I = b("report_community_award"),
				k = b("cancel_report_community_award"),
				C = b("confirm_report_community_award"),
				x = (e, t, n) => r => ({
					...l(r, n),
					source: "give_gold",
					action: "view",
					noun: "page",
					goldPurchase: {
						defaultOption: e,
						defaultAnonymous: t
					}
				}),
				A = (e, t, n) => r => ({
					...l(r, t),
					source: "give_gold",
					action: "click",
					noun: "award",
					goldPurchase: u(e, n)
				}),
				P = (e, t) => n => ({
					...l(n, t),
					source: "give_gold",
					action: e,
					noun: "anonymous"
				}),
				M = e => t => ({
					...l(t, e),
					source: "give_gold",
					action: "click",
					noun: "message_input"
				}),
				T = e => t => ({
					...l(t, e),
					source: "give_gold",
					action: "type",
					noun: "message_input"
				}),
				E = e => t => ({
					...l(t, e),
					source: "give_gold",
					action: "click",
					noun: "learn_more"
				}),
				S = e => t => ({
					...l(t, e),
					source: "give_gold",
					action: "click",
					noun: "question"
				}),
				R = (e, t) => n => ({
					...l(n, e),
					source: "give_gold",
					action: "click",
					noun: "confirm",
					goldPurchase: {
						contentType: Object(c.a)(e) ? "comment" : "post",
						...u(t)
					}
				}),
				G = (e, t) => n => ({
					...l(n, e),
					source: "give_gold",
					action: "click",
					noun: "get_premium",
					goldPurchase: {
						contentType: Object(c.a)(e) ? "comment" : "post",
						...u(t)
					}
				}),
				N = e => t => ({
					...l(t, e),
					source: "give_gold",
					action: "click",
					noun: "add_coins"
				}),
				L = e => t => ({
					...l(t, e),
					source: "give_gold",
					action: "click",
					noun: "next"
				}),
				D = e => t => ({
					...l(t, e),
					source: "give_gold",
					action: "click",
					noun: "close"
				}),
				U = e => {
					let {
						award: t,
						awardeeKarmaEarned: n,
						awarderKarmaEarned: r,
						numberCoins: o,
						thingId: a
					} = e;
					return e => ({
						...l(e, a),
						source: "give_gold",
						action: "view",
						noun: "karma_success",
						goldPurchase: {
							contentType: Object(c.a)(a) ? "comment" : "post",
							awardeeKarmaEarned: n,
							awarderKarmaEarned: r,
							numberCoins: o,
							...u(t)
						}
					})
				},
				F = e => t => ({
					...l(t),
					source: "give_gold",
					action: "click",
					noun: "filter",
					goldPurchase: {
						filterId: e.tag,
						filterName: e.content.markdown
					}
				}),
				B = () => e => ({
					...l(e),
					source: "give_gold",
					action: "click",
					noun: "next_filters"
				}),
				q = () => e => ({
					...l(e),
					source: "give_gold",
					action: "click",
					noun: "previous_filters"
				})
		},
		"./src/reddit/helpers/trackers/goldPayment.ts": function(e, t, n) {
			"use strict";
			n.d(t, "h", (function() {
				return v
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
				d = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				c = n("./src/reddit/selectors/goldPurchaseModals.ts"),
				s = n("./src/reddit/selectors/telemetry.ts"),
				i = n("./src/telemetry/models/GoldPurchase.ts"),
				u = n("./src/telemetry/models/Payment.ts"),
				l = n("./src/reddit/helpers/trackers/gild.ts"),
				p = n("./src/reddit/helpers/correlationIdTracker.ts"),
				f = n("./src/reddit/helpers/isComment.ts"),
				m = n("./src/reddit/helpers/trackers/communityAwards.ts");
			const v = (e, t) => {
					const {
						thingId: n,
						packageId: u
					} = t, v = !!n, g = a.b(e), h = g ? Object(l.getAwardTypeFromAward)(g) : null, b = v ? h : c.o(e) ? i.GoldPurchaseType.Premium : i.GoldPurchaseType.Coins, y = n ? Object(f.a)(n) ? "comment" : "post" : void 0, w = u || c.t(e), O = [...Object(d.d)(e), ...Object(d.f)(e)].filter(e => e.mobileId === w)[0], j = t.offerContext || (g && 0 === g.coinPrice ? o.a.StorefrontFreeAward : Object(o.d)(O, v)), _ = O ? Math.round(1e4 * (O.baselinePennies - O.pennies) / O.baselinePennies) / 100 : 0, I = O ? Math.round(1e4 * (O.coins - O.baselineCoins) / O.coins) / 100 : 0, k = O ? O.baselinePennies !== O.pennies ? `${_}_percent_price` : O.baselineCoins !== O.coins ? `${I}_percent_bonus` : void 0 : void 0, C = b === i.GoldPurchaseType.Premium ? r.yb : O ? O.pennies : void 0;
					return {
						...s.n(e),
						comment: n ? s.h(e, n) : null,
						correlationId: c.r(e) || Object(p.d)(p.a.GoldPayment, !1),
						post: n ? s.H(e, n) : null,
						screen: s.Y(e),
						subreddit: n ? s.gb(e) : null,
						goldPurchase: {
							...g ? Object(m.a)(g) : null,
							type: b,
							gildedContent: v,
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
					...v(r, {
						packageId: t,
						thingId: e,
						offerContext: n
					}),
					source: "gold_payment",
					action: "click",
					noun: "close"
				}),
				h = e => t => ({
					...v(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "paypal"
				}),
				b = e => t => ({
					...v(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "continue_paypal"
				}),
				y = e => t => ({
					...v(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "credit_card"
				}),
				w = e => t => ({
					...v(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "complete_credit_card"
				}),
				O = (e, t) => n => ({
					...v(n, {
						packageId: e,
						offerContext: t
					}),
					source: "gold_payment",
					action: "click",
					noun: "confirm"
				}),
				j = e => t => ({
					...v(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "display",
					noun: "error"
				}),
				_ = (e, t, n) => r => {
					const o = v(r, {
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
							source: e ? i.GiveGold : c.o(r) ? i.PremiumMarketing : i.CoinsMarketing
						}
					}
				},
				I = e => t => {
					var n;
					const r = v(t, {
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
				return s
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
				return m
			})), n.d(t, "f", (function() {
				return v
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
				return A
			})), n.d(t, "o", (function() {
				return P
			}));
			var r = n("./src/reddit/models/Gold/ProductOffer.ts"),
				o = n("./src/reddit/selectors/avatarMarketing.ts"),
				a = n("./src/reddit/selectors/telemetry.ts"),
				d = n("./src/reddit/selectors/user.ts");
			const c = {
					goldPurchase: {
						offerContext: r.a.AvatarNewGear
					}
				},
				s = e => t => {
					const n = {
						source: e,
						action: "click",
						noun: "edit_snoovatar",
						...a.n(t)
					};
					return Object(o.a)(t) && Object.assign(n, c), n
				},
				i = (e, t) => n => {
					const {
						id: r
					} = Object(d.Ab)(n, {
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
					snoovatar: a.eb(e)
				}),
				l = e => ({
					...a.n(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "snoovatar_builder"
					},
					snoovatar: a.eb(e)
				}),
				p = e => ({
					...a.n(e),
					source: "avatar_builder",
					action: "click",
					noun: "close",
					snoovatar: a.eb(e)
				}),
				f = e => ({
					source: "nav",
					action: "view",
					noun: "avatar_marketing",
					...a.n(e),
					...c
				}),
				m = e => ({
					source: "nav",
					action: "click",
					noun: "avatar_marketing",
					...a.n(e),
					...c
				}),
				v = e => t => ({
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
					snoovatar: a.eb(n),
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
					snoovatar: a.eb(r)
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
				x = (e, t, n) => r => ({
					source: e,
					action: t,
					noun: n,
					...a.n(r),
					actionInfo: {
						pageType: "onboarding"
					},
					snoovatar: a.eb(r)
				}),
				A = e => x("onboarding", "click", e),
				P = () => x("avatar", "view", "onboarding")
		},
		"./src/reddit/hooks/useInfoTextTooltip.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var r = n("./node_modules/icepick/icepick.js"),
				o = n("./node_modules/react/index.js"),
				a = n("./src/lib/hooks/useTooltip.ts");
			const d = Object(r.freeze)({
				name: "offset",
				options: {
					offset: [0, 6]
				}
			});

			function c(e) {
				const t = Object(o.useMemo)(() => {
					const t = Object(a.a)(e);
					return Object(r.updateIn)(t, ["modifiers"], e => Object(r.push)(e, d))
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
				return s
			}));
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				d = n("./src/reddit/icons/fonts/Premium/index.m.less"),
				c = n.n(d);
			const s = n("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				title: e.title,
				className: `${Object(a.b)("premium",e.isFilled)} ${e.className}`
			}), "PremiumIcon", c.a)
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
		"./src/reddit/layout/twoCol/ExpandLeft/index.m.less": function(e, t, n) {
			e.exports = {
				left: "_5gAwSCo7K8G413IoE78Ml",
				right: "_2ghjBMFIsORwdO3oh2Kq6g",
				exapndLeftContainer: "_1zTJo0Ndih4fp__5DjbClN"
			}
		},
		"./src/reddit/layout/twoCol/ExpandLeft/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/layout/twoCol/ExpandLeft/index.m.less"),
				s = n.n(c);
			t.a = Object(a.a)(e => o.a.createElement("div", {
				className: Object(d.a)(s.a.exapndLeftContainer, e.className)
			}, o.a.createElement("div", {
				className: s.a.left
			}, Array.isArray(e.children) && e.children[0]), o.a.createElement("div", {
				className: s.a.right,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[1])), 2)
		},
		"./src/reddit/reducers/features/avatar/index.ts": function(e, t, n) {
			"use strict";
			var r, o, a = n("./node_modules/redux/es/redux.js"),
				d = n("./src/reddit/actions/snoovatar.ts");
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
			var s = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case d.b:
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

			function m(e) {
				if (!e) return i;
				const t = i;
				return e.forEach(e => {
					var n;
					const {
						startsAt: r,
						endsAt: o,
						webAssetUrls: a,
						tags: d
					} = e, c = r && new Date(r) <= new Date, s = !!o && new Date(o) < new Date, i = !!c && !s, m = (d || []).includes(p);
					if (d && d.includes(u) && !m) {
						const {
							text: n,
							id: r
						} = e, o = a || null, c = f(d);
						t && (t.quickCreateV1 = {
							...c,
							id: r,
							text: n,
							active: i && !!o,
							webAssetUrls: o
						})
					}
					if (d && d.includes(l) && !m) {
						const e = a || null,
							r = (null === (n = d.find(e => e.startsWith("feature:") && e.includes("web"))) || void 0 === n ? void 0 : n.split("feature:")[1]) || null;
						t && (t.marketingEvent = {
							active: i && !!e,
							assetUrls: e,
							experimentRequired: r
						})
					}
				}), t
			}
			var v = n("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				g = n("./src/reddit/actions/modal.ts"),
				h = n("./src/reddit/constants/modals.ts");
			var b = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				var n;
				switch (t.type) {
					case v.s:
						const {
							avatarMarketingEvents: r
						} = t.payload;
						return r ? m(r) : i;
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
					case d.a: {
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
				avatarUser: s,
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
				d = n("./src/reddit/models/SubredditModeration/index.ts");
			const c = {};
			var s = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case o.g: {
							const {
								subredditId: n,
								fetchedToken: r
							} = t.payload, o = Object(d.e)(n, r);
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
							} = t.payload, o = Object(d.e)(n, r);
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
					pending: s
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
						} = t.payload, o = Object(d.e)(r, n);
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
				m = n("./node_modules/icepick/icepick.js");
			const v = {};
			var g = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v,
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
						return Object(m.merge)(e, o)
					}
					case o.k: {
						const {
							subredditId: n,
							userId: r
						} = t.payload;
						return Object(m.unsetIn)(e, [n, r])
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
			var x = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : C,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case o.n: {
							const {
								subredditId: n,
								fetchedToken: r
							} = t.payload, o = Object(d.f)(n, r);
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
							} = t.payload, o = Object(d.f)(n, r);
							return {
								...e,
								[o]: !1
							}
						}
						default:
							return e
					}
				},
				A = Object(r.c)({
					error: k,
					pending: x
				});
			const P = {};
			var M = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : P,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.m: {
						const {
							fetchedToken: n,
							subredditId: r
						} = t.payload, o = Object(d.f)(r, n);
						return {
							...e,
							[o]: !0
						}
					}
					default:
						return e
				}
			};
			const T = {};
			var E = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : T,
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
							return Object(m.merge)(e, a)
						}
						case o.o: {
							const {
								subredditId: n,
								userId: r
							} = t.payload, o = {
								[n]: e[n].filter(e => e.redditor.id !== r)
							};
							return Object(m.merge)(e, o)
						}
						default:
							return e
					}
				},
				G = Object(r.c)({
					api: A,
					fetchedTokens: M,
					loadMore: E,
					models: R
				}),
				N = n("./src/reddit/actions/grantUserFlair/constants.ts");
			var L = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case N.g:
					case N.i:
						return null;
					case N.f:
						return t.payload;
					default:
						return e
				}
			};
			var D = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case N.i:
							return !0;
						case N.g:
						case N.f:
							return !1;
						default:
							return e
					}
				},
				U = Object(r.c)({
					error: L,
					pending: D
				}),
				F = n("./node_modules/lodash/merge.js"),
				B = n.n(F),
				q = n("./node_modules/lodash/omit.js"),
				K = n.n(q);
			const H = {};
			var z = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : H,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case N.g:
					case N.k: {
						const {
							subredditId: n,
							flairedUsers: r
						} = t.payload;
						return B()({
							...e
						}, {
							[n]: r
						})
					}
					case N.c: {
						const {
							subredditId: n,
							userName: r
						} = t.payload, o = K()(e[n], r);
						return {
							...e,
							[n]: o
						}
					}
					case N.a:
					case N.b:
					case N.h:
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
			const W = {};
			var V = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : W,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case N.g: {
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
			var Y = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case N.l:
					case N.k:
						return null;
					case N.j:
						return t.payload;
					default:
						return e
				}
			};
			var J = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case N.l:
							return !0;
						case N.k:
						case N.j:
							return !1;
						default:
							return e
					}
				},
				X = Object(r.c)({
					error: Y,
					pending: J
				});
			var Q = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case N.k: {
							const {
								searchResult: e
							} = t.payload;
							return e
						}
						case N.c: {
							const {
								userName: n
							} = t.payload;
							return e === n ? null : e
						}
						default:
							return e
					}
				},
				Z = Object(r.c)({
					api: X,
					result: Q
				});
			const $ = {};
			var ee = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case N.g: {
							const {
								key: n,
								userOrder: r
							} = t.payload;
							return {
								...e,
								[n]: r
							}
						}
						case N.a: {
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
						case N.c: {
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
					models: z,
					pageInfo: V,
					search: Z,
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
			var de = function() {
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
							return B()({
								...e
							}, a)
						}
						default:
							return e
					}
				},
				ce = Object(r.c)({
					itemOrder: oe,
					models: de
				});
			var se = function() {
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
			var me = function() {
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
			var ve = function() {
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
					actions: ce,
					endCursor: se,
					hasNextPage: ue,
					hasPreviousPage: pe,
					moderators: me,
					startCursor: ve
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
						return Object(m.merge)(e, o)
					}
					case o.C: {
						const {
							subredditId: n,
							userId: r,
							permissions: o
						} = t.payload;
						return Object(m.setIn)(e, [n, r, "modPermissions"], o)
					}
					case o.jb: {
						const {
							subredditId: n,
							userId: r
						} = t.payload;
						return Object(m.unsetIn)(e, [n, r])
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
							return Object(m.setIn)(e, [n, o], r.moderatorIds)
						}
						case o.jb: {
							const {
								subredditId: n,
								userId: r,
								key: o
							} = t.payload, a = e[n][o].filter(e => e !== r);
							return Object(m.setIn)(e, [n, o], a)
						}
						default:
							return e
					}
				},
				Ce = Object(r.c)({
					data: ke,
					api: _e
				});
			var xe = function() {
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
			var Ae = function() {
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
				Pe = Object(r.c)({
					error: xe,
					pending: Ae
				});
			const Me = {};
			var Te = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Me,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.E: {
						const {
							subredditId: n,
							moderators: r
						} = t.payload;
						return Object(m.set)(e, n, r)
					}
					case o.gb: {
						const {
							subredditId: n,
							userId: r
						} = t.payload;
						return Object(m.unsetIn)(e, [n, r])
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
						return Object(m.merge)(e, a)
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
					api: Pe,
					models: Te,
					userOrder: Se
				});
			const Ge = {};
			var Ne = function() {
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
						return Object(m.merge)(e, a)
					}
					case o.I:
					case o.J: {
						const {
							subredditId: n
						} = t.payload;
						return Object(m.unset)(e, n)
					}
					default:
						return e
				}
			};
			const Le = {};
			var De = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Le,
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
			const Be = {};
			var qe = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Be,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.L: {
						const {
							response: n
						} = t.payload, r = {
							[n.subredditId]: n.moderators
						};
						return Object(m.merge)({
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
						return e[r] && e[r][o] ? Object(m.setIn)(e, [r, o, "modPermissions"], a) : e
					}
					default:
						return e
				}
			};
			var Ke = function() {
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
			var He = function() {
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
				ze = Object(r.c)({
					error: Ke,
					pending: He
				}),
				We = n("./node_modules/lodash/isEqual.js"),
				Ve = n.n(We);
			var Ye = function() {
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
							return e && e.id === n && !Ve()(e.modPermissions, r) ? {
								...e,
								modPermissions: r
							} : e
						}
						default:
							return e
					}
				},
				Je = Object(r.c)({
					api: ze,
					result: Ye
				});
			const Xe = {};
			var Qe = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xe,
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
			const Ze = {};
			var $e = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ze,
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
					pending: $e
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
							return Object(m.merge)(e, {
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
							}), Object(m.set)(e, n, o)
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
					invitePending: Ne,
					loadMoreModerators: Fe,
					loadMoreEditableModerators: De,
					models: qe,
					search: Je,
					userOrder: rt
				}),
				at = n("./src/reddit/actions/bulkActions/constants.ts");
			var dt = function() {
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
				ct = n("./src/reddit/actions/modQueue/constants.ts");
			var st = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case at.c:
							return !0;
						case at.b:
						case at.a:
						case ct.s:
						case ct.r:
							return !1;
						default:
							return e
					}
				},
				it = Object(r.c)({
					error: dt,
					pending: st
				});
			const ut = {};
			var lt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ut,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ct.a: {
							const {
								ids: n
							} = t.payload, r = {};
							return n.forEach(e => r[e] = !0), {
								...e,
								...r
							}
						}
						case ct.d: {
							const {
								ids: n
							} = t.payload;
							return K()(e, n)
						}
						case ct.c: {
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
			var mt = function() {
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
				vt = Object(r.c)({
					api: it,
					selectedItems: lt,
					undoLastAction: mt
				});
			var gt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ct.g:
					case ct.f:
						return null;
					case ct.e:
						return t.payload;
					default:
						return e
				}
			};
			var ht = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ct.g:
							return !0;
						case ct.f:
						case ct.e:
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
					case ct.f: {
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
						case ct.f: {
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
					case ct.i:
					case ct.f:
					case ct.m:
					case ct.p:
					case ct.v: {
						const {
							response: e
						} = t.payload, {
							moderatedAfter: n
						} = e;
						return n
					}
					case ct.k: {
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
			var xt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ct,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ct.i:
					case ct.f:
					case ct.m:
					case ct.p:
					case ct.v: {
						const {
							response: e
						} = t.payload, {
							listingOrder: n
						} = e;
						return n
					}
					case ct.k: {
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
			var At = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ct.b:
						return !0;
					default:
						return e
				}
			};
			var Pt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ct.k:
							return !0;
						case ct.b:
							return !1;
						default:
							return e
					}
				},
				Mt = Object(r.c)({
					after: kt,
					data: xt,
					loaded: At,
					pending: Pt
				});
			var Tt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ct.j:
					case ct.i:
						return null;
					case ct.h:
						return t.payload;
					default:
						return e
				}
			};
			var Et = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ct.j:
							return !0;
						case ct.i:
						case ct.h:
							return !1;
						default:
							return e
					}
				},
				St = Object(r.c)({
					error: Tt,
					pending: Et
				});
			const Rt = {};
			var Gt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Rt,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ct.i: {
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
			const Nt = {};
			var Lt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Nt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ct.i: {
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
					loadMore: Lt
				});
			var Ut = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ct.n:
					case ct.m:
						return null;
					case ct.l:
						return t.payload;
					default:
						return e
				}
			};
			var Ft = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ct.n:
							return !0;
						case ct.m:
						case ct.l:
							return !1;
						default:
							return e
					}
				},
				Bt = Object(r.c)({
					error: Ut,
					pending: Ft
				});
			const qt = {};
			var Kt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qt,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ct.m: {
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
			const Ht = {};
			var zt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ht,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ct.m: {
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
				Wt = Object(r.c)({
					api: Bt,
					itemOrder: Kt,
					loadMore: zt
				});
			var Vt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ct.q:
					case ct.p:
						return null;
					case ct.o:
						return t.payload;
					default:
						return e
				}
			};
			var Yt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ct.q:
							return !0;
						case ct.p:
						case ct.o:
							return !1;
						default:
							return e
					}
				},
				Jt = Object(r.c)({
					error: Vt,
					pending: Yt
				});
			const Xt = {};
			var Qt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xt,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ct.p: {
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
			const Zt = {};
			var $t = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Zt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ct.p: {
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
					api: Jt,
					itemOrder: Qt,
					loadMore: $t
				});
			var tn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ct.w:
					case ct.v:
						return null;
					case ct.u:
						return t.payload;
					default:
						return e
				}
			};
			var nn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ct.w:
							return !0;
						case ct.v:
						case ct.u:
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
					case ct.v: {
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
			const dn = {};
			var cn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : dn,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ct.v: {
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
				sn = Object(r.c)({
					api: rn,
					itemOrder: an,
					loadMore: cn
				}),
				un = Object(r.c)({
					bulkAction: vt,
					edited: _t,
					moderatedCommunitiesOrder: Mt,
					modqueue: Dt,
					reports: Wt,
					spam: en,
					unmoderated: sn
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
							} = t.payload, o = Object(d.e)(n, r);
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
							} = t.payload, o = Object(d.e)(n, r);
							return {
								...e,
								[o]: !1
							}
						}
						default:
							return e
					}
				},
				mn = Object(r.c)({
					error: ln,
					pending: fn
				});
			const vn = {};
			var gn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vn,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case o.W: {
							const {
								fetchedToken: n,
								subredditId: r
							} = t.payload, o = Object(d.e)(r, n);
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
						return Object(m.merge)(e, o)
					}
					case o.cb: {
						const {
							subredditId: n,
							userId: r
						} = t.payload;
						return Object(m.unsetIn)(e, [n, r])
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
				xn = Object(r.c)({
					api: kn,
					result: Cn
				});
			const An = {};
			var Pn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : An,
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
				Mn = Object(r.c)({
					api: mn,
					fetchedTokens: gn,
					inContext: bn,
					loadMore: wn,
					models: jn,
					search: xn,
					userOrder: Pn
				});
			t.a = Object(r.c)({
				approvedSubmitters: I,
				approvedTalkHosts: G,
				flairedUsers: te,
				moderationLog: ge,
				moderators: ot,
				modQueue: un,
				muted: Mn
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
				return d
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
			const a = e => {
					var t, n;
					return null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.avatarUser
				},
				d = e => {
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
				return d
			})), n.d(t, "a", (function() {
				return c
			}));
			var r = n("./src/lib/initializeClient/installReducer.ts"),
				o = n("./src/reddit/reducers/features/avatar/index.ts"),
				a = n("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			Object(r.a)({
				features: {
					avatar: o.a
				}
			});
			const d = e => {
					var t, n;
					return !!(null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.marketing)
				},
				c = e => {
					var t, n, r, o;
					const d = null === (r = null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.marketing) || void 0 === r ? void 0 : r.marketingEvent;
					if (!(null == d ? void 0 : d.active) || !(null === (o = null == d ? void 0 : d.assetUrls) || void 0 === o ? void 0 : o.length)) return null;
					const c = d.assetUrls[0];
					return !d.experimentRequired || Object(a.a)(d.experimentRequired)(e) ? c : null
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
				return d
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "e", (function() {
				return s
			})), n.d(t, "a", (function() {
				return i
			}));
			const r = e => e.gild.gildModalThingId,
				o = e => e.gild.correlationId || void 0,
				a = e => e.gild.isAnonymous,
				d = e => e.gild.isIframed,
				c = e => e.gild.message,
				s = e => e.gild.api.pending,
				i = e => e.gild.api.error
		},
		"./src/reddit/selectors/gold/awardIcon.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return p
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "a", (function() {
				return m
			})), n.d(t, "e", (function() {
				return v
			})), n.d(t, "d", (function() {
				return g
			}));
			var r = n("./src/lib/objectSelector/index.ts"),
				o = n("./src/reddit/models/Gold/Award.ts"),
				a = n("./src/reddit/selectors/commentSelector.ts"),
				d = n("./src/reddit/selectors/gold/giveAwards.ts"),
				c = n("./src/reddit/selectors/posts.ts"),
				s = n("./src/reddit/selectors/user.ts"),
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
					const d = Object(i.c)(e),
						s = u.find(e => e >= r),
						l = o ? Object(c.G)(e, {
							postId: o
						}) || Object(a.b)(e, {
							commentId: o
						}) : void 0;
					return n.reduce((e, t) => (t && (e[t.id] = p({
						award: t,
						size: s,
						prefersReducedMotion: d,
						postOrComment: l
					})), e), {})
				}),
				m = (e, t) => {
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
				v = (e, t) => {
					let {
						minSize: n,
						userName: r
					} = t;
					const o = Object(s.Ab)(e, {
						userName: r
					});
					if (o && o.awardedLastMonth && o.awardedLastMonth.topAward) return m(e, {
						award: o.awardedLastMonth.topAward,
						minSize: n
					})
				},
				g = e => {
					const t = Object(d.b)(e),
						n = Object(d.a)(e);
					return m(e, {
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
				return d
			})), n.d(t, "s", (function() {
				return c
			})), n.d(t, "r", (function() {
				return s
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
				return m
			})), n.d(t, "o", (function() {
				return v
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
				return x
			})), n.d(t, "m", (function() {
				return A
			})), n.d(t, "e", (function() {
				return P
			})), n.d(t, "d", (function() {
				return M
			}));
			var r = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				o = n("./src/lib/initializeClient/installReducer.ts"),
				a = n("./src/reddit/reducers/features/goldPurchase/index.ts");
			Object(o.a)({
				features: {
					goldPurchase: a.a
				}
			});
			const d = e => e.features.goldPurchase.purchaseModal.activePage,
				c = e => e.features.goldPurchase.purchaseModal.gildThingId || void 0,
				s = e => e.features.goldPurchase.purchaseModal.correlationId || void 0,
				i = e => e.features.goldPurchase.purchaseModal.showModal,
				u = e => e.features.goldPurchase.purchaseModal.packageId,
				l = e => e.features.goldPurchase.packageOfferModal.packageId,
				p = e => e.features.goldPurchase.premiumPurchaseModal.renewInterval,
				f = e => {
					const t = Object(r.l)(e),
						n = (e => e.features.goldPurchase.premiumPurchaseModal.packageId)(e);
					return t.length && n && t.find(e => e.mobileId === n) || null
				},
				m = e => e.features.goldPurchase.premiumPurchaseModal.activePage,
				v = e => e.features.goldPurchase.premiumPurchaseModal.showModal,
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
				x = e => e.features.goldPurchase.payment.stripeToken.errorMessage,
				A = e => e.features.goldPurchase.payment.stripeToken.pending,
				P = e => e.features.goldPurchase.payment.paypal.passthrough,
				M = e => e.features.goldPurchase.payment.paypal.errorMessage
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PostCreation~Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~r~4c415e24.2c818a70ed027fce9649.js.map