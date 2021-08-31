// https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction-EndTimeModal.1acc07c18a91d684e725.js
// Retrieved at 8/31/2021, 6:10:10 PM by Reddit Dataminer v1.0.0
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
				var j = (1e4 * (268435455 & (b += 122192928e5)) + h) % 4294967296;
				u[c++] = j >>> 24 & 255, u[c++] = j >>> 16 & 255, u[c++] = j >>> 8 & 255, u[c++] = 255 & j;
				var C = b / 4294967296 * 1e4 & 268435455;
				u[c++] = C >>> 8 & 255, u[c++] = 255 & C, u[c++] = C >>> 24 & 15 | 16, u[c++] = C >>> 16 & 255, u[c++] = p >>> 8 | 128, u[c++] = 255 & p;
				for (var v = 0; v < 6; ++v) u[c + v] = l[v];
				return t || s(u)
			}
		},
		"./src/reddit/actions/economics/predictions/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return k
			})), n.d(t, "j", (function() {
				return w
			})), n.d(t, "n", (function() {
				return T
			})), n.d(t, "m", (function() {
				return D
			})), n.d(t, "k", (function() {
				return N
			})), n.d(t, "b", (function() {
				return L
			})), n.d(t, "q", (function() {
				return G
			})), n.d(t, "r", (function() {
				return A
			})), n.d(t, "g", (function() {
				return R
			})), n.d(t, "a", (function() {
				return Q
			})), n.d(t, "s", (function() {
				return U
			})), n.d(t, "l", (function() {
				return q
			})), n.d(t, "h", (function() {
				return H
			})), n.d(t, "i", (function() {
				return J
			})), n.d(t, "o", (function() {
				return z
			})), n.d(t, "p", (function() {
				return V
			})), n.d(t, "f", (function() {
				return Z
			})), n.d(t, "c", (function() {
				return Y
			})), n.d(t, "d", (function() {
				return K
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/uuid/index.js"),
				i = n.n(r),
				s = n("./src/lib/initializeClient/installReducer.ts"),
				a = n("./src/reddit/reducers/features/predictions/index.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/models/Toast/index.ts"),
				u = n("./src/lib/makeActionCreator/index.ts"),
				l = n("./src/reddit/endpoints/economics/predictions.ts"),
				p = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				m = n("./src/reddit/helpers/graphql/normalizePredictionTournamentFromGql/index.ts"),
				b = n("./src/redditGQL/types.ts"),
				h = n("./src/reddit/actions/login.ts"),
				f = n("./src/reddit/actions/modal.ts"),
				j = n("./src/reddit/constants/modals.ts"),
				C = n("./src/reddit/selectors/experiments/econ/index.ts"),
				v = n("./src/reddit/selectors/subreddit.ts"),
				O = n("./src/reddit/selectors/user.ts"),
				g = n("./src/reddit/selectors/features/predictions/creation/index.ts"),
				I = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				x = n("./src/reddit/actions/economics/predictions/constants.ts");
			Object(s.a)({
				features: {
					predictions: a.a
				}
			});
			const P = Object(u.a)(x.e),
				_ = Object(u.a)(x.i),
				E = Object(u.a)(x.l),
				y = Object(u.a)(x.h),
				k = Object(u.a)(x.b),
				w = (e, t, n, o) => async (r, i, {
					gqlContext: s
				}) => {
					const a = Object(O.K)(i()),
						d = await Object(l.j)(s(), {
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
					} = c, p = {
						subredditId: e,
						...u
					};
					return r(P(p)), p
				}, T = ({
					coinPackageId: e,
					optionId: t,
					postId: n,
					price: o
				}) => async (r, i, {
					gqlContext: s
				}) => {
					const a = await Object(l.n)(s(), {
						coinPackageId: e,
						optionId: t,
						postId: n,
						price: o
					});
					return r(_({
						pollId: n,
						prediction: a,
						price: o
					})), a
				}, D = ({
					optionId: e,
					postId: t
				}) => async (n, o, {
					gqlContext: r
				}) => {
					const i = await Object(l.l)(r(), {
							optionId: e,
							postId: t
						}),
						{
							resolvePrediction: s
						} = i.body.data;
					if (!(null == s ? void 0 : s.poll)) throw new Error("Failed to resolve prediction");
					return n(y({
						pollId: t,
						prediction: s.poll
					})), s.poll
				}, S = Object(u.a)(x.c), F = Object(u.a)(x.d), M = Object(u.a)(x.g), N = e => async (t, n, {
					gqlContext: o
				}) => {
					const r = n(),
						i = Object(v.B)(r, e),
						s = Object(I.j)(r, {
							subredditId: i
						}),
						a = Object(C.l)(r);
					if (s) return Object(I.f)(r, {
						subredditId: i
					});
					t(S({
						subredditId: i
					}));
					const d = await Object(l.k)(o(), {
							subredditName: e,
							isLatestOnly: !0,
							isIncludingPredictions: !0,
							isIncludingParticipants: !0,
							isIncludingCancelledPredictions: a
						}),
						c = {};
					d.forEach(e => {
						var t;
						(null === (t = e.predictionPosts) || void 0 === t ? void 0 : t.length) && e.predictionPosts.forEach(e => {
							e && (c[e.id] = Object(p.e)(e))
						})
					});
					const u = d.map(e => Object(m.a)(e));
					return t(F({
						subredditId: i,
						tournaments: u
					})), t(M({
						posts: c,
						meta: r.meta
					})), u
				}, L = Object(u.a)(x.a), G = Object(u.a)(x.j), A = Object(u.a)(x.k), R = ({
					subredditId: e
				}) => async (t, n, {
					gqlContext: o
				}) => {
					const r = n(),
						i = Object(g.b)(r),
						s = Object(C.a)(r);
					if (!i) throw new Error("Failed to create tournament, no prediction drafts attached");
					const a = await Object(l.f)(o(), {
							tournamentId: null,
							name: "Predictions Tournament",
							isStartImmediately: !0,
							subredditId: e,
							predictionDrafts: i,
							currency: s ? b.b.Coins : b.b.Tokens
						}),
						{
							createPredictionTournament: d
						} = a.body.data;
					if (!(null == d ? void 0 : d.tournament)) throw new Error("Failed to resolve prediction");
					const {
						tournament: c
					} = d;
					return t(F({
						subredditId: e,
						tournaments: [c]
					})), c
				}, Q = (e, t) => async (n, o, {
					gqlContext: r
				}) => {
					var s;
					const a = Object(g.b)(o());
					if (!a) throw new Error("Failed to create prediction post, no prediction drafts attached");
					const d = await Object(l.b)(r(), {
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
				}, B = Object(u.a)(x.m), U = (e, t, n) => async (t, o, {
					gqlContext: r
				}) => {
					const i = await Object(l.m)(r(), {
							tournamentId: e,
							name: n
						}),
						{
							updatePredictionTournament: s
						} = i.body.data;
					if (!s.tournament) throw new Error("Failed to update prediction name");
					return t(B(s.tournament)), s.tournament
				}, q = e => async (t, n, {
					gqlContext: o
				}) => {
					const r = await Object(l.g)(o(), {
							tournamentId: e
						}),
						{
							endPredictionTournament: i
						} = r.body.data;
					if (!i.tournament) throw new Error("Failed to update prediction name");
					return t(B(i.tournament)), i.tournament
				}, H = e => async (t, n, {
					gqlContext: o
				}) => {
					const r = await Object(l.h)(o(), {
						postId: e
					});
					if (!r.ok || r.error) throw new Error("Failed to fetch prediction chip packages");
					const {
						postInfoById: i
					} = r.body.data;
					if (!i.predictionChipPackages) throw new Error("Failed to fetch prediction chip packages");
					return i.predictionChipPackages
				}, J = e => async (t, n, {
					gqlContext: o
				}) => {
					const r = await Object(l.i)(o(), {
						tournamentId: e
					});
					if (!r.ok || r.error) throw new Error("Failed to fetch token balance");
					const {
						identity: i
					} = r.body.data;
					if (!i.hasOwnProperty("predictionTokens")) throw new Error("Failed to fetch token balance");
					return i.predictionTokens
				}, z = ({
					coinPackageId: e,
					selectedOptionId: t,
					price: n,
					pollId: o,
					tournamentId: r,
					tournamentPostId: i
				}) => async s => {
					const a = await s(T({
						coinPackageId: e,
						optionId: t,
						postId: o,
						price: n
					}));
					return s(E({
						predictionId: o,
						selectedOptionId: t,
						tournamentId: r,
						tournamentPostId: i
					})), a
				}, V = e => async (t, n) => {
					const o = n();
					Object(O.K)(o) ? await t(Object(f.h)(j.a.ECON_PREDICTIONS_PREMIUM_UPSELL, {
						feature: e
					})) : await t(Object(h.i)())
				}, Z = () => Object(f.g)(j.a.ECON_PREDICTIONS_PREMIUM_UPSELL), Y = e => async (t, n, {
					gqlContext: r
				}) => {
					try {
						const n = await Object(l.c)(r(), {
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

			function K(e, t) {
				return async (n, o, {
					gqlContext: r
				}) => {
					const i = await Object(l.d)(r(), {
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
				return l
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "d", (function() {
				return h
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
			const l = ({
				postId: e,
				closedAt: t
			}) => async n => {
				try {
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
					(e => e(Object(a.f)({
						duration: a.a,
						kind: c.b.Error,
						text: u._("Error: Failed to update prediction end time, please try again later", null, {
							hk: "MkaNA"
						})
					})))(n)
				}
			};

			function p(e, t) {
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
			const m = e => Object(s.h)(d.a.ECON_PREDICTIONS_CHANGE_END_TIME, {
					postId: e
				}),
				b = e => Object(s.h)(d.a.ECON_PREDICTIONS_CANCEL_PREDICTION, {
					postId: e
				}),
				h = e => Object(s.h)(d.a.ECON_PREDICTIONS_CHANGE_OUTCOME, {
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
			t.a = Object(s.a)(e => i.a.createElement(a.e, null, i.a.createElement(a.i, null, i.a.createElement(c.a, null, i.a.createElement(a.q, null, e.headerText || o.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), i.a.createElement(d.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, i.a.createElement(a.b, null)))), i.a.createElement(a.l, null, i.a.createElement(a.p, {
				className: l.a.ModalText
			}, e.modalText)), i.a.createElement(a.g, null, !e.hideCancelButton && i.a.createElement(a.a, {
				className: l.a.buttonWidth,
				onMouseDown: p,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || o.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), i.a.createElement(a.u, {
				className: l.a.buttonWidth,
				onMouseDown: p,
				onClick: t => {
					e.onConfirm(), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
				},
				"data-redditstyle": !e.disableRedditStyle,
				disabled: e.isDisabled
			}, e.actionText))))
		},
		"./src/reddit/components/Econ/Prediction/EndTimeModal/Body.m.less": function(e, t, n) {
			e.exports = {
				title: "_1SLCdGcAO-LuO01C6c5s7P",
				timeInput: "auRUrIM3a5etnBgIUwDBO",
				timeZone: "_25fb1OkN4YvP0tTPRsNGMn",
				footer: "_2LZcDCS-W14zUTd4V6-S1d"
			}
		},
		"./src/reddit/components/Econ/Prediction/EndTimeModal/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				s = n("./src/reddit/selectors/posts.ts"),
				a = n("./src/reddit/actions/economics/predictions/modTools.ts"),
				d = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				u = n("./src/reddit/components/PollCreator/EndDatePicker/useEndDatePicker.tsx"),
				l = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/DateInput/index.tsx"),
				p = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/TimeInput/index.tsx"),
				m = n("./src/reddit/constants/modals.ts"),
				b = n("./src/reddit/helpers/trackers/predictionsModTools.ts"),
				h = n("./src/reddit/hooks/useTracking.ts"),
				f = n("./src/reddit/components/Econ/Prediction/EndTimeModal/Body.m.less"),
				j = n.n(f);
			const {
				fbt: C
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var v = ({
				timestamp: e,
				setTimestamp: t,
				postId: n,
				votingEndDatetime: o
			}) => {
				const s = Object(i.d)(),
					f = Object(h.a)(),
					{
						date: v,
						time: O,
						timeZoneAbbr: g,
						onChange: I,
						maxDate: x,
						minDate: P,
						minTime: _,
						fullMinDatetime: E,
						formattedMinDatetime: y
					} = Object(u.a)(e, t),
					k = e < E,
					w = () => s(Object(d.g)(m.a.ECON_PREDICTIONS_CHANGE_END_TIME));
				return r.a.createElement(c.a, {
					withOverlay: !0,
					onOverlayClick: w,
					toggleModal: w,
					onConfirm: () => {
						f(Object(b.f)(n)), s(Object(a.a)({
							postId: n,
							closedAt: e
						})), w()
					},
					actionText: C._("Update", null, {
						hk: "3HPLX5"
					}),
					headerText: C._("Prediction Ends On", null, {
						hk: "CTEcM"
					}),
					modalText: e ? r.a.createElement(r.a.Fragment, null, r.a.createElement("span", {
						className: j.a.title
					}, C._("End time", null, {
						hk: "3D4Q1o"
					})), r.a.createElement(l.a, {
						"aria-label": C._("Prediction end date", null, {
							hk: "4zYv4T"
						}),
						onChange: e => I({
							date: e
						}),
						min: P,
						max: x,
						value: v,
						required: !0
					}), r.a.createElement(p.a, {
						className: j.a.timeInput,
						"aria-label": C._("Prediction end time", null, {
							hk: "1idFl4"
						}),
						onChange: e => I({
							time: e
						}),
						min: _,
						value: O,
						required: !0
					}), g, y && r.a.createElement("span", {
						className: j.a.footer
					}, C._("New end time has to be later than {Minimum date and time}", [C._param("Minimum date and time", y)], {
						hk: "1GjSWl"
					}))) : "Something went wrong. Please try again.",
					isDisabled: k || e === o
				})
			};
			t.default = () => {
				var e;
				const t = Object(i.e)(s.R),
					n = null === (e = null == t ? void 0 : t.pollData) || void 0 === e ? void 0 : e.votingEndTimestamp,
					a = n ? new Date(n) : null,
					[d, c] = Object(o.useState)(a);
				return t && d && a ? r.a.createElement(v, {
					postId: t.id,
					timestamp: d,
					setTimestamp: e => c(e),
					votingEndDatetime: a
				}) : null
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
				} = Object(i.a)(e), d = Object(o.b)(), c = d ? Object(o.d)(d) : null, u = new Date, {
					minDate: l,
					minTime: p,
					formattedMinDatetime: m
				} = Object(i.c)(u), b = Object(r.a)(), h = Object(i.d)({
					date: l,
					time: p
				});
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
					maxDate: b,
					minDate: l,
					minTime: p,
					fullMinDatetime: h,
					formattedMinDatetime: m
				}
			}
		},
		"./src/reddit/components/PollCreator/EndDatePicker/utils.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return s
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "c", (function() {
				return c
			}));
			var o = n("./src/lib/timezone/index.ts"),
				r = n("./src/reddit/helpers/scheduledPosts/index.ts");
			const i = () => {
					const e = new Date;
					return e.setDate(e.getDate() + 3), e
				},
				s = e => {
					const [t, n] = Object(r.i)(Object(o.g)(e));
					return {
						date: t,
						time: n
					}
				},
				a = ({
					date: e,
					time: t
				}) => new Date(`${e}T${t}`),
				d = e => e.toLocaleString("en-US", {
					month: "numeric",
					day: "numeric",
					year: "numeric",
					hour: "numeric",
					minute: "2-digit",
					hour12: !0
				}),
				c = e => {
					const t = new Date(e);
					t.setHours(t.getHours() + 1);
					const {
						date: n,
						time: o
					} = s(t);
					return {
						minDate: n,
						minTime: o,
						formattedMinDatetime: d(t)
					}
				}
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
				return _
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
				j = e => {
					const [t, n, o] = e.split("-").map(Number);
					return {
						year: t,
						month: n - 1,
						day: o
					}
				};
			class C extends s.a.PureComponent {
				constructor() {
					super(...arguments), this.onChange = e => {
						const t = {
								...j(this.props.value),
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
					} = j(this.props.value);
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
			var v = C,
				O = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/DateInput/index.m.less"),
				g = n.n(O);

			function I() {
				return (I = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const x = r()(() => {
					const e = document.createElement("input");
					return e.setAttribute("type", "date"), e.setAttribute("value", "not-a-date"), "not-a-date" !== e.value
				}),
				P = l.a.input("Input", g.a);

			function _(e) {
				return x() ? s.a.createElement(P, I({
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
				return _
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
				j = (e, t) => {
					const n = +e.slice(-2);
					if (Number.isInteger(n)) return n > t ? 0 : n
				};
			class C extends s.a.PureComponent {
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
						const t = j(e.target.value, 24);
						void 0 !== t && this.setState({
							hour: t
						}, this.callOnChange)
					}, this.onChangeMinute = e => {
						const t = j(e.target.value, 59);
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
			var v = C,
				O = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/TimeInput/index.m.less"),
				g = n.n(O);

			function I() {
				return (I = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const x = r()(() => {
					const e = document.createElement("input");
					return e.setAttribute("type", "time"), e.setAttribute("value", "not-a-time"), "not-a-time" !== e.value
				}),
				P = p.a.input("TimeInput", g.a);

			function _(e) {
				return x() ? s.a.createElement(P, I({
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
			n.d(t, "n", (function() {
				return C
			})), n.d(t, "l", (function() {
				return v
			})), n.d(t, "a", (function() {
				return O
			})), n.d(t, "j", (function() {
				return g
			})), n.d(t, "f", (function() {
				return I
			})), n.d(t, "k", (function() {
				return x
			})), n.d(t, "b", (function() {
				return P
			})), n.d(t, "m", (function() {
				return _
			})), n.d(t, "g", (function() {
				return E
			})), n.d(t, "h", (function() {
				return y
			})), n.d(t, "i", (function() {
				return k
			})), n.d(t, "d", (function() {
				return w
			})), n.d(t, "c", (function() {
				return T
			})), n.d(t, "e", (function() {
				return D
			}));
			var o = n("./src/lib/makeGqlRequest/index.ts"),
				r = n("./src/lib/makeRequest/index.ts"),
				i = n("./src/redditGQL/operations/AddPredictionDrafts.json"),
				s = n("./src/redditGQL/operations/CancelPrediction.json"),
				a = n("./src/redditGQL/operations/ChangePrediction.json"),
				d = n("./src/redditGQL/operations/ChangePredictionVote.json"),
				c = n("./src/redditGQL/operations/CreatePredictionTournament.json"),
				u = n("./src/redditGQL/operations/EndPredictionTournament.json"),
				l = n("./src/redditGQL/operations/GetPredictionChipPackages.json"),
				p = n("./src/redditGQL/operations/GetPredictionToken.json"),
				m = n("./src/redditGQL/operations/GetTournaments.json"),
				b = n("./src/redditGQL/operations/ResolvePrediction.json"),
				h = n("./src/redditGQL/operations/SubredditTopPredictors.json"),
				f = n("./src/redditGQL/operations/UpdatePredictionTournament.json"),
				j = n("./src/redditGQL/operations/VotePrediction.json");
			const C = async (e, {
				postId: t,
				optionId: n,
				coinPackageId: i,
				price: s
			}) => {
				var a;
				const d = await Object(o.a)(e, {
					...j,
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
			}, v = (e, {
				postId: t,
				optionId: n
			}) => Object(o.a)(e, {
				...b,
				variables: {
					input: {
						postId: t,
						optionId: n
					}
				}
			});
			var O;
			! function(e) {
				e.AllTime = "ALL_TIME", e.Monthly = "MONTHLY"
			}(O || (O = {}));
			const g = (e, {
					subredditId: t,
					period: n,
					top: r,
					includeCurrentRank: i,
					tournamentId: s
				}) => Object(o.a)(e, {
					...h,
					variables: {
						subredditId: t,
						period: n,
						top: r,
						includeCurrentRank: i,
						tournamentId: s
					}
				}),
				I = (e, t) => Object(o.a)(e, {
					...c,
					variables: {
						input: t
					}
				}),
				x = async (e, t) => {
					const n = await Object(o.a)(e, {
						...m,
						variables: t
					});
					if (!Object(r.c)(n) || n.error) throw new Error("Failed to fetch tournaments");
					return n.body.data.subredditInfoByName.predictionTournaments || []
				}, P = (e, t) => Object(o.a)(e, {
					...i,
					variables: {
						input: t
					}
				}), _ = (e, t) => Object(o.a)(e, {
					...f,
					variables: {
						input: t
					}
				}), E = (e, t) => Object(o.a)(e, {
					...u,
					variables: {
						input: t
					}
				}), y = (e, t) => Object(o.a)(e, {
					...l,
					variables: t
				}), k = (e, t) => Object(o.a)(e, {
					...p,
					variables: t
				}), w = async (e, t) => {
					const n = await Object(o.a)(e, {
						...a,
						variables: {
							input: t
						}
					});
					if (!Object(r.c)(n) || !n.body.data.changePrediction.ok) throw new Error("Unable to update prediction");
					return n.body.data.changePrediction.poll
				}, T = async (e, {
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
				}, D = async (e, t) => {
					var n, i;
					const s = await Object(o.a)(e, {
						...d,
						variables: {
							input: t
						}
					});
					if (!Object(r.c)(s) || !(null === (n = s.body.data.changePredictionVote) || void 0 === n ? void 0 : n.ok) || !(null === (i = s.body.data.changePredictionVote) || void 0 === i ? void 0 : i.poll)) throw new Error("Unable to change prediction.");
					return s.body.data.changePredictionVote.poll
				}
		},
		"./src/reddit/helpers/trackers/predictionsModTools.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return i
			})), n.d(t, "f", (function() {
				return s
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "e", (function() {
				return u
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
				}),
				a = e => t => ({
					...r(t, e),
					source: "predictions",
					action: "click",
					noun: "cancel_prediction"
				}),
				d = e => t => ({
					...r(t, e),
					source: "predictions",
					action: "click",
					noun: "remove_post"
				}),
				c = e => t => ({
					...r(t, e),
					source: "predictions",
					action: "click",
					noun: "prediction_change_outcome"
				}),
				u = e => t => ({
					...r(t, e),
					source: "prediction_change_outcome",
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
			e.exports = JSON.parse('{"id":"3048ce040c04"}')
		},
		"./src/redditGQL/operations/CancelPrediction.json": function(e) {
			e.exports = JSON.parse('{"id":"fac88c91fec8"}')
		},
		"./src/redditGQL/operations/ChangePrediction.json": function(e) {
			e.exports = JSON.parse('{"id":"614dbb8a54d2"}')
		},
		"./src/redditGQL/operations/ChangePredictionVote.json": function(e) {
			e.exports = JSON.parse('{"id":"90c7b71fa93f"}')
		},
		"./src/redditGQL/operations/CreatePredictionTournament.json": function(e) {
			e.exports = JSON.parse('{"id":"cb619ee4a1d7"}')
		},
		"./src/redditGQL/operations/EndPredictionTournament.json": function(e) {
			e.exports = JSON.parse('{"id":"ef19872c5854"}')
		},
		"./src/redditGQL/operations/GetPredictionChipPackages.json": function(e) {
			e.exports = JSON.parse('{"id":"5ce83e513fa5"}')
		},
		"./src/redditGQL/operations/GetPredictionToken.json": function(e) {
			e.exports = JSON.parse('{"id":"26b911e67a5f"}')
		},
		"./src/redditGQL/operations/GetTournaments.json": function(e) {
			e.exports = JSON.parse('{"id":"003c1e2f9277"}')
		},
		"./src/redditGQL/operations/ResolvePrediction.json": function(e) {
			e.exports = JSON.parse('{"id":"d742e3019cfe"}')
		},
		"./src/redditGQL/operations/SubredditTopPredictors.json": function(e) {
			e.exports = JSON.parse('{"id":"3407d5f67207"}')
		},
		"./src/redditGQL/operations/UpdatePredictionTournament.json": function(e) {
			e.exports = JSON.parse('{"id":"6851ffb490a5"}')
		},
		"./src/redditGQL/operations/VotePrediction.json": function(e) {
			e.exports = JSON.parse('{"id":"484780ada6a2"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction-EndTimeModal.1acc07c18a91d684e725.js.map