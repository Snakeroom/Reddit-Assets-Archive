// https://www.redditstatic.com/desktop2x/reddit-components-SubredditContent-PredictionsContent.07e3fb6d9be871543ebb.js
// Retrieved at 9/12/2022, 2:10:03 PM by Reddit Dataminer v1.0.0
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
				i = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				a = n("./src/reddit/selectors/subreddit.ts");

			function d(e) {
				const t = Object(c.d)(),
					n = Object(c.e)(t => Object(a.V)(t, {
						subredditId: e
					})),
					o = Object(c.e)(t => Object(i.i)(t, {
						subredditId: e
					})),
					d = Object(c.e)(t => Object(i.k)(t, {
						subredditId: e
					})),
					l = r.a.useCallback(() => {
						n.name && t(Object(s.l)(n.name))
					}, [n.name, t]);
				return r.a.useEffect(() => {
					d || o || l()
				}, [d, o, l]), {
					isFetching: d,
					isFetched: o,
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
				i = n("./src/reddit/constants/keycodes.ts"),
				a = n("./src/reddit/controls/Button/index.tsx"),
				d = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				l = n("./src/reddit/controls/TextButton/index.tsx"),
				u = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				m = n("./src/reddit/components/PostCreationForm/Prompt/PromptModal.m.less"),
				b = n.n(m),
				p = n("./src/lib/lessComponent.tsx");
			const h = p.a.wrapped(a.l, "PrimaryButton", b.a),
				f = p.a.wrapped(s.p, "ModalText", b.a);
			class _ extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.handleEscapeKey = e => {
						e.keyCode === i.a.Escape && this.props.onClose()
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
					}, r.a.createElement(s.b, null)))), r.a.createElement(s.l, null, r.a.createElement(f, null, this.props.bodyText)), r.a.createElement(s.g, null, r.a.createElement(s.a, {
						onClick: this.props.onSecondaryAction
					}, t ? r.a.createElement(d.a, {
						sizePx: 16
					}) : this.props.secondaryButtonText), r.a.createElement(h, {
						onClick: this.props.onPrimaryAction
					}, e ? r.a.createElement(d.a, {
						sizePx: 16
					}) : this.props.primaryButtonText)))
				}
			}
			t.a = Object(c.a)(_)
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
				return N
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				c = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/actions/economics/predictions/index.ts"),
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
			const p = e => {
					let {
						className: t,
						...n
					} = e;
					return c.a.createElement("div", b({
						className: Object(i.a)(m.a.card, t)
					}, n))
				},
				h = e => {
					let {
						className: t,
						...n
					} = e;
					return c.a.createElement("h3", b({
						className: Object(i.a)(m.a.title, t)
					}, n))
				};
			var f = n("./src/reddit/controls/Button/index.tsx"),
				_ = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				j = n("./src/reddit/helpers/trackers/predictions.ts"),
				x = n("./src/reddit/hooks/useTracking.ts"),
				O = n("./src/reddit/models/Toast/index.ts"),
				k = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				E = n("./src/reddit/components/PostCreationForm/Prompt/PromptModal.tsx");

			function g(e) {
				let {
					isEnding: t,
					onClose: n,
					onConfirm: r
				} = e;
				return c.a.createElement(E.a, {
					titleText: o.fbt._("End Tournament?", null, {
						hk: "3tTAeq"
					}),
					bodyText: o.fbt._("Are you sure you want to end this Tournament? Once it's ended, you can't start it back up again.", null, {
						hk: "3DLUvL"
					}),
					onClose: n,
					primaryButtonLoading: t,
					primaryButtonText: o.fbt._("End", null, {
						hk: "15D68l"
					}),
					onPrimaryAction: r,
					onSecondaryAction: n,
					secondaryButtonText: o.fbt._("Cancel", null, {
						hk: "2TSLl5"
					}),
					withOverlay: !0,
					onOverlayClick: n
				})
			}
			var y = n("./src/reddit/components/Settings/shared/Widgets.tsx"),
				C = n("./src/reddit/actions/subredditSettings.ts"),
				v = n("./src/reddit/selectors/subreddit.ts");
			const P = e => {
				let {
					subredditId: t
				} = e;
				const n = Object(x.a)(),
					[r, i] = function(e, t) {
						const n = Object(s.d)(),
							o = Object(s.e)(t => Object(v.X)(t, e)),
							r = o ? Boolean(o[t]) : void 0;
						return [r, function() {
							let o = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
							const c = {
								[t]: !r
							};
							n(Object(C.j)(e, c, void 0, o))
						}]
					}(t, "allowPredictionContributors");
				return void 0 === r ? null : c.a.createElement(p, null, c.a.createElement(h, null, o.fbt._("Predictions Submission Permissions", null, {
					hk: "3rjmMV"
				})), c.a.createElement(y.p, {
					on: r,
					onClick: () => {
						n(Object(j.d)(!r)), i()
					},
					label: o.fbt._("Allow Approved Users to Post / Resolve Predictions", null, {
						hk: "49inYc"
					}),
					subtext: o.fbt._('You can allow users who are not mods to post and resolve predictions. By selecting this option, you allow "Approved Users" to also post and resolve predictions.', null, {
						hk: "4CYzaA"
					})
				}))
			};
			var S = n("./src/reddit/components/SubredditContent/PredictionsContent/index.m.less"),
				w = n.n(S);
			const A = 90;

			function N(e) {
				let {
					subreddit: t
				} = e;
				const n = Object(s.d)(),
					u = Object(x.a)(),
					[m, b] = Object(r.useState)(""),
					[h, E] = Object(r.useState)(!1),
					[y, C] = Object(r.useState)(!1),
					[v, S] = Object(r.useState)(!1),
					[N, T] = Object(r.useState)(null),
					{
						isFetching: I
					} = Object(l.a)(t.name),
					B = Object(s.e)(e => Object(k.b)(e, {
						subredditId: t.id
					})),
					L = Object(s.e)(e => Object(k.h)(e, {
						subredditId: t.id
					}));
				Object(r.useEffect)(() => {
					u(Object(j.t)())
				}, [u]), Object(r.useEffect)(() => {
					B && (b(B.name), T(A - B.name.length))
				}, [B]);
				const F = Object(r.useCallback)(() => {
						u(Object(j.e)()), S(!0)
					}, [u]),
					M = !!m && ((null == B ? void 0 : B.name) !== m && m.length > 3);
				return c.a.createElement("div", {
					className: w.a.predictionsContent
				}, c.a.createElement("h1", {
					className: w.a.heading
				}, o.fbt._("Predictions", null, {
					hk: "1SloUh"
				})), c.a.createElement(p, null, c.a.createElement("div", {
					className: w.a.section
				}, c.a.createElement("label", {
					className: w.a.label,
					htmlFor: "tournament-name"
				}, o.fbt._("Tournament name", null, {
					hk: "1ZAVPf"
				})), c.a.createElement("input", {
					name: "tournament-name",
					className: w.a.input,
					disabled: !B || I,
					type: "text",
					value: m,
					onChange: e => {
						const {
							value: t
						} = e.target;
						t.length <= A && (b(t), T(A - t.length))
					},
					placeholder: o.fbt._("/r/{subredditName} tournament", [o.fbt._param("subredditName", t.name)], {
						hk: "bN9XA"
					})
				}), c.a.createElement("div", {
					className: Object(i.a)(w.a.remainingCharacters, {
						[w.a.maxCharacters]: (null == m ? void 0 : m.length) === A
					})
				}, B && B.name !== m && null !== N ? o.fbt._({
					"*": "{remaining characters} characters remaining",
					_1: "1 character remaining"
				}, [o.fbt._plural(N, "remaining characters")], {
					hk: "1dBRgv"
				}) : c.a.createElement(c.a.Fragment, null, " ")), c.a.createElement(f.l, {
					className: w.a.button,
					disabled: !m || !B || I || !M,
					onClick: async () => {
						if (!B || !m) return null;
						u(Object(j.j)()), E(!0);
						try {
							await n(Object(a.w)(B.tournamentId, t.id, m))
						} catch (e) {
							n(Object(d.f)({
								kind: O.b.Error,
								text: o.fbt._("Failed to update tournament name, please try again later", null, {
									hk: "3bx78u"
								})
							}))
						}
						E(!1)
					}
				}, h ? c.a.createElement(_.a, {
					sizePx: 16
				}) : o.fbt._("Rename", null, {
					hk: "4z2EPS"
				}))), c.a.createElement("div", null, c.a.createElement("label", {
					className: w.a.label
				}, o.fbt._("End tournament", null, {
					hk: "ZWlOH"
				})), c.a.createElement("p", {
					className: w.a.endConditions
				}, o.fbt._("Tournament can only be ended after its predictions are ended and resolved", null, {
					hk: "2AgZtm"
				})), c.a.createElement(f.l, {
					className: w.a.button,
					disabled: !B || !L || I,
					onClick: F
				}, o.fbt._("End", null, {
					hk: "HWN7f"
				})), v && c.a.createElement(g, {
					isEnding: y,
					onClose: () => {
						S(!1)
					},
					onConfirm: async () => {
						if (!B || !L) return null;
						C(!0);
						try {
							await n(Object(a.p)(B.tournamentId))
						} catch (e) {
							n(Object(d.f)({
								kind: O.b.Error,
								text: o.fbt._("Failed to end tournament, please try again later", null, {
									hk: "2huCGU"
								})
							}))
						}
						C(!1), S(!1)
					}
				}))), c.a.createElement(P, {
					subredditId: t.id
				}))
			}
		},
		"./src/reddit/helpers/trackers/predictions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "p", (function() {
				return i
			})), n.d(t, "q", (function() {
				return a
			})), n.d(t, "s", (function() {
				return d
			})), n.d(t, "n", (function() {
				return l
			})), n.d(t, "o", (function() {
				return u
			})), n.d(t, "m", (function() {
				return m
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "g", (function() {
				return p
			})), n.d(t, "l", (function() {
				return h
			})), n.d(t, "t", (function() {
				return f
			})), n.d(t, "e", (function() {
				return _
			})), n.d(t, "j", (function() {
				return j
			})), n.d(t, "d", (function() {
				return x
			})), n.d(t, "h", (function() {
				return O
			})), n.d(t, "c", (function() {
				return k
			})), n.d(t, "k", (function() {
				return E
			})), n.d(t, "i", (function() {
				return g
			})), n.d(t, "r", (function() {
				return y
			})), n.d(t, "f", (function() {
				return C
			}));
			var o = n("./src/reddit/models/Prediction/index.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const c = "poll",
				s = "predictions",
				i = e => ({
					...Object(r.n)(e),
					source: c,
					action: "select",
					noun: "poll_option"
				}),
				a = e => ({
					...Object(r.n)(e),
					source: c,
					action: "select",
					noun: "prediction_option"
				}),
				d = e => ({
					...Object(r.n)(e),
					source: c,
					action: "view",
					noun: "predict_option_modal"
				}),
				l = e => {
					let {
						pollId: t,
						selectedNumberCoins: n,
						totalStakeAmount: o
					} = e;
					return e => ({
						...Object(r.n)(e),
						source: c,
						action: "confirm",
						noun: "predict",
						poll: Object(r.I)(e, t, !1, void 0, n),
						goldPurchase: {
							numberCoins: o
						}
					})
				},
				u = e => {
					let {
						pollId: t,
						selectedNumberTokens: n
					} = e;
					return e => ({
						...Object(r.n)(e),
						source: c,
						action: "confirm",
						noun: "predict",
						poll: Object(r.I)(e, t, !1, void 0, void 0, n)
					})
				},
				m = e => {
					let {
						pollId: t,
						currency: n,
						amount: s
					} = e;
					return e => {
						const i = n === o.a.Coins ? s : void 0,
							a = n === o.a.Tokens ? s : void 0;
						return {
							...Object(r.n)(e),
							source: c,
							action: "close",
							noun: "prediction_modal",
							poll: Object(r.I)(e, t, !1, i, a)
						}
					}
				},
				b = e => ({
					...Object(r.n)(e),
					source: c,
					action: "click",
					noun: "add_coins"
				}),
				p = e => {
					let {
						targetUserId: t
					} = e;
					return e => ({
						...Object(r.n)(e),
						source: s,
						action: "click",
						noun: "leaderboard_profile",
						targetUser: {
							id: t
						}
					})
				},
				h = e => {
					let {
						pageType: t
					} = e;
					return e => ({
						...Object(r.n)(e),
						source: s,
						action: "click",
						noun: "tournament",
						actionInfo: {
							pageType: t
						}
					})
				},
				f = () => e => ({
					...Object(r.n)(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "mod_tool_predict"
					}
				}),
				_ = () => e => ({
					...Object(r.n)(e),
					source: "mod_tool_predict",
					action: "click",
					noun: "end_tournament"
				}),
				j = () => e => ({
					...Object(r.n)(e),
					source: "mod_tool_predict",
					action: "click",
					noun: "rename_tournament"
				}),
				x = e => t => ({
					...Object(r.n)(t),
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
					subreddit: Object(r.ib)(t)
				}),
				O = () => e => ({
					...Object(r.n)(e),
					source: s,
					action: "click",
					noun: "next"
				}),
				k = () => e => ({
					...Object(r.n)(e),
					source: s,
					action: "click",
					noun: "add_more"
				}),
				E = () => e => ({
					...Object(r.n)(e),
					source: s,
					action: "click",
					noun: "start_tournament"
				}),
				g = () => e => ({
					...Object(r.n)(e),
					source: "menu_links_bar",
					action: "click",
					noun: "predictions_tab"
				}),
				y = () => e => ({
					...Object(r.n)(e),
					source: "predictions_tab",
					action: "view",
					noun: "predictions_how_it_works",
					subreddit: Object(r.ib)(e)
				}),
				C = () => e => ({
					...Object(r.n)(e),
					source: "predictions_how_it_works",
					action: "click",
					noun: "learn_more",
					subreddit: Object(r.ib)(e)
				})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-SubredditContent-PredictionsContent.07e3fb6d9be871543ebb.js.map