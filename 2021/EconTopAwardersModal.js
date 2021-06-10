// https://www.redditstatic.com/desktop2x/EconTopAwardersModal.9ae832e3c1cbe91fb829.js
// Retrieved at 6/10/2021, 5:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EconTopAwardersModal"], {
		"./src/reddit/actions/subredditModeration/ban.ts": function(e, t, a) {
			"use strict";
			a.d(t, "c", (function() {
				return $
			})), a.d(t, "d", (function() {
				return re
			})), a.d(t, "b", (function() {
				return oe
			})), a.d(t, "e", (function() {
				return ce
			})), a.d(t, "a", (function() {
				return ie
			}));
			a("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = a("./node_modules/fbt/lib/FbtPublic.js"),
				s = a("./node_modules/lodash/get.js"),
				n = a.n(s),
				o = a("./src/lib/makeActionCreator/index.ts"),
				c = a("./src/reddit/actions/apiRequestState.ts"),
				i = a("./src/reddit/actions/modal.ts"),
				d = a("./src/reddit/actions/subreddit.ts"),
				l = a("./src/reddit/actions/toaster.ts"),
				m = a("./src/reddit/constants/modals.ts"),
				u = a("./src/lib/constants/index.ts"),
				p = a("./src/lib/makeApiRequest/index.ts"),
				b = a("./src/lib/omitHeaders/index.ts"),
				v = a("./src/reddit/constants/headers.ts"),
				f = a("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				h = a("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const x = (e, t, a) => Object(p.a)(Object(b.a)(e, [v.a]), {
				endpoint: Object(f.a)(Object(h.a)(`${e.apiUrl}/api/v1/${t}/banned`)),
				method: u.hb.GET,
				data: a
			});
			var E = a("./src/reddit/helpers/normalizeUsername/index.tsx"),
				I = a("./src/reddit/models/SubredditModeration/index.ts"),
				_ = a("./src/reddit/models/Toast/index.ts"),
				w = a("./src/reddit/selectors/activeModalId.ts"),
				g = a("./src/reddit/selectors/bannedUser.ts"),
				C = a("./src/reddit/selectors/subreddit.ts"),
				N = a("./src/reddit/selectors/user.ts"),
				j = a("./src/reddit/actions/subredditModeration/constants.ts"),
				O = a("./src/lib/initializeClient/installReducer.ts"),
				y = a("./node_modules/redux/es/redux.js");
			var k = (e = null, t) => {
				switch (t.type) {
					case j.o:
					case j.n:
						return null;
					case j.m:
						return t.payload;
					default:
						return e
				}
			};
			const U = {};
			var P = (e = U, t) => {
					switch (t.type) {
						case j.o: {
							const {
								subredditId: a,
								fetchedToken: r
							} = t.payload, s = Object(I.d)(a, r);
							return {
								...e,
								[s]: !0
							}
						}
						case j.n:
						case j.m: {
							const {
								subredditId: a,
								fetchedToken: r
							} = t.payload, s = Object(I.d)(a, r);
							return {
								...e,
								[s]: !1
							}
						}
						default:
							return e
					}
				},
				A = Object(y.c)({
					error: k,
					pending: P
				});
			const B = {};
			var M = (e = B, t) => {
					switch (t.type) {
						case j.n: {
							const {
								fetchedToken: a,
								subredditId: r
							} = t.payload, s = Object(I.d)(r, a);
							return {
								...e,
								[s]: !0
							}
						}
						default:
							return e
					}
				},
				S = a("./src/reddit/actions/inContextModeration.ts");
			var T = (e = null, t) => {
				switch (t.type) {
					case S.a:
						return t.payload;
					default:
						return e
				}
			};
			const L = {};
			var H = (e = L, t) => {
					switch (t.type) {
						case j.n: {
							const {
								subredditId: e,
								after: a
							} = t.payload;
							return {
								[e]: a
							}
						}
						default:
							return e
					}
				},
				F = a("./node_modules/icepick/icepick.js");
			const K = {};
			var D = (e = K, t) => {
				switch (t.type) {
					case j.l:
					case j.n: {
						const {
							subredditId: a,
							bannedUsers: r
						} = t.payload;
						return Object(F.merge)(e, {
							[a]: r
						})
					}
					case j.s: {
						const {
							subredditId: a,
							userId: r
						} = t.payload;
						return Object(F.unsetIn)(e, [a, r])
					}
					default:
						return e
				}
			};
			var R = (e = null, t) => {
				switch (t.type) {
					case j.r:
					case j.q:
						return null;
					case j.p:
						return t.payload;
					default:
						return e
				}
			};
			var W = (e = !1, t) => {
					switch (t.type) {
						case j.r:
							return !0;
						case j.q:
						case j.p:
							return !1;
						default:
							return e
					}
				},
				z = Object(y.c)({
					error: R,
					pending: W
				});
			var Z = (e = null, t) => {
					switch (t.type) {
						case j.r:
						case j.p:
							return null;
						case j.q: {
							const e = t.payload.bannedUserIds[0];
							return e ? t.payload.bannedUsers[e] : null
						}
						default:
							return e
					}
				},
				q = Object(y.c)({
					api: z,
					result: Z
				});
			const G = {};
			var Y = (e = G, t) => {
					switch (t.type) {
						case j.n: {
							const {
								subredditId: a,
								bannedUserIds: r
							} = t.payload;
							return e[a] ? {
								...e,
								[a]: [...e[a], ...r]
							} : {
								...e,
								[a]: r
							}
						}
						case j.s: {
							const {
								subredditId: a,
								userId: r
							} = t.payload;
							return {
								[a]: e[a].filter(e => e !== r)
							}
						}
						case j.l: {
							const {
								subredditId: a,
								bannedUserIds: r
							} = t.payload, s = r[0];
							return s && e[a] && -1 === e[a].indexOf(s) ? {
								[a]: [s, ...e[a]]
							} : e
						}
						default:
							return e
					}
				},
				J = Object(y.c)({
					api: A,
					fetchedTokens: M,
					inContext: T,
					loadMore: H,
					models: D,
					search: q,
					userOrder: Y
				});
			Object(O.a)({
				features: {
					banned: J
				}
			});
			const Q = Object(o.a)(j.o),
				X = Object(o.a)(j.n),
				V = Object(o.a)(j.m),
				$ = (e, t = {}) => async (a, r, {
					apiContext: s
				}) => {
					const n = r(),
						o = t.after || "",
						c = Object(I.d)(e, o),
						i = n.features.banned.fetchedTokens[c];
					if (n.features.banned.api.pending[c] || i) return;
					a(Q({
						subredditId: e,
						fetchedToken: o
					}));
					const d = n.subreddits.models[e].name,
						l = await x(s(), d, t);
					l.ok ? a(X({
						...l.body,
						fetchedToken: o
					})) : a(V({
						subredditId: e,
						fetchedToken: o
					}))
				}, ee = Object(o.a)(j.r), te = Object(o.a)(j.q), ae = Object(o.a)(j.p), re = (e, t) => async (a, r, {
					apiContext: s
				}) => {
					const n = r().subreddits.models[e].name,
						o = {
							username: Object(E.a)(t)
						};
					a(ee());
					const c = await x(s(), n, o);
					c.ok ? a(te(c.body)) : a(ae(c.error))
				}, se = Object(o.a)(j.l), ne = Object(o.a)(j.s), oe = (e, t, a) => async (s, o, {
					apiContext: i
				}) => {
					const d = o(),
						m = d.subreddits.models[e].url,
						f = d.subreddits.models[e].name;
					t.username = Object(E.a)(t.username), s(Object(c.h)(a));
					const h = await ((e, t, a) => Object(p.a)(Object(b.a)(e, [v.a]), {
						endpoint: `${e.apiUrl}${t}api/friend`,
						method: u.hb.POST,
						data: {
							api_type: "json",
							ban_reason: a.reason,
							ban_message: a.banMessage,
							duration: a.duration,
							name: a.username,
							note: a.modNote,
							ban_context: a.contextId,
							type: "banned"
						}
					}))(i(), m, t);
					if (h.ok) {
						s(Object(c.e)(a));
						const e = {
							username: t.username
						};
						s(Object(l.f)({
							kind: _.b.SuccessMod,
							text: r.fbt._("Successfully banned a user", null, {
								hk: "1kORpS"
							})
						}));
						const n = await x(i(), f, e);
						n.ok && s(se(n.body))
					} else {
						s(Object(c.f)(a, h.error));
						const e = n()(h, "body.json.errors[0][1]", r.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						s(Object(l.f)({
							kind: _.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, ce = (e, t) => async (a, s, {
					apiContext: o
				}) => {
					const c = s().subreddits.models[e].url,
						i = await ((e, t, a) => Object(p.a)(Object(b.a)(e, [v.a]), {
							endpoint: `${e.apiUrl}${t}api/unfriend`,
							method: u.hb.POST,
							data: {
								api_type: "json",
								id: a,
								type: "banned"
							}
						}))(o(), c, t);
					if (i.ok) a(ne({
						subredditId: e,
						userId: t
					})), a(Object(l.f)({
						kind: _.b.SuccessMod,
						text: r.fbt._("Successfully unbanned a user", null, {
							hk: "OgqK6"
						})
					}));
					else {
						const e = n()(i, "body.json.errors[0][1]", r.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						a(Object(l.f)({
							kind: _.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, ie = (e, t) => async (a, r) => {
					const s = r();
					await Promise.all([(async () => {
						if (!Object(w.b)(m.a.BAN_USER)(s) && !Object(C.R)(s, {
								subredditId: e
							})) {
							const t = Object(C.U)(s, {
								subredditId: e
							});
							await a(Object(d.o)(t.name))
						}
					})(), (async () => {
						const r = Object(N.nb)(s, {
							userName: t
						});
						if (!r) return;
						const n = Object(g.h)(s, {
							subredditId: e
						});
						n && n[r.id] || await a($(e, {
							username: t
						}))
					})()]), a(Object(i.i)(m.a.BAN_USER))
				}
		},
		"./src/reddit/components/ChatButton/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return r
			}));
			var r, s = a("./node_modules/react/index.js"),
				n = a.n(s),
				o = a("./node_modules/react-redux/es/index.js"),
				c = a("./src/reddit/actions/chat/toggle.ts"),
				i = a("./src/reddit/components/TrackingHelper/index.tsx"),
				d = a("./src/reddit/controls/Button/index.tsx"),
				l = a("./src/reddit/helpers/trackers/authorHovercard.ts");
			! function(e) {
				e.awardNotification = "AWARD_NOTIFICATION"
			}(r || (r = {}));
			const m = ({
				onStartChat: e,
				text: t,
				className: a,
				sendEvent: s,
				contextId: o,
				priority: c,
				Icon: i,
				redditStyle: m,
				isFullWidth: u,
				eventSource: p,
				onClick: b,
				onAddUserToQuickReplyList: v
			}) => {
				return n.a.createElement(d.q, {
					onClick: t => {
						if (b && b(t), e(), p === r.awardNotification) return v();
						s(Object(l.b)(o))
					},
					className: a,
					text: t,
					priority: c,
					Icon: i,
					redditStyle: m,
					isFullWidth: u
				})
			};
			m.displayName = "ChatButton";
			const u = Object(o.b)(null, (e, {
				contextId: t,
				userId: a
			}) => ({
				onStartChat: () => {
					e(Object(c.b)(a, t))
				},
				onAddUserToQuickReplyList: () => {
					e(Object(c.a)(a))
				}
			}));
			t.b = u(Object(i.c)(m))
		},
		"./src/reddit/components/ConfirmUserActionModal/index.m.less": function(e, t, a) {
			e.exports = {
				buttonWidth: "ogOEj4x-0BpDZWeccJwxx",
				ModalText: "_2YxEi97B6Nm7NCgLG6pCud",
				modalText: "_2YxEi97B6Nm7NCgLG6pCud"
			}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.tsx": function(e, t, a) {
			"use strict";
			var r = a("./node_modules/fbt/lib/FbtPublic.js"),
				s = a("./node_modules/react/index.js"),
				n = a.n(s),
				o = a("./src/higherOrderComponents/asModal/index.tsx"),
				c = a("./src/reddit/components/ModalStyledComponents/index.tsx"),
				i = a("./src/reddit/controls/TextButton/index.tsx"),
				d = a("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				l = a("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				m = a.n(l);
			const u = e => e.preventDefault();
			t.a = Object(o.a)(e => n.a.createElement(c.d, null, n.a.createElement(c.h, null, n.a.createElement(d.a, null, n.a.createElement(c.p, null, e.headerText || r.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), n.a.createElement(i.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, n.a.createElement(c.b, null)))), n.a.createElement(c.k, null, n.a.createElement(c.o, {
				className: m.a.ModalText
			}, e.modalText)), n.a.createElement(c.f, null, !e.hideCancelButton && n.a.createElement(c.a, {
				className: m.a.buttonWidth,
				onMouseDown: u,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || r.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), n.a.createElement(c.t, {
				className: m.a.buttonWidth,
				onMouseDown: u,
				onClick: t => {
					e.onConfirm(), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.actionText))))
		},
		"./src/reddit/components/Econ/TopAwardersModal/TopAwardersList/Awarder/index.m.less": function(e, t, a) {
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
		"./src/reddit/components/Econ/TopAwardersModal/TopAwardersList/index.m.less": function(e, t, a) {
			e.exports = {
				awarder: "_3WyMnKxtBhvXwCnMKXO7BT"
			}
		},
		"./src/reddit/components/Econ/TopAwardersModal/Winners/Winner/index.m.less": function(e, t, a) {
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
		"./src/reddit/components/Econ/TopAwardersModal/Winners/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_1NrpBgoPY-jeGboQdLnvIe",
				winner: "_3nP2WbvmZaXT9gXgbtpMki",
				flexContainer: "ncY6G2KCOOZsDVUyPD9VW"
			}
		},
		"./src/reddit/components/Econ/TopAwardersModal/index.m.less": function(e, t, a) {
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
		"./src/reddit/components/Econ/TopAwardersModal/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var r = a("./node_modules/react/index.js"),
				s = a.n(r),
				n = a("./node_modules/react-redux/es/index.js"),
				o = a("./node_modules/reselect/es/index.js"),
				c = a("./src/higherOrderComponents/asModal/index.tsx"),
				i = a("./src/lib/classNames/index.ts"),
				d = a("./src/reddit/constants/modals.ts"),
				l = a("./src/reddit/helpers/correlationIdTracker.ts"),
				m = a("./src/reddit/helpers/trackers/topAwarded.ts"),
				u = a("./src/reddit/hooks/useTracking.ts"),
				p = a("./src/reddit/actions/gold/modals.ts"),
				b = a("./src/reddit/contexts/InsideOverlay.tsx"),
				v = a("./src/reddit/contexts/Post/index.tsx"),
				f = a("./src/reddit/models/Gold/TopAwarded/index.ts"),
				h = a("./src/reddit/selectors/gold/topAwarded.ts"),
				x = a("./src/reddit/selectors/posts.ts"),
				E = a("./src/reddit/selectors/user.ts"),
				I = a("./src/reddit/actions/gold/topAwarded.ts"),
				_ = a("./src/reddit/actions/modal.ts"),
				w = a("./src/reddit/components/AwardBadges/index.tsx"),
				g = a("./src/reddit/components/PostTopMeta/index.tsx"),
				C = a("./src/reddit/controls/Button/index.tsx"),
				N = a("./src/reddit/controls/LoadingIcon/index.tsx"),
				j = a("./src/reddit/icons/fonts/Gift/index.tsx"),
				O = a("./src/reddit/icons/svgs/Close/index.tsx"),
				y = a("./src/reddit/icons/svgs/TopAwarded/index.tsx");
			var k = e => s.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 88 88",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, s.a.createElement("path", {
					d: "M67.819 86.757h-47.62a5.5 5.5 0 01-5.5-5.5V67.78a5.5 5.5 0 015.5-5.5h1.973a5.497 5.497 0 014.3-5.006l7.03-1.554-.643-2.936c-.262-.243-.521-.487-.778-.73C9.915 48.723 0 36.348 0 12.167a5.5 5.5 0 015.5-5.5h10.148a5.5 5.5 0 015.355-4.243h46.012a5.5 5.5 0 015.355 4.243H82.5a5.5 5.5 0 015.5 5.5c0 24.184-9.91 36.556-32.064 39.886-.256.243-.515.487-.777.73l-.644 2.94 7.014 1.55a5.5 5.5 0 014.3 5.006h1.99a5.5 5.5 0 015.5 5.5v13.478a5.5 5.5 0 01-5.5 5.5z",
					fill: "#000"
				}), s.a.createElement("path", {
					d: "M67.819 67.778v13.479h-47.62V67.778h47.619z",
					fill: "#A06A42"
				}), s.a.createElement("path", {
					d: "M67.545 12.167H82.5c0 21.936-8.538 32.134-29.106 34.684a60.003 60.003 0 006.331-7.426C70.95 36.909 76.494 29.278 76.494 17.3H67.63a39.754 39.754 0 00-.085-5.133zM11.523 17.3c0 11.978 5.527 19.61 16.769 22.125a60.02 60.02 0 006.331 7.426C14.056 44.3 5.5 34.103 5.5 12.167h14.972a39.735 39.735 0 00-.085 5.133h-8.864z",
					fill: "#FEB331"
				}), s.a.createElement("path", {
					d: "M16.269 17.3h4.118a39.733 39.733 0 01.085-5.133h-4.117a43.897 43.897 0 00-.086 5.133zM67.544 12.167c.137 1.745.172 3.456.086 5.133h4.117a44.32 44.32 0 00-.083-5.133h-4.12zM28.292 39.425a25.257 25.257 0 01-6.315-2.327 51.637 51.637 0 002.965 4.734 61.823 61.823 0 002.975 3.795c2.08.513 4.303.926 6.706 1.224a60.007 60.007 0 01-6.331-7.426zM66.045 37.092c-1.87.987-3.94 1.8-6.32 2.333a60.007 60.007 0 01-6.331 7.426 57.435 57.435 0 006.706-1.224 62.408 62.408 0 002.99-3.813 51.472 51.472 0 002.955-4.722z",
					fill: "#A06A42"
				}), s.a.createElement("path", {
					d: "M67.63 17.3c-.359 8.008-3.096 15.349-7.905 22.125a60.02 60.02 0 01-6.33 7.426 79.536 79.536 0 01-3.235 3.046l-2.19 10.01 12.371 2.738v5.133H27.66v-5.133l12.389-2.738-2.19-10.01a79.536 79.536 0 01-3.235-3.046 60.028 60.028 0 01-6.33-7.426c-4.809-6.776-7.547-14.117-7.906-22.125a39.734 39.734 0 01.085-5.133c.103-1.386.291-2.806.531-4.244h46.012c.24 1.438.427 2.858.53 4.244.137 1.745.171 3.456.086 5.133z",
					fill: "#FEB331"
				}), s.a.createElement("path", {
					d: "M48.212 43.095c.875-.782 6.688-6.003 9.052-9.813 8.184-13.195 5.99-24.246 5.804-25.359H34.623c-.435 7.939 1.651 18.806 5.581 27.482 3.214 7.095 5.63 18.961 5.63 18.961l2.378-11.271z",
					fill: "#FFD635"
				}), s.a.createElement("path", {
					d: "M47.366 35.734c5.776-8.664 9.212-17.356 8.648-27.81H42.538c-1.3 9.27 1.737 18.54 4.827 27.81z",
					fill: "#FFF1B6"
				}), s.a.createElement("path", {
					d: "M40.047 59.907L27.66 62.645H60.34L47.97 59.907h-7.923z",
					fill: "#FFD635"
				}), s.a.createElement("path", {
					d: "M67.015 8.354c-3.835 1.297-7.669 1.975-11.503 2.432-3.835.495-7.669.628-11.503.683-3.834-.063-7.669-.195-11.503-.692-3.834-.459-7.669-1.133-11.503-2.423v-.367l23.006-.183 23.006.183v.367z",
					fill: "#fff"
				}), s.a.createElement("path", {
					d: "M54.9 21.778c2.19 0 3.964-2.649 3.964-5.916 0-3.267-1.774-5.916-3.963-5.916-2.19 0-3.964 2.649-3.964 5.916 0 3.267 1.775 5.916 3.964 5.916z",
					fill: "#fff"
				}), s.a.createElement("path", {
					d: "M43.165 59.203c-.245-4.12-1.642-8.053-3.502-11.636-1.83-3.509-4.684-6.651-6.774-10.425-2.116-3.731-3.995-7.584-4.838-11.82-.901-4.256-.893-8.525-.366-12.72l.365-.037c1.36 4.045 2.159 8.074 3.449 11.833 1.396 3.744 2.387 7.72 4.038 11.38 1.579 3.683 4.115 6.998 5.779 11.034 1.497 3.971 2.456 8.189 2.215 12.391h-.366z",
					fill: "#A06A42"
				}), s.a.createElement("path", {
					d: "M16.355 12.766c-.905 1.298-1.81 1.976-2.714 2.432-.904.496-1.809.629-2.713.683-.905-.062-1.81-.195-2.714-.692-.905-.458-1.81-1.133-2.714-2.423V12.4l5.428-.183 5.427.183v.366zM82.5 12.766c-.905 1.298-1.81 1.976-2.714 2.432-.904.496-1.809.629-2.713.683-.905-.062-1.81-.195-2.714-.692-.905-.458-1.81-1.133-2.714-2.423V12.4l5.428-.183 5.427.183v.366z",
					fill: "#FFF1B6"
				})),
				U = a("./node_modules/lodash/noop.js"),
				P = a.n(U),
				A = a("./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx"),
				B = a("./src/reddit/components/UserIcon/index.tsx"),
				M = a("./src/reddit/components/Econ/TopAwardersModal/TopAwardersList/Awarder/index.m.less"),
				S = a.n(M);
			const {
				fbt: T
			} = a("./node_modules/fbt/lib/FbtPublic.js"), L = (e, t) => t ? T._("{userName} (you)", [T._param("userName", e)], {
				hk: "vsIHp"
			}) : e;
			var H = function(e) {
					const {
						awarder: t,
						className: a,
						currentUserId: r,
						onCtaClick: n,
						showCta: o
					} = e, {
						rank: c,
						redditor: d,
						score: l
					} = t, m = !d.profile;
					return s.a.createElement("div", {
						className: Object(i.a)(S.a.container, a)
					}, s.a.createElement("div", {
						className: S.a.rank
					}, c || "-"), s.a.createElement(B.a, {
						className: S.a.icon,
						iconUrl: d.icon ? d.icon.url : void 0,
						isNSFW: !!d.profile && d.profile.isNsfw,
						userName: d.name
					}), s.a.createElement("div", {
						className: S.a.text
					}, s.a.createElement("h3", {
						className: S.a.name
					}, m ? d.name : s.a.createElement(A.a, {
						user: d.name,
						tooltipId: `topawarder--userhovercard--${d.name}`,
						sendHoverCardEvent: P.a
					}, L(d.name, d.id === r))), l > 0 && s.a.createElement("span", {
						className: S.a.score
					}, T._("{score} Coins", [T._param("score", l.toLocaleString())], {
						hk: "xCBGE"
					}))), o && s.a.createElement("button", {
						className: S.a.cta,
						onClick: n
					}, s.a.createElement(j.a, {
						className: S.a.giftIcon
					}), T._("Award", null, {
						hk: "4BW9Zq"
					})))
				},
				F = a("./src/reddit/components/Econ/TopAwardersModal/TopAwardersList/index.m.less"),
				K = a.n(F);
			const D = 8;
			var R = function(e) {
					const {
						awarders: t,
						className: a,
						currentRank: r,
						currentUserId: n,
						hideAddAwardButton: o,
						onGild: c
					} = e;
					return t.length ? s.a.createElement("div", {
						className: Object(i.a)(a, K.a.container)
					}, r && (!r.rank || r.rank > D) && s.a.createElement(H, {
						className: K.a.awarder,
						currentUserId: n,
						awarder: r,
						key: r.redditor.id,
						showCta: !o,
						onCtaClick: c
					}), t.map(e => s.a.createElement(H, {
						className: K.a.awarder,
						currentUserId: n,
						awarder: e,
						key: e.redditor.id,
						showCta: !o && n === e.redditor.id,
						onCtaClick: c
					}))) : null
				},
				W = a("./src/reddit/icons/svgs/CoinV2/index.tsx"),
				z = a("./src/reddit/components/Econ/TopAwardersModal/Winners/Winner/index.m.less"),
				Z = a.n(z);
			var q = function(e) {
					const {
						showScore: t,
						awarder: a,
						className: r,
						rank: n
					} = e, o = a && !a.redditor.profile, c = a ? a.redditor.name : "—";
					return s.a.createElement("div", {
						className: Object(i.a)(r, Z.a.winner, Z.a[`winner${n}`], {
							[Z.a.winnerPlaceholder]: !a
						})
					}, s.a.createElement("div", {
						className: Z.a.iconContainer
					}, s.a.createElement("div", {
						className: Z.a.iconWithBorder
					}, a && s.a.createElement(B.a, {
						className: Z.a.icon,
						iconUrl: a.redditor.icon ? a.redditor.icon.url : void 0,
						isNSFW: !!a.redditor.profile && a.redditor.profile.isNsfw,
						userName: c
					})), s.a.createElement("div", {
						className: Z.a.rank
					}, n)), s.a.createElement("h3", {
						className: Z.a.name
					}, a && !o ? s.a.createElement(A.a, {
						user: c,
						tooltipId: `topawarderwinner-userhovercard--${c}`,
						sendHoverCardEvent: P.a,
						wrapperClassName: Z.a.hoverCardWrapper
					}, c) : c), a && t && s.a.createElement("div", {
						className: Z.a.score
					}, s.a.createElement(W.a, {
						className: Z.a.coinIcon
					}), a.score))
				},
				G = a("./src/reddit/components/Econ/TopAwardersModal/Winners/index.m.less"),
				Y = a.n(G);
			var J = function(e) {
					const {
						awarders: t,
						className: a,
						showScores: r
					} = e;
					if (!t.length) return null;
					const n = [t[0], t[1] || void 0, t[2] || void 0];
					return s.a.createElement("div", {
						className: Object(i.a)(a, Y.a.container, {
							[Y.a.flexContainer]: n.length < 3
						})
					}, n.map((e, t) => s.a.createElement(q, {
						showScore: r,
						className: Y.a.winner,
						awarder: e,
						rank: t + 1,
						key: t
					})))
				},
				Q = a("./src/reddit/components/Econ/TopAwardersModal/index.m.less"),
				X = a.n(Q);

			function V() {
				return (V = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: $
			} = a("./node_modules/fbt/lib/FbtPublic.js"), ee = 7, te = Object(o.a)(e => e, h.a, h.c, h.e, E.j, (e, t, a, r, s) => {
				if (!t) return {
					anonymousRank: void 0,
					currentPostId: t,
					currentRank: void 0,
					currentUser: s,
					error: a,
					list: void 0,
					pending: r,
					post: null
				};
				const n = Object(x.F)(e, {
						postId: t
					}),
					o = Object(h.b)(e, t),
					c = Object(h.d)(e, t),
					i = [];
				let d, l = -1;
				return c && c.forEach((e, t) => {
					if (!e.redditor.profile) return d = e, void(l = t);
					const a = l < 0 ? e : {
						...e,
						rank: e.rank - 1
					};
					i.push(a)
				}), {
					anonymousRank: d,
					currentPostId: t,
					currentRank: o,
					currentUser: s,
					error: a,
					list: i,
					pending: r,
					post: n
				}
			}), ae = Object(n.b)(te);
			const re = Object(c.a)(ae(Object(b.b)((function(e) {
				const {
					anonymousRank: t,
					currentPostId: a,
					currentRank: o,
					currentUser: c,
					post: i,
					list: b,
					pending: h
				} = e, x = Object(n.d)(), E = Object(u.a)();
				Object(r.useEffect)(() => {
					a && x(Object(I.a)(a))
				}, [a, x]), Object(r.useEffect)(() => {
					a && E(Object(m.c)(a))
				}, [a, E]);
				const U = () => x(Object(_.g)(d.a.ECON_TOP_AWARDERS)),
					P = () => {
						if (a) {
							const e = Object(l.d)(l.a.GildingFlow, !0);
							E(Object(m.b)()), x(Object(p.d)({
								thingId: a,
								correlationId: e
							}))
						}
					};
				if (!a || !i) return U(), null;
				const A = c && c.id === i.authorId,
					B = !i.isGildable || !!A,
					M = i.topAwardedType === f.a.Active,
					S = i.topAwardedType === f.a.Inactive,
					T = !h && !!b && !!b.length,
					L = !h && b && !b.length && i && M;
				return s.a.createElement("div", {
					className: X.a.inner
				}, s.a.createElement("div", {
					className: X.a.modalHeader
				}, s.a.createElement(O.a, {
					className: X.a.closeIcon,
					onClick: U
				}), s.a.createElement("h3", {
					className: X.a.title
				}, $._("Top Awarders", null, {
					hk: "3hzpI8"
				}))), s.a.createElement("div", {
					className: X.a.modalContent
				}, s.a.createElement("div", {
					className: X.a.awardBadgesContainer
				}, s.a.createElement(v.a, {
					postId: i.id
				}, s.a.createElement(w.a, {
					awardsCountInView: ee,
					awardsPlaqueStyle: !0,
					hideCta: !0,
					hideTopAwardedBadge: !0,
					tooltipType: g.c.TopAwardedModal,
					thing: i
				}))), h && s.a.createElement(N.a, {
					className: X.a.loader,
					sizePx: 60
				}), T && S && o && 1 === o.rank && s.a.createElement("div", {
					className: X.a.youWon
				}, $._("You won 1st place!", null, {
					hk: "1MxirM"
				}), s.a.createElement(k, {
					className: X.a.youWonIcon
				})), T && s.a.createElement(J, {
					className: X.a.winners,
					awarders: b,
					showScores: S
				}), T && S && (!o || o && 1 !== o.rank) && s.a.createElement("div", {
					className: X.a.info
				}, s.a.createElement("h3", {
					className: X.a.infoTitle
				}, $._("Top Awarded Post", null, {
					hk: "1BJ1We"
				})), s.a.createElement("span", {
					className: X.a.infoDesc
				}, $._("This is a historic Top Awarded post. Give Awards to newer posts to add your name to the list!", null, {
					hk: "2U5vPa"
				})), s.a.createElement(y.a, {
					className: X.a.topAwardedIcon
				})), L && s.a.createElement("div", {
					className: X.a.info
				}, s.a.createElement(y.a, {
					className: X.a.topAwardedIcon
				}), s.a.createElement("h3", {
					className: X.a.infoTitle
				}, $._("Get on the board", null, {
					hk: "RVDeW"
				})), s.a.createElement("span", {
					className: X.a.infoDesc
				}, $._("Award publicly and your username will show up on this leaderboard!", null, {
					hk: "3reZYa"
				})), s.a.createElement(C.i, {
					className: X.a.cta,
					onClick: P
				}, s.a.createElement(j.a, {
					className: X.a.giftIcon
				}), $._("Give Award", null, {
					hk: "2sa45i"
				}))), T && i && M && s.a.createElement(R, {
					awarders: b,
					className: X.a.list,
					currentRank: o,
					currentUserId: c && c.id,
					hideAddAwardButton: B,
					onGild: P
				}), !h && M && t && s.a.createElement("div", {
					className: X.a.anonymousRank
				}, $._("Anonymous redditors have awarded for {score} Coins", [$._param("score", t.score.toLocaleString())], {
					hk: "11BYuy"
				}))), s.a.createElement("div", {
					className: X.a.modalFooter
				}))
			}))));
			t.default = e => s.a.createElement(re, V({}, e, {
				className: Object(i.a)(e.className, X.a.modal)
			}))
		},
		"./src/reddit/components/EditableImage/index.m.less": function(e, t, a) {
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
				EditIcon: "_3X4DuB4IpAlTY0XMdSI5q6",
				editIcon: "_3X4DuB4IpAlTY0XMdSI5q6"
			}
		},
		"./src/reddit/components/EditableImage/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return b
			}));
			var r = a("./node_modules/react/index.js"),
				s = a.n(r),
				n = a("./src/lib/classNames/index.ts"),
				o = a("./src/reddit/controls/ImageInput/index.tsx"),
				c = a("./src/reddit/controls/LoadingIcon/index.tsx"),
				i = a("./src/reddit/icons/fonts/index.tsx"),
				d = a("./src/reddit/models/ApiRequestState/index.ts"),
				l = a("./src/reddit/components/EditableImage/index.m.less"),
				m = a.n(l);
			const {
				fbt: u
			} = a("./node_modules/fbt/lib/FbtPublic.js"), p = 80;
			class b extends s.a.PureComponent {
				constructor() {
					super(...arguments), this.state = {
						apiRequestId: null
					}, this.selectFile = e => {
						const t = Object(d.b)();
						this.setState({
							apiRequestId: t
						}), this.props.onFileSelected(e, t)
					}
				}
				render() {
					const {
						altText: e,
						children: t,
						className: a,
						editButtonClassName: r,
						isLoading: d,
						imageUrl: l
					} = this.props;
					return s.a.createElement("div", {
						className: Object(n.a)(m.a.Container, a)
					}, s.a.createElement("label", {
						className: m.a.HitBox
					}, s.a.createElement("span", {
						className: m.a.ImageContainer,
						role: "presentation"
					}, l ? s.a.createElement("img", {
						alt: e,
						className: m.a.Image,
						src: l
					}) : t), s.a.createElement(o.a, {
						className: m.a.ImageUploader,
						multiple: !1,
						onChange: this.selectFile
					}), !d && s.a.createElement("div", {
						className: Object(n.a)(m.a.EditButton, r)
					}, s.a.createElement(i.a, {
						name: "add_media",
						className: m.a.EditIcon
					}))), d && s.a.createElement(c.a, {
						className: m.a.LoadingIcon,
						sizePx: p
					}))
				}
			}
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx": function(e, t, a) {
			"use strict";
			var r = a("./node_modules/react/index.js"),
				s = a.n(r),
				n = a("./node_modules/react-redux/es/index.js"),
				o = a("./node_modules/reselect/es/index.js"),
				c = a("./src/reddit/actions/snoovatar.ts"),
				i = a("./src/reddit/actions/tooltip.ts"),
				d = a("./src/reddit/selectors/gold/awardIcon.ts"),
				l = a("./src/reddit/selectors/meta.ts"),
				m = a("./src/reddit/selectors/moderatorPermissions.ts"),
				u = a("./src/reddit/selectors/profile.ts"),
				p = a("./src/reddit/selectors/structuredStyles.ts"),
				b = a("./src/reddit/selectors/subreddit.ts"),
				v = a("./src/reddit/selectors/tooltip.ts"),
				f = a("./src/reddit/selectors/user.ts"),
				h = a("./src/reddit/selectors/userFlair.ts"),
				x = a("./src/reddit/selectors/userPrefs.ts"),
				E = a("./node_modules/fbt/lib/FbtPublic.js"),
				I = a("./src/config.ts"),
				_ = a("./node_modules/react-router-dom/esm/react-router-dom.js"),
				w = a("./src/lib/lessComponent.tsx"),
				g = a("./src/lib/prettyPrintNumber/index.ts"),
				C = a("./src/lib/timeAgo/index.ts"),
				N = a("./src/reddit/components/ChatButton/index.tsx"),
				j = a("./src/reddit/components/JSAPIContainers/index.tsx"),
				O = a("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				y = a("./src/reddit/components/SubscribeButton/index.tsx"),
				k = a("./src/reddit/components/UserIcon/index.tsx"),
				U = a("./src/reddit/helpers/trackers/authorHovercard.ts"),
				P = a("./src/reddit/icons/fonts/Info/index.tsx"),
				A = a("./src/reddit/icons/svgs/Admin/index.tsx");
			var B = e => s.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20",
					version: "1.1",
					xmlns: "http://www.w3.org/2000/svg"
				}, s.a.createElement("g", null, s.a.createElement("path", {
					d: "M6.42528593,9.54562407 C4.41043013,8.02026355 3.10790651,5.60355545 3.10790651,2.88165092 L3.10790651,2.79711586 L3.19244157,2.79711586 C5.9143461,2.79711586 8.33136499,4.09963948 9.85641472,6.11449528 C8.02399304,6.25279712 6.56358777,7.7128916 6.42528593,9.54562407 Z M6.42528593,10.2560915 C6.56358777,12.088824 8.02399304,13.5489184 9.85641472,13.6872203 C8.33136499,15.7020761 5.9143461,17.0045997 3.19244157,17.0045997 L3.10790651,17.0045997 L3.10790651,16.9200646 C3.10790651,14.1981601 4.41043013,11.781452 6.42528593,10.2560915 Z M13.6872203,10.2560915 C15.7020761,11.781452 17.0045997,14.1981601 17.0045997,16.9200646 L17.0045997,17.0045997 L16.9200646,17.0045997 C14.1981601,17.0045997 11.7811412,15.7020761 10.2560915,13.6872203 C12.0885132,13.5489184 13.5486077,12.088824 13.6872203,10.2560915 Z M16.9200646,2.79711586 L17.0045997,2.79711586 L17.0045997,2.88165092 C17.0045997,5.60324465 15.7020761,8.02026355 13.6872203,9.54562407 C13.5489184,7.7128916 12.0885132,6.25279712 10.2560915,6.11449528 C11.7811412,4.09963948 14.1981601,2.79711586 16.9200646,2.79711586 Z M19.9403282,9.84895574 L20,9.90862755 L19.9403282,9.96829935 C18.9346096,10.9740179 17.7346469,11.6624192 16.46227,12.0474888 C15.9659373,11.2534187 15.3446668,10.5308304 14.6071606,9.90862755 C15.3446668,9.28642466 15.9659373,8.5638364 16.46227,7.76976629 C17.7346469,8.1548359 18.9346096,8.8432372 19.9403282,9.84895574 Z M9.90862755,5.39283938 C9.28642466,4.65533317 8.5638364,4.03406266 7.76976629,3.53772999 C8.1548359,2.26535306 8.8432372,1.06539035 9.84895574,0.0596718051 L9.90862755,0 L9.96829935,0.0596718051 C10.9740179,1.06539035 11.6624192,2.26535306 12.0474888,3.53772999 C11.2534187,4.03406266 10.5308304,4.65533317 9.90862755,5.39283938 Z M5.39283938,9.90862755 C4.65533317,10.5308304 4.03406266,11.2534187 3.53772999,12.0474888 C2.26535306,11.6624192 1.06539035,10.9740179 0.0596718051,9.96829935 L0,9.90862755 L0.0596718051,9.84895574 C1.06539035,8.8432372 2.26535306,8.1548359 3.53772999,7.76976629 C4.03406266,8.5638364 4.65533317,9.28642466 5.39283938,9.90862755 Z M9.90862755,14.6071606 C10.5308304,15.3446668 11.2534187,15.9659373 12.0474888,16.46227 C11.6624192,17.7346469 10.9740179,18.9346096 9.96829935,19.9403282 L9.90862755,20 L9.84895574,19.9403282 C8.8432372,18.9346096 8.1548359,17.7346469 7.76976629,16.46227 C8.5638364,15.9659373 9.28642466,15.3446668 9.90862755,14.6071606 Z"
				}))),
				M = a("./src/reddit/icons/svgs/Premium/index.tsx"),
				S = a("./src/reddit/models/Gold/Award.ts"),
				T = a("./src/reddit/models/User/index.ts"),
				L = a("./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx"),
				H = a("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx"),
				F = a("./src/reddit/actions/inContextModeration.ts"),
				K = a("./src/reddit/actions/modal.ts"),
				D = a("./src/reddit/actions/subredditModeration/ban.ts"),
				R = a("./src/reddit/constants/modals.ts"),
				W = a("./src/reddit/components/Hovercards/helpers.ts"),
				z = a("./src/reddit/icons/fonts/index.tsx"),
				Z = a("./src/reddit/models/ModeratingSubreddits/index.ts"),
				q = a("./src/reddit/selectors/bannedUser.ts"),
				G = a("./src/reddit/components/Hovercards/AuthorHovercard/ModActions.m.less"),
				Y = a.n(G);
			const {
				fbt: J
			} = a("./node_modules/fbt/lib/FbtPublic.js"), Q = Object(o.c)({
				hasModMailPermissions: Object(m.a)(Z.c.mail),
				isUserBanned: (e, t) => !!Object(q.b)(e, {
					subredditId: t.subredditId,
					username: t.username
				}),
				user: (e, t) => Object(f.nb)(e, {
					userName: t.username
				})
			});
			class X extends s.a.Component {
				componentDidMount() {
					this.props.requestUserBanInfo()
				}
				render() {
					const {
						className: e,
						contextId: t,
						hasModMailPermissions: a,
						isUserBanned: r,
						onUnbanUser: n,
						sendEvent: o,
						toggleBanModal: c,
						toggleMuteModal: i
					} = this.props;
					return s.a.createElement("div", {
						className: e
					}, r ? s.a.createElement(W.a, {
						role: "button",
						onClick: () => {
							n(this.props.user.id), o(U.e(t))
						}
					}, s.a.createElement(z.a, {
						name: "ban",
						isFilled: !0,
						className: Y.a.icon
					}), J._("Unban User", null, {
						hk: "1aASyW"
					})) : s.a.createElement(W.a, {
						role: "button",
						onClick: () => {
							c(), o(U.a(t))
						}
					}, s.a.createElement(z.a, {
						name: "ban",
						className: Y.a.icon
					}), J._("Ban User", null, {
						hk: "3OhuLx"
					})), a && s.a.createElement(W.a, {
						role: "button",
						onClick: () => {
							i(), o(U.d(t))
						}
					}, s.a.createElement(z.a, {
						name: "mod_mute",
						className: Y.a.icon
					}), J._("Mute User", null, {
						hk: "3MCujH"
					})))
				}
			}
			var V = Object(n.b)(Q, (e, {
					username: t,
					subredditId: a,
					contextId: r
				}) => ({
					onUnbanUser: t => e(Object(D.e)(a, t)),
					requestUserBanInfo: () => e(Object(D.c)(a, {
						username: t
					})),
					toggleBanModal: () => {
						e(Object(F.c)({
							username: t,
							subredditId: a,
							contextId: r
						})), e(Object(D.a)(a, t))
					},
					toggleMuteModal: () => {
						e(Object(F.d)({
							username: t,
							subredditId: a,
							contextId: r
						})), e(Object(K.i)(R.a.MUTE_USER))
					}
				}))(X),
				$ = a("./src/reddit/actions/userFlair/index.ts");
			const {
				fbt: ee
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			var te = Object(n.b)(null, (e, t) => ({
					onToggleUserFlairModal: () => e(Object($.g)(t.subredditId, t.username))
				}))(e => s.a.createElement(W.a, {
					role: "button",
					onClick: () => {
						e.onToggleUserFlairModal(), e.sendEvent(U.c(e.contextId))
					}
				}, s.a.createElement(z.a, {
					name: "tag",
					className: Y.a.icon
				}), ee._("Edit user flair", null, {
					hk: "4mTxM"
				}))),
				ae = a("./src/reddit/components/Hovercards/AuthorHovercard/userOptions.m.less"),
				re = a.n(ae);

			function se() {
				return (se = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r])
					}
					return e
				}).apply(this, arguments)
			}
			const ne = w.a.wrapped(k.a, "UserIcon", re.a),
				oe = w.a.wrapped(y.a, "SubscribeButton", re.a),
				ce = w.a.wrapped(N.b, "ChatButton", re.a),
				ie = w.a.wrapped(B, "KarmaIcon", re.a),
				de = w.a.wrapped(M.a, "PremiumIcon", re.a),
				le = w.a.wrapped(_.a, "UserNameLink", re.a),
				me = w.a.div("UserNameMetaData", re.a),
				ue = w.a.div("MetaDataItem", re.a),
				pe = w.a.div("Bullet", re.a),
				be = w.a.div("UserNameContainer", re.a),
				ve = w.a.div("UserInfoContainer", re.a),
				fe = w.a.div("PostKarma", re.a),
				he = w.a.div("CommentKarma", re.a),
				xe = w.a.div("KarmaGrid", re.a),
				Ee = w.a.div("GenericKarma", re.a),
				Ie = w.a.a("InfoLink", re.a),
				_e = w.a.div("KarmaCount", re.a),
				we = w.a.div("KarmaLabel", re.a),
				ge = w.a.div("GenericKarmaLabel", re.a),
				Ce = w.a.div("BannerImage", re.a),
				Ne = w.a.div("UserContainer", re.a),
				je = w.a.div("BottomSpacer", re.a),
				Oe = w.a.div("Container", re.a),
				ye = e => s.a.createElement("div", null, s.a.createElement("div", null, s.a.createElement(le, {
					to: `/user/${e.userName}/`
				}, `u/${e.userName}`), e.user.isEmployee && s.a.createElement(A.a, {
					className: re.a.adminIcon,
					title: E.fbt._("Reddit admin", null, {
						hk: "15wBTE"
					})
				}), e.user.isGold && s.a.createElement(_.a, {
					to: "/premium"
				}, s.a.createElement(de, null))), s.a.createElement(me, null, e.user.username && s.a.createElement(ue, null, e.user.username, s.a.createElement(pe, null, "•")), s.a.createElement(ue, null, Object(C.d)(e.user.createdUtc || e.user.created)))),
				ke = e => {
					const {
						showAwardKarma: t,
						user: a
					} = e;
					return t ? s.a.createElement(xe, null, s.a.createElement(Ee, null, s.a.createElement(_e, null, Object(g.b)(a.postKarma)), s.a.createElement(ge, null, E.fbt._({
						"*": "Post Karma",
						_1: " Post Karma"
					}, [E.fbt._plural(a.postKarma)], {
						hk: "3K4oaH"
					}))), s.a.createElement(Ee, null, s.a.createElement(_e, null, Object(g.b)(a.commentKarma)), s.a.createElement(ge, null, E.fbt._({
						"*": "Comment Karma",
						_1: " Comment Karma"
					}, [E.fbt._plural(a.commentKarma)], {
						hk: "3gKRx9"
					}))), s.a.createElement(Ee, null, s.a.createElement(_e, null, Object(g.b)(a.awardeeKarma)), s.a.createElement(ge, null, E.fbt._({
						"*": "Awardee Karma",
						_1: " Awardee Karma"
					}, [E.fbt._plural(a.awardeeKarma)], {
						hk: "3nzm9q"
					}), s.a.createElement(Ie, {
						href: S.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, s.a.createElement(P.a, {
						className: re.a.infoIcon
					})))), s.a.createElement(Ee, null, s.a.createElement(_e, null, Object(g.b)(a.awarderKarma)), s.a.createElement(ge, null, E.fbt._({
						"*": "Awarder Karma",
						_1: " Awarder Karma"
					}, [E.fbt._plural(a.awarderKarma)], {
						hk: "4zXN3B"
					}), s.a.createElement(Ie, {
						href: S.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, s.a.createElement(P.a, {
						className: re.a.infoIcon
					}))))) : s.a.createElement(ve, null, s.a.createElement(ie, null), s.a.createElement(fe, null, s.a.createElement(_e, null, Object(g.b)(a.postKarma)), s.a.createElement(we, null, E.fbt._({
						"*": "Post Karma",
						_1: " Post Karma"
					}, [E.fbt._plural(a.postKarma)], {
						hk: "3K4oaH"
					}))), s.a.createElement(he, null, s.a.createElement(_e, null, Object(g.b)(a.commentKarma)), s.a.createElement(we, null, E.fbt._({
						"*": "Comment Karma",
						_1: " Comment Karma"
					}, [E.fbt._plural(a.commentKarma)], {
						hk: "3gKRx9"
					}))))
				},
				Ue = e => {
					const {
						className: t,
						contextId: a,
						currentUser: r,
						hideNSFWPref: n,
						hoverId: o,
						isLoggedIn: c,
						onClickSnoovatar: i,
						origin: d,
						moderatorPermissions: l,
						prefersReducedAnimations: m,
						sendEvent: u,
						showAwardKarma: p,
						style: b,
						subredditId: v,
						topAwardIcon: f,
						userName: h,
						user: x,
						userFlair: _,
						userIsBanned: w,
						userProfileStyles: g,
						acceptChats: C
					} = e;
					if (!x) return s.a.createElement(Oe, {
						style: b
					});
					const N = !!r && Object(T.e)(r) === h,
						O = !!(null == r ? void 0 : r.snoovatarFullBodyAsset),
						y = x.accountIcon || `${I.a.assetPath}/img/snoo_user_placeholder.png`,
						k = l && l.flair,
						P = l && l.access,
						A = _ && _.templateIds && _.templateIds.length > 0,
						B = _ && _.displaySettings && _.displaySettings.isEnabled,
						{
							awardedLastMonth: M
						} = x,
						S = !!x.snoovatarFullBodyAsset,
						F = x.isNSFW && n;
					let K;
					return K = S ? !F && g && g.bannerBackgroundImage || void 0 : F ? `${I.a.assetPath}/img/user-info-banner.png` : e.user.bannerImage, s.a.createElement(Oe, {
						className: t,
						id: o,
						style: b
					}, !S && K && s.a.createElement(Ce, {
						style: {
							backgroundImage: `url('${K}')`
						}
					}), s.a.createElement(Ne, null, S ? s.a.createElement(H.a, {
						bannerBackgroundImage: K,
						compact: !0,
						currentUserHasSnoovatar: O,
						isEmployee: x.isEmployee,
						isGold: x.isGold,
						isNSFW: x.isNSFW,
						isOwnProfile: N,
						onClickSnoovatar: i,
						prefersReducedAnimations: !!m,
						snoovatarUrl: x.snoovatarFullBodyAsset,
						title: null,
						userCreated: x.created,
						username: h,
						url: `/user/${e.userName}/`
					}) : s.a.createElement(be, null, s.a.createElement(ne, {
						iconUrl: y,
						isNSFW: x.isNSFW,
						userName: h
					}), s.a.createElement(ye, {
						origin: d,
						user: x,
						userName: h
					})), s.a.createElement(ke, {
						showAwardKarma: p,
						user: x
					}), M && s.a.createElement(L.a, {
						recentAwardings: M,
						topAwardIcon: f,
						username: h
					}), c && !N && !w && C && s.a.createElement(ce, {
						contextId: a,
						userId: x.id,
						text: E.fbt._("Start Chat", null, {
							hk: "2mfqRE"
						})
					}), x.hasUserProfile && !w && !N && s.a.createElement(oe, {
						identifier: {
							name: e.user.username,
							type: "profile"
						},
						getEventFactory: e => Object(U.g)(e ? "unfollow" : "follow", a),
						small: !0
					})), P && a && !N && v && s.a.createElement(V, {
						contextId: a,
						subredditId: v,
						sendEvent: u,
						username: h
					}), k && a && A && B && v && s.a.createElement(te, {
						contextId: a,
						subredditId: v,
						sendEvent: u,
						username: h
					}), s.a.createElement(j.i, {
						contextId: a,
						subredditId: v,
						user: x
					}), !(P || c) && s.a.createElement(je, null))
				},
				Pe = Object(O.a)(Ue),
				Ae = e => {
					const t = e.activeTooltipId === e.tooltipId;
					return s.a.createElement(Pe, se({
						isOpen: t
					}, e))
				};
			Ae.WrappedComponent = Ue;
			var Be = Ae;
			const Me = Object(o.c)({
					activeTooltipId: v.a,
					currentUser: f.j,
					isLoggedIn: f.K,
					hideNSFWPref: f.C,
					moderatorPermissions: (e, {
						subredditId: t
					}) => t ? Object(m.k)(e, {
						subredditId: t
					}) : void 0,
					origin: l.j,
					prefersReducedAnimations: x.c,
					showAwardKarma: (e, t) => {
						return Object(v.a)(e) === t.tooltipId
					},
					topAwardIcon: (e, {
						userName: t
					}) => Object(d.e)(e, {
						userName: t,
						minSize: 32
					}),
					user: f.nb,
					userFlair: (e, {
						subredditId: t
					}) => t ? Object(h.c)(e, {
						subredditId: t
					}) : void 0,
					userIsBanned: (e, t) => !!Object(b.m)(t) && Object(b.gb)(e, t),
					userProfileStyles: (e, t) => Object(p.m)(e, Object(u.m)(e, t.userName)),
					acceptChats: (e, t) => {
						const a = Object(u.h)(e, {
							profileName: t.userName
						});
						return !a || a.acceptChats
					}
				}),
				Se = Object(n.b)(Me, (e, t) => ({
					onClickSnoovatar: () => e(Object(c.b)("user_hovercard")),
					onHideTooltip: () => e(Object(i.i)())
				}));
			t.a = Se(e => s.a.createElement("div", {
				className: e.className,
				id: e.tooltipId,
				onMouseLeave: e.onHideTooltip
			}, s.a.createElement(Be, {
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
				acceptChats: e.acceptChats
			})))
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/ModActions.m.less": function(e, t, a) {
			e.exports = {
				icon: "xd9vrdS8_V6IVus6-mHAM"
			}
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx": function(e, t, a) {
			"use strict";
			var r = a("./node_modules/react/index.js"),
				s = a.n(r),
				n = a("./src/reddit/components/Hovercards/HoverDiv/index.tsx"),
				o = a("./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx"),
				c = a("./src/reddit/components/TrackingHelper/index.tsx");
			t.a = Object(c.c)(e => {
				const t = `${e.tooltipId}-hover-id`;
				return s.a.createElement(n.a, {
					className: e.wrapperClassName,
					hoverId: t,
					sendHoverEvent: e.sendHoverCardEvent,
					tooltipId: e.tooltipId,
					authorOrSubredditName: e.user
				}, e.children, s.a.createElement(o.a, {
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
		"./src/reddit/components/Hovercards/AuthorHovercard/userOptions.m.less": function(e, t, a) {
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
		"./src/reddit/components/Hovercards/HoverDiv/index.m.less": function(e, t, a) {
			e.exports = {
				HoverDiv: "_2mHuuvyV9doV3zwbZPtIPG",
				hoverDiv: "_2mHuuvyV9doV3zwbZPtIPG"
			}
		},
		"./src/reddit/components/Hovercards/HoverDiv/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return I
			})), a.d(t, "b", (function() {
				return _
			}));
			var r = a("./node_modules/react/index.js"),
				s = a.n(r),
				n = a("./src/lib/lessComponent.tsx"),
				o = a("./node_modules/react-redux/es/index.js"),
				c = a("./node_modules/reselect/es/index.js"),
				i = a("./src/reddit/actions/profile/index.ts"),
				d = a("./src/reddit/actions/tooltip.ts"),
				l = a("./src/reddit/selectors/tooltip.ts");
			const m = Object(c.c)({
				dropdownIsOpen: (e, t) => Object(l.b)(t.tooltipId)(e)
			});
			var u = Object(o.b)(m, (e, t) => ({
					onCloseUserDropdown: () => e(Object(d.i)()),
					onOpenUserDropdown: async () => {
						e(Object(d.f)({
							tooltipId: t.tooltipId
						})), t.authorOrSubredditName && (await e(Object(i.d)(t.authorOrSubredditName)), t.sendHoverEvent())
					}
				})),
				p = a("./src/reddit/actions/subreddit.ts");
			const b = Object(c.c)({
				dropdownIsOpen: (e, t) => Object(l.b)(t.tooltipId)(e)
			});
			var v = Object(o.b)(b, (e, t) => ({
					onCloseUserDropdown: () => e(Object(d.i)()),
					onOpenUserDropdown: async () => {
						e(Object(d.f)({
							tooltipId: t.tooltipId
						})), t.authorOrSubredditName && e(Object(p.u)(t.authorOrSubredditName))
					}
				})),
				f = a("./src/reddit/components/Hovercards/HoverDiv/index.m.less"),
				h = a.n(f);
			class x extends s.a.Component {
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
					return s.a.createElement("div", {
						className: t,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, e)
				}
			}
			const E = n.a.wrapped(x, "HoverDiv", h.a),
				I = u(E),
				_ = v(E)
		},
		"./src/reddit/components/Hovercards/helpers.m.less": function(e, t, a) {
			e.exports = {
				UserActionItem: "_3HFQBVggvR9KDsFzm7jIdr",
				userActionItem: "_3HFQBVggvR9KDsFzm7jIdr"
			}
		},
		"./src/reddit/components/Hovercards/helpers.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return c
			})), a.d(t, "b", (function() {
				return i
			}));
			var r = a("./src/lib/lessComponent.tsx"),
				s = a("./src/reddit/layout/row/Inline/index.tsx"),
				n = a("./src/reddit/components/Hovercards/helpers.m.less"),
				o = a.n(n);
			const c = r.a.wrapped(s.a, "UserActionItem", o.a),
				i = e => {
					const {
						author: t,
						itemId: a,
						subredditName: r,
						tooltipIdPrefix: s,
						tooltipType: n
					} = e;
					let o = s;
					return a && (o = `${o}--${a}`), n && (o = `${o}--${n}`), t && (o = `${o}--${t}`), r && (o = `${o}--${r}`), o
				}
		},
		"./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx": function(e, t, a) {
			"use strict";
			var r = a("./node_modules/react/index.js"),
				s = a.n(r),
				n = a("./src/config.ts"),
				o = a("./src/lib/prettyPrintNumber/index.ts"),
				c = a("./src/reddit/components/ProfileIdCard/index.m.less"),
				i = a.n(c);
			const {
				fbt: d
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			class l extends s.a.PureComponent {
				render() {
					const {
						topAwardIcon: e,
						recentAwardings: t,
						username: a
					} = this.props;
					if (!t.topAward) return null;
					const {
						topAward: r,
						totalCount: c
					} = t, l = r.description ? r.description : r.name;
					return s.a.createElement("a", {
						className: i.a.AwardedLastMonth,
						href: `${n.a.oldRedditUrl}/user/${a}/gilded`
					}, s.a.createElement("div", {
						className: i.a.iconColumn
					}, s.a.createElement("img", {
						alt: l,
						className: i.a.icon,
						src: e
					}), c > 1 && s.a.createElement("span", {
						className: i.a.count
					}, `+${Object(o.b)(c-1)}`)), s.a.createElement("div", {
						className: i.a.textColumn
					}, d._({
						"*": "Received the {award-name} Award and more in the past 30 days",
						_1: "Received the {award-name} Award in the past 30 days"
					}, [d._param("award-name", r.name), d._plural(c)], {
						hk: "16MJHe"
					})))
				}
			}
			t.a = l
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.m.less": function(e, t, a) {
			e.exports = {
				Banner: "_2ZyL7luKQghNeMnczY3gqW",
				banner: "_2ZyL7luKQghNeMnczY3gqW"
			}
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.tsx": function(e, t, a) {
			"use strict";
			var r = a("./node_modules/fbt/lib/FbtPublic.js"),
				s = a("./node_modules/react/index.js"),
				n = a.n(s),
				o = a("./src/reddit/models/Image/index.tsx"),
				c = a("./src/reddit/components/EditableImage/index.tsx"),
				i = a("./src/reddit/models/User/index.ts"),
				d = a("./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts"),
				l = a("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.m.less"),
				m = a.n(l);
			class u extends n.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isUpdating: !1
					}, this.updateProfileIcon = async (e, t) => {
						const a = await Object(o.e)(e);
						this.setState({
							isUpdating: !0
						}, async () => {
							await this.props.imageUpdateRequested(a, "profileBanner"), this.setState({
								isUpdating: !1
							})
						})
					}
				}
				render() {
					const {
						bannerUrl: e,
						className: t,
						currentUser: a,
						hideNSFWPref: s,
						isNSFW: o,
						userName: d
					} = this.props, {
						isUpdating: l
					} = this.state, u = e ? n.a.createElement("div", {
						className: m.a.Banner,
						style: {
							backgroundImage: `url(${e})`
						}
					}) : null;
					return a && Object(i.e)(a) === d ? n.a.createElement(c.a, {
						altText: r.fbt._("{userName} banner image", [r.fbt._param("userName", d)], {
							hk: "1PcEBS"
						}),
						className: t,
						isLoading: l,
						onFileSelected: this.updateProfileIcon
					}, u) : o && s ? null : u
				}
			}
			t.a = Object(d.a)(u)
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts": function(e, t, a) {
			"use strict";
			var r = a("./node_modules/react-redux/es/index.js"),
				s = a("./node_modules/reselect/es/index.js"),
				n = a("./src/reddit/actions/preferences.ts"),
				o = a("./src/reddit/selectors/user.ts");
			const c = Object(s.c)({
					currentUser: o.j,
					hideNSFWPref: o.C
				}),
				i = Object(r.b)(c, e => ({
					imageUpdateRequested: (t, a) => e(Object(n.z)(t, a))
				}));
			t.a = i
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less": function(e, t, a) {
			e.exports = {
				snoovatarButton: "_3F1tNW0P4Ff182mO_CefIg",
				snoovatarExtraPadding: "_3DnDqV66Np6rVEiI8QK7kl",
				shirtIcon: "_3gYTHRBO1S_S5AOddgqD6Z",
				compactButtonLayout: "VFbNvXfZXUhRFiCTDHO6f",
				chevronIcon: "_12pWM-aURvVUuSrUyqfNZh"
			}
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx": function(e, t, a) {
			"use strict";
			var r = a("./node_modules/react/index.js"),
				s = a.n(r),
				n = a("./src/lib/classNames/index.ts"),
				o = a("./src/reddit/controls/Button/index.tsx"),
				c = a("./src/reddit/icons/fonts/index.tsx"),
				i = a("./src/reddit/icons/svgs/Shirt/index.tsx"),
				d = a("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				l = a.n(d);
			const {
				fbt: m
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			t.a = function({
				compact: e,
				currentUserHasSnoovatar: t,
				className: a,
				isOwnProfile: r,
				onClick: d
			}) {
				return s.a.createElement(o.q, {
					onClick: d,
					isFullWidth: !0,
					className: Object(n.a)(l.a.snoovatarButton, {
						[l.a.snoovatarExtraPadding]: !t && r,
						[l.a.compactButtonLayout]: e
					}, a)
				}, t ? s.a.createElement(i.a, {
					className: l.a.shirtIcon
				}) : s.a.createElement("div", {
					className: l.a.shirtIcon
				}), t ? m._("Style Avatar", null, {
					hk: "UEtBO"
				}) : r ? m._("Create Avatar", null, {
					hk: "2pJgje"
				}) : m._("Create Your Own Avatar", null, {
					hk: "22FFcO"
				}), t ? s.a.createElement("div", {
					className: l.a.chevronIcon
				}) : s.a.createElement(c.a, {
					name: "caret_right",
					className: l.a.chevronIcon
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.m.less": function(e, t, a) {
			e.exports = {
				BannerWrapper: "_8AZ553JgDTNn5ZUmBdXkR",
				bannerWrapper: "_8AZ553JgDTNn5ZUmBdXkR",
				BannerImage: "_1IvROQ79nAJZ87_JkTFsLO",
				bannerImage: "_1IvROQ79nAJZ87_JkTFsLO"
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx": function(e, t, a) {
			"use strict";
			var r = a("./node_modules/react/index.js"),
				s = a.n(r),
				n = a("./src/reddit/controls/LoadingIcon/index.tsx"),
				o = a("./src/reddit/icons/svgs/Close/index.tsx"),
				c = a("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.tsx"),
				i = a("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.m.less"),
				d = a.n(i),
				l = a("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				m = a.n(l);
			t.a = function({
				bannerBackgroundImage: e,
				isNSFW: t,
				username: a,
				editMode: r,
				isDeletingBanner: i,
				onDeleteBanner: l
			}) {
				return s.a.createElement("div", {
					className: d.a.bannerWrapper
				}, s.a.createElement(c.a, {
					bannerUrl: e,
					isNSFW: t,
					userName: a
				}), r && e && (i ? s.a.createElement(n.a, {
					sizePx: 20,
					className: m.a.loadingIcon
				}) : s.a.createElement(o.a, {
					className: m.a.closeIcon,
					onClick: l
				})))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx": function(e, t, a) {
			"use strict";
			var r = a("./node_modules/react/index.js"),
				s = a.n(r),
				n = a("./node_modules/fbt/lib/FbtPublic.js"),
				o = a("./src/lib/timeAgo/index.ts"),
				c = a("./src/reddit/controls/InternalLink/index.tsx");

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = function({
				className: e,
				shouldDisplaySnoovatar: t,
				url: a,
				userCreated: r,
				username: d,
				...l
			}) {
				const m = t ? n.fbt._("{username} · {time since account creation}", [n.fbt._param("username", `u/${d}`), n.fbt._param("time since account creation", Object(o.d)(r, {
					noPostfix: !0,
					shortenedUnit: !0
				}))], {
					hk: "2k741A"
				}) : `u/${d}`;
				return a ? s.a.createElement(c.a, i({}, l, {
					className: e,
					to: a
				}), m) : s.a.createElement("span", i({}, l, {
					className: e
				}), m)
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less": function(e, t, a) {
			e.exports = {
				loadingIcon: "_2DTxp6tzlJMeNlZ-cjXWTs",
				closeIcon: "_2ioQgcdZvYlf34S0OEqBuQ",
				settingsIcon: "A4Iifg_NCOrfabq0ON3mW"
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/UserInformation.tsx": function(e, t, a) {
			"use strict";
			var r = a("./src/config.ts"),
				s = a("./node_modules/fbt/lib/FbtPublic.js"),
				n = a("./node_modules/react/index.js"),
				o = a.n(n),
				c = a("./src/reddit/icons/svgs/Admin/index.tsx"),
				i = a("./src/reddit/icons/svgs/Nsfw/index.tsx"),
				d = a("./src/reddit/icons/svgs/PremiumCircle/index.tsx"),
				l = a("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less"),
				m = a.n(l);
			t.a = ({
				title: e,
				username: t,
				isEmployee: a,
				isGold: n,
				isNSFW: l
			}) => o.a.createElement("h1", {
				className: m.a.snoovatarUserTitle
			}, e || t, a && o.a.createElement(c.a, {
				className: m.a.snoovatarAdminIcon,
				title: s.fbt._("Reddit admin", null, {
					hk: "goUUb"
				})
			}), n && o.a.createElement("a", {
				title: s.fbt._("{username} has Reddit Premium", [s.fbt._param("username", t)], {
					hk: "3Fylv"
				}),
				href: `${r.a.redditUrl}/premium`
			}, o.a.createElement(d.a, {
				className: m.a.snoovatarPremiumIcon
			})), l && o.a.createElement(i.a, {
				className: m.a.snoovatarNsfwIcon,
				title: s.fbt._("NSFW - Adult Content", null, {
					hk: "2Iw7mN"
				})
			}))
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less": function(e, t, a) {
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
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx": function(e, t, a) {
			"use strict";
			var r = a("./node_modules/react/index.js"),
				s = a.n(r),
				n = a("./node_modules/react-redux/es/index.js"),
				o = a("./src/lib/classNames/index.ts"),
				c = a("./src/reddit/controls/InternalLink/index.tsx"),
				i = a("./src/reddit/icons/fonts/index.tsx"),
				d = a("./src/reddit/selectors/experiments/econ/index.ts"),
				l = a("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx"),
				m = a("./node_modules/react-router-dom/esm/react-router-dom.js"),
				u = a("./node_modules/react-router/esm/react-router.js"),
				p = a("./src/reddit/controls/Button/index.tsx"),
				b = a("./src/reddit/icons/svgs/Shirt/index.tsx"),
				v = a("./src/reddit/routes/avatar/index.ts"),
				f = a("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				h = a.n(f);
			const {
				fbt: x
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			var E = Object(u.i)(({
					onClick: e,
					username: t,
					location: a
				}) => s.a.createElement(m.a, {
					to: `${v.a}/${t}`
				}, s.a.createElement(p.q, {
					onClick: e,
					className: Object(o.a)(h.a.snoovatarButton, h.a.snoovatarExtraPadding, h.a.compactButtonLayout)
				}, s.a.createElement(b.a, {
					className: h.a.shirtIcon
				}), x._("Try this Look", null, {
					hk: "dOuPb"
				}), s.a.createElement("div", {
					className: h.a.chevronIcon
				})))),
				I = a("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx"),
				_ = a("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx"),
				w = (a("./node_modules/core-js/modules/web.dom.iterable.js"), a("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less")),
				g = a.n(w);
			const C = 25;

			function N(e, t) {
				return Object.keys(t).filter(t => 0 === t.indexOf(e)).map(e => t[e])
			}

			function j(e) {
				return e[Math.floor(Math.random() * e.length)]
			}
			const O = N("particleDelay", g.a),
				y = N("particleX", g.a),
				k = N("particleFloat", g.a),
				U = () => {
					const e = j(y),
						t = j(k),
						a = j(O);
					return Object(o.a)(g.a.particle, e, t, a)
				};
			class P extends s.a.Component {
				shouldComponentUpdate() {
					return !1
				}
				render() {
					const e = [];
					for (let t = 0; t < C; t++) e.push(this.createParticle(t));
					return s.a.createElement("div", {
						role: "presentation",
						className: g.a.particleWrapper
					}, e)
				}
				createParticle(e) {
					return s.a.createElement("div", {
						key: e,
						className: `${U()}`
					})
				}
			}
			var A = P,
				B = a("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				M = a.n(B),
				S = a("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/UserInformation.tsx");
			t.a = ({
				bannerBackgroundImage: e,
				compact: t,
				currentUserHasSnoovatar: a,
				editMode: r,
				isDeletingBanner: m,
				isEmployee: u,
				isGold: p,
				isNSFW: b,
				isOwnProfile: v,
				onClickSnoovatar: f,
				onDeleteBanner: h,
				prefersReducedAnimations: x,
				snoovatarUrl: w,
				title: C,
				userCreated: N,
				username: j,
				url: O
			}) => {
				const y = Object(n.e)(e => !v && !!w && Object(d.e)(e));
				return s.a.createElement(s.a.Fragment, null, s.a.createElement(I.a, {
					bannerBackgroundImage: e,
					editMode: !!r,
					isNSFW: b,
					username: j,
					isDeletingBanner: !!m,
					onDeleteBanner: h
				}), s.a.createElement("div", {
					className: g.a.snoovatarContainer
				}, p && s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
					className: g.a.topGlow
				}), s.a.createElement("div", {
					className: g.a.bottomGlow
				}), !x && s.a.createElement(A, null)), s.a.createElement("img", {
					className: Object(o.a)(g.a.snoovatar, {
						[g.a.premiumGlow]: p
					}),
					src: w || void 0
				})), !r && v && s.a.createElement(c.a, {
					to: "/settings/profile",
					className: g.a.snoovatarSettingsLink
				}, s.a.createElement(i.a, {
					name: "settings",
					className: M.a.settingsIcon
				})), s.a.createElement(S.a, {
					isEmployee: u,
					isGold: p,
					isNSFW: b,
					title: C,
					username: j
				}), s.a.createElement(_.a, {
					className: g.a.snoovatarUserName,
					shouldDisplaySnoovatar: !0,
					username: j,
					userCreated: N,
					url: O
				}), (v || !a && !!w) && s.a.createElement(l.a, {
					compact: t,
					currentUserHasSnoovatar: a,
					isOwnProfile: v,
					onClick: f
				}), y && s.a.createElement(E, {
					username: j
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/index.m.less": function(e, t, a) {
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
		"./src/reddit/components/SubscribeButton/Base.m.less": function(e, t, a) {
			e.exports = {
				BaseButton: "_1LHxa-yaHJwrPK8kuyv_Y4",
				baseButton: "_1LHxa-yaHJwrPK8kuyv_Y4",
				UnsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				unsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				UnsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW",
				unsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW"
			}
		},
		"./src/reddit/components/SubscribeButton/Base.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return v
			}));
			var r = a("./node_modules/fbt/lib/FbtPublic.js"),
				s = a("./node_modules/react/index.js"),
				n = a.n(s),
				o = a("./src/reddit/controls/Button/index.tsx"),
				c = a("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				i = a("./src/reddit/components/SubscribeButton/Base.m.less"),
				d = a.n(i),
				l = a("./src/lib/classNames/index.ts");

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r])
					}
					return e
				}).apply(this, arguments)
			}
			const u = ({
					border: e,
					small: t,
					...a
				}) => n.a.createElement(o.q, m({}, a, {
					priority: e ? o.b.Primary : o.b.Plain,
					className: Object(l.a)(a.className, d.a.BaseButton),
					size: t ? o.c.S : o.c.M
				})),
				p = e => n.a.createElement(n.a.Fragment, null, n.a.createElement("span", {
					className: d.a.UnsubscribeButtonDefault
				}, "subreddit" === e ? r.fbt._("Joined", null, {
					hk: "1MTmIz"
				}) : r.fbt._("Following", null, {
					hk: "1wQlVR"
				})), n.a.createElement("span", {
					className: d.a.UnsubscribeButtonHover
				}, "subreddit" === e ? r.fbt._("Leave", null, {
					hk: "2lLnnn"
				}) : r.fbt._("Unfollow", null, {
					hk: "2b5ERD"
				}))),
				b = ({
					buttonType: e,
					border: t,
					small: a,
					...r
				}) => n.a.createElement(o.q, m({}, r, {
					priority: t ? o.b.Secondary : o.b.Plain,
					className: Object(l.a)(r.className, d.a.BaseButton),
					size: a ? o.c.S : o.c.M,
					text: p(e)
				}));
			class v extends n.a.Component {
				constructor() {
					super(...arguments), this.onClick = e => {
						if (this.props.userIsSubscriber ? (this.props.onUnsubscribe(), this.props.afterUnsubscribeAction && this.props.afterUnsubscribeAction()) : (this.props.onSubscribe(), this.props.enableNotificationTooltipAfterSubscription && this.props.enableNotificationTooltipAfterSubscription()), this.props.onClick && this.props.onClick(e), this.props.getEventFactory) {
							const e = this.props.getEventFactory(this.props.userIsSubscriber);
							e && this.props.sendEvent(e)
						}
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const {
						border: e = !0,
						className: t,
						id: a,
						small: r = !1,
						isFullWidth: s = !1
					} = this.props, o = {
						border: e,
						className: t,
						onClick: this.onClick,
						small: r,
						isFullWidth: s
					};
					return this.props.userIsSubscriber ? n.a.createElement(b, m({}, o, {
						buttonType: this.props.identifier.type
					})) : n.a.createElement(u, m({}, o, {
						id: a
					}), this.props.children, Object(c.a)({
						type: this.props.identifier.type,
						key: "subscribe"
					}))
				}
			}
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return o
			}));
			var r = a("./node_modules/fbt/lib/FbtPublic.js");
			const s = ({
					type: e
				}) => "subreddit" === e ? "subredditActions" : "profileActions",
				n = {
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
				o = ({
					type: e,
					key: t
				}) => n[s({
					type: e
				})][t]()
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, a) {
			"use strict";
			var r = a("./src/reddit/components/TrackingHelper/index.tsx"),
				s = a("./src/reddit/connectors/SubscribeButton/index.ts"),
				n = a("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(s.a)(Object(r.c)(n.a))
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, a) {
			"use strict";
			var r = a("./node_modules/react-redux/es/index.js"),
				s = a("./node_modules/reselect/es/index.js"),
				n = a("./src/reddit/actions/subscription/index.ts"),
				o = a("./src/reddit/selectors/subreddit.ts");
			t.a = Object(r.b)(() => Object(s.c)({
				userIsSubscriber: o.hb
			}), (e, {
				identifier: t
			}) => ({
				onSubscribe: () => e(n.d([t], !0)),
				onSubscriptionsRequested: () => e(n.e()),
				onUnsubscribe: () => e(n.d([t], !1))
			}))
		},
		"./src/reddit/controls/ImageInput/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return n
			}));
			var r = a("./node_modules/react/index.js"),
				s = a.n(r);
			class n extends s.a.Component {
				constructor(e) {
					super(e), this.onFileInput = e => {
						const t = e.currentTarget.files,
							a = this.props.multiple ? [...t] : t[0];
						this.props.onChange(a), this.setState(() => ({
							value: a
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
					} = this, a = "string" == typeof t.value ? t.value : "", r = "object" == typeof t.value ? t.value : null, n = a || r;
					return s.a.createElement("div", {
						className: e.className
					}, a && s.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						readOnly: !0,
						type: "text",
						value: a,
						tabIndex: e.tabIndex
					}), (!n || e.multiple) && s.a.createElement("input", {
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
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, a) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, a) {
			"use strict";
			var r = a("./node_modules/react/index.js"),
				s = a.n(r),
				n = a("./src/lib/classNames/index.ts"),
				o = a("./src/reddit/controls/LoadingIcon/index.m.less"),
				c = a.n(o);
			t.a = ({
				center: e,
				className: t,
				sizePx: a = 10
			}) => s.a.createElement("div", {
				className: Object(n.a)(c.a.loadingIcon, t, {
					[c.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${a}px`
				}
			})
		},
		"./src/reddit/icons/fonts/Info/index.tsx": function(e, t, a) {
			"use strict";
			var r = a("./node_modules/react/index.js"),
				s = a.n(r),
				n = a("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => s.a.createElement("i", {
				className: `${Object(n.b)("info",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/commonStyles.m.less": function(e, t, a) {},
		"./src/reddit/icons/svgs/Admin/index.m.less": function(e, t, a) {
			e.exports = {
				admin: "_1PeZajQI0Wm8P3B45yshR",
				mEnabled: "_3axV0unm-cpsxoKWYwKh2x"
			}
		},
		"./src/reddit/icons/svgs/Admin/index.tsx": function(e, t, a) {
			"use strict";
			var r = a("./node_modules/react/index.js"),
				s = a.n(r),
				n = a("./src/lib/classNames/index.ts"),
				o = a("./src/reddit/icons/svgs/Admin/index.m.less"),
				c = a.n(o);
			t.a = e => s.a.createElement("svg", {
				className: Object(n.a)(e.className, c.a.admin, {
					[c.a.mEnabled]: e.enabled
				}),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 -0.75 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.title && s.a.createElement("title", null, e.title), e.desc && s.a.createElement("desc", null, e.desc), s.a.createElement("g", null, s.a.createElement("path", {
				fill: "inherit",
				d: "M19.99,9.3125 C19.99,8.104375 19.010625,7.125 17.8025,7.125 C17.213125,7.125 16.67875,7.359375 16.285625,7.73875 C14.8075,6.6725 12.776875,5.98 10.514375,5.886875 L11.491875,1.2875 L14.695625,1.96875 C14.775,2.756875 15.433125,3.375 16.2425,3.375 C17.105625,3.375 17.805,2.675625 17.805,1.8125 C17.805,0.949375 17.105625,0.25 16.2425,0.25 C15.6575,0.25 15.154375,0.575 14.88625,1.050625 L11.228125,0.273125 C11.10625,0.24625 10.98,0.270625 10.875625,0.338125 C10.77125,0.40625 10.698125,0.5125 10.6725,0.63375 L9.556875,5.8825 C7.26,5.960625 5.1975,6.65625 3.7,7.735 C3.306875,7.358125 2.775,7.125 2.1875,7.125 C0.979375,7.125 0,8.104375 0,9.3125 C0,10.20125 0.530625,10.965 1.2925,11.306875 C1.25875,11.524375 1.24,11.745 1.24,11.96875 C1.24,15.334375 5.1575,18.0625 9.99,18.0625 C14.8225,18.0625 18.74,15.334375 18.74,11.96875 C18.74,11.746875 18.721875,11.5275 18.68875,11.31125 C19.455,10.97125 19.99,10.205 19.99,9.3125"
			})), s.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, s.a.createElement("polygon", {
				points: "0 20 20 20 20 0 0 0"
			}), s.a.createElement("g", {
				transform: "translate(0 1)"
			})))
		},
		"./src/reddit/icons/svgs/CoinV2/index.m.less": function(e, t, a) {
			e.exports = {
				shadow: "_1FZLzx9zXc2B6sAENx2Fl2",
				standardColor: "_1nJ18ao-riTqosaH0xAHuA"
			}
		},
		"./src/reddit/icons/svgs/CoinV2/index.tsx": function(e, t, a) {
			"use strict";
			var r = a("./node_modules/react/index.js"),
				s = a.n(r),
				n = a("./src/lib/classNames/index.ts"),
				o = a("./src/reddit/icons/svgs/CoinV2/index.m.less"),
				c = a.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				className: Object(n.a)(c.a.shadow, e.shadowClassName),
				d: "M11.1 1.889H8.722v16.219h2.212a5.86 5.86 0 001.951-.274c3.658-1.158 5.837-5.614 4.856-9.933C16.92 4.28 14.134 1.886 11.1 1.89z"
			}), s.a.createElement("path", {
				d: "M11.1 1.889H8.722v16.219h2.212a5.86 5.86 0 001.951-.274c3.658-1.158 5.837-5.614 4.856-9.933C16.92 4.28 14.134 1.886 11.1 1.89z",
				fill: "url(#shine)",
				fillOpacity: ".3"
			}), s.a.createElement("path", {
				className: Object(n.a)(c.a.standardColor, e.standardColorClassName),
				d: "M6.991 2.166C3.334 3.324 1.155 7.78 2.135 12.1c.98 4.32 4.754 6.891 8.411 5.734 3.658-1.157 5.837-5.613 4.857-9.932-.98-4.32-4.754-6.892-8.412-5.735z"
			}), s.a.createElement("path", {
				className: Object(n.a)(c.a.shadow, e.shadowClassName),
				d: "M7.54 12.335c1.122.765 2.664.277 3.311-1.047.224-.457.718-.613 1.104-.35.387.264.52.847.296 1.304-.54 1.103-1.41 1.892-2.453 2.222-1.043.33-2.13.16-3.065-.476-1.929-1.316-2.592-4.24-1.479-6.517.54-1.104 1.41-1.893 2.453-2.223 1.042-.33 2.13-.16 3.065.477.387.263.52.847.296 1.303-.223.456-.717.612-1.104.35-1.121-.765-2.663-.277-3.31 1.047-.669 1.367-.271 3.121.887 3.91z"
			}), s.a.createElement("defs", null, s.a.createElement("linearGradient", {
				id: "shine",
				x1: "11.107",
				y1: "1.889",
				x2: "11.107",
				y2: "18.111",
				gradientUnits: "userSpaceOnUse"
			}, s.a.createElement("stop", {
				offset: ".063",
				stopColor: "#fff",
				stopOpacity: "0"
			}), s.a.createElement("stop", {
				offset: ".302",
				stopColor: "#fff"
			}), s.a.createElement("stop", {
				offset: "0.432",
				stopColor: "#fff"
			}), s.a.createElement("stop", {
				offset: "0.474",
				stopColor: "#fff",
				stopOpacity: "0"
			}))))
		},
		"./src/reddit/icons/svgs/Crosspost/index.tsx": function(e, t, a) {
			"use strict";
			var r = a("./node_modules/react/index.js"),
				s = a.n(r);

			function n() {
				return (n = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", n({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), s.a.createElement("path", {
				d: "M9.06,8.64c1.12-1.26,2.2-2.45,4.44-2.6V7.5a1,1,0,0,0,.6.92,1,1,0,0,0,.41.09,1,1,0,0,0,.67-.26l3.16-2.9a.5.5,0,0,0,0-.74L15.18,1.7a1,1,0,0,0-1.68.74V4c-3.14.17-4.69,1.88-5.93,3.28C6.58,8.42,6,9,5,9H2a1,1,0,0,0,0,2H5C6.93,11,8,9.82,9.06,8.64Z"
			}), s.a.createElement("path", {
				d: "M15.18,11.76a1,1,0,0,0-1.68.74V14c-2.23-.16-3.29-1.32-4.39-2.56-.21-.24-.43-.48-.66-.72a5.63,5.63,0,0,1-1.77,1.06,13.34,13.34,0,0,1,.94,1A7.85,7.85,0,0,0,13.5,16v1.59a1,1,0,0,0,.6.92,1,1,0,0,0,.41.09,1,1,0,0,0,.67-.26l3.16-2.9a.5.5,0,0,0,0-.74Z"
			}))
		},
		"./src/reddit/icons/svgs/Nsfw/index.tsx": function(e, t, a) {
			"use strict";
			var r = a("./node_modules/react/index.js"),
				s = a.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 40 40",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.title && s.a.createElement("title", null, e.title), s.a.createElement("g", null, s.a.createElement("path", {
				fill: "inherit",
				d: "M38.5,16.5l-15-15c-2-2-5.1-2-7.1,0l-15,15c-2,2-2,5.1,0,7.1l15,15c2,2,5.1,2,7.1,0l15-15 C40.5,21.6,40.5,18.4,38.5,16.5z M17.7,8.3C17.7,7,18.7,6,20,6s2.3,1,2.3,2.3v14.3c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3V8.3z M20,33.7c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1s3.1,1.4,3.1,3.1C23.1,32.4,21.7,33.7,20,33.7z"
			})))
		},
		"./src/reddit/icons/svgs/Premium/index.tsx": function(e, t, a) {
			"use strict";
			var r = a("./node_modules/react/index.js"),
				s = a.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M13.535 15.785c-1.678.244-2.883.742-3.535 1.071v-5.113a2 2 0 0 0-2-2H4.217c.044-.487.076-1.016.076-1.629 0-1.692-.489-2.968-.884-3.722L4.8 3.001H10v4.742a2 2 0 0 0 2 2h3.783c.06.67.144 1.248.22 1.742.097.632.182 1.177.182 1.745 0 1.045-.829 2.291-2.65 2.555m5.028-12.249l-2.242-2.242a1 1 0 0 0-.707-.293H4.386a1 1 0 0 0-.707.293L1.436 3.536a1 1 0 0 0-.069 1.337c.009.011.926 1.2.926 3.241 0 1.304-.145 2.24-.273 3.065-.106.684-.206 1.33-.206 2.051 0 1.939 1.499 4.119 4.364 4.534 2.086.304 3.254 1.062 3.261 1.065a1.016 1.016 0 0 0 1.117.004c.011-.007 1.18-.765 3.266-1.069 2.864-.415 4.363-2.595 4.363-4.534 0-.721-.099-1.367-.206-2.051-.128-.825-.272-1.761-.272-3.065 0-2.033.893-3.199.926-3.241a.999.999 0 0 0-.07-1.337"
			}))
		},
		"./src/reddit/icons/svgs/PremiumCircle/index.tsx": function(e, t, a) {
			"use strict";
			var r = a("./node_modules/react/index.js"),
				s = a.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("rect", {
				width: "20",
				height: "20",
				rx: "10",
				fill: "url(#gradient)"
			}), s.a.createElement("path", {
				d: "M12.121 13.471c-1.007.146-1.73.445-2.121.643v-3.068a1.2 1.2 0 00-1.2-1.2H6.53c.027-.292.046-.61.046-.978 0-1.015-.294-1.78-.53-2.233l.834-.834H10v2.845a1.2 1.2 0 001.2 1.2h2.27c.036.402.086.749.132 1.045.058.38.109.706.109 1.047 0 .627-.497 1.375-1.59 1.533zm3.017-7.35l-1.345-1.345a.6.6 0 00-.425-.175H6.632a.6.6 0 00-.425.175L4.862 6.122a.6.6 0 00-.042.802c.006.006.556.72.556 1.944 0 .783-.087 1.344-.164 1.84-.064.41-.124.797-.124 1.23 0 1.163.9 2.471 2.619 2.72 1.251.183 1.952.638 1.956.64a.61.61 0 00.67.002c.007-.004.709-.46 1.96-.642 1.719-.249 2.618-1.557 2.618-2.72 0-.433-.06-.82-.124-1.23a11.026 11.026 0 01-.163-1.84c0-1.22.536-1.919.556-1.944a.6.6 0 00-.042-.802z",
				fill: "#fff"
			}), s.a.createElement("defs", null, s.a.createElement("linearGradient", {
				id: "gradient",
				x1: "0",
				y1: "20",
				x2: "20.021",
				y2: "19.979",
				gradientUnits: "userSpaceOnUse"
			}, s.a.createElement("stop", {
				stopColor: "#EC0623"
			}), s.a.createElement("stop", {
				offset: "1",
				stopColor: "#FF8717"
			}))))
		},
		"./src/reddit/icons/svgs/Shirt/index.tsx": function(e, t, a) {
			"use strict";
			var r = a("./node_modules/react/index.js"),
				s = a.n(r);
			t.a = function({
				className: e
			}) {
				return s.a.createElement("svg", {
					className: e,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, s.a.createElement("g", {
					fill: "inherit"
				}, s.a.createElement("path", {
					d: "M7 1.75a.486.486 0 01.487.4 2.574 2.574 0 005.085 0 .488.488 0 01.488-.4h1.583A.5.5 0 0115 1.9l3.951 4.09a.5.5 0 01-.006.7l-1.931 1.938a.5.5 0 01-.649.05l-1.482-1.084.007 10.156a.5.5 0 01-.5.5H5.385a.5.5 0 01-.5-.5l.007-10.156L3.7 8.626a.5.5 0 01-.677-.026L1.115 6.694a.5.5 0 01-.006-.7L5.06 1.9a.5.5 0 01.359-.153z"
				})))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconTopAwardersModal.9ae832e3c1cbe91fb829.js.map