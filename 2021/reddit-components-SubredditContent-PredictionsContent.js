// https://www.redditstatic.com/desktop2x/reddit-components-SubredditContent-PredictionsContent.7c50add11486c8fa65d6.js
// Retrieved at 9/22/2021, 3:30:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-SubredditContent-PredictionsContent"], {
		"./node_modules/uuid/index.js": function(t, e, n) {
			var o = n("./node_modules/uuid/v1.js"),
				r = n("./node_modules/uuid/v4.js"),
				i = r;
			i.v1 = o, i.v4 = r, t.exports = i
		},
		"./node_modules/uuid/v1.js": function(t, e, n) {
			var o, r, i = n("./node_modules/uuid/lib/rng-browser.js"),
				d = n("./node_modules/uuid/lib/bytesToUuid.js"),
				c = 0,
				a = 0;
			t.exports = function(t, e, n) {
				var s = e && n || 0,
					u = e || [],
					l = (t = t || {}).node || o,
					p = void 0 !== t.clockseq ? t.clockseq : r;
				if (null == l || null == p) {
					var b = i();
					null == l && (l = o = [1 | b[0], b[1], b[2], b[3], b[4], b[5]]), null == p && (p = r = 16383 & (b[6] << 8 | b[7]))
				}
				var m = void 0 !== t.msecs ? t.msecs : (new Date).getTime(),
					f = void 0 !== t.nsecs ? t.nsecs : a + 1,
					j = m - c + (f - a) / 1e4;
				if (j < 0 && void 0 === t.clockseq && (p = p + 1 & 16383), (j < 0 || m > c) && void 0 === t.nsecs && (f = 0), f >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
				c = m, a = f, r = p;
				var O = (1e4 * (268435455 & (m += 122192928e5)) + f) % 4294967296;
				u[s++] = O >>> 24 & 255, u[s++] = O >>> 16 & 255, u[s++] = O >>> 8 & 255, u[s++] = 255 & O;
				var h = m / 4294967296 * 1e4 & 268435455;
				u[s++] = h >>> 8 & 255, u[s++] = 255 & h, u[s++] = h >>> 24 & 15 | 16, u[s++] = h >>> 16 & 255, u[s++] = p >>> 8 | 128, u[s++] = 255 & p;
				for (var v = 0; v < 6; ++v) u[s + v] = l[v];
				return e || d(u)
			}
		},
		"./src/reddit/actions/economics/predictions/index.ts": function(t, e, n) {
			"use strict";
			n.d(e, "e", (function() {
				return C
			})), n.d(e, "k", (function() {
				return E
			})), n.d(e, "o", (function() {
				return S
			})), n.d(e, "n", (function() {
				return T
			})), n.d(e, "l", (function() {
				return A
			})), n.d(e, "b", (function() {
				return F
			})), n.d(e, "r", (function() {
				return Q
			})), n.d(e, "s", (function() {
				return q
			})), n.d(e, "g", (function() {
				return B
			})), n.d(e, "a", (function() {
				return U
			})), n.d(e, "t", (function() {
				return D
			})), n.d(e, "m", (function() {
				return J
			})), n.d(e, "i", (function() {
				return R
			})), n.d(e, "j", (function() {
				return z
			})), n.d(e, "p", (function() {
				return V
			})), n.d(e, "q", (function() {
				return X
			})), n.d(e, "f", (function() {
				return H
			})), n.d(e, "c", (function() {
				return K
			})), n.d(e, "d", (function() {
				return W
			})), n.d(e, "h", (function() {
				return Z
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/uuid/index.js"),
				i = n.n(r),
				d = n("./src/lib/initializeClient/installReducer.ts"),
				c = n("./src/reddit/reducers/features/predictions/index.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				s = n("./src/reddit/models/Toast/index.ts"),
				u = n("./src/lib/makeActionCreator/index.ts"),
				l = n("./src/reddit/endpoints/economics/predictions.ts"),
				p = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				b = n("./src/reddit/helpers/graphql/normalizePredictionTournamentFromGql/index.ts"),
				m = n("./src/redditGQL/types.ts"),
				f = n("./src/reddit/actions/login.ts"),
				j = n("./src/reddit/actions/modal.ts"),
				O = n("./src/reddit/constants/modals.ts"),
				h = n("./src/reddit/selectors/experiments/econ/index.ts"),
				v = n("./src/reddit/selectors/subreddit.ts"),
				x = n("./src/reddit/selectors/user.ts"),
				g = n("./src/reddit/selectors/features/predictions/creation/index.ts"),
				y = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				P = n("./src/reddit/actions/economics/predictions/constants.ts");
			Object(d.a)({
				features: {
					predictions: c.a
				}
			});
			const I = Object(u.a)(P.e),
				k = Object(u.a)(P.i),
				w = Object(u.a)(P.l),
				_ = Object(u.a)(P.h),
				C = Object(u.a)(P.b),
				E = (t, e, n, o) => async (r, i, {
					gqlContext: d
				}) => {
					const c = Object(x.K)(i()),
						a = await Object(l.j)(d(), {
							subredditId: t,
							period: e,
							top: n,
							includeCurrentRank: c,
							tournamentId: o
						});
					if (a.error || !a.ok) throw new Error("Failed to fetch subreddit top predictors");
					const {
						subredditInfoById: s
					} = a.body.data;
					if (!s || !s.predictionWinners) throw new Error("Subreddit has no prediction winners");
					const {
						predictionWinners: u
					} = s, p = {
						subredditId: t,
						...u
					};
					return r(I(p)), p
				}, S = ({
					coinPackageId: t,
					optionId: e,
					postId: n,
					price: o
				}) => async (r, i, {
					gqlContext: d
				}) => {
					const c = await Object(l.o)(d(), {
						coinPackageId: t,
						optionId: e,
						postId: n,
						price: o
					});
					return r(k({
						pollId: n,
						prediction: c,
						price: o
					})), c
				}, T = ({
					optionId: t,
					postId: e
				}) => async (n, o, {
					gqlContext: r
				}) => {
					const i = await Object(l.m)(r(), {
							optionId: t,
							postId: e
						}),
						{
							resolvePrediction: d
						} = i.body.data;
					if (!(null == d ? void 0 : d.poll)) throw new Error("Failed to resolve prediction");
					return n(_({
						pollId: e,
						prediction: d.poll
					})), d.poll
				}, L = Object(u.a)(P.c), N = Object(u.a)(P.d), G = Object(u.a)(P.g), A = t => async (e, n, {
					gqlContext: o
				}) => {
					const r = n(),
						i = Object(v.B)(r, t),
						d = Object(y.j)(r, {
							subredditId: i
						}),
						c = Object(h.o)(r);
					if (d) return Object(y.f)(r, {
						subredditId: i
					});
					e(L({
						subredditId: i
					}));
					const a = await Object(l.k)(o(), {
							subredditName: t,
							isLatestOnly: !0,
							isIncludingPredictions: !0,
							isIncludingParticipants: !0,
							isIncludingCancelledPredictions: c
						}),
						s = {};
					a.forEach(t => {
						var e;
						(null === (e = t.predictionPosts) || void 0 === e ? void 0 : e.length) && t.predictionPosts.forEach(t => {
							t && (s[t.id] = Object(p.e)(t))
						})
					});
					const u = a.map(t => Object(b.a)(t));
					return e(N({
						subredditId: i,
						tournaments: u
					})), e(G({
						posts: s,
						meta: r.meta
					})), u
				}, F = Object(u.a)(P.a), Q = Object(u.a)(P.j), q = Object(u.a)(P.k), B = ({
					subredditId: t
				}) => async (e, n, {
					gqlContext: o
				}) => {
					const r = n(),
						i = Object(g.b)(r),
						d = Object(h.a)(r);
					if (!i) throw new Error("Failed to create tournament, no prediction drafts attached");
					const c = await Object(l.f)(o(), {
							tournamentId: null,
							name: "Predictions Tournament",
							isStartImmediately: !0,
							subredditId: t,
							predictionDrafts: i,
							currency: d ? m.b.Coins : m.b.Tokens
						}),
						{
							createPredictionTournament: a
						} = c.body.data;
					if (!(null == a ? void 0 : a.tournament)) throw new Error("Failed to resolve prediction");
					const {
						tournament: s
					} = a;
					return e(N({
						subredditId: t,
						tournaments: [s]
					})), s
				}, U = (t, e) => async (n, o, {
					gqlContext: r
				}) => {
					var d;
					const c = Object(g.b)(o());
					if (!c) throw new Error("Failed to create prediction post, no prediction drafts attached");
					const a = await Object(l.b)(r(), {
							tournamentId: t,
							isStartImmediately: !0,
							iKey: `add-dfts-${i.a.v4()}`,
							subredditId: e,
							predictionDrafts: c
						}),
						{
							addPredictionDrafts: s
						} = a.body.data;
					if (null === (d = s.errors) || void 0 === d ? void 0 : d.length) throw new Error(s.errors[0].message);
					if (!(null == s ? void 0 : s.tournament)) throw new Error("Failed to create prediction");
					return s.tournament
				}, M = Object(u.a)(P.m), D = (t, e, n) => async (e, o, {
					gqlContext: r
				}) => {
					const i = await Object(l.n)(r(), {
							tournamentId: t,
							name: n
						}),
						{
							updatePredictionTournament: d
						} = i.body.data;
					if (!d.tournament) throw new Error("Failed to update prediction name");
					return e(M(d.tournament)), d.tournament
				}, J = t => async (e, n, {
					gqlContext: o
				}) => {
					const r = await Object(l.g)(o(), {
							tournamentId: t
						}),
						{
							endPredictionTournament: i
						} = r.body.data;
					if (!i.tournament) throw new Error("Failed to update prediction name");
					return e(M(i.tournament)), i.tournament
				}, R = t => async (e, n, {
					gqlContext: o
				}) => {
					const r = await Object(l.h)(o(), {
						postId: t
					});
					if (!r.ok || r.error) throw new Error("Failed to fetch prediction chip packages");
					const {
						postInfoById: i
					} = r.body.data;
					if (!i.predictionChipPackages) throw new Error("Failed to fetch prediction chip packages");
					return i.predictionChipPackages
				}, z = t => async (e, n, {
					gqlContext: o
				}) => {
					const r = await Object(l.i)(o(), {
						tournamentId: t
					});
					if (!r.ok || r.error) throw new Error("Failed to fetch token balance");
					const {
						identity: i
					} = r.body.data;
					if (!i.hasOwnProperty("predictionTokens")) throw new Error("Failed to fetch token balance");
					return i.predictionTokens
				}, V = ({
					coinPackageId: t,
					selectedOptionId: e,
					price: n,
					pollId: o,
					tournamentId: r,
					tournamentPostId: i
				}) => async d => {
					const c = await d(S({
						coinPackageId: t,
						optionId: e,
						postId: o,
						price: n
					}));
					return d(w({
						predictionId: o,
						selectedOptionId: e,
						tournamentId: r,
						tournamentPostId: i
					})), c
				}, X = t => async (e, n) => {
					const o = n();
					Object(x.K)(o) ? await e(Object(j.h)(O.a.ECON_PREDICTIONS_PREMIUM_UPSELL, {
						feature: t
					})) : await e(Object(f.i)())
				}, H = () => Object(j.g)(O.a.ECON_PREDICTIONS_PREMIUM_UPSELL), K = t => async (e, n, {
					gqlContext: r
				}) => {
					try {
						const n = await Object(l.c)(r(), {
							postId: t
						});
						e(C({
							postId: t,
							prediction: n
						}));
						const i = Object(a.e)(o.fbt._("Prediction has been cancelled", null, {
							hk: "3Bh9Fw"
						}), s.b.SuccessMod);
						e(Object(a.f)(i))
					} catch {
						const t = Object(a.e)(o.fbt._("Unable to cancel prediction", null, {
							hk: "2wkeKy"
						}), s.b.Error);
						e(Object(a.f)(t))
					}
				};

			function W(t, e) {
				return async (n, o, {
					gqlContext: r
				}) => {
					const i = await Object(l.d)(r(), {
						postId: t,
						...e
					});
					return n(C({
						postId: t,
						prediction: i
					})), i
				}
			}
			const Z = t => async (e, n, {
				gqlContext: o
			}) => Object(l.l)(o(), {
				subredditId: t
			})
		},
		"./src/reddit/components/PostCreationForm/Prompt/PromptModal.m.less": function(t, e, n) {
			t.exports = {
				PrimaryButton: "_35XIX8S5eAkigMxHxx98TS",
				primaryButton: "_35XIX8S5eAkigMxHxx98TS",
				ModalText: "_1ShPAP1uGnX3ZkiyNiigAA",
				modalText: "_1ShPAP1uGnX3ZkiyNiigAA"
			}
		},
		"./src/reddit/components/PostCreationForm/Prompt/PromptModal.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./src/higherOrderComponents/asModal/index.tsx"),
				d = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = n("./src/reddit/constants/keycodes.ts"),
				a = n("./src/reddit/controls/Button/index.tsx"),
				s = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				u = n("./src/reddit/controls/TextButton/index.tsx"),
				l = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				p = n("./src/reddit/components/PostCreationForm/Prompt/PromptModal.m.less"),
				b = n.n(p),
				m = n("./src/lib/lessComponent.tsx");
			const f = m.a.wrapped(a.k, "PrimaryButton", b.a),
				j = m.a.wrapped(d.p, "ModalText", b.a);
			class O extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.handleEscapeKey = t => {
						t.keyCode === c.a.Escape && this.props.onClose()
					}
				}
				componentDidMount() {
					document.addEventListener("keydown", this.handleEscapeKey)
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.handleEscapeKey)
				}
				render() {
					const {
						primaryButtonLoading: t,
						secondaryButtonLoading: e
					} = this.props;
					return r.a.createElement(d.e, null, r.a.createElement(d.i, null, r.a.createElement(l.a, null, r.a.createElement(d.q, null, this.props.titleText), r.a.createElement(u.a, {
						onClick: this.props.onClose
					}, r.a.createElement(d.b, null)))), r.a.createElement(d.l, null, r.a.createElement(j, null, this.props.bodyText)), r.a.createElement(d.g, null, r.a.createElement(d.a, {
						onClick: this.props.onSecondaryAction
					}, e ? r.a.createElement(s.a, {
						sizePx: 16
					}) : this.props.secondaryButtonText), r.a.createElement(f, {
						onClick: this.props.onPrimaryAction
					}, t ? r.a.createElement(s.a, {
						sizePx: 16
					}) : this.props.primaryButtonText)))
				}
			}
			e.a = Object(i.a)(O)
		},
		"./src/reddit/components/Settings/shared/Card/index.m.less": function(t, e, n) {
			t.exports = {
				card: "_3QgUyHez21ymKj3N5bwJOZ",
				title: "_2_lh-4aLx8XvyoDxvM3tB_"
			}
		},
		"./src/reddit/components/SubredditContent/PredictionsContent/index.m.less": function(t, e, n) {
			t.exports = {
				heading: "_3Ssm2Ifc9S1clbSFvddidr",
				predictionsContent: "NdeYom0Z9WAUwaGGUyf8G",
				section: "_2hoxzC76nJ4tpcsYP942SN",
				label: "_1MBlUmiILkLotthnhcd1nu",
				input: "_396wd5yvfuYWVPSFsGLHqh",
				remainingCharacters: "_-9MbRCBvNxlV3EEDAazGJ",
				maxCharacters: "_3uljCwdnrGjddmhPXNHt-V",
				button: "_33GlBs_giNlvXXfcKIA-TF",
				endConditions: "_3-xXOP_z4fWBQebZPItzVd"
			}
		},
		"./src/reddit/components/SubredditContent/PredictionsContent/index.tsx": function(t, e, n) {
			"use strict";
			n.r(e), n.d(e, "default", (function() {
				return T
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				d = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/actions/economics/predictions/index.ts"),
				s = n("./src/reddit/actions/toaster.ts"),
				u = n("./src/reddit/components/Settings/shared/Card/index.m.less"),
				l = n.n(u);

			function p() {
				return (p = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
					}
					return t
				}).apply(this, arguments)
			}
			const b = ({
					className: t,
					...e
				}) => i.a.createElement("div", p({
					className: Object(c.a)(l.a.card, t)
				}, e)),
				m = ({
					className: t,
					...e
				}) => i.a.createElement("h3", p({
					className: Object(c.a)(l.a.title, t)
				}, e));
			var f = n("./src/reddit/controls/Button/index.tsx"),
				j = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				O = n("./src/reddit/helpers/trackers/predictions.ts"),
				h = n("./src/reddit/hooks/useTracking.ts"),
				v = n("./src/reddit/models/Toast/index.ts"),
				x = n("./src/reddit/selectors/experiments/econ/index.ts"),
				g = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				y = n("./src/reddit/components/PostCreationForm/Prompt/PromptModal.tsx");

			function P({
				isEnding: t,
				onClose: e,
				onConfirm: n
			}) {
				return i.a.createElement(y.a, {
					titleText: o.fbt._("End tournament?", null, {
						hk: "SHmTx"
					}),
					bodyText: o.fbt._("Are you sure you want to end the tournament? Once a tournament has ended, it cannot be restarted again. Ending the tournament also closes the community ‘Tournament’ tab.", null, {
						hk: "fqqXg"
					}),
					onClose: e,
					primaryButtonLoading: t,
					primaryButtonText: o.fbt._("End Tournament", null, {
						hk: "SUDS2"
					}),
					onPrimaryAction: n,
					onSecondaryAction: e,
					secondaryButtonText: o.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})
				})
			}
			var I = n("./src/reddit/components/Settings/shared/Widgets.tsx"),
				k = n("./src/reddit/actions/subredditSettings.ts"),
				w = n("./src/reddit/selectors/subreddit.ts");
			const _ = ({
				subredditId: t
			}) => {
				const [e, n] = function(t, e) {
					const n = Object(d.d)(),
						o = Object(d.e)(e => Object(w.S)(e, t)),
						r = o ? Boolean(o[e]) : void 0;
					return [r, (o = !0) => {
						const i = {
							[e]: !r
						};
						n(Object(k.j)(t, i, void 0, o))
					}]
				}(t, "allowPredictionContributors");
				return void 0 === e ? null : i.a.createElement(b, null, i.a.createElement(m, null, o.fbt._("Predictions Submission Permissions", null, {
					hk: "3rjmMV"
				})), i.a.createElement(I.o, {
					on: e,
					onClick: n,
					label: o.fbt._("Allow Approved Users to Post / Resolve Predictions", null, {
						hk: "49inYc"
					}),
					subtext: o.fbt._('You can allow users who are not mods to post and resolve predictions. By selecting this option, you allow "Approved Users" to also post and resolve predictions.', null, {
						hk: "4CYzaA"
					})
				}))
			};
			var C = n("./src/reddit/components/SubredditContent/PredictionsContent/index.m.less"),
				E = n.n(C);
			const S = 90;

			function T({
				subreddit: t
			}) {
				const e = Object(d.d)(),
					n = Object(h.a)(),
					[u, l] = Object(r.useState)(""),
					[p, m] = Object(r.useState)(!1),
					[y, I] = Object(r.useState)(!1),
					[k, w] = Object(r.useState)(!1),
					[C, T] = Object(r.useState)(null),
					L = Object(d.e)(x.q),
					N = Object(d.e)(e => Object(g.b)(e, {
						subredditId: t.id
					})),
					G = Object(d.e)(e => Object(g.j)(e, {
						subredditId: t.id
					})),
					A = Object(d.e)(e => Object(g.g)(e, {
						subredditId: t.id
					}));
				Object(r.useEffect)(() => {
					n(Object(O.t)())
				}, [n]), Object(r.useEffect)(() => {
					e(Object(a.l)(t.name))
				}, [e, t.name]), Object(r.useEffect)(() => {
					N && (l(N.name), T(S - N.name.length))
				}, [N]);
				const F = Object(r.useCallback)(() => {
						n(Object(O.c)()), w(!0)
					}, [n]),
					Q = !!u && ((null == N ? void 0 : N.name) !== u && u.length > 3);
				return i.a.createElement("div", {
					className: E.a.predictionsContent
				}, i.a.createElement("h1", {
					className: E.a.heading
				}, o.fbt._("Predictions", null, {
					hk: "1SloUh"
				})), i.a.createElement(b, null, i.a.createElement("div", {
					className: E.a.section
				}, i.a.createElement("label", {
					className: E.a.label,
					htmlFor: "tournament-name"
				}, o.fbt._("Tournament name", null, {
					hk: "1ZAVPf"
				})), i.a.createElement("input", {
					name: "tournament-name",
					className: E.a.input,
					disabled: !N || G,
					type: "text",
					value: u,
					onChange: t => {
						const {
							value: e
						} = t.target;
						e.length <= S && (l(e), T(S - e.length))
					},
					placeholder: o.fbt._("/r/{subredditName} tournament", [o.fbt._param("subredditName", t.name)], {
						hk: "bN9XA"
					})
				}), i.a.createElement("div", {
					className: Object(c.a)(E.a.remainingCharacters, {
						[E.a.maxCharacters]: (null == u ? void 0 : u.length) === S
					})
				}, N && N.name !== u && null !== C ? o.fbt._({
					"*": "{remaining characters} characters remaining",
					_1: "1 character remaining"
				}, [o.fbt._plural(C, "remaining characters")], {
					hk: "1dBRgv"
				}) : i.a.createElement(i.a.Fragment, null, " ")), i.a.createElement(f.k, {
					className: E.a.button,
					disabled: !u || !N || G || !Q,
					onClick: async () => {
						if (!N || !u) return null;
						n(Object(O.h)()), m(!0);
						try {
							await e(Object(a.t)(N.tournamentId, t.id, u))
						} catch (r) {
							e(Object(s.f)({
								kind: v.b.Error,
								text: o.fbt._("Failed to update tournament name, please try again later", null, {
									hk: "3bx78u"
								})
							}))
						}
						m(!1)
					}
				}, p ? i.a.createElement(j.a, {
					sizePx: 16
				}) : o.fbt._("Rename", null, {
					hk: "4z2EPS"
				}))), i.a.createElement("div", null, i.a.createElement("label", {
					className: E.a.label
				}, o.fbt._("End tournament", null, {
					hk: "ZWlOH"
				})), i.a.createElement("p", {
					className: E.a.endConditions
				}, o.fbt._("Tournament can only be ended after its predictions are ended and resolved", null, {
					hk: "2AgZtm"
				})), i.a.createElement(f.k, {
					className: E.a.button,
					disabled: !N || !A || G,
					onClick: F
				}, o.fbt._("End", null, {
					hk: "HWN7f"
				})), k && i.a.createElement(P, {
					isEnding: y,
					onClose: () => {
						w(!1)
					},
					onConfirm: async () => {
						if (!N || !A) return null;
						I(!0);
						try {
							await e(Object(a.m)(N.tournamentId))
						} catch (t) {
							e(Object(s.f)({
								kind: v.b.Error,
								text: o.fbt._("Failed to end tournament, please try again later", null, {
									hk: "2huCGU"
								})
							}))
						}
						I(!1), w(!1)
					}
				}))), L && i.a.createElement(_, {
					subredditId: t.id
				}))
			}
		},
		"./src/reddit/endpoints/economics/predictions.ts": function(t, e, n) {
			"use strict";
			n.d(e, "o", (function() {
				return v
			})), n.d(e, "m", (function() {
				return x
			})), n.d(e, "a", (function() {
				return g
			})), n.d(e, "j", (function() {
				return y
			})), n.d(e, "f", (function() {
				return P
			})), n.d(e, "k", (function() {
				return I
			})), n.d(e, "b", (function() {
				return k
			})), n.d(e, "n", (function() {
				return w
			})), n.d(e, "g", (function() {
				return _
			})), n.d(e, "h", (function() {
				return C
			})), n.d(e, "i", (function() {
				return E
			})), n.d(e, "d", (function() {
				return S
			})), n.d(e, "c", (function() {
				return T
			})), n.d(e, "e", (function() {
				return L
			})), n.d(e, "l", (function() {
				return N
			}));
			var o = n("./src/lib/makeGqlRequest/index.ts"),
				r = n("./src/lib/makeRequest/index.ts"),
				i = n("./src/redditGQL/operations/AddPredictionDrafts.json"),
				d = n("./src/redditGQL/operations/CancelPrediction.json"),
				c = n("./src/redditGQL/operations/ChangePrediction.json"),
				a = n("./src/redditGQL/operations/ChangePredictionVote.json"),
				s = n("./src/redditGQL/operations/CreatePredictionTournament.json"),
				u = n("./src/redditGQL/operations/EndPredictionTournament.json"),
				l = n("./src/redditGQL/operations/GetPredictionChipPackages.json"),
				p = n("./src/redditGQL/operations/GetPredictionCreationAllowance.json"),
				b = n("./src/redditGQL/operations/GetPredictionToken.json"),
				m = n("./src/redditGQL/operations/GetTournaments.json"),
				f = n("./src/redditGQL/operations/ResolvePrediction.json"),
				j = n("./src/redditGQL/operations/SubredditTopPredictors.json"),
				O = n("./src/redditGQL/operations/UpdatePredictionTournament.json"),
				h = n("./src/redditGQL/operations/VotePrediction.json");
			const v = async (t, {
				postId: e,
				optionId: n,
				coinPackageId: i,
				price: d
			}) => {
				var c;
				const a = await Object(o.a)(t, {
					...h,
					variables: {
						input: {
							postId: e,
							optionId: n,
							coinPackageId: i,
							price: d
						}
					}
				});
				if (!Object(r.c)(a) || a.error || !(null === (c = a.body.data.votePrediction) || void 0 === c ? void 0 : c.ok)) throw new Error("Failed to make prediction");
				return a.body.data.votePrediction.poll
			}, x = (t, {
				postId: e,
				optionId: n
			}) => Object(o.a)(t, {
				...f,
				variables: {
					input: {
						postId: e,
						optionId: n
					}
				}
			});
			var g;
			! function(t) {
				t.AllTime = "ALL_TIME", t.Monthly = "MONTHLY"
			}(g || (g = {}));
			const y = (t, {
					subredditId: e,
					period: n,
					top: r,
					includeCurrentRank: i,
					tournamentId: d
				}) => Object(o.a)(t, {
					...j,
					variables: {
						subredditId: e,
						period: n,
						top: r,
						includeCurrentRank: i,
						tournamentId: d
					}
				}),
				P = (t, e) => Object(o.a)(t, {
					...s,
					variables: {
						input: e
					}
				}),
				I = async (t, e) => {
					const n = await Object(o.a)(t, {
						...m,
						variables: e
					});
					if (!Object(r.c)(n) || n.error) throw new Error("Failed to fetch tournaments");
					return n.body.data.subredditInfoByName.predictionTournaments || []
				}, k = (t, e) => Object(o.a)(t, {
					...i,
					variables: {
						input: e
					}
				}), w = (t, e) => Object(o.a)(t, {
					...O,
					variables: {
						input: e
					}
				}), _ = (t, e) => Object(o.a)(t, {
					...u,
					variables: {
						input: e
					}
				}), C = (t, e) => Object(o.a)(t, {
					...l,
					variables: e
				}), E = (t, e) => Object(o.a)(t, {
					...b,
					variables: e
				}), S = async (t, e) => {
					const n = await Object(o.a)(t, {
						...c,
						variables: {
							input: e
						}
					});
					if (!Object(r.c)(n) || !n.body.data.changePrediction.ok) throw new Error("Unable to update prediction");
					return n.body.data.changePrediction.poll
				}, T = async (t, {
					postId: e
				}) => {
					var n, i;
					const c = await Object(o.a)(t, {
						...d,
						variables: {
							input: {
								postId: e
							}
						}
					});
					if (!Object(r.c)(c) || !(null === (n = c.body.data.cancelPrediction) || void 0 === n ? void 0 : n.ok) || !(null === (i = c.body.data.cancelPrediction) || void 0 === i ? void 0 : i.poll)) throw new Error("Unable to cancel prediction");
					return c.body.data.cancelPrediction.poll
				}, L = async (t, e) => {
					var n, i;
					const d = await Object(o.a)(t, {
						...a,
						variables: {
							input: e
						}
					});
					if (!Object(r.c)(d) || !(null === (n = d.body.data.changePredictionVote) || void 0 === n ? void 0 : n.ok) || !(null === (i = d.body.data.changePredictionVote) || void 0 === i ? void 0 : i.poll)) throw new Error("Unable to change prediction.");
					return d.body.data.changePredictionVote.poll
				}, N = async (t, e) => {
					const n = await Object(o.a)(t, {
						...p,
						variables: e
					});
					return !!Object(r.c)(n) && n.body.data.identity.isPredictionCreationAllowed
				}
		},
		"./src/reddit/helpers/trackers/predictions.ts": function(t, e, n) {
			"use strict";
			n.d(e, "o", (function() {
				return d
			})), n.d(e, "p", (function() {
				return c
			})), n.d(e, "q", (function() {
				return a
			})), n.d(e, "k", (function() {
				return s
			})), n.d(e, "s", (function() {
				return u
			})), n.d(e, "m", (function() {
				return l
			})), n.d(e, "n", (function() {
				return p
			})), n.d(e, "l", (function() {
				return b
			})), n.d(e, "a", (function() {
				return m
			})), n.d(e, "r", (function() {
				return f
			})), n.d(e, "d", (function() {
				return j
			})), n.d(e, "u", (function() {
				return O
			})), n.d(e, "j", (function() {
				return h
			})), n.d(e, "w", (function() {
				return v
			})), n.d(e, "f", (function() {
				return x
			})), n.d(e, "v", (function() {
				return g
			})), n.d(e, "t", (function() {
				return y
			})), n.d(e, "c", (function() {
				return P
			})), n.d(e, "h", (function() {
				return I
			})), n.d(e, "e", (function() {
				return k
			})), n.d(e, "b", (function() {
				return w
			})), n.d(e, "i", (function() {
				return _
			})), n.d(e, "g", (function() {
				return C
			}));
			var o = n("./src/reddit/models/Prediction/index.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const i = "poll",
				d = t => ({
					...Object(r.defaults)(t),
					source: i,
					action: "select",
					noun: "poll_option"
				}),
				c = t => ({
					...Object(r.defaults)(t),
					source: i,
					action: "select",
					noun: "prediction_option"
				}),
				a = t => ({
					...Object(r.defaults)(t),
					source: i,
					action: "view",
					noun: "predict_info_modal"
				}),
				s = t => ({
					...Object(r.defaults)(t),
					source: i,
					action: "close",
					noun: "predict_info_modal"
				}),
				u = t => ({
					...Object(r.defaults)(t),
					source: i,
					action: "view",
					noun: "predict_option_modal"
				}),
				l = ({
					pollId: t,
					selectedNumberCoins: e,
					totalStakeAmount: n
				}) => o => ({
					...Object(r.defaults)(o),
					source: i,
					action: "confirm",
					noun: "predict",
					poll: Object(r.poll)(o, t, !1, void 0, e),
					goldPurchase: {
						numberCoins: n
					}
				}),
				p = ({
					pollId: t,
					selectedNumberTokens: e
				}) => n => ({
					...Object(r.defaults)(n),
					source: i,
					action: "confirm",
					noun: "predict",
					poll: Object(r.poll)(n, t, !1, void 0, void 0, e)
				}),
				b = ({
					pollId: t,
					currency: e,
					amount: n
				}) => d => {
					const c = e === o.a.Coins ? n : void 0,
						a = e === o.a.Tokens ? n : void 0;
					return {
						...Object(r.defaults)(d),
						source: i,
						action: "close",
						noun: "prediction_modal",
						poll: Object(r.poll)(d, t, !1, c, a)
					}
				},
				m = t => ({
					...Object(r.defaults)(t),
					source: i,
					action: "click",
					noun: "add_coins"
				}),
				f = t => e => ({
					...Object(r.defaults)(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "predictions_leaderboard",
						reason: t ? "prediction_details" : "subreddit_header"
					}
				}),
				j = ({
					targetUserId: t
				}) => e => ({
					...Object(r.defaults)(e),
					source: "predictions",
					action: "click",
					noun: "leaderboard_profile",
					targetUser: {
						id: t
					}
				}),
				O = ({
					numberPredictionTokens: t,
					pollId: e
				}) => n => ({
					...Object(r.defaults)(n),
					source: i,
					action: "view",
					noun: "token_claim_modal",
					poll: Object(r.poll)(n, e, !1, void 0, void 0, t)
				}),
				h = ({
					pageType: t
				}) => e => ({
					...Object(r.defaults)(e),
					source: "predictions",
					action: "click",
					noun: "tournament",
					actionInfo: {
						pageType: t
					}
				}),
				v = () => t => ({
					...Object(r.defaults)(t),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "community",
						paneName: "predictions"
					},
					subreddit: Object(r.subreddit)(t)
				}),
				x = () => t => ({
					...Object(r.defaults)(t),
					source: "predictions",
					action: "click",
					noun: "leaderboard",
					actionInfo: {
						pageType: "community",
						paneName: "predictions"
					}
				}),
				g = () => t => ({
					...Object(r.defaults)(t),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "tournament_leaderboard",
						reason: "predictions_tab"
					}
				}),
				y = () => t => ({
					...Object(r.defaults)(t),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "mod_tool_predict"
					}
				}),
				P = () => t => ({
					...Object(r.defaults)(t),
					source: "mod_tool_predict",
					action: "click",
					noun: "end_tournament"
				}),
				I = () => t => ({
					...Object(r.defaults)(t),
					source: "mod_tool_predict",
					action: "click",
					noun: "rename_tournament"
				}),
				k = () => t => ({
					...Object(r.defaults)(t),
					source: "predictions",
					action: "click",
					noun: "next"
				}),
				w = () => t => ({
					...Object(r.defaults)(t),
					source: "predictions",
					action: "click",
					noun: "add_more"
				}),
				_ = () => t => ({
					...Object(r.defaults)(t),
					source: "predictions",
					action: "click",
					noun: "start_tournament"
				}),
				C = () => t => ({
					...Object(r.defaults)(t),
					source: "menu_links_bar",
					action: "click",
					noun: "predictions_tab"
				})
		},
		"./src/reddit/selectors/features/predictions/creation/index.ts": function(t, e, n) {
			"use strict";
			n.d(e, "b", (function() {
				return d
			})), n.d(e, "a", (function() {
				return c
			}));
			var o = n("./src/lib/initializeClient/installReducer.ts"),
				r = n("./src/reddit/reducers/features/predictions/index.ts"),
				i = n("./src/reddit/selectors/postCreations.ts");
			Object(o.a)({
				features: {
					predictions: r.a
				}
			});
			const d = t => {
					const e = (t => {
						var e, n;
						return null === (n = null === (e = t.features) || void 0 === e ? void 0 : e.predictions) || void 0 === n ? void 0 : n.creation
					})(t);
					return (null == e ? void 0 : e.length) ? null == e ? void 0 : e.map(e => {
						const n = Object(i.cb)({
								...t,
								creations: {
									...t.creations,
									formData: e.formData,
									formState: e.formState
								}
							}, {}),
							o = e.formData.polls,
							r = o.options.map(t => ({
								text: t.text
							})),
							d = {};
						return n.document ? d.richText = JSON.stringify({
							document: n.document
						}) : n.markdown && (d.markdown = n.markdown), {
							title: n.title,
							isLiveChat: n.isChatPost,
							isNsfw: n.isNSFW,
							isSpoiler: n.isSpoiler,
							votingEndsAt: o.endDate.toISOString(),
							body: d,
							options: r
						}
					}) : []
				},
				c = t => {
					var e, n;
					return !!(null === (n = null === (e = t.features) || void 0 === e ? void 0 : e.predictions) || void 0 === n ? void 0 : n.creation.length)
				}
		},
		"./src/redditGQL/operations/AddPredictionDrafts.json": function(t) {
			t.exports = JSON.parse('{"id":"7c3c61a8992b"}')
		},
		"./src/redditGQL/operations/CancelPrediction.json": function(t) {
			t.exports = JSON.parse('{"id":"fac88c91fec8"}')
		},
		"./src/redditGQL/operations/ChangePrediction.json": function(t) {
			t.exports = JSON.parse('{"id":"614dbb8a54d2"}')
		},
		"./src/redditGQL/operations/ChangePredictionVote.json": function(t) {
			t.exports = JSON.parse('{"id":"90c7b71fa93f"}')
		},
		"./src/redditGQL/operations/CreatePredictionTournament.json": function(t) {
			t.exports = JSON.parse('{"id":"adefbd4bae5e"}')
		},
		"./src/redditGQL/operations/EndPredictionTournament.json": function(t) {
			t.exports = JSON.parse('{"id":"87392a58e8c7"}')
		},
		"./src/redditGQL/operations/GetPredictionChipPackages.json": function(t) {
			t.exports = JSON.parse('{"id":"5ce83e513fa5"}')
		},
		"./src/redditGQL/operations/GetPredictionCreationAllowance.json": function(t) {
			t.exports = JSON.parse('{"id":"d9fb5ec5128f"}')
		},
		"./src/redditGQL/operations/GetPredictionToken.json": function(t) {
			t.exports = JSON.parse('{"id":"26b911e67a5f"}')
		},
		"./src/redditGQL/operations/GetTournaments.json": function(t) {
			t.exports = JSON.parse('{"id":"f3b802939587"}')
		},
		"./src/redditGQL/operations/ResolvePrediction.json": function(t) {
			t.exports = JSON.parse('{"id":"d742e3019cfe"}')
		},
		"./src/redditGQL/operations/SubredditTopPredictors.json": function(t) {
			t.exports = JSON.parse('{"id":"a9582ea601a1"}')
		},
		"./src/redditGQL/operations/UpdatePredictionTournament.json": function(t) {
			t.exports = JSON.parse('{"id":"c3f400e7edbb"}')
		},
		"./src/redditGQL/operations/VotePrediction.json": function(t) {
			t.exports = JSON.parse('{"id":"484780ada6a2"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-SubredditContent-PredictionsContent.7c50add11486c8fa65d6.js.map