// https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction.fb264bd63631111f341c.js
// Retrieved at 11/3/2021, 4:40:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Econ-Prediction"], {
		"./src/lib/constants/specialMembership.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			const s = "custom"
		},
		"./src/lib/timeUntil/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/constants/index.ts");
			const r = [o.nc, o.ob, o.A, o.P, o.jb, o.Qb],
				i = {
					[o.Qb]: e => s.fbt._({
						"*": "{number} seconds",
						_1: "1 second"
					}, [s.fbt._plural(e, "number")], {
						hk: "3pTp9Z"
					}),
					[o.jb]: e => s.fbt._({
						"*": "{number} minutes",
						_1: "1 minute"
					}, [s.fbt._plural(e, "number")], {
						hk: "2gB3sf"
					}),
					[o.P]: e => s.fbt._({
						"*": "{number} hours",
						_1: "1 hour"
					}, [s.fbt._plural(e, "number")], {
						hk: "2w4n8B"
					}),
					[o.A]: e => s.fbt._({
						"*": "{number} days",
						_1: "1 day"
					}, [s.fbt._plural(e, "number")], {
						hk: "3zIGRH"
					}),
					[o.ob]: e => s.fbt._({
						"*": "{number} months",
						_1: "1 month"
					}, [s.fbt._plural(e, "number")], {
						hk: "28DQqD"
					}),
					[o.nc]: e => s.fbt._({
						"*": "{number} years",
						_1: "1 year"
					}, [s.fbt._plural(e, "number")], {
						hk: "Gqzh3"
					})
				},
				c = {
					[o.Qb]: e => s.fbt._("{amount}s", [s.fbt._param("amount", String(e))], {
						hk: "F4qog"
					}),
					[o.jb]: e => s.fbt._("{amount}m", [s.fbt._param("amount", String(e))], {
						hk: "43tM5H"
					}),
					[o.P]: e => s.fbt._("{amount}h", [s.fbt._param("amount", String(e))], {
						hk: "19NsxU"
					}),
					[o.A]: e => s.fbt._("{amount}d", [s.fbt._param("amount", String(e))], {
						hk: "39MDc9"
					}),
					[o.ob]: e => s.fbt._("{amount}m", [s.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[o.nc]: e => s.fbt._("{amount}y", [s.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					}),
					[o.ob]: e => s.fbt._("{amount}m", [s.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[o.nc]: e => s.fbt._("{amount}y", [s.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					})
				};

			function a(e, t = !1, n = !1) {
				const a = Date.now(),
					d = new Date(e).getTime(),
					l = {
						[o.nc]: "",
						[o.ob]: "",
						[o.A]: "",
						[o.P]: "",
						[o.jb]: "",
						[o.Qb]: ""
					};
				let u = d - a;
				if (u <= 0) return s.fbt._("a moment", null, {
					hk: "3QLaye"
				}).toString();
				for (const s of r) {
					const e = Math.floor(u / s);
					e && (l[s] = (t ? c : i)[s](e).toString()), u -= e * s
				}
				const m = r.map(e => l[e]).filter(Boolean).slice(0, 2).join(" ");
				return t || n ? m : s.fbt._("{amount of time left} left", [s.fbt._param("amount of time left", m)], {
					hk: "7VjAI"
				}).toString()
			}
		},
		"./src/reddit/actions/economics/paymentSystems/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return c
			}));
			const s = "ECONOMICS__PAYMENT_SYSTEM__CARD_DELETE_SUCCESS",
				o = "ECONOMICS__PAYMENT_SYSTEM__PAYPAL_DELETE_SUCCESS",
				r = "ECONOMICS__PAYMENT_SYSTEM__INFO_FAILURE",
				i = "ECONOMICS__PAYMENT_SYSTEM__INFO_FETCHED",
				c = "ECONOMICS__PAYMENT_SYSTEM__INFO_PENDING"
		},
		"./src/reddit/actions/economics/subredditPremium/actionCreators.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "g", (function() {
				return b
			})), n.d(t, "h", (function() {
				return p
			})), n.d(t, "i", (function() {
				return f
			})), n.d(t, "j", (function() {
				return E
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/modal.ts"),
				r = n("./src/reddit/constants/modals.ts"),
				i = n("./src/reddit/actions/economics/subredditPremium/constants.ts");
			const c = Object(s.a)(i.a),
				a = Object(s.a)(i.b),
				d = Object(s.a)(i.c),
				l = Object(s.a)(i.d),
				u = Object(s.a)(i.e),
				m = Object(s.a)(i.f),
				b = Object(s.a)(i.g),
				p = Object(s.a)(i.h),
				f = Object(s.a)(i.i),
				E = e => Object(o.h)(r.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, {
					uploadAssetType: e
				})
		},
		"./src/reddit/actions/economics/subredditPremium/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "f", (function() {
				return a
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "i", (function() {
				return u
			}));
			const s = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_APPLIED",
				o = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_BADGE_TYPE_CHANGED",
				r = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_MODAL_OPENED",
				i = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_VIEW_CHANGED",
				c = "ECONOMICS__SUBREDDIT_PREMIUM__EDITOR_PRODUCTS_FETCH_SUCCESS",
				a = "ECONOMICS__SUBREDDIT_PREMIUM__ORDER_SUCCESS",
				d = "ECONOMICS__SUBREDDIT_PREMIUM__SUBREDDIT_INFO_SUCCESS",
				l = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_CANCEL_SUCCESS",
				u = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_DATA_SUCCESS"
		},
		"./src/reddit/components/Econ/Prediction/NoPredictionError/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3UNYrzKG9vrW6s4_OVCGNt"
			}
		},
		"./src/reddit/components/Econ/Prediction/PredictionCard/index.m.less": function(e, t, n) {
			e.exports = {
				modal: "_1emfQRdFOsxY7Pi5Cn4JD1",
				prediction: "_1e08NSBa-ExjEnRYLJAvTs"
			}
		},
		"./src/reddit/components/Econ/Prediction/PredictionCard/v1/index.m.less": function(e, t, n) {
			e.exports = {
				poll: "_275u2Y8G6iDN1a7S108YmV"
			}
		},
		"./src/reddit/components/Econ/Prediction/PredictionEducationMessage/EducationMessage/constants.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.nonDismissable = "predictionEducationNonDismissable", e.creation = "predictionEducationCreation", e.feature = "predictionEducationFeature"
				}(s || (s = {}))
		},
		"./src/reddit/components/Econ/Prediction/PredictionEducationMessage/EducationMessage/index.m.less": function(e, t, n) {
			e.exports = {
				educationMessage: "_3fy4maW8GQWdzcWGdeMbsa",
				titleRow: "_1OeK7ZGX2fnKzdqjn-5gQD",
				header: "_1Y7_NWRItnxdsOq9DSlCDi",
				title: "_2ZZDhQ9qffZd-pGxZE6R4I",
				newBadge: "_1cHmK8KSQMLT0mELC910oM",
				closeButton: "_1C2XLQWgnLb_MVlB0fwAc_"
			}
		},
		"./src/reddit/components/Econ/Prediction/PredictionEducationMessage/EducationMessage/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/hooks/useLocalStorage.ts"),
				i = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/icons/fonts/index.tsx"),
				a = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/EducationMessage/constants.ts"),
				d = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/EducationMessage/index.m.less"),
				l = n.n(d);
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function m({
				message: e,
				newBadge: t,
				onClose: n,
				onView: d,
				storageKey: m = a.a.nonDismissable,
				title: b
			}) {
				const p = m !== a.a.nonDismissable,
					[f, E] = Object(r.a)(m, !p || !1),
					[_, h] = Object(s.useState)(!1);
				return Object(s.useEffect)(() => {
					f || _ || !d || (d(), h(!0))
				}, [f, _, d]), p && f ? null : o.a.createElement("div", {
					className: l.a.educationMessage
				}, o.a.createElement("div", {
					className: l.a.titleRow
				}, o.a.createElement("div", {
					className: l.a.header
				}, o.a.createElement("h3", {
					className: l.a.title
				}, b), t && o.a.createElement("div", {
					className: l.a.newBadge
				}, u._("New", null, {
					hk: "2N0EBb"
				}))), p && o.a.createElement(i.s, {
					"aria-label": u._("Close", null, {
						hk: "2UjnU"
					}),
					className: l.a.closeButton,
					Icon: Object(c.b)("close"),
					onClick: () => {
						E(!0), n && n()
					},
					priority: i.b.Plain
				})), e)
			}
		},
		"./src/reddit/components/Econ/Prediction/PredictionEducationMessage/PredictionEndedEducationMessage/index.m.less": function(e, t, n) {
			e.exports = {
				notificationBlurb: "_2681BT2Imfw1O3Zy_oLAcl"
			}
		},
		"./src/reddit/components/Econ/Prediction/PredictionEducationMessage/PredictionFeatureEducationMessage/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/EducationMessage/index.tsx");

			function c({
				isTokens: e,
				onClose: t,
				onView: n,
				storageKey: o
			}) {
				const c = s.fbt._("Predictions", null, {
						hk: "3X6mhV"
					}),
					a = e ? s.fbt._("Redditors add tokens to their answers, then everyone who gets it right splits the winnings", null, {
						hk: "FDY0l"
					}) : s.fbt._("Redditors add coins to their answers, then everyone who gets it right splits the winnings", null, {
						hk: "4eP2MR"
					});
				return r.a.createElement("div", null, r.a.createElement(i.a, {
					onClose: t,
					onView: n,
					title: c,
					newBadge: !0,
					message: a,
					storageKey: o
				}))
			}
		},
		"./src/reddit/components/Econ/Prediction/PredictionEducationMessage/PredictionResolvedEducationMessage/index.m.less": function(e, t, n) {
			e.exports = {
				coinIcon: "zSh1egnQOovr8gIxiO-BE",
				wonOrLostAmountRow: "_3f80EjeUjSRy5-WqzqE7VJ",
				wonOrLostAmount: "_2nXf3pIf7lmCE6_ZAQXdt5"
			}
		},
		"./src/reddit/components/Econ/Prediction/PredictionStatus/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2N8sOpL8HjMfaKS_SGauz6",
				v2: "_3Jt7RgA9aANsevVsb0Ehxe",
				coins: "CvW1XMcWem6aeEGMT6-XB",
				statusBar: "_3UgGKQLpMCbhSbdPqloGc4",
				coinIcon: "_1O2NC4MPtXkD58WXlRCpZF",
				divider: "SZcaijbNtMWo_Hks5p9cB",
				clockIcon: "DzRACNzo9EG6-6h40DhZA"
			}
		},
		"./src/reddit/components/Econ/Prediction/ResolutionModal/index.m.less": function(e, t, n) {
			e.exports = {
				header: "_2n_V3eaYinaIoTbG9ikkK0",
				closeButton: "_3pPuZ3I3wkPK0d8WNh2m51",
				content: "_3HRJlgO-JoezNvYzRP_Ld0",
				message: "_1DLbjgapmKO0sh19JkECbB",
				actions: "tbnzhK1drOMaacYuMtJhT",
				submitButton: "A3dSYyITh_D79x6Fvr_IZ"
			}
		},
		"./src/reddit/components/Econ/Prediction/TournamentLink/index.m.less": function(e, t, n) {
			e.exports = {
				tournamentLink: "_2X1xXN9kuDF2WycNRjjS0o",
				facepile: "C5uVjjS8VPK59_iUkW5-Z",
				info: "_2-zYCnFNOSR-_DgPdIuM7",
				tournamentName: "_3L_97it52YmEJXxNI0ZFK-",
				totalPlayers: "_2PSisUxPboRQYsMf4jIvx1",
				chevron: "ONgeKJIGzxybfGzxK1J1s"
			}
		},
		"./src/reddit/components/Econ/Prediction/hooks/useTournamentsQuery.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/actions/economics/predictions/index.ts"),
				c = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				a = n("./src/reddit/selectors/subreddit.ts");

			function d(e) {
				const t = Object(r.d)(),
					n = Object(r.e)(t => Object(a.Q)(t, {
						subredditId: e
					})),
					s = Object(r.e)(t => Object(c.h)(t, {
						subredditId: e
					})),
					d = Object(r.e)(t => Object(c.j)(t, {
						subredditId: e
					})),
					l = o.a.useCallback(() => {
						n.name && t(Object(i.l)(n.name))
					}, [n.name, t]);
				return o.a.useEffect(() => {
					d || s || l()
				}, [d, s, l]), {
					isFetching: d,
					fetch: l
				}
			}
		},
		"./src/reddit/components/Econ/Prediction/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_12AfXWHuSC5UHX0_ne19LR",
				v1: "_3WEraJCwVPKYAxhr1IEYYr",
				forCommentsPage: "_3db-wOkv0X5qH0E-5QuyBW",
				isEditing: "_1sQkurV7y_5Plq7_lWzN9h"
			}
		},
		"./src/reddit/components/Econ/Prediction/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "Prediction", (function() {
				return Fe
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/contexts/PageLayer/index.tsx"),
				d = n("./src/reddit/models/Prediction/index.ts"),
				l = n("./src/reddit/selectors/experiments/econ/index.ts"),
				u = n("./src/reddit/selectors/poll/index.ts"),
				m = n("./src/reddit/selectors/postCreations.ts"),
				b = n("./src/reddit/selectors/posts.ts"),
				p = n("./src/reddit/selectors/user.ts"),
				f = n("./src/reddit/components/Econ/Prediction/NoPredictionError/index.m.less"),
				E = n.n(f);
			const {
				fbt: _
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var h = ({
					className: e
				}) => o.a.createElement("div", {
					className: Object(c.a)(E.a.container, e)
				}, _._("Error: Could not load prediction", null, {
					hk: "3SDSgH"
				})),
				g = n("./src/reddit/actions/post.ts"),
				P = n("./src/reddit/components/Econ/Prediction/hooks/useDelayedUpvoteAnimation.tsx"),
				O = n("./src/reddit/models/Vote/index.ts");
			var v = n("./node_modules/fbt/lib/FbtPublic.js"),
				y = n("./src/reddit/actions/economics/predictions/index.ts"),
				x = n("./src/reddit/hooks/useToast.tsx");
			var C = n("./src/reddit/actions/economics/helpers/index.ts"),
				I = n("./src/reddit/helpers/trackers/predictions.ts"),
				S = n("./src/reddit/hooks/useTracking.ts");
			var j = n("./src/reddit/components/Econ/Prediction/PredictionModal/index.tsx"),
				k = n("./src/higherOrderComponents/asModal/index.tsx"),
				N = n("./src/reddit/controls/Button/index.tsx"),
				A = n("./src/reddit/icons/fonts/index.tsx"),
				M = n("./src/reddit/components/Econ/Prediction/ResolutionModal/index.m.less"),
				w = n.n(M);
			var B = Object(k.a)((function({
					isResolving: e,
					isTokens: t,
					onCancel: n,
					onResolve: s
				}) {
					return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						className: w.a.header
					}, o.a.createElement(N.s, {
						className: w.a.closeButton,
						Icon: Object(A.b)("close"),
						priority: N.b.Plain,
						onClick: n
					}), o.a.createElement("h1", null, v.fbt._("Confirm Your Answer", null, {
						hk: "4yIXaD"
					}))), o.a.createElement("div", {
						className: w.a.content
					}, o.a.createElement("p", {
						className: w.a.message
					}, t ? v.fbt._("Once you hit Submit, the answer is final and tokens will be distributed to the winners. After resolving this prediction you will not be able to delete or remove it.", null, {
						hk: "1rtAzB"
					}) : v.fbt._("Once you hit Submit, the answer is final and coins will be distributed to the winners. After resolving this prediction you will not be able to delete or remove it.", null, {
						hk: "1M6iWL"
					})), o.a.createElement("div", {
						className: w.a.actions
					}, o.a.createElement(N.n, {
						disabled: e,
						onClick: n,
						priority: N.b.Secondary,
						redditStyle: !0,
						size: N.c.S
					}, v.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), o.a.createElement(N.k, {
						className: w.a.submitButton,
						disabled: e,
						onClick: () => {
							s()
						},
						redditStyle: !0,
						size: N.c.S
					}, v.fbt._("Submit", null, {
						hk: "4aU3dh"
					})))))
				})),
				F = n("./src/reddit/components/Econ/Prediction/PredictionOption/index.tsx"),
				D = n("./src/reddit/components/Econ/Prediction/PredictionOption/PredictionChangeOption.tsx"),
				L = n("./src/reddit/components/Econ/Prediction/PredictionOption/SneakPeek.tsx"),
				T = n("./src/reddit/components/Econ/Prediction/VoteAnimation/index.tsx"),
				R = n("./src/reddit/components/Econ/Prediction/PredictionCard/v1/index.m.less"),
				U = n.n(R);
			const V = ({
				post: e,
				prediction: t,
				selectedOptionId: n,
				isVoteAnimation: i,
				onVoteAnimationEnd: c,
				onSelectOption: a
			}) => {
				const {
					creatorId: m,
					endsAt: b,
					options: f,
					resolvedOptionId: E,
					totalVoters: _,
					tournamentId: h,
					userSelection: g,
					predictionStatus: P,
					voteUpdatesRemained: O
				} = t, v = Object(r.e)(t => {
					const n = Object(u.g)(t, {
						postId: e.id
					});
					return Boolean((null == n ? void 0 : n.userSelection) && !(null == n ? void 0 : n.resolvedOptionId) && Object(l.v)(t))
				}), y = Object(r.e)(p.pb), x = Object(r.e)(p.K), [C, I] = Object(s.useState)(!1), S = m === y, j = b < Date.now(), k = j && S && !E, N = P === d.b.Cancelled || P === d.b.CancelInProgress;
				return o.a.useEffect(() => {
					I(!1)
				}, [g]), o.a.createElement("div", {
					className: U.a.poll
				}, f.map(e => o.a.createElement(T.a, {
					endsAt: b,
					key: `prediction-option-${e.id}`,
					isShowingVoteAnimation: i && g === e.id,
					onAnimationEnd: c
				}, o.a.createElement(F.a, {
					disabled: i,
					isCancelled: N,
					isEnded: j,
					isSelected: n === e.id,
					needsResolution: k,
					option: e,
					onClick: () => a(e),
					resolvedOptionId: E,
					tournamentId: h,
					userSelection: g,
					userIsLoggedOut: !x,
					votePercentage: (g || j || C) && e.voteCount ? Math.floor(e.voteCount / _ * 100) : null,
					isShowingHint: C
				}))), !N && o.a.createElement(L.a, {
					disabled: i || C || !!g,
					isEnded: j,
					userSelection: g,
					isShowingHint: C,
					tournamentId: h,
					postId: e.id,
					onReveal: () => I(!0)
				}), !N && v && o.a.createElement(D.a, {
					isLimitReached: 0 === O,
					postId: e.id,
					options: f,
					selectedOptionId: g
				}))
			};
			var G = n("./src/reddit/components/Econ/Prediction/PredictionCard/v2/index.tsx"),
				Y = n("./src/reddit/components/Econ/Prediction/PredictionCard/index.m.less"),
				W = n.n(Y);
			const K = ({
				post: e,
				prediction: t
			}) => {
				const [n, i] = Object(s.useState)(!1), c = Object(r.e)(l.u), a = Object(r.e)(p.pb), {
					isLoading: u,
					selectedVoteOption: m,
					setVoteOptionId: b,
					predict: f
				} = function(e) {
					const [t, n] = Object(s.useState)(!1), [o, i] = Object(s.useState)(null), c = Object(S.a)(), a = Object(r.e)(p.e), l = Object(x.a)(), u = Object(r.d)(), m = e.options.find(({
						id: e
					}) => e === o);
					return {
						isLoading: t,
						selectedVoteOption: m,
						setVoteOptionId: i,
						predict: async t => {
							const s = e.id;
							if (!m) return;
							if (t.currency === d.a.Coins && t.amount > a) return Object(C.promptUserToBuyMoreCoins)(), void c(I.a);
							const o = t.amount;
							if (e.endsAt < Date.now()) l(v.fbt._("Error: Failed to make prediction. This prediction has already ended", null, {
								hk: "22UWEr"
							}));
							else {
								e.tournamentId ? c(Object(I.p)({
									pollId: s,
									selectedNumberTokens: o
								})) : c(Object(I.o)({
									pollId: s,
									selectedNumberCoins: o,
									totalStakeAmount: e.totalStakeAmount
								})), n(!0);
								try {
									await u(Object(y.q)({
										coinPackageId: t.id,
										optionId: m.id,
										postId: s,
										price: o
									}))
								} catch (r) {
									l(v.fbt._("Error: Failed to make prediction, please try again later", null, {
										hk: "1tECsx"
									}))
								}
								n(!1), i(null)
							}
						}
					}
				}(t), {
					isLoading: E,
					resolveOptionId: _,
					setResolveOptionId: h,
					resolve: k
				} = function(e) {
					const [t, n] = Object(s.useState)(!1), [o, i] = Object(s.useState)(null), c = Object(x.a)(), a = Object(r.d)();
					return {
						isLoading: t,
						resolveOptionId: o,
						setResolveOptionId: i,
						resolve: async () => {
							if (n(!0), !o) throw new Error("Failed to create prediction, missing selected option");
							try {
								await a(Object(y.p)({
									optionId: o,
									postId: e
								}))
							} catch (t) {
								c(v.fbt._("Error: Failed to resolve prediction, please try again later", null, {
									hk: "3Ve2Mb"
								}))
							}
							i(null), n(!1)
						}
					}
				}(t.id), {
					upvote: N
				} = function(e) {
					const t = Object(r.d)(),
						n = Object(r.e)(l.p),
						{
							startDelayedUpvoteAnimation: s
						} = Object(P.a)(e.id);
					return {
						upvote: function() {
							n && e.voteState < O.a.upvoted && (t(Object(g.db)(e.id)), s())
						}
					}
				}(e), A = e => {
					const {
						creatorId: n,
						endsAt: s,
						resolvedOptionId: o,
						userSelection: r
					} = t, i = s < Date.now();
					i && n === a && !o && h(e.id), i || r || b(e.id)
				}, M = Object(s.useCallback)(() => {
					b(null), h(null)
				}, []);
				return o.a.createElement(o.a.Fragment, null, !c && o.a.createElement(V, {
					post: e,
					prediction: t,
					selectedOptionId: (null == m ? void 0 : m.id) || null,
					isVoteAnimation: n,
					onSelectOption: A,
					onVoteAnimationEnd: () => i(!1)
				}), c && o.a.createElement(G.a, {
					className: W.a.prediction,
					prediction: t,
					selectedOptionId: (null == m ? void 0 : m.id) || null,
					onSelectOption: A
				}), m && o.a.createElement(j.b, {
					className: W.a.modal,
					isCreatingVote: u,
					onOverlayClick: M,
					onCancel: M,
					onPredict: async e => {
						m && (await f(e), N(), i(!0))
					},
					option: m,
					pollId: t.id,
					subredditId: e.belongsTo.id,
					tournamentId: t.tournamentId,
					withOverlay: !0
				}), _ && o.a.createElement(B, {
					isResolving: E,
					isTokens: null !== t.tournamentId,
					onOverlayClick: M,
					onCancel: M,
					onResolve: k,
					withOverlay: !0
				}))
			};
			var z = n("./node_modules/lodash/isNil.js"),
				H = n.n(z),
				Q = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/EducationMessage/constants.ts"),
				q = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/EducationMessage/index.tsx"),
				Z = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/PredictionEndedEducationMessage/index.m.less"),
				X = n.n(Z);
			const {
				fbt: J
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function $({
				didParticipate: e
			}) {
				const t = J._("This prediction has ended", null, {
						hk: "3VMLnq"
					}),
					n = o.a.createElement(o.a.Fragment, null, J._("The outcome is pending.", null, {
						hk: "4tsv1U"
					}), e && o.a.createElement("div", {
						className: X.a.notificationBlurb
					}, J._("You'll be notified when the results are in.", null, {
						hk: "45tyVv"
					})));
				return o.a.createElement("div", null, o.a.createElement(q.a, {
					title: t,
					message: n
				}))
			}
			var ee = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/PredictionFeatureEducationMessage/index.tsx");

			function te() {
				const e = v.fbt._("Choose the answer", null, {
						hk: "3QoLuB"
					}),
					t = v.fbt._("The prediction has ended and the outcome is needed to resolve the prediction.", null, {
						hk: "4CkrEz"
					});
				return o.a.createElement("div", null, o.a.createElement(q.a, {
					title: e,
					message: t
				}))
			}
			var ne = n("./src/reddit/icons/svgs/CoinV2/index.tsx"),
				se = n("./src/reddit/components/Econ/Prediction/UnicornIcon/index.tsx"),
				oe = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/PredictionResolvedEducationMessage/index.m.less"),
				re = n.n(oe);
			const {
				fbt: ie
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function ce({
				didParticipate: e,
				isTokens: t,
				isWinner: n,
				predictedAmount: s,
				wonAmount: r
			}) {
				return e && !n ? o.a.createElement("div", null, o.a.createElement(q.a, {
					title: ie._("Better luck next time", null, {
						hk: "1KYUZf"
					}),
					message: o.a.createElement(o.a.Fragment, null, ie._("Sorry, your prediction was wrong this time.", null, {
						hk: "4aEoP2"
					}), !!s && o.a.createElement("div", {
						className: re.a.wonOrLostAmountRow
					}, ie._("You lost {lostAmount}", [ie._param("lostAmount", o.a.createElement("div", {
						className: re.a.wonOrLostAmount
					}, t ? o.a.createElement(se.a, {
						className: re.a.coinIcon
					}) : o.a.createElement(ne.a, {
						className: re.a.coinIcon
					}), s))], {
						hk: "6091x"
					})))
				})) : e && n && s && !r ? o.a.createElement("div", null, o.a.createElement(q.a, {
					title: ie._("And the winner is... EVERYONE!", null, {
						hk: "2qfnkC"
					}),
					message: o.a.createElement(o.a.Fragment, null, ie._("Well, and no one.", null, {
						hk: "2nGCUb"
					}), o.a.createElement("div", {
						className: re.a.wonOrLostAmountRow
					}, ie._("You've been refunded {refundedAmount}", [ie._param("refundedAmount", o.a.createElement("div", {
						className: re.a.wonOrLostAmount
					}, t ? o.a.createElement(se.a, {
						className: re.a.coinIcon
					}) : o.a.createElement(ne.a, {
						className: re.a.coinIcon
					}), s))], {
						hk: "49bOe9"
					})))
				})) : e && n ? o.a.createElement("div", null, o.a.createElement(q.a, {
					title: ie._("And the winner is... YOU!", null, {
						hk: "19q97O"
					}),
					message: o.a.createElement(o.a.Fragment, null, ie._("It’s confirmed—Your prediction was spot on.", null, {
						hk: "3AtcRD"
					}), !!r && o.a.createElement("div", {
						className: re.a.wonOrLostAmountRow
					}, ie._("You won {wonAmount}", [ie._param("wonAmount", o.a.createElement("div", {
						className: re.a.wonOrLostAmount
					}, t ? o.a.createElement(se.a, {
						className: re.a.coinIcon
					}) : o.a.createElement(ne.a, {
						className: re.a.coinIcon
					}), s + r))], {
						hk: "1zg0cH"
					})))
				})) : o.a.createElement("div", null, o.a.createElement(q.a, {
					title: ie._("This prediction has ended", null, {
						hk: "3VMLnq"
					}),
					message: ie._("The outcome has been provided.", null, {
						hk: "4ccLzU"
					})
				}))
			}
			const ae = ({
				prediction: e,
				isCreator: t
			}) => {
				var n;
				const {
					endsAt: s,
					options: r,
					resolvedOptionId: i,
					tournamentId: c,
					userSelection: a,
					userWonAmount: d
				} = e, l = s < Date.now(), u = !H()(c), m = l && t && !i;
				return l ? i ? o.a.createElement(ce, {
					didParticipate: !!a,
					isTokens: u,
					isWinner: i === a,
					predictedAmount: a && (null === (n = r.find(({
						id: e
					}) => e === a)) || void 0 === n ? void 0 : n.userStakeAmount) || 0,
					wonAmount: d
				}) : m ? o.a.createElement(te, null) : o.a.createElement($, {
					didParticipate: !!a
				}) : o.a.createElement(ee.a, {
					isTokens: u,
					storageKey: Q.a.feature
				})
			};
			var de = n("./src/lib/timeUntil/index.ts"),
				le = n("./src/reddit/icons/svgs/ClockFilled/index.tsx"),
				ue = n("./src/reddit/components/Econ/Prediction/PredictionStatus/index.m.less"),
				me = n.n(ue);
			const {
				fbt: be
			} = n("./node_modules/fbt/lib/FbtPublic.js"), pe = ({
				endsAt: e,
				resolvedOptionId: t,
				isCoins: n
			}) => Date.now() > e ? o.a.createElement("div", {
				className: me.a.statusBar
			}, n && o.a.createElement(le.a, {
				className: me.a.clockIcon
			}), t ? be._("Prediction ended", null, {
				hk: "3o79Ig"
			}) : be._("Ended. Awaiting results", null, {
				hk: "1szagh"
			})) : o.a.createElement("div", {
				className: me.a.statusBar
			}, n && o.a.createElement(le.a, {
				className: me.a.clockIcon
			}), be._("Prediction ends in {expirationDuration}", [be._param("expirationDuration", Object(de.a)(new Date(e), !0))], {
				hk: "3ysXEE"
			}));
			var fe = n("./src/lib/prettyPrintNumber/index.ts");
			const {
				fbt: Ee
			} = n("./node_modules/fbt/lib/FbtPublic.js"), _e = ({
				totalVoters: e
			}) => Ee._({
				"*": "{total voters} predictions made",
				_1: "{total voters} prediction made"
			}, [Ee._param("total voters", Object(fe.b)(e)), Ee._plural(e)], {
				hk: "2u2Nv8"
			}), {
				fbt: he
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ge = ({
				prediction: e
			}) => {
				const {
					endsAt: t,
					predictionStatus: n,
					resolvedOptionId: s,
					totalStakeAmount: i,
					tournamentId: a,
					totalVoters: u
				} = e, m = Object(r.e)(l.u), b = Boolean(a), p = !b;
				return n === d.b.Cancelled || n === d.b.CancelInProgress ? o.a.createElement("div", {
					className: Object(c.a)(me.a.container, {
						[me.a.v2]: m
					})
				}, he._("Canceled", null, {
					hk: "1SL2bC"
				})) : o.a.createElement("div", {
					className: Object(c.a)(me.a.container, {
						[me.a.v2]: m,
						[me.a.coins]: p
					})
				}, b && u > 0 && o.a.createElement(o.a.Fragment, null, o.a.createElement(_e, {
					totalVoters: u
				}), m && o.a.createElement("span", null, "·")), p && i > 0 && o.a.createElement("div", {
					className: me.a.statusBar
				}, o.a.createElement(ne.a, {
					className: me.a.coinIcon
				}), i, " ", he._("added by participants", null, {
					hk: "PSq3T"
				})), o.a.createElement(pe, {
					endsAt: t,
					resolvedOptionId: s,
					isCoins: p
				}))
			};
			var Pe = n("./src/reddit/components/Econ/Prediction/hooks/useTournamentsQuery.ts"),
				Oe = n("./src/reddit/components/Econ/Tournament/Facepile/index.tsx"),
				ve = n("./src/reddit/controls/InternalLink/index.tsx"),
				ye = n("./src/reddit/hooks/usePageLayer.ts"),
				xe = n("./src/reddit/icons/svgs/Chevron/index.tsx"),
				Ce = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				Ie = n("./src/reddit/selectors/subreddit.ts"),
				Se = n("./src/reddit/components/Econ/Prediction/TournamentLink/index.m.less"),
				je = n.n(Se);
			const {
				fbt: ke
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function Ne({
				subredditId: e,
				tournamentId: t
			}) {
				const n = Object(S.a)(),
					s = Object(ye.a)(),
					i = Object(r.e)(t => Object(Ie.Q)(t, {
						subredditId: e
					})),
					c = Object(r.e)(t => Object(Ce.b)(t, {
						subredditId: e
					})),
					d = Object(a.x)(s),
					l = Object(a.I)(s),
					u = Object(a.M)(s);
				if (Object(Pe.a)(i.name), (null == c ? void 0 : c.tournamentId) !== t) return null;
				const {
					name: m,
					totalParticipantsCount: b
				} = c;
				return o.a.createElement(ve.a, {
					className: je.a.tournamentLink,
					to: `${i.url}predictions/`,
					onClick: () => {
						n(Object(I.l)({
							pageType: d ? "post_detail" : u ? "community" : l ? "profile" : "home"
						})), window.scrollTo(0, 0)
					}
				}, o.a.createElement(Oe.a, {
					className: je.a.facepile,
					subredditId: e
				}), o.a.createElement("div", {
					className: je.a.info
				}, o.a.createElement("div", {
					className: je.a.tournamentName
				}, m), o.a.createElement("div", {
					className: je.a.totalPlayers
				}, b && b > 0 ? ke._({
					"*": "{totalPlayers} tournament players",
					_1: "{totalPlayers} tournament player"
				}, [ke._param("totalPlayers", Object(fe.b)(b)), ke._plural(b)], {
					hk: "3eDpRH"
				}) : ke._("Be the first to predict!", null, {
					hk: "4Ea9sh"
				}))), o.a.createElement(xe.a, {
					className: je.a.chevron
				}))
			}
			var Ae = n("./src/reddit/components/Econ/Prediction/index.m.less"),
				Me = n.n(Ae);
			const we = Object(i.c)({
					isEditing: m.K,
					prediction: u.g,
					pollId: u.a,
					post: b.H,
					subredditOrProfile: b.U,
					userId: p.pb,
					isPredictionsTournamentPostV2Enabled: l.u
				}),
				Be = Object(a.u)({
					isCommentsPage: a.x,
					isPredictionsPage: a.N
				}),
				Fe = ({
					className: e,
					isCommentsPage: t,
					isEditing: n,
					isPredictionsPage: s,
					post: r,
					prediction: i,
					pollId: a,
					subredditOrProfile: l,
					userId: u,
					isPredictionsTournamentPostV2Enabled: m
				}) => {
					if (!a || !i || !l) return o.a.createElement(h, null);
					const {
						creatorId: b,
						tournamentId: p,
						predictionStatus: f
					} = i, E = b === u, _ = f === d.b.Cancelled || f === d.b.CancelInProgress;
					return o.a.createElement("div", {
						className: Object(c.a)(e, Me.a.container, {
							[Me.a.forCommentsPage]: t,
							[Me.a.isEditing]: t && n,
							[Me.a.v1]: !m
						}),
						onClick: e => {
							i && e.stopPropagation()
						}
					}, t && !_ && o.a.createElement(ae, {
						prediction: i,
						isCreator: E
					}), o.a.createElement(K, {
						post: r,
						prediction: i
					}), o.a.createElement(ge, {
						prediction: i
					}), !s && p && o.a.createElement(Ne, {
						subredditId: r.belongsTo.id,
						tournamentId: p
					}))
				};
			t.default = Be(Object(r.b)(we)(Fe))
		},
		"./src/reddit/components/Econ/Tournament/Facepile/index.m.less": function(e, t, n) {
			e.exports = {
				tournamentFacepile: "_2s5mTnxw-HrR3LxXr6-s9l",
				snoovatar: "_10n2BWHixtesWJB1Xu_4iY",
				userIcon: "w79K8RlYWlnCQFk_TP4Zt",
				snoovatarBackground: "_2TJo5CZBd22_s9OR3EIwI3"
			}
		},
		"./src/reddit/components/Econ/Tournament/Facepile/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				a = n("./src/reddit/components/UserIcon/UserIcon.tsx"),
				d = n("./src/reddit/helpers/userSnoovatar/index.ts"),
				l = n("./src/reddit/models/User/index.ts"),
				u = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				m = n("./src/reddit/selectors/user.ts"),
				b = n("./src/reddit/components/Econ/Tournament/Facepile/index.m.less"),
				p = n.n(b);

			function f({
				className: e,
				faceClassName: t,
				subredditId: n
			}) {
				var s;
				const b = Object(r.e)(m.X),
					f = Object(r.e)(m.k),
					E = Object(r.e)(m.C),
					_ = Object(r.e)(e => Object(u.e)(e, {
						subredditId: n
					}));
				return (null === (s = null == _ ? void 0 : _.latestParticipants) || void 0 === s ? void 0 : s.length) ? o.a.createElement("div", {
					className: Object(i.a)(p.a.tournamentFacepile, e)
				}, _.latestParticipants.slice(0, 3).map(({
					icon: e,
					name: n,
					profile: s
				}) => {
					const r = !!f && Object(l.e)(f) === n,
						{
							url: u
						} = e,
						{
							isNsfw: m
						} = s,
						_ = `tournament-facepile-face-${n}`;
					return Object(d.a)(u) ? o.a.createElement(c.a, {
						key: _,
						backgroundClassName: p.a.snoovatarBackground,
						className: Object(i.a)(p.a.snoovatar, t),
						headshot: u
					}) : o.a.createElement(a.b, {
						key: _,
						className: Object(i.a)(p.a.userIcon, t),
						iconUrl: u,
						isCurrentUser: r,
						isNSFW: m,
						isNightMode: b,
						shouldHideNSFW: E
					})
				})) : null
			}
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, n) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				c = n.n(i);
			t.a = ({
				center: e,
				className: t,
				sizePx: n = 10
			}) => o.a.createElement("div", {
				className: Object(r.a)(c.a.loadingIcon, t, {
					[c.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${n}px`
				},
				"data-testid": "LoadingIcon"
			})
		},
		"./src/reddit/helpers/economics/sortBadges.ts": function(e, t, n) {
			"use strict";

			function s(e, t) {
				if (e.placement && !t.placement) return -1;
				if (t.placement && !e.placement) return 1;
				if (e.position && !t.position) return -1;
				if (t.position && !e.position) return 1;
				let n = 0;
				return e.placement && t.placement && (n = e.placement.localeCompare(t.placement)), 0 === n && e.position && t.position && (n = e.position - t.position), 0 === n && (n = e.title.localeCompare(t.title)), n
			}

			function o(e) {
				return [...e].sort(s)
			}
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return o
			}))
		},
		"./src/reddit/helpers/richTextJson/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return c
			})), n.d(t, "g", (function() {
				return a
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "a", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "d", (function() {
				return p
			})), n.d(t, "e", (function() {
				return f
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/reddit/models/RichTextJson/index.ts");
			const o = "giphy|",
				r = "emote|",
				i = "|downsized";

			function c(e, t) {
				return o + e + (t ? i : "")
			}

			function a(e) {
				return !!(null == e ? void 0 : e.startsWith(o))
			}

			function d(e) {
				return !!(null == e ? void 0 : e.startsWith(r))
			}

			function l(e) {
				var t;
				const n = null === (t = null == e ? void 0 : e.media) || void 0 === t ? void 0 : t.mediaMetadata;
				return !!n && Object.keys(n).some(a)
			}

			function u(e) {
				var t;
				const n = null === (t = null == e ? void 0 : e.media) || void 0 === t ? void 0 : t.mediaMetadata;
				return !!n && Object.keys(n).some(d)
			}

			function m(e) {
				let t = e.substring(o.length);
				return t.indexOf("|") && (t = t.split("|")[0]), `https://giphy.com/gifs/${t}`
			}

			function b(e, t) {
				return (Array.isArray(e) ? e : e.c && Array.isArray(e.c) ? e.c : []).reduce((e, n) => [...e, ...b(n, t)], !Array.isArray(e) && t(e) ? [e] : [])
			}

			function p(e) {
				return b(e, s.F).map(e => e.id)
			}

			function f(e) {
				return b(e, e => e.e === s.o).map(e => e.u)
			}
		},
		"./src/reddit/hooks/usePageLayer.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/contexts/PageLayer/index.tsx");
			t.a = s.eb
		},
		"./src/reddit/icons/svgs/ClockFilled/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 16 16"
			}, o.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M11.901 11.809C11.803 11.909 11.673 11.959 11.543 11.959C11.417 11.959 11.291 11.913 11.194 11.817L7.651 8.358C7.554 8.264 7.5 8.135 7.5 8V3C7.5 2.724 7.724 2.5 8 2.5C8.276 2.5 8.5 2.724 8.5 3V7.789L11.892 11.102C12.09 11.294 12.094 11.611 11.901 11.809ZM8 0C3.589 0 0 3.589 0 8C0 12.412 3.589 16 8 16C12.411 16 16 12.412 16 8C16 3.589 12.411 0 8 0Z",
				fill: "inherit"
			}))
		},
		"./src/reddit/icons/svgs/Plus/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				version: "1.1"
			}, o.a.createElement("g", {
				stroke: "none"
			}, o.a.createElement("g", {
				transform: "translate(-34.000000, -136.000000)",
				fill: "inherit"
			}, o.a.createElement("path", {
				d: "M45.2,147.2 L48.8,147.2 C49.46272,147.2 50,146.66272 50,146 C50,145.33728 49.46272,144.8 48.8,144.8 L45.2,144.8 L45.2,141.2 C45.2,140.53728 44.66272,140 44,140 C43.33728,140 42.8,140.53728 42.8,141.2 L42.8,144.8 L39.2,144.8 C38.53728,144.8 38,145.33728 38,146 C38,146.66272 38.53728,147.2 39.2,147.2 L42.8,147.2 L42.8,150.8 C42.8,151.46272 43.33728,152 44,152 C44.66272,152 45.2,151.46272 45.2,150.8 L45.2,147.2 Z"
			}))))
		},
		"./src/reddit/models/Badge/managementPage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "d", (function() {
				return c
			}));
			var s, o, r = n("./src/reddit/models/Badge/index.ts");
			! function(e) {
				e.Loyalty = "loyalty", e.Achievement = "achievement", e.Cosmetic = "cosmetic"
			}(s || (s = {})),
			function(e) {
				e.Gallery = "gallery", e.MyBadges = "my-badges"
			}(o || (o = {}));
			const i = {
					[s.Loyalty]: r.a.First,
					[s.Achievement]: r.a.Second,
					[s.Cosmetic]: void 0
				},
				c = e => e === r.a.First ? s.Loyalty : e === r.a.Second ? s.Achievement : s.Cosmetic
		},
		"./src/reddit/models/Payments/index.ts": function(e, t, n) {
			"use strict";
			var s, o, r, i;
			n.d(t, "b", (function() {
					return o
				})), n.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(s || (s = {})),
				function(e) {
					e.PayPal = "PAYPAL", e.Stripe = "STRIPE"
				}(o || (o = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(r || (r = {})),
				function(e) {
					e.Comment = "comment", e.Post = "post", e.Profile = "profile", e.Subreddit = "subreddit"
				}(i || (i = {}))
		},
		"./src/reddit/reducers/economics/paymentSystems/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var s, o = n("./src/reddit/actions/economics/paymentSystems/constants.ts");
			! function(e) {
				e[e.Failure = 0] = "Failure", e[e.Fetched = 1] = "Fetched", e[e.NotFetched = 2] = "NotFetched", e[e.Pending = 3] = "Pending"
			}(s || (s = {}));
			const r = {
				status: s.NotFetched
			};
			t.b = (e = r, t) => {
				switch (t.type) {
					case o.a:
						if (e.status === s.Fetched && e.data.stripe && e.data.stripe.sources) {
							const n = t.payload.cardId,
								{
									[n]: s,
									...o
								} = e.data.stripe.sources;
							return {
								...e,
								data: {
									...e.data,
									stripe: {
										...e.data.stripe,
										sources: o
									}
								}
							}
						}
						return e;
					case o.e:
						if (e.status === s.Fetched && e.data.braintree && e.data.braintree.sources) {
							const n = t.payload.sourceId,
								{
									[n]: s,
									...o
								} = e.data.braintree.sources;
							return {
								...e,
								data: {
									...e.data,
									braintree: {
										...e.data.braintree,
										sources: o
									}
								}
							}
						}
						return e;
					case o.b:
						return {
							error: t.payload.error, status: s.Failure
						};
					case o.c:
						return {
							data: t.payload, status: s.Fetched
						};
					case o.d:
						return {
							status: s.Pending
						};
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/economics/subredditPremium/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s, o = n("./src/lib/constants/specialMembership.ts"),
				r = n("./src/reddit/actions/economics/subredditPremium/constants.ts"),
				i = n("./src/reddit/helpers/economics/sortBadges.ts"),
				c = n("./src/reddit/models/Badge/index.ts"),
				a = n("./src/reddit/models/Badge/managementPage.ts");
			! function(e) {
				e[e.NotFetched = 0] = "NotFetched", e[e.Fetched = 1] = "Fetched"
			}(s || (s = {}));
			const d = {};

			function l(e) {
				return "userId" in e
			}

			function u(e, t, n, s) {
				e.forEach(e => {
					e.collections && Object.keys(e.collections).forEach(o => {
						let r;
						(r = e.placement ? e.placement === c.a.First ? s[a.a.Loyalty][o] : s[a.a.Achievement][o] : l(e) ? s[a.a.Cosmetic][a.c.MyBadges][o] : s[a.a.Cosmetic][a.c.Gallery][o]) && (l(e) ? n.has(e.id) && r.unlocked.push(e) : t.has(e.id) || r.locked.push(e))
					})
				})
			}

			function m(e) {
				const t = (e, t) => {
					const n = parseInt(e.price || "0"),
						s = parseInt(t.price || "0");
					return n === s ? Object(i.b)(e, t) : n - s
				};
				return e.locked.sort(t), e.unlocked.sort(t), e
			}

			function b(e, t) {
				return Object.keys(e).map(t => e[t]).filter(e => !!e.locked.length || !!e.unlocked.length || e.id === o.a).map(m).sort((e, n) => {
					const s = t[e.id],
						o = t[n.id];
					return Object(i.b)(s, o)
				})
			}

			function p(e) {
				const t = {
					[a.a.Loyalty]: {},
					[a.a.Achievement]: {},
					[a.a.Cosmetic]: {
						[a.c.Gallery]: {},
						[a.c.MyBadges]: {}
					}
				};
				Object.keys(e.collections).forEach(n => {
					const s = e.collections[n],
						o = {
							description: s.description,
							highlight: s.extra && s.extra.style && s.extra.style.color,
							id: s.id,
							locked: [],
							title: s.title,
							unlocked: []
						};
					t[a.a.Loyalty][n] = {
						...o,
						locked: [],
						unlocked: []
					}, t[a.a.Achievement][n] = {
						...o,
						locked: [],
						unlocked: []
					}, t[a.a.Cosmetic][a.c.Gallery][n] = {
						...o,
						locked: [],
						unlocked: []
					}, t[a.a.Cosmetic][a.c.MyBadges][n] = {
						...o,
						locked: [],
						unlocked: []
					}
				});
				const n = new Set;
				e.userOwnedBadges.forEach(t => {
					const s = e.badges[t];
					s && n.add(s.type)
				});
				const s = new Set(e.userOwnedBadges);
				return u(Object.keys(e.badges).map(t => e.badges[t]), n, s, t), u(Object.keys(e.products).map(t => e.products[t]), n, s, t), {
					collections: {
						[a.a.Loyalty]: b(t[a.a.Loyalty], e.collections),
						[a.a.Achievement]: b(t[a.a.Achievement], e.collections),
						[a.a.Cosmetic]: {
							[a.c.Gallery]: b(t[a.a.Cosmetic][a.c.Gallery], e.collections),
							[a.c.MyBadges]: b(t[a.a.Cosmetic][a.c.MyBadges], e.collections)
						}
					},
					subscription: e.subscription,
					userOwnedBadges: e.userOwnedBadges.map(t => e.badges[t]).filter(Boolean)
				}
			}
			t.b = (e = d, t) => {
				switch (t.type) {
					case r.a: {
						const {
							subredditId: n
						} = t.payload, o = e[n];
						return o && o.status === s.Fetched ? {
							...e,
							[n]: {
								...o,
								data: {
									...o.data
								},
								raw: {
									...o.raw
								}
							}
						} : e
					}
					case r.h: {
						const {
							subredditId: n
						} = t.payload, o = e[n];
						return o && o.status === s.Fetched ? {
							...e,
							[n]: {
								...o,
								data: {
									...o.data,
									subscription: {
										...o.data.subscription || {},
										settings: {
											renew: !1
										}
									}
								},
								raw: {
									...o.raw,
									subscription: {
										...o.raw.subscription || {},
										settings: {
											renew: !1
										}
									}
								}
							}
						} : e
					}
					case r.i: {
						const n = t.payload;
						return {
							...e,
							[n.subredditId]: {
								raw: n,
								data: p(n),
								status: s.Fetched
							}
						}
					}
					default:
						return e
				}
			}
		},
		"./src/reddit/selectors/economics.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return E
			})), n.d(t, "o", (function() {
				return _
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "x", (function() {
				return g
			})), n.d(t, "f", (function() {
				return P
			})), n.d(t, "i", (function() {
				return O
			})), n.d(t, "q", (function() {
				return v
			})), n.d(t, "h", (function() {
				return y
			})), n.d(t, "z", (function() {
				return x
			})), n.d(t, "l", (function() {
				return C
			})), n.d(t, "n", (function() {
				return I
			})), n.d(t, "e", (function() {
				return S
			})), n.d(t, "d", (function() {
				return j
			})), n.d(t, "j", (function() {
				return k
			})), n.d(t, "p", (function() {
				return N
			})), n.d(t, "k", (function() {
				return w
			})), n.d(t, "r", (function() {
				return F
			})), n.d(t, "y", (function() {
				return D
			})), n.d(t, "u", (function() {
				return L
			})), n.d(t, "v", (function() {
				return T
			})), n.d(t, "b", (function() {
				return R
			})), n.d(t, "w", (function() {
				return U
			})), n.d(t, "s", (function() {
				return V
			})), n.d(t, "t", (function() {
				return G
			})), n.d(t, "g", (function() {
				return Y
			})), n.d(t, "m", (function() {
				return W
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/reddit/featureFlags/index.ts"),
				o = n("./src/reddit/helpers/economics/sortBadges.ts"),
				r = n("./src/reddit/helpers/richTextJson/index.ts"),
				i = n("./src/reddit/models/Badge/index.ts"),
				c = n("./src/reddit/models/Badge/managementPage.ts"),
				a = n("./src/reddit/models/Payments/index.ts"),
				d = n("./src/reddit/models/Product/index.ts"),
				l = n("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				u = n("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				m = n("./src/reddit/selectors/commentSelector.ts"),
				b = n("./src/reddit/selectors/gold/powerups/index.ts"),
				p = n("./src/reddit/selectors/gold/powerups/benefitSettings.ts");
			const f = [],
				E = (e, t) => {
					const n = e.economics.subredditPremium[t];
					if (n && n.status === u.a.Fetched) {
						const e = n.data.subscription,
							t = e && e.active;
						if (t) {
							let e = Object.keys(t);
							return e.length > 1 && (e = e.filter(e => "provisional_membership" !== e)), t[e[0]] || null
						}
					}
					return null
				},
				_ = (e, t) => {
					const n = E(e, t);
					return n && n.endsAt || null
				};
			var h;
			! function(e) {
				e[e.DontKnow = 0] = "DontKnow", e[e.NotSubscribed = 1] = "NotSubscribed", e[e.Subscribed = 2] = "Subscribed"
			}(h || (h = {}));
			const g = (e, t) => {
					const n = e.economics.subredditPremium[t];
					if (n && n.status === u.a.Fetched) {
						const n = _(e, t),
							s = Date.now();
						return n && s < n ? h.Subscribed : h.NotSubscribed
					}
					return h.DontKnow
				},
				P = (e, t) => {
					const n = e.user.account,
						s = e.economics.subredditPremium[t];
					if (n && s && s.status === u.a.Fetched) {
						const s = ((e.users.appliedBadges[n.id] || {})[t] || f).map(t => e.badges.models[t]).filter(Boolean);
						if (s) return {
							[c.a.Loyalty]: s.find(e => e.placement === i.a.First),
							[c.a.Achievement]: s.find(e => e.placement === i.a.Second),
							[c.a.Cosmetic]: s.find(e => !e.placement)
						}
					}
					return {
						[c.a.Loyalty]: void 0,
						[c.a.Achievement]: void 0,
						[c.a.Cosmetic]: void 0
					}
				};

			function O(e, t) {
				return (null == e ? void 0 : e.length) ? Object(o.a)(e.map(e => t[e]).filter(Boolean)) : f
			}
			const v = (e, t, n) => {
					var o;
					if (!s.d.spBadges(e)) return f;
					return O(null === (o = e.users.appliedBadges[n]) || void 0 === o ? void 0 : o[t], e.badges.models)
				},
				y = (e, t) => {
					const n = e.economics.subredditPremium[t.subredditId];
					if (n && n.status === u.a.Fetched) {
						const e = n.raw.collections[t.collectionId];
						if (e) return {
							highlight: e.extra && e.extra.style && e.extra.style.color,
							title: e.title
						}
					}
				};

			function x(e, t) {
				const n = (e.economics.me.data.specialMemberships || {})[t];
				return !!(n && n.settings && n.settings.optOut)
			}

			function C(e, t) {
				const {
					badge: n,
					subredditId: s
				} = t, o = e.user.account ? e.user.account.id : void 0;
				if (Object(i.e)(n) && n.userId === o) return n;
				const r = e.badges.models,
					c = e.user.ownedBadges[s] || {},
					a = Object(i.e)(n) ? n.type : n.id;
				return Object.keys(c).map(e => r[e]).find(e => e && e.type === a)
			}

			function I(e, t, n, s) {
				const o = e.economics.subredditPremium[t];
				if (o && o.status === u.a.Fetched) {
					if (n === c.a.Loyalty || n === c.a.Achievement) return o.data.collections[n];
					if (n === c.a.Cosmetic && s) return o.data.collections[n][s]
				}
				return f
			}

			function S(e, t) {
				const n = I(e, t, c.a.Loyalty).find(e => "membership" === e.id);
				return n ? [].concat(n.locked, n.unlocked).filter(e => e.position).sort((e, t) => e.position - t.position) : f
			}

			function j(e, t) {
				const n = e.economics.subredditPremium[t];
				if (n && n.status === u.a.Fetched) {
					const e = n.data.collections[c.a.Cosmetic];
					return Object.values(e).reduce((e, t) => e.concat(t), []).reduce((e, t) => e.concat(t.locked, t.unlocked), []).filter(i.f)
				}
				return f
			}

			function k(e, t) {
				return I(e, t, c.a.Cosmetic, c.c.Gallery).some(e => e.locked.some(e => Object(i.f)(e) || !!e.price))
			}
			const N = e => {
				const t = [],
					n = e.economics.paymentSystems;
				if (n.status === l.a.Fetched && n.data.stripe && n.data.stripe.sources) {
					const e = n.data.stripe.sources;
					for (const n in e) {
						const s = e[n];
						t.push({
							display: `${s.brand} •••• ${s.last4}`,
							id: n,
							type: a.a.SavedStripe
						})
					}
				}
				if (n.status === l.a.Fetched && n.data.braintree && n.data.braintree.sources) {
					const e = n.data.braintree.sources;
					for (const n in e) {
						const s = e[n];
						"PayPal" === s.brand && t.push({
							display: "PayPal",
							id: s.id,
							type: a.a.SavedPayPal
						})
					}
				}
				return t
			};
			var A;
			! function(e) {
				e[e.Fetched = 0] = "Fetched", e[e.Fetching = 1] = "Fetching", e[e.NotFetched = 2] = "NotFetched"
			}(A || (A = {}));
			const M = {
					prices: {},
					member: "Supporter",
					memberPlural: "Supporters",
					memberAlt: "Subreddit Supporter",
					memberAltPlural: "Subreddit Supporters",
					membership: "Membership",
					membershipAlt: "Supporter Membership"
				},
				w = (e, t) => Object.values(e.products.models).filter(e => e.type === d.a.Membership && t && e.subredditId === t),
				B = (e, t) => {
					if (!t) return {};
					const n = M.prices;
					w(e, t).forEach(e => {
						e.price && e.currency && (n[e.currency] = e.price)
					});
					const s = E(e, t);
					return s && s.price && s.currency && (n[s.currency] = s.price), n
				},
				F = (e, t) => {
					var n, s, o, r;
					const i = (null === (r = null === (o = null === (s = null === (n = e.features) || void 0 === n ? void 0 : n.crypto) || void 0 === s ? void 0 : s.points) || void 0 === o ? void 0 : o[t || ""]) || void 0 === r ? void 0 : r.nomenclature) || M;
					return {
						prices: B(e, t),
						member: i.member || M.member,
						memberPlural: i.memberPlural || M.memberPlural,
						memberAlt: i.memberAlt || M.memberAlt,
						memberAltPlural: i.memberAltPlural || M.memberAltPlural,
						membership: i.membership || M.membership,
						membershipAlt: i.membershipAlt || M.membershipAlt
					}
				},
				D = e => {
					const t = e.economics.paymentSystems;
					return !!(t.status === l.a.Fetched && t.data && t.data.tips && t.data.tips.usdr && t.data.tips.usdr.allowed)
				},
				L = (e, t) => {
					const n = e.user.ownedBadges[t] || {};
					return !!Object.keys(n).length
				},
				T = e => {
					const t = e.economics.paymentSystems;
					return t.status === l.a.Fetched && !!t.data && !!t.data.stripe && !!t.data.stripe.stripeAccountId
				},
				R = (e, {
					subredditId: t
				}) => {
					if (!t) return;
					return e.economics.emotes[t]
				},
				U = (e, t) => {
					const n = t && e.economics.gifs[t];
					return !!n && n.hasGifProduct
				},
				V = (e, t, n) => {
					if (Object(b.r)(e, {
							subredditId: t
						})) return !0;
					const s = "replyToPost" !== n && Object(m.b)(e, {
						commentId: n
					});
					return !(!s || !Object(r.a)(s))
				},
				G = (e, t, n) => {
					if (!Object(p.b)(e, {
							subredditId: t
						})) return !1;
					if (Object(b.s)(e, {
							subredditId: t
						})) return !0;
					const o = "replyToPost" !== n && Object(m.b)(e, {
						commentId: n
					});
					if (o && Object(r.b)(o)) return !0;
					const i = s.d.spGiphy(e),
						c = U(e, t);
					return !(!i || !c) || i && c
				},
				Y = (e, t, n) => {
					if (t) {
						const s = e.economics.banners.dismissedBanners[t];
						if (s && s.data) return !!s.data[n]
					}
				},
				W = e => e.economics.pointsCopy.data
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction.fb264bd63631111f341c.js.map