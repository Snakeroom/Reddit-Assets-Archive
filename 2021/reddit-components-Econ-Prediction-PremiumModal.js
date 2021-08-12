// https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction-PremiumModal.896c178d3670409283bf.js
// Retrieved at 8/12/2021, 11:50:06 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Econ-Prediction-PremiumModal"], {
		"./node_modules/uuid/index.js": function(e, t, r) {
			var n = r("./node_modules/uuid/v1.js"),
				o = r("./node_modules/uuid/v4.js"),
				i = o;
			i.v1 = n, i.v4 = o, e.exports = i
		},
		"./node_modules/uuid/v1.js": function(e, t, r) {
			var n, o, i = r("./node_modules/uuid/lib/rng-browser.js"),
				d = r("./node_modules/uuid/lib/bytesToUuid.js"),
				c = 0,
				a = 0;
			e.exports = function(e, t, r) {
				var s = t && r || 0,
					u = t || [],
					l = (e = e || {}).node || n,
					p = void 0 !== e.clockseq ? e.clockseq : o;
				if (null == l || null == p) {
					var m = i();
					null == l && (l = n = [1 | m[0], m[1], m[2], m[3], m[4], m[5]]), null == p && (p = o = 16383 & (m[6] << 8 | m[7]))
				}
				var b = void 0 !== e.msecs ? e.msecs : (new Date).getTime(),
					f = void 0 !== e.nsecs ? e.nsecs : a + 1,
					j = b - c + (f - a) / 1e4;
				if (j < 0 && void 0 === e.clockseq && (p = p + 1 & 16383), (j < 0 || b > c) && void 0 === e.nsecs && (f = 0), f >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
				c = b, a = f, o = p;
				var h = (1e4 * (268435455 & (b += 122192928e5)) + f) % 4294967296;
				u[s++] = h >>> 24 & 255, u[s++] = h >>> 16 & 255, u[s++] = h >>> 8 & 255, u[s++] = 255 & h;
				var P = b / 4294967296 * 1e4 & 268435455;
				u[s++] = P >>> 8 & 255, u[s++] = 255 & P, u[s++] = P >>> 24 & 15 | 16, u[s++] = P >>> 16 & 255, u[s++] = p >>> 8 | 128, u[s++] = 255 & p;
				for (var O = 0; O < 6; ++O) u[s + O] = l[O];
				return t || d(u)
			}
		},
		"./src/reddit/actions/economics/predictions/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return y
			})), r.d(t, "j", (function() {
				return C
			})), r.d(t, "n", (function() {
				return _
			})), r.d(t, "m", (function() {
				return L
			})), r.d(t, "k", (function() {
				return T
			})), r.d(t, "b", (function() {
				return q
			})), r.d(t, "q", (function() {
				return Q
			})), r.d(t, "r", (function() {
				return R
			})), r.d(t, "g", (function() {
				return F
			})), r.d(t, "a", (function() {
				return D
			})), r.d(t, "s", (function() {
				return J
			})), r.d(t, "l", (function() {
				return B
			})), r.d(t, "h", (function() {
				return U
			})), r.d(t, "i", (function() {
				return A
			})), r.d(t, "o", (function() {
				return K
			})), r.d(t, "p", (function() {
				return z
			})), r.d(t, "f", (function() {
				return H
			})), r.d(t, "c", (function() {
				return V
			})), r.d(t, "d", (function() {
				return W
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./node_modules/uuid/index.js"),
				i = r.n(o),
				d = r("./src/lib/initializeClient/installReducer.ts"),
				c = r("./src/reddit/reducers/features/predictions/index.ts"),
				a = r("./src/reddit/actions/toaster.ts"),
				s = r("./src/reddit/models/Toast/index.ts"),
				u = r("./src/lib/makeActionCreator/index.ts"),
				l = r("./src/lib/makeRequest/index.ts"),
				p = r("./src/reddit/endpoints/economics/predictions.ts"),
				m = r("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				b = r("./src/reddit/actions/modal.ts"),
				f = r("./src/reddit/constants/modals.ts"),
				j = r("./src/reddit/models/Prediction/index.ts"),
				h = r("./src/reddit/selectors/experiments/econ/index.ts"),
				P = r("./src/reddit/selectors/subreddit.ts"),
				O = r("./src/reddit/selectors/user.ts"),
				g = r("./src/reddit/selectors/features/predictions/creation/index.ts"),
				v = r("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				I = r("./src/reddit/actions/economics/predictions/constants.ts");
			Object(d.a)({
				features: {
					predictions: c.a
				}
			});
			const w = Object(u.a)(I.e),
				x = Object(u.a)(I.i),
				k = Object(u.a)(I.l),
				E = Object(u.a)(I.h),
				y = Object(u.a)(I.b),
				C = (e, t, r, n) => async (o, i, {
					gqlContext: d
				}) => {
					const c = Object(O.J)(i()),
						a = await Object(p.j)(d(), {
							subredditId: e,
							period: t,
							top: r,
							includeCurrentRank: c,
							tournamentId: n
						});
					if (a.error || !a.ok) throw new Error("Failed to fetch subreddit top predictors");
					const {
						subredditInfoById: s
					} = a.body.data;
					if (!s || !s.predictionWinners) throw new Error("Subreddit has no prediction winners");
					const {
						predictionWinners: u
					} = s, l = {
						subredditId: e,
						...u
					};
					return o(w(l)), l
				}, _ = ({
					coinPackageId: e,
					optionId: t,
					postId: r,
					price: n
				}) => async (o, i, {
					gqlContext: d
				}) => {
					const c = await Object(p.n)(d(), {
						coinPackageId: e,
						optionId: t,
						postId: r,
						price: n
					});
					return o(x({
						pollId: r,
						prediction: c,
						price: n
					})), c
				}, L = ({
					optionId: e,
					postId: t
				}) => async (r, n, {
					gqlContext: o
				}) => {
					const i = await Object(p.l)(o(), {
							optionId: e,
							postId: t
						}),
						{
							resolvePrediction: d
						} = i.body.data;
					if (!(null == d ? void 0 : d.poll)) throw new Error("Failed to resolve prediction");
					return r(E({
						pollId: t,
						prediction: d.poll
					})), d.poll
				}, S = Object(u.a)(I.c), N = Object(u.a)(I.d), G = Object(u.a)(I.g), T = e => async (t, r, {
					gqlContext: n
				}) => {
					const o = r(),
						i = Object(P.E)(o, e),
						d = Object(v.j)(o, {
							subredditId: i
						}),
						c = Object(h.m)(o);
					if (d) return Object(v.f)(o, {
						subredditId: i
					});
					t(S({
						subredditId: i
					}));
					const a = await Object(p.k)(n(), {
						subredditName: e,
						isLatestOnly: !0,
						isIncludingPredictions: !0,
						isIncludingParticipants: !0,
						isIncludingCancelledPredictions: c
					});
					if (!Object(l.c)(a) || a.error) throw new Error("Failed to fetch tournaments");
					const {
						predictionTournaments: s
					} = a.body.data.subredditInfoByName;
					if (!s) return [];
					const u = s.map(e => {
							var t, r;
							const n = null !== (r = null === (t = e.predictionPosts) || void 0 === t ? void 0 : t.map(e => {
								const t = Object(m.e)(e),
									r = t.pollData;
								return {
									...t,
									pollData: r
								}
							})) && void 0 !== r ? r : [];
							return {
								...e,
								predictionPosts: n
							}
						}),
						b = u.reduce((e, t) => (t.predictionPosts.length && t.predictionPosts.forEach(t => {
							e[t.id] = t
						}), e), {});
					return t(N({
						subredditId: i,
						tournaments: u
					})), t(G({
						posts: b,
						meta: o.meta
					})), u
				}, q = Object(u.a)(I.a), Q = Object(u.a)(I.j), R = Object(u.a)(I.k), F = ({
					subredditId: e
				}) => async (t, r, {
					gqlContext: n
				}) => {
					const o = r(),
						i = Object(g.b)(o),
						d = Object(h.a)(o);
					if (!i) throw new Error("Failed to create tournament, no prediction drafts attached");
					const c = await Object(p.f)(n(), {
							name: "Predictions Tournament",
							isStartImmediately: !0,
							subredditId: e,
							predictionDrafts: i,
							currency: d ? j.a.Coins : j.a.Tokens
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
				}, D = (e, t) => async (r, n, {
					gqlContext: o
				}) => {
					var d;
					const c = Object(g.b)(n());
					if (!c) throw new Error("Failed to create prediction post, no prediction drafts attached");
					const a = await Object(p.b)(o(), {
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
				}, M = Object(u.a)(I.m), J = (e, t, r) => async (t, n, {
					gqlContext: o
				}) => {
					const i = await Object(p.m)(o(), {
							tournamentId: e,
							name: r
						}),
						{
							updatePredictionTournament: d
						} = i.body.data;
					if (!d.tournament) throw new Error("Failed to update prediction name");
					return t(M(d.tournament)), d.tournament
				}, B = e => async (t, r, {
					gqlContext: n
				}) => {
					const o = await Object(p.g)(n(), {
							tournamentId: e
						}),
						{
							endPredictionTournament: i
						} = o.body.data;
					if (!i.tournament) throw new Error("Failed to update prediction name");
					return t(M(i.tournament)), i.tournament
				}, U = e => async (t, r, {
					gqlContext: n
				}) => {
					const o = await Object(p.h)(n(), {
						postId: e
					});
					if (!o.ok || o.error) throw new Error("Failed to fetch prediction chip packages");
					const {
						postInfoById: i
					} = o.body.data;
					if (!i.predictionChipPackages) throw new Error("Failed to fetch prediction chip packages");
					return i.predictionChipPackages
				}, A = e => async (t, r, {
					gqlContext: n
				}) => {
					const o = await Object(p.i)(n(), {
						tournamentId: e
					});
					if (!o.ok || o.error) throw new Error("Failed to fetch token balance");
					const {
						identity: i
					} = o.body.data;
					if (!i.hasOwnProperty("predictionTokens")) throw new Error("Failed to fetch token balance");
					return i.predictionTokens
				}, K = ({
					coinPackageId: e,
					selectedOptionId: t,
					price: r,
					pollId: n,
					tournamentId: o,
					tournamentPostId: i
				}) => async d => {
					const c = await d(_({
						coinPackageId: e,
						optionId: t,
						postId: n,
						price: r
					}));
					return d(k({
						predictionId: n,
						selectedOptionId: t,
						tournamentId: o,
						tournamentPostId: i
					})), c
				}, z = e => Object(b.h)(f.a.ECON_PREDICTIONS_PREMIUM_UPSELL, {
					feature: e
				}), H = () => Object(b.g)(f.a.ECON_PREDICTIONS_PREMIUM_UPSELL), V = e => async (t, r, {
					gqlContext: o
				}) => {
					try {
						const r = await Object(p.c)(o(), {
							postId: e
						});
						t(y({
							postId: e,
							prediction: r
						}));
						const i = Object(a.e)(n.fbt._("Prediction has been cancelled", null, {
							hk: "3Bh9Fw"
						}), s.b.SuccessMod);
						t(Object(a.f)(i))
					} catch {
						const e = Object(a.e)(n.fbt._("Unable to cancel prediction", null, {
							hk: "2wkeKy"
						}), s.b.Error);
						t(Object(a.f)(e))
					}
				};

			function W(e, t) {
				return async (r, n, {
					gqlContext: o
				}) => {
					const i = await Object(p.d)(o(), {
						postId: e,
						...t
					});
					return r(y({
						postId: e,
						prediction: i
					})), i
				}
			}
		},
		"./src/reddit/components/Econ/Prediction/PremiumModal/index.m.less": function(e, t, r) {
			e.exports = {
				modal: "_2BtHtL1Zjhoqs7ZiPXcXLg",
				background: "_1iNAKjha6s-badBHwqzsdx",
				image: "_330Jsq1HHf7DIx2CLWBEob",
				prediction: "xSQGzlnjKjnxYjy3ygcB_",
				closeButton: "_1spBLnhd1xieUJvIriZcFW",
				logo: "yRpW8BiM4O5I1UhHhD9wT",
				title: "_2_qEMtk2Rp4_OCPTbSajfM",
				description: "_3wF_pRmOU-jJnR4fgUqDfo",
				footer: "uFf9xao_T8Vmw8takJGOP",
				premium: "TpRHjLyfcN3-aJqyKIGFC",
				benefitsText: "f00uq7n6KmCf8d9S4cXmz",
				paidPremiumSubtext: "_1LYXiiQFBwsbJwFKPkPKAu"
			}
		},
		"./src/reddit/components/Econ/Prediction/PremiumModal/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var n = r("./src/config.ts"),
				o = r("./node_modules/react/index.js"),
				i = r.n(o),
				d = r("./node_modules/react-redux/es/index.js"),
				c = r("./src/reddit/actions/economics/predictions/index.ts"),
				a = r("./src/reddit/selectors/activeModal.ts"),
				s = r("./src/higherOrderComponents/asModal/index.tsx"),
				u = r("./src/reddit/actions/gold/productOfferPurchase.ts"),
				l = r("./src/reddit/actions/gold/productOffers.ts"),
				p = r("./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts"),
				m = r("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				b = r("./src/reddit/actions/login.ts"),
				f = r("./src/reddit/components/PremiumPurchaseModal/Loader.tsx"),
				j = r("./src/reddit/controls/Button/index.tsx"),
				h = r("./src/reddit/helpers/correlationIdTracker.ts"),
				P = r("./src/reddit/helpers/trackers/premium.ts"),
				O = r("./src/reddit/hooks/useTracking.ts"),
				g = r("./src/reddit/icons/fonts/index.tsx"),
				v = r("./src/reddit/icons/svgs/PremiumLogo/index.tsx"),
				I = r("./src/reddit/models/Gold/ProductOffer.ts"),
				w = r("./src/reddit/pages/Premium/index.tsx"),
				x = r("./src/reddit/pages/Premium/BenefitsSection/index.tsx"),
				k = r("./src/reddit/pages/Premium/PremiumButtons/index.tsx"),
				E = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				y = r("./src/reddit/selectors/user.ts"),
				C = r("./src/reddit/components/Econ/Prediction/PremiumModal/index.m.less"),
				_ = r.n(C);
			const {
				fbt: L
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			var S = Object(s.a)(({
				title: e,
				description: t,
				footer: r,
				imagePath: n,
				imageSize: c,
				onClose: a
			}) => {
				const s = Object(d.d)(),
					C = Object(O.a)(),
					S = Object(d.e)(E.j),
					N = Object(d.e)(E.l),
					G = Object(d.e)(y.J),
					T = Object(h.d)(h.a.GoldPayment, !1);
				Object(o.useEffect)(() => {
					Object(f.a)()
				}, []), Object(o.useEffect)(() => {
					S.length || N || s(Object(m.b)(T)), s(Object(l.c)(I.c.Premium))
				});
				return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
					className: _.a.background,
					style: {
						backgroundImage: "linear-gradient(\n              to right,\n              rgba(0, 0, 0, 0.6) 0%,\n              rgba(0, 0, 0, 0) 50%\n            )",
						backgroundSize: "auto 100%"
					}
				}, i.a.createElement("div", {
					className: _.a.image,
					style: {
						backgroundImage: `url(${n})`,
						backgroundSize: `${c}px`
					}
				}, i.a.createElement(j.q, {
					"aria-label": L._("Close", null, {
						hk: "10CQyx"
					}),
					className: _.a.closeButton,
					Icon: Object(g.b)("close"),
					onClick: a,
					priority: j.b.Plain
				}), i.a.createElement("div", {
					className: _.a.prediction
				}, i.a.createElement("div", {
					className: _.a.logo
				}, i.a.createElement(v.a, null)), i.a.createElement("h2", {
					className: _.a.title
				}, e), i.a.createElement("h3", {
					className: _.a.description
				}, t), i.a.createElement("p", {
					className: _.a.footer
				}, r)))), i.a.createElement("div", {
					className: _.a.premium
				}, i.a.createElement("h3", {
					className: _.a.benefitsText
				}, L._("More Reddit Premium Features", null, {
					hk: "2qvl5q"
				})), i.a.createElement(x.a, null), i.a.createElement(k.a, {
					onClickPackage: (e, t) => {
						G ? (s(Object(p.openWithBlob)({
							correlationId: T,
							packageId: e
						})), s(Object(u.i)({
							renewInterval: t
						})), C(P.c({
							renewInterval: t
						}))) : s(Object(b.h)())
					}
				}), i.a.createElement("div", {
					className: _.a.paidPremiumSubtext
				}, w.PAID_PREMIUM_SUBTEXT)))
			});
			const {
				fbt: N
			} = r("./node_modules/fbt/lib/FbtPublic.js"), G = {
				CHANGE_PREDICTION: {
					title: N._("Change your Prediction with Reddit Premium", null, {
						hk: "10eeE8"
					}),
					description: N._("Having second thoughts? Get Reddit Premium and change your answer twice per prediction.", null, {
						hk: "3xI6kK"
					}),
					footer: N._("Only paid Reddit Premium members can change their predictions.", null, {
						hk: "1aY1cT"
					}),
					imagePath: `${n.a.assetPath}/img/econ/predictions/change_prediction.png`,
					imageSize: 200
				},
				SNEAK_PEEK: {
					title: N._("See what others have picked with Reddit Premium", null, {
						hk: "2JbsQh"
					}),
					description: N._("Reddit Premium members can see what others have picked before making a prediction.", null, {
						hk: "R7Vkp"
					}),
					footer: N._("Limited time feature available for paid Reddit Premium members only.", null, {
						hk: "2ZK5YC"
					}),
					imagePath: `${n.a.assetPath}/img/econ/predictions/sneak_peek.png`,
					imageSize: 185
				}
			};
			t.default = () => {
				const e = Object(d.d)(),
					{
						feature: t
					} = Object(d.e)(e => Object(a.a)(e));
				if (!t) return null;
				const r = () => e(Object(c.f)());
				return i.a.createElement(S, {
					className: _.a.modal,
					withOverlay: !0,
					onOverlayClick: r,
					onClose: r,
					title: G[t].title,
					description: G[t].description,
					footer: G[t].footer,
					imagePath: G[t].imagePath,
					imageSize: G[t].imageSize
				})
			}
		},
		"./src/reddit/endpoints/economics/predictions.ts": function(e, t, r) {
			"use strict";
			r.d(t, "n", (function() {
				return P
			})), r.d(t, "l", (function() {
				return O
			})), r.d(t, "a", (function() {
				return g
			})), r.d(t, "j", (function() {
				return v
			})), r.d(t, "f", (function() {
				return I
			})), r.d(t, "k", (function() {
				return w
			})), r.d(t, "b", (function() {
				return x
			})), r.d(t, "m", (function() {
				return k
			})), r.d(t, "g", (function() {
				return E
			})), r.d(t, "h", (function() {
				return y
			})), r.d(t, "i", (function() {
				return C
			})), r.d(t, "d", (function() {
				return _
			})), r.d(t, "c", (function() {
				return L
			})), r.d(t, "e", (function() {
				return S
			}));
			var n = r("./src/lib/makeGqlRequest/index.ts"),
				o = r("./src/lib/makeRequest/index.ts"),
				i = r("./src/redditGQL/operations/AddPredictionDrafts.json"),
				d = r("./src/redditGQL/operations/CancelPrediction.json"),
				c = r("./src/redditGQL/operations/ChangePrediction.json"),
				a = r("./src/redditGQL/operations/ChangePredictionVote.json"),
				s = r("./src/redditGQL/operations/CreatePredictionTournament.json"),
				u = r("./src/redditGQL/operations/EndPredictionTournament.json"),
				l = r("./src/redditGQL/operations/GetPredictionChipPackages.json"),
				p = r("./src/redditGQL/operations/GetPredictionToken.json"),
				m = r("./src/redditGQL/operations/GetTournaments.json"),
				b = r("./src/redditGQL/operations/ResolvePrediction.json"),
				f = r("./src/redditGQL/operations/SubredditTopPredictors.json"),
				j = r("./src/redditGQL/operations/UpdatePredictionTournament.json"),
				h = r("./src/redditGQL/operations/VotePrediction.json");
			const P = async (e, {
				postId: t,
				optionId: r,
				coinPackageId: i,
				price: d
			}) => {
				var c;
				const a = await Object(n.a)(e, {
					...h,
					variables: {
						input: {
							postId: t,
							optionId: r,
							coinPackageId: i,
							price: d
						}
					}
				});
				if (!Object(o.c)(a) || a.error || !(null === (c = a.body.data.votePrediction) || void 0 === c ? void 0 : c.ok)) throw new Error("Failed to make prediction");
				return a.body.data.votePrediction.poll
			}, O = (e, {
				postId: t,
				optionId: r
			}) => Object(n.a)(e, {
				...b,
				variables: {
					input: {
						postId: t,
						optionId: r
					}
				}
			});
			var g;
			! function(e) {
				e.AllTime = "ALL_TIME", e.Monthly = "MONTHLY"
			}(g || (g = {}));
			const v = (e, {
					subredditId: t,
					period: r,
					top: o,
					includeCurrentRank: i,
					tournamentId: d
				}) => Object(n.a)(e, {
					...f,
					variables: {
						subredditId: t,
						period: r,
						top: o,
						includeCurrentRank: i,
						tournamentId: d
					}
				}),
				I = (e, t) => Object(n.a)(e, {
					...s,
					variables: {
						input: t
					}
				}),
				w = (e, t) => Object(n.a)(e, {
					...m,
					variables: t
				}),
				x = (e, t) => Object(n.a)(e, {
					...i,
					variables: {
						input: t
					}
				}),
				k = (e, t) => Object(n.a)(e, {
					...j,
					variables: {
						input: t
					}
				}),
				E = (e, t) => Object(n.a)(e, {
					...u,
					variables: {
						input: t
					}
				}),
				y = (e, t) => Object(n.a)(e, {
					...l,
					variables: t
				}),
				C = (e, t) => Object(n.a)(e, {
					...p,
					variables: t
				}),
				_ = async (e, t) => {
					const r = await Object(n.a)(e, {
						...c,
						variables: {
							input: t
						}
					});
					if (!Object(o.c)(r) || !r.body.data.changePrediction.ok) throw new Error("Unable to update prediction");
					return r.body.data.changePrediction.poll
				}, L = async (e, {
					postId: t
				}) => {
					var r, i;
					const c = await Object(n.a)(e, {
						...d,
						variables: {
							input: {
								postId: t
							}
						}
					});
					if (!Object(o.c)(c) || !(null === (r = c.body.data.cancelPrediction) || void 0 === r ? void 0 : r.ok) || !(null === (i = c.body.data.cancelPrediction) || void 0 === i ? void 0 : i.poll)) throw new Error("Unable to cancel prediction");
					return c.body.data.cancelPrediction.poll
				}, S = async (e, t) => {
					var r, i;
					const d = await Object(n.a)(e, {
						...a,
						variables: {
							input: t
						}
					});
					if (!Object(o.c)(d) || !(null === (r = d.body.data.changePredictionVote) || void 0 === r ? void 0 : r.ok) || !(null === (i = d.body.data.changePredictionVote) || void 0 === i ? void 0 : i.poll)) throw new Error("Unable to change prediction.");
					return d.body.data.changePredictionVote.poll
				}
		},
		"./src/reddit/selectors/features/predictions/creation/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return d
			})), r.d(t, "a", (function() {
				return c
			}));
			var n = r("./src/lib/initializeClient/installReducer.ts"),
				o = r("./src/reddit/reducers/features/predictions/index.ts"),
				i = r("./src/reddit/selectors/postCreations.ts");
			Object(n.a)({
				features: {
					predictions: o.a
				}
			});
			const d = e => {
					const t = (e => {
						var t, r;
						return null === (r = null === (t = e.features) || void 0 === t ? void 0 : t.predictions) || void 0 === r ? void 0 : r.creation
					})(e);
					return (null == t ? void 0 : t.length) ? null == t ? void 0 : t.map(t => {
						const r = Object(i.cb)({
								...e,
								creations: {
									...e.creations,
									formData: t.formData,
									formState: t.formState
								}
							}, {}),
							n = t.formData.polls,
							o = n.options.map(e => ({
								text: e.text
							})),
							d = {};
						return r.document ? d.richText = JSON.stringify({
							document: r.document
						}) : r.markdown && (d.markdown = r.markdown), {
							title: r.title,
							isLiveChat: r.isChatPost,
							isNsfw: r.isNSFW,
							isSpoiler: r.isSpoiler,
							votingEndsAt: n.endDate.toISOString(),
							body: d,
							options: o
						}
					}) : []
				},
				c = e => {
					var t, r;
					return !!(null === (r = null === (t = e.features) || void 0 === t ? void 0 : t.predictions) || void 0 === r ? void 0 : r.creation.length)
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction-PremiumModal.896c178d3670409283bf.js.map