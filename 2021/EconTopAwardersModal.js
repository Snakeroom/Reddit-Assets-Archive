// https://www.redditstatic.com/desktop2x/EconTopAwardersModal.447db072f44e81d82959.js
// Retrieved at 12/6/2021, 6:20:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EconTopAwardersModal"], {
		"./src/lib/currency/centsToDollars/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			var a = r("./src/lib/currency/cleanNumber/index.ts");

			function n(e, t) {
				const r = Object(a.a)(e),
					n = parseInt(r) / 100;
				return Math.floor(n) !== n || t ? n.toFixed(2) : String(n)
			}
		},
		"./src/lib/currency/cleanNumber/index.ts": function(e, t, r) {
			"use strict";

			function a(e) {
				return e.replace(/[^0-9.]/g, "").replace(/^0+/, "") || "0"
			}
			r.d(t, "a", (function() {
				return a
			}))
		},
		"./src/lib/currency/currencies.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return a
			})), r.d(t, "c", (function() {
				return s
			})), r.d(t, "d", (function() {
				return o
			})), r.d(t, "a", (function() {
				return d
			})), r.d(t, "f", (function() {
				return c
			})), r.d(t, "g", (function() {
				return i
			})), r.d(t, "e", (function() {
				return l
			}));
			var a, n = r("./node_modules/fbt/lib/FbtPublic.js");
			! function(e) {
				e.Real = "real", e.Crypto = "crypto", e.Reddit = "reddit"
			}(a || (a = {}));
			const s = "USD",
				o = "ETH",
				d = "COINS",
				c = [o, "BTC"],
				i = [d, "SUBREDDIT_POINTS", "GAME_TOKENS"],
				l = {
					COINS: () => n.fbt._("Coins", null, {
						hk: "1T2Y4p"
					}),
					SUBREDDIT_POINTS: () => n.fbt._("Subreddit points", null, {
						hk: "1ytOO3"
					}),
					GAME_TOKENS: () => n.fbt._("Game tokens", null, {
						hk: "16BUrU"
					})
				}
		},
		"./src/lib/localizeCurrency/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return l
			}));
			var a = r("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				n = r("./src/lib/currency/centsToDollars/index.ts"),
				s = r("./src/lib/currency/currencies.ts"),
				o = r("./src/lib/prettyPrintNumber/index.ts"),
				d = r("./src/reddit/helpers/governance/tokens.ts"),
				c = r("./src/reddit/constants/intlSupport.ts");
			const i = (e, {
					locale: t = a.DEFAULT_LOCALE,
					pretty: r,
					formatOptions: n
				} = {}) => {
					const s = Number(e);
					return Object(c.c)() ? r ? Object(o.b)(s) : new Intl.NumberFormat(t, n).format(s) : m(s, r, t)
				},
				l = (e, t = {}) => {
					const {
						locale: r = a.DEFAULT_LOCALE,
						pretty: o,
						formatOptions: i,
						displayConversion: l,
						forceDecimals: b,
						currency: f = t.currency || (t.type ? p(t.type) : s.c),
						type: v = t.type || (t.currency ? u(t.currency) : s.b.Real)
					} = t, x = Number(e), h = String(e);
					switch (v) {
						case s.b.Reddit: {
							const e = s.e[f],
								t = e ? e() : f;
							return Object(c.c)() ? new Intl.NumberFormat(r, {
								currencyDisplay: "symbol",
								...i
							}).format(x) + " " + t : m(x, o, r, t)
						}
						case s.b.Crypto: {
							if (o) {
								return Object(d.c)(h, l) + " " + f
							}
							const e = Number(Object(d.b)(h, l));
							return Object(c.c)() ? new Intl.NumberFormat(r, {
								style: "currency",
								currency: f,
								currencyDisplay: "symbol",
								minimumFractionDigits: 0,
								maximumFractionDigits: 0,
								...i
							}).format(e) : m(e, o, r, f)
						}
						case s.b.Real:
						default: {
							const e = Number(Object(n.a)(h, b));
							return Object(c.c)() ? new Intl.NumberFormat(r, {
								style: "currency",
								currency: f,
								currencyDisplay: "symbol",
								notation: o ? "compact" : "standard",
								...i
							}).format(e) : m(e, o, r, f)
						}
					}
				},
				m = (e, t, r, a) => {
					return (t ? Object(o.b)(e) : e.toLocaleString(r)) + (a ? " " + a : "")
				},
				u = e => s.g.includes(e.toUpperCase()) ? s.b.Reddit : s.f.includes(e.toUpperCase()) ? s.b.Crypto : s.b.Real,
				p = e => {
					switch (e) {
						case s.b.Crypto:
							return s.d;
						case s.b.Reddit:
							return s.a;
						case s.b.Real:
						default:
							return s.c
					}
				}
		},
		"./src/reddit/actions/inContextModeration.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return s
			})), r.d(t, "c", (function() {
				return o
			})), r.d(t, "d", (function() {
				return d
			}));
			var a = r("./src/lib/makeActionCreator/index.ts");
			const n = "INCONTEXT__BANNED",
				s = "INCONTEXT__MUTED",
				o = Object(a.a)(n),
				d = Object(a.a)(s)
		},
		"./src/reddit/actions/subredditModeration/ban.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return $
			})), r.d(t, "d", (function() {
				return ae
			})), r.d(t, "b", (function() {
				return oe
			})), r.d(t, "e", (function() {
				return de
			})), r.d(t, "a", (function() {
				return ce
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/lodash/get.js"),
				s = r.n(n),
				o = r("./src/lib/makeActionCreator/index.ts"),
				d = r("./src/reddit/actions/apiRequestState.ts"),
				c = r("./src/reddit/actions/modal.ts"),
				i = r("./src/reddit/actions/subreddit.ts"),
				l = r("./src/reddit/actions/toaster.ts"),
				m = r("./src/reddit/constants/modals.ts"),
				u = r("./src/lib/constants/index.ts"),
				p = r("./src/lib/makeApiRequest/index.ts"),
				b = r("./src/lib/omitHeaders/index.ts"),
				f = r("./src/reddit/constants/headers.ts"),
				v = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				x = r("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const h = (e, t, r) => Object(p.a)(Object(b.a)(e, [f.a]), {
				endpoint: Object(v.a)(Object(x.a)(`${e.apiUrl}/api/v1/${t}/banned`)),
				method: u.jb.GET,
				data: r
			});
			var I = r("./src/reddit/helpers/normalizeUsername/index.tsx"),
				_ = r("./src/reddit/models/SubredditModeration/index.ts"),
				E = r("./src/reddit/models/Toast/index.ts"),
				g = r("./src/reddit/selectors/activeModalId.ts"),
				w = r("./src/reddit/selectors/bannedUser.ts"),
				C = r("./src/reddit/selectors/subreddit.ts"),
				O = r("./src/reddit/selectors/user.ts"),
				N = r("./src/reddit/actions/subredditModeration/constants.ts"),
				j = r("./src/lib/initializeClient/installReducer.ts"),
				y = r("./node_modules/redux/es/redux.js");
			var k = (e = null, t) => {
				switch (t.type) {
					case N.o:
					case N.n:
						return null;
					case N.m:
						return t.payload;
					default:
						return e
				}
			};
			const P = {};
			var U = (e = P, t) => {
					switch (t.type) {
						case N.o: {
							const {
								subredditId: r,
								fetchedToken: a
							} = t.payload, n = Object(_.d)(r, a);
							return {
								...e,
								[n]: !0
							}
						}
						case N.n:
						case N.m: {
							const {
								subredditId: r,
								fetchedToken: a
							} = t.payload, n = Object(_.d)(r, a);
							return {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				A = Object(y.c)({
					error: k,
					pending: U
				});
			const T = {};
			var M = (e = T, t) => {
					switch (t.type) {
						case N.n: {
							const {
								fetchedToken: r,
								subredditId: a
							} = t.payload, n = Object(_.d)(a, r);
							return {
								...e,
								[n]: !0
							}
						}
						default:
							return e
					}
				},
				B = r("./src/reddit/actions/inContextModeration.ts");
			var S = (e = null, t) => {
				switch (t.type) {
					case B.a:
						return t.payload;
					default:
						return e
				}
			};
			const L = {};
			var F = (e = L, t) => {
					switch (t.type) {
						case N.n: {
							const {
								subredditId: e,
								after: r
							} = t.payload;
							return {
								[e]: r
							}
						}
						default:
							return e
					}
				},
				H = r("./node_modules/icepick/icepick.js");
			const D = {};
			var R = (e = D, t) => {
				switch (t.type) {
					case N.l:
					case N.n: {
						const {
							subredditId: r,
							bannedUsers: a
						} = t.payload;
						return Object(H.merge)(e, {
							[r]: a
						})
					}
					case N.s: {
						const {
							subredditId: r,
							userId: a
						} = t.payload;
						return Object(H.unsetIn)(e, [r, a])
					}
					default:
						return e
				}
			};
			var K = (e = null, t) => {
				switch (t.type) {
					case N.r:
					case N.q:
						return null;
					case N.p:
						return t.payload;
					default:
						return e
				}
			};
			var W = (e = !1, t) => {
					switch (t.type) {
						case N.r:
							return !0;
						case N.q:
						case N.p:
							return !1;
						default:
							return e
					}
				},
				z = Object(y.c)({
					error: K,
					pending: W
				});
			var G = (e = null, t) => {
					switch (t.type) {
						case N.r:
						case N.p:
							return null;
						case N.q: {
							const e = t.payload.bannedUserIds[0];
							return e ? t.payload.bannedUsers[e] : null
						}
						default:
							return e
					}
				},
				Z = Object(y.c)({
					api: z,
					result: G
				});
			const q = {};
			var Y = (e = q, t) => {
					switch (t.type) {
						case N.n: {
							const {
								subredditId: r,
								bannedUserIds: a
							} = t.payload;
							return e[r] ? {
								...e,
								[r]: [...e[r], ...a]
							} : {
								...e,
								[r]: a
							}
						}
						case N.s: {
							const {
								subredditId: r,
								userId: a
							} = t.payload;
							return {
								[r]: e[r].filter(e => e !== a)
							}
						}
						case N.l: {
							const {
								subredditId: r,
								bannedUserIds: a
							} = t.payload, n = a[0];
							return n && e[r] && -1 === e[r].indexOf(n) ? {
								[r]: [n, ...e[r]]
							} : e
						}
						default:
							return e
					}
				},
				X = Object(y.c)({
					api: A,
					fetchedTokens: M,
					inContext: S,
					loadMore: F,
					models: R,
					search: Z,
					userOrder: Y
				});
			Object(j.a)({
				features: {
					banned: X
				}
			});
			const J = Object(o.a)(N.o),
				Q = Object(o.a)(N.n),
				V = Object(o.a)(N.m),
				$ = (e, t = {}) => async (r, a, {
					apiContext: n
				}) => {
					const s = a(),
						o = t.after || "",
						d = Object(_.d)(e, o),
						c = s.features.banned.fetchedTokens[d];
					if (s.features.banned.api.pending[d] || c) return;
					r(J({
						subredditId: e,
						fetchedToken: o
					}));
					const i = s.subreddits.models[e].name,
						l = await h(n(), i, t);
					l.ok ? r(Q({
						...l.body,
						fetchedToken: o
					})) : r(V({
						subredditId: e,
						fetchedToken: o
					}))
				}, ee = Object(o.a)(N.r), te = Object(o.a)(N.q), re = Object(o.a)(N.p), ae = (e, t) => async (r, a, {
					apiContext: n
				}) => {
					const s = a().subreddits.models[e].name,
						o = {
							username: Object(I.a)(t)
						};
					r(ee());
					const d = await h(n(), s, o);
					d.ok ? r(te(d.body)) : r(re(d.error))
				}, ne = Object(o.a)(N.l), se = Object(o.a)(N.s), oe = (e, t, r) => async (n, o, {
					apiContext: c
				}) => {
					const i = o(),
						m = i.subreddits.models[e].url,
						v = i.subreddits.models[e].name;
					t.username = Object(I.a)(t.username), n(Object(d.h)(r));
					const x = await ((e, t, r) => Object(p.a)(Object(b.a)(e, [f.a]), {
						endpoint: `${e.apiUrl}${t}api/friend`,
						method: u.jb.POST,
						data: {
							api_type: "json",
							ban_reason: r.reason,
							ban_message: r.banMessage,
							duration: r.duration,
							name: r.username,
							note: r.modNote,
							ban_context: r.contextId,
							type: "banned"
						}
					}))(c(), m, t);
					if (x.ok) {
						n(Object(d.e)(r));
						const e = {
							username: t.username
						};
						n(Object(l.f)({
							kind: E.b.SuccessMod,
							text: a.fbt._("Successfully banned a user", null, {
								hk: "1kORpS"
							})
						}));
						const s = await h(c(), v, e);
						s.ok && n(ne(s.body))
					} else {
						n(Object(d.f)(r, x.error));
						const e = s()(x, "body.json.errors[0][1]", a.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						n(Object(l.f)({
							kind: E.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, de = (e, t) => async (r, n, {
					apiContext: o
				}) => {
					const d = n().subreddits.models[e].url,
						c = await ((e, t, r) => Object(p.a)(Object(b.a)(e, [f.a]), {
							endpoint: `${e.apiUrl}${t}api/unfriend`,
							method: u.jb.POST,
							data: {
								api_type: "json",
								id: r,
								type: "banned"
							}
						}))(o(), d, t);
					if (c.ok) r(se({
						subredditId: e,
						userId: t
					})), r(Object(l.f)({
						kind: E.b.SuccessMod,
						text: a.fbt._("Successfully unbanned a user", null, {
							hk: "OgqK6"
						})
					}));
					else {
						const e = s()(c, "body.json.errors[0][1]", a.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						r(Object(l.f)({
							kind: E.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, ce = (e, t) => async (r, a) => {
					const n = a();
					await Promise.all([(async () => {
						if (!Object(g.b)(m.a.BAN_USER)(n) && !Object(C.O)(n, {
								subredditId: e
							})) {
							const t = Object(C.R)(n, {
								subredditId: e
							});
							await r(Object(i.o)(t.name))
						}
					})(), (async () => {
						const a = Object(O.nb)(n, {
							userName: t
						});
						if (!a) return;
						const s = Object(w.h)(n, {
							subredditId: e
						});
						s && s[a.id] || await r($(e, {
							username: t
						}))
					})()]), r(Object(c.i)(m.a.BAN_USER))
				}
		},
		"./src/reddit/components/ChatButton/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var a, n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./node_modules/react-redux/es/index.js"),
				d = r("./src/reddit/actions/chat/toggle.ts"),
				c = r("./src/reddit/components/TrackingHelper/index.tsx"),
				i = r("./src/reddit/controls/Button/index.tsx"),
				l = r("./src/reddit/helpers/trackers/authorHovercard.ts");
			! function(e) {
				e.awardNotification = "AWARD_NOTIFICATION"
			}(a || (a = {}));
			const m = ({
				onStartChat: e,
				text: t,
				className: r,
				sendEvent: n,
				contextId: o,
				priority: d,
				Icon: c,
				redditStyle: m,
				isFullWidth: u,
				eventSource: p,
				onClick: b,
				onAddUserToQuickReplyList: f,
				children: v
			}) => {
				return s.a.createElement(i.t, {
					onClick: t => {
						if (b && b(t), e(), p === a.awardNotification) return f();
						n(Object(l.b)(o))
					},
					className: r,
					text: t,
					priority: d,
					Icon: c,
					redditStyle: m,
					isFullWidth: u
				}, v)
			};
			m.displayName = "ChatButton";
			const u = Object(o.b)(null, (e, {
				contextId: t,
				userId: r
			}) => ({
				onStartChat: () => {
					e(Object(d.b)(r, t))
				},
				onAddUserToQuickReplyList: () => {
					e(Object(d.a)(r))
				}
			}));
			t.b = u(Object(c.c)(m))
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
			var a = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/higherOrderComponents/asModal/index.tsx"),
				d = r("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = r("./src/reddit/controls/TextButton/index.tsx"),
				i = r("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				l = r("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				m = r.n(l);
			const u = e => e.preventDefault();
			t.a = Object(o.a)(e => s.a.createElement(d.e, null, s.a.createElement(d.i, null, s.a.createElement(i.a, null, s.a.createElement(d.q, null, e.headerText || a.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), s.a.createElement(c.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, s.a.createElement(d.b, null)))), s.a.createElement(d.l, null, s.a.createElement(d.p, {
				className: m.a.ModalText
			}, e.modalText)), s.a.createElement(d.g, null, !e.hideCancelButton && s.a.createElement(d.a, {
				className: m.a.buttonWidth,
				onMouseDown: u,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || a.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), s.a.createElement(d.u, {
				className: m.a.buttonWidth,
				onMouseDown: u,
				onClick: t => {
					e.onConfirm(), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
				},
				"data-redditstyle": !e.disableRedditStyle,
				disabled: e.isDisabled
			}, e.actionText))))
		},
		"./src/reddit/components/Econ/TopAwardersModal/TopAwardersList/Awarder/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_2pf8RDPiuLI11feFkyJfzL",
				rank: "C6yq8ik3t6MjtQo2ydsVQ",
				icon: "hmt4YTjn1UkTBP0j-yqKO",
				text: "erHzuL7lOcIsOZRJFi0Ab",
				name: "_1ZbORZi2Ps08zKjxVdM-_O",
				score: "_2run8DYGOjw8M-mRZIHPh5",
				cta: "_23fX84eyay1eyi8y1QD82",
				giftIcon: "_19IVO8CX5HqwA9LJGZ3ni4"
			}
		},
		"./src/reddit/components/Econ/TopAwardersModal/TopAwardersList/index.m.less": function(e, t, r) {
			e.exports = {
				awarder: "_3WyMnKxtBhvXwCnMKXO7BT"
			}
		},
		"./src/reddit/components/Econ/TopAwardersModal/Winners/Winner/index.m.less": function(e, t, r) {
			e.exports = {
				winner: "_14h4WLAmaXglzXtkdGBV60",
				iconContainer: "_1K0xQSCqkgTZhrjq9B2JjB",
				iconWithBorder: "HFi2HvywaYoUETbnXBiV0",
				rank: "gBgkEGJTqu828VrLjP4GY",
				winner1: "_1i0r2VkvzMeFv1QM2MLL0S",
				winner2: "_3mdPqaOiJQsRf5hRnlkrP6",
				winner3: "_1D2u2915axrF7XBM259lDo",
				winnerPlaceholder: "_2WvSa3DFzfwX3Mr3vZ9jkQ",
				icon: "_3iZA-fG9UG3Xa8kXU0x6iv",
				name: "_2Gq1opbxAW64HEQKSsc5TS",
				hoverCardWrapper: "_2mh2gW6yIBCx2s_pL7UKzX",
				score: "_2nY21lzw3wRpMT9lN2mgyA",
				coinIcon: "_29wjryAiJEoczrIw3gPrQT"
			}
		},
		"./src/reddit/components/Econ/TopAwardersModal/Winners/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_1NrpBgoPY-jeGboQdLnvIe",
				winner: "_3nP2WbvmZaXT9gXgbtpMki",
				flexContainer: "ncY6G2KCOOZsDVUyPD9VW"
			}
		},
		"./src/reddit/components/Econ/TopAwardersModal/index.m.less": function(e, t, r) {
			e.exports = {
				modal: "_1Tb71v-nk7jl8mM2pfbKoj",
				inner: "_3xEuO2MIqPwCicFbSkMcWI",
				modalHeader: "_36er-mpof_BaWTVN_TWKqT",
				modalFooter: "_2F2fWBQxPjhmwG45FMi25h",
				closeIcon: "HRbaOHBNeGJUV9Qh8Rc37",
				title: "zHtFl3sbU36WRMN6Be40E",
				modalContent: "_2HG1iLo9-CdVYmLLLndnB9",
				awardBadgesContainer: "_1BPRycwQx99vehhnRZXSA3",
				winners: "_2YxzmCK7Mj8BYf7UJgew2t",
				list: "ySZcSwZubFvVMLsm0divW",
				anonymousRank: "_22KEUnU_pUoXK8eMBIslUU",
				loader: "_1lL8d_-Oef0beR_egQRJIB",
				youWon: "_15bmMYA8DM0-goiez42DqV",
				youWonIcon: "_3RSMc-yrpBqx7jTkoUoR-g",
				info: "_252HKsT-2R8kkJ8ODCsnoY",
				infoTitle: "refUN3owiLeJKrQdwqSwy",
				infoDesc: "CsTUw6jGsvRz_SCQklwY",
				topAwardedIcon: "-dI9fh7gqtv5MBcdLqi6T",
				cta: "_1BimPhzHA4u9JsAYPgBQmK",
				giftIcon: "_3dojyNA2PoZc7SaIZvnjRv"
			}
		},
		"./src/reddit/components/Econ/TopAwardersModal/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var a = r("./node_modules/react/index.js"),
				n = r.n(a),
				s = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				d = r("./src/higherOrderComponents/asModal/index.tsx"),
				c = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/constants/modals.ts"),
				l = r("./src/reddit/helpers/correlationIdTracker.ts"),
				m = r("./src/reddit/helpers/trackers/topAwarded.ts"),
				u = r("./src/reddit/hooks/useTracking.ts"),
				p = r("./src/reddit/actions/gold/modals.ts"),
				b = r("./src/reddit/contexts/InsideOverlay.tsx"),
				f = r("./src/reddit/contexts/Post/index.tsx"),
				v = r("./src/reddit/models/Gold/TopAwarded/index.ts"),
				x = r("./src/reddit/selectors/gold/topAwarded.ts"),
				h = r("./src/reddit/selectors/posts.ts"),
				I = r("./src/reddit/selectors/user.ts"),
				_ = r("./src/reddit/actions/gold/topAwarded.ts"),
				E = r("./src/reddit/actions/modal.ts"),
				g = r("./src/reddit/components/AwardBadges/index.tsx"),
				w = r("./src/reddit/components/PostTopMeta/index.tsx"),
				C = r("./src/reddit/controls/Button/index.tsx"),
				O = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				N = r("./src/reddit/icons/fonts/Gift/index.tsx"),
				j = r("./src/reddit/icons/svgs/Close/index.tsx"),
				y = r("./src/reddit/icons/svgs/TopAwarded/index.tsx");
			var k = e => n.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 88 88",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("path", {
					d: "M67.819 86.757h-47.62a5.5 5.5 0 01-5.5-5.5V67.78a5.5 5.5 0 015.5-5.5h1.973a5.497 5.497 0 014.3-5.006l7.03-1.554-.643-2.936c-.262-.243-.521-.487-.778-.73C9.915 48.723 0 36.348 0 12.167a5.5 5.5 0 015.5-5.5h10.148a5.5 5.5 0 015.355-4.243h46.012a5.5 5.5 0 015.355 4.243H82.5a5.5 5.5 0 015.5 5.5c0 24.184-9.91 36.556-32.064 39.886-.256.243-.515.487-.777.73l-.644 2.94 7.014 1.55a5.5 5.5 0 014.3 5.006h1.99a5.5 5.5 0 015.5 5.5v13.478a5.5 5.5 0 01-5.5 5.5z",
					fill: "#000"
				}), n.a.createElement("path", {
					d: "M67.819 67.778v13.479h-47.62V67.778h47.619z",
					fill: "#A06A42"
				}), n.a.createElement("path", {
					d: "M67.545 12.167H82.5c0 21.936-8.538 32.134-29.106 34.684a60.003 60.003 0 006.331-7.426C70.95 36.909 76.494 29.278 76.494 17.3H67.63a39.754 39.754 0 00-.085-5.133zM11.523 17.3c0 11.978 5.527 19.61 16.769 22.125a60.02 60.02 0 006.331 7.426C14.056 44.3 5.5 34.103 5.5 12.167h14.972a39.735 39.735 0 00-.085 5.133h-8.864z",
					fill: "#FEB331"
				}), n.a.createElement("path", {
					d: "M16.269 17.3h4.118a39.733 39.733 0 01.085-5.133h-4.117a43.897 43.897 0 00-.086 5.133zM67.544 12.167c.137 1.745.172 3.456.086 5.133h4.117a44.32 44.32 0 00-.083-5.133h-4.12zM28.292 39.425a25.257 25.257 0 01-6.315-2.327 51.637 51.637 0 002.965 4.734 61.823 61.823 0 002.975 3.795c2.08.513 4.303.926 6.706 1.224a60.007 60.007 0 01-6.331-7.426zM66.045 37.092c-1.87.987-3.94 1.8-6.32 2.333a60.007 60.007 0 01-6.331 7.426 57.435 57.435 0 006.706-1.224 62.408 62.408 0 002.99-3.813 51.472 51.472 0 002.955-4.722z",
					fill: "#A06A42"
				}), n.a.createElement("path", {
					d: "M67.63 17.3c-.359 8.008-3.096 15.349-7.905 22.125a60.02 60.02 0 01-6.33 7.426 79.536 79.536 0 01-3.235 3.046l-2.19 10.01 12.371 2.738v5.133H27.66v-5.133l12.389-2.738-2.19-10.01a79.536 79.536 0 01-3.235-3.046 60.028 60.028 0 01-6.33-7.426c-4.809-6.776-7.547-14.117-7.906-22.125a39.734 39.734 0 01.085-5.133c.103-1.386.291-2.806.531-4.244h46.012c.24 1.438.427 2.858.53 4.244.137 1.745.171 3.456.086 5.133z",
					fill: "#FEB331"
				}), n.a.createElement("path", {
					d: "M48.212 43.095c.875-.782 6.688-6.003 9.052-9.813 8.184-13.195 5.99-24.246 5.804-25.359H34.623c-.435 7.939 1.651 18.806 5.581 27.482 3.214 7.095 5.63 18.961 5.63 18.961l2.378-11.271z",
					fill: "#FFD635"
				}), n.a.createElement("path", {
					d: "M47.366 35.734c5.776-8.664 9.212-17.356 8.648-27.81H42.538c-1.3 9.27 1.737 18.54 4.827 27.81z",
					fill: "#FFF1B6"
				}), n.a.createElement("path", {
					d: "M40.047 59.907L27.66 62.645H60.34L47.97 59.907h-7.923z",
					fill: "#FFD635"
				}), n.a.createElement("path", {
					d: "M67.015 8.354c-3.835 1.297-7.669 1.975-11.503 2.432-3.835.495-7.669.628-11.503.683-3.834-.063-7.669-.195-11.503-.692-3.834-.459-7.669-1.133-11.503-2.423v-.367l23.006-.183 23.006.183v.367z",
					fill: "#fff"
				}), n.a.createElement("path", {
					d: "M54.9 21.778c2.19 0 3.964-2.649 3.964-5.916 0-3.267-1.774-5.916-3.963-5.916-2.19 0-3.964 2.649-3.964 5.916 0 3.267 1.775 5.916 3.964 5.916z",
					fill: "#fff"
				}), n.a.createElement("path", {
					d: "M43.165 59.203c-.245-4.12-1.642-8.053-3.502-11.636-1.83-3.509-4.684-6.651-6.774-10.425-2.116-3.731-3.995-7.584-4.838-11.82-.901-4.256-.893-8.525-.366-12.72l.365-.037c1.36 4.045 2.159 8.074 3.449 11.833 1.396 3.744 2.387 7.72 4.038 11.38 1.579 3.683 4.115 6.998 5.779 11.034 1.497 3.971 2.456 8.189 2.215 12.391h-.366z",
					fill: "#A06A42"
				}), n.a.createElement("path", {
					d: "M16.355 12.766c-.905 1.298-1.81 1.976-2.714 2.432-.904.496-1.809.629-2.713.683-.905-.062-1.81-.195-2.714-.692-.905-.458-1.81-1.133-2.714-2.423V12.4l5.428-.183 5.427.183v.366zM82.5 12.766c-.905 1.298-1.81 1.976-2.714 2.432-.904.496-1.809.629-2.713.683-.905-.062-1.81-.195-2.714-.692-.905-.458-1.81-1.133-2.714-2.423V12.4l5.428-.183 5.427.183v.366z",
					fill: "#FFF1B6"
				})),
				P = r("./node_modules/lodash/noop.js"),
				U = r.n(P),
				A = r("./src/lib/currency/currencies.ts"),
				T = r("./src/lib/localizeCurrency/index.ts"),
				M = r("./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx"),
				B = r("./src/reddit/components/UserIcon/index.tsx"),
				S = r("./src/reddit/hooks/useLocale.ts"),
				L = r("./src/reddit/components/Econ/TopAwardersModal/TopAwardersList/Awarder/index.m.less"),
				F = r.n(L);
			const {
				fbt: H
			} = r("./node_modules/fbt/lib/FbtPublic.js"), D = (e, t) => t ? H._("{userName} (you)", [H._param("userName", e)], {
				hk: "vsIHp"
			}) : e;
			var R = function(e) {
					const {
						awarder: t,
						className: r,
						currentUserId: a,
						onCtaClick: s,
						showCta: o
					} = e, {
						rank: d,
						redditor: i,
						score: l
					} = t, m = Object(S.a)(), u = !i.profile;
					return n.a.createElement("div", {
						className: Object(c.a)(F.a.container, r)
					}, n.a.createElement("div", {
						className: F.a.rank
					}, d || "-"), n.a.createElement(B.a, {
						className: F.a.icon,
						iconUrl: i.icon ? i.icon.url : void 0,
						isNSFW: !!i.profile && i.profile.isNsfw,
						userName: i.name
					}), n.a.createElement("div", {
						className: F.a.text
					}, n.a.createElement("h3", {
						className: F.a.name
					}, u ? i.name : n.a.createElement(M.a, {
						user: i.name,
						tooltipId: `topawarder--userhovercard--${i.name}`,
						sendHoverCardEvent: U.a
					}, D(i.name, i.id === a))), l > 0 && n.a.createElement("span", {
						className: F.a.score
					}, Object(T.b)(l, {
						locale: m,
						type: A.b.Reddit,
						currency: A.a
					}))), o && n.a.createElement("button", {
						className: F.a.cta,
						onClick: s
					}, n.a.createElement(N.a, {
						className: F.a.giftIcon
					}), H._("Award", null, {
						hk: "4BW9Zq"
					})))
				},
				K = r("./src/reddit/components/Econ/TopAwardersModal/TopAwardersList/index.m.less"),
				W = r.n(K);
			const z = 8;
			var G = function(e) {
					const {
						awarders: t,
						className: r,
						currentRank: a,
						currentUserId: s,
						hideAddAwardButton: o,
						onGild: d
					} = e;
					return t.length ? n.a.createElement("div", {
						className: Object(c.a)(r, W.a.container)
					}, a && (!a.rank || a.rank > z) && n.a.createElement(R, {
						className: W.a.awarder,
						currentUserId: s,
						awarder: a,
						key: a.redditor.id,
						showCta: !o,
						onCtaClick: d
					}), t.map(e => n.a.createElement(R, {
						className: W.a.awarder,
						currentUserId: s,
						awarder: e,
						key: e.redditor.id,
						showCta: !o && s === e.redditor.id,
						onCtaClick: d
					}))) : null
				},
				Z = r("./src/reddit/icons/svgs/CoinV2/index.tsx"),
				q = r("./src/reddit/components/Econ/TopAwardersModal/Winners/Winner/index.m.less"),
				Y = r.n(q);
			var X = function(e) {
					const {
						showScore: t,
						awarder: r,
						className: a,
						rank: s
					} = e, o = r && !r.redditor.profile, d = r ? r.redditor.name : "—";
					return n.a.createElement("div", {
						className: Object(c.a)(a, Y.a.winner, Y.a[`winner${s}`], {
							[Y.a.winnerPlaceholder]: !r
						})
					}, n.a.createElement("div", {
						className: Y.a.iconContainer
					}, n.a.createElement("div", {
						className: Y.a.iconWithBorder
					}, r && n.a.createElement(B.a, {
						className: Y.a.icon,
						iconUrl: r.redditor.icon ? r.redditor.icon.url : void 0,
						isNSFW: !!r.redditor.profile && r.redditor.profile.isNsfw,
						userName: d
					})), n.a.createElement("div", {
						className: Y.a.rank
					}, s)), n.a.createElement("h3", {
						className: Y.a.name
					}, r && !o ? n.a.createElement(M.a, {
						user: d,
						tooltipId: `topawarderwinner-userhovercard--${d}`,
						sendHoverCardEvent: U.a,
						wrapperClassName: Y.a.hoverCardWrapper
					}, d) : d), r && t && n.a.createElement("div", {
						className: Y.a.score
					}, n.a.createElement(Z.a, {
						className: Y.a.coinIcon
					}), r.score))
				},
				J = r("./src/reddit/components/Econ/TopAwardersModal/Winners/index.m.less"),
				Q = r.n(J);
			var V = function(e) {
					const {
						awarders: t,
						className: r,
						showScores: a
					} = e;
					if (!t.length) return null;
					const s = [t[0], t[1] || void 0, t[2] || void 0];
					return n.a.createElement("div", {
						className: Object(c.a)(r, Q.a.container, {
							[Q.a.flexContainer]: s.length < 3
						})
					}, s.map((e, t) => n.a.createElement(X, {
						showScore: a,
						className: Q.a.winner,
						awarder: e,
						rank: t + 1,
						key: t
					})))
				},
				$ = r("./src/reddit/components/Econ/TopAwardersModal/index.m.less"),
				ee = r.n($);

			function te() {
				return (te = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: re
			} = r("./node_modules/fbt/lib/FbtPublic.js"), ae = 7, ne = Object(o.a)(e => e, x.a, x.c, x.e, I.k, (e, t, r, a, n) => {
				if (!t) return {
					anonymousRank: void 0,
					currentPostId: t,
					currentRank: void 0,
					currentUser: n,
					error: r,
					list: void 0,
					pending: a,
					post: null
				};
				const s = Object(h.H)(e, {
						postId: t
					}),
					o = Object(x.b)(e, t),
					d = Object(x.d)(e, t),
					c = [];
				let i, l = -1;
				return d && d.forEach((e, t) => {
					if (!e.redditor.profile) return i = e, void(l = t);
					const r = l < 0 ? e : {
						...e,
						rank: e.rank - 1
					};
					c.push(r)
				}), {
					anonymousRank: i,
					currentPostId: t,
					currentRank: o,
					currentUser: n,
					error: r,
					list: c,
					pending: a,
					post: s
				}
			}), se = Object(s.b)(ne);
			const oe = Object(d.a)(se(Object(b.b)((function(e) {
				const {
					anonymousRank: t,
					currentPostId: r,
					currentRank: o,
					currentUser: d,
					post: c,
					list: b,
					pending: x
				} = e, h = Object(s.d)(), I = Object(u.a)();
				Object(a.useEffect)(() => {
					r && h(Object(_.a)(r))
				}, [r, h]), Object(a.useEffect)(() => {
					r && I(Object(m.c)(r))
				}, [r, I]);
				const P = () => h(Object(E.g)(i.a.ECON_TOP_AWARDERS)),
					U = () => {
						if (r) {
							const e = Object(l.e)(l.a.GildingFlow, !0);
							I(Object(m.b)()), h(Object(p.d)({
								thingId: r,
								correlationId: e
							}))
						}
					};
				if (!r || !c) return P(), null;
				const A = d && d.id === c.authorId,
					T = !c.isGildable || !!A,
					M = c.topAwardedType === v.a.Active,
					B = c.topAwardedType === v.a.Inactive,
					S = !x && !!b && !!b.length,
					L = !x && b && !b.length && c && M;
				return n.a.createElement("div", {
					className: ee.a.inner
				}, n.a.createElement("div", {
					className: ee.a.modalHeader
				}, n.a.createElement(j.a, {
					className: ee.a.closeIcon,
					onClick: P
				}), n.a.createElement("h3", {
					className: ee.a.title
				}, re._("Top Awarders", null, {
					hk: "3hzpI8"
				}))), n.a.createElement("div", {
					className: ee.a.modalContent
				}, n.a.createElement("div", {
					className: ee.a.awardBadgesContainer
				}, n.a.createElement(f.a, {
					postId: c.id
				}, n.a.createElement(g.a, {
					awardsCountInView: ae,
					awardsPlaqueStyle: !0,
					hideCta: !0,
					hideTopAwardedBadge: !0,
					tooltipType: w.c.TopAwardedModal,
					thing: c
				}))), x && n.a.createElement(O.a, {
					className: ee.a.loader,
					sizePx: 60
				}), S && B && o && 1 === o.rank && n.a.createElement("div", {
					className: ee.a.youWon
				}, re._("You won 1st place!", null, {
					hk: "1MxirM"
				}), n.a.createElement(k, {
					className: ee.a.youWonIcon
				})), S && n.a.createElement(V, {
					className: ee.a.winners,
					awarders: b,
					showScores: B
				}), S && B && (!o || o && 1 !== o.rank) && n.a.createElement("div", {
					className: ee.a.info
				}, n.a.createElement("h3", {
					className: ee.a.infoTitle
				}, re._("Top Awarded Post", null, {
					hk: "1BJ1We"
				})), n.a.createElement("span", {
					className: ee.a.infoDesc
				}, re._("This is a historic Top Awarded post. Give Awards to newer posts to add your name to the list!", null, {
					hk: "2U5vPa"
				})), n.a.createElement(y.a, {
					className: ee.a.topAwardedIcon
				})), L && n.a.createElement("div", {
					className: ee.a.info
				}, n.a.createElement(y.a, {
					className: ee.a.topAwardedIcon
				}), n.a.createElement("h3", {
					className: ee.a.infoTitle
				}, re._("Get on the board", null, {
					hk: "RVDeW"
				})), n.a.createElement("span", {
					className: ee.a.infoDesc
				}, re._("Award publicly and your username will show up on this leaderboard!", null, {
					hk: "3reZYa"
				})), n.a.createElement(C.l, {
					className: ee.a.cta,
					onClick: U
				}, n.a.createElement(N.a, {
					className: ee.a.giftIcon
				}), re._("Give Award", null, {
					hk: "2sa45i"
				}))), S && c && M && n.a.createElement(G, {
					awarders: b,
					className: ee.a.list,
					currentRank: o,
					currentUserId: d && d.id,
					hideAddAwardButton: T,
					onGild: U
				}), !x && M && t && n.a.createElement("div", {
					className: ee.a.anonymousRank
				}, re._("Anonymous redditors have awarded for {score} Coins", [re._param("score", t.score.toLocaleString())], {
					hk: "11BYuy"
				}))), n.a.createElement("div", {
					className: ee.a.modalFooter
				}))
			}))));
			t.default = e => n.a.createElement(oe, te({}, e, {
				className: Object(c.a)(e.className, ee.a.modal)
			}))
		},
		"./src/reddit/components/EditableImage/index.m.less": function(e, t, r) {
			e.exports = {
				Container: "_27zThB3Syksyv8gLdDJqep",
				container: "_27zThB3Syksyv8gLdDJqep",
				HitBox: "_1RlGOQJAoxE66cPOVTH0s",
				hitBox: "_1RlGOQJAoxE66cPOVTH0s",
				Image: "_1te2cn6lvn-YtGSv-hrM7g",
				image: "_1te2cn6lvn-YtGSv-hrM7g",
				ImageContainer: "_1z4A5-p2XgzMTJUEq3GaXu",
				imageContainer: "_1z4A5-p2XgzMTJUEq3GaXu",
				ImageUploader: "_3oOZrOdvGjAOYvzKCu-Kjf",
				imageUploader: "_3oOZrOdvGjAOYvzKCu-Kjf",
				LoadingIcon: "_3syvcMeczod-NOIewWIb8n",
				loadingIcon: "_3syvcMeczod-NOIewWIb8n",
				EditButton: "_3A5WTC_rfbijxxWBmIP4Yx",
				editButton: "_3A5WTC_rfbijxxWBmIP4Yx",
				profileCard: "eHsnwmpOgtfnBAgrWXQKq",
				EditIcon: "_3X4DuB4IpAlTY0XMdSI5q6",
				editIcon: "_3X4DuB4IpAlTY0XMdSI5q6"
			}
		},
		"./src/reddit/components/EditableImage/index.tsx": function(e, t, r) {
			"use strict";
			var a = r("./node_modules/react/index.js"),
				n = r.n(a),
				s = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/lib/classNames/index.ts"),
				d = r("./src/reddit/controls/ImageInput/index.tsx"),
				c = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				i = r("./src/reddit/icons/fonts/index.tsx"),
				l = r("./src/reddit/models/ApiRequestState/index.ts"),
				m = r("./src/reddit/selectors/experiments/profileAvatarChangeFix.ts"),
				u = r("./src/reddit/components/EditableImage/index.m.less"),
				p = r.n(u);
			const {
				fbt: b
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = ({
				altText: e,
				children: t,
				className: r,
				isProfileCard: a,
				isLoading: u,
				imageUrl: b,
				onFileSelected: f
			}) => {
				const v = Object(s.e)(m.a);
				return n.a.createElement("div", {
					className: Object(o.a)(p.a.Container, r)
				}, n.a.createElement("label", {
					className: p.a.HitBox
				}, n.a.createElement("span", {
					className: p.a.ImageContainer,
					role: "presentation"
				}, b ? n.a.createElement("img", {
					alt: e,
					className: p.a.Image,
					src: b
				}) : t), n.a.createElement(d.a, {
					className: p.a.ImageUploader,
					multiple: !1,
					onChange: e => {
						const t = Object(l.b)();
						f(e, t)
					},
					isPending: v ? u : void 0
				}), !u && n.a.createElement("div", {
					className: Object(o.a)(p.a.EditButton, {
						[p.a.profileCard]: a
					})
				}, n.a.createElement(i.a, {
					name: "add_media",
					className: p.a.EditIcon
				}))), u && n.a.createElement(c.a, {
					className: p.a.LoadingIcon,
					sizePx: 80
				}))
			}
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx": function(e, t, r) {
			"use strict";
			var a = r("./node_modules/react/index.js"),
				n = r.n(a),
				s = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				d = r("./src/reddit/actions/snoovatarModal.ts"),
				c = r("./src/reddit/actions/tooltip.ts"),
				i = r("./src/reddit/selectors/gold/awardIcon.ts"),
				l = r("./src/reddit/selectors/meta.ts"),
				m = r("./src/reddit/selectors/moderatorPermissions.ts"),
				u = r("./src/reddit/selectors/profile.ts"),
				p = r("./src/reddit/selectors/structuredStyles.ts"),
				b = r("./src/reddit/selectors/subreddit.ts"),
				f = r("./src/reddit/selectors/tooltip.ts"),
				v = r("./src/reddit/selectors/user.ts"),
				x = r("./src/reddit/selectors/userFlair.ts"),
				h = r("./src/reddit/selectors/userPrefs.ts"),
				I = r("./node_modules/fbt/lib/FbtPublic.js"),
				_ = r("./src/config.ts"),
				E = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				g = r("./src/lib/lessComponent.tsx"),
				w = r("./src/lib/prettyPrintNumber/index.ts"),
				C = r("./src/reddit/components/ChatButton/index.tsx"),
				O = r("./src/reddit/components/JSAPIContainers/index.tsx"),
				N = r("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				j = r("./src/reddit/components/SubscribeButton/index.tsx"),
				y = r("./src/reddit/components/UserIcon/index.tsx"),
				k = r("./src/reddit/endpoints/profile/info.ts"),
				P = r("./src/reddit/helpers/trackers/authorHovercard.ts"),
				U = r("./src/reddit/icons/fonts/Info/index.tsx"),
				A = r("./src/reddit/icons/svgs/Admin/index.tsx");
			var T = e => n.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20",
					version: "1.1",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("g", null, n.a.createElement("path", {
					d: "M6.42528593,9.54562407 C4.41043013,8.02026355 3.10790651,5.60355545 3.10790651,2.88165092 L3.10790651,2.79711586 L3.19244157,2.79711586 C5.9143461,2.79711586 8.33136499,4.09963948 9.85641472,6.11449528 C8.02399304,6.25279712 6.56358777,7.7128916 6.42528593,9.54562407 Z M6.42528593,10.2560915 C6.56358777,12.088824 8.02399304,13.5489184 9.85641472,13.6872203 C8.33136499,15.7020761 5.9143461,17.0045997 3.19244157,17.0045997 L3.10790651,17.0045997 L3.10790651,16.9200646 C3.10790651,14.1981601 4.41043013,11.781452 6.42528593,10.2560915 Z M13.6872203,10.2560915 C15.7020761,11.781452 17.0045997,14.1981601 17.0045997,16.9200646 L17.0045997,17.0045997 L16.9200646,17.0045997 C14.1981601,17.0045997 11.7811412,15.7020761 10.2560915,13.6872203 C12.0885132,13.5489184 13.5486077,12.088824 13.6872203,10.2560915 Z M16.9200646,2.79711586 L17.0045997,2.79711586 L17.0045997,2.88165092 C17.0045997,5.60324465 15.7020761,8.02026355 13.6872203,9.54562407 C13.5489184,7.7128916 12.0885132,6.25279712 10.2560915,6.11449528 C11.7811412,4.09963948 14.1981601,2.79711586 16.9200646,2.79711586 Z M19.9403282,9.84895574 L20,9.90862755 L19.9403282,9.96829935 C18.9346096,10.9740179 17.7346469,11.6624192 16.46227,12.0474888 C15.9659373,11.2534187 15.3446668,10.5308304 14.6071606,9.90862755 C15.3446668,9.28642466 15.9659373,8.5638364 16.46227,7.76976629 C17.7346469,8.1548359 18.9346096,8.8432372 19.9403282,9.84895574 Z M9.90862755,5.39283938 C9.28642466,4.65533317 8.5638364,4.03406266 7.76976629,3.53772999 C8.1548359,2.26535306 8.8432372,1.06539035 9.84895574,0.0596718051 L9.90862755,0 L9.96829935,0.0596718051 C10.9740179,1.06539035 11.6624192,2.26535306 12.0474888,3.53772999 C11.2534187,4.03406266 10.5308304,4.65533317 9.90862755,5.39283938 Z M5.39283938,9.90862755 C4.65533317,10.5308304 4.03406266,11.2534187 3.53772999,12.0474888 C2.26535306,11.6624192 1.06539035,10.9740179 0.0596718051,9.96829935 L0,9.90862755 L0.0596718051,9.84895574 C1.06539035,8.8432372 2.26535306,8.1548359 3.53772999,7.76976629 C4.03406266,8.5638364 4.65533317,9.28642466 5.39283938,9.90862755 Z M9.90862755,14.6071606 C10.5308304,15.3446668 11.2534187,15.9659373 12.0474888,16.46227 C11.6624192,17.7346469 10.9740179,18.9346096 9.96829935,19.9403282 L9.90862755,20 L9.84895574,19.9403282 C8.8432372,18.9346096 8.1548359,17.7346469 7.76976629,16.46227 C8.5638364,15.9659373 9.28642466,15.3446668 9.90862755,14.6071606 Z"
				}))),
				M = r("./src/reddit/icons/svgs/Premium/index.tsx"),
				B = r("./src/reddit/models/Gold/Award.ts"),
				S = r("./src/reddit/models/User/index.ts"),
				L = r("./src/reddit/components/HumanDate/index.tsx"),
				F = r("./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx"),
				H = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx"),
				D = r("./src/reddit/actions/inContextModeration.ts"),
				R = r("./src/reddit/actions/modal.ts"),
				K = r("./src/reddit/actions/subredditModeration/ban.ts"),
				W = r("./src/reddit/constants/modals.ts"),
				z = r("./src/reddit/components/Hovercards/helpers.ts"),
				G = r("./src/reddit/icons/fonts/index.tsx"),
				Z = r("./src/reddit/models/ModeratingSubreddits/index.ts"),
				q = r("./src/reddit/selectors/bannedUser.ts"),
				Y = r("./src/reddit/components/Hovercards/AuthorHovercard/ModActions.m.less"),
				X = r.n(Y);
			const {
				fbt: J
			} = r("./node_modules/fbt/lib/FbtPublic.js"), Q = Object(o.c)({
				hasModMailPermissions: Object(m.b)(Z.c.mail),
				isUserBanned: (e, t) => !!Object(q.b)(e, {
					subredditId: t.subredditId,
					username: t.username
				}),
				user: (e, t) => Object(v.nb)(e, {
					userName: t.username
				})
			});
			class V extends n.a.Component {
				componentDidMount() {
					this.props.requestUserBanInfo()
				}
				render() {
					const {
						className: e,
						contextId: t,
						hasModMailPermissions: r,
						isUserBanned: a,
						onUnbanUser: s,
						sendEvent: o,
						toggleBanModal: d,
						toggleMuteModal: c
					} = this.props;
					return n.a.createElement("div", {
						className: e
					}, a ? n.a.createElement(z.a, {
						role: "button",
						onClick: () => {
							s(this.props.user.id), o(P.e(t))
						}
					}, n.a.createElement(G.a, {
						name: "ban",
						isFilled: !0,
						className: X.a.icon
					}), J._("Unban User", null, {
						hk: "1aASyW"
					})) : n.a.createElement(z.a, {
						role: "button",
						onClick: () => {
							d(), o(P.a(t))
						}
					}, n.a.createElement(G.a, {
						name: "ban",
						className: X.a.icon
					}), J._("Ban User", null, {
						hk: "3OhuLx"
					})), r && n.a.createElement(z.a, {
						role: "button",
						onClick: () => {
							c(), o(P.d(t))
						}
					}, n.a.createElement(G.a, {
						name: "mod_mute",
						className: X.a.icon
					}), J._("Mute User", null, {
						hk: "3MCujH"
					})))
				}
			}
			var $ = Object(s.b)(Q, (e, {
					username: t,
					subredditId: r,
					contextId: a
				}) => ({
					onUnbanUser: t => e(Object(K.e)(r, t)),
					requestUserBanInfo: () => e(Object(K.c)(r, {
						username: t
					})),
					toggleBanModal: () => {
						e(Object(D.c)({
							username: t,
							subredditId: r,
							contextId: a
						})), e(Object(K.a)(r, t))
					},
					toggleMuteModal: () => {
						e(Object(D.d)({
							username: t,
							subredditId: r,
							contextId: a
						})), e(Object(R.i)(W.a.MUTE_USER))
					}
				}))(V),
				ee = r("./src/reddit/actions/userFlair/index.ts");
			const {
				fbt: te
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			var re = Object(s.b)(null, (e, t) => ({
					onToggleUserFlairModal: () => e(Object(ee.g)(t.subredditId, t.username))
				}))(e => n.a.createElement(z.a, {
					role: "button",
					onClick: () => {
						e.onToggleUserFlairModal(), e.sendEvent(P.c(e.contextId))
					}
				}, n.a.createElement(G.a, {
					name: "tag",
					className: X.a.icon
				}), te._("Edit user flair", null, {
					hk: "4mTxM"
				}))),
				ae = r("./src/reddit/components/Hovercards/AuthorHovercard/userOptions.m.less"),
				ne = r.n(ae);

			function se() {
				return (se = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a])
					}
					return e
				}).apply(this, arguments)
			}
			const oe = g.a.wrapped(y.a, "UserIcon", ne.a),
				de = g.a.wrapped(j.a, "SubscribeButton", ne.a),
				ce = g.a.wrapped(C.b, "ChatButton", ne.a),
				ie = g.a.wrapped(T, "KarmaIcon", ne.a),
				le = g.a.wrapped(M.a, "PremiumIcon", ne.a),
				me = g.a.wrapped(E.a, "UserNameLink", ne.a),
				ue = g.a.div("UserNameMetaData", ne.a),
				pe = g.a.div("MetaDataItem", ne.a),
				be = g.a.div("Bullet", ne.a),
				fe = g.a.div("UserNameContainer", ne.a),
				ve = g.a.div("UserInfoContainer", ne.a),
				xe = g.a.div("PostKarma", ne.a),
				he = g.a.div("CommentKarma", ne.a),
				Ie = g.a.div("KarmaGrid", ne.a),
				_e = g.a.div("GenericKarma", ne.a),
				Ee = g.a.a("InfoLink", ne.a),
				ge = g.a.div("KarmaCount", ne.a),
				we = g.a.div("KarmaLabel", ne.a),
				Ce = g.a.div("GenericKarmaLabel", ne.a),
				Oe = g.a.div("BannerImage", ne.a),
				Ne = g.a.div("UserContainer", ne.a),
				je = g.a.div("BottomSpacer", ne.a),
				ye = g.a.div("Container", ne.a),
				ke = e => n.a.createElement("div", null, n.a.createElement("div", null, n.a.createElement(me, {
					to: `/user/${e.userName}/`
				}, `u/${e.userName}`), e.user.isEmployee && n.a.createElement(A.a, {
					className: ne.a.adminIcon,
					title: I.fbt._("Reddit admin", null, {
						hk: "15wBTE"
					})
				}), e.user.isGold && n.a.createElement(E.a, {
					to: "/premium"
				}, n.a.createElement(le, null))), n.a.createElement(ue, null, e.user.username && n.a.createElement(pe, null, e.user.username, n.a.createElement(be, null, "•")), n.a.createElement(pe, null, (e.user.createdUtc || e.user.created) && n.a.createElement(L.d, {
					seconds: e.user.createdUtc || e.user.created
				})))),
				Pe = e => {
					const {
						showAwardKarma: t,
						user: {
							karma: r
						}
					} = e, a = {
						...k.a,
						...r
					};
					return t ? n.a.createElement(Ie, null, n.a.createElement(_e, null, n.a.createElement(ge, null, Object(w.b)(a.fromPosts)), n.a.createElement(Ce, null, I.fbt._({
						"*": "Post Karma",
						_1: " Post Karma"
					}, [I.fbt._plural(a.fromPosts)], {
						hk: "3K4oaH"
					}))), n.a.createElement(_e, null, n.a.createElement(ge, null, Object(w.b)(a.fromComments)), n.a.createElement(Ce, null, I.fbt._({
						"*": "Comment Karma",
						_1: " Comment Karma"
					}, [I.fbt._plural(a.fromComments)], {
						hk: "3gKRx9"
					}))), n.a.createElement(_e, null, n.a.createElement(ge, null, Object(w.b)(a.fromAwardsReceived)), n.a.createElement(Ce, null, I.fbt._({
						"*": "Awardee Karma",
						_1: " Awardee Karma"
					}, [I.fbt._plural(a.fromAwardsReceived)], {
						hk: "3nzm9q"
					}), n.a.createElement(Ee, {
						href: B.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, n.a.createElement(U.a, {
						className: ne.a.infoIcon
					})))), n.a.createElement(_e, null, n.a.createElement(ge, null, Object(w.b)(a.fromAwardsGiven)), n.a.createElement(Ce, null, I.fbt._({
						"*": "Awarder Karma",
						_1: " Awarder Karma"
					}, [I.fbt._plural(a.fromAwardsGiven)], {
						hk: "4zXN3B"
					}), n.a.createElement(Ee, {
						href: B.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, n.a.createElement(U.a, {
						className: ne.a.infoIcon
					}))))) : n.a.createElement(ve, null, n.a.createElement(ie, null), n.a.createElement(xe, null, n.a.createElement(ge, null, Object(w.b)(a.fromPosts)), n.a.createElement(we, null, I.fbt._({
						"*": "Post Karma",
						_1: " Post Karma"
					}, [I.fbt._plural(a.fromPosts)], {
						hk: "3K4oaH"
					}))), n.a.createElement(he, null, n.a.createElement(ge, null, Object(w.b)(a.fromComments)), n.a.createElement(we, null, I.fbt._({
						"*": "Comment Karma",
						_1: " Comment Karma"
					}, [I.fbt._plural(a.fromComments)], {
						hk: "3gKRx9"
					}))))
				},
				Ue = e => {
					const {
						className: t,
						contextId: r,
						currentUser: a,
						hideNSFWPref: s,
						hoverId: o,
						isLoggedIn: d,
						onClickSnoovatar: c,
						origin: i,
						moderatorPermissions: l,
						prefersReducedAnimations: m,
						sendEvent: u,
						showAwardKarma: p,
						style: b,
						subredditId: f,
						topAwardIcon: v,
						userName: x,
						user: h,
						userFlair: E,
						userIsBanned: g,
						userProfileStyles: w,
						acceptChats: C,
						isCommentAuthorBlocked: N
					} = e;
					if (!h) return n.a.createElement(ye, {
						style: b
					});
					const j = !!a && Object(S.e)(a) === x,
						y = !!(null == a ? void 0 : a.snoovatarFullBodyAsset),
						k = h.accountIcon || `${_.a.assetPath}/img/snoo_user_placeholder.png`,
						U = l && l.flair,
						A = l && l.access,
						T = E && E.templateIds && E.templateIds.length > 0,
						M = E && E.displaySettings && E.displaySettings.isEnabled,
						{
							awardedLastMonth: B
						} = h,
						L = !!h.snoovatarFullBodyAsset,
						D = h.isNSFW && s;
					let R;
					return R = L ? !D && w && w.bannerBackgroundImage || void 0 : D ? `${_.a.assetPath}/img/user-info-banner.png` : e.user.bannerImage, n.a.createElement(ye, {
						className: t,
						id: o,
						style: b
					}, !L && R && n.a.createElement(Oe, {
						style: {
							backgroundImage: `url('${R}')`
						}
					}), n.a.createElement(Ne, null, L ? n.a.createElement(H.a, {
						isHovercard: !0,
						bannerBackgroundImage: R,
						compact: !0,
						currentUserHasSnoovatar: y,
						isEmployee: h.isEmployee,
						isGold: h.isGold,
						isNSFW: h.isNSFW,
						isOwnProfile: j,
						onClickSnoovatar: c,
						prefersReducedAnimations: !!m,
						snoovatarUrl: h.snoovatarFullBodyAsset,
						title: null,
						userCreated: h.created,
						username: x,
						url: `/user/${e.userName}/`
					}) : n.a.createElement(fe, null, n.a.createElement(oe, {
						iconUrl: k,
						isNSFW: h.isNSFW,
						userName: x
					}), n.a.createElement(ke, {
						origin: i,
						user: h,
						userName: x
					})), n.a.createElement(Pe, {
						showAwardKarma: p,
						user: h
					}), B && n.a.createElement(F.a, {
						recentAwardings: B,
						topAwardIcon: v,
						username: x
					}), d && !j && !g && C && !N && n.a.createElement(ce, {
						contextId: r,
						userId: h.id,
						text: I.fbt._("Start Chat", null, {
							hk: "2mfqRE"
						}),
						isFullWidth: !0
					}), h.hasUserProfile && !g && !N && !j && h.enableFollowers && n.a.createElement(de, {
						identifier: {
							name: e.user.username,
							type: "profile"
						},
						getEventFactory: e => Object(P.g)(e ? "unfollow" : "follow", r),
						isFullWidth: !0,
						small: !0
					})), A && r && !j && f && n.a.createElement($, {
						contextId: r,
						subredditId: f,
						sendEvent: u,
						username: x
					}), U && r && T && M && f && n.a.createElement(re, {
						contextId: r,
						subredditId: f,
						sendEvent: u,
						username: x
					}), n.a.createElement(O.i, {
						contextId: r,
						subredditId: f,
						user: h
					}), !(A || d) && n.a.createElement(je, null))
				},
				Ae = Object(N.a)(Ue),
				Te = e => {
					const t = e.activeTooltipId === e.tooltipId && !e.collapsed;
					return n.a.createElement(Ae, se({
						isOpen: t
					}, e))
				};
			Te.WrappedComponent = Ue;
			var Me = Te;
			const Be = Object(o.c)({
					activeTooltipId: f.a,
					currentUser: v.k,
					isLoggedIn: v.K,
					hideNSFWPref: v.C,
					moderatorPermissions: (e, {
						subredditId: t
					}) => t ? Object(m.m)(e, {
						subredditId: t
					}) : void 0,
					origin: l.j,
					prefersReducedAnimations: h.c,
					showAwardKarma: (e, t) => {
						return Object(f.a)(e) === t.tooltipId
					},
					topAwardIcon: (e, {
						userName: t
					}) => Object(i.e)(e, {
						userName: t,
						minSize: 32
					}),
					user: v.nb,
					userFlair: (e, {
						subredditId: t
					}) => t ? Object(x.d)(e, {
						subredditId: t
					}) : void 0,
					userIsBanned: (e, t) => !!Object(b.l)(t) && Object(b.cb)(e, t),
					userProfileStyles: (e, t) => Object(p.m)(e, Object(u.m)(e, t.userName)),
					acceptChats: (e, t) => {
						const r = Object(u.h)(e, {
							profileName: t.userName
						});
						return !r || r.acceptChats
					}
				}),
				Se = Object(s.b)(Be, (e, t) => ({
					onClickSnoovatar: () => e(Object(d.b)({
						clickSource: "user_hovercard"
					})),
					onHideTooltip: () => e(Object(c.i)())
				}));
			t.a = Se(e => n.a.createElement("div", {
				className: e.className,
				id: e.tooltipId,
				onMouseLeave: e.onHideTooltip
			}, n.a.createElement(Me, {
				activeTooltipId: e.activeTooltipId,
				contextId: e.contextId,
				currentUser: e.currentUser,
				isLoggedIn: e.isLoggedIn,
				hideNSFWPref: e.hideNSFWPref,
				hoverId: e.hoverId,
				moderatorPermissions: e.moderatorPermissions,
				onClickSnoovatar: e.onClickSnoovatar,
				onHideTooltip: e.onHideTooltip,
				origin: e.origin,
				prefersReducedAnimations: e.prefersReducedAnimations,
				sendEvent: e.sendEvent,
				showAwardKarma: e.showAwardKarma,
				subredditId: e.subredditId,
				topAwardIcon: e.topAwardIcon,
				tooltipId: e.tooltipId,
				tooltipType: e.tooltipType,
				user: e.user,
				userFlair: e.userFlair,
				userIsBanned: e.userIsBanned,
				userName: e.userName,
				userProfileStyles: e.userProfileStyles,
				acceptChats: e.acceptChats,
				isCommentAuthorBlocked: e.isCommentAuthorBlocked,
				collapsed: e.collapsed
			})))
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/ModActions.m.less": function(e, t, r) {
			e.exports = {
				icon: "xd9vrdS8_V6IVus6-mHAM"
			}
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx": function(e, t, r) {
			"use strict";
			var a = r("./node_modules/react/index.js"),
				n = r.n(a),
				s = r("./src/reddit/components/Hovercards/HoverDiv/index.tsx"),
				o = r("./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx"),
				d = r("./src/reddit/components/TrackingHelper/index.tsx");
			t.a = Object(d.c)(e => {
				const t = `${e.tooltipId}-hover-id`;
				return n.a.createElement(s.a, {
					className: e.wrapperClassName,
					hoverId: t,
					sendHoverEvent: e.sendHoverCardEvent,
					tooltipId: e.tooltipId,
					authorOrSubredditName: e.user
				}, e.children, n.a.createElement(o.a, {
					className: e.className,
					hoverId: t,
					sendEvent: e.sendEvent,
					subredditId: e.subredditId,
					tooltipId: e.tooltipId,
					tooltipType: e.tooltipType,
					userName: e.user
				}))
			})
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/userOptions.m.less": function(e, t, r) {
			e.exports = {
				ChatButton: "_3OdnAY8EYU3x_Nni3KnKwI",
				chatButton: "_3OdnAY8EYU3x_Nni3KnKwI",
				UserIcon: "_3_NawY8A3QCHkZUHnxDxUP",
				userIcon: "_3_NawY8A3QCHkZUHnxDxUP",
				SubscribeButton: "yFByQg8RzENoqoOt0ysAk",
				subscribeButton: "yFByQg8RzENoqoOt0ysAk",
				KarmaIcon: "_2XmHHGriP3EYLhv_9BG6OT",
				karmaIcon: "_2XmHHGriP3EYLhv_9BG6OT",
				PremiumIcon: "_3YJqiyvx8zFvv30tmg36S-",
				premiumIcon: "_3YJqiyvx8zFvv30tmg36S-",
				Token: "_2U0P3n4v75sHsDvQmSKNz3",
				token: "_2U0P3n4v75sHsDvQmSKNz3",
				UserNameLink: "_1oT4pd8QlZQZ1wGOk9VAaQ",
				userNameLink: "_1oT4pd8QlZQZ1wGOk9VAaQ",
				UserNameMetaData: "_1wu7a98opA-mU9WUQpJIuF",
				userNameMetaData: "_1wu7a98opA-mU9WUQpJIuF",
				GildedLastMonthDisplay: "_19NlUDUSw7ra6wC0luJwKV",
				gildedLastMonthDisplay: "_19NlUDUSw7ra6wC0luJwKV",
				Bullet: "_2dfF2p_dwLpL5C-8pAvdbL",
				bullet: "_2dfF2p_dwLpL5C-8pAvdbL",
				MetaDataItem: "RcL4UXH2ABHT3YpYzu3ms",
				metaDataItem: "RcL4UXH2ABHT3YpYzu3ms",
				UserNameContainer: "J9OjkO5NR8gsgJUQrk2Ft",
				userNameContainer: "J9OjkO5NR8gsgJUQrk2Ft",
				UserInfoContainer: "_3l7ptRjFJYo-fcXXajRpqn",
				userInfoContainer: "_3l7ptRjFJYo-fcXXajRpqn",
				PostKarma: "_2T3kavHwxOaL76xfa9id7",
				postKarma: "_2T3kavHwxOaL76xfa9id7",
				CommentKarma: "_1rFYsN1yoSDrDTRfqagI5r",
				commentKarma: "_1rFYsN1yoSDrDTRfqagI5r",
				KarmaGrid: "_1T5Mo-6GI-SCbGJJ9xZ2N7",
				karmaGrid: "_1T5Mo-6GI-SCbGJJ9xZ2N7",
				GenericKarma: "_1Tg84WxamVCCD1zg-nbbP8",
				genericKarma: "_1Tg84WxamVCCD1zg-nbbP8",
				KarmaCount: "_18aX_pAQub_mu1suz4-i8j",
				karmaCount: "_18aX_pAQub_mu1suz4-i8j",
				KarmaLabel: "_1b2tgHrvjFKgTLyFIQ9B6T",
				karmaLabel: "_1b2tgHrvjFKgTLyFIQ9B6T",
				GenericKarmaLabel: "EtlFWXCmzvjyd92eABb-5",
				genericKarmaLabel: "EtlFWXCmzvjyd92eABb-5",
				InfoLink: "_2qjqkYRKCjuqB4VRr2duCK",
				infoLink: "_2qjqkYRKCjuqB4VRr2duCK",
				BannerImage: "_1l9DXI5VaWcxjbz23v5b6X",
				bannerImage: "_1l9DXI5VaWcxjbz23v5b6X",
				UserContainer: "_m7PpFuKATP9fZF4xKf9R",
				userContainer: "_m7PpFuKATP9fZF4xKf9R",
				BottomSpacer: "_2D-HmwsbsNkTnIiPO4zcqb",
				bottomSpacer: "_2D-HmwsbsNkTnIiPO4zcqb",
				UserActionLink: "_1Sy8bDpK6p4JRHy1yB1Xyk",
				userActionLink: "_1Sy8bDpK6p4JRHy1yB1Xyk",
				Container: "_1sbZnfdaxhCOFVUCJ3Z75m",
				container: "_1sbZnfdaxhCOFVUCJ3Z75m",
				adminIcon: "_2aJuBKF3mo4YJS4YFkeU9a"
			}
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
				return _
			})), r.d(t, "b", (function() {
				return E
			}));
			var a = r("./node_modules/react/index.js"),
				n = r.n(a),
				s = r("./src/lib/lessComponent.tsx"),
				o = r("./node_modules/react-redux/es/index.js"),
				d = r("./node_modules/reselect/es/index.js"),
				c = r("./src/reddit/actions/profile/index.ts"),
				i = r("./src/reddit/actions/tooltip.ts"),
				l = r("./src/reddit/selectors/tooltip.ts");
			const m = Object(d.c)({
				dropdownIsOpen: (e, t) => Object(l.b)(t.tooltipId)(e)
			});
			var u = Object(o.b)(m, (e, t) => ({
					onCloseUserDropdown: () => e(Object(i.i)()),
					onOpenUserDropdown: async () => {
						e(Object(i.f)({
							tooltipId: t.tooltipId
						})), t.authorOrSubredditName && (await e(Object(c.d)(t.authorOrSubredditName)), t.sendHoverEvent())
					}
				})),
				p = r("./src/reddit/actions/subreddit.ts");
			const b = Object(d.c)({
				dropdownIsOpen: (e, t) => Object(l.b)(t.tooltipId)(e)
			});
			var f = Object(o.b)(b, (e, t) => ({
					onCloseUserDropdown: () => e(Object(i.i)()),
					onOpenUserDropdown: async () => {
						var r;
						e(Object(i.f)({
							tooltipId: t.tooltipId
						})), t.authorOrSubredditName && e(Object(p.u)(t.authorOrSubredditName)), null === (r = t.onShow) || void 0 === r || r.call(t)
					}
				})),
				v = r("./src/reddit/components/Hovercards/HoverDiv/index.m.less"),
				x = r.n(v);
			class h extends n.a.Component {
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
						this.openHovercardTimeoutId && clearTimeout(this.openHovercardTimeoutId), this.closeHovercardTimeoutId = window.setTimeout(() => {
							this.isHovering || this.props.onCloseUserDropdown()
						}, 300)
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
					e.addEventListener("mouseenter", this.onHoverElMouseEnter), e.addEventListener("mouseleave", this.onHoverElMouseLeave)
				}
				removeHoverListeners(e) {
					e.removeEventListener("mouseenter", this.onHoverElMouseEnter), e.removeEventListener("mouseleave", this.onHoverElMouseLeave)
				}
				render() {
					const {
						children: e,
						className: t
					} = this.props;
					return n.a.createElement("div", {
						className: t,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, e)
				}
			}
			const I = s.a.wrapped(h, "HoverDiv", x.a),
				_ = u(I),
				E = f(I)
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
				return d
			})), r.d(t, "b", (function() {
				return c
			}));
			var a = r("./src/lib/lessComponent.tsx"),
				n = r("./src/reddit/layout/row/Inline/index.tsx"),
				s = r("./src/reddit/components/Hovercards/helpers.m.less"),
				o = r.n(s);
			const d = a.a.wrapped(n.a, "UserActionItem", o.a),
				c = e => {
					const {
						author: t,
						itemId: r,
						subredditName: a,
						tooltipIdPrefix: n,
						tooltipType: s
					} = e;
					let o = n;
					return r && (o = `${o}--${r}`), s && (o = `${o}--${s}`), t && (o = `${o}--${t}`), a && (o = `${o}--${a}`), o
				}
		},
		"./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx": function(e, t, r) {
			"use strict";
			var a = r("./node_modules/react/index.js"),
				n = r.n(a),
				s = r("./src/config.ts"),
				o = r("./src/lib/prettyPrintNumber/index.ts"),
				d = r("./src/reddit/components/ProfileIdCard/index.m.less"),
				c = r.n(d);
			const {
				fbt: i
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			class l extends n.a.PureComponent {
				render() {
					const {
						topAwardIcon: e,
						recentAwardings: t,
						username: r
					} = this.props;
					if (!t.topAward) return null;
					const {
						topAward: a,
						totalCount: d
					} = t, l = a.description ? a.description : a.name;
					return n.a.createElement("a", {
						className: c.a.AwardedLastMonth,
						href: `${s.a.oldRedditUrl}/user/${r}/gilded`
					}, n.a.createElement("div", {
						className: c.a.iconColumn
					}, n.a.createElement("img", {
						alt: l,
						className: c.a.icon,
						src: e
					}), d > 1 && n.a.createElement("span", {
						className: c.a.count
					}, `+${Object(o.b)(d-1)}`)), n.a.createElement("div", {
						className: c.a.textColumn
					}, i._({
						"*": "Received the {award-name} Award and more in the past 30 days",
						_1: "Received the {award-name} Award in the past 30 days"
					}, [i._param("award-name", a.name), i._plural(d)], {
						hk: "16MJHe"
					})))
				}
			}
			t.a = l
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.m.less": function(e, t, r) {
			e.exports = {
				Banner: "_2ZyL7luKQghNeMnczY3gqW",
				banner: "_2ZyL7luKQghNeMnczY3gqW"
			}
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.tsx": function(e, t, r) {
			"use strict";
			var a = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/reddit/models/Image/index.tsx"),
				d = r("./src/reddit/components/EditableImage/index.tsx"),
				c = r("./src/reddit/models/User/index.ts"),
				i = r("./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts"),
				l = r("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.m.less"),
				m = r.n(l);
			class u extends s.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isUpdating: !1
					}, this.updateProfileIcon = async (e, t) => {
						const r = await Object(o.e)(e);
						this.setState({
							isUpdating: !0
						}, async () => {
							await this.props.imageUpdateRequested(r, "profileBanner"), this.setState({
								isUpdating: !1
							})
						})
					}
				}
				render() {
					const {
						bannerUrl: e,
						className: t,
						currentUser: r,
						hideNSFWPref: n,
						isNSFW: o,
						userName: i
					} = this.props, {
						isUpdating: l
					} = this.state, u = e ? s.a.createElement("div", {
						className: m.a.Banner,
						style: {
							backgroundImage: `url(${e})`
						}
					}) : null;
					return r && Object(c.e)(r) === i ? s.a.createElement(d.a, {
						altText: a.fbt._("{userName} banner image", [a.fbt._param("userName", i)], {
							hk: "1PcEBS"
						}),
						className: t,
						isLoading: l,
						onFileSelected: this.updateProfileIcon
					}, u) : o && n ? null : u
				}
			}
			t.a = Object(i.a)(u)
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts": function(e, t, r) {
			"use strict";
			var a = r("./node_modules/react-redux/es/index.js"),
				n = r("./node_modules/reselect/es/index.js"),
				s = r("./src/reddit/actions/preferences.ts"),
				o = r("./src/reddit/selectors/user.ts");
			const d = Object(n.c)({
					currentUser: o.k,
					hideNSFWPref: o.C
				}),
				c = Object(a.b)(d, e => ({
					imageUpdateRequested: (t, r) => e(Object(s.B)(t, r))
				}));
			t.a = c
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx": function(e, t, r) {
			"use strict";
			var a = r("./src/lib/classNames/index.ts"),
				n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./node_modules/react-redux/es/index.js"),
				d = r("./node_modules/react-router/esm/react-router.js"),
				c = r("./src/reddit/actions/post.ts"),
				i = r("./src/reddit/actions/snoovatarModal.ts"),
				l = r("./src/reddit/components/TrackingHelper/index.tsx"),
				m = r("./src/reddit/controls/Button/index.tsx"),
				u = r("./src/reddit/helpers/trackers/snoovatar.ts"),
				p = r("./src/reddit/icons/svgs/Shirt/index.tsx"),
				b = r("./src/reddit/models/Vote/index.ts"),
				f = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				v = r.n(f);
			const {
				fbt: x
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(d.i)(({
				isHovercard: e,
				username: t,
				isAvatarPost: r,
				post: d,
				share: f
			}) => {
				const h = Object(l.b)(),
					I = Object(o.d)(),
					_ = d && d.id,
					E = d && d.voteState;
				let g = null;
				_ || (g = e ? "user_hovercard" : "profile_overview");
				const w = Object(n.useCallback)(() => h(Object(u.f)(e ? "user_hovercard" : "profile_overview", t)), [e, h, t]);
				return s.a.createElement(m.t, {
					onClick: () => {
						r ? (h(u.g), _ && E === b.a.notVoted && I(Object(c.db)(_))) : w();
						const e = r ? "postify" : "copy";
						I(Object(i.b)({
							clickSource: g,
							share: f,
							source: e
						}))
					},
					className: Object(a.a)(v.a.snoovatarButton, v.a.snoovatarExtraPadding, v.a.compactButtonLayout, {
						[v.a.avatarPostifyButton]: r
					}),
					isFullWidth: !0
				}, s.a.createElement(p.a, {
					className: Object(a.a)({
						[v.a.shirtIcon]: !r,
						[v.a.avatarPostButtonShirtIcon]: r
					})
				}), x._("Try this Look", null, {
					hk: "dOuPb"
				}), s.a.createElement("div", {
					className: v.a.chevronIcon
				}))
			})
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less": function(e, t, r) {
			e.exports = {
				snoovatarButton: "_3F1tNW0P4Ff182mO_CefIg",
				avatarPostifyButton: "_2Viile0fcrruho_hQqpnUx",
				snoovatarExtraPadding: "_3DnDqV66Np6rVEiI8QK7kl",
				shirtIcon: "_3gYTHRBO1S_S5AOddgqD6Z",
				avatarPostButtonShirtIcon: "ARFP2bx6U967JwMoJ2Xr5",
				compactButtonLayout: "VFbNvXfZXUhRFiCTDHO6f",
				chevronIcon: "_12pWM-aURvVUuSrUyqfNZh"
			}
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx": function(e, t, r) {
			"use strict";
			var a = r("./node_modules/react/index.js"),
				n = r.n(a),
				s = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/controls/Button/index.tsx"),
				d = r("./src/reddit/icons/fonts/index.tsx"),
				c = r("./src/reddit/icons/svgs/Shirt/index.tsx"),
				i = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				l = r.n(i);
			const {
				fbt: m
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = function({
				compact: e,
				currentUserHasSnoovatar: t,
				className: r,
				isOwnProfile: a,
				onClick: i
			}) {
				return n.a.createElement(o.t, {
					onClick: i,
					isFullWidth: !0,
					className: Object(s.a)(l.a.snoovatarButton, {
						[l.a.snoovatarExtraPadding]: !t && a,
						[l.a.compactButtonLayout]: e
					}, r)
				}, t ? n.a.createElement(c.a, {
					className: l.a.shirtIcon
				}) : n.a.createElement("div", {
					className: l.a.shirtIcon
				}), t ? m._("Style Avatar", null, {
					hk: "UEtBO"
				}) : a ? m._("Create Avatar", null, {
					hk: "2pJgje"
				}) : m._("Create Your Own Avatar", null, {
					hk: "22FFcO"
				}), t ? n.a.createElement("div", {
					className: l.a.chevronIcon
				}) : n.a.createElement(d.a, {
					name: "caret_right",
					className: l.a.chevronIcon
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.m.less": function(e, t, r) {
			e.exports = {
				BannerWrapper: "_8AZ553JgDTNn5ZUmBdXkR",
				bannerWrapper: "_8AZ553JgDTNn5ZUmBdXkR",
				BannerImage: "_1IvROQ79nAJZ87_JkTFsLO",
				bannerImage: "_1IvROQ79nAJZ87_JkTFsLO"
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx": function(e, t, r) {
			"use strict";
			var a = r("./node_modules/react/index.js"),
				n = r.n(a),
				s = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				o = r("./src/reddit/icons/svgs/Close/index.tsx"),
				d = r("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.tsx"),
				c = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.m.less"),
				i = r.n(c),
				l = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				m = r.n(l);
			t.a = function({
				bannerBackgroundImage: e,
				isNSFW: t,
				username: r,
				editMode: a,
				isDeletingBanner: c,
				onDeleteBanner: l
			}) {
				return n.a.createElement("div", {
					className: i.a.bannerWrapper
				}, n.a.createElement(d.a, {
					bannerUrl: e,
					isNSFW: t,
					userName: r
				}), a && e && (c ? n.a.createElement(s.a, {
					sizePx: 20,
					className: m.a.loadingIcon
				}) : n.a.createElement(o.a, {
					className: m.a.closeIcon,
					onClick: l
				})))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx": function(e, t, r) {
			"use strict";
			var a = r("./node_modules/react/index.js"),
				n = r.n(a),
				s = r("./src/reddit/controls/InternalLink/index.tsx"),
				o = r("./src/reddit/components/HumanDate/index.tsx");

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: c
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = function({
				className: e,
				shouldDisplaySnoovatar: t,
				url: r,
				userCreated: a,
				username: c,
				...i
			}) {
				const l = t ? n.a.createElement(n.a.Fragment, null, "u/", c, " · ", n.a.createElement(o.d, {
					seconds: a,
					noPostfix: !0,
					shortenedUnit: !0
				})) : `u/${c}`;
				return r ? n.a.createElement(s.a, d({}, i, {
					className: e,
					to: r
				}), l) : n.a.createElement("span", d({}, i, {
					className: e
				}), l)
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less": function(e, t, r) {
			e.exports = {
				loadingIcon: "_2DTxp6tzlJMeNlZ-cjXWTs",
				closeIcon: "_2ioQgcdZvYlf34S0OEqBuQ",
				settingsIcon: "A4Iifg_NCOrfabq0ON3mW"
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/UserInformation.tsx": function(e, t, r) {
			"use strict";
			var a = r("./src/config.ts"),
				n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				o = r.n(s),
				d = r("./src/reddit/icons/svgs/Admin/index.tsx"),
				c = r("./src/reddit/icons/svgs/Nsfw/index.tsx"),
				i = r("./src/reddit/icons/svgs/PremiumCircle/index.tsx"),
				l = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less"),
				m = r.n(l);
			t.a = ({
				title: e,
				username: t,
				isEmployee: r,
				isGold: s,
				isNSFW: l
			}) => o.a.createElement("h1", {
				className: m.a.snoovatarUserTitle
			}, e || t, r && o.a.createElement(d.a, {
				className: m.a.snoovatarAdminIcon,
				title: n.fbt._("Reddit admin", null, {
					hk: "goUUb"
				})
			}), s && o.a.createElement("a", {
				title: n.fbt._("{username} has Reddit Premium", [n.fbt._param("username", t)], {
					hk: "3Fylv"
				}),
				href: `${a.a.redditUrl}/premium`
			}, o.a.createElement(i.a, {
				className: m.a.snoovatarPremiumIcon
			})), l && o.a.createElement(c.a, {
				className: m.a.snoovatarNsfwIcon,
				title: n.fbt._("NSFW - Adult Content", null, {
					hk: "2Iw7mN"
				})
			}))
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less": function(e, t, r) {
			e.exports = {
				snoovatarContainer: "_34XIqvI8-YT1wukR_W8vj6",
				bottomGlow: "_18b8M-cZftX_frkYRy3DN1",
				topGlow: "_1-PwjX8ETMrfCu2hAkAHFd",
				snoovatar: "_2bLCGrtCCJIMNCZgmAMZFM",
				premiumGlow: "_18BjSGkpIVVfS1xJXL1eoW",
				snoovatarUserName: "_28nEhn86_R1ENZ59eAru8S",
				snoovatarUserTitle: "_3LM4tRaExed4x1wBfK1pmg",
				snoovatarSettingsLink: "PNl4tAYE2TRxhOc34iqcY",
				snoovatarAdminIcon: "kOKnXvA8jebkfk2wVIb9R",
				snoovatarNsfwIcon: "Wb4wBt474lETdwG0YpWID",
				snoovatarPremiumIcon: "_3NZUKOdsA_2X9TrZGSNQyP",
				particleWrapper: "_3sckwXGpSWEBLgH7dBHDSI",
				particle: "R8JC02qFTBSKsWVEamnnh",
				particleX0: "_2FHPkirHUUZZ53WuQRt_ku",
				particleX20: "DeM4CXWl9dmFhzxbChV3v",
				particleX40: "_2jQr36LfrhyZudo0c4r5qb",
				particleX60: "_2ThlCGLfserHkMW64od-w_",
				particleX80: "_2PoCUl_D7HnNn8GhlmyNMn",
				particleX100: "_3xLPb9tG5DMGKH5Qmq0lMn",
				particleFloat1: "_2Tlu1OsBOwuxXIF1MLT2k",
				floatUp1: "_1-74-z_0KhbvP-MLUh63RF",
				particleFloat2: "BW4L6Zj7IYZtY4carTDWz",
				floatUp2: "BhXouEsciSb0lIayg329d",
				particleFloat3: "UjQ0lRcZlylUigyKGCSrO",
				floatUp3: "_2cAI3EiKyyG1hMFOLbG7ka",
				particleFloat4: "_2_ke4gf08pfYrY6lP-aPZ_",
				floatUp1Left: "_2D7to5Dk7q0ZyKN3MMQfuJ",
				particleFloat5: "_2wM6_vp4fY0ziLkOrGaobV",
				floatUp2Left: "_3BR2d3YbOQLeA3LmAmwBJL",
				particleFloat6: "_23n0biPU5CQf96pEUSFupJ",
				floatUp3Left: "_3FnzyfIl1wHuAYA54rlkJH",
				particleDelay1: "_3meTYeYw1F3UdYO0v-gAYr",
				particleDelay2: "_3d8_fd8LwWsj0tyZWIeQdt",
				particleDelay3: "_2PLSBdnBk3jcotYknlKud1",
				particleDelay4: "_2pnTv5ZAxpIbkx38PkPJPg",
				particleDelay5: "_3j1NzwW_t2Ufnx4ed9QabN",
				particleDelay6: "_1hddWHnQ8DFnwilLlN9GEO",
				particleDelay7: "_3eRR1I_MwXC19q9sr8mKaR",
				particleDelay8: "_1sCUpg4sdajNDXrcNTP0qW",
				particleDelay9: "_3J5h1MCyY_xUf2QP7PDSHY",
				particleDelay10: "_2RqcLn9onSZQmKQgvKmSF7"
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx": function(e, t, r) {
			"use strict";
			var a = r("./node_modules/react/index.js"),
				n = r.n(a),
				s = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/lib/classNames/index.ts"),
				d = r("./src/reddit/controls/InternalLink/index.tsx"),
				c = r("./src/reddit/icons/fonts/index.tsx"),
				i = r("./src/reddit/selectors/experiments/econ/index.ts"),
				l = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx"),
				m = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx"),
				u = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx"),
				p = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx"),
				b = (r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less")),
				f = r.n(b);
			const v = 25;

			function x(e, t) {
				return Object.keys(t).filter(t => 0 === t.indexOf(e)).map(e => t[e])
			}

			function h(e) {
				return e[Math.floor(Math.random() * e.length)]
			}
			const I = x("particleDelay", f.a),
				_ = x("particleX", f.a),
				E = x("particleFloat", f.a),
				g = () => {
					const e = h(_),
						t = h(E),
						r = h(I);
					return Object(o.a)(f.a.particle, e, t, r)
				};
			class w extends n.a.Component {
				shouldComponentUpdate() {
					return !1
				}
				render() {
					const e = [];
					for (let t = 0; t < v; t++) e.push(this.createParticle(t));
					return n.a.createElement("div", {
						role: "presentation",
						className: f.a.particleWrapper
					}, e)
				}
				createParticle(e) {
					return n.a.createElement("div", {
						key: e,
						className: `${g()}`
					})
				}
			}
			var C = w,
				O = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				N = r.n(O),
				j = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/UserInformation.tsx");
			t.a = ({
				bannerBackgroundImage: e,
				compact: t,
				currentUserHasSnoovatar: r,
				editMode: a,
				isDeletingBanner: b,
				isEmployee: v,
				isGold: x,
				isNSFW: h,
				isOwnProfile: I,
				onClickSnoovatar: _,
				onDeleteBanner: E,
				prefersReducedAnimations: g,
				snoovatarUrl: w,
				title: O,
				userCreated: y,
				username: k,
				url: P,
				isHovercard: U
			}) => {
				const A = Object(s.e)(e => !I && !!w && Object(i.h)(e));
				return n.a.createElement(n.a.Fragment, null, n.a.createElement(u.a, {
					bannerBackgroundImage: e,
					editMode: !!a,
					isNSFW: h,
					username: k,
					isDeletingBanner: !!b,
					onDeleteBanner: E
				}), n.a.createElement("div", {
					className: f.a.snoovatarContainer
				}, x && n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
					className: f.a.topGlow
				}), n.a.createElement("div", {
					className: f.a.bottomGlow
				}), !g && n.a.createElement(C, null)), n.a.createElement("img", {
					className: Object(o.a)(f.a.snoovatar, {
						[f.a.premiumGlow]: x
					}),
					src: w || void 0
				})), !a && I && n.a.createElement(d.a, {
					to: "/settings/profile",
					className: f.a.snoovatarSettingsLink
				}, n.a.createElement(c.a, {
					name: "settings",
					className: N.a.settingsIcon
				})), n.a.createElement(j.a, {
					isEmployee: v,
					isGold: x,
					isNSFW: h,
					title: O,
					username: k
				}), n.a.createElement(p.a, {
					className: f.a.snoovatarUserName,
					shouldDisplaySnoovatar: !0,
					username: k,
					userCreated: y,
					url: P
				}), (I || !r && !!w) && n.a.createElement(l.a, {
					compact: t,
					currentUserHasSnoovatar: r,
					isOwnProfile: I,
					onClick: _
				}), A && n.a.createElement(m.a, {
					username: k,
					isHovercard: !!U,
					share: {
						username: k
					}
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/index.m.less": function(e, t, r) {
			e.exports = {
				actionItem: "_1l7CTV4NjDjmzX8DiiSgTL",
				AwardedLastMonth: "oZjk-MiWCU7KVYej9wPSw",
				awardedLastMonth: "oZjk-MiWCU7KVYej9wPSw",
				textColumn: "_wi1DtT7oN7k_x5oIV8zm",
				iconColumn: "_32tzMaZn7x3dfQC5MXndJn",
				icon: "_12jN4wdttUosp76WHzuieI",
				count: "_6xPPP5HdELF-SZJL8layH",
				awardIcon: "_2Eq8z6UD7I0ul3wnZ-YT80",
				adminIcon: "_1sNQxemH_0rq1jtZAMyAZd",
				snoovatarAdminIcon: "_1rf3zLc4sH59mO7_BEXyze",
				snoovatarPremiumIcon: "_3QQFENUs15G6BHI5pjsswJ",
				button: "_2q1wcTx60QKM_bQ1Maev7b"
			}
		},
		"./src/reddit/controls/ImageInput/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var a = r("./node_modules/react/index.js"),
				n = r.n(a);
			class s extends n.a.Component {
				constructor(e) {
					super(e), this.onFileInput = e => {
						const t = e.currentTarget.files,
							r = this.props.multiple ? [...t] : t[0];
						this.props.onChange(r), this.setState(() => ({
							value: r
						}))
					}, this.state = {
						value: e.value || ""
					}
				}
				static getDerivedStateFromProps(e, t) {
					return {
						value: t.value || e.value || ""
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this, r = "string" == typeof t.value ? t.value : "", a = "object" == typeof t.value ? t.value : null, s = r || a;
					return n.a.createElement("div", {
						className: e.className
					}, r && n.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						readOnly: !0,
						type: "text",
						value: r,
						tabIndex: e.tabIndex
					}), (!s || e.multiple || void 0 !== e.isPending && !e.isPending) && n.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						type: "file",
						onChange: this.onFileInput,
						accept: "image/x-png,image/jpeg",
						multiple: e.multiple || !1,
						tabIndex: e.tabIndex
					}))
				}
			}
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, r) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, r) {
			"use strict";
			var a = r("./node_modules/react/index.js"),
				n = r.n(a),
				s = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/controls/LoadingIcon/index.m.less"),
				d = r.n(o);
			t.a = ({
				center: e,
				className: t,
				sizePx: r = 10
			}) => n.a.createElement("div", {
				className: Object(s.a)(d.a.loadingIcon, t, {
					[d.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${r}px`
				},
				"data-testid": "LoadingIcon"
			})
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "c", (function() {
				return o
			})), r.d(t, "a", (function() {
				return d
			}));
			var a = r("./node_modules/bignumber.js/bignumber.js"),
				n = r("./src/lib/prettyPrintNumber/index.ts");

			function s(e, t) {
				const r = new a.BigNumber(e),
					n = new a.BigNumber(t || 1);
				return r.dividedToIntegerBy(n).toString()
			}

			function o(e, t) {
				return Object(n.b)(parseInt(s(e, t), 10))
			}

			function d(e, t) {
				const r = new a.BigNumber(e),
					n = new a.BigNumber(t || 1);
				return r.multipliedBy(n).toFixed(0)
			}
		},
		"./src/reddit/icons/fonts/Gift/index.tsx": function(e, t, r) {
			"use strict";
			var a = r("./node_modules/react/index.js"),
				n = r.n(a),
				s = r("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => n.a.createElement("i", {
				className: `${Object(s.b)("award",e.isFilled)} ${e.className}`,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, n.a.createElement(s.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Info/index.tsx": function(e, t, r) {
			"use strict";
			var a = r("./node_modules/react/index.js"),
				n = r.n(a),
				s = r("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => n.a.createElement("i", {
				className: `${Object(s.b)("info",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/commonStyles.m.less": function(e, t, r) {}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconTopAwardersModal.447db072f44e81d82959.js.map