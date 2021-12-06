// https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction.299c6beb28fbfa23ca15.js
// Retrieved at 12/6/2021, 6:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Econ-Prediction"], {
		"./src/lib/constants/specialMembership.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			const o = "custom"
		},
		"./src/lib/timeUntil/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/constants/index.ts");
			const r = [s.oc, s.pb, s.B, s.Q, s.kb, s.Rb],
				i = {
					[s.Rb]: e => o.fbt._({
						"*": "{number} seconds",
						_1: "1 second"
					}, [o.fbt._plural(e, "number")], {
						hk: "3pTp9Z"
					}),
					[s.kb]: e => o.fbt._({
						"*": "{number} minutes",
						_1: "1 minute"
					}, [o.fbt._plural(e, "number")], {
						hk: "2gB3sf"
					}),
					[s.Q]: e => o.fbt._({
						"*": "{number} hours",
						_1: "1 hour"
					}, [o.fbt._plural(e, "number")], {
						hk: "2w4n8B"
					}),
					[s.B]: e => o.fbt._({
						"*": "{number} days",
						_1: "1 day"
					}, [o.fbt._plural(e, "number")], {
						hk: "3zIGRH"
					}),
					[s.pb]: e => o.fbt._({
						"*": "{number} months",
						_1: "1 month"
					}, [o.fbt._plural(e, "number")], {
						hk: "28DQqD"
					}),
					[s.oc]: e => o.fbt._({
						"*": "{number} years",
						_1: "1 year"
					}, [o.fbt._plural(e, "number")], {
						hk: "Gqzh3"
					})
				},
				a = {
					[s.Rb]: e => o.fbt._("{amount}s", [o.fbt._param("amount", String(e))], {
						hk: "F4qog"
					}),
					[s.kb]: e => o.fbt._("{amount}m", [o.fbt._param("amount", String(e))], {
						hk: "43tM5H"
					}),
					[s.Q]: e => o.fbt._("{amount}h", [o.fbt._param("amount", String(e))], {
						hk: "19NsxU"
					}),
					[s.B]: e => o.fbt._("{amount}d", [o.fbt._param("amount", String(e))], {
						hk: "39MDc9"
					}),
					[s.pb]: e => o.fbt._("{amount}m", [o.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[s.oc]: e => o.fbt._("{amount}y", [o.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					}),
					[s.pb]: e => o.fbt._("{amount}m", [o.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[s.oc]: e => o.fbt._("{amount}y", [o.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					})
				};

			function c(e, t = !1, n = !1) {
				const c = Date.now(),
					d = new Date(e).getTime(),
					l = {
						[s.oc]: "",
						[s.pb]: "",
						[s.B]: "",
						[s.Q]: "",
						[s.kb]: "",
						[s.Rb]: ""
					};
				let u = d - c;
				if (u <= 0) return o.fbt._("a moment", null, {
					hk: "3QLaye"
				}).toString();
				for (const o of r) {
					const e = Math.floor(u / o);
					e && (l[o] = (t ? a : i)[o](e).toString()), u -= e * o
				}
				const m = r.map(e => l[e]).filter(Boolean).slice(0, 2).join(" ");
				return t || n ? m : o.fbt._("{amount of time left} left", [o.fbt._param("amount of time left", m)], {
					hk: "7VjAI"
				}).toString()
			}
		},
		"./src/reddit/actions/economics/paymentSystems/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "e", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return a
			}));
			const o = "ECONOMICS__PAYMENT_SYSTEM__CARD_DELETE_SUCCESS",
				s = "ECONOMICS__PAYMENT_SYSTEM__PAYPAL_DELETE_SUCCESS",
				r = "ECONOMICS__PAYMENT_SYSTEM__INFO_FAILURE",
				i = "ECONOMICS__PAYMENT_SYSTEM__INFO_FETCHED",
				a = "ECONOMICS__PAYMENT_SYSTEM__INFO_PENDING"
		},
		"./src/reddit/actions/economics/subredditPremium/actionCreators.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "g", (function() {
				return p
			})), n.d(t, "h", (function() {
				return b
			})), n.d(t, "i", (function() {
				return f
			})), n.d(t, "j", (function() {
				return _
			}));
			var o = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/modal.ts"),
				r = n("./src/reddit/constants/modals.ts"),
				i = n("./src/reddit/actions/economics/subredditPremium/constants.ts");
			const a = Object(o.a)(i.a),
				c = Object(o.a)(i.b),
				d = Object(o.a)(i.c),
				l = Object(o.a)(i.d),
				u = Object(o.a)(i.e),
				m = Object(o.a)(i.f),
				p = Object(o.a)(i.g),
				b = Object(o.a)(i.h),
				f = Object(o.a)(i.i),
				_ = e => Object(s.h)(r.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, {
					uploadAssetType: e
				})
		},
		"./src/reddit/actions/economics/subredditPremium/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "i", (function() {
				return u
			}));
			const o = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_APPLIED",
				s = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_BADGE_TYPE_CHANGED",
				r = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_MODAL_OPENED",
				i = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_VIEW_CHANGED",
				a = "ECONOMICS__SUBREDDIT_PREMIUM__EDITOR_PRODUCTS_FETCH_SUCCESS",
				c = "ECONOMICS__SUBREDDIT_PREMIUM__ORDER_SUCCESS",
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
			var o;
			n.d(t, "a", (function() {
					return o
				})),
				function(e) {
					e.nonDismissable = "predictionEducationNonDismissable", e.creation = "predictionEducationCreation", e.feature = "predictionEducationFeature"
				}(o || (o = {}))
		},
		"./src/reddit/components/Econ/Prediction/PredictionEducationMessage/EducationMessage/index.m.less": function(e, t, n) {
			e.exports = {
				educationMessage: "_3fy4maW8GQWdzcWGdeMbsa",
				isShortWidth: "_28YkWXOPICkzcS5IobwdZx",
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
				return p
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/hooks/useLocalStorage.ts"),
				a = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/icons/fonts/index.tsx"),
				d = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/EducationMessage/constants.ts"),
				l = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/EducationMessage/index.m.less"),
				u = n.n(l);
			const {
				fbt: m
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function p({
				message: e,
				newBadge: t,
				onClose: n,
				onView: l,
				storageKey: p = d.a.nonDismissable,
				title: b,
				isFullWidth: f
			}) {
				const _ = p !== d.a.nonDismissable,
					[E, h] = Object(i.a)(p, !_ || !1),
					[g, v] = Object(o.useState)(!1);
				return Object(o.useEffect)(() => {
					E || g || !l || (l(), v(!0))
				}, [E, g, l]), _ && E ? null : s.a.createElement("div", {
					className: Object(r.a)(u.a.educationMessage, {
						[u.a.isShortWidth]: !f
					})
				}, s.a.createElement("div", {
					className: u.a.titleRow
				}, s.a.createElement("div", {
					className: u.a.header
				}, s.a.createElement("h3", {
					className: u.a.title
				}, b), t && s.a.createElement("div", {
					className: u.a.newBadge
				}, m._("New", null, {
					hk: "2N0EBb"
				}))), _ && s.a.createElement(a.t, {
					"aria-label": m._("Close", null, {
						hk: "2UjnU"
					}),
					className: u.a.closeButton,
					Icon: Object(c.b)("close"),
					onClick: () => {
						h(!0), n && n()
					},
					priority: a.c.Plain
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
				return a
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/EducationMessage/index.tsx");

			function a({
				isTokens: e,
				onClose: t,
				onView: n,
				storageKey: s
			}) {
				const a = o.fbt._("Predictions", null, {
						hk: "3X6mhV"
					}),
					c = e ? o.fbt._("Redditors add tokens to their answers, then everyone who gets it right splits the winnings", null, {
						hk: "FDY0l"
					}) : o.fbt._("Redditors add coins to their answers, then everyone who gets it right splits the winnings", null, {
						hk: "4eP2MR"
					});
				return r.a.createElement("div", null, r.a.createElement(i.a, {
					onClose: t,
					onView: n,
					title: a,
					newBadge: !0,
					message: c,
					storageKey: s
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
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/actions/economics/predictions/index.ts"),
				a = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				c = n("./src/reddit/selectors/subreddit.ts");

			function d(e) {
				const t = Object(r.d)(),
					n = Object(r.e)(t => Object(c.R)(t, {
						subredditId: e
					})),
					o = Object(r.e)(t => Object(a.h)(t, {
						subredditId: e
					})),
					d = Object(r.e)(t => Object(a.j)(t, {
						subredditId: e
					})),
					l = s.a.useCallback(() => {
						n.name && t(Object(i.l)(n.name))
					}, [n.name, t]);
				return s.a.useEffect(() => {
					d || o || l()
				}, [d, o, l]), {
					isFetching: d,
					isFetched: o,
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
				return Te
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/contexts/PageLayer/index.tsx"),
				d = n("./src/reddit/models/Prediction/index.ts"),
				l = n("./src/reddit/selectors/experiments/econ/index.ts"),
				u = n("./src/reddit/selectors/poll/index.ts"),
				m = n("./src/reddit/selectors/postCreations.ts"),
				p = n("./src/reddit/selectors/posts.ts"),
				b = n("./src/reddit/selectors/user.ts"),
				f = n("./src/reddit/components/Econ/Prediction/NoPredictionError/index.m.less"),
				_ = n.n(f);
			const {
				fbt: E
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var h = ({
					className: e
				}) => s.a.createElement("div", {
					className: Object(a.a)(_.a.container, e)
				}, E._("Error: Could not load prediction", null, {
					hk: "3SDSgH"
				})),
				g = n("./src/reddit/actions/post.ts"),
				v = n("./src/reddit/components/Econ/Prediction/hooks/useDelayedUpvoteAnimation.tsx"),
				x = n("./src/reddit/models/Vote/index.ts");
			var P = n("./node_modules/fbt/lib/FbtPublic.js"),
				O = n("./src/reddit/actions/economics/predictions/index.ts"),
				y = n("./src/reddit/hooks/useToast.tsx");
			var C = n("./src/reddit/actions/economics/helpers/index.ts"),
				I = n("./src/reddit/helpers/trackers/predictions.ts"),
				S = n("./src/reddit/hooks/useTracking.ts");
			var j = n("./src/reddit/components/Econ/Prediction/PredictionModal/index.tsx"),
				k = n("./src/higherOrderComponents/asModal/index.tsx"),
				M = n("./src/reddit/controls/Button/index.tsx"),
				N = n("./src/reddit/icons/fonts/index.tsx"),
				w = n("./src/reddit/components/Econ/Prediction/ResolutionModal/index.m.less"),
				A = n.n(w);
			var B = Object(k.a)((function({
					isResolving: e,
					isTokens: t,
					onCancel: n,
					onResolve: o
				}) {
					return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
						className: A.a.header
					}, s.a.createElement(M.t, {
						className: A.a.closeButton,
						Icon: Object(N.b)("close"),
						priority: M.c.Plain,
						onClick: n
					}), s.a.createElement("h1", null, P.fbt._("Confirm Your Answer", null, {
						hk: "4yIXaD"
					}))), s.a.createElement("div", {
						className: A.a.content
					}, s.a.createElement("p", {
						className: A.a.message
					}, t ? P.fbt._("Once you hit Submit, the answer is final and tokens will be distributed to the winners. After resolving this prediction you will not be able to delete or remove it.", null, {
						hk: "1rtAzB"
					}) : P.fbt._("Once you hit Submit, the answer is final and coins will be distributed to the winners. After resolving this prediction you will not be able to delete or remove it.", null, {
						hk: "1M6iWL"
					})), s.a.createElement("div", {
						className: A.a.actions
					}, s.a.createElement(M.o, {
						disabled: e,
						onClick: n,
						priority: M.c.Secondary,
						redditStyle: !0,
						size: M.d.S
					}, P.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), s.a.createElement(M.l, {
						className: A.a.submitButton,
						disabled: e,
						onClick: () => {
							o()
						},
						redditStyle: !0,
						size: M.d.S
					}, P.fbt._("Submit", null, {
						hk: "4aU3dh"
					})))))
				})),
				T = n("./src/reddit/components/Econ/Prediction/PredictionOption/index.tsx"),
				F = n("./src/reddit/components/Econ/Prediction/PredictionOption/PredictionChangeOption.tsx"),
				L = n("./src/reddit/components/Econ/Prediction/PredictionOption/SneakPeek.tsx"),
				D = n("./src/reddit/components/Econ/Prediction/VoteAnimation/index.tsx"),
				R = n("./src/reddit/components/Econ/Prediction/PredictionCard/v1/index.m.less"),
				U = n.n(R);
			const V = ({
				post: e,
				prediction: t,
				selectedOptionId: n,
				isVoteAnimation: i,
				onVoteAnimationEnd: a,
				onSelectOption: c
			}) => {
				const {
					creatorId: m,
					endsAt: p,
					options: f,
					resolvedOptionId: _,
					totalVoters: E,
					tournamentId: h,
					userSelection: g,
					predictionStatus: v,
					voteUpdatesRemained: x
				} = t, P = Object(r.e)(t => {
					const n = Object(u.g)(t, {
						postId: e.id
					});
					return Boolean((null == n ? void 0 : n.userSelection) && !(null == n ? void 0 : n.resolvedOptionId) && Object(l.z)(t))
				}), O = Object(r.e)(b.pb), y = Object(r.e)(b.K), [C, I] = Object(o.useState)(!1), S = m === O, j = p < Date.now(), k = j && S && !_, M = v === d.b.Cancelled || v === d.b.CancelInProgress;
				return s.a.useEffect(() => {
					I(!1)
				}, [g]), s.a.createElement("div", {
					className: U.a.poll
				}, f.map(e => s.a.createElement(D.a, {
					endsAt: p,
					key: `prediction-option-${e.id}`,
					isShowingVoteAnimation: i && g === e.id,
					onAnimationEnd: a
				}, s.a.createElement(T.a, {
					disabled: i,
					isCancelled: M,
					isEnded: j,
					isSelected: n === e.id,
					needsResolution: k,
					option: e,
					onClick: () => c(e),
					resolvedOptionId: _,
					tournamentId: h,
					userSelection: g,
					userIsLoggedOut: !y,
					votePercentage: (g || j || C) && e.voteCount ? Math.floor(e.voteCount / E * 100) : null,
					isShowingHint: C
				}))), !M && s.a.createElement(L.a, {
					disabled: i || C || !!g,
					isEnded: j,
					userSelection: g,
					isShowingHint: C,
					tournamentId: h,
					postId: e.id,
					onReveal: () => I(!0)
				}), !M && P && s.a.createElement(F.a, {
					isLimitReached: 0 === x,
					postId: e.id,
					options: f,
					selectedOptionId: g
				}))
			};
			var W = n("./src/reddit/components/Econ/Prediction/PredictionCard/v2/index.tsx"),
				G = n("./src/reddit/components/Econ/Prediction/PredictionCard/index.m.less"),
				Y = n.n(G);
			const H = ({
				post: e,
				prediction: t
			}) => {
				const [n, i] = Object(o.useState)(!1), a = Object(r.e)(l.y), c = Object(r.e)(b.pb), {
					isLoading: u,
					selectedVoteOption: m,
					setVoteOptionId: p,
					predict: f
				} = function(e) {
					const [t, n] = Object(o.useState)(!1), [s, i] = Object(o.useState)(null), a = Object(S.a)(), c = Object(r.e)(b.e), l = Object(y.a)(), u = Object(r.d)(), m = e.options.find(({
						id: e
					}) => e === s);
					return {
						isLoading: t,
						selectedVoteOption: m,
						setVoteOptionId: i,
						predict: async t => {
							const o = e.id;
							if (!m) return;
							if (t.currency === d.a.Coins && t.amount > c) return Object(C.promptUserToBuyMoreCoins)(), void a(I.b);
							const s = t.amount;
							if (e.endsAt < Date.now()) l(P.fbt._("Error: Failed to make prediction. This prediction has already ended", null, {
								hk: "22UWEr"
							}));
							else {
								e.tournamentId ? a(Object(I.o)({
									pollId: o,
									selectedNumberTokens: s
								})) : a(Object(I.n)({
									pollId: o,
									selectedNumberCoins: s,
									totalStakeAmount: e.totalStakeAmount
								})), n(!0);
								try {
									await u(Object(O.q)({
										coinPackageId: t.id,
										optionId: m.id,
										postId: o,
										price: s
									}))
								} catch (r) {
									l(P.fbt._("Error: Failed to make prediction, please try again later", null, {
										hk: "1tECsx"
									}))
								}
								n(!1), i(null)
							}
						}
					}
				}(t), {
					isLoading: _,
					resolveOptionId: E,
					setResolveOptionId: h,
					resolve: k
				} = function(e) {
					const [t, n] = Object(o.useState)(!1), [s, i] = Object(o.useState)(null), a = Object(y.a)(), c = Object(r.d)();
					return {
						isLoading: t,
						resolveOptionId: s,
						setResolveOptionId: i,
						resolve: async () => {
							if (n(!0), !s) throw new Error("Failed to create prediction, missing selected option");
							try {
								await c(Object(O.p)({
									optionId: s,
									postId: e
								}))
							} catch (t) {
								a(P.fbt._("Error: Failed to resolve prediction, please try again later", null, {
									hk: "3Ve2Mb"
								}))
							}
							i(null), n(!1)
						}
					}
				}(t.id), {
					upvote: M
				} = function(e) {
					const t = Object(r.d)(),
						n = Object(r.e)(l.p),
						{
							startDelayedUpvoteAnimation: o
						} = Object(v.a)(e.id);
					return {
						upvote: function() {
							n && e.voteState < x.a.upvoted && (t(Object(g.db)(e.id)), o())
						}
					}
				}(e), N = e => {
					const {
						creatorId: n,
						endsAt: o,
						resolvedOptionId: s,
						userSelection: r
					} = t, i = o < Date.now();
					i && n === c && !s && h(e.id), i || r || p(e.id)
				}, w = Object(o.useCallback)(() => {
					p(null), h(null)
				}, []);
				return s.a.createElement(s.a.Fragment, null, !a && s.a.createElement(V, {
					post: e,
					prediction: t,
					selectedOptionId: (null == m ? void 0 : m.id) || null,
					isVoteAnimation: n,
					onSelectOption: N,
					onVoteAnimationEnd: () => i(!1)
				}), a && s.a.createElement(W.a, {
					className: Y.a.prediction,
					prediction: t,
					selectedOptionId: (null == m ? void 0 : m.id) || null,
					onSelectOption: N
				}), m && s.a.createElement(j.b, {
					className: Y.a.modal,
					isCreatingVote: u,
					onOverlayClick: w,
					onCancel: w,
					onPredict: async e => {
						m && (await f(e), M(), i(!0))
					},
					option: m,
					pollId: t.id,
					subredditId: e.belongsTo.id,
					tournamentId: t.tournamentId,
					withOverlay: !0
				}), E && s.a.createElement(B, {
					isResolving: _,
					isTokens: null !== t.tournamentId,
					onOverlayClick: w,
					onCancel: w,
					onResolve: k,
					withOverlay: !0
				}))
			};
			var K = n("./node_modules/lodash/isNil.js"),
				z = n.n(K),
				X = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/EducationMessage/constants.ts"),
				Q = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/EducationMessage/index.tsx"),
				q = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/PredictionEndedEducationMessage/index.m.less"),
				J = n.n(q);
			const {
				fbt: Z
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function $({
				didParticipate: e
			}) {
				const t = Z._("This prediction has ended", null, {
						hk: "3VMLnq"
					}),
					n = s.a.createElement(s.a.Fragment, null, Z._("The outcome is pending.", null, {
						hk: "4tsv1U"
					}), e && s.a.createElement("div", {
						className: J.a.notificationBlurb
					}, Z._("You'll be notified when the results are in.", null, {
						hk: "45tyVv"
					})));
				return s.a.createElement("div", null, s.a.createElement(Q.a, {
					title: t,
					message: n
				}))
			}
			var ee = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/PredictionFeatureEducationMessage/index.tsx");

			function te() {
				const e = P.fbt._("Choose the answer", null, {
						hk: "3QoLuB"
					}),
					t = P.fbt._("The prediction has ended and the outcome is needed to resolve the prediction.", null, {
						hk: "4CkrEz"
					});
				return s.a.createElement("div", null, s.a.createElement(Q.a, {
					title: e,
					message: t
				}))
			}
			var ne = n("./src/reddit/icons/svgs/CoinV2/index.tsx"),
				oe = n("./src/reddit/components/Econ/Prediction/UnicornIcon/index.tsx"),
				se = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/PredictionResolvedEducationMessage/index.m.less"),
				re = n.n(se);
			const {
				fbt: ie
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function ae({
				didParticipate: e,
				isTokens: t,
				isWinner: n,
				predictedAmount: o,
				wonAmount: r
			}) {
				return e && !n ? s.a.createElement("div", null, s.a.createElement(Q.a, {
					title: ie._("Better luck next time", null, {
						hk: "1KYUZf"
					}),
					message: s.a.createElement(s.a.Fragment, null, ie._("Sorry, your prediction was wrong this time.", null, {
						hk: "4aEoP2"
					}), !!o && s.a.createElement("div", {
						className: re.a.wonOrLostAmountRow
					}, ie._("You lost {lostAmount}", [ie._param("lostAmount", s.a.createElement("div", {
						className: re.a.wonOrLostAmount
					}, t ? s.a.createElement(oe.a, {
						className: re.a.coinIcon
					}) : s.a.createElement(ne.a, {
						className: re.a.coinIcon
					}), o))], {
						hk: "6091x"
					})))
				})) : e && n && o && !r ? s.a.createElement("div", null, s.a.createElement(Q.a, {
					title: ie._("And the winner is... EVERYONE!", null, {
						hk: "2qfnkC"
					}),
					message: s.a.createElement(s.a.Fragment, null, ie._("Well, and no one.", null, {
						hk: "2nGCUb"
					}), s.a.createElement("div", {
						className: re.a.wonOrLostAmountRow
					}, ie._("You've been refunded {refundedAmount}", [ie._param("refundedAmount", s.a.createElement("div", {
						className: re.a.wonOrLostAmount
					}, t ? s.a.createElement(oe.a, {
						className: re.a.coinIcon
					}) : s.a.createElement(ne.a, {
						className: re.a.coinIcon
					}), o))], {
						hk: "49bOe9"
					})))
				})) : e && n ? s.a.createElement("div", null, s.a.createElement(Q.a, {
					title: ie._("And the winner is... YOU!", null, {
						hk: "19q97O"
					}),
					message: s.a.createElement(s.a.Fragment, null, ie._("It’s confirmed—Your prediction was spot on.", null, {
						hk: "3AtcRD"
					}), !!r && s.a.createElement("div", {
						className: re.a.wonOrLostAmountRow
					}, ie._("You won {wonAmount}", [ie._param("wonAmount", s.a.createElement("div", {
						className: re.a.wonOrLostAmount
					}, t ? s.a.createElement(oe.a, {
						className: re.a.coinIcon
					}) : s.a.createElement(ne.a, {
						className: re.a.coinIcon
					}), o + r))], {
						hk: "1zg0cH"
					})))
				})) : s.a.createElement("div", null, s.a.createElement(Q.a, {
					title: ie._("This prediction has ended", null, {
						hk: "3VMLnq"
					}),
					message: ie._("The outcome has been provided.", null, {
						hk: "4ccLzU"
					})
				}))
			}
			const ce = ({
				prediction: e,
				isCreator: t
			}) => {
				var n;
				const {
					endsAt: o,
					options: r,
					resolvedOptionId: i,
					tournamentId: a,
					userSelection: c,
					userWonAmount: d
				} = e, l = o < Date.now(), u = !z()(a), m = l && t && !i;
				return l ? i ? s.a.createElement(ae, {
					didParticipate: !!c,
					isTokens: u,
					isWinner: i === c,
					predictedAmount: c && (null === (n = r.find(({
						id: e
					}) => e === c)) || void 0 === n ? void 0 : n.userStakeAmount) || 0,
					wonAmount: d
				}) : m ? s.a.createElement(te, null) : s.a.createElement($, {
					didParticipate: !!c
				}) : s.a.createElement(ee.a, {
					isTokens: u,
					storageKey: X.a.feature
				})
			};
			var de = n("./src/lib/timeUntil/index.ts"),
				le = n("./src/reddit/icons/svgs/ClockFilled/index.tsx"),
				ue = n("./src/reddit/components/Econ/Prediction/PredictionStatus/index.m.less"),
				me = n.n(ue);
			const {
				fbt: pe
			} = n("./node_modules/fbt/lib/FbtPublic.js"), be = ({
				endsAt: e,
				resolvedOptionId: t,
				isCoins: n
			}) => Date.now() > e ? s.a.createElement("div", {
				className: me.a.statusBar
			}, n && s.a.createElement(le.a, {
				className: me.a.clockIcon
			}), t ? pe._("Prediction ended", null, {
				hk: "3o79Ig"
			}) : pe._("Ended. Awaiting results", null, {
				hk: "1szagh"
			})) : s.a.createElement("div", {
				className: me.a.statusBar
			}, n && s.a.createElement(le.a, {
				className: me.a.clockIcon
			}), pe._("Prediction ends in {expirationDuration}", [pe._param("expirationDuration", Object(de.a)(new Date(e), !0))], {
				hk: "3ysXEE"
			}));
			var fe = n("./src/lib/prettyPrintNumber/index.ts");
			const {
				fbt: _e
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Ee = ({
				totalVoters: e
			}) => _e._({
				"*": "{total voters} predictions made",
				_1: "{total voters} prediction made"
			}, [_e._param("total voters", Object(fe.b)(e)), _e._plural(e)], {
				hk: "2u2Nv8"
			}), {
				fbt: he
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ge = ({
				prediction: e
			}) => {
				const {
					endsAt: t,
					predictionStatus: n,
					resolvedOptionId: o,
					totalStakeAmount: i,
					tournamentId: c,
					totalVoters: u
				} = e, m = Object(r.e)(l.y), p = Boolean(c), b = !p;
				return n === d.b.Cancelled || n === d.b.CancelInProgress ? s.a.createElement("div", {
					className: Object(a.a)(me.a.container, {
						[me.a.v2]: m
					})
				}, he._("Canceled", null, {
					hk: "1SL2bC"
				})) : s.a.createElement("div", {
					className: Object(a.a)(me.a.container, {
						[me.a.v2]: m,
						[me.a.coins]: b
					})
				}, p && u > 0 && s.a.createElement(s.a.Fragment, null, s.a.createElement(Ee, {
					totalVoters: u
				}), m && s.a.createElement("span", null, "·")), b && i > 0 && s.a.createElement("div", {
					className: me.a.statusBar
				}, s.a.createElement(ne.a, {
					className: me.a.coinIcon
				}), i, " ", he._("added by participants", null, {
					hk: "PSq3T"
				})), s.a.createElement(be, {
					endsAt: t,
					resolvedOptionId: o,
					isCoins: b
				}))
			};
			var ve = n("./src/reddit/components/Econ/Prediction/hooks/useTournamentsQuery.ts"),
				xe = n("./src/reddit/components/Econ/Tournament/Facepile/index.tsx"),
				Pe = n("./src/reddit/controls/InternalLink/index.tsx"),
				Oe = n("./src/reddit/hooks/usePageLayer.ts"),
				ye = n("./src/reddit/icons/svgs/Chevron/index.tsx"),
				Ce = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				Ie = n("./src/reddit/selectors/subreddit.ts"),
				Se = n("./src/reddit/components/Econ/Prediction/TournamentLink/index.m.less"),
				je = n.n(Se);
			const {
				fbt: ke
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function Me({
				subredditId: e,
				tournamentId: t
			}) {
				const n = Object(S.a)(),
					o = Object(Oe.a)(),
					i = Object(r.e)(t => Object(Ie.R)(t, {
						subredditId: e
					})),
					a = Object(r.e)(t => Object(Ce.b)(t, {
						subredditId: e
					})),
					d = Object(c.x)(o),
					l = Object(c.I)(o),
					u = Object(c.M)(o);
				if (Object(ve.a)(i.name), (null == a ? void 0 : a.tournamentId) !== t) return null;
				const {
					name: m,
					totalParticipantsCount: p
				} = a;
				return s.a.createElement(Pe.a, {
					className: je.a.tournamentLink,
					to: `${i.url}predictions/`,
					onClick: () => {
						n(Object(I.l)({
							pageType: d ? "post_detail" : u ? "community" : l ? "profile" : "home"
						})), window.scrollTo(0, 0)
					}
				}, s.a.createElement(xe.a, {
					className: je.a.facepile,
					subredditId: e
				}), s.a.createElement("div", {
					className: je.a.info
				}, s.a.createElement("div", {
					className: je.a.tournamentName
				}, m), s.a.createElement("div", {
					className: je.a.totalPlayers
				}, p && p > 0 ? ke._({
					"*": "{totalPlayers} tournament players",
					_1: "{totalPlayers} tournament player"
				}, [ke._param("totalPlayers", Object(fe.b)(p)), ke._plural(p)], {
					hk: "3eDpRH"
				}) : ke._("Be the first to predict!", null, {
					hk: "4Ea9sh"
				}))), s.a.createElement(ye.a, {
					className: je.a.chevron
				}))
			}
			var Ne = n("./src/reddit/components/Econ/Prediction/index.m.less"),
				we = n.n(Ne);
			const Ae = Object(i.c)({
					isEditing: m.M,
					prediction: u.g,
					pollId: u.a,
					post: p.H,
					subredditOrProfile: p.U,
					userId: b.pb,
					isPredictionsTournamentPostV2Enabled: l.y
				}),
				Be = Object(c.u)({
					isCommentsPage: c.x,
					isPredictionsPage: c.N
				}),
				Te = ({
					className: e,
					isCommentsPage: t,
					isEditing: n,
					isPredictionsPage: o,
					post: r,
					prediction: i,
					pollId: c,
					subredditOrProfile: l,
					userId: u,
					isPredictionsTournamentPostV2Enabled: m
				}) => {
					if (!c || !i || !l) return s.a.createElement(h, null);
					const {
						creatorId: p,
						tournamentId: b,
						predictionStatus: f
					} = i, _ = p === u, E = f === d.b.Cancelled || f === d.b.CancelInProgress;
					return s.a.createElement("div", {
						className: Object(a.a)(e, we.a.container, {
							[we.a.forCommentsPage]: t,
							[we.a.isEditing]: t && n,
							[we.a.v1]: !m
						}),
						onClick: e => {
							i && e.stopPropagation()
						}
					}, t && !E && s.a.createElement(ce, {
						prediction: i,
						isCreator: _
					}), s.a.createElement(H, {
						post: r,
						prediction: i
					}), s.a.createElement(ge, {
						prediction: i
					}), !o && b && s.a.createElement(Me, {
						subredditId: r.belongsTo.id,
						tournamentId: b
					}))
				};
			t.default = Be(Object(r.b)(Ae)(Te))
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
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				c = n("./src/reddit/components/UserIcon/UserIcon.tsx"),
				d = n("./src/reddit/helpers/userSnoovatar/index.ts"),
				l = n("./src/reddit/models/User/index.ts"),
				u = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				m = n("./src/reddit/selectors/user.ts"),
				p = n("./src/reddit/components/Econ/Tournament/Facepile/index.m.less"),
				b = n.n(p);

			function f({
				className: e,
				faceClassName: t,
				subredditId: n
			}) {
				var o;
				const p = Object(r.e)(m.X),
					f = Object(r.e)(m.k),
					_ = Object(r.e)(m.C),
					E = Object(r.e)(e => Object(u.e)(e, {
						subredditId: n
					}));
				return (null === (o = null == E ? void 0 : E.latestParticipants) || void 0 === o ? void 0 : o.length) ? s.a.createElement("div", {
					className: Object(i.a)(b.a.tournamentFacepile, e)
				}, E.latestParticipants.slice(0, 3).map(({
					icon: e,
					name: n,
					profile: o
				}) => {
					const r = !!f && Object(l.e)(f) === n,
						{
							url: u
						} = e,
						{
							isNsfw: m
						} = o,
						E = `tournament-facepile-face-${n}`;
					return Object(d.a)(u) ? s.a.createElement(a.a, {
						key: E,
						backgroundClassName: b.a.snoovatarBackground,
						className: Object(i.a)(b.a.snoovatar, t),
						headshot: u
					}) : s.a.createElement(c.b, {
						key: E,
						className: Object(i.a)(b.a.userIcon, t),
						iconUrl: u,
						isCurrentUser: r,
						isNSFW: m,
						isNightMode: p,
						shouldHideNSFW: _
					})
				})) : null
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
				return p
			})), n.d(t, "e", (function() {
				return b
			})), n.d(t, "n", (function() {
				return f
			})), n.d(t, "p", (function() {
				return _
			})), n.d(t, "o", (function() {
				return E
			})), n.d(t, "f", (function() {
				return h
			})), n.d(t, "m", (function() {
				return g
			})), n.d(t, "h", (function() {
				return v
			})), n.d(t, "j", (function() {
				return x
			})), n.d(t, "k", (function() {
				return P
			})), n.d(t, "g", (function() {
				return O
			})), n.d(t, "i", (function() {
				return y
			})), n.d(t, "q", (function() {
				return C
			})), n.d(t, "d", (function() {
				return I
			})), n.d(t, "l", (function() {
				return S
			})), n.d(t, "t", (function() {
				return j
			})), n.d(t, "u", (function() {
				return k
			})), n.d(t, "r", (function() {
				return M
			})), n.d(t, "a", (function() {
				return N
			})), n.d(t, "s", (function() {
				return w
			})), n.d(t, "c", (function() {
				return A
			}));
			var o = n("./src/lib/classNames/index.ts"),
				s = n("./src/lib/lessComponent.tsx"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/controls/Input/ModalInput.tsx"),
				d = n("./src/reddit/icons/svgs/Close/index.tsx"),
				l = n("./src/reddit/components/ModalStyledComponents/index.m.less"),
				u = n.n(l);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const p = s.a.wrapped(d.a, "CloseIcon", u.a),
				b = s.a.section("ModalBody", u.a),
				f = s.a.section("ModalPostPreview", u.a),
				_ = s.a.p("ModalText", u.a),
				E = s.a.div("ModalSmallText", u.a),
				h = s.a.div("ModalDescriptionText", u.a),
				g = s.a.div("ModalMetaText", u.a),
				v = s.a.label("ModalFormItem", u.a),
				x = s.a.wrapped(c.a, "ModalInput", u.a),
				P = s.a.label("ModalInputLabel", u.a),
				O = s.a.footer("ModalFooter", u.a),
				y = s.a.header("ModalHeader", u.a),
				C = s.a.div("ModalTitle", u.a),
				I = s.a.div("ModalAnnotation", u.a),
				S = s.a.div("ModalMain", u.a),
				j = s.a.textarea("TextArea", u.a),
				k = s.a.wrapped(a.l, "WarningButton", u.a),
				M = s.a.wrapped(a.l, "PrimaryButton", u.a),
				N = s.a.wrapped(a.o, "CancelButton", u.a),
				w = s.a.wrapped(a.r, "RemoveButton", u.a),
				A = ({
					className: e,
					...t
				}) => i.a.createElement(a.t, m({
					kind: a.b.Button,
					priority: a.c.Primary,
					className: Object(o.a)(u.a.ConfirmButton, e)
				}, t))
		},
		"./src/reddit/controls/Input/ModalInput.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/constants/keycodes.ts"),
				d = n("./src/reddit/controls/Input/index.m.less"),
				l = n.n(d);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			class m extends s.a.Component {
				constructor() {
					super(...arguments), this.handleKeyDown = ({
						keyCode: e
					}) => {
						e === c.a.Escape && this.props.closeModal()
					}
				}
				render() {
					const {
						className: e,
						closeModal: t,
						...n
					} = this.props;
					return s.a.createElement("input", u({
						className: Object(i.a)(l.a.input, e),
						onKeyDown: this.handleKeyDown
					}, n))
				}
			}
			t.a = Object(r.b)(null, {
				closeModal: a.f
			})(m)
		},
		"./src/reddit/controls/Input/index.m.less": function(e, t, n) {
			e.exports = {
				input: "_3eoXtlBWKbkFYoOHUIcIgK"
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
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				a = n.n(i);
			t.a = ({
				center: e,
				className: t,
				sizePx: n = 10
			}) => s.a.createElement("div", {
				className: Object(r.a)(a.a.loadingIcon, t, {
					[a.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${n}px`
				},
				"data-testid": "LoadingIcon"
			})
		},
		"./src/reddit/helpers/economics/sortBadges.ts": function(e, t, n) {
			"use strict";

			function o(e, t) {
				if (e.placement && !t.placement) return -1;
				if (t.placement && !e.placement) return 1;
				if (e.position && !t.position) return -1;
				if (t.position && !e.position) return 1;
				let n = 0;
				return e.placement && t.placement && (n = e.placement.localeCompare(t.placement)), 0 === n && e.position && t.position && (n = e.position - t.position), 0 === n && (n = e.title.localeCompare(t.title)), n
			}

			function s(e) {
				return [...e].sort(o)
			}
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return s
			}))
		},
		"./src/reddit/helpers/richTextJson/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return a
			})), n.d(t, "g", (function() {
				return c
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "a", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "e", (function() {
				return f
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./src/reddit/models/RichTextJson/index.ts");
			const s = "giphy|",
				r = "emote|",
				i = "|downsized";

			function a(e, t) {
				return s + e + (t ? i : "")
			}

			function c(e) {
				return !!(null == e ? void 0 : e.startsWith(s))
			}

			function d(e) {
				return !!(null == e ? void 0 : e.startsWith(r))
			}

			function l(e) {
				var t;
				const n = null === (t = null == e ? void 0 : e.media) || void 0 === t ? void 0 : t.mediaMetadata;
				return !!n && Object.keys(n).some(c)
			}

			function u(e) {
				var t;
				const n = null === (t = null == e ? void 0 : e.media) || void 0 === t ? void 0 : t.mediaMetadata;
				return !!n && Object.keys(n).some(d)
			}

			function m(e) {
				let t = e.substring(s.length);
				return t.indexOf("|") && (t = t.split("|")[0]), `https://giphy.com/gifs/${t}`
			}

			function p(e, t) {
				return (Array.isArray(e) ? e : e.c && Array.isArray(e.c) ? e.c : []).reduce((e, n) => [...e, ...p(n, t)], !Array.isArray(e) && t(e) ? [e] : [])
			}

			function b(e) {
				return p(e, o.F).map(e => e.id)
			}

			function f(e) {
				return p(e, e => e.e === o.o).map(e => e.u)
			}
		},
		"./src/reddit/hooks/usePageLayer.ts": function(e, t, n) {
			"use strict";
			var o = n("./src/reddit/contexts/PageLayer/index.tsx");
			t.a = o.eb
		},
		"./src/reddit/icons/svgs/ClockFilled/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 16 16"
			}, s.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M11.901 11.809C11.803 11.909 11.673 11.959 11.543 11.959C11.417 11.959 11.291 11.913 11.194 11.817L7.651 8.358C7.554 8.264 7.5 8.135 7.5 8V3C7.5 2.724 7.724 2.5 8 2.5C8.276 2.5 8.5 2.724 8.5 3V7.789L11.892 11.102C12.09 11.294 12.094 11.611 11.901 11.809ZM8 0C3.589 0 0 3.589 0 8C0 12.412 3.589 16 8 16C12.411 16 16 12.412 16 8C16 3.589 12.411 0 8 0Z",
				fill: "inherit"
			}))
		},
		"./src/reddit/icons/svgs/Plus/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				version: "1.1"
			}, s.a.createElement("g", {
				stroke: "none"
			}, s.a.createElement("g", {
				transform: "translate(-34.000000, -136.000000)",
				fill: "inherit"
			}, s.a.createElement("path", {
				d: "M45.2,147.2 L48.8,147.2 C49.46272,147.2 50,146.66272 50,146 C50,145.33728 49.46272,144.8 48.8,144.8 L45.2,144.8 L45.2,141.2 C45.2,140.53728 44.66272,140 44,140 C43.33728,140 42.8,140.53728 42.8,141.2 L42.8,144.8 L39.2,144.8 C38.53728,144.8 38,145.33728 38,146 C38,146.66272 38.53728,147.2 39.2,147.2 L42.8,147.2 L42.8,150.8 C42.8,151.46272 43.33728,152 44,152 C44.66272,152 45.2,151.46272 45.2,150.8 L45.2,147.2 Z"
			}))))
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
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/layout/twoCol/ExpandLeft/index.m.less"),
				c = n.n(a);
			t.a = Object(r.a)(e => s.a.createElement("div", {
				className: Object(i.a)(c.a.exapndLeftContainer, e.className)
			}, s.a.createElement("div", {
				className: c.a.left
			}, Array.isArray(e.children) && e.children[0]), s.a.createElement("div", {
				className: c.a.right,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[1])), 2)
		},
		"./src/reddit/models/Badge/managementPage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "d", (function() {
				return a
			}));
			var o, s, r = n("./src/reddit/models/Badge/index.ts");
			! function(e) {
				e.Loyalty = "loyalty", e.Achievement = "achievement", e.Cosmetic = "cosmetic"
			}(o || (o = {})),
			function(e) {
				e.Gallery = "gallery", e.MyBadges = "my-badges"
			}(s || (s = {}));
			const i = {
					[o.Loyalty]: r.a.First,
					[o.Achievement]: r.a.Second,
					[o.Cosmetic]: void 0
				},
				a = e => e === r.a.First ? o.Loyalty : e === r.a.Second ? o.Achievement : o.Cosmetic
		},
		"./src/reddit/models/Payments/index.ts": function(e, t, n) {
			"use strict";
			var o, s, r, i;
			n.d(t, "b", (function() {
					return s
				})), n.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(o || (o = {})),
				function(e) {
					e.PayPal = "PAYPAL", e.Stripe = "STRIPE"
				}(s || (s = {})),
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
				return o
			}));
			var o, s = n("./src/reddit/actions/economics/paymentSystems/constants.ts");
			! function(e) {
				e[e.Failure = 0] = "Failure", e[e.Fetched = 1] = "Fetched", e[e.NotFetched = 2] = "NotFetched", e[e.Pending = 3] = "Pending"
			}(o || (o = {}));
			const r = {
				status: o.NotFetched
			};
			t.b = (e = r, t) => {
				switch (t.type) {
					case s.a:
						if (e.status === o.Fetched && e.data.stripe && e.data.stripe.sources) {
							const n = t.payload.cardId,
								{
									[n]: o,
									...s
								} = e.data.stripe.sources;
							return {
								...e,
								data: {
									...e.data,
									stripe: {
										...e.data.stripe,
										sources: s
									}
								}
							}
						}
						return e;
					case s.e:
						if (e.status === o.Fetched && e.data.braintree && e.data.braintree.sources) {
							const n = t.payload.sourceId,
								{
									[n]: o,
									...s
								} = e.data.braintree.sources;
							return {
								...e,
								data: {
									...e.data,
									braintree: {
										...e.data.braintree,
										sources: s
									}
								}
							}
						}
						return e;
					case s.b:
						return {
							error: t.payload.error, status: o.Failure
						};
					case s.c:
						return {
							data: t.payload, status: o.Fetched
						};
					case s.d:
						return {
							status: o.Pending
						};
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/economics/subredditPremium/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o, s = n("./src/lib/constants/specialMembership.ts"),
				r = n("./src/reddit/actions/economics/subredditPremium/constants.ts"),
				i = n("./src/reddit/helpers/economics/sortBadges.ts"),
				a = n("./src/reddit/models/Badge/index.ts"),
				c = n("./src/reddit/models/Badge/managementPage.ts");
			! function(e) {
				e[e.NotFetched = 0] = "NotFetched", e[e.Fetched = 1] = "Fetched"
			}(o || (o = {}));
			const d = {};

			function l(e) {
				return "userId" in e
			}

			function u(e, t, n, o) {
				e.forEach(e => {
					e.collections && Object.keys(e.collections).forEach(s => {
						let r;
						(r = e.placement ? e.placement === a.a.First ? o[c.a.Loyalty][s] : o[c.a.Achievement][s] : l(e) ? o[c.a.Cosmetic][c.c.MyBadges][s] : o[c.a.Cosmetic][c.c.Gallery][s]) && (l(e) ? n.has(e.id) && r.unlocked.push(e) : t.has(e.id) || r.locked.push(e))
					})
				})
			}

			function m(e) {
				const t = (e, t) => {
					const n = parseInt(e.price || "0"),
						o = parseInt(t.price || "0");
					return n === o ? Object(i.b)(e, t) : n - o
				};
				return e.locked.sort(t), e.unlocked.sort(t), e
			}

			function p(e, t) {
				return Object.keys(e).map(t => e[t]).filter(e => !!e.locked.length || !!e.unlocked.length || e.id === s.a).map(m).sort((e, n) => {
					const o = t[e.id],
						s = t[n.id];
					return Object(i.b)(o, s)
				})
			}

			function b(e) {
				const t = {
					[c.a.Loyalty]: {},
					[c.a.Achievement]: {},
					[c.a.Cosmetic]: {
						[c.c.Gallery]: {},
						[c.c.MyBadges]: {}
					}
				};
				Object.keys(e.collections).forEach(n => {
					const o = e.collections[n],
						s = {
							description: o.description,
							highlight: o.extra && o.extra.style && o.extra.style.color,
							id: o.id,
							locked: [],
							title: o.title,
							unlocked: []
						};
					t[c.a.Loyalty][n] = {
						...s,
						locked: [],
						unlocked: []
					}, t[c.a.Achievement][n] = {
						...s,
						locked: [],
						unlocked: []
					}, t[c.a.Cosmetic][c.c.Gallery][n] = {
						...s,
						locked: [],
						unlocked: []
					}, t[c.a.Cosmetic][c.c.MyBadges][n] = {
						...s,
						locked: [],
						unlocked: []
					}
				});
				const n = new Set;
				e.userOwnedBadges.forEach(t => {
					const o = e.badges[t];
					o && n.add(o.type)
				});
				const o = new Set(e.userOwnedBadges);
				return u(Object.keys(e.badges).map(t => e.badges[t]), n, o, t), u(Object.keys(e.products).map(t => e.products[t]), n, o, t), {
					collections: {
						[c.a.Loyalty]: p(t[c.a.Loyalty], e.collections),
						[c.a.Achievement]: p(t[c.a.Achievement], e.collections),
						[c.a.Cosmetic]: {
							[c.c.Gallery]: p(t[c.a.Cosmetic][c.c.Gallery], e.collections),
							[c.c.MyBadges]: p(t[c.a.Cosmetic][c.c.MyBadges], e.collections)
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
						} = t.payload, s = e[n];
						return s && s.status === o.Fetched ? {
							...e,
							[n]: {
								...s,
								data: {
									...s.data
								},
								raw: {
									...s.raw
								}
							}
						} : e
					}
					case r.h: {
						const {
							subredditId: n
						} = t.payload, s = e[n];
						return s && s.status === o.Fetched ? {
							...e,
							[n]: {
								...s,
								data: {
									...s.data,
									subscription: {
										...s.data.subscription || {},
										settings: {
											renew: !1
										}
									}
								},
								raw: {
									...s.raw,
									subscription: {
										...s.raw.subscription || {},
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
								data: b(n),
								status: o.Fetched
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
				return _
			})), n.d(t, "o", (function() {
				return E
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "x", (function() {
				return g
			})), n.d(t, "f", (function() {
				return v
			})), n.d(t, "i", (function() {
				return x
			})), n.d(t, "q", (function() {
				return P
			})), n.d(t, "h", (function() {
				return O
			})), n.d(t, "z", (function() {
				return y
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
				return M
			})), n.d(t, "k", (function() {
				return A
			})), n.d(t, "r", (function() {
				return T
			})), n.d(t, "y", (function() {
				return F
			})), n.d(t, "u", (function() {
				return L
			})), n.d(t, "v", (function() {
				return D
			})), n.d(t, "b", (function() {
				return R
			})), n.d(t, "w", (function() {
				return U
			})), n.d(t, "s", (function() {
				return V
			})), n.d(t, "t", (function() {
				return W
			})), n.d(t, "g", (function() {
				return G
			})), n.d(t, "m", (function() {
				return Y
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./src/reddit/featureFlags/index.ts"),
				s = n("./src/reddit/helpers/economics/sortBadges.ts"),
				r = n("./src/reddit/helpers/richTextJson/index.ts"),
				i = n("./src/reddit/models/Badge/index.ts"),
				a = n("./src/reddit/models/Badge/managementPage.ts"),
				c = n("./src/reddit/models/Payments/index.ts"),
				d = n("./src/reddit/models/Product/index.ts"),
				l = n("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				u = n("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				m = n("./src/reddit/selectors/commentSelector.ts"),
				p = n("./src/reddit/selectors/gold/powerups/index.ts"),
				b = n("./src/reddit/selectors/gold/powerups/benefitSettings.ts");
			const f = [],
				_ = (e, t) => {
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
				E = (e, t) => {
					const n = _(e, t);
					return n && n.endsAt || null
				};
			var h;
			! function(e) {
				e[e.DontKnow = 0] = "DontKnow", e[e.NotSubscribed = 1] = "NotSubscribed", e[e.Subscribed = 2] = "Subscribed"
			}(h || (h = {}));
			const g = (e, t) => {
					const n = e.economics.subredditPremium[t];
					if (n && n.status === u.a.Fetched) {
						const n = E(e, t),
							o = Date.now();
						return n && o < n ? h.Subscribed : h.NotSubscribed
					}
					return h.DontKnow
				},
				v = (e, t) => {
					const n = e.user.account,
						o = e.economics.subredditPremium[t];
					if (n && o && o.status === u.a.Fetched) {
						const o = ((e.users.appliedBadges[n.id] || {})[t] || f).map(t => e.badges.models[t]).filter(Boolean);
						if (o) return {
							[a.a.Loyalty]: o.find(e => e.placement === i.a.First),
							[a.a.Achievement]: o.find(e => e.placement === i.a.Second),
							[a.a.Cosmetic]: o.find(e => !e.placement)
						}
					}
					return {
						[a.a.Loyalty]: void 0,
						[a.a.Achievement]: void 0,
						[a.a.Cosmetic]: void 0
					}
				};

			function x(e, t) {
				return (null == e ? void 0 : e.length) ? Object(s.a)(e.map(e => t[e]).filter(Boolean)) : f
			}
			const P = (e, t, n) => {
					var s;
					if (!o.d.spBadges(e)) return f;
					return x(null === (s = e.users.appliedBadges[n]) || void 0 === s ? void 0 : s[t], e.badges.models)
				},
				O = (e, t) => {
					const n = e.economics.subredditPremium[t.subredditId];
					if (n && n.status === u.a.Fetched) {
						const e = n.raw.collections[t.collectionId];
						if (e) return {
							highlight: e.extra && e.extra.style && e.extra.style.color,
							title: e.title
						}
					}
				};

			function y(e, t) {
				const n = (e.economics.me.data.specialMemberships || {})[t];
				return !!(n && n.settings && n.settings.optOut)
			}

			function C(e, t) {
				const {
					badge: n,
					subredditId: o
				} = t, s = e.user.account ? e.user.account.id : void 0;
				if (Object(i.e)(n) && n.userId === s) return n;
				const r = e.badges.models,
					a = e.user.ownedBadges[o] || {},
					c = Object(i.e)(n) ? n.type : n.id;
				return Object.keys(a).map(e => r[e]).find(e => e && e.type === c)
			}

			function I(e, t, n, o) {
				const s = e.economics.subredditPremium[t];
				if (s && s.status === u.a.Fetched) {
					if (n === a.a.Loyalty || n === a.a.Achievement) return s.data.collections[n];
					if (n === a.a.Cosmetic && o) return s.data.collections[n][o]
				}
				return f
			}

			function S(e, t) {
				const n = I(e, t, a.a.Loyalty).find(e => "membership" === e.id);
				return n ? [].concat(n.locked, n.unlocked).filter(e => e.position).sort((e, t) => e.position - t.position) : f
			}

			function j(e, t) {
				const n = e.economics.subredditPremium[t];
				if (n && n.status === u.a.Fetched) {
					const e = n.data.collections[a.a.Cosmetic];
					return Object.values(e).reduce((e, t) => e.concat(t), []).reduce((e, t) => e.concat(t.locked, t.unlocked), []).filter(i.f)
				}
				return f
			}

			function k(e, t) {
				return I(e, t, a.a.Cosmetic, a.c.Gallery).some(e => e.locked.some(e => Object(i.f)(e) || !!e.price))
			}
			const M = e => {
				const t = [],
					n = e.economics.paymentSystems;
				if (n.status === l.a.Fetched && n.data.stripe && n.data.stripe.sources) {
					const e = n.data.stripe.sources;
					for (const n in e) {
						const o = e[n];
						t.push({
							display: `${o.brand} •••• ${o.last4}`,
							id: n,
							type: c.a.SavedStripe
						})
					}
				}
				if (n.status === l.a.Fetched && n.data.braintree && n.data.braintree.sources) {
					const e = n.data.braintree.sources;
					for (const n in e) {
						const o = e[n];
						"PayPal" === o.brand && t.push({
							display: "PayPal",
							id: o.id,
							type: c.a.SavedPayPal
						})
					}
				}
				return t
			};
			var N;
			! function(e) {
				e[e.Fetched = 0] = "Fetched", e[e.Fetching = 1] = "Fetching", e[e.NotFetched = 2] = "NotFetched"
			}(N || (N = {}));
			const w = {
					prices: {},
					member: "Supporter",
					memberPlural: "Supporters",
					memberAlt: "Subreddit Supporter",
					memberAltPlural: "Subreddit Supporters",
					membership: "Membership",
					membershipAlt: "Supporter Membership"
				},
				A = (e, t) => Object.values(e.products.models).filter(e => e.type === d.a.Membership && t && e.subredditId === t),
				B = (e, t) => {
					if (!t) return {};
					const n = w.prices;
					A(e, t).forEach(e => {
						e.price && e.currency && (n[e.currency] = e.price)
					});
					const o = _(e, t);
					return o && o.price && o.currency && (n[o.currency] = o.price), n
				},
				T = (e, t) => {
					var n, o, s, r;
					const i = (null === (r = null === (s = null === (o = null === (n = e.features) || void 0 === n ? void 0 : n.crypto) || void 0 === o ? void 0 : o.points) || void 0 === s ? void 0 : s[t || ""]) || void 0 === r ? void 0 : r.nomenclature) || w;
					return {
						prices: B(e, t),
						member: i.member || w.member,
						memberPlural: i.memberPlural || w.memberPlural,
						memberAlt: i.memberAlt || w.memberAlt,
						memberAltPlural: i.memberAltPlural || w.memberAltPlural,
						membership: i.membership || w.membership,
						membershipAlt: i.membershipAlt || w.membershipAlt
					}
				},
				F = e => {
					const t = e.economics.paymentSystems;
					return !!(t.status === l.a.Fetched && t.data && t.data.tips && t.data.tips.usdr && t.data.tips.usdr.allowed)
				},
				L = (e, t) => {
					const n = e.user.ownedBadges[t] || {};
					return !!Object.keys(n).length
				},
				D = e => {
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
					if (Object(p.r)(e, {
							subredditId: t
						})) return !0;
					const o = "replyToPost" !== n && Object(m.b)(e, {
						commentId: n
					});
					return !(!o || !Object(r.a)(o))
				},
				W = (e, t, n) => {
					if (!Object(b.b)(e, {
							subredditId: t
						})) return !1;
					if (Object(p.s)(e, {
							subredditId: t
						})) return !0;
					const s = "replyToPost" !== n && Object(m.b)(e, {
						commentId: n
					});
					if (s && Object(r.b)(s)) return !0;
					const i = o.d.spGiphy(e),
						a = U(e, t);
					return !(!i || !a) || i && a
				},
				G = (e, t, n) => {
					if (t) {
						const o = e.economics.banners.dismissedBanners[t];
						if (o && o.data) return !!o.data[n]
					}
				},
				Y = e => e.economics.pointsCopy.data
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction.299c6beb28fbfa23ca15.js.map