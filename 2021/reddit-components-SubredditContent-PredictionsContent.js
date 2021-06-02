// https://www.redditstatic.com/desktop2x/reddit-components-SubredditContent-PredictionsContent.4f170560d6107c90e77c.js
// Retrieved at 6/2/2021, 10:50:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-SubredditContent-PredictionsContent"], {
		"./node_modules/uuid/index.js": function(e, t, n) {
			var r = n("./node_modules/uuid/v1.js"),
				o = n("./node_modules/uuid/v4.js"),
				i = o;
			i.v1 = r, i.v4 = o, e.exports = i
		},
		"./node_modules/uuid/v1.js": function(e, t, n) {
			var r, o, i = n("./node_modules/uuid/lib/rng-browser.js"),
				a = n("./node_modules/uuid/lib/bytesToUuid.js"),
				c = 0,
				s = 0;
			e.exports = function(e, t, n) {
				var d = t && n || 0,
					u = t || [],
					l = (e = e || {}).node || r,
					p = void 0 !== e.clockseq ? e.clockseq : o;
				if (null == l || null == p) {
					var m = i();
					null == l && (l = r = [1 | m[0], m[1], m[2], m[3], m[4], m[5]]), null == p && (p = o = 16383 & (m[6] << 8 | m[7]))
				}
				var b = void 0 !== e.msecs ? e.msecs : (new Date).getTime(),
					f = void 0 !== e.nsecs ? e.nsecs : s + 1,
					h = b - c + (f - s) / 1e4;
				if (h < 0 && void 0 === e.clockseq && (p = p + 1 & 16383), (h < 0 || b > c) && void 0 === e.nsecs && (f = 0), f >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
				c = b, s = f, o = p;
				var j = (1e4 * (268435455 & (b += 122192928e5)) + f) % 4294967296;
				u[d++] = j >>> 24 & 255, u[d++] = j >>> 16 & 255, u[d++] = j >>> 8 & 255, u[d++] = 255 & j;
				var O = b / 4294967296 * 1e4 & 268435455;
				u[d++] = O >>> 8 & 255, u[d++] = 255 & O, u[d++] = O >>> 24 & 15 | 16, u[d++] = O >>> 16 & 255, u[d++] = p >>> 8 | 128, u[d++] = 255 & p;
				for (var g = 0; g < 6; ++g) u[d + g] = l[g];
				return t || a(u)
			}
		},
		"./src/graphql/operations/AddPredictionDrafts.json": function(e) {
			e.exports = JSON.parse('{"id":"83f8c9485fc2"}')
		},
		"./src/graphql/operations/CreatePredictionTournament.json": function(e) {
			e.exports = JSON.parse('{"id":"76dfc155c2e6"}')
		},
		"./src/graphql/operations/EndPredictionTournament.json": function(e) {
			e.exports = JSON.parse('{"id":"8f6f9c7f897e"}')
		},
		"./src/graphql/operations/GetPredictionChipPackages.json": function(e) {
			e.exports = JSON.parse('{"id":"3785e4a718f5"}')
		},
		"./src/graphql/operations/GetPredictionCoinPackages.json": function(e) {
			e.exports = JSON.parse('{"id":"6829c428155b"}')
		},
		"./src/graphql/operations/GetPredictionToken.json": function(e) {
			e.exports = JSON.parse('{"id":"26b911e67a5f"}')
		},
		"./src/graphql/operations/GetTournaments.json": function(e) {
			e.exports = JSON.parse('{"id":"20bd24c2878f"}')
		},
		"./src/graphql/operations/ResolvePrediction.json": function(e) {
			e.exports = JSON.parse('{"id":"45c2e0b86b90"}')
		},
		"./src/graphql/operations/SubredditTopPredictors.json": function(e) {
			e.exports = JSON.parse('{"id":"3407d5f67207"}')
		},
		"./src/graphql/operations/UpdatePredictionTournament.json": function(e) {
			e.exports = JSON.parse('{"id":"6ce5e93d21f5"}')
		},
		"./src/graphql/operations/VotePrediction.json": function(e) {
			e.exports = JSON.parse('{"id":"1712829dfb21"}')
		},
		"./src/reddit/actions/economics/predictions/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return v
			})), n.d(t, "h", (function() {
				return k
			})), n.d(t, "k", (function() {
				return P
			})), n.d(t, "j", (function() {
				return _
			})), n.d(t, "g", (function() {
				return E
			})), n.d(t, "b", (function() {
				return I
			})), n.d(t, "l", (function() {
				return T
			})), n.d(t, "m", (function() {
				return S
			})), n.d(t, "c", (function() {
				return N
			})), n.d(t, "a", (function() {
				return q
			})), n.d(t, "n", (function() {
				return F
			})), n.d(t, "i", (function() {
				return B
			})), n.d(t, "d", (function() {
				return L
			})), n.d(t, "e", (function() {
				return D
			}));
			var r = n("./node_modules/uuid/index.js"),
				o = n.n(r),
				i = n("./src/lib/initializeClient/installReducer.ts"),
				a = n("./src/reddit/reducers/features/predictions/index.ts"),
				c = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/endpoints/economics/predictions.ts"),
				d = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				u = n("./src/reddit/models/Prediction/index.ts"),
				l = n("./src/reddit/selectors/experiments/econ/predictions.ts"),
				p = n("./src/reddit/selectors/posts.ts"),
				m = n("./src/reddit/selectors/subreddit.ts"),
				b = n("./src/reddit/selectors/user.ts"),
				f = n("./src/reddit/selectors/features/predictions/creation/index.ts"),
				h = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				j = n("./src/reddit/actions/economics/predictions/constants.ts");
			Object(i.a)({
				features: {
					predictions: a.a
				}
			});
			const O = Object(c.a)(j.d),
				g = Object(c.a)(j.h),
				x = Object(c.a)(j.g),
				v = (e, t, n, r) => async (o, i, {
					gqlContext: a
				}) => {
					const c = Object(b.K)(i()),
						d = await Object(s.h)(a(), {
							subredditId: e,
							period: t,
							top: n,
							includeCurrentRank: c,
							tournamentId: r
						});
					if (d.error || !d.ok) throw new Error("Failed to fetch subreddit top predictors");
					const {
						subredditInfoById: u
					} = d.body.data;
					if (!u || !u.predictionWinners) throw new Error("Subreddit has no prediction winners");
					const {
						predictionWinners: l
					} = u, p = {
						subredditId: e,
						...l
					};
					return o(O(p)), p
				}, k = e => async (t, n, {
					gqlContext: r
				}) => {
					const o = n(),
						i = Object(p.R)(o, {
							postId: e,
							disallowProfile: !0
						});
					if (!i) throw new Error("Post does not belong to a subreddit");
					const a = await Object(s.f)(r(), i.name, Object(l.c)(o));
					if (a.error || !a.ok) throw new Error("Failed to fetch coin packs");
					const {
						subredditInfoByName: c
					} = a.body.data;
					if (!c || !c.predictionCoinPackages.length) throw new Error("Subreddit has no coin packs");
					return c.predictionCoinPackages
				}, P = ({
					coinPackageId: e,
					optionId: t,
					postId: n,
					price: r
				}) => async (o, i, {
					gqlContext: a
				}) => {
					const c = await Object(s.l)(a(), {
						coinPackageId: e,
						optionId: t,
						postId: n,
						price: r
					});
					if (c.error || !c.ok) throw new Error("Failed to make prediction");
					const {
						votePrediction: d
					} = c.body.data;
					if (!d) throw new Error("Failed to create prediction vote");
					return o(g({
						pollId: n,
						prediction: d.poll,
						price: r
					})), d.poll
				}, _ = ({
					optionId: e,
					postId: t
				}) => async (n, r, {
					gqlContext: o
				}) => {
					const i = await Object(s.j)(o(), {
							optionId: e,
							postId: t
						}),
						{
							resolvePrediction: a
						} = i.body.data;
					if (!(null == a ? void 0 : a.poll)) throw new Error("Failed to resolve prediction");
					return n(x({
						pollId: t,
						prediction: a.poll
					})), a.poll
				}, y = Object(c.a)(j.b), w = Object(c.a)(j.c), C = Object(c.a)(j.f), E = e => async (t, n, {
					gqlContext: r
				}) => {
					const o = n(),
						i = Object(m.F)(o, e);
					if (Object(h.i)(o, {
							subredditId: i
						})) return Object(h.e)(o, {
						subredditId: i
					});
					t(y({
						subredditId: i
					}));
					const a = await Object(s.i)(r(), {
						subredditName: e,
						isLatestOnly: !0,
						isIncludingPredictions: !0,
						isIncludingParticipants: !0
					});
					if (a.error || !a.ok) throw new Error("Failed to fetch tournaments");
					const {
						subredditInfoByName: c
					} = a.body.data;
					if (!c.predictionTournaments) return [];
					const u = c.predictionTournaments.map(e => {
							var t, n;
							const r = null !== (n = null === (t = e.predictionPosts) || void 0 === t ? void 0 : t.map(e => {
								const t = Object(d.e)(e),
									n = t.pollData;
								return {
									...t,
									pollData: n
								}
							})) && void 0 !== n ? n : [];
							return {
								...e,
								predictionPosts: r
							}
						}),
						l = u.reduce((e, t) => (t.predictionPosts.length && t.predictionPosts.forEach(t => {
							e[t.id] = t
						}), e), {});
					return t(w({
						subredditId: i,
						tournaments: u
					})), t(C({
						posts: l,
						meta: o.meta
					})), u
				}, I = Object(c.a)(j.a), T = Object(c.a)(j.i), S = Object(c.a)(j.j), N = ({
					subredditId: e
				}) => async (t, n, {
					gqlContext: r
				}) => {
					const o = n(),
						i = Object(f.b)(o),
						a = Object(l.a)(o);
					if (!i) throw new Error("Failed to create tournament, no prediction drafts attached");
					const c = await Object(s.c)(r(), {
							name: "Predictions Tournament",
							isStartImmediately: !0,
							subredditId: e,
							predictionDrafts: i,
							currency: a ? u.a.Coins : u.a.Tokens
						}),
						{
							createPredictionTournament: d
						} = c.body.data;
					if (!(null == d ? void 0 : d.tournament)) throw new Error("Failed to resolve prediction");
					const {
						tournament: p
					} = d;
					return t(w({
						subredditId: e,
						tournaments: [p]
					})), p
				}, q = (e, t) => async (n, r, {
					gqlContext: i
				}) => {
					var a;
					const c = Object(f.b)(r());
					if (!c) throw new Error("Failed to create prediction post, no prediction drafts attached");
					const d = await Object(s.b)(i(), {
							tournamentId: e,
							isStartImmediately: !0,
							iKey: `add-dfts-${o.a.v4()}`,
							subredditId: t,
							predictionDrafts: c
						}),
						{
							addPredictionDrafts: u
						} = d.body.data;
					if (null === (a = u.errors) || void 0 === a ? void 0 : a.length) throw new Error(u.errors[0].message);
					if (!(null == u ? void 0 : u.tournament)) throw new Error("Failed to create prediction");
					return u.tournament
				}, A = Object(c.a)(j.k), F = (e, t, n) => async (r, o, {
					gqlContext: i
				}) => {
					const a = await Object(s.k)(i(), {
							tournamentId: e,
							name: n
						}),
						{
							updatePredictionTournament: c
						} = a.body.data;
					if (!c.tournament) throw new Error("Failed to update prediction name");
					return r(A({
						subredditId: t,
						tournament: c.tournament
					})), c.tournament
				}, B = (e, t) => async (n, r, {
					gqlContext: o
				}) => {
					const i = await Object(s.d)(o(), {
							tournamentId: e
						}),
						{
							endPredictionTournament: a
						} = i.body.data;
					if (!a.tournament) throw new Error("Failed to update prediction name");
					return n(A({
						subredditId: t,
						tournament: a.tournament
					})), a.tournament
				}, L = e => async (t, n, {
					gqlContext: r
				}) => {
					const o = await Object(s.e)(r(), {
						postId: e
					});
					if (!o.ok || o.error) throw new Error("Failed to fetch prediction chip packages");
					const {
						postInfoById: i
					} = o.body.data;
					if (!i.predictionChipPackages) throw new Error("Failed to fetch prediction chip packages");
					return i.predictionChipPackages
				}, D = e => async (t, n, {
					gqlContext: r
				}) => {
					const o = await Object(s.g)(r(), {
						tournamentId: e
					});
					if (!o.ok || o.error) throw new Error("Failed to fetch token balance");
					const {
						identity: i
					} = o.body.data;
					if (!i.hasOwnProperty("predictionTokens")) throw new Error("Failed to fetch token balance");
					return i.predictionTokens
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
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./src/higherOrderComponents/asModal/index.tsx"),
				a = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = n("./src/reddit/constants/keycodes.ts"),
				s = n("./src/reddit/controls/Button/index.tsx"),
				d = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				u = n("./src/reddit/controls/TextButton/index.tsx"),
				l = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				p = n("./src/reddit/components/PostCreationForm/Prompt/PromptModal.m.less"),
				m = n.n(p),
				b = n("./src/lib/lessComponent.tsx");
			const f = b.a.wrapped(s.i, "PrimaryButton", m.a),
				h = b.a.wrapped(a.o, "ModalText", m.a);
			class j extends o.a.PureComponent {
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
					return o.a.createElement(a.d, null, o.a.createElement(a.h, null, o.a.createElement(l.a, null, o.a.createElement(a.p, null, this.props.titleText), o.a.createElement(u.a, {
						onClick: this.props.onClose
					}, o.a.createElement(a.b, null)))), o.a.createElement(a.k, null, o.a.createElement(h, null, this.props.bodyText)), o.a.createElement(a.f, null, o.a.createElement(a.a, {
						onClick: this.props.onSecondaryAction
					}, t ? o.a.createElement(d.a, {
						sizePx: 16
					}) : this.props.secondaryButtonText), o.a.createElement(f, {
						onClick: this.props.onPrimaryAction
					}, e ? o.a.createElement(d.a, {
						sizePx: 16
					}) : this.props.primaryButtonText)))
				}
			}
			t.a = Object(i.a)(j)
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
				return v
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				s = n("./src/reddit/actions/economics/predictions/index.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				p = n("./src/reddit/helpers/trackers/predictions.ts"),
				m = n("./src/reddit/hooks/useTracking.ts"),
				b = n("./src/reddit/models/Toast/index.ts"),
				f = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				h = n("./src/reddit/components/PostCreationForm/Prompt/PromptModal.tsx");

			function j({
				isEnding: e,
				onClose: t,
				onConfirm: n
			}) {
				return i.a.createElement(h.a, {
					titleText: r.fbt._("End tournament?", null, {
						hk: "SHmTx"
					}),
					bodyText: r.fbt._("Are you sure you want to end the tournament? Once a tournament has ended, it cannot be restarted again. Ending the tournament also closes the community ‘Tournament’ tab.", null, {
						hk: "fqqXg"
					}),
					onClose: t,
					primaryButtonLoading: e,
					primaryButtonText: r.fbt._("End Tournament", null, {
						hk: "SUDS2"
					}),
					onPrimaryAction: n,
					onSecondaryAction: t,
					secondaryButtonText: r.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})
				})
			}
			var O = n("./src/reddit/components/SubredditContent/PredictionsContent/index.m.less"),
				g = n.n(O);
			const x = 90;

			function v({
				subreddit: e
			}) {
				const t = Object(a.d)(),
					n = Object(m.a)(),
					[h, O] = Object(o.useState)(""),
					[v, k] = Object(o.useState)(!1),
					[P, _] = Object(o.useState)(!1),
					[y, w] = Object(o.useState)(!1),
					[C, E] = Object(o.useState)(null),
					I = Object(a.e)(t => Object(f.a)(t, {
						subredditId: e.id
					})),
					T = Object(a.e)(t => Object(f.i)(t, {
						subredditId: e.id
					})),
					S = Object(a.e)(t => Object(f.f)(t, {
						subredditId: e.id
					}));
				Object(o.useEffect)(() => {
					n(Object(p.t)())
				}, [n]), Object(o.useEffect)(() => {
					t(Object(s.g)(e.name))
				}, [t, e.name]), Object(o.useEffect)(() => {
					I && (O(I.name), E(x - I.name.length))
				}, [I]);
				const N = Object(o.useCallback)(() => {
						n(Object(p.c)()), w(!0)
					}, [n]),
					q = !!h && ((null == I ? void 0 : I.name) !== h && h.length > 3);
				return i.a.createElement("div", {
					className: g.a.predictionsContent
				}, i.a.createElement("h1", {
					className: g.a.heading
				}, r.fbt._("Predictions", null, {
					hk: "1SloUh"
				})), i.a.createElement("div", {
					className: g.a.controls
				}, i.a.createElement("div", {
					className: g.a.section
				}, i.a.createElement("label", {
					className: g.a.label,
					htmlFor: "tournament-name"
				}, r.fbt._("Tournament name", null, {
					hk: "1ZAVPf"
				})), i.a.createElement("input", {
					name: "tournament-name",
					className: g.a.input,
					disabled: !I || T,
					type: "text",
					value: h,
					onChange: e => {
						const {
							value: t
						} = e.target;
						t.length <= x && (O(t), E(x - t.length))
					},
					placeholder: r.fbt._("/r/{subredditName} tournament", [r.fbt._param("subredditName", e.name)], {
						hk: "bN9XA"
					})
				}), i.a.createElement("div", {
					className: Object(c.a)(g.a.remainingCharacters, {
						[g.a.maxCharacters]: (null == h ? void 0 : h.length) === x
					})
				}, I && I.name !== h && null !== C ? r.fbt._({
					"*": "{remaining characters} characters remaining",
					_1: "1 character remaining"
				}, [r.fbt._plural(C, "remaining characters")], {
					hk: "1dBRgv"
				}) : i.a.createElement(i.a.Fragment, null, " ")), i.a.createElement(u.i, {
					className: g.a.button,
					disabled: !h || !I || T || !q,
					onClick: async () => {
						if (!I || !h) return null;
						n(Object(p.h)()), k(!0);
						try {
							await t(Object(s.n)(I.tournamentId, e.id, h))
						} catch (o) {
							t(Object(d.f)({
								kind: b.b.Error,
								text: r.fbt._("Failed to update tournament name, please try again later", null, {
									hk: "3bx78u"
								})
							}))
						}
						k(!1)
					}
				}, v ? i.a.createElement(l.a, {
					sizePx: 16
				}) : r.fbt._("Rename", null, {
					hk: "4z2EPS"
				}))), i.a.createElement("div", null, i.a.createElement("label", {
					className: g.a.label
				}, r.fbt._("End tournament", null, {
					hk: "ZWlOH"
				})), i.a.createElement("p", {
					className: g.a.endConditions
				}, r.fbt._("Tournament can only be ended after its predictions are ended and resolved", null, {
					hk: "2AgZtm"
				})), i.a.createElement(u.i, {
					className: g.a.button,
					disabled: !I || !S || T,
					onClick: N
				}, r.fbt._("End", null, {
					hk: "HWN7f"
				})), y && i.a.createElement(j, {
					isEnding: P,
					onClose: () => {
						w(!1)
					},
					onConfirm: async () => {
						if (!I || !S) return null;
						_(!0);
						try {
							await t(Object(s.i)(I.tournamentId, e.id))
						} catch (n) {
							t(Object(d.f)({
								kind: b.b.Error,
								text: r.fbt._("Failed to end tournament, please try again later", null, {
									hk: "2huCGU"
								})
							}))
						}
						_(!1), w(!1)
					}
				}))))
			}
		},
		"./src/reddit/endpoints/economics/predictions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return f
			})), n.d(t, "l", (function() {
				return h
			})), n.d(t, "j", (function() {
				return j
			})), n.d(t, "a", (function() {
				return O
			})), n.d(t, "h", (function() {
				return g
			})), n.d(t, "c", (function() {
				return x
			})), n.d(t, "i", (function() {
				return v
			})), n.d(t, "b", (function() {
				return k
			})), n.d(t, "k", (function() {
				return P
			})), n.d(t, "d", (function() {
				return _
			})), n.d(t, "e", (function() {
				return y
			})), n.d(t, "g", (function() {
				return w
			}));
			var r = n("./src/lib/makeGqlRequest/index.ts"),
				o = n("./src/graphql/operations/AddPredictionDrafts.json"),
				i = n("./src/graphql/operations/CreatePredictionTournament.json"),
				a = n("./src/graphql/operations/EndPredictionTournament.json"),
				c = n("./src/graphql/operations/GetPredictionChipPackages.json"),
				s = n("./src/graphql/operations/GetPredictionCoinPackages.json"),
				d = n("./src/graphql/operations/GetPredictionToken.json"),
				u = n("./src/graphql/operations/GetTournaments.json"),
				l = n("./src/graphql/operations/ResolvePrediction.json"),
				p = n("./src/graphql/operations/SubredditTopPredictors.json"),
				m = n("./src/graphql/operations/UpdatePredictionTournament.json"),
				b = n("./src/graphql/operations/VotePrediction.json");
			const f = (e, t, n) => Object(r.a)(e, {
					...s,
					variables: {
						subredditName: t,
						includeFreePackage: n
					}
				}),
				h = (e, {
					postId: t,
					optionId: n,
					coinPackageId: o,
					price: i
				}) => Object(r.a)(e, {
					...b,
					variables: {
						input: {
							postId: t,
							optionId: n,
							coinPackageId: o,
							price: i
						}
					}
				}),
				j = (e, {
					postId: t,
					optionId: n
				}) => Object(r.a)(e, {
					...l,
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
					top: o,
					includeCurrentRank: i,
					tournamentId: a
				}) => Object(r.a)(e, {
					...p,
					variables: {
						subredditId: t,
						period: n,
						top: o,
						includeCurrentRank: i,
						tournamentId: a
					}
				}),
				x = (e, t) => Object(r.a)(e, {
					...i,
					variables: {
						input: t
					}
				}),
				v = (e, t) => Object(r.a)(e, {
					...u,
					variables: t
				}),
				k = (e, t) => Object(r.a)(e, {
					...o,
					variables: {
						input: t
					}
				}),
				P = (e, t) => Object(r.a)(e, {
					...m,
					variables: {
						input: t
					}
				}),
				_ = (e, t) => Object(r.a)(e, {
					...a,
					variables: {
						input: t
					}
				}),
				y = (e, t) => Object(r.a)(e, {
					...c,
					variables: t
				}),
				w = (e, t) => Object(r.a)(e, {
					...d,
					variables: t
				})
		},
		"./src/reddit/helpers/trackers/predictions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "o", (function() {
				return o
			})), n.d(t, "p", (function() {
				return i
			})), n.d(t, "q", (function() {
				return a
			})), n.d(t, "k", (function() {
				return c
			})), n.d(t, "s", (function() {
				return s
			})), n.d(t, "m", (function() {
				return d
			})), n.d(t, "n", (function() {
				return u
			})), n.d(t, "l", (function() {
				return l
			})), n.d(t, "a", (function() {
				return p
			})), n.d(t, "r", (function() {
				return m
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "u", (function() {
				return f
			})), n.d(t, "j", (function() {
				return h
			})), n.d(t, "w", (function() {
				return j
			})), n.d(t, "f", (function() {
				return O
			})), n.d(t, "v", (function() {
				return g
			})), n.d(t, "t", (function() {
				return x
			})), n.d(t, "c", (function() {
				return v
			})), n.d(t, "h", (function() {
				return k
			})), n.d(t, "e", (function() {
				return P
			})), n.d(t, "b", (function() {
				return _
			})), n.d(t, "i", (function() {
				return y
			})), n.d(t, "g", (function() {
				return w
			}));
			var r = n("./src/reddit/selectors/telemetry.ts");
			const o = e => ({
					...Object(r.defaults)(e),
					source: "poll",
					action: "select",
					noun: "poll_option"
				}),
				i = e => ({
					...Object(r.defaults)(e),
					source: "poll",
					action: "select",
					noun: "prediction_option"
				}),
				a = e => ({
					...Object(r.defaults)(e),
					source: "poll",
					action: "view",
					noun: "predict_info_modal"
				}),
				c = e => ({
					...Object(r.defaults)(e),
					source: "poll",
					action: "close",
					noun: "predict_info_modal"
				}),
				s = e => ({
					...Object(r.defaults)(e),
					source: "poll",
					action: "view",
					noun: "predict_option_modal"
				}),
				d = ({
					pollId: e,
					selectedNumberCoins: t,
					totalStakeAmount: n
				}) => o => ({
					...Object(r.defaults)(o),
					source: "poll",
					action: "confirm",
					noun: "predict",
					poll: Object(r.poll)(o, e, !1, void 0, t),
					goldPurchase: {
						numberCoins: n
					}
				}),
				u = ({
					pollId: e,
					selectedNumberTokens: t
				}) => n => ({
					...Object(r.defaults)(n),
					source: "poll",
					action: "confirm",
					noun: "predict",
					poll: Object(r.poll)(n, e, !1, void 0, void 0, t)
				}),
				l = ({
					pollId: e,
					selectedNumberCoins: t,
					selectedNumberTokens: n
				}) => o => ({
					...Object(r.defaults)(o),
					source: "poll",
					action: "close",
					noun: "prediction_modal",
					poll: Object(r.poll)(o, e, !1, t, n)
				}),
				p = e => ({
					...Object(r.defaults)(e),
					source: "poll",
					action: "click",
					noun: "add_coins"
				}),
				m = e => t => ({
					...Object(r.defaults)(t),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "predictions_leaderboard",
						reason: e ? "prediction_details" : "subreddit_header"
					}
				}),
				b = ({
					targetUserId: e
				}) => t => ({
					...Object(r.defaults)(t),
					source: "prediction",
					action: "click",
					noun: "leaderboard_profile",
					targetUser: {
						id: e
					}
				}),
				f = ({
					numberPredictionTokens: e,
					pollId: t
				}) => n => ({
					...Object(r.defaults)(n),
					source: "poll",
					action: "view",
					noun: "token_claim_modal",
					poll: Object(r.poll)(n, t, !1, void 0, void 0, e)
				}),
				h = ({
					pageType: e
				}) => t => ({
					...Object(r.defaults)(t),
					source: "prediction",
					action: "click",
					noun: "tournament",
					actionInfo: {
						pageType: e
					}
				}),
				j = () => e => ({
					...Object(r.defaults)(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "community",
						paneName: "predictions"
					}
				}),
				O = () => e => ({
					...Object(r.defaults)(e),
					source: "prediction",
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
				x = () => e => ({
					...Object(r.defaults)(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "mod_tool_predict"
					}
				}),
				v = () => e => ({
					...Object(r.defaults)(e),
					source: "mod_tool_predict",
					action: "click",
					noun: "end_tournament"
				}),
				k = () => e => ({
					...Object(r.defaults)(e),
					source: "mod_tool_predict",
					action: "click",
					noun: "rename_tournament"
				}),
				P = () => e => ({
					...Object(r.defaults)(e),
					source: "prediction",
					action: "click",
					noun: "next"
				}),
				_ = () => e => ({
					...Object(r.defaults)(e),
					source: "prediction",
					action: "click",
					noun: "add_more"
				}),
				y = () => e => ({
					...Object(r.defaults)(e),
					source: "prediction",
					action: "click",
					noun: "start_tournament"
				}),
				w = () => e => ({
					...Object(r.defaults)(e),
					source: "menu_links_bar",
					action: "click",
					noun: "predictions_tab"
				})
		},
		"./src/reddit/selectors/experiments/econ/predictions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return i
			})), n.d(t, "i", (function() {
				return a
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "g", (function() {
				return s
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "h", (function() {
				return u
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "a", (function() {
				return m
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const i = Object(o.a)(r.Cb),
				a = Object(o.a)(r.Fb),
				c = Object(o.a)(r.Ab),
				s = Object(o.a)(r.Db),
				d = Object(o.a)(r.Bb),
				u = Object(o.a)(r.Eb),
				l = Object(o.a)(r.Gb),
				p = Object(o.a)(r.ub),
				m = Object(o.a)(r.tb);
			Object(o.a)(r.vb)
		},
		"./src/reddit/selectors/features/predictions/creation/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
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
			const a = e => {
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
							a = {};
						return n.document ? a.richText = JSON.stringify({
							document: n.document
						}) : n.markdown && (a.markdown = n.markdown), {
							title: n.title,
							isLiveChat: n.isChatPost,
							isNsfw: n.isNSFW,
							isSpoiler: n.isSpoiler,
							votingEndsAt: r.endDate.toISOString(),
							body: a,
							options: o
						}
					}) : []
				},
				c = e => {
					var t, n;
					return !!(null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.predictions) || void 0 === n ? void 0 : n.creation.length)
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-SubredditContent-PredictionsContent.4f170560d6107c90e77c.js.map