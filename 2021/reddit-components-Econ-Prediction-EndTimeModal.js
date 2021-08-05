// https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction-EndTimeModal.9aa308d70984bcca85a9.js
// Retrieved at 8/5/2021, 5:30:08 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Econ-Prediction-EndTimeModal"], {
		"./node_modules/lodash/_baseClamp.js": function(e, t) {
			e.exports = function(e, t, n) {
				return e == e && (void 0 !== n && (e = e <= n ? e : n), void 0 !== t && (e = e >= t ? e : t)), e
			}
		},
		"./node_modules/lodash/_baseRange.js": function(e, t) {
			var n = Math.ceil,
				o = Math.max;
			e.exports = function(e, t, r, i) {
				for (var s = -1, a = o(n((t - e) / (r || 1)), 0), d = Array(a); a--;) d[i ? a : ++s] = e, e += r;
				return d
			}
		},
		"./node_modules/lodash/_createRange.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_baseRange.js"),
				r = n("./node_modules/lodash/_isIterateeCall.js"),
				i = n("./node_modules/lodash/toFinite.js");
			e.exports = function(e) {
				return function(t, n, s) {
					return s && "number" != typeof s && r(t, n, s) && (n = s = void 0), t = i(t), void 0 === n ? (n = t, t = 0) : n = i(n), s = void 0 === s ? t < n ? 1 : -1 : i(s), o(t, n, s, e)
				}
			}
		},
		"./node_modules/lodash/clamp.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_baseClamp.js"),
				r = n("./node_modules/lodash/toNumber.js");
			e.exports = function(e, t, n) {
				return void 0 === n && (n = t, t = void 0), void 0 !== n && (n = (n = r(n)) == n ? n : 0), void 0 !== t && (t = (t = r(t)) == t ? t : 0), o(r(e), t, n)
			}
		},
		"./node_modules/lodash/range.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_createRange.js")();
			e.exports = o
		},
		"./node_modules/uuid/index.js": function(e, t, n) {
			var o = n("./node_modules/uuid/v1.js"),
				r = n("./node_modules/uuid/v4.js"),
				i = r;
			i.v1 = o, i.v4 = r, e.exports = i
		},
		"./node_modules/uuid/v1.js": function(e, t, n) {
			var o, r, i = n("./node_modules/uuid/lib/rng-browser.js"),
				s = n("./node_modules/uuid/lib/bytesToUuid.js"),
				a = 0,
				d = 0;
			e.exports = function(e, t, n) {
				var c = t && n || 0,
					u = t || [],
					l = (e = e || {}).node || o,
					p = void 0 !== e.clockseq ? e.clockseq : r;
				if (null == l || null == p) {
					var m = i();
					null == l && (l = o = [1 | m[0], m[1], m[2], m[3], m[4], m[5]]), null == p && (p = r = 16383 & (m[6] << 8 | m[7]))
				}
				var b = void 0 !== e.msecs ? e.msecs : (new Date).getTime(),
					h = void 0 !== e.nsecs ? e.nsecs : d + 1,
					f = b - a + (h - d) / 1e4;
				if (f < 0 && void 0 === e.clockseq && (p = p + 1 & 16383), (f < 0 || b > a) && void 0 === e.nsecs && (h = 0), h >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
				a = b, d = h, r = p;
				var C = (1e4 * (268435455 & (b += 122192928e5)) + h) % 4294967296;
				u[c++] = C >>> 24 & 255, u[c++] = C >>> 16 & 255, u[c++] = C >>> 8 & 255, u[c++] = 255 & C;
				var j = b / 4294967296 * 1e4 & 268435455;
				u[c++] = j >>> 8 & 255, u[c++] = 255 & j, u[c++] = j >>> 24 & 15 | 16, u[c++] = j >>> 16 & 255, u[c++] = p >>> 8 | 128, u[c++] = 255 & p;
				for (var v = 0; v < 6; ++v) u[c + v] = l[v];
				return t || s(u)
			}
		},
		"./src/reddit/actions/economics/predictions/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "h", (function() {
				return E
			})), n.d(t, "l", (function() {
				return _
			})), n.d(t, "k", (function() {
				return y
			})), n.d(t, "i", (function() {
				return D
			})), n.d(t, "b", (function() {
				return S
			})), n.d(t, "n", (function() {
				return M
			})), n.d(t, "o", (function() {
				return N
			})), n.d(t, "e", (function() {
				return L
			})), n.d(t, "a", (function() {
				return G
			})), n.d(t, "p", (function() {
				return Q
			})), n.d(t, "j", (function() {
				return R
			})), n.d(t, "f", (function() {
				return B
			})), n.d(t, "g", (function() {
				return q
			})), n.d(t, "m", (function() {
				return U
			})), n.d(t, "c", (function() {
				return J
			})), n.d(t, "d", (function() {
				return H
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/uuid/index.js"),
				i = n.n(r),
				s = n("./src/lib/initializeClient/installReducer.ts"),
				a = n("./src/reddit/reducers/features/predictions/index.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/models/Toast/index.ts"),
				u = n("./src/lib/makeActionCreator/index.ts"),
				l = n("./src/lib/makeRequest/index.ts"),
				p = n("./src/reddit/endpoints/economics/predictions.ts"),
				m = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				b = n("./src/reddit/models/Prediction/index.ts"),
				h = n("./src/reddit/selectors/experiments/econ/index.ts"),
				f = n("./src/reddit/selectors/subreddit.ts"),
				C = n("./src/reddit/selectors/user.ts"),
				j = n("./src/reddit/selectors/features/predictions/creation/index.ts"),
				v = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				O = n("./src/reddit/actions/economics/predictions/constants.ts");
			Object(s.a)({
				features: {
					predictions: a.a
				}
			});
			const g = Object(u.a)(O.e),
				x = Object(u.a)(O.i),
				I = Object(u.a)(O.l),
				P = Object(u.a)(O.h),
				k = Object(u.a)(O.b),
				E = (e, t, n, o) => async (r, i, {
					gqlContext: s
				}) => {
					const a = Object(C.J)(i()),
						d = await Object(p.i)(s(), {
							subredditId: e,
							period: t,
							top: n,
							includeCurrentRank: a,
							tournamentId: o
						});
					if (d.error || !d.ok) throw new Error("Failed to fetch subreddit top predictors");
					const {
						subredditInfoById: c
					} = d.body.data;
					if (!c || !c.predictionWinners) throw new Error("Subreddit has no prediction winners");
					const {
						predictionWinners: u
					} = c, l = {
						subredditId: e,
						...u
					};
					return r(g(l)), l
				}, _ = ({
					coinPackageId: e,
					optionId: t,
					postId: n,
					price: o
				}) => async (r, i, {
					gqlContext: s
				}) => {
					const a = await Object(p.m)(s(), {
						coinPackageId: e,
						optionId: t,
						postId: n,
						price: o
					});
					return r(x({
						pollId: n,
						prediction: a,
						price: o
					})), a
				}, y = ({
					optionId: e,
					postId: t
				}) => async (n, o, {
					gqlContext: r
				}) => {
					const i = await Object(p.k)(r(), {
							optionId: e,
							postId: t
						}),
						{
							resolvePrediction: s
						} = i.body.data;
					if (!(null == s ? void 0 : s.poll)) throw new Error("Failed to resolve prediction");
					return n(P({
						pollId: t,
						prediction: s.poll
					})), s.poll
				}, w = Object(u.a)(O.c), T = Object(u.a)(O.d), F = Object(u.a)(O.g), D = e => async (t, n, {
					gqlContext: o
				}) => {
					const r = n(),
						i = Object(f.D)(r, e),
						s = Object(v.j)(r, {
							subredditId: i
						}),
						a = Object(h.k)(r);
					if (s) return Object(v.f)(r, {
						subredditId: i
					});
					t(w({
						subredditId: i
					}));
					const d = await Object(p.j)(o(), {
						subredditName: e,
						isLatestOnly: !0,
						isIncludingPredictions: !0,
						isIncludingParticipants: !0,
						isIncludingCancelledPredictions: a
					});
					if (!Object(l.c)(d) || d.error) throw new Error("Failed to fetch tournaments");
					const {
						predictionTournaments: c
					} = d.body.data.subredditInfoByName;
					if (!c) return [];
					const u = c.map(e => {
							var t, n;
							const o = null !== (n = null === (t = e.predictionPosts) || void 0 === t ? void 0 : t.map(e => {
								const t = Object(m.e)(e),
									n = t.pollData;
								return {
									...t,
									pollData: n
								}
							})) && void 0 !== n ? n : [];
							return {
								...e,
								predictionPosts: o
							}
						}),
						b = u.reduce((e, t) => (t.predictionPosts.length && t.predictionPosts.forEach(t => {
							e[t.id] = t
						}), e), {});
					return t(T({
						subredditId: i,
						tournaments: u
					})), t(F({
						posts: b,
						meta: r.meta
					})), u
				}, S = Object(u.a)(O.a), M = Object(u.a)(O.j), N = Object(u.a)(O.k), L = ({
					subredditId: e
				}) => async (t, n, {
					gqlContext: o
				}) => {
					const r = n(),
						i = Object(j.b)(r),
						s = Object(h.a)(r);
					if (!i) throw new Error("Failed to create tournament, no prediction drafts attached");
					const a = await Object(p.e)(o(), {
							name: "Predictions Tournament",
							isStartImmediately: !0,
							subredditId: e,
							predictionDrafts: i,
							currency: s ? b.a.Coins : b.a.Tokens
						}),
						{
							createPredictionTournament: d
						} = a.body.data;
					if (!(null == d ? void 0 : d.tournament)) throw new Error("Failed to resolve prediction");
					const {
						tournament: c
					} = d;
					return t(T({
						subredditId: e,
						tournaments: [c]
					})), c
				}, G = (e, t) => async (n, o, {
					gqlContext: r
				}) => {
					var s;
					const a = Object(j.b)(o());
					if (!a) throw new Error("Failed to create prediction post, no prediction drafts attached");
					const d = await Object(p.b)(r(), {
							tournamentId: e,
							isStartImmediately: !0,
							iKey: `add-dfts-${i.a.v4()}`,
							subredditId: t,
							predictionDrafts: a
						}),
						{
							addPredictionDrafts: c
						} = d.body.data;
					if (null === (s = c.errors) || void 0 === s ? void 0 : s.length) throw new Error(c.errors[0].message);
					if (!(null == c ? void 0 : c.tournament)) throw new Error("Failed to create prediction");
					return c.tournament
				}, A = Object(u.a)(O.m), Q = (e, t, n) => async (t, o, {
					gqlContext: r
				}) => {
					const i = await Object(p.l)(r(), {
							tournamentId: e,
							name: n
						}),
						{
							updatePredictionTournament: s
						} = i.body.data;
					if (!s.tournament) throw new Error("Failed to update prediction name");
					return t(A(s.tournament)), s.tournament
				}, R = e => async (t, n, {
					gqlContext: o
				}) => {
					const r = await Object(p.f)(o(), {
							tournamentId: e
						}),
						{
							endPredictionTournament: i
						} = r.body.data;
					if (!i.tournament) throw new Error("Failed to update prediction name");
					return t(A(i.tournament)), i.tournament
				}, B = e => async (t, n, {
					gqlContext: o
				}) => {
					const r = await Object(p.g)(o(), {
						postId: e
					});
					if (!r.ok || r.error) throw new Error("Failed to fetch prediction chip packages");
					const {
						postInfoById: i
					} = r.body.data;
					if (!i.predictionChipPackages) throw new Error("Failed to fetch prediction chip packages");
					return i.predictionChipPackages
				}, q = e => async (t, n, {
					gqlContext: o
				}) => {
					const r = await Object(p.h)(o(), {
						tournamentId: e
					});
					if (!r.ok || r.error) throw new Error("Failed to fetch token balance");
					const {
						identity: i
					} = r.body.data;
					if (!i.hasOwnProperty("predictionTokens")) throw new Error("Failed to fetch token balance");
					return i.predictionTokens
				}, U = ({
					coinPackageId: e,
					selectedOptionId: t,
					price: n,
					pollId: o,
					tournamentId: r,
					tournamentPostId: i
				}) => async s => {
					const a = await s(_({
						coinPackageId: e,
						optionId: t,
						postId: o,
						price: n
					}));
					return s(I({
						predictionId: o,
						selectedOptionId: t,
						tournamentId: r,
						tournamentPostId: i
					})), a
				}, J = e => async (t, n, {
					gqlContext: r
				}) => {
					try {
						const n = await Object(p.c)(r(), {
							postId: e
						});
						t(k({
							postId: e,
							prediction: n
						}));
						const i = Object(d.e)(o.fbt._("Prediction has been cancelled", null, {
							hk: "3Bh9Fw"
						}), c.b.SuccessMod);
						t(Object(d.f)(i))
					} catch {
						const e = Object(d.e)(o.fbt._("Unable to cancel prediction", null, {
							hk: "2wkeKy"
						}), c.b.Error);
						t(Object(d.f)(e))
					}
				};

			function H(e, t) {
				return async (n, o, {
					gqlContext: r
				}) => {
					const i = await Object(p.d)(r(), {
						postId: e,
						...t
					});
					return n(k({
						postId: e,
						prediction: i
					})), i
				}
			}
		},
		"./src/reddit/actions/economics/predictions/modTools.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "e", (function() {
				return b
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "d", (function() {
				return f
			}));
			var o = n("./src/lib/initializeClient/installReducer.ts"),
				r = n("./src/reddit/actions/economics/predictions/index.ts"),
				i = n("./src/reddit/reducers/features/predictions/index.ts"),
				s = n("./src/reddit/actions/modal.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/reddit/constants/modals.ts"),
				c = n("./src/reddit/models/Toast/index.ts");
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			Object(o.a)({
				features: {
					predictions: i.a
				}
			});
			const l = e => e(Object(a.f)({
					duration: a.a,
					kind: c.b.Error,
					text: u._("Error: Failed to update prediction end time, please try again later", null, {
						hk: "MkaNA"
					})
				})),
				p = ({
					postId: e,
					closedAt: t
				}) => async n => {
					if (e && t && !isNaN(t.getTime())) try {
						await n(Object(r.d)(e, {
							closedAt: t
						})), n(Object(a.f)({
							duration: a.a,
							kind: c.b.SuccessCommunity,
							text: u._("Updated", null, {
								hk: "4cncaA"
							})
						}))
					} catch {
						l(n)
					} else l(n)
				};

			function m(e, t) {
				return async n => {
					try {
						await n(Object(r.d)(e, {
							resolvedOptionId: t
						}));
						const o = Object(a.e)(u._("Outcome changed", null, {
							hk: "Io0na"
						}), c.b.SuccessMod);
						n(Object(a.f)(o))
					} catch {
						const e = Object(a.e)(u._("Oops! Something went wrong. Please note that the outcome can be changed just once per Prediction", null, {
							hk: "4B5dNf"
						}), c.b.Error);
						n(Object(a.f)(e))
					}
				}
			}
			const b = e => Object(s.h)(d.a.ECON_PREDICTIONS_CHANGE_END_TIME, {
					postId: e
				}),
				h = e => Object(s.h)(d.a.ECON_PREDICTIONS_CANCEL_PREDICTION, {
					postId: e
				}),
				f = e => Object(s.h)(d.a.ECON_PREDICTIONS_CHANGE_OUTCOME, {
					postId: e
				})
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
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				s = n("./src/higherOrderComponents/asModal/index.tsx"),
				a = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				d = n("./src/reddit/controls/TextButton/index.tsx"),
				c = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				u = n("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				l = n.n(u);
			const p = e => e.preventDefault();
			t.a = Object(s.a)(e => i.a.createElement(a.d, null, i.a.createElement(a.h, null, i.a.createElement(c.a, null, i.a.createElement(a.p, null, e.headerText || o.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), i.a.createElement(d.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, i.a.createElement(a.b, null)))), i.a.createElement(a.k, null, i.a.createElement(a.o, {
				className: l.a.ModalText
			}, e.modalText)), i.a.createElement(a.f, null, !e.hideCancelButton && i.a.createElement(a.a, {
				className: l.a.buttonWidth,
				onMouseDown: p,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || o.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), i.a.createElement(a.t, {
				className: l.a.buttonWidth,
				onMouseDown: p,
				onClick: t => {
					e.onConfirm(), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.actionText))))
		},
		"./src/reddit/components/Econ/Prediction/EndTimeModal/Body.m.less": function(e, t, n) {
			e.exports = {
				title: "_1SLCdGcAO-LuO01C6c5s7P",
				timeInput: "auRUrIM3a5etnBgIUwDBO",
				timeZone: "_25fb1OkN4YvP0tTPRsNGMn"
			}
		},
		"./src/reddit/components/Econ/Prediction/EndTimeModal/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				s = n("./src/reddit/actions/economics/predictions/modTools.ts"),
				a = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				c = n("./src/reddit/constants/modals.ts"),
				u = n("./src/reddit/helpers/trackers/predictionsModTools.ts"),
				l = n("./src/reddit/hooks/useTracking.ts"),
				p = n("./src/reddit/selectors/posts.ts"),
				m = n("./src/reddit/components/PollCreator/EndDatePicker/useEndDatePicker.tsx"),
				b = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/DateInput/index.tsx"),
				h = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/TimeInput/index.tsx"),
				f = n("./src/reddit/components/Econ/Prediction/EndTimeModal/Body.m.less"),
				C = n.n(f);
			const {
				fbt: j
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var v = ({
				timestamp: e,
				onTimestampChange: t
			}) => {
				const {
					date: n,
					time: o,
					timeZoneAbbr: i,
					onChange: s,
					getMinDate: a,
					getMaxDate: d
				} = Object(m.a)(e, t);
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("span", {
					className: C.a.title
				}, j._("End time", null, {
					hk: "3D4Q1o"
				})), r.a.createElement(b.a, {
					"aria-label": j._("Prediction end date", null, {
						hk: "4zYv4T"
					}),
					onChange: e => s({
						date: e
					}),
					min: a(),
					max: d(),
					value: n,
					required: !0
				}), r.a.createElement(h.a, {
					className: C.a.timeInput,
					"aria-label": j._("Prediction end time", null, {
						hk: "1idFl4"
					}),
					onChange: e => s({
						time: e
					}),
					value: o,
					required: !0
				}), i)
			};
			const {
				fbt: O
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.default = () => {
				var e;
				const t = Object(i.d)(),
					n = Object(l.a)(),
					m = Object(i.e)(p.Q),
					b = null === (e = null == m ? void 0 : m.pollData) || void 0 === e ? void 0 : e.votingEndTimestamp,
					h = b ? new Date(b) : null,
					[f, C] = Object(o.useState)(h);
				if (!m) return null;
				const j = () => t(Object(a.g)(c.a.ECON_PREDICTIONS_CHANGE_END_TIME));
				return r.a.createElement(d.a, {
					withOverlay: !0,
					onOverlayClick: j,
					toggleModal: j,
					onConfirm: () => {
						n(Object(u.b)(m.id)), t(Object(s.a)({
							postId: null == m ? void 0 : m.id,
							closedAt: f
						})), j()
					},
					actionText: O._("Update", null, {
						hk: "3HPLX5"
					}),
					headerText: O._("Prediction Ends On", null, {
						hk: "CTEcM"
					}),
					modalText: f ? r.a.createElement(v, {
						timestamp: f,
						onTimestampChange: C
					}) : "Something went wrong. Please try again."
				})
			}
		},
		"./src/reddit/components/FocusableContent/index.m.less": function(e, t, n) {
			e.exports = {
				FocusableContent: "_3MknXZVbkWU8JL9XGlzASi",
				focusableContent: "_3MknXZVbkWU8JL9XGlzASi",
				isFocused: "_3F2J0fSnCI3ZvF_tBSaV0s",
				noBorder: "_1CpUVAt2tGEwaaBV3nZNJs"
			}
		},
		"./src/reddit/components/FocusableContent/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./src/lib/classNames/index.ts"),
				s = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/FocusableContent/index.m.less"),
				d = n.n(a);
			t.a = s.a.wrapped(e => r.a.createElement("div", {
				className: Object(i.a)(e.className, {
					[d.a.isFocused]: e.isFocused,
					[d.a.noBorder]: e.noBorder
				})
			}, e.children), "FocusableContent", d.a)
		},
		"./src/reddit/components/PollCreator/EndDatePicker/useEndDatePicker.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./src/lib/timezone/index.ts"),
				r = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/utils.ts"),
				i = n("./src/reddit/components/PollCreator/EndDatePicker/utils.ts");

			function s(e, t) {
				var n;
				const {
					date: s,
					time: a
				} = Object(i.a)(e), d = Object(o.b)(), c = d ? Object(o.d)(d) : null;
				return {
					date: s,
					time: a,
					timeZoneAbbr: null !== (n = null == c ? void 0 : c.abbreviation) && void 0 !== n ? n : "",
					onChange: e => {
						Object.values(e).every(e => e.length) && t(Object(i.d)({
							date: s,
							time: a,
							...e
						}))
					},
					getMinDate: i.c,
					getMaxDate: r.a
				}
			}
		},
		"./src/reddit/components/PollCreator/EndDatePicker/utils.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return i
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "d", (function() {
				return d
			}));
			var o = n("./src/lib/timezone/index.ts"),
				r = n("./src/reddit/helpers/scheduledPosts/index.ts");
			const i = () => {
					const e = new Date,
						[t] = Object(r.i)(Object(o.g)(e));
					return t
				},
				s = () => {
					const e = new Date;
					return e.setDate(e.getDate() + 3), e
				},
				a = e => {
					const [t, n] = Object(r.i)(Object(o.g)(e));
					return {
						date: t,
						time: n
					}
				},
				d = ({
					date: e,
					time: t
				}) => new Date(`${e}T${t}`)
		},
		"./src/reddit/components/PostCreationForm/SchedulePickerModal/DateInput/FallbackDateInput/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_3A53iTDZ6H1L--Ky3qNCTO",
				container: "_3A53iTDZ6H1L--Ky3qNCTO",
				Select: "_2ryUqzbCnNhx8nbFXg9-c0",
				select: "_2ryUqzbCnNhx8nbFXg9-c0",
				Delimiter: "_1X2oFpzvpth9SVe2-xCR9D",
				delimiter: "_1X2oFpzvpth9SVe2-xCR9D"
			}
		},
		"./src/reddit/components/PostCreationForm/SchedulePickerModal/DateInput/index.m.less": function(e, t, n) {
			e.exports = {
				Input: "_1Css-vhkiry0RZJBBPrnRI",
				input: "_1Css-vhkiry0RZJBBPrnRI"
			}
		},
		"./src/reddit/components/PostCreationForm/SchedulePickerModal/DateInput/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return k
			}));
			var o = n("./node_modules/lodash/once.js"),
				r = n.n(o),
				i = n("./node_modules/react/index.js"),
				s = n.n(i),
				a = n("./node_modules/lodash/range.js"),
				d = n.n(a),
				c = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/DateInput/FallbackDateInput/index.m.less"),
				u = n.n(c),
				l = n("./src/lib/lessComponent.tsx");
			const p = l.a.div("Container", u.a),
				m = l.a.select("Select", u.a),
				b = l.a.span("Delimiter", u.a),
				h = 2018,
				f = e => {
					const t = new Date;
					return new Date(t.getFullYear(), e).toLocaleDateString([], {
						month: "short"
					})
				},
				C = e => {
					const [t, n, o] = e.split("-").map(Number);
					return {
						year: t,
						month: n - 1,
						day: o
					}
				};
			class j extends s.a.PureComponent {
				constructor() {
					super(...arguments), this.onChange = e => {
						const t = {
								...C(this.props.value),
								...e
							},
							{
								year: n,
								month: o,
								day: r
							} = t,
							i = new Date(Date.UTC(n, o, r)).toISOString().slice(0, 10);
						this.props.onChange(i)
					}, this.onChangeYear = e => {
						const t = +e.target.value;
						this.onChange({
							year: t
						})
					}, this.onChangeMonth = e => {
						const t = +e.target.value;
						this.onChange({
							month: t
						})
					}, this.onChangeDay = e => {
						const t = +e.target.value;
						this.onChange({
							day: t
						})
					}
				}
				render() {
					const {
						year: e,
						month: t,
						day: n
					} = C(this.props.value);
					return s.a.createElement(p, {
						className: this.props.className
					}, s.a.createElement(m, {
						onChange: this.onChangeMonth,
						value: t
					}, d()(12).map(e => s.a.createElement("option", {
						key: e,
						value: e
					}, f(e)))), s.a.createElement(b, null, "/"), s.a.createElement(m, {
						onChange: this.onChangeDay,
						value: n
					}, d()(1, 32).map(e => s.a.createElement("option", {
						key: e,
						value: e
					}, ("0" + e).slice(-2)))), s.a.createElement(b, null, "/"), s.a.createElement(m, {
						onChange: this.onChangeYear,
						value: e
					}, d()(h, h + 10).map(e => s.a.createElement("option", {
						key: e,
						value: e
					}, e))))
				}
			}
			var v = j,
				O = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/DateInput/index.m.less"),
				g = n.n(O);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const I = r()(() => {
					const e = document.createElement("input");
					return e.setAttribute("type", "date"), e.setAttribute("value", "not-a-date"), "not-a-date" !== e.value
				}),
				P = l.a.input("Input", g.a);

			function k(e) {
				return I() ? s.a.createElement(P, x({
					type: "date"
				}, e, {
					onChange: t => e.onChange(t.target.value)
				})) : s.a.createElement(v, e)
			}
		},
		"./src/reddit/components/PostCreationForm/SchedulePickerModal/TimeInput/FallbackTimeInput/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "Q-u1MdpyF-DbsLmmseQmg",
				container: "Q-u1MdpyF-DbsLmmseQmg",
				Input: "_2UYlo-ZbVNGY329O9jwCzC",
				input: "_2UYlo-ZbVNGY329O9jwCzC",
				Delimiter: "_2a_r5Jp8FH3k8flNGKLy5f",
				delimiter: "_2a_r5Jp8FH3k8flNGKLy5f"
			}
		},
		"./src/reddit/components/PostCreationForm/SchedulePickerModal/TimeInput/index.m.less": function(e, t, n) {
			e.exports = {
				TimeInput: "gRgwdQKTQf9yT3db3ACAy",
				timeInput: "gRgwdQKTQf9yT3db3ACAy"
			}
		},
		"./src/reddit/components/PostCreationForm/SchedulePickerModal/TimeInput/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return k
			}));
			var o = n("./node_modules/lodash/once.js"),
				r = n.n(o),
				i = n("./node_modules/react/index.js"),
				s = n.n(i),
				a = n("./node_modules/lodash/clamp.js"),
				d = n.n(a),
				c = n("./src/reddit/components/FocusableContent/index.tsx"),
				u = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/TimeInput/FallbackTimeInput/index.m.less"),
				l = n.n(u),
				p = n("./src/lib/lessComponent.tsx");
			const m = p.a.wrapped(c.a, "Container", l.a),
				b = p.a.input("Input", l.a),
				h = p.a.span("Delimiter", l.a),
				f = e => ("0" + e).slice(-2),
				C = (e, t) => {
					const n = +e.slice(-2);
					if (Number.isInteger(n)) return n > t ? 0 : n
				};
			class j extends s.a.PureComponent {
				constructor(e) {
					super(e), this.callOnChange = () => {
						let e = d()(+this.state.hour, 0, 24);
						const t = d()(+this.state.minute, 0, 59);
						24 === e && t > 0 && (e = 0), this.setState({
							hour: e,
							minute: t
						});
						const n = `${f(e)}:${f(t)}`;
						this.props.onChange(n)
					}, this.onChangeHour = e => {
						const t = C(e.target.value, 24);
						void 0 !== t && this.setState({
							hour: t
						}, this.callOnChange)
					}, this.onChangeMinute = e => {
						const t = C(e.target.value, 59);
						void 0 !== t && this.setState({
							minute: t
						}, this.callOnChange)
					}, this.onHourInputBlur = () => this.setState({
						isHourInputFocused: !1
					}), this.onHourInputFocus = () => this.setState({
						isHourInputFocused: !0
					}), this.onMinuteInputBlur = () => this.setState({
						isMinuteInputFocused: !1
					}), this.onMinuteInputFocus = () => this.setState({
						isMinuteInputFocused: !0
					});
					const [t, n] = e.value.split(":").map(Number);
					this.state = {
						hour: t,
						minute: n,
						isHourInputFocused: !1,
						isMinuteInputFocused: !1
					}
				}
				componentWillReceiveProps(e) {
					const [t, n] = e.value.split(":").map(Number);
					this.setState({
						hour: t,
						minute: n
					})
				}
				render() {
					const e = this.state.isHourInputFocused || this.state.isMinuteInputFocused;
					return s.a.createElement(m, {
						className: this.props.className,
						isFocused: e
					}, s.a.createElement(b, {
						type: "number",
						onChange: this.onChangeHour,
						onFocus: this.onHourInputFocus,
						onBlur: this.onHourInputBlur,
						value: f(this.state.hour)
					}), s.a.createElement(h, null, ":"), s.a.createElement(b, {
						type: "number",
						onChange: this.onChangeMinute,
						onFocus: this.onMinuteInputFocus,
						onBlur: this.onMinuteInputBlur,
						value: f(this.state.minute)
					}))
				}
			}
			var v = j,
				O = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/TimeInput/index.m.less"),
				g = n.n(O);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const I = r()(() => {
					const e = document.createElement("input");
					return e.setAttribute("type", "time"), e.setAttribute("value", "not-a-time"), "not-a-time" !== e.value
				}),
				P = p.a.input("TimeInput", g.a);

			function k(e) {
				return I() ? s.a.createElement(P, x({
					type: "time"
				}, e, {
					onChange: t => e.onChange(t.target.value)
				})) : s.a.createElement(v, e)
			}
		},
		"./src/reddit/components/PostCreationForm/SchedulePickerModal/utils.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var o = n("./src/lib/timezone/index.ts"),
				r = n("./src/reddit/helpers/scheduledPosts/index.ts");
			const i = () => {
				const e = new Date;
				e.setFullYear(e.getFullYear() + 1);
				const [t] = Object(r.i)(Object(o.g)(e));
				return t
			}
		},
		"./src/reddit/endpoints/economics/predictions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "m", (function() {
				return C
			})), n.d(t, "k", (function() {
				return j
			})), n.d(t, "a", (function() {
				return v
			})), n.d(t, "i", (function() {
				return O
			})), n.d(t, "e", (function() {
				return g
			})), n.d(t, "j", (function() {
				return x
			})), n.d(t, "b", (function() {
				return I
			})), n.d(t, "l", (function() {
				return P
			})), n.d(t, "f", (function() {
				return k
			})), n.d(t, "g", (function() {
				return E
			})), n.d(t, "h", (function() {
				return _
			})), n.d(t, "d", (function() {
				return y
			})), n.d(t, "c", (function() {
				return w
			}));
			var o = n("./src/lib/makeGqlRequest/index.ts"),
				r = n("./src/lib/makeRequest/index.ts"),
				i = n("./src/redditGQL/operations/AddPredictionDrafts.json"),
				s = n("./src/redditGQL/operations/CancelPrediction.json"),
				a = n("./src/redditGQL/operations/ChangePrediction.json"),
				d = n("./src/redditGQL/operations/CreatePredictionTournament.json"),
				c = n("./src/redditGQL/operations/EndPredictionTournament.json"),
				u = n("./src/redditGQL/operations/GetPredictionChipPackages.json"),
				l = n("./src/redditGQL/operations/GetPredictionToken.json"),
				p = n("./src/redditGQL/operations/GetTournaments.json"),
				m = n("./src/redditGQL/operations/ResolvePrediction.json"),
				b = n("./src/redditGQL/operations/SubredditTopPredictors.json"),
				h = n("./src/redditGQL/operations/UpdatePredictionTournament.json"),
				f = n("./src/redditGQL/operations/VotePrediction.json");
			const C = async (e, {
				postId: t,
				optionId: n,
				coinPackageId: i,
				price: s
			}) => {
				var a;
				const d = await Object(o.a)(e, {
					...f,
					variables: {
						input: {
							postId: t,
							optionId: n,
							coinPackageId: i,
							price: s
						}
					}
				});
				if (!Object(r.c)(d) || d.error || !(null === (a = d.body.data.votePrediction) || void 0 === a ? void 0 : a.ok)) throw new Error("Failed to make prediction");
				return d.body.data.votePrediction.poll
			}, j = (e, {
				postId: t,
				optionId: n
			}) => Object(o.a)(e, {
				...m,
				variables: {
					input: {
						postId: t,
						optionId: n
					}
				}
			});
			var v;
			! function(e) {
				e.AllTime = "ALL_TIME", e.Monthly = "MONTHLY"
			}(v || (v = {}));
			const O = (e, {
					subredditId: t,
					period: n,
					top: r,
					includeCurrentRank: i,
					tournamentId: s
				}) => Object(o.a)(e, {
					...b,
					variables: {
						subredditId: t,
						period: n,
						top: r,
						includeCurrentRank: i,
						tournamentId: s
					}
				}),
				g = (e, t) => Object(o.a)(e, {
					...d,
					variables: {
						input: t
					}
				}),
				x = (e, t) => Object(o.a)(e, {
					...p,
					variables: t
				}),
				I = (e, t) => Object(o.a)(e, {
					...i,
					variables: {
						input: t
					}
				}),
				P = (e, t) => Object(o.a)(e, {
					...h,
					variables: {
						input: t
					}
				}),
				k = (e, t) => Object(o.a)(e, {
					...c,
					variables: {
						input: t
					}
				}),
				E = (e, t) => Object(o.a)(e, {
					...u,
					variables: t
				}),
				_ = (e, t) => Object(o.a)(e, {
					...l,
					variables: t
				}),
				y = async (e, t) => {
					const n = await Object(o.a)(e, {
						...a,
						variables: {
							input: t
						}
					});
					if (!Object(r.c)(n) || !n.body.data.changePrediction.ok) throw new Error("Unable to update prediction");
					return n.body.data.changePrediction.poll
				}, w = async (e, {
					postId: t
				}) => {
					var n, i;
					const a = await Object(o.a)(e, {
						...s,
						variables: {
							input: {
								postId: t
							}
						}
					});
					if (!Object(r.c)(a) || !(null === (n = a.body.data.cancelPrediction) || void 0 === n ? void 0 : n.ok) || !(null === (i = a.body.data.cancelPrediction) || void 0 === i ? void 0 : i.poll)) throw new Error("Unable to cancel prediction");
					return a.body.data.cancelPrediction.poll
				}
		},
		"./src/reddit/helpers/trackers/predictionsModTools.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return s
			}));
			var o = n("./src/reddit/selectors/telemetry.ts");
			const r = (e, t) => ({
					...Object(o.defaults)(e),
					post: Object(o.post)(e, t),
					predictions: Object(o.predictions)(e, t),
					subreddit: Object(o.subreddit)(e)
				}),
				i = e => t => ({
					...r(t, e),
					source: "predictions",
					action: "click",
					noun: "edit_prediction_end_dt"
				}),
				s = e => t => ({
					...r(t, e),
					source: "edit_prediction_end_dt",
					action: "click",
					noun: "confirm"
				})
		},
		"./src/reddit/selectors/features/predictions/creation/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return a
			}));
			var o = n("./src/lib/initializeClient/installReducer.ts"),
				r = n("./src/reddit/reducers/features/predictions/index.ts"),
				i = n("./src/reddit/selectors/postCreations.ts");
			Object(o.a)({
				features: {
					predictions: r.a
				}
			});
			const s = e => {
					const t = (e => {
						var t, n;
						return null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.predictions) || void 0 === n ? void 0 : n.creation
					})(e);
					return (null == t ? void 0 : t.length) ? null == t ? void 0 : t.map(t => {
						const n = Object(i.cb)({
								...e,
								creations: {
									...e.creations,
									formData: t.formData,
									formState: t.formState
								}
							}, {}),
							o = t.formData.polls,
							r = o.options.map(e => ({
								text: e.text
							})),
							s = {};
						return n.document ? s.richText = JSON.stringify({
							document: n.document
						}) : n.markdown && (s.markdown = n.markdown), {
							title: n.title,
							isLiveChat: n.isChatPost,
							isNsfw: n.isNSFW,
							isSpoiler: n.isSpoiler,
							votingEndsAt: o.endDate.toISOString(),
							body: s,
							options: r
						}
					}) : []
				},
				a = e => {
					var t, n;
					return !!(null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.predictions) || void 0 === n ? void 0 : n.creation.length)
				}
		},
		"./src/redditGQL/operations/AddPredictionDrafts.json": function(e) {
			e.exports = JSON.parse('{"id":"096bfa098f49"}')
		},
		"./src/redditGQL/operations/CancelPrediction.json": function(e) {
			e.exports = JSON.parse('{"id":"3a0e9bd20bd7"}')
		},
		"./src/redditGQL/operations/ChangePrediction.json": function(e) {
			e.exports = JSON.parse('{"id":"6d3cdb387ed9"}')
		},
		"./src/redditGQL/operations/CreatePredictionTournament.json": function(e) {
			e.exports = JSON.parse('{"id":"8ce841e41b53"}')
		},
		"./src/redditGQL/operations/EndPredictionTournament.json": function(e) {
			e.exports = JSON.parse('{"id":"730629e10ec6"}')
		},
		"./src/redditGQL/operations/GetPredictionChipPackages.json": function(e) {
			e.exports = JSON.parse('{"id":"5ce83e513fa5"}')
		},
		"./src/redditGQL/operations/GetPredictionToken.json": function(e) {
			e.exports = JSON.parse('{"id":"26b911e67a5f"}')
		},
		"./src/redditGQL/operations/GetTournaments.json": function(e) {
			e.exports = JSON.parse('{"id":"ec9db4678a1a"}')
		},
		"./src/redditGQL/operations/ResolvePrediction.json": function(e) {
			e.exports = JSON.parse('{"id":"36bd638634e1"}')
		},
		"./src/redditGQL/operations/SubredditTopPredictors.json": function(e) {
			e.exports = JSON.parse('{"id":"3407d5f67207"}')
		},
		"./src/redditGQL/operations/UpdatePredictionTournament.json": function(e) {
			e.exports = JSON.parse('{"id":"a278e3cfb8bc"}')
		},
		"./src/redditGQL/operations/VotePrediction.json": function(e) {
			e.exports = JSON.parse('{"id":"7d092b4281c1"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction-EndTimeModal.9aa308d70984bcca85a9.js.map