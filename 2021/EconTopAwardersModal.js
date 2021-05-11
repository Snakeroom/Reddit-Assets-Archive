// https://www.redditstatic.com/desktop2x/EconTopAwardersModal.c78a5ef297fe2efcc789.js
// Retrieved at 5/11/2021, 6:40:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EconTopAwardersModal"], {
		"./src/reddit/actions/subredditModeration/ban.ts": function(e, t, a) {
			"use strict";
			a.d(t, "c", (function() {
				return V
			})), a.d(t, "d", (function() {
				return ae
			})), a.d(t, "b", (function() {
				return se
			})), a.d(t, "e", (function() {
				return oe
			})), a.d(t, "a", (function() {
				return ce
			}));
			a("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = a("./node_modules/fbt/lib/FbtPublic.js"),
				n = a("./node_modules/lodash/get.js"),
				s = a.n(n),
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
				f = a("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const x = (e, t, a) => Object(p.a)(Object(b.a)(e, [v.a]), {
				endpoint: Object(f.a)(`${e.apiUrl}/api/v1/${t}/banned`),
				method: u.eb.GET,
				data: a
			});
			var h = a("./src/reddit/helpers/normalizeUsername/index.tsx"),
				C = a("./src/reddit/models/SubredditModeration/index.ts"),
				I = a("./src/reddit/models/Toast/index.ts"),
				g = a("./src/reddit/selectors/activeModalId.ts"),
				E = a("./src/reddit/selectors/bannedUser.ts"),
				_ = a("./src/reddit/selectors/subreddit.ts"),
				w = a("./src/reddit/selectors/user.ts"),
				N = a("./src/reddit/actions/subredditModeration/constants.ts"),
				j = a("./src/lib/initializeClient/installReducer.ts"),
				O = a("./node_modules/redux/es/redux.js");
			var y = (e = null, t) => {
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
			const L = {};
			var k = (e = L, t) => {
					switch (t.type) {
						case N.o: {
							const {
								subredditId: a,
								fetchedToken: r
							} = t.payload, n = Object(C.d)(a, r);
							return {
								...e,
								[n]: !0
							}
						}
						case N.n:
						case N.m: {
							const {
								subredditId: a,
								fetchedToken: r
							} = t.payload, n = Object(C.d)(a, r);
							return {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				M = Object(O.c)({
					error: y,
					pending: k
				});
			const U = {};
			var A = (e = U, t) => {
					switch (t.type) {
						case N.n: {
							const {
								fetchedToken: a,
								subredditId: r
							} = t.payload, n = Object(C.d)(r, a);
							return {
								...e,
								[n]: !0
							}
						}
						default:
							return e
					}
				},
				P = a("./src/reddit/actions/inContextModeration.ts");
			var B = (e = null, t) => {
				switch (t.type) {
					case P.a:
						return t.payload;
					default:
						return e
				}
			};
			const S = {};
			var T = (e = S, t) => {
					switch (t.type) {
						case N.n: {
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
				H = a("./node_modules/icepick/icepick.js");
			const F = {};
			var K = (e = F, t) => {
				switch (t.type) {
					case N.l:
					case N.n: {
						const {
							subredditId: a,
							bannedUsers: r
						} = t.payload;
						return Object(H.merge)(e, {
							[a]: r
						})
					}
					case N.s: {
						const {
							subredditId: a,
							userId: r
						} = t.payload;
						return Object(H.unsetIn)(e, [a, r])
					}
					default:
						return e
				}
			};
			var R = (e = null, t) => {
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
			var D = (e = !1, t) => {
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
				W = Object(O.c)({
					error: R,
					pending: D
				});
			var Z = (e = null, t) => {
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
				z = Object(O.c)({
					api: W,
					result: Z
				});
			const q = {};
			var G = (e = q, t) => {
					switch (t.type) {
						case N.n: {
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
						case N.s: {
							const {
								subredditId: a,
								userId: r
							} = t.payload;
							return {
								[a]: e[a].filter(e => e !== r)
							}
						}
						case N.l: {
							const {
								subredditId: a,
								bannedUserIds: r
							} = t.payload, n = r[0];
							return n && e[a] && -1 === e[a].indexOf(n) ? {
								[a]: [n, ...e[a]]
							} : e
						}
						default:
							return e
					}
				},
				Y = Object(O.c)({
					api: M,
					fetchedTokens: A,
					inContext: B,
					loadMore: T,
					models: K,
					search: z,
					userOrder: G
				});
			Object(j.a)({
				features: {
					banned: Y
				}
			});
			const J = Object(o.a)(N.o),
				X = Object(o.a)(N.n),
				Q = Object(o.a)(N.m),
				V = (e, t = {}) => async (a, r, {
					apiContext: n
				}) => {
					const s = r(),
						o = t.after || "",
						c = Object(C.d)(e, o),
						i = s.features.banned.fetchedTokens[c];
					if (s.features.banned.api.pending[c] || i) return;
					a(J({
						subredditId: e,
						fetchedToken: o
					}));
					const d = s.subreddits.models[e].name,
						l = await x(n(), d, t);
					l.ok ? a(X({
						...l.body,
						fetchedToken: o
					})) : a(Q({
						subredditId: e,
						fetchedToken: o
					}))
				}, $ = Object(o.a)(N.r), ee = Object(o.a)(N.q), te = Object(o.a)(N.p), ae = (e, t) => async (a, r, {
					apiContext: n
				}) => {
					const s = r().subreddits.models[e].name,
						o = {
							username: Object(h.a)(t)
						};
					a($());
					const c = await x(n(), s, o);
					c.ok ? a(ee(c.body)) : a(te(c.error))
				}, re = Object(o.a)(N.l), ne = Object(o.a)(N.s), se = (e, t, a) => async (n, o, {
					apiContext: i
				}) => {
					const d = o(),
						m = d.subreddits.models[e].url,
						f = d.subreddits.models[e].name;
					t.username = Object(h.a)(t.username), n(Object(c.h)(a));
					const C = await ((e, t, a) => Object(p.a)(Object(b.a)(e, [v.a]), {
						endpoint: `${e.apiUrl}${t}api/friend`,
						method: u.eb.POST,
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
					if (C.ok) {
						n(Object(c.e)(a));
						const e = {
							username: t.username
						};
						n(Object(l.f)({
							kind: I.b.SuccessMod,
							text: r.fbt._("Successfully banned a user", null, {
								hk: "1kORpS"
							})
						}));
						const s = await x(i(), f, e);
						s.ok && n(re(s.body))
					} else {
						n(Object(c.f)(a, C.error));
						const e = s()(C, "body.json.errors[0][1]", r.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						n(Object(l.f)({
							kind: I.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, oe = (e, t) => async (a, n, {
					apiContext: o
				}) => {
					const c = n().subreddits.models[e].url,
						i = await ((e, t, a) => Object(p.a)(Object(b.a)(e, [v.a]), {
							endpoint: `${e.apiUrl}${t}api/unfriend`,
							method: u.eb.POST,
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
						kind: I.b.SuccessMod,
						text: r.fbt._("Successfully unbanned a user", null, {
							hk: "OgqK6"
						})
					}));
					else {
						const e = s()(i, "body.json.errors[0][1]", r.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						a(Object(l.f)({
							kind: I.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, ce = (e, t) => async (a, r) => {
					const n = r();
					await Promise.all([(async () => {
						if (!Object(g.b)(m.a.BAN_USER)(n) && !Object(_.Q)(n, {
								subredditId: e
							})) {
							const t = Object(_.T)(n, {
								subredditId: e
							});
							await a(Object(d.o)(t.name))
						}
					})(), (async () => {
						const r = Object(w.mb)(n, {
							userName: t
						});
						if (!r) return;
						const s = Object(E.h)(n, {
							subredditId: e
						});
						s && s[r.id] || await a(V(e, {
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
			var r, n = a("./node_modules/react/index.js"),
				s = a.n(n),
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
				sendEvent: n,
				contextId: o,
				priority: c,
				Icon: i,
				redditStyle: m,
				isFullWidth: u,
				eventSource: p,
				onClick: b,
				onAddUserToQuickReplyList: v
			}) => {
				return s.a.createElement(d.q, {
					onClick: t => {
						if (b && b(t), e(), p === r.awardNotification) return v();
						n(Object(l.b)(o))
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
				n = a("./node_modules/react/index.js"),
				s = a.n(n),
				o = a("./src/higherOrderComponents/asModal/index.tsx"),
				c = a("./src/reddit/components/ModalStyledComponents/index.tsx"),
				i = a("./src/reddit/controls/TextButton/index.tsx"),
				d = a("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				l = a("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				m = a.n(l);
			const u = e => e.preventDefault();
			t.a = Object(o.a)(e => s.a.createElement(c.d, null, s.a.createElement(c.h, null, s.a.createElement(d.a, null, s.a.createElement(c.p, null, e.headerText || r.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), s.a.createElement(i.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, s.a.createElement(c.b, null)))), s.a.createElement(c.k, null, s.a.createElement(c.o, {
				className: m.a.ModalText
			}, e.modalText)), s.a.createElement(c.f, null, !e.hideCancelButton && s.a.createElement(c.a, {
				className: m.a.buttonWidth,
				onMouseDown: u,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || r.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), s.a.createElement(c.t, {
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
				n = a.n(r),
				s = a("./node_modules/react-redux/es/index.js"),
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
				x = a("./src/reddit/selectors/gold/topAwarded.ts"),
				h = a("./src/reddit/selectors/posts.ts"),
				C = a("./src/reddit/selectors/user.ts"),
				I = a("./src/reddit/actions/gold/topAwarded.ts"),
				g = a("./src/reddit/actions/modal.ts"),
				E = a("./src/reddit/components/AwardBadges/index.tsx"),
				_ = a("./src/reddit/components/PostTopMeta/index.tsx"),
				w = a("./src/reddit/controls/Button/index.tsx"),
				N = a("./src/reddit/controls/LoadingIcon/index.tsx"),
				j = a("./src/reddit/icons/fonts/Gift/index.tsx"),
				O = a("./src/reddit/icons/svgs/Close/index.tsx"),
				y = a("./src/reddit/icons/svgs/TopAwarded/index.tsx");
			var L = e => n.a.createElement("svg", {
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
				k = a("./node_modules/lodash/noop.js"),
				M = a.n(k),
				U = a("./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx"),
				A = a("./src/reddit/components/UserIcon/index.tsx"),
				P = a("./src/reddit/components/Econ/TopAwardersModal/TopAwardersList/Awarder/index.m.less"),
				B = a.n(P);
			const {
				fbt: S
			} = a("./node_modules/fbt/lib/FbtPublic.js"), T = (e, t) => t ? S._("{userName} (you)", [S._param("userName", e)], {
				hk: "vsIHp"
			}) : e;
			var H = function(e) {
					const {
						awarder: t,
						className: a,
						currentUserId: r,
						onCtaClick: s,
						showCta: o
					} = e, {
						rank: c,
						redditor: d,
						score: l
					} = t, m = !d.profile;
					return n.a.createElement("div", {
						className: Object(i.a)(B.a.container, a)
					}, n.a.createElement("div", {
						className: B.a.rank
					}, c || "-"), n.a.createElement(A.a, {
						className: B.a.icon,
						iconUrl: d.icon ? d.icon.url : void 0,
						isNSFW: !!d.profile && d.profile.isNsfw,
						userName: d.name
					}), n.a.createElement("div", {
						className: B.a.text
					}, n.a.createElement("h3", {
						className: B.a.name
					}, m ? d.name : n.a.createElement(U.a, {
						user: d.name,
						tooltipId: `topawarder--userhovercard--${d.name}`,
						sendHoverCardEvent: M.a
					}, T(d.name, d.id === r))), l > 0 && n.a.createElement("span", {
						className: B.a.score
					}, S._("{score} Coins", [S._param("score", l.toLocaleString())], {
						hk: "xCBGE"
					}))), o && n.a.createElement("button", {
						className: B.a.cta,
						onClick: s
					}, n.a.createElement(j.a, {
						className: B.a.giftIcon
					}), S._("Award", null, {
						hk: "4BW9Zq"
					})))
				},
				F = a("./src/reddit/components/Econ/TopAwardersModal/TopAwardersList/index.m.less"),
				K = a.n(F);
			const R = 8;
			var D = function(e) {
					const {
						awarders: t,
						className: a,
						currentRank: r,
						currentUserId: s,
						hideAddAwardButton: o,
						onGild: c
					} = e;
					return t.length ? n.a.createElement("div", {
						className: Object(i.a)(a, K.a.container)
					}, r && (!r.rank || r.rank > R) && n.a.createElement(H, {
						className: K.a.awarder,
						currentUserId: s,
						awarder: r,
						key: r.redditor.id,
						showCta: !o,
						onCtaClick: c
					}), t.map(e => n.a.createElement(H, {
						className: K.a.awarder,
						currentUserId: s,
						awarder: e,
						key: e.redditor.id,
						showCta: !o && s === e.redditor.id,
						onCtaClick: c
					}))) : null
				},
				W = a("./src/reddit/icons/svgs/CoinV2/index.tsx"),
				Z = a("./src/reddit/components/Econ/TopAwardersModal/Winners/Winner/index.m.less"),
				z = a.n(Z);
			var q = function(e) {
					const {
						showScore: t,
						awarder: a,
						className: r,
						rank: s
					} = e, o = a && !a.redditor.profile, c = a ? a.redditor.name : "—";
					return n.a.createElement("div", {
						className: Object(i.a)(r, z.a.winner, z.a[`winner${s}`], {
							[z.a.winnerPlaceholder]: !a
						})
					}, n.a.createElement("div", {
						className: z.a.iconContainer
					}, n.a.createElement("div", {
						className: z.a.iconWithBorder
					}, a && n.a.createElement(A.a, {
						className: z.a.icon,
						iconUrl: a.redditor.icon ? a.redditor.icon.url : void 0,
						isNSFW: !!a.redditor.profile && a.redditor.profile.isNsfw,
						userName: c
					})), n.a.createElement("div", {
						className: z.a.rank
					}, s)), n.a.createElement("h3", {
						className: z.a.name
					}, a && !o ? n.a.createElement(U.a, {
						user: c,
						tooltipId: `topawarderwinner-userhovercard--${c}`,
						sendHoverCardEvent: M.a,
						wrapperClassName: z.a.hoverCardWrapper
					}, c) : c), a && t && n.a.createElement("div", {
						className: z.a.score
					}, n.a.createElement(W.a, {
						className: z.a.coinIcon
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
					const s = [t[0], t[1] || void 0, t[2] || void 0];
					return n.a.createElement("div", {
						className: Object(i.a)(a, Y.a.container, {
							[Y.a.flexContainer]: s.length < 3
						})
					}, s.map((e, t) => n.a.createElement(q, {
						showScore: r,
						className: Y.a.winner,
						awarder: e,
						rank: t + 1,
						key: t
					})))
				},
				X = a("./src/reddit/components/Econ/TopAwardersModal/index.m.less"),
				Q = a.n(X);

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
			} = a("./node_modules/fbt/lib/FbtPublic.js"), ee = 7, te = Object(o.a)(e => e, x.a, x.c, x.e, C.i, (e, t, a, r, n) => {
				if (!t) return {
					anonymousRank: void 0,
					currentPostId: t,
					currentRank: void 0,
					currentUser: n,
					error: a,
					list: void 0,
					pending: r,
					post: null
				};
				const s = Object(h.F)(e, {
						postId: t
					}),
					o = Object(x.b)(e, t),
					c = Object(x.d)(e, t),
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
					currentUser: n,
					error: a,
					list: i,
					pending: r,
					post: s
				}
			}), ae = Object(s.b)(te);
			const re = Object(c.a)(ae(Object(b.b)((function(e) {
				const {
					anonymousRank: t,
					currentPostId: a,
					currentRank: o,
					currentUser: c,
					post: i,
					list: b,
					pending: x
				} = e, h = Object(s.d)(), C = Object(u.a)();
				Object(r.useEffect)(() => {
					a && h(Object(I.a)(a))
				}, [a, h]), Object(r.useEffect)(() => {
					a && C(Object(m.c)(a))
				}, [a, C]);
				const k = () => h(Object(g.g)(d.a.ECON_TOP_AWARDERS)),
					M = () => {
						if (a) {
							const e = Object(l.d)(l.a.GildingFlow, !0);
							C(Object(m.b)()), h(Object(p.d)({
								thingId: a,
								correlationId: e
							}))
						}
					};
				if (!a || !i) return k(), null;
				const U = c && c.id === i.authorId,
					A = !i.isGildable || !!U,
					P = i.topAwardedType === f.a.Active,
					B = i.topAwardedType === f.a.Inactive,
					S = !x && !!b && !!b.length,
					T = !x && b && !b.length && i && P;
				return n.a.createElement("div", {
					className: Q.a.inner
				}, n.a.createElement("div", {
					className: Q.a.modalHeader
				}, n.a.createElement(O.a, {
					className: Q.a.closeIcon,
					onClick: k
				}), n.a.createElement("h3", {
					className: Q.a.title
				}, $._("Top Awarders", null, {
					hk: "3hzpI8"
				}))), n.a.createElement("div", {
					className: Q.a.modalContent
				}, n.a.createElement("div", {
					className: Q.a.awardBadgesContainer
				}, n.a.createElement(v.a, {
					postId: i.id
				}, n.a.createElement(E.a, {
					awardsCountInView: ee,
					awardsPlaqueStyle: !0,
					hideCta: !0,
					hideTopAwardedBadge: !0,
					tooltipType: _.c.TopAwardedModal,
					thing: i
				}))), x && n.a.createElement(N.a, {
					className: Q.a.loader,
					sizePx: 60
				}), S && B && o && 1 === o.rank && n.a.createElement("div", {
					className: Q.a.youWon
				}, $._("You won 1st place!", null, {
					hk: "1MxirM"
				}), n.a.createElement(L, {
					className: Q.a.youWonIcon
				})), S && n.a.createElement(J, {
					className: Q.a.winners,
					awarders: b,
					showScores: B
				}), S && B && (!o || o && 1 !== o.rank) && n.a.createElement("div", {
					className: Q.a.info
				}, n.a.createElement("h3", {
					className: Q.a.infoTitle
				}, $._("Top Awarded Post", null, {
					hk: "1BJ1We"
				})), n.a.createElement("span", {
					className: Q.a.infoDesc
				}, $._("This is a historic Top Awarded post. Give Awards to newer posts to add your name to the list!", null, {
					hk: "2U5vPa"
				})), n.a.createElement(y.a, {
					className: Q.a.topAwardedIcon
				})), T && n.a.createElement("div", {
					className: Q.a.info
				}, n.a.createElement(y.a, {
					className: Q.a.topAwardedIcon
				}), n.a.createElement("h3", {
					className: Q.a.infoTitle
				}, $._("Get on the board", null, {
					hk: "RVDeW"
				})), n.a.createElement("span", {
					className: Q.a.infoDesc
				}, $._("Award publicly and your username will show up on this leaderboard!", null, {
					hk: "3reZYa"
				})), n.a.createElement(w.i, {
					className: Q.a.cta,
					onClick: M
				}, n.a.createElement(j.a, {
					className: Q.a.giftIcon
				}), $._("Give Award", null, {
					hk: "2sa45i"
				}))), S && i && P && n.a.createElement(D, {
					awarders: b,
					className: Q.a.list,
					currentRank: o,
					currentUserId: c && c.id,
					hideAddAwardButton: A,
					onGild: M
				}), !x && P && t && n.a.createElement("div", {
					className: Q.a.anonymousRank
				}, $._("Anonymous redditors have awarded for {score} Coins", [$._param("score", t.score.toLocaleString())], {
					hk: "11BYuy"
				}))), n.a.createElement("div", {
					className: Q.a.modalFooter
				}))
			}))));
			t.default = e => n.a.createElement(re, V({}, e, {
				className: Object(i.a)(e.className, Q.a.modal)
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
				n = a.n(r),
				s = a("./src/lib/classNames/index.ts"),
				o = a("./src/reddit/controls/ImageInput/index.tsx"),
				c = a("./src/reddit/controls/LoadingIcon/index.tsx"),
				i = a("./src/reddit/icons/svgs/NewPost/index.tsx"),
				d = a("./src/reddit/models/ApiRequestState/index.ts"),
				l = a("./src/reddit/components/EditableImage/index.m.less"),
				m = a.n(l);
			const {
				fbt: u
			} = a("./node_modules/fbt/lib/FbtPublic.js"), p = 80;
			class b extends n.a.PureComponent {
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
					return n.a.createElement("div", {
						className: Object(s.a)(m.a.Container, a)
					}, n.a.createElement("label", {
						className: m.a.HitBox
					}, n.a.createElement("span", {
						className: m.a.ImageContainer,
						role: "presentation"
					}, l ? n.a.createElement("img", {
						alt: e,
						className: m.a.Image,
						src: l
					}) : t), n.a.createElement(o.a, {
						className: m.a.ImageUploader,
						multiple: !1,
						onChange: this.selectFile
					}), !d && n.a.createElement("div", {
						className: Object(s.a)(m.a.EditButton, r)
					}, n.a.createElement(i.a, {
						className: m.a.EditIcon
					}))), d && n.a.createElement(c.a, {
						className: m.a.LoadingIcon,
						sizePx: p
					}))
				}
			}
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx": function(e, t, a) {
			"use strict";
			var r = a("./node_modules/react/index.js"),
				n = a.n(r),
				s = a("./node_modules/react-redux/es/index.js"),
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
				x = a("./src/reddit/selectors/userFlair.ts"),
				h = a("./src/reddit/selectors/userPrefs.ts"),
				C = a("./node_modules/fbt/lib/FbtPublic.js"),
				I = a("./src/config.ts"),
				g = a("./node_modules/react-router-dom/esm/react-router-dom.js"),
				E = a("./src/lib/lessComponent.tsx"),
				_ = a("./src/lib/prettyPrintNumber/index.ts"),
				w = a("./src/lib/timeAgo/index.ts"),
				N = a("./src/reddit/components/ChatButton/index.tsx"),
				j = a("./src/reddit/components/JSAPIContainers/index.tsx"),
				O = a("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				y = a("./src/reddit/components/SubscribeButton/index.tsx"),
				L = a("./src/reddit/components/UserIcon/index.tsx"),
				k = a("./src/reddit/helpers/trackers/authorHovercard.ts"),
				M = a("./src/reddit/icons/fonts/Info/index.tsx"),
				U = a("./src/reddit/icons/svgs/Admin/index.tsx"),
				A = a("./src/reddit/icons/svgs/Karma/index.tsx"),
				P = a("./src/reddit/icons/svgs/Premium/index.tsx"),
				B = a("./src/reddit/models/Gold/Award.ts"),
				S = a("./src/reddit/models/User/index.ts"),
				T = a("./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx"),
				H = a("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx"),
				F = a("./src/reddit/actions/inContextModeration.ts"),
				K = a("./src/reddit/actions/modal.ts"),
				R = a("./src/reddit/actions/subredditModeration/ban.ts"),
				D = a("./src/reddit/constants/modals.ts"),
				W = a("./src/reddit/components/Hovercards/helpers.ts"),
				Z = a("./src/reddit/icons/svgs/Ban/index.tsx"),
				z = a("./src/reddit/icons/svgs/Mute/index.tsx"),
				q = a("./src/reddit/icons/svgs/Unban/index.tsx"),
				G = a("./src/reddit/models/ModeratingSubreddits/index.ts"),
				Y = a("./src/reddit/selectors/bannedUser.ts"),
				J = a("./src/reddit/components/Hovercards/AuthorHovercard/ModActions.m.less"),
				X = a.n(J);
			const {
				fbt: Q
			} = a("./node_modules/fbt/lib/FbtPublic.js"), V = E.a.wrapped(Z.a, "BanIcon", X.a), $ = E.a.wrapped(z.a, "MuteIcon", X.a), ee = E.a.wrapped(q.a, "UnbanIcon", X.a), te = Object(o.c)({
				hasModMailPermissions: Object(m.a)(G.c.mail),
				isUserBanned: (e, t) => !!Object(Y.b)(e, {
					subredditId: t.subredditId,
					username: t.username
				}),
				user: (e, t) => Object(f.mb)(e, {
					userName: t.username
				})
			});
			class ae extends n.a.Component {
				componentDidMount() {
					this.props.requestUserBanInfo()
				}
				render() {
					const {
						className: e,
						contextId: t,
						hasModMailPermissions: a,
						isUserBanned: r,
						onUnbanUser: s,
						sendEvent: o,
						toggleBanModal: c,
						toggleMuteModal: i
					} = this.props;
					return n.a.createElement("div", {
						className: e
					}, r ? n.a.createElement(W.a, {
						role: "button",
						onClick: () => {
							s(this.props.user.id), o(k.e(t))
						}
					}, n.a.createElement(ee, null), Q._("Unban User", null, {
						hk: "1aASyW"
					})) : n.a.createElement(W.a, {
						role: "button",
						onClick: () => {
							c(), o(k.a(t))
						}
					}, n.a.createElement(V, null), Q._("Ban User", null, {
						hk: "3OhuLx"
					})), a && n.a.createElement(W.a, {
						role: "button",
						onClick: () => {
							i(), o(k.d(t))
						}
					}, n.a.createElement($, null), Q._("Mute User", null, {
						hk: "3MCujH"
					})))
				}
			}
			var re = Object(s.b)(te, (e, {
					username: t,
					subredditId: a,
					contextId: r
				}) => ({
					onUnbanUser: t => e(Object(R.e)(a, t)),
					requestUserBanInfo: () => e(Object(R.c)(a, {
						username: t
					})),
					toggleBanModal: () => {
						e(Object(F.c)({
							username: t,
							subredditId: a,
							contextId: r
						})), e(Object(R.a)(a, t))
					},
					toggleMuteModal: () => {
						e(Object(F.d)({
							username: t,
							subredditId: a,
							contextId: r
						})), e(Object(K.i)(D.a.MUTE_USER))
					}
				}))(ae),
				ne = a("./src/reddit/actions/userFlair/index.ts"),
				se = a("./src/reddit/icons/svgs/Tag/index.tsx"),
				oe = a("./src/reddit/components/Hovercards/AuthorHovercard/ModFlairActions.m.less"),
				ce = a.n(oe);
			const {
				fbt: ie
			} = a("./node_modules/fbt/lib/FbtPublic.js"), de = E.a.wrapped(se.a, "FlairIcon", ce.a);
			var le = Object(s.b)(null, (e, t) => ({
					onToggleUserFlairModal: () => e(Object(ne.g)(t.subredditId, t.username))
				}))(e => n.a.createElement(W.a, {
					role: "button",
					onClick: () => {
						e.onToggleUserFlairModal(), e.sendEvent(k.c(e.contextId))
					}
				}, n.a.createElement(de, null), ie._("Edit user flair", null, {
					hk: "4mTxM"
				}))),
				me = a("./src/reddit/components/Hovercards/AuthorHovercard/userOptions.m.less"),
				ue = a.n(me);

			function pe() {
				return (pe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r])
					}
					return e
				}).apply(this, arguments)
			}
			const be = E.a.wrapped(L.a, "UserIcon", ue.a),
				ve = E.a.wrapped(y.a, "SubscribeButton", ue.a),
				fe = E.a.wrapped(N.b, "ChatButton", ue.a),
				xe = E.a.wrapped(A.a, "KarmaIcon", ue.a),
				he = E.a.wrapped(P.a, "PremiumIcon", ue.a),
				Ce = E.a.wrapped(g.a, "UserNameLink", ue.a),
				Ie = E.a.div("UserNameMetaData", ue.a),
				ge = E.a.div("MetaDataItem", ue.a),
				Ee = E.a.div("Bullet", ue.a),
				_e = E.a.div("UserNameContainer", ue.a),
				we = E.a.div("UserInfoContainer", ue.a),
				Ne = E.a.div("PostKarma", ue.a),
				je = E.a.div("CommentKarma", ue.a),
				Oe = E.a.div("KarmaGrid", ue.a),
				ye = E.a.div("GenericKarma", ue.a),
				Le = E.a.a("InfoLink", ue.a),
				ke = E.a.div("KarmaCount", ue.a),
				Me = E.a.div("KarmaLabel", ue.a),
				Ue = E.a.div("GenericKarmaLabel", ue.a),
				Ae = E.a.div("BannerImage", ue.a),
				Pe = E.a.div("UserContainer", ue.a),
				Be = E.a.div("BottomSpacer", ue.a),
				Se = E.a.div("Container", ue.a),
				Te = e => n.a.createElement("div", null, n.a.createElement("div", null, n.a.createElement(Ce, {
					to: `/user/${e.userName}/`
				}, `u/${e.userName}`), e.user.isEmployee && n.a.createElement(U.a, {
					className: ue.a.adminIcon,
					title: C.fbt._("Reddit admin", null, {
						hk: "15wBTE"
					})
				}), e.user.isGold && n.a.createElement(g.a, {
					to: "/premium"
				}, n.a.createElement(he, null))), n.a.createElement(Ie, null, e.user.username && n.a.createElement(ge, null, e.user.username, n.a.createElement(Ee, null, "•")), n.a.createElement(ge, null, Object(w.d)(e.user.createdUtc || e.user.created)))),
				He = e => {
					const {
						showAwardKarma: t,
						user: a
					} = e;
					return t ? n.a.createElement(Oe, null, n.a.createElement(ye, null, n.a.createElement(ke, null, Object(_.b)(a.postKarma)), n.a.createElement(Ue, null, C.fbt._({
						"*": "Post Karma",
						_1: " Post Karma"
					}, [C.fbt._plural(a.postKarma)], {
						hk: "3K4oaH"
					}))), n.a.createElement(ye, null, n.a.createElement(ke, null, Object(_.b)(a.commentKarma)), n.a.createElement(Ue, null, C.fbt._({
						"*": "Comment Karma",
						_1: " Comment Karma"
					}, [C.fbt._plural(a.commentKarma)], {
						hk: "3gKRx9"
					}))), n.a.createElement(ye, null, n.a.createElement(ke, null, Object(_.b)(a.awardeeKarma)), n.a.createElement(Ue, null, C.fbt._({
						"*": "Awardee Karma",
						_1: " Awardee Karma"
					}, [C.fbt._plural(a.awardeeKarma)], {
						hk: "3nzm9q"
					}), n.a.createElement(Le, {
						href: B.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, n.a.createElement(M.a, {
						className: ue.a.infoIcon
					})))), n.a.createElement(ye, null, n.a.createElement(ke, null, Object(_.b)(a.awarderKarma)), n.a.createElement(Ue, null, C.fbt._({
						"*": "Awarder Karma",
						_1: " Awarder Karma"
					}, [C.fbt._plural(a.awarderKarma)], {
						hk: "4zXN3B"
					}), n.a.createElement(Le, {
						href: B.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, n.a.createElement(M.a, {
						className: ue.a.infoIcon
					}))))) : n.a.createElement(we, null, n.a.createElement(xe, null), n.a.createElement(Ne, null, n.a.createElement(ke, null, Object(_.b)(a.postKarma)), n.a.createElement(Me, null, C.fbt._({
						"*": "Post Karma",
						_1: " Post Karma"
					}, [C.fbt._plural(a.postKarma)], {
						hk: "3K4oaH"
					}))), n.a.createElement(je, null, n.a.createElement(ke, null, Object(_.b)(a.commentKarma)), n.a.createElement(Me, null, C.fbt._({
						"*": "Comment Karma",
						_1: " Comment Karma"
					}, [C.fbt._plural(a.commentKarma)], {
						hk: "3gKRx9"
					}))))
				},
				Fe = e => {
					const {
						className: t,
						contextId: a,
						currentUser: r,
						hideNSFWPref: s,
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
						userName: x,
						user: h,
						userFlair: g,
						userIsBanned: E,
						userProfileStyles: _,
						acceptChats: w
					} = e;
					if (!h) return n.a.createElement(Se, {
						style: b
					});
					const N = !!r && Object(S.e)(r) === x,
						O = !!(null == r ? void 0 : r.snoovatarFullBodyAsset),
						y = h.accountIcon || `${I.a.assetPath}/img/snoo_user_placeholder.png`,
						L = l && l.flair,
						M = l && l.access,
						U = g && g.templateIds && g.templateIds.length > 0,
						A = g && g.displaySettings && g.displaySettings.isEnabled,
						{
							awardedLastMonth: P
						} = h,
						B = !!h.snoovatarFullBodyAsset,
						F = h.isNSFW && s;
					let K;
					return K = B ? !F && _ && _.bannerBackgroundImage || void 0 : F ? `${I.a.assetPath}/img/user-info-banner.png` : e.user.bannerImage, n.a.createElement(Se, {
						className: t,
						id: o,
						style: b
					}, !B && K && n.a.createElement(Ae, {
						style: {
							backgroundImage: `url('${K}')`
						}
					}), n.a.createElement(Pe, null, B ? n.a.createElement(H.a, {
						bannerBackgroundImage: K,
						compact: !0,
						currentUserHasSnoovatar: O,
						isEmployee: h.isEmployee,
						isGold: h.isGold,
						isNSFW: h.isNSFW,
						isOwnProfile: N,
						onClickSnoovatar: i,
						prefersReducedAnimations: !!m,
						snoovatarUrl: h.snoovatarFullBodyAsset,
						title: null,
						userCreated: h.created,
						username: x,
						url: `/user/${e.userName}/`
					}) : n.a.createElement(_e, null, n.a.createElement(be, {
						iconUrl: y,
						isNSFW: h.isNSFW,
						userName: x
					}), n.a.createElement(Te, {
						origin: d,
						user: h,
						userName: x
					})), n.a.createElement(He, {
						showAwardKarma: p,
						user: h
					}), P && n.a.createElement(T.a, {
						recentAwardings: P,
						topAwardIcon: f,
						username: x
					}), c && !N && !E && w && n.a.createElement(fe, {
						contextId: a,
						userId: h.id,
						text: C.fbt._("Start Chat", null, {
							hk: "2mfqRE"
						})
					}), h.hasUserProfile && !E && !N && n.a.createElement(ve, {
						identifier: {
							name: e.user.username,
							type: "profile"
						},
						getEventFactory: e => Object(k.g)(e ? "unfollow" : "follow", a),
						small: !0
					})), M && a && !N && v && n.a.createElement(re, {
						contextId: a,
						subredditId: v,
						sendEvent: u,
						username: x
					}), L && a && U && A && v && n.a.createElement(le, {
						contextId: a,
						subredditId: v,
						sendEvent: u,
						username: x
					}), n.a.createElement(j.i, {
						contextId: a,
						subredditId: v,
						user: h
					}), !(M || c) && n.a.createElement(Be, null))
				},
				Ke = Object(O.a)(Fe),
				Re = e => {
					const t = e.activeTooltipId === e.tooltipId;
					return n.a.createElement(Ke, pe({
						isOpen: t
					}, e))
				};
			Re.WrappedComponent = Fe;
			var De = Re;
			const We = Object(o.c)({
					activeTooltipId: v.a,
					currentUser: f.i,
					isLoggedIn: f.J,
					hideNSFWPref: f.B,
					moderatorPermissions: (e, {
						subredditId: t
					}) => t ? Object(m.k)(e, {
						subredditId: t
					}) : void 0,
					origin: l.j,
					prefersReducedAnimations: h.c,
					showAwardKarma: (e, t) => {
						return Object(v.a)(e) === t.tooltipId
					},
					topAwardIcon: (e, {
						userName: t
					}) => Object(d.e)(e, {
						userName: t,
						minSize: 32
					}),
					user: f.mb,
					userFlair: (e, {
						subredditId: t
					}) => t ? Object(x.c)(e, {
						subredditId: t
					}) : void 0,
					userIsBanned: (e, t) => !!Object(b.m)(t) && Object(b.fb)(e, t),
					userProfileStyles: (e, t) => Object(p.m)(e, Object(u.m)(e, t.userName)),
					acceptChats: (e, t) => {
						const a = Object(u.h)(e, {
							profileName: t.userName
						});
						return !a || a.acceptChats
					}
				}),
				Ze = Object(s.b)(We, (e, t) => ({
					onClickSnoovatar: () => e(Object(c.b)("user_hovercard")),
					onHideTooltip: () => e(Object(i.i)())
				}));
			t.a = Ze(e => n.a.createElement("div", {
				className: e.className,
				id: e.tooltipId,
				onMouseLeave: e.onHideTooltip
			}, n.a.createElement(De, {
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
				BanIcon: "_2g595huO3XJ8C5PGbnTIcH",
				banIcon: "_2g595huO3XJ8C5PGbnTIcH",
				MuteIcon: "_1qnIs5F_qVlqqqY9ZvtGHT",
				muteIcon: "_1qnIs5F_qVlqqqY9ZvtGHT",
				UnbanIcon: "_3gnOs3YMjVI2NyE6rZjyL3",
				unbanIcon: "_3gnOs3YMjVI2NyE6rZjyL3"
			}
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/ModFlairActions.m.less": function(e, t, a) {
			e.exports = {
				FlairIcon: "_2xaYvwRfHZMRW_6lyBpV4v",
				flairIcon: "_2xaYvwRfHZMRW_6lyBpV4v"
			}
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx": function(e, t, a) {
			"use strict";
			var r = a("./node_modules/react/index.js"),
				n = a.n(r),
				s = a("./src/reddit/components/Hovercards/HoverDiv/index.tsx"),
				o = a("./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx"),
				c = a("./src/reddit/components/TrackingHelper/index.tsx");
			t.a = Object(c.c)(e => {
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
				return g
			}));
			var r = a("./node_modules/react/index.js"),
				n = a.n(r),
				s = a("./src/lib/lessComponent.tsx"),
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
				x = a.n(f);
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
			const C = s.a.wrapped(h, "HoverDiv", x.a),
				I = u(C),
				g = v(C)
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
				n = a("./src/reddit/layout/row/Inline/index.tsx"),
				s = a("./src/reddit/components/Hovercards/helpers.m.less"),
				o = a.n(s);
			const c = r.a.wrapped(n.a, "UserActionItem", o.a),
				i = e => {
					const {
						author: t,
						itemId: a,
						subredditName: r,
						tooltipIdPrefix: n,
						tooltipType: s
					} = e;
					let o = n;
					return a && (o = `${o}--${a}`), s && (o = `${o}--${s}`), t && (o = `${o}--${t}`), r && (o = `${o}--${r}`), o
				}
		},
		"./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx": function(e, t, a) {
			"use strict";
			var r = a("./node_modules/react/index.js"),
				n = a.n(r),
				s = a("./src/config.ts"),
				o = a("./src/lib/prettyPrintNumber/index.ts"),
				c = a("./src/reddit/components/ProfileIdCard/index.m.less"),
				i = a.n(c);
			const {
				fbt: d
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			class l extends n.a.PureComponent {
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
					return n.a.createElement("a", {
						className: i.a.AwardedLastMonth,
						href: `${s.a.oldRedditUrl}/user/${a}/gilded`
					}, n.a.createElement("div", {
						className: i.a.iconColumn
					}, n.a.createElement("img", {
						alt: l,
						className: i.a.icon,
						src: e
					}), c > 1 && n.a.createElement("span", {
						className: i.a.count
					}, `+${Object(o.b)(c-1)}`)), n.a.createElement("div", {
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
				n = a("./node_modules/react/index.js"),
				s = a.n(n),
				o = a("./src/reddit/models/Image/index.tsx"),
				c = a("./src/reddit/components/EditableImage/index.tsx"),
				i = a("./src/reddit/models/User/index.ts"),
				d = a("./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts"),
				l = a("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.m.less"),
				m = a.n(l);
			class u extends s.a.Component {
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
						hideNSFWPref: n,
						isNSFW: o,
						userName: d
					} = this.props, {
						isUpdating: l
					} = this.state, u = e ? s.a.createElement("div", {
						className: m.a.Banner,
						style: {
							backgroundImage: `url(${e})`
						}
					}) : null;
					return a && Object(i.e)(a) === d ? s.a.createElement(c.a, {
						altText: r.fbt._("{userName} banner image", [r.fbt._param("userName", d)], {
							hk: "1PcEBS"
						}),
						className: t,
						isLoading: l,
						onFileSelected: this.updateProfileIcon
					}, u) : o && n ? null : u
				}
			}
			t.a = Object(d.a)(u)
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts": function(e, t, a) {
			"use strict";
			var r = a("./node_modules/react-redux/es/index.js"),
				n = a("./node_modules/reselect/es/index.js"),
				s = a("./src/reddit/actions/preferences.ts"),
				o = a("./src/reddit/selectors/user.ts");
			const c = Object(n.c)({
					currentUser: o.i,
					hideNSFWPref: o.B
				}),
				i = Object(r.b)(c, e => ({
					imageUpdateRequested: (t, a) => e(Object(s.z)(t, a))
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
				n = a.n(r),
				s = a("./src/lib/classNames/index.ts"),
				o = a("./src/reddit/controls/Button/index.tsx"),
				c = a("./src/reddit/icons/svgs/Chevron/index.tsx"),
				i = a("./src/reddit/icons/svgs/Shirt/index.tsx"),
				d = a("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				l = a.n(d);
			const {
				fbt: m
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			t.a = function({
				compact: e,
				currentUserHasSnoovatar: t,
				isOwnProfile: a,
				onClick: r
			}) {
				return n.a.createElement(o.q, {
					onClick: r,
					className: Object(s.a)(l.a.snoovatarButton, {
						[l.a.snoovatarExtraPadding]: !t && a,
						[l.a.compactButtonLayout]: e
					})
				}, t ? n.a.createElement(i.a, {
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
				}) : n.a.createElement(c.a, {
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
				n = a.n(r),
				s = a("./src/reddit/controls/LoadingIcon/index.tsx"),
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
				return n.a.createElement("div", {
					className: d.a.bannerWrapper
				}, n.a.createElement(c.a, {
					bannerUrl: e,
					isNSFW: t,
					userName: a
				}), r && e && (i ? n.a.createElement(s.a, {
					sizePx: 20,
					className: m.a.loadingIcon
				}) : n.a.createElement(o.a, {
					className: m.a.closeIcon,
					onClick: l
				})))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx": function(e, t, a) {
			"use strict";
			var r = a("./node_modules/react/index.js"),
				n = a.n(r),
				s = a("./node_modules/fbt/lib/FbtPublic.js"),
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
				const m = t ? s.fbt._("{username} · {time since account creation}", [s.fbt._param("username", `u/${d}`), s.fbt._param("time since account creation", Object(o.d)(r, {
					noPostfix: !0,
					shortenedUnit: !0
				}))], {
					hk: "2k741A"
				}) : `u/${d}`;
				return a ? n.a.createElement(c.a, i({}, l, {
					className: e,
					to: a
				}), m) : n.a.createElement("span", i({}, l, {
					className: e
				}), m)
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less": function(e, t, a) {
			e.exports = {
				closeIcon: "_2ioQgcdZvYlf34S0OEqBuQ",
				loadingIcon: "_2DTxp6tzlJMeNlZ-cjXWTs",
				settingsIcon: "A4Iifg_NCOrfabq0ON3mW"
			}
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
			var r = a("./node_modules/fbt/lib/FbtPublic.js"),
				n = a("./node_modules/react/index.js"),
				s = a.n(n),
				o = a("./src/config.ts"),
				c = a("./src/lib/classNames/index.ts"),
				i = a("./src/reddit/controls/InternalLink/index.tsx"),
				d = a("./src/reddit/icons/svgs/Admin/index.tsx"),
				l = a("./src/reddit/icons/svgs/Nsfw/index.tsx"),
				m = a("./src/reddit/icons/svgs/PremiumCircle/index.tsx"),
				u = a("./src/reddit/icons/svgs/Settings/index.tsx"),
				p = a("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx"),
				b = a("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx"),
				v = a("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx"),
				f = (a("./node_modules/core-js/modules/web.dom.iterable.js"), a("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less")),
				x = a.n(f);
			const h = 25;

			function C(e, t) {
				return Object.keys(t).filter(t => 0 === t.indexOf(e)).map(e => t[e])
			}

			function I(e) {
				return e[Math.floor(Math.random() * e.length)]
			}
			const g = C("particleDelay", x.a),
				E = C("particleX", x.a),
				_ = C("particleFloat", x.a),
				w = () => {
					const e = I(E),
						t = I(_),
						a = I(g);
					return Object(c.a)(x.a.particle, e, t, a)
				};
			class N extends s.a.Component {
				shouldComponentUpdate() {
					return !1
				}
				render() {
					const e = [];
					for (let t = 0; t < h; t++) e.push(this.createParticle(t));
					return s.a.createElement("div", {
						role: "presentation",
						className: x.a.particleWrapper
					}, e)
				}
				createParticle(e) {
					return s.a.createElement("div", {
						key: e,
						className: `${w()}`
					})
				}
			}
			var j = N,
				O = a("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				y = a.n(O);
			t.a = ({
				bannerBackgroundImage: e,
				compact: t,
				currentUserHasSnoovatar: a,
				editMode: n,
				isDeletingBanner: f,
				isEmployee: h,
				isGold: C,
				isNSFW: I,
				isOwnProfile: g,
				onClickSnoovatar: E,
				onDeleteBanner: _,
				prefersReducedAnimations: w,
				snoovatarUrl: N,
				title: O,
				userCreated: L,
				username: k,
				url: M
			}) => s.a.createElement(s.a.Fragment, null, s.a.createElement(b.a, {
				bannerBackgroundImage: e,
				editMode: !!n,
				isNSFW: I,
				username: k,
				isDeletingBanner: !!f,
				onDeleteBanner: _
			}), s.a.createElement("div", {
				className: x.a.snoovatarContainer
			}, C && s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
				className: x.a.topGlow
			}), s.a.createElement("div", {
				className: x.a.bottomGlow
			}), !w && s.a.createElement(j, null)), s.a.createElement("img", {
				className: Object(c.a)(x.a.snoovatar, {
					[x.a.premiumGlow]: C
				}),
				src: N || void 0
			})), !n && g && s.a.createElement(i.a, {
				to: "/settings/profile",
				className: x.a.snoovatarSettingsLink
			}, s.a.createElement(u.a, {
				className: y.a.settingsIcon
			})), s.a.createElement("h1", {
				className: x.a.snoovatarUserTitle
			}, O || k, h && s.a.createElement(d.a, {
				className: x.a.snoovatarAdminIcon,
				title: r.fbt._("Reddit admin", null, {
					hk: "goUUb"
				})
			}), C && s.a.createElement("a", {
				title: r.fbt._("{username} has Reddit Premium", [r.fbt._param("username", k)], {
					hk: "3Fylv"
				}),
				href: `${o.a.redditUrl}/premium`
			}, s.a.createElement(m.a, {
				className: x.a.snoovatarPremiumIcon
			})), I && s.a.createElement(l.a, {
				className: x.a.snoovatarNsfwIcon,
				title: r.fbt._("NSFW - Adult Content", null, {
					hk: "2Iw7mN"
				})
			})), s.a.createElement(v.a, {
				className: x.a.snoovatarUserName,
				shouldDisplaySnoovatar: !0,
				username: k,
				userCreated: L,
				url: M
			}), (g || !a && !!N) && s.a.createElement(p.a, {
				compact: t,
				currentUserHasSnoovatar: a,
				isOwnProfile: g,
				onClick: E
			}))
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
				n = a("./node_modules/react/index.js"),
				s = a.n(n),
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
				}) => s.a.createElement(o.q, m({}, a, {
					priority: e ? o.b.Primary : o.b.Plain,
					className: Object(l.a)(a.className, d.a.BaseButton),
					size: t ? o.c.S : o.c.M
				})),
				p = e => s.a.createElement(s.a.Fragment, null, s.a.createElement("span", {
					className: d.a.UnsubscribeButtonDefault
				}, "subreddit" === e ? r.fbt._("Joined", null, {
					hk: "1MTmIz"
				}) : r.fbt._("Following", null, {
					hk: "1wQlVR"
				})), s.a.createElement("span", {
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
				}) => s.a.createElement(o.q, m({}, r, {
					priority: t ? o.b.Secondary : o.b.Plain,
					className: Object(l.a)(r.className, d.a.BaseButton),
					size: a ? o.c.S : o.c.M,
					text: p(e)
				}));
			class v extends s.a.Component {
				constructor() {
					super(...arguments), this.onClick = e => {
						if (this.props.userIsSubscriber ? this.props.onUnsubscribe() : this.props.onSubscribe(), this.props.onClick && this.props.onClick(e), this.props.getEventFactory) {
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
						isFullWidth: n = !1
					} = this.props, o = {
						border: e,
						className: t,
						onClick: this.onClick,
						small: r,
						isFullWidth: n
					};
					return this.props.userIsSubscriber ? s.a.createElement(b, m({}, o, {
						buttonType: this.props.identifier.type
					})) : s.a.createElement(u, m({}, o, {
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
			const n = ({
					type: e
				}) => "subreddit" === e ? "subredditActions" : "profileActions",
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
				o = ({
					type: e,
					key: t
				}) => s[n({
					type: e
				})][t]()
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, a) {
			"use strict";
			var r = a("./src/reddit/components/TrackingHelper/index.tsx"),
				n = a("./src/reddit/connectors/SubscribeButton/index.ts"),
				s = a("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(n.a)(Object(r.c)(s.a))
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, a) {
			"use strict";
			var r = a("./node_modules/react-redux/es/index.js"),
				n = a("./node_modules/reselect/es/index.js"),
				s = a("./src/reddit/actions/subscription/index.ts"),
				o = a("./src/reddit/selectors/subreddit.ts");
			t.a = Object(r.b)(() => Object(n.c)({
				userIsSubscriber: o.gb
			}), (e, {
				identifier: t
			}) => ({
				onSubscribe: () => e(s.d([t], !0)),
				onSubscriptionsRequested: () => e(s.e()),
				onUnsubscribe: () => e(s.d([t], !1))
			}))
		},
		"./src/reddit/controls/ImageInput/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return s
			}));
			var r = a("./node_modules/react/index.js"),
				n = a.n(r);
			class s extends n.a.Component {
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
					} = this, a = "string" == typeof t.value ? t.value : "", r = "object" == typeof t.value ? t.value : null, s = a || r;
					return n.a.createElement("div", {
						className: e.className
					}, a && n.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						readOnly: !0,
						type: "text",
						value: a,
						tabIndex: e.tabIndex
					}), !s && n.a.createElement("input", {
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
				n = a.n(r),
				s = a("./src/lib/classNames/index.ts"),
				o = a("./src/reddit/controls/LoadingIcon/index.m.less"),
				c = a.n(o);
			t.a = ({
				center: e,
				className: t,
				sizePx: a = 10
			}) => n.a.createElement("div", {
				className: Object(s.a)(c.a.loadingIcon, t, {
					[c.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${a}px`
				}
			})
		},
		"./src/reddit/icons/fonts/Info/index.m.less": function(e, t, a) {
			e.exports = {
				InfoIcon: "_3nKAYOml-oSgh4pKL20-sC",
				infoIcon: "_3nKAYOml-oSgh4pKL20-sC"
			}
		},
		"./src/reddit/icons/fonts/Info/index.tsx": function(e, t, a) {
			"use strict";
			var r = a("./node_modules/react/index.js"),
				n = a.n(r),
				s = a("./src/reddit/icons/fonts/helpers.tsx"),
				o = a("./src/reddit/icons/fonts/Info/index.m.less"),
				c = a.n(o);
			const i = a("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
				className: `${Object(s.b)("info",e.isFilled)} ${e.className}`
			}), "InfoIcon", c.a);
			t.a = i
		},
		"./src/reddit/icons/fonts/commonStyles.m.less": function(e, t, a) {
			e.exports = {
				iconFont: "WxKparxaBCy4-EWML7xc3",
				approveIcon: "MAe2tslj1FAD6GliiZ3it",
				calendarIcon: "_2YXLfgRGcJoCJROcTAGqir",
				commentIcon: "_3ch9jJ0painNf41PmU4F9i",
				lockIcon: "XHMWG1CPWX8RXeNg-o5-R",
				modActions: "_3phKxmomoio9ulzAoL4XhZ",
				moderateIcon: "_2Xt7ltq8LezAkf8ZF8x9dv",
				removeIcon: "_2IVG3b9-lczna8tonL9FWB",
				reportIcon: "_1MDjRAzxk1RSTB12748O1v",
				shareIcon: "xwmljjCrovDE5C9MasZja",
				spamIcon: "_1Gn6JH0U8GJtJXSIc54IMU",
				stickyIcon: "hMF1wBi2Z6Lh9zHskfhX1",
				adminIcon: "_3ACtZ0jvC5KDN8RNxR0lXX",
				archivedIcon: "_2trXhUAJMhIhxp8a2zvOVP",
				liveIcon: "_3cdJ6BHH65ws78AzuO0KLw"
			}
		},
		"./src/reddit/icons/svgs/Admin/index.m.less": function(e, t, a) {
			e.exports = {
				admin: "_1PeZajQI0Wm8P3B45yshR",
				mEnabled: "_3axV0unm-cpsxoKWYwKh2x"
			}
		},
		"./src/reddit/icons/svgs/Admin/index.tsx": function(e, t, a) {
			"use strict";
			var r = a("./node_modules/react/index.js"),
				n = a.n(r),
				s = a("./src/lib/classNames/index.ts"),
				o = a("./src/reddit/icons/svgs/Admin/index.m.less"),
				c = a.n(o);
			t.a = e => n.a.createElement("svg", {
				className: Object(s.a)(e.className, c.a.admin, {
					[c.a.mEnabled]: e.enabled
				}),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 -0.75 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.title && n.a.createElement("title", null, e.title), e.desc && n.a.createElement("desc", null, e.desc), n.a.createElement("g", null, n.a.createElement("path", {
				fill: "inherit",
				d: "M19.99,9.3125 C19.99,8.104375 19.010625,7.125 17.8025,7.125 C17.213125,7.125 16.67875,7.359375 16.285625,7.73875 C14.8075,6.6725 12.776875,5.98 10.514375,5.886875 L11.491875,1.2875 L14.695625,1.96875 C14.775,2.756875 15.433125,3.375 16.2425,3.375 C17.105625,3.375 17.805,2.675625 17.805,1.8125 C17.805,0.949375 17.105625,0.25 16.2425,0.25 C15.6575,0.25 15.154375,0.575 14.88625,1.050625 L11.228125,0.273125 C11.10625,0.24625 10.98,0.270625 10.875625,0.338125 C10.77125,0.40625 10.698125,0.5125 10.6725,0.63375 L9.556875,5.8825 C7.26,5.960625 5.1975,6.65625 3.7,7.735 C3.306875,7.358125 2.775,7.125 2.1875,7.125 C0.979375,7.125 0,8.104375 0,9.3125 C0,10.20125 0.530625,10.965 1.2925,11.306875 C1.25875,11.524375 1.24,11.745 1.24,11.96875 C1.24,15.334375 5.1575,18.0625 9.99,18.0625 C14.8225,18.0625 18.74,15.334375 18.74,11.96875 C18.74,11.746875 18.721875,11.5275 18.68875,11.31125 C19.455,10.97125 19.99,10.205 19.99,9.3125"
			})), n.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, n.a.createElement("polygon", {
				points: "0 20 20 20 20 0 0 0"
			}), n.a.createElement("g", {
				transform: "translate(0 1)"
			})))
		},
		"./src/reddit/icons/svgs/Ban/index.tsx": function(e, t, a) {
			"use strict";
			var r = a("./node_modules/react/index.js"),
				n = a.n(r);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 16",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M12.8172,7.49104 C12.8172,7.70304 12.7332,7.90704 12.5828,8.05664 L9.5196,11.11984 C9.3636,11.27584 9.1588,11.35424 8.954,11.35424 C8.7492,11.35424 8.5444,11.27584 8.3884,11.11984 L7.2572,9.98784 L2.966,14.27904 C2.8092,14.43584 2.6044,14.51344 2.4004,14.51344 C2.1956,14.51344 1.9908,14.43584 1.834,14.27904 C1.522,13.96704 1.522,13.46064 1.834,13.14784 L6.126,8.85664 L4.9948,7.72544 C4.682,7.41264 4.682,6.90704 4.9948,6.59424 L8.0572,3.53104 C8.3572,3.23104 8.8884,3.23104 9.1884,3.53104 L12.5828,6.92544 C12.7332,7.07504 12.8172,7.27904 12.8172,7.49104 Z M3.86328,6.26288 C3.65848,6.26288 3.45368,6.18448 3.29768,6.02848 C2.98488,5.71568 2.98488,5.21008 3.29768,4.89728 L6.36008,1.83408 C6.67288,1.52208 7.17928,1.52208 7.49128,1.83408 C7.80408,2.14688 7.80408,2.65328 7.49128,2.96528 L4.42888,6.02848 C4.27288,6.18448 4.06808,6.26288 3.86328,6.26288 Z M14.27968,8.62264 C14.59248,8.93544 14.59248,9.44104 14.27968,9.75384 L11.21728,12.81624 C11.06128,12.97224 10.85648,13.05064 10.65168,13.05064 C10.44688,13.05064 10.24208,12.97224 10.08608,12.81624 C9.77328,12.50424 9.77328,11.99784 10.08608,11.68504 L13.14848,8.62264 C13.46128,8.30984 13.96688,8.30984 14.27968,8.62264 Z"
			})))
		},
		"./src/reddit/icons/svgs/Chevron/index.m.less": function(e, t, a) {
			e.exports = {
				chevron: "_1c_YBKkiW4FhhLJPkq9c1v"
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.tsx": function(e, t, a) {
			"use strict";
			var r = a("./node_modules/react/index.js"),
				n = a.n(r),
				s = a("./src/lib/classNames/index.ts"),
				o = a("./src/reddit/icons/svgs/Chevron/index.m.less"),
				c = a.n(o);
			t.a = e => n.a.createElement("svg", {
				className: Object(s.a)(c.a.chevron, e.className),
				viewBox: "0 0 9 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", {
				transform: "translate(-6.000000, -3.000000)"
			}, n.a.createElement("polygon", {
				fill: "none",
				points: "0 20 20 20 20 0 0 0"
			}), n.a.createElement("polygon", {
				fill: "inherit",
				points: "7.47566213 3 14.4756621 10 7.47566213 17 6 15.5239203 11.5239203 10 6 4.47566213"
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
				n = a.n(r),
				s = a("./src/lib/classNames/index.ts"),
				o = a("./src/reddit/icons/svgs/CoinV2/index.m.less"),
				c = a.n(o);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				className: Object(s.a)(c.a.shadow, e.shadowClassName),
				d: "M11.1 1.889H8.722v16.219h2.212a5.86 5.86 0 001.951-.274c3.658-1.158 5.837-5.614 4.856-9.933C16.92 4.28 14.134 1.886 11.1 1.89z"
			}), n.a.createElement("path", {
				d: "M11.1 1.889H8.722v16.219h2.212a5.86 5.86 0 001.951-.274c3.658-1.158 5.837-5.614 4.856-9.933C16.92 4.28 14.134 1.886 11.1 1.89z",
				fill: "url(#shine)",
				fillOpacity: ".3"
			}), n.a.createElement("path", {
				className: Object(s.a)(c.a.standardColor, e.standardColorClassName),
				d: "M6.991 2.166C3.334 3.324 1.155 7.78 2.135 12.1c.98 4.32 4.754 6.891 8.411 5.734 3.658-1.157 5.837-5.613 4.857-9.932-.98-4.32-4.754-6.892-8.412-5.735z"
			}), n.a.createElement("path", {
				className: Object(s.a)(c.a.shadow, e.shadowClassName),
				d: "M7.54 12.335c1.122.765 2.664.277 3.311-1.047.224-.457.718-.613 1.104-.35.387.264.52.847.296 1.304-.54 1.103-1.41 1.892-2.453 2.222-1.043.33-2.13.16-3.065-.476-1.929-1.316-2.592-4.24-1.479-6.517.54-1.104 1.41-1.893 2.453-2.223 1.042-.33 2.13-.16 3.065.477.387.263.52.847.296 1.303-.223.456-.717.612-1.104.35-1.121-.765-2.663-.277-3.31 1.047-.669 1.367-.271 3.121.887 3.91z"
			}), n.a.createElement("defs", null, n.a.createElement("linearGradient", {
				id: "shine",
				x1: "11.107",
				y1: "1.889",
				x2: "11.107",
				y2: "18.111",
				gradientUnits: "userSpaceOnUse"
			}, n.a.createElement("stop", {
				offset: ".063",
				stopColor: "#fff",
				stopOpacity: "0"
			}), n.a.createElement("stop", {
				offset: ".302",
				stopColor: "#fff"
			}), n.a.createElement("stop", {
				offset: "0.432",
				stopColor: "#fff"
			}), n.a.createElement("stop", {
				offset: "0.474",
				stopColor: "#fff",
				stopOpacity: "0"
			}))))
		},
		"./src/reddit/icons/svgs/Crosspost/index.tsx": function(e, t, a) {
			"use strict";
			var r = a("./node_modules/react/index.js"),
				n = a.n(r);

			function s() {
				return (s = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => n.a.createElement("svg", s({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), n.a.createElement("path", {
				d: "M9.06,8.64c1.12-1.26,2.2-2.45,4.44-2.6V7.5a1,1,0,0,0,.6.92,1,1,0,0,0,.41.09,1,1,0,0,0,.67-.26l3.16-2.9a.5.5,0,0,0,0-.74L15.18,1.7a1,1,0,0,0-1.68.74V4c-3.14.17-4.69,1.88-5.93,3.28C6.58,8.42,6,9,5,9H2a1,1,0,0,0,0,2H5C6.93,11,8,9.82,9.06,8.64Z"
			}), n.a.createElement("path", {
				d: "M15.18,11.76a1,1,0,0,0-1.68.74V14c-2.23-.16-3.29-1.32-4.39-2.56-.21-.24-.43-.48-.66-.72a5.63,5.63,0,0,1-1.77,1.06,13.34,13.34,0,0,1,.94,1A7.85,7.85,0,0,0,13.5,16v1.59a1,1,0,0,0,.6.92,1,1,0,0,0,.41.09,1,1,0,0,0,.67-.26l3.16-2.9a.5.5,0,0,0,0-.74Z"
			}))
		},
		"./src/reddit/icons/svgs/Karma/index.tsx": function(e, t, a) {
			"use strict";
			var r = a("./node_modules/react/index.js"),
				n = a.n(r);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M6.42528593,9.54562407 C4.41043013,8.02026355 3.10790651,5.60355545 3.10790651,2.88165092 L3.10790651,2.79711586 L3.19244157,2.79711586 C5.9143461,2.79711586 8.33136499,4.09963948 9.85641472,6.11449528 C8.02399304,6.25279712 6.56358777,7.7128916 6.42528593,9.54562407 Z M6.42528593,10.2560915 C6.56358777,12.088824 8.02399304,13.5489184 9.85641472,13.6872203 C8.33136499,15.7020761 5.9143461,17.0045997 3.19244157,17.0045997 L3.10790651,17.0045997 L3.10790651,16.9200646 C3.10790651,14.1981601 4.41043013,11.781452 6.42528593,10.2560915 Z M13.6872203,10.2560915 C15.7020761,11.781452 17.0045997,14.1981601 17.0045997,16.9200646 L17.0045997,17.0045997 L16.9200646,17.0045997 C14.1981601,17.0045997 11.7811412,15.7020761 10.2560915,13.6872203 C12.0885132,13.5489184 13.5486077,12.088824 13.6872203,10.2560915 Z M16.9200646,2.79711586 L17.0045997,2.79711586 L17.0045997,2.88165092 C17.0045997,5.60324465 15.7020761,8.02026355 13.6872203,9.54562407 C13.5489184,7.7128916 12.0885132,6.25279712 10.2560915,6.11449528 C11.7811412,4.09963948 14.1981601,2.79711586 16.9200646,2.79711586 Z M19.9403282,9.84895574 L20,9.90862755 L19.9403282,9.96829935 C18.9346096,10.9740179 17.7346469,11.6624192 16.46227,12.0474888 C15.9659373,11.2534187 15.3446668,10.5308304 14.6071606,9.90862755 C15.3446668,9.28642466 15.9659373,8.5638364 16.46227,7.76976629 C17.7346469,8.1548359 18.9346096,8.8432372 19.9403282,9.84895574 Z M9.90862755,5.39283938 C9.28642466,4.65533317 8.5638364,4.03406266 7.76976629,3.53772999 C8.1548359,2.26535306 8.8432372,1.06539035 9.84895574,0.0596718051 L9.90862755,0 L9.96829935,0.0596718051 C10.9740179,1.06539035 11.6624192,2.26535306 12.0474888,3.53772999 C11.2534187,4.03406266 10.5308304,4.65533317 9.90862755,5.39283938 Z M5.39283938,9.90862755 C4.65533317,10.5308304 4.03406266,11.2534187 3.53772999,12.0474888 C2.26535306,11.6624192 1.06539035,10.9740179 0.0596718051,9.96829935 L0,9.90862755 L0.0596718051,9.84895574 C1.06539035,8.8432372 2.26535306,8.1548359 3.53772999,7.76976629 C4.03406266,8.5638364 4.65533317,9.28642466 5.39283938,9.90862755 Z M9.90862755,14.6071606 C10.5308304,15.3446668 11.2534187,15.9659373 12.0474888,16.46227 C11.6624192,17.7346469 10.9740179,18.9346096 9.96829935,19.9403282 L9.90862755,20 L9.84895574,19.9403282 C8.8432372,18.9346096 8.1548359,17.7346469 7.76976629,16.46227 C8.5638364,15.9659373 9.28642466,15.3446668 9.90862755,14.6071606 Z"
			})))
		},
		"./src/reddit/icons/svgs/Mute/index.tsx": function(e, t, a) {
			"use strict";
			var r = a("./node_modules/react/index.js"),
				n = a.n(r);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 16",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M9.97968,8.20936 C10.13568,8.36536 10.13568,8.61896 9.97968,8.77496 C9.90128,8.85336 9.79888,8.89256 9.69648,8.89256 C9.59488,8.89256 9.49248,8.85336 9.41408,8.77496 L7.99968,7.36056 L6.58608,8.77496 C6.50768,8.85336 6.40528,8.89256 6.30288,8.89256 C6.20048,8.89256 6.09808,8.85336 6.02048,8.77496 C5.86368,8.61896 5.86368,8.36536 6.02048,8.20936 L7.43408,6.79496 L6.02048,5.38136 C5.86368,5.22536 5.86368,4.97176 6.02048,4.81576 C6.17648,4.65976 6.43008,4.65976 6.58608,4.81576 L7.99968,6.22936 L9.41408,4.81576 C9.57008,4.65976 9.82368,4.65976 9.97968,4.81576 C10.13568,4.97176 10.13568,5.22536 9.97968,5.38136 L8.56528,6.79496 L9.97968,8.20936 Z M12.79968,1.59976 L3.19968,1.59976 C2.31808,1.59976 1.59968,2.31816 1.59968,3.19976 L1.59968,10.59496 C1.59968,11.47736 2.31808,12.19496 3.19968,12.19496 L6.10528,12.19496 L7.33408,14.03896 C7.48288,14.26136 7.73248,14.39496 7.99968,14.39496 C8.26688,14.39496 8.51728,14.26136 8.66528,14.03896 L9.89488,12.19496 L12.79968,12.19496 C13.68208,12.19496 14.39968,11.47736 14.39968,10.59496 L14.39968,3.19976 C14.39968,2.31816 13.68208,1.59976 12.79968,1.59976 L12.79968,1.59976 Z",
				id: "path-1"
			})))
		},
		"./src/reddit/icons/svgs/NewPost/index.tsx": function(e, t, a) {
			"use strict";
			var r = a("./node_modules/react/index.js"),
				n = a.n(r);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 19 19"
			}, n.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M14.55 2.58716L16.413 4.45018C16.9354 4.97264 16.9354 5.82198 16.413 6.34445L14.7732 7.98419C14.6857 8.07171 14.5714 8.11547 14.458 8.11547C14.3436 8.11547 14.2293 8.07171 14.1418 7.98419L11.0159 4.85832C10.8418 4.68417 10.8418 4.40105 11.0159 4.2269L12.6557 2.58716C13.1781 2.0647 14.0275 2.0647 14.55 2.58716ZM9.7531 5.48975C9.92725 5.31559 10.2104 5.31559 10.3845 5.48975L13.5104 8.61561C13.6845 8.78977 13.6845 9.07288 13.5104 9.24703L5.8806 16.8768C5.79665 16.9608 5.68322 17.0072 5.56533 17.0072H2.43947C2.19208 17.0072 1.99292 16.808 1.99292 16.5607V13.4348C1.99292 13.3169 2.03936 13.2035 2.12331 13.1195L9.7531 5.48975Z",
				fill: "inherit"
			}))
		},
		"./src/reddit/icons/svgs/Nsfw/index.tsx": function(e, t, a) {
			"use strict";
			var r = a("./node_modules/react/index.js"),
				n = a.n(r);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 40 40",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.title && n.a.createElement("title", null, e.title), n.a.createElement("g", null, n.a.createElement("path", {
				fill: "inherit",
				d: "M38.5,16.5l-15-15c-2-2-5.1-2-7.1,0l-15,15c-2,2-2,5.1,0,7.1l15,15c2,2,5.1,2,7.1,0l15-15 C40.5,21.6,40.5,18.4,38.5,16.5z M17.7,8.3C17.7,7,18.7,6,20,6s2.3,1,2.3,2.3v14.3c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3V8.3z M20,33.7c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1s3.1,1.4,3.1,3.1C23.1,32.4,21.7,33.7,20,33.7z"
			})))
		},
		"./src/reddit/icons/svgs/PremiumCircle/index.tsx": function(e, t, a) {
			"use strict";
			var r = a("./node_modules/react/index.js"),
				n = a.n(r);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("rect", {
				width: "20",
				height: "20",
				rx: "10",
				fill: "url(#gradient)"
			}), n.a.createElement("path", {
				d: "M12.121 13.471c-1.007.146-1.73.445-2.121.643v-3.068a1.2 1.2 0 00-1.2-1.2H6.53c.027-.292.046-.61.046-.978 0-1.015-.294-1.78-.53-2.233l.834-.834H10v2.845a1.2 1.2 0 001.2 1.2h2.27c.036.402.086.749.132 1.045.058.38.109.706.109 1.047 0 .627-.497 1.375-1.59 1.533zm3.017-7.35l-1.345-1.345a.6.6 0 00-.425-.175H6.632a.6.6 0 00-.425.175L4.862 6.122a.6.6 0 00-.042.802c.006.006.556.72.556 1.944 0 .783-.087 1.344-.164 1.84-.064.41-.124.797-.124 1.23 0 1.163.9 2.471 2.619 2.72 1.251.183 1.952.638 1.956.64a.61.61 0 00.67.002c.007-.004.709-.46 1.96-.642 1.719-.249 2.618-1.557 2.618-2.72 0-.433-.06-.82-.124-1.23a11.026 11.026 0 01-.163-1.84c0-1.22.536-1.919.556-1.944a.6.6 0 00-.042-.802z",
				fill: "#fff"
			}), n.a.createElement("defs", null, n.a.createElement("linearGradient", {
				id: "gradient",
				x1: "0",
				y1: "20",
				x2: "20.021",
				y2: "19.979",
				gradientUnits: "userSpaceOnUse"
			}, n.a.createElement("stop", {
				stopColor: "#EC0623"
			}), n.a.createElement("stop", {
				offset: "1",
				stopColor: "#FF8717"
			}))))
		},
		"./src/reddit/icons/svgs/Tag/index.tsx": function(e, t, a) {
			"use strict";
			var r = a("./node_modules/react/index.js"),
				n = a.n(r);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				style: e.style,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				fill: "inherit",
				d: "M5.14293863,3.38188919 C5.75317178,3.99212234 5.75317178,4.98136473 5.14293863,5.59159788 C4.53270548,6.20183104 3.54346309,6.20183104 2.93322994,5.59159788 C2.32299679,4.98136473 2.32299679,3.99212234 2.93322994,3.38188919 C3.54346309,2.77165604 4.53270548,2.77165604 5.14293863,3.38188919 Z M1.01449569,2.94595786 L1,9.03662212 C1.00035355,9.55457784 1.19162594,10.0654625 1.55790725,10.4317438 L9.89929239,18.7731289 C10.6622606,19.5360972 11.8989904,19.5360972 12.661605,18.7734825 L18.7381272,12.6969604 C19.5007418,11.9343457 19.5007418,10.697616 18.7377736,9.93464773 L10.3963885,1.59326259 C10.0301071,1.22698128 9.54786032,1.00707107 9.02955105,1.00707107 L2.96045355,1 C1.8814086,1 1.01414214,1.86726647 1.01449569,2.94595786 Z"
			})))
		},
		"./src/reddit/icons/svgs/Unban/index.tsx": function(e, t, a) {
			"use strict";
			var r = a("./node_modules/react/index.js"),
				n = a.n(r);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 16",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M8,6.77247619 L8,6.27380952 L7.5072,6.27380952 L8,6.77247619 Z M7,5.76057143 L7,0.80952381 L11,0.80952381 L11,6.27380952 L10,6.27380952 L10,8.79628571 L15.9072,14.7738095 L15.2,15.4894286 L1,1.12038095 L1.7072,0.404761905 L3,1.71295238 L3,1.00178571 C3,0.44847619 3.4432,0 3.99,0 L4.01,0 C4.5568,0 5,0.44847619 5,1.00178571 L5,3.7367619 L5.8,4.54628571 L5.8,0.80952381 C5.8,0.585690476 5.9792,0.404761905 6.2,0.404761905 C6.4208,0.404761905 6.6,0.585690476 6.6,0.80952381 L6.6,5.35580952 L7,5.76057143 Z M8.2,8.9047619 L10.2,10.9285714 L10.2,14.2706905 C10.2,14.824 9.7568,15.2724762 9.21,15.2724762 L9.19,15.2724762 C8.6432,15.2724762 8.2,14.824 8.2,14.2706905 L8.2,8.9047619 Z M5.8,6.47619048 L6.284,6.96595238 C6.2568,6.97161905 6.2288,6.97485714 6.2,6.97485714 C5.9792,6.97485714 5.8,6.79392857 5.8,6.57009524 L5.8,6.47619048 Z M12.2,0.404761905 C12.4208,0.404761905 12.6,0.586095238 12.6,0.80952381 L12.6,6.67857143 C12.6,6.902 12.4208,7.08333333 12.2,7.08333333 C11.9792,7.08333333 11.8,6.902 11.8,6.67857143 L11.8,0.80952381 C11.8,0.586095238 11.9792,0.404761905 12.2,0.404761905 Z M14.01,0 C14.5568,0 15,0.44847619 15,1.00178571 L15,6.08154762 C15,6.63485714 14.5568,7.08333333 14.01,7.08333333 L13.99,7.08333333 C13.4432,7.08333333 13,6.63485714 13,6.08154762 L13,1.00178571 C13,0.44847619 13.4432,0 13.99,0 L14.01,0 Z M3,4.04761905 L5,6.07142857 L5,6.37783333 C5,6.93114286 4.5568,7.37961905 4.01,7.37961905 L3.99,7.37961905 C3.4432,7.37961905 3,6.93114286 3,6.37783333 L3,4.04761905 Z"
			})))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconTopAwardersModal.c78a5ef297fe2efcc789.js.map