// https://www.redditstatic.com/desktop2x/reddit-components-SubredditContent-PredictionsContent.6156c2a78b88f33560a7.js
// Retrieved at 8/10/2021, 3:40:09 PM by Reddit Dataminer v1.0.0
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
				c = n("./node_modules/uuid/lib/bytesToUuid.js"),
				d = 0,
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
					j = m - d + (f - a) / 1e4;
				if (j < 0 && void 0 === t.clockseq && (p = p + 1 & 16383), (j < 0 || m > d) && void 0 === t.nsecs && (f = 0), f >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
				d = m, a = f, r = p;
				var O = (1e4 * (268435455 & (m += 122192928e5)) + f) % 4294967296;
				u[s++] = O >>> 24 & 255, u[s++] = O >>> 16 & 255, u[s++] = O >>> 8 & 255, u[s++] = 255 & O;
				var h = m / 4294967296 * 1e4 & 268435455;
				u[s++] = h >>> 8 & 255, u[s++] = 255 & h, u[s++] = h >>> 24 & 15 | 16, u[s++] = h >>> 16 & 255, u[s++] = p >>> 8 | 128, u[s++] = 255 & p;
				for (var v = 0; v < 6; ++v) u[s + v] = l[v];
				return e || c(u)
			}
		},
		"./src/reddit/actions/economics/predictions/index.ts": function(t, e, n) {
			"use strict";
			n.d(e, "e", (function() {
				return I
			})), n.d(e, "i", (function() {
				return _
			})), n.d(e, "m", (function() {
				return w
			})), n.d(e, "l", (function() {
				return C
			})), n.d(e, "j", (function() {
				return L
			})), n.d(e, "b", (function() {
				return N
			})), n.d(e, "o", (function() {
				return G
			})), n.d(e, "p", (function() {
				return A
			})), n.d(e, "f", (function() {
				return F
			})), n.d(e, "a", (function() {
				return q
			})), n.d(e, "q", (function() {
				return B
			})), n.d(e, "k", (function() {
				return D
			})), n.d(e, "g", (function() {
				return U
			})), n.d(e, "h", (function() {
				return M
			})), n.d(e, "n", (function() {
				return J
			})), n.d(e, "c", (function() {
				return R
			})), n.d(e, "d", (function() {
				return z
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/uuid/index.js"),
				i = n.n(r),
				c = n("./src/lib/initializeClient/installReducer.ts"),
				d = n("./src/reddit/reducers/features/predictions/index.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				s = n("./src/reddit/models/Toast/index.ts"),
				u = n("./src/lib/makeActionCreator/index.ts"),
				l = n("./src/lib/makeRequest/index.ts"),
				p = n("./src/reddit/endpoints/economics/predictions.ts"),
				b = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				m = n("./src/reddit/models/Prediction/index.ts"),
				f = n("./src/reddit/selectors/experiments/econ/index.ts"),
				j = n("./src/reddit/selectors/subreddit.ts"),
				O = n("./src/reddit/selectors/user.ts"),
				h = n("./src/reddit/selectors/features/predictions/creation/index.ts"),
				v = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				x = n("./src/reddit/actions/economics/predictions/constants.ts");
			Object(c.a)({
				features: {
					predictions: d.a
				}
			});
			const g = Object(u.a)(x.e),
				k = Object(u.a)(x.i),
				P = Object(u.a)(x.l),
				y = Object(u.a)(x.h),
				I = Object(u.a)(x.b),
				_ = (t, e, n, o) => async (r, i, {
					gqlContext: c
				}) => {
					const d = Object(O.J)(i()),
						a = await Object(p.j)(c(), {
							subredditId: t,
							period: e,
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
					} = s, l = {
						subredditId: t,
						...u
					};
					return r(g(l)), l
				}, w = ({
					coinPackageId: t,
					optionId: e,
					postId: n,
					price: o
				}) => async (r, i, {
					gqlContext: c
				}) => {
					const d = await Object(p.n)(c(), {
						coinPackageId: t,
						optionId: e,
						postId: n,
						price: o
					});
					return r(k({
						pollId: n,
						prediction: d,
						price: o
					})), d
				}, C = ({
					optionId: t,
					postId: e
				}) => async (n, o, {
					gqlContext: r
				}) => {
					const i = await Object(p.l)(r(), {
							optionId: t,
							postId: e
						}),
						{
							resolvePrediction: c
						} = i.body.data;
					if (!(null == c ? void 0 : c.poll)) throw new Error("Failed to resolve prediction");
					return n(y({
						pollId: e,
						prediction: c.poll
					})), c.poll
				}, E = Object(u.a)(x.c), T = Object(u.a)(x.d), S = Object(u.a)(x.g), L = t => async (e, n, {
					gqlContext: o
				}) => {
					const r = n(),
						i = Object(j.E)(r, t),
						c = Object(v.j)(r, {
							subredditId: i
						}),
						d = Object(f.l)(r);
					if (c) return Object(v.f)(r, {
						subredditId: i
					});
					e(E({
						subredditId: i
					}));
					const a = await Object(p.k)(o(), {
						subredditName: t,
						isLatestOnly: !0,
						isIncludingPredictions: !0,
						isIncludingParticipants: !0,
						isIncludingCancelledPredictions: d
					});
					if (!Object(l.c)(a) || a.error) throw new Error("Failed to fetch tournaments");
					const {
						predictionTournaments: s
					} = a.body.data.subredditInfoByName;
					if (!s) return [];
					const u = s.map(t => {
							var e, n;
							const o = null !== (n = null === (e = t.predictionPosts) || void 0 === e ? void 0 : e.map(t => {
								const e = Object(b.e)(t),
									n = e.pollData;
								return {
									...e,
									pollData: n
								}
							})) && void 0 !== n ? n : [];
							return {
								...t,
								predictionPosts: o
							}
						}),
						m = u.reduce((t, e) => (e.predictionPosts.length && e.predictionPosts.forEach(e => {
							t[e.id] = e
						}), t), {});
					return e(T({
						subredditId: i,
						tournaments: u
					})), e(S({
						posts: m,
						meta: r.meta
					})), u
				}, N = Object(u.a)(x.a), G = Object(u.a)(x.j), A = Object(u.a)(x.k), F = ({
					subredditId: t
				}) => async (e, n, {
					gqlContext: o
				}) => {
					const r = n(),
						i = Object(h.b)(r),
						c = Object(f.a)(r);
					if (!i) throw new Error("Failed to create tournament, no prediction drafts attached");
					const d = await Object(p.f)(o(), {
							name: "Predictions Tournament",
							isStartImmediately: !0,
							subredditId: t,
							predictionDrafts: i,
							currency: c ? m.a.Coins : m.a.Tokens
						}),
						{
							createPredictionTournament: a
						} = d.body.data;
					if (!(null == a ? void 0 : a.tournament)) throw new Error("Failed to resolve prediction");
					const {
						tournament: s
					} = a;
					return e(T({
						subredditId: t,
						tournaments: [s]
					})), s
				}, q = (t, e) => async (n, o, {
					gqlContext: r
				}) => {
					var c;
					const d = Object(h.b)(o());
					if (!d) throw new Error("Failed to create prediction post, no prediction drafts attached");
					const a = await Object(p.b)(r(), {
							tournamentId: t,
							isStartImmediately: !0,
							iKey: `add-dfts-${i.a.v4()}`,
							subredditId: e,
							predictionDrafts: d
						}),
						{
							addPredictionDrafts: s
						} = a.body.data;
					if (null === (c = s.errors) || void 0 === c ? void 0 : c.length) throw new Error(s.errors[0].message);
					if (!(null == s ? void 0 : s.tournament)) throw new Error("Failed to create prediction");
					return s.tournament
				}, Q = Object(u.a)(x.m), B = (t, e, n) => async (e, o, {
					gqlContext: r
				}) => {
					const i = await Object(p.m)(r(), {
							tournamentId: t,
							name: n
						}),
						{
							updatePredictionTournament: c
						} = i.body.data;
					if (!c.tournament) throw new Error("Failed to update prediction name");
					return e(Q(c.tournament)), c.tournament
				}, D = t => async (e, n, {
					gqlContext: o
				}) => {
					const r = await Object(p.g)(o(), {
							tournamentId: t
						}),
						{
							endPredictionTournament: i
						} = r.body.data;
					if (!i.tournament) throw new Error("Failed to update prediction name");
					return e(Q(i.tournament)), i.tournament
				}, U = t => async (e, n, {
					gqlContext: o
				}) => {
					const r = await Object(p.h)(o(), {
						postId: t
					});
					if (!r.ok || r.error) throw new Error("Failed to fetch prediction chip packages");
					const {
						postInfoById: i
					} = r.body.data;
					if (!i.predictionChipPackages) throw new Error("Failed to fetch prediction chip packages");
					return i.predictionChipPackages
				}, M = t => async (e, n, {
					gqlContext: o
				}) => {
					const r = await Object(p.i)(o(), {
						tournamentId: t
					});
					if (!r.ok || r.error) throw new Error("Failed to fetch token balance");
					const {
						identity: i
					} = r.body.data;
					if (!i.hasOwnProperty("predictionTokens")) throw new Error("Failed to fetch token balance");
					return i.predictionTokens
				}, J = ({
					coinPackageId: t,
					selectedOptionId: e,
					price: n,
					pollId: o,
					tournamentId: r,
					tournamentPostId: i
				}) => async c => {
					const d = await c(w({
						coinPackageId: t,
						optionId: e,
						postId: o,
						price: n
					}));
					return c(P({
						predictionId: o,
						selectedOptionId: e,
						tournamentId: r,
						tournamentPostId: i
					})), d
				}, R = t => async (e, n, {
					gqlContext: r
				}) => {
					try {
						const n = await Object(p.c)(r(), {
							postId: t
						});
						e(I({
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

			function z(t, e) {
				return async (n, o, {
					gqlContext: r
				}) => {
					const i = await Object(p.d)(r(), {
						postId: t,
						...e
					});
					return n(I({
						postId: t,
						prediction: i
					})), i
				}
			}
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
				c = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				d = n("./src/reddit/constants/keycodes.ts"),
				a = n("./src/reddit/controls/Button/index.tsx"),
				s = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				u = n("./src/reddit/controls/TextButton/index.tsx"),
				l = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				p = n("./src/reddit/components/PostCreationForm/Prompt/PromptModal.m.less"),
				b = n.n(p),
				m = n("./src/lib/lessComponent.tsx");
			const f = m.a.wrapped(a.i, "PrimaryButton", b.a),
				j = m.a.wrapped(c.p, "ModalText", b.a);
			class O extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.handleEscapeKey = t => {
						t.keyCode === d.a.Escape && this.props.onClose()
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
					return r.a.createElement(c.e, null, r.a.createElement(c.i, null, r.a.createElement(l.a, null, r.a.createElement(c.q, null, this.props.titleText), r.a.createElement(u.a, {
						onClick: this.props.onClose
					}, r.a.createElement(c.b, null)))), r.a.createElement(c.l, null, r.a.createElement(j, null, this.props.bodyText)), r.a.createElement(c.g, null, r.a.createElement(c.a, {
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
		"./src/reddit/components/SubredditContent/PredictionsContent/index.m.less": function(t, e, n) {
			t.exports = {
				heading: "_3Ssm2Ifc9S1clbSFvddidr",
				predictionsContent: "NdeYom0Z9WAUwaGGUyf8G",
				controls: "_35knGUH_2n9AWNWijjTkrx",
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
				return g
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				c = n("./node_modules/react-redux/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/actions/economics/predictions/index.ts"),
				s = n("./src/reddit/actions/toaster.ts"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				p = n("./src/reddit/helpers/trackers/predictions.ts"),
				b = n("./src/reddit/hooks/useTracking.ts"),
				m = n("./src/reddit/models/Toast/index.ts"),
				f = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				j = n("./src/reddit/components/PostCreationForm/Prompt/PromptModal.tsx");

			function O({
				isEnding: t,
				onClose: e,
				onConfirm: n
			}) {
				return i.a.createElement(j.a, {
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
			var h = n("./src/reddit/components/SubredditContent/PredictionsContent/index.m.less"),
				v = n.n(h);
			const x = 90;

			function g({
				subreddit: t
			}) {
				const e = Object(c.d)(),
					n = Object(b.a)(),
					[j, h] = Object(r.useState)(""),
					[g, k] = Object(r.useState)(!1),
					[P, y] = Object(r.useState)(!1),
					[I, _] = Object(r.useState)(!1),
					[w, C] = Object(r.useState)(null),
					E = Object(c.e)(e => Object(f.b)(e, {
						subredditId: t.id
					})),
					T = Object(c.e)(e => Object(f.j)(e, {
						subredditId: t.id
					})),
					S = Object(c.e)(e => Object(f.g)(e, {
						subredditId: t.id
					}));
				Object(r.useEffect)(() => {
					n(Object(p.w)())
				}, [n]), Object(r.useEffect)(() => {
					e(Object(a.j)(t.name))
				}, [e, t.name]), Object(r.useEffect)(() => {
					E && (h(E.name), C(x - E.name.length))
				}, [E]);
				const L = Object(r.useCallback)(() => {
						n(Object(p.e)()), _(!0)
					}, [n]),
					N = !!j && ((null == E ? void 0 : E.name) !== j && j.length > 3);
				return i.a.createElement("div", {
					className: v.a.predictionsContent
				}, i.a.createElement("h1", {
					className: v.a.heading
				}, o.fbt._("Predictions", null, {
					hk: "1SloUh"
				})), i.a.createElement("div", {
					className: v.a.controls
				}, i.a.createElement("div", {
					className: v.a.section
				}, i.a.createElement("label", {
					className: v.a.label,
					htmlFor: "tournament-name"
				}, o.fbt._("Tournament name", null, {
					hk: "1ZAVPf"
				})), i.a.createElement("input", {
					name: "tournament-name",
					className: v.a.input,
					disabled: !E || T,
					type: "text",
					value: j,
					onChange: t => {
						const {
							value: e
						} = t.target;
						e.length <= x && (h(e), C(x - e.length))
					},
					placeholder: o.fbt._("/r/{subredditName} tournament", [o.fbt._param("subredditName", t.name)], {
						hk: "bN9XA"
					})
				}), i.a.createElement("div", {
					className: Object(d.a)(v.a.remainingCharacters, {
						[v.a.maxCharacters]: (null == j ? void 0 : j.length) === x
					})
				}, E && E.name !== j && null !== w ? o.fbt._({
					"*": "{remaining characters} characters remaining",
					_1: "1 character remaining"
				}, [o.fbt._plural(w, "remaining characters")], {
					hk: "1dBRgv"
				}) : i.a.createElement(i.a.Fragment, null, " ")), i.a.createElement(u.i, {
					className: v.a.button,
					disabled: !j || !E || T || !N,
					onClick: async () => {
						if (!E || !j) return null;
						n(Object(p.k)()), k(!0);
						try {
							await e(Object(a.q)(E.tournamentId, t.id, j))
						} catch (r) {
							e(Object(s.f)({
								kind: m.b.Error,
								text: o.fbt._("Failed to update tournament name, please try again later", null, {
									hk: "3bx78u"
								})
							}))
						}
						k(!1)
					}
				}, g ? i.a.createElement(l.a, {
					sizePx: 16
				}) : o.fbt._("Rename", null, {
					hk: "4z2EPS"
				}))), i.a.createElement("div", null, i.a.createElement("label", {
					className: v.a.label
				}, o.fbt._("End tournament", null, {
					hk: "ZWlOH"
				})), i.a.createElement("p", {
					className: v.a.endConditions
				}, o.fbt._("Tournament can only be ended after its predictions are ended and resolved", null, {
					hk: "2AgZtm"
				})), i.a.createElement(u.i, {
					className: v.a.button,
					disabled: !E || !S || T,
					onClick: L
				}, o.fbt._("End", null, {
					hk: "HWN7f"
				})), I && i.a.createElement(O, {
					isEnding: P,
					onClose: () => {
						_(!1)
					},
					onConfirm: async () => {
						if (!E || !S) return null;
						y(!0);
						try {
							await e(Object(a.k)(E.tournamentId))
						} catch (t) {
							e(Object(s.f)({
								kind: m.b.Error,
								text: o.fbt._("Failed to end tournament, please try again later", null, {
									hk: "2huCGU"
								})
							}))
						}
						y(!1), _(!1)
					}
				}))))
			}
		},
		"./src/reddit/endpoints/economics/predictions.ts": function(t, e, n) {
			"use strict";
			n.d(e, "n", (function() {
				return h
			})), n.d(e, "l", (function() {
				return v
			})), n.d(e, "a", (function() {
				return x
			})), n.d(e, "j", (function() {
				return g
			})), n.d(e, "f", (function() {
				return k
			})), n.d(e, "k", (function() {
				return P
			})), n.d(e, "b", (function() {
				return y
			})), n.d(e, "m", (function() {
				return I
			})), n.d(e, "g", (function() {
				return _
			})), n.d(e, "h", (function() {
				return w
			})), n.d(e, "i", (function() {
				return C
			})), n.d(e, "d", (function() {
				return E
			})), n.d(e, "c", (function() {
				return T
			})), n.d(e, "e", (function() {
				return S
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
				p = n("./src/redditGQL/operations/GetPredictionToken.json"),
				b = n("./src/redditGQL/operations/GetTournaments.json"),
				m = n("./src/redditGQL/operations/ResolvePrediction.json"),
				f = n("./src/redditGQL/operations/SubredditTopPredictors.json"),
				j = n("./src/redditGQL/operations/UpdatePredictionTournament.json"),
				O = n("./src/redditGQL/operations/VotePrediction.json");
			const h = async (t, {
				postId: e,
				optionId: n,
				coinPackageId: i,
				price: c
			}) => {
				var d;
				const a = await Object(o.a)(t, {
					...O,
					variables: {
						input: {
							postId: e,
							optionId: n,
							coinPackageId: i,
							price: c
						}
					}
				});
				if (!Object(r.c)(a) || a.error || !(null === (d = a.body.data.votePrediction) || void 0 === d ? void 0 : d.ok)) throw new Error("Failed to make prediction");
				return a.body.data.votePrediction.poll
			}, v = (t, {
				postId: e,
				optionId: n
			}) => Object(o.a)(t, {
				...m,
				variables: {
					input: {
						postId: e,
						optionId: n
					}
				}
			});
			var x;
			! function(t) {
				t.AllTime = "ALL_TIME", t.Monthly = "MONTHLY"
			}(x || (x = {}));
			const g = (t, {
					subredditId: e,
					period: n,
					top: r,
					includeCurrentRank: i,
					tournamentId: c
				}) => Object(o.a)(t, {
					...f,
					variables: {
						subredditId: e,
						period: n,
						top: r,
						includeCurrentRank: i,
						tournamentId: c
					}
				}),
				k = (t, e) => Object(o.a)(t, {
					...s,
					variables: {
						input: e
					}
				}),
				P = (t, e) => Object(o.a)(t, {
					...b,
					variables: e
				}),
				y = (t, e) => Object(o.a)(t, {
					...i,
					variables: {
						input: e
					}
				}),
				I = (t, e) => Object(o.a)(t, {
					...j,
					variables: {
						input: e
					}
				}),
				_ = (t, e) => Object(o.a)(t, {
					...u,
					variables: {
						input: e
					}
				}),
				w = (t, e) => Object(o.a)(t, {
					...l,
					variables: e
				}),
				C = (t, e) => Object(o.a)(t, {
					...p,
					variables: e
				}),
				E = async (t, e) => {
					const n = await Object(o.a)(t, {
						...d,
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
					const d = await Object(o.a)(t, {
						...c,
						variables: {
							input: {
								postId: e
							}
						}
					});
					if (!Object(r.c)(d) || !(null === (n = d.body.data.cancelPrediction) || void 0 === n ? void 0 : n.ok) || !(null === (i = d.body.data.cancelPrediction) || void 0 === i ? void 0 : i.poll)) throw new Error("Unable to cancel prediction");
					return d.body.data.cancelPrediction.poll
				}, S = async (t, e) => {
					var n, i;
					const c = await Object(o.a)(t, {
						...a,
						variables: {
							input: e
						}
					});
					if (!Object(r.c)(c) || !(null === (n = c.body.data.changePredictionVote) || void 0 === n ? void 0 : n.ok) || !(null === (i = c.body.data.changePredictionVote) || void 0 === i ? void 0 : i.poll)) throw new Error("Unable to change prediction.");
					return c.body.data.changePredictionVote.poll
				}
		},
		"./src/reddit/helpers/trackers/predictions.ts": function(t, e, n) {
			"use strict";
			n.d(e, "r", (function() {
				return c
			})), n.d(e, "s", (function() {
				return d
			})), n.d(e, "t", (function() {
				return a
			})), n.d(e, "n", (function() {
				return s
			})), n.d(e, "v", (function() {
				return u
			})), n.d(e, "p", (function() {
				return l
			})), n.d(e, "q", (function() {
				return p
			})), n.d(e, "o", (function() {
				return b
			})), n.d(e, "a", (function() {
				return m
			})), n.d(e, "u", (function() {
				return f
			})), n.d(e, "f", (function() {
				return j
			})), n.d(e, "x", (function() {
				return O
			})), n.d(e, "m", (function() {
				return h
			})), n.d(e, "z", (function() {
				return v
			})), n.d(e, "i", (function() {
				return x
			})), n.d(e, "y", (function() {
				return g
			})), n.d(e, "w", (function() {
				return k
			})), n.d(e, "e", (function() {
				return P
			})), n.d(e, "k", (function() {
				return y
			})), n.d(e, "g", (function() {
				return I
			})), n.d(e, "b", (function() {
				return _
			})), n.d(e, "l", (function() {
				return w
			})), n.d(e, "j", (function() {
				return C
			})), n.d(e, "h", (function() {
				return E
			})), n.d(e, "c", (function() {
				return T
			})), n.d(e, "d", (function() {
				return S
			}));
			var o = n("./src/reddit/models/Prediction/index.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const i = "poll",
				c = t => ({
					...Object(r.defaults)(t),
					source: i,
					action: "select",
					noun: "poll_option"
				}),
				d = t => ({
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
				}) => c => {
					const d = e === o.a.Coins ? n : void 0,
						a = e === o.a.Tokens ? n : void 0;
					return {
						...Object(r.defaults)(c),
						source: i,
						action: "close",
						noun: "prediction_modal",
						poll: Object(r.poll)(c, t, !1, d, a)
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
				k = () => t => ({
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
				y = () => t => ({
					...Object(r.defaults)(t),
					source: "mod_tool_predict",
					action: "click",
					noun: "rename_tournament"
				}),
				I = () => t => ({
					...Object(r.defaults)(t),
					source: "predictions",
					action: "click",
					noun: "next"
				}),
				_ = () => t => ({
					...Object(r.defaults)(t),
					source: "predictions",
					action: "click",
					noun: "add_more"
				}),
				w = () => t => ({
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
				}),
				E = t => e => ({
					...Object(r.defaults)(e),
					source: "predictions",
					action: "click",
					noun: "play_tournament",
					poll: Object(r.predictionTournamentPoll)(e, t),
					post: Object(r.post)(e, t),
					predictions: Object(r.predictions)(e, t),
					subreddit: Object(r.subreddit)(e)
				}),
				T = t => e => ({
					...Object(r.defaults)(e),
					source: "predictions",
					action: "click",
					noun: "predictions_option_change",
					post: Object(r.post)(e, t),
					predictions: Object(r.predictions)(e, t),
					subreddit: Object(r.subreddit)(e)
				}),
				S = t => e => ({
					...Object(r.defaults)(e),
					source: "predictions_option_change",
					action: "click",
					noun: "confirm",
					post: Object(r.post)(e, t),
					predictions: Object(r.predictions)(e, t),
					subreddit: Object(r.subreddit)(e)
				})
		},
		"./src/reddit/selectors/features/predictions/creation/index.ts": function(t, e, n) {
			"use strict";
			n.d(e, "b", (function() {
				return c
			})), n.d(e, "a", (function() {
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
			const c = t => {
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
				d = t => {
					var e, n;
					return !!(null === (n = null === (e = t.features) || void 0 === e ? void 0 : e.predictions) || void 0 === n ? void 0 : n.creation.length)
				}
		},
		"./src/redditGQL/operations/AddPredictionDrafts.json": function(t) {
			t.exports = JSON.parse('{"id":"3048ce040c04"}')
		},
		"./src/redditGQL/operations/CancelPrediction.json": function(t) {
			t.exports = JSON.parse('{"id":"fac88c91fec8"}')
		},
		"./src/redditGQL/operations/ChangePrediction.json": function(t) {
			t.exports = JSON.parse('{"id":"614dbb8a54d2"}')
		},
		"./src/redditGQL/operations/ChangePredictionVote.json": function(t) {
			t.exports = JSON.parse('{"id":"22d79ec54eb4"}')
		},
		"./src/redditGQL/operations/CreatePredictionTournament.json": function(t) {
			t.exports = JSON.parse('{"id":"cb619ee4a1d7"}')
		},
		"./src/redditGQL/operations/EndPredictionTournament.json": function(t) {
			t.exports = JSON.parse('{"id":"ef19872c5854"}')
		},
		"./src/redditGQL/operations/GetPredictionChipPackages.json": function(t) {
			t.exports = JSON.parse('{"id":"5ce83e513fa5"}')
		},
		"./src/redditGQL/operations/GetPredictionToken.json": function(t) {
			t.exports = JSON.parse('{"id":"26b911e67a5f"}')
		},
		"./src/redditGQL/operations/GetTournaments.json": function(t) {
			t.exports = JSON.parse('{"id":"003c1e2f9277"}')
		},
		"./src/redditGQL/operations/ResolvePrediction.json": function(t) {
			t.exports = JSON.parse('{"id":"d742e3019cfe"}')
		},
		"./src/redditGQL/operations/SubredditTopPredictors.json": function(t) {
			t.exports = JSON.parse('{"id":"3407d5f67207"}')
		},
		"./src/redditGQL/operations/UpdatePredictionTournament.json": function(t) {
			t.exports = JSON.parse('{"id":"6851ffb490a5"}')
		},
		"./src/redditGQL/operations/VotePrediction.json": function(t) {
			t.exports = JSON.parse('{"id":"484780ada6a2"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-SubredditContent-PredictionsContent.6156c2a78b88f33560a7.js.map