// https://www.redditstatic.com/desktop2x/reddit-components-SubredditContent-PredictionsContent.9641674fcc79ef74438d.js
// Retrieved at 11/3/2021, 12:30:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-SubredditContent-PredictionsContent"], {
		"./src/reddit/components/Econ/Prediction/hooks/useTournamentsQuery.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				c = n("./node_modules/react-redux/es/index.js"),
				s = n("./src/reddit/actions/economics/predictions/index.ts"),
				a = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				i = n("./src/reddit/selectors/subreddit.ts");

			function d(e) {
				const t = Object(c.d)(),
					n = Object(c.e)(t => Object(i.Q)(t, {
						subredditId: e
					})),
					o = Object(c.e)(t => Object(a.h)(t, {
						subredditId: e
					})),
					d = Object(c.e)(t => Object(a.j)(t, {
						subredditId: e
					})),
					l = r.a.useCallback(() => {
						n.name && t(Object(s.l)(n.name))
					}, [n.name, t]);
				return r.a.useEffect(() => {
					d || o || l()
				}, [d, o, l]), {
					isFetching: d,
					fetch: l
				}
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
				c = n("./src/higherOrderComponents/asModal/index.tsx"),
				s = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				a = n("./src/reddit/constants/keycodes.ts"),
				i = n("./src/reddit/controls/Button/index.tsx"),
				d = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				l = n("./src/reddit/controls/TextButton/index.tsx"),
				u = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				m = n("./src/reddit/components/PostCreationForm/Prompt/PromptModal.m.less"),
				b = n.n(m),
				p = n("./src/lib/lessComponent.tsx");
			const f = p.a.wrapped(i.k, "PrimaryButton", b.a),
				_ = p.a.wrapped(s.p, "ModalText", b.a);
			class h extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.handleEscapeKey = e => {
						e.keyCode === a.a.Escape && this.props.onClose()
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
					return r.a.createElement(s.e, null, r.a.createElement(s.i, null, r.a.createElement(u.a, null, r.a.createElement(s.q, null, this.props.titleText), r.a.createElement(l.a, {
						onClick: this.props.onClose
					}, r.a.createElement(s.b, null)))), r.a.createElement(s.l, null, r.a.createElement(_, null, this.props.bodyText)), r.a.createElement(s.g, null, r.a.createElement(s.a, {
						onClick: this.props.onSecondaryAction
					}, t ? r.a.createElement(d.a, {
						sizePx: 16
					}) : this.props.secondaryButtonText), r.a.createElement(f, {
						onClick: this.props.onPrimaryAction
					}, e ? r.a.createElement(d.a, {
						sizePx: 16
					}) : this.props.primaryButtonText)))
				}
			}
			t.a = Object(c.a)(h)
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
				return A
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				c = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/actions/economics/predictions/index.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				l = n("./src/reddit/components/Econ/Prediction/hooks/useTournamentsQuery.ts"),
				u = n("./src/reddit/components/Settings/shared/Card/index.m.less"),
				m = n.n(u);

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const p = ({
					className: e,
					...t
				}) => c.a.createElement("div", b({
					className: Object(a.a)(m.a.card, e)
				}, t)),
				f = ({
					className: e,
					...t
				}) => c.a.createElement("h3", b({
					className: Object(a.a)(m.a.title, e)
				}, t));
			var _ = n("./src/reddit/controls/Button/index.tsx"),
				h = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				j = n("./src/reddit/helpers/trackers/predictions.ts"),
				O = n("./src/reddit/hooks/useTracking.ts"),
				x = n("./src/reddit/models/Toast/index.ts"),
				k = n("./src/reddit/selectors/experiments/econ/index.ts"),
				g = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				E = n("./src/reddit/components/PostCreationForm/Prompt/PromptModal.tsx");

			function y({
				isEnding: e,
				onClose: t,
				onConfirm: n
			}) {
				return c.a.createElement(E.a, {
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
			var C = n("./src/reddit/components/Settings/shared/Widgets.tsx"),
				v = n("./src/reddit/actions/subredditSettings.ts"),
				P = n("./src/reddit/selectors/subreddit.ts");
			const S = ({
				subredditId: e
			}) => {
				const t = Object(O.a)(),
					[n, r] = function(e, t) {
						const n = Object(s.d)(),
							o = Object(s.e)(t => Object(P.S)(t, e)),
							r = o ? Boolean(o[t]) : void 0;
						return [r, (o = !0) => {
							const c = {
								[t]: !r
							};
							n(Object(v.j)(e, c, void 0, o))
						}]
					}(e, "allowPredictionContributors");
				return void 0 === n ? null : c.a.createElement(p, null, c.a.createElement(f, null, o.fbt._("Predictions Submission Permissions", null, {
					hk: "3rjmMV"
				})), c.a.createElement(C.p, {
					on: n,
					onClick: () => {
						t(Object(j.c)(!n)), r()
					},
					label: o.fbt._("Allow Approved Users to Post / Resolve Predictions", null, {
						hk: "49inYc"
					}),
					subtext: o.fbt._('You can allow users who are not mods to post and resolve predictions. By selecting this option, you allow "Approved Users" to also post and resolve predictions.', null, {
						hk: "4CYzaA"
					})
				}))
			};
			var w = n("./src/reddit/components/SubredditContent/PredictionsContent/index.m.less"),
				T = n.n(w);
			const N = 90;

			function A({
				subreddit: e
			}) {
				const t = Object(s.d)(),
					n = Object(O.a)(),
					[u, m] = Object(r.useState)(""),
					[b, f] = Object(r.useState)(!1),
					[E, C] = Object(r.useState)(!1),
					[v, P] = Object(r.useState)(!1),
					[w, A] = Object(r.useState)(null);
				Object(l.a)(e.name);
				const I = Object(s.e)(k.o),
					B = Object(s.e)(t => Object(g.b)(t, {
						subredditId: e.id
					})),
					L = Object(s.e)(t => Object(g.j)(t, {
						subredditId: e.id
					})),
					M = Object(s.e)(t => Object(g.g)(t, {
						subredditId: e.id
					}));
				Object(r.useEffect)(() => {
					n(Object(j.w)())
				}, [n]), Object(r.useEffect)(() => {
					B && (m(B.name), A(N - B.name.length))
				}, [B]);
				const U = Object(r.useCallback)(() => {
						n(Object(j.d)()), P(!0)
					}, [n]),
					F = !!u && ((null == B ? void 0 : B.name) !== u && u.length > 3);
				return c.a.createElement("div", {
					className: T.a.predictionsContent
				}, c.a.createElement("h1", {
					className: T.a.heading
				}, o.fbt._("Predictions", null, {
					hk: "1SloUh"
				})), c.a.createElement(p, null, c.a.createElement("div", {
					className: T.a.section
				}, c.a.createElement("label", {
					className: T.a.label,
					htmlFor: "tournament-name"
				}, o.fbt._("Tournament name", null, {
					hk: "1ZAVPf"
				})), c.a.createElement("input", {
					name: "tournament-name",
					className: T.a.input,
					disabled: !B || L,
					type: "text",
					value: u,
					onChange: e => {
						const {
							value: t
						} = e.target;
						t.length <= N && (m(t), A(N - t.length))
					},
					placeholder: o.fbt._("/r/{subredditName} tournament", [o.fbt._param("subredditName", e.name)], {
						hk: "bN9XA"
					})
				}), c.a.createElement("div", {
					className: Object(a.a)(T.a.remainingCharacters, {
						[T.a.maxCharacters]: (null == u ? void 0 : u.length) === N
					})
				}, B && B.name !== u && null !== w ? o.fbt._({
					"*": "{remaining characters} characters remaining",
					_1: "1 character remaining"
				}, [o.fbt._plural(w, "remaining characters")], {
					hk: "1dBRgv"
				}) : c.a.createElement(c.a.Fragment, null, " ")), c.a.createElement(_.k, {
					className: T.a.button,
					disabled: !u || !B || L || !F,
					onClick: async () => {
						if (!B || !u) return null;
						n(Object(j.j)()), f(!0);
						try {
							await t(Object(i.v)(B.tournamentId, e.id, u))
						} catch (r) {
							t(Object(d.f)({
								kind: x.b.Error,
								text: o.fbt._("Failed to update tournament name, please try again later", null, {
									hk: "3bx78u"
								})
							}))
						}
						f(!1)
					}
				}, b ? c.a.createElement(h.a, {
					sizePx: 16
				}) : o.fbt._("Rename", null, {
					hk: "4z2EPS"
				}))), c.a.createElement("div", null, c.a.createElement("label", {
					className: T.a.label
				}, o.fbt._("End tournament", null, {
					hk: "ZWlOH"
				})), c.a.createElement("p", {
					className: T.a.endConditions
				}, o.fbt._("Tournament can only be ended after its predictions are ended and resolved", null, {
					hk: "2AgZtm"
				})), c.a.createElement(_.k, {
					className: T.a.button,
					disabled: !B || !M || L,
					onClick: U
				}, o.fbt._("End", null, {
					hk: "HWN7f"
				})), v && c.a.createElement(y, {
					isEnding: E,
					onClose: () => {
						P(!1)
					},
					onConfirm: async () => {
						if (!B || !M) return null;
						C(!0);
						try {
							await t(Object(i.o)(B.tournamentId))
						} catch (e) {
							t(Object(d.f)({
								kind: x.b.Error,
								text: o.fbt._("Failed to end tournament, please try again later", null, {
									hk: "2huCGU"
								})
							}))
						}
						C(!1), P(!1)
					}
				}))), I && c.a.createElement(S, {
					subredditId: e.id
				}))
			}
		},
		"./src/reddit/helpers/trackers/predictions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "q", (function() {
				return s
			})), n.d(t, "r", (function() {
				return a
			})), n.d(t, "s", (function() {
				return i
			})), n.d(t, "m", (function() {
				return d
			})), n.d(t, "v", (function() {
				return l
			})), n.d(t, "o", (function() {
				return u
			})), n.d(t, "p", (function() {
				return m
			})), n.d(t, "n", (function() {
				return b
			})), n.d(t, "a", (function() {
				return p
			})), n.d(t, "u", (function() {
				return f
			})), n.d(t, "f", (function() {
				return _
			})), n.d(t, "x", (function() {
				return h
			})), n.d(t, "l", (function() {
				return j
			})), n.d(t, "h", (function() {
				return O
			})), n.d(t, "y", (function() {
				return x
			})), n.d(t, "w", (function() {
				return k
			})), n.d(t, "d", (function() {
				return g
			})), n.d(t, "j", (function() {
				return E
			})), n.d(t, "c", (function() {
				return y
			})), n.d(t, "g", (function() {
				return C
			})), n.d(t, "b", (function() {
				return v
			})), n.d(t, "k", (function() {
				return P
			})), n.d(t, "i", (function() {
				return S
			})), n.d(t, "t", (function() {
				return w
			})), n.d(t, "e", (function() {
				return T
			}));
			var o = n("./src/reddit/models/Prediction/index.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const c = "poll",
				s = e => ({
					...Object(r.defaults)(e),
					source: c,
					action: "select",
					noun: "poll_option"
				}),
				a = e => ({
					...Object(r.defaults)(e),
					source: c,
					action: "select",
					noun: "prediction_option"
				}),
				i = e => ({
					...Object(r.defaults)(e),
					source: c,
					action: "view",
					noun: "predict_info_modal"
				}),
				d = e => ({
					...Object(r.defaults)(e),
					source: c,
					action: "close",
					noun: "predict_info_modal"
				}),
				l = e => ({
					...Object(r.defaults)(e),
					source: c,
					action: "view",
					noun: "predict_option_modal"
				}),
				u = ({
					pollId: e,
					selectedNumberCoins: t,
					totalStakeAmount: n
				}) => o => ({
					...Object(r.defaults)(o),
					source: c,
					action: "confirm",
					noun: "predict",
					poll: Object(r.poll)(o, e, !1, void 0, t),
					goldPurchase: {
						numberCoins: n
					}
				}),
				m = ({
					pollId: e,
					selectedNumberTokens: t
				}) => n => ({
					...Object(r.defaults)(n),
					source: c,
					action: "confirm",
					noun: "predict",
					poll: Object(r.poll)(n, e, !1, void 0, void 0, t)
				}),
				b = ({
					pollId: e,
					currency: t,
					amount: n
				}) => s => {
					const a = t === o.a.Coins ? n : void 0,
						i = t === o.a.Tokens ? n : void 0;
					return {
						...Object(r.defaults)(s),
						source: c,
						action: "close",
						noun: "prediction_modal",
						poll: Object(r.poll)(s, e, !1, a, i)
					}
				},
				p = e => ({
					...Object(r.defaults)(e),
					source: c,
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
				_ = ({
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
				h = ({
					numberPredictionTokens: e,
					pollId: t
				}) => n => ({
					...Object(r.defaults)(n),
					source: c,
					action: "view",
					noun: "token_claim_modal",
					poll: Object(r.poll)(n, t, !1, void 0, void 0, e)
				}),
				j = ({
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
				O = () => e => ({
					...Object(r.defaults)(e),
					source: "predictions",
					action: "click",
					noun: "leaderboard",
					actionInfo: {
						pageType: "community",
						paneName: "predictions"
					}
				}),
				x = () => e => ({
					...Object(r.defaults)(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "tournament_leaderboard",
						reason: "predictions_tab"
					}
				}),
				k = () => e => ({
					...Object(r.defaults)(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "mod_tool_predict"
					}
				}),
				g = () => e => ({
					...Object(r.defaults)(e),
					source: "mod_tool_predict",
					action: "click",
					noun: "end_tournament"
				}),
				E = () => e => ({
					...Object(r.defaults)(e),
					source: "mod_tool_predict",
					action: "click",
					noun: "rename_tournament"
				}),
				y = e => t => ({
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
					},
					subreddit: Object(r.subreddit)(t)
				}),
				C = () => e => ({
					...Object(r.defaults)(e),
					source: "predictions",
					action: "click",
					noun: "next"
				}),
				v = () => e => ({
					...Object(r.defaults)(e),
					source: "predictions",
					action: "click",
					noun: "add_more"
				}),
				P = () => e => ({
					...Object(r.defaults)(e),
					source: "predictions",
					action: "click",
					noun: "start_tournament"
				}),
				S = () => e => ({
					...Object(r.defaults)(e),
					source: "menu_links_bar",
					action: "click",
					noun: "predictions_tab"
				}),
				w = () => e => ({
					...Object(r.defaults)(e),
					source: "predictions_tab",
					action: "view",
					noun: "predictions_how_it_works",
					subreddit: Object(r.subreddit)(e)
				}),
				T = () => e => ({
					...Object(r.defaults)(e),
					source: "predictions_how_it_works",
					action: "click",
					noun: "learn_more",
					subreddit: Object(r.subreddit)(e)
				})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-SubredditContent-PredictionsContent.9641674fcc79ef74438d.js.map