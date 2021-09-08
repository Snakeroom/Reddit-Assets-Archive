// https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction-PremiumModal.4ba4b401b48c92d35e51.js
// Retrieved at 9/8/2021, 2:30:09 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Econ-Prediction-PremiumModal"], {
		"./node_modules/uuid/index.js": function(e, t, n) {
			var r = n("./node_modules/uuid/v1.js"),
				o = n("./node_modules/uuid/v4.js"),
				i = o;
			i.v1 = r, i.v4 = o, e.exports = i
		},
		"./node_modules/uuid/v1.js": function(e, t, n) {
			var r, o, i = n("./node_modules/uuid/lib/rng-browser.js"),
				d = n("./node_modules/uuid/lib/bytesToUuid.js"),
				c = 0,
				a = 0;
			e.exports = function(e, t, n) {
				var s = t && n || 0,
					u = t || [],
					l = (e = e || {}).node || r,
					p = void 0 !== e.clockseq ? e.clockseq : o;
				if (null == l || null == p) {
					var m = i();
					null == l && (l = r = [1 | m[0], m[1], m[2], m[3], m[4], m[5]]), null == p && (p = o = 16383 & (m[6] << 8 | m[7]))
				}
				var b = void 0 !== e.msecs ? e.msecs : (new Date).getTime(),
					f = void 0 !== e.nsecs ? e.nsecs : a + 1,
					j = b - c + (f - a) / 1e4;
				if (j < 0 && void 0 === e.clockseq && (p = p + 1 & 16383), (j < 0 || b > c) && void 0 === e.nsecs && (f = 0), f >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
				c = b, a = f, o = p;
				var h = (1e4 * (268435455 & (b += 122192928e5)) + f) % 4294967296;
				u[s++] = h >>> 24 & 255, u[s++] = h >>> 16 & 255, u[s++] = h >>> 8 & 255, u[s++] = 255 & h;
				var O = b / 4294967296 * 1e4 & 268435455;
				u[s++] = O >>> 8 & 255, u[s++] = 255 & O, u[s++] = O >>> 24 & 15 | 16, u[s++] = O >>> 16 & 255, u[s++] = p >>> 8 | 128, u[s++] = 255 & p;
				for (var P = 0; P < 6; ++P) u[s + P] = l[P];
				return t || d(u)
			}
		},
		"./src/reddit/actions/economics/predictions/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return _
			})), n.d(t, "j", (function() {
				return C
			})), n.d(t, "n", (function() {
				return L
			})), n.d(t, "m", (function() {
				return S
			})), n.d(t, "k", (function() {
				return q
			})), n.d(t, "b", (function() {
				return F
			})), n.d(t, "q", (function() {
				return Q
			})), n.d(t, "r", (function() {
				return R
			})), n.d(t, "g", (function() {
				return B
			})), n.d(t, "a", (function() {
				return M
			})), n.d(t, "s", (function() {
				return J
			})), n.d(t, "l", (function() {
				return U
			})), n.d(t, "h", (function() {
				return A
			})), n.d(t, "i", (function() {
				return K
			})), n.d(t, "o", (function() {
				return H
			})), n.d(t, "p", (function() {
				return z
			})), n.d(t, "f", (function() {
				return V
			})), n.d(t, "c", (function() {
				return W
			})), n.d(t, "d", (function() {
				return X
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/uuid/index.js"),
				i = n.n(o),
				d = n("./src/lib/initializeClient/installReducer.ts"),
				c = n("./src/reddit/reducers/features/predictions/index.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				s = n("./src/reddit/models/Toast/index.ts"),
				u = n("./src/lib/makeActionCreator/index.ts"),
				l = n("./src/reddit/endpoints/economics/predictions.ts"),
				p = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				m = n("./src/reddit/helpers/graphql/normalizePredictionTournamentFromGql/index.ts"),
				b = n("./src/redditGQL/types.ts"),
				f = n("./src/reddit/actions/login.ts"),
				j = n("./src/reddit/actions/modal.ts"),
				h = n("./src/reddit/constants/modals.ts"),
				O = n("./src/reddit/selectors/experiments/econ/index.ts"),
				P = n("./src/reddit/selectors/subreddit.ts"),
				g = n("./src/reddit/selectors/user.ts"),
				v = n("./src/reddit/selectors/features/predictions/creation/index.ts"),
				I = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				w = n("./src/reddit/actions/economics/predictions/constants.ts");
			Object(d.a)({
				features: {
					predictions: c.a
				}
			});
			const x = Object(u.a)(w.e),
				k = Object(u.a)(w.i),
				E = Object(u.a)(w.l),
				y = Object(u.a)(w.h),
				_ = Object(u.a)(w.b),
				C = (e, t, n, r) => async (o, i, {
					gqlContext: d
				}) => {
					const c = Object(g.K)(i()),
						a = await Object(l.j)(d(), {
							subredditId: e,
							period: t,
							top: n,
							includeCurrentRank: c,
							tournamentId: r
						});
					if (a.error || !a.ok) throw new Error("Failed to fetch subreddit top predictors");
					const {
						subredditInfoById: s
					} = a.body.data;
					if (!s || !s.predictionWinners) throw new Error("Subreddit has no prediction winners");
					const {
						predictionWinners: u
					} = s, p = {
						subredditId: e,
						...u
					};
					return o(x(p)), p
				}, L = ({
					coinPackageId: e,
					optionId: t,
					postId: n,
					price: r
				}) => async (o, i, {
					gqlContext: d
				}) => {
					const c = await Object(l.n)(d(), {
						coinPackageId: e,
						optionId: t,
						postId: n,
						price: r
					});
					return o(k({
						pollId: n,
						prediction: c,
						price: r
					})), c
				}, S = ({
					optionId: e,
					postId: t
				}) => async (n, r, {
					gqlContext: o
				}) => {
					const i = await Object(l.l)(o(), {
							optionId: e,
							postId: t
						}),
						{
							resolvePrediction: d
						} = i.body.data;
					if (!(null == d ? void 0 : d.poll)) throw new Error("Failed to resolve prediction");
					return n(y({
						pollId: t,
						prediction: d.poll
					})), d.poll
				}, G = Object(u.a)(w.c), N = Object(u.a)(w.d), T = Object(u.a)(w.g), q = e => async (t, n, {
					gqlContext: r
				}) => {
					const o = n(),
						i = Object(P.B)(o, e),
						d = Object(I.j)(o, {
							subredditId: i
						}),
						c = Object(O.m)(o);
					if (d) return Object(I.f)(o, {
						subredditId: i
					});
					t(G({
						subredditId: i
					}));
					const a = await Object(l.k)(r(), {
							subredditName: e,
							isLatestOnly: !0,
							isIncludingPredictions: !0,
							isIncludingParticipants: !0,
							isIncludingCancelledPredictions: c
						}),
						s = {};
					a.forEach(e => {
						var t;
						(null === (t = e.predictionPosts) || void 0 === t ? void 0 : t.length) && e.predictionPosts.forEach(e => {
							e && (s[e.id] = Object(p.e)(e))
						})
					});
					const u = a.map(e => Object(m.a)(e));
					return t(N({
						subredditId: i,
						tournaments: u
					})), t(T({
						posts: s,
						meta: o.meta
					})), u
				}, F = Object(u.a)(w.a), Q = Object(u.a)(w.j), R = Object(u.a)(w.k), B = ({
					subredditId: e
				}) => async (t, n, {
					gqlContext: r
				}) => {
					const o = n(),
						i = Object(v.b)(o),
						d = Object(O.a)(o);
					if (!i) throw new Error("Failed to create tournament, no prediction drafts attached");
					const c = await Object(l.f)(r(), {
							tournamentId: null,
							name: "Predictions Tournament",
							isStartImmediately: !0,
							subredditId: e,
							predictionDrafts: i,
							currency: d ? b.b.Coins : b.b.Tokens
						}),
						{
							createPredictionTournament: a
						} = c.body.data;
					if (!(null == a ? void 0 : a.tournament)) throw new Error("Failed to resolve prediction");
					const {
						tournament: s
					} = a;
					return t(N({
						subredditId: e,
						tournaments: [s]
					})), s
				}, M = (e, t) => async (n, r, {
					gqlContext: o
				}) => {
					var d;
					const c = Object(v.b)(r());
					if (!c) throw new Error("Failed to create prediction post, no prediction drafts attached");
					const a = await Object(l.b)(o(), {
							tournamentId: e,
							isStartImmediately: !0,
							iKey: `add-dfts-${i.a.v4()}`,
							subredditId: t,
							predictionDrafts: c
						}),
						{
							addPredictionDrafts: s
						} = a.body.data;
					if (null === (d = s.errors) || void 0 === d ? void 0 : d.length) throw new Error(s.errors[0].message);
					if (!(null == s ? void 0 : s.tournament)) throw new Error("Failed to create prediction");
					return s.tournament
				}, D = Object(u.a)(w.m), J = (e, t, n) => async (t, r, {
					gqlContext: o
				}) => {
					const i = await Object(l.m)(o(), {
							tournamentId: e,
							name: n
						}),
						{
							updatePredictionTournament: d
						} = i.body.data;
					if (!d.tournament) throw new Error("Failed to update prediction name");
					return t(D(d.tournament)), d.tournament
				}, U = e => async (t, n, {
					gqlContext: r
				}) => {
					const o = await Object(l.g)(r(), {
							tournamentId: e
						}),
						{
							endPredictionTournament: i
						} = o.body.data;
					if (!i.tournament) throw new Error("Failed to update prediction name");
					return t(D(i.tournament)), i.tournament
				}, A = e => async (t, n, {
					gqlContext: r
				}) => {
					const o = await Object(l.h)(r(), {
						postId: e
					});
					if (!o.ok || o.error) throw new Error("Failed to fetch prediction chip packages");
					const {
						postInfoById: i
					} = o.body.data;
					if (!i.predictionChipPackages) throw new Error("Failed to fetch prediction chip packages");
					return i.predictionChipPackages
				}, K = e => async (t, n, {
					gqlContext: r
				}) => {
					const o = await Object(l.i)(r(), {
						tournamentId: e
					});
					if (!o.ok || o.error) throw new Error("Failed to fetch token balance");
					const {
						identity: i
					} = o.body.data;
					if (!i.hasOwnProperty("predictionTokens")) throw new Error("Failed to fetch token balance");
					return i.predictionTokens
				}, H = ({
					coinPackageId: e,
					selectedOptionId: t,
					price: n,
					pollId: r,
					tournamentId: o,
					tournamentPostId: i
				}) => async d => {
					const c = await d(L({
						coinPackageId: e,
						optionId: t,
						postId: r,
						price: n
					}));
					return d(E({
						predictionId: r,
						selectedOptionId: t,
						tournamentId: o,
						tournamentPostId: i
					})), c
				}, z = e => async (t, n) => {
					const r = n();
					Object(g.K)(r) ? await t(Object(j.h)(h.a.ECON_PREDICTIONS_PREMIUM_UPSELL, {
						feature: e
					})) : await t(Object(f.i)())
				}, V = () => Object(j.g)(h.a.ECON_PREDICTIONS_PREMIUM_UPSELL), W = e => async (t, n, {
					gqlContext: o
				}) => {
					try {
						const n = await Object(l.c)(o(), {
							postId: e
						});
						t(_({
							postId: e,
							prediction: n
						}));
						const i = Object(a.e)(r.fbt._("Prediction has been cancelled", null, {
							hk: "3Bh9Fw"
						}), s.b.SuccessMod);
						t(Object(a.f)(i))
					} catch {
						const e = Object(a.e)(r.fbt._("Unable to cancel prediction", null, {
							hk: "2wkeKy"
						}), s.b.Error);
						t(Object(a.f)(e))
					}
				};

			function X(e, t) {
				return async (n, r, {
					gqlContext: o
				}) => {
					const i = await Object(l.d)(o(), {
						postId: e,
						...t
					});
					return n(_({
						postId: e,
						prediction: i
					})), i
				}
			}
		},
		"./src/reddit/components/Econ/Prediction/PremiumModal/index.m.less": function(e, t, n) {
			e.exports = {
				modal: "_2BtHtL1Zjhoqs7ZiPXcXLg",
				background: "_1iNAKjha6s-badBHwqzsdx",
				prediction: "xSQGzlnjKjnxYjy3ygcB_",
				closeButton: "_1spBLnhd1xieUJvIriZcFW",
				logo: "yRpW8BiM4O5I1UhHhD9wT",
				title: "_2_qEMtk2Rp4_OCPTbSajfM",
				description: "_3wF_pRmOU-jJnR4fgUqDfo",
				footer: "uFf9xao_T8Vmw8takJGOP",
				premium: "TpRHjLyfcN3-aJqyKIGFC",
				benefitsText: "f00uq7n6KmCf8d9S4cXmz",
				paidPremiumSubtext: "_1LYXiiQFBwsbJwFKPkPKAu",
				image: "_330Jsq1HHf7DIx2CLWBEob",
				sneakPeek: "_2ZB9KBzb_AsABPWsegW5-F",
				changePrediction: "DUbTe52Ax5ebrV43igiEy"
			}
		},
		"./src/reddit/components/Econ/Prediction/PremiumModal/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("./src/config.ts"),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				d = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/reddit/actions/economics/predictions/index.ts"),
				a = n("./src/reddit/selectors/activeModal.ts"),
				s = n("./src/higherOrderComponents/asModal/index.tsx"),
				u = n("./src/reddit/actions/gold/productOfferPurchase.ts"),
				l = n("./src/reddit/actions/gold/productOffers.ts"),
				p = n("./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts"),
				m = n("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				b = n("./src/reddit/components/PremiumPurchaseModal/Loader.tsx"),
				f = n("./src/reddit/controls/Button/index.tsx"),
				j = n("./src/reddit/helpers/correlationIdTracker.ts"),
				h = n("./src/reddit/helpers/trackers/premium.ts"),
				O = n("./src/reddit/hooks/useTracking.ts"),
				P = n("./src/reddit/icons/fonts/index.tsx"),
				g = n("./src/reddit/icons/svgs/PremiumLogo/index.tsx"),
				v = n("./src/reddit/models/Gold/ProductOffer.ts"),
				I = n("./src/reddit/pages/Premium/index.tsx"),
				w = n("./src/reddit/pages/Premium/BenefitsSection/index.tsx"),
				x = n("./src/reddit/pages/Premium/PremiumButtons/index.tsx"),
				k = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				E = n("./src/reddit/components/Econ/Prediction/PremiumModal/index.m.less"),
				y = n.n(E);
			const {
				fbt: _
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var C = Object(s.a)(({
				title: e,
				description: t,
				footer: n,
				image: r,
				onClose: c
			}) => {
				const a = Object(d.d)(),
					s = Object(O.a)(),
					E = Object(d.e)(k.j),
					C = Object(d.e)(k.l),
					L = Object(j.d)(j.a.GoldPayment, !1);
				Object(o.useEffect)(() => {
					Object(b.a)()
				}, []), Object(o.useEffect)(() => {
					E.length || C || a(Object(m.b)(L)), a(Object(l.c)(v.c.Premium))
				});
				return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
					className: y.a.background,
					style: {
						backgroundImage: "linear-gradient(\n              to right,\n              rgba(0, 0, 0, 0.6) 0%,\n              rgba(0, 0, 0, 0) 50%\n            )",
						backgroundSize: "auto 100%"
					}
				}, r, i.a.createElement(f.q, {
					"aria-label": _._("Close", null, {
						hk: "2xO1CF"
					}),
					className: y.a.closeButton,
					Icon: Object(P.b)("close"),
					onClick: c,
					priority: f.b.Plain
				}), i.a.createElement("div", {
					className: y.a.prediction
				}, i.a.createElement("div", {
					className: y.a.logo
				}, i.a.createElement(g.a, null)), i.a.createElement("h2", {
					className: y.a.title
				}, e), i.a.createElement("h3", {
					className: y.a.description
				}, t), i.a.createElement("p", {
					className: y.a.footer
				}, n))), i.a.createElement("div", {
					className: y.a.premium
				}, i.a.createElement("h3", {
					className: y.a.benefitsText
				}, _._("More Reddit Premium Features", null, {
					hk: "2qvl5q"
				})), i.a.createElement(w.a, null), i.a.createElement(x.a, {
					onClickPackage: (e, t) => {
						a(Object(p.openWithBlob)({
							correlationId: L,
							packageId: e
						})), a(Object(u.i)({
							renewInterval: t
						})), s(h.c({
							renewInterval: t
						}))
					}
				}), i.a.createElement("div", {
					className: y.a.paidPremiumSubtext
				}, I.PAID_PREMIUM_SUBTEXT)))
			});
			const {
				fbt: L
			} = n("./node_modules/fbt/lib/FbtPublic.js"), S = {
				CHANGE_PREDICTION: {
					title: L._("Change your Prediction with Reddit Premium", null, {
						hk: "10eeE8"
					}),
					description: L._("Having second thoughts? Get Reddit Premium and change your answer twice per prediction.", null, {
						hk: "3xI6kK"
					}),
					footer: L._("Only paid Reddit Premium members can change their predictions.", null, {
						hk: "1aY1cT"
					}),
					image: i.a.createElement("img", {
						alt: "Snoo magician in front of a magic ball",
						className: y.a.changePrediction,
						src: `${r.a.assetPath}/img/econ/predictions/change_prediction.png`
					})
				},
				SNEAK_PEEK: {
					title: L._("See what others have picked with Reddit Premium", null, {
						hk: "2JbsQh"
					}),
					description: L._("Get Reddit Premium and see what others have picked before making your predictions.", null, {
						hk: "4lBlLU"
					}),
					footer: L._("Only paid Reddit Premium members can use Sneak Peek.", null, {
						hk: "2nBIOx"
					}),
					image: i.a.createElement("img", {
						alt: "Snoo peeking into curtains",
						className: y.a.sneakPeek,
						src: `${r.a.assetPath}/img/econ/predictions/sneak_peek.png`
					})
				}
			};
			t.default = () => {
				const e = Object(d.d)(),
					{
						feature: t
					} = Object(d.e)(e => Object(a.a)(e));
				if (!t) return null;
				const n = () => e(Object(c.f)());
				return i.a.createElement(C, {
					className: y.a.modal,
					withOverlay: !0,
					onOverlayClick: n,
					onClose: n,
					title: S[t].title,
					description: S[t].description,
					footer: S[t].footer,
					image: S[t].image
				})
			}
		},
		"./src/reddit/endpoints/economics/predictions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "n", (function() {
				return O
			})), n.d(t, "l", (function() {
				return P
			})), n.d(t, "a", (function() {
				return g
			})), n.d(t, "j", (function() {
				return v
			})), n.d(t, "f", (function() {
				return I
			})), n.d(t, "k", (function() {
				return w
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "m", (function() {
				return k
			})), n.d(t, "g", (function() {
				return E
			})), n.d(t, "h", (function() {
				return y
			})), n.d(t, "i", (function() {
				return _
			})), n.d(t, "d", (function() {
				return C
			})), n.d(t, "c", (function() {
				return L
			})), n.d(t, "e", (function() {
				return S
			}));
			var r = n("./src/lib/makeGqlRequest/index.ts"),
				o = n("./src/lib/makeRequest/index.ts"),
				i = n("./src/redditGQL/operations/AddPredictionDrafts.json"),
				d = n("./src/redditGQL/operations/CancelPrediction.json"),
				c = n("./src/redditGQL/operations/ChangePrediction.json"),
				a = n("./src/redditGQL/operations/ChangePredictionVote.json"),
				s = n("./src/redditGQL/operations/CreatePredictionTournament.json"),
				u = n("./src/redditGQL/operations/EndPredictionTournament.json"),
				l = n("./src/redditGQL/operations/GetPredictionChipPackages.json"),
				p = n("./src/redditGQL/operations/GetPredictionToken.json"),
				m = n("./src/redditGQL/operations/GetTournaments.json"),
				b = n("./src/redditGQL/operations/ResolvePrediction.json"),
				f = n("./src/redditGQL/operations/SubredditTopPredictors.json"),
				j = n("./src/redditGQL/operations/UpdatePredictionTournament.json"),
				h = n("./src/redditGQL/operations/VotePrediction.json");
			const O = async (e, {
				postId: t,
				optionId: n,
				coinPackageId: i,
				price: d
			}) => {
				var c;
				const a = await Object(r.a)(e, {
					...h,
					variables: {
						input: {
							postId: t,
							optionId: n,
							coinPackageId: i,
							price: d
						}
					}
				});
				if (!Object(o.c)(a) || a.error || !(null === (c = a.body.data.votePrediction) || void 0 === c ? void 0 : c.ok)) throw new Error("Failed to make prediction");
				return a.body.data.votePrediction.poll
			}, P = (e, {
				postId: t,
				optionId: n
			}) => Object(r.a)(e, {
				...b,
				variables: {
					input: {
						postId: t,
						optionId: n
					}
				}
			});
			var g;
			! function(e) {
				e.AllTime = "ALL_TIME", e.Monthly = "MONTHLY"
			}(g || (g = {}));
			const v = (e, {
					subredditId: t,
					period: n,
					top: o,
					includeCurrentRank: i,
					tournamentId: d
				}) => Object(r.a)(e, {
					...f,
					variables: {
						subredditId: t,
						period: n,
						top: o,
						includeCurrentRank: i,
						tournamentId: d
					}
				}),
				I = (e, t) => Object(r.a)(e, {
					...s,
					variables: {
						input: t
					}
				}),
				w = async (e, t) => {
					const n = await Object(r.a)(e, {
						...m,
						variables: t
					});
					if (!Object(o.c)(n) || n.error) throw new Error("Failed to fetch tournaments");
					return n.body.data.subredditInfoByName.predictionTournaments || []
				}, x = (e, t) => Object(r.a)(e, {
					...i,
					variables: {
						input: t
					}
				}), k = (e, t) => Object(r.a)(e, {
					...j,
					variables: {
						input: t
					}
				}), E = (e, t) => Object(r.a)(e, {
					...u,
					variables: {
						input: t
					}
				}), y = (e, t) => Object(r.a)(e, {
					...l,
					variables: t
				}), _ = (e, t) => Object(r.a)(e, {
					...p,
					variables: t
				}), C = async (e, t) => {
					const n = await Object(r.a)(e, {
						...c,
						variables: {
							input: t
						}
					});
					if (!Object(o.c)(n) || !n.body.data.changePrediction.ok) throw new Error("Unable to update prediction");
					return n.body.data.changePrediction.poll
				}, L = async (e, {
					postId: t
				}) => {
					var n, i;
					const c = await Object(r.a)(e, {
						...d,
						variables: {
							input: {
								postId: t
							}
						}
					});
					if (!Object(o.c)(c) || !(null === (n = c.body.data.cancelPrediction) || void 0 === n ? void 0 : n.ok) || !(null === (i = c.body.data.cancelPrediction) || void 0 === i ? void 0 : i.poll)) throw new Error("Unable to cancel prediction");
					return c.body.data.cancelPrediction.poll
				}, S = async (e, t) => {
					var n, i;
					const d = await Object(r.a)(e, {
						...a,
						variables: {
							input: t
						}
					});
					if (!Object(o.c)(d) || !(null === (n = d.body.data.changePredictionVote) || void 0 === n ? void 0 : n.ok) || !(null === (i = d.body.data.changePredictionVote) || void 0 === i ? void 0 : i.poll)) throw new Error("Unable to change prediction.");
					return d.body.data.changePredictionVote.poll
				}
		},
		"./src/reddit/selectors/features/predictions/creation/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return d
			})), n.d(t, "a", (function() {
				return c
			}));
			var r = n("./src/lib/initializeClient/installReducer.ts"),
				o = n("./src/reddit/reducers/features/predictions/index.ts"),
				i = n("./src/reddit/selectors/postCreations.ts");
			Object(r.a)({
				features: {
					predictions: o.a
				}
			});
			const d = e => {
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
							r = t.formData.polls,
							o = r.options.map(e => ({
								text: e.text
							})),
							d = {};
						return n.document ? d.richText = JSON.stringify({
							document: n.document
						}) : n.markdown && (d.markdown = n.markdown), {
							title: n.title,
							isLiveChat: n.isChatPost,
							isNsfw: n.isNSFW,
							isSpoiler: n.isSpoiler,
							votingEndsAt: r.endDate.toISOString(),
							body: d,
							options: o
						}
					}) : []
				},
				c = e => {
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
			e.exports = JSON.parse('{"id":"a9582ea601a1"}')
		},
		"./src/redditGQL/operations/UpdatePredictionTournament.json": function(e) {
			e.exports = JSON.parse('{"id":"6851ffb490a5"}')
		},
		"./src/redditGQL/operations/VotePrediction.json": function(e) {
			e.exports = JSON.parse('{"id":"484780ada6a2"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction-PremiumModal.4ba4b401b48c92d35e51.js.map