// https://www.redditstatic.com/desktop2x/reddit-components-SubredditContent-PredictionsContent.33b9294cea29041b9284.js
// Retrieved at 10/12/2021, 11:20:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-SubredditContent-PredictionsContent"], {
		"./node_modules/uuid/index.js": function(e, t, n) {
			var o = n("./node_modules/uuid/v1.js"),
				r = n("./node_modules/uuid/v4.js"),
				i = r;
			i.v1 = o, i.v4 = r, e.exports = i
		},
		"./node_modules/uuid/v1.js": function(e, t, n) {
			var o, r, i = n("./node_modules/uuid/lib/rng-browser.js"),
				c = n("./node_modules/uuid/lib/bytesToUuid.js"),
				d = 0,
				a = 0;
			e.exports = function(e, t, n) {
				var s = t && n || 0,
					u = t || [],
					l = (e = e || {}).node || o,
					p = void 0 !== e.clockseq ? e.clockseq : r;
				if (null == l || null == p) {
					var b = i();
					null == l && (l = o = [1 | b[0], b[1], b[2], b[3], b[4], b[5]]), null == p && (p = r = 16383 & (b[6] << 8 | b[7]))
				}
				var m = void 0 !== e.msecs ? e.msecs : (new Date).getTime(),
					f = void 0 !== e.nsecs ? e.nsecs : a + 1,
					j = m - d + (f - a) / 1e4;
				if (j < 0 && void 0 === e.clockseq && (p = p + 1 & 16383), (j < 0 || m > d) && void 0 === e.nsecs && (f = 0), f >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
				d = m, a = f, r = p;
				var O = (1e4 * (268435455 & (m += 122192928e5)) + f) % 4294967296;
				u[s++] = O >>> 24 & 255, u[s++] = O >>> 16 & 255, u[s++] = O >>> 8 & 255, u[s++] = 255 & O;
				var h = m / 4294967296 * 1e4 & 268435455;
				u[s++] = h >>> 8 & 255, u[s++] = 255 & h, u[s++] = h >>> 24 & 15 | 16, u[s++] = h >>> 16 & 255, u[s++] = p >>> 8 | 128, u[s++] = 255 & p;
				for (var v = 0; v < 6; ++v) u[s + v] = l[v];
				return t || c(u)
			}
		},
		"./src/reddit/actions/economics/predictions/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return C
			})), n.d(t, "k", (function() {
				return E
			})), n.d(t, "o", (function() {
				return S
			})), n.d(t, "n", (function() {
				return T
			})), n.d(t, "l", (function() {
				return A
			})), n.d(t, "b", (function() {
				return F
			})), n.d(t, "r", (function() {
				return Q
			})), n.d(t, "s", (function() {
				return q
			})), n.d(t, "g", (function() {
				return B
			})), n.d(t, "a", (function() {
				return U
			})), n.d(t, "t", (function() {
				return D
			})), n.d(t, "m", (function() {
				return J
			})), n.d(t, "i", (function() {
				return R
			})), n.d(t, "j", (function() {
				return z
			})), n.d(t, "p", (function() {
				return V
			})), n.d(t, "q", (function() {
				return X
			})), n.d(t, "f", (function() {
				return H
			})), n.d(t, "c", (function() {
				return K
			})), n.d(t, "d", (function() {
				return W
			})), n.d(t, "h", (function() {
				return Z
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/uuid/index.js"),
				i = n.n(r),
				c = n("./src/lib/initializeClient/installReducer.ts"),
				d = n("./src/reddit/reducers/features/predictions/index.ts"),
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
			Object(c.a)({
				features: {
					predictions: d.a
				}
			});
			const _ = Object(u.a)(P.e),
				k = Object(u.a)(P.i),
				w = Object(u.a)(P.l),
				I = Object(u.a)(P.h),
				C = Object(u.a)(P.b),
				E = (e, t, n, o) => async (r, i, {
					gqlContext: c
				}) => {
					const d = Object(x.K)(i()),
						a = await Object(l.j)(c(), {
							subredditId: e,
							period: t,
							top: n,
							includeCurrentRank: d,
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
						subredditId: e,
						...u
					};
					return r(_(p)), p
				}, S = ({
					coinPackageId: e,
					optionId: t,
					postId: n,
					price: o
				}) => async (r, i, {
					gqlContext: c
				}) => {
					const d = await Object(l.o)(c(), {
						coinPackageId: e,
						optionId: t,
						postId: n,
						price: o
					});
					return r(k({
						pollId: n,
						prediction: d,
						price: o
					})), d
				}, T = ({
					optionId: e,
					postId: t
				}) => async (n, o, {
					gqlContext: r
				}) => {
					const i = await Object(l.m)(r(), {
							optionId: e,
							postId: t
						}),
						{
							resolvePrediction: c
						} = i.body.data;
					if (!(null == c ? void 0 : c.poll)) throw new Error("Failed to resolve prediction");
					return n(I({
						pollId: t,
						prediction: c.poll
					})), c.poll
				}, L = Object(u.a)(P.c), N = Object(u.a)(P.d), G = Object(u.a)(P.g), A = e => async (t, n, {
					gqlContext: o
				}) => {
					const r = n(),
						i = Object(v.B)(r, e),
						c = Object(y.j)(r, {
							subredditId: i
						}),
						d = Object(h.n)(r);
					if (c) return Object(y.f)(r, {
						subredditId: i
					});
					t(L({
						subredditId: i
					}));
					const a = await Object(l.k)(o(), {
							subredditName: e,
							isLatestOnly: !0,
							isIncludingPredictions: !0,
							isIncludingParticipants: !0,
							isIncludingCancelledPredictions: d
						}),
						s = {};
					a.forEach(e => {
						var t;
						(null === (t = e.predictionPosts) || void 0 === t ? void 0 : t.length) && e.predictionPosts.forEach(e => {
							e && (s[e.id] = Object(p.e)(e))
						})
					});
					const u = a.map(e => Object(b.a)(e));
					return t(N({
						subredditId: i,
						tournaments: u
					})), t(G({
						posts: s,
						meta: r.meta
					})), u
				}, F = Object(u.a)(P.a), Q = Object(u.a)(P.j), q = Object(u.a)(P.k), B = ({
					subredditId: e
				}) => async (t, n, {
					gqlContext: o
				}) => {
					const r = n(),
						i = Object(g.b)(r),
						c = Object(h.a)(r);
					if (!i) throw new Error("Failed to create tournament, no prediction drafts attached");
					const d = await Object(l.f)(o(), {
							tournamentId: null,
							name: "Predictions Tournament",
							isStartImmediately: !0,
							subredditId: e,
							predictionDrafts: i,
							currency: c ? m.d.Coins : m.d.Tokens
						}),
						{
							createPredictionTournament: a
						} = d.body.data;
					if (!(null == a ? void 0 : a.tournament)) throw new Error("Failed to resolve prediction");
					const {
						tournament: s
					} = a;
					return t(N({
						subredditId: e,
						tournaments: [s]
					})), s
				}, U = (e, t) => async (n, o, {
					gqlContext: r
				}) => {
					var c;
					const d = Object(g.b)(o());
					if (!d) throw new Error("Failed to create prediction post, no prediction drafts attached");
					const a = await Object(l.b)(r(), {
							tournamentId: e,
							isStartImmediately: !0,
							iKey: `add-dfts-${i.a.v4()}`,
							subredditId: t,
							predictionDrafts: d
						}),
						{
							addPredictionDrafts: s
						} = a.body.data;
					if (null === (c = s.errors) || void 0 === c ? void 0 : c.length) throw new Error(s.errors[0].message);
					if (!(null == s ? void 0 : s.tournament)) throw new Error("Failed to create prediction");
					return s.tournament
				}, M = Object(u.a)(P.m), D = (e, t, n) => async (t, o, {
					gqlContext: r
				}) => {
					const i = await Object(l.n)(r(), {
							tournamentId: e,
							name: n
						}),
						{
							updatePredictionTournament: c
						} = i.body.data;
					if (!c.tournament) throw new Error("Failed to update prediction name");
					return t(M(c.tournament)), c.tournament
				}, J = e => async (t, n, {
					gqlContext: o
				}) => {
					const r = await Object(l.g)(o(), {
							tournamentId: e
						}),
						{
							endPredictionTournament: i
						} = r.body.data;
					if (!i.tournament) throw new Error("Failed to update prediction name");
					return t(M(i.tournament)), i.tournament
				}, R = e => async (t, n, {
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
				}, z = e => async (t, n, {
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
				}, V = ({
					coinPackageId: e,
					selectedOptionId: t,
					price: n,
					pollId: o,
					tournamentId: r,
					tournamentPostId: i
				}) => async c => {
					const d = await c(S({
						coinPackageId: e,
						optionId: t,
						postId: o,
						price: n
					}));
					return c(w({
						predictionId: o,
						selectedOptionId: t,
						tournamentId: r,
						tournamentPostId: i
					})), d
				}, X = e => async (t, n) => {
					const o = n();
					Object(x.K)(o) ? await t(Object(j.h)(O.a.ECON_PREDICTIONS_PREMIUM_UPSELL, {
						feature: e
					})) : await t(Object(f.i)())
				}, H = () => Object(j.g)(O.a.ECON_PREDICTIONS_PREMIUM_UPSELL), K = e => async (t, n, {
					gqlContext: r
				}) => {
					try {
						const n = await Object(l.c)(r(), {
							postId: e
						});
						t(C({
							postId: e,
							prediction: n
						}));
						const i = Object(a.e)(o.fbt._("Prediction has been cancelled", null, {
							hk: "3Bh9Fw"
						}), s.b.SuccessMod);
						t(Object(a.f)(i))
					} catch {
						const e = Object(a.e)(o.fbt._("Unable to cancel prediction", null, {
							hk: "2wkeKy"
						}), s.b.Error);
						t(Object(a.f)(e))
					}
				};

			function W(e, t) {
				return async (n, o, {
					gqlContext: r
				}) => {
					const i = await Object(l.d)(r(), {
						postId: e,
						...t
					});
					return n(C({
						postId: e,
						prediction: i
					})), i
				}
			}
			const Z = e => async (t, n, {
				gqlContext: o
			}) => Object(l.l)(o(), {
				subredditId: e
			})
		},
		"./src/reddit/components/PostCreationForm/Prompt/PromptModal.m.less": function(e, t, n) {
			e.exports = {
				PrimaryButton: "_35XIX8S5eAkigMxHxx98TS",
				primaryButton: "_35XIX8S5eAkigMxHxx98TS",
				ModalText: "_1ShPAP1uGnX3ZkiyNiigAA",
				modalText: "_1ShPAP1uGnX3ZkiyNiigAA"
			}
		},
		"./src/reddit/components/PostCreationForm/Prompt/PromptModal.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./src/higherOrderComponents/asModal/index.tsx"),
				c = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				d = n("./src/reddit/constants/keycodes.ts"),
				a = n("./src/reddit/controls/Button/index.tsx"),
				s = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				u = n("./src/reddit/controls/TextButton/index.tsx"),
				l = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				p = n("./src/reddit/components/PostCreationForm/Prompt/PromptModal.m.less"),
				b = n.n(p),
				m = n("./src/lib/lessComponent.tsx");
			const f = m.a.wrapped(a.k, "PrimaryButton", b.a),
				j = m.a.wrapped(c.p, "ModalText", b.a);
			class O extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.handleEscapeKey = e => {
						e.keyCode === d.a.Escape && this.props.onClose()
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
						primaryButtonLoading: e,
						secondaryButtonLoading: t
					} = this.props;
					return r.a.createElement(c.e, null, r.a.createElement(c.i, null, r.a.createElement(l.a, null, r.a.createElement(c.q, null, this.props.titleText), r.a.createElement(u.a, {
						onClick: this.props.onClose
					}, r.a.createElement(c.b, null)))), r.a.createElement(c.l, null, r.a.createElement(j, null, this.props.bodyText)), r.a.createElement(c.g, null, r.a.createElement(c.a, {
						onClick: this.props.onSecondaryAction
					}, t ? r.a.createElement(s.a, {
						sizePx: 16
					}) : this.props.secondaryButtonText), r.a.createElement(f, {
						onClick: this.props.onPrimaryAction
					}, e ? r.a.createElement(s.a, {
						sizePx: 16
					}) : this.props.primaryButtonText)))
				}
			}
			t.a = Object(i.a)(O)
		},
		"./src/reddit/components/Settings/shared/Card/index.m.less": function(e, t, n) {
			e.exports = {
				card: "_3QgUyHez21ymKj3N5bwJOZ",
				title: "_2_lh-4aLx8XvyoDxvM3tB_"
			}
		},
		"./src/reddit/components/SubredditContent/PredictionsContent/index.m.less": function(e, t, n) {
			e.exports = {
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
		"./src/reddit/components/SubredditContent/PredictionsContent/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "default", (function() {
				return T
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				c = n("./node_modules/react-redux/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/actions/economics/predictions/index.ts"),
				s = n("./src/reddit/actions/toaster.ts"),
				u = n("./src/reddit/components/Settings/shared/Card/index.m.less"),
				l = n.n(u);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const b = ({
					className: e,
					...t
				}) => i.a.createElement("div", p({
					className: Object(d.a)(l.a.card, e)
				}, t)),
				m = ({
					className: e,
					...t
				}) => i.a.createElement("h3", p({
					className: Object(d.a)(l.a.title, e)
				}, t));
			var f = n("./src/reddit/controls/Button/index.tsx"),
				j = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				O = n("./src/reddit/helpers/trackers/predictions.ts"),
				h = n("./src/reddit/hooks/useTracking.ts"),
				v = n("./src/reddit/models/Toast/index.ts"),
				x = n("./src/reddit/selectors/experiments/econ/index.ts"),
				g = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				y = n("./src/reddit/components/PostCreationForm/Prompt/PromptModal.tsx");

			function P({
				isEnding: e,
				onClose: t,
				onConfirm: n
			}) {
				return i.a.createElement(y.a, {
					titleText: o.fbt._("End tournament?", null, {
						hk: "SHmTx"
					}),
					bodyText: o.fbt._("Are you sure you want to end the tournament? Once a tournament has ended, it cannot be restarted again. Ending the tournament also closes the community ‘Tournament’ tab.", null, {
						hk: "fqqXg"
					}),
					onClose: t,
					primaryButtonLoading: e,
					primaryButtonText: o.fbt._("End Tournament", null, {
						hk: "SUDS2"
					}),
					onPrimaryAction: n,
					onSecondaryAction: t,
					secondaryButtonText: o.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})
				})
			}
			var _ = n("./src/reddit/components/Settings/shared/Widgets.tsx"),
				k = n("./src/reddit/actions/subredditSettings.ts"),
				w = n("./src/reddit/selectors/subreddit.ts");
			const I = ({
				subredditId: e
			}) => {
				const t = Object(h.a)(),
					[n, r] = function(e, t) {
						const n = Object(c.d)(),
							o = Object(c.e)(t => Object(w.S)(t, e)),
							r = o ? Boolean(o[t]) : void 0;
						return [r, (o = !0) => {
							const i = {
								[t]: !r
							};
							n(Object(k.j)(e, i, void 0, o))
						}]
					}(e, "allowPredictionContributors");
				return void 0 === n ? null : i.a.createElement(b, null, i.a.createElement(m, null, o.fbt._("Predictions Submission Permissions", null, {
					hk: "3rjmMV"
				})), i.a.createElement(_.o, {
					on: n,
					onClick: () => {
						t(Object(O.c)(!n)), r()
					},
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
				subreddit: e
			}) {
				const t = Object(c.d)(),
					n = Object(h.a)(),
					[u, l] = Object(r.useState)(""),
					[p, m] = Object(r.useState)(!1),
					[y, _] = Object(r.useState)(!1),
					[k, w] = Object(r.useState)(!1),
					[C, T] = Object(r.useState)(null),
					L = Object(c.e)(x.p),
					N = Object(c.e)(t => Object(g.b)(t, {
						subredditId: e.id
					})),
					G = Object(c.e)(t => Object(g.j)(t, {
						subredditId: e.id
					})),
					A = Object(c.e)(t => Object(g.g)(t, {
						subredditId: e.id
					}));
				Object(r.useEffect)(() => {
					n(Object(O.w)())
				}, [n]), Object(r.useEffect)(() => {
					t(Object(a.l)(e.name))
				}, [t, e.name]), Object(r.useEffect)(() => {
					N && (l(N.name), T(S - N.name.length))
				}, [N]);
				const F = Object(r.useCallback)(() => {
						n(Object(O.d)()), w(!0)
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
					onChange: e => {
						const {
							value: t
						} = e.target;
						t.length <= S && (l(t), T(S - t.length))
					},
					placeholder: o.fbt._("/r/{subredditName} tournament", [o.fbt._param("subredditName", e.name)], {
						hk: "bN9XA"
					})
				}), i.a.createElement("div", {
					className: Object(d.a)(E.a.remainingCharacters, {
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
						n(Object(O.j)()), m(!0);
						try {
							await t(Object(a.t)(N.tournamentId, e.id, u))
						} catch (r) {
							t(Object(s.f)({
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
						_(!0);
						try {
							await t(Object(a.m)(N.tournamentId))
						} catch (e) {
							t(Object(s.f)({
								kind: v.b.Error,
								text: o.fbt._("Failed to end tournament, please try again later", null, {
									hk: "2huCGU"
								})
							}))
						}
						_(!1), w(!1)
					}
				}))), L && i.a.createElement(I, {
					subredditId: e.id
				}))
			}
		},
		"./src/reddit/endpoints/economics/predictions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "o", (function() {
				return v
			})), n.d(t, "m", (function() {
				return x
			})), n.d(t, "a", (function() {
				return g
			})), n.d(t, "j", (function() {
				return y
			})), n.d(t, "f", (function() {
				return P
			})), n.d(t, "k", (function() {
				return _
			})), n.d(t, "b", (function() {
				return k
			})), n.d(t, "n", (function() {
				return w
			})), n.d(t, "g", (function() {
				return I
			})), n.d(t, "h", (function() {
				return C
			})), n.d(t, "i", (function() {
				return E
			})), n.d(t, "d", (function() {
				return S
			})), n.d(t, "c", (function() {
				return T
			})), n.d(t, "e", (function() {
				return L
			})), n.d(t, "l", (function() {
				return N
			}));
			var o = n("./src/lib/makeGqlRequest/index.ts"),
				r = n("./src/lib/makeRequest/index.ts"),
				i = n("./src/redditGQL/operations/AddPredictionDrafts.json"),
				c = n("./src/redditGQL/operations/CancelPrediction.json"),
				d = n("./src/redditGQL/operations/ChangePrediction.json"),
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
			const v = async (e, {
				postId: t,
				optionId: n,
				coinPackageId: i,
				price: c
			}) => {
				var d;
				const a = await Object(o.a)(e, {
					...h,
					variables: {
						input: {
							postId: t,
							optionId: n,
							coinPackageId: i,
							price: c
						}
					}
				});
				if (!Object(r.c)(a) || a.error || !(null === (d = a.body.data.votePrediction) || void 0 === d ? void 0 : d.ok)) throw new Error("Failed to make prediction");
				return a.body.data.votePrediction.poll
			}, x = (e, {
				postId: t,
				optionId: n
			}) => Object(o.a)(e, {
				...f,
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
			const y = (e, {
					subredditId: t,
					period: n,
					top: r,
					includeCurrentRank: i,
					tournamentId: c
				}) => Object(o.a)(e, {
					...j,
					variables: {
						subredditId: t,
						period: n,
						top: r,
						includeCurrentRank: i,
						tournamentId: c
					}
				}),
				P = (e, t) => Object(o.a)(e, {
					...s,
					variables: {
						input: t
					}
				}),
				_ = async (e, t) => {
					const n = await Object(o.a)(e, {
						...m,
						variables: t
					});
					if (!Object(r.c)(n) || n.error) throw new Error("Failed to fetch tournaments");
					return n.body.data.subredditInfoByName.predictionTournaments || []
				}, k = (e, t) => Object(o.a)(e, {
					...i,
					variables: {
						input: t
					}
				}), w = (e, t) => Object(o.a)(e, {
					...O,
					variables: {
						input: t
					}
				}), I = (e, t) => Object(o.a)(e, {
					...u,
					variables: {
						input: t
					}
				}), C = (e, t) => Object(o.a)(e, {
					...l,
					variables: t
				}), E = (e, t) => Object(o.a)(e, {
					...b,
					variables: t
				}), S = async (e, t) => {
					const n = await Object(o.a)(e, {
						...d,
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
					const d = await Object(o.a)(e, {
						...c,
						variables: {
							input: {
								postId: t
							}
						}
					});
					if (!Object(r.c)(d) || !(null === (n = d.body.data.cancelPrediction) || void 0 === n ? void 0 : n.ok) || !(null === (i = d.body.data.cancelPrediction) || void 0 === i ? void 0 : i.poll)) throw new Error("Unable to cancel prediction");
					return d.body.data.cancelPrediction.poll
				}, L = async (e, t) => {
					var n, i;
					const c = await Object(o.a)(e, {
						...a,
						variables: {
							input: t
						}
					});
					if (!Object(r.c)(c) || !(null === (n = c.body.data.changePredictionVote) || void 0 === n ? void 0 : n.ok) || !(null === (i = c.body.data.changePredictionVote) || void 0 === i ? void 0 : i.poll)) throw new Error("Unable to change prediction.");
					return c.body.data.changePredictionVote.poll
				}, N = async (e, t) => {
					const n = await Object(o.a)(e, {
						...p,
						variables: t
					});
					return !!Object(r.c)(n) && n.body.data.identity.isPredictionCreationAllowed
				}
		},
		"./src/reddit/helpers/trackers/predictions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "q", (function() {
				return c
			})), n.d(t, "r", (function() {
				return d
			})), n.d(t, "s", (function() {
				return a
			})), n.d(t, "m", (function() {
				return s
			})), n.d(t, "v", (function() {
				return u
			})), n.d(t, "o", (function() {
				return l
			})), n.d(t, "p", (function() {
				return p
			})), n.d(t, "n", (function() {
				return b
			})), n.d(t, "a", (function() {
				return m
			})), n.d(t, "u", (function() {
				return f
			})), n.d(t, "f", (function() {
				return j
			})), n.d(t, "x", (function() {
				return O
			})), n.d(t, "l", (function() {
				return h
			})), n.d(t, "z", (function() {
				return v
			})), n.d(t, "h", (function() {
				return x
			})), n.d(t, "y", (function() {
				return g
			})), n.d(t, "w", (function() {
				return y
			})), n.d(t, "d", (function() {
				return P
			})), n.d(t, "j", (function() {
				return _
			})), n.d(t, "c", (function() {
				return k
			})), n.d(t, "g", (function() {
				return w
			})), n.d(t, "b", (function() {
				return I
			})), n.d(t, "k", (function() {
				return C
			})), n.d(t, "i", (function() {
				return E
			})), n.d(t, "t", (function() {
				return S
			})), n.d(t, "e", (function() {
				return T
			}));
			var o = n("./src/reddit/models/Prediction/index.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const i = "poll",
				c = e => ({
					...Object(r.defaults)(e),
					source: i,
					action: "select",
					noun: "poll_option"
				}),
				d = e => ({
					...Object(r.defaults)(e),
					source: i,
					action: "select",
					noun: "prediction_option"
				}),
				a = e => ({
					...Object(r.defaults)(e),
					source: i,
					action: "view",
					noun: "predict_info_modal"
				}),
				s = e => ({
					...Object(r.defaults)(e),
					source: i,
					action: "close",
					noun: "predict_info_modal"
				}),
				u = e => ({
					...Object(r.defaults)(e),
					source: i,
					action: "view",
					noun: "predict_option_modal"
				}),
				l = ({
					pollId: e,
					selectedNumberCoins: t,
					totalStakeAmount: n
				}) => o => ({
					...Object(r.defaults)(o),
					source: i,
					action: "confirm",
					noun: "predict",
					poll: Object(r.poll)(o, e, !1, void 0, t),
					goldPurchase: {
						numberCoins: n
					}
				}),
				p = ({
					pollId: e,
					selectedNumberTokens: t
				}) => n => ({
					...Object(r.defaults)(n),
					source: i,
					action: "confirm",
					noun: "predict",
					poll: Object(r.poll)(n, e, !1, void 0, void 0, t)
				}),
				b = ({
					pollId: e,
					currency: t,
					amount: n
				}) => c => {
					const d = t === o.a.Coins ? n : void 0,
						a = t === o.a.Tokens ? n : void 0;
					return {
						...Object(r.defaults)(c),
						source: i,
						action: "close",
						noun: "prediction_modal",
						poll: Object(r.poll)(c, e, !1, d, a)
					}
				},
				m = e => ({
					...Object(r.defaults)(e),
					source: i,
					action: "click",
					noun: "add_coins"
				}),
				f = e => t => ({
					...Object(r.defaults)(t),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "predictions_leaderboard",
						reason: e ? "prediction_details" : "subreddit_header"
					}
				}),
				j = ({
					targetUserId: e
				}) => t => ({
					...Object(r.defaults)(t),
					source: "predictions",
					action: "click",
					noun: "leaderboard_profile",
					targetUser: {
						id: e
					}
				}),
				O = ({
					numberPredictionTokens: e,
					pollId: t
				}) => n => ({
					...Object(r.defaults)(n),
					source: i,
					action: "view",
					noun: "token_claim_modal",
					poll: Object(r.poll)(n, t, !1, void 0, void 0, e)
				}),
				h = ({
					pageType: e
				}) => t => ({
					...Object(r.defaults)(t),
					source: "predictions",
					action: "click",
					noun: "tournament",
					actionInfo: {
						pageType: e
					}
				}),
				v = () => e => ({
					...Object(r.defaults)(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "community",
						paneName: "predictions"
					},
					subreddit: Object(r.subreddit)(e)
				}),
				x = () => e => ({
					...Object(r.defaults)(e),
					source: "predictions",
					action: "click",
					noun: "leaderboard",
					actionInfo: {
						pageType: "community",
						paneName: "predictions"
					}
				}),
				g = () => e => ({
					...Object(r.defaults)(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "tournament_leaderboard",
						reason: "predictions_tab"
					}
				}),
				y = () => e => ({
					...Object(r.defaults)(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "mod_tool_predict"
					}
				}),
				P = () => e => ({
					...Object(r.defaults)(e),
					source: "mod_tool_predict",
					action: "click",
					noun: "end_tournament"
				}),
				_ = () => e => ({
					...Object(r.defaults)(e),
					source: "mod_tool_predict",
					action: "click",
					noun: "rename_tournament"
				}),
				k = e => t => ({
					...Object(r.defaults)(t),
					source: "mod_tool_predict",
					action: "click",
					noun: "enable_predictions",
					actionInfo: {
						pageType: "predictions_picker"
					},
					setting: {
						value: e ? "1" : "0",
						oldValue: e ? "0" : "1"
					}
				}),
				w = () => e => ({
					...Object(r.defaults)(e),
					source: "predictions",
					action: "click",
					noun: "next"
				}),
				I = () => e => ({
					...Object(r.defaults)(e),
					source: "predictions",
					action: "click",
					noun: "add_more"
				}),
				C = () => e => ({
					...Object(r.defaults)(e),
					source: "predictions",
					action: "click",
					noun: "start_tournament"
				}),
				E = () => e => ({
					...Object(r.defaults)(e),
					source: "menu_links_bar",
					action: "click",
					noun: "predictions_tab"
				}),
				S = () => e => ({
					...Object(r.defaults)(e),
					source: "predictions_tab",
					action: "view",
					noun: "predictions_how_it_works"
				}),
				T = () => e => ({
					...Object(r.defaults)(e),
					source: "predictions_how_it_works",
					action: "click",
					noun: "learn_more"
				})
		},
		"./src/reddit/selectors/features/predictions/creation/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			}));
			var o = n("./src/lib/initializeClient/installReducer.ts"),
				r = n("./src/reddit/reducers/features/predictions/index.ts"),
				i = n("./src/reddit/selectors/postCreations.ts");
			Object(o.a)({
				features: {
					predictions: r.a
				}
			});
			const c = e => {
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
							c = {};
						return n.document ? c.richText = JSON.stringify({
							document: n.document
						}) : n.markdown && (c.markdown = n.markdown), {
							title: n.title,
							isLiveChat: n.isChatPost,
							isNsfw: n.isNSFW,
							isSpoiler: n.isSpoiler,
							votingEndsAt: o.endDate.toISOString(),
							body: c,
							options: r
						}
					}) : []
				},
				d = e => {
					var t, n;
					return !!(null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.predictions) || void 0 === n ? void 0 : n.creation.length)
				}
		},
		"./src/redditGQL/operations/AddPredictionDrafts.json": function(e) {
			e.exports = JSON.parse('{"id":"55e2b71b7c14"}')
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
			e.exports = JSON.parse('{"id":"3fb10f0c4910"}')
		},
		"./src/redditGQL/operations/EndPredictionTournament.json": function(e) {
			e.exports = JSON.parse('{"id":"309c4e7f3e89"}')
		},
		"./src/redditGQL/operations/GetPredictionChipPackages.json": function(e) {
			e.exports = JSON.parse('{"id":"5ce83e513fa5"}')
		},
		"./src/redditGQL/operations/GetPredictionCreationAllowance.json": function(e) {
			e.exports = JSON.parse('{"id":"d9fb5ec5128f"}')
		},
		"./src/redditGQL/operations/GetPredictionToken.json": function(e) {
			e.exports = JSON.parse('{"id":"26b911e67a5f"}')
		},
		"./src/redditGQL/operations/GetTournaments.json": function(e) {
			e.exports = JSON.parse('{"id":"50d44a50f01c"}')
		},
		"./src/redditGQL/operations/ResolvePrediction.json": function(e) {
			e.exports = JSON.parse('{"id":"d742e3019cfe"}')
		},
		"./src/redditGQL/operations/SubredditTopPredictors.json": function(e) {
			e.exports = JSON.parse('{"id":"a9582ea601a1"}')
		},
		"./src/redditGQL/operations/UpdatePredictionTournament.json": function(e) {
			e.exports = JSON.parse('{"id":"eacbeec256c7"}')
		},
		"./src/redditGQL/operations/VotePrediction.json": function(e) {
			e.exports = JSON.parse('{"id":"484780ada6a2"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-SubredditContent-PredictionsContent.33b9294cea29041b9284.js.map