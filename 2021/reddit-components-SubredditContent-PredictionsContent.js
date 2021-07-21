// https://www.redditstatic.com/desktop2x/reddit-components-SubredditContent-PredictionsContent.804f3fc071d22acf39f5.js
// Retrieved at 7/21/2021, 5:20:05 PM by Reddit Dataminer v1.0.0
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
				d = n("./node_modules/uuid/lib/bytesToUuid.js"),
				c = 0,
				a = 0;
			e.exports = function(e, t, n) {
				var s = t && n || 0,
					u = t || [],
					l = (e = e || {}).node || o,
					p = void 0 !== e.clockseq ? e.clockseq : r;
				if (null == l || null == p) {
					var m = i();
					null == l && (l = o = [1 | m[0], m[1], m[2], m[3], m[4], m[5]]), null == p && (p = r = 16383 & (m[6] << 8 | m[7]))
				}
				var b = void 0 !== e.msecs ? e.msecs : (new Date).getTime(),
					f = void 0 !== e.nsecs ? e.nsecs : a + 1,
					j = b - c + (f - a) / 1e4;
				if (j < 0 && void 0 === e.clockseq && (p = p + 1 & 16383), (j < 0 || b > c) && void 0 === e.nsecs && (f = 0), f >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
				c = b, a = f, r = p;
				var O = (1e4 * (268435455 & (b += 122192928e5)) + f) % 4294967296;
				u[s++] = O >>> 24 & 255, u[s++] = O >>> 16 & 255, u[s++] = O >>> 8 & 255, u[s++] = 255 & O;
				var h = b / 4294967296 * 1e4 & 268435455;
				u[s++] = h >>> 8 & 255, u[s++] = 255 & h, u[s++] = h >>> 24 & 15 | 16, u[s++] = h >>> 16 & 255, u[s++] = p >>> 8 | 128, u[s++] = 255 & p;
				for (var x = 0; x < 6; ++x) u[s + x] = l[x];
				return t || d(u)
			}
		},
		"./src/reddit/actions/economics/predictions/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return k
			})), n.d(t, "j", (function() {
				return g
			})), n.d(t, "i", (function() {
				return I
			})), n.d(t, "g", (function() {
				return w
			})), n.d(t, "b", (function() {
				return E
			})), n.d(t, "l", (function() {
				return C
			})), n.d(t, "m", (function() {
				return T
			})), n.d(t, "c", (function() {
				return S
			})), n.d(t, "a", (function() {
				return N
			})), n.d(t, "n", (function() {
				return G
			})), n.d(t, "h", (function() {
				return A
			})), n.d(t, "d", (function() {
				return F
			})), n.d(t, "e", (function() {
				return B
			})), n.d(t, "k", (function() {
				return D
			}));
			var o = n("./node_modules/uuid/index.js"),
				r = n.n(o),
				i = n("./src/lib/initializeClient/installReducer.ts"),
				d = n("./src/reddit/reducers/features/predictions/index.ts"),
				c = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/endpoints/economics/predictions.ts"),
				s = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				u = n("./src/reddit/models/Prediction/index.ts"),
				l = n("./src/reddit/selectors/experiments/econ/index.ts"),
				p = n("./src/reddit/selectors/subreddit.ts"),
				m = n("./src/reddit/selectors/user.ts"),
				b = n("./src/reddit/selectors/features/predictions/creation/index.ts"),
				f = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				j = n("./src/reddit/actions/economics/predictions/constants.ts");
			Object(i.a)({
				features: {
					predictions: d.a
				}
			});
			const O = Object(c.a)(j.d),
				h = Object(c.a)(j.h),
				x = Object(c.a)(j.k),
				v = Object(c.a)(j.g),
				k = (e, t, n, o) => async (r, i, {
					gqlContext: d
				}) => {
					const c = Object(m.J)(i()),
						s = await Object(a.g)(d(), {
							subredditId: e,
							period: t,
							top: n,
							includeCurrentRank: c,
							tournamentId: o
						});
					if (s.error || !s.ok) throw new Error("Failed to fetch subreddit top predictors");
					const {
						subredditInfoById: u
					} = s.body.data;
					if (!u || !u.predictionWinners) throw new Error("Subreddit has no prediction winners");
					const {
						predictionWinners: l
					} = u, p = {
						subredditId: e,
						...l
					};
					return r(O(p)), p
				}, g = ({
					coinPackageId: e,
					optionId: t,
					postId: n,
					price: o
				}) => async (r, i, {
					gqlContext: d
				}) => {
					const c = await Object(a.k)(d(), {
						coinPackageId: e,
						optionId: t,
						postId: n,
						price: o
					});
					if (c.error || !c.ok) throw new Error("Failed to make prediction");
					const {
						votePrediction: s
					} = c.body.data;
					if (!s) throw new Error("Failed to create prediction vote");
					return r(h({
						pollId: n,
						prediction: s.poll,
						price: o
					})), s.poll
				}, I = ({
					optionId: e,
					postId: t
				}) => async (n, o, {
					gqlContext: r
				}) => {
					const i = await Object(a.i)(r(), {
							optionId: e,
							postId: t
						}),
						{
							resolvePrediction: d
						} = i.body.data;
					if (!(null == d ? void 0 : d.poll)) throw new Error("Failed to resolve prediction");
					return n(v({
						pollId: t,
						prediction: d.poll
					})), d.poll
				}, _ = Object(c.a)(j.b), y = Object(c.a)(j.c), P = Object(c.a)(j.f), w = e => async (t, n, {
					gqlContext: o
				}) => {
					const r = n(),
						i = Object(p.D)(r, e);
					if (Object(f.j)(r, {
							subredditId: i
						})) return Object(f.f)(r, {
						subredditId: i
					});
					t(_({
						subredditId: i
					}));
					const d = await Object(a.h)(o(), {
						subredditName: e,
						isLatestOnly: !0,
						isIncludingPredictions: !0,
						isIncludingParticipants: !0
					});
					if (d.error || !d.ok) throw new Error("Failed to fetch tournaments");
					const {
						subredditInfoByName: c
					} = d.body.data;
					if (!c.predictionTournaments) return [];
					const u = c.predictionTournaments.map(e => {
							var t, n;
							const o = null !== (n = null === (t = e.predictionPosts) || void 0 === t ? void 0 : t.map(e => {
								const t = Object(s.e)(e),
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
						l = u.reduce((e, t) => (t.predictionPosts.length && t.predictionPosts.forEach(t => {
							e[t.id] = t
						}), e), {});
					return t(y({
						subredditId: i,
						tournaments: u
					})), t(P({
						posts: l,
						meta: r.meta
					})), u
				}, E = Object(c.a)(j.a), C = Object(c.a)(j.i), T = Object(c.a)(j.j), S = ({
					subredditId: e
				}) => async (t, n, {
					gqlContext: o
				}) => {
					const r = n(),
						i = Object(b.b)(r),
						d = Object(l.a)(r);
					if (!i) throw new Error("Failed to create tournament, no prediction drafts attached");
					const c = await Object(a.c)(o(), {
							name: "Predictions Tournament",
							isStartImmediately: !0,
							subredditId: e,
							predictionDrafts: i,
							currency: d ? u.a.Coins : u.a.Tokens
						}),
						{
							createPredictionTournament: s
						} = c.body.data;
					if (!(null == s ? void 0 : s.tournament)) throw new Error("Failed to resolve prediction");
					const {
						tournament: p
					} = s;
					return t(y({
						subredditId: e,
						tournaments: [p]
					})), p
				}, N = (e, t) => async (n, o, {
					gqlContext: i
				}) => {
					var d;
					const c = Object(b.b)(o());
					if (!c) throw new Error("Failed to create prediction post, no prediction drafts attached");
					const s = await Object(a.b)(i(), {
							tournamentId: e,
							isStartImmediately: !0,
							iKey: `add-dfts-${r.a.v4()}`,
							subredditId: t,
							predictionDrafts: c
						}),
						{
							addPredictionDrafts: u
						} = s.body.data;
					if (null === (d = u.errors) || void 0 === d ? void 0 : d.length) throw new Error(u.errors[0].message);
					if (!(null == u ? void 0 : u.tournament)) throw new Error("Failed to create prediction");
					return u.tournament
				}, L = Object(c.a)(j.l), G = (e, t, n) => async (o, r, {
					gqlContext: i
				}) => {
					const d = await Object(a.j)(i(), {
							tournamentId: e,
							name: n
						}),
						{
							updatePredictionTournament: c
						} = d.body.data;
					if (!c.tournament) throw new Error("Failed to update prediction name");
					return o(L({
						subredditId: t,
						tournament: c.tournament
					})), c.tournament
				}, A = (e, t) => async (n, o, {
					gqlContext: r
				}) => {
					const i = await Object(a.d)(r(), {
							tournamentId: e
						}),
						{
							endPredictionTournament: d
						} = i.body.data;
					if (!d.tournament) throw new Error("Failed to update prediction name");
					return n(L({
						subredditId: t,
						tournament: d.tournament
					})), d.tournament
				}, F = e => async (t, n, {
					gqlContext: o
				}) => {
					const r = await Object(a.e)(o(), {
						postId: e
					});
					if (!r.ok || r.error) throw new Error("Failed to fetch prediction chip packages");
					const {
						postInfoById: i
					} = r.body.data;
					if (!i.predictionChipPackages) throw new Error("Failed to fetch prediction chip packages");
					return i.predictionChipPackages
				}, B = e => async (t, n, {
					gqlContext: o
				}) => {
					const r = await Object(a.f)(o(), {
						tournamentId: e
					});
					if (!r.ok || r.error) throw new Error("Failed to fetch token balance");
					const {
						identity: i
					} = r.body.data;
					if (!i.hasOwnProperty("predictionTokens")) throw new Error("Failed to fetch token balance");
					return i.predictionTokens
				}, D = ({
					coinPackageId: e,
					selectedOptionId: t,
					price: n,
					pollId: o,
					postId: r,
					subredditId: i
				}) => async d => {
					const c = await d(g({
						coinPackageId: e,
						optionId: t,
						postId: o,
						price: n
					}));
					return d(x({
						postId: r,
						predictionId: o,
						selectedOptionId: t,
						subredditId: i
					})), c
				}
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
				d = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = n("./src/reddit/constants/keycodes.ts"),
				a = n("./src/reddit/controls/Button/index.tsx"),
				s = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				u = n("./src/reddit/controls/TextButton/index.tsx"),
				l = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				p = n("./src/reddit/components/PostCreationForm/Prompt/PromptModal.m.less"),
				m = n.n(p),
				b = n("./src/lib/lessComponent.tsx");
			const f = b.a.wrapped(a.i, "PrimaryButton", m.a),
				j = b.a.wrapped(d.o, "ModalText", m.a);
			class O extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.handleEscapeKey = e => {
						e.keyCode === c.a.Escape && this.props.onClose()
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
					return r.a.createElement(d.d, null, r.a.createElement(d.h, null, r.a.createElement(l.a, null, r.a.createElement(d.p, null, this.props.titleText), r.a.createElement(u.a, {
						onClick: this.props.onClose
					}, r.a.createElement(d.b, null)))), r.a.createElement(d.k, null, r.a.createElement(j, null, this.props.bodyText)), r.a.createElement(d.f, null, r.a.createElement(d.a, {
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
		"./src/reddit/components/SubredditContent/PredictionsContent/index.m.less": function(e, t, n) {
			e.exports = {
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
		"./src/reddit/components/SubredditContent/PredictionsContent/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "default", (function() {
				return k
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				d = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/actions/economics/predictions/index.ts"),
				s = n("./src/reddit/actions/toaster.ts"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				p = n("./src/reddit/helpers/trackers/predictions.ts"),
				m = n("./src/reddit/hooks/useTracking.ts"),
				b = n("./src/reddit/models/Toast/index.ts"),
				f = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				j = n("./src/reddit/components/PostCreationForm/Prompt/PromptModal.tsx");

			function O({
				isEnding: e,
				onClose: t,
				onConfirm: n
			}) {
				return i.a.createElement(j.a, {
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
			var h = n("./src/reddit/components/SubredditContent/PredictionsContent/index.m.less"),
				x = n.n(h);
			const v = 90;

			function k({
				subreddit: e
			}) {
				const t = Object(d.d)(),
					n = Object(m.a)(),
					[j, h] = Object(r.useState)(""),
					[k, g] = Object(r.useState)(!1),
					[I, _] = Object(r.useState)(!1),
					[y, P] = Object(r.useState)(!1),
					[w, E] = Object(r.useState)(null),
					C = Object(d.e)(t => Object(f.a)(t, {
						subredditId: e.id
					})),
					T = Object(d.e)(t => Object(f.j)(t, {
						subredditId: e.id
					})),
					S = Object(d.e)(t => Object(f.g)(t, {
						subredditId: e.id
					}));
				Object(r.useEffect)(() => {
					n(Object(p.u)())
				}, [n]), Object(r.useEffect)(() => {
					t(Object(a.g)(e.name))
				}, [t, e.name]), Object(r.useEffect)(() => {
					C && (h(C.name), E(v - C.name.length))
				}, [C]);
				const N = Object(r.useCallback)(() => {
						n(Object(p.c)()), P(!0)
					}, [n]),
					L = !!j && ((null == C ? void 0 : C.name) !== j && j.length > 3);
				return i.a.createElement("div", {
					className: x.a.predictionsContent
				}, i.a.createElement("h1", {
					className: x.a.heading
				}, o.fbt._("Predictions", null, {
					hk: "1SloUh"
				})), i.a.createElement("div", {
					className: x.a.controls
				}, i.a.createElement("div", {
					className: x.a.section
				}, i.a.createElement("label", {
					className: x.a.label,
					htmlFor: "tournament-name"
				}, o.fbt._("Tournament name", null, {
					hk: "1ZAVPf"
				})), i.a.createElement("input", {
					name: "tournament-name",
					className: x.a.input,
					disabled: !C || T,
					type: "text",
					value: j,
					onChange: e => {
						const {
							value: t
						} = e.target;
						t.length <= v && (h(t), E(v - t.length))
					},
					placeholder: o.fbt._("/r/{subredditName} tournament", [o.fbt._param("subredditName", e.name)], {
						hk: "bN9XA"
					})
				}), i.a.createElement("div", {
					className: Object(c.a)(x.a.remainingCharacters, {
						[x.a.maxCharacters]: (null == j ? void 0 : j.length) === v
					})
				}, C && C.name !== j && null !== w ? o.fbt._({
					"*": "{remaining characters} characters remaining",
					_1: "1 character remaining"
				}, [o.fbt._plural(w, "remaining characters")], {
					hk: "1dBRgv"
				}) : i.a.createElement(i.a.Fragment, null, " ")), i.a.createElement(u.i, {
					className: x.a.button,
					disabled: !j || !C || T || !L,
					onClick: async () => {
						if (!C || !j) return null;
						n(Object(p.i)()), g(!0);
						try {
							await t(Object(a.n)(C.tournamentId, e.id, j))
						} catch (r) {
							t(Object(s.f)({
								kind: b.b.Error,
								text: o.fbt._("Failed to update tournament name, please try again later", null, {
									hk: "3bx78u"
								})
							}))
						}
						g(!1)
					}
				}, k ? i.a.createElement(l.a, {
					sizePx: 16
				}) : o.fbt._("Rename", null, {
					hk: "4z2EPS"
				}))), i.a.createElement("div", null, i.a.createElement("label", {
					className: x.a.label
				}, o.fbt._("End tournament", null, {
					hk: "ZWlOH"
				})), i.a.createElement("p", {
					className: x.a.endConditions
				}, o.fbt._("Tournament can only be ended after its predictions are ended and resolved", null, {
					hk: "2AgZtm"
				})), i.a.createElement(u.i, {
					className: x.a.button,
					disabled: !C || !S || T,
					onClick: N
				}, o.fbt._("End", null, {
					hk: "HWN7f"
				})), y && i.a.createElement(O, {
					isEnding: I,
					onClose: () => {
						P(!1)
					},
					onConfirm: async () => {
						if (!C || !S) return null;
						_(!0);
						try {
							await t(Object(a.h)(C.tournamentId, e.id))
						} catch (n) {
							t(Object(s.f)({
								kind: b.b.Error,
								text: o.fbt._("Failed to end tournament, please try again later", null, {
									hk: "2huCGU"
								})
							}))
						}
						_(!1), P(!1)
					}
				}))))
			}
		},
		"./src/reddit/endpoints/economics/predictions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "k", (function() {
				return b
			})), n.d(t, "i", (function() {
				return f
			})), n.d(t, "a", (function() {
				return j
			})), n.d(t, "g", (function() {
				return O
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "h", (function() {
				return x
			})), n.d(t, "b", (function() {
				return v
			})), n.d(t, "j", (function() {
				return k
			})), n.d(t, "d", (function() {
				return g
			})), n.d(t, "e", (function() {
				return I
			})), n.d(t, "f", (function() {
				return _
			}));
			var o = n("./src/lib/makeGqlRequest/index.ts"),
				r = n("./src/redditGQL/operations/AddPredictionDrafts.json"),
				i = n("./src/redditGQL/operations/CreatePredictionTournament.json"),
				d = n("./src/redditGQL/operations/EndPredictionTournament.json"),
				c = n("./src/redditGQL/operations/GetPredictionChipPackages.json"),
				a = n("./src/redditGQL/operations/GetPredictionToken.json"),
				s = n("./src/redditGQL/operations/GetTournaments.json"),
				u = n("./src/redditGQL/operations/ResolvePrediction.json"),
				l = n("./src/redditGQL/operations/SubredditTopPredictors.json"),
				p = n("./src/redditGQL/operations/UpdatePredictionTournament.json"),
				m = n("./src/redditGQL/operations/VotePrediction.json");
			const b = (e, {
					postId: t,
					optionId: n,
					coinPackageId: r,
					price: i
				}) => Object(o.a)(e, {
					...m,
					variables: {
						input: {
							postId: t,
							optionId: n,
							coinPackageId: r,
							price: i
						}
					}
				}),
				f = (e, {
					postId: t,
					optionId: n
				}) => Object(o.a)(e, {
					...u,
					variables: {
						input: {
							postId: t,
							optionId: n
						}
					}
				});
			var j;
			! function(e) {
				e.AllTime = "ALL_TIME", e.Monthly = "MONTHLY"
			}(j || (j = {}));
			const O = (e, {
					subredditId: t,
					period: n,
					top: r,
					includeCurrentRank: i,
					tournamentId: d
				}) => Object(o.a)(e, {
					...l,
					variables: {
						subredditId: t,
						period: n,
						top: r,
						includeCurrentRank: i,
						tournamentId: d
					}
				}),
				h = (e, t) => Object(o.a)(e, {
					...i,
					variables: {
						input: t
					}
				}),
				x = (e, t) => Object(o.a)(e, {
					...s,
					variables: t
				}),
				v = (e, t) => Object(o.a)(e, {
					...r,
					variables: {
						input: t
					}
				}),
				k = (e, t) => Object(o.a)(e, {
					...p,
					variables: {
						input: t
					}
				}),
				g = (e, t) => Object(o.a)(e, {
					...d,
					variables: {
						input: t
					}
				}),
				I = (e, t) => Object(o.a)(e, {
					...c,
					variables: t
				}),
				_ = (e, t) => Object(o.a)(e, {
					...a,
					variables: t
				})
		},
		"./src/reddit/helpers/trackers/predictions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "p", (function() {
				return d
			})), n.d(t, "q", (function() {
				return c
			})), n.d(t, "r", (function() {
				return a
			})), n.d(t, "l", (function() {
				return s
			})), n.d(t, "t", (function() {
				return u
			})), n.d(t, "n", (function() {
				return l
			})), n.d(t, "o", (function() {
				return p
			})), n.d(t, "m", (function() {
				return m
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "s", (function() {
				return f
			})), n.d(t, "d", (function() {
				return j
			})), n.d(t, "v", (function() {
				return O
			})), n.d(t, "k", (function() {
				return h
			})), n.d(t, "x", (function() {
				return x
			})), n.d(t, "g", (function() {
				return v
			})), n.d(t, "w", (function() {
				return k
			})), n.d(t, "u", (function() {
				return g
			})), n.d(t, "c", (function() {
				return I
			})), n.d(t, "i", (function() {
				return _
			})), n.d(t, "e", (function() {
				return y
			})), n.d(t, "b", (function() {
				return P
			})), n.d(t, "j", (function() {
				return w
			})), n.d(t, "h", (function() {
				return E
			})), n.d(t, "f", (function() {
				return C
			}));
			var o = n("./src/reddit/models/Prediction/index.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const i = "poll",
				d = e => ({
					...Object(r.defaults)(e),
					source: i,
					action: "select",
					noun: "poll_option"
				}),
				c = e => ({
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
				m = ({
					pollId: e,
					currency: t,
					amount: n
				}) => d => {
					const c = t === o.a.Coins ? n : void 0,
						a = t === o.a.Tokens ? n : void 0;
					return {
						...Object(r.defaults)(d),
						source: i,
						action: "close",
						noun: "prediction_modal",
						poll: Object(r.poll)(d, e, !1, c, a)
					}
				},
				b = e => ({
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
				x = () => e => ({
					...Object(r.defaults)(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "community",
						paneName: "predictions"
					}
				}),
				v = () => e => ({
					...Object(r.defaults)(e),
					source: "predictions",
					action: "click",
					noun: "leaderboard",
					actionInfo: {
						pageType: "community",
						paneName: "predictions"
					}
				}),
				k = () => e => ({
					...Object(r.defaults)(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "tournament_leaderboard",
						reason: "predictions_tab"
					}
				}),
				g = () => e => ({
					...Object(r.defaults)(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "mod_tool_predict"
					}
				}),
				I = () => e => ({
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
				y = () => e => ({
					...Object(r.defaults)(e),
					source: "predictions",
					action: "click",
					noun: "next"
				}),
				P = () => e => ({
					...Object(r.defaults)(e),
					source: "predictions",
					action: "click",
					noun: "add_more"
				}),
				w = () => e => ({
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
				C = e => t => ({
					...Object(r.defaults)(t),
					source: "predictions",
					action: "click",
					noun: "play_tournament",
					poll: Object(r.predictionTournamentPoll)(t, e),
					post: Object(r.post)(t, e),
					predictions: Object(r.predictions)(t, e),
					subreddit: Object(r.subreddit)(t)
				})
		},
		"./src/reddit/selectors/features/predictions/creation/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return d
			})), n.d(t, "a", (function() {
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
							o = t.formData.polls,
							r = o.options.map(e => ({
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
							votingEndsAt: o.endDate.toISOString(),
							body: d,
							options: r
						}
					}) : []
				},
				c = e => {
					var t, n;
					return !!(null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.predictions) || void 0 === n ? void 0 : n.creation.length)
				}
		},
		"./src/redditGQL/operations/AddPredictionDrafts.json": function(e) {
			e.exports = JSON.parse('{"id":"4ceef7ba971a"}')
		},
		"./src/redditGQL/operations/CreatePredictionTournament.json": function(e) {
			e.exports = JSON.parse('{"id":"c6f811e2c3a3"}')
		},
		"./src/redditGQL/operations/EndPredictionTournament.json": function(e) {
			e.exports = JSON.parse('{"id":"ff7535e3fa1d"}')
		},
		"./src/redditGQL/operations/GetPredictionChipPackages.json": function(e) {
			e.exports = JSON.parse('{"id":"5ce83e513fa5"}')
		},
		"./src/redditGQL/operations/GetPredictionToken.json": function(e) {
			e.exports = JSON.parse('{"id":"26b911e67a5f"}')
		},
		"./src/redditGQL/operations/GetTournaments.json": function(e) {
			e.exports = JSON.parse('{"id":"f50fa2609ff9"}')
		},
		"./src/redditGQL/operations/ResolvePrediction.json": function(e) {
			e.exports = JSON.parse('{"id":"45c2e0b86b90"}')
		},
		"./src/redditGQL/operations/SubredditTopPredictors.json": function(e) {
			e.exports = JSON.parse('{"id":"3407d5f67207"}')
		},
		"./src/redditGQL/operations/UpdatePredictionTournament.json": function(e) {
			e.exports = JSON.parse('{"id":"c876eac99ed2"}')
		},
		"./src/redditGQL/operations/VotePrediction.json": function(e) {
			e.exports = JSON.parse('{"id":"1712829dfb21"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-SubredditContent-PredictionsContent.804f3fc071d22acf39f5.js.map